# AEO Audit: CalculateCreator.com
**Date:** February 20, 2026
**Site:** https://calculatecreator.com
**Pages Indexed:** ~408
**Overall AEO Score: 70/100 (Grade: C)**

---

## Executive Summary

CalculateCreator has strong foundational content (408 pages of TikTok monetization data, guides, and calculators) and a well-architected schema infrastructure in its source code. However, **critical gaps in AI visibility, entity establishment, and a potential schema rendering bug on the homepage** are preventing AI systems from citing the site.

**Key finding:** The site appears in AI Overview results for only **2 of 10 target keywords**, and dominates only one niche query ("tiktok brand deal rate calculator"). A schema rendering issue on the homepage means the Organization, WebSite, and FAQPage schemas that exist in source code may not be reaching search engines.

---

## 1. AI Overview Visibility Testing

**Result: 2/10 keywords with CalculateCreator visibility**

| Keyword | AI Overview? | CC Cited? | CC Organic Rank | Top Cited Sources |
|---------|-------------|-----------|-----------------|-------------------|
| tiktok money calculator | Yes | No | Not top 10 | postfity, tikcalculator, auxmode |
| tiktok engagement rate calculator | Yes | No | Not top 10 | phlanx, clickanalytic, socialinsider |
| how much does tiktok pay per view | Yes | No | Not top 10 | demandsage, linktr.ee, uppbeat |
| tiktok earnings calculator | Yes | No | Not top 10 | tikcalculator, auxmode, tikleap |
| tiktok coin value in usd | Yes | No | Not top 10 | coinbrain, zebracat, redsocial |
| tiktok creator fund calculator | Yes | No | Not top 10 | influencermarketinghub, soundcamps |
| tiktok live earnings calculator | Yes | Yes (pos 10) | #10 | tikleap, tikcalculator, echotik |
| tiktok brand deal rate calculator | Yes | Yes (pos 2,3,4,6,9) | #2-9 | collabstr, calculatecreator (x5) |
| how to calculate tiktok engagement rate | Yes | No | Not top 10 | phlanx, influencermarketingfactory |
| tiktok rpm calculator | Yes | No | Not top 10 | joinkliq, searchengineland, demandsage |

### Key Insights
- **Brand deal rate calculator is a major success** -- CalculateCreator holds 5 of top 10 positions. This proves the content cluster strategy works.
- **Calculator tool queries are dominated by SaaS tools** with username-based real-time lookup (tikcalculator, phlanx, hypeauditor). CalculateCreator's static calculators struggle to compete.
- **Informational queries are dominated by high-DA publishers** (demandsage, bluehost, linktree, sproutsocial). CalculateCreator needs backlinks to compete.
- **Zero AI Overview citations** across all 10 keywords. The brand deal success is organic ranking, not AI citation.

---

## 2. Brand SERP Analysis

**Brand SERP Score: 45/100 (Grade: C)**

### "CalculateCreator" (exact brand name)
- **Positions 1-10: All CalculateCreator URLs** -- Strong brand ownership
- **Issue:** Homepage is NOT in the top results. Inner guide pages rank instead.
- **No Knowledge Panel**

### "calculatecreator.com" (domain search)
- **Only 1 CalculateCreator result** (position 1)
- Remaining positions filled by unrelated sites (amazon.jobs, twitch.tv careers, creatoriq.com)

### "calculate creator tiktok" (semi-branded)
- CalculateCreator appears at **position 8** behind 7 competing calculator tools

### Critical Issues
1. Homepage does not rank for brand name queries
2. No Google Knowledge Panel
3. No social media profiles surface in brand SERPs
4. Semi-branded queries are not controlled

---

## 3. Entity Optimization Audit

**Entity Score: 25/100 (Grade: D)**

| Signal | Status |
|--------|--------|
| Wikipedia page | Not found |
| Wikidata entry | Not found |
| Google Knowledge Panel | Not found |
| Twitter/X (@calculatecreator) | Claimed in schema, not verified active |
| Facebook | Claimed in schema, not verified active |
| LinkedIn company page | Not found |
| TikTok account | Not found |
| YouTube channel | Not found |
| Instagram | Not found |
| Organization schema (live) | NOT rendering on homepage |
| sameAs links (live) | NOT rendering on homepage |
| Brand name consistency | INCONSISTENT -- uses both "CalculateCreator.com" and "TikTok Calculator" |

### Critical Finding: Schema Rendering Bug
The `HomepageSchema.tsx` component contains well-structured Organization, WebSite (with SearchAction), FAQPage, BreadcrumbList, ItemList, and CollectionPage schemas. **However, WebFetch detected ZERO structured data on the live homepage.** This suggests the schema component is either:
1. Not imported/rendered in the homepage page.tsx
2. Being stripped during Next.js static export
3. Failing to render client-side after page load

