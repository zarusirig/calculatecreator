/**
 * TikTok Follower Conversion Calculator
 * Calculates e-commerce conversion rates from followers
 */

import type {
  FollowerConversionInput,
  FollowerConversionResult,
} from '@/types/calculator';

/**
 * Calculate follower conversion metrics
 */
export function calculateFollowerConversion(
  input: FollowerConversionInput
): FollowerConversionResult {
  const { followers, websiteClicks, purchases, avgOrderValue } = input;

  // Calculate click-through rate (followers who clicked)
  const clickThroughRate = (websiteClicks / followers) * 100;

  // Calculate conversion rate (clicks who purchased)
  const conversionRate = (purchases / websiteClicks) * 100;

  // Calculate overall conversion rate (followers who purchased)
  const overallConversionRate = (purchases / followers) * 100;

  // Calculate revenue
  const revenue = purchases * avgOrderValue;

  // Calculate revenue per follower
  const revenuePerFollower = revenue / followers;

  // Generate interpretation
  let interpretation = '';
  if (overallConversionRate >= 5) {
    interpretation = `**Exceptional conversion performance!** ${overallConversionRate.toFixed(2)}% of your ${followers.toLocaleString()} followers make purchases - that's ${purchases.toLocaleString()} sales generating $${revenue.toLocaleString()} ($${revenuePerFollower.toFixed(2)} per follower). Your ${clickThroughRate.toFixed(2)}% CTR and ${conversionRate.toFixed(2)}% conversion rate are outstanding. This indicates strong audience trust and product-market fit.`;
  } else if (overallConversionRate >= 2) {
    interpretation = `**Strong conversion rate!** ${overallConversionRate.toFixed(2)}% overall conversion (${purchases.toLocaleString()} sales from ${followers.toLocaleString()} followers) generates $${revenue.toLocaleString()} revenue. Your funnel: ${clickThroughRate.toFixed(2)}% click through, ${conversionRate.toFixed(2)}% convert. At $${revenuePerFollower.toFixed(2)} per follower, you're monetizing well. Focus on scaling follower count.`;
  } else if (overallConversionRate >= 0.5) {
    interpretation = `**Moderate conversion.** Your ${overallConversionRate.toFixed(2)}% conversion rate (${purchases.toLocaleString()} sales / ${followers.toLocaleString()} followers) yields $${revenue.toLocaleString()} ($${revenuePerFollower.toFixed(2)}/follower). Breakdown: ${clickThroughRate.toFixed(2)}% CTR, ${conversionRate.toFixed(2)}% conversion. Improve by: stronger CTAs, social proof, better product pages, retargeting, or lowering friction in checkout.`;
  } else {
    interpretation = `**Low conversion rate.** At ${overallConversionRate.toFixed(2)}%, only ${purchases.toLocaleString()} of ${followers.toLocaleString()} followers purchase ($${revenue.toLocaleString()} total). Issues: weak CTR (${clickThroughRate.toFixed(2)}%) or poor conversion (${conversionRate.toFixed(2)}%). Solutions: more compelling offers, clear CTAs, testimonials, limited-time offers, audience alignment verification, or product-market fit assessment.`;
  }

  return {
    clickThroughRate: Math.round(clickThroughRate * 100) / 100,
    conversionRate: Math.round(conversionRate * 100) / 100,
    overallConversionRate: Math.round(overallConversionRate * 100) / 100,
    revenue: Math.round(revenue * 100) / 100,
    revenuePerFollower: Math.round(revenuePerFollower * 100) / 100,
    interpretation,
    value: overallConversionRate,
  };
}

/**
 * Validate follower conversion input
 */
export function validateFollowerConversionInput(input: Partial<FollowerConversionInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.followers || input.followers < 1) {
    errors.followers = 'Followers must be at least 1';
  }

  if (!input.websiteClicks || input.websiteClicks < 0) {
    errors.websiteClicks = 'Website clicks must be at least 0';
  }

  if (input.websiteClicks && input.followers && input.websiteClicks > input.followers) {
    errors.websiteClicks = 'Website clicks cannot exceed followers';
  }

  if (!input.purchases || input.purchases < 0) {
    errors.purchases = 'Purchases must be at least 0';
  }

  if (input.purchases && input.websiteClicks && input.purchases > input.websiteClicks) {
    errors.purchases = 'Purchases cannot exceed website clicks';
  }

  if (!input.avgOrderValue || input.avgOrderValue <= 0) {
    errors.avgOrderValue = 'Average order value must be greater than $0';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
