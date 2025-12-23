/**
 * TikTok Affiliate Commission Calculator
 * Calculates earnings from TikTok Shop affiliate commissions
 */

import type { AffiliateCommissionInput, AffiliateCommissionResult } from '@/types/calculator';

/**
 * Calculate affiliate commission earnings
 */
export function calculateAffiliateCommission(input: AffiliateCommissionInput): AffiliateCommissionResult {
  const { productPrice, commissionRate, monthlyClicks, conversionRate } = input;

  // Calculate commission per sale
  const commissionPerSale = productPrice * (commissionRate / 100);

  // Calculate expected sales
  const expectedSales = monthlyClicks * (conversionRate / 100);

  // Calculate monthly earnings
  const monthlyEarnings = commissionPerSale * expectedSales;

  // Calculate annual projection
  const annualProjection = monthlyEarnings * 12;

  // Calculate click value (EPC - Earnings Per Click)
  const clickValue = monthlyEarnings / monthlyClicks;

  // Generate interpretation
  let interpretation = '';
  if (monthlyEarnings >= 1000) {
    interpretation = `**Excellent affiliate performance!** You're earning $${monthlyEarnings.toFixed(2)}/month from ${expectedSales.toFixed(0)} sales. With ${monthlyClicks.toLocaleString()} monthly clicks at a ${conversionRate}% conversion rate, you're on track for $${annualProjection.toFixed(2)}/year.`;
  } else if (monthlyEarnings >= 500) {
    interpretation = `**Good affiliate earnings.** You're making $${monthlyEarnings.toFixed(2)}/month. To scale up, focus on increasing either clicks (current: ${monthlyClicks.toLocaleString()}) or conversion rate (current: ${conversionRate}%).`;
  } else if (monthlyEarnings >= 100) {
    interpretation = `**Growing affiliate income.** At $${monthlyEarnings.toFixed(2)}/month, you're building momentum. Consider promoting higher-priced products (current: $${productPrice}) or improving conversion rate (${conversionRate}%).`;
  } else {
    interpretation = `**Starting out with affiliates.** Currently earning $${monthlyEarnings.toFixed(2)}/month. Focus on: (1) increasing traffic to ${monthlyClicks.toLocaleString()}+ clicks/month, (2) testing different products, or (3) optimizing your pitch to boost the ${conversionRate}% conversion rate.`;
  }

  return {
    commissionPerSale: Math.round(commissionPerSale * 100) / 100,
    expectedSales: Math.round(expectedSales * 10) / 10,
    monthlyEarnings: Math.round(monthlyEarnings * 100) / 100,
    annualProjection: Math.round(annualProjection * 100) / 100,
    clickValue: Math.round(clickValue * 100) / 100,
    value: Math.round(monthlyEarnings * 100) / 100,
    interpretation,
  };
}

/**
 * Validate affiliate commission input
 */
export function validateAffiliateCommissionInput(input: Partial<AffiliateCommissionInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.productPrice || input.productPrice <= 0) {
    errors.productPrice = 'Product price must be greater than $0';
  }

  if (input.productPrice && input.productPrice > 10000) {
    errors.productPrice = 'Product price must be less than $10,000';
  }

  if (input.commissionRate === undefined || input.commissionRate <= 0) {
    errors.commissionRate = 'Commission rate must be greater than 0%';
  }

  if (input.commissionRate && input.commissionRate > 100) {
    errors.commissionRate = 'Commission rate cannot exceed 100%';
  }

  if (!input.monthlyClicks || input.monthlyClicks < 10) {
    errors.monthlyClicks = 'Monthly clicks must be at least 10';
  }

  if (input.monthlyClicks && input.monthlyClicks > 10000000) {
    errors.monthlyClicks = 'Monthly clicks must be less than 10 million';
  }

  if (input.conversionRate === undefined || input.conversionRate <= 0) {
    errors.conversionRate = 'Conversion rate must be greater than 0%';
  }

  if (input.conversionRate && input.conversionRate > 100) {
    errors.conversionRate = 'Conversion rate cannot exceed 100%';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
