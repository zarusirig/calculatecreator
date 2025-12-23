/**
 * TikTok Share-to-View Ratio Calculator
 * Measures viral potential through share rate
 */

import type {
  ShareRatioInput,
  ShareRatioResult,
} from '@/types/calculator';

/**
 * Calculate share ratio
 */
export function calculateShareRatio(
  input: ShareRatioInput
): ShareRatioResult {
  const { views, shares } = input;

  // Calculate share ratio (percentage of views that result in shares)
  const shareRatio = (shares / views) * 100;

  // Determine virality rating
  let viralityRating: 'excellent' | 'good' | 'average' | 'below-average';
  if (shareRatio >= 5) viralityRating = 'excellent';
  else if (shareRatio >= 2) viralityRating = 'good';
  else if (shareRatio >= 0.5) viralityRating = 'average';
  else viralityRating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  if (viralityRating === 'excellent') {
    interpretation = `**Exceptional viral potential!** Your ${shareRatio.toFixed(2)}% share-to-view ratio (${shares.toLocaleString()} shares from ${views.toLocaleString()} views) is outstanding. This indicates highly shareable content that resonates emotionally with viewers. Content with 5%+ share rates often goes viral. Keep analyzing what makes these videos shareable and replicate those elements.`;
  } else if (viralityRating === 'good') {
    interpretation = `**Strong viral potential!** At ${shareRatio.toFixed(2)}% (${shares.toLocaleString()} shares / ${views.toLocaleString()} views), your content is being shared at an above-average rate. This suggests good emotional resonance or practical value. To reach viral status (5%+ share rate), focus on: stronger hooks, relatable moments, surprising twists, or actionable tips.`;
  } else if (viralityRating === 'average') {
    interpretation = `**Moderate share rate.** Your ${shareRatio.toFixed(2)}% share ratio (${shares.toLocaleString()} / ${views.toLocaleString()}) is typical for most content. To increase virality, create more shareable moments: surprising reveals, emotional peaks, useful tips, or relatable humor that viewers want to share with friends.`;
  } else {
    interpretation = `**Low share rate.** At ${shareRatio.toFixed(2)}% (${shares.toLocaleString()} shares from ${views.toLocaleString()} views), your content isn't prompting shares. Focus on: emotional storytelling, practical value, controversial takes (within reason), surprising facts, or relatable content that viewers feel compelled to share.`;
  }

  return {
    shareRatio: Math.round(shareRatio * 100) / 100,
    viralityRating,
    interpretation,
    value: shareRatio,
  };
}

/**
 * Validate share ratio input
 */
export function validateShareRatioInput(input: Partial<ShareRatioInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.views || input.views < 1) {
    errors.views = 'Views must be at least 1';
  }

  if (!input.shares || input.shares < 0) {
    errors.shares = 'Shares must be at least 0';
  }

  if (input.shares && input.views && input.shares > input.views) {
    errors.shares = 'Shares cannot exceed views';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
