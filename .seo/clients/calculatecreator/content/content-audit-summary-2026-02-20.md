# Content Optimization Audit: CalculateCreator.com

**Audit Date:** February 20, 2026
**Total Pages in Sitemap:** 408
**Pages Audited:** 13 key pages
**Overall Content Score:** 68/100

---

## Executive Summary

CalculateCreator.com has a strong topical foundation with 408 pages of TikTok creator content, excellent internal linking architecture, and solid content depth on core calculator pages. However, several **critical technical SEO issues** are suppressing potential rankings:

1. **A broken title tag normalization function** is creating spammy, keyword-stuffed titles across 100+ MDX articles
2. **The highest-traffic calculator page has a "TikTok Tiktok" duplication** in its title and description
3. **All calculator pages are missing images** and most lack OG/Twitter social meta tags
4. **Template-generated meta descriptions** create repetitive, truncated patterns across articles

These are high-impact, low-effort fixes that should be addressed immediately.

---

## Page Scores Summary

| # | Page | Type | Score | Grade |
|---|------|------|-------|-------|
| 1 | Homepage (`/`) | Homepage | 72/100 | C+ |
| 2 | `/calculators/tiktok-money/` | Calculator | 62/100 | D+ |
| 3 | `/calculators/engagement-rate/` | Calculator | 64/100 | D+ |
| 4 | `/calculators/coins/` | Calculator | 65/100 | D+ |
| 5 | `/calculators/earnings-revenue/` | Hub | 67/100 | C- |
| 6 | `/calculators/brand-deal-rate/` | Calculator | 66/100 | D+ |
| 7 | `/guides/monetization/how-to-make-money-tiktok/` | Guide | **79/100** | B |
| 8 | `/guides/growth/tiktok-algorithm-explained/` | Guide | **80/100** | B |
| 9 | `/guides/growth/best-posting-times-tiktok/` | Guide | 58/100 | D |
| 10 | `/blog/best-tiktok-niches-money-2026/` | Blog | 64/100 | D+ |
| 11 | `/blog/charli-damelio-tiktok-earnings/` | Blog | 72/100 | C+ |
| 12 | `/data/earnings/average-tiktok-earnings-per-views/` | Data | 61/100 | D+ |
| 13 | `/data/platform-comparisons/tiktok-vs-youtube-shorts-2026/` | Data | **73/100** | C+ |

**Average Score:** 68/100
**Highest Scorer:** TikTok Algorithm Explained (80/100)
**Lowest Scorer:** Best Posting Times for TikTok (58/100)

---

## Critical Issues (Fix Immediately)

### 1. Spammy Title Tags from `normalizeSeoTitle()` Function

**File:** `src/lib/content/article-page.tsx`, line 30
**Impact:** 100+ MDX article pages
**Severity:** CRITICAL

The `normalizeSeoTitle()` function prepends the `primaryKeyword` in lowercase when it doesn't appear verbatim in the title. This produces SERP titles like:

```
best time to post tiktok - Best Posting Times for TikTok by...
best tiktok niches 2026 - Best TikTok Niches for Making...
tiktok earnings per views - Average TikTok Earnings Per 1K...
```

These look like keyword-stuffed spam to both Google and users. The lowercase keyword before the dash appears unprofessional and may trigger spam classifiers.

**Fix:** Rewrite the function to either:
- Use the title as-is when it naturally covers the topic
- Append the keyword at the end with a pipe separator if absolutely needed
- Never prepend raw lowercase keywords before a dash

### 2. "TikTok Tiktok" Duplication on Money Calculator

**Page:** `/calculators/tiktok-money/page.tsx`, line 17
**Impact:** Likely the highest-traffic calculator page
**Severity:** CRITICAL

The title tag reads: `"TikTok Tiktok Money Calculator and Earnings Tool Guide"`
The meta description starts: `"Use this TikTok tiktok money calculator..."`

This is a copy-paste error with mixed casing. It appears in Google SERPs as a clear keyword stuffing attempt.

**Fix:** Change to: `"TikTok Money Calculator 2026 -- Estimate Your Creator Earnings"`

### 3. Missing Social Meta Tags on Calculator Pages

**Pages:** All 5 calculator pages audited
**Severity:** HIGH

