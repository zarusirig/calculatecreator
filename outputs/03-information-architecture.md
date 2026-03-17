# Information Architecture: tiktokcalculator.net

**Central Entity:** TikTok Creator Monetization
**Date:** 2026-03-18
**Skill:** 03 — Information Architecture (Root-Seed-Node)

---

## 1. Current State Audit

### 1.1 Top-Level Sections (31 directories + homepage)

| # | Section | Type | Pages | Problem |
|---|---------|------|-------|---------|
| 1 | `/calculators/` | Core — tools | ~47 calcs + MDX nodes | Mixed flat + nested (3 levels deep in some) |
| 2 | `/calculator/` | Core — i18n calcs | 6 locales | Confusing: singular vs plural with `/calculators/` |
| 3 | `/guides/` | Core — how-to | ~80+ articles | Good sub-silos (business, growth, monetization, niches) |
| 4 | `/data/` | Core — stats | ~40+ articles | Good sub-silos (earnings, engagement, platform-comparisons, reference) |
| 5 | `/comparisons/` | Outer | 7 pages | Could be under `/data/` |
| 6 | `/news/` | Outer | 20 pages | OK as standalone |
| 7 | `/blog/` | Outer | Dynamic slug | Overlaps with guides/news |
| 8 | `/reference/` | Outer | 7 pages | Overlaps with `/data/reference/` |
| 9 | `/niches/` | Outer | 4 pages | Overlaps with `/guides/niches/` |
| 10 | `/metrics/` | Outer | 3 pages | Could be under `/data/` or `/calculators/` |
| 11 | `/advanced/` | Outer | 2 pages | Orphan section — belongs in `/guides/` |
| 12 | `/resources/` | Outer | 2 pages | Orphan section — belongs in `/guides/` |
| 13 | `/tools/` | Legacy | Redirected to `/calculators/` | Still has page.tsx + rpm subpage |
| 14 | `/benchmarks/` | Outer | 1 page | Could be under `/data/` |
| 15 | `/region/` | Outer | 1 page | Orphan — merge into `/data/` |
| 16 | `/bookmarks/` | Utility | 1 page | User feature, not content |
| 17 | `/search/` | Utility | 1 page | User feature, not content |
| 18 | `/sitemap/` | Utility | 1 page | HTML sitemap |
| 19 | `/about/` | Trust/E-E-A-T | 1 page | — |
| 20 | `/authors/` | Trust/E-E-A-T | Dynamic | — |
| 21 | `/contact/` | Trust/E-E-A-T | 1 page | — |
| 22 | `/faq/` | Trust/E-E-A-T | 1 page | — |
| 23 | `/glossary/` | Trust/E-E-A-T | 1 page | — |
| 24 | `/methodology/` | Trust/E-E-A-T | 1 page | — |
| 25 | `/editorial-policy/` | Trust/E-E-A-T | 1 page | — |
| 26 | `/sources-policy/` | Trust/E-E-A-T | 1 page | — |
| 27 | `/corrections-policy/` | Trust/E-E-A-T | 1 page | — |
| 28 | `/compliance/` | Legal | 2 pages | — |
| 29 | `/privacy/` | Legal | 1 page | — |
| 30 | `/terms/` | Legal | 1 page | — |
| 31 | `/fun-niche/` | Under calculators | 1 page | Moon phase — irrelevant, already redirected |

### 1.2 Structural Problems Identified

#### CRITICAL: Too Many Top-Level Sections (Authority Dilution)
31 top-level sections is 4-5x too many. Koray's framework says a site should have **5-7 content roots** plus utility/trust pages. Every top-level directory competes for crawl budget and dilutes the site's contextual vector around "TikTok Creator Monetization."

#### CRITICAL: Duplicate/Parallel Paths
| Problem | URLs | Impact |
|---------|------|--------|
| Singular vs plural | `/calculator/` (i18n) vs `/calculators/` (main) | Confuses crawlers, splits signals |
| Reference duplication | `/reference/` vs `/data/reference/` | Same content type, two paths |
| Niches duplication | `/niches/` vs `/guides/niches/` | Same content type, two paths |
| Comparisons overlap | `/comparisons/` vs `/data/platform-comparisons/` | Same content type, two paths |
| Blog vs Guides | `/blog/` vs `/guides/` | Both are long-form content |
| Metrics orphan | `/metrics/` standalone | Belongs under `/data/` or `/calculators/` |
| Advanced orphan | `/advanced/` standalone | Belongs under `/guides/business/` |
| Resources orphan | `/resources/` standalone | Belongs under `/guides/business/` |
| Tools legacy | `/tools/` still has pages | Should be fully redirected |

