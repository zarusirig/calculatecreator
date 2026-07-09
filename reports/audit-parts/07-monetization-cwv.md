# Audit Part 07 — Monetization / AdSense, Core Web Vitals / Performance, Trust / E-E-A-T

Scope: dimension G (AdSense compliance) + performance/CWV + Trust/E-E-A-T.
Method: static analysis of `out/` build (354 files) + `src/` components + `firebase.json`, plus live `curl` checks against `https://tiktokcalculator.net`. CWV items are **lab/heuristic** (no CrUX/PSI field data available without GSC/PSI access). Date of live checks: 2026-07-09.

---

## Summary counts by severity
- Critical: 0
- High: 3  (MON-1 CSP gap, MON-2 non-certified CMP, PERF-1 Google Fonts @import)
- Medium: 3  (PERF-2 JS weight, PERF-3 HTML payload weight, EEAT-1 empty sameAs / generic author)
- Low: 4  (MON-3 AdUnit gating inconsistency, MON-4 ads inactive-state note, PERF-4 1.46MB PNG, PERF-5 service worker unverified)

---

## AdSense compliance status vs ADSENSE_AUDIT.md

`ADSENSE_AUDIT.md` was written for the **old domain `calculatecreator.com`**; the live site is now `tiktokcalculator.net`. Every P0/P1 item it lists is now resolved in code/build, with the domain migration also carried through (ads.txt, robots.txt, sitemap all reference `tiktokcalculator.net`).

| ADSENSE_AUDIT.md item | Status now | Evidence |
|---|---|---|
| P0-1 X-Frame-Options DENY blocked ad iframes | **RESOLVED** | `firebase.json` + live header `x-frame-options: SAMEORIGIN` |
| P0-1 CSP frame-src for Google ad domains | **RESOLVED** | live `content-security-policy: frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com` |
| P0-2 Privacy policy advertising disclosures | **RESOLVED (present)** | `out/privacy/`, `/compliance/advertising-disclosure/` built |
| P0-3 Insufficient blog content | **RESOLVED (present)** | `out/blog/` built with multiple posts |
| P0-4 Missing editorial policy | **RESOLVED** | `out/editorial-policy/` built |
| P0-5 Missing ads.txt / placeholder pub ID | **RESOLVED** | `public/ads.txt` = real ID; live `https://tiktokcalculator.net/ads.txt` returns `google.com, pub-6191764023643150, DIRECT, f08c47fec0942fa0` |
| P1-6 Thin calculator pages | **RESOLVED (present)** | ToolExplanationSection referenced in tool template |
| P1-7 Advertising disclosure page | **RESOLVED** | `/compliance/advertising-disclosure/` built + `firebase.json` redirect |
| P2-9 Ad infra scaffolded, activate after approval | **PARTIAL / IN PLACE** | `src/components/ads/*`, `src/lib/ads/config.ts`, CMP loads AdSense script post-consent |

**Consent/CMP:** A consent mechanism EXISTS (`src/components/consent/CookieConsent.tsx`, rendered in `src/app/layout.tsx:107`). It implements Google **Consent Mode v2** correctly (default `ad_storage`/`ad_user_data`/`ad_personalization`/`analytics_storage` gated on user choice) and only loads `adsbygoogle.js` + GA after the user interacts with the banner. **However it is a homegrown banner, not a Google-certified / IAB-TCF CMP** — see MON-2.

**Current ad-render state:** Ads are effectively **not displaying**. `AdPlacement` reads slot IDs from `NEXT_PUBLIC_ADS_SLOT_*` env vars which are unset (no `.env.production`), so every placement returns `null`; the built HTML contains **zero `<ins class="adsbygoogle">` units** (confirmed: 0 "Advertisement" labels / 0 `adsbygoogle` in `out/index.html` and `out/calculators/tiktok-money/index.html`). `adsbygoogle.js` itself still loads client-side after consent, so only AdSense **Auto Ads** (if enabled dashboard-side) could inject units. This means "thin content + ads" policy exposure is **currently LOW** (no manual ads on tool pages), but will need re-review the moment slot IDs are set — see MON-4.

