# Website Converter Audit: tiktokcalculator.net

**Date:** 2026-03-18
**Domain:** tiktokcalculator.net (rebranded from calculatecreator.com)
**Central Entity:** TikTok
**Pages:** 180 route pages + 278 MDX/MD articles = ~458 content units
**Sitemap URLs:** 377
**Framework:** Next.js 14 App Router, static export, Firebase Hosting

---

## Executive Summary

tiktokcalculator.net has significant topical breadth (458 content units across calculators, guides, data, news, comparisons, and references) but is **not ranking after 6 months** due to a combination of structural, technical, and semantic deficiencies that collectively undermine topical authority signals. The site suffers from:

1. **Massive content cannibalization** across brand deals, creator fund, engagement rate, and earnings topics
2. **Duplicate page generation** where old URL paths still render full pages alongside new canonical paths
3. **Near-zero in-content internal linking** on calculator pages (1-3 links per page)
4. **Empty semantic metadata** across all 278 MDX articles (no heading vectors, no micro-contexts, no related/child article links populated)
5. **Flat information architecture** with 59 guide MDX articles parented directly to `/guides/` instead of proper topical clusters
6. **Brand/domain continuity break** from the rebrand with no evidence of proper historical data preservation

The Topical Authority score is approximately: **Vastness 7/10 x Depth 3/10 x Momentum 2/10 = 42/1000** (very weak).

---

## 1. Content Inventory & Topical Map Assessment

### 1.1 Current Content Distribution

| Section | Route Pages | MDX Articles | Total |
|---------|------------|-------------|-------|
| Calculators | 78 | 69 | 147 |
| Guides | 14 hub/landing | 118 | 132 |
| Data | 6 hub/landing | 63 | 69 |
| Blog | 2 | 42 | 44 |
| News | 22 | 0 | 22 |
| Comparisons | 8 | 0 | 8 |
| Reference | 8 | 2 | 10 |
| Niches | 4 | 3 | 7 |
| Other (about, faq, etc.) | 19 | 0 | 19 |

### 1.2 Topical Map Coverage Assessment

**Core Section (Central Entity Attributes) -- Coverage: ~70%**

The site covers the major monetization attributes of TikTok well:
- Creator Fund/Rewards (15 articles) -- COVERED but cannibalized
- Brand Deals (14 articles) -- COVERED but cannibalized
- LIVE Earnings (5+ articles) -- COVERED
- TikTok Shop (10+ articles) -- COVERED
- Coins/Diamonds/Gifts (10+ articles) -- COVERED
- Engagement Rate (14 articles) -- COVERED but cannibalized
- RPM (5 articles) -- COVERED

**Outer Section (Minor Attributes) -- Coverage: ~40%**

Partial coverage with significant gaps:
- Analytics & Metrics (limited)
- Algorithm mechanics (scattered, not clustered)
- Content strategy (fragmented)
- Growth tactics (18 articles but not well structured)
- Business operations (12 articles, good cluster)

### 1.3 Missing Topical Map Nodes

**CRITICAL GAPS (high search volume, zero coverage):**
1. TikTok ads FROM the advertiser perspective (cost benchmarks, campaign setup guides)
2. TikTok analytics dashboard walkthrough (how to read each metric)
3. TikTok account types comparison (personal vs creator vs business)
4. TikTok API/developer tools for creators
5. TikTok effects/filters impact on engagement
6. TikTok duet/stitch strategy guides
7. TikTok captions/subtitles impact on reach
8. TikTok scheduling tools comparison
9. TikTok UGC creator economy (UGC vs influencer)
10. TikTok affiliate marketing (non-Shop, external links)

**MODERATE GAPS (medium search volume):**
11. Country-specific TikTok guides (only data pages exist, no actionable guides)
12. Age demographic targeting on TikTok
13. TikTok for small businesses (not creators)
14. TikTok podcast clips strategy
15. TikTok carousels/photo mode (only 1 article)
16. TikTok music/sounds strategy (only 1 article)
17. TikTok community management
18. TikTok crisis management for creators
19. Cross-platform repurposing tools (only conceptual, no tool reviews)
20. TikTok vertical video best practices

---

## 2. Content Cannibalization Analysis (CRITICAL)

### 2.1 Severe Cannibalization Clusters

**Cluster A: "Brand Deals" -- 14 articles competing for overlapping queries**

