# Technical SEO Audit - CalculateCreator.com
**Date:** February 20, 2026
**Site:** https://calculatecreator.com
**Pages:** 408 in sitemap
**Overall Score:** 68/100 (C+)

---

## Score Breakdown

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Crawlability | 15% | 82 | 12.3 |
| Meta Tags | 15% | 52 | 7.8 |
| Schema Markup | 10% | 65 | 6.5 |
| Internal Linking | 15% | 72 | 10.8 |
| Core Web Vitals | 15% | 70 | 10.5 |
| Image Optimization | 10% | 60 | 6.0 |
| Mobile | 10% | 80 | 8.0 |
| Security | 5% | 88 | 4.4 |
| Content Structure | 5% | 75 | 3.75 |
| **TOTAL** | **100%** | | **70.1** |

---

## Critical Issues (Fix Immediately)

### 1. Homepage Has ZERO JSON-LD Structured Data
**Severity:** Critical | **Effort:** 5 minutes
**File:** `src/app/page.tsx`

The `HomepageSchema` component exists at `src/components/seo/HomepageSchema.tsx` and defines 6 rich schemas (Organization, WebSite with SearchAction, FAQPage, BreadcrumbList, ItemList, CollectionPage) -- but it is **never imported or rendered** on the homepage.

**Impact:** Missing sitelinks searchbox in SERPs, no Organization Knowledge Panel signals, no FAQ rich results on the homepage.

**Fix:**
```tsx
// Add to src/app/page.tsx
import { HomepageSchema } from '@/components/seo/HomepageSchema';

// In the component JSX:
<HomepageSchema />
```

### 2. 80-100+ Pages Have Wrong og:url (Points to Homepage)
**Severity:** Critical | **Effort:** 1-2 hours
**File:** `src/app/layout.tsx` + section layouts

Pages that don't explicitly set `openGraph` metadata inherit the root `layout.tsx` defaults, which hardcode `og:url: 'https://calculatecreator.com'`. This affects:

- **All 20+ news pages** -- og:url, og:title, og:description all point to homepage
- **All 7 comparison pages** -- same issue
- **All reference/utility pages** (about, faq, glossary, etc.)
- **Some calculator pages** (tiktok-money, engagement-rate, coins, brand-deal-rate) have og:url pointing to `/calculators/` parent

**Impact:** When users share these pages on Facebook, LinkedIn, or Twitter, the preview shows homepage content instead of the article.

**Fix:** Remove hardcoded `url` from the `openGraph` object in `layout.tsx`, or add explicit metadata to each affected section. Most urgent: news pages and comparison pages.

### 3. Publisher Logo (logo.png) Returns 404
**Severity:** High | **Effort:** 10 minutes
**File:** `public/logo.png`

`https://calculatecreator.com/logo.png` returns HTTP 404. This URL is referenced as `publisher.logo.url` in JSON-LD schemas across **300+ pages** (every Article, NewsArticle, and Organization schema).

**Fix:** Either deploy a `logo.png` file to the `public/` directory, or update all schema references to use the existing `/images/calculate-creator-transparent-v2.png`.

---

## High Priority Issues

### 4. Calculator Page Titles Are Broken
**Effort:** 2-3 hours | **Affected:** 35+ pages

Titles use a broken auto-generation pattern producing results like:
- "TikTok **Tiktok Money** Calculator and Earnings Tool Guide" (double TikTok, wrong capitalization)
- "TikTok **Engagement Rate** Calculator and Earnings Tool" (keyword-stuffed)
- "TikTok **Rpm** Calculator and Earnings Tool Guide 2026" (wrong casing)

The slug-to-title conversion doesn't handle the "TikTok" brand name properly, resulting in "Tiktok" and duplicated prefixes.

### 5. Meta Descriptions Are Templated and Broken
**Effort:** 1-2 hours | **Affected:** 200+ pages

Three patterns of issues:
1. **Calculator pages:** Nearly identical descriptions across 35+ pages: "Use this TikTok {slug} calculator to estimate earnings..."
2. **MDX articles:** Description repeats headline then adds boilerplate with "benchmarks" appearing twice: "{Headline}. {keyword} with data, benchmarks, and expert analysis. Includes benchmarks, monetization"
3. **Truncation:** Some descriptions cut off mid-sentence (ending with comma)

**Fix:** Update `normalizeSeoDescription()` in `src/lib/content/article-page.tsx` to avoid the "benchmarks" duplication. Write unique descriptions for calculator pages.

### 6. No Hreflang Tags for Localized Pages
**Effort:** 2-3 hours | **Affected:** 7 pages

Six localized calculator pages exist (`/calculator/de/`, `/es/`, `/fr/`, `/it/`, `/my/`, `/pt-br/`) but:
- No hreflang link tags connect them to the English version
- All render with `lang="en"` instead of their actual language
- Google may treat them as duplicate content

---

## Medium Priority Issues

