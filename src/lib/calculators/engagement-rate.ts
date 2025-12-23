/**
 * TikTok Engagement Rate Calculator
 * Calculates engagement rate and provides benchmarking
 */

import type {
  EngagementRateInput,
  EngagementRateResult,
} from '@/types/calculator';
import { ENGAGEMENT_THRESHOLDS } from '@/lib/constants/calculator-constants';

/**
 * Calculate engagement rate
 */
export function calculateEngagementRate(
  input: EngagementRateInput
): EngagementRateResult {
  const { followers, avgLikes, avgComments, avgShares } = input;

  // Calculate total engagements
  const totalEngagements = avgLikes + avgComments + avgShares;

  // Calculate engagement rate
  const rate = (totalEngagements / followers) * 100;

  // Determine rating
  let rating: 'excellent' | 'good' | 'average' | 'below-average';
  let interpretation = '';

  if (rate >= ENGAGEMENT_THRESHOLDS.excellent) {
    rating = 'excellent';
    interpretation = `**Excellent engagement rate!** You're in the top 10% of TikTok creators. Your audience is highly engaged, which translates to better algorithmic performance and higher earning potential.`;
  } else if (rate >= ENGAGEMENT_THRESHOLDS.good) {
    rating = 'good';
    interpretation = `**Great engagement!** Your rate is above average. Brands look for creators with 5%+ engagement, so you're in a strong negotiating position for sponsorships.`;
  } else if (rate >= ENGAGEMENT_THRESHOLDS.average) {
    rating = 'average';
    interpretation = `**Average engagement rate.** You're performing similarly to most TikTok creators. To improve, focus on creating content that encourages comments and shares.`;
  } else {
    rating = 'below-average';
    interpretation = `**Your engagement could use improvement.** Try asking questions in captions, responding to comments, and using trending sounds to boost interaction.`;
  }

  return {
    rate: Math.round(rate * 100) / 100,
    rating,
    interpretation,
    value: Math.round(rate * 100) / 100,
    additionalMetrics: {
      totalEngagements,
      likesPercentage: Math.round((avgLikes / totalEngagements) * 100),
      commentsPercentage: Math.round((avgComments / totalEngagements) * 100),
      sharesPercentage: Math.round((avgShares / totalEngagements) * 100),
    },
  };
}

/**
 * Validate engagement rate input
 */
export function validateEngagementRateInput(
  input: Partial<EngagementRateInput>
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

  if (input.avgLikes === undefined || input.avgLikes < 0) {
    errors.avgLikes = 'Average likes must be 0 or greater';
  }

  if (input.avgComments === undefined || input.avgComments < 0) {
    errors.avgComments = 'Average comments must be 0 or greater';
  }

  if (input.avgShares === undefined || input.avgShares < 0) {
    errors.avgShares = 'Average shares must be 0 or greater';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Get engagement rate interpretation message
 */
export function getEngagementRateMessage(rate: number): string {
  if (rate >= ENGAGEMENT_THRESHOLDS.excellent) {
    return 'Excellent - Top 10% of creators';
  }
  if (rate >= ENGAGEMENT_THRESHOLDS.good) {
    return 'Good - Above average performance';
  }
  if (rate >= ENGAGEMENT_THRESHOLDS.average) {
    return 'Average - Typical for most creators';
  }
  return 'Below Average - Room for improvement';
}
