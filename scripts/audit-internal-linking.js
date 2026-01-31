const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

// Get all HTML files
function getAllHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (entry.name === 'index.html') {
      files.push(fullPath);
    }
  }
  return files;
}

// Extract URL path from file path
function fileToUrl(filePath) {
  const relative = path.relative(OUT_DIR, filePath);
  const url = '/' + relative.replace(/index\.html$/, '').replace(/\\/g, '/');
  return url === '/' ? '/' : url;
}

// Extract all internal links from HTML
function extractInternalLinks(html) {
  const links = new Set();
  const linkRegex = /href="(\/[^"#]*?)"/g;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    let url = match[1];
    // Normalize: ensure trailing slash
    if (!url.endsWith('/') && !url.includes('.')) {
      url += '/';
    }
    // Skip assets
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|xml|txt)$/)) continue;
    links.add(url);
  }
  return links;
}

// Check if page has breadcrumbs
function hasBreadcrumb(html) {
  return /aria-label="[Bb]readcrumb"/.test(html) ||
         /"@type"\s*:\s*"BreadcrumbList"/.test(html) ||
         /<nav[^>]*>[\s\S]{0,500}Home[\s\S]{0,200}(Guides|Calculators|Comparisons|Data|News|Reference|Blog|Advanced|Niches|Region|Resources|Compliance|Metrics)[\s\S]{0,500}<\/nav>/i.test(html);
}

// Check if page has related content section
function hasRelatedContent(html) {
  return /Related\s*(Calculators|Guides|Tools|Resources|Content|News|Articles|Topics)/i.test(html) ||
         /More\s*(Calculators|Guides|Tools|Resources)/i.test(html) ||
         /See\s*Also/i.test(html) ||
         /You\s*May\s*Also\s*Like/i.test(html);
}

// Identify hub pages (pages with many outbound links to same category)
function isHubPage(url, outboundLinks) {
  const hubPatterns = [
    /^\/calculators\/?$/,
    /^\/guides\/?$/,
    /^\/data\/?$/,
    /^\/news\/?$/,
    /^\/blog\/?$/,
    /^\/comparisons\/?$/,
    /^\/reference\/?$/,
    /^\/niches\/?$/,
    /^\/region\/?$/,
    /^\/advanced\/?$/,
    /^\/resources\/?$/,
    /^\/?$/,  // Homepage
  ];
  return hubPatterns.some(p => p.test(url));
}

// Calculate click depth from homepage using BFS
function calculateClickDepth(linkGraph, startUrl = '/') {
  const depths = new Map();
  const queue = [[startUrl, 0]];
  depths.set(startUrl, 0);

  while (queue.length > 0) {
    const [currentUrl, depth] = queue.shift();
    const links = linkGraph.get(currentUrl) || new Set();

    for (const link of links) {
      if (!depths.has(link)) {
        depths.set(link, depth + 1);
        queue.push([link, depth + 1]);
      }
    }
  }

  return depths;
}

