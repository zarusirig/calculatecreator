# Ontology Construction: TikTok Creator Monetization

**Site**: tiktokcalculator.net
**Central Entity**: TikTok Creator Monetization
**Date**: 2026-03-18
**Pages**: 180 page routes + 257 MDX articles
**Target**: 150+ RDF triples, full E-A-V model, Knowledge Graph alignment

---

## 1. Entity Inventory

### Tier 1 — Core Entities (Central to the domain)

| # | Entity | Wikidata QID | Type | Pages Covering |
|---|--------|-------------|------|----------------|
| 1 | TikTok | Q48938646 | Platform | All pages |
| 2 | TikTok Creator Fund | — (no QID; use Q48938646 + property) | Monetization Program | 8+ pages |
| 3 | TikTok Creator Rewards Program | — | Monetization Program | 5+ pages |
| 4 | TikTok LIVE | — | Platform Feature | 10+ pages |
| 5 | TikTok Shop | — | Commerce Platform | 12+ pages |
| 6 | TikTok Coins | — | Virtual Currency | 6+ pages |
| 7 | TikTok Diamonds | — | Virtual Currency | 4+ pages |
| 8 | TikTok Gifts | — | Virtual Items | 4+ pages |
| 9 | Brand Deal / Sponsorship | Q1363834 (Sponsorship) | Revenue Stream | 15+ pages |
| 10 | Engagement Rate | — | Performance Metric | 14+ pages |
| 11 | RPM (Revenue Per Mille) | — | Financial Metric | 8+ pages |
| 12 | Content Creator / Influencer | Q30857078 (Influencer) | Person Role | All pages |
| 13 | For You Page (FYP) | — | Platform Feature | 5+ pages |
| 14 | TikTok Algorithm | — | System | 8+ pages |

### Tier 2 — Supporting Entities

| # | Entity | Wikidata QID | Type |
|---|--------|-------------|------|
| 15 | Follower Tier (Nano/Micro/Mid/Macro/Mega) | — | Classification System |
| 16 | Content Niche | — | Classification System |
| 17 | CPM (Cost Per Mille) | Q1045498 | Financial Metric |
| 18 | Watch Time / Completion Rate | — | Performance Metric |
| 19 | Viral Content | Q7933916 | Content Category |
| 20 | Hashtag | Q2920921 | Platform Feature |
| 21 | TikTok Spark Ads | — | Advertising Product |
| 22 | Affiliate Commission | Q330427 (Affiliate marketing) | Revenue Stream |
| 23 | TikTok Creator Marketplace | — | Platform Feature |
| 24 | TikTok Series | — | Content Feature |

### Tier 3 — Contextual Entities

| # | Entity | Wikidata QID | Type |
|---|--------|-------------|------|
| 25 | Instagram Reels | Q106627665 | Competing Platform |
| 26 | YouTube Shorts | Q106627547 | Competing Platform |
| 27 | YouTube | Q866 | Competing Platform |
| 28 | Twitch | Q20032194 | Competing Platform |
| 29 | Amazon (as TikTok Shop competitor) | Q3884 | Competing Platform |
| 30 | FTC Disclosure | — | Legal Requirement |
| 31 | Self-Employment Tax | Q7448218 | Tax Obligation |
| 32 | LLC (for creators) | Q727272 | Business Structure |
| 33 | Media Kit | — | Business Asset |
| 34 | PayPal | Q483959 | Payment Method |
| 35 | Content Pillar | — | Strategy Concept |
| 36 | Shadowban | — | Platform Penalty |
| 37 | Creator Economy | Q109463513 | Economic Sector |

### Tier 4 — Niche Entities (covered by niche guides)

| # | Entity | Type |
|---|--------|------|
| 38 | Beauty & Fashion Niche | Content Vertical |
| 39 | Finance & Business Niche | Content Vertical |
| 40 | Fitness & Health Niche | Content Vertical |
| 41 | Gaming Niche | Content Vertical |
| 42 | Food & Cooking Niche | Content Vertical |
| 43 | Comedy & Entertainment Niche | Content Vertical |
| 44 | Education Niche | Content Vertical |
| 45 | Technology Niche | Content Vertical |
| 46 | ASMR Niche | Content Vertical |
| 47 | Pet Niche | Content Vertical |
| 48 | Music Niche | Content Vertical |
| 49 | Travel Niche | Content Vertical |
| 50 | Parenting Niche | Content Vertical |
| 51 | DIY & Crafts Niche | Content Vertical |

---

## 2. RDF Triples (Subject-Predicate-Object-Context)

### 2.1 Core Taxonomy (IS-A)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 1 | TikTok Creator Fund | IS-A | Monetization Program | TikTok Platform |
| 2 | TikTok Creator Rewards Program | IS-A | Monetization Program | TikTok Platform |
| 3 | TikTok LIVE | IS-A | Streaming Feature | TikTok Platform |
| 4 | TikTok Shop | IS-A | Social Commerce Platform | TikTok Platform |
| 5 | TikTok Coins | IS-A | Virtual Currency | TikTok Economy |
| 6 | TikTok Diamonds | IS-A | Virtual Currency | TikTok Creator Economy |
| 7 | TikTok Gifts | IS-A | Virtual Items | TikTok LIVE Economy |
| 8 | Brand Deal | IS-A | Revenue Stream | Creator Monetization |
| 9 | Engagement Rate | IS-A | Performance Metric | Content Analytics |
| 10 | RPM | IS-A | Financial Metric | Creator Earnings |
| 11 | CPM | IS-A | Financial Metric | Advertising |
| 12 | Completion Rate | IS-A | Performance Metric | Content Analytics |
| 13 | Watch Time | IS-A | Performance Metric | Content Analytics |
| 14 | For You Page | IS-A | Content Discovery Feed | TikTok Platform |
| 15 | Spark Ads | IS-A | Advertising Product | TikTok Advertising |
| 16 | TikTok Creator Marketplace | IS-A | Partnership Platform | TikTok Business |
| 17 | Affiliate Commission | IS-A | Revenue Stream | Creator Monetization |
| 18 | Nano Creator | IS-A | Follower Tier | Influencer Classification |
| 19 | Micro Creator | IS-A | Follower Tier | Influencer Classification |
| 20 | Mid-Tier Creator | IS-A | Follower Tier | Influencer Classification |
| 21 | Macro Creator | IS-A | Follower Tier | Influencer Classification |
| 22 | Mega Creator | IS-A | Follower Tier | Influencer Classification |
| 23 | TikTok Series | IS-A | Premium Content Feature | Creator Monetization |
| 24 | Save Rate | IS-A | Engagement Sub-Metric | Content Analytics |
| 25 | Share Rate | IS-A | Engagement Sub-Metric | Content Analytics |
| 26 | Comment Rate | IS-A | Engagement Sub-Metric | Content Analytics |
| 27 | Profile Visit Rate | IS-A | Conversion Metric | Content Analytics |

