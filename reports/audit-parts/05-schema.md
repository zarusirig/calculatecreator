# Structured Data / Schema Markup Audit (Dimension D)

**Site:** tiktokcalculator.net (Next.js 14 static export)
**Method:** Bulk-extracted `<script type="application/ld+json">` from all 354 built HTML files in `out/`, parsed each block with `JSON.parse`, aggregated top-level `@type` per page, and validated required/recommended properties against Google/schema.org guidance. Because the site is a static export, the JSON-LD in `out/*.html` is byte-identical to what static hosting serves (no client-side JS injection), so `out/` is the authoritative served artifact.
**Corpus:** 354 HTML pages, 1,117 schema entities extracted.
**Date:** 2026-07-09

---

## Executive summary

- **0 pages with invalid/broken JSON-LD** — all 1,117 schema blocks across 354 files parse cleanly.
- **No fabricated ratings** — zero `AggregateRating`, zero `Review`, zero `ratingValue` anywhere. Policy-safe.
- **Strong breadcrumb coverage** — `BreadcrumbList` on 334 pages, all with correct sequential positions (0 position errors).
- **Calculator TOOL pages fully covered** — every interactive calculator (level-2 category dir) emits `SoftwareApplication` with `Offer` (price 0) + `isAccessibleForFree`.
- Main weaknesses are **rich-result completeness** (244 Article/News entities have no `image`), a **disconnected entity graph** (only 34/1,117 entities carry `@id`; 0 use `@graph`), **thin author entities** (326 `Person` blocks, none with `sameAs` or `image`), and a few **coverage holes** (2 calculator sub-hubs and the glossary hub lack `BreadcrumbList`; 7 pages emit no JSON-LD).
- **Severity counts:** Critical 0 · High 1 · Medium 4 · Low 4.

---

## Schema coverage matrix

Counts = number of pages of that type whose JSON-LD contains that schema type (top-level, `@graph`-flattened). "Total" = pages of that type in `out/`.

| Page type (total) | Breadcrumb​List | Person | Article | FAQ​Page | Software​App | WebApp | HowTo | News​Article | ItemList | Collection​Page | WebPage | Org | WebSite | Other |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| homepage (1) | 1 | – | – | 1 | – | – | – | – | 1 | 1 | – | 1 | 1 | – |
| calculator (104) | 102 | 97 | 57 | 47 | 42 | – | – | – | 3 | 3 | – | – | – | – |
| international-calc (6) | 6 | – | 6 | 6 | – | 6 | 6 | – | – | – | 6 | – | – | – |
| guide (109) | 108 | 101 | 105 | – | – | – | 17 | – | 4 | 4 | – | – | – | – |
| blog-post (41) | 41 | 41 | 41 | – | – | – | – | – | – | – | – | – | – | – |
| news-post (18) | 18 | – | – | – | – | – | – | 18 | – | – | – | – | – | – |
| data-page (45) | 45 | 41 | 41 | – | – | – | – | – | 4 | 4 | – | – | – | Dataset 4 |
| author (6) | 6 | 6 | – | – | – | – | – | – | – | – | – | – | – | – |
| hub-calculators (1) | 1 | – | – | – | – | – | – | – | 1 | 1 | – | – | – | – |
| hub-guides (1) | 1 | – | – | 1 | – | – | – | – | 1 | 1 | – | – | – | – |
| hub-news (1) | 1 | – | – | 1 | – | – | – | – | 1 | 1 | – | – | – | – |
| hub-tools (1) | 1 | – | – | – | – | – | – | – | 1 | 1 | – | – | – | – |
| hub-blog (1) | 1 | – | – | 1 | – | – | – | – | – | – | – | – | – | Blog 1 |
| hub-glossary (1) | **0** | – | – | – | – | – | – | – | – | – | – | – | – | DefinedTermSet 1 (42 DefinedTerm) |
| compliance (2) | 1 | – | – | – | – | – | – | – | – | – | 2 | – | – | – |
| static-page (14) | 1 | – | – | 1 | – | – | – | – | – | – | 5 | 2 | – | Dataset 1 |
| error (2) | – | – | – | – | – | – | – | – | – | – | – | – | – | **none** |

**Site-wide top-level `@type` totals (pages containing the type):** BreadcrumbList 334 · Person 286 · Article 250 · FAQPage 58 · SoftwareApplication 42 · HowTo 23 · NewsArticle 18 · ItemList 16 · CollectionPage 16 · WebPage 13 · WebApplication 6 · Dataset 5 · Organization 3 · Blog 1 · DefinedTermSet 1 · WebSite 1.