| Article | Primary Keyword Overlap |
|---------|------------------------|
| `guides/brand-deals.mdx` | "tiktok brand deals guide" |
| `guides/how-to-get-brand-deals.mdx` | "how to get brand deals tiktok" |
| `guides/how-to-get-brand-deals-complete.mdx` | "how to get brand deals tiktok" (DUPLICATE) |
| `guides/how-to-negotiate-brand-deals.mdx` | "negotiate brand deals" |
| `guides/how-to-price-brand-deals.mdx` | "price brand deals" |
| `guides/how-much-to-charge-sponsorship.mdx` | "how much to charge sponsorship" (overlaps pricing) |
| `data/brand-deal-rates-by-followers.mdx` | "brand deal rates by followers" |
| `data/brand-deal-rates-by-niche.mdx` | "brand deal rates by niche" |
| `calculators/brand-deal-rate/tiktok-brand-deal-rates-2026.mdx` | "tiktok brand deal rates 2026" |
| `calculators/brand-deal-rate/tiktok-sponsorship-rates-followers.mdx` | overlaps with data page |
| `calculators/brand-deal-rate/brands-calculate-influencer-roi.mdx` | brand perspective |
| `blog/brand-deal-rate-negotiation-tips.mdx` | overlaps negotiation guide |

**IMPACT:** Google cannot determine which page to rank. All 14 compete, none wins.

**Cluster B: "Creator Fund" -- 15 articles**
- At least 6 articles about "how creator fund works" with slight title variations
- "Maximize Creator Fund RPM" appears in both guides AND calculator sub-articles
- "Why did my creator fund earnings drop" has both .md and .mdx versions

**Cluster C: "Engagement Rate" -- 14 articles**
- "Good engagement rate" topic covered in at least 4 places
- "Increase engagement rate" covered in at least 3 places
- "Engagement rate by niche" in both data pages and calculator sub-articles

**Cluster D: "Make Money on TikTok" -- 10+ articles**
- "How to make money on TikTok" exists as both guide and blog
- "7 ways to make money" overlaps with comprehensive guide
- Multiple earnings breakdown articles for same query

### 2.2 Cannibalization Resolution Plan

For each cluster, designate ONE pillar article. All others must either:
- Be consolidated into the pillar (merge content, 301 redirect)
- Be differentiated with unique angle and canonical intent separation
- Be demoted to supporting articles with clear `rel=canonical` pointing to pillar

---

## 3. URL Structure & Information Architecture Issues

### 3.1 Duplicate Route Paths (CRITICAL)

The following calculator tools exist at BOTH old and new URL paths, generating duplicate indexable pages:

| Old Path (still renders) | New Path (canonical) | Status |
|--------------------------|---------------------|--------|
| `/calculators/earnings-revenue/money/` | `/calculators/tiktok-money/` | Both pages exist as full routes |
| `/calculators/earnings-revenue/creator-fund/` | `/calculators/tiktok-creator-fund/` | Both pages exist |
| `/calculators/engagement-influence/engagement/` | `/calculators/engagement-rate/` | Both pages exist |

**These are NOT just redirects -- they are full page.tsx files generating full HTML pages.** The firebase.json redirects exist but the static export ALSO generates the old paths. This means crawlers may index both.

### 3.2 Nested vs Flat Calculator Hierarchy

The calculator section has an inconsistent hierarchy:

**Nested (3+ depth levels):**
- `/calculators/coins-gifts-diamonds/coins/` (still active, in sitemap)
- `/calculators/coins-gifts-diamonds/diamonds/`
- `/calculators/coins-gifts-diamonds/gift/`
- `/calculators/commerce-ads/shop-profit/`
- `/calculators/commerce-ads/ad-cost/`
- `/calculators/commerce-ads/rpm-cpm/`
- `/calculators/earnings-revenue/live-earnings/`
- `/calculators/engagement-influence/video-engagement/`

**Flat (2 levels):**
- `/calculators/tiktok-money/`
- `/calculators/engagement-rate/`
- `/calculators/brand-deal-rate/`
- `/calculators/rpm/`

**Problem:** No consistent URL architecture. Some calculators have moved to flat paths, others remain nested. Users and crawlers encounter both patterns.

### 3.3 Guide Hierarchy Issues

59 guide MDX articles are parented directly to `/guides/` instead of being properly distributed into sub-clusters:

| Sub-cluster | Articles | Parent |
|------------|----------|--------|
| `/guides/monetization/` | 17 | Proper |
| `/guides/growth/` | 18 | Proper |
| `/guides/business/` | 12 | Proper |
| `/guides/niches/` | 12 | Proper |
| `/guides/` (flat, unclustered) | 59 | BROKEN |

Those 59 top-level guide articles need to be distributed into the 4 sub-clusters or new clusters must be created (e.g., `/guides/live-streaming/`, `/guides/platform-comparison/`, `/guides/getting-started/`).

---

## 4. Internal Linking Audit (CRITICAL)

### 4.1 Calculator Pages: Near-Zero In-Content Links

Sampled 4 primary calculator pages (tiktok-money, engagement-rate, brand-deal-rate, rpm):

| Page | `<Link>` components in body | Contextual in-text links |
|------|---------------------------|-------------------------|
| tiktok-money | 1 (import only) | 2 links in one paragraph |
| engagement-rate | 1 (import only) | 0 in-text links |
| brand-deal-rate | 1 (import only) | 0 in-text links |
| rpm | 3 | ~2-3 in-text links |

**Each calculator page has 400+ lines of JSX content but only 0-3 contextual links.** The pages rely entirely on `<RelatedCalculators>` and `<RelatedGuides>` components which are sidebar/footer widgets, not in-content contextual links.

**Impact:** Google uses contextual in-content links as the primary signal for topical relationships. Widget/sidebar links carry far less weight. The 400-line calculator pages are effectively link islands.

### 4.2 Header Navigation: Too Few Sections Linked

The header navigation only links to 5 sections:
- Tools (calculators)
- Benchmarks
- Guides
- News
- About

**Missing from navigation:**
- Data section (63+ articles, entirely unlinkable from nav)
- Comparisons section (8 pages, invisible from nav)
- Reference section (8 pages, invisible from nav)
- Blog section (42 articles, invisible from nav)
- Niches section (7 pages, invisible from nav)

### 4.3 Footer: Minimal Link Equity Distribution

The footer links to only 12 pages:
- 4 calculators (money, brand-deal, rpm, engagement)
- 3 section hubs (calculators, benchmarks, guides, news)
- 4 company pages (about, contact, privacy, terms)
- 1 CTA (contact)

**350+ content pages receive zero footer link equity.**

### 4.4 MDX Article Cross-Linking

All 278 MDX articles have empty linking metadata:
- `childArticles: []` -- 257 out of 257
- `relatedArticles: []` -- 236 out of 236
- `siblingArticles: []` -- all empty
- `headingVector: []` -- 75 with empty heading vectors
- `microContext: []` -- 75 with empty micro-contexts

**The semantic content network has no actual network.** Articles exist as isolated content units with no programmatic cross-linking.

---

## 5. Schema Markup Audit

### 5.1 Schema Types Implemented

| Schema Type | Where Used | Assessment |
|-------------|-----------|------------|
| Organization | Homepage | OK but missing `sameAs` (no social profiles) |
| WebSite | Homepage | OK, has SearchAction |
| WebApplication | Each calculator | Good -- proper `@type` for tools |
| Article | Guides, blog | OK but `datePublished` hardcoded to 2024-01-15 across ALL |
| NewsArticle | News pages | OK |
| FAQPage | Calculator pages, guide hub | Good |
| BreadcrumbList | Most pages | OK |
| CollectionPage | Hub pages | Good |
| ItemList | Calculator directory | Good |
| Dataset | Data pages | Good use of Dataset schema |
| HowTo | Available but usage unclear | Underutilized |
| Person | Author pages | Good |

### 5.2 Schema Issues

**Issue 1: Identical datePublished/dateModified across pages**
Nearly all calculator pages use `datePublished: "2024-01-15"` and `dateModified: "2026-03-01"`. This is a mass-update pattern that signals to Google that content was batch-modified rather than genuinely updated.

**Issue 2: Missing SameAs on Organization**
The `sameAs` array in OrganizationSchema is empty. Without social profiles or external entity references, Google cannot build a Knowledge Graph connection for the brand.

**Issue 3: Two ArticleSchema components**
There are TWO separate ArticleSchema implementations:
- `src/components/seo/ArticleSchema.tsx` (used by MDX articles)
- `src/components/seo/CalculatorSchema.tsx` (contains another ArticleSchema export)

