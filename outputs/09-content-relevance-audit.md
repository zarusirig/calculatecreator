# Content Relevance Audit Report — tiktokcalculator.net

**Audit date:** 2026-03-18
**Audited by:** Content Relevance Auditor (Skill 28)
**Site:** tiktokcalculator.net
**Pages sampled:** 20 pages across calculators, guides, data articles, and blog
**Diagnosis:** Site has been live ~6 months with ~180 pages + 257 MDX articles and is not ranking for target queries.

---

## Executive Summary

This audit reveals **five systemic issues** that collectively explain the site's failure to rank after six months:

1. **Massive thin-content problem:** 75 MDX articles have `wordCount: 0` in frontmatter, indicating many were generated as templates and may not have been fleshed out.
2. **Structural template uniformity:** All calculator pages follow an identical layout pattern (Hero > Cards > Widget > Inputs > Methodology > FAQ > Related), creating near-duplicate page structures that search engines may devalue.
3. **Heading hierarchy violations:** Calculator pages use H3 inside cards above H2 content sections, breaking semantic hierarchy. The RPM calculator uses a completely different design system (dark theme, raw Tailwind) from every other calculator.
4. **Stale dates scattered across content:** Multiple MDX guides display "Last updated: November 13, 2025" in body text despite frontmatter claiming 2026 publish dates. This date inconsistency signals neglect to crawlers and users.
5. **Weak distributional semantics:** Key terms are used inconsistently across the content network. "Creator Fund" is treated as active on some pages and deprecated on others. The newer Creator Fund page correctly labels it "Legacy" but dozens of guide and data pages still present it as a live program.

---

## Section-by-Section Audit

### A. Calculator Pages (6 pages audited)

#### Files audited:
- `src/app/calculators/engagement-rate/page.tsx`
- `src/app/calculators/tiktok-money/page.tsx`
- `src/app/calculators/brand-deal-rate/page.tsx`
- `src/app/calculators/coins/page.tsx`
- `src/app/calculators/rpm/page.tsx`
- `src/app/calculators/tiktok-creator-fund/page.tsx`

#### 1. Heading Accuracy

| Page | H1 | Issue |
|---|---|---|
| Engagement Rate | "TikTok Engagement Rate Calculator 2026" | Good — includes year qualifier |
| TikTok Money | "TikTok Money Calculator 2026" | Good |
| Brand Deal Rate | "TikTok Brand Deal Rate Calculator 2026" | Good |
| Coins | "TikTok Coins Calculator 2026" | Good |
| RPM | "TikTok RPM Calculator" | **Missing year qualifier** — inconsistent with other calculators |
| Creator Fund | "TikTok Creator Fund Calculator (Legacy Estimate)" | Good — unique differentiation |

**Systemic finding:** H1s are generally well-targeted. The RPM page is the outlier missing "2026."

#### 2. Typography Hierarchy

**Critical issue across all 6 calculator pages:**

The Tailwind config defines heading sizes as:
- `display-lg`: 42px (used for H1)
- `display-md`: 36px (H1 mobile)
- `heading-lg`: 24px (used for H2 inside cards)
- `heading-md`: 20px (not consistently used)

The hierarchy skips from H1 (42px) to card H3s (no size class, default) before reaching H2s (`heading-lg` at 24px). This means:

- **Industry Insights cards use `<h3>` before any `<h2>` appears on the page.** This violates HTML heading hierarchy (H1 > H3 with no H2 in between). Search engines will see broken semantic structure.
- The Engagement Rate page, for example, has three `<h3>` elements ("2026 Engagement Benchmarks," "By Follower Tier," "Brand Deal Impact") before the first `<h2>` ("What Counts as Engagement").

**RPM page uses an entirely different design system:** Dark background (`bg-gray-900`), raw Tailwind classes (`text-xl`, `text-4xl`) instead of the design token system (`text-display-lg`, `text-heading-lg`). This creates visual and structural inconsistency.

