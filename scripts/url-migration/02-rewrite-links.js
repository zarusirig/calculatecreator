#!/usr/bin/env node
/**
 * Stage 2: rewrite internal-link path strings using the explicit old->new map.
 * Matches a full old path with a right-boundary (quote/space/)/#/?/end), so a short
 * key like "/guides/" can never chew into a longer path like "/guides/growth/foo/".
 * Keys are applied longest-first. Trailing-slash presence in the source is preserved.
 *
 * Scope: content/**.mdx|md  and  src/**.ts|tsx  (NOT firebase.json — handled in stage 4).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const map = require('./url-map.json').redirects;

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const RIGHT_BOUNDARY = `(?=["'\\s)\\]}>#?\`,]|$)`;

// old (no trailing slash) -> new (no trailing slash), longest old first
const rules = Object.entries(map)
  .map(([o, n]) => [o.replace(/\/$/, ''), n.replace(/\/$/, '')])
  .sort((a, b) => b[0].length - a[0].length)
  .map(([o, n]) => ({ re: new RegExp(esc(o) + '(/?)' + RIGHT_BOUNDARY, 'g'), newBase: n }));

function collect(dir, exts, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collect(full, exts, acc);
    else if (exts.some((x) => e.name.endsWith(x))) acc.push(full);
  }
  return acc;
}

const files = [
  ...collect(path.join(ROOT, 'content'), ['.mdx', '.md']),
  ...collect(path.join(ROOT, 'src'), ['.ts', '.tsx']),
];

let filesChanged = 0, totalRepl = 0;
for (const f of files) {
  const before = fs.readFileSync(f, 'utf-8');
  let text = before;
  let count = 0;
  for (const r of rules) {
    text = text.replace(r.re, (_m, slash) => { count++; return r.newBase + slash; });
  }
  if (text !== before) { fs.writeFileSync(f, text); filesChanged++; totalRepl += count; }
}
console.log(`Rewrote ${totalRepl} link occurrences across ${filesChanged} files`);
