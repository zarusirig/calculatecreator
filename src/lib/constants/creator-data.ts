/**
 * Centralized Creator Data Constants
 * ===================================
 * Single source of truth for ALL rates, benchmarks, conversion values, and
 * factual data points used across tiktokcalculator.net.
 *
 * WHY THIS FILE EXISTS:
 * A cross-page consistency audit (2026-03-18) found 19 factual contradictions
 * and 6 data constant mismatches across 350+ pages. This file resolves those
 * contradictions by establishing canonical values derived from the ontology
 * E-A-V model (outputs/06-ontology-construction.md) and cross-page audit
 * (outputs/09-cross-page-consistency.md).
 *
 * RULES:
 * 1. Import from THIS file for any data that appears on more than one page.
 * 2. Do NOT hardcode rates, thresholds, or conversion values elsewhere.
 * 3. When TikTok officially changes a value, update it HERE and it propagates
 *    to all calculators, articles, and schema markup automatically.
 * 4. Every value includes a JSDoc comment citing its source and date.
 *
 * @module creator-data
 * @see outputs/06-ontology-construction.md (E-A-V model sections 3.1-3.12)
 * @see outputs/09-cross-page-consistency.md (contradiction resolution)
 */

// ============================================================================
// TYPES
// ============================================================================

/** Follower tier classification names */
export type TierName = 'nano' | 'micro' | 'mid' | 'macro' | 'mega';

/** Content niche identifiers */
export type NicheKey =
  | 'lifestyle'
  | 'beauty-fashion'
  | 'fitness'
  | 'finance'
  | 'gaming'
  | 'food'
  | 'comedy'
  | 'education'
  | 'entertainment'
  | 'tech'
  | 'other';

/** Range with min/max values */
export interface Range {
  min: number;
  max: number;
}

/** Follower tier definition */
export interface TierDefinition {
  label: string;
  range: Range;
  /** Average engagement rate range for this tier */
  avgEngagement: Range;
  /** Brand deal rate range (USD per post, in-feed baseline) */
  brandDealRate: Range;
  /** Estimated total monthly earnings (all revenue streams) */
  totalMonthlyEarnings: Range;
}

/** Niche data with multipliers and benchmarks */
export interface NicheData {
  displayName: string;
  /** Multiplier applied to Creator Fund RPM (advertiser demand driven) */
  creatorFundMultiplier: number;
  /** Multiplier applied to brand deal base rates (brand spending driven) */
  brandDealMultiplier: number;
  /** Average engagement rate for this niche (all-tier, view-based) */
  avgEngagementRate: number;
  /** Creator Rewards RPM range for this niche (USD per 1K qualified views) */
  creatorRewardsRpm: Range;
}

/** TikTok LIVE gift definition */
export interface GiftDefinition {
  name: string;
  coinCost: number;
  /** Approximate USD cost to viewer (using in-app coin rate) */
  viewerCostUsd: number;
  /** Approximate USD payout to creator (after 50% revenue share) */
  creatorPayoutUsd: number;
}

/** Platform comparison data point */
export interface PlatformComparison {
  platform: string;
  rpmRange: Range;
  brandDealMultiplier: number;
  notes: string;
}

// ============================================================================
// VIRTUAL CURRENCY SYSTEM
// ============================================================================

/**
 * TikTok Coin values and conversion rates.
 *
 * @source TikTok in-app pricing, verified 2026-03-01
 * @source outputs/06-ontology-construction.md Section 3.1
 * @resolution INC-001 from cross-page audit: standardized to $0.0106 (in-app rate)
 */
export const COINS = {
  /** USD value per coin — in-app purchase rate ($0.69 / 65 coins = $0.01062) */
  USD_PER_COIN: 0.0106,

  /** Coins purchasable per USD (1 / 0.0106) */
  COINS_PER_DOLLAR: 94.34,

  /** Minimum coin purchase (65 coins for $0.69) */
  MIN_PURCHASE_COINS: 65,
  MIN_PURCHASE_USD: 0.69,

  /**
   * Maximum single-purchase package (6,607 coins for $69.99).
   * @resolution INC from cross-page audit: was 16,500 in old constants, corrected
   *   to match actual TikTok in-app packages
   */
  MAX_PURCHASE_COINS: 6607,
  MAX_PURCHASE_USD: 69.99,

  /** Coins-to-diamonds conversion ratio: 2 coins = 1 diamond (50% split) */
  COINS_PER_DIAMOND: 2,

  /**
   * Web purchase discount rate — coins are cheaper when purchased via
   * tiktok.com vs in-app (no App Store 30% fee).
   * Effective per-coin rate on web: ~$0.0105
   */
  WEB_USD_PER_COIN: 0.0105,
} as const;

