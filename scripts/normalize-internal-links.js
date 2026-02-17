#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const FIREBASE_PATH = path.join(ROOT, 'firebase.json');

const isWrite = process.argv.includes('--write');
const isCheck = process.argv.includes('--check') || !isWrite;

function isLiteralInternalPath(route) {
  return typeof route === 'string' && route.startsWith('/') && !/[\\*:\\{\\(]/.test(route);
}

function expandOptionalSlash(source) {
  if (typeof source === 'string' && source.includes('{,/}')) {
    const base = source.replace('{,/}', '');
    return [base, `${base}/`];
  }
  return [source];
}

function loadRedirectMap() {
  if (!fs.existsSync(FIREBASE_PATH)) return new Map();

  const raw = fs.readFileSync(FIREBASE_PATH, 'utf-8');
  const json = JSON.parse(raw);
  const redirects = json?.hosting?.redirects || [];

  const map = new Map();
  for (const rule of redirects) {
    const destination = rule?.destination;
    if (!isLiteralInternalPath(destination)) continue;

    for (const source of expandOptionalSlash(rule?.source || '')) {
      if (!isLiteralInternalPath(source)) continue;
      map.set(source, destination);
    }
  }

  return map;
}

const redirectMap = loadRedirectMap();

function listMdxFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listMdxFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }
  return files;
}

function hasFileExtension(urlPath) {
  const last = urlPath.split('/').filter(Boolean).pop() || '';
  return last.includes('.');
}

function normalizeInternalPath(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return rawUrl;
  if (!rawUrl.startsWith('/') || rawUrl.startsWith('//')) return rawUrl;

  const match = rawUrl.match(/^([^?#]*)([?#].*)?$/);
  if (!match) return rawUrl;

  const pathPart = match[1];
  const suffix = match[2] || '';

  if (pathPart === '/') return rawUrl;
  if (hasFileExtension(pathPart)) return rawUrl;

  let normalizedPath = pathPart.endsWith('/') ? pathPart : `${pathPart}/`;

  // Resolve known legacy redirect sources to their final destinations.
  const maxHops = 10;
  for (let i = 0; i < maxHops; i += 1) {
    const mapped = redirectMap.get(normalizedPath);
    if (!mapped || mapped === normalizedPath) break;
    normalizedPath = mapped;
  }

  return `${normalizedPath}${suffix}`;
}

function normalizeMarkdownLinks(text, stats) {
  return text.replace(/(\]\()(\/[^)\s"']+)([^)]*\))/g, (match, open, url, close) => {
    const normalized = normalizeInternalPath(url);
    if (normalized !== url) {
      stats.markdownLinks += 1;
      return `${open}${normalized}${close}`;
    }
    return match;
  });
}

function normalizeHtmlAttrs(text, stats) {
  return text.replace(/\b(href|src)=(["'])(\/[^"']+)\2/g, (match, attr, quote, url) => {
    const normalized = normalizeInternalPath(url);
    if (normalized !== url) {
      stats.htmlAttrs += 1;
      return `${attr}=${quote}${normalized}${quote}`;
    }
    return match;
  });
}

function normalizeFrontmatter(fm, stats) {
  let updated = fm;

  updated = updated.replace(
    /^(\s*(?:parentArticle|parentCalculator):\s*)(["']?)(\/[^"'\n\r]+)(\2)(\s*)$/gm,
    (match, keyPrefix, quote, value, quote2, tail) => {
      const normalized = normalizeInternalPath(value.trim());
      if (normalized !== value.trim()) {
        stats.frontmatter += 1;
        return `${keyPrefix}${quote}${normalized}${quote2}${tail}`;
      }
      return match;
    }
  );

  updated = updated.replace(
    /^(\s*(?:childArticles|relatedArticles|siblingArticles):\s*\[)([^\]\r\n]*)(\]\s*)$/gm,
    (match, start, inner, end) => {
      let changed = false;
      const nextInner = inner.replace(/(["']?)(\/[^,\]\s"']+)(\1)/g, (m, quote, value, quote2) => {
        const normalized = normalizeInternalPath(value);
        if (normalized !== value) {
          changed = true;
          stats.frontmatter += 1;
          return `${quote}${normalized}${quote2}`;
        }
        return m;
      });

      return changed ? `${start}${nextInner}${end}` : match;
    }
  );

  updated = updated.replace(
    /^(\s*-\s*)(["']?)(\/[^"'\n\r]+)(\2)(\s*)$/gm,
    (match, prefix, quote, value, quote2, tail) => {
      const normalized = normalizeInternalPath(value.trim());
      if (normalized !== value.trim()) {
        stats.frontmatter += 1;
        return `${prefix}${quote}${normalized}${quote2}${tail}`;
      }
      return match;
    }
  );

  return updated;
}

function processFile(filePath, write) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const stats = {
    markdownLinks: 0,
    htmlAttrs: 0,
    frontmatter: 0,
  };

  let updated = original;

  const fmMatch = updated.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmMatch && typeof fmMatch.index === 'number') {
    const full = fmMatch[0];
    const fm = fmMatch[1];
    const normalizedFm = normalizeFrontmatter(fm, stats);

    if (normalizedFm !== fm) {
      const rebuilt = full.replace(fm, normalizedFm);
      updated = `${updated.slice(0, fmMatch.index)}${rebuilt}${updated.slice(fmMatch.index + full.length)}`;
    }
  }

  updated = normalizeMarkdownLinks(updated, stats);
  updated = normalizeHtmlAttrs(updated, stats);

  const changed = updated !== original;
  if (changed && write) {
    fs.writeFileSync(filePath, updated, 'utf-8');
  }

  return {
    changed,
    ...stats,
  };
}

function main() {
  const files = listMdxFiles(CONTENT_DIR);

  let changedFiles = 0;
  let markdownLinks = 0;
  let htmlAttrs = 0;
  let frontmatter = 0;

  for (const filePath of files) {
    const result = processFile(filePath, isWrite);
    if (result.changed) changedFiles += 1;
    markdownLinks += result.markdownLinks;
    htmlAttrs += result.htmlAttrs;
    frontmatter += result.frontmatter;
  }

  const mode = isWrite ? 'WRITE' : 'CHECK';
  console.log(`[${mode}] Scanned ${files.length} MDX files in content/`);
  console.log(`[${mode}] Files needing changes: ${changedFiles}`);
  console.log(`[${mode}] Replacements: markdown=${markdownLinks}, html=${htmlAttrs}, frontmatter=${frontmatter}`);

  if (isCheck && changedFiles > 0) {
    console.error('[CHECK] Failed: found non-canonical internal links/paths (missing trailing slash).');
    process.exit(1);
  }

  console.log(`[${mode}] Passed.`);
}

main();
