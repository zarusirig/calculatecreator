export interface ToolDirectoryItem {
  title: string;
  href: string;
  description: string;
  platform: string;
  goal: 'Earnings' | 'Engagement' | 'Growth' | 'Business';
  metric: string;
  updatedAt: string;
  popular?: boolean;
  isNew?: boolean;
}

export interface GuideItem {
  title: string;
  href: string;
  excerpt: string;
  readingTime: string;
  updatedAt: string;
}

export const toolDirectoryItems: ToolDirectoryItem[] = [
  {
    title: 'Money Calculator',
    href: '/calculators/tiktok-money/',
    description: 'Estimate monthly creator earnings across ads, brand deals, and LIVE revenue.',
    platform: 'TikTok',
    goal: 'Earnings',
    metric: 'Revenue / month',
    updatedAt: 'Jan 31, 2026',
    popular: true,
  },
  {
    title: 'Creator Fund Calculator',
    href: '/calculators/tiktok-creator-fund/',
    description: 'Estimate historical Creator Fund payouts and compare the legacy model with current TikTok monetization paths.',
    platform: 'TikTok',
    goal: 'Earnings',
    metric: 'RPM',
    updatedAt: 'Jan 31, 2026',
    popular: true,
  },
  {
    title: 'Engagement Rate Calculator',
    href: '/calculators/engagement-rate/',
    description: 'Calculate and benchmark your engagement rate with clear assumptions.',
    platform: 'TikTok',
    goal: 'Engagement',
    metric: 'Engagement rate',
    updatedAt: 'Nov 13, 2025',
    popular: true,
  },
  {
    title: 'Brand Deal Rate Calculator',
    href: '/calculators/brand-deal-rate/',
    description: 'Estimate deal pricing with follower tiers, niche ranges, and deliverables.',
    platform: 'TikTok',
    goal: 'Earnings',
    metric: 'Rate per deal',
    updatedAt: 'Nov 13, 2025',
    popular: true,
  },
  {
    title: 'RPM Calculator',
    href: '/calculators/rpm/',
    description: 'Benchmark revenue per 1,000 views and compare your monetization efficiency.',
    platform: 'TikTok',
    goal: 'Earnings',
    metric: 'RPM',
    updatedAt: 'Dec 5, 2025',
    popular: true,
  },
  {
    title: 'Watch Time Calculator',
    href: '/calculators/watch-time/',
    description: 'Track watch time and retention to understand what your audience actually keeps.',
    platform: 'TikTok',
    goal: 'Engagement',
    metric: 'Watch time',
    updatedAt: 'Dec 5, 2025',
  },
  {
    title: 'Completion Rate Calculator',
    href: '/calculators/completion-rate/',
    description: 'Measure how many viewers finish your videos and where to optimize.',
    platform: 'TikTok',
    goal: 'Engagement',
    metric: 'Completion rate',
    updatedAt: 'Nov 13, 2025',
  },
  {
    title: 'Follower Growth Calculator',
    href: '/calculators/follower-growth/',
    description: 'Project follower growth using posting frequency and conversion assumptions.',
    platform: 'TikTok',
    goal: 'Growth',
    metric: 'Follower growth',
    updatedAt: 'Nov 13, 2025',
  },
  {
    title: 'Audience Overlap Calculator',
    href: '/calculators/audience-overlap/',
    description: 'Estimate overlap between creator audiences to assess collaboration and sponsorship fit.',
    platform: 'TikTok',
    goal: 'Growth',
    metric: 'Audience overlap',
    updatedAt: 'Feb 24, 2026',
  },
  {
    title: 'Viral Potential Calculator',
    href: '/calculators/viral-potential/',
    description: 'Score content potential from saves, shares, and completion behavior.',
    platform: 'TikTok',
    goal: 'Growth',
    metric: 'Viral score',
    updatedAt: 'Dec 5, 2025',
    isNew: true,
  },
  {
    title: 'Shop Commission Calculator',
    href: '/calculators/commerce-ads/shop-profit/',
    description: 'Estimate affiliate and shop commissions with volume and margin assumptions.',
    platform: 'TikTok Shop',
    goal: 'Business',
    metric: 'Commission',
    updatedAt: 'Nov 13, 2025',
  },
  {
    title: 'Sponsorship ROI Calculator',
    href: '/calculators/sponsorship-roi/',
    description: 'Evaluate campaign ROI and payback expectations for paid collaborations.',
    platform: 'Brand Partnerships',
    goal: 'Business',
    metric: 'ROI',
    updatedAt: 'Nov 13, 2025',
  },
  {
    title: 'Creator Tax Calculator',
    href: '/calculators/utility-tools/tax/',
    description: 'Estimate tax set-aside based on region and creator income profile.',
    platform: 'Creator Business',
    goal: 'Business',
    metric: 'Estimated tax',
    updatedAt: 'Nov 13, 2025',
  },
  {
    title: 'Multi-Platform Earnings',
    href: '/calculators/multi-platform-earnings/',
    description: 'Compare expected earnings across TikTok, YouTube, and Instagram.',
    platform: 'Multi-platform',
    goal: 'Earnings',
    metric: 'Cross-platform',
    updatedAt: 'Nov 13, 2025',
    isNew: true,
  },
];

