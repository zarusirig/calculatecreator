/**
 * TikTok Production Cost Calculator
 * Calculates cost per video and ROI metrics
 */

import type {
  ProductionCostInput,
  ProductionCostResult,
} from '@/types/calculator';

/**
 * Calculate production costs
 */
export function calculateProductionCost(
  input: ProductionCostInput
): ProductionCostResult {
  const { equipmentCost, softwareCost, timePerVideo, hourlyRate, videosPerMonth } = input;

  // Calculate monthly equipment/software costs (amortized)
  const monthlyEquipmentCost = equipmentCost / 24; // Amortized over 2 years
  const monthlySoftwareCost = softwareCost;

  // Calculate labor cost per video
  const laborCostPerVideo = (timePerVideo / 60) * hourlyRate;

  // Calculate overhead per video (equipment + software)
  const overheadPerVideo = (monthlyEquipmentCost + monthlySoftwareCost) / videosPerMonth;

  // Total cost per video
  const costPerVideo = laborCostPerVideo + overheadPerVideo;

  // Monthly and annual costs
  const monthlyCost = costPerVideo * videosPerMonth;
  const annualCost = monthlyCost * 12;

  // Calculate break-even views (assuming $0.03 RPM average)
  const avgRPM = 0.03;
  const breakEvenViews = Math.ceil((costPerVideo / avgRPM) * 1000);

  // Generate interpretation
  let interpretation = '';
  if (costPerVideo >= 100) {
    interpretation = `**High production costs.** At $${costPerVideo.toFixed(2)} per video ($${monthlyCost.toLocaleString()}/month, $${annualCost.toLocaleString()}/year), you need ${breakEvenViews.toLocaleString()} views per video to break even on creator fund alone. Consider: streamlining workflow, batch filming, using free alternatives, or focusing on monetization beyond ad revenue. Time investment: ${timePerVideo} minutes per video.`;
  } else if (costPerVideo >= 50) {
    interpretation = `**Moderate production costs.** Your $${costPerVideo.toFixed(2)} per video ($${monthlyCost.toLocaleString()}/month) requires ${breakEvenViews.toLocaleString()} views to break even. With ${videosPerMonth} videos monthly at ${timePerVideo} minutes each, you're spending ${(videosPerMonth * timePerVideo / 60).toFixed(1)} hours/month. This is sustainable if you're monetizing through brand deals or other revenue streams.`;
  } else if (costPerVideo >= 20) {
    interpretation = `**Efficient production.** At $${costPerVideo.toFixed(2)} per video ($${monthlyCost.toLocaleString()}/month), you need only ${breakEvenViews.toLocaleString()} views to break even. Your ${timePerVideo}-minute workflow producing ${videosPerMonth} videos/month is efficient. Focus on scaling content volume or increasing revenue per video to maximize ROI.`;
  } else {
    interpretation = `**Highly efficient production!** Your $${costPerVideo.toFixed(2)} cost per video ($${monthlyCost.toLocaleString()}/month, $${annualCost.toLocaleString()}/year) is excellent. You only need ${breakEvenViews.toLocaleString()} views per video to break even. With ${videosPerMonth} videos at ${timePerVideo} minutes each, you have room to scale or invest in quality improvements.`;
  }

  return {
    costPerVideo: Math.round(costPerVideo * 100) / 100,
    monthlyCost: Math.round(monthlyCost * 100) / 100,
    annualCost: Math.round(annualCost * 100) / 100,
    breakEvenViews,
    interpretation,
    value: costPerVideo,
  };
}

/**
 * Validate production cost input
 */
export function validateProductionCostInput(input: Partial<ProductionCostInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.equipmentCost || input.equipmentCost < 0) {
    errors.equipmentCost = 'Equipment cost must be at least $0';
  }

  if (!input.softwareCost || input.softwareCost < 0) {
    errors.softwareCost = 'Software cost must be at least $0';
  }

  if (!input.timePerVideo || input.timePerVideo < 1) {
    errors.timePerVideo = 'Time per video must be at least 1 minute';
  }

  if (!input.hourlyRate || input.hourlyRate < 0) {
    errors.hourlyRate = 'Hourly rate must be at least $0';
  }

  if (!input.videosPerMonth || input.videosPerMonth < 1) {
    errors.videosPerMonth = 'Videos per month must be at least 1';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