#### CRITICAL: Inconsistent Calculator Hierarchy
Calculators use THREE different organizational patterns simultaneously:
1. **Flat** (direct under `/calculators/`): `engagement-rate/`, `rpm/`, `coins/`, `tiktok-money/`
2. **Grouped hubs** (3-level nesting): `coins-gifts-diamonds/coins/`, `earnings-revenue/money/`, `engagement-influence/engagement/`
3. **Hybrid**: Some calculators exist at BOTH flat AND grouped paths (redirected via firebase.json)

This means some calculators are at depth 2, others at depth 4. Inconsistent depth hurts crawl efficiency and creates confusing breadcrumbs.

#### MODERATE: Orphan Content Sections
- `/benchmarks/` — 1 page, no children, no parent context
- `/region/` — 1 page, no children
- `/advanced/` — 2 pages, no hub page
- `/resources/` — 2 pages, no hub page

#### MODERATE: URL Depth Violations
Some paths reach depth 5:
- `/calculators/coins-gifts-diamonds/gift/` (depth 3 for a calculator tool)
- `/calculators/commerce-ads/shop-profit/` (depth 3 for a calculator tool)
- `/calculators/earnings-revenue/live-earnings/` (depth 3 for a calculator tool)
- Content MDX nodes add another level: `/calculators/engagement-rate/good-tiktok-engagement-rate/`

---

## 2. Ideal URL Hierarchy (Root-Seed-Node)

### Design Principles
1. **5 Content Roots** aligned to the central entity's main attributes
2. **Maximum 3 clicks** from homepage to any content page
3. **Flat calculators** — all tools at `/calculators/[name]/` (depth 2)
4. **Silo guides** — `/guides/[topic-cluster]/[article]/` (depth 3)
5. **Consolidate data** — merge reference, benchmarks, comparisons, metrics into `/data/`
6. **Trust/legal pages stay top-level** — they need to be discoverable but don't compete for topical authority

### 2.1 Proposed Root Structure

