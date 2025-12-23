/**
 * TikTok Hashtag Performance Calculator
 * Analyzes hashtag effectiveness by comparing performance with and without
 */

import type {
  HashtagPerformanceInput,
  HashtagPerformanceResult,
} from '@/types/calculator';

/**
 * Calculate hashtag performance
 */
export function calculateHashtagPerformance(
  input: HashtagPerformanceInput
): HashtagPerformanceResult {
  const { baselineViews, hashtagViews, hashtagEngagement, baselineEngagement } = input;

  // Calculate view lift (percentage increase in views)
  const viewLift = ((hashtagViews - baselineViews) / baselineViews) * 100;

  // Calculate engagement lift (percentage increase in engagement)
  const engagementLift = ((hashtagEngagement - baselineEngagement) / baselineEngagement) * 100;

  // Calculate overall effectiveness score (0-100)
  const viewScore = Math.min(Math.max((viewLift + 50) / 2, 0), 50); // Max 50 points
  const engagementScore = Math.min(Math.max((engagementLift + 50) / 2, 0), 50); // Max 50 points
  const effectivenessScore = Math.round(viewScore + engagementScore);

  // Determine rating
  let rating: 'highly-effective' | 'effective' | 'neutral' | 'ineffective';
  if (effectivenessScore >= 70) rating = 'highly-effective';
  else if (effectivenessScore >= 50) rating = 'effective';
  else if (effectivenessScore >= 30) rating = 'neutral';
  else rating = 'ineffective';

  // Generate interpretation
  let interpretation = '';
  if (rating === 'highly-effective') {
    interpretation = `**Highly effective hashtags!** Your hashtags generated ${viewLift > 0 ? '+' : ''}${viewLift.toFixed(1)}% more views (${hashtagViews.toLocaleString()} vs ${baselineViews.toLocaleString()}) and ${engagementLift > 0 ? '+' : ''}${engagementLift.toFixed(1)}% more engagement. Effectiveness score: ${effectivenessScore}/100. These hashtags are significantly expanding your reach and attracting engaged viewers. Continue using this hashtag strategy.`;
  } else if (rating === 'effective') {
    interpretation = `**Effective hashtags!** Your hashtags show positive impact with ${viewLift > 0 ? '+' : ''}${viewLift.toFixed(1)}% view lift and ${engagementLift > 0 ? '+' : ''}${engagementLift.toFixed(1)}% engagement lift. Score: ${effectivenessScore}/100. They're helping but have room for optimization. Test mixing trending hashtags with niche-specific tags for better results.`;
  } else if (rating === 'neutral') {
    interpretation = `**Neutral hashtag impact.** Your hashtags show minimal impact: ${viewLift > 0 ? '+' : ''}${viewLift.toFixed(1)}% views, ${engagementLift > 0 ? '+' : ''}${engagementLift.toFixed(1)}% engagement (Score: ${effectivenessScore}/100). Consider: researching trending hashtags in your niche, avoiding banned/oversaturated tags, using 3-5 relevant hashtags instead of maxing out, and creating branded hashtags.`;
  } else {
    interpretation = `**Ineffective hashtags.** Your hashtags may be hurting performance: ${viewLift.toFixed(1)}% view change, ${engagementLift.toFixed(1)}% engagement change (Score: ${effectivenessScore}/100). Possible issues: banned hashtags, oversaturated tags, irrelevant hashtags, or algorithm penalties. Try: focusing on 3-5 highly relevant hashtags, avoiding generic tags like #fyp, and using niche-specific hashtags.`;
  }

  return {
    viewLift: Math.round(viewLift * 100) / 100,
    engagementLift: Math.round(engagementLift * 100) / 100,
    effectivenessScore,
    rating,
    interpretation,
    value: effectivenessScore,
  };
}

/**
 * Validate hashtag performance input
 */
export function validateHashtagPerformanceInput(input: Partial<HashtagPerformanceInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.baselineViews || input.baselineViews < 1) {
    errors.baselineViews = 'Baseline views must be at least 1';
  }

  if (!input.hashtagViews || input.hashtagViews < 0) {
    errors.hashtagViews = 'Hashtag views must be at least 0';
  }

  if (!input.baselineEngagement || input.baselineEngagement < 0) {
    errors.baselineEngagement = 'Baseline engagement must be at least 0';
  }

  if (!input.hashtagEngagement || input.hashtagEngagement < 0) {
    errors.hashtagEngagement = 'Hashtag engagement must be at least 0';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
