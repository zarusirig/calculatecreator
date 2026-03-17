# Internal Linking Architecture — tiktokcalculator.net

**Skill**: internal-linking-architecture (Stage 5)
**Central Entity**: TikTok Creator Monetization
**Site**: tiktokcalculator.net
**Date**: 2026-03-18
**Pages**: ~180 app pages + 257 MDX articles = ~437 indexable URLs

---

## 1. Current State Audit

### 1.1 What Exists

| Link Source | Links Present | Link Quality |
|---|---|---|
| Header nav | 5 nav items: Tools, Benchmarks, Guides, News, About + CTA to `/calculators/tiktok-money/` | Structural only, no topical depth |
| Footer | 3 columns: Explore (4 links), Popular Tools (4 links), Company (4 links) + 3 pathway cards | Boilerplate, same on every page |
| Homepage | ~10 links: 2 CTA calculators, category cards, 3 popular tools, 2 guide links, 2 hub links | Decent top-of-funnel entry, but shallow |
| Calculator pages (TSX) | 2-3 contextual links in hero paragraph + `RelatedCalculators` (3-4 cards) + `RelatedGuides` (dynamic from MDX `parentCalculator`) + `ToolExplanationSection.relatedContent` (3-4 links) | Concentrated at bottom, minimal in-content |
| MDX articles | `parentArticle` link to calculator + `showCalculatorCTA` banner + `RelatedContentNav` at bottom | Bottom-heavy, depends on frontmatter fields |
| Guide hub (`/guides/`) | Manually listed guide cards in inline JSX | One-way links down, no reciprocal linking |
| Calculator hub (`/calculators/`) | `ToolsDirectoryPage` renders all tools from `site-data.ts` | Flat list, no topical grouping |

### 1.2 Critical Gaps

**Gap 1: 91 of 118 guide MDX files have ALL THREE linking arrays empty** (`childArticles: []`, `relatedArticles: []`, `siblingArticles: []`). The `RelatedContentNav` component in `ArticleLayout.tsx` renders a fallback with generic hub links ("All Calculators", "Creator Guides", etc.) instead of contextual links.

**Gap 2: 32 of 57 calculator MDX files have `relatedArticles: []`**. The remaining 25 have some links populated (e.g., `tiktok-pay-per-1000-views.mdx` has 6 related articles), but these are inconsistent.

