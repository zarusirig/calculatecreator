/**
 * Single source of truth for all brand constants.
 * Import SITE_CONFIG and siteUrl() instead of hardcoding domain or brand name.
 */

export const SITE_CONFIG = {
  name: 'TT Calculator',
  shortName: 'TT',
  domain: 'tiktokcalculator.net',
  url: 'https://tiktokcalculator.net',
  description:
    'Free TikTok creator calculators and benchmarks. Transparent earnings estimates, engagement analytics, and growth tools with expert-reviewed methodology.',
  logo: '/images/tt-calculator-logo.png',
  logoUrl: 'https://tiktokcalculator.net/images/tt-calculator-logo.png',
  ogImage: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp',
  teamName: 'TT Calculator Team',
  org: {
    '@type': 'Organization' as const,
    name: 'TT Calculator',
    url: 'https://tiktokcalculator.net/',
    logo: {
      '@type': 'ImageObject' as const,
      url: 'https://tiktokcalculator.net/images/tt-calculator-logo.png',
    },
  },
} as const;

/** Build a canonical URL with trailing slash. */
export function siteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${clean.endsWith('/') ? clean : `${clean}/`}`;
}