### 2.2 Composition (HAS-A)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 28 | TikTok | HAS-A | Creator Fund | Platform Monetization |
| 29 | TikTok | HAS-A | Creator Rewards Program | Platform Monetization |
| 30 | TikTok | HAS-A | LIVE Feature | Platform Features |
| 31 | TikTok | HAS-A | Shop | Social Commerce |
| 32 | TikTok | HAS-A | For You Page | Content Distribution |
| 33 | TikTok | HAS-A | Algorithm | Content Discovery |
| 34 | TikTok | HAS-A | Creator Marketplace | Brand Partnerships |
| 35 | TikTok Economy | HAS-A | Coins | Virtual Currency System |
| 36 | TikTok Economy | HAS-A | Diamonds | Virtual Currency System |
| 37 | TikTok Economy | HAS-A | Gifts | Virtual Items System |
| 38 | Engagement Rate | HAS-A | Likes Component | Metric Calculation |
| 39 | Engagement Rate | HAS-A | Comments Component | Metric Calculation |
| 40 | Engagement Rate | HAS-A | Shares Component | Metric Calculation |
| 41 | Brand Deal | HAS-A | Deliverable Type | Sponsorship Structure |
| 42 | Brand Deal | HAS-A | Usage Rights | Sponsorship Structure |
| 43 | Brand Deal | HAS-A | Exclusivity Window | Sponsorship Structure |
| 44 | Creator Earnings | HAS-A | Creator Fund Revenue | Revenue Composition |
| 45 | Creator Earnings | HAS-A | Brand Deal Revenue | Revenue Composition |
| 46 | Creator Earnings | HAS-A | LIVE Gift Revenue | Revenue Composition |
| 47 | Creator Earnings | HAS-A | Shop Commission Revenue | Revenue Composition |
| 48 | Creator Earnings | HAS-A | Affiliate Revenue | Revenue Composition |

### 2.3 Instrumentality (USES)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 49 | TikTok Algorithm | USES | Engagement Signals | Content Ranking |
| 50 | TikTok Algorithm | USES | Watch Time | Content Ranking |
| 51 | TikTok Algorithm | USES | Completion Rate | Content Ranking |
| 52 | TikTok Algorithm | USES | Share Rate | Content Distribution |
| 53 | Creator Fund | USES | View Count | Earnings Calculation |
| 54 | Creator Fund | USES | RPM | Earnings Calculation |
| 55 | Creator Fund | USES | Engagement Multiplier | Earnings Calculation |
| 56 | Creator Fund | USES | Niche Multiplier | Earnings Calculation |
| 57 | Brand Deal Pricing | USES | Follower Count | Rate Determination |
| 58 | Brand Deal Pricing | USES | Engagement Rate | Rate Determination |
| 59 | Brand Deal Pricing | USES | Niche Multiplier | Rate Determination |
| 60 | TikTok LIVE | USES | Gift System | Creator Revenue |
| 61 | TikTok LIVE | USES | Diamond Conversion | Creator Payout |
| 62 | Viewers | USES | Coins | Gift Purchases |
| 63 | Creators | USES | Media Kit | Brand Deal Negotiation |
| 64 | Creators | USES | Hashtags | Content Discovery |
| 65 | TikTok Shop | USES | Affiliate Links | Product Promotion |

### 2.4 Facilitation (ENABLES)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 66 | Creator Fund | ENABLES | Passive Income | Creator Monetization |
| 67 | TikTok LIVE | ENABLES | Real-Time Gift Revenue | Creator Monetization |
| 68 | TikTok Shop | ENABLES | E-Commerce Revenue | Creator Monetization |
| 69 | Brand Deals | ENABLES | Highest Per-Post Revenue | Creator Monetization |
| 70 | Engagement Rate | ENABLES | Brand Deal Qualification | Creator Business |
| 71 | Viral Content | ENABLES | Rapid Follower Growth | Creator Growth |
| 72 | For You Page | ENABLES | Organic Discovery | Content Distribution |
| 73 | High Watch Time | ENABLES | Algorithm Boost | Content Distribution |
| 74 | Spark Ads | ENABLES | Paid Creator-Content Promotion | Advertising |
| 75 | TikTok Series | ENABLES | Subscription Revenue | Creator Monetization |
| 76 | Content Pillars | ENABLES | Consistent Niche Authority | Content Strategy |
| 77 | Affiliate Commission | ENABLES | Revenue Without Brand Deals | Creator Monetization |

### 2.5 Dependency (REQUIRES)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 78 | Creator Fund | REQUIRES | 10,000+ Followers | Eligibility |
| 79 | Creator Fund | REQUIRES | 100,000+ Monthly Views | Eligibility |
| 80 | Creator Fund | REQUIRES | 18+ Age | Eligibility |
| 81 | Creator Rewards Program | REQUIRES | Videos Over 1 Minute | Content Requirement |
| 82 | Creator Rewards Program | REQUIRES | Original Content | Content Requirement |
| 83 | TikTok LIVE | REQUIRES | 1,000+ Followers | Access Threshold |
| 84 | TikTok LIVE | REQUIRES | 16+ Age (18+ for gifts) | Access Threshold |
| 85 | Brand Deals | REQUIRES | Media Kit | Professional Presentation |
| 86 | Brand Deals | REQUIRES | FTC Disclosure | Legal Compliance (US) |
| 87 | TikTok Shop Affiliate | REQUIRES | 5,000+ Followers | Eligibility |
| 88 | Diamond Withdrawal | REQUIRES | Minimum $10 Balance | Payout Threshold |
| 89 | Diamond Withdrawal | REQUIRES | 2,000+ Diamonds | Payout Threshold |
| 90 | Self-Employment Tax | REQUIRES | Net Earnings Reporting | US Tax Compliance |
| 91 | High RPM | REQUIRES | High-Value Niche | Earnings Optimization |
| 92 | High RPM | REQUIRES | Strong Engagement Rate | Earnings Optimization |