// Main audit
async function audit() {
  console.log('🔍 Internal Linking & Site Architecture Audit\n');
  console.log('='.repeat(60) + '\n');

  const htmlFiles = getAllHtmlFiles(OUT_DIR);
  const allPages = new Map(); // url -> { html, outboundLinks, inboundLinks, hasBreadcrumb, hasRelated }
  const linkGraph = new Map(); // url -> Set of outbound links

  // First pass: collect all pages and their outbound links
  for (const file of htmlFiles) {
    const url = fileToUrl(file);
    const html = fs.readFileSync(file, 'utf-8');
    const outboundLinks = extractInternalLinks(html);

    allPages.set(url, {
      html,
      outboundLinks,
      inboundLinks: new Set(),
      hasBreadcrumb: hasBreadcrumb(html),
      hasRelated: hasRelatedContent(html),
    });
    linkGraph.set(url, outboundLinks);
  }

  // Second pass: calculate inbound links
  for (const [sourceUrl, data] of allPages) {
    for (const targetUrl of data.outboundLinks) {
      if (allPages.has(targetUrl)) {
        allPages.get(targetUrl).inboundLinks.add(sourceUrl);
      }
    }
  }

  // Calculate click depths
  const clickDepths = calculateClickDepth(linkGraph);

  // Analysis
  const orphanPages = [];
  const deepPages = []; // > 3 clicks
  const noBreadcrumb = [];
  const noRelated = [];
  const hubPages = [];

  // Skip these from orphan/related checks (they're special pages)
  const skipPages = ['/privacy/', '/terms/', '/contact/', '/about/', '/faq/', '/404/'];
  const skipPrefixes = ['/calculator/de/', '/calculator/es/', '/calculator/fr/', '/calculator/it/', '/calculator/pt-br/', '/calculator/my/'];

  for (const [url, data] of allPages) {
    const isSkipped = skipPages.includes(url) || skipPrefixes.some(p => url.startsWith(p));
    const isHub = isHubPage(url, data.outboundLinks);

    if (isHub) {
      hubPages.push({
        url,
        outboundCount: data.outboundLinks.size,
        inboundCount: data.inboundLinks.size,
      });
    }

    // Check for orphan pages (no inbound links except from self)
    const meaningfulInbound = [...data.inboundLinks].filter(l => l !== url);
    if (meaningfulInbound.length === 0 && url !== '/') {
      orphanPages.push(url);
    }

    // Check click depth
    const depth = clickDepths.get(url);
    if (depth === undefined) {
      deepPages.push({ url, depth: 'unreachable' });
    } else if (depth > 3) {
      deepPages.push({ url, depth });
    }

    // Check breadcrumbs (skip homepage and hub listing pages)
    if (!data.hasBreadcrumb && url !== '/' && !isHub && !isSkipped) {
      noBreadcrumb.push(url);
    }

    // Check related content (skip special pages)
    if (!data.hasRelated && !isSkipped && !isHub && url !== '/') {
      // Only flag content pages, not redirect pages
      if (!data.html.includes('Redirecting to')) {
        noRelated.push(url);
      }
    }
  }

  // Report: Hub Pages
  console.log('📍 HUB PAGES (Main Navigation Nodes)');
  console.log('-'.repeat(40));
  hubPages.sort((a, b) => b.outboundCount - a.outboundCount);
  for (const hub of hubPages) {
    console.log(`  ${hub.url}`);
    console.log(`    Outbound: ${hub.outboundCount} | Inbound: ${hub.inboundCount}`);
  }
  console.log();

  // Report: Click Depth Distribution
  console.log('📊 CLICK DEPTH DISTRIBUTION (from homepage)');
  console.log('-'.repeat(40));
  const depthCounts = {};
  for (const [url, depth] of clickDepths) {
    depthCounts[depth] = (depthCounts[depth] || 0) + 1;
  }
  for (const [depth, count] of Object.entries(depthCounts).sort((a, b) => a[0] - b[0])) {
    const bar = '█'.repeat(Math.min(count, 50));
    console.log(`  ${depth} clicks: ${count} pages ${bar}`);
  }
  console.log();

  // Report: Pages > 3 clicks deep
  if (deepPages.length > 0) {
    console.log('⚠️  PAGES MORE THAN 3 CLICKS DEEP');
    console.log('-'.repeat(40));
    deepPages.sort((a, b) => (b.depth === 'unreachable' ? 999 : b.depth) - (a.depth === 'unreachable' ? 999 : a.depth));
    for (const page of deepPages.slice(0, 20)) {
      console.log(`  ${page.depth} clicks: ${page.url}`);
    }
    if (deepPages.length > 20) {
      console.log(`  ... and ${deepPages.length - 20} more`);
    }
    console.log();
  }

  // Report: Orphan Pages
  console.log('🚨 ORPHAN PAGES (no inbound links)');
  console.log('-'.repeat(40));
  if (orphanPages.length === 0) {
    console.log('  ✅ No orphan pages found!');
  } else {
    for (const url of orphanPages.slice(0, 30)) {
      console.log(`  ❌ ${url}`);
    }
    if (orphanPages.length > 30) {
      console.log(`  ... and ${orphanPages.length - 30} more`);
    }
  }
  console.log();

  // Report: Missing Breadcrumbs
  console.log('🍞 PAGES WITHOUT BREADCRUMBS');
  console.log('-'.repeat(40));
  if (noBreadcrumb.length === 0) {
    console.log('  ✅ All content pages have breadcrumbs!');
  } else {
    for (const url of noBreadcrumb.slice(0, 20)) {
      console.log(`  ❌ ${url}`);
    }
    if (noBreadcrumb.length > 20) {
      console.log(`  ... and ${noBreadcrumb.length - 20} more`);
    }
  }
  console.log();

  // Report: Missing Related Content
  console.log('🔗 PAGES WITHOUT "RELATED" SECTIONS');
  console.log('-'.repeat(40));
  if (noRelated.length === 0) {
    console.log('  ✅ All content pages have related sections!');
  } else {
    for (const url of noRelated.slice(0, 20)) {
      console.log(`  ❌ ${url}`);
    }
    if (noRelated.length > 20) {
      console.log(`  ... and ${noRelated.length - 20} more`);
    }
  }
  console.log();

  // Summary
  console.log('='.repeat(60));
  console.log('\n📊 SUMMARY\n');
  console.log(`   Total pages:           ${allPages.size}`);
  console.log(`   Hub pages:             ${hubPages.length}`);
  console.log(`   Orphan pages:          ${orphanPages.length}`);
  console.log(`   Pages > 3 clicks:      ${deepPages.length}`);
  console.log(`   Missing breadcrumbs:   ${noBreadcrumb.length}`);
  console.log(`   Missing related:       ${noRelated.length}`);
  console.log();

  // Save detailed report
  const report = {
    summary: {
      totalPages: allPages.size,
      hubPages: hubPages.length,
      orphanPages: orphanPages.length,
      deepPages: deepPages.length,
      missingBreadcrumbs: noBreadcrumb.length,
      missingRelated: noRelated.length,
    },
    hubPages,
    orphanPages,
    deepPages,
    noBreadcrumb,
    noRelated,
    clickDepthDistribution: depthCounts,
  };

  fs.writeFileSync(
    path.join(__dirname, '..', 'linking-audit-report.json'),
    JSON.stringify(report, null, 2)
  );
  console.log('📄 Detailed report saved to: linking-audit-report.json');
}

audit().catch(console.error);
