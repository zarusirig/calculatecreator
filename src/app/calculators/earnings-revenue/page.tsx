import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Gift, Banknote, DollarSign, TrendingUp, Users, BarChart3, Target, Clock, Shield, Zap, Calculator, CheckCircle, Lightbulb, Rocket, LineChart, Video, Handshake } from 'lucide-react';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: "TikTok Earnings & Revenue Calculator for Creators",
  description: "Calculate your total TikTok revenue across current and legacy monetization streams. Compare Creator Rewards, brand deals, LIVE gifts, and Shop income in one dashboard.",
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/earnings-revenue/',
  },
};

const calculators = [
  {
    name: 'LIVE Earnings Calculator',
    slug: 'live-earnings',
    description: 'Estimate earnings from TikTok LIVE streaming. Enter viewers, duration, and gifting rate.',
    icon: Gift,
  },
  {
    name: 'Money Calculator',
    slug: 'money',
    href: '/calculators/tiktok-money/',
    description: 'Calculate total earnings from Creator Rewards, brand deals, LIVE gifts, and TikTok Shop in one place.',
    icon: Banknote,
  },
  {
    name: 'Legacy Creator Fund Calculator',
    slug: 'creator-fund',
    href: '/calculators/tiktok-creator-fund/',
    description: "Estimate legacy Creator Fund earnings and compare them with today's broader monetization mix.",
    icon: DollarSign,
  },
];

const earningsByFollowerTier = [
  {
    followers: '5K',
    monthly: '$50-$200',
    breakdown: 'Creator Rewards: $20-$50, Brand Deals: $20-$100, LIVE Gifts: $10-$50',
  },
  {
    followers: '10K',
    monthly: '$150-$500',
    breakdown: 'Creator Rewards: $50-$150, Brand Deals: $80-$300, LIVE Gifts: $20-$50',
  },
  {
    followers: '50K',
    monthly: '$800-$3,000',
    breakdown: 'Creator Rewards: $200-$600, Brand Deals: $500-$2,000, LIVE Gifts: $100-$400',
  },
  {
    followers: '100K',
    monthly: '$2,000-$8,000',
    breakdown: 'Creator Rewards: $400-$1,200, Brand Deals: $1,200-$5,000, LIVE Gifts: $400-$1,800',
  },
  {
    followers: '500K+',
    monthly: '$12,000-$50,000+',
    breakdown: 'Creator Rewards: $2,000-$8,000, Brand Deals: $8,000-$35,000, LIVE Gifts: $2,000-$7,000',
  },
];

const calculatorBenefits = [
  {
    title: 'LIVE Earnings Projections',
    description: 'Calculate hourly and session earnings based on viewer count, gifting rate, and stream duration. Audience size and engagement directly impact LIVE revenue.',
    icon: Gift,
  },
  {
    title: 'Total Revenue Estimation',
    description: 'Combine all income streams (Creator Rewards, brand deals, LIVE gifts, and TikTok Shop) into one earnings forecast. Set realistic monthly income goals.',
    icon: Banknote,
  },
  {
    title: 'Creator Rewards Breakdown',
    description: 'Estimate monthly and annual Creator Rewards earnings based on qualified views, longer videos, and posting consistency.',
    icon: DollarSign,
  },
  {
    title: 'Revenue Optimization',
    description: 'Identify which monetization method provides the best return on effort. Compare Creator Rewards, brand deals, LIVE streaming, and Shop activity to focus your time strategically.',
    icon: TrendingUp,
  },
];

const trackingBenefits = [
  {
    title: 'Set Realistic Income Goals',
    description: 'Understand current earning potential. Create achievable monthly targets based on follower count, engagement rate, and content niche.',
    icon: Target,
  },
  {
    title: 'Identify Revenue Gaps',
    description: 'Discover which monetization streams you are underutilizing. Many creators earn 80% from 1 method when they could diversify for stability.',
    icon: BarChart3,
  },
  {
    title: 'Track Growth Progress',
    description: 'Monitor how earnings increase as you gain followers and improve engagement. Adjust strategy when growth stalls.',
    icon: TrendingUp,
  },
  {
    title: 'Make Data-Driven Decisions',
    description: 'Stop guessing which revenue stream to prioritize. Let actual earnings data guide your content strategy across LIVE streaming, brand partnerships, and view-based program income.',
    icon: Calculator,
  },
];

