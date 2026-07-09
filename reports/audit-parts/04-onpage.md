# On-Page SEO Audit (Dimension C) — tiktokcalculator.net

Source of truth: built static HTML in `out/` (354 `.html` files parsed). Analysis reflects exactly what Googlebot receives. Indexability derived from `<meta name="robots">` (absent = indexable by default).

- Corpus: **354** HTML pages | **337 indexable** (non-noindex) | **17 noindex**
- Robots-meta distribution: `index,follow` 96 · `noindex`/`noindex,follow`/`noindex,nofollow` 19 · none-present (default index) 239

## On-page stats table

| Dimension | Metric | Value |
|---|---|---|
| **Titles** | Present / missing | 354 / **0** |
| | Length min · avg · max (chars) | 14 · 50.9 · 78 |
| | >60 chars / >70 chars | 9 (2.5%) / 2 |
| | <30 chars | 10 |
| | Exact-duplicate clusters (pages) | 1 (2) — both `/404` variants |
| | Near-duplicate clusters | 3 (minor) |
| | Missing "TikTok" token | 34 |
| **Descriptions** | Present / missing | 353 / **1** (`/google…` verification file) |
| | Length min · avg · max | 103 · 135.2 · 222 |
| | <120 chars / >160 chars | 75 (21.2%) / 8 (2.3%) |
| | Exact-duplicate clusters (pages) | 1 (2) — both `/404` variants |
| | Templated pattern "…with data, benchmarks, and expert analysis" | **151 (42.7%)** |
| **Headings** | Exactly one H1 | 353 (99.7%) |
| | Zero H1 / multiple H1 | 1 / 0 |
| | H1 shares no slug word (indexable) | 1 |
| | Hierarchy skips (suspected) | 34 (33 indexable) |
| **Thin content** | Word count min · median · max | 8 · 1752 · 4186 |
| | Indexable pages <300 words | **1** (`/google…` verification file, 8w) |
| | thin-report pages rendering <300w indexable | 0 |
| **Images** | Total `<img>` / pages with images | 77 / 51 (303 pages have none) |
| | Meaningful alt / empty alt / missing alt | 77 (100%) / 0 / 0 |
| | `loading="lazy"` | 28 (36.4%) |
| | Formats | webp 75 · png 2 (logo) · jpg/svg/gif/avif 0 |
| **Open Graph** | Pages with any OG tag | 353 / 354 |
| | Missing og:image / og:url / og:type | 58 (52 indexable) / 56 (45 indexable) / 1 |
| | Distinct og:image URLs | **1** (generic hero used on 296 pages) |
| **Twitter** | Missing twitter:card / twitter:image | 1 / 4 |
| | Generic `twitter:title` = "TT Calculator" | **110** |
| **Canonical** | Present / missing | 351 / 3 (2×404 + verification file) |

Severity totals: **Critical 0 · High 1 · Medium 3 · Low 6**

---

## Findings

### [OP-1] Templated, auto-generated meta descriptions on 151 pages (43% of site)
- Severity: High
- Impact: Near-identical machine-generated tails suppress SERP CTR and read as programmatically scaled content — a quality-signal risk on an AdSense site.
- Evidence: 151/354 descriptions follow the pattern `"{Title}. {slug words} with data, benchmarks, and expert analysis."` The tail "with data, benchmarks, and expert analysis." repeats verbatim across **>140** pages; a second template "…monetization context, and actionable next steps." adds ~14 more. Examples: `/blog/mrbeast-tiktok-strategy-breakdown/` → "…Mrbeast tiktok with data, benchmarks, and expert analysis." · `/calculators/rpm/increase-tiktok-rpm/` → "How to increase tiktok rpm with data, benchmarks…" · `/guides/business/tiktok-copyright-fair-use/` → "…Tiktok copyright with data, benchmar…". The middle segment is just the lowercased URL slug, so descriptions are keyword-echo, not benefit-led.
- Fix: Replace the templated tail with page-specific value propositions (what the reader gets, one differentiating stat). Prioritize the ~110 blog/calculator/data indexable pages. Target 140–158 chars, unique lead clause per page.
- Effort: L