/**
 * TikTok Diamond values and withdrawal thresholds.
 *
 * @source TikTok Creator Portal, verified 2026-03-01
 * @source outputs/06-ontology-construction.md Section 3.1
 */
export const DIAMONDS = {
  /** USD value per diamond */
  USD_PER_DIAMOND: 0.005,

  /** Diamonds per USD (1 / 0.005) */
  DIAMONDS_PER_DOLLAR: 200,

  /**
   * Minimum withdrawal: tiered system.
   * New creators: $1 (200 diamonds), regular: $10 (2,000 diamonds).
   * @resolution INC from cross-page audit: clarified tiered system
   */
  MIN_WITHDRAWAL_USD_NEW: 1,
  MIN_WITHDRAWAL_DIAMONDS_NEW: 200,
  MIN_WITHDRAWAL_USD_REGULAR: 10,
  MIN_WITHDRAWAL_DIAMONDS_REGULAR: 2000,

  /**
   * Withdrawal processing time.
   * @resolution INC-014: standardized across pages
   */
  WITHDRAWAL_DAYS_MIN: 5,
  WITHDRAWAL_DAYS_MAX: 21,
  WITHDRAWAL_DAYS_TYPICAL: '5-15 business days, up to 21 in some cases',
} as const;

/**
 * TikTok LIVE revenue share and gift economy.
 *
 * @source TikTok Creator Portal, verified 2026-03-01
 * @source outputs/06-ontology-construction.md Section 3.1
 */
export const LIVE_REVENUE = {
  /** Creator's share of gift value (approximately 50%) */
  CREATOR_REVENUE_SHARE: 0.50,

  /** Age requirement to go LIVE */
  LIVE_MIN_AGE: 16,

  /** Age requirement to receive gifts on LIVE */
  GIFTS_MIN_AGE: 18,

  /** Follower requirement for LIVE access */
  LIVE_MIN_FOLLOWERS: 1000,

  /** Average gifts per viewer per stream (benchmark) */
  AVG_GIFTS_PER_VIEWER: 0.5,

  /** Average gift value in coins (benchmark) */
  AVG_GIFT_VALUE_COINS: 50,
} as const;

/**
 * Notable TikTok LIVE gifts with canonical coin costs.
 *
 * @source TikTok in-app gift menu, verified 2026-03-01
 * @note USD values use in-app coin rate ($0.0106/coin)
 * @note Creator payout assumes 50% revenue share
 * @resolution INC-005/INC-015: standardized gift values using in-app pricing
 */
export const GIFTS: GiftDefinition[] = [
  { name: 'Rose', coinCost: 1, viewerCostUsd: 0.01, creatorPayoutUsd: 0.005 },
  { name: 'Ice Cream Cone', coinCost: 1, viewerCostUsd: 0.01, creatorPayoutUsd: 0.005 },
  { name: 'Finger Heart', coinCost: 5, viewerCostUsd: 0.05, creatorPayoutUsd: 0.025 },
  { name: 'GG', coinCost: 10, viewerCostUsd: 0.11, creatorPayoutUsd: 0.05 },
  { name: 'Doughnut', coinCost: 30, viewerCostUsd: 0.32, creatorPayoutUsd: 0.16 },
  { name: 'Hand Heart', coinCost: 100, viewerCostUsd: 1.06, creatorPayoutUsd: 0.53 },
  { name: 'Perfume', coinCost: 300, viewerCostUsd: 3.18, creatorPayoutUsd: 1.59 },
  { name: 'Gold Mine', coinCost: 1000, viewerCostUsd: 10.60, creatorPayoutUsd: 5.30 },
  {
    name: 'Drama Queen',
    coinCost: 5000,
    viewerCostUsd: 53.00,
    creatorPayoutUsd: 26.50,
  },
  { name: 'Lion', coinCost: 29999, viewerCostUsd: 317.99, creatorPayoutUsd: 159.00 },
  {
    name: 'Universe',
    coinCost: 34999,
    viewerCostUsd: 370.99,
    creatorPayoutUsd: 185.50,
  },
];

