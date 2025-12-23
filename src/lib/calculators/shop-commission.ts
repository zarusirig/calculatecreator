/**
 * TikTok Shop Commission Calculator
 * Calculates estimated commission earnings from TikTok Shop affiliate sales
 */

import type {
  ShopCommissionInput,
  ShopCommissionResult,
} from '@/types/calculator';
import {
  SHOP_COMMISSION,
  MONTHLY_MULTIPLIER,
} from '@/lib/constants/calculator-constants';

/**
 * Calculate Shop Commission
 */
export function calculateShopCommission(
  input: ShopCommissionInput
): ShopCommissionResult {
  const { productPrice, commissionRate, monthlySales } = input;

  // Calculate commission per sale
  const commissionPerSale = (productPrice * commissionRate) / 100;

  // Calculate monthly commission
  const monthlyCommission = commissionPerSale * monthlySales;

  // Annual projection
  const annualProjection = monthlyCommission * MONTHLY_MULTIPLIER;

  // Generate interpretation
  let interpretation = '';
  if (monthlyCommission >= 2000) {
    interpretation = `**Strong Shop earnings!** With ${monthlySales} sales per month at ${commissionRate}% commission, you're earning $${Math.round(monthlyCommission).toLocaleString()}/month from TikTok Shop. This is a significant income stream—consider expanding your product catalog.`;
  } else if (monthlyCommission >= 500) {
    interpretation = `**Good supplementary income.** Your estimated $${Math.round(monthlyCommission).toLocaleString()}/month from TikTok Shop commissions adds meaningfully to your total creator earnings. Focus on increasing conversion rates through better product showcases.`;
  } else if (monthlyCommission >= 100) {
    interpretation = `**Modest Shop earnings.** At $${Math.round(monthlyCommission).toLocaleString()}/month, TikTok Shop provides additional income. To scale, increase sales volume through more frequent product features or higher-ticket items.`;
  } else {
    interpretation = `**Early-stage Shop earnings.** At current levels ($${Math.round(monthlyCommission).toLocaleString()}/month), focus on testing different products and promotional strategies to find what resonates with your audience.`;
  }

  return {
    commissionPerSale: Math.round(commissionPerSale * 100) / 100,
    monthlyCommission: Math.round(monthlyCommission * 100) / 100,
    annualProjection: Math.round(annualProjection * 100) / 100,
    interpretation,
    value: Math.round(monthlyCommission * 100) / 100,
    additionalMetrics: {
      salesNeededFor1000: Math.round(1000 / commissionPerSale),
      avgOrderValue: productPrice,
      effectiveCommissionRate: commissionRate,
    },
  };
}

/**
 * Validate Shop Commission input
 */
export function validateShopCommissionInput(
  input: Partial<ShopCommissionInput>
): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.productPrice || input.productPrice < 0.01) {
    errors.productPrice = 'Product price must be at least $0.01';
  }

  if (input.productPrice && input.productPrice > 100000) {
    errors.productPrice = 'Product price must be less than $100,000';
  }

  if (!input.commissionRate || input.commissionRate < SHOP_COMMISSION.min) {
    errors.commissionRate = `Commission rate must be at least ${SHOP_COMMISSION.min}%`;
  }

  if (input.commissionRate && input.commissionRate > SHOP_COMMISSION.max) {
    errors.commissionRate = `Commission rate must be at most ${SHOP_COMMISSION.max}%`;
  }

  if (!input.monthlySales || input.monthlySales < 1) {
    errors.monthlySales = 'Monthly sales must be at least 1';
  }

  if (input.monthlySales && input.monthlySales > 100000) {
    errors.monthlySales = 'Monthly sales must be less than 100,000';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