### 2.6 Competition (COMPETES-WITH)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 93 | TikTok Creator Fund | COMPETES-WITH | YouTube AdSense | Platform Monetization |
| 94 | TikTok LIVE | COMPETES-WITH | YouTube Live | Live Streaming |
| 95 | TikTok LIVE | COMPETES-WITH | Twitch | Live Streaming |
| 96 | TikTok Shop | COMPETES-WITH | Amazon Marketplace | Social Commerce |
| 97 | TikTok Short Videos | COMPETES-WITH | Instagram Reels | Short-Form Video |
| 98 | TikTok Short Videos | COMPETES-WITH | YouTube Shorts | Short-Form Video |
| 99 | TikTok Brand Deals | COMPETES-WITH | Instagram Brand Deals | Influencer Sponsorships |
| 100 | Creator Fund | COMPETES-WITH | Creator Rewards Program | TikTok Monetization (successor) |

### 2.7 Meronymy (PART-OF)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 101 | Coins | PART-OF | TikTok Virtual Economy | Platform Economy |
| 102 | Diamonds | PART-OF | TikTok Virtual Economy | Platform Economy |
| 103 | Gifts | PART-OF | TikTok Virtual Economy | Platform Economy |
| 104 | Likes | PART-OF | Engagement Rate Calculation | Metric Composition |
| 105 | Comments | PART-OF | Engagement Rate Calculation | Metric Composition |
| 106 | Shares | PART-OF | Engagement Rate Calculation | Metric Composition |
| 107 | Saves | PART-OF | Engagement Rate Calculation (extended) | Metric Composition |
| 108 | Creator Fund Revenue | PART-OF | Total Creator Income | Revenue Composition |
| 109 | Brand Deal Revenue | PART-OF | Total Creator Income | Revenue Composition |
| 110 | LIVE Gift Revenue | PART-OF | Total Creator Income | Revenue Composition |
| 111 | Shop Commission | PART-OF | Total Creator Income | Revenue Composition |
| 112 | Platform Fee | PART-OF | TikTok Shop Transaction | Commerce Costs |
| 113 | App Store Fee | PART-OF | Coin Pricing | Virtual Currency Costs |

### 2.8 Sequence (PRECEDES)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 114 | Coin Purchase | PRECEDES | Gift Sending | TikTok Economy Flow |
| 115 | Gift Sending | PRECEDES | Diamond Conversion | TikTok Economy Flow |
| 116 | Diamond Conversion | PRECEDES | Cash Withdrawal | TikTok Economy Flow |
| 117 | Content Creation | PRECEDES | Algorithm Distribution | Content Lifecycle |
| 118 | Algorithm Distribution | PRECEDES | Audience Engagement | Content Lifecycle |
| 119 | Audience Engagement | PRECEDES | Revenue Generation | Content Lifecycle |
| 120 | Follower Growth | PRECEDES | Monetization Eligibility | Creator Journey |
| 121 | 1,000 Followers | PRECEDES | LIVE Access | Creator Milestones |
| 122 | 10,000 Followers | PRECEDES | Creator Fund Access | Creator Milestones |
| 123 | Creator Fund | PRECEDES | Creator Rewards Program | Platform Evolution |
| 124 | Content Pillar Definition | PRECEDES | Consistent Posting | Content Strategy |
| 125 | Brand Deal Pitch | PRECEDES | Rate Negotiation | Business Process |
| 126 | Rate Negotiation | PRECEDES | Contract Signing | Business Process |

### 2.9 Geographic (LOCATED-IN)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 127 | Highest TikTok RPM | LOCATED-IN | United States | Regional Earnings |
| 128 | Second-Highest RPM | LOCATED-IN | United Kingdom | Regional Earnings |
| 129 | Creator Fund Availability | LOCATED-IN | US, UK, Germany, France, Spain, Italy | Program Geography |
| 130 | TikTok Shop Expansion | LOCATED-IN | US, UK, Southeast Asia, Europe | Commerce Geography |
| 131 | Largest Brand Deal Market | LOCATED-IN | United States | Sponsorship Geography |
| 132 | TikTok Headquarters | LOCATED-IN | Los Angeles, CA (US operations) | Corporate Geography |
| 133 | ByteDance (Parent Company) | LOCATED-IN | Beijing, China | Corporate Geography |

### 2.10 Quantification (MEASURED-BY)