// ============================================================================
// CREATOR FUND (Legacy)
// ============================================================================

/**
 * TikTok Creator Fund — legacy program data.
 * The Creator Fund uses a fixed-pool model and has been superseded by
 * Creator Rewards in most markets but remains active in some regions.
 *
 * @source TikTok Creator Portal, calculator-constants.ts baseline
 * @source outputs/06-ontology-construction.md Section 3.2
 * @resolution INC from cross-page audit: max updated from $0.04 to $0.05 to
 *   align with article consensus (F-001)
 */
export const CREATOR_FUND = {
  /** Program status */
  STATUS: 'legacy' as const,
  STATUS_DESCRIPTION:
    'Still available in some regions but superseded by Creator Rewards in most markets.',

  /** RPM range (USD per 1,000 views) */
  RPM_MIN: 0.02,
  RPM_MAX: 0.05,
  RPM_AVG: 0.03,

  /** Eligibility requirements */
  MIN_FOLLOWERS: 10000,
  MIN_MONTHLY_VIEWS: 100000,
  MIN_AGE: 18,

  /** Payout details */
  MIN_PAYOUT_USD: 10,
  PAYMENT_FREQUENCY: 'monthly' as const,
  PAYMENT_METHODS: ['PayPal', 'bank transfer'] as const,

  /** Available regions (as of 2026-03-01) */
  ELIGIBLE_COUNTRIES: ['US', 'UK', 'Germany', 'France', 'Spain', 'Italy'] as const,
} as const;

// ============================================================================
// CREATOR REWARDS PROGRAM (Current)
// ============================================================================

/**
 * TikTok Creator Rewards Program — current primary monetization program.
 * Replaced the Creator Fund with significantly higher RPMs for qualifying
 * original long-form content.
 *
 * @source TikTok Creator Portal, verified 2026-03-01
 * @source outputs/06-ontology-construction.md Section 3.2
 * @resolution INC-002/INC-003 from cross-page audit: RPM and multiplier aligned
 */
export const CREATOR_REWARDS = {
  /** Program status */
  STATUS: 'active' as const,

  /** RPM range for qualifying content (USD per 1,000 qualified views, US market) */
  RPM_MIN: 0.50,
  RPM_MAX: 2.00,

  /**
   * Earnings multiplier vs legacy Creator Fund.
   * @resolution INC-003: standardized to "10-40x" across all pages
   */
  VS_FUND_MULTIPLIER_MIN: 10,
  VS_FUND_MULTIPLIER_MAX: 40,
  VS_FUND_MULTIPLIER_LABEL: '10-40x vs legacy Creator Fund',

  /** Content requirements */
  MIN_VIDEO_LENGTH_SECONDS: 60,
  REQUIRES_ORIGINAL_CONTENT: true,

  /** Eligibility requirements */
  MIN_FOLLOWERS: 10000,
  MIN_MONTHLY_VIEWS: 100000,
  MIN_AGE: 18,
} as const;

// ============================================================================
// FOLLOWER TIERS
// ============================================================================

/**
 * Standardized follower tier definitions.
 * These are the canonical boundaries used site-wide.
 *
 * @source Industry standard definitions, cross-referenced with MDX article consensus
 * @source outputs/06-ontology-construction.md Section 3.4
 * @resolution INC-003/Contradiction #8: standardized to article consensus
 *   (mid = 50K-200K, macro = 200K-1M) instead of old code values
 *   (mid = 50K-500K, macro = 500K-1M)
 */
export const FOLLOWER_TIERS: Record<TierName, TierDefinition> = {
  nano: {
    label: 'Nano Creator',
    range: { min: 1000, max: 10000 },
    avgEngagement: { min: 8, max: 15 },
    brandDealRate: { min: 50, max: 200 },
    totalMonthlyEarnings: { min: 50, max: 500 },
  },
  micro: {
    label: 'Micro Creator',
    range: { min: 10000, max: 50000 },
    avgEngagement: { min: 5, max: 8 },
    brandDealRate: { min: 200, max: 1000 },
    totalMonthlyEarnings: { min: 100, max: 1000 },
  },
  mid: {
    label: 'Mid-Tier Creator',
    range: { min: 50000, max: 200000 },
    avgEngagement: { min: 3, max: 5 },
    brandDealRate: { min: 1000, max: 5000 },
    totalMonthlyEarnings: { min: 1000, max: 10000 },
  },
  macro: {
    label: 'Macro Creator',
    range: { min: 200000, max: 1000000 },
    avgEngagement: { min: 2, max: 4 },
    brandDealRate: { min: 5000, max: 15000 },
    totalMonthlyEarnings: { min: 10000, max: 50000 },
  },
  mega: {
    label: 'Mega Creator',
    range: { min: 1000000, max: Infinity },
    avgEngagement: { min: 1, max: 3 },
    brandDealRate: { min: 15000, max: 50000 },
    totalMonthlyEarnings: { min: 50000, max: 500000 },
  },
};

