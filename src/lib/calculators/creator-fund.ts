/**
 * TikTok Creator Fund Calculator
 * Calculates estimated earnings from the TikTok Creator Fund
 */

import type {
  CreatorFundInput,
  CreatorFundResult,
  FollowerTier,
} from '@/types/calculator';
import {
  CREATOR_FUND_RPM,
  ENGAGEMENT_MULTIPLIERS,
  ENGAGEMENT_THRESHOLDS,
  NICHE_MULTIPLIERS,
  MONTHLY_MULTIPLIER,
} from '@/lib/constants/calculator-constants';

/**
 * Get engagement multiplier based on engagement rate
 */
function getEngagementMultiplier(engagementRate: number): number {
  if (engagementRate >= ENGAGEMENT_THRESHOLDS.excellent) {
    return ENGAGEMENT_MULTIPLIERS.excellent;
  }
  if (engagementRate >= ENGAGEMENT_THRESHOLDS.good) {
    return ENGAGEMENT_MULTIPLIERS.good;
  }
  if (engagementRate >= ENGAGEMENT_THRESHOLDS.average) {
    return ENGAGEMENT_MULTIPLIERS.average;
  }
  return ENGAGEMENT_MULTIPLIERS.belowAverage;
}

/**
 * Calculate Creator Fund earnings
 */
export function calculateCreatorFund(
  input: CreatorFundInput
): CreatorFundResult {
  const { monthlyViews, engagementRate, niche } = input;

  // Get multipliers
  const engagementMultiplier = getEngagementMultiplier(engagementRate);
  const nicheMultiplier = NICHE_MULTIPLIERS[niche] || 1.0;

  // Calculate RPM range
  const adjustedMinRPM = CREATOR_FUND_RPM.min * engagementMultiplier * nicheMultiplier;
  const adjustedMaxRPM = CREATOR_FUND_RPM.max * engagementMultiplier * nicheMultiplier;
  const avgRPM = (adjustedMinRPM + adjustedMaxRPM) / 2;

  // Calculate earnings (views / 1000 * RPM)
  const viewsInThousands = monthlyViews / 1000;
  const minMonthly = viewsInThousands * adjustedMinRPM;
  const maxMonthly = viewsInThousands * adjustedMaxRPM;

  // Annual projections
  const minAnnual = minMonthly * MONTHLY_MULTIPLIER;
  const maxAnnual = maxMonthly * MONTHLY_MULTIPLIER;

  // Determine interpretation
  const avgEarnings = (minMonthly + maxMonthly) / 2;
  let interpretation = '';

  if (avgRPM >= CREATOR_FUND_RPM.max * 1.2) {
    interpretation = `Your estimated earnings are **above average** for creators in your follower range. With ${monthlyViews.toLocaleString()} monthly views and ${engagementRate}% engagement, you're performing better than most creators in the ${niche} niche.`;
  } else if (avgRPM >= CREATOR_FUND_RPM.min) {
    interpretation = `Your estimated earnings are **in the typical range** for creators at your level. With consistent posting and engagement optimization, you can push these numbers higher.`;
  } else {
    interpretation = `Your estimated earnings are **below the typical range**. This is common for accounts with lower engagement rates. Focus on creating more interactive content to improve your RPM.`;
  }

  return {
    minMonthly: Math.round(minMonthly * 100) / 100,
    maxMonthly: Math.round(maxMonthly * 100) / 100,
    minAnnual: Math.round(minAnnual * 100) / 100,
    maxAnnual: Math.round(maxAnnual * 100) / 100,
    avgRPM: Math.round(avgRPM * 1000) / 1000,
    interpretation,
    min: Math.round(minMonthly * 100) / 100,
    max: Math.round(maxMonthly * 100) / 100,
  };
}

/**
 * Validate Creator Fund input
 */
export function validateCreatorFundInput(input: Partial<CreatorFundInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.monthlyViews || input.monthlyViews < 100000) {
    errors.monthlyViews =
      'Monthly views must be at least 100,000 to qualify for Creator Fund';
  }

  if (input.monthlyViews && input.monthlyViews > 1000000000) {
    errors.monthlyViews = 'Monthly views must be less than 1 billion';
  }

  if (!input.engagementRate || input.engagementRate < 0) {
    errors.engagementRate = 'Engagement rate must be at least 0%';
  }

  if (input.engagementRate && input.engagementRate > 100) {
    errors.engagementRate = 'Engagement rate cannot exceed 100%';
  }

  if (!input.niche) {
    errors.niche = 'Please select a content niche';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
