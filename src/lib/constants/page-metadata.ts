/**
 * Centralized E-E-A-T metadata for all pages
 * Maps page slugs to author IDs, review information, and citations
 */

import type { Citation } from '@/components/eeat/Citations';

export interface ChangelogEntry {
  date: string;
  summary: string;
}

export interface PageMetadata {
  author: string; // Author ID from authors.ts
  reviewedBy?: string; // Reviewer ID from authors.ts
  reviewDate?: string;
  reviewType?: 'technical' | 'editorial' | 'financial' | 'expert';
  citations?: Citation[];
  disclaimers?: Array<'financial' | 'general' | 'affiliate' | 'tax' | 'educational'>;
  verificationDate?: string;
  verificationMethod?: string;
  changelog?: ChangelogEntry[];
}

/**
 * Default citations used across multiple pages
 */
export const COMMON_CITATIONS: Record<string, Citation> = {
  'tiktok-official': {
    id: 'tiktok-official',
    title: 'TikTok Creator Fund - Official Documentation',
    source: 'TikTok for Business',
    url: 'https://www.tiktok.com/creators/creator-portal/en-us/getting-paid-to-create/creator-fund/',
    type: 'official',
    accessDate: '2025-11-13',
  },
  'creator-survey': {
    id: 'creator-survey',
    title: 'TikTok Creator Earnings Survey 2024-2025',
    source: 'TikTok Calculator Research Team',
    type: 'research',
    publicationDate: '2025-01',
    accessDate: '2025-11-13',
  },
  'influencer-marketing-hub': {
    id: 'influencer-marketing-hub',
    title: 'TikTok Money Calculator & Influencer Earnings',
    source: 'Influencer Marketing Hub',
    url: 'https://influencermarketinghub.com/tiktok-money-calculator/',
    type: 'industry',
    publicationDate: '2024',
    accessDate: '2025-11-13',
  },
  'social-blade': {
    id: 'social-blade',
    title: 'TikTok Statistics & Analytics',
    source: 'Social Blade',
    url: 'https://socialblade.com/tiktok/',
    type: 'data',
    accessDate: '2025-11-13',
  },
};

/**
 * Page metadata for calculators, guides, and other content
 */