// ============================================================================
// ENGAGEMENT RATE
// ============================================================================

/**
 * Engagement rate thresholds and benchmarks.
 *
 * @source TikTok analytics benchmarks, industry reports Q1 2026
 * @source outputs/06-ontology-construction.md Section 3.3
 * @resolution Contradiction #7: platform average standardized to 4.07%
 * @resolution Contradiction #9: formula standardized to view-based with saves
 */
export const ENGAGEMENT = {
  /**
   * Canonical engagement rate formula.
   * (Likes + Comments + Shares + Saves) / Views x 100
   * @resolution Contradiction #9: standardized to view-based formula including saves
   */
  FORMULA: '(Likes + Comments + Shares + Saves) / Views x 100',
  FORMULA_DENOMINATOR: 'views' as const,
  FORMULA_INCLUDES_SAVES: true,

  /** Platform-wide average engagement rate (all tiers, all niches) */
  PLATFORM_AVERAGE: 4.07,

  /** Quality thresholds */
  THRESHOLD_EXCELLENT: 10,
  THRESHOLD_GOOD: 5,
  THRESHOLD_AVERAGE: 2,
  THRESHOLD_BELOW_AVERAGE: 0,

  /** Calculator multipliers (applied to base RPM/rates) */
  MULTIPLIER_EXCELLENT: 1.5,
  MULTIPLIER_GOOD: 1.2,
  MULTIPLIER_AVERAGE: 1.0,
  MULTIPLIER_BELOW_AVERAGE: 0.8,

  /** Brand deal engagement multipliers */
  BRAND_DEAL_MULTIPLIER_EXCELLENT: 1.5,
  BRAND_DEAL_MULTIPLIER_GOOD: 1.2,
  BRAND_DEAL_MULTIPLIER_AVERAGE: 1.0,
  BRAND_DEAL_MULTIPLIER_BELOW_AVERAGE: 0.7,

  /** Minimum engagement rate brands look for */
  BRAND_MINIMUM: 4,
  PREMIUM_BRAND_MINIMUM: 6,

  /** High engagement premium on brand deal rates */
  HIGH_ENGAGEMENT_PREMIUM_MIN: 0.20,
  HIGH_ENGAGEMENT_PREMIUM_MAX: 0.50,
} as const;

// ============================================================================
// NICHE DATA
// ============================================================================

/**
 * Content niche data with multipliers and benchmarks.
 *
 * @source Industry reports, TikTok Creator Portal, Q1 2026
 * @source outputs/06-ontology-construction.md Sections 3.6, 3.7
 * @resolution INC-005: Finance leads Creator Fund multipliers (advertiser demand),
 *   Beauty leads brand deal multipliers (brand spending volume)
 *
 * @note Creator Fund multipliers reflect advertiser CPM demand
 * @note Brand deal multipliers reflect brand spending volume
 * @note Engagement rates are all-tier, view-based averages including saves
 */
