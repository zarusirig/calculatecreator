/**
 * TikTok Campaign ROI Calculator
 * Calculates return on investment for TikTok marketing campaigns
 */

import type { CampaignROIInput, CampaignROIResult } from '@/types/calculator';

/**
 * Calculate Campaign ROI
 */
export function calculateCampaignROI(input: CampaignROIInput): CampaignROIResult {
  const { campaignCost, revenue, additionalMetrics } = input;

  // Calculate profit
  const profit = revenue - campaignCost;

  // Calculate ROI
  const roi = profit / campaignCost;

  // Calculate ROI percentage
  const roiPercentage = roi * 100;

  // Calculate ROAS (Return on Ad Spend)
  const roas = revenue / campaignCost;

  // Determine rating
  let rating: 'excellent' | 'good' | 'break-even' | 'loss';
  let interpretation = '';

  if (roiPercentage >= 200) {
    rating = 'excellent';
    interpretation = `**Excellent campaign performance!** Your ${roiPercentage.toFixed(0)}% ROI means you're earning $${roas.toFixed(2)} for every $1 spent. With $${campaignCost.toLocaleString()} invested generating $${revenue.toLocaleString()} in revenue, you've netted $${profit.toLocaleString()} profit. This campaign is highly scalable.`;
  } else if (roiPercentage >= 100) {
    rating = 'good';
    interpretation = `**Good campaign ROI.** Your ${roiPercentage.toFixed(0)}% ROI ($${roas.toFixed(2)} ROAS) is solid. Investing $${campaignCost.toLocaleString()} to generate $${revenue.toLocaleString()} nets you $${profit.toLocaleString()} profit. This campaign is profitable and worth continuing while testing optimizations.`;
  } else if (roiPercentage >= 0) {
    rating = 'break-even';
    interpretation = `**Break-even campaign.** With ${roiPercentage.toFixed(0)}% ROI, you're barely profitable. $${campaignCost.toLocaleString()} spent for $${revenue.toLocaleString()} revenue leaves only $${profit.toLocaleString()} profit. You need to improve conversion rates, reduce costs, or increase average order value to scale profitably.`;
  } else {
    rating = 'loss';
    interpretation = `**Losing campaign.** Your ${roiPercentage.toFixed(0)}% ROI means you're losing money. With $${campaignCost.toLocaleString()} spent but only $${revenue.toLocaleString()} in revenue, you're down $${Math.abs(profit).toLocaleString()}. Pause this campaign and: (1) analyze what's not working, (2) test different targeting/creative, (3) improve your conversion funnel, or (4) reconsider if this traffic source is viable.`;
  }

  // Add additional metrics context if provided
  if (additionalMetrics) {
    const { impressions, clicks, conversions } = additionalMetrics;
    if (impressions && clicks && conversions) {
      const ctr = (clicks / impressions) * 100;
      const conversionRate = (conversions / clicks) * 100;
      const cpc = campaignCost / clicks;
      const costPerConversion = campaignCost / conversions;

      interpretation += `\n\n**Campaign Metrics:** ${impressions.toLocaleString()} impressions → ${clicks.toLocaleString()} clicks (${ctr.toFixed(2)}% CTR) → ${conversions.toLocaleString()} conversions (${conversionRate.toFixed(2)}% CR). CPC: $${cpc.toFixed(2)}, Cost per conversion: $${costPerConversion.toFixed(2)}.`;
    }
  }

  return {
    roi: Math.round(roi * 1000) / 1000,
    roiPercentage: Math.round(roiPercentage * 10) / 10,
    profit: Math.round(profit * 100) / 100,
    roas: Math.round(roas * 100) / 100,
    rating,
    value: Math.round(roiPercentage * 10) / 10,
    interpretation,
    additionalMetrics: {
      profitMargin: Math.round((profit / revenue) * 100 * 10) / 10,
      breakEvenRevenue: Math.round(campaignCost * 100) / 100,
      revenueMultiplier: Math.round(roas * 10) / 10,
    },
  };
}

/**
 * Validate Campaign ROI input
 */
export function validateCampaignROIInput(input: Partial<CampaignROIInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.campaignCost || input.campaignCost <= 0) {
    errors.campaignCost = 'Campaign cost must be greater than $0';
  }

  if (input.campaignCost && input.campaignCost > 10000000) {
    errors.campaignCost = 'Campaign cost must be less than $10 million';
  }

  if (input.revenue === undefined || input.revenue < 0) {
    errors.revenue = 'Revenue must be $0 or greater';
  }

  if (input.revenue && input.revenue > 100000000) {
    errors.revenue = 'Revenue must be less than $100 million';
  }

  // Optional validation for additional metrics
  if (input.additionalMetrics) {
    const { impressions, clicks, conversions } = input.additionalMetrics;

    if (impressions !== undefined && impressions < 0) {
      errors.impressions = 'Impressions must be 0 or greater';
    }

    if (clicks !== undefined && clicks < 0) {
      errors.clicks = 'Clicks must be 0 or greater';
    }

    if (clicks !== undefined && impressions !== undefined && clicks > impressions) {
      errors.clicks = 'Clicks cannot exceed impressions';
    }

    if (conversions !== undefined && conversions < 0) {
      errors.conversions = 'Conversions must be 0 or greater';
    }

    if (conversions !== undefined && clicks !== undefined && conversions > clicks) {
      errors.conversions = 'Conversions cannot exceed clicks';
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