```
Homepage (/)
│
├── ROOT 1: /calculators/           ← Core section (tools = transactional intent)
│   ├── SEED: /calculators/money/
│   │   └── NODE: /calculators/money/100k-followers/
│   ├── SEED: /calculators/engagement-rate/
│   │   └── NODE: /calculators/engagement-rate/good-rate/
│   ├── SEED: /calculators/brand-deal-rate/
│   ├── SEED: /calculators/creator-fund/
│   ├── SEED: /calculators/coins/
│   ├── SEED: /calculators/diamonds/
│   ├── SEED: /calculators/live-gifts/
│   ├── SEED: /calculators/rpm/
│   ├── SEED: /calculators/shop-profit/
│   ├── SEED: /calculators/ad-cost/
│   ├── SEED: /calculators/viral-potential/
│   ├── SEED: /calculators/completion-rate/
│   ├── SEED: /calculators/follower-growth/
│   ├── SEED: /calculators/hashtag-performance/
│   ├── SEED: /calculators/niche-profitability/
│   ├── ... (all 30+ calculators FLAT at depth 2)
│   └── SEED: /calculators/eligibility/
│
├── ROOT 2: /guides/                ← Core section (how-to = informational intent)
│   ├── SEED: /guides/monetization/
│   │   ├── NODE: /guides/monetization/first-1000-dollars/
│   │   ├── NODE: /guides/monetization/seven-ways-make-money/
│   │   └── NODE: /guides/monetization/passive-income/
│   ├── SEED: /guides/growth/
│   │   ├── NODE: /guides/growth/algorithm-explained/
│   │   ├── NODE: /guides/growth/hashtag-strategy/
│   │   └── NODE: /guides/growth/best-posting-times/
│   ├── SEED: /guides/business/
│   │   ├── NODE: /guides/business/creator-taxes/
│   │   ├── NODE: /guides/business/llc-for-creators/
│   │   └── NODE: /guides/business/brand-deal-contract/  ← absorbed from /resources/
│   ├── SEED: /guides/niches/
│   │   ├── NODE: /guides/niches/beauty-earnings/
│   │   ├── NODE: /guides/niches/gaming-monetization/
│   │   └── NODE: /guides/niches/food-cooking-earnings/
│   ├── SEED: /guides/live/          ← new cluster for TikTok LIVE content
│   │   ├── NODE: /guides/live/earnings-guide/
│   │   ├── NODE: /guides/live/gift-optimization/
│   │   └── NODE: /guides/live/requirements/
│   ├── SEED: /guides/brand-deals/
│   │   ├── NODE: /guides/brand-deals/how-to-get/
│   │   ├── NODE: /guides/brand-deals/negotiate/
│   │   └── NODE: /guides/brand-deals/pricing/
│   ├── SEED: /guides/creator-fund/
│   │   ├── NODE: /guides/creator-fund/how-it-works/
│   │   ├── NODE: /guides/creator-fund/maximize-rpm/
│   │   └── NODE: /guides/creator-fund/earnings-dropped/
│   ├── SEED: /guides/shop/
│   │   ├── NODE: /guides/shop/affiliate/
│   │   └── NODE: /guides/shop/success-strategies/
│   └── SEED: /guides/coins-gifts/
│       ├── NODE: /guides/coins-gifts/coins/
│       ├── NODE: /guides/coins-gifts/diamonds/
│       └── NODE: /guides/coins-gifts/gifts/
│
├── ROOT 3: /data/                  ← Core section (stats/benchmarks = research intent)
│   ├── SEED: /data/earnings/
│   │   ├── NODE: /data/earnings/pay-per-1000-views/
│   │   ├── NODE: /data/earnings/by-country/
│   │   └── NODE: /data/earnings/top-creators-income/
│   ├── SEED: /data/engagement/
│   │   ├── NODE: /data/engagement/rate-by-followers/
│   │   ├── NODE: /data/engagement/save-rate-benchmarks/
│   │   └── NODE: /data/engagement/comments-to-likes-ratio/  ← absorbed from /metrics/
│   ├── SEED: /data/comparisons/     ← absorbed from /comparisons/
│   │   ├── NODE: /data/comparisons/tiktok-vs-youtube/
│   │   ├── NODE: /data/comparisons/tiktok-vs-instagram/
│   │   └── NODE: /data/comparisons/creator-fund-vs-brand-deals/
│   ├── SEED: /data/reference/
│   │   ├── NODE: /data/reference/creator-fund-countries/
│   │   ├── NODE: /data/reference/gift-value-chart/
│   │   └── NODE: /data/reference/shop-commission-rates/
│   └── SEED: /data/benchmarks/      ← absorbed from /benchmarks/
│       └── NODE: /data/benchmarks/rpm-by-niche/
│
├── ROOT 4: /news/                  ← Outer section (freshness signals)
│   ├── NODE: /news/creator-rewards-program-launch/
│   ├── NODE: /news/tiktok-shop-europe-expansion/
│   └── NODE: /news/us-china-deal-tiktok-operational/
│
├── ROOT 5: /blog/                  ← Outer section (thought leadership, case studies)
│   ├── NODE: /blog/charli-damelio-earnings/
│   └── NODE: /blog/[articleSlug]/
│
├── /calculator/                    ← i18n section (RENAME to /calc/ or merge into /calculators/[lang]/)
│   ├── /calculator/de/
│   ├── /calculator/es/
│   ├── /calculator/fr/
│   ├── /calculator/it/
│   ├── /calculator/my/
│   └── /calculator/pt-br/
│
├── TRUST PAGES (flat, top-level — correct as-is):
│   ├── /about/
│   ├── /authors/[authorSlug]/
│   ├── /contact/
│   ├── /methodology/
│   ├── /editorial-policy/
│   ├── /sources-policy/
│   ├── /corrections-policy/
│   ├── /faq/
│   └── /glossary/
│
├── LEGAL PAGES (flat, top-level — correct as-is):
│   ├── /privacy/
│   ├── /terms/
│   └── /compliance/advertising-disclosure/
│
└── UTILITY PAGES (flat, top-level):
    ├── /search/
    ├── /sitemap/
    └── /bookmarks/
```

---

## 3. Migration Map: Current URLs to Ideal URLs