export const NICHES: Record<NicheKey, NicheData> = {
  finance: {
    displayName: 'Finance & Business',
    creatorFundMultiplier: 1.4,
    brandDealMultiplier: 1.3,
    avgEngagementRate: 4.8,
    creatorRewardsRpm: { min: 1.50, max: 3.00 },
  },
  tech: {
    displayName: 'Technology',
    creatorFundMultiplier: 1.3,
    brandDealMultiplier: 1.3,
    avgEngagementRate: 5.2,
    creatorRewardsRpm: { min: 1.00, max: 2.50 },
  },
  education: {
    displayName: 'Education',
    creatorFundMultiplier: 1.2,
    brandDealMultiplier: 1.0,
    avgEngagementRate: 5.4,
    creatorRewardsRpm: { min: 0.80, max: 2.00 },
  },
  'beauty-fashion': {
    displayName: 'Beauty & Fashion',
    creatorFundMultiplier: 1.1,
    brandDealMultiplier: 1.4,
    avgEngagementRate: 5.5,
    creatorRewardsRpm: { min: 0.60, max: 1.50 },
  },
  fitness: {
    displayName: 'Fitness & Health',
    creatorFundMultiplier: 1.1,
    brandDealMultiplier: 1.2,
    avgEngagementRate: 5.0,
    creatorRewardsRpm: { min: 0.60, max: 1.50 },
  },
  food: {
    displayName: 'Food & Cooking',
    creatorFundMultiplier: 1.0,
    brandDealMultiplier: 1.1,
    avgEngagementRate: 6.0,
    creatorRewardsRpm: { min: 0.50, max: 1.20 },
  },
  lifestyle: {
    displayName: 'Lifestyle',
    creatorFundMultiplier: 1.0,
    brandDealMultiplier: 1.1,
    avgEngagementRate: 5.0,
    creatorRewardsRpm: { min: 0.50, max: 1.20 },
  },
  entertainment: {
    displayName: 'Entertainment',
    creatorFundMultiplier: 0.9,
    brandDealMultiplier: 0.9,
    avgEngagementRate: 6.5,
    creatorRewardsRpm: { min: 0.40, max: 1.00 },
  },
  comedy: {
    displayName: 'Comedy & Entertainment',
    creatorFundMultiplier: 0.9,
    brandDealMultiplier: 0.8,
    avgEngagementRate: 7.0,
    creatorRewardsRpm: { min: 0.30, max: 0.80 },
  },
  gaming: {
    displayName: 'Gaming',
    creatorFundMultiplier: 0.9,
    brandDealMultiplier: 0.9,
    avgEngagementRate: 5.5,
    creatorRewardsRpm: { min: 0.40, max: 1.00 },
  },
  other: {
    displayName: 'Other',
    creatorFundMultiplier: 1.0,
    brandDealMultiplier: 1.0,
    avgEngagementRate: 5.0,
    creatorRewardsRpm: { min: 0.50, max: 1.20 },
  },
} as const;

// ============================================================================
// BRAND DEAL RATES
// ============================================================================

/**
 * Brand deal deliverable type multipliers.
 * Applied on top of tier base rates.
 *
 * @source Industry surveys, TikTok Creator Marketplace data, Q1 2026
 * @source outputs/06-ontology-construction.md Section 3.9
 */
export const DELIVERABLE_MULTIPLIERS = {
  'in-feed': { label: 'In-Feed Post', multiplier: 1.0 },
  'spark-ad': { label: 'Spark Ad (whitelisted)', multiplier: 1.3 },
  'product-showcase': { label: 'Product Showcase', multiplier: 1.2 },
  'live-mention': { label: 'LIVE Mention', multiplier: 0.7 },
} as const;

/**
 * Per-follower brand deal rate range (baseline, before niche adjustment).
 *
 * @source Industry surveys Q1 2026
 * @resolution Contradiction #11: clarified as baseline range across niches
 */
export const PER_FOLLOWER_RATE = {
  MIN: 0.05,
  MAX: 0.25,
  TYPICAL_LABEL: '$0.05-$0.25 per follower depending on niche',
} as const;

// ============================================================================
// TIKTOK SHOP
// ============================================================================

/**
 * TikTok Shop commission rates and requirements.
 *
 * @source TikTok Shop Seller Center, verified 2026-03-01
 * @source outputs/06-ontology-construction.md Section 3.8
 */
export const TIKTOK_SHOP = {
  /** Standard affiliate commission rate */
  STANDARD_COMMISSION_PCT: 5,

  /** Commission range */
  MIN_COMMISSION_PCT: 2,
  MAX_COMMISSION_PCT: 20,

  /** TikTok platform fee on transactions */
  PLATFORM_FEE_PCT: 2.9,

  /** Follower requirement for Shop affiliate access */
  AFFILIATE_MIN_FOLLOWERS: 5000,

  /** Payment frequency */
  PAYMENT_FREQUENCY: 'biweekly' as const,
} as const;

// ============================================================================
// RPM BENCHMARKS
// ============================================================================