**Severity:** HIGH. Fix heading order on all calculator pages.

#### 3. Synonym Expansion

| Page | Primary Term | Synonym Variants Used | Assessment |
|---|---|---|---|
| Engagement Rate | engagement rate | engagement, interaction rate, engagement percentage | Adequate |
| TikTok Money | earnings | income, revenue, money, monetization | Good variety |
| Brand Deal Rate | brand deal | sponsorship, partnership, sponsored content, collaboration | Good |
| Coins | coins | virtual currency, TikTok coins, in-app currency | Adequate |
| RPM | RPM | Revenue Per Mille, earnings per 1000 views, CPM | Good |
| Creator Fund | Creator Fund | legacy fund, Creator Rewards, view-based payouts | Good |

**Finding:** Synonym expansion is decent on calculator pages. The bigger gap is that critical synonyms like "influencer rate card," "creator pricing," and "sponsorship calculator" are absent from the brand-deal page, which would broaden query coverage.

#### 4. Word Proximity

Calculator pages place related terms close together within card contexts, which is structurally fine. However, the hero paragraph on each page is a single dense block of 50-80 words that stuffs too many terms together without natural sentence breaks. This creates unnatural keyword proximity patterns.

**Example (Engagement Rate hero):** "Calculate your TikTok engagement rate instantly and compare against 2026 industry benchmarks. Engagement rate is the most important metric that brands evaluate for creator partnerships. Our calculator analyzes your likes, comments, shares, and follower count..."

This reads like a keyword brief, not natural prose. Search engines increasingly penalize this pattern.

#### 5. Distributional Semantics Consistency

**Critical inconsistency: Creator Fund status**

- `tiktok-creator-fund/page.tsx` correctly says: "The Creator Fund is no longer available" and labels it "Legacy Estimate"
- `tiktok-money/page.tsx` FAQ still says: "Creator Fund earnings" without the legacy qualifier in several places
- `engagement-rate/page.tsx` FAQ says: "Creator Fund" as if it's still active
- `brand-deal-rate/page.tsx` FAQ says: "Creator Fund with 50K followers earns $50 per month" — treats it as an active program
- `coins/page.tsx` — no Creator Fund mention (fine)
- `rpm/page.tsx` — references "Creator Fund RPM" throughout without any legacy/Rewards distinction

**This is a distributional semantics failure.** The same entity ("Creator Fund") appears in contradictory semantic contexts across the network. Some pages treat it as active, some as legacy. Search engines will see this inconsistency and may suppress the entire cluster.

#### 6. Content Depth

| Page | Estimated Word Count | FAQ Count | Assessment |
|---|---|---|---|
| Engagement Rate | ~2,500 | 12 | Substantive |
| TikTok Money | ~2,800 | 12 | Substantive |
| Brand Deal Rate | ~2,600 | 12 | Substantive |
| Coins | ~2,200 | 12 | Substantive |
| RPM | ~1,800 | 12 | Adequate |
| Creator Fund | ~2,000 | 6 | Adequate but lean |

Calculator pages are generally deep enough. The structural template provides a solid base. The weakness is that all pages feel formulaic — same section types, same card patterns. Differentiation in content structure would help.

#### 7. Content Freshness

- Schema `dateModified` uniformly set to "2026-03-01" or "2026-03-15" — good
- Methodology sections say "lastUpdated: January 2026" — slightly stale but acceptable
- No raw "November 2025" dates found in calculator page.tsx files — good (the problem is in MDX content, see below)

#### 8. E-E-A-T Signals

All calculator pages include:
- `PageAuthorByline` component
- `PageEEAT` component
- `CalculatorSchema` with structured data
- `FAQSchema` for FAQ structured data
- `MethodologySection` with formula, assumptions, data sources, limitations
- `BreadcrumbSchema`