### 3.1 Sections to CONSOLIDATE (Require 301 Redirects in firebase.json)

#### Absorb `/comparisons/` into `/data/comparisons/`
| Current URL | New URL |
|-------------|---------|
| `/comparisons/` | `/data/comparisons/` |
| `/comparisons/tiktok-vs-youtube-earnings/` | `/data/comparisons/tiktok-vs-youtube-earnings/` |
| `/comparisons/tiktok-vs-instagram/` | `/data/comparisons/tiktok-vs-instagram/` |
| `/comparisons/tiktok-vs-instagram-income/` | `/data/comparisons/tiktok-vs-instagram-income/` |
| `/comparisons/creator-fund-vs-brand-deals/` | `/data/comparisons/creator-fund-vs-brand-deals/` |
| `/comparisons/creator-fund-vs-youtube/` | `/data/comparisons/creator-fund-vs-youtube/` |
| `/comparisons/tiktok-live-vs-youtube-live/` | `/data/comparisons/tiktok-live-vs-youtube-live/` |
| `/comparisons/tiktok-shop-vs-amazon/` | `/data/comparisons/tiktok-shop-vs-amazon/` |

#### Absorb `/reference/` into `/data/reference/`
| Current URL | New URL |
|-------------|---------|
| `/reference/` | `/data/reference/` |
| `/reference/creator-fund-countries/` | `/data/reference/creator-fund-countries/` |
| `/reference/creator-fund-payment-schedule/` | `/data/reference/creator-fund-payment-schedule/` |
| `/reference/live-gifts-value-chart/` | `/data/reference/live-gifts-value-chart/` |
| `/reference/shop-commission-rates/` | `/data/reference/shop-commission-rates/` |
| `/reference/shop-payment-schedule/` | `/data/reference/shop-payment-schedule/` |

#### Absorb `/metrics/` into `/data/engagement/`
| Current URL | New URL |
|-------------|---------|
| `/metrics/` | `/data/engagement/` (redirect to hub) |
| `/metrics/comments-to-likes-ratio/` | `/data/engagement/comments-to-likes-ratio/` |

#### Absorb `/benchmarks/` into `/data/benchmarks/`
| Current URL | New URL |
|-------------|---------|
| `/benchmarks/` | `/data/benchmarks/` |

#### Absorb `/niches/` into `/guides/niches/`
| Current URL | New URL |
|-------------|---------|
| `/niches/` | `/guides/niches/` |
| `/niches/beauty-earnings/` | `/guides/niches/beauty-earnings/` |
| `/niches/finance-earnings/` | `/guides/niches/finance-earnings/` |
| `/niches/fitness-earnings/` | `/guides/niches/fitness-earnings/` |

#### Absorb `/advanced/` into `/guides/business/`
| Current URL | New URL |
|-------------|---------|
| `/advanced/creator-tax-deductions/` | `/guides/business/creator-tax-deductions/` |

#### Absorb `/resources/` into `/guides/business/`
| Current URL | New URL |
|-------------|---------|
| `/resources/brand-deal-contract/` | `/guides/business/brand-deal-contract/` |

#### Absorb `/region/` into `/data/earnings/`
| Current URL | New URL |
|-------------|---------|
| `/region/` | `/data/earnings/` (redirect to hub) |

### 3.2 Flatten Calculator Hierarchy

The grouped calculator hubs (`coins-gifts-diamonds/`, `commerce-ads/`, `earnings-revenue/`, `engagement-influence/`, `utility-tools/`) add unnecessary depth. Flatten to depth 2.