---

## Performance measurements (lab / static)

**Largest JS chunks in `out/_next/static` (uncompressed, from `ls`):**
| Size | File |
|---|---|
| 168.8 KB | `chunks/fd9d1056-073f24e866606768.js` (loaded in homepage `<head>`) |
| 136.7 KB | `chunks/framework-a63c59c368572696.js` |
| 121.5 KB | `chunks/2117-55c647be82025ccf.js` (loaded in homepage `<head>`) |
| 118.1 KB | `chunks/main-ed0b2466cdf1c257.js` |
| 110.0 KB | `chunks/polyfills-42372ed130431b0a.js` (legacy polyfills) |
| 45.9 KB | `chunks/1149-29fbb9a326fa5ea7.js` |
| 36.7 KB | `chunks/app/calculators/utility-tools/payout/page-….js` |
| 32.4 KB | `chunks/app/calculator/es/page-….js` |
| 31.7 KB | `chunks/app/calculators/utility-tools/eligibility/page-….js` |
| 16.9 KB | `chunks/app/layout-7265a92a5e592fae.js` (contains hardcoded AdSense pub ID + GA `G-KNN9QW52GQ`) |

- **Total JS in `out/_next`: 1,654 KB across 203 files** (uncompressed).
- **Homepage first-load shared JS** (scripts injected in `<head>`: fd9d1056 + 2117 + 2972 + main-app + framework + main + polyfills + layout + page + webpack) ≈ **~700 KB uncompressed** before route-specific code (~200–250 KB gzipped, heuristic estimate). Interactive calculator route chunks add 15–37 KB each on top.
- **CSS: single `out/_next/static/css/c1f1fb551271b8e9.css` = 110.9 KB** (uncompressed), render-blocking `<link rel="stylesheet">`.

**HTML page weights (live curl):**
- Homepage `/`: **151.5 KB** HTML.
- Calculator page `/calculators/tiktok-money/`: **365.7 KB** HTML.
- Both are inflated by inline JSON-LD schema blocks + the React Server Component flight payload (`self.__next_f`) which duplicates rendered content in the HTML (heuristic — split not fully quantified).

**Hero / image assets (`out/home/`):**
| Size | File | Note |
|---|---|---|
| **1,489.8 KB** | `hero-dashboard.png` | raw PNG, **suspected unreferenced** (see PERF-4) |
| 77.0 KB | `hero-dashboard-1920.webp` | responsive variant |
| 61.7 KB | `hero-dashboard-1600.webp` | used only in OG/Twitter meta |
| 42.7 KB | `calculator-interface-1920.webp` | responsive variant |
| 0.6 KB | `hero-dashboard-tiny.jpg` | blur-up placeholder |
| 65.5 KB | `out/images/tt-calculator-logo.png` | only raster in `out/images` |

**Key structural finding for CWV:** The homepage and the sampled calculator page render **zero `<img>` elements** (0 `<img>` in live HTML; the `width=`/`height=` counts are inline SVG icon attributes). A full responsive AVIF/WebP set (640–1920) exists for `hero-dashboard` and `calculator-interface`, but the pages don't actually mount them as content images. **The LCP element on both page types is therefore text (the H1 / hero heading), not an image** — which is good for LCP and means `images.unoptimized: true` has little runtime impact on these templates.

