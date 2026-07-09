const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://tiktokcalculator.net';
const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const OUTPUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const FIREBASE_CONFIG = path.join(__dirname, '..', 'firebase.json');
const EXCLUDED_ROUTE_PATTERNS = [
  /^\/404\/$/,
  /^\/bookmarks\/$/,
  /^\/search\/$/,
  /^\/calculators\/fun-niche\/$/,
  /^\/calculators\/fun-niche\/moon-phase\/$/,
  /^\/tools\/$/,
  /^\/tools\/rpm\/$/,
  /^\/metrics\/tiktok-comments-to-likes-ratio\/$/,
];

function normalizeRoute(route) {
  if (typeof route !== 'string' || !route.startsWith('/')) return null;
  const pathOnly = route.split(/[?#]/)[0];
  if (pathOnly === '/') return '/';
  return pathOnly.endsWith('/') ? pathOnly : `${pathOnly}/`;
}

function expandOptionalSlash(source) {
  if (typeof source !== 'string') return [];
  if (source.includes('{,/}')) {
    const base = source.replace('{,/}', '');
    return [base, `${base}/`];
  }
  return [source];
}

function isLiteralInternalPath(route) {
  if (typeof route !== 'string') return false;
  const stripped = route.replace('{,/}', '');
  return stripped.startsWith('/') && !/[\\*:\(\)]/.test(stripped);
}

function loadRedirectSourceRoutes() {
  const routes = new Set();
  if (!fs.existsSync(FIREBASE_CONFIG)) return routes;

  try {
    const firebase = JSON.parse(fs.readFileSync(FIREBASE_CONFIG, 'utf-8'));
    const redirects = firebase?.hosting?.redirects || [];
    for (const rule of redirects) {
      if (!isLiteralInternalPath(rule?.source)) continue;
      for (const variant of expandOptionalSlash(rule.source)) {
        const normalized = normalizeRoute(variant);
        if (normalized) routes.add(normalized);
      }
    }
  } catch (error) {
    console.warn(`Unable to parse ${FIREBASE_CONFIG}: ${error.message}`);
  }

  return routes;
}

const REDIRECT_SOURCE_ROUTES = loadRedirectSourceRoutes();

const REPO_ROOT = path.join(__dirname, '..');

// Build a map of file path (relative to repo root) -> last commit date (YYYY-MM-DD)
// in a single `git log` pass. This yields a deterministic per-URL lastmod that
// reflects real content changes — unlike fs.statSync mtime, which is uniform on
// fresh CI checkouts (every file shares the checkout timestamp). Walks commits
// newest->oldest; the first (newest) occurrence of each file wins. Returns an
// empty map if git is unavailable so callers fall back to fs mtime / build date.
function buildGitMtimeMap() {
  try {
    const { execSync } = require('child_process');
    const out = execSync('git log --pretty=format:%ad --date=short --name-only', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
      maxBuffer: 30 * 1024 * 1024,
    });
    const map = new Map();
    let currentDate = null;
    for (const line of out.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
        currentDate = trimmed;
      } else if (currentDate && !map.has(trimmed)) {
        map.set(trimmed, currentDate);
      }
    }
    return map;
  } catch {
    return new Map();
  }
}

const GIT_MTIME_MAP = buildGitMtimeMap();

