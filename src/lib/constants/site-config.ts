/**
 * Single source of truth for all brand constants.
 * Import SITE_CONFIG and siteUrl() instead of hardcoding domain or brand name.
 */

export const SITE_CONFIG = {
  name: 'TT Calculator',
  shortName: 'TT',
  domain: 'ttcalculator.net',
  url: 'https://ttcalculator.net',
  description:
    'Free TikTok creator calculators and benchmarks. Transparent earnings estimates, engagement analytics, and growth tools with expert-reviewed methodology.',
  logo: '/images/tt-calculator-logo.png',
  logoUrl: 'https://ttcalculator.net/images/tt-calculator-logo.png',
  ogImage: 'https://ttcalculator.net/home/hero-dashboard-1600.webp',
  teamName: 'TT Calculator Team',
  org: {
    '@type': 'Organization' as const,
    name: 'TT Calculator',
    url: 'https://ttcalculator.net/',
    logo: {
      '@type': 'ImageObject' as const,
      url: 'https://ttcalculator.net/images/tt-calculator-logo.png',
    },
  },
} as const;

/** Build a canonical URL with trailing slash. */
export function siteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${clean.endsWith('/') ? clean : `${clean}/`}`;
}
