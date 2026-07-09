# Semantic SEO Foundation Audit (Dimensions A1–A3)

**Site:** tiktokcalculator.net (LIVE) · **Repo:** /Users/surajgiri/Documents/calculatecreator
**Scope:** Source Context / Central Entity (A1), Topical Map coverage (A2), Entity–Attribute completeness (A3)
**Date:** 2026-07-09 · **Method:** local analysis of `content/` (261 files), built `out/` (352 pages), `public/sitemap.xml` (333 URLs), `src/lib/calculators` (39 modules), strategy docs, plus HTTP 200 spot-checks on 4 live URLs.

---

## Source Context (as-built)

The site's **actual** source context is singular and coherent: **TikTok creator monetization & analytics, delivered through calculators**. The central entity is the *monetizing TikTok creator*; the central search intent is *"how much can I earn / what do my TikTok metrics mean — estimated with a tool"*; the site-wide n-gram ladder ("TikTok" + "creator" + "earnings/money/RPM/engagement" + "calculator") holds across all 39 calculator modules and every content cluster (calculators, guides, data, blog, news, metrics). No off-topic sections were found — every URL laddered up to the creator-economy entity, so the source context is **defensible and low-drift**. This matches the INTENDED source context in `TOPICAL_MAP_COMPREHENSIVE.md` and `main.md`. The main foundation weaknesses are not topic drift but (a) a **brand-entity naming inconsistency** ("TT Calculator" in code vs "tiktokcalculator" domain vs legacy "CalculateCreator" in strategy docs), (b) **missing / stubbed base layers** (glossary term nodes; dedicated metrics node) that the strategy explicitly called for, (c) **entity–attribute orphaning** on ~60% of calculators, and (d) **topical-map governance drift** — the live site is ~2× the documented plan with a re-organized taxonomy that the map no longer reflects.

---

## Findings

### [SF-1] Brand / central-entity name is inconsistent across the stack
- Severity: Medium
- Impact: A fuzzy brand entity weakens entity consolidation and E-E-A-T; search engines see three different "brand" strings for one site, diluting the branded n-gram.
- Evidence: `src/lib/constants/site-config.ts` sets `name: 'TT Calculator'` / `shortName: 'TT'` while the live domain is `tiktokcalculator.net`; `region.md` (line 8) still points the "Region section" at `https://calculatecreator.com`; `.seo/clients/calculatecreator/content/content-audit-summary-2026-02-20.md` titles the site "CalculateCreator.com"; repo/framework doc is `calculatecreator-koray-framework.docx`. The visible brand name ("TT Calculator") does not contain the core query token "TikTok".
- Fix: Standardize on one brand string that carries the entity token (e.g., "TikTok Calculator" / "TikTokCalculator.net"). Update `site-config.ts name`, retire `calculatecreator.com` references in `region.md`, and reflect the canonical brand in Organization schema.
- Effort: S

### [SF-2] Two intended pillar hubs live under non-canonical, renamed slugs
- Severity: Low
- Impact: The documented topical map anchors two head-term clusters ("how to grow on TikTok" 30K/mo; "TikTok engagement rate" 6K/mo) to URLs that do not exist, breaking map-to-site traceability and any planned internal-link anchors.
- Evidence: Intended `/guides/how-to-grow-on-tiktok/` and `/guides/tiktok-engagement-rate-guide/` return 0 hits in `public/sitemap.xml`; the live equivalents are `/guides/tiktok-growth-hub/` and `/guides/tiktok-engagement-rate-calculator-guide/` (both HTTP 200, confirmed). The other 6 intended hubs exist at their planned slugs.
- Fix: Either update the topical map to the live slugs, or (if migrating) 301 the canonical hub slugs and consolidate. Ensure the growth/engagement hubs use the head-term slug, not a "-calculator-guide" variant.
- Effort: S