/**
 * RPM (Revenue Per Mille) benchmarks for Creator Fund earnings.
 * These are Creator Fund rates, NOT Creator Rewards rates.
 *
 * @source TikTok Creator Portal analytics, Q1 2026
 * @source outputs/06-ontology-construction.md Section 3.11
 * @note For Creator Rewards RPM by niche, see NICHES[niche].creatorRewardsRpm
 */
export const RPM_BENCHMARKS = {
  /** Creator Fund RPM quality thresholds */
  EXCELLENT: 0.04,
  GOOD: 0.03,
  AVERAGE: 0.02,
  BELOW_AVERAGE: 0.01,

  /** Labels for display */
  EXCELLENT_LABEL: '$0.04+ per 1K views',
  GOOD_LABEL: '$0.03-$0.04 per 1K views',
  AVERAGE_LABEL: '$0.02-$0.03 per 1K views',
  BELOW_AVERAGE_LABEL: 'Under $0.02 per 1K views',
} as const;

// ============================================================================
// PLATFORM COMPARISONS
// ============================================================================

/**
 * Cross-platform earnings comparison data.
 * Used on comparison pages (TikTok vs YouTube, vs Instagram, etc.)
 *
 * @source Platform creator portals, industry reports Q1 2026
 * @source outputs/06-ontology-construction.md Section 3.10
 */
export const PLATFORM_COMPARISONS: Record<string, PlatformComparison> = {
  tiktok: {
    platform: 'TikTok (Creator Fund)',
    rpmRange: { min: 0.02, max: 0.05 },
    brandDealMultiplier: 1.0,
    notes: 'Lowest per-view RPM but highest organic reach potential.',
  },
  tiktokRewards: {
    platform: 'TikTok (Creator Rewards)',
    rpmRange: { min: 0.50, max: 2.00 },
    brandDealMultiplier: 1.0,
    notes: 'Requires 1+ minute original content. 10-40x higher than Creator Fund.',
  },
  youtube: {
    platform: 'YouTube (AdSense)',
    rpmRange: { min: 2.00, max: 4.00 },
    brandDealMultiplier: 1.2,
    notes: 'Highest RPM among major platforms. TikTok Creator Fund pays 50-100x less per view.',
  },
  youtubeShorts: {
    platform: 'YouTube Shorts',
    rpmRange: { min: 0.04, max: 0.10 },
    brandDealMultiplier: 0.8,
    notes: 'Short-form RPM is much lower than long-form YouTube.',
  },
  instagram: {
    platform: 'Instagram Reels',
    rpmRange: { min: 0.01, max: 0.03 },
    brandDealMultiplier: 1.3,
    notes: 'Lower RPM than TikTok but higher brand deal rates due to shopping integration.',
  },
  twitch: {
    platform: 'Twitch',
    rpmRange: { min: 2.00, max: 5.00 },
    brandDealMultiplier: 0.9,
    notes: 'Strong live streaming monetization via subscriptions and bits.',
  },
};

/**
 * TikTok vs YouTube RPM ratio — a frequently cited comparison.
 *
 * @source Money calculator FAQ, verified against platform data Q1 2026
 */
export const TIKTOK_VS_YOUTUBE = {
  /** TikTok Creator Fund pays this many times less per view than YouTube */
  RPM_RATIO_LABEL: 'TikTok Creator Fund pays 50-100x less per view than YouTube',
  RPM_RATIO_MIN: 50,
  RPM_RATIO_MAX: 100,
} as const;

// ============================================================================
// TAX & BUSINESS
// ============================================================================

/**
 * US tax data for creator earnings.
 *
 * @source IRS.gov, verified for 2026 tax year
 * @source outputs/06-ontology-construction.md Section 3.10
 */
export const US_TAX = {
  /** Self-employment tax rate (Social Security + Medicare) */
  SELF_EMPLOYMENT_TAX_RATE: 0.153,
  SELF_EMPLOYMENT_TAX_LABEL: '15.3%',

  /** High-tax state effective combined rate (CA, NY) */
  HIGH_TAX_STATE_EFFECTIVE_MIN: 0.35,
  HIGH_TAX_STATE_EFFECTIVE_MAX: 0.50,
  HIGH_TAX_STATE_LABEL: '35-50% combined effective rate in CA/NY',
} as const;

/**
 * US TikTok influencer market size.
 *
 * @source eMarketer, industry reports 2025-2026
 */