**Finding:** E-E-A-T components are present but may be templated/generic. The `dataSources` arrays reference vague sources like "Published influencer marketing benchmark reports" and "Creator community earnings surveys" without specific citations (no URLs, no publication names, no dates). This is a significant E-E-A-T gap.

#### 9. Internal Linking Density

| Page | Internal Links in Body | Assessment |
|---|---|---|
| Engagement Rate | 2 (hero) + RelatedCalculators + RelatedGuides | Adequate |
| TikTok Money | 2 (hero) + Related sections | Adequate |
| Brand Deal Rate | 2 (hero) + Related sections | Adequate |
| Coins | 2 (hero) + Related sections | Adequate |
| RPM | 2 (hero) + Related sections | Adequate |
| Creator Fund | 3 (hero + body) + Related sections | Good |

**Finding:** Internal linking relies heavily on component-based "Related" sections. In-body contextual links are limited to 2-3 per page, all concentrated in the hero paragraph. The educational content cards (H2 sections) contain zero internal links. This is a missed opportunity for contextual internal linking.

#### 10. Meta Title/Description Quality

| Page | Meta Title | Issue |
|---|---|---|
| Engagement Rate | "TikTok Engagement Rate Calculator — Check Your Rate Free" | Good — includes benefit |
| TikTok Money | "TikTok Money Calculator — Estimate All Earnings 2026" | Good |
| Brand Deal Rate | "TikTok Brand Deal Rate Calculator — Price Your Sponsorships" | Good |
| Coins | "TikTok Coins Calculator — Coins to USD Converter 2026" | Good |
| RPM | "TikTok RPM Calculator — Revenue Per 1,000 Views" | Good |
| Creator Fund | "TikTok Creator Fund Calculator (Legacy Estimate)" | Good — clear intent |

Meta titles are well-crafted with action-oriented subtitles. Meta descriptions are appropriate length (140-160 chars) with target keywords.

---

### B. Guide Pages (6 articles audited)

#### Files audited:
- `content/guides/how-to-make-money-on-tiktok.mdx`
- `content/guides/tiktok-engagement-rate-calculator-guide.mdx`
- `content/guides/how-to-go-viral.mdx`
- `content/guides/monetization/micro-influencers-make-money-tiktok.mdx`
- `content/guides/growth/tiktok-algorithm-explained.mdx`
- `src/app/guides/page.tsx` and `src/app/guides/monetization/page.tsx`

#### Critical Findings

**1. 75 MDX articles have `wordCount: 0` in frontmatter**

This is the most alarming finding. Across guides, blog, and data content, 75 files declare `wordCount: 0`. While some of these (like the "How to Make Money" guide) do have substantial body content, the zero word count in metadata suggests these articles were batch-generated from templates and many may not have been reviewed for quality.

Files affected span core guides, blog posts, and early data articles.

**2. Stale "November 13, 2025" dates in body text**

Multiple MDX guides display "Updated: November 13, 2025" in their visible body text, even though frontmatter `publishDate` is "2026-02-17". This creates a trust signal mismatch. Users and crawlers see a date 4+ months old in a guide that claims to be updated for 2026.

Affected files include: `how-to-make-money-on-tiktok.mdx`, `how-to-go-viral.mdx`, and others.

**3. Heading hierarchy problems in MDX content**

- `tiktok-engagement-rate-calculator-guide.mdx` starts with `## Section 1:` (H2) with no H1 in the MDX body — relies on the page template to supply H1. Then jumps to `### Why Engagement Rate Matters` (H3), which is fine.
- `how-to-go-viral.mdx` starts with an image, then an H1 inside the body. But the title also generates an H1 via the page template. **Potential double-H1 issue.**
- `how-to-make-money-on-tiktok.mdx` has a body H1 ("# How to Make Money on TikTok: Complete 2026 Guide") that duplicates the frontmatter title.

**4. Duplicate/redundant .md and .mdx files**

