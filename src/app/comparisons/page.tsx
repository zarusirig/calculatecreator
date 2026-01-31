import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CollectionSchema } from '@/components/seo/CollectionSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Scale, TrendingUp, DollarSign, ShoppingBag, Video, Zap, Users, Clock, Target, Award, Sparkles, TrendingDown, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'TikTok Platform Comparisons: Earnings & Monetization 2026 | CalculateCreator',
  },
  description: 'Compare TikTok earnings vs YouTube, Instagram, and other platforms. Data-driven comparisons of Creator Fund, brand deals, LIVE streaming, and Shop monetization.',
  alternates: {
    canonical: 'https://calculatecreator.com/comparisons/',
  },
};

export default function ComparisonsPage() {
  const comparisons = [
    {
      title: 'TikTok vs Instagram Creator Income',
      slug: 'tiktok-vs-instagram',
      description: 'Complete comparison of TikTok and Instagram creator earnings, monetization options, and which platform pays better at each follower tier.',
      icon: Scale,
      category: 'Platform vs Platform',
    },
    {
      title: 'TikTok vs Instagram Income (Detailed)',
      slug: 'tiktok-vs-instagram-income',
      description: 'In-depth analysis of income potential on TikTok vs Instagram with real earnings data and growth strategies.',
      icon: DollarSign,
      category: 'Platform vs Platform',
    },
    {
      title: 'TikTok vs YouTube Earnings',
      slug: 'tiktok-vs-youtube-earnings',
      description: 'Compare TikTok and YouTube monetization: CPM rates, brand deals, and total earning potential across follower tiers.',
      icon: TrendingUp,
      category: 'Platform vs Platform',
    },
    {
      title: 'TikTok LIVE vs YouTube LIVE',
      slug: 'tiktok-live-vs-youtube-live',
      description: 'Compare live streaming monetization on TikTok vs YouTube: gifts, Super Chats, memberships, and viewer engagement.',
      icon: Video,
      category: 'LIVE Streaming',
    },
    {
      title: 'TikTok Shop vs Amazon',
      slug: 'tiktok-shop-vs-amazon',
      description: 'Compare TikTok Shop affiliate earnings with Amazon Associates: commission rates, conversion, and earning potential.',
      icon: ShoppingBag,
      category: 'E-commerce',
    },
    {
      title: 'Creator Fund vs YouTube Partner Program',
      slug: 'creator-fund-vs-youtube',
      description: 'Compare TikTok Creator Fund RPM with YouTube AdSense rates across niches and view counts.',
      icon: Zap,
      category: 'Monetization Programs',
    },
    {
      title: 'Creator Fund vs Brand Deals',
      slug: 'creator-fund-vs-brand-deals',
      description: 'Which pays more? Compare Creator Fund passive income vs brand deal earnings at each follower tier.',
      icon: DollarSign,
      category: 'Monetization Programs',
    },
  ];

  const schemaItems = comparisons.map(item => ({
    name: item.title,
    description: item.description,
    url: `https://calculatecreator.com/comparisons/${item.slug}/`,
    category: item.category,
  }));

  const faqs = [
    {
      question: 'Which platform pays creators the most in 2026?',
      answer: 'It depends on your monetization strategy. YouTube has the highest per-view pay (CPM $3-$25), but TikTok offers faster growth and easier brand deal acquisition. For most creators under 100K followers, TikTok provides higher total earnings due to better brand deal rates relative to follower count.',
    },
    {
      question: 'Should I focus on one platform or multiple?',
      answer: 'Start with one platform to build momentum, then expand. Most successful creators recommend starting on TikTok (fastest growth), then repurposing content to YouTube Shorts and Instagram Reels. This maximizes reach while minimizing extra content creation effort.',
    },
    {
      question: 'Is TikTok Creator Fund worth it vs brand deals?',
      answer: 'Brand deals pay significantly more. A creator with 100K followers might earn $100-300/month from Creator Fund but $2,000-5,000/month from brand deals. However, Creator Fund provides passive income with zero extra effort, so most creators pursue both.',
    },
    {
      question: 'How do these comparisons help me earn more?',
      answer: 'Understanding platform differences helps you allocate time effectively. If you\'re in a high-CPM niche (finance, tech), YouTube might be worth the slower growth. For lifestyle/entertainment, TikTok\'s faster growth typically leads to higher total earnings despite lower per-view rates.',
    },
    {
      question: 'What is the Creator Rewards Program and how does it compare to the old Creator Fund?',
      answer: 'The Creator Rewards Program (launched 2024) pays $0.40-$1.00 per 1,000 views for videos over 1 minute, compared to the old Creator Fund\'s $0.02-$0.04 per 1,000 views. This represents a 10-25x increase in per-view earnings. The program requires videos to be at least 1 minute long and focuses on search and original content.',
    },
    {
      question: 'Should I prioritize TikTok Shop or brand deals?',
      answer: 'Both can be highly profitable, but they require different skills. TikTok Shop works best if you enjoy product reviews and have a niche audience ready to buy (beauty, fitness, tech). Brand deals work better for broad entertainment content and require good negotiation skills. Many creators do both - using Shop for passive income and brand deals for larger paydays.',
    },
    {
      question: 'Which monetization method requires the least followers to start?',
      answer: 'TikTok Shop and LIVE gifts have the lowest barriers. You can start earning from Shop with just 1,000 followers, and LIVE gifts only require 1,000 followers in some regions. Brand deals typically need 10K+ followers for meaningful rates, while Creator Rewards requires videos over 1 minute with 10K+ views.',
    },
    {
      question: 'How much time should I spend on each monetization method?',
      answer: 'Focus 80% of your time on creating great content that grows your audience. Use 15% for the monetization method that fits your content style (Shop integration, brand outreach, or longer videos for Creator Rewards), and 5% exploring new opportunities. Growth always leads to more monetization options.',
    },
  ];

  return (
    <>
      <CollectionSchema
        title="TikTok Platform Comparisons: Earnings & Monetization 2026"
        description="Compare TikTok earnings vs YouTube, Instagram, and other platforms. Data-driven comparisons of Creator Fund, brand deals, LIVE streaming, and Shop monetization."
        url="https://calculatecreator.com/comparisons/"
        items={schemaItems}
        collectionType="Guides"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Comparisons', href: '/comparisons' },
            ]}
            includeHome={true}
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              Platform Comparisons
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Data-driven comparisons to help you choose the right platform and monetization strategy for your creator business.
            </p>
            <p className="text-body-md text-neutral-600 max-w-3xl mx-auto">
              Compare TikTok earnings potential against YouTube, Instagram, and other platforms. Understand which monetization methods work best for your niche and follower count.
            </p>
          </div>

          {/* All Comparisons */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
              All Comparisons
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/comparisons/${comparison.slug}/`}
                  className="card p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-secondary-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <comparison.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-label-sm text-primary-600 mb-1 block">{comparison.category}</span>
                      <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                        {comparison.title}
                      </h3>
                      <p className="text-body-sm text-neutral-600">
                        {comparison.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Compare Monetization Methods */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-heading-lg font-semibold text-neutral-900 mb-3">
                    Why Compare Monetization Methods
                  </h2>
                  <p className="text-body-md text-neutral-700 mb-4">
                    Every monetization method on TikTok has different requirements, earning potential, and time commitments. Understanding these trade-offs is critical to building a sustainable creator business.
                  </p>
                  <p className="text-body-md text-neutral-700 mb-4">
                    The Creator Rewards Program might pay 20x more per view than the old Creator Fund, but requires videos over 1 minute. Brand deals offer the highest earnings, but demand consistent content quality and negotiation skills. TikTok Shop provides passive income, but only works for product-focused niches.
                  </p>
                  <p className="text-body-md text-neutral-700">
                    By comparing these methods side-by-side, you can identify which monetization strategies align with your content style, audience size, and time availability - maximizing your income without burning out.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
              Quick Monetization Comparison
            </h2>
            <Card className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="py-4 px-4 font-semibold text-neutral-900">Method</th>
                    <th className="py-4 px-4 font-semibold text-neutral-900">Earnings Potential</th>
                    <th className="py-4 px-4 font-semibold text-neutral-900">Effort Required</th>
                    <th className="py-4 px-4 font-semibold text-neutral-900">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-neutral-900">Creator Rewards</div>
                      <div className="text-body-sm text-neutral-600">$0.40-$1.00/1K views</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-medium">High</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <span className="text-neutral-700">Medium</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-body-sm text-neutral-700">
                      Videos 1+ min, 10K+ views
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-neutral-900">Brand Deals</div>
                      <div className="text-body-sm text-neutral-600">$100-$10,000+ per post</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-medium">Highest</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span className="text-neutral-700">High</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-body-sm text-neutral-700">
                      10K+ followers, good engagement
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-neutral-900">LIVE Gifts</div>
                      <div className="text-body-sm text-neutral-600">$50-$500+ per stream</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-yellow-600" />
                        <span className="text-neutral-700">Medium-High</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span className="text-neutral-700">Very High</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-body-sm text-neutral-700">
                      1K+ followers, regular streaming
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-neutral-900">TikTok Shop</div>
                      <div className="text-body-sm text-neutral-600">5-20% commission</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-medium">High</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <span className="text-neutral-700">Medium</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-body-sm text-neutral-700">
                      1K+ followers, product-focused
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-neutral-900">Old Creator Fund</div>
                      <div className="text-body-sm text-neutral-600">$0.02-$0.04/1K views</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-red-600" />
                        <span className="text-red-700 font-medium">Very Low</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-neutral-700">Low</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-body-sm text-neutral-700">
                      10K+ followers (being phased out)
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          {/* 2026 Monetization Landscape */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
              2026 Monetization Landscape
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                      Creator Rewards Program
                    </h3>
                    <p className="text-body-md text-neutral-700 mb-3">
                      The Creator Rewards Program represents a massive shift in TikTok monetization. Paying $0.40-$1.00 per 1,000 views (compared to the old Creator Fund's $0.02-$0.04), this program rewards longer-form content that keeps viewers engaged.
                    </p>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      <strong>Key Changes:</strong>
                    </p>
                    <ul className="list-disc list-inside text-body-sm text-neutral-700 space-y-1">
                      <li>20-25x higher pay per view</li>
                      <li>Videos must be 1+ minutes long</li>
                      <li>Rewards search and original content</li>
                      <li>Gradual replacement of old Creator Fund</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                      TikTok Shop Explosion
                    </h3>
                    <p className="text-body-md text-neutral-700 mb-3">
                      TikTok Shop has become one of the fastest-growing monetization methods, with some creators earning more from Shop commissions than all other methods combined.
                    </p>
                    <p className="text-body-sm text-neutral-700 mb-2">
                      <strong>Why It's Growing:</strong>
                    </p>
                    <ul className="list-disc list-inside text-body-sm text-neutral-700 space-y-1">
                      <li>Low barrier to entry (1K followers)</li>
                      <li>5-20% commissions on sales</li>
                      <li>Passive income potential</li>
                      <li>Perfect for product review niches</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Platform-Wide Trends in 2026
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    What's Growing
                  </h4>
                  <ul className="list-disc list-inside text-body-sm text-neutral-700 space-y-1">
                    <li>Longer videos (1-3 minutes) getting more reach</li>
                    <li>E-commerce integration across all platforms</li>
                    <li>Live streaming monetization improvements</li>
                    <li>Cross-platform content repurposing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                    What's Declining
                  </h4>
                  <ul className="list-disc list-inside text-body-sm text-neutral-700 space-y-1">
                    <li>Old Creator Fund being phased out</li>
                    <li>Pure follower count as success metric</li>
                    <li>Short 7-15 second viral clips</li>
                    <li>Single-platform creator strategies</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* How to Choose Your Strategy */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
              How to Choose Your Monetization Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                      Match Your Audience Size
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Your follower count determines which methods work best:
                    </p>
                    <ul className="text-body-sm text-neutral-700 space-y-2">
                      <li><strong>Under 10K:</strong> Focus on TikTok Shop and Creator Rewards. Build portfolio for future brand deals.</li>
                      <li><strong>10K-100K:</strong> Start pitching brand deals while maintaining Shop and Rewards income.</li>
                      <li><strong>100K+:</strong> Prioritize high-value brand deals, use other methods for passive income.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                      Align with Content Style
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Different content types favor different monetization:
                    </p>
                    <ul className="text-body-sm text-neutral-700 space-y-2">
                      <li><strong>Product Reviews:</strong> TikTok Shop is your primary income source.</li>
                      <li><strong>Entertainment/Lifestyle:</strong> Brand deals and Creator Rewards work best.</li>
                      <li><strong>Interactive/Community:</strong> LIVE gifts can generate significant income.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                      Consider Time Investment
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Balance earning potential with time required:
                    </p>
                    <ul className="text-body-sm text-neutral-700 space-y-2">
                      <li><strong>Passive Income:</strong> Creator Rewards (create once, earn ongoing) and TikTok Shop.</li>
                      <li><strong>Active Income:</strong> Brand deals require pitching, negotiation, custom content.</li>
                      <li><strong>High Touch:</strong> LIVE streaming demands consistent schedule and real-time engagement.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                      Diversify Income Streams
                    </h3>
                    <p className="text-body-sm text-neutral-700 mb-3">
                      Don't rely on just one monetization method:
                    </p>
                    <ul className="text-body-sm text-neutral-700 space-y-2">
                      <li><strong>Beginner Strategy:</strong> Creator Rewards + TikTok Shop for consistent income.</li>
                      <li><strong>Growth Strategy:</strong> Add brand deals as you hit 10K+ followers.</li>
                      <li><strong>Advanced Strategy:</strong> Layer all methods - passive (Rewards, Shop) + active (brand deals, LIVE).</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Why Compare Platforms */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">
                Why Platform Comparisons Matter
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <DollarSign className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Maximize Earnings</h3>
                  <p className="text-body-sm text-neutral-700">
                    Know which platform pays best for your specific niche and content type.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <TrendingUp className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Strategic Growth</h3>
                  <p className="text-body-sm text-neutral-700">
                    Allocate your time and effort to the platforms with the best ROI.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Scale className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Informed Decisions</h3>
                  <p className="text-body-sm text-neutral-700">
                    Make data-backed choices instead of guessing which platform to focus on.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Related Resources */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculators/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">TikTok Calculators</h3>
                  <p className="text-body-sm text-neutral-700">Calculate your earnings across all monetization methods</p>
                </Link>
                <Link href="/data/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">Creator Data Hub</h3>
                  <p className="text-body-sm text-neutral-700">Industry benchmarks, rates, and statistics</p>
                </Link>
                <Link href="/guides/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">Creator Guides</h3>
                  <p className="text-body-sm text-neutral-700">In-depth guides on monetization strategies</p>
                </Link>
                <Link href="/niches/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">Niche Earnings</h3>
                  <p className="text-body-sm text-neutral-700">Earnings data by content niche</p>
                </Link>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <FAQSection
              pageName="Platform Comparisons"
              faqs={faqs}
            />
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-tiktok-pink/5 to-tiktok-blue/5 text-center p-8">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Calculate Your Earnings
              </h2>
              <p className="text-body-md text-neutral-700 mb-6">
                Use our free calculators to estimate your potential earnings on TikTok:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators/tiktok-creator-fund/" className="btn btn-primary btn-md">
                  Creator Fund Calculator
                </Link>
                <Link href="/calculators/brand-deal-rate/" className="btn btn-outline btn-md">
                  Brand Deal Calculator
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
