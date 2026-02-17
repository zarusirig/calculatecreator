# CLAUDE CODE IMPLEMENTATION PROMPT
## calculatecreator.com — Koray Semantic SEO Framework Implementation

---

## CONTEXT

You have access to the full codebase of calculatecreator.com — a Next.js App Router project deployed as a TikTok creator calculator and monetization platform. The site currently has ~160 pages across calculators, guides, blog posts, news, comparisons, data pages, and reference pages.

Content is currently hardcoded in components/JSON files. There is NO CMS — all content lives in the codebase.

You also have access to `calculatecreator-koray-framework.docx` which contains the complete Semantic SEO strategy. Read this document first to understand the full plan. This prompt provides the technical execution steps.

## STRATEGIC GOAL

Transform this site from a scattered 160-page collection into a tightly organized 500+ page topical authority hub around the central entity "TikTok," following Koray Tugberk Gubur's Semantic SEO methodology. The site monetizes through display ads, so traffic volume is the primary KPI.

---

## PHASE 0: AUDIT & UNDERSTAND (DO THIS FIRST)

Before changing anything, audit the current codebase:

1. **Map the current file structure** — run `find app/ -name "page.tsx" -o -name "page.jsx"` to see all routes
2. **Identify the content storage pattern** — check how blog posts, guides, news, data, reference, and comparison pages store their content (likely JSON files, hardcoded arrays, or inline content in page components)
3. **Check the current metadata pattern** — how are title tags, meta descriptions, and OG tags generated? Look for `generateMetadata()` or `<Head>` usage
4. **Check the sitemap generation** — find how sitemap.xml is generated (likely `app/sitemap.ts` or a config file)
5. **Check internal linking** — how do pages currently link to each other? Is there a shared component?
6. **Check the layout structure** — `app/layout.tsx` and any nested layouts
7. **Report findings** before proceeding

---

## PHASE 1: CONTENT INFRASTRUCTURE (Priority — Do Before Any New Content)

### 1.1 Create MDX Content System

The site needs to migrate from hardcoded content to a scalable MDX-based system. This is the foundation for producing 60 articles/month.

```bash
# Install MDX dependencies
npm install @next/mdx @mdx-js/loader @mdx-js/react next-mdx-remote gray-matter reading-time
```

Create the content directory structure:

```
content/
├── calculators/           # Calculator support articles
│   ├── tiktok-money/
│   │   ├── how-much-tiktok-pay-per-1000-views.mdx
│   │   ├── tiktok-earnings-by-country.mdx
│   │   └── ...
│   ├── engagement-rate/
│   │   ├── good-tiktok-engagement-rate-2026.mdx
│   │   └── ...
│   ├── creator-fund/
│   ├── coins/
│   ├── live-earnings/
│   ├── brand-deal-rate/
│   ├── shop-profit/
│   └── rpm/
├── guides/
│   ├── monetization/
│   │   ├── index.mdx              # Hub page
│   │   ├── creator-fund.mdx
│   │   ├── creator-rewards.mdx
│   │   ├── brand-deals.mdx
│   │   ├── tiktok-shop.mdx
│   │   └── live-gifts.mdx
│   ├── growth/
│   │   ├── index.mdx              # Hub page
│   │   ├── algorithm.mdx
│   │   ├── engagement.mdx
│   │   ├── viral.mdx
│   │   └── hashtags.mdx
│   ├── business/
│   │   ├── index.mdx
│   │   ├── taxes.mdx
│   │   ├── contracts.mdx
│   │   └── niche-selection.mdx
│   └── niches/
│       ├── index.mdx
│       ├── beauty.mdx
│       ├── finance.mdx
│       └── fitness.mdx
├── data/
│   ├── earnings/
│   ├── engagement/
│   ├── platform-comparisons/
│   └── reference/
└── blog/
    ├── [all-existing-blog-posts].mdx
    └── [all-existing-news-posts].mdx
```

### 1.2 Create MDX Frontmatter Schema

Every MDX file MUST have this frontmatter. Create a TypeScript type for it:

```typescript
// lib/content/types.ts

export interface ArticleFrontmatter {
  title: string;                    // Processed title tag (Koray method)
  metaDescription: string;          // 150-160 chars, reflects article section order
  slug: string;                     // URL slug
  section: 'core' | 'outer';       // Core = monetization, Outer = authority
  category: string;                 // Parent category folder name
  subcategory?: string;             // Sub-category if applicable
  
  // Koray Framework Fields
  macroContext: string;             // Primary topic focus (ONE per page)
  microContext: string[];           // Bridge topics for supplementary content
  centralEntity: 'TikTok';         // Always TikTok for this site
  
  // SEO Fields
  primaryKeyword: string;
  secondaryKeywords: string[];
  
  // Information Tree (Internal Linking)
  parentArticle: string;            // URL path of parent page
  childArticles: string[];          // URL paths of child pages
  relatedArticles: string[];        // URL paths of related pages
  siblingArticles: string[];        // URL paths of sibling pages
  parentCalculator?: string;        // URL path of parent calculator (if applicable)
  
  // Content Structure
  headingVector: string[];          // Ordered heading sequence
  articleType: 'informative' | 'commercial' | 'transactional' | 'comparison' | 'data';
  
  // Metadata
  priorityScore: number;            // 1-100, determines sitemap priority
  wordCount: number;                // Target word count
  readTime?: number;                // Auto-calculated from content
  publishDate: string;              // ISO date
  updatedDate?: string;
  author: string;
  
  // Display
  featuredImage?: string;
  imageAlt?: string;                // Contextual expansion of image URL terms
  showCalculatorCTA?: boolean;      // Show inline calculator embed
  calculatorCTAType?: string;       // Which calculator to embed
}
```

### 1.3 Create Content Loading Utilities

```typescript
// lib/content/index.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleFrontmatter } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Get all articles from a specific section
 */
export async function getArticlesBySection(section: string): Promise<ArticleFrontmatter[]> {
  // Recursively read all .mdx files in content/{section}/
  // Parse frontmatter with gray-matter
  // Return sorted by priorityScore descending
}

/**
 * Get a single article by its slug and section
 */
export async function getArticleBySlug(section: string, slug: string) {
  // Read the MDX file
  // Parse frontmatter + content
  // Calculate readTime
  // Return { frontmatter, content, readTime }
}

/**
 * Get all articles (for sitemap generation)
 */
export async function getAllArticles(): Promise<ArticleFrontmatter[]> {
  // Read all content directories
  // Return flat array of all frontmatter
}

/**
 * Get related articles for internal linking
 */
export async function getRelatedArticles(currentSlug: string, frontmatter: ArticleFrontmatter) {
  // Read parentArticle, childArticles, relatedArticles, siblingArticles
  // Load their frontmatter (title, slug, section)
  // Return structured link data
}

/**
 * Get articles by parent calculator
 */
export async function getArticlesByCalculator(calculatorPath: string): Promise<ArticleFrontmatter[]> {
  // Find all articles where parentCalculator matches
  // Used to show "Related Guides" on calculator pages
}
```

### 1.4 Create Dynamic Route for Articles

Create a catch-all route that renders MDX content from any section:

```
app/
├── calculators/
│   └── [...slug]/
│       └── page.tsx       # Handles /calculators/tiktok-money/how-much-pay-per-1000-views
├── guides/
│   └── [...slug]/
│       └── page.tsx       # Handles /guides/monetization/creator-fund
├── data/
│   └── [...slug]/
│       └── page.tsx       # Handles /data/earnings/rpm-rates-by-niche
└── blog/
    └── [slug]/
        └── page.tsx       # Handles /blog/article-slug
```

IMPORTANT: Do NOT break existing calculator tool pages. The new article routes must coexist with the existing calculator tool routes. Check for route conflicts before implementing.

Each route page should:
1. Load the MDX content from the matching content/ directory
2. Generate static params at build time (generateStaticParams)
3. Generate metadata from frontmatter (generateMetadata)
4. Render the MDX with custom components
5. Include structured data (JSON-LD Article schema)
6. Include breadcrumbs component
7. Include related articles sidebar/section
8. Include calculator CTA if parentCalculator is set

### 1.5 Create SEO Utility Functions