### [SF-3] Glossary / definitional entity layer is essentially absent
- Severity: High
- Impact: Removes the disambiguation + entity-definition base layer the strategy relies on; kills a planned internal-link tier ("every calculator links to 2–3 glossary nodes") and cedes definitional featured-snippet queries ("what is RPM", "what is a diamond").
- Evidence: `main.md` specifies `/glossary/[slug]` as a core page type and internal-linking rule (calculators → 2–3 glossary nodes). Actual build has a single hardcoded hub `src/app/glossary/page.tsx`; `find out/glossary -name index.html` returns only the index (ZERO individual term URLs). No `content/**/glossary` source dir exists.
- Fix: Generate individual `/glossary/[term]/` pages for core entities/metrics (RPM, CPM, diamond, coin, engagement rate, completion rate, GMV, Creator Rewards, Spark Ads, etc.) with Definition + Article schema, and wire calculator→glossary links.
- Effort: M

### [SF-4] Author / E-E-A-T "outer section" is orphaned from the sitemap
- Severity: High
- Impact: The supplementary author section — the Koray "outer/author section" that builds authorship authority — is undiscoverable to crawlers via the sitemap, suppressing E-E-A-T entity association between authors and the topic.
- Evidence: 6 author pages are built (`out/authors/{sarah-johnson,michael-chen,emily-thompson,david-kim,jessica-rodriguez,alex-martinez}/`) and internally linked (6 pages reference `/authors/`), but NONE appear in `public/sitemap.xml`. Set-diff of built-vs-sitemap also shows `/blog/tiktok-vs-youtube-shorts-earnings-2026/`, `/calculators/video-performance/`, and `/calculators/watch-time/` (two calculator hubs) built but absent from the sitemap.
- Fix: Add `/authors/*`, the missing blog post, and the two calculator hub pages to the sitemap generator; verify author pages carry Person schema and link to their bylined articles bidirectionally.
- Effort: S

### [SF-5] ~26 of 43 calculator entities are attribute-orphans (tool page only, no Root/Rare/Unique articles)
- Severity: High
- Impact: Most calculator entities have no attribute/sub-topic coverage, so they cannot build topical authority around their own entity — the tool ranks alone with no supporting cluster, the opposite of the 8 well-built clusters.
- Evidence: Sitemap subsection counts show strong clusters on 8 core entities — tiktok-money (9), engagement-rate (9), earnings-revenue incl. live-earnings (7), commerce-ads/shop-profit (7), tiktok-creator-fund (6), rpm (6), coins (6), brand-deal-rate (6). But ~26 calculators have exactly 1 URL (hub only, zero attribute pages): live-gifts, diamond-converter, multi-platform-earnings, affiliate-commission, cpm-cpv, completion-rate, save-rate, share-ratio, profile-visit-rate, comment-rate, video-performance, sponsorship-roi, campaign-roi, break-even, lifetime-value, customer-acquisition-cost, content-value, content-calendar-roi, cost-per-result, audience-overlap, ad-spend, ad-revenue, posting-time, milestone-tracker, follower-conversion, tiktok-ad-cost. (39 logic modules in `src/lib/calculators`; 43 hub pages in `out/calculators`.)
- Fix: Prioritize attribute articles for the highest-value orphans (live-gifts, multi-platform-earnings, affiliate-commission, cpm-cpv) — 3–5 Root/Rare attribute pages each (e.g., for live-gifts: gift→diamond conversion, gift value chart, LIVE earnings per hour, withdrawal). De-prioritize or merge the lowest-intent orphans (audience-overlap, cost-per-result, milestone-tracker).
- Effort: L

