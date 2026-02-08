/**
 * Ad configuration for Google AdSense
 * Ads are gated behind environment variables and only render on allowed routes.
 */

export const ADS_CONFIG = {
  enabled: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',

  /** Routes where ads are allowed */
  allowedRoutes: [
    '/calculators/',
    '/guides/',
    '/blog/',
    '/comparisons/',
    '/data/',
    '/news/',
    '/niches/',
  ],

  /** Routes where ads must never appear (legal/trust pages) */
  blockedRoutes: [
    '/privacy/',
    '/terms/',
    '/contact/',
    '/about/',
    '/editorial-policy/',
    '/compliance/',
  ],
} as const;

/**
 * Check if ads should render on a given pathname.
 */
export function isAdAllowedOnRoute(pathname: string): boolean {
  if (!ADS_CONFIG.enabled) return false;

  // Blocked routes take priority
  if (ADS_CONFIG.blockedRoutes.some((r) => pathname.startsWith(r))) return false;

  // Must match at least one allowed route
  return ADS_CONFIG.allowedRoutes.some((r) => pathname.startsWith(r));
}