```typescript
// lib/seo/index.ts

/**
 * Generate metadata object from article frontmatter
 * Following Koray's context signal methodology:
 * - Title tag: verbalized macro context with conditional synonym phrases
 * - Meta description: summary reflecting article section order
 * - OG tags: image with text overlay matching H1
 */
export function generateArticleMetadata(frontmatter: ArticleFrontmatter): Metadata {
  return {
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    keywords: [frontmatter.primaryKeyword, ...frontmatter.secondaryKeywords],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.metaDescription,
      type: 'article',
      publishedTime: frontmatter.publishDate,
      modifiedTime: frontmatter.updatedDate,
      authors: [frontmatter.author],
    },
    alternates: {
      canonical: `https://calculatecreator.com/${frontmatter.section === 'core' ? frontmatter.category : frontmatter.category}/${frontmatter.slug}`,
    },
  };
}

/**
 * Generate Article structured data (JSON-LD)
 */
export function generateArticleSchema(frontmatter: ArticleFrontmatter, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.metaDescription,
    datePublished: frontmatter.publishDate,
    dateModified: frontmatter.updatedDate || frontmatter.publishDate,
    author: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com',
    },
    mainEntityOfPage: url,
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(path: string, title: string) {
  const segments = path.split('/').filter(Boolean);
  const items = segments.map((segment, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    item: `https://calculatecreator.com/${segments.slice(0, i + 1).join('/')}`,
  }));
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calculatecreator.com' },
      ...items.map((item, i) => ({ ...item, position: i + 2 })),
    ],
  };
}
```

### 1.6 Create Shared Article Components

Build these reusable components for all article pages:

```typescript
// components/articles/ArticleLayout.tsx
// - Renders MDX content with proper heading hierarchy
// - Includes breadcrumbs at top
// - Includes table of contents sidebar (generated from headingVector)
// - Includes related articles section at bottom
// - Includes calculator CTA component if applicable
// - Includes structured data scripts

// components/articles/Breadcrumbs.tsx
// - Renders breadcrumb navigation from URL path
// - Includes BreadcrumbList schema markup

// components/articles/RelatedArticles.tsx
// - Shows parent, child, sibling, and related articles
// - Uses semantic anchor text (article title, not "read more")
// - First link = parent article (most important)

// components/articles/CalculatorCTA.tsx
// - Embeds inline calculator tool reference
// - "Calculate your exact earnings with our [Calculator Name]"
// - Links to the parent calculator page

// components/articles/TableOfContents.tsx
// - Auto-generated from heading structure
// - Sticky sidebar on desktop
// - Collapsible on mobile

// components/articles/AuthorBox.tsx
// - E-E-A-T signal: shows author/organization credentials

