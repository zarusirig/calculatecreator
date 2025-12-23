/**
 * TikTok RPM Calculator
 * Calculates Revenue Per Mille (revenue per 1,000 views)
 */

import type { RPMInput, RPMResult } from '@/types/calculator';
import { RPM_BENCHMARKS } from '@/lib/constants/calculator-constants';

/**
 * Calculate RPM
 */
export function calculateRPM(input: RPMInput): RPMResult {
  const { views, earnings } = input;

  // Calculate RPM (earnings per 1000 views)
  const rpm = (earnings / views) * 1000;

  // Determine benchmark
  let benchmark: 'above' | 'average' | 'below';
  let interpretation = '';

  if (rpm >= RPM_BENCHMARKS.excellent) {
    benchmark = 'above';
    interpretation = `**Excellent RPM!** Your $${rpm.toFixed(3)} RPM is above the platform average ($0.02-$0.04). This indicates high-quality content, strong engagement, or premium audience demographics. Keep up the great work!`;
  } else if (rpm >= RPM_BENCHMARKS.average) {
    benchmark = 'average';
    interpretation = `**Average RPM.** Your $${rpm.toFixed(3)} RPM is within the typical range for TikTok creators ($0.02-$0.04). To improve, focus on increasing watch time, engagement rate, and targeting US/UK audiences.`;
  } else {
    benchmark = 'below';
    interpretation = `**Below average RPM.** Your $${rpm.toFixed(3)} RPM is lower than typical ($0.02-$0.04). This could be due to international audience, low watch time, or content niche. Consider optimizing for US viewers and higher engagement.`;
  }

  return {
    rpm: Math.round(rpm * 1000) / 1000,
    benchmark,
    interpretation,
    value: Math.round(rpm * 1000) / 1000,
    additionalMetrics: {
      earningsPerView: Math.round((earnings / views) * 10000) / 10000,
      viewsNeededFor100: Math.round((100 / rpm) * 1000),
      projectedMonthly1M: Math.round((rpm * 1000) * 100) / 100,
    },
  };
}

/**
 * Validate RPM input
 */
export function validateRPMInput(input: Partial<RPMInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.views || input.views < 1000) {
    errors.views = 'Views must be at least 1,000 for accurate RPM calculation';
  }

  if (input.views && input.views > 1000000000) {
    errors.views = 'Views must be less than 1 billion';
  }

  if (input.earnings === undefined || input.earnings < 0) {
    errors.earnings = 'Earnings must be 0 or greater';
  }

  if (input.earnings && input.earnings > 1000000) {
    errors.earnings = 'Earnings must be less than $1 million';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
