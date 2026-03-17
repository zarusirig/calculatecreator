# URL Consolidation: 31 Sections to 5 Content Roots

**Date:** 2026-03-18
**Status:** Phase 1 Complete (301 redirects added to firebase.json)

---

## Summary

Added 33 new 301 redirects to `firebase.json` to consolidate 9 orphan/duplicate top-level sections into the 5 content roots (`/calculators/`, `/guides/`, `/data/`, `/news/`, `/blog/`). Also updated 5 pre-existing redirects that pointed to now-redirected intermediate destinations (avoiding redirect chains).

**Total redirects in firebase.json:** 74 (was 41, added 33 new)

---

## Sections Redirected (301s added)

### /comparisons/ (8 redirects) --> /data/platform-comparisons/
- `/comparisons/` --> `/data/platform-comparisons/`
- `/comparisons/tiktok-vs-youtube-earnings/` --> `/data/platform-comparisons/tiktok-vs-youtube-earnings/`
- `/comparisons/tiktok-vs-instagram/` --> `/data/platform-comparisons/tiktok-vs-instagram/`
- `/comparisons/tiktok-vs-instagram-income/` --> `/data/platform-comparisons/tiktok-vs-instagram-income/`
- `/comparisons/creator-fund-vs-brand-deals/` --> `/data/platform-comparisons/creator-fund-vs-brand-deals/`
- `/comparisons/creator-fund-vs-youtube/` --> `/data/platform-comparisons/creator-fund-vs-youtube/`
- `/comparisons/tiktok-live-vs-youtube-live/` --> `/data/platform-comparisons/tiktok-live-vs-youtube-live/`
- `/comparisons/tiktok-shop-vs-amazon/` --> `/data/platform-comparisons/tiktok-shop-vs-amazon/`

**Decision:** Redirected to `/data/platform-comparisons/` (not `/data/comparisons/`) because `/data/platform-comparisons/` already exists with its own page.tsx and catch-all slug routing. No `/data/comparisons/` directory exists.

### /reference/ (7 redirects) --> /data/reference/
- `/reference/` --> `/data/reference/`
- `/reference/creator-fund-countries/` --> `/data/reference/creator-fund-countries/`
- `/reference/creator-fund-eligible-countries/` --> `/data/reference/creator-fund-countries/` (was already redirected to `/reference/creator-fund-countries/`, now goes direct)
- `/reference/creator-fund-payment-schedule/` --> `/data/reference/creator-fund-payment-schedule/`
- `/reference/live-gifts-value-chart/` --> `/data/reference/live-gifts-value-chart/`
- `/reference/shop-commission-rates/` --> `/data/reference/shop-commission-rates/`
- `/reference/shop-payment-schedule/` --> `/data/reference/shop-payment-schedule/`
- `/reference/tiktok-shop-payment-schedule/` --> `/data/reference/shop-payment-schedule/` (was already redirected to `/reference/shop-payment-schedule/`, now goes direct)

### /niches/ (4 redirects) --> /guides/niches/
- `/niches/` --> `/guides/niches/`
- `/niches/beauty-earnings/` --> `/guides/niches/beauty-earnings/`
- `/niches/finance-earnings/` --> `/guides/niches/finance-earnings/`
- `/niches/fitness-earnings/` --> `/guides/niches/fitness-earnings/`

### /metrics/ (3 redirects) --> /data/engagement/
- `/metrics/` --> `/data/engagement/`
- `/metrics/comments-to-likes-ratio/` --> `/data/engagement/comments-to-likes-ratio/`
- `/metrics/tiktok-comments-to-likes-ratio/` --> `/data/engagement/comments-to-likes-ratio/` (was redirecting to `/metrics/comments-to-likes-ratio/`, now goes direct)

### /advanced/ (3 redirects) --> /guides/business/
- `/advanced/` --> `/guides/business/`
- `/advanced/creator-tax-deductions/` --> `/guides/business/creator-tax-deductions/`
- `/advanced/creator-tax-deductions-guide/` --> `/guides/business/creator-tax-deductions/` (was redirecting to `/advanced/creator-tax-deductions/`, now goes direct)

### /resources/ (3 redirects) --> /guides/business/
- `/resources/` --> `/guides/business/`
- `/resources/brand-deal-contract/` --> `/guides/business/brand-deal-contract/`
- `/resources/brand-deal-contract-template/` --> `/guides/business/brand-deal-contract/` (was redirecting to `/resources/brand-deal-contract/`, now goes direct)

### /benchmarks/ (1 redirect) --> /data/
- `/benchmarks/` --> `/data/`

**Note:** `/data/benchmarks/` does not exist yet. Redirecting to `/data/` hub for now. When a `/data/benchmarks/` page is created, update the redirect destination.

### /region/ (1 redirect) --> /data/earnings/
- `/region/` --> `/data/earnings/`

### /calculator/ singular (1 redirect) --> /calculators/
- `/calculator/` --> `/calculators/`

**Note:** The i18n sub-paths (`/calculator/de/`, `/calculator/es/`, etc.) are NOT redirected. They still serve as i18n calculator pages. Only the bare `/calculator/` path redirects. Long-term, consider moving i18n to `/calculators/de/`, `/calculators/es/`, etc.

### Updated existing redirect (1 redirect)
- `/blog/tiktok-vs-youtube-shorts-earnings-2026/` --> `/data/platform-comparisons/tiktok-vs-youtube-earnings/` (was pointing to `/comparisons/...` which is now itself redirected)