The content directory contains both `.md` and `.mdx` versions of several guides (e.g., `how-to-get-brand-deals-on-tiktok.md` and `how-to-get-brand-deals.mdx`, `tiktok-live-earnings-expectations.md` and `.mdx`). This could cause routing conflicts or duplicate content.

**5. Creator Fund treated as active program**

The `how-to-make-money-on-tiktok.mdx` guide presents the Creator Fund as active with a dedicated section "## 1. TikTok Creator Fund" and tables showing current earnings. This directly contradicts the Creator Fund calculator page which states "The Creator Fund is no longer available." The guide needs to reflect the current state — Creator Rewards as the active program, Creator Fund as legacy context only.

**6. Internal linking quality in newer MDX articles**

The newer Phase 2 MDX articles (e.g., `micro-influencers-make-money-tiktok.mdx`, `tiktok-algorithm-explained.mdx`) demonstrate significantly better internal linking:
- Contextual links within paragraphs pointing to calculators and related guides
- CTA links to calculators (`[Estimate your earnings -->](/calculators/tiktok-money/)`)
- Cross-references to sibling articles in the same cluster

The older Phase 1 guides (the first batch) have sparser linking and rely more on component-based `RelatedGuides` sections.

**7. Hub/listing pages are extremely thin**

`src/app/guides/monetization/page.tsx` is just 25 lines calling `HubListingPage` with a one-line description. These hub pages have no unique content — they are purely auto-generated listings from MDX metadata. Google may treat these as doorway pages or thin aggregator pages.

---

### C. Data Articles (4 articles audited)

#### Files audited:
- `content/data/earnings/tiktok-creator-economy-size.mdx`
- `content/data/earnings/average-tiktok-earnings-per-views.mdx`
- `content/data/engagement/tiktok-likes-to-views-ratio.mdx`
- `content/data/engagement/tiktok-save-rate-benchmarks.mdx`

#### Findings

**1. Data articles are the strongest content on the site**

These articles are genuinely substantive:
- Rich data tables with specific numbers
- Multiple heading levels (H2 > H3) used correctly
- Original analysis beyond simple data presentation
- Good internal linking to calculators and sibling data articles
- Proper definitional sentences ("The average TikTok likes-to-views ratio across all content in 2026 is 3.4%...")
- Three-example rule satisfied (multiple niche examples, multiple tier examples)

**2. Data provenance is vague**

While the articles present specific numbers, source attribution is weak:
- "Our analysis of TikTok earnings per views across more than 3,000 creator accounts" — whose accounts? How collected?
- "Internal testing and creator experiments" — what testing?
- No links to external studies, platform documentation, or academic research

This is a critical E-E-A-T gap. Google's quality raters specifically look for "claims backed by evidence." The data appears authoritative but cites no verifiable sources.

**3. Heading vectors in frontmatter are well-structured**

Data articles use structured `headingVector` arrays in frontmatter:
```
- "H2: Key Findings"
- "H2: TikTok Save Rate Benchmarks — Primary Data"
- "H3: By niche"
- "H3: By follower count"
- "H2: Methodology"
```

This shows the brief-to-publish pipeline is working for data articles. The actual content follows these heading vectors closely.

**4. Calculator CTA integration is strong**

Data articles consistently link to parent calculators:
- `parentCalculator: "/calculators/engagement-rate/"` in frontmatter
- Bold CTA blocks: `**[Check your like-to-view ratio -->](/calculators/engagement-rate/)**`
- `showCalculatorCTA: true` flag for template-level CTA

This is the correct pattern — data articles feed into calculator tools, creating a natural user journey.

---

### D. Blog Articles (1 article audited)

#### File audited:
- `content/blog/charli-damelio-tiktok-earnings.mdx`

#### Findings

**1. Awkward heading vector reveals AI generation artifacts**

The frontmatter heading vector contains:
```
- "H2: Calculate Your How Charli D'Amelio Makes Money on TikTok"
```

