# Design: Real reference pages + compliance hub

**Date:** 2026-07-09
**Status:** Approved (design + data-sourcing decision)
**Topic:** Convert 4 soft-redirected reference URLs into real content pages, and turn `/compliance/` into a real hub.

## Problem

Eight URLs 404 under `next dev` and were only handled by generic 301 redirects in production (`firebase.json`):

- `/reference/`, `/comparisons/`, `/benchmarks/`, `/compliance/` (section indexes)
- `/reference/creator-fund-countries/`, `/reference/live-gifts-value-chart/`, `/reference/shop-commission-rates/`, `/reference/shop-payment-schedule/` (topics)

The four reference **topic** URLs redirected to the generic `/data/reference/` index (a soft-404 pattern: redirect to non-equivalent content). `/compliance/` redirected to a single arbitrary disclosure. The redirects work in production; `next dev` does not process Firebase redirects, hence the local 404s.

## Decisions

1. **Canonical location:** build the 4 topic pages under the site's canonical `/data/reference/<slug>/` structure (matches the 2 existing reference `.mdx` pages and the whole `/data/...` architecture). Keep `/reference/<slug>` as a 301 that now points to the **specific** page.
2. **Section indexes:** leave `/reference`, `/comparisons`, `/benchmarks` redirecting to their existing real hubs (`/data/reference/`, `/data/platform-comparisons/`, `/data/`). Build a real `/compliance/` hub only.
3. **Data sourcing:** reuse figures already vetted on-site / in the orphaned drafts for the 2 refreshed pages; do a live web-research pass (firecrawl/search) to confirm current 2026 figures for the 2 written-from-scratch pages. Frame everything as reference with "verify against official TikTok policy" notes.

## How the content system works (verified)

- Route `src/app/data/reference/[...slug]/page.tsx` uses `createCatchAllArticlePageExports('data/reference')`.
- `generateStaticParams` + hub listing (`getArticlesBySection('data/reference')`) both **auto-discover** files.
- Discovery matches **`.mdx` only** (recursive `readdirSync`, `.endsWith('.mdx')`). Orphaned `.md` files are NOT picked up.
- Required frontmatter: see `src/lib/content/types.ts` (`ArticleFrontmatter`). Model new files on `content/data/reference/tiktok-business-vs-creator-account.mdx`.

## Component 1 — Four reference articles

New files in `content/data/reference/<slug>.mdx`:

| Slug (canonical `/data/reference/<slug>/`) | Source | primaryKeyword |
|---|---|---|
| `creator-fund-countries` | refresh orphaned `content/reference/creator-fund-eligible-countries.md` → 2026 | tiktok creator fund countries |
| `shop-payment-schedule` | refresh orphaned `content/reference/tiktok-shop-payment-schedule.md` → 2026 | tiktok shop payment schedule |
| `live-gifts-value-chart` | write from scratch (web-verify) | tiktok live gifts value chart |
| `shop-commission-rates` | write from scratch (web-verify) | tiktok shop commission rates |

Frontmatter conventions (per existing reference page):
- `section: outer`, `category: "data/reference"`, `centralEntity: "TikTok"`
- `parentArticle: "/data/reference/"`, `childArticles: []`
- `siblingArticles`: the other three reference pages (canonical `/data/reference/<slug>` paths)
- `relatedArticles`: 3–4 relevant calculators/guides (e.g. coins calculator, payout calculator, monetization guide)
- `articleType: "data"`, `priorityScore` ~78–82, `wordCount` ~1,200–1,500
- `publishDate: "2026-07-09"`, `author: "TT Calculator Team"`, `showCalculatorCTA` where a calculator is relevant
- `headingVector` listing the H2/H3 outline

Body (per `algorithmic-authorship` rules): answer-first opening paragraph, data table(s), H2/H3 structure, factual modality, an "How to use this data" / improvement section. Body H1 is demoted to H2 by the renderer — do not include an H1.

## Component 2 — Compliance hub

New `src/app/compliance/page.tsx` (canonical `/compliance/`), mirroring the `src/app/editorial-policy/page.tsx` pattern (Container, Breadcrumb, WebPage JSON-LD, metadata with canonical). Content: short intro on advertising/sponsorship transparency, then a card/list linking to:
- `/compliance/advertising-disclosure/`
- `/compliance/sponsorship-disclosure/`
- and cross-links to `/editorial-policy/`, `/corrections-policy/`, `/sources-policy/`.

## Component 3 — Redirects (`firebase.json`)

Repoint reference topic aliases from the generic index to specific pages (keep `type: 301`, `{,/}` sources):

- `/reference/creator-fund-countries` → `/data/reference/creator-fund-countries/`
- `/reference/creator-fund-eligible-countries` → `/data/reference/creator-fund-countries/`
- `/reference/live-gifts-value-chart` → `/data/reference/live-gifts-value-chart/`
- `/reference/shop-commission-rates` → `/data/reference/shop-commission-rates/`
- `/reference/shop-payment-schedule` → `/data/reference/shop-payment-schedule/`
- `/reference/tiktok-shop-payment-schedule` → `/data/reference/shop-payment-schedule/`

Leave unchanged: `/reference{,/}` → `/data/reference/`, `/reference/creator-fund-payment-schedule` → `/data/reference/`, `/comparisons*`, `/benchmarks`.

**Remove** the `/compliance{,/}` → `/compliance/advertising-disclosure/` redirect so the new hub page serves (Firebase redirects take precedence over static files).

## Component 4 — Cleanup & sitemap

- Delete the two consumed orphaned drafts: `content/reference/creator-fund-eligible-countries.md`, `content/reference/tiktok-shop-payment-schedule.md`.
- Sitemap: `npm run generate-sitemap` (runs on build) scans output; confirm the 4 new pages + `/compliance/` appear. Regenerate `public/sitemap.xml`.

## Verification

1. `next dev`: the 4 pages render at `/data/reference/<slug>/`; the reference hub `/data/reference/` lists all (2 existing + 4 new); `/compliance/` renders the hub.
2. `npm run build` (static export `output: 'export'`) succeeds; `out/data/reference/<slug>/index.html` and `out/compliance/index.html` exist.
3. `firebase.json` remains valid JSON; redirect sources/destinations spelled correctly.
4. `npm run seo:check` (internal link + redirect-chain checks) passes.

## Out of scope

- `/comparisons/*` and `/benchmarks` content (stay as redirects).
- Orphaned `content/comparisons/*.md` drafts (leave as-is).
- Standalone landing pages at short `/reference`, `/comparisons`, `/benchmarks` URLs.