### Which page types HAVE expected schema
- **Calculators (tool pages):** SoftwareApplication + Offer + BreadcrumbList + author Person + (usually) FAQPage. Complete.
- **International calculators (6):** richest coverage — WebApplication + WebPage + FAQPage + HowTo + Article + BreadcrumbList.
- **Guides / blog posts / data pages:** Article + Person author + BreadcrumbList.
- **Homepage:** Organization + WebSite (with SearchAction) + FAQPage + BreadcrumbList + ItemList + CollectionPage, with internal `@id` linking (CollectionPage → ItemList → WebSite).
- **Hubs (calculators/guides/news/tools/blog):** CollectionPage + ItemList + BreadcrumbList (blog uses `Blog`).
- **Authors (6):** Person + BreadcrumbList.
- **Glossary:** DefinedTermSet with 42 DefinedTerm children.

### Which page types LACK expected schema
- **News posts (18):** no author `Person` (author is `Organization`), no `image` — weaker E-E-A-T/rich-result signals than guides. (SCH-5)
- **2 calculator sub-hub landing pages** (`calculators/commerce-ads/shop-profit/`, `calculators/earnings-revenue/live-earnings/`): no BreadcrumbList and no primary page entity (only FAQPage + Person + Organization). (SCH-4)
- **Glossary hub** (`glossary/`): no BreadcrumbList. (SCH-8)
- **7 pages emit zero JSON-LD:** `methodology/`, `bookmarks/`, `search/`, `sitemap/`, `google…​.html`, `404.html`, `404/`. `methodology/` is substantive content cited by calculators. (SCH-7)
- **Most Article/News entities lack `image`** (244 of ~268) — see SCH-1.

---

## Findings

### [SCH-1] 244 Article/NewsArticle entities have no `image` property
- Severity: High
- Impact: Google's Article rich-result guidelines list `image` as a recommended (effectively required for the enhanced card) property. Without it, guides, blog posts, data pages, and news articles are ineligible for the richest Article/News presentation and lose thumbnail eligibility in Discover/News.
- Evidence: Across the corpus, 244 of the ~268 `Article`/`NewsArticle` entities emit no `image`. `ArticleSchema`/`NewsArticleSchema` (`src/components/seo/CalculatorSchema.tsx` lines 150–155, 496–501) only add `image` when an `image` prop is passed, and the guide/blog/news page templates do not pass one. Affected page types: guide (105 Article), blog-post (41), data-page (41), news-post (18). Example: `blog/khaby-lame-tiktok-earnings/`, `guides/*`, `news/*`.
- Fix: Pass a real `image` (absolute URL, ideally 1200px+ 16:9 or 1:1) to every Article/BlogPosting/NewsArticle. Reuse the page's OG image where a bespoke asset doesn't exist (`SITE_CONFIG.ogImage` as a last-resort fallback).
- Effort: M

### [SCH-2] Disconnected entity graph — no `@graph`, `@id` on only 34 of 1,117 entities
- Severity: Medium
- Impact: Each schema block is an isolated island. The author `Person`, the `Article`, the `Organization` publisher, and the `BreadcrumbList` on a given page are never linked by `@id`, so search engines cannot resolve that the article's author is the same entity described on the author page, or that the publisher is the site's Organization. This weakens entity/Knowledge-Graph consolidation and E-E-A-T attribution.
- Evidence: 34/1,117 entities carry `@id`; 0 pages use an `@graph` container. On a typical calculator/guide page the standalone `PersonSchema` (from `src/lib/eeat/page-eeat.tsx`) emits a `Person` with `url` but no `@id`, while the `Article.author` inlines a *separate* `Person`/`Organization` object — the two are duplicated and unlinked. `Article.publisher` references the Organization by `name` only, not by `@id` to the homepage `Organization` (`…/#organization`). Only the homepage and hub CollectionPage/ItemList/WebSite blocks use `@id` cross-refs.
- Fix: Adopt a single `@graph` per page (or consistent `@id` cross-references): give the site `Organization` a stable `@id` (`https://tiktokcalculator.net/#organization`), the `WebSite` `#website`, each author Person `https://tiktokcalculator.net/authors/<id>/#person`, and reference those `@id`s from `Article.author`, `Article.publisher`, and the standalone Person instead of duplicating inline objects.
- Effort: L

