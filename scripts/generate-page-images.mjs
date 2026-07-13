/**
 * Generate hero images from scripts/image-manifest.json via OpenAI gpt-image-1.
 * Idempotent: skips entries whose output PNG already exists.
 *
 * Usage:
 *   node scripts/generate-page-images.mjs                 # all pending
 *   node scripts/generate-page-images.mjs --sample 10     # N pending, round-robin across tiers
 *   node scripts/generate-page-images.mjs --limit 20      # first N pending
 *   node scripts/generate-page-images.mjs --only <slug>   # single entry (regenerates)
 *
 * Requires OPENAI_API_KEY in .env.local or environment.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SIZE = '1536x1024';
const QUALITY = 'medium';
const COST_PER_IMAGE = 0.063; // approx, gpt-image-1 medium 1536x1024
const CONCURRENCY = 3;
const MAX_RETRIES = 3;

const arg = (k) => {
  const i = process.argv.indexOf(`--${k}`);
  return i === -1 ? undefined : process.argv[i + 1] ?? true;
};

// load OPENAI_API_KEY from .env.local if not in env
if (!process.env.OPENAI_API_KEY) {
  const envPath = path.join(ROOT, '.env.local');
  if (fs.existsSync(envPath)) {
    const m = fs.readFileSync(envPath, 'utf8').match(/^OPENAI_API_KEY=(.+)$/m);
    if (m) process.env.OPENAI_API_KEY = m[1].trim();
  }
}
if (!process.env.OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY (env or .env.local)');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/image-manifest.json'), 'utf8'));

let queue;
const only = arg('only');
if (only) {
  queue = manifest.filter((e) => e.slug === only);
  if (!queue.length) { console.error(`No manifest entry for slug "${only}"`); process.exit(1); }
} else {
  queue = manifest.filter((e) => !fs.existsSync(path.join(ROOT, e.outFile)));
  const sample = Number(arg('sample'));
  if (sample) {
    // round-robin across tiers so the sample represents every page type
    const byTier = {};
    for (const e of queue) (byTier[e.tier] ||= []).push(e);
    const tiers = Object.values(byTier);
    const picked = [];
    for (let i = 0; picked.length < sample && tiers.some((t) => t.length); i++) {
      const t = tiers[i % tiers.length];
      if (t.length) picked.push(t.shift());
    }
    queue = picked;
  }
  const limit = Number(arg('limit'));
  if (limit) queue = queue.slice(0, limit);
}

console.log(`Generating ${queue.length} image(s) — est. cost $${(queue.length * COST_PER_IMAGE).toFixed(2)}`);

async function generate(entry, attempt = 1) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'gpt-image-1', prompt: entry.prompt, size: SIZE, quality: QUALITY, n: 1 }),
  });
  const data = await res.json();
  if (data.error) {
    const retriable = res.status === 429 || res.status >= 500;
    if (retriable && attempt < MAX_RETRIES) {
      const wait = attempt * 15000;
      console.warn(`  retry ${attempt} for ${entry.slug} in ${wait / 1000}s: ${data.error.message?.slice(0, 80)}`);
      await new Promise((r) => setTimeout(r, wait));
      return generate(entry, attempt + 1);
    }
    throw new Error(`${entry.slug}: ${data.error.message}`);
  }
  const outPath = path.join(ROOT, entry.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, Buffer.from(data.data[0].b64_json, 'base64'));
  return entry.outFile;
}

let done = 0;
const failed = [];
async function worker() {
  while (queue.length) {
    const entry = queue.shift();
    try {
      const f = await generate(entry);
      done++;
      console.log(`[${done}] ${f}`);
    } catch (err) {
      failed.push(entry.slug);
      console.error(`FAILED ${err.message}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log(`Done: ${done} generated, ${failed.length} failed${failed.length ? ': ' + failed.join(', ') : ''}`);
console.log(`Spent ≈ $${(done * COST_PER_IMAGE).toFixed(2)}`);
if (failed.length) process.exit(1);
