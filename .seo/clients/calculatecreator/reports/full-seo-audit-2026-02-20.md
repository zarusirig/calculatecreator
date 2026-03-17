# COMPREHENSIVE SEO AUDIT REPORT
## CalculateCreator.com
**Date:** February 20, 2026 | **Pages Analyzed:** 408 | **Audit Type:** Full Site Audit

---

## OVERALL SCORE: 62/100 (Grade: C)

| Audit Area | Score | Grade | Weight | Weighted |
|------------|-------|-------|--------|----------|
| Technical SEO | 68/100 | C+ | 25% | 17.0 |
| Content Optimization | 68/100 | C+ | 20% | 13.6 |
| Keyword Strategy | 55/100 | D+ | 20% | 11.0 |
| AI Search (AEO) | 70/100 | C | 15% | 10.5 |
| Backlinks & Authority | 10/100 | F | 20% | 2.0 |
| **OVERALL** | | **C** | **100%** | **54.1** |

> **Bottom Line:** CalculateCreator has the most comprehensive TikTok calculator toolkit on the web (45+ tools, 408 pages) but is severely held back by **zero backlinks**, **broken meta tags on 100+ pages**, **non-rendering homepage schema**, and **missing high-traffic utility tools**. The content quality is there -- the distribution, technical execution, and tool diversity are not.

---

## TOP 10 CRITICAL FIXES (Ranked by Impact/Effort)

### 1. Import HomepageSchema Component
**Effort:** 5 minutes | **Impact:** CRITICAL | **Pages:** 1 (but site-wide SEO effect)

The `HomepageSchema.tsx` component contains 6 schema types (Organization, WebSite with SearchAction, FAQPage, BreadcrumbList, ItemList, CollectionPage) but is **never imported** in `src/app/page.tsx`. Zero structured data renders on the homepage.

**File:** `src/app/page.tsx`
```tsx
import { HomepageSchema } from '@/components/seo/HomepageSchema';
// Add <HomepageSchema /> in component JSX
```

### 2. Fix `normalizeSeoTitle()` Keyword Prepending
**Effort:** 30 min | **Impact:** CRITICAL | **Pages:** 100+ MDX articles

The function prepends lowercase keywords before article titles, creating spam-looking results:
`"best time to post tiktok - Best Posting Times for TikTok by..."`

**File:** `src/lib/content/article-page.tsx`, line 30

### 3. Fix "TikTok Tiktok" Duplication on Money Calculator
**Effort:** 5 min | **Impact:** CRITICAL | **Pages:** 1 (highest-traffic calculator)

Title reads: `"TikTok Tiktok Money Calculator and Earnings Tool Guide"`

**File:** `src/app/calculators/tiktok-money/page.tsx`, line 17

### 4. Deploy logo.png (Fix 404 in 300+ Schemas)
**Effort:** 10 min | **Impact:** HIGH | **Pages:** 300+

`https://calculatecreator.com/logo.png` returns 404. Referenced as `publisher.logo.url` in Article/Organization schemas across the entire site.

**Fix:** Deploy a file to `public/logo.png` or update schema refs to use the existing image.

### 5. Fix og:url Inheritance (Wrong URL on 100+ Pages)
**Effort:** 1-2 hrs | **Impact:** HIGH | **Pages:** 80-100+

Pages inheriting from `src/app/layout.tsx` get `og:url: 'https://calculatecreator.com/'` instead of their own URL. Affects all news, comparison, and reference pages.

**File:** `src/app/layout.tsx`

### 6. Fix `normalizeSeoDescription()` Template Bug
**Effort:** 30 min | **Impact:** HIGH | **Pages:** 200+

Double "benchmarks" text, truncated descriptions, and cookie-cutter patterns across all MDX articles.

**File:** `src/lib/content/article-page.tsx`, line 56

### 7. Unify Brand Name Across All Schemas
**Effort:** 30 min | **Impact:** HIGH | **Pages:** 300+