### [SCH-3] Author `Person` entities lack `sameAs` and `image`; Organization `sameAs` is empty
- Severity: Medium
- Impact: `Person` and `Organization` entities with no `sameAs` (social/authority links) and no `image` give Google no way to disambiguate or corroborate the entity, blunting author-authority and brand Knowledge-Graph signals — the core payoff of publishing Person schema for E-E-A-T.
- Evidence: All 326 `Person` blocks have `url` but 0 have `sameAs` and 0 have `image`. Authors are editorial "desks" (e.g., "TT Calculator Editorial Desk", "TT Calculator Research Desk" in `src/lib/constants/authors.ts`) with no `socialLinks` populated, so `getPersonAuthorForSchema` produces an empty `sameAs` that is dropped. The homepage `Organization` (`HomepageSchema.tsx` line 24) sets `sameAs: []` (empty) and `OrganizationSchema` in `CalculatorSchema.tsx` line 237 has an empty `sameAs` with only a `// Add social media profiles` comment.
- Fix: Populate `Organization.sameAs` with the brand's real social/profile URLs (the site already has a footer TikTok reference). For authors, either add real `sameAs` profile URLs, or — since these are internal desks, not individuals — consider modeling them as `Organization`/team sub-entities and add an `image` (logo/avatar). At minimum give each author Person a stable `@id` and an `image`.
- Effort: M

### [SCH-4] Two calculator sub-hub pages lack BreadcrumbList and any primary page entity
- Severity: Medium
- Impact: These landing pages emit only FAQPage + Person + Organization — no `SoftwareApplication`, `CollectionPage`, or `Article` to describe what the page *is*, and no `BreadcrumbList` for breadcrumb rich results. They are structurally orphaned in the schema.
- Evidence: `calculators/commerce-ads/shop-profit/index.html` and `calculators/earnings-revenue/live-earnings/index.html` — extracted types are only `FAQPage`, `Question`, `Answer`, `Organization`, `Person`. They are the only 2 of 104 calculator pages missing `BreadcrumbList`. Their FAQ questions also did not match visible on-page text in the parity scan (see SCH-9).
- Fix: Add a `BreadcrumbList` and a primary entity appropriate to the page's role — `CollectionPage` + `ItemList` if it's a sub-category hub linking child calculators, or `SoftwareApplication` if it hosts a calculator. Confirm the FAQ block renders visibly.
- Effort: S

### [SCH-5] News articles use `Organization` author, no `Person` byline, no `image`
- Severity: Medium
- Impact: For NewsArticle, Google strongly favors a named `author` (Person) and an `image`; an Organization-only author with no image weakens Top-Stories/News eligibility and E-E-A-T relative to the site's guides (which do attribute a Person).
- Evidence: All 18 `news/*` pages emit `NewsArticle` with `author: { @type: Organization }` (`NewsArticleSchema` in `CalculatorSchema.tsx` lines 482–486, hardcoded Organization) and no `image`. News pages carry only `NewsArticle` + `BreadcrumbList` — no standalone `Person`. Also 4 guide pages inconsistently use an Organization author while the other ~101 guides use a Person.
- Fix: Attribute news posts to a `Person` author (link by `@id` per SCH-2), add `dateModified` upkeep and an `image`. Normalize the 4 Organization-author guides to Person for consistency.
- Effort: M

### [SCH-6] Brand-name inconsistency across schema (Organization/Person "TT Calculator" vs WebSite/titles "TikTok Calculator")
- Severity: Low
- Impact: Mixed brand naming inside structured data can fragment the entity and confuse which string is the canonical brand name in the Knowledge Graph.
- Evidence: `SITE_CONFIG.name` = `'TT Calculator'`, so `Organization.name`, `Article.publisher.name`, and Person `affiliation.name` all say "TT Calculator", while the homepage `WebSite.name` is "TikTok Calculator — Free TikTok Earnings & Engagement Calculator" (`HomepageSchema.tsx` line 36) and page titles/H1s use "TikTok Calculator". No single consistent brand string.
- Fix: Pick one canonical brand name and use it for `Organization.name`/`WebSite.name`/publisher; put the descriptive variant in `alternateName` or `WebSite.description`, not `name`.
- Effort: S

### [SCH-7] Seven pages emit zero JSON-LD (including the methodology content page)
- Severity: Low
- Impact: Most are utility pages (search/sitemap/bookmarks/404/Google-verification) where missing schema is fine, but `methodology/` is a substantive, frequently-cited trust page that would benefit from at least `WebPage` + `BreadcrumbList` (and arguably `Article`), and its absence leaves an E-E-A-T anchor page unstructured.
- Evidence: Pages with no `<script type="application/ld+json">`: `methodology/index.html`, `bookmarks/index.html`, `search/index.html`, `sitemap/index.html`, `google4b06c114ba4c08d7.html`, `404.html`, `404/index.html`.
- Fix: Add `WebPage` + `BreadcrumbList` to `methodology/` (and optionally `about`-linked Organization). Leave search/sitemap/404/verification as-is.
- Effort: S

