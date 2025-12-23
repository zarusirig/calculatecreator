/**
 * TikTok Watch Time Calculator
 * Calculates average watch time and retention metrics
 */

import type {
  WatchTimeInput,
  WatchTimeResult,
} from '@/types/calculator';

/**
 * Calculate watch time metrics
 */
export function calculateWatchTime(
  input: WatchTimeInput
): WatchTimeResult {
  const { videoDuration, avgWatchTime, views } = input;

  // Calculate retention rate
  const retentionRate = (avgWatchTime / videoDuration) * 100;

  // Calculate total watch hours
  const totalWatchMinutes = (avgWatchTime * views) / 60;
  const totalWatchHours = totalWatchMinutes / 60;

  // Determine rating based on retention rate
  let rating: 'excellent' | 'good' | 'average' | 'below-average';
  if (retentionRate >= 70) rating = 'excellent';
  else if (retentionRate >= 50) rating = 'good';
  else if (retentionRate >= 30) rating = 'average';
  else rating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  if (rating === 'excellent') {
    interpretation = `**Exceptional retention!** Your ${retentionRate.toFixed(1)}% retention rate is outstanding. Viewers watch an average of ${avgWatchTime}s of your ${videoDuration}s videos. This signals high-quality content that keeps viewers engaged. Total watch time: ${totalWatchHours.toFixed(2)} hours.`;
  } else if (rating === 'good') {
    interpretation = `**Strong retention!** At ${retentionRate.toFixed(1)}%, you're keeping viewers engaged for ${avgWatchTime}s of your ${videoDuration}s videos. This is above average and helps with algorithm ranking. Total watch time: ${totalWatchHours.toFixed(2)} hours.`;
  } else if (rating === 'average') {
    interpretation = `**Moderate retention.** Your ${retentionRate.toFixed(1)}% retention rate means viewers watch ${avgWatchTime}s of ${videoDuration}s videos. Focus on stronger hooks in the first 3 seconds to improve this metric. Total watch time: ${totalWatchHours.toFixed(2)} hours.`;
  } else {
    interpretation = `**Low retention.** At ${retentionRate.toFixed(1)}%, viewers are only watching ${avgWatchTime}s of ${videoDuration}s. Consider shorter videos, stronger hooks, and faster pacing to increase watch time. Total: ${totalWatchHours.toFixed(2)} hours.`;
  }

  return {
    retentionRate: Math.round(retentionRate * 100) / 100,
    totalWatchHours: Math.round(totalWatchHours * 100) / 100,
    rating,
    interpretation,
    value: retentionRate,
  };
}

/**
 * Validate watch time input
 */
export function validateWatchTimeInput(input: Partial<WatchTimeInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.videoDuration || input.videoDuration < 1) {
    errors.videoDuration = 'Video duration must be at least 1 second';
  }

  if (input.videoDuration && input.videoDuration > 600) {
    errors.videoDuration = 'Video duration cannot exceed 600 seconds (10 minutes)';
  }

  if (!input.avgWatchTime || input.avgWatchTime < 0) {
    errors.avgWatchTime = 'Average watch time must be at least 0 seconds';
  }

  if (input.avgWatchTime && input.videoDuration && input.avgWatchTime > input.videoDuration) {
    errors.avgWatchTime = 'Average watch time cannot exceed video duration';
  }

  if (!input.views || input.views < 1) {
    errors.views = 'Views must be at least 1';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
