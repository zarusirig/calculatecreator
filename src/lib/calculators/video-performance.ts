/**
 * TikTok Video Performance Calculator
 * Predicts video performance based on historical metrics
 */

import type {
  VideoPerformanceInput,
  VideoPerformanceResult,
} from '@/types/calculator';

/**
 * Calculate video performance score
 */
export function calculateVideoPerformance(
  input: VideoPerformanceInput
): VideoPerformanceResult {
  const { avgViews, avgLikes, avgComments, avgShares, followers } = input;

  // Calculate engagement rate
  const totalEngagements = avgLikes + avgComments + avgShares;
  const engagementRate = (totalEngagements / avgViews) * 100;

  // Calculate view-to-follower ratio
  const viewToFollowerRatio = (avgViews / followers) * 100;

  // Calculate performance score (0-100)
  // Factors: engagement rate (40%), view-to-follower ratio (30%), viral potential (30%)
  const engagementScore = Math.min((engagementRate / 10) * 40, 40);
  const viewScore = Math.min((viewToFollowerRatio / 100) * 30, 30);
  const viralScore = Math.min((avgShares / avgViews) * 100 * 30, 30);

  const performanceScore = Math.round(engagementScore + viewScore + viralScore);

  // Determine rating
  let rating: 'excellent' | 'good' | 'average' | 'below-average';
  if (performanceScore >= 75) rating = 'excellent';
  else if (performanceScore >= 60) rating = 'good';
  else if (performanceScore >= 40) rating = 'average';
  else rating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  if (rating === 'excellent') {
    interpretation = `**Outstanding performance!** Your videos are performing exceptionally well with a ${performanceScore}/100 score. Your ${viewToFollowerRatio.toFixed(1)}x view-to-follower ratio and ${engagementRate.toFixed(2)}% engagement rate indicate strong audience connection and viral potential.`;
  } else if (rating === 'good') {
    interpretation = `**Strong performance!** Your content is performing above average with a ${performanceScore}/100 score. Your videos reach ${viewToFollowerRatio.toFixed(1)}x your follower count with ${engagementRate.toFixed(2)}% engagement. Keep experimenting with your winning formulas.`;
  } else if (rating === 'average') {
    interpretation = `**Moderate performance.** Your ${performanceScore}/100 score suggests room for improvement. With ${viewToFollowerRatio.toFixed(1)}x reach and ${engagementRate.toFixed(2)}% engagement, focus on hook optimization and trending sounds to boost performance.`;
  } else {
    interpretation = `**Below average performance.** A ${performanceScore}/100 score indicates challenges with reach or engagement. Consider analyzing your top 10% performing videos and identifying patterns to replicate.`;
  }

  return {
    performanceScore,
    rating,
    viewToFollowerRatio: Math.round(viewToFollowerRatio * 100) / 100,
    interpretation,
    value: performanceScore,
  };
}

/**
 * Validate video performance input
 */
export function validateVideoPerformanceInput(input: Partial<VideoPerformanceInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.avgViews || input.avgViews < 0) {
    errors.avgViews = 'Average views must be at least 0';
  }

  if (!input.avgLikes || input.avgLikes < 0) {
    errors.avgLikes = 'Average likes must be at least 0';
  }

  if (!input.avgComments || input.avgComments < 0) {
    errors.avgComments = 'Average comments must be at least 0';
  }

  if (!input.avgShares || input.avgShares < 0) {
    errors.avgShares = 'Average shares must be at least 0';
  }

  if (!input.followers || input.followers < 1) {
    errors.followers = 'Followers must be at least 1';
  }

  if (input.avgLikes && input.avgViews && input.avgLikes > input.avgViews) {
    errors.avgLikes = 'Average likes cannot exceed average views';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