- `HomepageSchema.tsx` uses: **"CalculateCreator.com"**
- `CalculatorSchema.tsx` uses: **"TikTok Calculator"**
- `ArticleSchema.tsx` uses: **"TikTok Calculator"**

This splits entity signals. Use **"CalculateCreator"** everywhere.

### 8. Add OG/Twitter Meta to Calculator Pages
**Effort:** 1-2 hrs | **Impact:** HIGH | **Pages:** 40+

All calculator pages missing `openGraph` and `twitter` metadata exports. No social sharing previews.

### 9. Launch on Product Hunt (Week 1)
**Effort:** 1 day | **Impact:** HIGH | **Backlink:** DA 90

Zero external backlinks currently. Product Hunt launch is the fastest path to a high-authority backlink, brand awareness, and referral traffic.

### 10. Add Direct Answers to First 50 Words of Calculator Pages
**Effort:** 2-3 hrs | **Impact:** HIGH | **Pages:** 10+ key calculators

Calculator pages start with descriptive text instead of direct factual answers. AI systems and featured snippets extract opening content.

**Example:** Start TikTok Money Calculator with: *"TikTok pays creators $0.02-$0.04 per 1,000 views through the Creator Fund, or $0.40-$1.00 per 1,000 views through the Creator Rewards Program."*

---

## DETAILED AUDIT RESULTS

---

### A. TECHNICAL SEO (68/100 -- Grade: C+)

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

**What's Working:**
- 100% correct canonical tags across all pages
- Brotli compression with ~90% size reduction
- Fast TTFB (avg 227ms)
- Strong security headers (HSTS with preload, X-Frame-Options, CSP)
- Clean robots.txt and sitemap (408 URLs)
- Proper 301 redirects for 26 legacy URLs
- Calculator schemas (SoftwareApplication, FAQPage, BreadcrumbList) well-structured

**What's Broken:**
- Homepage: ZERO JSON-LD (component not imported)
- 80-100+ pages: wrong og:url (points to homepage)
- logo.png: 404 (referenced in 300+ schemas)
- 35+ calculator titles: "TikTok Tiktok" bug from slug title-casing
- 200+ articles: broken meta descriptions from normalizer
- 7 localized pages: no hreflang tags, wrong lang attribute
- www subdomain: unreachable (connection refused)
- Double-slash URLs in some internal links causing 307 redirects

**Files to Modify:**
| File | Issues |
|------|--------|
| `src/app/page.tsx` | Add HomepageSchema import, add og:image |
| `src/app/layout.tsx` | Fix hardcoded og:url |
| `public/logo.png` | Create or fix reference |
| `src/lib/content/article-page.tsx` | Fix normalizeSeoTitle() and normalizeSeoDescription() |
| Calculator page.tsx files | Fix titles, add OG/Twitter meta |
| Localized calculator layouts | Add hreflang, fix lang attribute |

---

### B. CONTENT OPTIMIZATION (68/100 -- Grade: C+)

**Pages Scored:**

| Page | Type | Score | Grade |
|------|------|-------|-------|
| TikTok Algorithm Explained | Guide | 80/100 | B |
| How to Make Money on TikTok | Guide | 79/100 | B |
| TikTok vs YouTube Shorts | Data | 73/100 | C+ |
| Homepage | Homepage | 72/100 | C+ |
| Charli D'Amelio Earnings | Blog | 72/100 | C+ |
| Earnings Revenue Hub | Hub | 67/100 | C- |
| Brand Deal Rate Calculator | Calculator | 66/100 | D+ |
| Coins Calculator | Calculator | 65/100 | D+ |
| Best TikTok Niches 2026 | Blog | 64/100 | D+ |
| Engagement Rate Calculator | Calculator | 64/100 | D+ |
| TikTok Money Calculator | Calculator | 62/100 | D+ |
| Avg TikTok Earnings Per Views | Data | 61/100 | D+ |
| Best Posting Times | Guide | 58/100 | D |