export const US_MARKET = {
  /** Total US TikTok influencer ad spend (2025) */
  INFLUENCER_AD_SPEND_2025: 4_000_000_000,
  INFLUENCER_AD_SPEND_2025_LABEL: '$4+ billion',

  /** US share of global TikTok ad revenue */
  US_GLOBAL_SHARE: 0.40,
  US_GLOBAL_SHARE_LABEL: '~40% of global TikTok ad revenue',
} as const;

// ============================================================================
// AVERAGES & BENCHMARKS
// ============================================================================

/**
 * Average creator behavior benchmarks.
 * Used as defaults in calculators and projections.
 *
 * @source TikTok analytics aggregate data, industry surveys Q1 2026
 * @source outputs/06-ontology-construction.md Section 3.11
 */
export const CREATOR_AVERAGES = {
  POSTS_PER_MONTH: 20,
  VIEWS_PER_POST: 10000,
  STREAMS_PER_MONTH: 8,
  STREAM_DURATION_MINUTES: 60,
  AVG_VIEWERS_PER_STREAM: 100,
} as const;

/**
 * Reference earnings by follower milestone.
 * Used in FAQ sections and earnings guides.
 *
 * @source Calculator models + creator surveys Q1 2026
 * @source outputs/06-ontology-construction.md Section 3.12
 */
export const MILESTONE_EARNINGS = {
  '10k': {
    creatorFundMonthly: { min: 10, max: 40 },
    brandDealPerPost: { min: 100, max: 300 },
    totalMonthlyPotential: { min: 200, max: 600 },
  },
  '100k': {
    creatorFundMonthly: { min: 25, max: 50 },
    brandDealPerPost: { min: 1000, max: 3000 },
    totalMonthlyPotential: { min: 1000, max: 5000 },
  },
  '1m': {
    creatorFundMonthly: { min: 200, max: 500 },
    brandDealPerPost: { min: 15000, max: 50000 },
    totalMonthlyPotential: { min: 50000, max: 500000 },
  },
} as const;

// ============================================================================
// DATE CONSTANTS
// ============================================================================

/**
 * Data freshness metadata.
 * Update these when data points are re-verified.
 */