| Current URL | New URL | Notes |
|-------------|---------|-------|
| `/calculators/coins-gifts-diamonds/` | `/calculators/` | Hub page unnecessary — calcs linked from main hub |
| `/calculators/coins-gifts-diamonds/coins/` | `/calculators/coins/` | Already exists |
| `/calculators/coins-gifts-diamonds/diamonds/` | `/calculators/diamonds/` | Flatten |
| `/calculators/coins-gifts-diamonds/gift/` | `/calculators/gift-calculator/` | Flatten |
| `/calculators/commerce-ads/` | `/calculators/` | Hub page unnecessary |
| `/calculators/commerce-ads/ad-cost/` | `/calculators/ad-cost/` | Flatten (already exists at `/calculators/ad-spend/`) |
| `/calculators/commerce-ads/rpm-cpm/` | `/calculators/cpm-cpv/` | Flatten (already exists) |
| `/calculators/commerce-ads/shop-profit/` | `/calculators/shop-profit/` | Flatten |
| `/calculators/earnings-revenue/` | `/calculators/` | Hub page unnecessary |
| `/calculators/earnings-revenue/creator-fund/` | `/calculators/tiktok-creator-fund/` | Already redirected |
| `/calculators/earnings-revenue/money/` | `/calculators/tiktok-money/` | Already redirected |
| `/calculators/earnings-revenue/live-earnings/` | `/calculators/live-earnings/` | Flatten |
| `/calculators/engagement-influence/` | `/calculators/` | Hub page unnecessary |
| `/calculators/engagement-influence/engagement/` | `/calculators/engagement-rate/` | Already redirected |
| `/calculators/engagement-influence/influencer-pricing/` | `/calculators/brand-deal-rate/` | Already redirected |
| `/calculators/engagement-influence/video-engagement/` | `/calculators/video-engagement/` | Flatten |
| `/calculators/utility-tools/` | `/calculators/` | Hub page unnecessary |
| `/calculators/utility-tools/eligibility/` | `/calculators/eligibility/` | Flatten |
| `/calculators/utility-tools/payout/` | `/calculators/payout/` | Flatten |
| `/calculators/utility-tools/tax/` | `/calculators/tax/` | Flatten |
| `/calculators/fun-niche/` | REMOVE | Already redirecting moon-phase |

### 3.3 Clean Up Legacy/Duplicate Pages

| Current URL | Action |
|-------------|--------|
| `/tools/` | Already redirected — DELETE page.tsx |
| `/tools/rpm/` | Already redirected — DELETE page.tsx |
| `/reference/creator-fund-eligible-countries/` | Already redirected — DELETE directory |
| `/reference/tiktok-shop-payment-schedule/` | Already redirected — DELETE directory |
| `/metrics/tiktok-comments-to-likes-ratio/` | Already redirected — DELETE directory |
| `/news/creator-rewards-20x-earnings/` | Already redirected — DELETE directory |
| `/news/videos-over-one-minute-monetization/` | Already redirected — DELETE directory |
| `/advanced/creator-tax-deductions-guide/` | Already redirected — DELETE directory |
| `/resources/brand-deal-contract-template/` | Already redirected — DELETE directory |

### 3.4 i18n Calculator Path

**Current:** `/calculator/de/`, `/calculator/es/`, etc.
**Problem:** `/calculator/` (singular) vs `/calculators/` (plural) is confusing to crawlers.
**Options:**
1. **Recommended:** Redirect `/calculator/[lang]/` to `/calculators/[lang]/` and restructure as `/calculators/de/`, `/calculators/es/`, etc.
2. **Alternative:** Use subdomain or query parameter approach (`/calculators/?lang=de`)

---

## 4. Resulting Section Count

### Before: 31 top-level sections
### After: 16 top-level sections

| # | Section | Type | Notes |
|---|---------|------|-------|
| 1 | `/calculators/` | Content Root 1 | All tools flat at depth 2 |
| 2 | `/guides/` | Content Root 2 | Sub-silos: monetization, growth, business, niches, live, brand-deals, creator-fund, shop, coins-gifts |
| 3 | `/data/` | Content Root 3 | Sub-silos: earnings, engagement, comparisons, reference, benchmarks |
| 4 | `/news/` | Content Root 4 | Flat nodes |
| 5 | `/blog/` | Content Root 5 | Flat nodes |
| 6 | `/calculator/` | i18n (move to `/calculators/[lang]/` long-term) | 6 locales |
| 7 | `/about/` | Trust | — |
| 8 | `/authors/` | Trust | — |
| 9 | `/contact/` | Trust | — |
| 10 | `/methodology/` | Trust | — |
| 11 | `/editorial-policy/` | Trust | — |
| 12 | `/sources-policy/` | Trust | — |
| 13 | `/corrections-policy/` | Trust | — |
| 14 | `/faq/` | Trust | — |
| 15 | `/glossary/` | Trust | — |
| 16 | `/privacy/` | Legal | — |
| 17 | `/terms/` | Legal | — |
| 18 | `/compliance/` | Legal | — |
| 19 | `/search/` | Utility | — |
| 20 | `/sitemap/` | Utility | — |
| 21 | `/bookmarks/` | Utility | — |