// Priority and changefreq rules based on route patterns
function getRouteConfig(route) {
  if (route === '/') return { priority: '1.0', changefreq: 'daily' };

  // Hub/index pages
  if (/^\/(calculators|guides|comparisons|blog|niches|data|metrics|reference|news|region)\/$/.test(route)) {
    return { priority: '0.8', changefreq: 'weekly' };
  }

  // Calculator category hubs
  if (/^\/calculators\/(commerce-ads|earnings-revenue|engagement-influence|coins-gifts-diamonds|fun-niche|utility-tools)\/$/.test(route)) {
    return { priority: '0.8', changefreq: 'weekly' };
  }

  // Individual calculators
  if (route.startsWith('/calculators/')) return { priority: '0.7', changefreq: 'weekly' };

  // Guides
  if (route.startsWith('/guides/')) return { priority: '0.7', changefreq: 'monthly' };

  // Blog posts
  if (route.startsWith('/blog/')) return { priority: '0.7', changefreq: 'monthly' };

  // Comparisons
  if (route.startsWith('/comparisons/')) return { priority: '0.7', changefreq: 'monthly' };

  // News
  if (route.startsWith('/news/')) return { priority: '0.6', changefreq: 'monthly' };

  // Data pages
  if (route.startsWith('/data/')) return { priority: '0.6', changefreq: 'monthly' };

  // Niches
  if (route.startsWith('/niches/')) return { priority: '0.6', changefreq: 'monthly' };

  // Metrics
  if (route.startsWith('/metrics/')) return { priority: '0.6', changefreq: 'monthly' };

  // Reference
  if (route.startsWith('/reference/')) return { priority: '0.5', changefreq: 'yearly' };

  // Resources
  if (route.startsWith('/resources/')) return { priority: '0.4', changefreq: 'yearly' };

  // International calculators
  if (route.startsWith('/calculator/')) return { priority: '0.8', changefreq: 'weekly' };

  // Utility pages
  if (/^\/(about|contact|faq|glossary)\/$/.test(route)) return { priority: '0.5', changefreq: 'monthly' };

  // Editorial policy
  if (route === '/editorial-policy/') return { priority: '0.4', changefreq: 'yearly' };

  // Legal/compliance
  if (/^\/(privacy|terms)\/$/.test(route)) return { priority: '0.2', changefreq: 'yearly' };
  if (route.startsWith('/compliance/')) return { priority: '0.3', changefreq: 'yearly' };
  if (route.startsWith('/advanced/')) return { priority: '0.5', changefreq: 'monthly' };

  return { priority: '0.5', changefreq: 'monthly' };
}

const BUILD_DATE = new Date().toISOString().split('T')[0];

function toISODate(value) {
  if (value === undefined || value === null || value === '') return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().split('T')[0];
}

// Look up the file's last git commit date from the prebuilt map.
function getGitMtime(filePath) {
  try {
    const rel = path.relative(REPO_ROOT, filePath).replace(/\\/g, '/');
    const fromGit = GIT_MTIME_MAP.get(rel);
    if (fromGit) return fromGit;
  } catch {
    // fall through
  }
  return null;
}

// Derive a per-URL <lastmod> from the real content modification time.
// Priority: an explicit frontmatter modification date (dateModified/updatedAt/
// updatedDate) > git last-commit date > frontmatter publish date > filesystem
// mtime > build date. Git mtime is preferred over publishDate because a file's
// publish date is not a modification signal and would hide later content edits.
function getLastModified(filePath, frontmatterModified, frontmatterPublished) {
  const fromModified = toISODate(frontmatterModified);
  if (fromModified) return fromModified;

  const fromGit = getGitMtime(filePath);
  if (fromGit) return fromGit;

  const fromPublished = toISODate(frontmatterPublished);
  if (fromPublished) return fromPublished;

  try {
    const { mtime } = fs.statSync(filePath);
    const fromMtime = toISODate(mtime);
    if (fromMtime) return fromMtime;
  } catch {
    // fall through
  }
  return BUILD_DATE;
}

// Recursively find all page.tsx files
function findPages(dir, pages = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip dynamic route directories (e.g., [articleSlug]) — those are MDX-powered
      if (entry.name.startsWith('[')) continue;
      findPages(fullPath, pages);
    } else if (entry.name === 'page.tsx') {
      pages.push(fullPath);
    }
  }
  return pages;
}

// Recursively find all .mdx files
function findMdxFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findMdxFiles(fullPath, files);
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Convert file path to URL route
function fileToRoute(filePath) {
  let route = filePath
    .replace(APP_DIR, '')
    .replace('/page.tsx', '')
    .replace(/\\/g, '/');

  if (route === '') route = '/';
  if (!route.endsWith('/')) route += '/';
  return route;
}

// Convert MDX file path to URL route
function mdxToRoute(filePath) {
  // content/calculators/tiktok-money/tiktok-pay-per-1000-views.mdx
  // → /calculators/tiktok-money/tiktok-pay-per-1000-views/
  let route = filePath
    .replace(CONTENT_DIR, '')
    .replace(/\.mdx$/, '')
    .replace(/\\/g, '/');

  if (!route.endsWith('/')) route += '/';
  return route;
}

