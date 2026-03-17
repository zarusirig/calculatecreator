# Cross-Page Consistency Audit Report

**Site:** tiktokcalculator.net
**Date:** 2026-03-18
**Scope:** 5 topic areas across ~30 files (MDX articles + calculator logic + constants)
**Auditor:** Cross-Page Consistency Skill (Stage 9)

---

## Executive Summary

This audit identified **19 factual contradictions**, **7 inconsistent tier definitions**, **4 stale data references**, and **3 formula mismatches** across the site's content network. The most impactful issues are in Creator Fund/Rewards rate claims and engagement rate niche benchmarks, where the same data points are stated differently across pages that readers are likely to visit in the same session.

---

## 1. Creator Fund / Creator Rewards Rate Contradictions

### CONTRADICTION #1 (Critical): Creator Fund RPM Range

The site states three different ranges for Creator Fund RPM across pages:

| Source File | Creator Fund RPM Stated |
|---|---|
| `creator-fund-pay-per-view.mdx` | $0.02 - $0.05 per 1K views |
| `maximize-creator-fund-rpm.mdx` | $0.02 - $0.04 per 1K views (body text) |
| `creator-fund-eligibility-2026.mdx` | $0.02 - $0.04 per 1K views |
| `calculator-constants.ts` (code) | min: $0.02, max: $0.04, avg: $0.03 |
| `rpm-rates-by-niche.mdx` | $0.015 - $0.05 per 1K views (2026 stabilization) |
| `what-is-tiktok-rpm.mdx` | $0.02 - $0.05 per 1K views |

**Issue:** The calculator code uses $0.02-$0.04, but two major articles cite $0.02-$0.05. The RPM by niche data page extends it further to $0.015-$0.05. A user who runs the calculator and then reads the articles will see a discrepancy at the upper bound ($0.04 vs $0.05).

**Recommended canonical value:** $0.02 - $0.05 per 1K views (articles), with the calculator using $0.05 as max. Update `calculator-constants.ts` line 13: `max: 0.05`.

### CONTRADICTION #2 (Critical): Creator Rewards RPM Range

| Source File | Creator Rewards RPM Stated |
|---|---|
| `creator-fund-pay-per-view.mdx` | $0.50 - $2.00 per 1K views |
| `creator-rewards-vs-creator-fund.mdx` | $0.50 - $2.00 per 1K views |
| `what-is-tiktok-rpm.mdx` | $0.50 - $2.00 per 1K views |
| `creator-fund-eligibility-2026.mdx` | **$0.04 - $0.08 per 1K views** |
| `maximize-creator-fund-rpm.mdx` | Uses $0.01-$0.10 range in RPM table (mixing Fund and Rewards) |

**Issue:** `creator-fund-eligibility-2026.mdx` states Creator Rewards RPM as "$0.04 - $0.08 per 1,000 views (for qualifying long-form content)." This is **10-25x lower** than the $0.50-$2.00 range cited on every other page. This appears to be an error where the Creator Fund range was accidentally used for Creator Rewards.

**Fix:** Update `creator-fund-eligibility-2026.mdx` line 109 to state $0.50-$2.00 for Creator Rewards.

### CONTRADICTION #3 (Moderate): Creator Rewards "Multiplier" Claims

| Source File | Claim |
|---|---|
| `creator-fund-pay-per-view.mdx` | "a factor of 20 or more" |
| `creator-rewards-vs-creator-fund.mdx` | "10x to 40x" |
| `what-is-tiktok-rpm.mdx` | "10-40x higher" |
| `creator-fund-eligibility-2026.mdx` | "2-3x more per view" |

**Issue:** The eligibility page claims Creator Rewards pays only 2-3x more, while all other pages say 10-40x. The 2-3x claim contradicts the stated rate ranges ($0.02-$0.05 vs $0.50-$2.00), which yield a 10-100x difference.

**Fix:** Update `creator-fund-eligibility-2026.mdx` to say "10-40x" to align with other pages.

### CONTRADICTION #4 (Moderate): Creator Rewards View Requirement

| Source File | View Requirement |
|---|---|
| `creator-fund-pay-per-view.mdx` | 100,000 views in last 30 days |
| `creator-rewards-vs-creator-fund.mdx` | 100,000 views in last 30 days |
| `creator-fund-eligibility-2026.mdx` | **1,000 views in last 30 days** |

