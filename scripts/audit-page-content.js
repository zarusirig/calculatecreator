#!/usr/bin/env node

/**
 * SSR/Prerender Content Audit Script
 *
 * Audits all "money pages" (calculators, guides, comparisons, data pages)
 * to ensure they have sufficient content for SEO crawlers.
 *
 * Required sections for calculator pages:
 * - H1 heading with keyword
 * - Intro paragraph (min 50 words)
 * - Educational/explanation section
 * - FAQ section (min 3 questions)
 * - Methodology section
 * - Schema markup
 *
 * Required sections for guide pages:
 * - H1 heading with keyword
 * - Intro paragraph (min 150 words)
 * - Main content sections (min 800 words total)
 * - FAQ section (min 3 questions)
 * - Schema markup
 *
 * Usage: node scripts/audit-page-content.js [--verbose] [--fix]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  outDir: path.join(__dirname, '../out'),
  srcDir: path.join(__dirname, '../src/app'),
  minIntroWordsCalculator: 50,
  minIntroWordsGuide: 100,
  minFaqCount: 3,
  minTotalWords: 500, // Minimum words for "money pages"
  verbose: process.argv.includes('--verbose'),
};

// Page categories and their paths
const pageCategories = {
  calculators: '/calculators',
  guides: '/guides',
  comparisons: '/comparisons',
  data: '/data',
  reference: '/reference',
  niches: '/niches',
  blog: '/blog',
  news: '/news',
};

// Results storage
const results = {
  passed: [],
  warnings: [],
  failed: [],
  skipped: [],
};

/**
 * Extract text content from HTML (strip tags)
 */
function stripHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Count words in text
 */
function countWords(text) {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Check if HTML contains H1 heading
 */
function hasH1(html) {
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) return { found: false, text: null };
  return { found: true, text: stripHtml(h1Match[1]) };
}

/**
 * Count H2 headings (content sections)
 */
function countH2s(html) {
  const h2Matches = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
  return h2Matches.length;
}

/**
 * Check for FAQ section (details elements or FAQ heading)
 */
function hasFAQ(html) {
  // Check for details elements (used in FAQSection component)
  const detailsCount = (html.match(/<details[^>]*>/gi) || []).length;

  // Check for FAQ heading
  const hasFaqHeading = /<h[23][^>]*>.*?(?:FAQ|Frequently Asked Questions|Common Questions).*?<\/h[23]>/i.test(html);

  return {
    found: detailsCount >= 3 || hasFaqHeading,
    count: detailsCount,
    hasHeading: hasFaqHeading,
  };
}

/**
 * Check for methodology section
 */
function hasMethodology(html) {
  // Check for methodology heading
  const hasMethodologyHeading = /<h[234][^>]*>.*?(?:How We Calculate|Methodology|Formula|Calculation Method).*?<\/h[234]>/i.test(html);

  // Check for formula/pre code blocks
  const hasCodeBlock = /<pre[^>]*>[\s\S]*?<\/pre>/i.test(html);

  return {
    found: hasMethodologyHeading || hasCodeBlock,
    hasHeading: hasMethodologyHeading,
    hasCodeBlock,
  };
}

/**
 * Check for schema markup (JSON-LD)
 */
function hasSchema(html) {
  const schemaMatches = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || [];

  const schemaTypes = [];
  schemaMatches.forEach(match => {
    try {
      const jsonContent = match.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
      const data = JSON.parse(jsonContent);
      if (data['@type']) {
        schemaTypes.push(data['@type']);
      }
    } catch (e) {
      // Invalid JSON
    }
  });

  return {
    found: schemaMatches.length > 0,
    count: schemaMatches.length,
    types: schemaTypes,
  };
}

/**
 * Check for breadcrumb
 */
