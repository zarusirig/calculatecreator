#!/usr/bin/env node
/**
 * Stage 4: rebuild the app-site 301 redirect table in firebase.json.
 *   - add one redirect per URL change (oldPath -> newPath)
 *   - chain-flatten every existing redirect: repoint its destination THROUGH the map
 *     (repeatedly) so nothing points at a path that itself moved
 *   - drop self-redirects and any redirect whose source is now a live page
 * Sources use the existing "{,/}" optional-trailing-slash convention.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const FB = path.join(ROOT, 'firebase.json');
const map = require('./url-map.json').redirects; // oldPath(/) -> newPath(/)

const stripSlash = (p) => (p === '/' ? '/' : p.replace(/\/+$/, ''));
const norm = (p) => stripSlash(p.replace('{,/}', ''));
const toSource = (p) => `${stripSlash(p)}{,/}`;
const newLivePaths = new Set(Object.values(map).map(norm));

// follow the map to a fixed point (chain flattening). Map keys carry a trailing slash.
function resolve(dest) {
  const withSlash = (p) => (p.endsWith('/') ? p : p + '/');
  let cur = dest, guard = 0;
  while (map[withSlash(cur)] && guard++ < 10) cur = map[withSlash(cur)];
  return cur;
}

const fb = JSON.parse(fs.readFileSync(FB, 'utf-8'));
const app = fb.hosting.find((h) => h.target === 'app');
const bySource = new Map(); // normalizedSource -> {source, destination, type}

// 1. carry existing redirects forward, repointing destinations through the map
for (const r of app.redirects) {
  const dest = resolve(r.destination);
  bySource.set(norm(r.source), { source: r.source, destination: dest, type: r.type || 301 });
}

// 2. add/override with the authoritative new mappings
for (const [oldP, newP] of Object.entries(map)) {
  bySource.set(norm(oldP), { source: toSource(oldP), destination: newP, type: 301 });
}

// 3. filter: drop self-redirects and redirects that would shadow a live page
let dropped = 0;
const final = [];
for (const r of bySource.values()) {
  if (norm(r.source) === norm(r.destination)) { dropped++; continue; }
  if (newLivePaths.has(norm(r.source))) { dropped++; continue; } // source is now a live page
  final.push(r);
}

// stable order: longest source first (harmless; Firebase {,/} are exact, not prefix)
final.sort((a, b) => a.source.localeCompare(b.source));

const before = app.redirects.length;
app.redirects = final;
fs.writeFileSync(FB, JSON.stringify(fb, null, 2) + '\n');

console.log(`Existing redirects:   ${before}`);
console.log(`Map URL changes:      ${Object.keys(map).length}`);
console.log(`Dropped (self/shadow):${dropped}`);
console.log(`Final redirect count: ${final.length}`);