**Caching headers (`firebase.json`, confirmed live):** `_next/static/**`, css/js, images, fonts all `Cache-Control: public, max-age=31536000, immutable` — correct. `calculators/**` & `guides/**` `max-age=86400`, `news/**` `3600`. Security headers present live (HSTS preload, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy). Note: live `/` returned `cache-control: max-age=3600` (served via Cloudflare in front of Firebase; the `**/*.html` `max-age=0` rule doesn't match the root path).

---

## Findings

### [MON-1] CSP `script-src` / `frame-src` too narrow for AdSense runtime domains
- Severity: High
- Impact: revenue-policy — blocked ad fraud/quality scripts and iframes can suppress fill and throw console CSP violations once ads serve.
- Evidence: live+`firebase.json` CSP = `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com`. AdSense at runtime pulls scripts from `adservice.google.com`, `partner.googleadservices.com`, and `ep1/ep2.adtrafficquality.google` (spam/fraud detection), and frames from `ep2.adtrafficquality.google` / `fundingchoicesmessages.google.com` — **none are whitelisted**. `frame-src` only lists `googleads.g.doubleclick.net`, `tpc.googlesyndication.com`, `www.google.com`.
- Fix: extend `script-src` with `https://adservice.google.com https://partner.googleadservices.com https://*.adtrafficquality.google`, extend `frame-src` with `https://*.adtrafficquality.google https://fundingchoicesmessages.google.com`, and add `googletagmanager`/`google-analytics` to `img-src`/`connect-src` if those directives are later added. (Currently no `default-src`/`connect-src`/`img-src` directives exist, so network/img/xhr are unrestricted — only `script-src` and `frame-src` bite.)
- Effort: S

### [MON-2] Consent uses a homegrown banner, not a Google-certified / IAB-TCF CMP
- Severity: High
- Impact: revenue-policy — Google AdSense **requires a Google-certified CMP** for serving personalized/non-personalized ads to EEA/UK/Switzerland users; a non-certified banner risks ad-serving suspension for that traffic.
- Evidence: `src/components/consent/CookieConsent.tsx` is a custom two-button banner ("Accept all" / "Reject personalized ads"). It correctly sets Consent Mode v2 defaults and toggles `adsbygoogle.requestNonPersonalizedAds`, but there is **no IAB TCF v2.2 `__tcfapi` integration and no certified-CMP vendor** (no Google Funding Choices, Cookiebot, Quantcast, etc.).
- Fix: replace or wrap with a Google-certified CMP (e.g. Google's own Funding Choices / Privacy & messaging, or a certified vendor) before enabling ads for EEA traffic; keep the existing Consent Mode v2 wiring as the signal layer.
- Effort: M

### [MON-3] Two divergent ad components; `AdUnit` bypasses the global enable flag
- Severity: Low
- Impact: revenue-policy / correctness — risk of ads rendering without the intended master switch, and duplicated/hardcoded publisher ID.
- Evidence: `src/components/ads/AdSlot.tsx` gates on `ADS_CONFIG.enabled && ADS_CONFIG.clientId` and reads client ID from env. `src/components/ads/AdUnit.tsx` (the one actually used by `AdPlacement` → `ToolPageTemplate`, `ArticleLayout`) **hardcodes `data-ad-client="ca-pub-6191764023643150"` and never checks `ADS_CONFIG.enabled`** — it renders whenever a slot env var is set. So the only gate for live ads is "is `NEXT_PUBLIC_ADS_SLOT_*` set", not the documented `NEXT_PUBLIC_ADS_ENABLED` master switch.
- Fix: consolidate on one component; make `AdUnit` also respect `ADS_CONFIG.enabled` and read the client ID from `ADS_CONFIG.clientId` instead of a hardcoded literal.
- Effort: S

### [MON-4] Ad infrastructure present but inactive; re-audit density when slots are enabled
- Severity: Low
- Impact: revenue-policy — informational; guards against future "ads-heavy / thin content" exposure.
- Evidence: built HTML has 0 `<ins adsbygoogle>` units; `NEXT_PUBLIC_ADS_SLOT_*` unset so `AdPlacement` returns `null` everywhere. `AdPlacement` policy map is sound (ads excluded on trust/legal/utility routes; tool routes get `above-tool`+`below-tool`, articles get `mid-article`/`sidebar`/`footer`). When slots go live, tool pages will sandwich an interactive calculator between two ad units — verify each such page still carries the ToolExplanationSection body so it isn't "widget + 2 ads + little text".
- Fix: before activation, add slot IDs, confirm ≤ policy-reasonable ad density, and spot-check that tool pages meet content-depth after ads are inserted.
- Effort: S

### [PERF-1] Web fonts loaded via CSS `@import` from Google Fonts — render-blocking, no preconnect, 3 families
- Severity: High
- Impact: CWV — hurts LCP (render-blocking dependency chain) and CLS (FOUT swap across 3 families). **Lab/heuristic.**
- Evidence: `src/styles/globals.css:1` = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:...;700&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap')`. `@import` inside the CSS bundle is discovered only *after* the 110.9 KB CSS downloads, serializing the request chain to `fonts.googleapis.com` then `fonts.gstatic.com`. **No `<link rel="preconnect">` to `fonts.gstatic.com`, no font self-hosting** (0 `.woff*` files in `out/`). `display=swap` avoids FOIT but causes a visible swap/reflow (CLS) once the 3 families load, and the H1 hero text (the LCP element) is exactly what swaps.
- Fix: self-host the fonts (or use `next/font` which inlines + preloads + `size-adjust` to kill FOUT/CLS), or at minimum move to `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` + `<link rel="stylesheet">` in `<head>` instead of CSS `@import`, and trim weights to those actually used.
- Effort: M

### [PERF-2] Large uncompressed JS payload incl. 110 KB legacy polyfills
- Severity: Medium
- Impact: CWV — TBT/INP and hydration cost, especially on interactive calculator pages. **Lab/heuristic.**
- Evidence: ~700 KB uncompressed shared JS on homepage first load (fd9d1056 168.8 KB + framework 136.7 KB + main 118.1 KB + 2117 121.5 KB + polyfills 110.0 KB + …); total `out/_next` JS 1,654 KB / 203 files. `polyfills-….js` = **110.0 KB** shipped to all browsers including modern ones. Calculator routes add 15–37 KB of route-specific hydration JS on top.
- Fix: verify `browserslist` targets modern browsers so Next drops the legacy polyfill chunk; audit `2117` and `fd9d1056` shared chunks for heavy libs that could be dynamically imported; ensure calculators hydrate only the interactive island rather than the whole page.
- Effort: M

### [PERF-3] Very large static HTML payloads (365 KB calculator page)
- Severity: Medium
- Impact: CWV — larger transfer + main-thread HTML/RSC parse before hydration. **Lab/heuristic.**
- Evidence: live `/calculators/tiktok-money/` HTML = **365.7 KB**; homepage = 151.5 KB. Inflation is driven by inline JSON-LD schema blocks plus the RSC flight payload (`self.__next_f`) that duplicates the rendered DOM content inside the HTML (split not fully quantified — heuristic).
- Fix: confirm gzip/brotli is active at the edge (Cloudflare/Firebase) — brotli would cut this ~4–5×; trim redundant/duplicate JSON-LD (e.g. multiple schema graphs), and reduce per-page schema to what earns rich results.
- Effort: M

### [PERF-4] 1.46 MB raw `hero-dashboard.png` deployed, suspected unreferenced
- Severity: Low
- Impact: CWV/deploy hygiene — wasted deploy bytes; a latent LCP risk if any template ever points at the raw PNG (because `images.unoptimized: true` gives no automatic responsive/webp fallback).
- Evidence: `out/home/hero-dashboard.png` = **1,489.8 KB**. Live homepage HTML references only `hero-dashboard-1600.webp` (in OG/Twitter meta) and renders no `<img>`; a grep of the live homepage for `hero-dashboard.png` returned nothing. **Suspected unreferenced** (not exhaustively confirmed across all 354 pages).
- Fix: confirm no template references the raw PNG; if unused, delete it from `public/home/` so it stops shipping. If it is used anywhere, swap to the existing AVIF/WebP responsive set.
- Effort: S

### [PERF-5] Service worker present; caching strategy not verified
- Severity: Low
- Impact: CWV/freshness — a stale-serving SW can mask deploys or serve outdated ad/consent code. **Content not read this pass.**
- Evidence: `public/sw.js` (2,912 bytes) shipped to `out/sw.js`; registered `afterInteractive` in `src/app/layout.tsx:84`. Registration is fine; the cache strategy (cache-first vs network-first, versioning/skipWaiting) was not inspected in this pass.
- Fix: verify the SW uses network-first (or versioned cache-busting) for HTML so users get fresh content after deploys, and that it never caches the AdSense/consent scripts.
- Effort: S

### [EEAT-1] Organization `sameAs` is empty and layout author is a generic brand string
- Severity: Medium
- Impact: trust / E-E-A-T — weak entity verification for YMYL-adjacent creator-earnings content; no author-as-person signals.
- Evidence: homepage Organization JSON-LD has `"sameAs":[]` (no social/entity links). `src/app/layout.tsx` metadata `authors: [{ name: 'TT Calculator' }]`, `creator`/`publisher` = "TT Calculator" — brand-level, not a named person with credentials. (An `out/authors/` directory and EEAT components exist — AuthorBio, ReviewBadge, ContentFreshness — so per-page author entities may be richer; not fully verified this pass.)
- Fix: populate Organization `sameAs` with real profiles (TikTok, LinkedIn, X, Wikidata/Crunchbase if any); ensure article/tool bylines resolve to real Person entities with credentials + `sameAs`, and that those persons are the ones referenced in JSON-LD `author`/`reviewedBy`.
- Effort: M

---

## Verified OK
- **ads.txt correct & live**: `google.com, pub-6191764023643150, DIRECT, f08c47fec0942fa0` served at `https://tiktokcalculator.net/ads.txt` and present in `out/ads.txt` (real publisher ID, not the old placeholder).
- **X-Frame-Options** now `SAMEORIGIN` (live header) — the P0 iframe blocker from ADSENSE_AUDIT.md is fixed.
- **CSP frame-src** permits the core Google ad frame domains (doubleclick, tpc.googlesyndication, google.com) — live confirmed.
- **Consent Mode v2** wired correctly: defaults denied, granted only on accept; `requestNonPersonalizedAds` toggled on reject; AdSense/GA scripts load `afterInteractive` **only after** a consent choice (privacy-forward).
- **Ad CLS design is sound**: `AdUnit`/`AdSlot` reserve space via `minHeight` (100–250 px) and an "Advertisement" label, and are excluded on trust/legal/utility routes and inside interactive tool containers.
- **LCP is text, not image** on homepage + calculator pages (0 `<img>` rendered) — avoids image-LCP cost despite `images.unoptimized`.
- **Responsive AVIF/WebP image set** (640/1024/1600/1920) exists for hero + calculator-interface, ready if images are mounted.
- **Static-asset caching** is best-practice: `_next/static/**`, js/css, images, fonts all `max-age=31536000, immutable`; HTML `max-age=0/3600, must-revalidate`.
- **Security headers** present live: HSTS (`preload`), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- **CWV monitoring** present (`src/components/performance/WebVitals.tsx` mounted in layout).
- **Full trust/policy suite built**: `out/about`, `contact`, `privacy`, `terms`, `editorial-policy`, `corrections-policy`, `sources-policy`, `methodology`, `authors`, `faq`, `glossary`, `compliance/advertising-disclosure`.
- **E-E-A-T component library present**: `AuthorBio`, `Citations`, `ContentFreshness`, `Disclaimer`, `ReviewBadge`, `TrustBadges`, `VerificationBadge` (`src/components/eeat/`) + `src/lib/eeat/page-eeat.tsx`, supporting a "last updated / reviewed by" pattern.
- **TikTok non-affiliation disclaimer** added (footer/homepage/privacy per recent commit) — good trust signal for a third-party creator-tools site.