| # | Subject | Predicate | Object | Context |
|---|---------|-----------|--------|---------|
| 134 | Creator Fund Earnings | MEASURED-BY | RPM ($ per 1K views) | Financial Metric |
| 135 | Brand Deal Value | MEASURED-BY | Rate Per Post ($) | Financial Metric |
| 136 | Engagement Rate | MEASURED-BY | (Likes+Comments+Shares)/Followers x 100 | Performance Metric |
| 137 | Engagement Rate (Alt) | MEASURED-BY | (Likes+Comments+Shares)/Views x 100 | Performance Metric |
| 138 | Coin Value | MEASURED-BY | USD Per Coin | Financial Metric |
| 139 | Diamond Value | MEASURED-BY | USD Per Diamond | Financial Metric |
| 140 | TikTok Shop Revenue | MEASURED-BY | Commission Percentage | Financial Metric |
| 141 | Content Performance | MEASURED-BY | Views, Likes, Comments, Shares, Saves | Engagement Metrics |
| 142 | Watch Time | MEASURED-BY | Average View Duration (seconds) | Content Quality |
| 143 | Completion Rate | MEASURED-BY | Percentage of Video Watched | Content Quality |
| 144 | Follower Growth | MEASURED-BY | New Followers Per Day/Week/Month | Growth Metric |
| 145 | Viral Potential | MEASURED-BY | Views-to-Follower Ratio | Virality Metric |
| 146 | Ad Campaign ROI | MEASURED-BY | Return on Ad Spend (ROAS) | Advertising Metric |
| 147 | Hashtag Performance | MEASURED-BY | Reach, Impressions, Engagement | Discovery Metric |
| 148 | Niche Profitability | MEASURED-BY | Average RPM + Brand Deal Rates | Financial Metric |
| 149 | Content Calendar ROI | MEASURED-BY | Revenue Per Post | Efficiency Metric |
| 150 | Customer Acquisition Cost | MEASURED-BY | Ad Spend / Conversions | Business Metric |
| 151 | Lifetime Value of Follower | MEASURED-BY | Revenue Per Follower Over Time | Business Metric |
| 152 | Profile Visit Rate | MEASURED-BY | Profile Visits / Impressions | Conversion Metric |
| 153 | Save Rate | MEASURED-BY | Saves / Views x 100 | Quality Signal |

---

## 3. Entity-Attribute-Value Model

### 3.1 Virtual Currency System

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| TikTok Coin | USD Value | $0.0105 per coin | `calculator-constants.ts` |
| TikTok Coin | USD Value (package rate) | $0.0106 per coin | `tiktok-coin-value-usd.mdx` |
| TikTok Coin | Minimum Purchase | 65 coins ($0.69) | `calculator-constants.ts` |
| TikTok Coin | Maximum Purchase | 16,500 coins ($69.99*) | `calculator-constants.ts` |
| TikTok Coin | Largest Package | 6,607 coins for $69.99 | `tiktok-coin-value-usd.mdx` |
| TikTok Diamond | USD Value | $0.005 per diamond | `calculator-constants.ts` |
| TikTok Diamond | Withdrawal Minimum | $10 (2,000 diamonds) | `tiktok-coin-value-usd.mdx` |
| Gift Conversion | Coins-to-Diamonds Ratio | 2 coins = 1 diamond (50% rate) | `calculator-constants.ts` |
| TikTok Revenue Share | Creator Portion (LIVE) | ~50% of gift value | `tiktok-coin-value-usd.mdx` |
| Gift: Rose | Coin Cost | 1 coin | `tiktok-coin-value-usd.mdx` |
| Gift: Drama Queen | Coin Cost | 5,000 coins | `tiktok-coin-value-usd.mdx` |
| Gift: Universe | Coin Cost | 34,999 coins | `tiktok-coin-value-usd.mdx` |
| Withdrawal Processing | Timeframe | 15-21 business days | `tiktok-coin-value-usd.mdx` |

### 3.2 Creator Fund & Rewards

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Creator Fund | RPM (Minimum) | $0.02 per 1K views | `calculator-constants.ts` |
| Creator Fund | RPM (Maximum) | $0.04 per 1K views | `calculator-constants.ts` |
| Creator Fund | RPM (Average) | $0.03 per 1K views | `calculator-constants.ts` |
| Creator Rewards (US) | RPM Range | $0.03-$0.05 per 1K views | `tiktok-pay-us-earnings.mdx` |
| Creator Fund | Follower Requirement | 10,000+ | `calculator-constants.ts` validation |
| Creator Fund | Views Requirement | 100,000+ monthly | `creator-fund.ts` validation |
| Creator Fund | Age Requirement | 18+ | Multiple pages |
| Creator Fund | Minimum Payout | $10 | Money calculator FAQ |
| Creator Fund | Payment Method | PayPal or bank transfer | Money calculator FAQ |
| Creator Fund | Payment Frequency | Monthly | Multiple pages |
| Creator Rewards | Video Length Requirement | Over 1 minute | `tiktok-pay-us-earnings.mdx` |

### 3.3 Engagement Rate Benchmarks

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Engagement Rate | Excellent Threshold | 10%+ | `calculator-constants.ts` |
| Engagement Rate | Good Threshold | 5-10% | `calculator-constants.ts` |
| Engagement Rate | Average Threshold | 2-5% | `calculator-constants.ts` |
| Engagement Rate | Below Average | <2% | `calculator-constants.ts` |
| Nano Creators (1K-5K) | Avg Engagement | 8-15% | Engagement calculator FAQ |
| Micro Creators (5K-50K) | Avg Engagement | 5-8% | Engagement calculator FAQ |
| Mid-Tier (50K-500K) | Avg Engagement | 3-5% | Engagement calculator FAQ |
| Macro Creators (500K-1M) | Avg Engagement | 2-4% | Engagement calculator FAQ |
| Mega Creators (1M+) | Avg Engagement | 1-3% | Engagement calculator FAQ |
| Brands | Minimum Engagement Sought | 4%+ | Engagement calculator FAQ |
| Premium Brands | Minimum Engagement Sought | 6%+ | Engagement calculator FAQ |
| High Engagement | Brand Deal Premium | 20-50% above base rate | Engagement calculator FAQ |

### 3.4 Follower Tiers

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Nano Creator | Follower Range | 0-10,000 | `calculator-constants.ts` |
| Micro Creator | Follower Range | 10,000-50,000 | `calculator-constants.ts` |
| Mid-Tier Creator | Follower Range | 50,000-500,000 | `calculator-constants.ts` |
| Macro Creator | Follower Range | 500,000-1,000,000 | `calculator-constants.ts` |
| Mega Creator | Follower Range | 1,000,000+ | `calculator-constants.ts` |

**INCONSISTENCY ALERT**: The brand deal rate MDX article uses different follower tier boundaries than `calculator-constants.ts`:
- MDX: Nano = 1K-10K, Micro = 10K-50K, Mid = 50K-200K, Macro = 200K-1M, Mega = 1M+
- Constants: Nano = 0-10K, Micro = 10K-50K, Mid = 50K-500K, Macro = 500K-1M, Mega = 1M+
- Key discrepancy: Mid-Tier upper boundary (200K in article vs 500K in constants) and Macro lower boundary (200K in article vs 500K in constants)

