/**
 * Formatting Utilities
 * Helper functions for formatting numbers, currency, percentages, etc.
 */

/**
 * Format a number as currency.
 *
 * @param amount - The numeric amount to format.
 * @param currency - ISO 4217 currency code (default "USD").
 * @param locale - BCP 47 locale tag (default "en-US").
 * @param decimals - Optional fixed fraction digits. When omitted, the
 *   locale/currency default is used (e.g. 2 for USD), preserving prior behavior.
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US',
  decimals?: number
): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
  };
  if (decimals !== undefined) {
    options.minimumFractionDigits = decimals;
    options.maximumFractionDigits = decimals;
  }
  return new Intl.NumberFormat(locale, options).format(amount);
}

/**
 * Format a number as a percentage
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format a number as a percentage (alias of {@link formatPercentage}).
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return formatPercentage(value, decimals);
}

/**
 * Format a large number with commas
 */
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format a number in compact form (1.2K, 1.5M, etc.)
 */
export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);
}

/**
 * Format a number in compact form (alias of {@link formatCompactNumber}).
 */
export function formatCompact(value: number): string {
  return formatCompactNumber(value);
}

/**
 * Format a number range
 */
export function formatRange(
  min: number,
  max: number,
  type: 'currency' | 'number' | 'percentage' = 'currency'
): string {
  switch (type) {
    case 'currency':
      return `${formatCurrency(min, 'USD', 'en-US', 0)}–${formatCurrency(max, 'USD', 'en-US', 0)}`;
    case 'percentage':
      return `${formatPercentage(min)}–${formatPercentage(max)}`;
    case 'number':
    default:
      return `${formatNumber(min)}–${formatNumber(max)}`;
  }
}

/**
 * Truncate text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Convert slug to title case
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Convert title to slug
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Format a date
 */
export function formatDate(date: Date | string, format: 'short' | 'long' = 'long'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (format === 'short') {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(dateObj);
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Get relative time (e.g., "2 days ago")
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}
