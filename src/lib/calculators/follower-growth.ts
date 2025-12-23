/**
 * TikTok Follower Growth Calculator
 * Projects future follower count based on current growth rate
 */

import type {
  FollowerGrowthInput,
  FollowerGrowthResult,
} from '@/types/calculator';

/**
 * Calculate follower growth projection
 */
export function calculateFollowerGrowth(
  input: FollowerGrowthInput
): FollowerGrowthResult {
  const { currentFollowers, dailyGrowthRate, projectionDays } = input;

  // Calculate daily growth
  const dailyAverage = Math.round(currentFollowers * (dailyGrowthRate / 100));

  // Project future followers (compound growth)
  const growthMultiplier = 1 + (dailyGrowthRate / 100);
  const projectedFollowers = Math.round(
    currentFollowers * Math.pow(growthMultiplier, projectionDays)
  );

  const totalGrowth = projectedFollowers - currentFollowers;
  const growthPercentage = (totalGrowth / currentFollowers) * 100;

  // Generate interpretation
  let interpretation = '';
  const monthlyGrowthRate = dailyGrowthRate * 30;

  if (monthlyGrowthRate >= 30) {
    interpretation = `**Exceptional growth!** At ${dailyGrowthRate}% daily growth, you're growing ${monthlyGrowthRate.toFixed(1)}% per month. You'll gain ${totalGrowth.toLocaleString()} followers in ${projectionDays} days. This is significantly above average and indicates strong content-market fit.`;
  } else if (monthlyGrowthRate >= 15) {
    interpretation = `**Strong growth!** Your ${dailyGrowthRate}% daily growth rate (${monthlyGrowthRate.toFixed(1)}% monthly) is above average. You'll gain ${totalGrowth.toLocaleString()} followers in ${projectionDays} days. Keep creating consistent content to maintain momentum.`;
  } else if (monthlyGrowthRate >= 5) {
    interpretation = `**Steady growth.** At ${dailyGrowthRate}% daily (${monthlyGrowthRate.toFixed(1)}% monthly), you're seeing healthy growth. You'll gain ${totalGrowth.toLocaleString()} followers in ${projectionDays} days. Focus on engagement and trending topics to accelerate.`;
  } else {
    interpretation = `**Slow growth.** Your ${dailyGrowthRate}% daily growth rate means ${totalGrowth.toLocaleString()} new followers in ${projectionDays} days. Consider analyzing your top-performing content and posting more consistently.`;
  }

  return {
    projectedFollowers,
    totalGrowth,
    growthPercentage: Math.round(growthPercentage * 100) / 100,
    dailyAverage,
    interpretation,
    value: projectedFollowers,
  };
}

/**
 * Validate follower growth input
 */
export function validateFollowerGrowthInput(input: Partial<FollowerGrowthInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.currentFollowers || input.currentFollowers < 0) {
    errors.currentFollowers = 'Current followers must be at least 0';
  }

  if (input.currentFollowers && input.currentFollowers > 1000000000) {
    errors.currentFollowers = 'Current followers must be less than 1 billion';
  }

  if (!input.dailyGrowthRate || input.dailyGrowthRate < 0) {
    errors.dailyGrowthRate = 'Daily growth rate must be at least 0%';
  }

  if (input.dailyGrowthRate && input.dailyGrowthRate > 100) {
    errors.dailyGrowthRate = 'Daily growth rate cannot exceed 100%';
  }

  if (!input.projectionDays || input.projectionDays < 1) {
    errors.projectionDays = 'Projection period must be at least 1 day';
  }

  if (input.projectionDays && input.projectionDays > 365) {
    errors.projectionDays = 'Projection period cannot exceed 365 days';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
