/**
 * TikTok Money Calculator (Comprehensive)
 * Calculates total earnings from all monetization streams
 */

import type {
  MoneyCalculatorInput,
  MoneyCalculatorResult,
} from '@/types/calculator';
import { calculateCreatorFund } from './creator-fund';
import { calculateBrandDeal } from './brand-deal';
import { calculateLiveGifts } from './live-gifts';
import { MONTHLY_MULTIPLIER } from '@/lib/constants/calculator-constants';

/**
 * Calculate total money from all streams
 */
export function calculateTotalMoney(
  input: MoneyCalculatorInput
): MoneyCalculatorResult {
  const {
    followers,
    monthlyViews,
    engagementRate,
    niche,
    avgStreamViewers = 0,
    monthlyStreams = 0,
  } = input;

  // Calculate Creator Fund earnings
  const creatorFundResult = calculateCreatorFund({
    monthlyViews,
    engagementRate,
    niche,
  });

  // Calculate Brand Deal potential (assuming 2 deals per month for active creators)
  const brandDealResult = calculateBrandDeal({
    followers,
    engagementRate,
    niche,
    deliverableType: 'in-feed',
  });
  const avgDealRate = (brandDealResult.minRate + brandDealResult.maxRate) / 2;
  const dealsPerMonth = followers >= 50000 ? 2 : followers >= 10000 ? 1 : 0.5;
  const monthlyBrandDeals = {
    min: brandDealResult.minRate * dealsPerMonth,
    max: brandDealResult.maxRate * dealsPerMonth,
  };

  // Calculate LIVE earnings (if streaming)
  let liveEarnings = { min: 0, max: 0 };
  if (avgStreamViewers > 0 && monthlyStreams > 0) {
    const liveResult = calculateLiveGifts({
      avgViewers: avgStreamViewers,
      avgStreamDuration: 60,
      giftsPerViewer: 0.3,
    });
    const perStreamEarnings = liveResult.usdEarnings;
    liveEarnings = {
      min: perStreamEarnings * monthlyStreams * 0.8,
      max: perStreamEarnings * monthlyStreams * 1.2,
    };
  }

  // Calculate totals
  const totalMin =
    creatorFundResult.minMonthly + monthlyBrandDeals.min + liveEarnings.min;
  const totalMax =
    creatorFundResult.maxMonthly + monthlyBrandDeals.max + liveEarnings.max;

  // Create breakdown
  const breakdown = [
    {
      label: 'Creator Fund',
      value: (creatorFundResult.minMonthly + creatorFundResult.maxMonthly) / 2,
      percentage:
        ((creatorFundResult.minMonthly + creatorFundResult.maxMonthly) /
          2 /
          ((totalMin + totalMax) / 2)) *
        100,
    },
    {
      label: 'Brand Deals',
      value: (monthlyBrandDeals.min + monthlyBrandDeals.max) / 2,
      percentage:
        ((monthlyBrandDeals.min + monthlyBrandDeals.max) /
          2 /
          ((totalMin + totalMax) / 2)) *
        100,
    },
  ];

  if (liveEarnings.min > 0 || liveEarnings.max > 0) {
    breakdown.push({
      label: 'LIVE Gifts',
      value: (liveEarnings.min + liveEarnings.max) / 2,
      percentage:
        ((liveEarnings.min + liveEarnings.max) / 2 / ((totalMin + totalMax) / 2)) *
        100,
    });
  }

  // Generate interpretation
  let interpretation = '';
  const avgTotal = (totalMin + totalMax) / 2;

  if (avgTotal >= 5000) {
    interpretation = `**Strong earning potential!** With ${followers.toLocaleString()} followers and ${engagementRate}% engagement, you could earn $${Math.round(totalMin).toLocaleString()}–$${Math.round(totalMax).toLocaleString()} monthly across all streams. This is solid creator income—focus on consistency and diversification.`;
  } else if (avgTotal >= 1000) {
    interpretation = `**Growing income potential.** Your estimated monthly earnings of $${Math.round(totalMin).toLocaleString()}–$${Math.round(totalMax).toLocaleString()} show you're building meaningful creator revenue. Focus on ${
      breakdown[0].percentage > 50
        ? 'securing more brand deals to diversify income'
        : 'growing your audience to unlock higher rates'
    }.`;
  } else if (avgTotal >= 100) {
    interpretation = `**Early-stage monetization.** At $${Math.round(totalMin).toLocaleString()}–$${Math.round(totalMax).toLocaleString()}/month, you're starting to earn from your content. To scale, focus on hitting 10K followers for Creator Fund eligibility and building a portfolio for brand outreach.`;
  } else {
    interpretation = `**Pre-monetization or starting phase.** Focus on growing to 10K followers and 100K monthly views to unlock Creator Fund, then build to 50K+ followers for consistent brand deal opportunities.`;
  }

  return {
    creatorFund: {
      min: Math.round(creatorFundResult.minMonthly * 100) / 100,
      max: Math.round(creatorFundResult.maxMonthly * 100) / 100,
    },
    brandDeals: {
      min: Math.round(monthlyBrandDeals.min),
      max: Math.round(monthlyBrandDeals.max),
    },
    liveGifts: {
      min: Math.round(liveEarnings.min * 100) / 100,
      max: Math.round(liveEarnings.max * 100) / 100,
    },
    total: {
      min: Math.round(totalMin * 100) / 100,
      max: Math.round(totalMax * 100) / 100,
    },
    breakdown: breakdown.map((b) => ({
      ...b,
      value: Math.round(b.value * 100) / 100,
      percentage: Math.round(b.percentage * 10) / 10,
    })),
    interpretation,
    min: Math.round(totalMin * 100) / 100,
    max: Math.round(totalMax * 100) / 100,
    additionalMetrics: {
      annualMin: Math.round(totalMin * MONTHLY_MULTIPLIER),
      annualMax: Math.round(totalMax * MONTHLY_MULTIPLIER),
      dominantStream: breakdown[0].label,
      diversificationScore:
        breakdown.length === 3
          ? 'Excellent'
          : breakdown.length === 2
          ? 'Good'
          : 'Limited',
    },
  };
}

/**
 * Validate money calculator input
 */
export function validateMoneyCalculatorInput(
  input: Partial<MoneyCalculatorInput>
): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.followers || input.followers < 1) {
    errors.followers = 'Follower count must be at least 1';
  }

  if (input.followers && input.followers > 1000000000) {
    errors.followers = 'Follower count must be less than 1 billion';
  }

  if (!input.monthlyViews || input.monthlyViews < 1) {
    errors.monthlyViews = 'Monthly views must be at least 1';
  }

  if (input.monthlyViews && input.monthlyViews > 1000000000) {
    errors.monthlyViews = 'Monthly views must be less than 1 billion';
  }

  if (input.engagementRate === undefined || input.engagementRate < 0) {
    errors.engagementRate = 'Engagement rate must be at least 0%';
  }

  if (input.engagementRate && input.engagementRate > 100) {
    errors.engagementRate = 'Engagement rate cannot exceed 100%';
  }

  if (!input.niche) {
    errors.niche = 'Please select a content niche';
  }

  if (input.avgStreamViewers !== undefined && input.avgStreamViewers < 0) {
    errors.avgStreamViewers = 'Average stream viewers must be 0 or greater';
  }

  if (input.monthlyStreams !== undefined && input.monthlyStreams < 0) {
    errors.monthlyStreams = 'Monthly streams must be 0 or greater';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
