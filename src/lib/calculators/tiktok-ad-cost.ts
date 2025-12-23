/**
 * TikTok Ad Cost Calculator
 * Calculates advertising costs, CPM, CPV, and budget planning
 */

import type { TikTokAdCostInput, TikTokAdCostResult } from '@/types/calculator';

/**
 * Calculate TikTok ad costs
 */
export function calculateTikTokAdCost(input: TikTokAdCostInput): TikTokAdCostResult {
  const { budget, impressions, views, clicks, conversions = 0, conversionValue = 0 } = input;

  // Calculate CPM (Cost Per Mille)
  const cpm = impressions > 0 ? (budget / impressions) * 1000 : 0;

  // Calculate CPV (Cost Per View)
  const cpv = views > 0 ? budget / views : 0;

  // Calculate CPC (Cost Per Click)
  const cpc = clicks > 0 ? budget / clicks : 0;

  // Calculate CPA (Cost Per Acquisition)
  const cpa = conversions > 0 ? budget / conversions : 0;

  // Calculate ROAS (Return on Ad Spend)
  const roas = budget > 0 && conversionValue > 0 ? conversionValue / budget : 0;

  // Calculate profit
  const profit = conversionValue > 0 ? conversionValue - budget : -budget;

  // Generate interpretation
  let interpretation = '';
  let recommendation = '';

  if (cpm > 0 && cpm < 5) {
    interpretation = `Excellent CPM of $${cpm.toFixed(2)} shows highly efficient ad targeting.`;
    recommendation = 'Continue with current targeting strategy and consider scaling budget.';
  } else if (cpm >= 5 && cpm < 10) {
    interpretation = `Good CPM of $${cpm.toFixed(2)} indicates solid ad performance.`;
    recommendation = 'Monitor closely and optimize creative content for better efficiency.';
  } else if (cpm >= 10) {
    interpretation = `High CPM of $${cpm.toFixed(2)} suggests optimization opportunities.`;
    recommendation = 'Review targeting, creative content, and consider A/B testing different ad formats.';
  }

  return {
    cpm: Math.round(cpm * 100) / 100,
    cpv: Math.round(cpv * 100) / 100,
    cpc: Math.round(cpc * 100) / 100,
    cpa: Math.round(cpa * 100) / 100,
    roas: Math.round(roas * 100) / 100,
    profit: Math.round(profit * 100) / 100,
    interpretation,
    recommendation,
    value: Math.round(profit * 100) / 100,
    additionalMetrics: {
      efficiency: cpm > 0 ? (cpm < 5 ? 'Excellent' : cpm < 10 ? 'Good' : 'Needs Optimization') : 'N/A',
      benchmarkCPM: 7.5, // Average TikTok CPM
      benchmarkCPV: 0.02, // Average TikTok CPV
    },
  };
}

/**
 * Validate TikTok ad cost input
 */
export function validateTikTokAdCostInput(input: Partial<TikTokAdCostInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.budget || input.budget < 1) {
    errors.budget = 'Budget must be at least $1';
  }

  if (input.budget && input.budget > 1000000) {
    errors.budget = 'Budget must be less than $1 million';
  }

  if (!input.impressions || input.impressions < 1) {
    errors.impressions = 'Impressions must be at least 1';
  }

  if (!input.views || input.views < 1) {
    errors.views = 'Views must be at least 1';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
