/**
 * TikTok Conversion Rate Calculator
 * Calculates conversion rate from visitors to conversions
 */

import type { ConversionRateInput, ConversionRateResult } from '@/types/calculator';

/**
 * Calculate conversion rate
 */
export function calculateConversionRate(input: ConversionRateInput): ConversionRateResult {
  const { visitors, conversions, timeframe } = input;

  // Calculate conversion rate
  const conversionRate = (conversions / visitors) * 100;

  // Determine rating based on industry benchmarks
  let rating: 'excellent' | 'good' | 'average' | 'poor';
  let interpretation = '';

  const timeframeName = {
    day: 'daily',
    week: 'weekly',
    month: 'monthly',
  }[timeframe];

  if (conversionRate >= 10) {
    rating = 'excellent';
    interpretation = `**Excellent conversion rate!** Your ${conversionRate.toFixed(2)}% conversion rate is outstanding. With ${visitors.toLocaleString()} ${timeframeName} visitors converting ${conversions.toLocaleString()} times, you're significantly above the TikTok average (2-5%). Your offer, landing page, and targeting are highly effective.`;
  } else if (conversionRate >= 5) {
    rating = 'good';
    interpretation = `**Good conversion rate.** Your ${conversionRate.toFixed(2)}% is above the TikTok average (2-5%). You're converting ${conversions.toLocaleString()} out of ${visitors.toLocaleString()} ${timeframeName} visitors effectively. Small optimizations could push you to excellent territory.`;
  } else if (conversionRate >= 2) {
    rating = 'average';
    interpretation = `**Average conversion rate.** Your ${conversionRate.toFixed(2)}% is within the typical TikTok range (2-5%). With ${visitors.toLocaleString()} ${timeframeName} visitors and ${conversions.toLocaleString()} conversions, there's room to improve through better targeting, clearer CTAs, or optimized landing pages.`;
  } else {
    rating = 'poor';
    interpretation = `**Below-average conversion rate.** Your ${conversionRate.toFixed(2)}% is lower than typical (2-5%). Only ${conversions.toLocaleString()} of ${visitors.toLocaleString()} ${timeframeName} visitors are converting. Focus on: (1) improving landing page design, (2) clarifying your value proposition, (3) reducing friction in the conversion process, or (4) better audience targeting.`;
  }

  return {
    conversionRate: Math.round(conversionRate * 100) / 100,
    rating,
    value: Math.round(conversionRate * 100) / 100,
    interpretation,
    additionalMetrics: {
      visitorsNeededFor100Conversions: Math.round((100 / conversionRate) * 100),
      conversionsPer1000Visitors: Math.round((conversionRate * 10) * 10) / 10,
    },
  };
}

/**
 * Validate conversion rate input
 */
export function validateConversionRateInput(input: Partial<ConversionRateInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.visitors || input.visitors < 1) {
    errors.visitors = 'Visitors must be at least 1';
  }

  if (input.visitors && input.visitors > 100000000) {
    errors.visitors = 'Visitors must be less than 100 million';
  }

  if (input.conversions === undefined || input.conversions < 0) {
    errors.conversions = 'Conversions must be 0 or greater';
  }

  if (input.conversions && input.visitors && input.conversions > input.visitors) {
    errors.conversions = 'Conversions cannot exceed visitors';
  }

  if (!input.timeframe) {
    errors.timeframe = 'Please select a timeframe';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
