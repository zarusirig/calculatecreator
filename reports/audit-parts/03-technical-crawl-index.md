# Technical SEO / Crawlability / Indexation Audit (Dimension B)

**Site:** tiktokcalculator.net (Next.js 14 static export, Firebase Hosting behind Fastly/Cloudflare)
**Audit date:** 2026-07-09
**Method:** Local analysis of `out/` (354 HTML files), `public/sitemap.xml` (333 `<loc>`), `firebase.json`, `public/robots.txt` + `public/sw.js`, cross-checked with live `curl -sI` against production.

## Summary of severity counts
- Critical: 0
- High: 0
- Medium: 2
- Low: 6

## Scope reconciliation (facts established)
- **HTML files in `out/`:** 354 = 352 index-page routes + `404.html` + `google4b06c114ba4c08d7.html` (Search Console verification file).
- **Redirect rules in `firebase.json`:** **96** (not 107). The 107 figure counts 96 redirects + 11 `headers` source blocks. `node scripts/check-redirect-chains.js` confirms `Checked 96 redirect rules`.
- **Sitemap `<loc>`:** 333, all `https://tiktokcalculator.net/...`, all trailing-slash, 0 duplicates, 0 wrong-domain.
- **Parity math reconciles cleanly:** 352 routes − 16 `noindex` − 3 redirect-shadowed indexable pages = **333 = sitemap count.**

---

## Findings

### [TECH-1] Redirect chain: 2-hop 301 (A→B→C)
- Severity: Medium
- Impact: Wastes crawl budget and leaks a little link equity on every hit; the intermediate URL `/guides/why-tiktok-earnings-low/` is both a redirect target AND a redirect source.
- Evidence: `scripts/check-redirect-chains.js` flags rule 36. Confirmed LIVE:
  - `/guides/low-tiktok-earnings/` → 301 → `/guides/why-tiktok-earnings-low/` (rule 36)
  - `/guides/why-tiktok-earnings-low/` → 301 → `/calculators/tiktok-money/why-tiktok-earnings-low/` (rule 94)
  - Final target returns HTTP 200. Full chain length = 2 hops. Only chain in the file; 0 loops.
- Fix: In `firebase.json`, repoint rule 36 destination directly to the final target `/calculators/tiktok-money/why-tiktok-earnings-low/` so it is a single hop.
- Effort: S

### [TECH-2] Author pages are `noindex, nofollow` and the `/authors/` hub 404s
- Severity: Medium
- Impact: E-E-A-T author entities are invisible to search. Article bylines link to author pages that are non-indexable, and the parent hub returns 404, so authorship signals cannot be crawled or attributed.
- Evidence: 6 author pages exist in `out/authors/` (alex-martinez, david-kim, emily-thompson, jessica-rodriguez, michael-chen, sarah-johnson), each carrying `<meta name="robots" content="noindex, nofollow"/>`. No `out/authors/index.html` exists → LIVE `curl -sI https://tiktokcalculator.net/authors/` returns **HTTP/2 404**. `/authors/` is absent from the sitemap.
- Fix: Decide the author strategy. If authors are real E-E-A-T signals, make individual author pages `index, follow`, build an `/authors/` hub page, and add both to the sitemap. If authors are not to be exposed, remove the byline links to avoid `nofollow`/404 dead-ends. At minimum, stop 404-ing `/authors/`.
- Effort: M

### [TECH-3] 4 redirect sources shadow real built pages (dead build artifacts)
- Severity: Low
- Impact: These pages are fully built into `out/` yet are permanently unreachable because Firebase redirects fire before static files are served. They are wasted build output and a sign of config drift; correctly excluded from the sitemap so no indexing harm, but they should not exist in the build.
- Evidence: 4 redirect source paths also exist as `index.html` in `out/` (redirect wins on live, confirmed):
  - `/tools/` (built, `noindex,follow`) — 301 → `/calculators/` (LIVE confirmed)
  - `/calculators/video-performance/` — 301 → `/calculators/viral-potential/` (LIVE confirmed)
  - `/calculators/watch-time/` — 301 → `/calculators/completion-rate/` (LIVE confirmed)
  - `/blog/tiktok-vs-youtube-shorts-earnings-2026/` — 301 → `/data/platform-comparisons/`
