#!/usr/bin/env node
/**
 * build-map.js — single source of truth for the URL restructure.
 *
 * Produces url-map.json: { "<oldPath>": "<newPath>", ... } for every URL that CHANGES.
 * Paths are normalized WITH leading + trailing slash (matches sitemap + frontmatter link style).
 *
 * Transformation rules ("Tools + unified Learn"):
 *   1. Every article MDX under content/{calculators,guides,data}/**  ->  /learn/{basename}/
 *   2. 5 tools nested under bucket hubs are promoted to /calculators/{tool}/
 *   3. 8 category hubs + 4 marquee hubs under /guides|/data  ->  /learn/{slug}/
 *   4. Section indexes /guides/ and /data/  ->  /learn/
 *   5. Everything else (40 top-level tools, 3 calc category hubs, blog, news,
 *      authors, /calculator/{lang}, root pages) is UNCHANGED and not in the map.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const CONTENT = path.join(ROOT, 'content');

const norm = (p) => {
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p += '/';
  return p.replace(/\/{2,}/g, '/');
};

// --- 1. Articles: every MDX under the three dissolving sections -> /learn/{basename}/
const ARTICLE_ROOTS = ['calculators', 'guides', 'data'];
function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (/\.mdx?$/.test(e.name)) out.push(full);
  }
  return out;
}

const map = {};
const newTargets = {}; // newPath -> [oldPath...] to detect collisions
const record = (oldP, newP) => {
  oldP = norm(oldP); newP = norm(newP);
  if (oldP === newP) return;
  if (map[oldP] && map[oldP] !== newP) {
    throw new Error(`Conflicting old path ${oldP}: ${map[oldP]} vs ${newP}`);
  }
  map[oldP] = newP;
  (newTargets[newP] ||= []).push(oldP);
};

const articleFiles = [];
for (const root of ARTICLE_ROOTS) {
  for (const f of walk(path.join(CONTENT, root))) {
    const rel = path.relative(CONTENT, f).replace(/\.mdx?$/, '');       // e.g. calculators/coins/foo
    const basename = path.basename(rel);                                 // foo
    record(`/${rel}/`, `/learn/${basename}/`);
    articleFiles.push({ file: f, rel, basename });
  }
}

// --- 2. Promoted tools (route pages, not content) ---
const PROMOTED_TOOLS = {
  '/calculators/earnings-revenue/live-earnings/': '/calculators/live-earnings/',
  '/calculators/commerce-ads/shop-profit/': '/calculators/shop-profit/',
  '/calculators/utility-tools/eligibility/': '/calculators/eligibility/',
  '/calculators/utility-tools/payout/': '/calculators/payout/',
  '/calculators/utility-tools/tax/': '/calculators/tax/',
};
for (const [o, n] of Object.entries(PROMOTED_TOOLS)) record(o, n);

// --- 3. Category + marquee hubs -> /learn/{slug}/ ---
const HUBS = {
  '/guides/business/': '/learn/business/',
  '/guides/growth/': '/learn/growth/',
  '/guides/monetization/': '/learn/monetization/',
  '/guides/niches/': '/learn/niches/',
  '/data/earnings/': '/learn/earnings/',
  '/data/engagement/': '/learn/engagement/',
  '/data/platform-comparisons/': '/learn/platform-comparisons/',
  '/data/reference/': '/learn/reference/',
  '/guides/best-shop-niches/': '/learn/best-shop-niches/',
  '/guides/monetization-calculator-hub/': '/learn/monetization-calculator-hub/',
  '/guides/tiktok-ads-hub/': '/learn/tiktok-ads-hub/',
  '/guides/tiktok-growth-hub/': '/learn/tiktok-growth-hub/',
};
for (const [o, n] of Object.entries(HUBS)) record(o, n);

// --- 4. Section indexes ---
record('/guides/', '/learn/');
record('/data/', '/learn/');

// --- Validate: new-path collisions (two different old pages -> same new page) ---
const collisions = Object.entries(newTargets).filter(([, olds]) => {
  // /learn/ (the index) legitimately receives both /guides/ and /data/
  if (olds.length < 2) return false;
  return true;
});
const badCollisions = collisions.filter(([n]) => n !== '/learn/');

console.log(`Articles mapped:        ${articleFiles.length}`);
console.log(`Promoted tools:         ${Object.keys(PROMOTED_TOOLS).length}`);
console.log(`Hubs relocated:         ${Object.keys(HUBS).length}`);
console.log(`Total URL changes:      ${Object.keys(map).length}`);
console.log(`New-path collisions:    ${badCollisions.length}`);
if (badCollisions.length) {
  for (const [n, olds] of badCollisions) console.error(`  COLLISION ${n} <= ${olds.join(', ')}`);
  process.exit(1);
}

const out = {
  generatedFrom: 'scripts/url-migration/build-map.js',
  redirects: map,                       // oldPath -> newPath (for firebase 301s + link rewrite)
  articleFiles: articleFiles.map(a => ({ from: path.relative(ROOT, a.file), slug: a.basename })),
  promotedTools: PROMOTED_TOOLS,
  hubs: HUBS,
};
fs.writeFileSync(path.join(__dirname, 'url-map.json'), JSON.stringify(out, null, 2));
console.log('\nWrote scripts/url-migration/url-map.json');
