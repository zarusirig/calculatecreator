/**
 * Semantic Linking System
 * Creates contextual relationships between calculators and content
 * Based on topical map strategy: Discovery → Education → Tool Usage → Optimization
 */

export interface SemanticLink {
  slug: string;
  name: string;
  description: string;
  icon: string;
  relationship: 'prerequisite' | 'related' | 'next-step' | 'compare' | 'alternative';
  context?: string;
}

export interface SemanticLinkGroup {
  title: string;
  links: SemanticLink[];
}

/**
 * Semantic relationship graph for all calculators
 * Maps: calculator slug → related calculators organized by relationship type
 */
export const SEMANTIC_RELATIONSHIPS: Record<string, Record<string, SemanticLink[]>> = {
  // ========================================
  // EARNINGS CALCULATORS
  // ========================================
  'tiktok-creator-fund': {
    prerequisite: [
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'Calculate your engagement rate first to get accurate Creator Fund estimates',
        icon: 'message',
        relationship: 'prerequisite',
        context: 'Before calculating earnings, check your engagement rate →',
      },
    ],
    'next-steps': [
      {
        slug: 'follower-growth',
        name: 'Follower Growth Projector',
        description: 'Project future follower growth to forecast increasing earnings',
        icon: 'chart-bar',
        relationship: 'next-step',
        context: 'Next step: Project your follower growth →',
      },
      {
        slug: 'rpm',
        name: 'RPM Calculator',
        description: 'Calculate your actual RPM from Creator Fund earnings',
        icon: 'chart-up',
        relationship: 'next-step',
        context: 'Verify your RPM rate →',
      },
    ],
    compare: [
      {
        slug: 'brand-deal-rate',
        name: 'Brand Deal Rate Calculator',
        description: 'See how much more you could earn from brand deals (typically 10-50× more)',
        icon: 'handshake',
        relationship: 'compare',
        context: 'Compare: How much would you earn from brand deals? →',
      },
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Calculate total earnings from all income streams combined',
        icon: 'money',
        relationship: 'compare',
        context: 'See your total TikTok income potential →',
      },
      {
        slug: 'multi-platform-earnings',
        name: 'Multi-Platform Earnings',
        description: 'Compare Creator Fund earnings to YouTube and Instagram',
        icon: 'refresh',
        relationship: 'compare',
        context: 'Compare with other platforms →',
      },
    ],
  },

  'engagement-rate': {
    'next-steps': [
      {
        slug: 'tiktok-creator-fund',
        name: 'Creator Fund Calculator',
        description: 'Use your engagement rate to calculate accurate earnings',
        icon: 'money-bag',
        relationship: 'next-step',
        context: 'Now calculate your Creator Fund earnings →',
      },
      {
        slug: 'brand-deal-rate',
        name: 'Brand Deal Rate Calculator',
        description: 'Higher engagement = higher brand deal rates',
        icon: 'handshake',
        relationship: 'next-step',
        context: 'See how your engagement affects brand deal rates →',
      },
      {
        slug: 'viral-potential',
        name: 'Viral Potential Calculator',
        description: 'Analyze if your engagement level indicates viral potential',
        icon: 'rocket',
        relationship: 'next-step',
        context: 'Check your viral potential →',
      },
    ],
    related: [
      {
        slug: 'completion-rate',
        name: 'Completion Rate Calculator',
        description: 'Completion rate heavily impacts engagement',
        icon: 'timer',
        relationship: 'related',
        context: 'Related metric: Completion rate →',
      },
      {
        slug: 'share-ratio',
        name: 'Share-to-View Ratio',
        description: 'Shares are a key engagement signal',
        icon: 'repeat',
        relationship: 'related',
        context: 'Track your share ratio →',
      },
      {
        slug: 'save-rate',
        name: 'Save Rate Calculator',
        description: 'Saves indicate high-value content',
        icon: 'bookmark',
        relationship: 'related',
        context: 'Measure save rate →',
      },
    ],
  },

  'brand-deal-rate': {
    prerequisite: [
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'Calculate engagement rate to get accurate brand deal rates',
        icon: 'message',
        relationship: 'prerequisite',
        context: 'First, calculate your engagement rate →',
      },
    ],
    'next-steps': [
      {
        slug: 'sponsorship-roi',
        name: 'Sponsorship ROI Calculator',
        description: 'Calculate ROI for potential sponsorship deals',
        icon: 'chart-bar',
        relationship: 'next-step',
        context: 'Calculate sponsorship ROI →',
      },
      {
        slug: 'content-value',
        name: 'Content Value Calculator',
        description: 'Determine the true value of each post',
        icon: 'gem',
        relationship: 'next-step',
        context: 'Calculate your content value →',
      },
    ],
    compare: [
      {
        slug: 'tiktok-creator-fund',
        name: 'Creator Fund Calculator',
        description: 'Compare brand deal earnings to passive Creator Fund income',
        icon: 'money-bag',
        relationship: 'compare',
        context: 'Compare with Creator Fund earnings →',
      },
      {
        slug: 'live-gifts',
        name: 'LIVE Gifts Calculator',
        description: 'Compare brand deals to LIVE streaming income',
        icon: 'gift',
        relationship: 'compare',
        context: 'Compare with LIVE earnings →',
      },
    ],
  },

  'live-gifts': {
    prerequisite: [
      {
        slug: 'follower-growth',
        name: 'Follower Growth Projector',
        description: 'Project follower growth to estimate future LIVE viewership',
        icon: 'chart-bar',
        relationship: 'prerequisite',
        context: 'Project your follower growth first →',
      },
    ],
    related: [
      {
        slug: 'coins',
        name: 'Coins Calculator',
        description: 'Convert TikTok coins and diamonds to real money',
        icon: 'coins',
        relationship: 'related',
        context: 'Convert coins to USD →',
      },
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Calculate total earnings including LIVE gifts',
        icon: 'money',
        relationship: 'related',
        context: 'See total earnings →',
      },
    ],
    compare: [
      {
        slug: 'tiktok-creator-fund',
        name: 'Creator Fund Calculator',
        description: 'Compare LIVE earnings to Creator Fund',
        icon: 'money-bag',
        relationship: 'compare',
        context: 'Compare with Creator Fund →',
      },
      {
        slug: 'brand-deal-rate',
        name: 'Brand Deal Rate Calculator',
        description: 'Compare LIVE earnings to brand deals',
        icon: 'handshake',
        relationship: 'compare',
        context: 'Compare with brand deals →',
      },
    ],
  },

  'tiktok-money': {
    prerequisite: [
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'Calculate your engagement rate for accurate earnings',
        icon: 'message',
        relationship: 'prerequisite',
        context: 'Calculate engagement rate first →',
      },
    ],
    'next-steps': [
      {
        slug: 'niche-profitability',
        name: 'Niche Profitability Calculator',
        description: 'Analyze if your niche is maximizing earnings potential',
        icon: 'target',
        relationship: 'next-step',
        context: 'Optimize your niche strategy →',
      },
      {
        slug: 'utility-tools/tax',
        name: 'Creator Tax Calculator',
        description: 'Estimate tax obligations on your TikTok income',
        icon: 'briefcase',
        relationship: 'next-step',
        context: 'Calculate tax obligations →',
      },
    ],
    related: [
      {
        slug: 'tiktok-creator-fund',
        name: 'Creator Fund Calculator',
        description: 'Deep dive into Creator Fund earnings',
        icon: 'money-bag',
        relationship: 'related',
        context: 'Breakdown: Creator Fund →',
      },
      {
        slug: 'brand-deal-rate',
        name: 'Brand Deal Rate Calculator',
        description: 'Deep dive into brand deal rates',
        icon: 'handshake',
        relationship: 'related',
        context: 'Breakdown: Brand deals →',
      },
      {
        slug: 'live-gifts',
        name: 'LIVE Gifts Calculator',
        description: 'Deep dive into LIVE streaming income',
        icon: 'gift',
        relationship: 'related',
        context: 'Breakdown: LIVE gifts →',
      },
      {
        slug: 'commerce-ads/shop-profit',
        name: 'Shop Commission Calculator',
        description: 'Deep dive into TikTok Shop earnings',
        icon: 'shopping',
        relationship: 'related',
        context: 'Breakdown: Shop commissions →',
      },
    ],
  },

  'rpm': {
    prerequisite: [
      {
        slug: 'tiktok-creator-fund',
        name: 'Creator Fund Calculator',
        description: 'Calculate Creator Fund earnings first',
        icon: 'money-bag',
        relationship: 'prerequisite',
        context: 'Calculate Creator Fund earnings first →',
      },
    ],
    related: [
      {
        slug: 'cpm-cpv',
        name: 'CPM/CPV Calculator',
        description: 'Related metric for advertisers (cost per view)',
        icon: 'chart-bar',
        relationship: 'related',
        context: 'Related: CPM/CPV calculator →',
      },
      {
        slug: 'ad-revenue',
        name: 'Ad Revenue Calculator',
        description: 'Calculate potential ad revenue',
        icon: 'money',
        relationship: 'related',
        context: 'Calculate ad revenue →',
      },
    ],
  },

  // ========================================
  // BUSINESS & ROI CALCULATORS
  // ========================================
  'cpm-cpv': {
    'next-steps': [
      {
        slug: 'campaign-roi',
        name: 'Campaign ROI Calculator',
        description: 'Calculate overall campaign profitability',
        icon: 'chart-up',
        relationship: 'next-step',
        context: 'Next: Calculate campaign ROI →',
      },
      {
        slug: 'customer-acquisition-cost',
        name: 'CAC Calculator',
        description: 'Determine customer acquisition cost',
        icon: 'money',
        relationship: 'next-step',
        context: 'Calculate customer acquisition cost →',
      },
    ],
    related: [
      {
        slug: 'rpm',
        name: 'RPM Calculator',
        description: 'RPM for creators (opposite perspective)',
        icon: 'chart-up',
        relationship: 'related',
        context: 'Related: Creator RPM →',
      },
      {
        slug: 'ad-revenue',
        name: 'Ad Revenue Calculator',
        description: 'Estimate total ad revenue',
        icon: 'money-bag',
        relationship: 'related',
        context: 'Estimate ad revenue →',
      },
    ],
  },

  'affiliate-commission': {
    prerequisite: [
      {
        slug: 'conversion-rate',
        name: 'Conversion Rate Calculator',
        description: 'Know your conversion rate for accurate projections',
        icon: 'target',
        relationship: 'prerequisite',
        context: 'Calculate conversion rate first →',
      },
    ],
    'next-steps': [
      {
        slug: 'campaign-roi',
        name: 'Campaign ROI Calculator',
        description: 'Calculate ROI on affiliate promotions',
        icon: 'chart-up',
        relationship: 'next-step',
        context: 'Calculate affiliate campaign ROI →',
      },
    ],
    related: [
      {
        slug: 'commerce-ads/shop-profit',
        name: 'Shop Commission Calculator',
        description: 'TikTok Shop commission calculator',
        icon: 'shopping',
        relationship: 'related',
        context: 'Related: Shop commission →',
      },
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Include affiliate income in total earnings',
        icon: 'money',
        relationship: 'related',
        context: 'See total earnings →',
      },
    ],
  },

  'conversion-rate': {
    'next-steps': [
      {
        slug: 'affiliate-commission',
        name: 'Affiliate Commission Calculator',
        description: 'Use conversion rate to project affiliate earnings',
        icon: 'handshake',
        relationship: 'next-step',
        context: 'Project affiliate earnings →',
      },
      {
        slug: 'customer-acquisition-cost',
        name: 'CAC Calculator',
        description: 'Higher conversion rate = lower CAC',
        icon: 'money',
        relationship: 'next-step',
        context: 'Calculate acquisition cost →',
      },
      {
        slug: 'campaign-roi',
        name: 'Campaign ROI Calculator',
        description: 'Conversion rate directly impacts ROI',
        icon: 'chart-up',
        relationship: 'next-step',
        context: 'Calculate campaign ROI →',
      },
    ],
    related: [
      {
        slug: 'follower-conversion',
        name: 'Follower Conversion Calculator',
        description: 'Calculate follower-to-customer conversion',
        icon: 'chart-bar',
        relationship: 'related',
        context: 'Related: Follower conversion →',
      },
    ],
  },

  'customer-acquisition-cost': {
    prerequisite: [
      {
        slug: 'conversion-rate',
        name: 'Conversion Rate Calculator',
        description: 'Understand conversion rate to optimize CAC',
        icon: 'target',
        relationship: 'prerequisite',
        context: 'Calculate conversion rate first →',
      },
    ],
    'next-steps': [
      {
        slug: 'lifetime-value',
        name: 'Lifetime Value Calculator',
        description: 'Calculate LTV to ensure CAC is sustainable (aim for 3:1 LTV:CAC ratio)',
        icon: 'gem',
        relationship: 'next-step',
        context: 'Critical: Calculate customer LTV →',
      },
      {
        slug: 'campaign-roi',
        name: 'Campaign ROI Calculator',
        description: 'Calculate overall campaign profitability',
        icon: 'chart-up',
        relationship: 'next-step',
        context: 'Calculate campaign ROI →',
      },
    ],
    related: [
      {
        slug: 'cpm-cpv',
        name: 'CPM/CPV Calculator',
        description: 'Track ad costs contributing to CAC',
        icon: 'chart-bar',
        relationship: 'related',
        context: 'Track ad costs →',
      },
    ],
  },

  'lifetime-value': {
    'next-steps': [
      {
        slug: 'customer-acquisition-cost',
        name: 'CAC Calculator',
        description: 'Compare LTV to CAC (should be 3:1 or higher)',
        icon: 'money',
        relationship: 'next-step',
        context: 'Compare LTV to CAC →',
      },
      {
        slug: 'break-even',
        name: 'Break-Even Calculator',
        description: 'Calculate break-even point based on LTV',
        icon: 'scale',
        relationship: 'next-step',
        context: 'Calculate break-even →',
      },
    ],
    related: [
      {
        slug: 'content-value',
        name: 'Content Value Calculator',
        description: 'Value of content that drives customer lifetime value',
        icon: 'gem',
        relationship: 'related',
        context: 'Calculate content value →',
      },
    ],
  },

  'campaign-roi': {
    prerequisite: [
      {
        slug: 'cpm-cpv',
        name: 'CPM/CPV Calculator',
        description: 'Understand ad costs before calculating ROI',
        icon: 'chart-bar',
        relationship: 'prerequisite',
        context: 'Calculate ad costs first →',
      },
    ],
    related: [
      {
        slug: 'customer-acquisition-cost',
        name: 'CAC Calculator',
        description: 'CAC is a key component of campaign ROI',
        icon: 'money',
        relationship: 'related',
        context: 'Break down CAC →',
      },
      {
        slug: 'lifetime-value',
        name: 'LTV Calculator',
        description: 'LTV determines long-term campaign profitability',
        icon: 'gem',
        relationship: 'related',
        context: 'Factor in LTV →',
      },
      {
        slug: 'sponsorship-roi',
        name: 'Sponsorship ROI Calculator',
        description: 'ROI for influencer sponsorship deals',
        icon: 'handshake',
        relationship: 'related',
        context: 'Related: Sponsorship ROI →',
      },
    ],
  },

  'commerce-ads/shop-profit': {
    'next-steps': [
      {
        slug: 'affiliate-commission',
        name: 'Affiliate Commission Calculator',
        description: 'Calculate affiliate earnings potential',
        icon: 'handshake',
        relationship: 'next-step',
        context: 'Also explore: Affiliate commission →',
      },
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Include Shop earnings in total income',
        icon: 'money',
        relationship: 'next-step',
        context: 'See total earnings →',
      },
    ],
    related: [
      {
        slug: 'conversion-rate',
        name: 'Conversion Rate Calculator',
        description: 'Track Shop conversion performance',
        icon: 'target',
        relationship: 'related',
        context: 'Track conversions →',
      },
    ],
  },

  // ========================================
  // ENGAGEMENT & PERFORMANCE CALCULATORS
  // ========================================
  'follower-growth': {
    'next-steps': [
      {
        slug: 'tiktok-creator-fund',
        name: 'Creator Fund Calculator',
        description: 'Project future Creator Fund earnings based on growth',
        icon: 'money-bag',
        relationship: 'next-step',
        context: 'Project future earnings →',
      },
      {
        slug: 'brand-deal-rate',
        name: 'Brand Deal Rate Calculator',
        description: 'See how future follower count affects brand deal rates',
        icon: 'handshake',
        relationship: 'next-step',
        context: 'Project brand deal rates →',
      },
    ],
    related: [
      {
        slug: 'follower-conversion',
        name: 'Follower Conversion Calculator',
        description: 'Track how followers convert to customers',
        icon: 'chart-bar',
        relationship: 'related',
        context: 'Track follower conversion →',
      },
      {
        slug: 'viral-potential',
        name: 'Viral Potential Calculator',
        description: 'Analyze content viral potential for faster growth',
        icon: 'rocket',
        relationship: 'related',
        context: 'Check viral potential →',
      },
    ],
  },

  'viral-potential': {
    prerequisite: [
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'High engagement is key to viral potential',
        icon: 'message',
        relationship: 'prerequisite',
        context: 'Calculate engagement first →',
      },
    ],
    related: [
      {
        slug: 'completion-rate',
        name: 'Completion Rate Calculator',
        description: 'Completion rate heavily affects virality',
        icon: 'timer',
        relationship: 'related',
        context: 'Check completion rate →',
      },
      {
        slug: 'share-ratio',
        name: 'Share-to-View Ratio',
        description: 'Shares are the strongest viral signal',
        icon: 'repeat',
        relationship: 'related',
        context: 'Analyze share ratio →',
      },
      {
        slug: 'hashtag-performance',
        name: 'Hashtag Performance Calculator',
        description: 'Hashtags impact discoverability and virality',
        icon: 'hash',
        relationship: 'related',
        context: 'Optimize hashtags →',
      },
    ],
  },

  'completion-rate': {
    'next-steps': [
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'Completion rate impacts overall engagement',
        icon: 'message',
        relationship: 'next-step',
        context: 'Calculate engagement rate →',
      },
      {
        slug: 'viral-potential',
        name: 'Viral Potential Calculator',
        description: 'High completion rate increases viral potential',
        icon: 'rocket',
        relationship: 'next-step',
        context: 'Check viral potential →',
      },
    ],
    related: [
      {
        slug: 'watch-time',
        name: 'Watch Time Calculator',
        description: 'Related metric for video performance',
        icon: 'timer',
        relationship: 'related',
        context: 'Calculate watch time →',
      },
    ],
  },

  'watch-time': {
    related: [
      {
        slug: 'completion-rate',
        name: 'Completion Rate Calculator',
        description: 'Completion rate shows % of video watched',
        icon: 'timer',
        relationship: 'related',
        context: 'Calculate completion rate →',
      },
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'Watch time affects overall engagement',
        icon: 'message',
        relationship: 'related',
        context: 'Calculate engagement →',
      },
    ],
  },

  'video-performance': {
    prerequisite: [
      {
        slug: 'engagement-rate',
        name: 'Engagement Rate Calculator',
        description: 'Calculate engagement for performance prediction',
        icon: 'message',
        relationship: 'prerequisite',
        context: 'Calculate engagement first →',
      },
    ],
    'next-steps': [
      {
        slug: 'viral-potential',
        name: 'Viral Potential Calculator',
        description: 'Check if video has viral potential',
        icon: 'rocket',
        relationship: 'next-step',
        context: 'Check viral potential →',
      },
    ],
    related: [
      {
        slug: 'hashtag-performance',
        name: 'Hashtag Performance Calculator',
        description: 'Hashtags impact video performance',
        icon: 'hash',
        relationship: 'related',
        context: 'Optimize hashtags →',
      },
      {
        slug: 'posting-time',
        name: 'Best Posting Time Calculator',
        description: 'Timing impacts initial performance',
        icon: 'clock',
        relationship: 'related',
        context: 'Find best posting time →',
      },
    ],
  },

  // ========================================
  // UTILITY & PLANNING CALCULATORS
  // ========================================
  'niche-profitability': {
    'next-steps': [
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Calculate potential earnings in your niche',
        icon: 'money',
        relationship: 'next-step',
        context: 'Calculate niche earnings →',
      },
      {
        slug: 'content-calendar-roi',
        name: 'Content Calendar ROI',
        description: 'Plan content strategy for your niche',
        icon: 'calendar',
        relationship: 'next-step',
        context: 'Plan content calendar →',
      },
    ],
  },

  'content-value': {
    related: [
      {
        slug: 'brand-deal-rate',
        name: 'Brand Deal Rate Calculator',
        description: 'Content value determines brand deal rates',
        icon: 'handshake',
        relationship: 'related',
        context: 'Calculate brand deal rate →',
      },
      {
        slug: 'sponsorship-roi',
        name: 'Sponsorship ROI Calculator',
        description: 'ROI analysis for sponsored content',
        icon: 'chart-bar',
        relationship: 'related',
        context: 'Calculate sponsorship ROI →',
      },
    ],
  },

  'utility-tools/tax': {
    prerequisite: [
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Calculate total earnings before tax planning',
        icon: 'money',
        relationship: 'prerequisite',
        context: 'Calculate total income first →',
      },
    ],
  },

  'break-even': {
    prerequisite: [
      {
        slug: 'production-cost',
        name: 'Production Cost Calculator',
        description: 'Calculate content production costs first',
        icon: 'film',
        relationship: 'prerequisite',
        context: 'Calculate production costs →',
      },
    ],
    related: [
      {
        slug: 'campaign-roi',
        name: 'Campaign ROI Calculator',
        description: 'ROI helps determine break-even point',
        icon: 'chart-up',
        relationship: 'related',
        context: 'Calculate ROI →',
      },
    ],
  },

  'multi-platform-earnings': {
    prerequisite: [
      {
        slug: 'tiktok-money',
        name: 'TikTok Money Calculator',
        description: 'Calculate TikTok earnings for comparison',
        icon: 'money',
        relationship: 'prerequisite',
        context: 'Calculate TikTok earnings →',
      },
    ],
  },
};

