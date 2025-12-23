/**
 * TikTok Ad Revenue Calculator
 * Calculates potential ad revenue from TikTok monetization programs
 */

import type {
  AdRevenueInput,
  AdRevenueResult,
} from '@/types/calculator';

/**
 * Calculate ad revenue
 */
export function calculateAdRevenue(
  input: AdRevenueInput
): AdRevenueResult {
  const { monthlyViews, cpm, adFrequency } = input;

  // Calculate views in thousands
  const viewsInThousands = monthlyViews / 1000;

  // Calculate monthly revenue based on CPM and ad frequency
  // Ad frequency: 1 = one ad per video, 2 = two ads per video, etc.
  const monthlyRevenue = viewsInThousands * (cpm / 1000) * adFrequency;

  // Calculate annual revenue
  const annualRevenue = monthlyRevenue * 12;

  // Estimate average videos per month (assuming 10k views per video)
  const estimatedVideos = Math.max(monthlyViews / 10000, 1);
  const revenuePerVideo = monthlyRevenue / estimatedVideos;

  // Generate interpretation
  let interpretation = '';
  if (monthlyRevenue >= 5000) {
    interpretation = `**Strong ad revenue potential!** With ${monthlyViews.toLocaleString()} monthly views at $${cpm.toFixed(2)} CPM (${adFrequency} ad${adFrequency > 1 ? 's' : ''} per video), you could earn $${monthlyRevenue.toLocaleString()}/month ($${annualRevenue.toLocaleString()}/year). That's approximately $${revenuePerVideo.toFixed(2)} per video. This CPM rate indicates high-value content with strong advertiser demand.`;
  } else if (monthlyRevenue >= 1000) {
    interpretation = `**Solid ad revenue!** Your ${monthlyViews.toLocaleString()} monthly views generate approximately $${monthlyRevenue.toLocaleString()}/month ($${annualRevenue.toLocaleString()}/year) at $${cpm.toFixed(2)} CPM with ${adFrequency} ad${adFrequency > 1 ? 's' : ''} per video. Average of $${revenuePerVideo.toFixed(2)} per video. To scale: increase view count, improve CPM through niche content, or diversify monetization streams.`;
  } else if (monthlyRevenue >= 100) {
    interpretation = `**Growing ad revenue.** With ${monthlyViews.toLocaleString()} views/month, your estimated earnings are $${monthlyRevenue.toLocaleString()}/month ($${annualRevenue.toLocaleString()}/year) at $${cpm.toFixed(2)} CPM. That's about $${revenuePerVideo.toFixed(2)} per video. To increase: grow views, target higher-CPM niches (finance, tech, education), or add ${adFrequency < 3 ? 'more ' : ''}mid-roll ads.`;
  } else {
    interpretation = `**Early-stage ad revenue.** Your ${monthlyViews.toLocaleString()} monthly views earn approximately $${monthlyRevenue.toLocaleString()}/month ($${annualRevenue.toLocaleString()}/year). At $${cpm.toFixed(2)} CPM and $${revenuePerVideo.toFixed(2)} per video, focus on: growing view count, improving watch time for better CPMs, and exploring alternative monetization (brand deals, affiliates, products) to supplement ad revenue.`;
  }

  return {
    monthlyRevenue: Math.round(monthlyRevenue * 100) / 100,
    annualRevenue: Math.round(annualRevenue * 100) / 100,
    revenuePerVideo: Math.round(revenuePerVideo * 100) / 100,
    interpretation,
    value: monthlyRevenue,
  };
}

/**
 * Validate ad revenue input
 */
export function validateAdRevenueInput(input: Partial<AdRevenueInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.monthlyViews || input.monthlyViews < 0) {
    errors.monthlyViews = 'Monthly views must be at least 0';
  }

  if (!input.cpm || input.cpm <= 0) {
    errors.cpm = 'CPM must be greater than $0';
  }

  if (input.cpm && input.cpm > 100) {
    errors.cpm = 'CPM seems unusually high. Please verify the value.';
  }

  if (!input.adFrequency || input.adFrequency < 1) {
    errors.adFrequency = 'Ad frequency must be at least 1';
  }

  if (input.adFrequency && input.adFrequency > 5) {
    errors.adFrequency = 'Ad frequency cannot exceed 5 (user experience limits)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