// components/articles/LastUpdated.tsx
// - Shows publish date and last updated date
// - Freshness signal
```

---

## PHASE 2: MIGRATE EXISTING CONTENT TO MDX

### 2.1 Migration Script

Create a script that converts existing hardcoded content into MDX files with proper frontmatter:

```typescript
// scripts/migrate-content.ts
// 
// For each existing page:
// 1. Extract the content from the component/JSON
// 2. Determine which section it belongs to (calculators, guides, data, blog)
// 3. Generate frontmatter with all required fields
// 4. Map internal links to new URL structure
// 5. Write the MDX file to the correct content/ directory
// 6. Output a migration report
//
// IMPORTANT: Handle these URL redirections:
// - /comparisons/* → /data/platform-comparisons/*
// - /reference/* → /data/reference/*
// - /metrics/* → /data/engagement/*
// - /niches/* → /guides/niches/*
// - /advanced/* → /guides/business/*
// - /news/* → /blog/*
```

### 2.2 Canonical Consolidation

These duplicate pages MUST be merged (keep the first, 301 redirect the second):

```
KEEP → REDIRECT
/guides/how-to-get-brand-deals/ → /guides/how-to-get-brand-deals-complete/
/guides/how-to-join-creator-fund/ → /guides/how-to-join-creator-fund-complete/
/guides/tiktok-coins/ → /guides/tiktok-coin-converter-complete-guide/
/guides/tiktok-creator-fund/ → /guides/how-creator-fund-works/
/guides/how-to-increase-engagement/ → /guides/increase-engagement-rate-tiktok/
/guides/tiktok-live-earnings-guide/ → /guides/tiktok-live-earnings-expectations/
/guides/brand-deals/ → /guides/how-to-price-brand-deals/
/reference/creator-fund-countries/ → /reference/creator-fund-eligible-countries/
/reference/shop-payment-schedule/ → /reference/tiktok-shop-payment-schedule/
/advanced/creator-tax-deductions/ → /advanced/creator-tax-deductions-guide/
/resources/brand-deal-contract/ → /resources/brand-deal-contract-template/
/blog/how-tiktok-creator-rewards-work-2026/ → /guides/creator-rewards-program/
/comparisons/tiktok-vs-youtube-earnings/ → /blog/tiktok-vs-youtube-shorts-earnings-2026/
```

Implement redirects in `next.config.js`:

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Canonical consolidations
      {
        source: '/guides/how-to-get-brand-deals-complete',
        destination: '/guides/how-to-get-brand-deals',
        permanent: true,
      },
      // ... all 13 redirects from the list above
      
      // Section restructuring redirects
      {
        source: '/comparisons/:slug',
        destination: '/data/platform-comparisons/:slug',
        permanent: true,
      },
      {
        source: '/reference/:slug',
        destination: '/data/reference/:slug',
        permanent: true,
      },
      {
        source: '/metrics/:slug',
        destination: '/data/engagement/:slug',
        permanent: true,
      },
      {
        source: '/niches/:slug',
        destination: '/guides/niches/:slug',
        permanent: true,
      },
      {
        source: '/advanced/:slug',
        destination: '/guides/business/:slug',
        permanent: true,
      },
      {
        source: '/news/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};
```

---

## PHASE 3: INTERNAL LINKING SYSTEM

### 3.1 Automated Internal Linking Component

Build a system that reads the frontmatter relationships and generates contextual internal links:

```typescript
// lib/content/linking.ts

/**
 * Given an article's frontmatter, generate all internal link data
 * Following Koray's rules:
 * - First link = parent article (most weight)
 * - Parent calculator link in main content area
 * - Sibling links in middle sections
 * - Related links in supplementary content
 * - Child links distributed throughout
 */
export async function generateInternalLinks(frontmatter: ArticleFrontmatter) {
  const links = {
    parent: null,         // 1 link - highest priority
    parentCalculator: null, // 1 link - calculator CTA
    siblings: [],         // 2-3 links - same cluster
    children: [],         // 1-3 links - deeper content
    related: [],          // 2-4 links - cross-cluster
  };
  
  // Load frontmatter for each linked article
  // Return with title (for anchor text) and URL
  
  return links;
}
```

### 3.2 Calculator ↔ Article Bidirectional Linking

CRITICAL: Update existing calculator pages to show "Related Guides" section:

```typescript
// On every calculator page, add at the bottom:
// 
// <RelatedGuides calculatorPath="/calculators/tiktok-money" />
//
// This component:
// 1. Calls getArticlesByCalculator("/calculators/tiktok-money")
// 2. Renders a grid of related guide cards
// 3. Uses semantic anchor text (article titles)
// 4. Links sorted by priorityScore
```

---

## PHASE 4: SITEMAP & TECHNICAL SEO

### 4.1 Update Sitemap Generation

The sitemap must include all new article pages with priority scores from frontmatter:

```typescript
// app/sitemap.ts

import { getAllArticles } from '@/lib/content';

export default async function sitemap() {
  const articles = await getAllArticles();
  
  const articleUrls = articles.map(article => ({
    url: `https://calculatecreator.com/${article.category}/${article.slug}`,
    lastModified: new Date(article.updatedDate || article.publishDate),
    changeFrequency: article.section === 'outer' ? 'monthly' : 'weekly',
    priority: article.priorityScore / 100, // Convert 1-100 to 0-1
  }));
  
  return [
    // Existing calculator tool pages (keep as-is)
    // ... existing sitemap entries
    
    // New article pages
    ...articleUrls,
  ];
}
```

### 4.2 Robots.txt

Ensure robots.txt allows crawling of all content sections:

```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/