/**
 * Get semantic links for a calculator
 */
export function getSemanticLinks(calculatorSlug: string): SemanticLinkGroup[] {
  const relationships = SEMANTIC_RELATIONSHIPS[calculatorSlug];
  if (!relationships) return [];

  const groups: SemanticLinkGroup[] = [];

  // Organize links by relationship type
  if (relationships.prerequisite && relationships.prerequisite.length > 0) {
    groups.push({
      title: 'Start Here First',
      links: relationships.prerequisite,
    });
  }

  if (relationships.related && relationships.related.length > 0) {
    groups.push({
      title: 'Related Calculators',
      links: relationships.related,
    });
  }

  if (relationships['next-steps'] && relationships['next-steps'].length > 0) {
    groups.push({
      title: 'Next Steps',
      links: relationships['next-steps'],
    });
  }

  if (relationships.compare && relationships.compare.length > 0) {
    groups.push({
      title: 'Compare With',
      links: relationships.compare,
    });
  }

  if (relationships.alternative && relationships.alternative.length > 0) {
    groups.push({
      title: 'Alternatives',
      links: relationships.alternative,
    });
  }

  return groups;
}

/**
 * Get all calculators that link to a specific calculator (backlinks)
 */
export function getBacklinks(targetSlug: string): SemanticLink[] {
  const backlinks: SemanticLink[] = [];

  for (const [sourceSlug, relationships] of Object.entries(SEMANTIC_RELATIONSHIPS)) {
    for (const linkType of Object.values(relationships)) {
      if (Array.isArray(linkType)) {
        for (const link of linkType) {
          if (link.slug === targetSlug) {
            backlinks.push({
              ...link,
              slug: sourceSlug, // Swap source and target
            });
          }
        }
      }
    }
  }

  return backlinks;
}
