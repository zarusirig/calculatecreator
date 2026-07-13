/**
 * Build scripts/image-manifest.json — one entry per tier-1 page:
 *   { slug, tier, title, outFile, prompt, alt }
 *
 * Tiers: calculators (all), news articles (all), blog posts (all),
 *        top guides by priorityScore (GUIDE_LIMIT).
 *
 * Prompts follow the style contract in
 * docs/superpowers/specs/2026-07-13-ai-page-images-design.md:
 * photorealistic editorial, no people/faces/hands, no readable text.
 *
 * Usage: node scripts/build-image-manifest.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const GUIDE_LIMIT = 25;

const STYLE =
  'Photorealistic editorial photograph, high-end commercial stock quality, 35mm. ' +
  'Bright neutral palette with subtle cyan and pink accent lighting. ' +
  'Strictly no people, no faces, no hands, no body parts. ' +
  'Strictly no readable text, no letters, no numbers, no logos anywhere; ' +
  'any screens show only soft-blurred abstract charts and UI shapes.';

const SETTINGS = [
  'on a bright modern home-studio desk',
  'on a minimal white studio tabletop',
  'in a cozy creator corner with soft window daylight',
  'on a sleek desk with gentle accent lighting',
  'on a clean wooden table by a large window',
];

const ANGLES = [
  'shallow depth of field, crisp focus on the main subject',
  'top-down flatlay composition, evenly lit',
  'close-up with soft bokeh background',
  'eye-level wide desk scene with breathing room',
];

// topic keyword → scene props (first match wins, order matters)
const SCENES = [
  [/coin|diamond|gift/i, 'a smartphone beside neat stacks of golden coins and small gift boxes with gem-like ornaments'],
  [/live|stream/i, 'a phone mounted on a small tripod facing a glowing ring light, streaming setup with soft ambient glow'],
  [/engagement|comment|like|share|ratio/i, 'a smartphone showing a blurred analytics dashboard with abstract heart and chat icon shapes floating as soft UI elements'],
  [/shop|commerce|product|affiliate|gmv/i, 'small kraft parcel boxes, a handheld card reader and a smartphone staged like a small e-commerce flatlay'],
  [/money|earning|income|salary|paid|pay|rpm|revenue|monetiz|fund|reward/i, 'an open laptop with a blurred earnings chart, scattered dollar bills and coins beside a calculator and notebook'],
  [/tax|deduct|llc|insurance|legal|copyright|disclosure/i, 'neatly stacked paper documents, a pen, reading glasses and a calculator arranged on a desk'],
  [/brand|sponsor|deal|negotiat/i, 'a product flatlay with a closed leather folder, fountain pen and a smartphone, professional partnership mood'],
  [/follower|growth|viral|views|reach|algorithm/i, 'a smartphone on a stand displaying a blurred upward-trending line chart with soft glowing nodes'],
  [/posting|time|schedule|calendar/i, 'a desk calendar, an analog clock and a smartphone with a blurred scheduling grid'],
  [/ban|regulat|law|court|government/i, 'a smartphone lying beside a wooden gavel on a desk with official-looking blurred papers'],
  [/ai |ai-|avatar|feature|tool/i, 'a premium smartphone standing upright with abstract glowing holographic UI shapes hovering above the screen'],
  [/ad|cpm|budget|campaign/i, 'a laptop with a blurred ad-dashboard, sticky notes and a coffee cup on a marketing desk'],
  [/privacy|safety|age/i, 'a smartphone with a soft glowing shield shape on screen, padlock props beside it'],
  [/country|europe|global|international/i, 'a smartphone resting on a printed world map with small flag pins and soft daylight'],
];

const DEFAULT_SCENE =
  'a creator workspace with a smartphone on a mini tripod, ring light glow in the background and a laptop showing blurred charts';

const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);

function sceneFor(text) {
  for (const [re, scene] of SCENES) if (re.test(text)) return scene;
  return DEFAULT_SCENE;
}

function buildEntry(slug, tier, title, descr = '') {
  const key = `${tier}-${slug}`;
  const topicText = `${slug} ${title} ${descr}`;
  const scene = sceneFor(topicText);
  const setting = SETTINGS[hash(key) % SETTINGS.length];
  const angle = ANGLES[hash(slug) % ANGLES.length];
  const cleanTitle = title.replace(/\s*[—|–-]\s*.*$/, '').trim() || title;
  return {
    slug,
    tier,
    title,
    outFile: `public/featured/${slug}.png`,
    prompt: `${STYLE} Scene: ${scene}, ${setting}, ${angle}. Theme: ${cleanTitle}.`,
    alt: `${cleanTitle} — creator workspace scene illustrating the topic`,
  };
}

function extractTitle(tsx) {
  const m = tsx.match(/title:\s*(?:\{\s*absolute:\s*)?["'`](.+?)["'`]/s);
  return m ? m[1] : null;
}

function frontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*["']?(.*?)["']?\s*$/);
    if (kv) fm[kv[1]] = kv[2];
  }
  return fm;
}

function* walk(dir, filter) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) yield* walk(p, filter);
    else if (filter.test(f.name)) yield p;
  }
}

const entries = [];

// 1. Calculator pages (skip hub/index page)
for (const p of walk(path.join(ROOT, 'src/app/calculators'), /^page\.tsx$/)) {
  const rel = path.relative(path.join(ROOT, 'src/app/calculators'), path.dirname(p));
  if (!rel) continue; // hub page keeps existing hero
  const slug = rel.split(path.sep).pop();
  const title = extractTitle(fs.readFileSync(p, 'utf8'));
  if (title) entries.push(buildEntry(slug, 'calculator', title));
}

// 2. News article pages (skip index)
for (const p of walk(path.join(ROOT, 'src/app/news'), /^page\.tsx$/)) {
  const rel = path.relative(path.join(ROOT, 'src/app/news'), path.dirname(p));
  if (!rel) continue;
  const slug = rel.split(path.sep).pop();
  const title = extractTitle(fs.readFileSync(p, 'utf8'));
  if (title) entries.push(buildEntry(slug, 'news', title));
}

// 3. All blog posts
for (const p of walk(path.join(ROOT, 'content/blog'), /\.mdx$/)) {
  const fm = frontmatter(fs.readFileSync(p, 'utf8'));
  const slug = fm.slug || path.basename(p, '.mdx');
  if (fm.title) entries.push(buildEntry(slug, 'blog', fm.title, fm.metaDescription));
}

// 4. Top guides by priorityScore
const guides = [];
for (const p of walk(path.join(ROOT, 'content/guides'), /\.mdx$/)) {
  const fm = frontmatter(fs.readFileSync(p, 'utf8'));
  const slug = fm.slug || path.basename(p, '.mdx');
  if (fm.title) guides.push({ score: Number(fm.priorityScore) || 0, slug, fm, file: p });
}
guides.sort((a, b) => b.score - a.score);
for (const g of guides.slice(0, GUIDE_LIMIT)) {
  entries.push(buildEntry(g.slug, 'guide', g.fm.title, g.fm.metaDescription));
}

// de-dupe by slug (first tier wins)
const seen = new Set();
const unique = entries.filter((e) => (seen.has(e.slug) ? false : seen.add(e.slug)));

const out = path.join(ROOT, 'scripts/image-manifest.json');
fs.writeFileSync(out, JSON.stringify(unique, null, 2));
const byTier = unique.reduce((a, e) => ((a[e.tier] = (a[e.tier] || 0) + 1), a), {});
console.log(`Wrote ${unique.length} entries to ${path.relative(ROOT, out)}`, byTier);