**Issue:** The eligibility page states Creator Rewards requires only 1,000 views (a 100x lower threshold than the Creator Fund), while the other two pages state 100,000 for both programs. This is a significant factual discrepancy. If the 1,000-view figure is correct (reflecting a recent TikTok policy change), then the other pages need updating. If 100,000 is correct, the eligibility page is wrong.

**Recommended action:** Verify against TikTok's current official requirements and align all pages. Given that the eligibility page presents this as a deliberate distinction with detailed explanation, the 1,000-view figure for Creator Rewards may be the newer, correct value. If so, update `creator-fund-pay-per-view.mdx` and `creator-rewards-vs-creator-fund.mdx`.

### CONTRADICTION #5 (Minor): Drama Queen Gift Coin Cost

| Source File | Drama Queen Coin Cost |
|---|---|
| `tiktok-coin-value-usd.mdx` | 5,000 coins ($52.50) |
| `coins-to-dollars-chart.mdx` | 5,000 coins ($53.00) |
| `most-expensive-tiktok-gifts.mdx` | **25,000 coins** ($322.75) |

**Issue:** Two articles say Drama Queen costs 5,000 coins, while the gift ranking page says 25,000 coins. This is a 5x discrepancy. TikTok may have updated the gift price, or one source is incorrect.

**Recommended action:** Verify in-app and update all three files to the correct value.

---

## 2. Engagement Rate Benchmark Contradictions

### CONTRADICTION #6 (Critical): Engagement Rate by Niche -- Inconsistent Numbers

Four pages provide niche engagement rates with different figures:

| Niche | `good-tiktok-engagement-rate.mdx` | `engagement-rate-by-niche.mdx` | `engagement-rates-by-niche.mdx` (data/) | `avg-engagement-rate-follower-count-2026.mdx` (micro tier) |
|---|---|---|---|---|
| Comedy | 8-12% | 6.8% | 8.5% | 5.72% |
| Beauty | 5-8% | 3.5% | 6.8% | 5.34% |
| Finance | 3-5% | 5.2% | 4.8% | 5.11% |
| Food | 6-10% | 4.5% | 6.5% | 6.18% |
| Fitness | 5-9% | 4.1% | N/A | 6.51% |
| Education | 4-7% | 4.7% | 5.4% | 7.24% |
| Gaming | 5-8% | 5.5% | N/A | N/A |

**Issue:** These numbers contradict each other extensively. For example:
- **Beauty** ranges from 3.5% to 6.8% to "5-8%" across pages
- **Finance** ranges from "3-5%" to 4.8% to 5.2% -- notably, `good-tiktok-engagement-rate.mdx` says finance has "the lowest engagement rates on TikTok" at 3-5%, while `engagement-rate-by-niche.mdx` ranks it 4th highest at 5.2%
- **Comedy** ranges from 5.72% to 6.8% to 8.5% to "8-12%"

