#!/usr/bin/env node
/**
 * Stage 1: move every article MDX from content/{calculators,guides,data}/**
 * to a flat content/learn/{slug}.mdx, then remove the emptied source dirs.
 * Uses `git mv` so history is preserved. Idempotent-ish: refuses on any collision.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const CONTENT = path.join(ROOT, 'content');
const LEARN = path.join(CONTENT, 'learn');
const map = require('./url-map.json');

fs.mkdirSync(LEARN, { recursive: true });

const seen = new Map();
let moved = 0;
for (const { from, slug } of map.articleFiles) {
  const src = path.join(ROOT, from);
  const ext = path.extname(from);              // .mdx or .md
  const dest = path.join(LEARN, `${slug}${ext}`);
  if (seen.has(slug)) throw new Error(`Slug collision: ${slug} (${from} vs ${seen.get(slug)})`);
  seen.set(slug, from);
  if (!fs.existsSync(src)) throw new Error(`Missing source: ${from}`);
  if (fs.existsSync(dest)) throw new Error(`Dest exists: ${dest}`);
  execFileSync('git', ['mv', src, dest], { cwd: ROOT });
  moved++;
}
console.log(`Moved ${moved} article files -> content/learn/`);

// Remove now-empty source section dirs
for (const dir of ['calculators', 'guides', 'data']) {
  const p = path.join(CONTENT, dir);
  if (!fs.existsSync(p)) continue;
  const remaining = [];
  (function scan(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) scan(full);
      else remaining.push(path.relative(CONTENT, full));
    }
  })(p);
  if (remaining.length) {
    console.error(`  WARN ${dir}/ still has files: ${remaining.join(', ')}`);
  } else {
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`  removed empty content/${dir}/`);
  }
}
console.log(`content/learn now has ${fs.readdirSync(LEARN).length} files`);
