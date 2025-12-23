/**
 * TikTok Content Calendar ROI Calculator
 * Calculates return on investment for content planning
 */

import type {
  ContentCalendarROIInput,
  ContentCalendarROIResult,
} from '@/types/calculator';

/**
 * Calculate content calendar ROI
 */
export function calculateContentCalendarROI(
  input: ContentCalendarROIInput
): ContentCalendarROIResult {
  const { hoursSpentPlanning, hourlyRate, videosPlanned, avgPerformanceIncrease, avgRevenuePerVideo } = input;

  // Calculate planning cost
  const planningCost = hoursSpentPlanning * hourlyRate;

  // Calculate additional revenue from improved performance
  const baseRevenue = videosPlanned * avgRevenuePerVideo;
  const improvedRevenue = baseRevenue * (1 + avgPerformanceIncrease / 100);
  const additionalRevenue = improvedRevenue - baseRevenue;

  // Calculate ROI
  const roi = additionalRevenue - planningCost;
  const roiPercentage = (roi / planningCost) * 100;

  // Generate interpretation
  let interpretation = '';
  if (roiPercentage >= 200) {
    interpretation = `**Exceptional ROI!** Your content planning delivers ${roiPercentage.toFixed(0)}% ROI. Spending ${hoursSpentPlanning} hours ($${planningCost.toLocaleString()}) to plan ${videosPlanned} videos generates $${additionalRevenue.toLocaleString()} in additional revenue through ${avgPerformanceIncrease}% performance improvement. Net profit: $${roi.toLocaleString()}. Strategic planning is one of your highest-leverage activities.`;
  } else if (roiPercentage >= 100) {
    interpretation = `**Strong ROI!** Content planning generates ${roiPercentage.toFixed(0)}% return. Your ${hoursSpentPlanning} hours of planning ($${planningCost.toLocaleString()}) yields $${additionalRevenue.toLocaleString()} in additional revenue across ${videosPlanned} videos. Net gain: $${roi.toLocaleString()}. This doubles your investment and proves the value of strategic content planning.`;
  } else if (roiPercentage >= 0) {
    interpretation = `**Positive ROI.** Your content calendar shows ${roiPercentage.toFixed(0)}% ROI. The ${hoursSpentPlanning} hours spent planning ($${planningCost.toLocaleString()}) generates $${additionalRevenue.toLocaleString()} additional revenue (${avgPerformanceIncrease}% lift across ${videosPlanned} videos). While profitable, consider streamlining your planning process or increasing the performance boost through better strategy execution.`;
  } else {
    interpretation = `**Negative ROI.** Current planning approach loses $${Math.abs(roi).toLocaleString()} (${roiPercentage.toFixed(0)}% ROI). You spend ${hoursSpentPlanning} hours ($${planningCost.toLocaleString()}) but only gain $${additionalRevenue.toLocaleString()} in performance. Solutions: reduce planning time, improve planning effectiveness, or increase average revenue per video by focusing on better monetization strategies.`;
  }

  return {
    planningCost: Math.round(planningCost * 100) / 100,
    additionalRevenue: Math.round(additionalRevenue * 100) / 100,
    roi: Math.round(roi * 100) / 100,
    roiPercentage: Math.round(roiPercentage * 100) / 100,
    interpretation,
    value: roiPercentage,
  };
}

/**
 * Validate content calendar ROI input
 */
export function validateContentCalendarROIInput(input: Partial<ContentCalendarROIInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.hoursSpentPlanning || input.hoursSpentPlanning < 0) {
    errors.hoursSpentPlanning = 'Hours spent planning must be at least 0';
  }

  if (!input.hourlyRate || input.hourlyRate < 0) {
    errors.hourlyRate = 'Hourly rate must be at least $0';
  }

  if (!input.videosPlanned || input.videosPlanned < 1) {
    errors.videosPlanned = 'Videos planned must be at least 1';
  }

  if (!input.avgPerformanceIncrease || input.avgPerformanceIncrease < 0) {
    errors.avgPerformanceIncrease = 'Average performance increase must be at least 0%';
  }

  if (!input.avgRevenuePerVideo || input.avgRevenuePerVideo < 0) {
    errors.avgRevenuePerVideo = 'Average revenue per video must be at least $0';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