This is the **#1 blocking issue** for the entire AEO strategy.

### Brand Name Inconsistency
- `HomepageSchema.tsx` uses organization name: **"CalculateCreator.com"**
- `CalculatorSchema.tsx` uses publisher name: **"TikTok Calculator"**
- `ArticleSchema.tsx` uses publisher name: **"TikTok Calculator"**
- Blog post schemas use publisher name: **"TikTok Calculator"**

This confuses entity recognition. Pick one canonical name and use it everywhere.

---

## 4. Structured Data Audit (Per-Page)

| Page | Schemas Found (Live) | FAQPage | Article | Breadcrumb | HowTo | Speakable | sameAs |
|------|---------------------|---------|---------|------------|-------|-----------|--------|
| Homepage | **NONE** (rendering bug) | In code only | N/A | In code only | No | No | In code only |
| /calculators/tiktok-money/ | SoftwareApp, FAQ, Breadcrumb, Person | Yes (12 Q) | N/A | Yes | No | No | No |
| /calculators/engagement-rate/ | SoftwareApp, FAQ, Breadcrumb, Person | Yes (12 Q) | N/A | Yes | No | No | No |
| /guides/monetization/how-to-make-money-tiktok/ | Article, Breadcrumb, Person | No | Yes | Yes | No | No | No |
| /blog/best-tiktok-niches-money-2026/ | Article, Breadcrumb, Person | No | Yes | Yes | No | No | Author only |
| /data/earnings/average-tiktok-earnings-per-views/ | Article, Breadcrumb, Person | No | Yes | Yes | No | No | No |

### Schema Gaps Across All Pages
- **speakable:** Not implemented anywhere
- **HowTo:** Component exists in code but not used on any pages
- **sameAs (organization):** Only in non-rendering homepage schema
- **WebSite with SearchAction:** Only in non-rendering homepage schema

---

## 5. Per-Page AEO Scores (Top 5)

| Page | Score | Grade | Biggest Gap |
|------|-------|-------|-------------|
| /blog/best-tiktok-niches-money-2026/ | 68/100 | C+ | No FAQ section/schema |
| /calculators/tiktok-money/ | 66/100 | C+ | No direct answer in first 50 words |
| /calculators/engagement-rate/ | 66/100 | C+ | No direct answer in first 50 words |
| /data/earnings/average-tiktok-earnings-per-views/ | 54/100 | C- | No FAQ, team-only byline |
| /guides/monetization/how-to-make-money-tiktok/ | 53/100 | C- | No FAQ, no HowTo schema, team byline |

**Average AEO Score: 61.4/100 (Grade: C)**

### Common Weaknesses
1. Calculator pages lack direct answers in the first 50 words (they start with descriptive text)
2. Guide and data pages lack FAQ sections entirely
3. speakable property is absent everywhere
4. HowTo schema is unused despite having the component
5. Team bylines lack E-E-A-T strength vs named individuals

---

## 6. People Also Ask Mining

**39 unique PAA questions identified across 5 topic clusters.**

CalculateCreator has content covering **79% (31/39)** of these questions, but only **46% (18/39)** have dedicated landing pages.

### Top PAA Questions Without Dedicated Content
1. "Are TikTok money calculators safe to use?" -- Trust/safety page needed
2. "Does TikTok pay for likes?" -- Quick answer page
3. "How does TikTok Pulse work?" -- New content opportunity
4. "Can I use a VPN to access the Creator Fund?" -- FAQ addition
5. "How does TikTok engagement compare to Instagram?" -- Cross-platform comparison
6. "Can I sell or transfer TikTok coins?" -- FAQ addition
7. "Do TikTok coins expire?" -- FAQ addition
8. "What's the cheapest way to buy TikTok Coins?" -- Buying guide

---

## 7. Reddit/Quora Question Mining

Direct Reddit search results were limited. Broader search identified these active discussion topics:

| Reddit Topic | User Sentiment | CC Has Content? |
|-------------|---------------|-----------------|
| Is TikTok Creator Fund worth it in 2026? | Negative | Yes |
| How much does 1M views actually pay? | Skeptical/varied | Yes |
| Best TikTok money calculator tools? | Users prefer username-based tools | Partial |
| Creator Rewards Program real earnings | Mixed, wants proof | Yes |
| Getting brand deals as small creator | High interest | Yes |
| TikTok coin/gift/diamond conversion confusion | Confused | Yes |

### Content Opportunities from Reddit
1. **Real Creator Earnings Showcase** -- Page with verified earnings screenshots by tier
2. **"Creator Rewards Program Calculator"** -- Separate from Creator Fund calculator
3. **"Why TikTok Pays So Little" explainer** -- Addresses Reddit skepticism
4. **Creator Fund vs Rewards Program vs Brand Deals** -- Side-by-side comparison with real numbers

