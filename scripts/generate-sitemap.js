const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITE_URL = 'https://calculatecreator.com';
const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const OUTPUT = path.join(__dirname, '..', 'public', 'sitemap.xml');

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

  // Legal/compliance
  if (/^\/(privacy|terms)\/$/.test(route)) return { priority: '0.2', changefreq: 'yearly' };
  if (route.startsWith('/compliance/')) return { priority: '0.3', changefreq: 'yearly' };
  if (route.startsWith('/advanced/')) return { priority: '0.5', changefreq: 'monthly' };

  return { priority: '0.5', changefreq: 'monthly' };
}

// Get last git commit date for a file
function getLastModified(filePath) {
  try {
    const date = execSync(`git log -1 --format=%aI -- "${filePath}"`, { encoding: 'utf-8' }).trim();
    if (date) return date.split('T')[0];
  } catch {
    // fall through
  }
  return new Date().toISOString().split('T')[0];
}

// Recursively find all page.tsx files
function findPages(dir, pages = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findPages(fullPath, pages);
    } else if (entry.name === 'page.tsx') {
      pages.push(fullPath);
    }
  }
  return pages;
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

function generate() {
  console.log('Generating sitemap...');
  const pageFiles = findPages(APP_DIR);
  console.log(`Found ${pageFiles.length} pages`);

  const urls = pageFiles
    .map((filePath) => {
      const route = fileToRoute(filePath);
      const lastmod = getLastModified(filePath);
      const config = getRouteConfig(route);
      return { route, lastmod, ...config };
    })
    .sort((a, b) => {
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
  console.log(`Sitemap written to ${OUTPUT} with ${urls.length} URLs`);
}

generate();