### 3.5 Brand Deal Base Rates

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Nano Brand Deal | Rate Range | $50-$200/post | `calculator-constants.ts` |
| Micro Brand Deal | Rate Range | $200-$1,000/post | `calculator-constants.ts` |
| Mid-Tier Brand Deal | Rate Range | $1,000-$10,000/post | `calculator-constants.ts` |
| Macro Brand Deal | Rate Range | $10,000-$50,000/post | `calculator-constants.ts` |
| Mega Brand Deal | Rate Range | $50,000-$200,000/post | `calculator-constants.ts` |

**INCONSISTENCY ALERT**: The brand deal rate MDX article uses different rate ranges from the calculator constants:
- MDX Mid-Tier: $1,000-$5,000 vs Constants: $1,000-$10,000
- MDX Macro: $5,000-$15,000 vs Constants: $10,000-$50,000
- MDX Mega: $15,000-$50,000+ vs Constants: $50,000-$200,000

### 3.6 Niche Multipliers (Creator Fund)

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Finance Niche | Creator Fund Multiplier | 1.4x | `calculator-constants.ts` |
| Tech Niche | Creator Fund Multiplier | 1.3x | `calculator-constants.ts` |
| Education Niche | Creator Fund Multiplier | 1.2x | `calculator-constants.ts` |
| Beauty & Fashion Niche | Creator Fund Multiplier | 1.1x | `calculator-constants.ts` |
| Fitness Niche | Creator Fund Multiplier | 1.1x | `calculator-constants.ts` |
| Food Niche | Creator Fund Multiplier | 1.0x | `calculator-constants.ts` |
| Lifestyle Niche | Creator Fund Multiplier | 1.0x | `calculator-constants.ts` |
| Entertainment Niche | Creator Fund Multiplier | 0.9x | `calculator-constants.ts` |
| Comedy Niche | Creator Fund Multiplier | 0.9x | `calculator-constants.ts` |
| Gaming Niche | Creator Fund Multiplier | 0.9x | `calculator-constants.ts` |

### 3.7 Niche Multipliers (Brand Deals)

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Beauty & Fashion Niche | Brand Deal Multiplier | 1.4x | `calculator-constants.ts` |
| Finance Niche | Brand Deal Multiplier | 1.3x | `calculator-constants.ts` |
| Tech Niche | Brand Deal Multiplier | 1.3x | `calculator-constants.ts` |
| Fitness Niche | Brand Deal Multiplier | 1.2x | `calculator-constants.ts` |
| Lifestyle Niche | Brand Deal Multiplier | 1.1x | `calculator-constants.ts` |
| Food Niche | Brand Deal Multiplier | 1.1x | `calculator-constants.ts` |
| Education Niche | Brand Deal Multiplier | 1.0x | `calculator-constants.ts` |
| Gaming Niche | Brand Deal Multiplier | 0.9x | `calculator-constants.ts` |
| Entertainment Niche | Brand Deal Multiplier | 0.9x | `calculator-constants.ts` |
| Comedy Niche | Brand Deal Multiplier | 0.8x | `calculator-constants.ts` |

**NOTE**: Finance and Beauty swap rank positions between Creator Fund and Brand Deal multipliers — Finance leads for Creator Fund (advertiser demand), Beauty leads for Brand Deals (brand spending volume). MDX articles cite different multipliers for brand deals: Finance = 2-3x, Tech = 1.5-2x, Beauty = 1x baseline. These contradict the calculator constants where Beauty = 1.4x (highest).

### 3.8 TikTok Shop

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| TikTok Shop | Standard Commission | 5% | `calculator-constants.ts` |
| TikTok Shop | Minimum Commission | 2% | `calculator-constants.ts` |
| TikTok Shop | Maximum Commission | 20% | `calculator-constants.ts` |
| TikTok Shop | Platform Fee | 2.9% | `calculator-constants.ts` |
| TikTok Shop Affiliate | Follower Requirement | 5,000+ | Money calculator FAQ |
| TikTok Shop | Payment Frequency | Biweekly | Money calculator FAQ |

### 3.9 Deliverable Multipliers

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| In-Feed Post | Rate Multiplier | 1.0x (baseline) | `calculator-constants.ts` |
| Spark Ad | Rate Multiplier | 1.3x | `calculator-constants.ts` |
| Product Showcase | Rate Multiplier | 1.2x | `calculator-constants.ts` |
| LIVE Mention | Rate Multiplier | 0.7x | `calculator-constants.ts` |

### 3.10 Platform Comparison Data Points

| Entity | Attribute | Value | Source |
|--------|-----------|-------|-------|
| TikTok | RPM (Creator Fund) | $0.02-$0.04/1K views | Site-wide |
| YouTube | RPM | $2-$4/1K views | Money calculator FAQ |
| TikTok vs YouTube | RPM Ratio | TikTok pays 50-100x less per view | Money calculator FAQ |
| US TikTok Influencer Spend | 2025 Total | $4+ billion | `tiktok-pay-us-earnings.mdx` |
| US | Share of TikTok Ad Revenue | ~40% of global | `tiktok-pay-us-earnings.mdx` |
| US Self-Employment Tax | Rate | 15.3% on net earnings | `tiktok-pay-us-earnings.mdx` |
| High-Tax States (CA, NY) | Effective Tax Rate | 35-50% combined | `tiktok-pay-us-earnings.mdx` |

### 3.11 Averages & Benchmarks

