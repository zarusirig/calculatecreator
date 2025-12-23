/**
 * TikTok Comment Rate Calculator
 * Measures engagement through comment-to-view ratio
 */

import type {
  CommentRateInput,
  CommentRateResult,
} from '@/types/calculator';

/**
 * Calculate comment rate
 */
export function calculateCommentRate(
  input: CommentRateInput
): CommentRateResult {
  const { views, comments } = input;

  // Calculate comment rate (percentage of views that result in comments)
  const commentRate = (comments / views) * 100;

  // Determine engagement rating
  let engagementRating: 'excellent' | 'good' | 'average' | 'below-average';
  if (commentRate >= 1) engagementRating = 'excellent';
  else if (commentRate >= 0.5) engagementRating = 'good';
  else if (commentRate >= 0.2) engagementRating = 'average';
  else engagementRating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  if (engagementRating === 'excellent') {
    interpretation = `**Outstanding engagement!** Your ${commentRate.toFixed(2)}% comment rate (${comments.toLocaleString()} comments from ${views.toLocaleString()} views) is exceptional. This indicates highly engaged viewers who want to participate in conversations. Comments signal strong community engagement and boost algorithmic distribution.`;
  } else if (engagementRating === 'good') {
    interpretation = `**Strong engagement!** At ${commentRate.toFixed(2)}% (${comments.toLocaleString()} comments / ${views.toLocaleString()} views), your content generates meaningful discussion. Comments indicate viewers feel compelled to share opinions, ask questions, or connect with your community. This drives algorithmic promotion and builds loyal audiences.`;
  } else if (engagementRating === 'average') {
    interpretation = `**Moderate comment rate.** Your ${commentRate.toFixed(2)}% comment rate (${comments.toLocaleString()} / ${views.toLocaleString()}) is typical. To increase comments, end with questions, share controversial (but respectful) opinions, create relatable content, use engagement hooks, or invite viewers to share their experiences.`;
  } else {
    interpretation = `**Low comment rate.** At ${commentRate.toFixed(2)}% (${comments.toLocaleString()} comments from ${views.toLocaleString()} views), viewers aren't engaging in conversation. Boost comments by: asking direct questions, sharing hot takes, creating debate-worthy content, using "comment your answer" CTAs, or building series that encourage ongoing discussion.`;
  }

  return {
    commentRate: Math.round(commentRate * 100) / 100,
    engagementRating,
    interpretation,
    value: commentRate,
  };
}

/**
 * Validate comment rate input
 */
export function validateCommentRateInput(input: Partial<CommentRateInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.views || input.views < 1) {
    errors.views = 'Views must be at least 1';
  }

  if (input.comments === undefined || input.comments < 0) {
    errors.comments = 'Comments must be at least 0';
  }

  if (input.comments && input.views && input.comments > input.views) {
    errors.comments = 'Comments cannot exceed views';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