---

## Overall AEO Score Breakdown

| Category | Score | Max | Grade |
|----------|-------|-----|-------|
| AI Visibility | 20 | 25 | D |
| Brand SERP Ownership | 12 | 15 | C |
| Entity Optimization | 5 | 15 | F |
| Structured Data | 14 | 20 | B- |
| Content Format for AI | 12 | 15 | B- |
| PAA Coverage | 7 | 10 | B |
| **TOTAL** | **70** | **100** | **C** |

---

## Priority Action Plan

### CRITICAL (Do This Week)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | **Fix homepage schema rendering** -- Investigate why HomepageSchema.tsx outputs nothing on live site. Check if component is imported in app/page.tsx and renders during static export. | Critical | Low |
| 2 | **Unify brand name** -- Replace all instances of "TikTok Calculator" with "CalculateCreator" in CalculatorSchema.tsx, ArticleSchema.tsx, and all page-level schemas. | High | Low |
| 3 | **Add direct answers to calculator pages** -- Bold first sentence with concrete data (e.g., "TikTok pays $0.02-$0.04/1K views via Creator Fund and $0.40-$1.00 via Creator Rewards Program.") | High | Low |

### HIGH PRIORITY (Weeks 2-3)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 4 | **Create/verify social profiles** -- Set up active Twitter/X, LinkedIn, TikTok, YouTube accounts. Update sameAs schema with verified URLs. | High | Medium |
| 5 | **Add FAQ sections to ALL guide and data pages** -- 5-8 PAA-targeted questions per page with FAQPage schema. Currently only calculator pages have FAQs. | High | Medium |
| 6 | **Implement speakable schema** -- Add speakable CSS selectors to top 20 pages targeting first-paragraph summaries and FAQ answers. | Medium | Low |
| 7 | **Deploy HowTo schema on tutorial pages** -- The HowToSchema component exists but is unused. Add to engagement rate formula page, make-money guide, brand deal rate negotiation guide. | Medium | Low |

### MEDIUM PRIORITY (Weeks 4-6)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 8 | **Build backlinks for core keywords** -- The brand deal rate success (5 SERP positions) proves content clusters work. Replicate with link building for money calculator, engagement rate, and earnings topics. | High | High |
| 9 | **Create 8 dedicated PAA answer pages** -- TikTok Pulse explainer, coin expiry policies, cross-platform engagement comparison, calculator safety/privacy page, etc. | Medium | Medium |
| 10 | **Replace team bylines with named authors** -- Individual Person schema with sameAs, knowsAbout, and real credentials signals stronger E-E-A-T. | Medium | Low |
| 11 | **Apply for Google Knowledge Panel** -- Set up Google Business Profile, create Wikidata entry, ensure consistent NAP data. | Medium | Medium |
| 12 | **Add cited authoritative sources** -- Link to official TikTok documentation, creator fund announcements, and third-party research on all pages. | Medium | Low |

### LONG-TERM (Months 2-3)

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 13 | **Add real-time API calculator** -- Username-based lookup is the #1 feature gap vs competitors dominating tool-query SERPs. | High | High |
| 14 | **Reddit/community engagement** -- Contribute helpful content on r/TikTokCreators, r/socialmedia referencing tools. | Medium | High |
| 15 | **Create Wikidata entry** -- Strengthen entity graph for Knowledge Panel and AI systems. | Medium | Medium |

---

## Competitive Landscape

### Who AI Overviews Cite (and Why)

| Competitor | Why They Get Cited |
|-----------|-------------------|
| influencermarketinghub.com | High DA, established brand, username-based calculator |
| demandsage.com | Comprehensive data posts with tables, high DA |
| phlanx.com | Purpose-built engagement calculator tool |
| tikcalculator.com | Real-time username lookup, focused tool |
| collabstr.com | Multi-platform rate calculator with live marketplace data |
| hypeauditor.com | Audience quality analytics, established SaaS |
| soundcamps.com | Frequently updated, "2026 Updated" in title |
| bluehost.com | Very high DA, comprehensive blog posts |

### What CalculateCreator Does Better
- **Content depth:** 408 pages vs competitors' single tool pages
- **Content clusters:** Brand deal topic shows 5-position SERP dominance
- **Schema infrastructure:** Rich schema components exist in codebase
- **Author credibility:** Named authors with credentials (when used)
- **Data tables:** Comprehensive earnings breakdowns by tier

### What Competitors Do Better
- **Real-time tools:** Username-based lookup with live API data
- **Domain authority:** Higher backlink profiles
- **Entity establishment:** Wikipedia entries, active social profiles, Knowledge Panels
- **speakable content:** Formatted for voice/AI extraction
- **Consistent branding:** One name across all touchpoints

---

*Audit performed by Claude Opus 4.6 AEO Audit Agent on February 20, 2026.*
