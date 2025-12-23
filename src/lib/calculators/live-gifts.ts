/**
 * TikTok LIVE Gifts Calculator
 * Calculates estimated earnings from TikTok LIVE streaming
 */

import type { LiveGiftsInput, LiveGiftsResult } from '@/types/calculator';
import { LIVE_GIFTS, MONTHLY_MULTIPLIER } from '@/lib/constants/calculator-constants';

/**
 * Calculate LIVE Gifts earnings
 */
export function calculateLiveGifts(input: LiveGiftsInput): LiveGiftsResult {
  const { avgViewers, avgStreamDuration, giftsPerViewer } = input;

  // Calculate total viewers per stream (accounting for turnover)
  // Assume 2x viewer turnover during stream
  const totalViewers = avgViewers * 2;

  // Calculate total gifts per stream
  const totalGifts = totalViewers * giftsPerViewer;

  // Average gift value in coins (ranges from 5-5000, using 50 as average)
  const avgGiftValueCoins = 50;
  const totalCoins = totalGifts * avgGiftValueCoins;

  // Convert coins to diamonds (2 coins = 1 diamond)
  const diamondsEarned = totalCoins / LIVE_GIFTS.coinsPerDiamond;

  // Convert diamonds to USD
  const usdEarnings = diamondsEarned * LIVE_GIFTS.diamondToUSD;

  // Monthly potential (assuming 8 streams per month)
  const streamsPerMonth = 8;
  const monthlyPotential = usdEarnings * streamsPerMonth;

  // Generate interpretation
  let interpretation = '';
  if (monthlyPotential >= 1000) {
    interpretation = `**Strong LIVE earning potential!** With ${avgViewers} average viewers and ${giftsPerViewer} gifts per viewer, you could earn around $${Math.round(monthlyPotential).toLocaleString()} per month from LIVE streaming. Consider increasing stream frequency to ${streamsPerMonth * 2} times per month to double your earnings.`;
  } else if (monthlyPotential >= 200) {
    interpretation = `**Decent LIVE earnings.** Your estimated $${Math.round(monthlyPotential).toLocaleString()}/month from LIVE can supplement other income streams. Focus on growing your average viewer count and encouraging more gifting through interactive content.`;
  } else {
    interpretation = `**LIVE earnings are modest.** At current levels ($${Math.round(monthlyPotential).toLocaleString()}/month), LIVE gifts are best viewed as supplementary income. Grow your audience and experiment with different stream formats to increase gifting.`;
  }

  return {
    diamondsEarned: Math.round(diamondsEarned),
    usdEarnings: Math.round(usdEarnings * 100) / 100,
    monthlyPotential: Math.round(monthlyPotential * 100) / 100,
    interpretation,
    value: Math.round(usdEarnings * 100) / 100,
    additionalMetrics: {
      totalViewersPerStream: totalViewers,
      totalCoinsPerStream: Math.round(totalCoins),
      annualPotential: Math.round(monthlyPotential * MONTHLY_MULTIPLIER),
    },
  };
}

/**
 * Validate LIVE Gifts input
 */
export function validateLiveGiftsInput(input: Partial<LiveGiftsInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.avgViewers || input.avgViewers < 1) {
    errors.avgViewers = 'Average viewers must be at least 1';
  }

  if (input.avgViewers && input.avgViewers > 1000000) {
    errors.avgViewers = 'Average viewers must be less than 1 million';
  }

  if (!input.avgStreamDuration || input.avgStreamDuration < 1) {
    errors.avgStreamDuration = 'Stream duration must be at least 1 minute';
  }

  if (input.avgStreamDuration && input.avgStreamDuration > 480) {
    errors.avgStreamDuration = 'Stream duration must be less than 8 hours (480 minutes)';
  }

  if (input.giftsPerViewer === undefined || input.giftsPerViewer < 0) {
    errors.giftsPerViewer = 'Gifts per viewer must be 0 or greater';
  }

  if (input.giftsPerViewer && input.giftsPerViewer > 100) {
    errors.giftsPerViewer = 'Gifts per viewer must be less than 100';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
