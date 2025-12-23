/**
 * TikTok Viral Potential Calculator
 * Predicts viral likelihood based on key engagement metrics
 */

import type {
  ViralPotentialInput,
  ViralPotentialResult,
} from '@/types/calculator';

/**
 * Calculate viral potential score
 */
export function calculateViralPotential(
  input: ViralPotentialInput
): ViralPotentialResult {
  const { followers, engagementRate, shareRate, saveRate, completionRate } = input;

  // Weight factors for viral potential
  const weights = {
    engagement: 0.25,
    share: 0.30,
    save: 0.20,
    completion: 0.25,
  };

  // Normalize scores (0-100 scale)
  const engagementScore = Math.min((engagementRate / 15) * 100, 100);
  const shareScore = Math.min((shareRate / 5) * 100, 100);
  const saveScore = Math.min((saveRate / 5) * 100, 100);
  const completionScore = Math.min((completionRate / 80) * 100, 100);

  // Calculate weighted viral score
  const viralScore = Math.round(
    engagementScore * weights.engagement +
    shareScore * weights.share +
    saveScore * weights.save +
    completionScore * weights.completion
  );

  // Determine viral chance
  let viralChance: 'very-high' | 'high' | 'medium' | 'low';
  if (viralScore >= 80) viralChance = 'very-high';
  else if (viralScore >= 60) viralChance = 'high';
  else if (viralScore >= 40) viralChance = 'medium';
  else viralChance = 'low';

  // Create factor breakdown
  const factors = [
    { label: 'Engagement Rate', score: Math.round(engagementScore) },
    { label: 'Share Rate', score: Math.round(shareScore) },
    { label: 'Save Rate', score: Math.round(saveScore) },
    { label: 'Completion Rate', score: Math.round(completionScore) },
  ];

  // Generate interpretation
  let interpretation = '';
  const topFactor = factors.reduce((a, b) => a.score > b.score ? a : b);
  const weakFactor = factors.reduce((a, b) => a.score < b.score ? a : b);

  if (viralChance === 'very-high') {
    interpretation = `**Exceptional viral potential!** Your ${viralScore}/100 score indicates very high likelihood of viral content. Your ${topFactor.label.toLowerCase()} (${topFactor.score}/100) is particularly strong. With ${followers.toLocaleString()} followers and ${engagementRate}% engagement, you're positioned for breakthrough reach.`;
  } else if (viralChance === 'high') {
    interpretation = `**Strong viral potential!** At ${viralScore}/100, you have high chances of viral success. Your ${topFactor.label.toLowerCase()} (${topFactor.score}/100) is your strongest factor. To increase viral probability, focus on improving your ${weakFactor.label.toLowerCase()} (currently ${weakFactor.score}/100).`;
  } else if (viralChance === 'medium') {
    interpretation = `**Moderate viral potential.** Your ${viralScore}/100 score suggests occasional viral videos are possible. Your ${topFactor.label.toLowerCase()} (${topFactor.score}/100) is performing well, but ${weakFactor.label.toLowerCase()} (${weakFactor.score}/100) needs improvement. Focus on shares and saves to boost viral chances.`;
  } else {
    interpretation = `**Low viral potential.** A ${viralScore}/100 score indicates challenges reaching viral status. Key focus areas: boost your ${weakFactor.label.toLowerCase()} (${weakFactor.score}/100) and ${shareRate}% share rate. Create more shareable, save-worthy content with strong hooks and trending audio.`;
  }

  return {
    viralScore,
    viralChance,
    factors,
    interpretation,
    value: viralScore,
  };
}

/**
 * Validate viral potential input
 */
export function validateViralPotentialInput(input: Partial<ViralPotentialInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.followers || input.followers < 0) {
    errors.followers = 'Followers must be at least 0';
  }

  if (!input.engagementRate || input.engagementRate < 0) {
    errors.engagementRate = 'Engagement rate must be at least 0%';
  }

  if (input.engagementRate && input.engagementRate > 100) {
    errors.engagementRate = 'Engagement rate cannot exceed 100%';
  }

  if (!input.shareRate || input.shareRate < 0) {
    errors.shareRate = 'Share rate must be at least 0%';
  }

  if (input.shareRate && input.shareRate > 100) {
    errors.shareRate = 'Share rate cannot exceed 100%';
  }

  if (!input.saveRate || input.saveRate < 0) {
    errors.saveRate = 'Save rate must be at least 0%';
  }

  if (input.saveRate && input.saveRate > 100) {
    errors.saveRate = 'Save rate cannot exceed 100%';
  }

  if (!input.completionRate || input.completionRate < 0) {
    errors.completionRate = 'Completion rate must be at least 0%';
  }

  if (input.completionRate && input.completionRate > 100) {
    errors.completionRate = 'Completion rate cannot exceed 100%';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