Sitemap: https://calculatecreator.com/sitemap.xml
```

---

## PHASE 5: ARTICLE TEMPLATE FOR CONTENT PRODUCTION

### 5.1 Create Article Generation Script

Since you'll be producing 60 articles/month, create a script that scaffolds new MDX files:

```typescript
// scripts/create-article.ts
//
// Usage: npx ts-node scripts/create-article.ts \
//   --title "How Much Does TikTok Pay Per 1,000 Views in 2026" \
//   --section core \
//   --category calculators/tiktok-money \
//   --primary-keyword "how much does tiktok pay per 1000 views" \
//   --parent "/calculators/tiktok-money" \
//   --type informative \
//   --priority 95 \
//   --words 2500
//
// This generates the MDX file with complete frontmatter template
// and heading structure ready for content to be filled in.
```

### 5.2 Batch Article Creation from CSV

For producing articles at scale, create a batch script:

```typescript
// scripts/batch-create-articles.ts
//
// Reads a CSV file with columns:
// title, slug, section, category, primaryKeyword, secondaryKeywords,
// parentArticle, parentCalculator, articleType, priorityScore, wordCount
//
// Creates all MDX files with frontmatter templates.
// Outputs a report of created files.
//
// Usage: npx ts-node scripts/batch-create-articles.ts articles-phase1.csv
```

---

## EXECUTION ORDER

Follow this exact sequence:

1. **Audit current codebase** (Phase 0) — understand before changing
2. **Install dependencies** and create content/ directory structure (Phase 1.1)
3. **Create TypeScript types** for frontmatter (Phase 1.2)
4. **Create content loading utilities** (Phase 1.3)
5. **Create ONE test article** as MDX file and verify it renders correctly
6. **Create dynamic routes** for all sections (Phase 1.4) — verify no route conflicts with existing calculator pages
7. **Create SEO utilities** (Phase 1.5)
8. **Create shared components** (Phase 1.6)
9. **Add redirects** to next.config.js (Phase 2.2)
10. **Migrate existing content** to MDX (Phase 2.1) — run migration script
11. **Verify all existing pages** still work at their new URLs
12. **Build internal linking system** (Phase 3)
13. **Update calculator pages** with Related Guides sections (Phase 3.2)
14. **Update sitemap** (Phase 4)
15. **Create article scaffolding scripts** (Phase 5)
16. **Create 3 sample articles** with full content to verify the complete pipeline

---

## CONSTRAINTS & RULES

- **DO NOT break existing calculator tool pages.** These are the most valuable pages on the site. All changes must be additive — existing routes must continue to work.
- **DO NOT change the existing design system.** New article pages should use the same design tokens, fonts, colors, and component patterns as existing pages.
- **DO NOT use a CMS.** Keep everything file-based. MDX files in the codebase, version controlled in git.
- **Every MDX file MUST have complete frontmatter.** No article should be published without all required fields.
- **URL slugs must be short** — 1-4 words maximum. Koray emphasizes shorter URLs reduce cost of retrieval.
- **Every article MUST contain "TikTok" in the title tag** — this reinforces the central entity.
- **Test routes incrementally** — verify after each phase before moving to the next.
- **Preserve existing i18n calculator routes** — /calculator/de/, /calculator/es/, etc. must not be affected.

---

## VERIFICATION CHECKLIST

After implementation, verify:

- [ ] All existing calculator pages render correctly at their original URLs
- [ ] All existing i18n calculator pages work (/calculator/de/, /calculator/es/, etc.)
- [ ] New MDX articles render at their correct URLs
- [ ] Frontmatter generates correct title tags and meta descriptions
- [ ] Structured data (JSON-LD) appears in page source
- [ ] Breadcrumbs render correctly and include schema markup
- [ ] Internal links work bidirectionally (calculator → article, article → calculator)
- [ ] Related articles component shows correct linked content
- [ ] Sitemap includes all new article URLs with correct priorities
- [ ] Redirects work for all 13 canonical consolidations
- [ ] Redirects work for all section restructuring moves
- [ ] `npm run build` succeeds with no errors
- [ ] No route conflicts between calculator tools and article content
- [ ] Article scaffolding script creates valid MDX files
