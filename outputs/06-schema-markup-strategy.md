# Schema Markup Strategy Audit — tiktokcalculator.net

**Date**: 2026-03-18
**Site**: tiktokcalculator.net (TT Calculator)
**Pages**: ~180 page routes + 257 MDX articles
**Auditor**: Schema Markup Strategy Skill

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Inventory of Schema Components](#2-inventory-of-schema-components)
3. [Per-Component Audit](#3-per-component-audit)
4. [Missing Schema Types](#4-missing-schema-types)
5. [Cross-Cutting Issues](#5-cross-cutting-issues)
6. [Prioritized Recommendations](#6-prioritized-recommendations)
7. [Implementation Templates](#7-implementation-templates)

---

## 1. Executive Summary

### Current State: Solid Foundation, Significant Gaps

tiktokcalculator.net has **14 schema-related files** covering 11 schema component types. The implementation covers the basics (Organization, WebSite, Article, BreadcrumbList, FAQPage) but has several issues that reduce schema effectiveness:

| Category | Score | Notes |
|----------|-------|-------|
| **Organization/WebSite** | 6/10 | Duplicate definitions, empty `sameAs`, missing `contactPoint` details |
| **Calculator/WebApplication** | 7/10 | Good use of WebApplication; missing `SoftwareApplication` on individual pages |
| **Article/BlogPosting** | 6/10 | Missing `about`/`mentions` entity properties, missing `mainEntityOfPage` in some |
| **BreadcrumbList** | 8/10 | Consistently implemented; minor structural issues |
| **FAQPage** | 8/10 | Well-implemented; 71 pages have FAQ schema |
| **HowTo** | 0/10 | Component exists but is NEVER used on any page |
| **Entity Linking** | 2/10 | No Wikidata `sameAs` links on entity references |
| **Consistency** | 4/10 | Logo URL mismatch, hardcoded URLs, duplicate components |

### Critical Findings

1. **`ComparisonTable` is NOT a valid schema.org type** -- will produce validation errors
2. **`Table` is NOT a Google-supported type** -- no rich results benefit
3. **HowTo schema component exists but is used on ZERO pages** -- massive missed opportunity for 50+ guide pages
4. **Organization schema is defined in 3 places** with inconsistent data
5. **Logo URL mismatch**: `hub-page-schema.ts` references `/logo.png` instead of `/images/tt-calculator-logo.png`
6. **No `sameAs` array populated** on Organization schema -- no Knowledge Graph anchoring
7. **No `about`/`mentions` entity references** with Wikidata QIDs on any Article schema
8. **`FinancialProduct` type used incorrectly** for TikTok Creator Fund in InternationalCalculatorSchema

---

## 2. Inventory of Schema Components

| File | Schema Types | Used On |
|------|-------------|---------|
| `HomepageSchema.tsx` | Organization, WebSite, FAQPage, BreadcrumbList, ItemList, CollectionPage | Homepage only |
| `CalculatorSchema.tsx` | WebApplication, Article, FAQPage, BreadcrumbList, Organization, WebSite, Person, HowTo, Review, NewsArticle, CollectionPage | ~35 calculator pages |
| `ArticleSchema.tsx` | Article, BreadcrumbList | Guide/article pages |
| `BlogPostSchema.tsx` | BlogPosting, BreadcrumbList, FAQPage | Blog post pages |
| `BlogListingSchema.tsx` | Blog, BreadcrumbList | Blog listing page |
| `CollectionSchema.tsx` | CollectionPage, ItemList, BreadcrumbList | Category hub pages |
| `ComparisonSchema.tsx` | Article, BreadcrumbList, **ComparisonTable** (invalid), FAQPage | ~7 comparison pages |
| `DatasetSchema.tsx` | Dataset, BreadcrumbList | ~20 data pages |
| `InternationalCalculatorSchema.tsx` | WebApplication, WebPage, FAQPage, BreadcrumbList | 6 international calc pages |
| `ReferenceSchema.tsx` | WebPage, BreadcrumbList, **Table** (no rich results) | ~7 reference pages |
| `WebPageSchema.tsx` | WebPage, BreadcrumbList | Generic pages |
| `FAQPageSchema.tsx` | FAQPage | Various hub pages |
| `CanonicalHead.tsx` | (canonical link only) | All pages |
| `calculator-schemas.ts` | (data config, no rendered schema) | Config for 35 calculators |
| `hub-page-schema.ts` | CollectionPage, ItemList, BreadcrumbList, FAQPage, WebPage | Hub page generation |

---

## 3. Per-Component Audit

### 3.1 HomepageSchema.tsx

**Schema types**: Organization, WebSite, FAQPage, BreadcrumbList, ItemList, CollectionPage

**Issues**:

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | Organization schema missing `sameAs` array -- no social profiles or Wikidata link | Add social URLs and Wikidata QID |
| 2 | HIGH | Organization schema missing `founder`, `foundingDate` | Add for Knowledge Graph |
| 3 | MEDIUM | BreadcrumbList on homepage is a single-item list (Home only) -- not useful, possibly confusing | Remove BreadcrumbList from homepage |
| 4 | LOW | WebSite `name` is too long; should be just "TT Calculator" | Shorten to brand name |
| 5 | MEDIUM | `CollectionPage` and `ItemList` schemas are separate but should be linked via `@id` references -- currently working correctly | OK |
| 6 | LOW | FAQPage on homepage has 6 questions -- good count, well-structured | OK |

**Good**: Proper use of `@id` for cross-referencing between ItemList and CollectionPage. WebApplication type for calculators in ItemList is correct. Free pricing offer is correctly specified.

### 3.2 CalculatorSchema.tsx (Multi-schema component file)

This file contains **9 schema components**. It serves as the main schema library.

#### CalculatorSchema (WebApplication)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | Uses `WebApplication` instead of `SoftwareApplication` -- Google recommends `SoftwareApplication` for rich results | Change `@type` to `SoftwareApplication` or use both `["SoftwareApplication", "WebApplication"]` |
| 2 | MEDIUM | Missing `aggregateRating` -- calculators could benefit from rating schema | Add if user ratings are collected |
| 3 | LOW | `browserRequirements` value is fine but non-standard text | OK, informational |
| 4 | MEDIUM | Missing `screenshot` property for visual preview | Add screenshot URLs |

#### ArticleSchema (in CalculatorSchema.tsx)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | Missing `mainEntityOfPage` property | Add `mainEntityOfPage: { "@type": "WebPage", "@id": url }` |
| 2 | HIGH | Missing `about` property -- no entity linking | Add `about` with Thing entities + Wikidata sameAs |
| 3 | HIGH | Missing `mentions` property | Add secondary entity references |
| 4 | MEDIUM | `publisher` missing `url` property | Add `url` to publisher Organization |
| 5 | LOW | Missing `articleSection` property | Add for content categorization |

#### OrganizationSchema (standalone in CalculatorSchema.tsx)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | **Duplicate** of HomepageSchema Organization -- conflicting descriptions | Remove this duplicate; use only HomepageSchema version |
| 2 | HIGH | Empty `sameAs` array | Populate with social profiles |
| 3 | MEDIUM | `contactPoint` missing `email`, `telephone`, or `url` | Add at least an email or contact page URL |

#### WebSiteSchema (standalone in CalculatorSchema.tsx)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | **Duplicate** of HomepageSchema WebSite -- different descriptions | Remove this duplicate |
| 2 | MEDIUM | `potentialAction.target` is a plain string, not EntryPoint object | Use `{ "@type": "EntryPoint", "urlTemplate": ... }` format (HomepageSchema does this correctly) |
| 3 | MEDIUM | Missing `publisher` reference | Add publisher Organization |

#### HowToSchema

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | CRITICAL | **Component exists but is NEVER used** on any page | Deploy on 50+ "how-to" guide pages |
| 2 | MEDIUM | `tool` and `supply` arrays use plain strings instead of `HowToTool`/`HowToSupply` objects | Wrap in proper schema types |

#### PersonSchema

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | LOW | Well-structured with optional `sameAs`, `knowsAbout`, `affiliation` | Good |
| 2 | MEDIUM | Missing `image` property for author photos | Add if author images exist |

#### ReviewSchema

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | MEDIUM | Uses `Rating` instead of `AggregateRating` for review ratings -- correct for single review but verify usage | OK if used for individual reviews |
| 2 | LOW | `ratingValue` converted to string -- should remain numeric | Keep as number |

#### NewsArticleSchema

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | MEDIUM | Missing `mainEntityOfPage` property | Add |
| 2 | LOW | Does not support `personAuthor` like Article/Calculator schemas | Add personAuthor support |

### 3.3 ArticleSchema.tsx (standalone)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | **Separate file** from CalculatorSchema.tsx ArticleSchema -- potential import confusion | Consolidate or rename to avoid ambiguity |
| 2 | MEDIUM | Breadcrumb uses `url.substring(0, url.lastIndexOf('/'))` for parent -- fragile string manipulation | Pass category URL explicitly as prop |
| 3 | LOW | Default dates are `2026-03-01T00:00:00Z` -- OK if overridden per page | Verify all pages pass real dates |
| 4 | MEDIUM | Missing `about`/`mentions` entity properties | Add entity linking |
| 5 | LOW | `publisher` missing `url` property | Add |

### 3.4 BlogPostSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | LOW | Uses `BlogPosting` type -- correct | Good |
| 2 | MEDIUM | `timeRequired` uses "7 min" string -- should be ISO 8601 duration like `PT7M` | Convert to ISO format |
| 3 | LOW | Supports `wordCount` and `articleSection` -- good | Good |
| 4 | MEDIUM | Missing `about`/`mentions` entity properties | Add entity linking |
| 5 | LOW | `image` property passed as plain string, not ImageObject | Wrap in ImageObject for consistency |

### 3.5 BlogListingSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | **Hardcoded single blog post** in `blogPost` array -- only lists "Creator Fund vs LIVE Gifts" | Dynamically generate from actual blog content |
| 2 | MEDIUM | `Blog` schema has `publisher` but not `author` | Add author/organization reference |
| 3 | LOW | Breadcrumb correctly terminates at Blog level | Good |

### 3.6 CollectionSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | MEDIUM | Uses `SoftwareApplication` for calculator items in ItemList -- inconsistent with `WebApplication` used elsewhere | Standardize to one type across all files |
| 2 | LOW | Supports dynamic items with proper `about` object | Good |
| 3 | LOW | Correctly links to `#website` via `isPartOf` | Good |

### 3.7 ComparisonSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | **CRITICAL** | `ComparisonTable` is **NOT a valid schema.org type** | Remove entirely; comparison data is already in Article `about` array |
| 2 | LOW | Article schema has good `about` array with both comparison subjects | Good |
| 3 | MEDIUM | `keywords` array is hardcoded with generic terms | Make dynamic based on actual subjects |
| 4 | LOW | FAQPage conditional rendering is correct | Good |

### 3.8 DatasetSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | LOW | Correct `Dataset` type with `creator`, `license`, `isAccessibleForFree` | Good |
| 2 | MEDIUM | Default `datePublished` is `2024-01-15` -- may not be accurate for all datasets | Ensure each page passes actual date |
| 3 | MEDIUM | Missing `variableMeasured` property -- recommended for Dataset | Add measurement descriptions |
| 4 | LOW | `distribution` support exists but appears rarely used | Populate when data downloads exist |

### 3.9 InternationalCalculatorSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | HIGH | Uses `FinancialProduct` type for TikTok Creator Fund RPM data -- **incorrect type** | Use `MonetaryAmount` or plain `Thing` with description |
| 2 | LOW | Good `availableLanguage` array with all supported locales | Good |
| 3 | LOW | `featureList` property is helpful for search engines | Good |
| 4 | MEDIUM | Breadcrumb references `/region/` as parent -- verify this matches actual IA for calculator pages at `/calculator/de/` etc. | Check URL structure matches |
| 5 | MEDIUM | `inLanguage` on FAQPage is non-standard but harmless | OK |

### 3.10 ReferenceSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | MEDIUM | Uses `Table` schema type -- **not a Google-supported rich result type** | Consider replacing with `Dataset` for data-heavy reference pages |
| 2 | LOW | Good `@id` cross-referencing between WebPage and BreadcrumbList | Good |
| 3 | LOW | `mainEntityOfPage` self-references correctly | Good |

### 3.11 WebPageSchema.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | LOW | Clean, minimal WebPage schema | Good |
| 2 | LOW | Dynamic breadcrumb generation from props | Good |
| 3 | MEDIUM | Missing `datePublished`/`dateModified` | Add date properties |

### 3.12 CanonicalHead.tsx

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | LOW | Correctly generates trailing-slash canonical URLs | Good |
| 2 | MEDIUM | Uses `'use client'` directive -- canonical should ideally be server-rendered | Move to server component or use metadata API |

### 3.13 calculator-schemas.ts (Config)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | LOW | Good centralized config for 35 calculators | Good |
| 2 | MEDIUM | Only 1 of 35 calculators has `author`/`reviewedBy` assigned | Assign authors to all calculators |
| 3 | LOW | Keywords properly defined per calculator | Good |

### 3.14 hub-page-schema.ts

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 1 | **CRITICAL** | Logo URL is `https://tiktokcalculator.net/logo.png` -- **wrong path**, should be `/images/tt-calculator-logo.png` | Fix URL |
| 2 | MEDIUM | Generates both `CollectionPage` AND `WebPage` for same URL -- redundant, may confuse Google | Remove WebPage when CollectionPage is used |
| 3 | LOW | 10 hub page configs with detailed FAQs -- well done | Good |
| 4 | MEDIUM | `breadcrumbSchema` splits title on `:` for name -- fragile logic | Pass breadcrumb name explicitly |

---

## 4. Missing Schema Types

### 4.1 HowTo Schema (CRITICAL -- high-impact opportunity)

**Status**: Component exists at `CalculatorSchema.tsx` line 328-390 but is **never imported or used**.

**Candidate pages** (50+ pages):

| Category | Example Pages | Est. Count |
|----------|--------------|------------|
| "How to" guides | how-to-make-money-on-tiktok, how-to-get-brand-deals, how-to-go-viral | 15+ |
| Step-by-step guides | how-to-join-creator-fund, how-to-become-shop-affiliate | 10+ |
| Growth guides | get-on-fyp-consistently, tiktok-shadowban-fix | 10+ |
| Monetization guides | first-1000-dollars-tiktok, diversify-tiktok-income-streams | 10+ |
| Business guides | llc-for-tiktok-creators, tiktok-creator-taxes-guide | 5+ |

**Impact**: HowTo schema can generate step-by-step rich results in Google Search, significantly increasing CTR.

### 4.2 SoftwareApplication Schema for Individual Calculators

**Status**: `WebApplication` is used; `SoftwareApplication` would trigger Google's Software App rich results.

**Recommendation**: Use `@type: ["SoftwareApplication", "WebApplication"]` for maximum coverage.

### 4.3 VideoObject Schema

**Status**: Not implemented anywhere.

**Need**: If any pages embed YouTube or TikTok videos, VideoObject schema should be added.

### 4.4 Review/AggregateRating Schema on Calculators

**Status**: ReviewSchema component exists but appears unused.

**Recommendation**: If calculators collect user feedback or ratings, add AggregateRating to SoftwareApplication schema.

### 4.5 DefinedTerm / DefinedTermSet for Glossary

**Status**: `/glossary/` page exists but no specific schema.

**Recommendation**: Add `DefinedTermSet` with `DefinedTerm` items for each glossary entry.

### 4.6 speakable Property

**Status**: Not implemented.

**Recommendation**: Add `speakable` property to Article/BlogPosting schemas for voice search optimization, especially on FAQ-heavy pages.

---

## 5. Cross-Cutting Issues

### 5.1 Duplicate Schema Definitions

Three files define Organization schema with different values:

| File | Description Text |
|------|-----------------|
| `HomepageSchema.tsx` | "Free TikTok calculator for creators..." |
| `CalculatorSchema.tsx` (OrganizationSchema) | "Free TikTok calculators for creators to estimate earnings..." |
| `CalculatorSchema.tsx` (ArticleSchema publisher) | Only name + logo, no description |

**Fix**: Use `SITE_CONFIG.org` from `site-config.ts` everywhere. Remove standalone OrganizationSchema and WebSiteSchema from CalculatorSchema.tsx.

### 5.2 Logo URL Inconsistency

| File | Logo URL |
|------|----------|
| Most files | `https://tiktokcalculator.net/images/tt-calculator-logo.png` |
| `hub-page-schema.ts` line 61 | `https://tiktokcalculator.net/logo.png` (WRONG) |
| `site-config.ts` | `https://tiktokcalculator.net/images/tt-calculator-logo.png` (correct) |

**Fix**: Always use `SITE_CONFIG.logoUrl` or `SITE_CONFIG.org.logo.url`.

### 5.3 Hardcoded URLs vs. SITE_CONFIG

Many schema files hardcode `https://tiktokcalculator.net/` instead of using `SITE_CONFIG.url` or `siteUrl()`:
- `ArticleSchema.tsx` (standalone)
- `BlogPostSchema.tsx`
- `BlogListingSchema.tsx`
- `CollectionSchema.tsx`
- `ComparisonSchema.tsx`
- `DatasetSchema.tsx`
- `InternationalCalculatorSchema.tsx`
- `ReferenceSchema.tsx`
- `WebPageSchema.tsx`
- `hub-page-schema.ts`

**Fix**: Import and use `SITE_CONFIG` in all schema files for maintainability.

### 5.4 Missing Entity Linking (Wikidata sameAs)

**No schema component** includes Wikidata QIDs for entities. This is the single biggest semantic SEO gap.

Key entities that should have `sameAs` links:

| Entity | Wikidata QID | Where to Use |
|--------|-------------|--------------|
| TikTok | Q48938858 | Organization `sameAs`, Article `about` |
| TikTok Creator Fund | (no QID yet) | Article `about` on creator fund pages |
| Content Creator | Q107356887 | Article `about` on guide pages |
| Social Media Marketing | Q3220391 | Article `about` on brand deal pages |
| Engagement Rate | (no QID) | Calculator `about` descriptions |
| RPM (Revenue Per Mille) | Q7387726 | RPM calculator `about` |

**Fix**: Add `about` and `mentions` arrays to all Article schemas, referencing entities with `sameAs` Wikidata URIs.

### 5.5 Type Inconsistency for Calculator Items

| File | Type Used in ItemList |
|------|--------------------|
| `HomepageSchema.tsx` | `WebApplication` |
| `CollectionSchema.tsx` | `SoftwareApplication` |
| `hub-page-schema.ts` | `SoftwareApplication` |
| `CalculatorSchema.tsx` (CollectionPageSchema) | `WebApplication` |

**Fix**: Standardize to `SoftwareApplication` everywhere (Google's recommended type for rich results).

---

## 6. Prioritized Recommendations

### P0 -- Critical (Fix Immediately)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | Remove `ComparisonTable` schema (invalid type) | Prevents validation errors | 10 min |
| 2 | Fix logo URL in `hub-page-schema.ts` (`/logo.png` -> `/images/tt-calculator-logo.png`) | Fixes broken logo reference | 5 min |
| 3 | Fix `FinancialProduct` misuse in `InternationalCalculatorSchema.tsx` | Prevents misleading schema | 15 min |

### P1 -- High Priority (This Sprint)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 4 | Deploy HowTo schema on 50+ guide pages | Unlocks HowTo rich results | 4-6 hours |
| 5 | Add `about`/`mentions` with Wikidata sameAs to all Article schemas | Major entity linking improvement | 2-3 hours |
| 6 | Populate Organization `sameAs` with social profiles | Knowledge Graph anchoring | 30 min |
| 7 | Consolidate duplicate Organization/WebSite schemas | Reduce conflicting signals | 1 hour |
| 8 | Standardize calculator type to `SoftwareApplication` | Consistent rich result eligibility | 1 hour |

### P2 -- Medium Priority (Next Sprint)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 9 | Replace hardcoded URLs with `SITE_CONFIG` references in all schema files | Maintainability | 2 hours |
| 10 | Fix `BlogListingSchema` hardcoded single blog post | Accurate blog listing | 1 hour |
| 11 | Fix `timeRequired` ISO 8601 format in BlogPostSchema | Schema validity | 15 min |
| 12 | Add `mainEntityOfPage` to all Article schemas missing it | Google recommended property | 30 min |
| 13 | Assign authors to all 35 calculators in `calculator-schemas.ts` | E-E-A-T signals | 1 hour |
| 14 | Add `DefinedTermSet` schema to glossary page | Glossary rich results | 1 hour |

### P3 -- Low Priority (Backlog)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 15 | Add `speakable` to key Article schemas | Voice search | 1 hour |
| 16 | Add `VideoObject` schema if videos are embedded | Video rich results | 1 hour |
| 17 | Add `screenshot` to calculator SoftwareApplication schemas | Richer app previews | 2 hours |
| 18 | Remove single-item BreadcrumbList from homepage | Cleaner schema | 5 min |
| 19 | Add `variableMeasured` to Dataset schemas | Better dataset discovery | 1 hour |
| 20 | Move CanonicalHead to server component or Next.js metadata API | Performance | 30 min |

---

## 7. Implementation Templates

### 7.1 Fixed Organization Schema (Single Source of Truth)

```typescript
// In HomepageSchema.tsx -- THE ONLY place Organization is defined
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: siteUrl('/'),
  logo: {
    '@type': 'ImageObject',
    url: SITE_CONFIG.logoUrl,
    width: 512,
    height: 512,
  },
  description: SITE_CONFIG.description,
  sameAs: [
    // Add when available:
    // 'https://twitter.com/ttcalculator',
    // 'https://www.youtube.com/@ttcalculator',
    // 'https://www.linkedin.com/company/tt-calculator',
  ],
  // foundingDate: '2024-01-01',
  // founder: { '@type': 'Person', name: '...' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    url: siteUrl('/contact'),
    availableLanguage: ['English', 'German', 'Spanish', 'French', 'Italian', 'Portuguese'],
  },
};
```

### 7.2 Article Schema with Entity Linking

```typescript
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author: { /* Person or Organization */ },
  publisher: SITE_CONFIG.org,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
  about: [
    {
      '@type': 'Thing',
      name: 'TikTok',
      sameAs: 'https://www.wikidata.org/wiki/Q48938858',
    },
    {
      '@type': 'Thing',
      name: 'Creator Economy',
      sameAs: 'https://www.wikidata.org/wiki/Q107356887',
    },
  ],
  mentions: [
    {
      '@type': 'Thing',
      name: 'Engagement Rate',
      description: 'The percentage of an audience that interacts with content',
    },
  ],
  inLanguage: 'en-US',
  articleSection: category,
};
```

### 7.3 SoftwareApplication for Calculators

```typescript
const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',  // Changed from WebApplication
  name,
  description,
  url,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: SITE_CONFIG.org,
  datePublished,
  dateModified,
  isAccessibleForFree: true,
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  about: {
    '@type': 'Thing',
    name: 'TikTok',
    sameAs: 'https://www.wikidata.org/wiki/Q48938858',
  },
};
```

### 7.4 HowTo Schema Deployment Example

```typescript
// For: /guides/how-to-make-money-on-tiktok/
<HowToSchema
  name="How to Make Money on TikTok"
  description="Step-by-step guide to monetizing your TikTok presence through Creator Fund, brand deals, LIVE gifts, and TikTok Shop."
  totalTime="PT30M"
  steps={[
    {
      name: "Meet Monetization Requirements",
      text: "Reach 10,000 followers and 100,000 views in the last 30 days to qualify for Creator Fund. Verify your account and confirm you are 18+.",
    },
    {
      name: "Apply to Creator Fund / Creator Rewards",
      text: "Open TikTok > Settings > Creator Tools > Creator Fund. Submit your application and wait 2-3 business days for approval.",
    },
    {
      name: "Optimize Content for RPM",
      text: "Create longer-form content (60+ seconds) in high-RPM niches like finance, tech, or education to maximize per-view earnings.",
    },
    {
      name: "Pitch Brand Deals",
      text: "Build a media kit with your engagement rate, audience demographics, and content samples. Reach out to brands in your niche or join the TikTok Creator Marketplace.",
    },
    {
      name: "Enable LIVE Gifts",
      text: "Go live once you have 1,000+ followers. Engage with your audience to encourage virtual gifts that convert to diamonds and then cash.",
    },
  ]}
/>
```

### 7.5 Fixed ComparisonSchema (without invalid ComparisonTable)

```typescript
export function ComparisonSchema({ title, description, url, datePublished, dateModified, subjectA, subjectB, faqs, readTime }: ComparisonSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: SITE_CONFIG.org,
    publisher: SITE_CONFIG.org,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: 'Platform Comparisons',
    about: [
      {
        '@type': 'Thing',
        name: subjectA,
        description: `Analysis of ${subjectA} for content creators`,
      },
      {
        '@type': 'Thing',
        name: subjectB,
        description: `Analysis of ${subjectB} for content creators`,
      },
    ],
    timeRequired: readTime ? `PT${parseInt(readTime)}M` : undefined,
  };

  // NO ComparisonTable schema -- it's not a valid type
  // The Article about[] array already captures the comparison subjects

  // ... breadcrumb and FAQ as before
}
```

### 7.6 DefinedTermSet for Glossary Page

```typescript
const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'TikTok Creator Glossary',
  description: 'Definitions of key terms used in TikTok content creation and monetization.',
  url: siteUrl('/glossary'),
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'RPM',
      description: 'Revenue Per Mille -- earnings per 1,000 video views on TikTok.',
      inDefinedTermSet: siteUrl('/glossary'),
    },
    {
      '@type': 'DefinedTerm',
      name: 'Creator Fund',
      description: 'TikTok program that pays eligible creators based on video views and engagement.',
      inDefinedTermSet: siteUrl('/glossary'),
    },
    // ... more terms
  ],
};
```

---

## Appendix: Schema Type Coverage Matrix

| Page Type | Org | WebSite | Article | Breadcrumb | FAQ | HowTo | SoftwareApp | Dataset | WebPage | Collection |
|-----------|-----|---------|---------|------------|-----|-------|-------------|---------|---------|------------|
| Homepage | YES | YES | - | YES* | YES | - | - | - | - | YES |
| Calculator | - | - | - | YES | YES | - | YES** | - | - | - |
| Guide | - | - | YES | YES | some | **NO*** | - | - | - | - |
| Blog post | - | - | YES | YES | YES | - | - | - | - | - |
| Blog listing | - | - | - | YES | - | - | - | - | - | - |
| Comparison | - | - | YES | YES | YES | - | - | - | - | - |
| Data page | - | - | - | YES | - | - | - | YES | - | - |
| Reference | - | - | - | YES | - | - | - | - | YES | - |
| Hub page | - | - | - | YES | YES | - | - | - | YES | YES |
| Intl calc | - | - | - | YES | YES | - | YES | - | YES | - |
| News | - | - | YES | YES | - | - | - | - | - | - |
| Glossary | - | - | - | - | - | - | - | - | - | - |

\* Single-item breadcrumb (should be removed)
\** Uses WebApplication, should be SoftwareApplication
\*** HowTo component exists but is never deployed

---

**End of Schema Markup Strategy Audit**

Next steps: Implement P0 fixes immediately, then work through P1 items to unlock HowTo rich results and entity linking. The HowTo deployment alone could impact CTR on 50+ guide pages.