Calculator pages (`tiktok-money`, `engagement-rate`, `coins`, `earnings-revenue`, `brand-deal-rate`) are missing OG and Twitter card meta tags. When shared on social media, they show no preview image or description.

**Fix:** Add `openGraph` and `twitter` properties to each calculator page's metadata export, following the pattern already used in MDX article-page.tsx.

### 4. Zero Images on ALL Calculator Pages

**Pages:** All calculator pages site-wide (estimated 40+)
**Severity:** HIGH

Not a single calculator page has an `<img>` tag. No screenshots, charts, infographics, or visual aids. Only inline SVG icons. This means:
- Zero image search traffic
- No visual engagement for users
- No preview images for social sharing
- Missing opportunities for featured snippets with images

**Fix:** Create at least one chart or screenshot image per calculator page with proper alt text, width/height dimensions, and `loading="lazy"`.

---

## High-Priority Issues

### 5. Template Meta Descriptions from `normalizeSeoDescription()`

The `normalizeSeoDescription()` function (line 56 of article-page.tsx) creates repetitive patterns:
- Prepends keyword followed by title repetition
- Appends "Includes benchmarks, monetization" filler when under 130 chars
- "benchmarks" often appears twice
- Truncated endings common

**Fix:** Require explicit, unique `metaDescription` in each MDX frontmatter and use it as-is, only falling back to the normalizer if missing.

### 6. Double-Slash Bug in CTA Links

Multiple articles contain links like `/calculators/tiktok-money//` and `/calculators/posting-time//` (note double trailing slash). This likely comes from URL concatenation in the CTA component.

**Fix:** Add trailing-slash normalization in the CTA link template.

### 7. Generic "and Earnings Tool" Suffix in Calculator Titles

Four calculator pages append "and Earnings Tool" or "and Earnings Tool Guide" regardless of the calculator's actual function. The engagement rate calculator says "Earnings Tool" even though it calculates engagement.

**Fix:** Remove generic suffix or replace with tool-specific descriptors.

---

## Content Depth Issues

| Page | Current Words | Recommended | Gap |
|------|--------------|-------------|-----|
| Best Posting Times for TikTok | ~1,900 | 3,500+ | 1,600 words |
| Charli D'Amelio Earnings | ~1,600 | 2,500+ | 900 words |
| Average TikTok Earnings Per Views | ~1,900 | 3,000+ | 1,100 words |
| Best TikTok Niches 2026 | ~2,500 | 3,500+ | 1,000 words |
| TikTok vs YouTube Shorts | ~1,900 | 2,500+ | 600 words |

These pages are competing for high-value keywords where competitors publish 3,000-5,000 word articles.

---

## SERP Previews (Top 5 Pages)

### Homepage
```
TikTok Creator Calculators -- Earnings, Engagement & Growth ...
calculatecreator.com
Free TikTok creator calculators for earnings estimates, engagement
benchmarks, and growth projections. Transparent assumptions, expert-reviewed ...
```
Issues: Title truncates (82 chars), description truncates (167 chars)

### TikTok Money Calculator
```
TikTok Tiktok Money Calculator and Earnings Tool Guide
calculatecreator.com > calculators > tiktok-money
Use this TikTok tiktok money calculator to estimate earnings, engagement,
and monetization outcomes with practical creator benchmarks and actionable ...
```
Issues: "TikTok Tiktok" duplication looks like spam

### Engagement Rate Calculator
```
TikTok Engagement Rate Calculator and Earnings Tool
calculatecreator.com > calculators > engagement-rate
Use this TikTok engagement rate calculator to estimate earnings, engagement,
and monetization outcomes with practical creator benchmarks ...
```
Issues: "Earnings Tool" misleading, template description

### How to Make Money on TikTok (BEST)
```
How to Make Money on TikTok -- Complete 2026 Guide
calculatecreator.com > guides > monetization > how-to-make-money-tiktok
Learn every way to make money on TikTok in 2026. From Creator Rewards to
brand deals, live gifts, TikTok Shop, and affiliate marketing -- with real ...
```
Issues: Best preview -- clear, compelling, keyword-rich