**E-E-A-T Assessment:**
- **Experience:** WEAK -- No first-hand creator evidence, no earnings screenshots
- **Expertise:** MODERATE -- Author bylines exist but lack verifiable credentials
- **Authoritativeness:** WEAK -- No press mentions, no social proof, no industry recognition
- **Trustworthiness:** STRONG -- HTTPS, privacy policy, editorial policy, disclaimers

**Content Decay Issues:**
- `/guides/content-strategy-2025/` -- URL contains "2025"
- `/news/tiktok-ban-delayed-december-2025/` -- References past event as future
- 5 pages below competitive word count thresholds

**Key Strengths:**
- Excellent internal linking (30-58 links per page)
- Clean URL structure with consistent trailing slashes
- Deep content on key pages (3,800-4,000+ words on money calc, brand deal calc, monetization guide)
- Proper heading hierarchy (H1>H2>H3) on most pages

---

### C. KEYWORD STRATEGY (55/100 -- Grade: D+)

**408 Pages Across 18 Topic Clusters:**

```
Earnings/Money     [##########] 62 pages -- Very Strong (possible cannibalization)
Monetization       [#######   ] 30 pages -- Strong
Growth/Algorithm   [######    ] 28 pages -- Strong
Engagement         [######    ] 24 pages -- Strong
Brand Deals        [#####     ] 22 pages -- Strong
Creator Fund       [#####     ] 20 pages -- Strong
News               [#####     ] 20 pages -- Moderate
Coins/Gifts/Live   [####      ] 18 pages -- Strong
Niche Earnings     [####      ] 18 pages -- Moderate
TikTok Shop        [###       ] 14 pages -- NEEDS EXPANSION
Platform Compare   [###       ] 14 pages -- NEEDS EXPANSION
Business/Legal     [###       ] 14 pages -- Moderate
Ads/Commerce       [##        ] 12 pages -- Moderate
Analytics/Metrics  [##        ] 10 pages -- WEAK
RPM/CPM            [##        ] 10 pages -- Moderate
Celebrity Earnings [#         ]  6 pages -- WEAK
Follower Growth    [#         ]  6 pages -- WEAK
Utility Tools      [          ]  0 pages -- MISSING (CRITICAL GAP)
```

**Critical Finding: Missing Utility Tools**
The site has ZERO interactive utility tools (hashtag generators, follower counters, bio generators, username checkers) despite these being some of the highest-volume keywords:

| Missing Tool | Est. Monthly Traffic |
|-------------|---------------------|
| TikTok Follower Count Checker | 50,000 - 200,000 |
| TikTok Hashtag Generator | 15,000 - 30,000 |
| YouTube Money Calculator | 10,000 - 25,000 |
| TikTok Bio Generator | 5,000 - 10,000 |
| TikTok Username Checker | 5,000 - 10,000 |
| TikTok Caption Generator | 3,000 - 8,000 |
| **Total Missing Opportunity** | **88,000 - 283,000** |

**Intent Imbalance:**
- 60% Informational (too high)
- 26% Commercial Investigation
- 11% Transactional (should be 20%+)
- 3% Navigational

**Top 7 Keyword Gaps (all transactional):**
1. "tiktok follower count" -- No page
2. "tiktok hashtag generator" -- No page
3. "tiktok bio generator" -- No page
4. "tiktok username checker" -- No page
5. "tiktok caption generator" -- No page
6. "how much does tiktok pay" -- Scattered (needs hub page)
7. "tiktok trending sounds" -- No page

**10+ New Competitors Discovered:**
Phlanx, HypeAuditor, Collabstr, TikCalculator.com, Countik, TokChart, DemandSage, SimpTok, TikTokCoinCalculator.com

---

### D. AI SEARCH / AEO (70/100 -- Grade: C)