These have different property sets and could produce conflicting signals.

**Issue 4: No `mainEntity` connection between calculators and articles**
Calculator schema uses `WebApplication` type. Supporting MDX articles use `Article` type. But there is no `mainEntity` / `isPartOf` relationship declared in schema between them.

**Issue 5: Missing schema types**
- No `SoftwareApplication` schema with `aggregateRating`
- No `Product` schema for the calculator suite
- No `CreativeWork` or `Course` schema for guide clusters
- No `DefinedTerm` / `DefinedTermSet` for glossary

---

## 6. Cost of Retrieval Audit

### 6.1 Index Pollution

**Duplicate pages being generated and potentially indexed:**
- Old calculator paths (earnings-revenue/money, engagement-influence/engagement, earnings-revenue/creator-fund) still generate full HTML despite having firebase.json redirects
- `/calculators/coins-gifts-diamonds/` hub page AND child pages still in sitemap alongside newer flat paths
- `/calculators/fun-niche/moon-phase/` has a redirect to `/calculators/` but page.tsx still exists
- Reference section has duplicate pages: `creator-fund-countries` AND `creator-fund-eligible-countries` (redirect exists but old page.tsx still generates)

**Estimate: 15-25 duplicate pages being crawled unnecessarily.**

### 6.2 Thin Content Pages

- 75 MDX articles have `wordCount: 0` in frontmatter (unknown actual content length)
- Hub/landing pages (calculators, guides, data) are primarily navigation with minimal unique content
- News pages (22) with potentially outdated content still being crawled

### 6.3 Crawl Budget Impact

- 377 URLs in sitemap, but some are duplicates of others via redirect
- Firebase static hosting serves all pages as pre-rendered HTML (good for crawl speed)
- Cache headers are properly configured (immutable for assets, must-revalidate for HTML)
- `robots.txt` is clean and minimal

### 6.4 Technical Friction

- Service Worker registered on all pages (`sw.js`). Service workers on static sites can cache stale content and interfere with crawling if not carefully managed.
- `Content-Security-Policy` header allows `'unsafe-inline'` and `'unsafe-eval'` for scripts. Not a ranking factor but a security signal.
- No `X-Robots-Tag` HTTP headers for fine-grained crawl control
- Old brand name remnants in 3 source files: `authors.ts`, `page-metadata.ts`, `article-page.tsx`

---

## 7. Cross-Page Consistency Issues

### 7.1 Factual Inconsistencies Found

**Creator Fund payout rates cited differently:**
- Homepage FAQ: "$0.02-$0.05 per 1,000 views"
- Money calculator page: "$0.02-$0.04 per 1,000 views" (MDX guide frontmatter)
- Engagement rate page FAQ: No rate cited

**Brand deal rates inconsistent:**
- Brand deal calculator FAQ: "5K-10K followers: $100-$500/post"
- Money calculator FAQ: same ranges
- Guide MDX: "$10-$30 per 1,000 followers" (different formula entirely)

These inconsistencies erode E-E-A-T and create contradictory signals within the same domain.

### 7.2 Date Inconsistencies

- MDX articles show `publishDate: "2026-02-17"` or `"2026-02-20"`
- Calculator pages all use `datePublished: "2024-01-15"` (suggesting original launch)
- MDX guide content body says "Last updated: November 13, 2025" while frontmatter says 2026-02-17
- Schema `dateModified` is universally "2026-03-01" (mass batch update)

---

## 8. Brand SERP & Domain Transition

### 8.1 Rebrand Impact Assessment

The site rebranded from "CalculateCreator" (calculatecreator.com) to "TT Calculator" (tiktokcalculator.net). This is a **full domain change + brand name change**, which is one of the most disruptive events for SEO:

- **No evidence of 301 redirects from calculatecreator.com to tiktokcalculator.net** in the codebase. If the old domain doesn't redirect, all historical backlinks and domain authority are lost.
- Old brand references still exist in source code (3 files)
- Knowledge Graph signals are effectively reset with no `sameAs` pointing to old domain

### 8.2 Brand SERP Status

- Organization schema has empty `sameAs` array -- no social profiles linked
- No `ContactPoint` with email/phone details
- No external entity references that would help Google connect the brand

---

## 9. Topical Authority Score