export const featuredGuides: GuideItem[] = [
  {
    title: 'How to Build a Creator Revenue Model',
    href: '/guides/monetization-calculator-hub/',
    excerpt: 'A practical framework for modeling creator earnings with transparent assumptions.',
    readingTime: '9 min read',
    updatedAt: 'Jan 2026',
  },
  {
    title: 'TikTok Growth Systems That Scale',
    href: '/guides/tiktok-growth-hub/',
    excerpt: 'Turn weekly output into a predictable growth loop with metrics that matter.',
    readingTime: '8 min read',
    updatedAt: 'Jan 2026',
  },
  {
    title: 'TikTok Ads and Commerce Playbook',
    href: '/guides/tiktok-ads-hub/',
    excerpt: 'Understand ad economics and product margins before scaling spend.',
    readingTime: '11 min read',
    updatedAt: 'Dec 2025',
  },
];

export const benchmarkStats = [
  {
    value: '$0.02-$0.05',
    label: 'Typical Creator RPM',
    note: 'Based on commonly reported ranges',
  },
  {
    value: '2%-8%',
    label: 'Typical Engagement Range',
    note: 'Varies by niche and format',
  },
  {
    value: 'Ongoing',
    label: 'Method updates',
    note: 'Assumptions are revised when sources or platform rules materially change',
  },
];

export const homeFaqs = [
  {
    question: 'How accurate is the TikTok calculator?',
    answer:
      'Our TikTok calculator provides directional estimates based on your actual metrics and commonly reported payout ranges. Results are not guarantees — they reflect what creators in similar niches and follower tiers typically report.',
  },
  {
    question: 'How does the TikTok money calculator estimate earnings?',
    answer:
      'The TikTok money calculator combines your view count, engagement rate, content niche, and audience geography to estimate earnings across Creator Fund payouts, brand deals, LIVE gifts, and TikTok Shop commissions.',
  },
  {
    question: 'Is this TikTok calculator really free?',
    answer:
      'Yes. All 35+ TikTok calculators are completely free with no signup, no email gate, and no limits. Your inputs stay in your browser and are never stored or shared.',
  },
  {
    question: 'How often is the TikTok calculator updated?',
    answer:
      'We update calculator assumptions when TikTok changes its payout structure, Creator Fund rates, or monetization rules. Benchmark data is reviewed regularly against the latest reported creator earnings.',
  },
  {
    question: 'What TikTok calculators are available?',
    answer:
      'We offer 35+ calculators including TikTok Money Calculator, Engagement Rate Calculator, Brand Deal Rate Calculator, RPM Calculator, Creator Fund Calculator, Coin Converter, LIVE Gift Calculator, Shop Commission Calculator, Follower Growth Calculator, and more.',
  },
  {
    question: 'Can I see the methodology behind each TikTok calculator?',
    answer:
      'Every TikTok calculator on this site shows its assumptions, data sources, and calculation methodology. You can see exactly how your estimate is calculated and what factors change the result.',
  },
];
