# Audit Part 02 — Query Coverage, Keyword Cannibalization & Semantic/Factual Consistency

Scope: dimensions A4–A7 (cannibalization, intent/query coverage, EAV/factual consistency, cross-page micro-semantics).
Site: tiktokcalculator.net · Repo: `/Users/surajgiri/Documents/calculatecreator`
Canonical data source: `src/lib/constants/creator-data.ts`
Method: local `grep`/`find` across `content/` (261 files), `out/` (354 HTML), `public/sitemap.xml` (333 URLs).
Date context: today 2026-07-09; canonical `LAST_VERIFIED` 2026-03-01; content `publishDate` mostly 2026-02-17.

Severity tally: **Critical 1 · High 8 · Medium 9 · Low 4** (22 findings).
Cannibalization clusters: **21**. Distinct factual contradictions: **13**.

---

## A. KEYWORD CANNIBALIZATION (top priority)

The content network repeatedly targets the same primary query from multiple live URLs across different sections (`/guides/`, `/calculators/`, `/data/`, `/blog/`, `/news/`). Because Koray silos overlap here (a "guide" hub, a "calculator" satellite, and a "data" page all answer the identical head query), these compete for the same SERP.

### [QE-1] Cannibalization cluster map (21 clusters)
- Severity: **High**
- Impact: Multiple URLs split link equity and relevance signals for the same head query; Google will pick one and may pick the wrong one, suppressing the intended money page.
- Evidence: clusters below (query → competing LIVE URLs, titles from frontmatter):

| # | Head query | Competing live URLs | Note |
|---|-----------|---------------------|------|
| C1 | how much does TikTok pay per view | `/guides/tiktok-pay/`, `/calculators/tiktok-money/tiktok-pay-per-1000-views/`, `/calculators/tiktok-money/tiktok-pay-per-million-views/`, `/calculators/tiktok-creator-fund/creator-fund-pay-per-view/`, `/data/earnings/average-tiktok-earnings-per-views/`, `/data/earnings/tiktok-pay-us-earnings/` | 6 URLs, near-identical intent |
| C2 | TikTok Creator Fund (what/join/worth) | `/guides/tiktok-creator-fund/`, `/calculators/tiktok-creator-fund/` (hub), `/calculators/tiktok-creator-fund/creator-fund-eligibility-2026/`, `/guides/how-to-join-creator-fund/`, `/blog/tiktok-creator-fund-worth-it-2026/` | guide vs calc hub both rank "tiktok creator fund" |
| C3 | Creator Rewards vs Creator Fund | `/calculators/tiktok-creator-fund/creator-rewards-vs-creator-fund/`, `/guides/creator-rewards-program/`, `/blog/how-tiktok-creator-rewards-work-2026/`, `/blog/creator-rewards-payout-update-2026/` | 4 URLs |
| C4 | TikTok RPM (what is / rates) | `/guides/tiktok-rpm-calculator-guide/`, `/calculators/rpm/what-is-tiktok-rpm/`, `/blog/understanding-tiktok-rpm-rates/`, `/blog/q1-2026-tiktok-rpm-report/`, `/data/rpm-rates-by-niche/`, `/calculators/rpm/increase-tiktok-rpm/`, `/calculators/tiktok-creator-fund/maximize-creator-fund-rpm/` | 7 URLs |
| C5 | engagement rate by niche | `/data/engagement-rates-by-niche/` AND `/calculators/engagement-rate/engagement-rate-by-niche/` | near-duplicate slug + title |
| C6 | how to increase engagement | `/guides/how-to-increase-engagement/` ("12 Proven Strategies") AND `/calculators/engagement-rate/increase-engagement-rate/` ("...Fast") | same query |
| C7 | engagement rate by follower count | `/calculators/engagement-rate/engagement-rate-by-followers/`, `/data/engagement/avg-engagement-rate-follower-count-2026/`, `/data/engagement/micro-vs-macro-engagement-rate/` | 3 URLs |
| C8 | brand deal / sponsorship rates by followers | `/data/brand-deal-rates-by-followers/`, `/calculators/brand-deal-rate/tiktok-sponsorship-rates-followers/`, `/guides/how-much-to-charge-sponsorship/`, `/calculators/brand-deal-rate/tiktok-brand-deal-rates-2026/`, `/guides/brand-deals/`, `/data/brand-deal-rates-by-niche/` | 6 URLs |
| C9 | how to get / negotiate brand deals | `/guides/how-to-get-brand-deals/`, `/guides/how-to-negotiate-brand-deals/`, `/guides/business/brand-deal-contract-negotiate/`, `/blog/brand-deal-rate-negotiation-tips/` | 4 URLs |
| C10 | TikTok coin value in USD | `/calculators/coins/tiktok-coin-value-usd/`, `/calculators/coins/coins-to-dollars-chart/`, `/guides/tiktok-coins/`, `/calculators/coins/how-to-buy-tiktok-coins/`, `/calculators/coins/tiktok-coin-prices-by-country/` | 5 URLs |
| C11 | TikTok LIVE earnings | `/guides/tiktok-live-earnings-guide/`, `/guides/tiktok-live/`, `/blog/tiktok-live-streaming-earnings-guide/`, `/calculators/earnings-revenue/live-earnings/tiktok-live-earnings-per-hour/`, `/guides/live-gift-earnings-optimization/` | 5 URLs |
| C12 | TikTok LIVE requirements / 1000 followers | `/calculators/earnings-revenue/live-earnings/tiktok-live-requirements/`, `/guides/how-to-qualify-for-tiktok-live/`, `/guides/how-to-get-1000-followers-live/` | 3 URLs |
| C13 | TikTok Shop affiliate earnings | `/guides/tiktok-shop-affiliate/`, `/blog/tiktok-shop-affiliate-beginners-guide/`, `/calculators/commerce-ads/shop-profit/tiktok-shop-affiliate-earnings/`, `/guides/tiktok-shop/` | 4 URLs |
| C14 | TikTok ban status 2026 | `/blog/tiktok-ban-status-2026/`, `/blog/tiktok-ban-update-april-2026/`, `/news/tiktok-nationwide-ban-status/`, `/news/tiktok-ban-delayed-december-2025/` | 4 URLs |
| C15 | TikTok algorithm changes 2026 | `/blog/tiktok-algorithm-changes-2026/`, `/blog/tiktok-algorithm-changes-2026-roundup/`, `/blog/tiktok-algorithm-update-april-2026/`, `/blog/tiktok-algorithm-update-march-2026/`, `/guides/growth/tiktok-algorithm-explained/`, `/news/algorithm-eight-major-shifts/` | 6 URLs; C15a below |
| C16 | TikTok Shop expansion / GMV | `/blog/tiktok-shop-expansion-2026/`, `/data/earnings/tiktok-shop-gmv-growth/`, `/news/tiktok-shop-europe-expansion/`, `/news/tiktok-shop-gmv-doubling/`, `/news/tiktok-shop-third-fastest-growing/`, `/news/tiktok-shop-holiday-campaign/` | 6 URLs |
| C17 | new TikTok features / monetization 2026 | `/blog/tiktok-new-features-2026/` AND `/blog/new-tiktok-monetization-features-2026/` | see QE-14 (contradict each other) |
| C18 | TikTok diamonds value | `/guides/tiktok-diamonds/` AND `/guides/complete-tiktok-diamond-guide/` | two full diamond guides |
| C19 | niche earnings (beauty/finance/fitness) | live `/guides/{beauty,finance,fitness}-creators-earnings/` each duplicated by orphan `content/niches/*-creators-tiktok-earnings.md` | see QE-3 |
| C20 | TikTok creator taxes / deductions | `/guides/creator-tax-strategy/`, `/guides/business/tiktok-creator-taxes-guide/`, `/blog/creator-tax-deductions-complete-guide/`, `/guides/business/international-creator-tax-implications/` (+ orphan `content/advanced/creator-tax-deductions-guide.md`) | 4 live + 1 orphan |
| C21 | best times to post / go live | `/guides/growth/best-posting-times-tiktok/`, `/calculators/earnings-revenue/live-earnings/best-times-go-live-tiktok/` (+ orphan `content/guides/best-times-to-go-live-tiktok.md`) | 2 live + 1 orphan |

