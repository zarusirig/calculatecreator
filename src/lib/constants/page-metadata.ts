/**
 * Centralized E-E-A-T metadata for all pages
 * Maps page slugs to author IDs, review information, and citations
 */

import type { Citation } from '@/components/eeat/Citations';

export interface PageMetadata {
  author: string; // Author ID from authors.ts
  reviewedBy?: string; // Reviewer ID from authors.ts
  reviewDate?: string;
  reviewType?: 'technical' | 'editorial' | 'financial' | 'expert';
  citations?: Citation[];
  disclaimers?: Array<'financial' | 'general' | 'affiliate' | 'tax' | 'educational'>;
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
  },
  'creator-tax': {
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
  },
  'shop-commission': {
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
};

/**
 * Get page metadata by slug
 */
export function getPageMetadata(slug: string): PageMetadata | undefined {
  return PAGE_METADATA[slug];
}

/**
 * Get default metadata for pages without specific metadata
 */
export function getDefaultPageMetadata(): PageMetadata {
  return {
    author: 'tiktok-calculator-team',
    disclaimers: ['general'],
  };
}