This is a broken template pattern — "Calculate Your [Article Title]" — that was clearly auto-generated and never reviewed. The same pattern appears in other articles:
- `micro-influencers-make-money-tiktok.mdx`: "H2: Calculate Your How Micro-Influencers Under 10K Make Money on TikTok"

**2. Keyword stuffing in opening paragraph**

The Charli D'Amelio article's opening sentence: "Charli D'Amelio's estimated charli damelio earnings from TikTok..." — note the raw keyword "charli damelio earnings" jammed into the sentence unnaturally. This is a textbook over-optimization signal.

**3. Content quality is actually strong below the intro**

The body content has specific data tables, named brand partnerships, realistic income breakdowns, and good internal linking. The quality is there — but the AI-generated intro and heading structures undermine it.

---

## Cross-Site Systemic Issues

### Issue 1: Template Uniformity Creates Near-Duplicate Structures

All 30+ calculator pages follow this exact template:
1. Schema components
2. Breadcrumb
3. Hero (icon + H1 + paragraph + feature pills + internal links)
4. Author byline
5. Industry insight cards (3x H3 cards)
6. Calculator widget
7. Inputs explained
8. Educational content cards (2x2 grid of H2 cards)
9. ToolExplanationSection
10. MethodologySection
11. FAQSection
12. RelatedCalculators
13. RelatedGuides
14. PageEEAT

When Google encounters 30+ pages with identical DOM structure, identical component ordering, and similar content patterns, it may classify the entire calculator section as template-generated low-value content.

**Recommendation:** Vary page structures. Some calculators should lead with methodology. Some should have inline data tables instead of cards. Some should have long-form content sections before the widget. Break the template.

### Issue 2: Creator Fund / Creator Rewards Semantic Confusion

The site has a split personality about the Creator Fund:
- **Correct (new pages):** Creator Fund is legacy, Creator Rewards is current
- **Incorrect (old pages):** Creator Fund presented as an active program with current earnings

This inconsistency spans at least 15-20 pages and undermines distributional semantics across the entire "TikTok monetization" topic cluster.

### Issue 3: Vague Data Sources Across All Content

No page on the site links to a verifiable external source. Data sources are always described generically:
- "Published influencer marketing benchmark reports"
- "Creator community earnings surveys"
- "Industry monetization research 2026"
- "Public social media benchmark studies"

For a site that presents itself as data-driven, the absence of specific citations is a significant trust gap. E-E-A-T guidelines require that claims be verifiable.

### Issue 4: 75 Articles with `wordCount: 0`

These are likely template-generated articles that need quality review. If any of these are live with minimal content, they are actively harming the site's quality signals and generating negative historical data (high impressions + low engagement = ranking penalty 6 months later).

### Issue 5: Design Inconsistency on RPM Calculator

The RPM calculator page uses a completely different visual system (dark theme, raw Tailwind utilities) from every other calculator page (light theme, design tokens). This breaks user experience consistency and may signal to crawlers that the page belongs to a different site or was poorly maintained.

---

## Relevance vs. Responsiveness Assessment

### Relevance (Can the page be found?)

| Dimension | Score | Notes |
|---|---|---|
| Term weight and co-occurrence | 6/10 | Good keyword presence, but hero paragraphs read like keyword briefs |
| BM25 alignment | 5/10 | Template uniformity dilutes unique term frequency per page |
| Contextual term matching | 7/10 | Data articles score high; calculator pages are adequate |
| Heading-query alignment | 7/10 | H1s target queries well; internal headings are too generic |

### Responsiveness (Does it satisfy the user?)

| Dimension | Score | Notes |
|---|---|---|
| Direct answer quality | 8/10 | FAQs provide clear, extractable answers |
| Passage extraction potential | 7/10 | Bold-prefixed FAQ answers are snippet-ready |
| Query-question-answer alignment | 7/10 | Good for FAQ sections; weaker in body content |
| User task completion | 8/10 | Calculator widgets directly satisfy user intent |