- Fix: Remove these 4 routes from the Next.js source/build so `out/` doesn't ship pages that are immediately redirected. Keeps build ↔ redirect config consistent.
- Effort: S

### [TECH-4] `sw.js` served with 1-year immutable Cache-Control
- Severity: Low
- Impact: The service worker script is cached `public, max-age=31536000, immutable`. HTTP-cache-level SW update starvation; clients can be slow to pick up a changed SW (browsers do re-check the SW byte-for-byte ~every 24h per spec, which limits the damage, but the header is still wrong for a SW).
- Evidence: `firebase.json` header rule `**/*.@(css|js)` matches `sw.js`. LIVE `curl -sI /sw.js` → `cache-control: public, max-age=31536000, immutable`.
- Fix: Add an explicit header rule for `sw.js` with `Cache-Control: public, max-age=0, must-revalidate` (or `no-cache`) ahead of the generic `*.js` rule.
- Effort: S

### [TECH-5] Weak Content-Security-Policy (no `default-src`, `object-src`, or `base-uri`)
- Severity: Low
- Impact: The CSP only constrains `script-src` and `frame-src`; with no `default-src` fallback, `img-src`, `style-src`, `connect-src`, `object-src`, `base-uri`, and `form-action` are unrestricted. `script-src` also allows `'unsafe-inline'` and `'unsafe-eval'`, materially weakening XSS mitigation. Not a ranking blocker, but a real hardening gap.
- Evidence: LIVE header: `content-security-policy: frame-src 'self' https://googleads... ; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2... https://www.googletagmanager.com https://www.google-analytics.com`. No other directives present.
- Fix: Add `default-src 'self'`, `object-src 'none'`, `base-uri 'self'`, and explicit `img-src`/`style-src`/`connect-src` allowlists. Consider nonce/hash-based scripts to drop `'unsafe-inline'`/`'unsafe-eval'` where GTM/AdSense allow.
- Effort: M

### [TECH-6] Uniform `lastmod` across the sitemap (weak freshness signal)
- Severity: Low
- Impact: 332 of 333 URLs carry the identical `lastmod` 2026-03-18 (1 URL = 2026-03-19). Bulk-identical dates tell Google the field is a build timestamp, not a real content-change signal, so it gets discounted.
- Evidence: `grep <lastmod>` → `332 × 2026-03-18`, `1 × 2026-03-19`. (Dates are in the past relative to today 2026-07-09 — no future-dating problem.)
- Fix: Derive `lastmod` per-URL from actual content/file modification time in `scripts/generate-sitemap.js` rather than stamping the build date on every entry.
- Effort: S

### [TECH-7] `**/*.html` cache rule never matches clean URLs; `/` served on CDN default
- Severity: Low
- Impact: The `**/*.html` → `max-age=0, must-revalidate` header rule is effectively dead because live page URLs are clean (`/`, `/calculators/`) with no `.html` suffix, so Firebase never matches them against it. The homepage `/` matches none of the section rules either and falls back to the CDN default `max-age=3600`, meaning a homepage edit can be served stale for up to an hour.
- Evidence: LIVE `/` → `cache-control: max-age=3600` (no rule matched). Section rules DO work: `/calculators/` and `/guides/...` → `public, max-age=86400, must-revalidate`; static assets → `immutable`. So only the root/top-level clean URLs are affected.
- Fix: Add an explicit header rule for `/` (and any other top-level clean URLs) with the intended HTML caching policy, or accept the 1h default. Low priority.
- Effort: S

