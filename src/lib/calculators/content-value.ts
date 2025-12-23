/**
 * TikTok Content Value Calculator
 * Estimates the total value of your content library
 */

import type {
  ContentValueInput,
  ContentValueResult,
} from '@/types/calculator';
import { BRAND_DEAL_BASE_RATES, FOLLOWER_TIERS, BRAND_DEAL_NICHE_MULTIPLIERS } from '@/lib/constants/calculator-constants';
import type { FollowerTier } from '@/types/calculator';

/**
 * Determine follower tier
 */
function getFollowerTier(followers: number): FollowerTier {
  if (followers >= FOLLOWER_TIERS.mega.min) return 'mega';
  if (followers >= FOLLOWER_TIERS.macro.min) return 'macro';
  if (followers >= FOLLOWER_TIERS.mid.min) return 'mid';
  if (followers >= FOLLOWER_TIERS.micro.min) return 'micro';
  return 'nano';
}

/**
 * Calculate content value
 */
export function calculateContentValue(
  input: ContentValueInput
): ContentValueResult {
  const { totalVideos, avgViewsPerVideo, engagementRate, niche } = input;

  // Calculate total reach
  const totalReach = totalVideos * avgViewsPerVideo;

  // Estimate followers based on views (rough approximation)
  const estimatedFollowers = avgViewsPerVideo * 0.1;
  const tier = getFollowerTier(estimatedFollowers);

  // Get base value per video
  const baseRate = (BRAND_DEAL_BASE_RATES[tier].min + BRAND_DEAL_BASE_RATES[tier].max) / 2;

  // Apply multipliers
  const nicheMultiplier = BRAND_DEAL_NICHE_MULTIPLIERS[niche] || 1.0;
  const engagementMultiplier = engagementRate >= 10 ? 1.5 : engagementRate >= 5 ? 1.2 : 1.0;

  // Calculate value per video (as licensing/sponsorship value)
  const valuePerVideo = baseRate * nicheMultiplier * engagementMultiplier * 0.3; // 30% of brand deal rate for content licensing

  // Calculate total estimated value
  const estimatedValue = valuePerVideo * totalVideos;

  // Generate interpretation
  let interpretation = '';
  if (estimatedValue >= 100000) {
    interpretation = `**Exceptional content portfolio!** Your ${totalVideos.toLocaleString()} videos have an estimated value of $${estimatedValue.toLocaleString()} ($${valuePerVideo.toFixed(2)} per video). With ${totalReach.toLocaleString()} total reach and ${engagementRate}% engagement in the ${niche} niche, your content library is a valuable asset for licensing, repurposing, and sponsorship opportunities.`;
  } else if (estimatedValue >= 10000) {
    interpretation = `**Strong content library!** Your ${totalVideos.toLocaleString()} videos are worth approximately $${estimatedValue.toLocaleString()} ($${valuePerVideo.toFixed(2)} each). This content can be monetized through brand deals, licensing, and creating compilation content. Your ${totalReach.toLocaleString()} total views demonstrate significant value.`;
  } else if (estimatedValue >= 1000) {
    interpretation = `**Growing content value.** Your ${totalVideos.toLocaleString()} videos have an estimated value of $${estimatedValue.toLocaleString()} ($${valuePerVideo.toFixed(2)} per video). Continue creating quality content to increase your library's worth. Focus on evergreen content in ${niche} to maximize long-term value.`;
  } else {
    interpretation = `**Building content portfolio.** Your ${totalVideos.toLocaleString()} videos are valued at approximately $${estimatedValue.toLocaleString()}. To increase content value, focus on: higher engagement rates (currently ${engagementRate}%), more views per video (currently ${avgViewsPerVideo.toLocaleString()}), and creating evergreen content.`;
  }

  return {
    estimatedValue: Math.round(estimatedValue * 100) / 100,
    valuePerVideo: Math.round(valuePerVideo * 100) / 100,
    totalReach,
    interpretation,
    value: estimatedValue,
  };
}

/**
 * Validate content value input
 */
export function validateContentValueInput(input: Partial<ContentValueInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.totalVideos || input.totalVideos < 1) {
    errors.totalVideos = 'Total videos must be at least 1';
  }

  if (!input.avgViewsPerVideo || input.avgViewsPerVideo < 0) {
    errors.avgViewsPerVideo = 'Average views per video must be at least 0';
  }

  if (!input.engagementRate || input.engagementRate < 0) {
    errors.engagementRate = 'Engagement rate must be at least 0%';
  }

  if (input.engagementRate && input.engagementRate > 100) {
    errors.engagementRate = 'Engagement rate cannot exceed 100%';
  }

  if (!input.niche) {
    errors.niche = 'Please select a content niche';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
