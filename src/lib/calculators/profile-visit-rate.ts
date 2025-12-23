/**
 * TikTok Profile Visit Rate Calculator
 * Measures how effectively content drives profile visits and follows
 */

import type {
  ProfileVisitRateInput,
  ProfileVisitRateResult,
} from '@/types/calculator';

/**
 * Calculate profile visit rate
 */
export function calculateProfileVisitRate(
  input: ProfileVisitRateInput
): ProfileVisitRateResult {
  const { views, profileVisits, followers } = input;

  // Calculate visit rate (percentage of views that result in profile visits)
  const visitRate = (profileVisits / views) * 100;

  // Calculate conversion rate (visits that convert to follows)
  // Estimate: assume some portion of current followers came from these views
  const conversionRate = followers > 0 ? Math.min((followers / profileVisits) * 100, 100) : 0;

  // Determine rating
  let rating: 'excellent' | 'good' | 'average' | 'below-average';
  if (visitRate >= 10) rating = 'excellent';
  else if (visitRate >= 5) rating = 'good';
  else if (visitRate >= 2) rating = 'average';
  else rating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  if (rating === 'excellent') {
    interpretation = `**Exceptional profile performance!** Your ${visitRate.toFixed(2)}% visit rate (${profileVisits.toLocaleString()} visits from ${views.toLocaleString()} views) is outstanding. This means 1 in ${Math.round(100/visitRate)} viewers visit your profile. With ${conversionRate.toFixed(1)}% converting to follows, you're effectively building your audience. Strong CTAs, intriguing bios, and consistent content drive profile visits.`;
  } else if (rating === 'good') {
    interpretation = `**Strong profile engagement!** At ${visitRate.toFixed(2)}% (${profileVisits.toLocaleString()} visits / ${views.toLocaleString()} views), you're driving above-average profile traffic. Your ${conversionRate.toFixed(1)}% conversion rate shows ${followers.toLocaleString()} followers. To improve: add clear CTAs, tease other content, create series, and optimize your bio to convert visitors into followers.`;
  } else if (rating === 'average') {
    interpretation = `**Moderate profile visits.** Your ${visitRate.toFixed(2)}% rate (${profileVisits.toLocaleString()} / ${views.toLocaleString()}) is typical. To increase visits: add "check my profile" CTAs, create multi-part series, showcase your personality, use pattern interrupts, and make viewers curious about your other content. Current followers: ${followers.toLocaleString()}.`;
  } else {
    interpretation = `**Low profile traffic.** At ${visitRate.toFixed(2)}% (${profileVisits.toLocaleString()} from ${views.toLocaleString()} views), viewers aren't checking your profile. Solutions: stronger CTAs, create content series, add text overlays directing to profile, showcase expertise/personality, and ensure your content makes viewers want to see more.`;
  }

  return {
    visitRate: Math.round(visitRate * 100) / 100,
    conversionRate: Math.round(conversionRate * 100) / 100,
    rating,
    interpretation,
    value: visitRate,
  };
}

/**
 * Validate profile visit rate input
 */
export function validateProfileVisitRateInput(input: Partial<ProfileVisitRateInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.views || input.views < 1) {
    errors.views = 'Views must be at least 1';
  }

  if (!input.profileVisits || input.profileVisits < 0) {
    errors.profileVisits = 'Profile visits must be at least 0';
  }

  if (input.profileVisits && input.views && input.profileVisits > input.views) {
    errors.profileVisits = 'Profile visits cannot exceed views';
  }

  if (!input.followers || input.followers < 0) {
    errors.followers = 'Followers must be at least 0';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