**Gap 3: Calculator page TSX files have 2-3 inline contextual links maximum** in the hero paragraph. The educational content cards below (which contain 60-70% of the page's body content) have zero internal links despite discussing topics covered by other pages.

**Gap 4: No cross-silo linking exists**. Calculators do not link to data articles. Guides do not link to benchmark pages. Data pages do not link to calculators. Each section is an isolated silo with no bridges.

**Gap 5: Hub pages are flat lists, not topical groupers**. `/calculators/` lists all 35+ tools alphabetically by filter. `/guides/` lists all guides in manually arranged categories but without contextual prose connecting them. Neither page functions as a true hub with editorial context.

**Gap 6: 180 app pages contain no contextual in-body links to MDX articles**. The only connection is `RelatedGuides` at the bottom, which dynamically pulls articles whose `parentCalculator` matches.

### 1.3 Link Count Summary

| Page Type | Avg Contextual Body Links | Avg Bottom-Section Links | Total Internal Links |
|---|---|---|---|
| Calculator pages (TSX) | 2-3 | 7-10 (RelatedCalcs + RelatedGuides + ToolExplanation) | 9-13 |
| MDX articles (populated) | 0-2 (inline markdown) | 3-6 (RelatedContentNav) | 3-8 |
| MDX articles (empty fields) | 0-1 | 0 (fallback only shows hub links) | 1-4 |
| Hub pages | 0 (no prose) | All items listed as cards | N/A (navigation, not contextual) |
| Homepage | 8-10 | 2 | 10-12 |

**Verdict**: The site has near-zero contextual internal linking. What exists is structural (navigation, breadcrumbs, footer) or bottom-of-page component-based (RelatedCalculators, RelatedContentNav). No page has links placed strategically within body content following Reasonable Surfer principles.

---

## 2. Site Architecture: Silo + Hub-and-Spoke Hybrid

### 2.1 Silo Map

The site's content naturally organizes into 7 topical silos. Each silo has a hub page, sub-hubs (where needed), and spoke pages.

```
HOMEPAGE (/)
|
|--- SILO 1: EARNINGS & REVENUE (/calculators/tiktok-money/)
|    |--- Sub-hub: Creator Fund (/calculators/tiktok-creator-fund/)
|    |--- Sub-hub: LIVE Earnings (/calculators/earnings-revenue/live-earnings/)
|    |--- Sub-hub: Shop Profit (/calculators/commerce-ads/shop-profit/)
|    |--- Sub-hub: RPM (/calculators/rpm/)
|    |--- 37 MDX spoke articles
|    |--- 17 guide spokes (monetization/, niches/)
|
|--- SILO 2: ENGAGEMENT & PERFORMANCE (/calculators/engagement-rate/)
|    |--- Sub-hub: Video Performance (/calculators/video-performance/)
|    |--- Sub-hub: Watch Time (/calculators/watch-time/)
|    |--- Sub-hub: Viral Potential (/calculators/viral-potential/)
|    |--- 15 MDX spoke articles
|    |--- 18 guide spokes (growth/)
|
|--- SILO 3: BRAND DEALS & SPONSORSHIPS (/calculators/brand-deal-rate/)
|    |--- 5 MDX spoke articles
|    |--- 8 guide spokes (business/, pricing guides)
|
|--- SILO 4: COINS, GIFTS & DIAMONDS (/calculators/coins-gifts-diamonds/)
|    |--- Sub-hub: Coins (/calculators/coins-gifts-diamonds/coins/)
|    |--- Sub-hub: Diamonds (/calculators/coins-gifts-diamonds/diamonds/)
|    |--- Sub-hub: Gift Calculator (/calculators/coins-gifts-diamonds/gift/)
|    |--- 5 MDX spoke articles
|    |--- 4 guide spokes (diamonds, gifts, coins guides)
|
|--- SILO 5: DATA & BENCHMARKS (/data/, /benchmarks/)
|    |--- Sub-hub: Earnings Data (/data/earnings/)
|    |--- Sub-hub: Engagement Data (/data/engagement/)
|    |--- Sub-hub: Platform Comparisons (/data/platform-comparisons/)
|    |--- 41 MDX spoke articles
|
|--- SILO 6: GUIDES & STRATEGY (/guides/)
|    |--- Sub-hub: Growth (/guides/growth/)
|    |--- Sub-hub: Monetization (/guides/monetization/)
|    |--- Sub-hub: Business (/guides/business/)
|    |--- Sub-hub: Niches (/guides/niches/)
|    |--- 118 MDX spoke articles
|
|--- SILO 7: NEWS & COMPARISONS (/news/, /comparisons/)
|    |--- 18 news pages
|    |--- 7 comparison pages
```

### 2.2 Hub Page Roles

Each hub page should function as a **grouper page**: 200-400 words of editorial context that frames the topic cluster, followed by organized links to all spoke pages with descriptive anchor text.

| Hub Page | Current State | Required Changes |
|---|---|---|
| `/calculators/tiktok-money/` | Full calculator page with educational cards | Add contextual prose section linking to all 7 child MDX articles + 5 related guides |
| `/calculators/engagement-rate/` | Full calculator page | Add contextual section linking to 8 child MDX articles + growth guides |
| `/calculators/brand-deal-rate/` | Full calculator page | Add contextual section linking to 5 child MDX articles + brand deal guides |
| `/calculators/rpm/` | Full calculator page | Add contextual section linking to 5 child MDX articles + RPM guides |
| `/calculators/tiktok-creator-fund/` | Full calculator page | Add contextual section linking to 5 child MDX articles |
| `/guides/` | Manually listed guide categories | Rewrite with editorial context per category, add bidirectional links |
| `/data/` | Hub page with section links | Add editorial framing and contextual links to key data pages |
| `/benchmarks/` | Client-side benchmark directory | Add contextual links to data pages and calculators |

---

## 3. Hub-and-Spoke Link Maps

### 3.1 Silo 1: Earnings & Revenue (Highest Priority)

**Hub**: `/calculators/tiktok-money/` (PageRank sink — should be most internally linked page)

**Spoke → Hub links** (every spoke must link back to hub):

| Spoke Page | Anchor Text for Link TO Hub |
|---|---|
| `/calculators/tiktok-money/tiktok-pay-per-1000-views/` | "TikTok Money Calculator" |
| `/calculators/tiktok-money/tiktok-money-100k-followers/` | "estimate your total TikTok earnings" |
| `/calculators/tiktok-money/tiktok-money-10k-followers/` | "model your income across all streams" |
| `/calculators/tiktok-money/tiktok-money-1m-followers/` | "TikTok earnings calculator" |
| `/calculators/tiktok-money/tiktok-earnings-by-country/` | "calculate your total TikTok income" |
| `/calculators/tiktok-money/tiktok-pay-per-million-views/` | "earnings calculator for all income streams" |
| `/calculators/tiktok-money/why-tiktok-earnings-low/` | "TikTok Money Calculator" |
| `/guides/how-to-make-money-on-tiktok/` | "TikTok Money Calculator" |
| `/guides/monetization/how-to-make-money-tiktok/` | "estimate your earnings" |
| `/guides/monetization/first-1000-dollars-tiktok/` | "TikTok earnings calculator" |
| `/guides/monetization/seven-ways-make-money-tiktok/` | "calculate your earning potential" |

**Hub → Spoke links** (add to calculator page body content):

| Target Spoke | Anchor Text | Placement |
|---|---|---|
| `/calculators/tiktok-money/tiktok-pay-per-1000-views/` | "how much TikTok pays per 1,000 views" | H2: TikTok Income Streams, after Creator Rewards item |
| `/calculators/tiktok-money/tiktok-earnings-by-country/` | "TikTok earnings by country" | H2: Income Mix section |
| `/guides/how-to-make-money-on-tiktok/` | "complete guide to making money on TikTok" | Already in hero (keep) |
| `/calculators/tiktok-money/tiktok-money-100k-followers/` | "how much 100K-follower creators earn" | H2: Earnings by Follower Count, in 100K tier |
| `/guides/monetization/diversify-tiktok-income-streams/` | "diversify your income streams" | H2: Maximize Your Earnings, tip #1 |
| `/calculators/brand-deal-rate/` | "Brand Deal Rate Calculator" | Already in RelatedCalculators (keep) |

**Sibling links** (between spoke articles within this silo):

| From | To | Anchor Text |
|---|---|---|
| `tiktok-pay-per-1000-views` | `tiktok-pay-per-million-views` | "TikTok pay per million views" |
| `tiktok-pay-per-1000-views` | `tiktok-earnings-by-country` | "earnings vary by country" |
| `tiktok-money-100k-followers` | `tiktok-money-10k-followers` | "starting at 10K followers" |
| `tiktok-money-100k-followers` | `tiktok-money-1m-followers` | "scale to 1 million followers" |
| `tiktok-money-10k-followers` | `tiktok-money-100k-followers` | "growing to 100K followers" |
| `why-tiktok-earnings-low` | `tiktok-pay-per-1000-views` | "current TikTok pay rates" |

### 3.2 Silo 2: Engagement & Performance

**Hub**: `/calculators/engagement-rate/`

**Hub → Spoke links to add**:

| Target | Anchor Text | Placement |
|---|---|---|
| `/calculators/engagement-rate/good-tiktok-engagement-rate/` | "what counts as a good engagement rate" | H2: What Counts as Engagement, first paragraph |
| `/calculators/engagement-rate/engagement-rate-by-followers/` | "engagement rate benchmarks by follower count" | H2: By Follower Tier card |
| `/calculators/engagement-rate/increase-engagement-rate/` | "proven strategies to increase engagement" | H2: How to Boost Engagement card |
| `/calculators/engagement-rate/engagement-rate-brand-deals/` | "how engagement affects brand deal pricing" | H2: Engagement and Brand Deals card |
| `/calculators/engagement-rate/engagement-rate-by-niche/` | "engagement rates by content niche" | H2: Engagement by Niche card |
| `/guides/increase-engagement-rate-tiktok/` | "increase your engagement rate" | Already in hero (keep) |
| `/guides/growth/tiktok-algorithm-explained/` | "how the TikTok algorithm uses engagement" | H2: What Counts as Engagement, Watch Time row |

### 3.3 Silo 3: Brand Deals & Sponsorships

**Hub**: `/calculators/brand-deal-rate/`

**Hub → Spoke links to add**:

| Target | Anchor Text | Placement |
|---|---|---|
| `/calculators/brand-deal-rate/tiktok-sponsorship-rates-followers/` | "sponsorship rates by follower count" | H2: Rates by Follower Count card |
| `/calculators/brand-deal-rate/tiktok-brand-deal-rates-2026/` | "2026 brand deal rate benchmarks" | H2: 2026 Average Rates card |
| `/calculators/brand-deal-rate/tiktok-media-kit/` | "create a professional media kit" | H2: Negotiation Tips, tip #4 |
| `/calculators/brand-deal-rate/brand-deal-red-flags/` | "brand deal red flags to avoid" | After negotiation tips section |
| `/guides/how-to-price-brand-deals/` | "brand deal pricing guide" | Already in hero (keep) |
| `/data/brand-deal-rates-by-niche/` | "rates by niche" | Already in hero (keep) |
| `/guides/business/brand-deal-contract-negotiate/` | "negotiate brand deal contracts" | H2: What to Include card |

---

## 4. Cross-Silo Contextual Connections

Cross-silo links must be used sparingly (2-3 per page maximum) and only when genuinely contextual. These are the highest-value cross-silo connections:

### 4.1 Primary Cross-Silo Bridges

| From (Silo) | To (Silo) | Contextual Justification | Anchor Text |
|---|---|---|---|
| Engagement Rate calc (Silo 2) | Brand Deal Rate calc (Silo 3) | Engagement directly determines brand deal pricing | "see how engagement affects your brand deal rates" |
| Brand Deal Rate calc (Silo 3) | Engagement Rate calc (Silo 2) | Brand deal pricing requires knowing engagement | "calculate your engagement rate first" |
| TikTok Money calc (Silo 1) | Brand Deal Rate calc (Silo 3) | Brand deals are largest income component | "price your brand deals accurately" |
| RPM calc (Silo 1) | Creator Fund calc (Silo 1) | RPM is how Creator Fund earnings are measured | "estimate Creator Fund earnings" |
| Engagement guides (Silo 6/growth) | Engagement Rate calc (Silo 2) | Guides explain what calculators measure | "check your current engagement rate" |
| Monetization guides (Silo 6) | TikTok Money calc (Silo 1) | Guides explain what calculators model | "estimate your total earning potential" |
| Data/benchmarks (Silo 5) | Corresponding calculators (various) | Data informs calculator context | "use the calculator with these benchmarks" |
| Niche guides (Silo 6/niches) | Brand Deal Rate calc (Silo 3) | Niche affects pricing | "estimate your brand deal rate for [niche]" |
| News pages (Silo 7) | Relevant calculators/guides | Timely context for tools | "model the impact with our calculator" |
| Comparison pages (Silo 7) | Relevant calculators (various) | Comparisons need quantification | "calculate your TikTok earnings" or "calculate YouTube earnings" |

### 4.2 Cross-Silo Link Rules

1. Maximum 2 cross-silo links per page in main body content
2. Cross-silo links should appear in the middle 60% of the article (not the introduction)
3. Cross-silo links always point TO a calculator or hub page, never to a deep spoke article in another silo
4. Anchor text must mention the target page's primary topic (no generic "click here" or "learn more")

---

## 5. PageRank Flow Optimization

### 5.1 PageRank Priority Tiers

**Tier 1 — Maximum inbound internal links (target: 30-50+ internal links each)**:
- `/calculators/tiktok-money/` (primary conversion page)
- `/calculators/engagement-rate/` (most searched calculator concept)
- `/calculators/brand-deal-rate/` (highest commercial intent)

**Tier 2 — High inbound internal links (target: 20-30 each)**:
- `/calculators/rpm/`
- `/calculators/tiktok-creator-fund/`
- `/calculators/coins-gifts-diamonds/`
- `/guides/` (hub)
- `/data/` (hub)
- `/benchmarks/`

**Tier 3 — Moderate inbound internal links (target: 8-15 each)**:
- All other calculator pages (live-gifts, video-performance, watch-time, etc.)
- Sub-hub guide pages (/guides/growth/, /guides/monetization/, etc.)
- High-priority MDX articles (priorityScore >= 90)

**Tier 4 — Standard inbound internal links (target: 4-8 each)**:
- All remaining MDX articles
- News pages
- Comparison pages
- Data pages

### 5.2 Click Depth Targets

| Page Type | Current Click Depth | Target Click Depth |
|---|---|---|
| Tier 1 calculators | 2 clicks (Home → Calculators → Calc) | 1-2 clicks (direct from homepage) |
| Tier 2 calculators | 2-3 clicks | 2 clicks |
| MDX articles | 3-4 clicks (Home → Calculators → Calc → Article) | 2-3 clicks |
| Guide articles | 2-3 clicks | 2-3 clicks (acceptable) |
| Data pages | 3-4 clicks | 2-3 clicks |
| News pages | 2 clicks | 2 clicks (acceptable) |

### 5.3 PageRank Leak Prevention

**Current leaks**:
1. Footer links to `/privacy/`, `/terms/`, `/contact/` consume PageRank on every page. These are necessary but should use `rel="nofollow"` only if they are genuinely no-value pages. Since they are policy pages needed for trust, keep them as-is but do not add more footer links.
2. The `ToolsDirectoryPage` links to ALL 35+ calculators from a single page, diluting equity per link. This is acceptable for a hub page but means each calculator receives only ~1/35th of the hub's distributable equity. Compensate by increasing direct links from other sources.

**Recommendations**:
- Do NOT add more sitewide footer or header links. The current 16 sitewide links is a reasonable count.
- Every new page-level internal link added in body content has high marginal value because it is not duplicated across all 437 pages.

---

## 6. Link Placement Strategy

### 6.1 Calculator Pages (TSX) — 5-7 contextual body links

Calculator pages are the highest-authority pages. Each should have:

| Position | What to Link | Why |
|---|---|---|
| **Hero paragraph** (top 10%) | 1-2 links to most relevant guide + data page | Reasonable Surfer: highest-value position, passes most equity |
| **First educational card** (top 30%) | 1 link to highest-priority child MDX article | Connects calculator to its deepest content |
| **Second educational card** (middle 50%) | 1 link to sibling calculator or cross-silo bridge | Builds lateral connections |
| **Third/fourth educational card** (middle 60-80%) | 1-2 links to supporting MDX articles or guide sections | Fills out the spoke connections |
| **Bottom section** | `RelatedCalculators` + `RelatedGuides` components (already exist) | Navigation fallback |

**Implementation pattern**: Inside the JSX `<Card>` components, add inline `<Link>` elements within the descriptive text. Example for the TikTok Money Calculator's "Earnings by Follower Count" card:

```tsx
// Current: static text with no links
<span className="font-semibold">10K-50K Followers</span>
<span className="text-sm font-mono">$500-$3,000/month</span>

// Updated: contextual link added
<Link href="/calculators/tiktok-money/tiktok-money-10k-followers/"
      className="font-semibold text-primary-600 hover:text-primary-700">
  10K-50K Followers
</Link>
<span className="text-sm font-mono">$500-$3,000/month</span>
```

### 6.2 MDX Articles — 5-8 contextual body links

MDX articles average 1,500-2,500 words. Target link density: 5-8 links.

| Position | What to Link | Format |
|---|---|---|
| **First paragraph** (under first H2) | Parent calculator (hub page) | `[TikTok Money Calculator](/calculators/tiktok-money/)` |
| **After first H2** | Most relevant sibling article | Natural inline markdown link |
| **Under H3 subheadings** (1-2 instances) | Related articles from same silo | Natural inline markdown link |
| **Middle of article** (under H2) | Cross-silo bridge (1 maximum) | Contextual reference to calculator or data page |
| **Final H2 section** | Next-step content or deeper dive | Inline link to child article or related guide |
| **Frontmatter fields** | `relatedArticles`, `siblingArticles`, `childArticles` | Populates `RelatedContentNav` component at bottom |

**Spacing rule**: Minimum 150 words between any two internal links. Never place two links in the same sentence unless both are essential.

### 6.3 Guide Pages — 7-10 contextual body links

Guides are longer (2,000-5,000 words) and should have more links:

| Position | Link Target Type |
|---|---|
| Introduction | Parent hub page or primary calculator |
| Each major H2 section | 1 relevant calculator, data page, or sibling guide |
| Midpoint | Cross-silo bridge to complementary calculator |
| Conclusion | CTA link to primary calculator + next-step guide |

---

## 7. Frontmatter Population Plan (MDX Articles)

The most impactful immediate action is populating the empty `childArticles`, `relatedArticles`, and `siblingArticles` frontmatter fields across all 257 MDX files. This activates the already-built `RelatedContentNav` component in `ArticleLayout.tsx`.

### 7.1 Calculator MDX Articles — Linking Schema

**Pattern**: Every calculator sub-article should have:
- `parentArticle`: its calculator hub page (e.g., `/calculators/tiktok-money/`)
- `siblingArticles`: other articles under the same calculator (same directory)
- `relatedArticles`: 2-4 articles from other silos that cover the same topic from a different angle

#### `/content/calculators/tiktok-money/` (7 articles)

| Article | siblingArticles | relatedArticles |
|---|---|---|
| `tiktok-pay-per-1000-views` | `tiktok-pay-per-million-views`, `tiktok-earnings-by-country` | `/calculators/rpm/what-is-tiktok-rpm/`, `/calculators/tiktok-creator-fund/creator-fund-pay-per-view/` |
| `tiktok-pay-per-million-views` | `tiktok-pay-per-1000-views`, `tiktok-earnings-by-country` | `/calculators/rpm/tiktok-rpm-by-country/`, `/data/earnings/average-tiktok-earnings-per-views/` |
| `tiktok-money-10k-followers` | `tiktok-money-100k-followers`, `tiktok-money-1m-followers` | `/guides/monetization/first-1000-dollars-tiktok/`, `/calculators/engagement-rate/engagement-rate-by-followers/` |
| `tiktok-money-100k-followers` | `tiktok-money-10k-followers`, `tiktok-money-1m-followers` | `/guides/monetization/diversify-tiktok-income-streams/`, `/calculators/brand-deal-rate/tiktok-sponsorship-rates-followers/` |
| `tiktok-money-1m-followers` | `tiktok-money-100k-followers`, `tiktok-money-10k-followers` | `/data/earnings/top-tiktok-creators-income/`, `/calculators/brand-deal-rate/tiktok-brand-deal-rates-2026/` |
| `tiktok-earnings-by-country` | `tiktok-pay-per-1000-views`, `why-tiktok-earnings-low` | `/data/earnings/tiktok-pay-us-earnings/`, `/calculators/rpm/tiktok-rpm-by-country/` |
| `why-tiktok-earnings-low` | `tiktok-pay-per-1000-views`, `tiktok-earnings-by-country` | `/guides/why-tiktok-earnings-low/`, `/calculators/rpm/increase-tiktok-rpm/` |
| `how-tiktok-money-calculator-works` | `tiktok-pay-per-1000-views` | `/guides/complete-tiktok-calculator-guide/` |

#### `/content/calculators/engagement-rate/` (8 articles)

| Article | siblingArticles | relatedArticles |
|---|---|---|
| `good-tiktok-engagement-rate` | `engagement-rate-by-followers`, `engagement-rate-by-niche` | `/data/engagement/avg-engagement-rate-follower-count-2026/`, `/guides/increase-engagement-rate-tiktok/` |
| `engagement-rate-by-followers` | `good-tiktok-engagement-rate`, `engagement-rate-by-niche` | `/data/engagement/micro-vs-macro-engagement-rate/`, `/calculators/brand-deal-rate/tiktok-sponsorship-rates-followers/` |
| `engagement-rate-by-niche` | `good-tiktok-engagement-rate`, `engagement-rate-brand-deals` | `/data/engagement-rates-by-niche/` |
| `engagement-rate-brand-deals` | `engagement-rate-by-niche`, `good-tiktok-engagement-rate` | `/calculators/brand-deal-rate/`, `/guides/how-to-price-brand-deals/` |
| `increase-engagement-rate` | `engagement-rate-dropping`, `good-tiktok-engagement-rate` | `/guides/growth/tiktok-algorithm-explained/`, `/guides/increase-engagement-rate-tiktok/` |
| `engagement-rate-dropping` | `increase-engagement-rate`, `algorithm-engagement-rate` | `/guides/growth/tiktok-shadowban-fix/` |
| `algorithm-engagement-rate` | `engagement-rate-dropping`, `engagement-rate-vs-views` | `/guides/tiktok-algorithm-engagement/` |
| `engagement-rate-vs-views` | `algorithm-engagement-rate`, `good-tiktok-engagement-rate` | `/calculators/video-performance/video-performance-score/` |

### 7.2 Guide MDX Articles — Linking Schema

**Pattern**: Every guide should have:
- `parentArticle`: its sub-hub page (e.g., `/guides/monetization/`) or `/guides/`
- `siblingArticles`: 2-4 guides in the same sub-directory
- `relatedArticles`: 2-4 relevant calculator pages or data pages
- `childArticles`: typically empty (guides rarely have children)

#### `/content/guides/monetization/` (17 articles) — Sample

| Article | siblingArticles | relatedArticles |
|---|---|---|
| `how-to-make-money-tiktok` | `seven-ways-make-money-tiktok`, `first-1000-dollars-tiktok` | `/calculators/tiktok-money/`, `/data/earnings/tiktok-creator-income-distribution/` |
| `first-1000-dollars-tiktok` | `how-to-make-money-tiktok`, `micro-influencers-make-money-tiktok` | `/calculators/tiktok-money/tiktok-money-10k-followers/`, `/calculators/brand-deal-rate/` |
| `diversify-tiktok-income-streams` | `seven-ways-make-money-tiktok`, `passive-income-tiktok-creators` | `/calculators/tiktok-money/`, `/calculators/earnings-revenue/live-earnings/` |
| `selling-digital-products-tiktok` | `tiktok-course-creation-guide`, `tiktok-merch-strategies` | `/calculators/commerce-ads/shop-profit/` |
| `tiktok-subscription-recurring-revenue` | `tiktok-series-monetization`, `passive-income-tiktok-creators` | `/calculators/tiktok-money/` |

#### `/content/guides/growth/` (18 articles) — Sample

| Article | siblingArticles | relatedArticles |
|---|---|---|
| `tiktok-algorithm-explained` | `get-on-fyp-consistently`, `tiktok-seo-search-ranking` | `/calculators/engagement-rate/`, `/calculators/engagement-rate/algorithm-engagement-rate/` |
| `best-posting-times-tiktok` | `tiktok-batch-content-creation`, `tiktok-content-pillars` | `/calculators/posting-time/`, `/data/engagement/posting-frequency-engagement-correlation/` |
| `tiktok-shadowban-fix` | `recover-tiktok-growth-plateau`, `tiktok-algorithm-explained` | `/calculators/engagement-rate/engagement-rate-dropping/`, `/calculators/follower-growth/` |
| `tiktok-hashtag-strategy-2026` | `tiktok-seo-search-ranking`, `tiktok-content-pillars` | `/calculators/hashtag-performance/` |

#### `/content/guides/business/` (12 articles) — Sample

| Article | siblingArticles | relatedArticles |
|---|---|---|
| `brand-deal-contract-negotiate` | `ftc-disclosure-tiktok`, `when-to-hire-manager-tiktok` | `/calculators/brand-deal-rate/`, `/guides/how-to-negotiate-brand-deals/` |
| `tiktok-creator-taxes-guide` | `llc-for-tiktok-creators`, `international-creator-tax-implications` | `/calculators/utility-tools/tax/`, `/calculators/tiktok-money/` |
| `llc-for-tiktok-creators` | `tiktok-creator-taxes-guide`, `tiktok-creator-insurance` | `/guides/business/tiktok-creator-taxes-guide/` |

---

## 8. Priority Implementation: Immediate Links to Add

### 8.1 Phase 1 — Calculator Page Body Links (Highest Impact, 1-2 days)

These are the 4 highest-traffic calculator pages. Add contextual links within their existing JSX educational content cards.

**Page 1: `/calculators/tiktok-money/page.tsx`**

Add these 5 links within existing card content:

1. In "TikTok Income Streams" card, after Creator Rewards item:
   - Link text: "how much TikTok pays per 1,000 views"
   - Target: `/calculators/tiktok-money/tiktok-pay-per-1000-views/`

2. In "Earnings by Follower Count" card, after 100K tier:
   - Link text: "100K follower earnings breakdown"
   - Target: `/calculators/tiktok-money/tiktok-money-100k-followers/`

3. In "Maximize Your Earnings" card, after tip #1 (diversify):
   - Link text: "diversify your income streams"
   - Target: `/guides/monetization/diversify-tiktok-income-streams/`

4. In "Monetization Requirements" card, after Creator Rewards section:
   - Link text: "Creator Rewards eligibility requirements"
   - Target: `/calculators/tiktok-creator-fund/creator-fund-eligibility-2026/`

5. In "Income Mix" insight card:
   - Link text: "TikTok earnings by country"
   - Target: `/calculators/tiktok-money/tiktok-earnings-by-country/`

**Page 2: `/calculators/engagement-rate/page.tsx`**

Add these 5 links:

1. In "What Counts as Engagement" card:
   - Link text: "what is a good TikTok engagement rate"
   - Target: `/calculators/engagement-rate/good-tiktok-engagement-rate/`

2. In "Engagement by Niche" card:
   - Link text: "engagement rates by niche"
   - Target: `/calculators/engagement-rate/engagement-rate-by-niche/`

3. In "How to Boost Engagement" card:
   - Link text: "detailed engagement improvement strategies"
   - Target: `/calculators/engagement-rate/increase-engagement-rate/`

4. In "Engagement and Brand Deals" card, in 8%+ section:
   - Link text: "how engagement rate affects brand deal pricing"
   - Target: `/calculators/engagement-rate/engagement-rate-brand-deals/`

5. In "2026 Engagement Benchmarks" insight card:
   - Link text: "benchmarks by follower count"
   - Target: `/calculators/engagement-rate/engagement-rate-by-followers/`

**Page 3: `/calculators/brand-deal-rate/page.tsx`**

Add these 4 links:

1. In "Rates by Follower Count" card, intro text:
   - Link text: "sponsorship rates by follower tier"
   - Target: `/calculators/brand-deal-rate/tiktok-sponsorship-rates-followers/`

2. In "Rates by Niche" card:
   - Link text: "2026 brand deal rate benchmarks"
   - Target: `/calculators/brand-deal-rate/tiktok-brand-deal-rates-2026/`

3. In "Negotiation Tips" card, tip #4:
   - Link text: "create a professional TikTok media kit"
   - Target: `/calculators/brand-deal-rate/tiktok-media-kit/`

4. In "What to Include" card, after packages:
   - Link text: "brand deal red flags to watch for"
   - Target: `/calculators/brand-deal-rate/brand-deal-red-flags/`

**Page 4: `/calculators/rpm/page.tsx`**

Add these 4 links:

1. In "Understanding TikTok RPM" card:
   - Link text: "what TikTok RPM actually means"
   - Target: `/calculators/rpm/what-is-tiktok-rpm/`

2. In "RPM Benchmarks by Niche" card:
   - Link text: "RPM rates by country"
   - Target: `/calculators/rpm/tiktok-rpm-by-country/`

3. In "Maximize Your RPM" card:
   - Link text: "increase your TikTok RPM"
   - Target: `/calculators/rpm/increase-tiktok-rpm/`

4. In "RPM vs Other Metrics" card:
   - Link text: "CPM vs RPM explained"
   - Target: `/calculators/rpm/tiktok-cpm-vs-rpm/`

### 8.2 Phase 2 — MDX Frontmatter Population (2-3 days)

Populate `siblingArticles` and `relatedArticles` for all 257 MDX files using the schemas defined in Section 7. This can be scripted:

1. For each MDX file in a calculator subdirectory, set `siblingArticles` to all other MDX files in the same directory
2. For each MDX file, set `relatedArticles` based on the mapping tables above (requires manual curation for best results, or can use keyword/topic matching as a first pass)
3. Verify `parentArticle` is set correctly for all files

**Script approach**: Create `scripts/populate-internal-links.ts` that:
- Reads all MDX files
- Groups by directory (siblings)
- Maps related articles using keyword overlap between `primaryKeyword` and `secondaryKeywords`
- Writes updated frontmatter

### 8.3 Phase 3 — MDX Body Content Links (3-5 days)

Add inline markdown links within MDX article body content. Target: 3-5 inline links per article.

**Priority MDX articles** (priorityScore >= 95, process first):
1. `tiktok-pay-per-1000-views` (score: 98)
2. `good-tiktok-engagement-rate` (score: 97)
3. All articles with priorityScore >= 90

**Template for inline links in MDX**:
```markdown
## [Section Heading]

[Existing paragraph text] that naturally mentions a concept covered
by another page, like [how much TikTok pays per million views](/calculators/tiktok-money/tiktok-pay-per-million-views/).
[Continue paragraph.]
```

### 8.4 Phase 4 — Hub Page Enhancement (1-2 days)

Add editorial prose sections to hub pages that create contextual links to spoke pages:

1. `/calculators/` — Add a "Popular by Category" section above the directory with 3-4 sentences per category linking to top calculators
2. `/guides/` — Add editorial introductions to each category section with contextual links
3. `/data/` — Add editorial context explaining what each data category covers

---

## 9. Anchor Text Strategy

### 9.1 First Link Priority

The first internal link pointing to any URL carries the most weight. Ensure the first link to each Tier 1 page uses the most strategic anchor text:

| Target Page | Ideal First-Link Anchor Text | Avoid |
|---|---|---|
| `/calculators/tiktok-money/` | "TikTok Money Calculator" or "TikTok earnings calculator" | "calculator", "click here", "this tool" |
| `/calculators/engagement-rate/` | "TikTok engagement rate calculator" or "calculate your engagement rate" | "engagement", "check rate" |
| `/calculators/brand-deal-rate/` | "brand deal rate calculator" or "calculate your brand deal rate" | "pricing", "rates" |
| `/calculators/rpm/` | "TikTok RPM calculator" or "calculate your RPM" | "RPM", "revenue" |
| `/calculators/tiktok-creator-fund/` | "Creator Fund calculator" or "estimate Creator Fund earnings" | "fund", "creator fund" |
| `/guides/` | "TikTok creator guides" or "creator monetization guides" | "guides", "read more" |

### 9.2 Anchor Text Variation Rules

- Never use the exact same anchor text twice for links to the same URL across different pages
- Vary between exact-match keywords (30%), partial-match keywords (40%), and natural phrases (30%)
- Never use naked URLs as anchor text
- Never use "click here", "read more", "learn more" as standalone anchor text (these fail the clickability test under Reasonable Surfer)

### 9.3 Anchor Text Templates by Link Relationship

| Relationship | Template | Example |
|---|---|---|
| Spoke → Hub | "[calculator/tool name]" or "use our [tool] to estimate" | "TikTok Money Calculator" |
| Hub → Spoke | "[topic covered by spoke]" as natural phrase | "how much TikTok pays per 1,000 views" |
| Sibling → Sibling | "[distinguishing topic]" as comparison | "earnings at 100K followers" |
| Cross-silo | "calculate your [metric]" or "[topic] calculator" | "calculate your engagement rate" |
| Article → Guide | "[guide topic] guide" or "learn how to [action]" | "brand deal pricing guide" |
| Guide → Calculator | "[action verb] with our calculator" | "estimate your earnings" |

---

## 10. Bidirectional Confirmation Links

The following page pairs should have mutual links (A links to B AND B links back to A) with varied anchor text:

### 10.1 Calculator ↔ Primary Guide Pairs

| Calculator | Guide | Why Bidirectional |
|---|---|---|
| `/calculators/tiktok-money/` | `/guides/how-to-make-money-on-tiktok/` | The calculator quantifies what the guide explains |
| `/calculators/engagement-rate/` | `/guides/increase-engagement-rate-tiktok/` | The calculator measures what the guide improves |
| `/calculators/brand-deal-rate/` | `/guides/how-to-price-brand-deals/` | The calculator prices what the guide negotiates |
| `/calculators/rpm/` | `/guides/tiktok-rpm-calculator-guide/` | The guide is the calculator's companion content |
| `/calculators/tiktok-creator-fund/` | `/guides/how-creator-fund-works/` | Direct topic match |
| `/calculators/live-gifts/` | `/guides/tiktok-live-earnings-guide/` | Direct topic match |

### 10.2 Calculator ↔ Data Page Pairs

| Calculator | Data Page | Why Bidirectional |
|---|---|---|
| `/calculators/engagement-rate/` | `/data/engagement/avg-engagement-rate-follower-count-2026/` | Data feeds calculator context |
| `/calculators/brand-deal-rate/` | `/data/brand-deal-rates-by-niche/` | Data feeds calculator context |
| `/calculators/rpm/` | `/data/rpm-rates-by-niche/` | Data feeds calculator context |
| `/calculators/tiktok-money/` | `/data/earnings/tiktok-creator-income-distribution/` | Data feeds calculator context |

---

## 11. Link Density Targets

| Page Type | Word Count | Target Body Links | Max Links (incl. nav/footer) |
|---|---|---|---|
| Calculator pages (TSX) | 2,000-4,000 words | 5-7 contextual | 25-35 total |
| MDX articles (short) | 1,500-2,000 words | 4-6 contextual | 12-18 total |
| MDX articles (long) | 2,500-3,500 words | 6-8 contextual | 15-22 total |
| Hub/grouper pages | 300-500 words + cards | 10-20 contextual (listing links) | 30-50 total |
| Guide pages (long) | 3,000-5,000 words | 8-12 contextual | 20-30 total |
| Homepage | 1,000-2,000 words | 8-12 contextual | 30-40 total |

---

## 12. Implementation Timeline

| Phase | Action | Pages Affected | Duration | Impact |
|---|---|---|---|---|
| **Phase 1** | Add 4-5 body links to top 4 calculator pages | 4 TSX pages | 1-2 days | High — activates Tier 1 hub→spoke connections |
| **Phase 2** | Populate MDX frontmatter (`siblingArticles`, `relatedArticles`) | 257 MDX files | 2-3 days (scriptable) | High — activates RelatedContentNav on all articles |
| **Phase 3** | Add 3-5 inline links to top 30 MDX articles (priorityScore >= 90) | 30 MDX files | 3-5 days | High — creates contextual body links |
| **Phase 4** | Add editorial context to hub pages (`/calculators/`, `/guides/`, `/data/`) | 3 TSX pages | 1-2 days | Medium — improves hub page equity distribution |
| **Phase 5** | Add body links to remaining calculator pages (20+ pages) | 20 TSX pages | 3-4 days | Medium — completes hub→spoke across all silos |
| **Phase 6** | Add 3-5 inline links to remaining 227 MDX articles | 227 MDX files | 5-7 days (partially scriptable) | Medium — completes site-wide contextual linking |
| **Phase 7** | Cross-silo bridge links between all silos | 30-40 pages | 2-3 days | Medium — connects isolated silos |
| **Phase 8** | Audit and verify all links (broken links, anchor text, density) | All pages | 1-2 days | Maintenance |

**Total estimated effort**: 18-28 days for full implementation.

**Quick win** (Phase 1 + Phase 2): 3-5 days for the highest-impact changes.

---

## 13. Monitoring & Success Metrics

### 13.1 Pre-Implementation Baseline

Before implementing, record:
- Average internal links per page (current estimate: 3-5 contextual)
- Number of orphan pages (pages with < 3 inbound internal links)
- Crawl depth distribution from Screaming Frog or similar
- Current organic traffic baseline

### 13.2 Post-Implementation Targets

| Metric | Current | Target (90 days) |
|---|---|---|
| Avg contextual body links per page | 1-3 | 5-7 |
| Pages with 0 inbound contextual links | ~200 (MDX articles) | 0 |
| Tier 1 pages: inbound link count | ~10 | 30-50 |
| Orphan pages (< 3 inbound) | ~150 | < 10 |
| Average crawl depth | 3.2 | 2.5 |
| Pages per crawl session | Unknown | Track increase |

### 13.3 Ongoing Maintenance Rules

1. Every new MDX article published must have `parentArticle`, `siblingArticles` (at least 2), and `relatedArticles` (at least 2) populated before publishing
2. Every new calculator page must have 5+ contextual body links to spoke articles and guides
3. Monthly audit: check for new orphan pages and broken links
4. Quarterly audit: verify top 10 pages still have highest inbound internal link counts