export const PAGE_METADATA: Record<string, PageMetadata> = {
  // ========================================
  // CALCULATOR PAGES
  // ========================================
  'tiktok-creator-fund': {
    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      COMMON_CITATIONS['tiktok-official'],
      COMMON_CITATIONS['creator-survey'],
      COMMON_CITATIONS['influencer-marketing-hub'],
      {
        id: 'creator-fund-analysis',
        title: 'Analysis of Creator Fund RPM Rates Across 1,000+ Creators',
        source: 'TikTok Calculator Data Team',
        type: 'research',
        publicationDate: '2025-01',
      },
    ],
    disclaimers: ['financial', 'general'],
    verificationDate: '2026-02-15',
    verificationMethod: 'RPM rates cross-checked against TikTok Creator Portal and creator-reported data',
    changelog: [
      { date: '2026-02-15', summary: 'Verified RPM rates still current; updated benchmarks for 2026' },
      { date: '2025-11-13', summary: 'Expert review by Sarah Johnson; added niche multiplier data' },
      { date: '2025-01-15', summary: 'Updated RPM ranges based on Q4 2024 creator survey data' },
    ],
  },
  'engagement-rate': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-11-13',
    reviewType: 'technical',
    citations: [
      {
        id: 'engagement-benchmarks',
        title: 'TikTok Engagement Rate Benchmarks by Niche',
        source: 'Social Media Analytics Report 2025',
        type: 'research',
        publicationDate: '2025-01',
      },
    ],
    disclaimers: ['educational'],
    verificationDate: '2026-02-15',
    verificationMethod: 'Benchmarks validated against 500K+ account sample from analytics platforms',
    changelog: [
      { date: '2026-02-15', summary: 'Updated 2026 engagement benchmarks by niche and follower tier' },
      { date: '2025-11-13', summary: 'Technical review by Michael Chen; verified formula accuracy' },
    ],
  },
  'brand-deal-rate': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      COMMON_CITATIONS['influencer-marketing-hub'],
      {
        id: 'brand-deal-survey',
        title: 'Brand Deal Rate Survey: 500+ TikTok Creators',
        source: 'TikTok Calculator Research',
        type: 'research',
        publicationDate: '2025-01',
      },
    ],
    disclaimers: ['financial', 'general'],
    verificationDate: '2026-02-15',
    verificationMethod: 'Rate ranges verified against creator-reported sponsorship data and agency benchmarks',
    changelog: [
      { date: '2026-02-15', summary: 'Refreshed rate multipliers and niche premiums for 2026 market' },
      { date: '2025-11-13', summary: 'Expert review; updated engagement premium tiers' },
    ],
  },
  'live-gifts': {
    author: 'jessica-rodriguez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-live-official',
        title: 'TikTok LIVE Gifts - Creator Portal',
        source: 'TikTok Official Documentation',
        url: 'https://www.tiktok.com/creators/creator-portal/en-us/getting-paid-to-create/live-gifting/',
        type: 'official',
        accessDate: '2025-11-13',
      },
    ],
    disclaimers: ['financial'],
    verificationDate: '2026-02-10',
    verificationMethod: 'Gift values and diamond conversion rates verified against TikTok LIVE gift shop',
    changelog: [
      { date: '2026-02-10', summary: 'Confirmed gift values unchanged; added new 2026 gifts' },
      { date: '2025-11-13', summary: 'Expert review of diamond-to-cash conversion pipeline' },
    ],
  },
  'tiktok-money': {
    author: 'sarah-johnson',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-11-13',
    reviewType: 'financial',
    citations: [
      COMMON_CITATIONS['creator-survey'],
      COMMON_CITATIONS['influencer-marketing-hub'],
    ],
    disclaimers: ['financial', 'tax'],
    verificationDate: '2026-02-15',
    verificationMethod: 'Earnings ranges validated against multi-stream creator income reports',
    changelog: [
      { date: '2026-02-15', summary: 'Updated all income stream estimates for 2026 rates' },
      { date: '2025-11-13', summary: 'Financial review by Emily Thompson, CPA' },
    ],
  },
  'utility-tools/tax': {
    author: 'emily-thompson',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'financial',
    citations: [
      {
        id: 'irs-self-employment',
        title: 'Self-Employment Tax Guide',
        source: 'IRS Official Documentation',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes',
        type: 'official',
        accessDate: '2025-11-13',
      },
    ],
    disclaimers: ['tax', 'financial'],
    verificationDate: '2026-01-15',
    verificationMethod: 'Tax brackets and SE tax rate verified against IRS 2025 tax year publications',
    changelog: [
      { date: '2026-01-15', summary: 'Updated tax brackets for 2025 tax year filing' },
      { date: '2025-11-13', summary: 'CPA review of self-employment tax calculations' },
    ],
  },
  'commerce-ads/shop-profit': {
    author: 'david-kim',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-shop-official',
        title: 'TikTok Shop - Seller Center',
        source: 'TikTok Official Documentation',
        url: 'https://seller.tiktok.com/',
        type: 'official',
        accessDate: '2025-11-13',
      },
    ],
    disclaimers: ['financial', 'affiliate'],
  },
  'affiliate-commission': {
    author: 'david-kim',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    disclaimers: ['financial', 'affiliate'],
  },
  'rpm': {
    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'technical',
    citations: [COMMON_CITATIONS['creator-survey']],
    disclaimers: ['financial'],
    verificationDate: '2026-02-15',
    verificationMethod: 'RPM benchmarks validated against creator-reported earnings data',
    changelog: [
      { date: '2026-02-15', summary: 'Updated RPM ranges for 2026 Creator Fund rates' },
    ],
  },
  // Additional calculators with appropriate authors
  'video-performance': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },
  'follower-growth': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'viral-potential': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },
  'campaign-roi': {
    author: 'david-kim',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-12-04',
    reviewType: 'financial',
    disclaimers: ['financial'],
  },
  'conversion-rate': {
    author: 'david-kim',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'customer-acquisition-cost': {
    author: 'david-kim',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-12-04',
    reviewType: 'financial',
    disclaimers: ['financial'],
  },
  'lifetime-value': {
    author: 'david-kim',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-12-04',
    reviewType: 'financial',
    disclaimers: ['financial'],
  },
  'watch-time': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },
  'completion-rate': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },
  'save-rate': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'share-ratio': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'profile-visit-rate': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'follower-conversion': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'hashtag-performance': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },
  'posting-time': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'diamond-converter': {
    author: 'jessica-rodriguez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-live-official',
        title: 'TikTok LIVE Gifts - Creator Portal',
        source: 'TikTok Official Documentation',
        url: 'https://www.tiktok.com/creators/creator-portal/en-us/getting-paid-to-create/live-gifting/',
        type: 'official',
        accessDate: '2025-12-04',
      },
    ],
    disclaimers: ['financial'],
  },
  'coins': {
    author: 'jessica-rodriguez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'cpm-cpv': {
    author: 'david-kim',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'technical',
    disclaimers: ['financial', 'educational'],
  },
  'ad-revenue': {
    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'sponsorship-roi': {
    author: 'sarah-johnson',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-12-04',
    reviewType: 'financial',
    disclaimers: ['financial'],
  },
  'content-value': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'break-even': {
    author: 'emily-thompson',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'financial',
    disclaimers: ['financial', 'tax'],
  },
  'production-cost': {
    author: 'sarah-johnson',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-12-04',
    reviewType: 'financial',
    disclaimers: ['financial'],
  },
  'niche-profitability': {
    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    citations: [COMMON_CITATIONS['creator-survey']],
    disclaimers: ['financial'],
  },
  'content-calendar-roi': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'multi-platform-earnings': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'tiktok-ad-cost': {
    author: 'david-kim',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-04',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-ads-official',
        title: 'TikTok Ads Manager',
        source: 'TikTok for Business',
        url: 'https://ads.tiktok.com/',
        type: 'official',
        accessDate: '2025-12-04',
      },
    ],
    disclaimers: ['financial'],
  },
  'comment-rate': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'cost-per-result': {
    author: 'david-kim',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-ads-official',
        title: 'TikTok Ads Manager',
        source: 'TikTok for Business',
        url: 'https://ads.tiktok.com/',
        type: 'official',
        accessDate: '2025-12-05',
      },
    ],
    disclaimers: ['financial'],
  },
  'milestone-tracker': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    citations: [COMMON_CITATIONS['creator-survey']],
    disclaimers: ['educational'],
  },

  // ========================================
  // SUB-CATEGORY CALCULATOR PAGES
  // ========================================
  'earnings-revenue/creator-fund': {
    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    citations: [
      COMMON_CITATIONS['tiktok-official'],
      COMMON_CITATIONS['creator-survey'],
    ],
    disclaimers: ['financial', 'general'],
  },
  'earnings-revenue/live-earnings': {
    author: 'jessica-rodriguez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-live-official',
        title: 'TikTok LIVE Gifts - Creator Portal',
        source: 'TikTok Official Documentation',
        url: 'https://www.tiktok.com/creators/creator-portal/en-us/getting-paid-to-create/live-gifting/',
        type: 'official',
        accessDate: '2025-12-05',
      },
    ],
    disclaimers: ['financial'],
  },
  'earnings-revenue/money': {
    author: 'sarah-johnson',
    reviewedBy: 'emily-thompson',
    reviewDate: '2025-12-05',
    reviewType: 'financial',
    citations: [
      COMMON_CITATIONS['creator-survey'],
      COMMON_CITATIONS['influencer-marketing-hub'],
    ],
    disclaimers: ['financial', 'tax'],
  },
  'utility-tools/eligibility': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    citations: [COMMON_CITATIONS['tiktok-official']],
    disclaimers: ['educational'],
  },
  'utility-tools/payout': {
    author: 'emily-thompson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'financial',
    citations: [COMMON_CITATIONS['tiktok-official']],
    disclaimers: ['financial'],
  },
  'coins-gifts-diamonds/coins': {
    author: 'jessica-rodriguez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'coins-gifts-diamonds/diamonds': {
    author: 'jessica-rodriguez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'coins-gifts-diamonds/gift': {
    author: 'jessica-rodriguez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'commerce-ads/ad-cost': {
    author: 'david-kim',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-ads-official',
        title: 'TikTok Ads Manager',
        source: 'TikTok for Business',
        url: 'https://ads.tiktok.com/',
        type: 'official',
        accessDate: '2025-12-05',
      },
    ],
    disclaimers: ['financial'],
  },
  'commerce-ads/rpm-cpm': {
    author: 'michael-chen',
    reviewedBy: 'david-kim',
    reviewDate: '2025-12-05',
    reviewType: 'technical',
    disclaimers: ['financial', 'educational'],
  },
  'engagement-influence/engagement': {
    author: 'alex-martinez',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },
  'engagement-influence/influencer-pricing': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-12-05',
    reviewType: 'expert',
    disclaimers: ['financial'],
  },
  'engagement-influence/video-engagement': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-12-05',
    reviewType: 'technical',
    disclaimers: ['educational'],
  },

  // ========================================
  // GUIDE PAGES
  // ========================================
  'how-to-make-money-on-tiktok': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      COMMON_CITATIONS['tiktok-official'],
      COMMON_CITATIONS['creator-survey'],
    ],
    disclaimers: ['financial', 'educational'],
  },
  'how-to-get-brand-deals': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    disclaimers: ['educational'],
  },
  'tiktok-creator-fund-guide': {
    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [COMMON_CITATIONS['tiktok-official'], COMMON_CITATIONS['creator-survey']],
    disclaimers: ['financial', 'educational'],
  },
  'how-to-increase-engagement': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-algorithm-study',
        title: 'TikTok Algorithm Research 2024-2025',
        source: 'TikTok Calculator Research Team',
        type: 'research',
        publicationDate: '2025-01',
        accessDate: '2025-11-13',
      },
      COMMON_CITATIONS['creator-survey'],
    ],
    disclaimers: ['educational'],
  },
  'how-to-go-viral': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2025-11-13',
    reviewType: 'expert',
    citations: [
      {
        id: 'viral-video-research',
        title: 'TikTok Viral Video Analysis: 10,000+ Videos Studied',
        source: 'TikTok Calculator Research Team',
        type: 'research',
        publicationDate: '2025-06',
        accessDate: '2025-11-13',
      },
      COMMON_CITATIONS['creator-survey'],
    ],
    disclaimers: ['educational'],
  },

  'tiktok-ads-hub': {
    author: 'david-kim',
    reviewedBy: 'michael-chen',
    reviewDate: '2026-02-06',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-ads-official',
        title: 'TikTok Ads Manager',
        source: 'TikTok for Business',
        url: 'https://ads.tiktok.com/',
        type: 'official',
        accessDate: '2026-02-06',
      },
      COMMON_CITATIONS['creator-survey'],
    ],
    disclaimers: ['financial', 'educational'],
  },
  'tiktok-growth-hub': {
    author: 'alex-martinez',
    reviewedBy: 'sarah-johnson',
    reviewDate: '2026-02-06',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-algorithm-study',
        title: 'TikTok Algorithm Research 2024-2025',
        source: 'TikTok Calculator Research Team',
        type: 'research',
        publicationDate: '2025-01',
        accessDate: '2026-02-06',
      },
      COMMON_CITATIONS['creator-survey'],
    ],
    disclaimers: ['educational'],
  },

  // ========================================
  // DATA & REGIONAL PAGES
  // ========================================
  'region': {
    author: 'michael-chen',
    reviewedBy: 'alex-martinez',
    reviewDate: '2025-01-28',
    reviewType: 'expert',
    citations: [
      {
        id: 'tiktok-ads-data',
        title: 'TikTok Advertising Reach Data by Country',
        source: 'TikTok for Business',
        url: 'https://www.tiktok.com/business/',
        type: 'official',
        accessDate: '2025-01-28',
      },
      {
        id: 'datareportal-digital',
        title: 'Digital 2025: Global Overview Report',
        source: 'DataReportal',
        url: 'https://datareportal.com/reports/digital-2025-global-overview-report',
        type: 'research',
        publicationDate: '2025-01',
        accessDate: '2025-01-28',
      },
      {
        id: 'statista-tiktok-users',
        title: 'TikTok Users by Country 2025',
        source: 'Statista',
        type: 'data',
        publicationDate: '2025-01',
        accessDate: '2025-01-28',
      },
    ],
    disclaimers: ['educational'],
  },

  // ========================================
  // BLOG POSTS
  // ========================================
  'building-multiple-income-streams-tiktok': {
    author: 'sarah-johnson',
    reviewedBy: 'michael-chen',
    reviewDate: '2026-02-05',
    reviewType: 'editorial',
    citations: [
      COMMON_CITATIONS['tiktok-official'],
      COMMON_CITATIONS['creator-survey'],
      COMMON_CITATIONS['influencer-marketing-hub'],
    ],
    disclaimers: ['educational'],
  },
};

const INTERNAL_CITATION_PATTERN =
  /(calculatecreator|tiktok calculator research|tiktok calculator data team|research team)/i;

function sanitizeCitations(citations?: Citation[]): Citation[] | undefined {
  if (!citations || citations.length === 0) return undefined;

  const publicCitations = citations.filter((citation) => {
    const sourceText = `${citation.source} ${citation.title}`;
    return Boolean(citation.url) && !INTERNAL_CITATION_PATTERN.test(sourceText);
  });

  return publicCitations.length > 0 ? publicCitations : undefined;
}

function sanitizePageMetadata(metadata?: PageMetadata): PageMetadata | undefined {
  if (!metadata) return undefined;

  return {
    author: metadata.author,
    citations: sanitizeCitations(metadata.citations),
    disclaimers: metadata.disclaimers,
  };
}

/**
 * Get page metadata by slug
 */
export function getPageMetadata(slug: string): PageMetadata | undefined {
  return sanitizePageMetadata(PAGE_METADATA[slug]);
}

/**
 * Get default metadata for pages without specific metadata
 */
export function getDefaultPageMetadata(): PageMetadata {
  return sanitizePageMetadata({
    author: 'tiktok-calculator-team',
    disclaimers: ['general'],
  })!;
}