| Category | Score | Max | Grade |
|----------|-------|-----|-------|
| AI Visibility | 20 | 25 | D |
| Brand SERP Ownership | 12 | 15 | C |
| Entity Optimization | 5 | 15 | **F** |
| Structured Data | 14 | 20 | B- |
| Content Format for AI | 12 | 15 | B- |
| PAA Coverage | 7 | 10 | B |

**AI Overview Visibility: 2/10 keywords**
- Only appears for "tiktok brand deal rate calculator" (positions 2-9, 5 listings!)
- Only appears for "tiktok live earnings calculator" (position 10)
- Zero AI Overview citations across all 10 target keywords

**Brand SERP: 45/100**
- Brand name search returns own pages (good) but homepage doesn't rank first
- No Knowledge Panel, no social profiles in SERPs
- Semi-branded "calculate creator tiktok" ranks position 8

**Entity Optimization: 25/100 (WEAKEST AREA)**
- No Wikipedia page, no Wikidata entry
- No verified social profiles (Twitter, Facebook claimed in schema but not active)
- No LinkedIn, TikTok, YouTube, Instagram presence
- Brand name inconsistency ("CalculateCreator.com" vs "TikTok Calculator")

**Schema Rendering Bug (BLOCKER):**
Homepage has 6 schema types in source code but ZERO render on live site. This blocks Organization entity signals, WebSite SearchAction, and FAQPage rich results.

**PAA Coverage:**
39 PAA questions identified, 79% partially covered in content, but only 46% have dedicated landing pages. 8 high-value PAA questions have no content at all.

---

### E. BACKLINKS & AUTHORITY (10/100 -- Grade: F)

**Current Status: ZERO discoverable external backlinks.**

| Metric | CalculateCreator | Exolyt | TokCount |
|--------|-----------------|--------|----------|
| Calculators | **45+** | 3 | 0 |
| Data Pages | **40+** | ~10 | 0 |
| Guides | **10+** | ~20 | 0 |
| Tool Roundup Mentions | **0** | 5+ | 0 |
| Editorial Reviews | **0** | 3+ | 1 |
| Social Profiles | **0** | 3+ | 1 |
| Monthly Traffic | Unknown | ~98K | ~179K |

> **The problem is not content quality -- it is entirely a distribution problem.** Exolyt has 3 calculators and appears in 5+ major roundup articles. CalculateCreator has 45+ calculators and appears in NONE.

**20 Link Opportunities Identified:**
- 5 Critical Priority (DA 80-90): Filmora, Sprout Social, Hootsuite, Product Hunt
- 10 High Priority (DA 60-80): Influencer Marketing Hub, Social Champ, DemandSage, Shopify
- 5 Medium Priority (DA 55-70): MostlyBlogging, directories, social media roundups

**90-Day Outreach Plan:**

| Phase | Timeline | Expected Links | Focus |
|-------|----------|---------------|-------|
| Phase 1: Foundation | Days 1-30 | 12-22 links | Product Hunt, directories, social profiles, HARO |
| Phase 2: Content-Based | Days 31-60 | 8-15 links | Tool roundup outreach, guest posts, data citations |
| Phase 3: Digital PR | Days 61-90 | 15-40 links | "State of TikTok Creator Earnings 2026" report, infographics, partnerships |
| **Total** | **90 days** | **35-77 links** | **18-30 from DA 60+ domains** |

---

## STRATEGIC ROADMAP

### WEEK 1 (Quick Wins -- 2-3 hours total)
- [ ] Import HomepageSchema in `src/app/page.tsx` (5 min)
- [ ] Fix "TikTok Tiktok" in money calculator title (5 min)
- [ ] Deploy logo.png or fix schema references (10 min)
- [ ] Unify brand name to "CalculateCreator" in all schemas (30 min)
- [ ] Add direct factual answers to first 50 words of top 5 calculator pages (1 hr)
- [ ] Launch Product Hunt listing (1 day)
- [ ] Create social profiles: X, LinkedIn, TikTok (1 hr)