const revenueStreamComparison = [
  {
    stream: 'Creator Rewards Program',
    icon: DollarSign,
    payRate: '$0.40-$1.00 per 1K views',
    timeInvestment: 'Low (passive)',
    requirements: '10K+ followers, 1+ min videos, high engagement',
    bestFor: 'Consistent content creators posting 3-5x weekly',
    pros: 'Passive income, predictable, scales with views',
    cons: 'Lower than brand deals, requires consistent posting',
    monthlyPotential: '$400-$1,000 at 1M monthly views',
  },
  {
    stream: 'LIVE Gifts',
    icon: Gift,
    payRate: '$50-$200 per hour',
    timeInvestment: 'High (active streaming)',
    requirements: '1K+ followers, 18+ years old',
    bestFor: 'Engaging personalities with loyal communities',
    pros: 'High hourly rate, builds community, immediate payout',
    cons: 'Time-intensive, burnout risk, requires streaming skills',
    monthlyPotential: '$800-$3,200 (4hrs/week)',
  },
  {
    stream: 'TikTok Shop',
    icon: Banknote,
    payRate: '5-20% commission per sale',
    timeInvestment: 'Medium (product promotion)',
    requirements: 'No follower minimum, product fit',
    bestFor: 'Product reviewers, lifestyle creators',
    pros: 'Scales with sales, no follower requirement, high commissions',
    cons: 'Requires product knowledge, audience trust critical',
    monthlyPotential: '$2,000-$10,000+ (with good product-market fit)',
  },
  {
    stream: 'Brand Deals',
    icon: Handshake,
    payRate: '$10-$30 per 1K followers',
    timeInvestment: 'Low per deal (1-3 videos)',
    requirements: '10K+ followers, professional media kit',
    bestFor: 'Niche authorities with engaged audiences',
    pros: 'Highest per-deal income, negotiable rates, creative freedom',
    cons: 'Inconsistent, requires outreach/negotiation, taxes brand trust',
    monthlyPotential: '$1,000-$5,000 at 100K followers (1-2 deals/month)',
  },
];

const maximizeEarningsStrategies = [
  {
    title: 'Diversify Revenue Streams',
    description: 'Top creators earn from 4 to 6 different sources, not just 1. Combine Creator Rewards for passive income, 1 to 2 brand deals monthly for high payouts, weekly LIVE sessions for community building, and TikTok Shop for scalable commissions. This protects against algorithm changes and platform policy shifts.',
    icon: Lightbulb,
    actionItems: [
      'Set up Creator Rewards if you have 10,000 or more followers',
      'Apply to TikTok Shop Creator Marketplace',
      'Schedule at least 1 LIVE session weekly',
      'Create a media kit and pitch 5 brands in your niche',
    ],
  },
  {
    title: 'Optimize for High-Value Niches',
    description: 'Finance, tech, and B2B creators earn 3 to 5 times more than entertainment creators with the same follower count. Brand budgets in these niches are higher, and audiences have greater purchasing power. Consider adding educational or value-driven content to your mix.',
    icon: Target,
    actionItems: [
      'Research brand deal rates in your current and adjacent niches',
      'Add educational content that solves specific problems',
      'Position yourself as a niche expert, not generalist',
      'Partner with B2B brands for premium sponsorships',
    ],
  },
  {
    title: 'Increase Engagement Rate',
    description: 'Creators with 10% or higher engagement charge 2 to 3 times baseline brand deal rates and see higher Creator Rewards payouts. Engagement signals quality to both algorithms and brands. Focus on community building by responding to comments, creating series content, and asking questions that encourage interaction.',
    icon: Rocket,
    actionItems: [
      'Respond to every comment in the first hour after posting',
      'Use polls, Q&As, and duets to drive interaction',
      'Create series content that brings viewers back',
      'Post at times when your audience is most active',
    ],
  },
  {
    title: 'Track and Optimize Performance',
    description: 'Use analytics to identify your most profitable content types, best posting times, and highest-earning revenue streams. Most creators underestimate earnings by 40% to 60% because they do not track performance. Set up a spreadsheet to log monthly income by source and adjust strategy quarterly.',
    icon: LineChart,
    actionItems: [
      'Track earnings by source in a monthly spreadsheet',
      'Analyze which content types drive most revenue',
      'Calculate your effective hourly rate for each stream',
      'Double down on what works, eliminate what does not',
    ],
  },
];

