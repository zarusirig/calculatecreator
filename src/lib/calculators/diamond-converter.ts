/**
 * TikTok Diamond Converter Calculator
 * Converts diamonds to various currencies and calculates payout rates
 */

import type { DiamondConverterInput, DiamondConverterResult } from '@/types/calculator';
import { COINS, LIVE_GIFTS } from '@/lib/constants/calculator-constants';

const DIAMOND_TO_USD = LIVE_GIFTS.diamondToUSD;

/**
 * Calculate diamond conversion
 */
export function calculateDiamondConverter(input: DiamondConverterInput): DiamondConverterResult {
  const { diamonds, currency = 'USD' } = input;

  // Convert diamonds to USD first
  const usdValue = diamonds * DIAMOND_TO_USD;

  // Convert to selected currency
  let convertedValue = usdValue;
  let currencySymbol = '$';

  switch (currency) {
    case 'EUR':
      convertedValue = usdValue * 0.92; // Approximate EUR rate
      currencySymbol = '€';
      break;
    case 'GBP':
      convertedValue = usdValue * 0.79; // Approximate GBP rate
      currencySymbol = '£';
      break;
    case 'CAD':
      convertedValue = usdValue * 1.35; // Approximate CAD rate
      currencySymbol = 'C$';
      break;
    case 'AUD':
      convertedValue = usdValue * 1.52; // Approximate AUD rate
      currencySymbol = 'A$';
      break;
    default:
      convertedValue = usdValue;
      currencySymbol = '$';
  }

  // Calculate equivalent coins
  const equivalentCoins = Math.round(diamonds / COINS.diamondPerCoin);

  // Generate interpretation
  let interpretation = '';
  if (diamonds >= 10000) {
    interpretation = `${diamonds.toLocaleString()} TikTok diamonds are worth approximately **${currencySymbol}${convertedValue.toLocaleString()} ${currency}**. This represents a substantial amount that creators can earn through LIVE gifts.`;
  } else if (diamonds >= 1000) {
    interpretation = `${diamonds.toLocaleString()} TikTok diamonds equal approximately **${currencySymbol}${convertedValue.toFixed(2)} ${currency}**. This is a good amount for creator payouts from LIVE streaming.`;
  } else {
    interpretation = `${diamonds.toLocaleString()} TikTok diamonds are worth approximately **${currencySymbol}${convertedValue.toFixed(2)} ${currency}**. These can be earned through various LIVE gifts.`;
  }

  return {
    usdValue: Math.round(usdValue * 100) / 100,
    convertedValue: Math.round(convertedValue * 100) / 100,
    currency,
    currencySymbol,
    equivalentCoins,
    interpretation,
    value: Math.round(convertedValue * 100) / 100,
    additionalMetrics: {
      payoutRate: DIAMOND_TO_USD,
      diamondsPerDollar: Math.round(1 / DIAMOND_TO_USD),
      coinsEquivalent: equivalentCoins,
    },
  };
}

/**
 * Validate diamond converter input
 */
export function validateDiamondConverterInput(input: Partial<DiamondConverterInput>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!input.diamonds || input.diamonds < 1) {
    errors.diamonds = 'Diamonds must be at least 1';
  }

  if (input.diamonds && input.diamonds > 10000000) {
    errors.diamonds = 'Diamonds must be less than 10 million';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Calculate USD to diamonds
 */
export function calculateUSDToDiamonds(usd: number): number {
  return Math.round(usd / DIAMOND_TO_USD);
}

/**
 * Calculate coins to diamonds
 */
export function calculateCoinsToDiamonds(coins: number): number {
  return Math.round(coins * COINS.diamondPerCoin);
}
