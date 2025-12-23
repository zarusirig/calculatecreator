/**
 * TikTok Posting Frequency Calculator
 * Calculates optimal posting frequency based on goals and capacity
 */

import type {
  PostingFrequencyInput,
  PostingFrequencyResult,
} from '@/types/calculator';

/**
 * Calculate optimal posting frequency
 */
export function calculatePostingFrequency(
  input: PostingFrequencyInput
): PostingFrequencyResult {
  const { currentPosts, availableHours, contentQuality, growthGoal } = input;

  // Calculate optimal posting frequency based on growth goal
  let recommendedDaily = 1;
  let recommendedWeekly = 7;

  if (growthGoal === 'viral') {
    recommendedDaily = 3;
    recommendedWeekly = 21;
  } else if (growthGoal === 'aggressive') {
    recommendedDaily = 2;
    recommendedWeekly = 14;
  } else if (growthGoal === 'steady') {
    recommendedDaily = 1;
    recommendedWeekly = 7;
  } else {
    recommendedDaily = 0.5;
    recommendedWeekly = 3.5;
  }

  // Adjust based on available time and quality
  const hoursPerPost = contentQuality === 'high' ? 2 : contentQuality === 'medium' ? 1 : 0.5;
  const capacityPosts = availableHours / hoursPerPost;

  // Don't recommend more than capacity allows
  if (capacityPosts < recommendedDaily) {
    recommendedDaily = Math.max(0.5, Math.floor(capacityPosts * 10) / 10);
    recommendedWeekly = recommendedDaily * 7;
  }

  const postsPerWeek = Math.round(recommendedWeekly);
  const hoursPerWeek = postsPerWeek * hoursPerPost;

  // Calculate improvement needed
  const improvement = recommendedDaily - currentPosts;
  const improvementPercentage = currentPosts > 0 ? (improvement / currentPosts) * 100 : 0;

  // Generate interpretation
  let interpretation = '';
  let consistencyScore = 0;

  if (recommendedDaily >= 2) {
    consistencyScore = 95;
    interpretation = `**Aggressive Growth Strategy!** Posting ${postsPerWeek} times per week (${recommendedDaily.toFixed(1)} per day) will maximize your algorithmic favor and audience engagement. This frequency is ideal for ${growthGoal} growth goals. You'll need approximately ${hoursPerWeek.toFixed(1)} hours per week for content creation.`;
  } else if (recommendedDaily >= 1) {
    consistencyScore = 85;
    interpretation = `**Optimal Frequency!** Posting ${postsPerWeek} times per week maintains strong algorithmic presence while allowing quality production. This ${recommendedDaily.toFixed(1)} posts per day schedule is perfect for ${growthGoal} growth. Budget ${hoursPerWeek.toFixed(1)} hours weekly for content creation.`;
  } else if (recommendedDaily >= 0.5) {
    consistencyScore = 70;
    interpretation = `**Moderate Approach.** Posting ${postsPerWeek} times per week is a sustainable starting point for ${growthGoal} growth. While less frequent, focus on maximizing quality and engagement on each post. Requires ${hoursPerWeek.toFixed(1)} hours per week.`;
  } else {
    consistencyScore = 50;
    interpretation = `**Minimal Posting.** At ${postsPerWeek} posts per week, growth will be slower. Consider increasing frequency as you develop efficient content workflows. Current time commitment: ${hoursPerWeek.toFixed(1)} hours per week.`;
  }

  return {
    recommendedDaily,
    postsPerWeek,
    hoursPerWeek,
    consistencyScore,
    improvement,
    interpretation,
    value: recommendedDaily,
  };
}

/**
 * Validate posting frequency input
 */
export function validatePostingFrequencyInput(input: Partial<PostingFrequencyInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (input.currentPosts === undefined || input.currentPosts < 0) {
    errors.currentPosts = 'Current posts must be at least 0';
  }

  if (input.currentPosts && input.currentPosts > 10) {
    errors.currentPosts = 'Current posts cannot exceed 10 per day';
  }

  if (!input.availableHours || input.availableHours < 0) {
    errors.availableHours = 'Available hours must be at least 0';
  }

  if (input.availableHours && input.availableHours > 24) {
    errors.availableHours = 'Available hours cannot exceed 24 per day';
  }

  if (!input.contentQuality) {
    errors.contentQuality = 'Please select content quality level';
  }

  if (!input.growthGoal) {
    errors.growthGoal = 'Please select your growth goal';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