const faqs = [
  {
    question: 'How much can I earn from TikTok as a creator?',
    answer: 'TikTok earnings vary widely based on follower count, niche, audience location, and which monetization tools you actually use. For most creators, brand deals, LIVE gifts, TikTok Shop, and Creator Rewards all contribute differently. Use this hub to compare streams and build a realistic mix instead of relying on one benchmark.',
  },
  {
    question: 'What is the TikTok Creator Fund and how does it relate to Creator Rewards?',
    answer: "The original Creator Fund is a legacy program. Current monetization guidance centers on Creator Rewards for eligible accounts, while the Fund remains relevant mostly for historical comparisons and any remaining legacy balances. If you want current view-based earnings, focus on Creator Rewards eligibility inside TikTok's creator tools.",
  },
  {
    question: 'How do TikTok LIVE gifts work?',
    answer: 'Viewers purchase coins and send virtual gifts during LIVE streams. Gifts convert to diamonds at roughly 2 coins per 1 diamond. TikTok takes 50%, so you keep about $0.005 per diamond. A streamer with 100 viewers earns $50 to $200 per hour depending on engagement and audience loyalty.',
  },
  {
    question: 'Which TikTok revenue stream pays the most?',
    answer: 'For most creators, brand deals and commerce outperform view-based platform payouts. LIVE gifts can also be meaningful for creators who stream consistently. The highest-value mix depends on your niche, audience trust, and whether your content converts into sponsorships or product sales.',
  },
  {
    question: 'How has the Creator Rewards Program changed TikTok earnings in 2026?',
    answer: "Creator Rewards shifted TikTok's view-based monetization toward longer, original public videos and qualified views. It should be treated as a separate current program, not as if the old Creator Fund were still active. Exact payouts vary by account, audience, and region, so this site now treats program rates as directional rather than fixed promises.",
  },
  {
    question: 'What is TikTok Shop and how much can I earn from it?',
    answer: 'TikTok Shop allows creators to earn commissions by promoting products in videos or LIVE streams. Commission rates vary by product category, market, and program structure. For some creators it becomes a major revenue stream, but actual earnings depend on product fit, conversion quality, and posting consistency.',
  },
  {
    question: 'Do I need a business account to track my TikTok earnings?',
    answer: 'A business account is not required for these calculators. Switching to a business or creator account gives you access to TikTok Analytics. It provides detailed view counts, engagement rates, and follower demographics. This data makes earnings projections more accurate. Switch to a creator account for free in Settings, then Manage Account.',
  },
  {
    question: 'How accurate are TikTok earnings calculators?',
    answer: 'Earnings calculators provide estimates based on platform averages and industry benchmarks. Actual earnings vary by niche (finance pays 3 to 5 times more than general content), audience quality (engaged followers versus passive viewers), and individual monetization strategy. Use calculators as planning tools, not guarantees. Track real earnings over 3 to 6 months for personalized benchmarks.',
  },
  {
    question: 'Should I focus on one revenue stream or diversify?',
    answer: 'Diversification is critical for long-term creator sustainability. Most creators should treat Creator Rewards, brand deals, LIVE, and TikTok Shop as separate levers rather than depending on any single stream. This reduces risk when platform policies, reach, or advertiser demand changes.',
  },
  {
    question: 'How can I transition from part-time to full-time TikTok creator?',
    answer: 'Build a financial runway of 6 to 12 months of expenses before going full-time. Aim for consistent monthly earnings of 1.5 to 2 times your current salary for at least 6 months. This accounts for income variability and self-employment taxes (25% to 30% of gross income). Diversify revenue streams so no single source accounts for more than 50% of income. Set up quarterly tax payments, track all business expenses for deductions, and maintain separate personal and business accounts. Most successful full-time creators have 50,000 or more followers and earn from at least 3 different monetization methods.',
  },
];

