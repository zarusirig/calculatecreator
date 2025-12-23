/**
 * TikTok Milestone Tracker Calculator
 * Tracks progress toward follower milestones and estimates arrival time
 */

import type {
  MilestoneTrackerInput,
  MilestoneTrackerResult,
} from '@/types/calculator';

/**
 * Calculate milestone progress and ETA
 */
export function calculateMilestoneTracker(
  input: MilestoneTrackerInput
): MilestoneTrackerResult {
  const { currentFollowers, targetMilestone, dailyGrowthRate } = input;

  // Calculate followers needed
  const followersNeeded = targetMilestone - currentFollowers;
  const progressPercentage = (currentFollowers / targetMilestone) * 100;

  // Calculate ETA
  let daysToMilestone = 0;
  if (dailyGrowthRate > 0 && followersNeeded > 0) {
    // Using compound growth formula: target = current * (1 + rate)^days
    // Solving for days: days = log(target/current) / log(1 + rate)
    const growthMultiplier = 1 + (dailyGrowthRate / 100);
    daysToMilestone = Math.ceil(
      Math.log(targetMilestone / currentFollowers) / Math.log(growthMultiplier)
    );
  }

  // Generate milestone name
  let milestoneName = '';
  if (targetMilestone >= 1000000) {
    milestoneName = `${(targetMilestone / 1000000).toFixed(1)}M Milestone`;
  } else if (targetMilestone >= 1000) {
    milestoneName = `${(targetMilestone / 1000).toFixed(0)}K Milestone`;
  } else {
    milestoneName = `${targetMilestone} Followers`;
  }

  // Calculate estimated date
  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + daysToMilestone);

  // Generate interpretation
  let interpretation = '';
  const monthsToMilestone = daysToMilestone / 30;

  if (followersNeeded <= 0) {
    interpretation = `**Congratulations!** You've already reached ${targetMilestone.toLocaleString()} followers! Set your next milestone to continue growing. Consider celebrating this achievement with your community.`;
  } else if (daysToMilestone <= 30) {
    interpretation = `**Almost there!** You're ${progressPercentage.toFixed(1)}% toward your ${milestoneName} goal. At your current ${dailyGrowthRate}% daily growth rate, you'll reach ${targetMilestone.toLocaleString()} followers in approximately ${daysToMilestone} days (${estimatedDate.toLocaleDateString()}). Keep up your posting consistency!`;
  } else if (daysToMilestone <= 90) {
    interpretation = `**On track!** You're ${progressPercentage.toFixed(1)}% toward ${milestoneName}. With your ${dailyGrowthRate}% daily growth, you'll hit ${targetMilestone.toLocaleString()} followers in about ${monthsToMilestone.toFixed(1)} months (${estimatedDate.toLocaleDateString()}). Maintain your content quality and engagement.`;
  } else if (daysToMilestone <= 365) {
    interpretation = `**Long-term goal.** You're ${progressPercentage.toFixed(1)}% to ${milestoneName}. At ${dailyGrowthRate}% daily growth, you'll reach ${targetMilestone.toLocaleString()} in ${monthsToMilestone.toFixed(1)} months (${estimatedDate.toLocaleDateString()}). Consider breaking this into smaller milestones to track progress.`;
  } else {
    interpretation = `**Ambitious goal!** ${milestoneName} is ${(daysToMilestone / 365).toFixed(1)} years away at your current ${dailyGrowthRate}% growth rate. You're ${progressPercentage.toFixed(1)}% there. To reach ${targetMilestone.toLocaleString()} faster, focus on increasing posting frequency, improving content quality, or collaborating with other creators.`;
  }

  // Determine next milestone suggestion
  let nextMilestone = 0;
  if (followersNeeded <= 0) {
    const milestones = [1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000, 5000000];
    nextMilestone = milestones.find(m => m > currentFollowers) || currentFollowers * 2;
  }

  return {
    followersNeeded: Math.max(0, followersNeeded),
    progressPercentage: Math.min(100, progressPercentage),
    daysToMilestone,
    estimatedDate: estimatedDate.toISOString(),
    milestoneName,
    nextMilestone,
    interpretation,
    value: progressPercentage,
  };
}

/**
 * Validate milestone tracker input
 */
export function validateMilestoneTrackerInput(input: Partial<MilestoneTrackerInput>): {
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

  if (!input.targetMilestone || input.targetMilestone <= 0) {
    errors.targetMilestone = 'Target milestone must be greater than 0';
  }

  if (input.targetMilestone && input.targetMilestone > 1000000000) {
    errors.targetMilestone = 'Target milestone must be less than 1 billion';
  }

  if (input.currentFollowers && input.targetMilestone && input.targetMilestone <= input.currentFollowers) {
    errors.targetMilestone = 'Target milestone must be greater than current followers';
  }

  if (!input.dailyGrowthRate || input.dailyGrowthRate <= 0) {
    errors.dailyGrowthRate = 'Daily growth rate must be greater than 0%';
  }

  if (input.dailyGrowthRate && input.dailyGrowthRate > 100) {
    errors.dailyGrowthRate = 'Daily growth rate cannot exceed 100%';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