### [SF-6] "TikTok LIVE gifts" entity is fragmented across 4 URL locations (weak topical border)
- Severity: Medium
- Impact: A 10K/mo primary-keyword sub-entity (planned as a 16-page cluster) has no single canonical hub; its attribute content does not ladder to its calculator, splitting internal PageRank and confusing the topical border between "LIVE gifts", "diamonds", and "live earnings".
- Evidence: The LIVE-gifts entity is split across `/calculators/live-gifts/` (orphan), `/calculators/diamond-converter/` (orphan), `/calculators/earnings-revenue/live-earnings/*` (7 pages), plus guides `/guides/tiktok-live/`, `/guides/tiktok-gifts/`, `/guides/tiktok-diamonds/`, `/guides/complete-tiktok-diamond-guide/`, `/guides/tiktok-live-earnings-guide/`, `/guides/live-gift-earnings-optimization/`. No node consolidates them.
- Fix: Designate one canonical LIVE hub (e.g., `/guides/tiktok-live/`), point the live-gifts + diamond-converter calculators and the 7 live-earnings attribute pages to it, and set clear contextual borders (gifts vs diamonds vs cash-out) to avoid overlap.
- Effort: M

### [SF-7] Topical-map taxonomy drift — planned category hubs abandoned, map now stale
- Severity: Medium
- Impact: The documented topical map is no longer a faithful governance artifact; its category hubs (`/comparisons`, `/reference`, `/niches`) are near-empty stubs while real content moved elsewhere, so the map can't be used to detect gaps or borders.
- Evidence: Intended top-level hubs vs actual source dirs: `content/comparisons/` (2 files), `content/reference/` (2), `content/niches/` (3), `content/advanced/` (1), `content/resources/` (1). The equivalent content actually lives under `content/guides/{growth(18),monetization(14),niches(12),business(12)}` (~60 pages) and `content/data/` (41), plus `/data/platform-comparisons/` (6). `content/metrics/` holds just 1 file.
- Fix: Rewrite `TOPICAL_MAP_COMPREHENSIVE.md` to the as-built taxonomy (guides subfolders + data clusters) so it can govern future coverage; remove/redirect the abandoned near-empty category dirs.
- Effort: M

### [SF-8] Site is ~2× the documented plan with no updated map (unplanned sprawl → cannibalization risk)
- Severity: Medium
- Impact: Growth outran the topical map, creating suspected intra-topic cannibalization and no authoritative source of truth for what should exist.
- Evidence: Plan target "150+ pages" (`TOPICAL_MAP_COMPREHENSIVE.md`); actual 352 built / 333 in sitemap. Blog + news = 60 pages vs planned "20+ news"; `data/earnings` = 23 pages. Suspected competing pairs: `/guides/how-to-make-money-on-tiktok/` vs `/guides/monetization/seven-ways-make-money-tiktok/`; `/guides/how-to-increase-engagement/` vs `/guides/tiktok-engagement-rate-calculator-guide/`; `/guides/how-much-to-charge-sponsorship/` vs `/guides/how-to-negotiate-brand-deals/` vs `/guides/business/brand-deal-contract-negotiate/` (cannibalization suspected, not confirmed).
- Fix: Run a title/H1 + primary-keyword cannibalization pass across the 110 guides; merge or differentiate overlapping pairs; freeze new page creation to the updated map from SF-7.
- Effort: M

### [SF-9] Half-built localized `/calculator/[lang]/` pages — thin, English shell, off-sitemap, path collision
- Severity: Medium
- Impact: Untranslated duplicate variants of the core calculator plus a `/calculator` vs `/calculators` path split create thin/duplicate-content and crawl-confusion risk around the site's most important tool.
- Evidence: 6 locale pages built under the SINGULAR path `out/calculator/{de,es,fr,it,my,pt-br}/` (distinct from the main `/calculators/` tree); the rendered HTML declares `lang="en"` with the standard app shell (translation-thinness suspected). None appear in `public/sitemap.xml`.
- Fix: Either fully localize (translated copy, `hreflang`, `lang` attr, localized rate tables per `region.md`) and add to sitemap, or remove the `/calculator/[lang]/` pages and consolidate on the canonical English `/calculators/` tool to avoid duplication.
- Effort: M

