/**
 * TikTok Customer Lifetime Value (LTV) Calculator
 * Calculates the total value a customer brings over their lifetime
 */

import type { LTVInput, LTVResult } from '@/types/calculator';

/**
 * Calculate Customer Lifetime Value
 */
export function calculateLTV(input: LTVInput): LTVResult {
  const { avgOrderValue, purchaseFrequency, customerLifespan } = input;

  // Calculate LTV
  const ltv = avgOrderValue * purchaseFrequency * customerLifespan;

  // Calculate monthly value
  const monthlyValue = ltv / customerLifespan;

  // Generate interpretation
  let interpretation = '';
  if (ltv >= 1000) {
    interpretation = `**Excellent customer lifetime value!** Each customer is worth $${ltv.toFixed(2)} over ${customerLifespan} months (${(customerLifespan / 12).toFixed(1)} years). With an average order of $${avgOrderValue.toFixed(2)} purchased ${purchaseFrequency}x per month, you're generating $${monthlyValue.toFixed(2)}/month per customer. This strong LTV allows for higher customer acquisition costs.`;
  } else if (ltv >= 500) {
    interpretation = `**Good customer lifetime value.** Your LTV of $${ltv.toFixed(2)} over ${customerLifespan} months provides solid economics. With $${avgOrderValue.toFixed(2)} orders at ${purchaseFrequency}x/month frequency, you're earning $${monthlyValue.toFixed(2)}/month per customer. Ensure your CAC is below $${(ltv / 3).toFixed(2)} for healthy margins.`;
  } else if (ltv >= 200) {
    interpretation = `**Moderate customer lifetime value.** At $${ltv.toFixed(2)} over ${customerLifespan} months, you have room to improve. With $${avgOrderValue.toFixed(2)} average orders and ${purchaseFrequency}x/month frequency ($${monthlyValue.toFixed(2)}/month per customer), focus on either increasing order value, purchase frequency, or customer lifespan.`;
  } else {
    interpretation = `**Low customer lifetime value.** Your LTV of $${ltv.toFixed(2)} over ${customerLifespan} months limits your marketing budget. Currently earning $${monthlyValue.toFixed(2)}/month per customer from $${avgOrderValue.toFixed(2)} orders at ${purchaseFrequency}x/month. To improve: (1) increase average order value through upsells, (2) boost purchase frequency with subscriptions or incentives, or (3) extend customer lifespan through better retention.`;
  }

  return {
    ltv: Math.round(ltv * 100) / 100,
    monthlyValue: Math.round(monthlyValue * 100) / 100,
    totalRevenue: Math.round(ltv * 100) / 100,
    value: Math.round(ltv * 100) / 100,
    interpretation,
    additionalMetrics: {
      annualValue: Math.round((monthlyValue * 12) * 100) / 100,
      totalPurchases: purchaseFrequency * customerLifespan,
      maxRecommendedCAC: Math.round((ltv / 3) * 100) / 100,
    },
  };
}

/**
 * Validate LTV input
 */
export function validateLTVInput(input: Partial<LTVInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.avgOrderValue || input.avgOrderValue <= 0) {
    errors.avgOrderValue = 'Average order value must be greater than $0';
  }

  if (input.avgOrderValue && input.avgOrderValue > 100000) {
    errors.avgOrderValue = 'Average order value must be less than $100,000';
  }

  if (!input.purchaseFrequency || input.purchaseFrequency <= 0) {
    errors.purchaseFrequency = 'Purchase frequency must be greater than 0';
  }

  if (input.purchaseFrequency && input.purchaseFrequency > 100) {
    errors.purchaseFrequency = 'Purchase frequency must be less than 100 purchases per month';
  }

  if (!input.customerLifespan || input.customerLifespan < 1) {
    errors.customerLifespan = 'Customer lifespan must be at least 1 month';
  }

  if (input.customerLifespan && input.customerLifespan > 120) {
    errors.customerLifespan = 'Customer lifespan must be less than 120 months (10 years)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
