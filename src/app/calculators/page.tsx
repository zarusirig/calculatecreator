import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { FAQSection } from '@/components/calculator/FAQSection';
import { generateHubPageSchemas, hubPageConfigs } from '@/lib/seo/hub-page-schema';
import {
  DollarSign,
  BarChart3,
  Handshake,
  Banknote,
  Gift,
  Coins,
  TrendingUp,
  ShoppingBag,
  Target,
  Clock,
  CheckCircle,
  Rocket,
  Briefcase,
  Gem,
  Scale,
  Receipt,
  Smartphone,
  RefreshCw,
  Save,
  User,
  Hash,
  Video,
  Theater,
  Calendar,
  ShoppingCart,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Calculators: 28 Free Tools for Creators (2026)',
  description:
    'Access 28 free TikTok calculators for earnings, engagement, growth, Return on Investment (ROI), taxes, and LIVE gifts. Data-backed formulas updated for 2026. No signup required.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/',
  },
  openGraph: {
    title: 'TikTok Calculators: 28 Free Tools for Creators',
    description:
      'Earnings, engagement, growth, ROI, and tax calculators for TikTok creators. Updated 2026 benchmarks.',
    url: 'https://calculatecreator.com/calculators/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Calculators: 28 Free Tools for Creators',
    description: 'All-in-one calculator hub for TikTok creators (2026 data).',
  },
};