### TikTok Algorithm Explained
```
TikTok Algorithm Explained -- How It Decides What Goes Viral
calculatecreator.com > guides > growth > tiktok-algorithm-explained
tiktok algorithm explained: Understand exactly how the TikTok algorithm
works in 2026. Learn the ranking signals, distribution phases, and ...
```
Issues: Description starts with lowercase keyword

---

## E-E-A-T Analysis

### Experience: WEAK
- No first-hand creator experience documented
- Team described as analysts/researchers, not active creators
- No creator testimonials or real earnings screenshots
- Author personas may not be verifiable real individuals

### Expertise: MODERATE
- Author bylines present (Sarah Johnson, Michael Chen, Emily Thompson CPA)
- Published methodology and editorial policy
- Transparent calculator formulas and assumptions
- Missing: individual author pages with credentials, external profile links

### Authoritativeness: WEAK
- No press mentions, media citations, or industry awards
- No user reviews or testimonials
- No social proof metrics (e.g., "100K calculations performed")
- No partnerships with industry bodies

### Trustworthiness: STRONG
- HTTPS across all pages
- Privacy policy, Terms of Service, Contact page all present (200 status)
- Editorial policy with correction procedures
- Advertising and sponsorship disclosure pages
- Financial and tax disclaimers on calculator pages
- Clear independence statement (not affiliated with TikTok/ByteDance)

---

## Content Decay Detection

### Outdated URLs
| URL | Issue | Severity |
|-----|-------|----------|
| `/guides/content-strategy-2025/` | URL contains "2025", internal content has mixed 2025/2026 references | HIGH |
| `/news/tiktok-ban-delayed-december-2025/` | Frames December 2025 as future event; now passed | HIGH |

### Missing Update Dates
All calculator pages (`/calculators/tiktok-money/`, `/calculators/engagement-rate/`, `/calculators/coins/`, `/calculators/brand-deal-rate/`, `/calculators/earnings-revenue/`) show no visible "last updated" date to users.

### Thin Content at Risk
- `/blog/charli-damelio-tiktok-earnings/` -- 1,600 words (needs 2,500+)
- `/guides/growth/best-posting-times-tiktok/` -- 1,900 words (needs 3,500+)
- `/data/earnings/average-tiktok-earnings-per-views/` -- 1,900 words (needs 3,000+)

---

## Priority Fixes Ranked by Impact

| # | Fix | Impact | Effort | Pages |
|---|-----|--------|--------|-------|
| 1 | Fix `normalizeSeoTitle()` keyword prepending | Critical | Low | 100+ |
| 2 | Fix "TikTok Tiktok" duplication in money calc | Critical | Low | 1 |
| 3 | Add OG/Twitter meta to calculator pages | High | Medium | 5+ |
| 4 | Fix `normalizeSeoDescription()` templates | High | Low | 100+ |
| 5 | Add images to calculator pages | High | High | 40+ |
| 6 | Fix double-slash CTA link bug | Medium | Low | 20+ |
| 7 | Expand thin content (3 pages) | Medium | Medium | 3 |
| 8 | Update/archive stale 2025 content | Medium | Low | 2 |
| 9 | Add visible "Last updated" dates | Medium | Low | 40+ |
| 10 | Strengthen E-E-A-T (author pages, testimonials) | Medium | High | Site-wide |

---

## What's Working Well

- **Internal linking architecture:** Excellent cross-linking with 30-58 internal links per page
- **URL structure:** Clean, hierarchical, keyword-rich URLs with consistent trailing slashes
- **Content organization:** Clear category taxonomy (calculators, guides, data, blog, news, comparisons)
- **Heading hierarchy:** Proper H1>H2>H3 nesting on most pages
- **Trust pages:** Full complement of privacy, terms, editorial policy, methodology pages
- **Structured data:** Calculator schema, FAQ schema, breadcrumb schema present
- **Deep content on key pages:** Money calculator (3,800w), brand deal calculator (4,000w), monetization guide (4,000w)

---

## Methodology

This audit used WebFetch to analyze live page content, source code review of `src/app/` and `content/` directories, HTTP status checks via curl, and pattern analysis of the sitemap (408 URLs). Scoring follows a 100-point rubric covering title tag (15), meta description (10), H1 (10), heading hierarchy (10), content depth (15), keyword usage (10), internal links (10), image optimization (10), URL structure (5), and social meta (5).

---

*Generated by Claude Code on February 20, 2026*
