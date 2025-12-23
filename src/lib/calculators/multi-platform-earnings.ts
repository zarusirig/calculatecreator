/**
 * Multi-Platform Earnings Calculator
 * Compare earnings potential across TikTok, YouTube, and Instagram
 */

import type {
  MultiPlatformEarningsInput,
  MultiPlatformEarningsResult,
} from '@/types/calculator';

// Platform-specific RPM rates (Revenue Per Mille - per 1,000 views)
const PLATFORM_RPM = {
  tiktok: { min: 0.02, max: 0.04 }, // Creator Fund
  youtube: { min: 1.50, max: 8.00 }, // AdSense (highly variable by niche)
  instagram: { min: 0.50, max: 3.00 }, // Reels bonuses + sponsored content
};

// Platform engagement multipliers
const ENGAGEMENT_VALUE = {
  tiktok: 1.0,
  youtube: 3.5, // Higher watch time value
  instagram: 1.8,
};

/**
 * Calculate multi-platform earnings
 */
export function calculateMultiPlatformEarnings(
  input: MultiPlatformEarningsInput
): MultiPlatformEarningsResult {
  const { tiktokFollowers, youtubeSubscribers, instagramFollowers, monthlyViews } = input;

  // Calculate TikTok earnings (Creator Fund + Brand Deals)
  const tiktokViewsInK = monthlyViews.tiktok / 1000;
  const tiktokMinEarnings = tiktokViewsInK * PLATFORM_RPM.tiktok.min;
  const tiktokMaxEarnings = tiktokViewsInK * PLATFORM_RPM.tiktok.max;

  // Calculate YouTube earnings (AdSense)
  const youtubeViewsInK = monthlyViews.youtube / 1000;
  const youtubeMinEarnings = youtubeViewsInK * PLATFORM_RPM.youtube.min;
  const youtubeMaxEarnings = youtubeViewsInK * PLATFORM_RPM.youtube.max;

  // Calculate Instagram earnings (Reels + Sponsored)
  const instagramViewsInK = monthlyViews.instagram / 1000;
  const instagramMinEarnings = instagramViewsInK * PLATFORM_RPM.instagram.min;
  const instagramMaxEarnings = instagramViewsInK * PLATFORM_RPM.instagram.max;

  // Calculate totals
  const totalMinEarnings = tiktokMinEarnings + youtubeMinEarnings + instagramMinEarnings;
  const totalMaxEarnings = tiktokMaxEarnings + youtubeMaxEarnings + instagramMaxEarnings;

  // Determine best platform by average earnings
  const platforms = [
    { name: 'tiktok' as const, avg: (tiktokMinEarnings + tiktokMaxEarnings) / 2 },
    { name: 'youtube' as const, avg: (youtubeMinEarnings + youtubeMaxEarnings) / 2 },
    { name: 'instagram' as const, avg: (instagramMinEarnings + instagramMaxEarnings) / 2 },
  ];
  const bestPlatform = platforms.reduce((a, b) => a.avg > b.avg ? a : b).name;

  // Generate interpretation
  let interpretation = '';
  const platformNames = {
    tiktok: 'TikTok',
    youtube: 'YouTube',
    instagram: 'Instagram',
  };

  interpretation = `**Multi-platform earnings projection:** `;

  if (bestPlatform === 'youtube') {
    interpretation += `YouTube is your top earner at $${youtubeMinEarnings.toLocaleString()}-$${youtubeMaxEarnings.toLocaleString()}/month (${youtubeSubscribers.toLocaleString()} subscribers, ${monthlyViews.youtube.toLocaleString()} views). YouTube's higher CPM rates make it 4-10x more profitable per view than TikTok. `;
  } else if (bestPlatform === 'tiktok') {
    interpretation += `TikTok leads at $${tiktokMinEarnings.toLocaleString()}-$${tiktokMaxEarnings.toLocaleString()}/month (${tiktokFollowers.toLocaleString()} followers, ${monthlyViews.tiktok.toLocaleString()} views), likely due to your higher view count. `;
  } else {
    interpretation += `Instagram performs best at $${instagramMinEarnings.toLocaleString()}-$${instagramMaxEarnings.toLocaleString()}/month (${instagramFollowers.toLocaleString()} followers, ${monthlyViews.instagram.toLocaleString()} views). `;
  }

  interpretation += `Total across all platforms: $${totalMinEarnings.toLocaleString()}-$${totalMaxEarnings.toLocaleString()}/month. Consider focusing efforts on ${platformNames[bestPlatform]} while maintaining presence on others for diversification.`;

  return {
    tiktokEarnings: {
      min: Math.round(tiktokMinEarnings * 100) / 100,
      max: Math.round(tiktokMaxEarnings * 100) / 100,
    },
    youtubeEarnings: {
      min: Math.round(youtubeMinEarnings * 100) / 100,
      max: Math.round(youtubeMaxEarnings * 100) / 100,
    },
    instagramEarnings: {
      min: Math.round(instagramMinEarnings * 100) / 100,
      max: Math.round(instagramMaxEarnings * 100) / 100,
    },
    totalEarnings: {
      min: Math.round(totalMinEarnings * 100) / 100,
      max: Math.round(totalMaxEarnings * 100) / 100,
    },
    bestPlatform,
    interpretation,
    min: totalMinEarnings,
    max: totalMaxEarnings,
  };
}

/**
 * Validate multi-platform earnings input
 */
export function validateMultiPlatformEarningsInput(input: Partial<MultiPlatformEarningsInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.tiktokFollowers || input.tiktokFollowers < 0) {
    errors.tiktokFollowers = 'TikTok followers must be at least 0';
  }

  if (!input.youtubeSubscribers || input.youtubeSubscribers < 0) {
    errors.youtubeSubscribers = 'YouTube subscribers must be at least 0';
  }

  if (!input.instagramFollowers || input.instagramFollowers < 0) {
    errors.instagramFollowers = 'Instagram followers must be at least 0';
  }

  if (!input.monthlyViews) {
    errors.monthlyViews = 'Monthly views are required for all platforms';
  } else {
    if (input.monthlyViews.tiktok < 0) {
      errors.monthlyViews = 'TikTok monthly views must be at least 0';
    }
    if (input.monthlyViews.youtube < 0) {
      errors.monthlyViews = 'YouTube monthly views must be at least 0';
    }
    if (input.monthlyViews.instagram < 0) {
      errors.monthlyViews = 'Instagram monthly views must be at least 0';
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
