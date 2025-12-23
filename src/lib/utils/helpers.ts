/**
 * Helper Utilities
 * General-purpose helper functions
 */

import type { FollowerTier, ContentNiche } from '@/types/calculator';
import { FOLLOWER_TIERS, NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generate a random number between min and max
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Check if a value is a valid number
 */
export function isValidNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Determine follower tier from follower count
 */
export function getFollowerTier(followers: number): FollowerTier {
  if (followers >= FOLLOWER_TIERS.mega.min) return 'mega';
  if (followers >= FOLLOWER_TIERS.macro.min) return 'macro';
  if (followers >= FOLLOWER_TIERS.mid.min) return 'mid';
  if (followers >= FOLLOWER_TIERS.micro.min) return 'micro';
  return 'nano';
}

/**
 * Get follower tier display name
 */
export function getFollowerTierName(tier: FollowerTier): string {
  const names: Record<FollowerTier, string> = {
    nano: 'Nano (< 10K)',
    micro: 'Micro (10K-50K)',
    mid: 'Mid-Tier (50K-500K)',
    macro: 'Macro (500K-1M)',
    mega: 'Mega (1M+)',
  };
  return names[tier];
}

/**
 * Get niche display name
 */
export function getNicheDisplayName(niche: ContentNiche): string {
  return NICHE_DISPLAY_NAMES[niche] || niche;
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle a function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Get current timestamp
 */
export function getTimestamp(): number {
  return Date.now();
}

/**
 * Sleep for a specified duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a unique ID
 */
export function generateId(prefix: string = ''): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 9);
  return prefix ? `${prefix}-${timestamp}-${randomStr}` : `${timestamp}-${randomStr}`;
}

/**
 * Safely parse JSON
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

/**
 * Create a query string from an object
 */
export function createQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
}

/**
 * Parse a query string into an object
 */
export function parseQueryString(queryString: string): Record<string, string> {
  const params = new URLSearchParams(queryString);
  const result: Record<string, string> = {};

  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}
