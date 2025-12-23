/**
 * TikTok Break-Even Calculator
 * Calculates break-even point for paid promotions
 */

import type {
  BreakEvenInput,
  BreakEvenResult,
} from '@/types/calculator';

/**
 * Calculate break-even metrics
 */
export function calculateBreakEven(
  input: BreakEvenInput
): BreakEvenResult {
  const { adSpend, costPerClick, conversionRate, productPrice, productCost } = input;

  // Calculate profit per sale
  const profitPerSale = productPrice - productCost;

  // Calculate break-even units
  const breakEvenUnits = Math.ceil(adSpend / profitPerSale);

  // Calculate break-even revenue
  const breakEvenRevenue = breakEvenUnits * productPrice;

  // Calculate required conversions (accounting for conversion rate)
  const requiredConversions = breakEvenUnits;

  // Calculate required clicks
  const requiredClicks = Math.ceil(requiredConversions / (conversionRate / 100));

  // Calculate estimated total spend to break even
  const estimatedSpendToBreakEven = requiredClicks * costPerClick;

  // Generate interpretation
  let interpretation = '';
  const efficiency = (adSpend / estimatedSpendToBreakEven) * 100;

  if (efficiency >= 80 && efficiency <= 120) {
    interpretation = `**Balanced break-even!** You need ${breakEvenUnits.toLocaleString()} sales (${requiredClicks.toLocaleString()} clicks at $${costPerClick} CPC with ${conversionRate}% conversion) to break even on $${adSpend.toLocaleString()} ad spend. Each sale profits $${profitPerSale.toFixed(2)}. This requires $${breakEvenRevenue.toLocaleString()} in revenue.`;
  } else if (efficiency < 80) {
    interpretation = `**Challenging break-even.** Your $${adSpend.toLocaleString()} budget may not be sufficient. You need ${breakEvenUnits.toLocaleString()} sales requiring ${requiredClicks.toLocaleString()} clicks (estimated $${estimatedSpendToBreakEven.toLocaleString()}). Consider: lowering CPC, improving conversion rate (currently ${conversionRate}%), or increasing product margin ($${profitPerSale.toFixed(2)}).`;
  } else {
    interpretation = `**Favorable break-even!** With $${adSpend.toLocaleString()} ad spend, you need ${breakEvenUnits.toLocaleString()} sales (${requiredClicks.toLocaleString()} clicks). Your $${profitPerSale.toFixed(2)} profit margin and ${conversionRate}% conversion rate position you to break even early and scale profitably.`;
  }

  return {
    breakEvenUnits,
    breakEvenRevenue: Math.round(breakEvenRevenue * 100) / 100,
    requiredClicks,
    requiredConversions,
    interpretation,
    value: breakEvenUnits,
  };
}

/**
 * Validate break-even input
 */
export function validateBreakEvenInput(input: Partial<BreakEvenInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.adSpend || input.adSpend <= 0) {
    errors.adSpend = 'Ad spend must be greater than $0';
  }

  if (!input.costPerClick || input.costPerClick <= 0) {
    errors.costPerClick = 'Cost per click must be greater than $0';
  }

  if (!input.conversionRate || input.conversionRate <= 0) {
    errors.conversionRate = 'Conversion rate must be greater than 0%';
  }

  if (input.conversionRate && input.conversionRate > 100) {
    errors.conversionRate = 'Conversion rate cannot exceed 100%';
  }

  if (!input.productPrice || input.productPrice <= 0) {
    errors.productPrice = 'Product price must be greater than $0';
  }

  if (!input.productCost || input.productCost < 0) {
    errors.productCost = 'Product cost must be at least $0';
  }

  if (input.productPrice && input.productCost && input.productCost >= input.productPrice) {
    errors.productCost = 'Product cost must be less than product price';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