function shouldIncludeRoute(route) {
  return !EXCLUDED_ROUTE_PATTERNS.some((pattern) => pattern.test(route))
    && !REDIRECT_SOURCE_ROUTES.has(route);
}

function generate() {
  console.log('Generating sitemap...');
  console.log(`Loaded ${REDIRECT_SOURCE_ROUTES.size} redirect source routes from firebase.json`);

  // Pass 1: Static page.tsx files (existing pages)
  const pageFiles = findPages(APP_DIR);
  console.log(`Found ${pageFiles.length} static pages`);

  const staticUrls = pageFiles
    .map((filePath) => {
      const route = fileToRoute(filePath);
      const lastmod = getLastModified(filePath);
      const config = getRouteConfig(route);
      return { route, lastmod, ...config };
    })
    .filter((entry) => shouldIncludeRoute(entry.route));

  // Pass 2: MDX content files (new articles)
  const mdxFiles = findMdxFiles(CONTENT_DIR);
  console.log(`Found ${mdxFiles.length} MDX articles`);

  const mdxUrls = mdxFiles
    .map((filePath) => {
      const route = mdxToRoute(filePath);

      // Read frontmatter to get priority and dates
      let priority = '0.6';
      let changefreq = 'monthly';
      let noindex = false;
      let frontmatterModified = null;
      let frontmatterPublished = null;
      try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(raw);
        if (data.noindex) {
          noindex = true;
        }
        if (data.priorityScore) {
          priority = (data.priorityScore / 100).toFixed(1);
        }
        if (data.section === 'core') {
          changefreq = 'weekly';
        }
        // Per-URL lastmod: prefer an explicit content modification date from
        // frontmatter (dateModified/updatedAt/updatedDate); the publish date is
        // only a fallback after git last-commit mtime is checked.
        frontmatterModified =
          data.dateModified ||
          data.updatedAt ||
          data.updatedDate ||
          null;
        frontmatterPublished =
          data.publishDate ||
          data.datePublished ||
          null;
      } catch {
        // Fall through with defaults
      }

      const lastmod = getLastModified(filePath, frontmatterModified, frontmatterPublished);
      return { route, lastmod, priority, changefreq, noindex };
    })
    .filter((entry) => shouldIncludeRoute(entry.route) && !entry.noindex);

  // Pass 3: Author profile pages. These E-E-A-T author bios are being made
  // indexable, so include them explicitly — they have no page.tsx/MDX source
  // that the passes above would discover.
  const AUTHOR_SLUGS = [
    'alex-martinez',
    'david-kim',
    'emily-thompson',
    'jessica-rodriguez',
    'michael-chen',
    'sarah-johnson',
  ];
  const AUTHORS_SOURCE = path.join(__dirname, '..', 'src', 'lib', 'constants', 'authors.ts');
  const authorUrls = AUTHOR_SLUGS
    .map((slug) => {
      const route = `/authors/${slug}/`;
      const lastmod = getLastModified(AUTHORS_SOURCE);
      const config = getRouteConfig(route);
      return { route, lastmod, ...config };
    })
    .filter((entry) => shouldIncludeRoute(entry.route));
  console.log(`Added ${authorUrls.length} author pages`);

  // Combine and sort
  const urls = [...staticUrls, ...mdxUrls, ...authorUrls].sort((a, b) => {
    // Sort: homepage first, then by priority desc, then alphabetically
    if (a.route === '/') return -1;
    if (b.route === '/') return 1;
    if (a.priority !== b.priority) return parseFloat(b.priority) - parseFloat(a.priority);
    return a.route.localeCompare(b.route);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (u) => `
  <url>
    <loc>${SITE_URL}${u.route}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('')}

</urlset>
`;

  fs.writeFileSync(OUTPUT, xml, 'utf-8');
  console.log(`Sitemap written to ${OUTPUT} with ${urls.length} URLs (${staticUrls.length} static + ${mdxUrls.length} MDX + ${authorUrls.length} authors)`);
}

generate();
