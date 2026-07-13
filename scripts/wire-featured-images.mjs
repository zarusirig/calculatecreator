/**
 * Wire generated hero images into pages. For each image-manifest.json entry
 * whose public/featured/<slug>.png exists:
 *
 *   blog/guide  → add featuredImage + imageAlt to MDX frontmatter
 *                 (ArticleLayout renders hero + schema; article-page.tsx uses og:image)
 *   news        → point the page's <picture> sources and NewsArticle schema
 *                 image at /featured/<slug>-*.{webp,avif}
 *   calculator  → set per-page openGraph image (replacing the shared
 *                 hero-dashboard og image, or inserting an openGraph block)
 *
 * Idempotent: skips files already referencing /featured/.
 * Run AFTER generate-page-images.mjs. Variants (-640/-1024/-1600 webp/avif)
 * are produced by scripts/optimize-images.js during `npm run build`.
 *
 * Usage: node scripts/wire-featured-images.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/image-manifest.json'), 'utf8'));

const escTsx = (s) => s.replace(/'/g, "\\'");
const escYaml = (s) => s.replace(/"/g, '\\"');

function* walk(dir, filter) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) yield* walk(p, filter);
    else if (filter.test(f.name)) yield p;
  }
}

// index mdx files by slug (frontmatter slug, else basename)
const mdxBySlug = {};
for (const section of ['content/blog', 'content/guides']) {
  for (const p of walk(path.join(ROOT, section), /\.mdx$/)) {
    const raw = fs.readFileSync(p, 'utf8');
    const m = raw.match(/^slug:\s*["']?([^"'\n]+)["']?\s*$/m);
    mdxBySlug[m ? m[1] : path.basename(p, '.mdx')] = p;
  }
}

// index calculator pages by leaf dir name
const calcBySlug = {};
for (const p of walk(path.join(ROOT, 'src/app/calculators'), /^page\.tsx$/)) {
  calcBySlug[path.basename(path.dirname(p))] = p;
}

const stats = { mdx: 0, news: 0, calcReplaced: 0, calcInserted: 0, skipped: 0, missing: [] };

for (const e of manifest) {
  if (!fs.existsSync(path.join(ROOT, e.outFile))) { stats.missing.push(e.slug); continue; }
  const featured1600 = `/featured/${e.slug}-1600.webp`;

  if (e.tier === 'blog' || e.tier === 'guide') {
    const p = mdxBySlug[e.slug];
    if (!p) { stats.missing.push(`${e.slug} (no mdx)`); continue; }
    let raw = fs.readFileSync(p, 'utf8');
    if (/^featuredImage:/m.test(raw)) { stats.skipped++; continue; }
    raw = raw.replace(/^---\n([\s\S]*?)\n---/, (_, fm) =>
      `---\n${fm}\nfeaturedImage: "${featured1600}"\nimageAlt: "${escYaml(e.alt)}"\n---`);
    fs.writeFileSync(p, raw);
    stats.mdx++;
  }

  if (e.tier === 'news') {
    const p = path.join(ROOT, 'src/app/news', e.slug, 'page.tsx');
    if (!fs.existsSync(p)) { stats.missing.push(`${e.slug} (no news page)`); continue; }
    let raw = fs.readFileSync(p, 'utf8');
    if (raw.includes('/featured/')) { stats.skipped++; continue; }
    raw = raw.replace(/\/news\/news-[a-z-]+?-(640|1024|1600)\.(webp|avif)/g, `/featured/${e.slug}-$1.$2`);
    fs.writeFileSync(p, raw);
    stats.news++;
  }

  if (e.tier === 'calculator') {
    const p = calcBySlug[e.slug];
    if (!p) { stats.missing.push(`${e.slug} (no calc page)`); continue; }
    let raw = fs.readFileSync(p, 'utf8');
    if (raw.includes('/featured/')) { stats.skipped++; continue; }
    const ogImage = `{ url: 'https://ttcalculator.net${featured1600}', width: 1600, height: 1067, alt: '${escTsx(e.alt)}' }`;
    const sharedOg = /\{ url: 'https:\/\/ttcalculator\.net\/home\/hero-dashboard-1600\.webp', width: 1200, height: 630, alt: 'TT Calculator' \}/;
    if (sharedOg.test(raw)) {
      raw = raw.replace(sharedOg, ogImage);
      stats.calcReplaced++;
    } else {
      const anchor = /(alternates: \{\n    canonical: '([^']+)',\n  \},)/;
      if (!anchor.test(raw)) { stats.missing.push(`${e.slug} (no og/anchor)`); continue; }
      raw = raw.replace(anchor, (_, block, canonical) =>
        `${block}\n  openGraph: {\n    url: '${canonical}',\n    type: 'website',\n    siteName: 'TT Calculator',\n    images: [${ogImage}],\n  },`);
      stats.calcInserted++;
    }
    fs.writeFileSync(p, raw);
  }
}

console.log(stats);
if (stats.missing.length) console.log('Unwired entries:', stats.missing.join(', '));