- Fix: Assign one canonical target per head query; convert the rest to supporting intents with differentiated titles/H1s, or consolidate + 301. Highest-priority merges: **C5** (identical `engagement-rate-by-niche`), **C6** (identical `increase engagement`), **C18** (two diamond guides), **C1/C4/C8** (biggest URL fan-out). Add `rel=canonical` from satellites to the chosen hub and re-point internal anchors to the canonical.
- Effort: **L**

### [QE-1a] Duplicated blog/news "algorithm change 2026" pages are direct title twins
- Severity: **Medium**
- Impact: `tiktok-algorithm-changes-2026` vs `tiktok-algorithm-changes-2026-roundup` are the same query with barely differentiated titles ("TikTok Algorithm Changes in 2026: What Creators Need to Know" vs "How the TikTok Algorithm Changed in 2026 — Creator Impact"); April + March update posts further fragment.
- Evidence: 4 `/blog/` + `/news/algorithm-eight-major-shifts/` + `/guides/growth/tiktok-algorithm-explained/` all in sitemap.
- Fix: Keep `tiktok-algorithm-explained` as evergreen hub; make dated posts chronological updates that canonicalize/link up to it.
- Effort: M

---

## B. ORPHAN / DUPLICATE SOURCE FILES

### [QE-2] 16 legacy `.md` source files are near-duplicates of live `.mdx` pages (not built, but repo risk)
- Severity: **Medium**
- Impact: The content loader (`src/lib/content/index.ts` `getMdxFiles()`, lines 309-322 & 386) globs **`.mdx` only**, so these `.md` files are not built and not in the sitemap — but they are byte-for-byte topic duplicates of live pages sitting in the repo. Any loader change to include `.md`, or a stray link, would publish duplicate/cannibalizing content. They also pollute internal search/grep and author workflows.
- Evidence: confirmed ORPHAN (no `out/**/index.html`) for all of:
  `content/guides/how-to-get-1000-followers-for-live.md` (live twin `/guides/how-to-get-1000-followers-live/`), `how-to-increase-tiktok-engagement.md` (twin `/guides/how-to-increase-engagement/`), `how-to-join-tiktok-creator-fund.md` (twin `/guides/how-to-join-creator-fund/`), `how-to-get-brand-deals-on-tiktok.md` (twin `/guides/how-to-get-brand-deals/`), `how-to-go-viral-tiktok.md` (twin `/calculators/viral-potential/how-to-go-viral-tiktok/`), `best-times-to-go-live-tiktok.md`, `tiktok-hashtag-strategy-guide.md`, `tiktok-live-earnings-expectations.md`, `why-creator-fund-earnings-dropped.md`; plus `content/niches/{beauty,finance,fitness}-creators-tiktok-earnings.md`, `content/advanced/creator-tax-deductions-guide.md`, `content/metrics/tiktok-comments-to-likes-ratio.md`, `content/reference/{creator-fund-eligible-countries,tiktok-shop-payment-schedule}.md`, `content/comparisons/*.md`, `content/compliance/tiktok-sponsorship-disclosure-guidelines.md`, `content/resources/brand-deal-contract-template.md`. All have empty/no frontmatter `title:`.