### 7. www Subdomain Unreachable
`www.calculatecreator.com` returns connection refused instead of redirecting to the non-www canonical. Configure DNS and Firebase Hosting to handle this.

### 8. Double-Slash URLs in Internal Links
Some CTA buttons link to URLs like `/calculators/tiktok-money//` (double trailing slash), which return 307 temporary redirects. Find and fix these href values.

### 9. Homepage Missing og:image in Page Metadata
The homepage's `page.tsx` metadata override doesn't include `images` in the `openGraph` object. While it may fall back to the layout default, explicitly setting it is safer.

---

## What's Working Well

- **Canonical tags:** 100% correct across all sampled pages -- self-referencing with proper absolute URLs
- **Breadcrumbs:** Present on all content pages with matching visual and JSON-LD implementations
- **HTTPS + HSTS:** Properly configured with preload directive
- **Security headers:** HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all present
- **Brotli compression:** 90% size reduction (117KB -> 12KB for homepage)
- **TTFB:** 134-328ms across all pages -- well within the 800ms threshold
- **Sitemap:** 408 URLs matching expectations, properly formatted XML
- **robots.txt:** Clean configuration with appropriate allow/disallow rules
- **301 redirects:** 26 legacy URL redirects properly configured in firebase.json
- **Calculator schemas:** SoftwareApplication, FAQPage, BreadcrumbList present and well-structured
- **Article schemas:** Article/BreadcrumbList/Person properly implemented on content pages
- **Font loading:** WOFF2 with display:swap prevents FOIT

---

## Performance Notes

| Metric | Value | Rating |
|--------|-------|--------|
| Avg TTFB | 227ms | Good |
| Homepage size | 115KB | OK |
| Calculator avg size | 178KB | Large |
| Compression | Brotli ~90% | Excellent |
| Static asset cache | 1 year immutable | Excellent |
| HTML cache | Must-revalidate | Good |
| Fonts | 2 families, preloaded WOFF2 | Good |

**Note:** PageSpeed Insights API quota was exceeded during testing. Manual Lighthouse testing is recommended to obtain LCP, INP, and CLS scores.

---

## Caching Strategy Review

| Content Type | Cache-Control | Assessment |
|---|---|---|
| Static assets (JS/CSS/fonts/images) | `max-age=31536000, immutable` | Excellent |
| Calculator pages | `max-age=86400, must-revalidate` | Good |
| Guide pages | `max-age=86400, must-revalidate` | Good |
| News pages | `max-age=3600, must-revalidate` | Good |
| Homepage | `max-age=3600` | Could be 86400 |
| Blog pages | `max-age=3600` | Inconsistent with guides |

---

## Top 10 Priority Fixes (Ordered by Impact/Effort)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 1 | Import HomepageSchema on homepage | 5 min | Enables 6 schema types + rich results |
| 2 | Fix og:url inheritance across 100+ pages | 1-2 hr | Correct social sharing for 24% of site |
| 3 | Deploy logo.png (or update schema refs) | 10 min | Fix broken logo in 300+ schemas |
| 4 | Fix calculator title generation | 2-3 hr | Fix "TikTok Tiktok" bug on 35 pages |
| 5 | Fix meta description template | 1-2 hr | Remove "benchmarks" duplication on 200+ pages |
| 6 | Add hreflang for localized pages | 2-3 hr | Proper international SEO for 7 pages |
| 7 | Configure www redirect | 30 min | Recover traffic/links from www URLs |
| 8 | Fix double-slash internal links | 30 min | Eliminate 307 redirects |
| 9 | Fix calculator og:url (/calculators/ parent) | 30 min | Correct social sharing for top pages |
| 10 | Add og:image to homepage metadata | 5 min | Ensure social preview image |

**Estimated total effort for top 10:** 8-12 hours

---

## Files to Modify

| File | Issues |
|---|---|
| `src/app/page.tsx` | #1 (add HomepageSchema), #10 (add og:image) |
| `src/app/layout.tsx` | #2 (remove hardcoded og:url) |
| `public/logo.png` | #3 (create file) |
| Calculator layout.tsx files | #4 (title pattern), #9 (og:url) |
| `src/lib/content/article-page.tsx` | #5 (normalizeSeoDescription) |
| `src/app/calculator/*/layout.tsx` | #6 (hreflang, lang attribute) |
| Firebase Hosting / DNS | #7 (www redirect) |
| Various component files | #8 (double-slash hrefs) |

---

## Next Steps

1. **Immediate (this week):** Fixes #1, #3, #10 -- under 30 minutes total, high impact
2. **Short-term (next 2 weeks):** Fixes #2, #4, #5, #8, #9 -- meta tag overhaul
3. **Medium-term (next month):** Fixes #6, #7 -- international SEO and DNS
4. **Ongoing:** Generate unique OG images per page type, reduce page sizes, expand navigation
5. **Monitor:** Run PageSpeed Insights manually to get CWV baseline scores