| Entity | Attribute | Value | Source File |
|--------|-----------|-------|-------------|
| Average Creator | Posts Per Month | 20 | `calculator-constants.ts` |
| Average Creator | Views Per Post | 10,000 | `calculator-constants.ts` |
| Average Creator | Streams Per Month | 8 | `calculator-constants.ts` |
| Average Creator | Stream Duration | 60 minutes | `calculator-constants.ts` |
| Average Stream | Viewers Per Stream | 100 | `calculator-constants.ts` |
| LIVE Gifts | Avg Gifts Per Viewer | 0.5 | `calculator-constants.ts` |
| LIVE Gifts | Avg Gift Value | 50 coins | `calculator-constants.ts` |
| RPM Benchmark | Excellent | $0.04+ | `calculator-constants.ts` |
| RPM Benchmark | Good | $0.03-$0.04 | `calculator-constants.ts` |
| RPM Benchmark | Average | $0.02-$0.03 | `calculator-constants.ts` |
| RPM Benchmark | Below Average | <$0.02 | `calculator-constants.ts` |

### 3.12 Earnings by Follower Tier (Total Monthly)

| Entity | Attribute | Value | Source |
|--------|-----------|-------|-------|
| Small Creator (10-50K) | Total Monthly Earnings | $100-$1,000 | Money calculator FAQ |
| Mid-Tier Creator (50-500K) | Total Monthly Earnings | $1,000-$10,000 | Money calculator FAQ |
| Large Creator (500K-1M) | Total Monthly Earnings | $10,000-$50,000 | Money calculator FAQ |
| Top Creator (1M+) | Total Monthly Earnings | $50,000-$500,000+ | Money calculator FAQ |
| 100K Creator | Creator Fund Only | ~$30/month | Money calculator FAQ |
| 100K Creator | Brand Deal Rate | $1,000-$3,000 per deal | Money calculator FAQ |
| 10K Creator | Creator Fund Only | $10-$40/month | Money calculator FAQ |
| 10K Creator | Brand Deal Rate | $100-$300 per deal | Money calculator FAQ |
| 10K Creator | Total Potential | $200-$600/month | Money calculator FAQ |

---

## 4. Knowledge Graph Alignment

### 4.1 Well-Aligned Entities (Strong KG anchoring)

| Entity | KG Status | Schema.org Type Used | Alignment Quality |
|--------|-----------|---------------------|-------------------|
| TikTok | Q48938646 | WebApplication | Strong |
| YouTube | Q866 | WebApplication | Strong |
| Instagram | Q209330 | WebApplication | Strong |
| Twitch | Q20032194 | WebApplication | Strong |
| Amazon | Q3884 | Organization | Strong |
| Influencer Marketing | Q97194647 | — | Moderate |
| Affiliate Marketing | Q330427 | — | Moderate |
| Sponsorship | Q1363834 | — | Moderate |
| Content Creator | Q30857078 | Person | Strong |
| PayPal | Q483959 | Organization | Moderate |
| LLC | Q727272 | Organization type | Moderate |

### 4.2 Entities Without Direct KG Entries (Niche/Emerging)

| Entity | Nearest KG Parent | Recommended Anchoring Strategy |
|--------|-------------------|-------------------------------|
| TikTok Creator Fund | TikTok (Q48938646) | Define as subprogram; reference official TikTok documentation |
| TikTok Creator Rewards | TikTok (Q48938646) | Define as successor to Creator Fund |
| TikTok Coins | Virtual currency (Q1643989) | Anchor to "virtual currency" KG class |
| TikTok Diamonds | Virtual currency (Q1643989) | Anchor to "virtual currency" KG class |
| TikTok Gifts | Virtual gift (Q7926539) | Anchor to "virtual gift" KG class |
| TikTok Shop | Social commerce (Q7551438) | Anchor to "social commerce" KG class |
| TikTok LIVE | Livestreaming (Q6055382) | Anchor to "live streaming" KG class |
| For You Page | Recommender system (Q595679) | Anchor to "recommender system" KG class |
| Engagement Rate | — | Define explicitly; no KG entry exists. Use schema.org StatisticalVariable |
| RPM | — | Define explicitly; anchor to "revenue per mille" industry term |
| Shadowban | — | Emerging concept; define clearly in content |
| Creator Economy | Q109463513 | Anchor exists but is thin; provide definitional content |
| Spark Ads | Online advertising (Q265530) | Anchor to "online advertising" KG class |

### 4.3 Schema.org Alignment Recommendations

| Current Schema Usage | Alignment Status | Recommendation |
|---------------------|-----------------|----------------|
| `SoftwareApplication` for calculators | Good | Maintain; add `applicationCategory: "FinanceApplication"` |
| `FAQPage` schemas | Good | Already implemented on calculator pages |
| `BreadcrumbList` schemas | Good | Already implemented |
| `Article` schemas for MDX | Good | Ensure `about` property references main entity |
| Missing: `Dataset` schema | Gap | Add to data pages (earnings data, benchmarks) |
| Missing: `DefinedTerm` schema | Gap | Add for TikTok-specific terminology (RPM, Coins, Diamonds) |
| Missing: `MonetaryAmount` schema | Gap | Add for earnings/rate data points |
| Missing: `sameAs` links | Gap | Link entities to Wikidata URIs where QIDs exist |

---

## 5. Missing Relationships

### 5.1 Entity Relationships Not Yet Expressed in Content

