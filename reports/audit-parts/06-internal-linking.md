# Dimension E — Internal Linking & Site Architecture Audit

Site: `tiktokcalculator.net` (live). Analysis basis: real link graph parsed from the built static export in `out/` (354 `.html` files), cross-checked against the 107 Firebase redirects in `firebase.json` and the link-strategy source `src/lib/seo/semantic-links.ts`.

Method: a Node parser (`scratchpad/link-audit.js`) extracted every `<a href>` from all 354 built HTML files, classified each link's region (header/footer boilerplate vs. breadcrumb vs. contextual `<main>` content), normalized targets to canonical trailing-slash URLs, resolved existence against the built file set, matched sources against expanded Firebase redirect sources (`{,/}` → both slash forms), then ran BFS depth from `out/index.html` and computed orphan / anchor / hub-spoke / volume statistics.

---

## Link graph stats

| Metric | Value |
|---|---|
| Built HTML pages (nodes) | 354 |
| Total internal `<a>` links | 18,346 |
| Unique internal targets referenced | 390 (vs. 354 real pages → 36 targets do not resolve to a canonical page) |
| Links OK (resolve to canonical page/asset) | 15,869 |
| **Broken internal links (true 404)** | **252** (all double-slash `//` trailing URLs → real calculators) |
| **Links pointing to a Firebase redirect source (extra-hop / equity leak)** | **2,225** |
| Missing trailing slash (would 301) | 0 |
| Wrong-domain (`calculatecreator`) links | 0 |
| Orphan pages (zero inbound links) | 9 |
| Near-orphan pages (inbound only from boilerplate) | 2 |
| Shadowed pages (built page that is also a redirect source → 301'd away) | 4 |
| Pages with >150 internal links | 1 (`/sitemap/`, 298 — expected) |
| Pages with <3 contextual links | 1 (Google verification stub — expected) |
| Inner pages missing a breadcrumb nav | 41 |
| Incomplete hub↔spoke link pairs | 115 (across 32 hub directories) |

### Click-depth distribution (BFS from `/`)

| Depth | Pages |
|---|---|
| 0 (home) | 1 |
| 1 | 24 |
| 2 | 188 |
| 3 | 94 |
| 4 | 25 |
| 5 | 2 |
| Unreachable | 20 |

Reachable pages: 334 / 354. **Median depth = 2, max depth = 5.** 27 pages sit at depth > 3.

### Redirect-hop concentration

| Redirect source linked | Occurrences | Region | Redirects to |
|---|---|---|---|
| `/benchmarks/` | 1,062 | footer boilerplate (on 353 pages) | `/data/` |
| `/comparisons/` | 706 | footer boilerplate (on 353 pages) | `/data/platform-comparisons/` |
| `/reference/` | 353 | footer boilerplate (on 353 pages) | `/data/reference/` |
| `/calculators/watch-time/` | 32 | contextual + breadcrumb | `/calculators/completion-rate/` |
| `/calculators/video-performance/` | 21 | contextual + breadcrumb | `/calculators/viral-potential/` |
| ~24 other sources (long tail) | ~51 | contextual | various |

The big three (`/benchmarks/`, `/comparisons/`, `/reference/`) account for 2,121 of 2,225 redirect hops (95%) and appear in the footer of essentially every page. Region split of all redirect hops: **2,118 boilerplate, 103 contextual, 4 breadcrumb.**

---

## Findings

### [IL-1] 252 "Open Calculator" CTAs are broken double-slash 404s
- Severity: **Critical**
- Impact: The primary conversion CTA on blog/news/author pages points to a URL with a trailing double slash (`/calculators/tiktok-money//`). Firebase serves `out/<path>//index.html`, which does not exist → 404 (or at best a normalization redirect). PageRank is dumped into a dead URL and users hitting the money CTA land on an error page.
- Evidence: 252 links, 100% double-slash pattern, 100% in contextual content. All resolve to a REAL calculator that exists at the single-slash canonical. Top offenders: `/calculators/tiktok-money//` (76×), `/calculators/niche-profitability//` (30×), `/calculators/engagement-rate//` (26×), `/calculators/tiktok-creator-fund//` (18×), `/calculators/rpm//` (18×), `/calculators/commerce-ads/shop-profit//` (16×). Anchor is "Open Calculator". Example: `/blog/charli-damelio-tiktok-earnings/` → `/calculators/tiktok-money//`.
- Fix: Single-root-cause bug — a CTA template concatenates `basePath + "/" + slug + "/"` where `basePath` or `slug` already carries a slash. Find the component that renders the "Open Calculator" button (grep the calculator-slug join in blog/news/author templates), normalize with a `/\/{2,}/` → `/` collapse or `path.posix.join`, and rebuild. One fix clears all 252.
- Effort: **S**

### [IL-2] Site-wide footer links to 3 redirected hub URLs (2,121 extra-hop links)
- Severity: **High**
- Impact: Every one of the 353 content pages carries footer links to `/benchmarks/`, `/comparisons/`, and `/reference/`, all of which 301-redirect to their new `/data/...` homes. This forces a redirect hop on every internal crawl path to those hubs, dilutes/delays link-equity flow site-wide, and wastes crawl budget at scale.
- Evidence: `/benchmarks/` linked 1,062× (anchors "Benchmarks" 707× and a descriptive footer promo 353×) → `/data/`; `/comparisons/` linked 706× (anchor "Comparisons") → `/data/platform-comparisons/`; `/reference/` linked 353× (anchor "Reference") → `/data/reference/`. Each appears on all 353 distinct source pages = footer boilerplate.
- Fix: Update the footer/global-nav component to point directly at the canonical destinations (`/data/`, `/data/platform-comparisons/`, `/data/reference/`). Three string edits in one shared layout component eliminate 2,121 redirect hops.
- Effort: **S**

### [IL-3] 4 built pages are shadowed by their own redirect (self-competing / crawl waste)
- Severity: **High**
- Impact: Four URLs exist as fully built pages in `out/` AND are listed as redirect sources in `firebase.json`. Firebase evaluates redirects before static files, so these real pages are 301'd away and can never be served/indexed — the rendered HTML is dead weight, internal links to them hop, and the link-strategy code still references two of them.
- Evidence: `/calculators/video-performance/` (built page exists) → redirects to `/calculators/viral-potential/`; `/calculators/watch-time/` (built page exists) → `/calculators/completion-rate/`; `/tools/` → `/calculators/`; `/blog/tiktok-vs-youtube-shorts-earnings-2026/` → `/data/platform-comparisons/`. `semantic-links.ts` still defines `video-performance` and `watch-time` relationship blocks and links to them (32× + 21× contextual/breadcrumb references remain).
- Fix: Decide per URL — either (a) remove the redirect and keep the page canonical, or (b) delete the built page and its inbound links. For `video-performance`/`watch-time`, reconcile `semantic-links.ts` with the redirect intent (currently the code and Firebase disagree). Rebuild after resolving.
- Effort: **M**

### [IL-4] Contextual + breadcrumb links to redirected calculator/legacy URLs (~104 links)
- Severity: **Medium**
- Impact: Beyond the footer big-3, ~104 in-content and breadcrumb links target redirected URLs, adding hops and pointing crawlers at pre-migration paths. Breadcrumb hops are especially bad because breadcrumbs define the canonical hierarchy.
- Evidence: `/calculators/watch-time/` (32×) and `/calculators/video-performance/` (21×) linked from author pages and calculator content + breadcrumbs; long tail includes legacy taxonomy paths (`/calculators/engagement-influence/*`, `/calculators/coins-gifts-diamonds/*`, `/calculators/earnings-revenue/money/`, `/guides/how-to-go-viral/`, `/guides/tiktok-creator-fund-guide/`, `/metrics/*`, `/reference/*`) each 1–2×. `/compliance/` appears once in a breadcrumb → `/compliance/advertising-disclosure/`.
- Fix: Sweep contextual/breadcrumb hrefs and replace redirected sources with their canonical destinations; regenerate author-page and breadcrumb link sets from the current URL map rather than legacy slugs.
- Effort: **M**

### [IL-5] 6 author pages are fully orphaned (no inbound links) — E-E-A-T signal loss
- Severity: **High**
- Impact: All six author-profile pages have zero inbound internal links, so PageRank never reaches them and crawlers can only find them via the sitemap. Bylines link to the generic `/about/` page instead of the individual author entity, undermining author-entity / E-E-A-T signals that the site's "desk"/author framing is trying to establish.
- Evidence: Orphans (0 inbound): `/authors/alex-martinez/`, `/authors/david-kim/`, `/authors/emily-thompson/`, `/authors/jessica-rodriguez/`, `/authors/michael-chen/`, `/authors/sarah-johnson/`. Byline anchors resolve elsewhere: "TT Calculator Team" → `/about/` (398×) and "View full profile →" → `/about/` (240×), never to the author page. (Also zero-inbound but expected/excluded from concern: `/404/`, `/404.html`, `/google…​.html`.)
- Fix: Point article bylines and "View full profile" links to the specific `/authors/<name>/` page; add an author index or link authors from `/about/`. This also lifts them out of the unreachable set.
- Effort: **S**

### [IL-6] 27 pages at depth > 3 and 20 pages unreachable from the homepage
- Severity: **Medium**
- Impact: Deep/unreachable pages receive minimal internal PageRank and slower crawl/refresh. Several are commercially or topically important guides buried at depth 4–5.
- Evidence: Depth 5 — `/calculators/conversion-rate/tiktok-conversion-rate-optimization/`, `/calculators/production-cost/tiktok-creator-equipment-guide/`. Depth 4 (25 pages) includes the entire `/guides/business/*` cluster (creator taxes, insurance, exit strategies, copyright, burnout), most `/guides/niches/*` earnings pages, and `/calculators/commerce-ads/`. 20 pages unreachable via the clean canonical graph — of these, 9 are the zero-inbound orphans in IL-5; the remaining ~11 are **suspected** to be reachable only through the double-slash (IL-1) or redirected (IL-2/IL-4) links and should be re-checked after those fixes.
- Fix: Add contextual links from depth-1/2 hubs to the buried `/guides/business/` and `/guides/niches/` clusters; surface commerce/utility hubs in the calculators hub. Re-run BFS after IL-1/IL-2 fixes to confirm the ~11 non-orphan unreachables rejoin the graph.
- Effort: **M**

### [IL-7] 41 inner pages render no breadcrumb navigation
- Severity: **Medium**
- Impact: Breadcrumbs anchor silo hierarchy for both users and BreadcrumbList schema; missing them on inner pages weakens hierarchy signals and removes an internal-link path upward to hubs.
- Evidence: 41 inner pages have no `aria-label="Breadcrumb"` nav, including `/calculators/rpm/`, `/calculators/video-performance/`, `/guides/best-shop-niches/`, `/compliance/sponsorship-disclosure/`, all six `/authors/*`, the six `/calculator/<locale>/` localized stubs, most `/news/*` articles, `/blog/`, `/faq/`, `/about/`, `/contact/`. (Calculator hub spokes like `/calculators/tiktok-creator-fund/…` do have correct breadcrumbs — see Verified OK.)
- Fix: Ensure the breadcrumb component renders on every non-root template, especially calculator hub roots (`/calculators/rpm/`), news articles, and author pages; emit matching BreadcrumbList JSON-LD.
- Effort: **M**

### [IL-8] 115 incomplete hub↔spoke link pairs (silo integrity gaps)
- Severity: **Medium**
- Impact: In a hub-and-spoke silo, each hub should list its spokes and each spoke should link back to its hub. 115 of the parent/child pairs across 32 hub directories are missing one direction, leaving spokes under-linked and hubs not fully consolidating their cluster.
- Evidence: 115 hub/spoke pairs where either the hub does not link the spoke or the spoke does not link the hub (computed on the resolved canonical graph). Contributing causes are **suspected** to overlap with IL-1 (hub→spoke "Open Calculator" CTAs land on double-slash 404s, so the edge doesn't resolve) and one-directional related-content modules. Spoke→hub is generally satisfied where breadcrumbs exist, so the 41 breadcrumb-less pages (IL-7) also feed this count.
- Fix: After fixing IL-1 and IL-7, re-run the hub-spoke check; then add explicit "all articles in this cluster" lists on hub pages and a "part of <hub>" backlink on every spoke. Cross-check against `SEMANTIC_RELATIONSHIPS` in `semantic-links.ts` so the intended graph is what actually renders.
- Effort: **M**

### [IL-9] 2 calculator hub pages are near-orphans (only linked from boilerplate)
- Severity: **Medium**
- Impact: `/calculators/commerce-ads/` and `/calculators/utility-tools/` receive no contextual inbound links — only footer/nav boilerplate — so they get little topical PageRank and read as disconnected mid-level hubs rather than integrated silo nodes.
- Evidence: Both have inbound count > 0 but contextual inbound = 0. `/calculators/commerce-ads/` also sits at depth 4.
- Fix: Link these hubs contextually from the main `/calculators/` hub and from sibling calculators (e.g., shop-profit, ad-cost content) with descriptive anchors.
- Effort: **S**

### [IL-10] Repetitive / exact-match anchor patterns on high-frequency links
- Severity: **Low**
- Impact: A handful of anchors repeat at very high volume with identical text, and several are exact-match calculator names — mild over-optimization risk and reduced anchor diversity, though none are spammy keyword stuffing.
- Evidence: Over-optimized anchor→target pairs (≥30×): "TT Calculator Team"→`/about/` (398×), "View full profile →"→`/about/` (240×, misdirected per IL-5), "TikTok Money Calculator"→`/calculators/tiktok-money/` (122×), "Brand Deal Rate Calculator"→`/calculators/brand-deal-rate/` (91×), "Engagement Rate Calculator"→`/calculators/engagement-rate/` (70×), "RPM Calculator"→`/calculators/rpm/` (46×), plus "Open Calculator" (76×+30×, the broken double-slash pair). Positive: **0 generic anchors** ("click here"/"read more"), **0 bare-URL anchors**, **0 empty anchors** across all contextual links.
- Fix: Diversify the highest-frequency exact-match anchors with natural variants (e.g., "estimate your TikTok earnings", "creator-fund payout calculator"); this is polish, not urgent.
- Effort: **M**

---

## Verified OK

- **No wrong-domain links.** 0 links to `calculatecreator` or any non-`tiktokcalculator.net` internal host — the domain migration held on this axis.
- **No missing-trailing-slash links.** 0 single-segment links lacking a trailing slash that would trigger a Next/Firebase slash-redirect; the trailing-slash convention is applied consistently (the double-slash bug in IL-1 is the inverse problem).
- **No generic or bare-URL anchor text.** 0 "click here" / "read more" / "here" / raw-URL / empty contextual anchors — anchors are descriptive and keyword-relevant throughout.
- **Link volume is healthy.** Only `/sitemap/` exceeds 150 links (298, expected for an HTML sitemap); the only <3-contextual page is the Google verification stub. No content page is over- or under-linked.
- **Calculator hub→spoke silos are largely intact.** Directories like `/calculators/rpm/`, `/calculators/tiktok-creator-fund/`, `/calculators/tiktok-money/`, `/calculators/engagement-rate/`, `/calculators/coins/` correctly interlink hub and spokes and expose correct `aria-label="Breadcrumb"` navs with BreadcrumbList schema on the spoke pages.
- **Semantic-link strategy is rendered, not just declared.** The `SEMANTIC_RELATIONSHIPS` map in `semantic-links.ts` materializes as real contextual links on calculator pages (prerequisite/related/next-step/compare groups) — the only strategy-vs-render mismatch is the redirected `video-performance`/`watch-time` entries (IL-3/IL-4).
- **Median click depth = 2.** The bulk of the site (213 of 354 pages) is within 2 clicks of the homepage; the depth problem is confined to the specific deep clusters in IL-6.

---

## "343 broken links" remediation — did it hold?

**Partially — the two highest-frequency link classes did NOT hold.** Prior commits `dcf248c` ("update 343 broken internal links to canonical URLs") and `c24a26e` ("resolve double-slash URLs and broken internal links") fixed the domain and single-slash issues (0 wrong-domain, 0 missing-slash remain — those held), but:

1. **252 double-slash 404s persist** on the "Open Calculator" CTA (IL-1) — the double-slash remediation regressed or never covered the blog/news/author CTA template.
2. **2,225 links still point at Firebase redirect sources** (IL-2/IL-4), 2,121 of them a site-wide footer that was never repointed to the `/data/*` canonicals.

So the "canonical URL" fix held for the domain rename and slash-normalization but did **not** hold for the site's most-repeated links (the footer hub links and the money CTA). Both remaining classes are single-root-cause (one footer component, one CTA template) and cheap to fully resolve.