function hasBreadcrumb(html) {
  // Check for nav with breadcrumb or BreadcrumbList schema
  const hasBreadcrumbNav = /<nav[^>]*aria-label="[^"]*breadcrumb[^"]*"[^>]*>/i.test(html) ||
    /<nav[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>/i.test(html);
  const hasBreadcrumbSchema = /BreadcrumbList/i.test(html);

  // Also check for common breadcrumb patterns (nav with Home > Section links)
  const hasManualBreadcrumb = /<nav[^>]*>[\s\S]{0,500}Home[\s\S]{0,200}(Guides|Calculators|Comparisons|Data|News|Reference)[\s\S]{0,500}<\/nav>/i.test(html);

  return {
    found: hasBreadcrumbNav || hasBreadcrumbSchema || hasManualBreadcrumb,
    hasNav: hasBreadcrumbNav || hasManualBreadcrumb,
    hasSchema: hasBreadcrumbSchema,
  };
}

/**
 * Get intro text (all paragraphs between H1 and second H2, or first 3000 chars after H1)
 * This handles both simple layouts (H1 -> intro -> H2) and hero layouts (H1 -> short subtitle -> H2 -> intro section -> H2)
 */
function getIntroWords(html) {
  // Find content after H1 heading
  const h1End = html.search(/<\/h1>/i);
  if (h1End === -1) return 0;

  const afterH1 = html.slice(h1End);

  // Find all H2s
  const h2Matches = [...afterH1.matchAll(/<h2[^>]*>/gi)];

  // Use content up to the second H2 (to capture intro sections after hero)
  // or first 4000 chars if fewer than 2 H2s
  let introSection;
  if (h2Matches.length >= 2) {
    introSection = afterH1.slice(0, h2Matches[1].index);
  } else if (h2Matches.length === 1) {
    introSection = afterH1.slice(0, h2Matches[0].index);
  } else {
    introSection = afterH1.slice(0, 4000);
  }

  // Find all paragraphs in intro section
  const pMatches = introSection.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];

  let totalWords = 0;
  pMatches.forEach(pMatch => {
    const text = stripHtml(pMatch);
    totalWords += countWords(text);
  });

  return totalWords;
}

/**
 * Check for related content links
 */
function hasRelatedContent(html) {
  // Check for related calculators section or semantic links
  const hasRelatedSection = /<h[234][^>]*>.*?(?:Related|See Also|You May Also|More Calculators|More Guides).*?<\/h[234]>/i.test(html);

  return { found: hasRelatedSection };
}

// Known redirect pages (these intentionally redirect to other pages)
const redirectPages = [
  '/calculators/brand-deal-rate',
  '/calculators/coins',
  '/calculators/diamond-converter',
  '/calculators/engagement-rate',
  '/calculators/live-gifts',
  '/calculators/rpm',
  '/calculators/tiktok-ad-cost',
  '/calculators/tiktok-creator-fund',
  '/calculators/tiktok-money',
  '/calculators/video-performance',
];

/**
 * Audit a single page
 */
function auditPage(htmlPath, category) {
  const relativePath = htmlPath.replace(config.outDir, '').replace('/index.html', '') || '/';

  // Don't skip main listing pages - they need SEO too
  // Only skip sub-category listing pages like /calculators/earnings-revenue
  const isMainListingPage = ['/calculators', '/guides', '/data', '/blog', '/news'].includes(relativePath);
  if (!isMainListingPage && relativePath.match(/\/(calculators|guides|comparisons|data|reference|niches|blog|news)$/)) {
    return { path: relativePath, status: 'skipped', reason: 'Sub-category listing page' };
  }

  // Skip known redirect pages
  if (redirectPages.includes(relativePath)) {
    return { path: relativePath, status: 'skipped', reason: 'Redirect page' };
  }

  try {
    const html = fs.readFileSync(htmlPath, 'utf-8');

    const h1 = hasH1(html);
    const h2Count = countH2s(html);
    const faq = hasFAQ(html);
    const methodology = hasMethodology(html);
    const schema = hasSchema(html);
    const breadcrumb = hasBreadcrumb(html);
    const introWords = getIntroWords(html);
    const related = hasRelatedContent(html);
    const totalWords = countWords(stripHtml(html));

    const issues = [];
    const warnings = [];

    // Required checks
    if (!h1.found) {
      issues.push('Missing H1 heading');
    }

    if (!schema.found) {
      issues.push('Missing Schema.org markup');
    }

    // Category-specific checks
    if (category === 'calculators') {
      if (introWords < config.minIntroWordsCalculator) {
        issues.push(`Intro too short (${introWords} words, need ${config.minIntroWordsCalculator})`);
      }

      if (!methodology.found) {
        warnings.push('Missing methodology section');
      }

      if (!faq.found) {
        issues.push(`Missing FAQ section (found ${faq.count} details elements)`);
      } else if (faq.count < config.minFaqCount) {
        warnings.push(`FAQ section has only ${faq.count} questions (recommend ${config.minFaqCount}+)`);
      }

      if (h2Count < 2) {
        warnings.push(`Only ${h2Count} H2 sections (recommend 3+)`);
      }
    }

    if (category === 'guides') {
      if (introWords < config.minIntroWordsGuide) {
        issues.push(`Intro too short (${introWords} words, need ${config.minIntroWordsGuide})`);
      }

      if (!faq.found) {
        warnings.push('Missing FAQ section');
      }

      if (h2Count < 3) {
        warnings.push(`Only ${h2Count} H2 sections (recommend 4+)`);
      }

      if (totalWords < 800) {
        issues.push(`Content too thin (${totalWords} words, need 800+)`);
      }
    }

    if (category === 'comparisons' || category === 'data') {
      if (!faq.found) {
        warnings.push('Missing FAQ section');
      }

      if (totalWords < config.minTotalWords) {
        issues.push(`Content too thin (${totalWords} words, need ${config.minTotalWords}+)`);
      }
    }

    // General checks
    if (!breadcrumb.found) {
      warnings.push('Missing breadcrumb navigation');
    }

    if (!related.found) {
      warnings.push('Missing related content links');
    }

    return {
      path: relativePath,
      category,
      status: issues.length > 0 ? 'failed' : (warnings.length > 0 ? 'warning' : 'passed'),
      issues,
      warnings,
      metrics: {
        h1: h1.text,
        h2Count,
        introWords,
        totalWords,
        faqCount: faq.count,
        schemaCount: schema.count,
        schemaTypes: schema.types,
        hasBreadcrumb: breadcrumb.found,
        hasMethodology: methodology.found,
        hasRelated: related.found,
      },
    };
  } catch (error) {
    return {
      path: relativePath,
      category,
      status: 'error',
      error: error.message,
    };
  }
}