export default function EarningsRevenuePage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Earnings & Revenue Calculators"
        description="Free calculators to estimate TikTok creator earnings from LIVE gifts, Creator Rewards, legacy Creator Fund comparisons, brand deals, and total revenue across all monetization streams."
        url="https://tiktokcalculator.net/calculators/earnings-revenue/"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net' },
          { name: 'Calculators', url: 'https://tiktokcalculator.net/calculators/' },
          { name: 'Earnings & Revenue', url: 'https://tiktokcalculator.net/calculators/earnings-revenue/' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators/' },
            { label: 'Earnings & Revenue', href: '/calculators/earnings-revenue/' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Earnings & Revenue Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate TikTok earnings from all major revenue streams. Compare Creator Rewards, legacy Fund context, LIVE gifts, brand deals, and TikTok Shop commissions in one place. Use the calculators as planning tools to understand which monetization mix offers the best return on your time and effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={(calc as any).href || `/calculators/earnings-revenue/${calc.slug}`}
              className="card card-hover p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <calc.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h2>
                  <p className="text-body-sm text-neutral-600">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          {/* 2026 Earnings Landscape */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary-600" />
              <h2 className="text-heading-lg font-semibold text-neutral-900">2026 TikTok Earnings Landscape</h2>
            </div>
            <p className="text-body-md text-neutral-700 mb-6">
              TikTok monetization now spans multiple products instead of one simple payout system. The important shift is not a single headline RPM, but how creators combine Creator Rewards, sponsorships, commerce, and LIVE revenue into a workable income mix.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-lg border border-primary-200">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-neutral-900">Creator Rewards Program Upgrade</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  Creator Rewards is the current view-based monetization program for eligible creators. It should be evaluated separately from the legacy Creator Fund, and exact payouts depend on qualified views, region, audience quality, and the account's standing.
                </p>
                <p className="text-body-sm text-neutral-600">
                  Common requirements include 10,000 followers, 100,000 recent views, and original public videos over one minute, but creators should verify the latest in-app rules before treating any benchmark as current policy.
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg border border-primary-200">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-neutral-900">TikTok Shop Explosion</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  TikTok Shop is often one of the strongest non-ad revenue streams because it converts content into affiliate or seller income. Earnings vary widely by product fit, audience trust, and the creator's ability to produce repeatable commerce content.
                </p>
                <p className="text-body-sm text-neutral-600">
                  LIVE shopping can outperform static content for some categories, but the actual upside depends on audience intent, offer quality, and whether viewers are already comfortable buying through TikTok.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-body-sm text-blue-900">
                <strong>Key Insight:</strong> Diversification is critical. Top-earning creators in 2026 generate income from 4 to 6 different streams. This ensures stability when platforms change policies or algorithms.
              </p>
            </div>
          </Card>

          {/* Earnings by Follower Tier */}
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monthly Earnings by Follower Tier</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Review real-world earnings data for TikTok creators at different follower milestones. These estimates combine Creator Rewards, brand deals, LIVE gifts, and TikTok Shop affiliate commissions based on 2026 benchmarks.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-4 font-semibold text-neutral-900">Follower Count</th>
                    <th className="text-left p-4 font-semibold text-neutral-900">Monthly Earnings</th>
                    <th className="text-left p-4 font-semibold text-neutral-900">Revenue Breakdown</th>
                  </tr>
                </thead>
                <tbody>
                  {earningsByFollowerTier.map((tier, idx) => (
                    <tr key={idx} className="border-b border-neutral-200">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary-600" />
                          <span className="font-semibold text-neutral-900">{tier.followers} Followers</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-lg font-bold text-primary-600">{tier.monthly}</span>
                      </td>
                      <td className="p-4">
                        <p className="text-body-sm text-neutral-700">{tier.breakdown}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm text-neutral-600">
                <strong>Note:</strong> Actual earnings vary by niche (finance and tech creators earn 2 to 3 times more than entertainment), engagement rate (6% or higher earns premium brand deals), and content quality. These figures represent averages across all niches.
              </p>
            </div>
          </Card>

          {/* Revenue Stream Comparison */}
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Revenue Stream Comparison: Which Pays Best?</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Understand the tradeoffs between Creator Rewards, LIVE gifts, TikTok Shop, and brand deals. Allocate time strategically. Each revenue stream has different pay rates, time investments, and requirements.
            </p>
            <div className="space-y-4">
              {revenueStreamComparison.map((stream, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-neutral-50 to-white rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <stream.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">{stream.stream}</h3>
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                        <div>
                          <span className="text-body-xs font-semibold text-neutral-600">Pay Rate: </span>
                          <span className="text-body-sm text-neutral-900">{stream.payRate}</span>
                        </div>
                        <div>
                          <span className="text-body-xs font-semibold text-neutral-600">Time Investment: </span>
                          <span className="text-body-sm text-neutral-900">{stream.timeInvestment}</span>
                        </div>
                        <div>
                          <span className="text-body-xs font-semibold text-neutral-600">Requirements: </span>
                          <span className="text-body-sm text-neutral-900">{stream.requirements}</span>
                        </div>
                        <div>
                          <span className="text-body-xs font-semibold text-neutral-600">Best For: </span>
                          <span className="text-body-sm text-neutral-900">{stream.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-neutral-200">
                    <div>
                      <p className="text-body-xs font-semibold text-green-700 mb-1">Pros</p>
                      <p className="text-body-sm text-neutral-700">{stream.pros}</p>
                    </div>
                    <div>
                      <p className="text-body-xs font-semibold text-red-700 mb-1">Cons</p>
                      <p className="text-body-sm text-neutral-700">{stream.cons}</p>
                    </div>
                    <div>
                      <p className="text-body-xs font-semibold text-primary-700 mb-1">Monthly Potential</p>
                      <p className="text-body-sm font-semibold text-primary-600">{stream.monthlyPotential}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-body-sm text-blue-900">
                <strong>Strategic Insight:</strong> Most successful creators combine all 4 streams. Use Creator Rewards for passive baseline income. Use brand deals for high-value payouts. Use LIVE gifts for community building. Use TikTok Shop for scalable commissions. This diversification protects against platform changes and maximizes total earnings.
              </p>
            </div>
          </Card>

          {/* Maximize Your Earnings */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-green-600" />
              <h2 className="text-heading-lg font-semibold text-neutral-900">Maximize Your TikTok Earnings</h2>
            </div>
            <p className="text-body-md text-neutral-700 mb-6">
              Strategic creators earn 3 to 5 times more than those who post randomly. These proven strategies help you optimize revenue across all monetization streams.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {maximizeEarningsStrategies.map((strategy, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg border-2 border-green-200 hover:border-green-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                      <strategy.icon size={20} />
                    </div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900">{strategy.title}</h3>
                  </div>
                  <p className="text-body-sm text-neutral-700 mb-4">{strategy.description}</p>
                  <div className="space-y-2">
                    <p className="text-body-xs font-semibold text-green-700 mb-2">Action Steps:</p>
                    <ul className="space-y-1.5">
                      {strategy.actionItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-body-xs text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
              <p className="text-body-sm text-yellow-900">
                <strong>Reality Check:</strong> Building sustainable creator income takes 6 to 12 months of consistent effort. Focus on 1 new revenue stream per quarter. Avoid trying to activate everything at once. Most creators see breakthrough earnings growth between months 8 to 14.
              </p>
            </div>
          </Card>

          {/* How These Calculators Work */}
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How These Calculators Work</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              These earnings calculators use real-world data from thousands of TikTok creators, platform payment structures, and current industry benchmarks. They provide accurate income estimates.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {calculatorBenefits.map((benefit, idx) => (
                <div key={idx} className="p-5 bg-gradient-to-br from-neutral-50 to-primary-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <benefit.icon size={20} />
                    </div>
                    <h3 className="font-semibold text-neutral-900">{benefit.title}</h3>
                  </div>
                  <p className="text-body-sm text-neutral-700">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-body-sm text-neutral-700">
                  All calculators are updated monthly with the latest Creator Rewards rates, brand deal benchmarks, and TikTok Shop commission structures to ensure accuracy.
                </p>
              </div>
            </div>
          </Card>

          {/* Why Track Your Earnings */}
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Track Your TikTok Earnings</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Most creators underestimate earning potential by 40% to 60% because they do not track income across all revenue streams. Regular earnings analysis helps maximize creator income and make strategic decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {trackingBenefits.map((benefit, idx) => (
                <div key={idx} className="p-5 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-neutral-900">{benefit.title}</h3>
                  </div>
                  <p className="text-body-sm text-neutral-700">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-body-sm text-neutral-700">
                <strong>Pro Tip:</strong> Set up a spreadsheet to track actual earnings against calculator projections. After 3 months, you have personalized conversion rates that make future estimates 80% or more accurate for your specific audience.
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 mb-12">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/brand-deal-rate/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Influencer Pricing Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate brand deal rates based on followers and engagement</p>
              </Link>
              <Link href="/calculators/diamond-converter/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Diamonds Calculator</h4>
                <p className="text-body-sm text-neutral-700">Convert diamonds from LIVE gifts to real money</p>
              </Link>
              <Link href="/calculators/utility-tools/payout/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Payout Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate net earnings after platform fees</p>
              </Link>
              <Link href="/guides/how-to-make-money-on-tiktok/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Monetization Guide</h4>
                <p className="text-body-sm text-neutral-700">Complete guide to earning money on TikTok</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Earnings & Revenue Calculators" />
        </div>
      </div>
    </div>
    </>
  );
}