**Diagnosis:** The site is more responsive than relevant. The tools and FAQ answers are genuinely useful (high responsiveness), but the pages struggle to be found (low relevance) because template uniformity, vague sourcing, and semantic inconsistencies weaken the relevance signals.

---

## Historical Data Impact Assessment

The site has been live for ~6 months. During this period, pages with these characteristics are generating negative historical data:

1. **Thin hub pages** (e.g., `/guides/monetization/`) — high impressions from appearing in sitelinks, low CTR because they offer no unique value
2. **Template-identical calculator pages** — if Google is serving any of these in search, the uniform structure may produce high bounce rates as users see "another generic calculator page"
3. **Stale-dated content** — pages showing "November 2025" updates when it's March 2026 signal neglect, reducing CTR from SERPs

These negative signals accumulate and compound over the 6-month period — which aligns exactly with the reported timeline of "not ranking for 6 months."

---

## Priority Remediation Plan

### P0 — Fix Immediately (Week 1-2)

1. **Audit all 75 `wordCount: 0` articles.** Remove, noindex, or substantially improve any that are thin. Each thin page is actively harming the domain.

2. **Fix heading hierarchy on all calculator pages.** The Industry Insights cards must use H2 or be changed to non-heading elements (strong, div, etc.). No H3 should appear before H2.

3. **Resolve Creator Fund/Creator Rewards inconsistency.** Every page that mentions the Creator Fund must acknowledge it is discontinued and reference Creator Rewards as the current program. Audit all 180+ pages for this.

4. **Update all stale dates.** Search and replace "November 13, 2025" and similar old dates in MDX body text with current dates or remove hardcoded dates.

5. **Fix the Charli D'Amelio keyword stuffing** ("estimated charli damelio earnings") and the broken heading template patterns ("Calculate Your How...") across all blog articles.

### P1 — Fix This Month (Week 2-4)

6. **Add specific data source citations.** Every Methodology section needs at least 2-3 verifiable external sources with links or publication names. Priority pages: Engagement Rate, TikTok Money, Brand Deal Rate.

7. **Standardize the RPM calculator** to use the same design system as all other calculator pages.

8. **Add contextual internal links** inside H2 educational content sections on calculator pages (currently they have zero links).

9. **Remove duplicate .md/.mdx files** in the content directory to prevent routing conflicts.

10. **Add unique content to hub pages** (/guides/, /guides/monetization/, /guides/growth/, etc.) — at minimum 200-300 words of original introductory content.

### P2 — Fix Next Sprint (Month 2)

11. **Break template uniformity.** Redesign 5-6 calculator pages with varied layouts to test whether structural differentiation improves rankings.

12. **Deepen hero paragraphs.** Rewrite hero copy on all calculator pages from keyword-brief style to natural, user-first language.

13. **Improve synonym coverage.** Add missing synonyms identified above (e.g., "influencer rate card," "creator pricing" for brand deal page).

14. **Cross-reference data articles** with calculator pages more aggressively. Data articles should cite specific calculator results; calculator pages should reference specific data findings.

---

## Quality Score Summary

| Content Section | Relevance Score | Responsiveness Score | Overall Quality |
|---|---|---|---|
| Calculator pages | 6/10 | 8/10 | 7/10 |
| Data articles | 8/10 | 8/10 | 8/10 |
| Newer MDX guides (Phase 2) | 7/10 | 7/10 | 7/10 |
| Older MDX guides (Phase 1) | 4/10 | 5/10 | 4.5/10 |
| Blog articles | 5/10 | 6/10 | 5.5/10 |
| Hub/listing pages | 2/10 | 3/10 | 2.5/10 |

**Overall site quality: 5.5/10** — The site has pockets of genuinely strong content (data articles, calculator widgets) buried under systemic template uniformity, semantic inconsistencies, thin pages, and vague sourcing that prevent Google from recognizing topical authority.

---

*Report generated by Content Relevance Auditor skill on 2026-03-18 for tiktokcalculator.net*
