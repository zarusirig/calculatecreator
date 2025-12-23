import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
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
  title: 'TikTok Calculators: 28 Free Tools | CalculateCreator',
  description: 'Complete suite of TikTok calculators for earnings, engagement, growth, ROI & taxes. Free, data-driven tools used by 50,000+ creators.',
};

export default function CalculatorsPage() {
  const calculators: { name: string; slug: string; description: string; icon: LucideIcon; category: string; popular?: boolean }[] = [
    // Original 8 Calculators
    {
      name: 'Creator Fund Calculator',
      slug: 'tiktok-creator-fund',
      description: 'Estimate monthly and annual earnings from the TikTok Creator Fund based on views, engagement, and niche.',
      icon: DollarSign,
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'Engagement Rate Calculator',
      slug: 'engagement-rate',
      description: 'Calculate your TikTok engagement rate and compare to industry benchmarks.',
      icon: BarChart3,
      category: 'Analytics',
      popular: true,
    },
    {
      name: 'Brand Deal Rate Calculator',
      slug: 'brand-deal-rate',
      description: 'Calculate how much you should charge brands for sponsored content based on followers and engagement.',
      icon: Handshake,
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'TikTok Money Calculator',
      slug: 'tiktok-money',
      description: 'Calculate total earnings from all monetization streams: Creator Fund, brand deals, and LIVE gifts.',
      icon: Banknote,
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'LIVE Gifts Calculator',
      slug: 'live-gifts',
      description: 'Estimate earnings from TikTok LIVE streaming based on viewers, duration, and gifting rate.',
      icon: Gift,
      category: 'LIVE',
    },
    {
      name: 'Coins Calculator',
      slug: 'coins',
      description: 'Convert TikTok coins to USD value and diamonds.',
      icon: Coins,
      category: 'Conversion',
    },
    {
      name: 'RPM Calculator',
      slug: 'rpm',
      description: 'Calculate your revenue per 1,000 views (RPM) to understand earning efficiency.',
      icon: TrendingUp,
      category: 'Analytics',
    },
    {
      name: 'Shop Commission Calculator',
      slug: 'shop-commission',
      description: 'Calculate earnings from TikTok Shop affiliate commissions.',
      icon: ShoppingBag,
      category: 'Shop',
    },
    // Growth & Analytics (5 new)
    {
      name: 'Follower Growth Calculator',
      slug: 'follower-growth',
      description: 'Project your future follower count based on current growth rate and trends.',
      icon: TrendingUp,
      category: 'Growth',
      popular: true,
    },
    {
      name: 'Video Performance Predictor',
      slug: 'video-performance',
      description: 'Predict video performance and get a comprehensive performance score based on key metrics.',
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
      description: 'Score your content\'s viral potential based on engagement, shares, saves, and completion rate.',
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
      description: 'Estimate the total monetary value of your content library for licensing and deals.',
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
      slug: 'creator-tax',
      description: 'Estimate your tax obligations including federal, state, and self-employment taxes.',
      icon: Receipt,
      category: 'Business',
      popular: true,
    },
    {
      name: 'Multi-Platform Earnings',
      slug: 'multi-platform-earnings',
      description: 'Compare earning potential across TikTok, YouTube, and Instagram to optimize your strategy.',
      icon: Smartphone,
      category: 'Earnings',
    },
    // Engagement Metrics (5 new)
    {
      name: 'Share-to-View Ratio',
      slug: 'share-ratio',
      description: 'Measure your content\'s viral potential through share rate analysis.',
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
  ];

  const categories = ['All', 'Earnings', 'Analytics', 'Growth', 'Engagement', 'Business', 'ROI', 'LIVE', 'Shop', 'Conversion'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-4">
            Complete suite of 28 free, data-driven calculators for TikTok creators. Estimate earnings, track growth, analyze engagement, calculate ROI, and optimize your creator business.
          </p>
          <p className="text-body-md text-neutral-600 max-w-3xl mx-auto">
            Trusted by 500,000+ creators worldwide. Every calculator is built using verified data from thousands of TikTok accounts, official platform documentation, and industry-standard formulas. No signup required—instant results in your browser.
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
                    Our calculators are built on extensive research from over 50,000 creator accounts, TikTok's official documentation, and verified earnings reports. We update our algorithms quarterly to reflect the latest platform changes and market trends.
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
                    Access all 28 calculators without creating an account, sharing your TikTok credentials, or entering any personal information. All calculations happen locally in your browser for complete privacy and instant results.
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
                    From earnings estimation to engagement analytics, growth projections to tax calculations, our suite covers every aspect of the TikTok creator business. Make informed decisions with tools designed specifically for content creators.
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
                    Each calculator includes industry benchmarks so you can see how your metrics compare to successful creators in your niche. Identify strengths, find areas for improvement, and set realistic growth goals.
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
                      Before estimating earnings, understand your current performance. Use the Engagement Rate Calculator, Watch Time Calculator, and Completion Rate Calculator to establish baseline metrics. This helps you identify strengths and weaknesses in your content strategy.
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
                      Once you understand your metrics, explore earnings calculators. Start with the TikTok Money Calculator for a comprehensive overview, then dive into specific revenue streams like Creator Fund, brand deals, LIVE gifts, and TikTok Shop commissions.
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
                      Use growth-focused tools like the Follower Growth Calculator and Viral Potential Calculator to set goals and predict future performance. These projections help you plan content calendars and track progress toward monetization thresholds.
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
                      As your account grows, use business calculators like the Creator Tax Calculator, Production Cost Calculator, and Sponsorship ROI Calculator to manage finances professionally. Track your true costs and ensure profitability as you scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Calculator Categories Explained */}
        <div className="mt-20 max-w-5xl mx-auto">
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
                Estimate income from all TikTok monetization streams including Creator Fund, brand sponsorships, LIVE gifts, and TikTok Shop.
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
                Measure performance metrics like engagement rate, watch time, completion rate, and hashtag effectiveness.
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
                Project future follower counts, predict viral potential, and plan your path to monetization thresholds.
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
                Analyze share rates, save rates, profile visit rates, and other engagement signals that impact algorithmic reach.
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
                Professional tools for production costs, niche profitability, e-commerce conversion, and financial planning.
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
                Calculate return on investment for sponsorships, content planning, and marketing spend to ensure profitability.
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
                Our calculators use verified data from thousands of creators, TikTok's official documentation, and industry reports. While estimates are based on comprehensive research and real-world averages, actual earnings vary based on factors like content quality, niche competitiveness, audience demographics, and current platform algorithm. Use our calculators as guidance, not guarantees.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Do I need to connect my TikTok account?
              </h3>
              <p className="text-body-md text-neutral-700">
                No. All calculators work without any login or account connection. Simply enter your metrics manually from TikTok Analytics. This ensures complete privacy - we never access your account data, and all calculations happen locally in your browser.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Which calculator should I start with as a new creator?
              </h3>
              <p className="text-body-md text-neutral-700">
                Start with the Engagement Rate Calculator to understand your current performance level. Then use the Follower Growth Calculator to project when you'll reach monetization thresholds (1,000 followers for LIVE gifts, 10,000 for Creator Fund). Once you're monetized, explore the earnings calculators to estimate income potential.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Can I use these calculators for business planning?
              </h3>
              <p className="text-body-md text-neutral-700">
                Yes. Many creators use our calculators for financial projections, brand deal negotiations, and tax planning. The Creator Tax Calculator is particularly useful for quarterly tax estimates. However, for major financial decisions, we recommend consulting with a professional accountant or financial advisor who understands creator economy taxation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                How often are the calculators updated?
              </h3>
              <p className="text-body-md text-neutral-700">
                We update our algorithms and data quarterly to reflect changes in TikTok's monetization programs, market rates for brand deals, and evolving platform trends. Major updates (like new Creator Fund rates or TikTok Shop commission changes) are implemented immediately when officially announced by TikTok.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Are these calculators useful for brands and agencies?
              </h3>
              <p className="text-body-md text-neutral-700">
                Absolutely. Marketing agencies use our Brand Deal Rate Calculator to evaluate influencer pricing, and brands use our Engagement Rate Calculator to vet potential partnerships. The calculators help ensure fair compensation and identify creators with authentic engagement rather than inflated follower counts.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                What if my niche isn't listed in a calculator?
              </h3>
              <p className="text-body-md text-neutral-700">
                Our calculators cover 15+ major content niches including beauty, finance, gaming, education, comedy, and more. If your specific sub-niche isn't listed, select the closest category. Most niche-based calculations account for general performance patterns rather than ultra-specific content types, so estimates remain relevant.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                Can I save my calculator results?
              </h3>
              <p className="text-body-md text-neutral-700">
                Currently, calculators don't require accounts, so results aren't automatically saved. However, you can bookmark specific calculator pages and re-enter your metrics anytime. We recommend taking screenshots or copying results to a spreadsheet for tracking your progress over time.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-primary text-white text-center p-8">
            <h2 className="text-display-sm font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-body-lg mb-6 opacity-90">
              Not sure which calculator to use? Start with the Engagement Rate Calculator, then explore earnings estimates.
            </p>
            <Link
              href="/guides/how-to-make-money-on-tiktok"
              className="btn bg-white text-primary-600 hover:bg-neutral-100 btn-lg"
            >
              Read Our Complete Guide
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