- Fix: Delete the orphan `.md` files (or move outside `content/`). Verify none are referenced by internal links before deletion.
- Effort: S

### [QE-3] Same slug exists as both `.md` and `.mdx` (`why-creator-fund-earnings-dropped`)
- Severity: **Low**
- Impact: `content/guides/why-creator-fund-earnings-dropped.md` and `.mdx` coexist; only `.mdx` builds (`/guides/why-creator-fund-earnings-dropped/`). The `.md` is a stale pre-migration copy (raw `# H1`, no frontmatter) with the same content — confusing and a latent duplicate-publish risk.
- Evidence: both files present; `.md` opens with `# Why Did My TikTok Creator Fund Earnings Drop?...`, `.mdx` has full frontmatter with identical title.
- Fix: Delete the `.md`.
- Effort: S

---

## C. EAV / FACTUAL CONTRADICTIONS (E-E-A-T / trust risk)

The `creator-data.ts` header claims a 2026-03-18 audit resolved contradictions and that all multi-page data must import from it. In practice the MDX prose hardcodes values that diverge from the canonical constants and from each other. The single-source-of-truth was **never propagated to content**.

### [QE-4] TikTok coin USD value stated 5 different ways across pages
- Severity: **High**
- Impact: The headline "how much is a coin worth" fact — the site's core calculator premise — is inconsistent; undermines trust and calculator credibility.
- Evidence (canonical `COINS.USD_PER_COIN = 0.0106`, web 0.0105):
  - `$0.0106` — `calculators/coins/how-to-buy-tiktok-coins.mdx:59`, `coins-to-dollars-chart.mdx:47-57`, `tiktok-coin-value-usd.mdx:93-98`
  - `$0.0105` — `tiktok-coin-value-usd.mdx:53,108`
  - `$0.0125` (implied 5 coins→$0.0125) — `guides/complete-tiktok-diamond-guide.mdx:96`
  - `$0.015` and "66 coins for $0.99" (OLD pricing) — `blog/tiktok-live-streaming-earnings-guide.mdx:80,124,125`; `blog/creator-fund-vs-live-gifts.mdx:163`
  - `$0.0105–$0.015` range — `guides/tiktok-gifts.mdx:119`
  - `$0.01` — `guides/tiktok-gifts.mdx:463`, `coins-to-dollars-chart.mdx:69`
- Fix: Replace every hardcoded coin value with the canonical $0.0106 (in-app)/$0.0105 (web); purge the "66 coins for $0.99 / $0.015" old-pricing block in `tiktok-live-streaming-earnings-guide.mdx` and `creator-fund-vs-live-gifts.mdx`.
- Effort: M

### [QE-5] "Universe" gift coin cost: 34,999 vs 44,999 (contradicts canonical + 6 sibling pages)
- Severity: **High**
- Impact: The flagship "most expensive gift" fact is wrong on the main gifts hub, including in its meta description (indexed).
- Evidence (canonical `GIFTS`: Universe = 34,999 coins, Lion = 29,999):
  - `guides/tiktok-gifts.mdx` says Universe = **44,999 coins** at lines 3 (meta desc), 123, 251, 455.
  - Contradicted by `tiktok-live-streaming-earnings-guide.mdx:90,132` (34,999), `creator-fund-vs-live-gifts.mdx:165` (34,999), `complete-tiktok-diamond-guide.mdx:100` (34,999), `tiktok-live-earnings-per-hour.mdx:60` (34,999), `tiktok-coin-value-usd.mdx:75,136` (34,999), `coins-to-dollars-chart.mdx:83` (34,999).
  - `most-expensive-tiktok-gifts.mdx:47,66-67` invents TWO Universes ("TikTok Universe" 44,999 + "original Universe" 34,999) to paper over the conflict — inconsistent with every other page and with canonical.
  - Orphan `tiktok-live-earnings-expectations.md:27,148` also says 44,999.