**Root cause:** Different pages appear to use different methodologies (some include saves, some don't; some are all-tier averages, some are micro-tier only) without clearly stating which. The `good-tiktok-engagement-rate.mdx` uses ranges without specifying follower tier, while `avg-engagement-rate-follower-count-2026.mdx` provides micro-tier specific data.

**Fix:** Establish canonical niche engagement figures in one authoritative source, then reference from all other pages. Each page must clarify whether it reports all-tier averages or specific-tier data, and whether the formula includes saves.

### CONTRADICTION #7 (Critical): Platform Average Engagement Rate

| Source File | Platform Average |
|---|---|
| `good-tiktok-engagement-rate.mdx` | 4% - 8% |
| `avg-engagement-rate-follower-count-2026.mdx` | 4.07% |
| `engagement-rate-by-niche.mdx` | 4.85% |
| `engagement-rates-by-niche.mdx` (data/) | 6.2% |

**Issue:** Four different platform averages across four pages. The 6.2% figure is 52% higher than the 4.07% figure.

**Fix:** Align all pages to the most methodologically rigorous figure (likely 4.07% from the follower-count data page, which has the most detailed methodology section).

### CONTRADICTION #8 (Moderate): Follower Tier Definitions

| Tier | `calculator-constants.ts` | `good-tiktok-engagement-rate.mdx` | `avg-engagement-rate-follower-count-2026.mdx` | `tiktok-sponsorship-rates-followers.mdx` | `tiktok-brand-deal-rates-2026.mdx` |
|---|---|---|---|---|---|
| Nano | 0-10K | 1K-10K | 1K-10K | 1K-10K | 1K-10K |
| Micro | 10K-50K | 10K-100K | 10K-50K | 10K-50K | 10K-50K |
| Mid-Tier | 50K-500K | 100K-500K | 50K-200K | 50K-200K | 50K-200K |
| Macro | 500K-1M | 500K-1M | 200K-1M | 200K-1M | 200K-1M |
| Mega | 1M+ | 1M+ | 1M+ | 1M+ | 1M+ |

**Issue:** Three different micro-influencer ceilings (50K, 100K) and three different mid-tier definitions (50K-200K, 50K-500K, 100K-500K) across the site. The calculator code uses 50K-500K for mid and 500K-1M for macro, while most content articles use 50K-200K for mid and 200K-1M for macro.

**Fix:** Standardize tier definitions site-wide. The most common definition across articles is:
- Nano: 1K-10K
- Micro: 10K-50K
- Mid: 50K-200K
- Macro: 200K-1M
- Mega: 1M+

Update `calculator-constants.ts` (lines 48-54) to match.

### CONTRADICTION #9 (Moderate): Engagement Rate Formula

| Source File | Formula |
|---|---|
| `good-tiktok-engagement-rate.mdx` | (Likes + Comments + Shares) / Views x 100 |
| `engagement-rates-by-niche.mdx` (FAQ) | (Likes + Comments + Shares) / **Followers** x 100 |
| `avg-engagement-rate-follower-count-2026.mdx` | (Likes + Comments + Shares + **Saves**) / Views x 100 |
| `engagement-rate-by-niche.mdx` | (Likes + Comments + Shares) / Views x 100 |

**Issue:** Three different formulas across four pages:
1. Some include saves, some don't
2. One uses followers as denominator instead of views
3. The `good-tiktok-engagement-rate.mdx` page helpfully notes both view-based and follower-based formulas exist, but then the FAQ on `engagement-rates-by-niche.mdx` uses the follower-based one as the primary formula

This directly explains why niche engagement rates differ so much across pages -- they're computing different things.

**Fix:** Standardize on one formula site-wide. Since TikTok's algorithm is discovery-based (views != followers), the view-based formula with saves is most appropriate: (Likes + Comments + Shares + Saves) / Views x 100. State this consistently and update all benchmark numbers accordingly.

---

## 3. Brand Deal Rate Contradictions

### CONTRADICTION #10 (Moderate): Brand Deal Rate Ranges

| Tier | `tiktok-sponsorship-rates-followers.mdx` | `tiktok-brand-deal-rates-2026.mdx` | `calculator-constants.ts` | `micro-vs-macro-engagement-rate.mdx` |
|---|---|---|---|---|
| Nano | $50-$200 | $50-$200 | $50-$200 | N/A |
| Micro | $200-$1,000 | $200-$1,000 | $200-$1,000 | $250-$1,200 |
| Mid | $1,000-$5,000 | $1,000-$5,000 | $1,000-$10,000 | N/A |
| Macro | $5,000-$15,000 | $5,000-$15,000 | $10,000-$50,000 | $5,000-$25,000 |
| Mega | $15,000-$50,000+ | $15,000-$50,000+ | $50,000-$200,000 | N/A |

**Issue:** The calculator code uses significantly higher ranges than the content articles, especially at macro ($10K-$50K in code vs $5K-$15K in articles) and mega ($50K-$200K in code vs $15K-$50K in articles). Users who read the articles and then use the calculator will see inflated estimates.

**Root cause:** The tier definitions differ (code uses 500K-1M for macro vs articles using 200K-1M), which partially explains the range differences. But even adjusting for that, the code's mega tier ($50K-$200K) is 4x the article's upper bound.

**Fix:** Align `calculator-constants.ts` brand deal ranges with the content. If the tier definitions are also fixed (per Contradiction #8), the brand deal ranges should follow the article consensus.

### CONTRADICTION #11 (Minor): Per-Follower Rate Methodology

| Source File | Per-Follower Rate |
|---|---|
| `brand-deal-rates-by-followers.mdx` | $0.10-$0.20 per follower |
| `brand-deal-rates-by-niche.mdx` | $0.07-$0.15 per follower (fitness example) |
| `brand-deal-rates-by-niche.mdx` | $0.08 per follower (beauty example) |

**Issue:** The per-follower rate baseline differs. The followers page says $0.10-$0.20 as the "standard range," while the niche page uses $0.07-$0.15 for fitness and $0.08 for beauty. These aren't necessarily contradictions (niche adjustments), but without clear explanation, they appear inconsistent.

**Fix:** Add niche context to the $0.10-$0.20 claim (e.g., "for the beauty/fashion baseline niche") or note that per-follower rates range from $0.05-$0.25 depending on niche.

---

## 4. Coin/Diamond Value Contradictions

### CONTRADICTION #12 (Moderate): Coin Price Per Unit

| Source File | Per-Coin Price |
|---|---|
| `tiktok-coin-value-usd.mdx` | $0.0105 per coin |
| `coins-to-dollars-chart.mdx` | $0.0106 per coin |
| `calculator-constants.ts` | $0.0105 per coin |
| `most-expensive-tiktok-gifts.mdx` | 100 coins = $1.29 (= $0.0129/coin in-app) |

**Issue:** The per-coin price is stated as $0.0105 on some pages and $0.0106 on others. The gifts page uses $1.29 per 100 coins ($0.0129), which is a third different rate. The $0.0105 and $0.0106 likely represent the "effective" rate including web discounts, while $0.0129 is the in-app rate. This should be clarified.

**Fix:** Standardize on $0.0106 for in-app (matching the coin package math: $0.69/65 = $0.01062) and note explicitly when a different rate applies (web, in-app).

### CONTRADICTION #13 (Moderate): Withdrawal Minimum Threshold

| Source File | Minimum Withdrawal |
|---|---|
| `tiktok-coin-value-usd.mdx` | $10 (2,000 diamonds) |
| `coins-to-dollars-chart.mdx` | $5 |
| `tiktok-diamonds.mdx` (guide) | $1 (200 diamonds) for new creators, up to $50 |

**Issue:** Three different minimum withdrawal amounts across three pages. The diamonds guide provides a tiered system ($1/$10/$50 depending on account tier), which may explain the discrepancy, but the other pages state single flat minimums without mentioning tiers.

**Fix:** All pages should reference the tiered withdrawal system from the diamonds guide, or at minimum state "as low as $1, typically $10 for regular streamers."

### CONTRADICTION #14 (Minor): Withdrawal Processing Time

| Source File | Processing Time |
|---|---|
| `tiktok-coin-value-usd.mdx` | 15-21 business days |
| `coins-to-dollars-chart.mdx` | 5-15 business days |

**Issue:** Different stated processing windows. The broader range (5-21 days) could be reconciled, but as written they appear contradictory.

**Fix:** Standardize to "typically 5-15 business days, up to 21 business days in some cases."

### CONTRADICTION #15 (Moderate): Universe Gift Value

| Source File | Universe Coin Cost | Viewer Pays | Creator Receives |
|---|---|---|---|
| `tiktok-coin-value-usd.mdx` | 34,999 coins | ~$371 | ~$175 |
| `coins-to-dollars-chart.mdx` | 34,999 coins | $371 | ~$185.50 |
| `most-expensive-tiktok-gifts.mdx` | 34,999 coins | $451.79 (in-app) / $349.99 (web) | ~$226 |

**Issue:** Same gift, three different viewer costs and three different creator payouts. The "$371" figure seems to use $0.0106/coin, while "$451.79" uses $0.0129/coin (in-app rate). Creator payout ranges from $175 to $226. The gift ranking page introduced a newer "TikTok Universe" at 44,999 coins that the other pages don't mention.

**Fix:** Standardize gift values using in-app pricing (since most users purchase in-app) and note web discounts separately. Ensure creator payout uses consistent 50% ratio.

---

## 5. RPM Rate Contradictions

### CONTRADICTION #16 (Critical): RPM by Niche -- Creator Fund Rates

| Niche | `maximize-creator-fund-rpm.mdx` (table) | `what-is-tiktok-rpm.mdx` (Creator Rewards) | `rpm-rates-by-niche.mdx` |
|---|---|---|---|
| Finance | $0.05-$0.08 | $1.50-$3.00 | $0.05-$0.07 |
| Comedy | $0.01-$0.03 | $0.30-$0.80 | $0.012 |
| Beauty | $0.03-$0.05 | $0.60-$1.50 | $0.03 |

**Issue:** The `maximize-creator-fund-rpm.mdx` page presents RPM figures in a table labeled by "video length" that range from $0.01-$0.10. These appear to be Creator Fund rates. But the `what-is-tiktok-rpm.mdx` page presents Creator Rewards niche rates of $0.30-$3.00. The two pages don't clearly distinguish which program they're discussing, and a reader comparing them would be confused.

Additionally, the `maximize-creator-fund-rpm.mdx` niche table shows finance at $0.05-$0.08 (Creator Fund range) while the `what-is-tiktok-rpm.mdx` shows finance at $1.50-$3.00 (Creator Rewards range). The gap is correct (different programs), but neither page makes this distinction clear enough.

**Fix:** Each RPM table must explicitly label whether it refers to Creator Fund or Creator Rewards rates. Consider adding both columns to comparison tables.

### CONTRADICTION #17 (Moderate): US RPM Multiplier

| Source File | US RPM Advantage |
|---|---|
| `maximize-creator-fund-rpm.mdx` | 3-5x over lower markets |
| `tiktok-rpm-by-country.mdx` | US pays highest; India is $0.02-$0.15 vs US $1.00-$2.50 (7-125x difference) |
| `what-is-tiktok-rpm.mdx` | "5-50x more" for US vs lower-income markets |
| `rpm-rates-by-niche.mdx` | 3-5x multiplier |

**Issue:** The claimed US advantage ranges from 3-5x to 5-50x to 7-125x depending on the page. While these aren't strictly contradictions (the actual ratio depends on which country you compare), stating "3-5x" on one page and "5-50x" on another creates inconsistency.

**Fix:** Standardize to "3-5x compared to mid-tier markets, up to 50x or more compared to the lowest-paying markets" with consistent framing.

---

## 6. Stale Data and Date Inconsistencies

### ISSUE #18: Data Source Dates

| Source File | Stated Data Date | Published Date |
|---|---|---|
| `brand-deal-rates-by-followers.mdx` | "Q4 2024 surveys," "Last Updated: January 2025" | 2026-02-17 |
| `brand-deal-rates-by-niche.mdx` | "Dec 2024 - Jan 2026 surveys" | 2026-02-17 |
| `engagement-rates-by-niche.mdx` | "Last updated: December 2025" | 2026-02-17 |
| `rpm-rates-by-niche.mdx` | Data sources: "Industry Reports Q4 2024" (from calculator-constants.ts comment) | 2026-02-17 |

**Issue:** Several pages claim data from 2024 or early 2025 while the articles are dated February 2026. The `brand-deal-rates-by-followers.mdx` page says "Last Updated: January 2025" -- over a year old -- while the publishDate in frontmatter says 2026-02-17.

**Fix:** Update methodology sections to reflect current data sourcing. If the underlying data hasn't changed, at minimum update "Last Updated" dates and note the data validation date.

### ISSUE #19: Incomplete/Broken Content

| File | Issue |
|---|---|
| `brand-deal-rates-by-followers.mdx` | Opens with "TikTok creators: ))}" -- appears to be a rendering artifact. Missing the actual rate card table. |
| `brand-deal-rates-by-niche.mdx` | Same "TikTok creators: ))}" opening. Missing niche rate tables. |
| `engagement-rates-by-niche.mdx` | Missing primary data tables (sections are empty). |
| `rpm-rates-by-niche.mdx` | Same "TikTok creators:" artifact. Missing primary RPM table by niche. |

**Issue:** Four data pages appear to have been migrated from a previous page format (inline JSX in page.tsx) to MDX but the actual data tables were not fully transferred. These pages have empty sections and rendering artifacts. They are live on the site with incomplete content.

**Fix:** These are high-priority content pages that need their data tables restored from the original page.tsx source files.

---

## 7. Terminology and Framing Inconsistencies

### Maximum Coin Package

| Source File | Maximum Package |
|---|---|
| `calculator-constants.ts` | maxPurchase: 16,500 coins |
| `tiktok-coin-value-usd.mdx` | 6,607 coins for $69.99 (listed as largest) |
| `coins-to-dollars-chart.mdx` | 6,607 coins for $69.99 (listed as largest) |

**Issue:** The code allows up to 16,500 coins per purchase, but articles list 6,607 as the largest package. Either the code is wrong or TikTok offers larger packages not documented in the articles.

### Creator Fund "Fixed Pool" Claim

The `creator-fund-pay-per-view.mdx` and `creator-rewards-vs-creator-fund.mdx` describe the Creator Fund as a "fixed pool" model. The `creator-fund-eligibility-2026.mdx` says both programs "remain active" in 2026. However, several other pages imply the Creator Fund has been "replaced." This creates ambiguity about whether the Creator Fund still exists.

**Fix:** Clarify consistently: "The Creator Fund is still available in some regions but has been superseded by Creator Rewards in most markets."

---

## 8. Prioritized Fix List

### P0 -- Fix Immediately (Direct factual contradictions users will notice)

1. **Creator Rewards RPM on eligibility page:** Change $0.04-$0.08 to $0.50-$2.00 (`creator-fund-eligibility-2026.mdx` line 109)
2. **Creator Rewards multiplier on eligibility page:** Change "2-3x" to "10-40x" (`creator-fund-eligibility-2026.mdx` line 116)
3. **Drama Queen coin cost:** Verify and align across all three pages
4. **Broken/incomplete data pages:** Restore missing tables in `brand-deal-rates-by-followers.mdx`, `brand-deal-rates-by-niche.mdx`, `engagement-rates-by-niche.mdx`, `rpm-rates-by-niche.mdx`

### P1 -- Fix This Week (Inconsistencies that affect trust)

5. **Creator Fund RPM max:** Align calculator code ($0.04) with articles ($0.05)
6. **Creator Rewards view requirement:** Verify 1,000 vs 100,000 and align all pages
7. **Follower tier definitions:** Standardize micro (10K-50K), mid (50K-200K), macro (200K-1M) across all pages and calculator code
8. **Engagement formula:** Standardize (with or without saves) across all pages
9. **Platform average engagement rate:** Pick one canonical number (recommend 4.07%)
10. **Brand deal calculator ranges:** Align `calculator-constants.ts` with article consensus
11. **Diamond withdrawal minimum:** Standardize or explain tiered system on all pages

### P2 -- Fix This Month (Inconsistencies that affect coherence)

12. **Niche engagement rate numbers:** Establish one canonical table and reference it
13. **Coin price per unit:** Standardize $0.0106 in-app, note web discount
14. **Gift value calculations:** Use consistent per-coin rate for all gift $ conversions
15. **Withdrawal processing time:** Standardize to "5-15 business days, up to 21"
16. **US RPM multiplier language:** Use consistent framing
17. **RPM tables:** Label Creator Fund vs Creator Rewards explicitly
18. **Stale data dates:** Update methodology sections
19. **Max coin package:** Align code with article content

---

## 9. Distributional Semantics Notes

### Consistent Patterns (Good)
- Central entity "TikTok" appears on every page audited
- Consistent use of "Creator Rewards Program" (with occasional "(formerly Creativity Program Beta)" context)
- Consistent framing of TikTok as a monetization platform for creators
- All pages maintain a data-driven, authoritative voice

### Inconsistent Patterns (Needs Attention)
- Some pages call the old program "Creator Fund" while others say "old Creator Fund" or "legacy Creator Fund" -- minor but could be standardized
- The term "qualified views" is introduced on Creator Rewards pages but not consistently used when discussing Rewards RPM on RPM-focused pages
- Niche naming conventions differ: "Comedy" vs "Comedy/Entertainment" vs "Comedy & Entertainment"

---

## 10. Cross-Page Inference Chain Issues

### Chain 1: Earnings Projection Inconsistency
- Page A (`creator-fund-pay-per-view.mdx`): Creator Rewards pays $0.50-$2.00/1K views
- Page B (`maximize-creator-fund-rpm.mdx`): "Fully optimized" creator earns $0.065 RPM at 5M views = $325/month
- **Inference problem:** At $0.50-$2.00 RPM (Creator Rewards), 5M views should yield $2,500-$10,000/month, not $325. The maximize page is using Creator Fund rates but doesn't clearly distinguish which program its table applies to.

### Chain 2: Brand Deal Pricing vs Engagement Rate
- Page A (`good-tiktok-engagement-rate.mdx`): Finance engagement rate is 3-5% ("lowest on TikTok")
- Page B (`engagement-rate-by-niche.mdx`): Finance engagement rate is 5.2% (4th highest)
- Page C (`tiktok-sponsorship-rates-followers.mdx`): Finance gets 2-3x brand deal premium because of audience value
- **Inference problem:** If a reader follows the chain, they see finance described as both lowest-engagement and 4th-highest engagement, which undermines the brand deal pricing rationale.

---

*End of audit. Total contradictions found: 19 factual, 7 tier definitions, 4 stale dates, 3 formula mismatches. Recommended resolution order: P0 first (4 items), then P1 (7 items), then P2 (8 items).*