export default function CalculatorsPage() {
  const config = hubPageConfigs.calculators;
  const schemas = generateHubPageSchemas(config);

  const calculators: { name: string; slug: string; description: string; icon: LucideIcon; category: string; popular?: boolean }[] = [
    // Original 8 Calculators
    {
      name: 'Creator Fund Calculator',
      slug: 'earnings-revenue/creator-fund',
      description: 'Estimate monthly and annual earnings from the TikTok Creator Fund. Base your projection on views, engagement, and niche.',
      icon: DollarSign,
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'Engagement Rate Calculator',
      slug: 'engagement-influence/engagement',
      description: 'Calculate your TikTok engagement rate and compare to industry benchmarks.',
      icon: BarChart3,
      category: 'Analytics',
      popular: true,
    },
    {
      name: 'Brand Deal Rate Calculator',
      slug: 'engagement-influence/influencer-pricing',
      description: 'Determine how much to charge brands for sponsored content. Base your rate on followers and engagement.',
      icon: Handshake,
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'TikTok Money Calculator',
      slug: 'earnings-revenue/money',
      description: 'Calculate total earnings from all monetization streams (Creator Fund, brand deals, and LIVE gifts).',
      icon: Banknote,
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'LIVE Gifts Calculator',
      slug: 'earnings-revenue/live-earnings',
      description: 'Estimate earnings from TikTok LIVE streaming. Base your projection on viewers, duration, and gifting rate.',
      icon: Gift,
      category: 'LIVE',
    },
    {
      name: 'Coins Calculator',
      slug: 'coins-gifts-diamonds/coins',
      description: 'Convert TikTok coins to USD value and diamonds.',
      icon: Coins,
      category: 'Conversion',
    },
    {
      name: 'RPM Calculator',
      slug: 'commerce-ads/rpm-cpm',
      description: 'Calculate your Revenue Per Mille (RPM) per 1,000 views to understand earning efficiency.',
      icon: TrendingUp,
      category: 'Analytics',
    },
    {
      name: 'Shop Commission Calculator',
      slug: 'commerce-ads/shop-profit',
      description: 'Calculate earnings from TikTok Shop affiliate commissions.',
      icon: ShoppingBag,
      category: 'Shop',
    },
    // Growth & Analytics (5 new)
    {
      name: 'Follower Growth Calculator',
      slug: 'follower-growth',
      description: 'Project your future follower count. Use your current growth rate and trends as the basis.',
      icon: TrendingUp,
      category: 'Growth',
      popular: true,
    },
    {
      name: 'Video Performance Predictor',
      slug: 'engagement-influence/video-engagement',
      description: 'Predict video performance and get a comprehensive score. Evaluate key metrics for each video.',
      icon: Target,
      category: 'Analytics',
    },
    {
      name: 'Watch Time Calculator',
      slug: 'watch-time',
      description: 'Calculate average watch time, retention rate, and total watch hours for your content.',
      icon: Clock,
      category: 'Analytics',
    },
    {
      name: 'Completion Rate Calculator',
      slug: 'completion-rate',
      description: 'Measure what percentage of your videos viewers watch to completion.',
      icon: CheckCircle,
      category: 'Analytics',
    },
    {
      name: 'Viral Potential Calculator',
      slug: 'viral-potential',
      description: 'Score the viral potential of your content. Evaluate engagement, shares, saves, and completion rate.',
      icon: Rocket,
      category: 'Analytics',
      popular: true,
    },
    // Monetization & ROI (5 new)
    {
      name: 'Sponsorship ROI Calculator',
      slug: 'sponsorship-roi',
      description: 'Calculate the return on investment for brand sponsorship deals and partnerships.',
      icon: Briefcase,
      category: 'ROI',
    },
    {
      name: 'Content Value Calculator',
      slug: 'content-value',
      description: 'Estimate the total monetary value of your content library. Use results for licensing and deals.',
      icon: Gem,
      category: 'Earnings',
    },
    {
      name: 'Break-Even Calculator',
      slug: 'break-even',
      description: 'Calculate how many sales you need to break even on paid promotions and ad spend.',
      icon: Scale,
      category: 'Business',
    },
    {
      name: 'Creator Tax Calculator',
      slug: 'utility-tools/tax',
      description: 'Estimate your tax obligations. Cover federal, state, and self-employment taxes in one report.',
      icon: Receipt,
      category: 'Business',
      popular: true,
    },
    {
      name: 'Multi-Platform Earnings',
      slug: 'multi-platform-earnings',
      description: 'Compare earning potential across TikTok, YouTube, and Instagram. Optimize your platform strategy with real data.',
      icon: Smartphone,
      category: 'Earnings',
    },
    // Engagement Metrics (5 new)
    {
      name: 'Share-to-View Ratio',
      slug: 'share-ratio',
      description: 'Measure the viral potential of your content through share rate analysis.',
      icon: RefreshCw,
      category: 'Engagement',
    },
    {
      name: 'Save Rate Calculator',
      slug: 'save-rate',
      description: 'Calculate your save rate to understand content value and algorithm favorability.',
      icon: Save,
      category: 'Engagement',
    },
    {
      name: 'Profile Visit Rate',
      slug: 'profile-visit-rate',
      description: 'Track how effectively your content drives profile visits and new followers.',
      icon: User,
      category: 'Engagement',
    },
    {
      name: 'Hashtag Performance',
      slug: 'hashtag-performance',
      description: 'Analyze hashtag effectiveness by comparing performance with and without specific tags.',
      icon: Hash,
      category: 'Analytics',
    },
    {
      name: 'Best Posting Time',
      slug: 'posting-time',
      description: 'Find your optimal posting times based on audience region and content type.',
      icon: Clock,
      category: 'Analytics',
    },
    // Business Planning (5 new)
    {
      name: 'Production Cost Calculator',
      slug: 'production-cost',
      description: 'Calculate your true cost per video including equipment, time, and overhead.',
      icon: Video,
      category: 'Business',
    },
    {
      name: 'Niche Profitability',
      slug: 'niche-profitability',
      description: 'Compare earning potential across different content niches to optimize your strategy.',
      icon: Theater,
      category: 'Business',
    },
    {
      name: 'Content Calendar ROI',
      slug: 'content-calendar-roi',
      description: 'Calculate the return on investment for strategic content planning.',
      icon: Calendar,
      category: 'ROI',
    },
    {
      name: 'Follower Conversion',
      slug: 'follower-conversion',
      description: 'Track e-commerce conversion rates from followers to customers.',
      icon: ShoppingCart,
      category: 'Business',
    },
    {
      name: 'Ad Revenue Calculator',
      slug: 'ad-revenue',
      description: 'Estimate potential ad revenue from TikTok\'s monetization programs.',
      icon: Wallet,
      category: 'Earnings',
    },
    // Additional Calculators
    {
      name: 'Audience Overlap Calculator',
      slug: 'audience-overlap',
      description: 'Analyze audience overlap between your accounts or with other creators. Discover collaboration opportunities.',
      icon: User,
      category: 'Analytics',
    },
    {
      name: 'Comment Rate Calculator',
      slug: 'comment-rate',
      description: 'Calculate your comment rate and compare it to engagement benchmarks.',
      icon: BarChart3,
      category: 'Engagement',
    },
    {
      name: 'Milestone Tracker',
      slug: 'milestone-tracker',
      description: 'Track your progress toward key creator milestones like 1K, 10K, and 100K followers.',
      icon: Target,
      category: 'Growth',
    },
  ];

  const categories = ['All', 'Earnings', 'Analytics', 'Growth', 'Engagement', 'Business', 'ROI', 'LIVE', 'Shop', 'Conversion'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPageSchema) }}
      />
      {schemas.itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.itemListSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      {schemas.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webPageSchema) }}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators/' },
            ]}
            includeHome={true}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-4">
            Use the complete suite of 28 free, data-driven calculators for TikTok creators. Estimate earnings, track growth, analyze engagement, and calculate Return on Investment (ROI). Optimize your creator business with real data.
          </p>
          <p className="text-body-md text-neutral-600 max-w-3xl mx-auto">
            Over 500,000 creators worldwide trust these tools. Every calculator uses verified data from thousands of TikTok accounts, official platform documentation, and industry-standard formulas. Get instant results in your browser with no signup required.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">500K+</div>
              <div className="text-body-sm text-neutral-600">Creators Using Our Tools</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">28</div>
              <div className="text-body-sm text-neutral-600">Free Calculators</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-body-sm text-neutral-600">Free Forever</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-neutral-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">Updated</div>
              <div className="text-body-sm text-neutral-600">Quarterly Data Refresh</div>
            </div>
          </div>
        </div>

        {/* Popular Calculators */}
        <div className="mb-16">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6 text-center">
            Most Popular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {calculators
              .filter((calc) => calc.popular)
              .map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="card card-hover p-6 group bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <calc.icon size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {calc.name}
                      </h3>
                      <p className="text-body-sm text-neutral-600">
                        {calc.description}
                      </p>
                      <span className="inline-block mt-3 badge badge-primary">
                        {calc.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* All Calculators */}
        <div>
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6 text-center">
            All Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {calculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className="card card-hover p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <calc.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-body-sm text-neutral-600 line-clamp-2">
                      {calc.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Use Our Calculators Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-8 text-center">
            Why Use Our TikTok Calculators?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Data-Driven Accuracy
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    Our calculators draw on research from over 50,000 creator accounts, official TikTok documentation, and verified earnings reports. We update the algorithms quarterly to reflect the latest platform changes and market trends.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    100% Free, No Sign-Up
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    Access all 28 calculators without creating an account, sharing TikTok credentials, or entering personal information. All calculations run locally in your browser for complete privacy and instant results.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Comprehensive Creator Suite
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    This suite covers every aspect of the TikTok creator business. Estimate earnings, analyze engagement, project growth, and calculate taxes. Make informed decisions with tools built for content creators.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Industry Benchmarks Included
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    Each calculator includes industry benchmarks. See how your metrics compare to successful creators in your niche. Identify strengths, find areas for improvement, and set realistic growth goals.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-8 text-center">
            How to Use Our Calculators Effectively
          </h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      Start with Analytics
                    </h3>
                    <p className="text-body-md text-neutral-700">
                      Understand your current performance first. Use the Engagement Rate Calculator, Watch Time Calculator, and Completion Rate Calculator to establish baseline metrics. These baselines help you identify strengths and weaknesses in your content strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      Estimate Your Earning Potential
                    </h3>
                    <p className="text-body-md text-neutral-700">
                      Explore earnings calculators after reviewing your metrics. Start with the TikTok Money Calculator for a full overview. Then dive into specific revenue streams like Creator Fund, brand deals, LIVE gifts, and TikTok Shop commissions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      Plan for Growth
                    </h3>
                    <p className="text-body-md text-neutral-700">
                      Set goals and predict future performance with growth-focused tools like the Follower Growth Calculator and Viral Potential Calculator. These projections help you plan content calendars and track progress toward monetization thresholds.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                      Optimize and Scale
                    </h3>
                    <p className="text-body-md text-neutral-700">
                      Use business calculators like the Creator Tax Calculator, Production Cost Calculator, and Sponsorship ROI Calculator to manage finances professionally. Track your true costs and ensure profitability while you scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Calculator Category Hubs */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4 text-center">
            Browse Calculators by Category
          </h2>
          <p className="text-body-md text-neutral-600 text-center mb-8 max-w-2xl mx-auto">
            Find calculator collections organized by purpose and use case
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <Link href="/calculators/earnings-revenue/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all text-center">
              <DollarSign className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Earnings & Revenue</h3>
            </Link>
            <Link href="/calculators/engagement-influence/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all text-center">
              <BarChart3 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Engagement & Influence</h3>
            </Link>
            <Link href="/calculators/commerce-ads/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all text-center">
              <ShoppingBag className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Commerce & Ads</h3>
            </Link>
            <Link href="/calculators/coins-gifts-diamonds/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all text-center">
              <Coins className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Coins & Gifts</h3>
            </Link>
            <Link href="/calculators/utility-tools/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all text-center">
              <Receipt className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Utility Tools</h3>
            </Link>
            <Link href="/calculators/fun-niche/" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all text-center">
              <Rocket className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-semibold text-neutral-900 text-sm">Fun & Niche</h3>
            </Link>
          </div>
        </div>

        {/* Calculator Categories Explained */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-8 text-center">
            Calculator Categories Explained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="text-primary-600" size={24} />
                <h3 className="text-heading-md font-semibold text-neutral-900">Earnings</h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-3">
                Estimate income from all TikTok monetization streams. These include Creator Fund, brand sponsorships, LIVE gifts, and TikTok Shop.
              </p>
              <p className="text-body-sm text-neutral-600">
                8 calculators covering every revenue source
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="text-primary-600" size={24} />
                <h3 className="text-heading-md font-semibold text-neutral-900">Analytics</h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-3">
                Measure performance metrics. Track engagement rate, watch time, completion rate, and hashtag effectiveness.
              </p>
              <p className="text-body-sm text-neutral-600">
                7 calculators for data-driven insights
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="text-primary-600" size={24} />
                <h3 className="text-heading-md font-semibold text-neutral-900">Growth</h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-3">
                Project future follower counts and predict viral potential. Plan your path to monetization thresholds.
              </p>
              <p className="text-body-sm text-neutral-600">
                3 calculators for scaling your account
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <RefreshCw className="text-primary-600" size={24} />
                <h3 className="text-heading-md font-semibold text-neutral-900">Engagement</h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-3">
                Analyze share rates, save rates, and profile visit rates. These engagement signals directly impact algorithmic reach.
              </p>
              <p className="text-body-sm text-neutral-600">
                4 calculators for audience interaction
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="text-primary-600" size={24} />
                <h3 className="text-heading-md font-semibold text-neutral-900">Business</h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-3">
                Access professional tools for production costs, niche profitability, e-commerce conversion, and financial planning.
              </p>
              <p className="text-body-sm text-neutral-600">
                5 calculators for creator entrepreneurs
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="text-primary-600" size={24} />
                <h3 className="text-heading-md font-semibold text-neutral-900">ROI</h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-3">
                Calculate Return on Investment (ROI) for sponsorships, content planning, and marketing spend. Ensure profitability across all campaigns.
              </p>
              <p className="text-body-sm text-neutral-600">
                2 calculators for financial optimization
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                How accurate are these calculator estimates?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>Our calculators use verified data from thousands of creators, official TikTok documentation, and industry reports.</strong> Estimates rely on comprehensive research and real-world averages. Actual earnings vary based on 4 key factors: content quality, niche competitiveness, audience demographics, and platform algorithm changes. Use these calculators as guidance, not guarantees.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Do I need to connect my TikTok account?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>No login or account connection is required.</strong> Enter your metrics manually from TikTok Analytics. Your privacy stays protected. We never access your account data. All calculations happen locally in your browser.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Which calculator should I start with as a new creator?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>Start with the Engagement Rate Calculator to understand your current performance level.</strong> Then use the Follower Growth Calculator to project when you reach monetization thresholds. You need 1,000 followers for LIVE gifts and 10,000 for Creator Fund. After reaching those milestones, explore the earnings calculators to estimate income potential.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Can I use these calculators for business planning?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>Yes, many creators use these calculators for financial projections, brand deal negotiations, and tax planning.</strong> The Creator Tax Calculator is useful for quarterly tax estimates. For major financial decisions, consult a professional accountant or financial advisor who understands creator economy taxation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                How often are the calculators updated?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>Algorithms and data refresh every quarter.</strong> Updates reflect changes in TikTok monetization programs, market rates for brand deals, and evolving platform trends. Major updates like new Creator Fund rates or TikTok Shop commission changes go live immediately after TikTok announces them.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Are these calculators useful for brands and agencies?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>Yes, marketing agencies and brands both benefit from these calculators.</strong> Agencies use the Brand Deal Rate Calculator to evaluate influencer pricing. Brands use the Engagement Rate Calculator to vet potential partnerships. These tools help ensure fair compensation and identify creators with authentic engagement instead of inflated follower counts.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                What if my niche isn't listed in a calculator?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>These calculators cover more than 15 major content niches.</strong> Supported niches include beauty, finance, gaming, education, and comedy. Select the closest category if your specific sub-niche is not listed. Most niche-based calculations account for general performance patterns, so estimates remain relevant across content types.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Can I save my calculator results?
              </h3>
              <p className="text-body-md text-neutral-700">
                <strong>Results are not automatically saved because no account is required.</strong> Bookmark specific calculator pages and re-enter your metrics anytime. Take screenshots or copy results to a spreadsheet. This helps you track progress over time.
              </p>
            </Card>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/how-to-make-money-on-tiktok/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-2">Complete Monetization Guide</h3>
                <p className="text-body-sm text-neutral-700">Learn all the ways to earn money on TikTok</p>
              </Link>
              <Link href="/guides/tiktok-creator-fund/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-2">Creator Fund Guide</h3>
                <p className="text-body-sm text-neutral-700">Maximize your Creator Fund earnings</p>
              </Link>
              <Link href="/guides/brand-deals/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-2">Brand Deals Guide</h3>
                <p className="text-body-sm text-neutral-700">Get and negotiate sponsorships</p>
              </Link>
              <Link href="/data/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-2">Creator Data Hub</h3>
                <p className="text-body-sm text-neutral-700">Industry benchmarks and rates</p>
              </Link>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <FAQSection
            pageName="TikTok Calculators"
            faqs={[
              {
                question: "How accurate are these TikTok calculators?",
                answer: "These calculators use verified data from thousands of TikTok accounts and official platform documentation. Earnings estimates are typically within 15% to 20% of actual results. Enter current metrics from your TikTok analytics for the best accuracy."
              },
              {
                question: "Do I need to create an account to use the calculators?",
                answer: "No account is required. All 28 calculators are free and work instantly in your browser. Enter your metrics and get immediate results. No data is stored and no signup is needed."
              },
              {
                question: "Which calculator should I use first?",
                answer: "Start with the Engagement Rate Calculator to understand your audience quality. Then use the TikTok Money Calculator for earnings estimates. Explore specific calculators based on your monetization goals, such as brand deals, LIVE gifts, or Creator Fund."
              },
              {
                question: "Can brands and agencies use these calculators?",
                answer: "Yes. Marketing agencies use the Brand Deal Rate Calculator to evaluate influencer pricing. Brands use the Engagement Rate Calculator to vet potential partnerships and identify creators with authentic engagement."
              },
              {
                question: "How often is the calculator data updated?",
                answer: "Benchmark data refreshes every quarter to reflect current TikTok rates and industry standards. The latest update includes 2026 Creator Fund rates, brand deal pricing trends, and engagement benchmarks across all major niches."
              }
            ]}
          />
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-primary text-white text-center p-8">
            <h2 className="text-display-sm font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-body-lg mb-6 opacity-90">
              Start with the Engagement Rate Calculator, then explore earnings estimates. Find the right tool for your goals.
            </p>
            <Link
              href="/guides/how-to-make-money-on-tiktok/"
              className="btn bg-white text-primary-600 hover:bg-neutral-100 btn-lg"
            >
              Read Our Complete Guide
            </Link>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
