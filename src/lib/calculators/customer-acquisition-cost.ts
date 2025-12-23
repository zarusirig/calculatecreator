/**
 * TikTok Customer Acquisition Cost (CAC) Calculator
 * Calculates the cost to acquire a new customer through TikTok marketing
 */

import type { CACInput, CACResult } from '@/types/calculator';

/**
 * Calculate Customer Acquisition Cost
 */
export function calculateCAC(input: CACInput): CACResult {
  const { marketingSpend, newCustomers, timeframe } = input;

  // Calculate CAC
  const cac = marketingSpend / newCustomers;

  // Determine benchmark based on industry standards
  let benchmark: 'excellent' | 'good' | 'acceptable' | 'high';
  let interpretation = '';

  const timeframeName = {
    month: 'month',
    quarter: 'quarter',
    year: 'year',
  }[timeframe];

  if (cac <= 20) {
    benchmark = 'excellent';
    interpretation = `**Excellent CAC!** Your $${cac.toFixed(2)} customer acquisition cost is outstanding for TikTok marketing. With $${marketingSpend.toLocaleString()} spent this ${timeframeName} acquiring ${newCustomers.toLocaleString()} customers, you're running a highly efficient operation. This low CAC allows for strong profit margins.`;
  } else if (cac <= 50) {
    benchmark = 'good';
    interpretation = `**Good CAC.** Your $${cac.toFixed(2)} per customer is solid for TikTok. Spending $${marketingSpend.toLocaleString()} to acquire ${newCustomers.toLocaleString()} customers this ${timeframeName} indicates effective marketing. Ensure your customer lifetime value (LTV) is at least 3x this amount for healthy margins.`;
  } else if (cac <= 100) {
    benchmark = 'acceptable';
    interpretation = `**Acceptable CAC.** At $${cac.toFixed(2)} per customer (from $${marketingSpend.toLocaleString()} spend and ${newCustomers.toLocaleString()} customers this ${timeframeName}), you're in a workable range. Focus on improving conversion rates or reducing ad costs to improve profitability. Aim for CAC below $50.`;
  } else {
    benchmark = 'high';
    interpretation = `**High CAC.** Your $${cac.toFixed(2)} customer acquisition cost is elevated. With $${marketingSpend.toLocaleString()} spent to acquire ${newCustomers.toLocaleString()} customers this ${timeframeName}, you need to: (1) improve ad targeting, (2) optimize conversion funnels, (3) test different creative approaches, or (4) ensure your LTV is at least 3-5x this CAC to remain profitable.`;
  }

  return {
    cac: Math.round(cac * 100) / 100,
    benchmark,
    value: Math.round(cac * 100) / 100,
    interpretation,
    additionalMetrics: {
      customersPerDollar: Math.round((1 / cac) * 1000) / 1000,
      recommendedLTV: Math.round((cac * 3) * 100) / 100,
      breakEvenLTV: Math.round(cac * 100) / 100,
    },
  };
}

/**
 * Validate CAC input
 */
export function validateCACInput(input: Partial<CACInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.marketingSpend || input.marketingSpend <= 0) {
    errors.marketingSpend = 'Marketing spend must be greater than $0';
  }

  if (input.marketingSpend && input.marketingSpend > 10000000) {
    errors.marketingSpend = 'Marketing spend must be less than $10 million';
  }

  if (!input.newCustomers || input.newCustomers < 1) {
    errors.newCustomers = 'New customers must be at least 1';
  }

  if (input.newCustomers && input.newCustomers > 1000000) {
    errors.newCustomers = 'New customers must be less than 1 million';
  }

  if (!input.timeframe) {
    errors.timeframe = 'Please select a timeframe';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