---

## Sections KEPT (no redirect needed)

### 5 Content Roots
| Section | Status |
|---------|--------|
| `/calculators/` | KEPT - Content Root 1 |
| `/guides/` | KEPT - Content Root 2 |
| `/data/` | KEPT - Content Root 3 |
| `/news/` | KEPT - Content Root 4 |
| `/blog/` | KEPT - Content Root 5 |

### Trust/E-E-A-T Pages (kept top-level)
| Section | Status |
|---------|--------|
| `/about/` | KEPT |
| `/authors/` | KEPT |
| `/contact/` | KEPT |
| `/methodology/` | KEPT |
| `/editorial-policy/` | KEPT |
| `/sources-policy/` | KEPT |
| `/corrections-policy/` | KEPT |
| `/faq/` | KEPT |
| `/glossary/` | KEPT (no `/guides/glossary/` page exists yet) |

### Legal Pages (kept top-level)
| Section | Status |
|---------|--------|
| `/privacy/` | KEPT |
| `/terms/` | KEPT |
| `/compliance/` | KEPT (redirects to `/compliance/advertising-disclosure/`) |

### Utility Pages (kept top-level)
| Section | Status |
|---------|--------|
| `/search/` | KEPT |
| `/sitemap/` | KEPT |
| `/bookmarks/` | KEPT |

### /tools/ (already redirected)
Already had redirects to `/calculators/` and `/calculators/rpm/`. Verified working. No changes needed.

---

## Redirect Chain Fixes

These 5 old redirects were updated to point directly to final destinations (avoiding 2-hop chains through now-redirected sections):

| Old Source | Old Destination (now redirected) | New Direct Destination |
|-----------|--------------------------------|----------------------|
| `/metrics/tiktok-comments-to-likes-ratio` | `/metrics/comments-to-likes-ratio/` | `/data/engagement/comments-to-likes-ratio/` |
| `/reference/creator-fund-eligible-countries` | `/reference/creator-fund-countries/` | `/data/reference/creator-fund-countries/` |
| `/reference/tiktok-shop-payment-schedule` | `/reference/shop-payment-schedule/` | `/data/reference/shop-payment-schedule/` |
| `/advanced/creator-tax-deductions-guide` | `/advanced/creator-tax-deductions/` | `/guides/business/creator-tax-deductions/` |
| `/resources/brand-deal-contract-template` | `/resources/brand-deal-contract/` | `/guides/business/brand-deal-contract/` |
| `/blog/tiktok-vs-youtube-shorts-earnings-2026` | `/comparisons/tiktok-vs-youtube-earnings/` | `/data/platform-comparisons/tiktok-vs-youtube-earnings/` |

---

## What Still Needs Manual Work (Future Phases)

### Phase 2: Content must exist at redirect destinations
The redirects point to paths under `/data/platform-comparisons/`, `/data/reference/`, `/guides/niches/`, `/data/engagement/`, and `/guides/business/`. These target directories use catch-all `[...slug]` routing. **Content pages (MDX or page.tsx) must exist at the destination paths for these routes to render actual content**, not 404s. Verify:

- [ ] `/data/platform-comparisons/tiktok-vs-youtube-earnings/` renders content
- [ ] `/data/platform-comparisons/tiktok-vs-instagram/` renders content
- [ ] `/data/platform-comparisons/tiktok-vs-instagram-income/` renders content
- [ ] `/data/platform-comparisons/creator-fund-vs-brand-deals/` renders content
- [ ] `/data/platform-comparisons/creator-fund-vs-youtube/` renders content
- [ ] `/data/platform-comparisons/tiktok-live-vs-youtube-live/` renders content
- [ ] `/data/platform-comparisons/tiktok-shop-vs-amazon/` renders content
- [ ] `/data/reference/creator-fund-countries/` renders content
- [ ] `/data/reference/creator-fund-payment-schedule/` renders content
- [ ] `/data/reference/live-gifts-value-chart/` renders content
- [ ] `/data/reference/shop-commission-rates/` renders content
- [ ] `/data/reference/shop-payment-schedule/` renders content
- [ ] `/guides/niches/beauty-earnings/` renders content
- [ ] `/guides/niches/finance-earnings/` renders content
- [ ] `/guides/niches/fitness-earnings/` renders content
- [ ] `/data/engagement/comments-to-likes-ratio/` renders content
- [ ] `/guides/business/creator-tax-deductions/` renders content
- [ ] `/guides/business/brand-deal-contract/` renders content

### Phase 3: Delete old page.tsx files (optional cleanup)
Old page.tsx files at `/comparisons/`, `/reference/`, `/niches/`, `/metrics/`, `/advanced/`, `/resources/`, `/benchmarks/`, `/region/` can remain safely -- Firebase redirects fire before static file serving. But deleting them reduces build output size. Do NOT delete until redirect destinations are verified working.

### Phase 4: Calculator hierarchy flattening
The architecture audit recommends flattening nested calculator sub-hubs (e.g., `/calculators/coins-gifts-diamonds/coins/` to `/calculators/coins/`). This is a separate, larger task documented in the architecture audit section 3.2.

### Phase 5: i18n path consolidation
Move `/calculator/de/` etc. to `/calculators/de/` and update hreflang tags. The bare `/calculator/` redirect is in place; the sub-paths need page moves.

### Phase 6: /glossary/ consolidation
When a `/guides/glossary/` page is created, add redirect from `/glossary/` to `/guides/glossary/`.
