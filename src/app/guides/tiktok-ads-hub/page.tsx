import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import Link from 'next/link';
import { Megaphone, BookOpen, RefreshCw, CheckCircle, Target, Lightbulb, DollarSign, BarChart3, Zap, TrendingUp, ShoppingCart, Users, AlertTriangle, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Ads Hub | Costs, Spark Ads, and Campaign Strategy',
  description:
    'Learn how TikTok ad costs, Spark Ads, Shop campaigns, and ROAS benchmarks fit into a more profitable creator or brand strategy.',
  keywords: ['tiktok ads', 'tiktok advertising', 'tiktok ad cost', 'spark ads', 'tiktok shop ads', 'tiktok campaign roi', 'tiktok cpm', 'tiktok ad budget'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/guides/tiktok-ads-hub/',
  },
  openGraph: {
    title: 'TikTok Ads Hub 2026 | Complete Advertising Strategy & Cost Guide',
    description: 'Master TikTok advertising. Calculate ad costs, optimize ROAS, run Spark Ads, and build profitable TikTok ad campaigns.',
    type: 'article',
    url: 'https://tiktokcalculator.net/guides/tiktok-ads-hub/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Ads Hub 2026 | Complete Ad Strategy Guide',
    description: 'Master TikTok advertising with comprehensive cost calculators and optimization strategies.',
  },
};

const tableOfContents = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'TikTok Ads Fundamentals', id: 'ads-fundamentals' },
  { title: 'Budget & Cost Planning', id: 'budget-cost' },
  { title: 'Campaign ROI Measurement', id: 'campaign-roi' },
  { title: 'Spark Ads for Creators', id: 'spark-ads' },
  { title: 'TikTok Shop Advertising', id: 'shop-advertising' },
  { title: 'Advanced Optimization', id: 'advanced-optimization' },
  { title: 'Ads Strategy Roadmap', id: 'ads-roadmap' },
  { title: 'FAQs', id: 'faqs' },
];