### [TECH-8] 6 localized `/calculator/{de,es,fr,it,my,pt-br}/` pages are `noindex` — verify intent
- Severity: Low
- Impact: Localized calculator variants ship as `noindex, follow`. If these are meant to capture non-English search demand they are being suppressed; if they are placeholder/duplicate shells, `noindex` is correct but they add crawl surface. Note this is the singular `/calculator/` tree (distinct from the canonical `/calculators/` tree; `/calculator{,/}` itself 301s to `/calculators/`).
- Evidence: `out/calculator/{de,es,fr,it,my,pt-br}/index.html` each carry `<meta name="robots" content="noindex, follow"/>`. Absent from sitemap (correct given noindex).
- Fix: Decide localization strategy. If pursuing i18n, translate content, add `hreflang` alternates, make them `index`, and add to sitemap. Otherwise leave as-is or remove.
- Effort: M

---

## Verified OK

**robots.txt** (`public/robots.txt` == `out/robots.txt` == LIVE, byte-identical):
- Sitemap directive points to the correct domain: `Sitemap: https://tiktokcalculator.net/sitemap.xml`.
- `_next/` explicitly `Allow`ed → JS/CSS crawlable, no render-blocking.
- `ads.txt` allowed; `out/ads.txt` present (59 bytes).
- `Disallow: /api/ /admin/ /tmp/` are harmless — none of those paths exist in the build (`out/api`, `out/admin`, `out/tmp` all absent), and none shadow real content.
- No unintended blocks of any indexable section.

**Canonicalization** (all 352 index-page routes parsed):
- 352/352 have a `<link rel="canonical">` that is absolute, correct domain (`tiktokcalculator.net`), trailing-slash consistent, and **self-referential** (0 wrong-direction, 0 wrong-domain, 0 non-self-referential).
- Only `/404/` lacks a canonical — correct.
- **Zero residual `calculatecreator.com`** URLs anywhere in `out/*.html` or the sitemap. Zero `http://` (non-HTTPS) canonicals. (Note: the helper `verify-canonicals.js` hardcodes the OLD wrong domain `https://calculatecreator.com` as its "expected" value — the script is stale, but the actual rendered canonicals are correct. Consider updating the script to avoid confusion.)

**Sitemap ↔ build parity:**
- 0 sitemap URLs point to a missing/404 built page (every `<loc>` resolves to a real `out/` route).
- 3 built indexable pages are absent from the sitemap — all 3 are intentionally redirect-shadowed (see TECH-3); correct to omit.
- 333 `<loc>`, all correct domain, all trailing-slash, 0 duplicates, 0 wrong-domain.
- `priority` (0.2–1.0, 6 at 1.0) and `changefreq` (weekly/monthly dominant, sane) distributions are reasonable. Served LIVE as `application/xml`, HTTP 200, `cache-control: public, max-age=86400`.

**Redirects (96 rules):**
- 0 destinations 404 — every redirect target resolves to a built 200 page (or a further redirect that resolves).
- 0 loops. 0 real duplicate sources (the checker's `{,/}` expansion produces no cross-rule collisions).
- Spot-checked LIVE and confirmed 301: `/tools/`→`/calculators/`, `/calculators/watch-time/`→`/calculators/completion-rate/`, `/comparisons/`→`/data/platform-comparisons/`, plus the TECH-1 chain.

**Indexation / 404 handling:**
- 16 `noindex` pages, all appropriate utility/thin/duplicate types: `/404/`, `/search/`, `/bookmarks/`, `/tools/`, 6 authors, 6 localized `/calculator/*/`. No important calculator/guide/news/data page carries `noindex`.
- Hard 404s: LIVE `curl -sI` on a nonexistent URL returns **HTTP/2 404** (`content-type: text/html`) — no soft-404 risk on this static host.
- `out/404.html` present (42 KB, styled).

**Mobile / headers (LIVE-confirmed on `/`):**
- `<meta name="viewport">` present on 352/352 pages.
- Security headers all present: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- Section cache headers correct: `calculators/**` & `guides/**` = `max-age=86400, must-revalidate`; `news/**` = 3600; static assets = 1yr immutable.

**Service worker (`public/sw.js`):** Sane — GET-only, network-first for HTML/API with cache fallback, cache-first for style/script/image/font, cleans up stale caches on activate. Only concern is its cache header (TECH-4), not its logic.
