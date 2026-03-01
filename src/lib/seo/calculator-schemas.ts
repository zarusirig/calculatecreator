/**
 * Schema markup configuration for all calculators
 * This centralizes SEO data for easy maintenance
 */

export interface CalculatorSchemaConfig {
  name: string;
  description: string;
  slug: string;
  keywords: string[];
  datePublished: string;
  dateModified?: string;
  author?: string; // Author ID from authors.ts
  reviewedBy?: string; // Reviewer ID from authors.ts
}

export const CALCULATOR_SCHEMAS: Record<string, CalculatorSchemaConfig> = {
  'tiktok-creator-fund': {
    name: 'TikTok Creator Fund Calculator',
    description: 'Estimate your monthly and annual earnings from the TikTok Creator Fund based on your views, engagement rate, and content niche.',
    slug: 'tiktok-creator-fund',
    keywords: ['tiktok creator fund calculator', 'creator fund earnings', 'tiktok rpm calculator', 'creator fund payment'],
    datePublished: '2024-01-15',
    dateModified: '2026-03-01',

    author: 'michael-chen',
    reviewedBy: 'sarah-johnson',
  },
  'engagement-rate': {
    name: 'TikTok Engagement Rate Calculator',
    description: 'Calculate your TikTok engagement rate to measure audience interaction and content performance.',
    slug: 'engagement-rate',
    keywords: ['tiktok engagement rate', 'engagement calculator', 'tiktok metrics', 'engagement percentage'],
    datePublished: '2024-01-15',
    dateModified: '2026-03-01',

  },
  'brand-deal-rate': {
    name: 'TikTok Brand Deal Rate Calculator',
    description: 'Calculate how much you should charge brands for sponsored TikTok posts based on your followers and engagement.',
    slug: 'brand-deal-rate',
    keywords: ['brand deal calculator', 'influencer rate calculator', 'sponsored post pricing', 'tiktok sponsorship rates'],
    datePublished: '2024-01-15',
    dateModified: '2026-03-01',

  },
  'live-gifts': {
    name: 'TikTok LIVE Gifts Calculator',
    description: 'Calculate potential earnings from TikTok LIVE gifts and diamond conversions.',
    slug: 'live-gifts',
    keywords: ['tiktok live gifts calculator', 'tiktok diamonds', 'live stream earnings', 'gift conversion'],
    datePublished: '2024-01-20',
    dateModified: '2026-03-01',

  },
  'tiktok-money': {
    name: 'TikTok Money Calculator',
    description: 'Calculate your total TikTok earnings from all income streams including Creator Fund, brand deals, and LIVE gifts.',
    slug: 'tiktok-money',
    keywords: ['tiktok money calculator', 'tiktok earnings', 'how much money tiktok', 'tiktok income calculator'],
    datePublished: '2024-01-15',
    dateModified: '2026-03-01',

  },
  'rpm': {
    name: 'TikTok RPM Calculator',
    description: 'Calculate your Revenue Per Mille (RPM) to understand earnings per 1,000 views on TikTok.',
    slug: 'rpm',
    keywords: ['tiktok rpm calculator', 'revenue per mille', 'tiktok rpm rate', 'views to earnings'],
    datePublished: '2024-01-20',
    dateModified: '2026-03-01',

  },
  'commerce-ads/shop-profit': {
    name: 'TikTok Shop Commission Calculator',
    description: 'Calculate earnings from TikTok Shop affiliate commissions and product sales.',
    slug: 'commerce-ads/shop-profit',
    keywords: ['tiktok shop calculator', 'tiktok affiliate commission', 'shop earnings', 'product commission'],
    datePublished: '2024-02-01',
    dateModified: '2026-03-01',

  },
  'coins': {
    name: 'TikTok Coins Calculator',
    description: 'Convert TikTok coins to real money and calculate diamond values.',
    slug: 'coins',
    keywords: ['tiktok coins calculator', 'coins to money', 'diamond conversion', 'tiktok currency'],
    datePublished: '2024-01-25',
    dateModified: '2026-03-01',

  },
  'video-performance': {
    name: 'TikTok Video Performance Predictor',
    description: 'Predict potential views and engagement for your TikTok videos.',
    slug: 'video-performance',
    keywords: ['video performance calculator', 'tiktok views predictor', 'video success calculator'],
    datePublished: '2024-02-10',
    dateModified: '2026-03-01',

  },
  'follower-growth': {
    name: 'TikTok Follower Growth Projector',
    description: 'Project your future follower count and growth milestones based on current growth rate.',
    slug: 'follower-growth',
    keywords: ['follower growth calculator', 'tiktok growth projector', 'follower prediction'],
    datePublished: '2024-02-05',
    dateModified: '2026-03-01',

  },
  'watch-time': {
    name: 'TikTok Watch Time Calculator',
    description: 'Calculate average watch time and completion rate for your TikTok videos.',
    slug: 'watch-time',
    keywords: ['watch time calculator', 'tiktok completion rate', 'average watch time'],
    datePublished: '2024-02-15',
    dateModified: '2026-03-01',

  },
  'viral-potential': {
    name: 'TikTok Viral Potential Calculator',
    description: 'Analyze your video\'s potential to go viral based on key metrics.',
    slug: 'viral-potential',
    keywords: ['viral potential calculator', 'tiktok viral score', 'virality predictor'],
    datePublished: '2024-02-20',
    dateModified: '2026-03-01',

  },
  'completion-rate': {
    name: 'TikTok Completion Rate Calculator',
    description: 'Calculate video completion rate to optimize content for the algorithm.',
    slug: 'completion-rate',
    keywords: ['completion rate calculator', 'tiktok completion', 'watch through rate'],
    datePublished: '2024-02-25',
    dateModified: '2026-03-01',

  },
  'ad-revenue': {
    name: 'TikTok Ad Revenue Calculator',
    description: 'Estimate potential ad revenue from TikTok video views and ads.',
    slug: 'ad-revenue',
    keywords: ['tiktok ad revenue', 'ad earnings calculator', 'tiktok ads calculator'],
    datePublished: '2024-03-01',
    dateModified: '2026-03-01',

  },
  'sponsorship-roi': {
    name: 'TikTok Sponsorship ROI Calculator',
    description: 'Calculate return on investment for brand sponsorships and partnerships.',
    slug: 'sponsorship-roi',
    keywords: ['sponsorship roi calculator', 'brand deal roi', 'partnership calculator'],
    datePublished: '2024-03-05',
    dateModified: '2026-03-01',

  },
  'content-value': {
    name: 'TikTok Content Value Calculator',
    description: 'Calculate the monetary value of your TikTok content and posts.',
    slug: 'content-value',
    keywords: ['content value calculator', 'post value', 'tiktok content worth'],
    datePublished: '2024-03-10',
    dateModified: '2026-03-01',

  },
  'niche-profitability': {
    name: 'TikTok Niche Profitability Calculator',
    description: 'Analyze profitability potential of different TikTok content niches.',
    slug: 'niche-profitability',
    keywords: ['niche profitability', 'tiktok niche calculator', 'best niches'],
    datePublished: '2024-03-15',
    dateModified: '2026-03-01',

  },
  'production-cost': {
    name: 'TikTok Production Cost Calculator',
    description: 'Calculate content production costs and ROI for TikTok videos.',
    slug: 'production-cost',
    keywords: ['production cost calculator', 'content cost', 'video production roi'],
    datePublished: '2024-03-20',
    dateModified: '2026-03-01',

  },
  'utility-tools/tax': {
    name: 'TikTok Creator Tax Calculator',
    description: 'Estimate tax obligations for TikTok creator income and earnings.',
    slug: 'utility-tools/tax',
    keywords: ['creator tax calculator', 'influencer taxes', 'tiktok income tax'],
    datePublished: '2024-03-25',
    dateModified: '2026-03-01',

  },
  'break-even': {
    name: 'TikTok Break-Even Calculator',
    description: 'Calculate break-even point for TikTok content investments.',
    slug: 'break-even',
    keywords: ['break-even calculator', 'tiktok break even', 'roi calculator'],
    datePublished: '2024-03-30',
    dateModified: '2026-03-01',
  },
  'follower-conversion': {
    name: 'TikTok Follower Conversion Calculator',
    description: 'Calculate conversion rate from views to followers.',
    slug: 'follower-conversion',
    keywords: ['follower conversion calculator', 'view to follower rate', 'conversion rate'],
    datePublished: '2024-04-01',
    dateModified: '2026-03-01',
  },
  'share-ratio': {
    name: 'TikTok Share-to-View Ratio Calculator',
    description: 'Calculate and analyze your share-to-view ratio for better engagement.',
    slug: 'share-ratio',
    keywords: ['share ratio calculator', 'share to view', 'tiktok shares'],
    datePublished: '2024-04-05',
    dateModified: '2026-03-01',
  },
  'save-rate': {
    name: 'TikTok Save Rate Calculator',
    description: 'Calculate video save rate to measure content value and quality.',
    slug: 'save-rate',
    keywords: ['save rate calculator', 'tiktok saves', 'bookmark rate'],
    datePublished: '2024-04-10',
    dateModified: '2026-03-01',
  },
  'profile-visit-rate': {
    name: 'TikTok Profile Visit Rate Calculator',
    description: 'Calculate profile visit rate to measure audience interest.',
    slug: 'profile-visit-rate',
    keywords: ['profile visit rate', 'profile views calculator', 'visitor rate'],
    datePublished: '2024-04-15',
    dateModified: '2026-03-01',
  },
  'hashtag-performance': {
    name: 'TikTok Hashtag Performance Calculator',
    description: 'Analyze hashtag performance and reach potential.',
    slug: 'hashtag-performance',
    keywords: ['hashtag calculator', 'hashtag performance', 'tiktok hashtags'],
    datePublished: '2024-04-20',
    dateModified: '2026-03-01',
  },
  'posting-time': {
    name: 'TikTok Best Posting Time Calculator',
    description: 'Find the best time to post on TikTok for maximum engagement.',
    slug: 'posting-time',
    keywords: ['best posting time', 'tiktok posting schedule', 'optimal post time'],
    datePublished: '2024-04-25',
    dateModified: '2026-03-01',
  },
  'content-calendar-roi': {
    name: 'TikTok Content Calendar ROI Calculator',
    description: 'Calculate ROI for your TikTok content calendar and posting strategy.',
    slug: 'content-calendar-roi',
    keywords: ['content calendar roi', 'posting strategy roi', 'content planning'],
    datePublished: '2024-05-01',
    dateModified: '2026-03-01',
  },
  'multi-platform-earnings': {
    name: 'Multi-Platform Earnings Comparison Calculator',
    description: 'Compare potential earnings across TikTok, YouTube, and Instagram.',
    slug: 'multi-platform-earnings',
    keywords: ['multi platform calculator', 'platform comparison', 'cross platform earnings'],
    datePublished: '2024-05-05',
    dateModified: '2026-03-01',
  },
  'cpm-cpv': {
    name: 'TikTok CPM/CPV Calculator',
    description: 'Calculate Cost Per Mille (CPM) and Cost Per View (CPV) for your TikTok ad campaigns.',
    slug: 'cpm-cpv',
    keywords: ['tiktok cpm calculator', 'cpv calculator', 'ad cost calculator', 'tiktok advertising'],
    datePublished: '2025-11-13',
    dateModified: '2026-03-01',
  },
  'affiliate-commission': {
    name: 'TikTok Affiliate Commission Calculator',
    description: 'Calculate potential earnings from TikTok Shop affiliate marketing and product commissions.',
    slug: 'affiliate-commission',
    keywords: ['tiktok affiliate calculator', 'shop affiliate earnings', 'commission calculator', 'affiliate income'],
    datePublished: '2025-11-13',
    dateModified: '2026-03-01',
  },
  'conversion-rate': {
    name: 'TikTok Conversion Rate Calculator',
    description: 'Calculate conversion rate from your TikTok traffic to measure customer acquisition effectiveness.',
    slug: 'conversion-rate',
    keywords: ['conversion rate calculator', 'tiktok conversion', 'traffic conversion', 'conversion optimization'],
    datePublished: '2025-11-13',
    dateModified: '2026-03-01',
  },
  'customer-acquisition-cost': {
    name: 'TikTok Customer Acquisition Cost (CAC) Calculator',
    description: 'Calculate how much it costs to acquire a new customer through TikTok marketing.',
    slug: 'customer-acquisition-cost',
    keywords: ['cac calculator', 'customer acquisition cost', 'tiktok cac', 'marketing roi'],
    datePublished: '2025-11-13',
    dateModified: '2026-03-01',
  },
  'lifetime-value': {
    name: 'TikTok Customer Lifetime Value (LTV) Calculator',
    description: 'Calculate the total value a customer brings over their lifetime from TikTok traffic.',
    slug: 'lifetime-value',
    keywords: ['ltv calculator', 'customer lifetime value', 'customer value', 'retention metrics'],
    datePublished: '2025-11-13',
    dateModified: '2026-03-01',
  },
  'campaign-roi': {
    name: 'TikTok Campaign ROI Calculator',
    description: 'Calculate return on investment for your TikTok marketing campaigns and measure profitability.',
    slug: 'campaign-roi',
    keywords: ['campaign roi calculator', 'tiktok roi', 'marketing roi', 'roas calculator'],
    datePublished: '2025-11-13',
    dateModified: '2026-03-01',
  },
  'diamond-converter': {
    name: 'TikTok Diamond Converter',
    description: 'Convert TikTok diamonds to real money and understand the LIVE gift payout structure.',
    slug: 'diamond-converter',
    keywords: ['tiktok diamond converter', 'diamonds to money', 'tiktok payout', 'diamond value'],
    datePublished: '2024-01-25',
    dateModified: '2026-03-01',
  },
};

/**
 * Get schema config for a calculator by slug
 */
export function getCalculatorSchema(slug: string): CalculatorSchemaConfig | undefined {
  return CALCULATOR_SCHEMAS[slug];
}

/**
 * Get full URL for a calculator
 */
export function getCalculatorURL(slug: string): string {
  return `https://calculatecreator.com/calculators/${slug}/`;
}
