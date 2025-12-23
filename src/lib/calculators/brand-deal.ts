/**
 * TikTok Brand Deal Rate Calculator
 * Calculates estimated brand deal rates based on follower count, engagement, and niche
 */

import type {
  BrandDealInput,
  BrandDealResult,
  FollowerTier,
} from '@/types/calculator';
import {
  FOLLOWER_TIERS,
  BRAND_DEAL_BASE_RATES,
  BRAND_DEAL_ENGAGEMENT_MULTIPLIERS,
  BRAND_DEAL_NICHE_MULTIPLIERS,
  DELIVERABLE_TYPE_MULTIPLIERS,
  ENGAGEMENT_THRESHOLDS,
} from '@/lib/constants/calculator-constants';

/**
 * Determine follower tier
 */
function getFollowerTier(followers: number): FollowerTier {
  if (followers >= FOLLOWER_TIERS.mega.min) return 'mega';
  if (followers >= FOLLOWER_TIERS.macro.min) return 'macro';
  if (followers >= FOLLOWER_TIERS.mid.min) return 'mid';
  if (followers >= FOLLOWER_TIERS.micro.min) return 'micro';
  return 'nano';
}

/**
 * Get engagement multiplier for brand deals
 */
function getBrandDealEngagementMultiplier(engagementRate: number): number {
  if (engagementRate >= ENGAGEMENT_THRESHOLDS.excellent) {
    return BRAND_DEAL_ENGAGEMENT_MULTIPLIERS.excellent;
  }
  if (engagementRate >= ENGAGEMENT_THRESHOLDS.good) {
    return BRAND_DEAL_ENGAGEMENT_MULTIPLIERS.good;
  }
  if (engagementRate >= ENGAGEMENT_THRESHOLDS.average) {
    return BRAND_DEAL_ENGAGEMENT_MULTIPLIERS.average;
  }
  return BRAND_DEAL_ENGAGEMENT_MULTIPLIERS.belowAverage;
}

/**
 * Calculate brand deal rate
 */
export function calculateBrandDeal(input: BrandDealInput): BrandDealResult {
  const { followers, engagementRate, niche, deliverableType } = input;

  // Determine tier
  const tier = getFollowerTier(followers);

  // Get base rates for tier
  const baseRates = BRAND_DEAL_BASE_RATES[tier];

  // Get multipliers
  const engagementMultiplier = getBrandDealEngagementMultiplier(engagementRate);
  const nicheMultiplier = BRAND_DEAL_NICHE_MULTIPLIERS[niche] || 1.0;
  const deliverableMultiplier =
    DELIVERABLE_TYPE_MULTIPLIERS[deliverableType] || 1.0;

  // Calculate adjusted rates
  const totalMultiplier =
    engagementMultiplier * nicheMultiplier * deliverableMultiplier;
  const minRate = Math.round(baseRates.min * totalMultiplier);
  const maxRate = Math.round(baseRates.max * totalMultiplier);

  // Generate interpretation
  let interpretation = '';
  const tierName =
    tier === 'nano'
      ? 'nano-influencer'
      : tier === 'micro'
      ? 'micro-influencer'
      : tier === 'mid'
      ? 'mid-tier'
      : tier === 'macro'
      ? 'macro-influencer'
      : 'mega-influencer';

  if (tier === 'nano' || tier === 'micro') {
    interpretation = `As a **${tierName}** (${followers.toLocaleString()} followers), brands typically pay $${minRate.toLocaleString()}–$${maxRate.toLocaleString()} per ${deliverableType} video. Your ${engagementRate}% engagement rate ${
      engagementRate >= ENGAGEMENT_THRESHOLDS.good
        ? 'is above average, which increases your value'
        : 'is in line with typical rates'
    }.`;
  } else if (tier === 'mid') {
    interpretation = `In the **${tierName} range** (${followers.toLocaleString()} followers), you should charge $${minRate.toLocaleString()}–$${maxRate.toLocaleString()} for ${deliverableType} content. Don't undersell—brands often have higher budgets than initial offers suggest.`;
  } else {
    interpretation = `As a **${tierName}** (${followers.toLocaleString()} followers), your estimated rate is $${minRate.toLocaleString()}–$${maxRate.toLocaleString()} per ${deliverableType} video. Consider creating a professional media kit and working with a manager to maximize deal values.`;
  }

  return {
    minRate,
    maxRate,
    tier,
    interpretation,
    min: minRate,
    max: maxRate,
    additionalMetrics: {
      costPerFollower: Math.round(((minRate + maxRate) / 2 / followers) * 100) / 100,
      annualPotential4Deals: (minRate + maxRate) / 2 * 4,
      annualPotential12Deals: (minRate + maxRate) / 2 * 12,
    },
  };
}

/**
 * Validate brand deal input
 */
export function validateBrandDealInput(input: Partial<BrandDealInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.followers || input.followers < 1000) {
    errors.followers =
      'Follower count must be at least 1,000 for brand deals';
  }

  if (input.followers && input.followers > 1000000000) {
    errors.followers = 'Follower count must be less than 1 billion';
  }

  if (input.engagementRate === undefined || input.engagementRate < 0) {
    errors.engagementRate = 'Engagement rate must be at least 0%';
  }

  if (input.engagementRate && input.engagementRate > 100) {
    errors.engagementRate = 'Engagement rate cannot exceed 100%';
  }

  if (!input.niche) {
    errors.niche = 'Please select a content niche';
  }

  if (!input.deliverableType) {
    errors.deliverableType = 'Please select a deliverable type';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