### Current Baseline

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| **Vastness** | 7/10 | 458 content units covering most core attributes of TikTok creator monetization. Missing ~30% of ideal topical map (ads perspective, UGC, country guides, tools). |
| **Depth** | 3/10 | Calculator pages have good FAQ depth but minimal in-content text. MDX articles have zero populated semantic metadata (no heading vectors, micro-contexts, related articles). Content is wide but shallow. |
| **Momentum** | 2/10 | All content appears to have been batch-published/updated on the same dates. No evidence of consistent ongoing publication cadence. Mass date updates signal batch operation, not genuine editorial momentum. |

**Topical Authority = 7 x 3 x 2 = 42/1000**

### 12-Month Targets

| Dimension | 3-month | 6-month | 12-month |
|-----------|---------|---------|----------|
| Vastness | 8/10 | 9/10 | 9.5/10 |
| Depth | 5/10 | 7/10 | 8/10 |
| Momentum | 4/10 | 6/10 | 8/10 |
| **Composite** | **160** | **378** | **608** |

---

## 10. Prioritized Remediation Plan

### Phase 1: Technical Fixes (Weeks 1-4) -- URGENCY: IMMEDIATE

#### P1.1 Eliminate Duplicate Pages
- **Delete** old path page.tsx files that have canonical redirects: `earnings-revenue/money/`, `earnings-revenue/creator-fund/`, `engagement-influence/engagement/`, `engagement-influence/influencer-pricing/`
- Verify firebase.json redirects cover all old paths
- Add `noindex` to any legacy pages that cannot be deleted
- Remove old paths from sitemap

#### P1.2 Fix Domain Redirect
- **CRITICAL:** Verify calculatecreator.com 301 redirects to tiktokcalculator.net for all paths. If not configured, this is the single biggest reason for not ranking.
- Set up domain-level redirect if not already active

#### P1.3 Clean Up Sitemap
- Remove duplicate/redirect URLs from sitemap.xml
- Ensure sitemap priority values reflect actual importance (currently some MDX sub-articles have `priority: 1.0` above hub pages)
- Add `<lastmod>` dates that reflect actual content changes, not batch updates

#### P1.4 Fix Date Signals
- Implement per-page `dateModified` that reflects actual last-edit dates
- Remove batch `2026-03-01` across all pages
- Ensure MDX body "Last updated" matches frontmatter `publishDate`

#### P1.5 Remove Old Brand References
- Clean 3 remaining source files with "calculatecreator" references
- Files: `src/lib/constants/authors.ts`, `src/lib/constants/page-metadata.ts`, `src/lib/content/article-page.tsx`

### Phase 2: Content Cannibalization Resolution (Weeks 3-8)

#### P2.1 Brand Deals Cluster
- **Pillar:** Merge `how-to-get-brand-deals.mdx` + `how-to-get-brand-deals-complete.mdx` + `brand-deals.mdx` into ONE definitive guide at `/guides/monetization/brand-deals-complete-guide/`
- **Support:** Keep differentiated sub-articles (red flags, ROI calculation, media kit)
- **301 redirect** all deprecated URLs to pillar
- **Data pages:** Keep `brand-deal-rates-by-followers` and `brand-deal-rates-by-niche` as data reference (different intent)

#### P2.2 Creator Fund Cluster
- **Pillar:** Consolidate into `/guides/monetization/tiktok-creator-fund-guide/`
- **Delete/redirect** duplicate .md files (why-creator-fund-earnings-dropped.md alongside .mdx)
- Clearly differentiate "Creator Fund" (historical) vs "Creator Rewards" (current) articles

#### P2.3 Engagement Rate Cluster
- **Pillar:** `/calculators/engagement-rate/` page content + `/guides/growth/engagement-rate-guide/`
- Each sub-article must have a UNIQUE angle (not "good engagement rate" from 4 angles)

#### P2.4 Earnings/Make Money Cluster
- **Pillar:** `/guides/monetization/how-to-make-money-tiktok/`
- Differentiate all supporting articles by specific income stream, not generic "make money"

### Phase 3: Internal Linking Architecture (Weeks 5-12) -- CRITICAL FOR RECOVERY

#### P3.1 In-Content Contextual Links
Every calculator page (400+ lines of content) must have **minimum 8-12 contextual in-text links** to:
- 2-3 related calculator pages
- 2-3 supporting guide articles
- 1-2 data/benchmark pages
- 1-2 comparison pages
- Relevant MDX sub-articles