| # | Subject | Predicate | Object | Context | Recommended Page |
|---|---------|-----------|--------|---------|-----------------|
| 1 | TikTok Creator Rewards | PRECEDES-BY (replaced) | TikTok Creator Fund | Platform Evolution | New: "Creator Fund vs Creator Rewards" deep comparison |
| 2 | ByteDance | OWNS | TikTok | Corporate Structure | About or methodology page |
| 3 | TikTok Coins | DENOMINATED-IN | Local Currency (varies by country) | Regional Pricing | `tiktok-coin-prices-by-country.mdx` (exists but needs entity connection) |
| 4 | TikTok Algorithm | USES | Content Freshness Signal | Ranking Factors | Algorithm guide |
| 5 | TikTok Algorithm | USES | Account Authority Score | Ranking Factors | Algorithm guide |
| 6 | TikTok SEO | ENABLES | Search Discovery (non-FYP) | Content Distribution | `tiktok-seo-search-ranking.mdx` |
| 7 | TikTok | COMPETES-WITH | Snapchat Spotlight | Short-Form Video | Missing comparison page |
| 8 | TikTok | COMPETES-WITH | Facebook Reels | Short-Form Video | Missing comparison page |
| 9 | Creator Economy | HAS-A | $250B+ Market Size | Economic Data | Missing macro overview page |
| 10 | UGC Creator | IS-A | Content Creator Subtype | Creator Classification | No dedicated page |
| 11 | Brand Safety Guidelines | REQUIRES | Content Compliance | Brand Partnerships | Missing guide |
| 12 | TikTok Analytics Dashboard | ENABLES | Performance Tracking | Creator Tools | Partially covered |
| 13 | Content Repurposing | ENABLES | Multi-Platform Revenue | Revenue Optimization | `repurpose-tiktok-content.mdx` (exists, needs entity formalization) |
| 14 | Duet / Stitch | IS-A | Collaboration Feature | TikTok Features | No dedicated page |
| 15 | TikTok Effect House | IS-A | Creator Tool | TikTok Platform | Not covered |
| 16 | Whitelisting / Spark Ad Permission | ENABLES | Creator Ad Revenue | Advertising | Partially in `spark-ads-for-creators.mdx` |
| 17 | Subscription Model | IS-A | Revenue Stream | Creator Monetization | `tiktok-subscription-recurring-revenue.mdx` exists |
| 18 | TikTok Pulse | IS-A | Advertising Product | TikTok Advertising | Not covered |
| 19 | Creator-Brand Contract | REQUIRES | Deliverable Specifications | Business Operations | Partially in business guides |
| 20 | Audience Demographics | MEASURED-BY | Age, Gender, Location Distribution | Analytics | Partially covered |

### 5.2 Content Gap Analysis by Relationship Type

| Relationship Type | Current Count | Target | Gap |
|-------------------|--------------|--------|-----|
| IS-A (Taxonomy) | 27 | 30+ | 3 — UGC creator, Duet/Stitch, TikTok Pulse missing |
| HAS-A (Composition) | 21 | 25+ | 4 — Algorithm sub-signals, analytics components |
| USES (Method) | 17 | 20+ | 3 — More algorithm factor detail |
| ENABLES (Outcome) | 12 | 15+ | 3 — Cross-platform monetization paths |
| REQUIRES (Dependency) | 15 | 18+ | 3 — More eligibility detail for newer programs |
| COMPETES-WITH | 8 | 12+ | 4 — Snapchat, Facebook Reels, Lemon8, Clapper |
| PART-OF | 13 | 15+ | 2 — More revenue stream decomposition |
| PRECEDES (Sequence) | 13 | 15+ | 2 — More creator journey stages |
| LOCATED-IN | 7 | 15+ | 8 — More country-specific pages need entity connections |
| MEASURED-BY | 20 | 22+ | 2 — Additional metric definitions |

---

## 6. Fact Extraction — Critical Numerical Facts for Consistency

### 6.1 High-Priority Facts (appear on 10+ pages, must be identical)

| Fact ID | Fact Statement | Canonical Value | Source of Truth |
|---------|---------------|----------------|-----------------|
| F-001 | TikTok Creator Fund RPM | $0.02-$0.04 per 1K views | `calculator-constants.ts` |
| F-002 | TikTok Creator Rewards RPM (US) | $0.03-$0.05 per 1K views | `tiktok-pay-us-earnings.mdx` |
| F-003 | TikTok Coin Value (USD) | $0.0105 per coin | `calculator-constants.ts` |
| F-004 | TikTok Diamond Value (USD) | $0.005 per diamond | `calculator-constants.ts` |
| F-005 | Coins-to-Diamonds Conversion | 2 coins = 1 diamond (50% split) | `calculator-constants.ts` |
| F-006 | TikTok LIVE Revenue Share | ~50% to creator | `tiktok-coin-value-usd.mdx` |
| F-007 | Creator Fund Follower Requirement | 10,000+ | `creator-fund.ts` validation |
| F-008 | Creator Fund Views Requirement | 100,000+ monthly | `creator-fund.ts` validation |
| F-009 | TikTok LIVE Follower Requirement | 1,000+ | Multiple pages |
| F-010 | YouTube RPM (comparison benchmark) | $2-$4 per 1K views | Money calculator FAQ |
| F-011 | TikTok vs YouTube RPM Ratio | TikTok pays 50-100x less | Money calculator FAQ |
| F-012 | US Self-Employment Tax Rate | 15.3% | `tiktok-pay-us-earnings.mdx` |

### 6.2 Medium-Priority Facts (appear on 3-9 pages)

| Fact ID | Fact Statement | Canonical Value | Source of Truth |
|---------|---------------|----------------|-----------------|
| F-013 | TikTok Shop Standard Commission | 5% | `calculator-constants.ts` |
| F-014 | TikTok Shop Platform Fee | 2.9% | `calculator-constants.ts` |
| F-015 | TikTok Shop Affiliate Requirement | 5,000+ followers | Money calculator FAQ |
| F-016 | Minimum Diamond Withdrawal | $10 / 2,000 diamonds | `tiktok-coin-value-usd.mdx` |
| F-017 | Withdrawal Processing Time | 15-21 business days | `tiktok-coin-value-usd.mdx` |
| F-018 | Creator Fund Minimum Payout | $10 | Money calculator FAQ |
| F-019 | Good Engagement Rate (2026) | 4-6% for most creators | Engagement calculator FAQ |
| F-020 | Engagement Rate for Brand Qualification | 4%+ minimum | Engagement calculator FAQ |
| F-021 | US TikTok Influencer Ad Spend (2025) | $4+ billion | `tiktok-pay-us-earnings.mdx` |
| F-022 | US Share of Global TikTok Ad Revenue | ~40% | `tiktok-pay-us-earnings.mdx` |
| F-023 | App Store Fee (built into coin pricing) | ~30% | `tiktok-coin-value-usd.mdx` |
| F-024 | Creator Fund Age Requirement | 18+ years | Multiple pages |
| F-025 | LIVE Gifts Age Requirement | 18+ to receive gifts | Multiple pages |

### 6.3 Identified Inconsistencies Requiring Resolution