**Content roots reduced from 13 to 5.** Trust/legal/utility stay as-is (they don't compete for topical authority).

---

## 5. Crawl Path Optimization

### 5.1 Primary Crawl Paths (Homepage to Deepest Node in 3 Clicks)

```
Path A (Transactional — Calculator):
  Homepage → /calculators/ → /calculators/money/ → /calculators/money/100k-followers/
  Depth: 3 clicks (Root → Seed → Node)

Path B (Informational — Guide):
  Homepage → /guides/ → /guides/monetization/ → /guides/monetization/first-1000-dollars/
  Depth: 3 clicks (Root → Seed Hub → Node)

Path C (Research — Data):
  Homepage → /data/ → /data/earnings/ → /data/earnings/pay-per-1000-views/
  Depth: 3 clicks (Root → Seed Hub → Node)

Path D (News):
  Homepage → /news/ → /news/creator-rewards-program-launch/
  Depth: 2 clicks (Root → Node)
```

### 5.2 Cross-Section Hub Links (Semantic Connections)

These connections create crawl loops between silos based on meaning, not category:

| From | To | Semantic Relationship |
|------|----|----------------------|
| `/calculators/money/` | `/guides/monetization/how-to-make-money/` | "Calculator + how-to guide" pair |
| `/calculators/engagement-rate/` | `/data/engagement/rate-by-followers/` | "Tool + benchmark data" pair |
| `/calculators/brand-deal-rate/` | `/guides/brand-deals/pricing/` | "Calculator + strategy guide" pair |
| `/calculators/creator-fund/` | `/data/earnings/creator-fund-rates/` | "Tool + rate data" pair |
| `/calculators/coins/` | `/guides/coins-gifts/coins/` | "Converter + explainer" pair |
| `/calculators/shop-profit/` | `/data/earnings/shop-gmv-growth/` | "Tool + market data" pair |
| `/calculators/live-earnings/` | `/guides/live/earnings-guide/` | "Tool + strategy" pair |
| `/guides/niches/beauty-earnings/` | `/data/earnings/top-creators-income/` | "Niche guide + earnings data" |
| `/news/[any article]` | Related `/guides/` or `/calculators/` page | "News → evergreen" bridge |
| `/data/comparisons/tiktok-vs-youtube/` | `/calculators/multi-platform-earnings/` | "Data + tool" pair |

### 5.3 Internal Linking Rules

1. **Every calculator page** must link to its matching guide AND data page (if they exist)
2. **Every guide** must link to the relevant calculator tool
3. **Every data page** must link to the calculator that uses that data
4. **News articles** must link to 2-3 relevant evergreen pages (guides or calculators)
5. **Hub pages** (`/calculators/`, `/guides/`, `/data/`) must link to ALL seed pages in their section
6. **Seed hub pages** (`/guides/monetization/`) must link to ALL node pages AND back to the root

---

## 6. Breadcrumb Templates

### Calculators (Core Section — Flat)
```
Home > Calculators > TikTok Money Calculator
Home > Calculators > Engagement Rate Calculator
Home > Calculators > Brand Deal Rate Calculator
```
Calculator article nodes:
```
Home > Calculators > Engagement Rate > Good TikTok Engagement Rate
Home > Calculators > RPM > RPM by Country
```

### Guides (Core Section — Siloed)
```
Home > Guides > Monetization > How to Make Money on TikTok
Home > Guides > Growth > TikTok Algorithm Explained
Home > Guides > Business > Creator Taxes Guide
Home > Guides > Niches > Beauty Creator Earnings
Home > Guides > Brand Deals > How to Negotiate
```

### Data (Core Section — Siloed)
```
Home > Data > Earnings > TikTok Pay Per 1000 Views
Home > Data > Engagement > Save Rate Benchmarks
Home > Data > Comparisons > TikTok vs YouTube Earnings
Home > Data > Reference > Creator Fund Countries
```

### News (Outer Section — Flat)
```
Home > News > Creator Rewards Program Launch
```

### Blog (Outer Section — Flat)
```
Home > Blog > Charli D'Amelio TikTok Earnings
```

### Trust/Legal Pages
```
Home > About
Home > Methodology
Home > Privacy Policy
```

---

## 7. Implementation Priority

### Phase 1 — Quick Wins (No URL Changes Required)
1. **Delete orphan page.tsx files** for already-redirected URLs (tools/, metrics/tiktok-comments-to-likes-ratio/, etc.)
2. **Add cross-section internal links** on all calculator, guide, and data pages
3. **Implement breadcrumb structured data** (BreadcrumbList schema) on every page
4. **Update hub pages** (/calculators/, /guides/, /data/) to link to ALL children

### Phase 2 — Section Consolidation (301 Redirects)
Priority order by impact:
1. **Flatten calculator sub-hubs** → Move 12 nested calculators to depth 2
2. **Absorb `/comparisons/` → `/data/comparisons/`** (7 pages)
3. **Absorb `/reference/` → `/data/reference/`** (6 pages)
4. **Absorb `/niches/` → `/guides/niches/`** (4 pages)
5. **Absorb `/metrics/` → `/data/engagement/`** (2 pages)
6. **Absorb `/advanced/` → `/guides/business/`** (1 page)
7. **Absorb `/resources/` → `/guides/business/`** (1 page)
8. **Absorb `/benchmarks/` → `/data/benchmarks/`** (1 page)
9. **Absorb `/region/` → `/data/earnings/`** (1 page)

### Phase 3 — i18n Path Consolidation
1. Redirect `/calculator/[lang]/` → `/calculators/[lang]/`
2. Update hreflang tags accordingly

---

## 8. Word Non-Repetition Audit

Current violations of Koray's word non-repetition rule:

| URL | Repeated Word | Fix |
|-----|--------------|-----|
| `/calculators/tiktok-money/tiktok-pay-per-1000-views/` | "tiktok" repeated | `/calculators/tiktok-money/pay-per-1000-views/` |
| `/calculators/tiktok-money/tiktok-money-100k-followers/` | "tiktok-money" repeated | `/calculators/tiktok-money/100k-followers/` |
| `/calculators/tiktok-money/tiktok-money-10k-followers/` | "tiktok-money" repeated | `/calculators/tiktok-money/10k-followers/` |
| `/calculators/tiktok-money/tiktok-money-1m-followers/` | "tiktok-money" repeated | `/calculators/tiktok-money/1m-followers/` |
| `/calculators/tiktok-money/tiktok-earnings-by-country/` | "tiktok" repeated | `/calculators/tiktok-money/earnings-by-country/` |
| `/calculators/tiktok-creator-fund/creator-fund-*` | "creator-fund" repeated | `/calculators/tiktok-creator-fund/eligibility-2026/` etc. |
| `/calculators/engagement-rate/engagement-rate-*` | "engagement-rate" repeated | `/calculators/engagement-rate/by-followers/` etc. |
| `/calculators/coins/tiktok-coin-*` | "coin(s)" repeated | `/calculators/coins/prices-by-country/` etc. |

**These MDX article slugs should be shortened** to remove the parent directory's keywords. The parent URL segment already provides the context.

---

## 9. Above-the-Fold Design Recommendations by Section Type

| Section | Primary Intent | Above-the-Fold Must Include |
|---------|---------------|----------------------------|
| `/calculators/[name]/` | Transactional | Calculator widget immediately visible, no intro paragraphs above it |
| `/guides/[cluster]/[article]/` | Informational | Key takeaway box + table of contents |
| `/data/[cluster]/[article]/` | Research | Key statistic highlight + data table or chart |
| `/news/[article]/` | Navigational/Fresh | Date + headline + 1-sentence summary |
| Hub pages (`/calculators/`, `/guides/`, `/data/`) | Navigational | Grid/list of all children with descriptions |

---

## 10. Summary of Structural Improvements

| Metric | Current | After Restructure |
|--------|---------|-------------------|
| Top-level content sections | 13 | 5 |
| Max click depth to content | 5 | 3 |
| Calculator URL depth | 2-4 (inconsistent) | 2 (all flat) |
| Orphan sections | 5 (advanced, resources, benchmarks, region, metrics) | 0 |
| Duplicate paths | 5 parallel paths | 0 |
| Total redirects needed | ~35 existing | ~60 total (25 new) |

The restructured architecture concentrates topical authority into 5 content roots, reduces maximum depth from 5 to 3, eliminates all orphan sections, and creates clear crawl paths with cross-silo semantic connections.
