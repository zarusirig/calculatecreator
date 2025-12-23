/**
 * TikTok Sponsorship ROI Calculator
 * Calculates return on investment for sponsorship deals
 */

import type {
  SponsorshipROIInput,
  SponsorshipROIResult,
} from '@/types/calculator';

/**
 * Calculate sponsorship ROI
 */
export function calculateSponsorshipROI(
  input: SponsorshipROIInput
): SponsorshipROIResult {
  const { sponsorshipFee, productionCost, expectedReach, conversionRate, avgOrderValue } = input;

  // Calculate costs
  const totalCost = sponsorshipFee + productionCost;

  // Calculate revenue
  const expectedConversions = expectedReach * (conversionRate / 100);
  const totalRevenue = expectedConversions * avgOrderValue;

  // Calculate ROI
  const roi = totalRevenue - totalCost;
  const roiPercentage = ((roi / totalCost) * 100);

  // Calculate break-even units
  const breakEvenUnits = Math.ceil(totalCost / avgOrderValue);

  // Generate interpretation
  let interpretation = '';
  if (roiPercentage >= 200) {
    interpretation = `**Excellent ROI!** This sponsorship would generate ${roiPercentage.toFixed(0)}% ROI ($${roi.toLocaleString()} profit on $${totalCost.toLocaleString()} investment). With ${expectedConversions.toFixed(0)} expected conversions at $${avgOrderValue} each, you'd generate $${totalRevenue.toLocaleString()} in revenue. This is a highly profitable opportunity.`;
  } else if (roiPercentage >= 100) {
    interpretation = `**Strong ROI!** A ${roiPercentage.toFixed(0)}% return means $${roi.toLocaleString()} profit. You need ${breakEvenUnits.toLocaleString()} sales to break even, and expect ${expectedConversions.toFixed(0)} conversions. This sponsorship would double your investment.`;
  } else if (roiPercentage >= 0) {
    interpretation = `**Positive ROI.** With ${roiPercentage.toFixed(0)}% ROI, you'd profit $${roi.toLocaleString()}. You need ${breakEvenUnits.toLocaleString()} sales to break even from ${expectedConversions.toFixed(0)} expected conversions. This is profitable but consider negotiating for better terms.`;
  } else {
    interpretation = `**Negative ROI.** This sponsorship would lose $${Math.abs(roi).toLocaleString()} (${roiPercentage.toFixed(0)}% ROI). You need ${breakEvenUnits.toLocaleString()} sales but expect only ${expectedConversions.toFixed(0)} conversions. Negotiate a lower fee, increase reach, or pass on this opportunity.`;
  }

  return {
    totalRevenue: Math.round(totalRevenue * 100) / 100,
    totalCost: Math.round(totalCost * 100) / 100,
    roi: Math.round(roi * 100) / 100,
    roiPercentage: Math.round(roiPercentage * 100) / 100,
    breakEvenUnits,
    interpretation,
    value: roiPercentage,
  };
}

/**
 * Validate sponsorship ROI input
 */
export function validateSponsorshipROIInput(input: Partial<SponsorshipROIInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.sponsorshipFee || input.sponsorshipFee < 0) {
    errors.sponsorshipFee = 'Sponsorship fee must be at least $0';
  }

  if (!input.productionCost || input.productionCost < 0) {
    errors.productionCost = 'Production cost must be at least $0';
  }

  if (!input.expectedReach || input.expectedReach < 1) {
    errors.expectedReach = 'Expected reach must be at least 1';
  }

  if (!input.conversionRate || input.conversionRate < 0) {
    errors.conversionRate = 'Conversion rate must be at least 0%';
  }

  if (input.conversionRate && input.conversionRate > 100) {
    errors.conversionRate = 'Conversion rate cannot exceed 100%';
  }

  if (!input.avgOrderValue || input.avgOrderValue <= 0) {
    errors.avgOrderValue = 'Average order value must be greater than $0';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