- Fix: Standardize to canonical 34,999 (or add the 44,999 tier to `creator-data.ts` GIFTS if TikTok truly ships two — but then fix the 6 pages that omit it). Correct `tiktok-gifts.mdx` meta description.
- Effort: M

### [QE-6] Same Universe gift → creator payout stated as $87.50 / $175 / $185.50 / $226 / $265
- Severity: **High**
- Impact: For the identical 34,999-coin gift, the "what the creator earns" number varies ~3x page-to-page — a glaring math inconsistency on money pages built around this exact calculation. Root cause: pages mix two incompatible formulas ("50% of coin purchase price" using different coin rates vs. "coins→diamonds→USD").
- Evidence (all for 34,999-coin Universe unless noted):
  - `$87.50` — `complete-tiktok-diamond-guide.mdx:100` (17,499.5 diamonds × $0.005; = canonical coins→diamonds→USD path, coins×0.0025)
  - `$175` — `tiktok-coin-value-usd.mdx:136` (treats 34,999 coins × $0.005, skipping the 2:1 diamond ratio)
  - `$185.50` — `tiktok-live-earnings-per-hour.mdx:60` (34,999 × $0.0106 × 50%)
  - `~$226`/`~$290` — `most-expensive-tiktok-gifts.mdx:67,66` (based on inflated in-app coin prices)
  - `$265` — `tiktok-live-streaming-earnings-guide.mdx:132`, `creator-fund-vs-live-gifts.mdx:165` (34,999 × $0.015 old rate × 50%)
  - Same pattern for Lion (29,999): $150 (`tiktok-coin-value-usd.mdx:137`, `live-gift-earnings-optimization.mdx:153`) vs $225 (`tiktok-live-streaming-earnings-guide.mdx:131`) vs ~$194 (`most-expensive-tiktok-gifts.mdx:68`).
  - Note: canonical `creator-data.ts` itself carries this tension — `giftCreatorPayout()` uses coins×0.0106×0.5 while `coinsToDiamonds→diamondsToUsd` yields coins×0.0025 (e.g. 1000-coin gift = $5.30 vs $2.50). `guides/tiktok-gifts.mdx:459` uses the $2.50 (diamond) method.
- Fix: Pick ONE canonical gift-payout formula (recommend the coins→diamonds→USD path = coins × 0.0025, since diamond value is the fixed cash-out rate) and regenerate every gift payout figure and the GIFTS table in `creator-data.ts` to match. Reconcile `giftCreatorPayout()`.
- Effort: **L**

### [QE-7] Creator Rewards RPM conflated with old Creator Fund rate ($0.02–$0.05) on 2 pages
- Severity: **Critical**
- Impact: Two pages state the CURRENT primary program pays 10–40x LESS than it does, directly contradicting canonical (`CREATOR_REWARDS.RPM_MIN/MAX = 0.50–2.00`) and the site's own other pages. This is a factually false core claim on money/monetization pages — the worst kind of E-E-A-T signal for a YMYL topic.
- Evidence:
  - `data/earnings/average-tiktok-earnings-per-views.mdx:52`: "The Creator Rewards Program (formerly the Creator Fund) pays between **$0.02 and $0.05** per 1,000 views..."
  - `blog/building-multiple-income-streams-tiktok.mdx:89`: "Creator Rewards Program (formerly Creator Fund)... In 2026, the program pays between **$0.02 and $0.05** per 1,000 qualified views..."
  - Contradicts: `guides/tiktok-pay.mdx:233` ($0.40–$1.00), `guides/monetization/seven-ways-make-money-tiktok.mdx:127` ($0.50–$1.50), `blog/creator-fund-shutdown-implications.mdx:87` ($0.40–$1.00), canonical $0.50–$2.00.
- Fix: Rewrite both pages to separate the two programs: Creator Fund (legacy) $0.02–$0.05; Creator Rewards (current) $0.50–$2.00. Stop equating "Creator Rewards = formerly Creator Fund pays $0.02–$0.05".
- Effort: S