/**
 * Find all HTML files in a directory recursively
 */
function findHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (item === 'index.html') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Main audit function
 */
function runAudit() {
  console.log('\n🔍 SSR/Prerender Content Audit\n');
  console.log('=' .repeat(60));

  // Check if out directory exists
  if (!fs.existsSync(config.outDir)) {
    console.log('\n❌ Build output directory not found.');
    console.log('   Run "npm run build" first to generate static HTML.\n');
    process.exit(1);
  }

  // Audit each category
  for (const [category, pathPrefix] of Object.entries(pageCategories)) {
    const categoryDir = path.join(config.outDir, pathPrefix);

    if (!fs.existsSync(categoryDir)) {
      console.log(`\n⚠️  ${category}: Directory not found`);
      continue;
    }

    const htmlFiles = findHtmlFiles(categoryDir);

    console.log(`\n📁 ${category.toUpperCase()} (${htmlFiles.length} pages)`);
    console.log('-'.repeat(40));

    for (const htmlFile of htmlFiles) {
      const result = auditPage(htmlFile, category);

      if (result.status === 'skipped') {
        results.skipped.push(result);
        continue;
      }

      if (result.status === 'passed') {
        results.passed.push(result);
        if (config.verbose) {
          console.log(`  ✅ ${result.path}`);
        }
      } else if (result.status === 'warning') {
        results.warnings.push(result);
        console.log(`  ⚠️  ${result.path}`);
        if (config.verbose) {
          result.warnings.forEach(w => console.log(`      - ${w}`));
        }
      } else if (result.status === 'failed') {
        results.failed.push(result);
        console.log(`  ❌ ${result.path}`);
        result.issues.forEach(i => console.log(`      - ${i}`));
        if (config.verbose && result.warnings.length) {
          result.warnings.forEach(w => console.log(`      - (warning) ${w}`));
        }
      } else if (result.status === 'error') {
        results.failed.push(result);
        console.log(`  ❌ ${result.path}: ${result.error}`);
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 AUDIT SUMMARY\n');

  const total = results.passed.length + results.warnings.length + results.failed.length;

  console.log(`   ✅ Passed:   ${results.passed.length}/${total} pages`);
  console.log(`   ⚠️  Warnings: ${results.warnings.length}/${total} pages`);
  console.log(`   ❌ Failed:   ${results.failed.length}/${total} pages`);
  console.log(`   ⏭️  Skipped:  ${results.skipped.length} (listing pages)`);

  // List failed pages
  if (results.failed.length > 0) {
    console.log('\n❌ FAILED PAGES (require fixes):');
    console.log('-'.repeat(40));

    results.failed.forEach(result => {
      console.log(`\n${result.path}`);
      result.issues?.forEach(i => console.log(`   - ${i}`));
    });
  }

  // List warning pages
  if (results.warnings.length > 0 && config.verbose) {
    console.log('\n⚠️  WARNING PAGES (recommended fixes):');
    console.log('-'.repeat(40));

    results.warnings.forEach(result => {
      console.log(`\n${result.path}`);
      result.warnings?.forEach(w => console.log(`   - ${w}`));
    });
  }

  // Write detailed report
  const reportPath = path.join(__dirname, '../audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      total,
      passed: results.passed.length,
      warnings: results.warnings.length,
      failed: results.failed.length,
      skipped: results.skipped.length,
    },
    failed: results.failed,
    warnings: results.warnings,
    passed: config.verbose ? results.passed : results.passed.map(r => r.path),
  }, null, 2));

  console.log(`\n📄 Detailed report saved to: audit-report.json\n`);

  // Exit with error code if failures found
  if (results.failed.length > 0) {
    process.exit(1);
  }
}

// Run the audit
runAudit();