### [SF-10] Mild topical-border blur in `/news`: TikTok-app product news vs creator-economy
- Severity: Low
- Impact: A handful of news items attach to "TikTok the app" rather than the site's central sub-entity (creator monetization/analytics), slightly diluting the source-context focus.
- Evidence: `/news/` items including `age-specific-privacy-features`, `parent-safety-features-update`, `personalized-ai-avatar-stickers`, `playback-settings-update`, and `tiktok-nationwide-ban-status` are general platform/product news, not creator-monetization news. (Most other news items — Creator Rewards, Shop GMV/expansion, RPM — are on-entity.)
- Fix: Reframe borderline news toward creator impact (e.g., "what the AI avatar stickers mean for creator engagement"), or keep them but ensure each links back to a monetization/analytics hub so they ladder to the central entity.
- Effort: S

### [SF-11] Metrics entity coverage is scattered; dedicated `/metrics` node is a 1-file stub
- Severity: Medium
- Impact: Performance-metric entities (watch time, completion rate, save/share rate, comments-to-likes, follower growth) lack a coherent metrics cluster, so metric attribute content is dispersed and can't consolidate authority for the "TikTok metrics/benchmarks" intent.
- Evidence: `content/metrics/` contains a single file (`tiktok-comments-to-likes-ratio.md`). Metric attribute content instead sits under `content/data/engagement/` (7 files: avg-engagement-by-follower-count, completion-rate-by-video-length, micro-vs-macro, posting-frequency-correlation, likes-to-views, save-rate-benchmarks, share-rate-benchmarks) and inside individual calculator hubs — with no unifying metrics hub. Standalone metric calculators (`completion-rate`, `save-rate`, `share-ratio`, `profile-visit-rate`, `comment-rate`) are all attribute-orphans (see SF-5).
- Fix: Establish a metrics hub (reuse the engagement-rate guide as the parent), consolidate `/data/engagement/*` benchmark pages under it, and give each metric calculator 2–3 attribute pages (benchmark, by-niche, how-to-improve).
- Effort: M

---

## Verified OK

- **Single, coherent source context / no topic drift:** All 39 calculator modules (`src/lib/calculators/*.ts`) and every content cluster (calculators, guides, data, blog, news, metrics) are TikTok creator-economy; no off-topic sections were found. The as-built central entity matches the intended one in the strategy docs.
- **Sitemap integrity:** 0 broken sitemap entries — all 333 URLs in `public/sitemap.xml` correspond to a built page in `out/` (set-diff clean in that direction).
- **Core monetization hubs present at planned slugs:** `/guides/how-to-make-money-on-tiktok/`, `/guides/tiktok-creator-fund/`, `/guides/brand-deals/`, `/guides/tiktok-live/`, `/guides/tiktok-shop-affiliate/`, `/guides/multi-platform-strategy/` all exist (6 of 8; the other 2 renamed — see SF-2).
- **Calculator breadth exceeds plan:** 43 calculator hub pages built / 39 logic modules vs the planned 28 (+5). Over-delivery, not under-coverage.
- **Region/geo strategy implemented on-entity:** 12 `/data/earnings/tiktok-pay-[country]-earnings/` pages plus `creator-fund-rates-by-country`, `tiktok-rpm-by-country`, and `tiktok-coin-prices-by-country` ladder correctly to creator earnings by geography (realizes `region.md` intent without off-topic drift).
- **Strong attribute clusters on the 8 core monetization entities:** tiktok-money, engagement-rate, tiktok-creator-fund, rpm, coins, brand-deal-rate, earnings-revenue/live-earnings, commerce-ads/shop-profit each carry 6–9 attribute pages.
- **Trust / policy layer complete:** methodology, editorial-policy, sources-policy, corrections-policy, privacy, terms, about, contact, faq all build to 200 (supports Trustworthiness even though authorship/E-E-A-T is weak per SF-4).

---

## Findings count by severity
- Critical: 0
- High: 3 (SF-3, SF-4, SF-5)
- Medium: 6 (SF-1, SF-6, SF-7, SF-8, SF-9, SF-11)
- Low: 2 (SF-2, SF-10)
- **Total: 11**