### [QE-8] Creator Rewards / "Creativity Program" RPM otherwise ranges $0.40–$2.05 across pages
- Severity: **High**
- Impact: Even excluding QE-7, the current-program RPM is quoted as $0.40–$1.00, $0.50–$1.50, $0.50–$2.00, avg $1.05, up to $2.05 — no consistent range; also the program is named inconsistently ("Creator Rewards", "Creativity Program", "TikTok Pulse").
- Evidence: `tiktok-pay.mdx:233` ($0.40–$1.00); `seven-ways-make-money-tiktok.mdx:127` ($0.50–$1.50); canonical $0.50–$2.00; `blog/q1-2026-creator-earnings-report.mdx:74,191` ("Creativity Program... average $1.05", "TikTok Pulse pays highest at $2.05", legacy fund "$0.033"); `blog/tiktok-vs-lemon8-creators.mdx:104` ("Creativity Program pays an average of $1.05"). Terminology "Creativity Program" (q1-2026 report, lemon8, why-creator-fund-earnings-dropped:461) vs "Creator Rewards" (canonical name) used interchangeably.
- Fix: Standardize the range to canonical $0.50–$2.00 and the program name to "Creator Rewards Program" site-wide (note "Creativity Program" was the former name; use once as an alias, not as the primary term). Treat TikTok Pulse as a separate entity.
- Effort: M

