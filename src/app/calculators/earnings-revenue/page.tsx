import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Gift, Banknote, DollarSign, TrendingUp, Users, BarChart3, Target, Clock, Shield, Zap, Calculator, CheckCircle } from 'lucide-react';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'Earnings & Revenue Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok earnings from LIVE gifts, Creator Fund, and total revenue. Free tools to estimate your creator income.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/earnings-revenue/',
  },
};

const calculators = [
  {
    name: 'LIVE Earnings Calculator',
    slug: 'live-earnings',
    description: 'Estimate earnings from TikTok LIVE streaming based on viewers, duration, and gifting rate.',
    icon: Gift,
  },
  {
    name: 'Money Calculator',
    slug: 'money',
    description: 'Calculate total earnings from all monetization streams: Creator Fund, brand deals, and LIVE gifts.',
    icon: Banknote,
  },
  {
    name: 'Creator Fund Calculator',
    slug: 'creator-fund',
    description: 'Estimate monthly and annual earnings from the TikTok Creator Fund based on views and engagement.',
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
    description: 'Calculate hourly and session earnings based on viewer count, gifting rate, and stream duration. Understand how audience size and engagement directly impact LIVE revenue.',
    icon: Gift,
  },
  {
    title: 'Total Revenue Estimation',
    description: 'Combine all income streams—Creator Rewards, brand deals, LIVE gifts, and TikTok Shop—into one comprehensive earnings forecast to set realistic monthly income goals.',
    icon: Banknote,
  },
  {
    title: 'Creator Fund Breakdown',
    description: 'Estimate monthly and annual Creator Rewards earnings based on video views, engagement rate, and content frequency. See how consistent posting affects passive income.',
    icon: DollarSign,
  },
  {
    title: 'Revenue Optimization',
    description: 'Identify which monetization method provides the best return on effort. Compare Creator Fund vs brand deals vs LIVE streaming to focus your time strategically.',
    icon: TrendingUp,
  },
];

const trackingBenefits = [
  {
    title: 'Set Realistic Income Goals',
    description: 'Understand your current earning potential and create achievable monthly targets based on your follower count, engagement rate, and content niche.',
    icon: Target,
  },
  {
    title: 'Identify Revenue Gaps',
    description: 'Discover which monetization streams you are underutilizing. Many creators earn 80% from one method when they could diversify for stability.',
    icon: BarChart3,
  },
  {
    title: 'Track Growth Progress',
    description: 'Monitor how earnings increase as you gain followers and improve engagement. Celebrate milestones and adjust strategy when growth stalls.',
    icon: TrendingUp,
  },
  {
    title: 'Make Data-Driven Decisions',
    description: 'Stop guessing whether to focus on LIVE streaming, brand partnerships, or Creator Fund. Let actual earnings data guide your content strategy.',
    icon: Calculator,
  },
];

const faqs = [
  {
    question: 'How much can I earn from TikTok as a creator?',
    answer: 'TikTok earnings vary widely based on follower count and monetization strategy. Micro-influencers (10K-50K followers) typically earn $160-$750/month, mid-tier creators (50K-500K) earn $1,200-$12,000/month, and large creators (500K+) can earn $11,000-$50,000+ monthly when combining Creator Fund, brand deals, and LIVE gifts.',
  },
  {
    question: 'What is the TikTok Creator Fund and how much does it pay?',
    answer: 'The Creator Fund pays $0.02-$0.04 per 1,000 views (average $0.03). To qualify, you need 10K+ followers, 100K+ views in the last 30 days, be 18+, and live in an eligible country. While payments are low compared to YouTube, it provides passive income while you focus on brand deals and LIVE streaming.',
  },
  {
    question: 'How do TikTok LIVE gifts work?',
    answer: 'Viewers purchase coins and send virtual gifts during your LIVE streams. Gifts convert to diamonds at roughly 2 coins = 1 diamond. TikTok takes 50%, so you keep about $0.005 per diamond. A streamer with 100 viewers can earn $50-$200 per hour depending on engagement and audience loyalty.',
  },
  {
    question: 'Which TikTok revenue stream pays the most?',
    answer: 'Brand deals generate the highest income for most creators, typically 10-50× more than Creator Fund for the same audience size. A creator with 100K followers earning $30/month from Creator Fund can charge $1,000-$3,000 per brand deal. However, LIVE gifts can be most lucrative for highly engaging personalities.',
  },
  {
    question: 'How has the Creator Rewards Program changed TikTok earnings in 2026?',
    answer: 'The Creator Rewards Program (formerly Creator Fund) pays significantly better rates in 2026: $0.40-$1.00 per 1,000 views versus the old $0.02-$0.04. This 10-20× increase means a creator with 1 million monthly views can now earn $400-$1,000 instead of just $20-$40. The program prioritizes longer videos (1+ minute) and higher engagement content.',
  },
  {
    question: 'What is TikTok Shop and how much can I earn from it?',
    answer: 'TikTok Shop allows creators to earn commissions by promoting products in videos or LIVE streams. Commission rates typically range from 5-20% depending on the product category. With TikTok Shop GMV (Gross Merchandise Value) reaching $40 billion in 2026 (145% YoY growth), top affiliates earn $5,000-$50,000+ monthly from Shop commissions alone.',
  },
  {
    question: 'Do I need a business account to track my TikTok earnings?',
    answer: 'While not required for these calculators, switching to a business or creator account gives you access to TikTok Analytics, which provides detailed view counts, engagement rates, and follower demographics. This data makes earnings projections more accurate. You can switch to a creator account for free in Settings > Manage Account.',
  },
  {
    question: 'How accurate are TikTok earnings calculators?',
    answer: 'Earnings calculators provide estimates based on platform averages and industry benchmarks. Actual earnings vary by niche (finance pays 3-5× more than general content), audience quality (engaged followers vs passive viewers), and individual monetization strategy. Use calculators as planning tools, not guarantees. Track your real earnings over 3-6 months for personalized benchmarks.',
  },
];