### [SCH-8] Glossary hub `DefinedTermSet` has no BreadcrumbList
- Severity: Low
- Impact: The glossary index (42 `DefinedTerm` entries in one `DefinedTermSet`) is the only content hub with no `BreadcrumbList`, an inconsistency vs every other hub and a small loss of breadcrumb eligibility.
- Evidence: `glossary/index.html` top-level types = `DefinedTermSet` + 42 `DefinedTerm`, no `BreadcrumbList`. Every other hub (calculators/guides/news/tools/blog) includes BreadcrumbList.
- Fix: Add a `BreadcrumbList` (Home → Glossary). Optionally wrap in a `CollectionPage`/`WebPage` referencing the DefinedTermSet by `@id`.
- Effort: S

### [SCH-9] Suspected FAQ schema ↔ visible-content mismatch on 2 sub-hub pages (international pages = false negatives)
- Severity: Low (suspected)
- Impact: FAQPage `mainEntity` Q&A that is not visibly present on the page violates Google's FAQ policy (schema must match on-page content) and risks manual action if the FAQ is schema-only.
- Evidence: FAQ parity scan matched 384 of 414 FAQ questions to visible page text. 25 of the 30 misses are the 5 international calculator pages (`calculator/{es,fr,it,my,pt-br}/`) whose questions are in the local language with accented characters — almost certainly false negatives from ASCII normalization, not real mismatches. The remaining misses are on `calculators/commerce-ads/shop-profit/` and `calculators/earnings-revenue/live-earnings/` (the same 2 pages flagged in SCH-4), where the FAQ questions were not detected in visible text — treat as suspected schema-only FAQ pending a visual spot-check.
- Fix: Verify the FAQ block renders visibly on shop-profit and live-earnings; if it does not, remove the FAQPage schema or render the Q&A. No action needed for the international pages beyond confirming the localized FAQ renders (expected OK).
- Effort: S

---

## Verified OK

- **JSON-LD validity:** 0 parse errors across all 1,117 blocks in 354 files. No malformed JSON, no truncated blocks.
- **No fabricated ratings/reviews:** 0 `AggregateRating`, 0 `Review`, 0 `ratingValue` sitewide. The `ReviewSchema` component exists in code but is not rendered anywhere — no policy exposure.
- **BreadcrumbList correctness:** present on 334 pages; all `itemListElement` positions are sequential (1..n) and every element has an `item` URL — 0 position/item defects.
- **Calculator tool coverage:** all 39 interactive calculator category pages (level-2 dirs) emit `SoftwareApplication` with `Offer` (price `0`, USD, `InStock`) and `isAccessibleForFree: true`; the 3 category-index pages (commerce-ads, earnings-revenue, utility-tools) correctly use `CollectionPage` + `ItemList` instead. The "62 calculators without SoftwareApplication" seen in raw counts are level-3 supporting sub-articles (correctly `Article`) and these 3 hubs — not missing schema.
- **Domain hygiene:** no legacy `calculatecreator` domain in ANY JSON-LD; every schema `url`/`@id`/`logo` uses `https://tiktokcalculator.net`. (The string "calculatecreator" appears only inside one client JS chunk, not in rendered structured data.)
- **Homepage schema stack:** Organization + WebSite (with valid `SearchAction`/`EntryPoint`) + FAQPage + BreadcrumbList + ItemList + CollectionPage, with correct internal `@id` linking (CollectionPage.mainEntity → ItemList `#calculator-list`; CollectionPage.isPartOf → WebSite `#website`).
- **International calculators (6):** consistently rich — WebApplication + WebPage + FAQPage + HowTo + Article + BreadcrumbList on every page.
- **FAQ parity (overall):** 384/414 FAQ questions match visible on-page text; homepage's 6 FAQs match the rendered FAQ section verbatim.
- **HowTo:** 23 pages (17 guides + 6 international) emit `HowTo` with positioned `HowToStep`s.
- **Glossary structured data:** 42 `DefinedTerm` entries nested in a single `DefinedTermSet` (only missing a breadcrumb, per SCH-8).
- **Dataset:** 5 data pages emit `Dataset` schema.
- **Publisher/logo:** Article/News `publisher` consistently includes `Organization` with `logo` `ImageObject` pointing to the real logo URL; Organization `logo` present on homepage.

---

## Appendix — method notes
- Extraction/parse scripts and raw outputs used for this audit are in the session scratchpad (`extract.js`, `inspect.js`, `faqcheck.js`). All counts above are from actual parsed JSON-LD, not source-code inference.
- Page-type classification is by URL path; "calculator" lumps interactive tool pages, category hubs, and nested supporting sub-articles, which is why raw per-type counts (e.g., SoftwareApplication 42/104) require the refinement noted under Verified OK.
