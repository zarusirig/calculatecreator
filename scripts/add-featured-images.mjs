/**
 * Script to add featured images to individual article pages
 * Uses category-based images from ArticleFeaturedImage component
 *
 * Usage: node scripts/add-featured-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Guide slug to category mapping
const guideCategories = {
  // Monetization
  'tiktok-monetization-requirements': 'Monetization',
  'how-to-make-first-1000-dollars': 'Monetization',
  'complete-tiktok-calculator-guide': 'Monetization',
  'complete-tiktok-diamond-guide': 'Monetization',
  'tiktok-coin-converter-complete-guide': 'Monetization',
  'monetization-calculator-hub': 'Monetization',
  'how-to-make-money-on-tiktok': 'Monetization',

  // Creator Fund
  'maximize-creator-fund-rpm': 'Creator Fund',
  'how-to-join-creator-fund': 'Creator Fund',
  'how-to-join-creator-fund-complete': 'Creator Fund',
  'how-creator-fund-works': 'Creator Fund',
  'why-creator-fund-earnings-dropped': 'Creator Fund',
  'how-to-increase-creator-fund-earnings': 'Creator Fund',
  'tiktok-creator-fund': 'Creator Fund',

  // Brand Deals
  'how-to-get-brand-deals': 'Brand Deals',
  'how-to-get-brand-deals-complete': 'Brand Deals',
  'how-to-negotiate-brand-deals': 'Brand Deals',
  'how-much-to-charge-sponsorship': 'Brand Deals',
  'how-to-price-brand-deals': 'Brand Deals',
  'tiktok-creator-marketplace': 'Brand Deals',

  // LIVE
  'best-times-go-live': 'LIVE',
  'tiktok-live-earnings-guide': 'LIVE',
  'how-to-qualify-for-tiktok-live': 'LIVE',
  'how-to-get-1000-followers-live': 'LIVE',
  'live-gift-earnings-optimization': 'LIVE',
  'tiktok-live-earnings-expectations': 'LIVE',
  'tiktok-live': 'LIVE',

  // TikTok Shop
  'how-to-become-shop-affiliate': 'TikTok Shop',
  'tiktok-shop-affiliate': 'TikTok Shop',
  'tiktok-shop-success-strategies': 'TikTok Shop',
  'tiktok-live-shopping': 'TikTok Shop',

  // Niche Earnings
  'beauty-creators-earnings': 'Niche Earnings',
  'finance-creators-earnings': 'Niche Earnings',
  'fitness-creators-earnings': 'Niche Earnings',

  // Content Strategy
  'how-to-go-viral': 'Content Strategy',
  'content-strategy-2025': 'Content Strategy',
  'niche-selection': 'Content Strategy',
  'hashtag-strategy': 'Content Strategy',
  'best-shop-niches': 'Content Strategy',

  // Analytics
  'tiktok-algorithm-optimization': 'Analytics',
  'tiktok-algorithm-engagement': 'Analytics',
  'analytics-metrics-master-guide': 'Analytics',

  // Tools
  'influencer-rate-calculator-guide': 'Tools',
  'tiktok-rpm-calculator-guide': 'Tools',
  'tiktok-engagement-rate-calculator-guide': 'Tools',
  'tiktok-ad-budget-calculator-guide': 'Tools',

  // Advanced
  'calculating-true-influence-value': 'Advanced',
  'multi-platform-attribution-creators': 'Advanced',
  'multi-platform-strategy': 'Advanced',
  'creator-tax-strategy': 'Advanced',
  'tiktok-series-monetization': 'Advanced',
  'spark-ads-for-creators': 'Advanced',

  // Troubleshooting
  'why-tiktok-earnings-low': 'Troubleshooting',
  'tiktok-payment-delays': 'Troubleshooting',
  'increase-engagement-rate-tiktok': 'Troubleshooting',
  'how-to-increase-engagement': 'Troubleshooting',
};

// News slug to category mapping
const newsCategories = {
  // Regulatory
  'tiktok-ban-delayed-december-2025': 'Regulatory',
  'us-china-deal-tiktok-operational': 'Regulatory',
  'tiktok-nationwide-ban-status': 'Regulatory',

  // Features
  'ai-outline-smart-split-features': 'Features',
  'personalized-ai-avatar-stickers': 'Features',
  'mention-liked-favorited-videos': 'Features',
  'playback-settings-update': 'Features',

  // TikTok Shop
  'tiktok-shop-holiday-campaign': 'TikTok Shop',
  'tiktok-shop-third-fastest-growing': 'TikTok Shop',
  'tiktok-shop-europe-expansion': 'TikTok Shop',
  'tiktok-shop-gmv-doubling': 'TikTok Shop',
  'product-subscriptions-feature': 'TikTok Shop',

  // Algorithm
  'algorithm-eight-major-shifts': 'Algorithm',
  'retention-metrics-priority': 'Algorithm',
  'search-volume-increase-40-percent': 'Discovery',

  // Monetization
  'creator-rewards-program-launch': 'Monetization',
  'creator-rewards-20x-earnings': 'Monetization',
  'videos-over-one-minute-monetization': 'Monetization',

  // Safety
  'parent-safety-features-update': 'Safety',
  'age-specific-privacy-features': 'Safety',
};

// Guide category to image mapping
const guideImages = {
  'Monetization': 'guide-monetization',
  'Creator Fund': 'guide-creator-fund',
  'Brand Deals': 'guide-brand-deals',
  'LIVE': 'guide-live-streaming',
  'TikTok Shop': 'guide-tiktok-shop',
  'Niche Earnings': 'guide-monetization',
  'Content Strategy': 'guide-content-strategy',
  'Analytics': 'guide-analytics',
  'Tools': 'guide-tools',
  'Advanced': 'guide-analytics',
  'Troubleshooting': 'guide-tools',
  'Growth': 'guide-growth',
  'Algorithm': 'guide-algorithm',
};

// News category to image mapping
const newsImages = {
  'Regulatory': 'news-regulatory',
  'Features': 'news-features',
  'TikTok Shop': 'news-shop',
  'Algorithm': 'news-algorithm',
  'Discovery': 'news-algorithm',
  'Monetization': 'news-monetization',
  'Safety': 'news-safety',
};

function getImageForSlug(type, slug) {
  const categories = type === 'guide' ? guideCategories : newsCategories;
  const images = type === 'guide' ? guideImages : newsImages;
  const defaultImage = type === 'guide' ? 'guide-monetization' : 'news-features';

  const category = categories[slug];
  if (!category) {
    console.log(`  ⚠️  No category mapping for ${type}/${slug}, using default`);
    return { category: null, imageName: defaultImage };
  }

  const imageName = images[category] || defaultImage;
  return { category, imageName };
}

function generatePictureElement(type, imageName, alt) {
  const basePath = type === 'guide' ? '/guides' : '/news';
  return `
          <picture>
            <source
              type="image/avif"
              srcSet="${basePath}/${imageName}-640.avif 640w, ${basePath}/${imageName}-1024.avif 1024w, ${basePath}/${imageName}-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="${basePath}/${imageName}-640.webp 640w, ${basePath}/${imageName}-1024.webp 1024w, ${basePath}/${imageName}-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="${basePath}/${imageName}-1024.webp"
              alt="${alt}"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>`;
}

function processArticlePage(filePath, type) {
  const slug = path.basename(path.dirname(filePath));

  // Skip the main listing pages
  if (slug === 'guides' || slug === 'news') {
    return { skipped: true, reason: 'listing page' };
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already has featured image
  if (content.includes('<picture>') && content.includes('object-cover opacity-')) {
    return { skipped: true, reason: 'already has image' };
  }

  const { category, imageName } = getImageForSlug(type, slug);

  // Find the hero section gradient and make it relative for absolute positioning
  // Pattern: <section className="bg-gradient-to-...">
  const heroSectionPattern = /(<section\s+className=")(bg-gradient-to-[^"]+\s+py-\d+)(")/;
  const heroMatch = content.match(heroSectionPattern);

  if (!heroMatch) {
    return { skipped: true, reason: 'no hero section found' };
  }

  // Add relative positioning and overflow-hidden to hero section
  const originalHeroClass = heroMatch[2];
  if (!originalHeroClass.includes('relative')) {
    content = content.replace(
      heroSectionPattern,
      `$1relative overflow-hidden ${originalHeroClass}$3`
    );
  }

  // Find where to insert the picture element (after <section ... py-##">)
  const insertPattern = /(<section\s+className="[^"]*bg-gradient-to-[^"]+[^"]*">\s*\n)(\s*)(<div\s+className="container)/;
  const insertMatch = content.match(insertPattern);

  if (!insertMatch) {
    return { skipped: true, reason: 'could not find insertion point' };
  }

  // Extract title for alt text (escape $ to prevent regex replacement issues)
  const titleMatch = content.match(/<h1[^>]*>([^<]+)</);
  let altText = titleMatch
    ? `Featured image for ${titleMatch[1].trim()}`
    : `Featured ${type} image`;
  // Escape $ in alt text to prevent regex replacement issues
  altText = altText.replace(/\$/g, '$$$$');

  // Insert picture element using a function to avoid $ replacement issues
  const pictureElement = generatePictureElement(type, imageName, altText);
  const insertMatch2 = content.match(insertPattern);
  if (insertMatch2) {
    const replacement = insertMatch2[1] + pictureElement + '\n' + insertMatch2[2] + insertMatch2[3];
    content = content.slice(0, insertMatch2.index) + replacement + content.slice(insertMatch2.index + insertMatch2[0].length);
  }

  fs.writeFileSync(filePath, content);
  return { success: true, category, imageName };
}

function findArticlePages(dir) {
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Check if this directory has a page.tsx
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        pages.push(pagePath);
      }
      // Also check subdirectories
      pages.push(...findArticlePages(fullPath));
    }
  }

  return pages;
}

async function main() {
  console.log('🖼️  Adding featured images to article pages...\n');

  const guidesDir = path.join(rootDir, 'src/app/guides');
  const newsDir = path.join(rootDir, 'src/app/news');

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  // Process guides
  console.log('📚 Processing guides...');
  const guidePages = findArticlePages(guidesDir);

  for (const pagePath of guidePages) {
    const slug = path.basename(path.dirname(pagePath));
    try {
      const result = processArticlePage(pagePath, 'guide');
      if (result.success) {
        console.log(`  ✅ ${slug} → ${result.imageName}`);
        updated++;
      } else if (result.skipped) {
        console.log(`  ⏭️  ${slug} (${result.reason})`);
        skipped++;
      }
    } catch (err) {
      console.log(`  ❌ ${slug}: ${err.message}`);
      errors++;
    }
  }

  // Process news
  console.log('\n📰 Processing news...');
  const newsPages = findArticlePages(newsDir);

  for (const pagePath of newsPages) {
    const slug = path.basename(path.dirname(pagePath));
    try {
      const result = processArticlePage(pagePath, 'news');
      if (result.success) {
        console.log(`  ✅ ${slug} → ${result.imageName}`);
        updated++;
      } else if (result.skipped) {
        console.log(`  ⏭️  ${slug} (${result.reason})`);
        skipped++;
      }
    } catch (err) {
      console.log(`  ❌ ${slug}: ${err.message}`);
      errors++;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   Updated: ${updated}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Errors:  ${errors}`);
}

main();