export default function EarningsRevenuePage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Earnings & Revenue Calculators"
        description="Free calculators to estimate TikTok creator earnings from LIVE gifts, Creator Fund, brand deals, and total revenue across all monetization streams."
        url="https://calculatecreator.com/calculators/earnings-revenue"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Earnings & Revenue', url: 'https://calculatecreator.com/calculators/earnings-revenue' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Earnings & Revenue', href: '/calculators/earnings-revenue' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Earnings & Revenue Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your TikTok earnings from all revenue streams including Creator Fund ($0.02-$0.04/1K views), LIVE gifts (50% payout), brand deals ($10-$30/1K followers), and TikTok Shop commissions. These tools help creators estimate monthly and annual income potential based on real-world benchmarks, allowing you to understand which monetization method offers the best return on your time and effort investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/earnings-revenue/${calc.slug}`}
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
              The creator economy has transformed dramatically in 2026. TikTok's monetization infrastructure has matured, offering creators multiple high-paying revenue streams that rival YouTube and Instagram.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-lg border border-primary-200">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-neutral-900">Creator Rewards Program Upgrade</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  TikTok's Creator Rewards Program now pays <strong>$0.40-$1.00 per 1,000 views</strong> (up from the old Creator Fund's $0.02-$0.04). This 10-20× increase means creators with 1M monthly views earn $400-$1,000 instead of just $20-$40.
                </p>
                <p className="text-body-sm text-neutral-600">
                  Requirements: 10K+ followers, 1-minute+ videos, high engagement rate. Longer-form content (3-10 minutes) earns premium rates.
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg border border-primary-200">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-neutral-900">TikTok Shop Explosion</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">
                  TikTok Shop has grown <strong>145% year-over-year</strong>, reaching <strong>$40 billion GMV</strong> in 2026. Creators earn 5-20% commission on sales, with top affiliates making $10,000-$100,000+ monthly.
                </p>
                <p className="text-body-sm text-neutral-600">
                  LIVE shopping events consistently outperform static posts, with conversion rates 3-5× higher during live streams.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-body-sm text-blue-900">
                <strong>Key Insight:</strong> Diversification is critical. Top-earning creators in 2026 generate income from 4-6 different streams, ensuring stability when individual platforms change policies or algorithms.
              </p>
            </div>
          </Card>

          {/* Earnings by Follower Tier */}
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monthly Earnings by Follower Tier</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Real-world earnings data for TikTok creators at different follower milestones. These estimates combine Creator Rewards, brand deals, LIVE gifts, and TikTok Shop affiliate commissions based on 2026 benchmarks.
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
                <strong>Note:</strong> Actual earnings vary by niche (finance/tech creators earn 2-3× more than entertainment), engagement rate (6%+ earns premium brand deals), and content quality. These figures represent averages across all niches.
              </p>
            </div>
          </Card>

          {/* How These Calculators Work */}
          <Card className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How These Calculators Work</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Our earnings calculators use real-world data from thousands of TikTok creators, platform payment structures, and current industry benchmarks to provide accurate income estimates.
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
              Most creators underestimate their earning potential by 40-60% because they don't track income across all revenue streams. Regular earnings analysis helps you maximize creator income and make strategic decisions.
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
                <strong>Pro Tip:</strong> Set up a simple spreadsheet to track actual earnings against calculator projections. After 3 months, you'll have personalized conversion rates that make future estimates 80%+ accurate for your specific audience.
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 mb-12">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/engagement-influence/influencer-pricing" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Influencer Pricing Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate brand deal rates based on followers and engagement</p>
              </Link>
              <Link href="/calculators/coins-gifts-diamonds/diamonds" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Diamonds Calculator</h4>
                <p className="text-body-sm text-neutral-700">Convert diamonds from LIVE gifts to real money</p>
              </Link>
              <Link href="/calculators/utility-tools/payout" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Payout Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate net earnings after platform fees</p>
              </Link>
              <Link href="/guides/how-to-make-money-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
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
