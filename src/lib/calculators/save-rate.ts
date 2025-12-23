/**
 * TikTok Save Rate Calculator
 * Measures content value through save/bookmark rate
 */

import type {
  SaveRateInput,
  SaveRateResult,
} from '@/types/calculator';

/**
 * Calculate save rate
 */
export function calculateSaveRate(
  input: SaveRateInput
): SaveRateResult {
  const { views, saves } = input;

  // Calculate save rate (percentage of views that result in saves)
  const saveRate = (saves / views) * 100;

  // Determine content value rating
  let contentValueRating: 'excellent' | 'good' | 'average' | 'below-average';
  if (saveRate >= 5) contentValueRating = 'excellent';
  else if (saveRate >= 2) contentValueRating = 'good';
  else if (saveRate >= 0.5) contentValueRating = 'average';
  else contentValueRating = 'below-average';

  // Generate interpretation
  let interpretation = '';
  if (contentValueRating === 'excellent') {
    interpretation = `**Exceptional content value!** Your ${saveRate.toFixed(2)}% save rate (${saves.toLocaleString()} saves from ${views.toLocaleString()} views) is outstanding. Viewers are bookmarking your content to reference later, indicating high practical value or emotional resonance. The TikTok algorithm heavily weights saves when recommending content. This is a strong signal of quality.`;
  } else if (contentValueRating === 'good') {
    interpretation = `**High content value!** At ${saveRate.toFixed(2)}% (${saves.toLocaleString()} saves / ${views.toLocaleString()} views), your content provides significant value that viewers want to revisit. Saves are one of the most valuable engagement signals for the algorithm. Content types that drive saves: tutorials, recipes, tips, inspiration, and educational content.`;
  } else if (contentValueRating === 'average') {
    interpretation = `**Moderate save rate.** Your ${saveRate.toFixed(2)}% save rate (${saves.toLocaleString()} / ${views.toLocaleString()}) is typical. To increase saves, create more reference-worthy content: how-to guides, recipes, workout routines, product recommendations, life hacks, or inspirational quotes that viewers want to return to.`;
  } else {
    interpretation = `**Low save rate.** At ${saveRate.toFixed(2)}% (${saves.toLocaleString()} saves from ${views.toLocaleString()} views), viewers aren't bookmarking your content. Increase saves by creating: actionable tutorials, valuable tips, reference lists, recipes, product reviews, or evergreen educational content that provides lasting value beyond entertainment.`;
  }

  return {
    saveRate: Math.round(saveRate * 100) / 100,
    contentValueRating,
    interpretation,
    value: saveRate,
  };
}

/**
 * Validate save rate input
 */
export function validateSaveRateInput(input: Partial<SaveRateInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.views || input.views < 1) {
    errors.views = 'Views must be at least 1';
  }

  if (!input.saves || input.saves < 0) {
    errors.saves = 'Saves must be at least 0';
  }

  if (input.saves && input.views && input.saves > input.views) {
    errors.saves = 'Saves cannot exceed views';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
