/**
 * TikTok Niche Profitability Calculator
 * Compares earning potential across different content niches
 */

import type {
  NicheProfitabilityInput,
  NicheProfitabilityResult,
} from '@/types/calculator';
import {
  NICHE_MULTIPLIERS,
  BRAND_DEAL_NICHE_MULTIPLIERS,
  CREATOR_FUND_RPM,
  NICHE_DISPLAY_NAMES,
} from '@/lib/constants/calculator-constants';
import type { ContentNiche } from '@/types/calculator';

// Niche rankings by profitability (1 = most profitable)
const NICHE_RANKINGS: Record<ContentNiche, number> = {
  'finance': 1,
  'tech': 2,
  'beauty-fashion': 3,
  'fitness': 4,
  'education': 5,
  'food': 6,
  'lifestyle': 7,
  'entertainment': 8,
  'gaming': 9,
  'comedy': 10,
  'other': 11,
};

/**
 * Calculate niche profitability
 */
export function calculateNicheProfitability(
  input: NicheProfitabilityInput
): NicheProfitabilityResult {
  const { niche, followers, monthlyViews, engagementRate } = input;

  // Get multipliers for this niche
  const creatorFundMultiplier = NICHE_MULTIPLIERS[niche] || 1.0;
  const brandDealMultiplier = BRAND_DEAL_NICHE_MULTIPLIERS[niche] || 1.0;

  // Calculate engagement multiplier
  const engagementMultiplier = engagementRate >= 10 ? 1.5 : engagementRate >= 5 ? 1.2 : 1.0;

  // Estimate creator fund earnings
  const viewsInThousands = monthlyViews / 1000;
  const adjustedRPM = CREATOR_FUND_RPM.avg * creatorFundMultiplier * engagementMultiplier;
  const creatorFundMin = viewsInThousands * adjustedRPM * 0.8;
  const creatorFundMax = viewsInThousands * adjustedRPM * 1.2;

  // Estimate brand deal potential (rough approximation based on followers)
  const baseBrandDealMonthly = Math.min((followers / 10000) * 500, 10000);
  const brandDealMin = baseBrandDealMonthly * brandDealMultiplier * 0.5;
  const brandDealMax = baseBrandDealMonthly * brandDealMultiplier * 1.5;

  // Total estimated monthly earnings
  const estimatedMonthlyEarnings = {
    min: Math.round((creatorFundMin + brandDealMin) * 100) / 100,
    max: Math.round((creatorFundMax + brandDealMax) * 100) / 100,
  };

  // Get niche ranking
  const nicheRanking = NICHE_RANKINGS[niche];

  // Calculate combined multiplier
  const nicheMultiplier = Math.round(((creatorFundMultiplier + brandDealMultiplier) / 2) * 100) / 100;

  // Generate recommendation
  let recommendation = '';
  const nicheDisplay = NICHE_DISPLAY_NAMES[niche];

  if (nicheRanking <= 3) {
    recommendation = `**Highly profitable niche!** ${nicheDisplay} ranks #${nicheRanking} in profitability with a ${nicheMultiplier}x multiplier. This niche has strong advertiser demand and high CPMs. With ${followers.toLocaleString()} followers and ${monthlyViews.toLocaleString()} monthly views, you could earn $${estimatedMonthlyEarnings.min.toLocaleString()}-$${estimatedMonthlyEarnings.max.toLocaleString()}/month. Focus on: expert positioning, affiliate partnerships, high-ticket brand deals.`;
  } else if (nicheRanking <= 6) {
    recommendation = `**Solid earning potential.** ${nicheDisplay} ranks #${nicheRanking} with a ${nicheMultiplier}x multiplier. While not the highest-paying niche, it offers good monetization through both creator fund and brand deals. Estimated: $${estimatedMonthlyEarnings.min.toLocaleString()}-$${estimatedMonthlyEarnings.max.toLocaleString()}/month with ${followers.toLocaleString()} followers. Opportunities: affiliate marketing, own products, course creation.`;
  } else if (nicheRanking <= 9) {
    recommendation = `**Moderate profitability.** ${nicheDisplay} ranks #${nicheRanking} (${nicheMultiplier}x multiplier). This niche earns less per view but can succeed with high volume. Estimated: $${estimatedMonthlyEarnings.min.toLocaleString()}-$${estimatedMonthlyEarnings.max.toLocaleString()}/month. To maximize earnings: increase volume, diversify revenue streams, create digital products, build email list for direct monetization.`;
  } else {
    recommendation = `**Lower monetization potential.** ${nicheDisplay} ranks #${nicheRanking} in direct ad revenue (${nicheMultiplier}x multiplier). However, success is possible through volume and alternative monetization. Estimated: $${estimatedMonthlyEarnings.min.toLocaleString()}-$${estimatedMonthlyEarnings.max.toLocaleString()}/month. Focus on: merchandise, Patreon, digital products, and building an email list to monetize outside TikTok.`;
  }

  return {
    estimatedMonthlyEarnings,
    nicheMultiplier,
    nichRanking: nicheRanking,
    recommendation,
    interpretation: recommendation,
    value: (estimatedMonthlyEarnings.min + estimatedMonthlyEarnings.max) / 2,
  };
}

/**
 * Validate niche profitability input
 */
export function validateNicheProfitabilityInput(input: Partial<NicheProfitabilityInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.niche) {
    errors.niche = 'Please select a content niche';
  }

  if (!input.followers || input.followers < 0) {
    errors.followers = 'Followers must be at least 0';
  }

  if (!input.monthlyViews || input.monthlyViews < 0) {
    errors.monthlyViews = 'Monthly views must be at least 0';
  }

  if (!input.engagementRate || input.engagementRate < 0) {
    errors.engagementRate = 'Engagement rate must be at least 0%';
  }

  if (input.engagementRate && input.engagementRate > 100) {
    errors.engagementRate = 'Engagement rate cannot exceed 100%';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