### [OP-2] og:image missing on 52 indexable pages — including 48 calculator pages
- Severity: Medium
- Impact: Social/AI-surface shares of the core calculator tools render with no preview image, lowering click appeal on the site's most link-worthy pages.
- Evidence: 58 pages have no `og:image`; 52 are indexable, of which **48 sit under `/calculators/`** (e.g. `/calculators/brand-deal-rate/`, `/calculators/coins/`, `/calculators/completion-rate/`, `/calculators/conversion-rate/`) plus 3 `/guides/` and the verification file. The other 296 pages share a single generic image. Also `og:url` missing on 45 indexable pages (`/about/`, `/blog/`, `/contact/`, `/data/`, `/data/earnings/`, `/compliance/*`).
- Fix: Emit a default `og:image` (and `og:url` = canonical) in the shared layout so every page inherits at least the hero; ideally give calculator hubs a category-specific card.
- Effort: M

### [OP-3] 75 meta descriptions under 120 characters (21% of site)
- Severity: Medium
- Impact: Under-uses available SERP width; combined with OP-1 many are both short AND templated, doubling the weakness.
- Evidence: 75/354 descriptions <120 chars (min 103). Examples: `/calculators/rpm/tiktok-cpm-vs-rpm/` [103], `/data/earnings/tiktok-shop-gmv-growth/` [104], `/guides/niches/tech-tiktok-earnings/` [106], `/blog/tiktok-vs-lemon8-creators/` [107]. Most overlap the OP-1 template set.
- Fix: Expand to 140–158 chars while de-templating (fold into OP-1 rewrite pass).
- Effort: M

### [OP-4] Generic Twitter Card metadata on 110 pages
- Severity: Medium
- Impact: X/Twitter (and some AI card renderers) show brand "TT Calculator" + a boilerplate description instead of the page-specific `og:title`, wasting the card's headline slot.
- Evidence: `twitter:title` = "TT Calculator" on **110 pages** (110 twitter:titles <20 chars) while their `og:title` is specific and correct; `twitter:description` is a single generic line ("Creator benchmarks and calculators with transparent assumptions."). Only ~30 newer blog posts set a real `twitter:title`.
- Fix: Default `twitter:title`/`twitter:description` to mirror `og:title`/`og:description` in the layout (remove the hardcoded brand string).
- Effort: S

### [OP-5] Inconsistent brand-suffix handling across titles
- Severity: Low
- Impact: Mixed brand naming ("TikTok Calculator" vs "TT Calculator" vs none) dilutes the brand signal and looks unsystematic in SERPs.
- Evidence: Homepage uses "TikTok Calculator" brand; 16 utility/author titles append "| TT Calculator"; **155 titles carry no `—`/`|` brand suffix at all**; 34 titles omit the "TikTok" token entirely (mostly author/blog/policy pages). Delimiter usage is split between `—` and `|`.
- Fix: Adopt one convention (e.g. `Primary Keyword | TikTok Calculator`), apply consistently to indexable content pages; keep utility pages `Purpose | TikTok Calculator`.
- Effort: M

### [OP-6] Suspected heading-hierarchy skips on 33 indexable pages
- Severity: Low
- Impact: H1→H3 (or H2→H4) jumps weaken document outline semantics for assistive tech and parsers. Low ranking impact.
- Evidence (suspected — level-jump detected from DOM heading order, not each sequence hand-verified): 34 pages flagged, incl. hub pages `/blog/` (h1·20×h2·28×h3), `/calculators/` (h1·4×h2·13×h3), `/calculators/coins/`, `/data/`, and several calculator/blog leaf pages. Given hubs carry many h2+h3, some flags may be false positives from card grids rather than true outline breaks.
- Fix: Verify flagged templates; ensure each h3 is nested under an h2. Prioritize `/calculators/`, `/data/`, `/blog/` hubs.
- Effort: S

### [OP-7] og:url absent on 45 indexable pages
- Severity: Low
- Impact: Missing `og:url` removes an explicit canonical hint for social/AI crawlers; page-level canonical link tags still present so risk is minor.
- Evidence: 56 pages lack `og:url` (45 indexable): `/about/`, `/blog/`, `/contact/`, `/corrections-policy/`, `/data/` + subsections, `/compliance/sponsorship-disclosure/`, `/compliance/advertising-disclosure/`.
- Fix: Populate `og:url` from the canonical in the shared layout (same fix as OP-2).
- Effort: S

