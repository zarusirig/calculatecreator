/**
 * TikTok Coins Calculator
 * Converts TikTok coins to USD and diamonds
 */

import type { CoinsInput, CoinsResult } from '@/types/calculator';
import { COINS } from '@/lib/constants/calculator-constants';

/**
 * Calculate coin conversion
 */
export function calculateCoins(input: CoinsInput): CoinsResult {
  const { coins } = input;

  // Convert to USD
  const usdValue = coins * COINS.usdPerCoin;

  // Convert to diamonds
  const diamonds = coins * COINS.diamondPerCoin;

  // Generate interpretation
  let interpretation = '';
  if (coins >= 10000) {
    interpretation = `${coins.toLocaleString()} TikTok coins equals approximately **$${usdValue.toLocaleString()}** USD and **${Math.round(diamonds).toLocaleString()} diamonds**. This is a significant amount that can be sent as gifts to support your favorite creators during LIVE streams.`;
  } else if (coins >= 1000) {
    interpretation = `${coins.toLocaleString()} TikTok coins equals approximately **$${usdValue.toFixed(2)}** USD and **${Math.round(diamonds)} diamonds**. You can send multiple premium gifts with this amount.`;
  } else {
    interpretation = `${coins.toLocaleString()} TikTok coins equals approximately **$${usdValue.toFixed(2)}** USD and **${Math.round(diamonds)} diamonds**. This can be used to send smaller gifts during LIVE streams.`;
  }

  return {
    usdValue: Math.round(usdValue * 100) / 100,
    diamonds: Math.round(diamonds),
    interpretation,
    value: Math.round(usdValue * 100) / 100,
    additionalMetrics: {
      pricePerCoin: COINS.usdPerCoin,
      coinsPerDollar: Math.round(1 / COINS.usdPerCoin),
    },
  };
}

/**
 * Validate coins input
 */
export function validateCoinsInput(input: Partial<CoinsInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.coins || input.coins < 1) {
    errors.coins = 'Coins must be at least 1';
  }

  if (input.coins && input.coins > 10000000) {
    errors.coins = 'Coins must be less than 10 million';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Calculate USD to coins
 */
export function calculateUSDToCoins(usd: number): number {
  return Math.round(usd / COINS.usdPerCoin);
}

/**
 * Calculate diamonds to coins
 */
export function calculateDiamondsToCoins(diamonds: number): number {
  return Math.round(diamonds / COINS.diamondPerCoin);
}
