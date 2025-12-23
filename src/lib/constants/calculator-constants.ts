/**
 * Calculator Constants
 * All constants used in calculator formulas
 * Data sources: TikTok Creator Portal, Industry Reports Q4 2024
 */

import type { ContentNiche, FollowerTier } from '@/types/calculator';

// Creator Fund RPM (Revenue Per Mille) - per 1,000 views
export const CREATOR_FUND_RPM = {
  min: 0.02, // $0.02 per 1K views
  max: 0.04, // $0.04 per 1K views
  avg: 0.03, // $0.03 per 1K views (baseline)
};

// Engagement Rate Multipliers for Creator Fund
export const ENGAGEMENT_MULTIPLIERS = {
  excellent: 1.5,    // 10%+ engagement
  good: 1.2,         // 5-10% engagement
  average: 1.0,      // 2-5% engagement
  belowAverage: 0.8, // <2% engagement
};

// Niche Multipliers for Creator Fund (based on advertiser demand)
export const NICHE_MULTIPLIERS: Record<ContentNiche, number> = {
  'finance': 1.4,
  'tech': 1.3,
  'education': 1.2,
  'beauty-fashion': 1.1,
  'fitness': 1.1,
  'food': 1.0,
  'lifestyle': 1.0,
  'entertainment': 0.9,
  'comedy': 0.9,
  'gaming': 0.9,
  'other': 1.0,
};

// Engagement Rate Thresholds
export const ENGAGEMENT_THRESHOLDS = {
  excellent: 10,      // 10%+
  good: 5,            // 5-10%
  average: 2,         // 2-5%
  belowAverage: 0,    // <2%
};

// Follower Tier Ranges
export const FOLLOWER_TIERS: Record<FollowerTier, { min: number; max: number }> = {
  nano: { min: 0, max: 10000 },
  micro: { min: 10000, max: 50000 },
  mid: { min: 50000, max: 500000 },
  macro: { min: 500000, max: 1000000 },
  mega: { min: 1000000, max: Infinity },
};

// Brand Deal Base Rates by Follower Tier
export const BRAND_DEAL_BASE_RATES: Record<FollowerTier, { min: number; max: number }> = {
  nano: { min: 50, max: 200 },
  micro: { min: 200, max: 1000 },
  mid: { min: 1000, max: 10000 },
  macro: { min: 10000, max: 50000 },
  mega: { min: 50000, max: 200000 },
};

// Brand Deal Engagement Multipliers
export const BRAND_DEAL_ENGAGEMENT_MULTIPLIERS = {
  excellent: 1.5,    // 10%+ engagement
  good: 1.2,         // 5-10% engagement
  average: 1.0,      // 2-5% engagement
  belowAverage: 0.7, // <2% engagement
};

// Brand Deal Niche Multipliers (based on brand spending)
export const BRAND_DEAL_NICHE_MULTIPLIERS: Record<ContentNiche, number> = {
  'beauty-fashion': 1.4,
  'finance': 1.3,
  'tech': 1.3,
  'fitness': 1.2,
  'lifestyle': 1.1,
  'food': 1.1,
  'education': 1.0,
  'gaming': 0.9,
  'entertainment': 0.9,
  'comedy': 0.8,
  'other': 1.0,
};

// Brand Deal Deliverable Type Multipliers
export const DELIVERABLE_TYPE_MULTIPLIERS = {
  'in-feed': 1.0,
  'spark-ad': 1.3,
  'live-mention': 0.7,
  'product-showcase': 1.2,
};

// TikTok LIVE Gifts
export const LIVE_GIFTS = {
  diamondToUSD: 0.005, // $0.005 per diamond
  avgGiftsPerViewer: 0.5, // Average gifts per viewer per stream
  avgGiftValue: 50, // Average gift value in coins
  coinsPerDiamond: 2, // 2 coins = 1 diamond
};

// TikTok Coins
export const COINS = {
  usdPerCoin: 0.0105, // $0.0105 per coin (approximate)
  diamondPerCoin: 0.5, // 2 coins = 1 diamond
  minPurchase: 65, // Minimum coin purchase
  maxPurchase: 16500, // Maximum coin purchase
};

// TikTok Shop Commission Rates
export const SHOP_COMMISSION = {
  standard: 5, // 5% standard commission
  min: 2, // 2% minimum
  max: 20, // 20% maximum (high-ticket items)
  platformFee: 2.9, // TikTok platform fee percentage
};

// RPM Benchmarks
export const RPM_BENCHMARKS = {
  excellent: 0.04, // $0.04+
  good: 0.03, // $0.03-0.04
  average: 0.02, // $0.02-0.03
  belowAverage: 0.01, // <$0.02
};

// Monthly Multipliers (for annual projections)
export const MONTHLY_MULTIPLIER = 12;

// Average Values for Projections
export const AVERAGES = {
  postsPerMonth: 20,
  viewsPerPost: 10000, // For average creator
  streamsPerMonth: 8,
  streamDuration: 60, // minutes
  avgViewersPerStream: 100,
};

// Niche Display Names
export const NICHE_DISPLAY_NAMES: Record<ContentNiche, string> = {
  'lifestyle': 'Lifestyle',
  'beauty-fashion': 'Beauty & Fashion',
  'fitness': 'Fitness & Health',
  'finance': 'Finance & Business',
  'gaming': 'Gaming',
  'food': 'Food & Cooking',
  'comedy': 'Comedy & Entertainment',
  'education': 'Education',
  'entertainment': 'Entertainment',
  'tech': 'Technology',
  'other': 'Other',
};