**This is the single most impactful change for ranking recovery.** Current state of 0-3 links per page makes the entire site a collection of orphans.

#### P3.2 Populate MDX Semantic Metadata
For all 278 MDX articles, populate:
- `childArticles` -- link to sub-articles
- `relatedArticles` -- link to 3-5 topically related articles
- `siblingArticles` -- link to same-cluster articles
- `headingVector` -- semantic heading structure
- `microContext` -- supplementary content anchors

#### P3.3 Header Navigation Expansion
Add to navigation:
- Data (dropdown or mega menu)
- Blog
- Comparisons

Or implement a mega menu for "Resources" that includes Data, Blog, Comparisons, Reference, Niches.

#### P3.4 Footer Link Expansion
Add footer columns for:
- Top guides (link to 4-5 highest-priority guide clusters)
- Data & benchmarks (link to 4-5 data hub pages)
- Comparisons (link to all 7 comparison pages)

#### P3.5 Hub Page Enhancement
The `/calculators/` hub page uses a `ToolsDirectoryClient` component that provides a filterable list -- good for UX but potentially bad for crawling if implemented entirely client-side. Ensure:
- All calculator links render in server-side HTML
- Add editorial content to hub pages (not just lists)
- Add 300-500 words of unique contextual content per hub page

### Phase 4: Content Depth & Semantic Enhancement (Weeks 9-24)

#### P4.1 Calculator Page Content Expansion
Each calculator page should have:
- Interactive calculator widget (already exists)
- 800-1500 words of methodology + explanation (partially exists)
- FAQ section with 8-12 questions (already exists)
- In-content links (MISSING)
- Related data tables/charts (MISSING)
- Use cases / scenarios section (MISSING)

#### P4.2 Fill Missing Topical Map Nodes
Priority order for new content:
1. TikTok account types guide (business vs creator vs personal)
2. TikTok analytics dashboard walkthrough
3. TikTok ads guide (advertiser perspective)
4. UGC creator economy guide
5. TikTok scheduling tools comparison
6. TikTok duet/stitch strategy
7. TikTok captions/subtitles guide
8. Country-specific actionable guides (not just data)

#### P4.3 Schema Enhancement
- Add `sameAs` to Organization schema (create social profiles first)
- Implement `mainEntity` / `isPartOf` relationships between calculators and supporting articles
- Add `AggregateRating` to WebApplication schema if user feedback data exists
- Use `DefinedTerm` schema for glossary page
- Add `HowTo` schema to step-by-step guides

### Phase 5: Publication Momentum (Weeks 12-52)

#### P5.1 Establish Consistent Publishing Schedule
- Target: 15 articles/month (3-4 per week)
- Pattern: Vary content types (guide, data update, news, comparison) across the week
- **Do NOT batch-publish.** Stagger publication dates by 2-3 days minimum.

#### P5.2 Content Refresh Cycle
- Quarterly audit of all calculator assumptions
- Monthly data page updates with new statistics
- Weekly news coverage of TikTok platform changes

#### P5.3 Genuine DateModified Signals
- Only update `dateModified` when content actually changes
- Log content changes in a changelog or frontmatter history field
- Never mass-update dates across all pages simultaneously

---

## 11. Quick Wins for Ranking Recovery

These changes can be implemented within 1-2 weeks and have the highest probability of impact:

### Quick Win 1: Delete Duplicate Calculator Pages
**Effort:** 2 hours | **Impact:** HIGH
Remove `page.tsx` files at old paths (earnings-revenue/money, engagement-influence/engagement, etc.) to eliminate duplicate content signals.

### Quick Win 2: Verify Old Domain Redirect
**Effort:** 30 minutes | **Impact:** CRITICAL
Check if calculatecreator.com properly 301 redirects to tiktokcalculator.net. If not, configure immediately. This alone could explain 6 months of zero ranking.

### Quick Win 3: Add 8-12 Contextual Links to Top 10 Calculator Pages
**Effort:** 4-6 hours | **Impact:** HIGH
Manually add in-text contextual links within the body content of the 10 most important calculator pages. Each link should use descriptive anchor text.

### Quick Win 4: Consolidate Top Cannibalization Cluster
**Effort:** 1 day | **Impact:** HIGH
Merge the 3 overlapping "how to get brand deals" articles into one definitive guide. 301 redirect the others.

