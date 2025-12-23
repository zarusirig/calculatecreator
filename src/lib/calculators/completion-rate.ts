/**
 * TikTok Completion Rate Calculator
 * Calculates video completion rate and provides optimization tips
 */

import type {
  CompletionRateInput,
  CompletionRateResult,
} from '@/types/calculator';

/**
 * Calculate completion rate
 */
export function calculateCompletionRate(
  input: CompletionRateInput
): CompletionRateResult {
  const { videoDuration, avgWatchTime } = input;

  // Calculate completion rate
  const completionRate = (avgWatchTime / videoDuration) * 100;

  // Determine rating
  let rating: 'excellent' | 'good' | 'average' | 'below-average';
  if (completionRate >= 80) rating = 'excellent';
  else if (completionRate >= 60) rating = 'good';
  else if (completionRate >= 40) rating = 'average';
  else rating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  const secondsWatched = avgWatchTime;
  const secondsRemaining = videoDuration - avgWatchTime;

  if (rating === 'excellent') {
    interpretation = `**Outstanding completion rate!** ${completionRate.toFixed(1)}% of your video is being watched on average. Viewers watch ${secondsWatched}s of your ${videoDuration}s videos. This exceptional retention significantly boosts your algorithmic reach and indicates highly engaging content.`;
  } else if (rating === 'good') {
    interpretation = `**Strong completion rate!** At ${completionRate.toFixed(1)}%, viewers watch ${secondsWatched}s of ${videoDuration}s. This is above average and helps TikTok recommend your content to more users. Consider adding a strong CTA in the final ${secondsRemaining}s to retain the remaining viewers.`;
  } else if (rating === 'average') {
    interpretation = `**Moderate completion rate.** Your ${completionRate.toFixed(1)}% means viewers drop off after ${secondsWatched}s of ${videoDuration}s. To improve, try stronger hooks, faster pacing, pattern interrupts, and reducing video length. The algorithm rewards completion rates above 60%.`;
  } else {
    interpretation = `**Low completion rate.** At ${completionRate.toFixed(1)}%, viewers leave after just ${secondsWatched}s of ${videoDuration}s. This significantly limits your reach. Solutions: Cut to ${Math.round(secondsWatched * 1.2)}s or less, improve your first 3 seconds, add text overlays, use trending sounds, and increase pacing.`;
  }

  return {
    completionRate: Math.round(completionRate * 100) / 100,
    rating,
    interpretation,
    value: completionRate,
  };
}

/**
 * Validate completion rate input
 */
export function validateCompletionRateInput(input: Partial<CompletionRateInput>): {
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

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
