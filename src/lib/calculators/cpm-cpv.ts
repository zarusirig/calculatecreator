/**
 * TikTok CPM/CPV Calculator
 * Calculates Cost Per Mille (CPM) and Cost Per View (CPV) for TikTok ads
 */

import type { CPMCPVInput, CPMCPVResult } from '@/types/calculator';

// Benchmark CPM rates for TikTok ads
const CPM_BENCHMARKS = {
  excellent: 2.5,  // Below $2.50 is excellent
  good: 5.0,       // $2.50-$5.00 is good
  average: 10.0,   // $5.00-$10.00 is average
  // Above $10.00 is expensive
};

/**
 * Calculate CPM and CPV
 */
export function calculateCPMCPV(input: CPMCPVInput): CPMCPVResult {
  const { adSpend, impressions } = input;

  // Calculate CPM (cost per 1000 impressions)
  const cpm = (adSpend / impressions) * 1000;

  // Calculate CPV (cost per single view/impression)
  const cpv = adSpend / impressions;

  // Determine benchmark
  let benchmark: 'excellent' | 'good' | 'average' | 'expensive';
  let interpretation = '';

  if (cpm <= CPM_BENCHMARKS.excellent) {
    benchmark = 'excellent';
    interpretation = `**Excellent CPM!** Your $${cpm.toFixed(2)} CPM is well below the TikTok average ($5-$10). This indicates highly effective targeting, engaging content, or premium ad placements. Your ad spend is very efficient!`;
  } else if (cpm <= CPM_BENCHMARKS.good) {
    benchmark = 'good';
    interpretation = `**Good CPM.** Your $${cpm.toFixed(2)} CPM is better than average for TikTok ads. You're getting solid value for your ad spend. Consider A/B testing creative to improve further.`;
  } else if (cpm <= CPM_BENCHMARKS.average) {
    benchmark = 'average';
    interpretation = `**Average CPM.** Your $${cpm.toFixed(2)} CPM is within the typical range for TikTok ($5-$10). To improve, refine your audience targeting, test different ad creatives, or optimize bidding strategy.`;
  } else {
    benchmark = 'expensive';
    interpretation = `**High CPM.** Your $${cpm.toFixed(2)} CPM is above the TikTok average ($5-$10). This could indicate overly narrow targeting, low-quality creative, or competitive bidding. Review your campaign settings and creative approach.`;
  }

  return {
    cpm: Math.round(cpm * 100) / 100,
    cpv: Math.round(cpv * 10000) / 10000,
    benchmark,
    value: Math.round(cpm * 100) / 100,
    interpretation,
    additionalMetrics: {
      impressionsPerDollar: Math.round((1 / cpv) * 100) / 100,
      costPer10k: Math.round((cpm * 10) * 100) / 100,
      costPer100k: Math.round((cpm * 100) * 100) / 100,
    },
  };
}

/**
 * Validate CPM/CPV input
 */
export function validateCPMCPVInput(input: Partial<CPMCPVInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.adSpend || input.adSpend <= 0) {
    errors.adSpend = 'Ad spend must be greater than $0';
  }

  if (input.adSpend && input.adSpend > 1000000) {
    errors.adSpend = 'Ad spend must be less than $1 million';
  }

  if (!input.impressions || input.impressions < 100) {
    errors.impressions = 'Impressions must be at least 100 for accurate calculation';
  }

  if (input.impressions && input.impressions > 1000000000) {
    errors.impressions = 'Impressions must be less than 1 billion';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