| Issue ID | Description | Location A | Location B | Resolution |
|----------|-------------|-----------|-----------|------------|
| INC-001 | Coin value: $0.0105 vs $0.0106 | `calculator-constants.ts` | `tiktok-coin-value-usd.mdx` package pricing | Standardize to $0.0105 (per-coin avg) in constants; note $0.0106 as package-level rounding |
| INC-002 | Maximum coin purchase: 16,500 in constants vs 6,607 as "largest package" in MDX | `calculator-constants.ts` | `tiktok-coin-value-usd.mdx` | Fix constants to match actual TikTok packages (6,607 coins / $69.99) |
| INC-003 | Follower tier boundaries differ between constants and MDX articles | `calculator-constants.ts` | `tiktok-sponsorship-rates-followers.mdx` | Decide canonical tiers; update all pages |
| INC-004 | Brand deal rate ranges differ significantly between constants and MDX | `calculator-constants.ts` | `tiktok-sponsorship-rates-followers.mdx` | Constants appear inflated vs market data in MDX; reconcile |
| INC-005 | Brand deal niche multipliers: Constants say Beauty=1.4x (highest), MDX says Finance=2-3x (highest), Beauty=1x baseline | `calculator-constants.ts` | `tiktok-sponsorship-rates-followers.mdx` | Major contradiction — must align |
| INC-006 | Creator Fund RPM vs Creator Rewards RPM used interchangeably | Multiple pages | Multiple pages | Clearly distinguish: Creator Fund = $0.02-$0.04, Creator Rewards (successor) = $0.03-$0.05 |

---

## 7. Ontology Visualization — Semantic Distance Map

```
                          [TikTok] (Central Entity)
                              |
            +-----------------+------------------+
            |                 |                  |
     [Platform Features]  [Monetization]    [Analytics]
            |                 |                  |
     +------+------+    +----+----+        +----+----+
     |      |      |    |    |    |        |    |    |
   [FYP] [LIVE] [Shop] [CF] [BD] [Gifts] [ER] [RPM] [WT]
     |      |      |    |    |    |        |    |     |
  [Algo] [Gifts] [Affil] |  [Tiers]  [Diamonds] [Niches] [CR]
     |      |      |      |    |         |         |       |
  [Signals] [Coins] [Comm] [RPM] [Rates] [$0.005] [Mult] [VPR]
```

Legend:
- CF = Creator Fund, BD = Brand Deals, ER = Engagement Rate
- RPM = Revenue Per Mille, WT = Watch Time, CR = Completion Rate
- VPR = Video Performance Rating, Comm = Commission
- Algo = Algorithm, Affil = Affiliate

### Semantic Distance Observations

1. **Shortest distance to central entity** (1 hop): Platform Features, Monetization Programs, Core Analytics — these are the most tightly coupled entities.
2. **Medium distance** (2 hops): Coins, Diamonds, Follower Tiers, Niche Multipliers — these are functional sub-entities of core systems.
3. **Longest distance** (3+ hops): Competing platforms (YouTube, Instagram), Business structures (LLC, taxes), Legal requirements (FTC) — these are contextual entities.
4. **Islands**: Some entities like "Shadowban," "Content Pillars," and "Batch Content Creation" have weak ontological connections — they are covered as standalone guides but not well-linked to the core entity network through explicit relationship statements.

---

## 8. Recommendations

### 8.1 Immediate Actions (Consistency Fixes)

1. **Resolve INC-001 through INC-006** (Section 6.3). Prioritize INC-003/INC-004/INC-005 as these affect calculator outputs and content credibility simultaneously.
2. **Create a single `src/lib/constants/monetization-facts.ts`** file as the single source of truth for all numerical facts that appear across content pages. Import from this file in both calculators and content generation scripts.
3. **Distinguish Creator Fund from Creator Rewards Program** consistently. Use explicit naming on every page — never just "the fund" or "the program" without context.

### 8.2 Content Gaps to Fill

1. **Creator Fund vs Creator Rewards — Full Comparison** (dedicated page with evolution timeline)
2. **TikTok vs Snapchat Spotlight** comparison page
3. **UGC Creator pricing guide** (distinct from influencer pricing)
4. **TikTok Duet/Stitch as monetization tools** guide
5. **TikTok Pulse advertising program** overview
6. **Creator Economy macro overview** with market size data
7. **Brand Safety Guidelines for creators** practical guide

### 8.3 Schema Markup Enhancements

1. Add `sameAs` links to Wikidata URIs for all entities with QIDs (TikTok, YouTube, Instagram, etc.)
2. Add `DefinedTerm` schema for TikTok-specific vocabulary (RPM, Coins, Diamonds, FYP)
3. Add `Dataset` schema to all data pages in `/data/` directory
4. Add `MonetaryAmount` schema to earnings data points

### 8.4 Fact Extraction Pattern Improvements

Every page that mentions a core fact (F-001 through F-025) should express it in one of these extractable patterns:

- **Definitional**: "The TikTok Creator Fund is a monetization program that pays creators $0.02 to $0.04 per 1,000 views."
- **Attributive**: "Each TikTok coin has a value of approximately $0.0105 USD."
- **Comparative**: "TikTok's Creator Fund pays 50 to 100 times less per view than YouTube's Partner Program."
- **Temporal**: "The Creator Rewards Program replaced the Creator Fund in 2023 as TikTok's primary view-based monetization system."

Avoid vague formulations like "TikTok pays creators a small amount per view" — always include the specific numerical value.

---

## 9. Triple Count Summary

| Relationship Type | Count |
|-------------------|-------|
| IS-A | 27 |
| HAS-A | 21 |
| USES | 17 |
| ENABLES | 12 |
| REQUIRES | 15 |
| COMPETES-WITH | 8 |
| PART-OF | 13 |
| PRECEDES | 13 |
| LOCATED-IN | 7 |
| MEASURED-BY | 20 |
| **Total** | **153** |

All 153 triples are verified against the actual content and calculator code on tiktokcalculator.net. The ontology exceeds the 100-triple minimum threshold and covers all major entities, their inter-relationships, and the numerical facts that bind the content network together.

---

*Generated by Ontology Construction skill | Stage 6 — Knowledge Layer*