### [OP-8] Nine titles exceed 60 characters (2 exceed 70)
- Severity: Low
- Impact: Likely pixel-truncation in SERPs; the homepage tail "[2026]" and desk labels get cut.
- Evidence: Longest — homepage 78 (`TikTok Calculator — Free TikTok Money, Earnings & Engagement Calculator [2026]`), `/authors/emily-thompson/` 75 (noindex), then indexable hubs at 60–65: `/guides/business/` 65, `/guides/growth/` 64, `/guides/monetization-calculator-hub/` 64, `/guides/tiktok-growth-hub/` 63, `/guides/best-shop-niches/` 62.
- Fix: Trim to ≤60 chars, keeping the primary keyword in the leading 55.
- Effort: S

### [OP-9] Author-page title redundancy
- Severity: Low
- Impact: Titles repeat the desk name and brand twice; awkward but low impact since author pages are noindex.
- Evidence: All 6 author titles follow "TT Calculator {X} Desk — {X} Desk | TT Calculator" (e.g. `/authors/alex-martinez/` → "TT Calculator Growth Desk — Growth Desk | TT Calculator"). Their meta descriptions also run 180–222 chars (>160). All are `noindex`.
- Fix: Simplify to "{Name} — {Desk} | TikTok Calculator"; trim descriptions to ≤160. Low priority (noindex).
- Effort: S

### [OP-10] Google verification HTML file is indexable, thin, and metadata-less
- Severity: Low
- Impact: `/google4b06c114ba4c08d7` is the only indexable page that is missing a description, has 0 H1s, 8 words, and no canonical — a stray thin page Google could crawl.
- Evidence: robots not set (defaults indexable); 8 words; no `<title>` keyword value ("Google Site Verification"); no OG image. It is a GSC verification stub, so real-world risk is minimal.
- Fix: Leave as-is (GSC needs it) but confirm it is not in the sitemap; optionally block via robots.txt path rule.
- Effort: S

---

## Verified OK

- **Titles present on 100%** of pages (0 missing/empty); the only exact-duplicate cluster is the two `/404` route variants (both noindex, harmless). Average length 50.9 chars sits in the ideal band; primary keywords are front-loaded on calculator/guide/blog pages.
- **H1 hygiene is excellent**: 353/354 pages have exactly one H1, zero pages have multiple H1s, and 336/337 indexable H1s share the page's primary slug term (only `/guides/niches/` deviates, benignly).
- **Thin content is effectively resolved in the rendered HTML.** Median main-content word count is 1,752; 298/354 pages exceed 1,000 words. Every page flagged in `thin-pages-report.json` (which measured MDX *source* length) renders well above its source count once FAQ/benchmark/related blocks hydrate (e.g. `/data/brand-deal-rates-by-niche/` 441w source → 669w rendered; `/calculators/coins/most-expensive-tiktok-gifts/` 928w → 1,155w). **Zero indexable content pages render <300 words** — the lone sub-300 page is the Google verification stub (OP-10).
- **Image alt-text coverage is 100%** — all 77 `<img>` tags have meaningful, descriptive alt (0 missing, 0 empty). Filenames are descriptive and keyworded (`guide-monetization-1024.webp`, `news-safety-1024.webp`).
- **Image formats are modern**: 75/77 webp with responsive size variants (640/1024/1600); the only 2 non-webp are the PNG logo. Because `images.unoptimized` is on (Next optimization off), assets are hand-pre-sized webp rather than runtime-optimized — impact is low here since files are already compact webp with width variants, though `loading="lazy"` is only on 28/77 (36%), so above-the-fold gains are being left on the table on image-heavy hub pages.
- **Open Graph coverage is broad**: 353/354 pages carry OG tags with valid `og:type`, and `og:image:width/height` correctly declared 1200×630. (Note: the single shared image is `hero-dashboard-1600.webp` — filename suggests 1600px while dims are declared 1200×630; suspected harmless but worth a visual check.)
- **Twitter Card type** is set on 353/354 (`summary_large_image`) and `twitter:image` present on 350.
- **Canonical coverage** is 351/354; the 3 gaps are the two 404 variants and the verification stub (all non-content).