### WEEKS 2-3 (Meta Tag Overhaul)
- [ ] Rewrite `normalizeSeoTitle()` to stop keyword prepending (1 hr)
- [ ] Rewrite `normalizeSeoDescription()` to fix duplications (1 hr)
- [ ] Fix og:url inheritance in layout.tsx (1-2 hrs)
- [ ] Add OG/Twitter meta to all calculator pages (2 hrs)
- [ ] Fix double-slash internal link bug (30 min)
- [ ] Submit to directories (Trustpilot, G2, Britopian, etc.)

### MONTH 1 (Content & Outreach)
- [ ] Build TikTok Hashtag Generator tool (new page)
- [ ] Create "How Much Does TikTok Pay" definitive hub page
- [ ] Add FAQ sections + FAQPage schema to all guide/data pages
- [ ] Add hreflang tags for 7 localized pages
- [ ] Configure www subdomain redirect
- [ ] Begin Phase 1 outreach (Filmora, Sprout Social, Hootsuite pitches)
- [ ] Add images to calculator pages

### QUARTER 1 (Growth Phase)
- [ ] Build Bio Generator, Caption Generator, Username Checker tools
- [ ] Expand TikTok Shop cluster (5+ new articles)
- [ ] Add 4+ new platform comparison pages
- [ ] Publish "State of TikTok Creator Earnings 2026" data study
- [ ] Execute full 90-day outreach plan
- [ ] Strengthen E-E-A-T (author pages, testimonials, social proof)
- [ ] Update all "2025" content references to 2026

### QUARTER 2 (Scale Phase)
- [ ] Build real-time follower counter (requires API investment)
- [ ] Build YouTube Money Calculator (cross-platform expansion)
- [ ] Build TikTok Account Audit tool
- [ ] Apply for Google Knowledge Panel
- [ ] Create Wikidata entry
- [ ] Target 100+ referring domains

---

## TRAFFIC IMPACT PROJECTIONS

| Action Category | Est. Monthly Traffic Gain |
|----------------|--------------------------|
| Fix broken titles/descriptions (100+ pages) | 5,000 - 15,000 |
| Fix homepage schema (rich results) | 2,000 - 5,000 |
| New utility tools (hashtag gen, bio gen, etc.) | 28,000 - 58,000 |
| Follower count checker (with API) | 50,000 - 200,000 |
| "How Much Does TikTok Pay" hub page | 8,000 - 15,000 |
| Featured snippet wins (5 targets) | 3,000 - 8,000 |
| FAQ schema implementation | 2,000 - 5,000 |
| Backlink campaign (90-day) | 10,000 - 30,000 |
| YouTube Money Calculator | 10,000 - 25,000 |
| **TOTAL POTENTIAL** | **118,000 - 361,000/month** |

---

## AUDIT FILES REFERENCE

All detailed data saved to `.seo/clients/calculatecreator/`:

| File | Contents |
|------|----------|
| `technical/audit-2026-02-20.json` | Full technical audit data (37.7KB) |
| `technical/audit-summary-2026-02-20.md` | Technical audit summary |
| `content/content-audit-2026-02-20.json` | Content scoring data (57KB) |
| `content/content-audit-summary-2026-02-20.md` | Content audit summary |
| `keywords/keyword-audit-2026-02-20.json` | Keyword strategy data |
| `keywords/keyword-audit-summary-2026-02-20.md` | Keyword audit summary |
| `aeo/aeo-audit-2026-02-20.json` | AI search visibility data |
| `aeo/aeo-audit-summary-2026-02-20.md` | AEO audit summary |
| `backlinks/backlink-audit-2026-02-20.json` | Backlink profile data |
| `backlinks/backlink-audit-summary-2026-02-20.md` | Backlink audit summary |
| `reports/full-seo-audit-2026-02-20.md` | This comprehensive report |

---

*Full SEO Audit performed by 5 parallel Claude Opus agents on February 20, 2026.*
*Powered by SEO AEO Pro plugin for Claude Code.*