### Quick Win 5: Fix Sitemap Priority & Dates
**Effort:** 2 hours | **Impact:** MEDIUM
Update sitemap to remove duplicates, fix priority values (calculator hub and primary calculators at 1.0, sub-articles at 0.7-0.8), and add accurate lastmod dates.

### Quick Win 6: Populate Organization SameAs
**Effort:** 1 hour | **Impact:** MEDIUM
Create Twitter/X and LinkedIn profiles for TT Calculator. Add URLs to Organization schema `sameAs` array.

### Quick Win 7: Add Data/Blog/Comparisons to Navigation
**Effort:** 1 hour | **Impact:** MEDIUM
Expand header navigation to include links to Data, Blog, and Comparisons sections so crawlers can discover 100+ currently hidden pages.

---

## 12. Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| Old domain not redirecting | CRITICAL | Verify and fix immediately |
| Duplicate page generation | HIGH | Delete old path page.tsx files |
| Content cannibalization | HIGH | Consolidation plan in Phase 2 |
| Zero internal linking | HIGH | Phase 3 contextual linking |
| Batch date updates | MEDIUM | Implement per-page real dates |
| Empty MDX metadata | MEDIUM | Populate in Phase 3-4 |
| Missing topical nodes | MEDIUM | Fill in Phase 4 |
| Schema inconsistencies | LOW | Fix in Phase 4 |

---

## Appendix A: File Reference

Key files to modify:

| File | Issue |
|------|-------|
| `src/app/calculators/earnings-revenue/money/page.tsx` | DELETE (duplicate of tiktok-money) |
| `src/app/calculators/earnings-revenue/creator-fund/page.tsx` | DELETE (duplicate of tiktok-creator-fund) |
| `src/app/calculators/engagement-influence/engagement/page.tsx` | DELETE (duplicate of engagement-rate) |
| `src/lib/constants/authors.ts:185` | Remove "calculatecreator" reference |
| `src/lib/constants/page-metadata.ts:770` | Remove "calculatecreator" reference |
| `src/lib/content/article-page.tsx:33` | Remove "CalculateCreator" reference |
| `src/components/layout/Header.tsx` | Expand navigation |
| `src/components/layout/Footer.tsx` | Expand footer links |
| `src/components/seo/HomepageSchema.tsx` | Add sameAs |
| `firebase.json` | Verify all redirects cover old paths |
| `public/sitemap.xml` | Remove duplicates, fix priorities |

## Appendix B: Cannibalization Matrix (Partial)

```
Query: "brand deal rates tiktok"
  Competing pages:
  1. /calculators/brand-deal-rate/ (calculator)
  2. /calculators/brand-deal-rate/tiktok-brand-deal-rates-2026/ (mdx)
  3. /calculators/brand-deal-rate/tiktok-sponsorship-rates-followers/ (mdx)
  4. /data/brand-deal-rates-by-followers/ (data)
  5. /data/brand-deal-rates-by-niche/ (data)
  6. /guides/how-to-price-brand-deals/ (guide)
  7. /guides/brand-deals/ (guide)

Query: "tiktok engagement rate"
  Competing pages:
  1. /calculators/engagement-rate/ (calculator)
  2. /calculators/engagement-rate/good-tiktok-engagement-rate/ (mdx)
  3. /calculators/engagement-rate/engagement-rate-by-niche/ (mdx)
  4. /data/engagement-rates-by-niche/ (data)
  5. /guides/increase-engagement-rate-tiktok/ (guide - redirected)
  6. /guides/tiktok-engagement-rate-calculator-guide/ (guide)

Query: "tiktok creator fund"
  Competing pages:
  1. /calculators/tiktok-creator-fund/ (calculator)
  2. /guides/tiktok-creator-fund/ (guide)
  3. /guides/how-creator-fund-works/ (guide - redirected)
  4. /guides/how-to-join-creator-fund/ (guide)
  5. /data/creator-fund-rates-by-country/ (data)
  6. /reference/creator-fund-countries/ (reference)
  7. /calculators/tiktok-creator-fund/creator-fund-pay-per-view/ (mdx)
```

---

*Audit produced by Website Converter Skill (Koray Semantic SEO Framework)*
*Next steps: Run Stage 1 (Source Context) and Stage 2 (Entity-Attribute Analysis) to build the ideal topical map for gap resolution.*
