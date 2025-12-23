/**
 * TikTok Best Posting Time Calculator
 * Recommends optimal posting times based on audience and content type
 */

import type {
  PostingTimeInput,
  PostingTimeResult,
} from '@/types/calculator';

// Optimal posting times by audience region (in EST, adjust for timezone)
const REGIONAL_TIMES = {
  'north-america': ['9:00 AM', '12:00 PM', '5:00 PM', '9:00 PM'],
  'europe': ['3:00 AM', '7:00 AM', '11:00 AM', '3:00 PM'],
  'asia': ['8:00 PM', '11:00 PM', '2:00 AM', '5:00 AM'],
  'global': ['9:00 AM', '12:00 PM', '3:00 PM', '9:00 PM'],
};

// Content type modifiers
const CONTENT_TYPE_BEST_TIMES = {
  entertainment: ['7:00 PM', '9:00 PM', '10:00 PM'],
  educational: ['9:00 AM', '12:00 PM', '7:00 PM'],
  promotional: ['11:00 AM', '1:00 PM', '6:00 PM'],
  inspirational: ['7:00 AM', '12:00 PM', '9:00 PM'],
};

/**
 * Calculate best posting times
 */
export function calculatePostingTime(
  input: PostingTimeInput
): PostingTimeResult {
  const { timezone, audienceRegion, contentType } = input;

  // Get regional optimal times
  const regionalTimes = REGIONAL_TIMES[audienceRegion as keyof typeof REGIONAL_TIMES] || REGIONAL_TIMES['global'];

  // Get content-specific times
  const contentTimes = CONTENT_TYPE_BEST_TIMES[contentType];

  // Combine and score times
  const timeScores = new Map<string, { score: number; reasons: string[] }>();

  // Score regional times
  regionalTimes.forEach(time => {
    if (!timeScores.has(time)) {
      timeScores.set(time, { score: 0, reasons: [] });
    }
    const current = timeScores.get(time)!;
    current.score += 50;
    current.reasons.push('High audience activity');
  });

  // Score content-specific times
  contentTimes.forEach(time => {
    if (!timeScores.has(time)) {
      timeScores.set(time, { score: 0, reasons: [] });
    }
    const current = timeScores.get(time)!;
    current.score += 50;
    current.reasons.push(`Optimal for ${contentType} content`);
  });

  // Convert to array and sort by score
  const sortedTimes = Array.from(timeScores.entries())
    .map(([time, data]) => ({
      time,
      score: data.score,
      reason: data.reasons.join(', '),
    }))
    .sort((a, b) => b.score - a.score);

  // Get top 5 optimal times
  const optimalTimes = sortedTimes.slice(0, 5);

  // Define worst times (late night/early morning when audience is sleeping)
  const worstTimes = [
    { time: '2:00 AM', reason: 'Low audience activity (sleeping)' },
    { time: '3:00 AM', reason: 'Minimal engagement' },
    { time: '4:00 AM', reason: 'Lowest daily traffic' },
  ];

  // Generate interpretation
  const topTime = optimalTimes[0];
  const interpretation = `**Best posting times for ${audienceRegion} audience (${timezone}):** Your top posting time is **${topTime.time}** (score: ${topTime.score}/100) - ${topTime.reason}. For ${contentType} content targeting ${audienceRegion}, posting during peak activity hours maximizes initial engagement, which signals to TikTok's algorithm to push your content further. Avoid posting between 2-5 AM when audience activity is lowest. Test posting at these recommended times and track performance to find your optimal schedule.`;

  return {
    optimalTimes,
    worstTimes,
    interpretation,
    value: topTime.score,
  };
}

/**
 * Validate posting time input
 */
export function validatePostingTimeInput(input: Partial<PostingTimeInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.timezone) {
    errors.timezone = 'Please enter your timezone';
  }

  if (!input.audienceRegion) {
    errors.audienceRegion = 'Please select your primary audience region';
  }

  if (!input.contentType) {
    errors.contentType = 'Please select your content type';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