export default function TikTokAdsHubPage() {
  const readingTime = '18 min read';
  const lastUpdated = 'February 6, 2026';

  return (
    <>
      <ArticleSchema
        headline="TikTok Ads Hub 2026: Complete Advertising Strategy & Cost Guide"
        description="Comprehensive guide to TikTok advertising covering ad formats, budget planning, ROAS benchmarks, Spark Ads, TikTok Shop advertising, and advanced campaign optimization strategies with calculators."
        url="https://tiktokcalculator.net/guides/tiktok-ads-hub/"
        datePublished="2026-02-06"
        dateModified="2026-03-01"
        keywords={['tiktok ads', 'tiktok advertising cost', 'spark ads', 'tiktok shop ads', 'campaign roi', 'tiktok cpm']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net' },
          { name: 'Guides', url: 'https://tiktokcalculator.net/guides/' },
          { name: 'TikTok Ads Hub', url: 'https://tiktokcalculator.net/guides/tiktok-ads-hub/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides/' },
              { label: 'TikTok Ads Hub', href: '/guides/tiktok-ads-hub/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-6">
              <Megaphone className="w-12 h-12" />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Ads Hub 2026
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto mb-6">
              The complete resource for TikTok advertising. Master every ad format from In-Feed to Spark Ads, plan budgets strategically, measure ROAS accurately, and optimize campaigns for maximum return on ad spend.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {readingTime}
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Updated: {lastUpdated}
              </span>
            </div>
          </div>

          {/* Introduction */}
          <section className="py-8 bg-white -mx-4 px-4 mb-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                TikTok advertising has become one of the most powerful channels for brands and creators alike, with the platform reaching over 1.5 billion monthly active users and delivering some of the highest engagement rates in digital advertising. In 2026, TikTok&apos;s ad platform has matured significantly, offering diverse ad formats, sophisticated targeting, and deep integration with TikTok Shop for seamless commerce experiences. Yet many advertisers waste budget because they don&apos;t understand the platform&apos;s unique auction mechanics, fail to optimize creative for native content styles, or miss the opportunity to leverage Spark Ads that combine organic reach with paid amplification. This comprehensive hub covers everything from ad format selection and budget planning to ROAS measurement and advanced optimization, giving you the tools and strategies to run profitable TikTok ad campaigns at any budget level.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <Card className="max-w-4xl mx-auto mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Table of Contents</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <span className="text-primary-600 group-hover:text-primary-700">&rarr;</span>
                  <span className="text-body-md text-neutral-700 group-hover:text-neutral-900">
                    {item.title}
                  </span>
                </a>
              ))}
            </nav>
          </Card>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1: Introduction */}
            <section id="introduction">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Introduction: The TikTok Advertising Landscape in 2026
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    TikTok advertising has evolved from experimental budgets into a core channel for brands generating billions in revenue. The platform&apos;s unique combination of short-form video, algorithm-driven discovery, and integrated commerce creates advertising opportunities that don&apos;t exist on any other platform. In 2026, TikTok&apos;s ad revenue has surpassed $30 billion globally, with advertisers across every industry—from DTC startups to Fortune 500 companies—allocating significant budget to the platform. The key differentiator is TikTok&apos;s ability to make ads feel like organic content, with top-performing ads often indistinguishable from regular creator posts, resulting in higher engagement and lower cost-per-action compared to traditional social advertising.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <h3 className="font-semibold text-neutral-900 mb-2">For Brands & Advertisers</h3>
                      <ul className="text-sm space-y-1">
                        <li>&bull; Average CPM: $5-$15 (lower than Meta/Google)</li>
                        <li>&bull; 2-3x higher engagement vs. Instagram Reels</li>
                        <li>&bull; TikTok Shop integration for direct sales</li>
                        <li>&bull; Spark Ads leverage organic creator content</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <h3 className="font-semibold text-neutral-900 mb-2">For Creators</h3>
                      <ul className="text-sm space-y-1">
                        <li>&bull; Earn from Spark Ads usage rights ($500-$10K+)</li>
                        <li>&bull; Boost own content with self-serve ads</li>
                        <li>&bull; Drive traffic to Shop products with paid ads</li>
                        <li>&bull; Promote services and digital products</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Whether you&apos;re a brand looking to acquire customers cost-effectively or a creator wanting to amplify reach and monetize through advertising partnerships, this hub provides the complete framework. You&apos;ll learn to calculate exact ad costs using our <Link href="/calculators/tiktok-ad-cost/" className="text-primary-600 underline">TikTok Ad Cost Calculator</Link>, measure campaign performance with the <Link href="/calculators/campaign-roi/" className="text-primary-600 underline">Campaign ROI Calculator</Link>, and optimize every dollar of your advertising investment.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300 mt-6">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-600" /> Key Insight: Native Content Wins</h3>
                    <p className="text-sm text-neutral-700">
                      TikTok ads that look and feel like organic creator content outperform polished brand ads by 2-5x. The platform&apos;s algorithm rewards authenticity, making Spark Ads and creator-style content the most cost-effective advertising approach. Brands that partner with creators for ad content see 40-60% lower CPAs than those running traditional brand-produced ads.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: TikTok Ads Fundamentals */}
            <section id="ads-fundamentals">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 1: TikTok Ads Fundamentals
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Understanding TikTok&apos;s ad formats and auction system is essential before spending a single dollar. Each format serves different objectives, and choosing the right one dramatically impacts your cost efficiency and results.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Ad Format Comparison</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Format</th>
                            <th className="p-3 text-left font-semibold">Placement</th>
                            <th className="p-3 text-left font-semibold">Cost Range</th>
                            <th className="p-3 text-left font-semibold">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">In-Feed Ads</td>
                            <td className="p-3">For You Page</td>
                            <td className="p-3 text-green-600 font-semibold">$5-$12 CPM</td>
                            <td className="p-3">Conversions, traffic, app installs</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">TopView Ads</td>
                            <td className="p-3">First ad on app open</td>
                            <td className="p-3 text-orange-600 font-semibold">$50K-$150K/day</td>
                            <td className="p-3">Brand awareness, product launches</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Spark Ads</td>
                            <td className="p-3">Boosted organic content</td>
                            <td className="p-3 text-green-600 font-semibold">$3-$10 CPM</td>
                            <td className="p-3">Engagement, social proof, conversions</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Branded Hashtag</td>
                            <td className="p-3">Discover page</td>
                            <td className="p-3 text-red-600 font-semibold">$150K+/6 days</td>
                            <td className="p-3">UGC campaigns, brand challenges</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Branded Effects</td>
                            <td className="p-3">Custom AR filters</td>
                            <td className="p-3 text-orange-600 font-semibold">$80K-$120K</td>
                            <td className="p-3">Interactive campaigns, brand engagement</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Shop Ads</td>
                            <td className="p-3">FYP + Shop tab</td>
                            <td className="p-3 text-green-600 font-semibold">$4-$15 CPM</td>
                            <td className="p-3">Product sales, e-commerce conversions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">How the TikTok Ad Auction Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><DollarSign className="w-8 h-8 text-blue-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Bid</h4>
                        <p className="text-sm text-neutral-700">
                          Your maximum bid per action (click, view, conversion). Higher bids increase delivery probability but don&apos;t guarantee lowest cost.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><BarChart3 className="w-8 h-8 text-green-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Estimated Action Rate</h4>
                        <p className="text-sm text-neutral-700">
                          TikTok predicts how likely users are to take your desired action. Better creative = higher predicted rates = lower costs.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Zap className="w-8 h-8 text-purple-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Ad Quality</h4>
                        <p className="text-sm text-neutral-700">
                          Creative relevance, engagement history, and user feedback determine quality score. Native-style content scores highest.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-neutral-700">
                        <strong>Auction Formula:</strong> Ad Rank = Bid &times; Estimated Action Rate &times; Ad Quality Score. You don&apos;t always pay your max bid—you pay just enough to beat the next highest-ranked ad. This means better creative literally saves you money. Use the <Link href="/calculators/cpm-cpv/" className="text-primary-600 underline">CPM/CPV Calculator</Link> to model different bid scenarios.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Targeting Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Demographics</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Age (13-17, 18-24, 25-34, 35-44, 45-54, 55+)</li>
                          <li>&bull; Gender (male, female, all)</li>
                          <li>&bull; Location (country, state, DMA, zip)</li>
                          <li>&bull; Language preferences</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Interest & Behavior</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Interest categories (350+ options)</li>
                          <li>&bull; Behavioral targeting (purchase intent, device)</li>
                          <li>&bull; Custom audiences (pixel, email, app activity)</li>
                          <li>&bull; Lookalike audiences (1-10% similarity)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 3: Budget & Cost Planning */}
            <section id="budget-cost">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 2: Budget & Cost Planning
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Strategic budget allocation is the difference between profitable campaigns and wasted spend. TikTok has specific minimums and cost benchmarks that vary by objective, industry, and competition.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">CPM Ranges by Campaign Objective</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Objective</th>
                            <th className="p-3 text-left font-semibold">CPM Range</th>
                            <th className="p-3 text-left font-semibold">CPC Range</th>
                            <th className="p-3 text-left font-semibold">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3">Reach / Awareness</td>
                            <td className="p-3 font-semibold text-green-600">$3-$8</td>
                            <td className="p-3">N/A</td>
                            <td className="p-3 text-neutral-600">Lowest CPM, broadest delivery</td>
                          </tr>
                          <tr>
                            <td className="p-3">Traffic</td>
                            <td className="p-3 font-semibold text-blue-600">$5-$12</td>
                            <td className="p-3 font-semibold">$0.50-$2.00</td>
                            <td className="p-3 text-neutral-600">Landing page visits</td>
                          </tr>
                          <tr>
                            <td className="p-3">Video Views</td>
                            <td className="p-3 font-semibold text-green-600">$4-$10</td>
                            <td className="p-3">$0.01-$0.05/view</td>
                            <td className="p-3 text-neutral-600">6-second or 2-second views</td>
                          </tr>
                          <tr>
                            <td className="p-3">App Install</td>
                            <td className="p-3 font-semibold text-orange-600">$8-$15</td>
                            <td className="p-3 font-semibold">$1.50-$5.00/install</td>
                            <td className="p-3 text-neutral-600">Higher cost, higher intent</td>
                          </tr>
                          <tr>
                            <td className="p-3">Conversions</td>
                            <td className="p-3 font-semibold text-orange-600">$8-$18</td>
                            <td className="p-3 font-semibold">$1.00-$3.00</td>
                            <td className="p-3 text-neutral-600">Purchases, sign-ups, leads</td>
                          </tr>
                          <tr>
                            <td className="p-3">Product Sales (Shop)</td>
                            <td className="p-3 font-semibold text-blue-600">$5-$15</td>
                            <td className="p-3 font-semibold">$0.50-$2.50</td>
                            <td className="p-3 text-neutral-600">TikTok Shop integration</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4">
                      <Link href="/calculators/tiktok-ad-cost/">
                        <Button variant="primary">Calculate Your Ad Costs</Button>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Budget Minimums & Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3">TikTok Minimums</h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li>&bull; <strong>Campaign level:</strong> $50/day minimum</li>
                          <li>&bull; <strong>Ad group level:</strong> $20/day minimum</li>
                          <li>&bull; <strong>Lifetime budget:</strong> Minimum varies by duration</li>
                          <li>&bull; <strong>Bid minimum:</strong> $0.01 per click</li>
                        </ul>
                      </div>

                      <div className="p-5 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3">Practical Recommendations</h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li>&bull; <strong>Testing phase:</strong> $50-$100/day for 7-14 days</li>
                          <li>&bull; <strong>Learning phase:</strong> Need 50 conversions/week per ad group</li>
                          <li>&bull; <strong>Scaling:</strong> Increase budget by max 20-30%/day</li>
                          <li>&bull; <strong>Creative refresh:</strong> Budget 30% for new creative testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Budget Allocation Strategy</h3>
                    <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
                      <h4 className="font-semibold text-neutral-900 mb-4">The 70/20/10 Budget Framework</h4>
                      <div className="space-y-3 text-sm text-neutral-700">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span><strong>70% - Proven Winners:</strong> Scale campaigns with positive ROAS</span>
                          <span className="text-xs text-green-600 font-semibold">Core spend</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span><strong>20% - Testing:</strong> New creatives, audiences, and ad formats</span>
                          <span className="text-xs text-blue-600 font-semibold">Growth spend</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span><strong>10% - Experiments:</strong> New platforms, bold creative, emerging formats</span>
                          <span className="text-xs text-purple-600 font-semibold">Innovation spend</span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-neutral-600">
                        Use the <Link href="/calculators/ad-spend/" className="text-primary-600 underline">Ad Spend Calculator</Link> to plan your budget allocation across campaigns and the <Link href="/calculators/rpm/" className="text-primary-600 underline">RPM/CPM Calculator</Link> to forecast impressions at your budget level.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 4: Campaign ROI Measurement */}
            <section id="campaign-roi">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 3: Campaign ROI Measurement
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Measuring return on ad spend (ROAS) accurately is the foundation of profitable advertising. TikTok&apos;s attribution model, pixel tracking, and conversion API provide the data you need to optimize campaigns for maximum profitability.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">ROAS Benchmarks by Industry</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Industry</th>
                            <th className="p-3 text-left font-semibold">Average ROAS</th>
                            <th className="p-3 text-left font-semibold">Good ROAS</th>
                            <th className="p-3 text-left font-semibold">Excellent ROAS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3">Beauty & Skincare</td>
                            <td className="p-3">2.5x</td>
                            <td className="p-3 font-semibold text-green-600">4x</td>
                            <td className="p-3 font-semibold text-green-700">6x+</td>
                          </tr>
                          <tr>
                            <td className="p-3">Fashion & Apparel</td>
                            <td className="p-3">2.0x</td>
                            <td className="p-3 font-semibold text-green-600">3.5x</td>
                            <td className="p-3 font-semibold text-green-700">5x+</td>
                          </tr>
                          <tr>
                            <td className="p-3">Food & Beverage</td>
                            <td className="p-3">2.2x</td>
                            <td className="p-3 font-semibold text-green-600">3.5x</td>
                            <td className="p-3 font-semibold text-green-700">5x+</td>
                          </tr>
                          <tr>
                            <td className="p-3">Home & Garden</td>
                            <td className="p-3">2.0x</td>
                            <td className="p-3 font-semibold text-green-600">3x</td>
                            <td className="p-3 font-semibold text-green-700">5x+</td>
                          </tr>
                          <tr>
                            <td className="p-3">Tech & Electronics</td>
                            <td className="p-3">1.8x</td>
                            <td className="p-3 font-semibold text-green-600">3x</td>
                            <td className="p-3 font-semibold text-green-700">4.5x+</td>
                          </tr>
                          <tr>
                            <td className="p-3">SaaS / Digital Products</td>
                            <td className="p-3">3.0x</td>
                            <td className="p-3 font-semibold text-green-600">5x</td>
                            <td className="p-3 font-semibold text-green-700">8x+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Attribution & Conversion Tracking</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-blue-600" /> TikTok Pixel Setup</h4>
                        <ol className="space-y-2 text-sm text-neutral-700">
                          <li>1. <strong>Install base pixel:</strong> Add to all website pages</li>
                          <li>2. <strong>Configure events:</strong> ViewContent, AddToCart, Purchase</li>
                          <li>3. <strong>Enable advanced matching:</strong> Email, phone for better attribution</li>
                          <li>4. <strong>Set up Conversions API:</strong> Server-side tracking for accuracy</li>
                        </ol>
                      </div>

                      <div className="p-5 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-green-600" /> Attribution Windows</h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li>&bull; <strong>Click-through:</strong> 7 days (default), 1 or 28 days available</li>
                          <li>&bull; <strong>View-through:</strong> 1 day (default), can disable</li>
                          <li>&bull; <strong>Engaged view:</strong> 6-second video view + conversion</li>
                          <li>&bull; <strong>Recommendation:</strong> 7-day click, 1-day view for accuracy</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                    <h4 className="font-semibold text-neutral-900 mb-3">Using the Campaign ROI Calculator</h4>
                    <ol className="space-y-3 text-sm text-neutral-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">1</span>
                        <div>
                          <strong>Enter ad spend:</strong> Total campaign budget (e.g., $5,000)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">2</span>
                        <div>
                          <strong>Enter revenue generated:</strong> Total attributed sales (e.g., $18,000)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">3</span>
                        <div>
                          <strong>Review ROAS:</strong> $18,000 / $5,000 = 3.6x ROAS. Calculator shows profitability analysis and suggests optimization areas.
                        </div>
                      </li>
                    </ol>

                    <div className="mt-4 text-center">
                      <Link href="/calculators/campaign-roi/">
                        <Button variant="primary" size="lg">
                          Try Campaign ROI Calculator
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Pro Tip:</strong> Use the <Link href="/calculators/cost-per-result/" className="text-primary-600 underline">Cost Per Result Calculator</Link> alongside ROAS to understand unit economics. A 3x ROAS with $15 CPA is different from 3x ROAS with $50 CPA, and the <Link href="/calculators/customer-acquisition-cost/" className="text-primary-600 underline">Customer Acquisition Cost Calculator</Link> helps you factor in lifetime value.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 5: Spark Ads for Creators */}
            <section id="spark-ads">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 4: Spark Ads for Creators
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Spark Ads are TikTok&apos;s most powerful ad format, allowing brands to boost existing organic content from creator accounts. For creators, this represents a significant revenue opportunity beyond traditional sponsorships. For brands, Spark Ads deliver 30-50% better performance than standard In-Feed ads because they leverage the authenticity of creator content.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">How Spark Ads Work</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Megaphone className="w-5 h-5 text-orange-600" /> For Brands</h4>
                        <ol className="space-y-2 text-sm text-neutral-700">
                          <li>1. Identify high-performing creator content</li>
                          <li>2. Request authorization code from creator</li>
                          <li>3. Import into Ads Manager as Spark Ad</li>
                          <li>4. Set targeting, budget, and objectives</li>
                          <li>5. All engagement flows back to creator&apos;s post</li>
                        </ol>
                      </div>

                      <div className="p-5 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5 text-green-600" /> For Creators</h4>
                        <ol className="space-y-2 text-sm text-neutral-700">
                          <li>1. Create organic content featuring product</li>
                          <li>2. Grant authorization code (30, 60, or 365 days)</li>
                          <li>3. Charge Spark Ads usage fee on top of sponsorship</li>
                          <li>4. Gain followers and engagement from paid reach</li>
                          <li>5. Negotiate renewal fees if brand extends</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Spark Ads Pricing for Creators</h3>
                    <div className="space-y-4">
                      {[
                        {
                          tier: 'Nano Creators (1K-10K)',
                          sparkFee: '$100-$500',
                          total: '$150-$800',
                          notes: 'Spark fee + base sponsorship. Great for building ad portfolio.',
                          color: 'from-blue-50 to-blue-100'
                        },
                        {
                          tier: 'Micro Creators (10K-50K)',
                          sparkFee: '$500-$2,000',
                          total: '$800-$3,500',
                          notes: 'Most demand from DTC brands. Negotiate 30-day vs 60-day terms.',
                          color: 'from-green-50 to-green-100'
                        },
                        {
                          tier: 'Mid-Tier (50K-500K)',
                          sparkFee: '$2,000-$5,000',
                          total: '$3,500-$15,000',
                          notes: 'High demand. Charge separate for whitelisting rights.',
                          color: 'from-purple-50 to-purple-100'
                        },
                        {
                          tier: 'Macro/Mega (500K+)',
                          sparkFee: '$5,000-$25,000+',
                          total: '$15,000-$100,000+',
                          notes: 'Premium rates. Long-term Spark agreements with performance bonuses.',
                          color: 'from-orange-50 to-orange-100'
                        },
                      ].map((tier) => (
                        <div key={tier.tier} className={`p-5 bg-gradient-to-r ${tier.color} rounded-lg border-l-4 border-neutral-400`}>
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-neutral-900">{tier.tier}</h4>
                            <span className="font-bold text-lg text-neutral-900">{tier.sparkFee}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700">
                            <div>
                              <strong>Total Deal Value:</strong> {tier.total}
                            </div>
                            <div>
                              <strong>Notes:</strong> {tier.notes}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-neutral-700">
                        Learn more about pricing Spark Ads deals in our <Link href="/guides/spark-ads-for-creators/" className="text-primary-600 underline">Spark Ads for Creators guide</Link>, and use the <Link href="/calculators/sponsorship-roi/" className="text-primary-600 underline">Sponsorship ROI Calculator</Link> to evaluate deal profitability. For general brand deal pricing, see our <Link href="/guides/brand-deals/" className="text-primary-600 underline">pricing guide</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 6: TikTok Shop Advertising */}
            <section id="shop-advertising">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 5: TikTok Shop Advertising
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    TikTok Shop has become a major e-commerce force, with GMV doubling year-over-year and expanding into new markets. Advertising on TikTok Shop combines the viral potential of the platform with seamless in-app checkout, creating a powerful conversion funnel.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Shop Ad Types</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'Product Shopping Ads',
                          description: 'Automatically generate ads from your product catalog. Shown in FYP with product cards.',
                          bestFor: 'Broad product discovery, catalog-based selling',
                          IconComponent: ShoppingCart
                        },
                        {
                          title: 'LIVE Shopping Ads',
                          description: 'Promote your LIVE shopping sessions to targeted audiences. Drive real-time purchases.',
                          bestFor: 'Flash sales, product launches, engagement',
                          IconComponent: Users
                        },
                        {
                          title: 'Video Shopping Ads',
                          description: 'Short-form video ads with embedded product links. Native shopping experience.',
                          bestFor: 'Product demos, reviews, creator content',
                          IconComponent: Megaphone
                        },
                        {
                          title: 'Shop Tab Ads',
                          description: 'Promoted placement within TikTok Shop browse tab. High purchase intent.',
                          bestFor: 'Competitive categories, brand visibility in Shop',
                          IconComponent: Layers
                        },
                      ].map((item) => {
                        const Icon = item.IconComponent;
                        return (
                        <div key={item.title} className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-6 h-6 text-orange-600" />
                            <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                          </div>
                          <p className="text-sm text-neutral-700 mb-2">{item.description}</p>
                          <p className="text-xs text-neutral-600"><strong>Best for:</strong> {item.bestFor}</p>
                        </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Affiliate + Ads Combo Strategy</h3>
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                      <p className="text-sm text-neutral-700 mb-4">
                        The most profitable TikTok Shop strategy combines organic affiliate content with paid amplification. Creators produce authentic reviews, brands boost the best-performing ones as Spark Ads, and both parties benefit from increased sales.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Step 1:</strong> Creator posts organic product review</span>
                          <span className="text-xs text-green-600">Organic reach</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Step 2:</strong> Brand identifies top-performing content</span>
                          <span className="text-xs text-blue-600">Data analysis</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Step 3:</strong> Boost as Spark Ad with conversion objective</span>
                          <span className="text-xs text-purple-600">Paid amplification</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Step 4:</strong> Creator earns affiliate commission + Spark fee</span>
                          <span className="text-xs text-orange-600">Dual revenue</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <Link href="/calculators/commerce-ads/shop-profit/">
                          <Button variant="primary">Calculate Shop Profit</Button>
                        </Link>
                        <Link href="/calculators/tiktok-ad-cost/">
                          <Button variant="secondary">Calculate Commerce Ad Cost</Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      For the latest on TikTok Shop&apos;s expansion and GMV growth, see our coverage on <Link href="/news/tiktok-shop-gmv-doubling/" className="text-primary-600 underline">TikTok Shop GMV doubling</Link> and <Link href="/news/tiktok-shop-europe-expansion/" className="text-primary-600 underline">European market expansion</Link>. Compare selling on TikTok Shop vs Amazon in our <Link href="/data/platform-comparisons/" className="text-primary-600 underline">detailed comparison</Link>. For commission structures, check the <Link href="/data/reference/" className="text-primary-600 underline">Shop Commission Rates reference</Link>.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 7: Advanced Optimization */}
            <section id="advanced-optimization">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 6: Advanced Optimization
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Once your campaigns are running, optimization is what separates profitable advertisers from those who waste budget. Advanced tactics around testing, targeting, retargeting, and creative management can improve ROAS by 50-200%.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">A/B Testing Framework</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'Creative Testing',
                          tips: ['Test 3-5 creatives per ad group minimum', 'Vary hooks (first 3 seconds) first', 'Test UGC vs polished vs text-overlay styles', 'Replace losers every 7-10 days'],
                          IconComponent: Zap
                        },
                        {
                          title: 'Audience Testing',
                          tips: ['Test interest vs lookalike vs broad targeting', 'Start broad, then narrow with data', 'Test age segments separately (18-24 vs 25-34)', 'Exclude converters from prospecting'],
                          IconComponent: Users
                        },
                        {
                          title: 'Bid & Budget Testing',
                          tips: ['Test cost cap vs bid cap vs lowest cost', 'Start with lowest cost for learning', 'Switch to cost cap once you know CPA target', 'Never change bid and creative simultaneously'],
                          IconComponent: DollarSign
                        },
                        {
                          title: 'Landing Page Testing',
                          tips: ['Test direct-to-product vs collection pages', 'Mobile-first landing page design essential', 'Match landing page style to ad creative', 'Use TikTok Instant Page for speed'],
                          IconComponent: Target
                        },
                      ].map((strategy) => {
                        const Icon = strategy.IconComponent;
                        return (
                        <div key={strategy.title} className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-6 h-6 text-orange-600" />
                            <h4 className="font-semibold text-neutral-900">{strategy.title}</h4>
                          </div>
                          <ul className="space-y-1 text-sm text-neutral-700">
                            {strategy.tips.map((tip, idx) => (
                              <li key={idx}>&bull; {tip}</li>
                            ))}
                          </ul>
                        </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Retargeting Strategies</h3>
                    <div className="p-5 bg-purple-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-700">
                        <div className="p-3 bg-white rounded-lg">
                          <h4 className="font-semibold text-neutral-900 mb-2">Video Viewers</h4>
                          <ul className="space-y-1">
                            <li>&bull; 25%, 50%, 75%, 100% view segments</li>
                            <li>&bull; Retarget 75%+ viewers for highest intent</li>
                            <li>&bull; Use different creative than prospecting</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <h4 className="font-semibold text-neutral-900 mb-2">Website Visitors</h4>
                          <ul className="space-y-1">
                            <li>&bull; All visitors (7, 14, 30, 60 days)</li>
                            <li>&bull; Product page viewers (highest value)</li>
                            <li>&bull; Cart abandoners (urgency messaging)</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <h4 className="font-semibold text-neutral-900 mb-2">Engagement</h4>
                          <ul className="space-y-1">
                            <li>&bull; Profile visitors</li>
                            <li>&bull; Post engagers (like, comment, share)</li>
                            <li>&bull; Hashtag challenge participants</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Creative Fatigue Management</h3>
                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> Signs of Creative Fatigue</h4>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        <li>&bull; <strong>CTR drops 20%+ from peak:</strong> Users have seen it too many times</li>
                        <li>&bull; <strong>CPM increases without competition changes:</strong> TikTok is reducing delivery</li>
                        <li>&bull; <strong>Frequency exceeds 3-4x per week:</strong> Oversaturation of target audience</li>
                        <li>&bull; <strong>Negative comments increase:</strong> Users annoyed by repetition</li>
                      </ul>
                      <p className="mt-3 text-sm text-neutral-700">
                        <strong>Solution:</strong> Refresh creative every 7-14 days. Maintain a pipeline of 3-5 new creatives ready to deploy. Use the <Link href="/calculators/conversion-rate/" className="text-primary-600 underline">Conversion Rate Calculator</Link> to monitor performance trends.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      Compare TikTok ad performance against other platforms using our <Link href="/data/platform-comparisons/" className="text-primary-600 underline">TikTok vs Instagram comparison</Link>. For niche-specific ad rate data, check our <Link href="/data/rpm-rates-by-niche/" className="text-primary-600 underline">RPM rates by niche</Link> and <Link href="/data/brand-deal-rates-by-niche/" className="text-primary-600 underline">brand deal rates by niche</Link> datasets.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 8: Ads Strategy Roadmap */}
            <section id="ads-roadmap">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 7: Ads Strategy Roadmap by Budget
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Your advertising strategy should evolve with your budget. Here&apos;s a tactical roadmap for each budget tier, from first-time advertisers to enterprise-level campaigns.
                  </p>

                  {[
                    {
                      title: '$500/month: Starter Campaign',
                      timeline: 'Month 1-2',
                      goals: ['Test 2-3 ad creatives', 'Identify winning audience', 'Achieve positive ROAS', 'Build pixel data'],
                      actions: [
                        'Run 1 campaign with conversion objective',
                        'Test 3 different creatives (UGC style)',
                        'Target broad interest audiences first',
                        'Daily budget: $15-$17/day',
                        'Focus on 1 product or offer',
                      ],
                      calculators: ['Ad Cost Calculator', 'CPM/CPV Calculator', 'Conversion Rate'],
                    },
                    {
                      title: '$2,000/month: Growth Phase',
                      timeline: 'Month 3-6',
                      goals: ['Scale winning campaigns', 'Build retargeting audiences', 'Achieve 2-3x ROAS consistently', 'Test Spark Ads'],
                      actions: [
                        'Run 2-3 campaigns (prospecting + retargeting)',
                        'Test 5-8 new creatives monthly',
                        'Implement retargeting for video viewers + website visitors',
                        'Partner with 1-2 creators for Spark Ads content',
                        'Daily budget: $65/day across campaigns',
                      ],
                      calculators: ['Campaign ROI', 'Cost Per Result', 'Sponsorship ROI'],
                    },
                    {
                      title: '$10,000/month: Scale Phase',
                      timeline: 'Month 6-12',
                      goals: ['Achieve 3-5x ROAS at scale', 'Build full-funnel strategy', 'Launch TikTok Shop ads', 'Automate optimization'],
                      actions: [
                        'Full funnel: awareness → consideration → conversion → retention',
                        'Creator partnerships for ongoing Spark Ads pipeline',
                        'Launch TikTok Shop product ads alongside brand campaigns',
                        'Test TopView or Branded Effect for major launches',
                        'Daily budget: $330/day across 5-8 ad groups',
                      ],
                      calculators: ['Campaign ROI', 'Customer Acquisition Cost', 'Shop Profit'],
                    },
                    {
                      title: '$50,000+/month: Enterprise',
                      timeline: 'Ongoing',
                      goals: ['Dominate category', 'Multi-market expansion', 'Brand + performance combo', 'Achieve 4x+ blended ROAS'],
                      actions: [
                        'Dedicated creative team producing 20+ assets monthly',
                        'Multi-market campaigns (US, UK, EU, SEA)',
                        'Always-on brand awareness + performance campaigns',
                        'Creator ambassador program for consistent Spark Ads supply',
                        'Advanced attribution modeling and incrementality testing',
                      ],
                      calculators: ['All Ad Calculators', 'Multi-Platform Earnings', 'Break-Even Analysis'],
                    },
                  ].map((phase, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border-2 border-neutral-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-heading-lg font-bold text-neutral-900">{phase.title}</h3>
                        <span className="text-sm font-semibold text-neutral-600 bg-white px-3 py-1 rounded-full">
                          {phase.timeline}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Goals:</h4>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {phase.goals.map((goal, idx) => (
                              <li key={idx} className="flex items-start gap-1"><CheckCircle className="w-3 h-3 flex-shrink-0 text-green-600 mt-0.5" /> <span>{goal}</span></li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Key Actions:</h4>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {phase.actions.map((action, idx) => (
                              <li key={idx}>&bull; {action}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Use These Calculators:</h4>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {phase.calculators.map((calc, idx) => (
                              <li key={idx}>&rarr; {calc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      For a comprehensive budget planning deep dive, read our <Link href="/guides/tiktok-ad-budget-calculator-guide/" className="text-primary-600 underline">TikTok Ad Budget Calculator Guide</Link>. For brand deal and influence valuation, check the <Link href="/guides/calculating-true-influence-value/" className="text-primary-600 underline">Calculating True Influence Value guide</Link>. View <Link href="/data/earnings/" className="text-primary-600 underline">regional ad data</Link> for country-specific benchmarks.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
              <div className="text-center py-8">
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-4">
                  Ready to Launch Profitable TikTok Ads?
                </h2>
                <p className="text-body-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
                  Use our advertising calculators to plan budgets, forecast ROAS, and optimize every dollar of your TikTok ad spend.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/calculators/tiktok-ad-cost/">
                    <Button variant="primary" size="lg">
                      Calculate Ad Costs
                    </Button>
                  </Link>
                  <Link href="/calculators/campaign-roi/">
                    <Button variant="secondary" size="lg">
                      Measure Campaign ROI
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Related Guides */}
            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/tiktok-ad-budget-calculator-guide/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Ad Budget Calculator Guide</h4>
                  <p className="text-body-sm text-neutral-700">Detailed budget planning and cost optimization</p>
                </Link>
                <Link href="/guides/spark-ads-for-creators/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">Spark Ads for Creators</h4>
                  <p className="text-body-sm text-neutral-700">Maximize earnings from Spark Ads partnerships</p>
                </Link>
                <Link href="/guides/brand-deals/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">Brand Deals Guide</h4>
                  <p className="text-body-sm text-neutral-700">Price and negotiate creator partnerships</p>
                </Link>
                <Link href="/guides/tiktok-shop-success-strategies/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Shop Success Strategies</h4>
                  <p className="text-body-sm text-neutral-700">Build a profitable TikTok Shop business</p>
                </Link>
                <Link href="/guides/monetization-calculator-hub/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">Monetization Calculator Hub</h4>
                  <p className="text-body-sm text-neutral-700">Complete guide to all TikTok income streams</p>
                </Link>
                <Link href="/glossary/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Creator Glossary</h4>
                  <p className="text-body-sm text-neutral-700">100+ terms every creator should know</p>
                </Link>
              </div>
            </Card>

            {/* FAQ Section */}
            <section id="faqs">
              <FAQSection
                pageName="TikTok Ads Hub"
                faqs={[
                  {
                    question: 'How much do TikTok ads cost?',
                    answer: 'TikTok ads typically cost $5-$15 CPM (cost per 1,000 impressions) for In-Feed ads, with CPC ranging from $0.50-$3.00 depending on objective and targeting. Minimum daily budget is $50 at campaign level and $20 at ad group level. Spark Ads tend to deliver 20-30% lower CPM than standard In-Feed ads. Use our TikTok Ad Cost Calculator for precise estimates based on your specific targeting and objectives.',
                  },
                  {
                    question: 'What is a good ROAS for TikTok ads?',
                    answer: 'A good ROAS varies by industry: Beauty/skincare should target 4x+, fashion 3.5x+, food/beverage 3.5x+, and SaaS/digital products 5x+. For most e-commerce businesses, breaking even at 2x ROAS is the minimum, with 3-4x being a healthy target. New campaigns may have lower ROAS during the learning phase (first 50 conversions), so plan for 2-3 weeks before evaluating true performance.',
                  },
                  {
                    question: 'What is the difference between Spark Ads and regular In-Feed ads?',
                    answer: 'Spark Ads boost existing organic posts from creator or brand accounts, while regular In-Feed ads are created directly in Ads Manager. Spark Ads typically perform 30-50% better because they leverage organic social proof (likes, comments, shares all accumulate on the original post). Engagement from Spark Ads flows back to the creator\'s profile, driving followers. Regular In-Feed ads offer more control over creative but lack authentic social proof.',
                  },
                  {
                    question: 'What is the minimum budget for TikTok advertising?',
                    answer: 'TikTok requires a minimum of $50/day at the campaign level and $20/day at the ad group level. However, for meaningful results, we recommend starting at $50-$100/day for 7-14 days to gather enough data for optimization. This means a practical minimum testing budget of $700-$1,400. The algorithm needs approximately 50 conversions per ad group per week to exit the learning phase and optimize effectively.',
                  },
                  {
                    question: 'How can I reduce my cost-per-result on TikTok?',
                    answer: 'Key tactics include: refreshing creative every 7-14 days to combat fatigue, testing UGC-style content (performs 2-5x better than polished brand ads), broadening targeting to give the algorithm more room to optimize, using Spark Ads for lower CPM, implementing proper conversion tracking for better optimization signals, and retargeting warm audiences (video viewers, website visitors) which typically have 50-70% lower CPA than prospecting.',
                  },
                  {
                    question: 'What is the best ad format for conversions on TikTok?',
                    answer: 'For conversions, Spark Ads and Video Shopping Ads consistently deliver the best results. Spark Ads leverage organic creator content and social proof for authenticity, while Video Shopping Ads integrate product links directly into the content for seamless purchase flow. In-Feed ads with conversion optimization are also effective when combined with strong creative and proper pixel tracking. For TikTok Shop products specifically, Product Shopping Ads automate creative generation from your catalog.',
                  },
                  {
                    question: 'How do TikTok ads compare to Instagram and Facebook ads?',
                    answer: 'TikTok ads offer lower CPMs ($5-$15) compared to Meta ($8-$25) and higher engagement rates, especially for younger demographics (18-34). TikTok excels at top-of-funnel awareness and impulse purchases through native-feeling content. Meta still has stronger retargeting capabilities and more mature attribution. Best practice is using both: TikTok for discovery and initial engagement, Meta for retargeting and mid-funnel nurturing. See our detailed TikTok vs Instagram comparison for more data.',
                  },
                  {
                    question: 'How long should I test a TikTok ad campaign?',
                    answer: 'Allow 7-14 days minimum for testing. The TikTok algorithm needs about 50 conversions per ad group per week to exit the learning phase. During the first 3-5 days, avoid making changes—let the algorithm learn. After 7 days, review performance and cut underperforming creatives. At 14 days, make strategic decisions about scaling or pivoting. Never judge a campaign based on just 1-2 days of data.',
                  },
                  {
                    question: 'Can small creators use TikTok ads to grow?',
                    answer: 'Yes, creators can use TikTok\'s self-serve ad platform to boost their best content for as little as $20/day. This is especially effective for growing followers (promote your most engaging video), driving traffic to products or services, and building an audience for monetization. Start by promoting content that already performs well organically—this validates the creative and ensures ad spend amplifies a proven winner.',
                  },
                  {
                    question: 'How do I track TikTok ad ROI accurately?',
                    answer: 'Accurate ROI tracking requires: installing the TikTok Pixel on all website pages, configuring conversion events (ViewContent, AddToCart, Purchase), setting up the Conversions API for server-side tracking, using UTM parameters for cross-platform attribution, and choosing the right attribution window (7-day click, 1-day view recommended). Use our Campaign ROI Calculator to centralize your ad spend and revenue data for clear ROAS measurement.',
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