### [QE-9] Follower-tier boundaries contradict canonical on the majority of pages
- Severity: **High**
- Impact: The tier taxonomy (used for brand-deal pricing, engagement benchmarks, earnings estimates across dozens of pages) is inconsistent; the canonical `FOLLOWER_TIERS` (explicitly "resolved" in INC-003/Contradiction #8) is contradicted by the dominant content convention.
- Evidence (canonical: micro 10K–50K, **mid 50K–200K, macro 200K–1M**, mega 1M+):
  - Matches canonical: `blog/brand-deal-rate-negotiation-tips.mdx:79` (Mid 50K-200K), `blog/creator-fund-shutdown-implications.mdx:138-139` (50K-200K, 200K-1M).
  - Contradicts (mid 100K–500K, macro 500K–1M): `guides/brand-deals.mdx:299`, `guides/spark-ads-for-creators.mdx:107-109`, `guides/influencer-rate-calculator-guide.mdx:349`, `guides/tiktok-gifts.mdx:406`, `blog/tiktok-vs-lemon8-creators.mdx:106`, `blog/tiktok-algorithm-update-april-2026.mdx:105`, `blog/new-tiktok-monetization-features-2026.mdx:101`, `calculators/... spark`, `niches/beauty-creators-tiktok-earnings.md:162`.
  - Other one-offs: mid "25K-100K" (`blog/mid-year-tiktok-monetization-check.mdx:78`), mid "50K-250K" (`blog/building-multiple-income-streams-tiktok.mdx:155`, `guides/beauty-creators-earnings.mdx:76`), micro "10K-100K" (`guides/how-to-make-money-on-tiktok.mdx:212`, `spark-ads`, `influencer-rate-calculator-guide`).
- Fix: Decide the canonical taxonomy (recommend aligning content to the code, or vice-versa) and mass-correct tier labels/ranges. This is the single most widespread inconsistency.
- Effort: **L**

### [QE-10] Creator Fund RPM upper bound: $0.04 vs $0.05 (and avg $0.03 vs $0.033)
- Severity: **Medium**
- Impact: Roughly half the pages cap the legacy Fund at $0.04, half at $0.05 (canonical `CREATOR_FUND.RPM_MAX = 0.05`); average given as both $0.03 and $0.033.
- Evidence:
  - `$0.02–$0.04`: `how-to-join-creator-fund.mdx:67`, `how-to-make-money-on-tiktok.mdx:54,243`, `creator-fund-eligibility-2026.mdx:115`, `maximize-creator-fund-rpm.mdx:48`, `short-vs-long-tiktok-videos.mdx:60`, `engagement-rate-vs-views.mdx:45`, `seven-ways-make-money-tiktok.mdx:127`, `how-tiktok-creator-rewards-work-2026.mdx:71`, `creator-fund-shutdown-implications.mdx:49`.
  - `$0.02–$0.05`: `building-multiple-income-streams-tiktok.mdx:89`, `creator-rewards-vs-creator-fund.mdx:63`, `creator-fund-pay-per-view.mdx:43,79`, `what-is-tiktok-rpm.mdx:75`, `tiktok-pay-per-million-views.mdx:68`, `tiktok-pay-per-1000-views.mdx:68`, `tiktok-creator-burnout-guide.mdx:85`, `average-tiktok-earnings-per-views.mdx:52`.
  - Avg `$0.03`: `how-to-make-money-on-tiktok.mdx:243`, `understanding-tiktok-rpm-rates.mdx:77`, `tiktok-monetization-requirements.mdx:369`. Avg `$0.033`: `q1-2026-creator-earnings-report.mdx:74,131,191`.
  - Also `tiktok-pay-us-earnings.mdx:118` "as low as $0.005 per 1K"; `tiktok-audience-demographics-analysis.mdx:113` "$0.005-$0.01" low-CPM.
- Fix: Standardize to canonical $0.02–$0.05, avg $0.03; sweep-replace $0.04 caps and $0.033 avg.
- Effort: M

### [QE-11] TikTok Shop commission "standard" rate and max are inconsistent; two conflicting "restructure" announcements
- Severity: **High**
- Impact: The Shop-affiliate commission — core to all commerce calculators — has no consistent standard (5% / 10% / 5-15% / 8-10%) or ceiling (20% / 25%), and two blog posts announce mutually exclusive official changes (fabrication risk on a YMYL claim).
- Evidence (canonical `TIKTOK_SHOP`: standard 5%, range 2–20%):
  - Standard rate: `5%` (canonical, `how-to-make-money-on-tiktok.mdx:46`), **flat `10%`** ("up from 5-8% variable", `blog/tiktok-new-features-2026.mdx:75`), **`5-15%`** ("standard", `blog/new-tiktok-monetization-features-2026.mdx:131`), **`8-10%`** ("standard", `blog/tiktok-shop-summer-trends-2026.mdx:95`).
  - Max: `20%` (many), `25%` (`blog/tiktok-vs-lemon8-creators.mdx:104` "5-25%"), `8-20%` (`guides/tiktok-live-shopping.mdx:47,56`).
  - Conflicting announcements: `tiktok-new-features-2026.mdx:75` "Effective **February 1, 2026**... flat 10% base (up from 5-8%)" vs `new-tiktok-monetization-features-2026.mdx:131` "restructured in **January 2026**... 15-25% (up from standard 5-15%)". Canonical min of 2% appears nowhere in prose.
  - Consistent baseline elsewhere: `5-20%` in `tiktok-shop-expansion-2026.mdx:123`, `how-to-make-money-on-tiktok.mdx:54`, `q1-2026-creator-earnings-report.mdx:133`, `comparisons/creator-fund-vs-brand-deals.md:88`.
- Fix: Standardize to canonical 5% standard / 2–20% range. Remove or reconcile the two contradictory "restructure" claims (verify against a real TikTok source or delete the fabricated specifics).
- Effort: M

### [QE-12] Diamond withdrawal minimum: $10 / 2,000 diamonds (canonical) vs $50 / 10,000 diamonds
- Severity: **Medium**
- Impact: Payout-threshold fact wrong on a LIVE-earnings page — directly misleads creators on when they can cash out.
- Evidence (canonical `DIAMONDS`: new $1/200, regular $10/2,000):
  - `blog/tiktok-live-streaming-earnings-guide.mdx:100`: "withdraw once you reach a minimum of **10,000 diamonds ($50)**. Withdrawals typically take **15-21 business days**." — contradicts canonical threshold AND processing time (`WITHDRAWAL_DAYS_TYPICAL = '5-15 business days, up to 21'`).
  - Correct: `guides/tiktok-diamonds.mdx:449` ("$1 (200) new, $10 (2,000) regular, $20-$50 some regions").
- Fix: Correct `tiktok-live-streaming-earnings-guide.mdx` to canonical tiered minimum and 5-15 day processing.
- Effort: S

### [QE-13] Max coin package price conflict ($65.99 vs $69.99) and legacy 16,500-coin package still present
- Severity: **Medium**
- Impact: Coin-purchase pages disagree on the largest package price and one page lists a package the canonical file says was removed (`MAX_PURCHASE_COINS` corrected from 16,500 → 6,607).
- Evidence:
  - 6,607 coins = **$65.99**: `how-to-buy-tiktok-coins.mdx:45,64`, `tiktok-coin-prices-by-country.mdx:122`. vs **$69.99**: `coins-to-dollars-chart.mdx:57`, `tiktok-coin-value-usd.mdx:57,98`. (Per-coin therefore $0.0100 vs $0.0106.)
  - `tiktok-coin-prices-by-country.mdx:123` still lists a **16,500 coins / $169.99** package (contradicts canonical max of 6,607).
- Fix: Standardize largest package to canonical 6,607 / $69.99; delete the 16,500 row or promote it to canonical if it genuinely exists (then update `creator-data.ts`).
- Effort: S

### [QE-14] Platform average engagement rate: 4.07% (canonical) vs 4.4% vs 4-6% vs 2-4% vs 3-5%
- Severity: **Medium**
- Impact: The benchmark creators measure themselves against differs by page; canonical 4.07% is used cleanly in `/data/` but contradicted in blog/guides.
- Evidence (canonical `ENGAGEMENT.PLATFORM_AVERAGE = 4.07`):
  - `4.07%` correct in `data/engagement/avg-engagement-rate-follower-count-2026.mdx:49,64`, `data/reference/tiktok-business-vs-creator-account.mdx:136`, and 4 platform-comparison pages.
  - `4.4%` — `blog/tiktok-engagement-decline-2026.mdx:197`.
  - `4–6%` — `guides/fitness-creators-earnings.mdx:211` + orphan `niches/fitness-creators-tiktok-earnings.md:77`.
  - `2–4%` average — `guides/tiktok-engagement-rate-calculator-guide.mdx:325`.
  - `3–5%` — `guides/calculating-true-influence-value.mdx:118`.
  - Implied `~3.6%` — `guides/brand-deals.mdx:72` ("7.2%, which is 2x the TikTok average").
- Fix: Use canonical 4.07% wherever a single platform-average number is cited; where a band is needed, standardize one band.
- Effort: M

### [QE-15] Brand-deal per-follower rate inconsistent (and per-follower vs per-1,000 framings disagree)
- Severity: **Medium**
- Impact: Core brand-deal pricing input differs widely; the two dominant framings mathematically contradict each other.
- Evidence (canonical `PER_FOLLOWER_RATE` = $0.05–$0.25):
  - Per-follower: `$0.01–$0.05` (`comparisons/*.md`, `niches/beauty-creators-tiktok-earnings.md:219`), `$0.10–$2.00+` (`how-to-make-money-on-tiktok.mdx:168`), `$0.03–$0.08` (`influencer-rate-calculator-guide.mdx:349`), `$0.20–$0.30` finance / `$0.10–$0.20` avg (`finance-creators-earnings.mdx:75,77`), `$0.01–0.10` (`tiktok-exit-strategies.mdx:63`).
  - Per-1,000-followers: `$10–$30` (`how-to-negotiate-brand-deals.mdx:36`, `how-to-get-brand-deals.mdx:47`, `how-much-to-charge-sponsorship.mdx:34`, `how-to-make-money-on-tiktok.mdx:54`), `$10–$25` (`seven-ways`, `engagement-rate-brand-deals.mdx:47`, `micro-influencers-make-money-tiktok.mdx:110`), `$10–$20` (`tiktok-money-10k-followers.mdx:130`) — i.e. $0.01–$0.03/follower, contradicting the canonical $0.05–$0.25/follower.
- Fix: Reconcile the two framings to one canonical baseline; if $10–$30/1,000 is the intended baseline, update `PER_FOLLOWER_RATE` to $0.01–$0.03 (or vice-versa) and sweep content.
- Effort: M

---

## D. INTENT / QUERY-NETWORK COVERAGE

### [QE-16] Slug/title year mismatch signals stale intent
- Severity: **Low**
- Impact: `/guides/content-strategy-2025/` renders title "TikTok Content Strategy **2026**: Complete Creator Playbook" — slug says 2025, title says 2026; weakens the year-qualified query match and looks stale in the URL.
- Evidence: `content/guides/content-strategy-2025.mdx` title = "...2026...".
- Fix: Migrate to `/guides/content-strategy-2026/` (or drop the year from the slug) with a 301.
- Effort: S

### [QE-17] Transactional/tool intent well covered; a few calculators lack a matching explainer, a few explainers lack a tool
- Severity: **Low**
- Impact: Mostly healthy. Standalone calculator tool routes (`/calculators/ad-revenue/`, `/diamond-converter/`, `/live-gifts/`, `/milestone-tracker/`, `/utility-tools/eligibility|payout|tax/`, etc.) exist in the sitemap without a paired informational article, while some info clusters (RPM, engagement) have many articles. Transactional ("calculator"), commercial-investigation ("rates/how much"), and informational ("what is/how to") intents are all represented — no major intent gap found.
- Evidence: sitemap has ~40 `/calculators/*` tool routes vs 261 content articles; tool routes like `/calculators/audience-overlap/`, `/calculators/break-even/`, `/calculators/lifetime-value/` have no content sibling in `content/`.
- Fix: Optionally add short explainer sections/FAQ to orphan tool routes for query coverage; low priority.
- Effort: M

### [QE-18] Two blog posts present contradictory "official" 2026 monetization changes (fabrication/E-E-A-T risk)
- Severity: **High**
- Impact: `tiktok-new-features-2026` and `new-tiktok-monetization-features-2026` (cluster C17) describe different, mutually exclusive official program changes with specific dates and percentages that cannot both be true — reads as fabricated data on a YMYL topic.
- Evidence: Shop commission "flat 10% effective Feb 1, 2026, up from 5-8%" vs "tiers restructured Jan 2026, 15-25% up from 5-15%" (see QE-11); Series pricing "expanded to $189.99" (`new-tiktok-monetization-features-2026.mdx:77`) with no corroboration elsewhere.
- Fix: Verify each claimed change against a primary TikTok source; remove unverifiable specifics; merge the two posts.
- Effort: M

---

## E. CROSS-PAGE MICRO-SEMANTICS & DATES

### [QE-19] Content dates are stale and never differentiated (publishDate == dateModified), ~5 months behind "today"
- Severity: **Medium**
- Impact: Every page shows an old, identical publish/modified date; no freshness signal despite "2026" evergreen positioning. Also inconsistent with the canonical audit narrative.
- Evidence: `publishDate` = `2026-02-17` on 221 files, `2026-02-20` on 19 files (240 total via `publishDate:`). Built HTML shows `"datePublished":"2026-02-17","dateModified":"2026-02-17"` and visible "February 17, 2026" (e.g. `out/guides/tiktok-coins/index.html`). Git history commit c54f671 claims "Update all dates to 2026-03-01" — not reflected in frontmatter. Canonical `DATA_FRESHNESS.LAST_VERIFIED = '2026-03-01'`, `LAST_AUDIT = '2026-03-18'`. Today = 2026-07-09.
- Fix: Set `dateModified` on substantively updated pages to a current date; align the site's date story (frontmatter vs schema vs canonical `LAST_VERIFIED`). Don't leave datePublished==dateModified on refreshed content.
- Effort: M

### [QE-20] Duplicated boilerplate intro block (verbatim paragraph repeated within a page)
- Severity: **Low**
- Impact: `guides/tiktok-live-shopping.mdx` repeats its ~120-word opening paragraph almost verbatim at lines 47 and 56 (only the tail differs). Thin/duplicated copy.
- Evidence: `content/guides/tiktok-live-shopping.mdx:47` and `:56` — near-identical "TikTok LIVE Shopping represents the convergence of entertainment, social proof, and seamless commerce..." blocks.
- Fix: Delete the duplicate paragraph.
- Effort: S

### [QE-21] "TikTok Pulse" and "Creativity Program" introduced as distinct programs without consistent definition
- Severity: **Low** (suspected — terminology drift)
- Impact: `q1-2026-creator-earnings-report.mdx` and `tiktok-vs-lemon8-creators.mdx` cite "TikTok Pulse" ($2.05 RPM) and "Creativity Program" alongside "Creator Rewards" without reconciling the three names, risking entity confusion for both readers and LLMs.
- Evidence: `blog/q1-2026-creator-earnings-report.mdx:191` (Pulse $2.05, Creativity Program avg $1.05), `blog/tiktok-vs-lemon8-creators.mdx:104` (Creativity Program + Pulse listed separately).
- Fix: Define the entity hierarchy once (Creator Rewards Program, formerly Creativity Program Beta; Pulse = ad-revenue-share, separate) and use consistently.
- Effort: S

### [QE-22] Legacy brand string "CalculateCreator" survives in code paths (not user-facing, but latent)
- Severity: **Low**
- Impact: No user-facing leakage found (0 hits in `content/` and 0 in `out/*.html` visible text/meta), but the legacy brand is still referenced in source normalization/title-cleanup, so a regression could surface it.
- Evidence: 0 `calculatecreator` hits in `content/`; the only refs are internal guards: `src/lib/content/article-page.tsx:33` strips a `| CalculateCreator|TT Calculator` title suffix; `src/lib/constants/authors.ts:185` and `src/lib/constants/page-metadata.ts:770` match `calculatecreator` for author attribution. (Other src hits are unrelated `calculateCreatorFund`/`calculateCreatorTax` function names.)
- Fix: None urgent; confirm no title in content still ends with "| CalculateCreator" (the cleanup regex implies some once did). Track for removal.
- Effort: S

---

## Verified OK

- **Diamond USD value** — consistently `$0.005/diamond` and `200 diamonds = $1` across `tiktok-diamonds.mdx:441`, `complete-tiktok-diamond-guide.mdx:56`, `tiktok-coin-value-usd.mdx:126,139`, `most-expensive-tiktok-gifts.mdx:110`, `tiktok-analytics-guide.mdx:142`, `creator-fund-vs-live-gifts.mdx:71`, orphan `tiktok-live-earnings-expectations.md:33`. Matches canonical `DIAMONDS.USD_PER_DIAMOND = 0.005`.
- **Coin→diamond ratio** — consistently 2 coins = 1 diamond (`tiktok-gifts.mdx:459`, `complete-tiktok-diamond-guide.mdx:96`). Matches canonical `COINS_PER_DIAMOND = 2`.
- **LIVE revenue share** — consistently ~50% creator share across gift/live pages. Matches `LIVE_REVENUE.CREATOR_REVENUE_SHARE = 0.50`.
- **Minimum coin package** — 65 coins for $0.69 consistent (`tiktok-coin-value-usd.mdx:69,93`, `how-to-buy-tiktok-coins.mdx:59`, `coins-to-dollars-chart.mdx:47`). Matches canonical `MIN_PURCHASE_COINS/USD`.
- **Self-employment tax 15.3%** — consistent (`creator-tax-strategy.mdx:534`). Matches `US_TAX.SELF_EMPLOYMENT_TAX_RATE`.
- **4.07% engagement within `/data/` section** — internally consistent across 6 data pages (the outliers are in blog/guides, QE-14).
- **Brand name in user-facing output** — clean; no "calculatecreator" in `content/` or built HTML text/meta (QE-22 is code-only, latent).
- **`.md` orphans are not published** — loader globs `.mdx` only (`getMdxFiles`), so orphans (QE-2/QE-3) are not live cannibalization today; risk is latent + repo hygiene.

---

### Data-propagation root cause (applies to QE-4 through QE-15)
`creator-data.ts` is a well-structured single source of truth, but MDX prose **hardcodes** numbers instead of importing/rendering the constants. The 2026-03-18 "resolution" updated the constants file only; the ~350 content pages were never re-generated against it. Any durable fix must (a) template these values from the constant at render time where feasible, or (b) run a content sweep that rewrites hardcoded facts to match canonical and adds a lint/test that greps content for divergent values.