export const DATA_FRESHNESS = {
  /** Date these constants were last verified against TikTok sources */
  LAST_VERIFIED: '2026-03-01',

  /** Date of last cross-page consistency audit */
  LAST_AUDIT: '2026-03-18',

  /** Label for methodology sections */
  DATA_SOURCE_LABEL: 'TikTok Creator Portal, industry reports Q1 2026',
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Determine which follower tier a given follower count falls into.
 *
 * @param count - Number of followers
 * @returns The tier name, or 'nano' if below 1,000 (pre-monetization)
 *
 * @example
 * getFollowerTier(75000)  // 'mid'
 * getFollowerTier(500000) // 'macro'
 */
export function getFollowerTier(count: number): TierName {
  if (count >= FOLLOWER_TIERS.mega.range.min) return 'mega';
  if (count >= FOLLOWER_TIERS.macro.range.min) return 'macro';
  if (count >= FOLLOWER_TIERS.mid.range.min) return 'mid';
  if (count >= FOLLOWER_TIERS.micro.range.min) return 'micro';
  return 'nano';
}

/**
 * Get the brand deal rate range for a given tier.
 *
 * @param tier - The follower tier name
 * @returns Min and max brand deal rate in USD (in-feed baseline)
 *
 * @example
 * getBrandDealRange('micro') // { min: 200, max: 1000 }
 */
export function getBrandDealRange(tier: TierName): Range {
  return { ...FOLLOWER_TIERS[tier].brandDealRate };
}

/**
 * Get the full tier definition for a follower count.
 *
 * @param count - Number of followers
 * @returns The complete tier definition including label, ranges, and benchmarks
 */
export function getTierDefinition(count: number): TierDefinition {
  const tier = getFollowerTier(count);
  return FOLLOWER_TIERS[tier];
}

/**
 * Format a number as USD currency.
 *
 * @param amount - Dollar amount
 * @param options - Formatting options
 * @returns Formatted string like "$1,234.56" or "$1,235"
 *
 * @example
 * formatCurrency(1234.5)                    // "$1,234.50"
 * formatCurrency(1234.5, { decimals: 0 })   // "$1,235"
 * formatCurrency(0.005, { decimals: 3 })    // "$0.005"
 */
export function formatCurrency(
  amount: number,
  options?: { decimals?: number; compact?: boolean }
): string {
  const decimals = options?.decimals ?? 2;

  if (options?.compact && amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  if (options?.compact && amount >= 1000) {
    return `$${(amount / 1000).toFixed(amount >= 10000 ? 0 : 1)}K`;
  }

  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

/**
 * Format a range as a currency string.
 *
 * @param range - Range with min and max
 * @param options - Formatting options
 * @returns Formatted string like "$200-$1,000"
 *
 * @example
 * formatCurrencyRange({ min: 200, max: 1000 }) // "$200-$1,000"
 */
export function formatCurrencyRange(
  range: Range,
  options?: { decimals?: number; compact?: boolean }
): string {
  return `${formatCurrency(range.min, options)}-${formatCurrency(range.max, options)}`;
}

/**
 * Convert TikTok coins to USD (using in-app rate).
 *
 * @param coins - Number of coins
 * @returns USD value
 */
export function coinsToUsd(coins: number): number {
  return Math.round(coins * COINS.USD_PER_COIN * 100) / 100;
}

/**
 * Convert USD to TikTok coins (using in-app rate).
 *
 * @param usd - Dollar amount
 * @returns Number of coins (rounded)
 */
export function usdToCoins(usd: number): number {
  return Math.round(usd / COINS.USD_PER_COIN);
}

/**
 * Convert TikTok coins to diamonds.
 *
 * @param coins - Number of coins
 * @returns Number of diamonds
 */
export function coinsToDiamonds(coins: number): number {
  return Math.round(coins / COINS.COINS_PER_DIAMOND);
}

/**
 * Convert TikTok diamonds to USD.
 *
 * @param diamonds - Number of diamonds
 * @returns USD value
 */
export function diamondsToUsd(diamonds: number): number {
  return Math.round(diamonds * DIAMONDS.USD_PER_DIAMOND * 100) / 100;
}

/**
 * Calculate estimated creator payout from a LIVE gift.
 * Accounts for the ~50% revenue share.
 *
 * @param coinCost - Gift cost in coins
 * @returns Estimated creator payout in USD
 */
export function giftCreatorPayout(coinCost: number): number {
  const totalUsd = coinCost * COINS.USD_PER_COIN;
  return Math.round(totalUsd * LIVE_REVENUE.CREATOR_REVENUE_SHARE * 100) / 100;
}

/**
 * Get niche data by key, with fallback to 'other'.
 *
 * @param niche - Niche identifier
 * @returns NicheData object
 */
export function getNicheData(niche: string): NicheData {
  return NICHES[niche as NicheKey] ?? NICHES.other;
}

/**
 * Calculate estimated Creator Fund earnings.
 *
 * @param monthlyViews - Total monthly views
 * @param niche - Content niche (for multiplier)
 * @param engagementRate - Engagement rate percentage
 * @returns Estimated monthly earnings range
 */
export function estimateCreatorFundEarnings(
  monthlyViews: number,
  niche: NicheKey = 'other',
  engagementRate: number = ENGAGEMENT.PLATFORM_AVERAGE
): Range {
  const nicheMultiplier = NICHES[niche].creatorFundMultiplier;

  let engagementMultiplier: number = ENGAGEMENT.MULTIPLIER_BELOW_AVERAGE;
  if (engagementRate >= ENGAGEMENT.THRESHOLD_EXCELLENT) {
    engagementMultiplier = ENGAGEMENT.MULTIPLIER_EXCELLENT;
  } else if (engagementRate >= ENGAGEMENT.THRESHOLD_GOOD) {
    engagementMultiplier = ENGAGEMENT.MULTIPLIER_GOOD;
  } else if (engagementRate >= ENGAGEMENT.THRESHOLD_AVERAGE) {
    engagementMultiplier = ENGAGEMENT.MULTIPLIER_AVERAGE;
  }

  const viewsInThousands = monthlyViews / 1000;
  return {
    min: Math.round(viewsInThousands * CREATOR_FUND.RPM_MIN * nicheMultiplier * engagementMultiplier * 100) / 100,
    max: Math.round(viewsInThousands * CREATOR_FUND.RPM_MAX * nicheMultiplier * engagementMultiplier * 100) / 100,
  };
}
