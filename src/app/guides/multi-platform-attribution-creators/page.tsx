import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Multi-Platform Attribution for Creators: Complete Tracking Guide 2026',
  description: 'Master multi-platform attribution to track earnings, ROI, and performance across TikTok, YouTube, Instagram. Essential analytics for creator growth.',
  keywords: ['multi-platform attribution', 'cross-platform tracking', 'creator analytics', 'roi tracking'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/multi-platform-attribution-creators/',
  },
};

const faqs = [
  {
    question: 'What is multi-platform attribution and why does it matter?',
    answer: 'Multi-platform attribution tracks which platforms drive specific results (traffic, conversions, revenue). It matters because it shows where to invest time and helps prove ROI to brands. Without it, you\'re guessing which platforms actually drive business results.',
  },
  {
    question: 'How do I track which platform drives the most revenue?',
    answer: 'Use unique tracking links (UTM parameters) for each platform, set up platform-specific landing pages, track conversions in Google Analytics or similar tools, and compare revenue by traffic source. Most creators find 80% of revenue comes from just 1-2 platforms.',
  },
  {
    question: 'What are UTM parameters and how do creators use them?',
    answer: 'UTM parameters are tags added to URLs that identify traffic sources. Example: yoursite.com?utm_source=tiktok&utm_campaign=spring2026. This tells analytics tools exactly where visitors came from, allowing precise ROI tracking.',
  },
  {
    question: 'Should I focus on all platforms or just my best performer?',
    answer: 'Focus 60-70% effort on your best-performing platform (highest ROI), 20-30% on a growing secondary platform, and 10% experimenting with new platforms. Diversification reduces risk, but spreading too thin reduces overall results.',
  },
  {
    question: 'How do I handle audience overlap across platforms?',
    answer: 'Use platform-specific content strategies (avoid cross-posting identical content), track unique visitors vs. total reach, survey your audience about where they follow you, and use cross-platform pixels to identify multi-platform followers.',
  },
  {
    question: 'What metrics should I track for each platform?',
    answer: 'Track: time invested, content created, follower growth rate, engagement rate, traffic sent to external links, conversion rate, and revenue generated. Calculate ROI = (Revenue - Time Cost) / Time Cost for each platform.',
  },
  {
    question: 'How often should I analyze multi-platform performance?',
    answer: 'Weekly for quick adjustments (which content performs best), monthly for strategic decisions (which platform to prioritize), and quarterly for major pivots (whether to abandon or double-down on platforms).',
  },
];

export default function MultiPlatformAttributionPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticleSchema
        headline="Multi-Platform Attribution for Creators: Complete Tracking Guide"
        description="Master multi-platform attribution to track earnings, ROI, and performance across TikTok, YouTube, and Instagram with proven analytics frameworks."
        url="https://calculatecreator.com/guides/multi-platform-attribution-creators"
        datePublished="2025-11-13"
        dateModified="2025-11-13"
        keywords={['multi-platform', 'attribution', 'analytics', 'creator tracking']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Guides', url: 'https://calculatecreator.com/guides' },
          { name: 'Multi-Platform Attribution', url: 'https://calculatecreator.com/guides/multi-platform-attribution-creators' },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Multi-Platform Attribution</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-analytics-640.avif 640w, /guides/guide-analytics-1024.avif 1024w, /guides/guide-analytics-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-analytics-640.webp 640w, /guides/guide-analytics-1024.webp 1024w, /guides/guide-analytics-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-analytics-1024.webp"
              alt="Featured image for Multi-Platform Attribution for Creators"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Multi-Platform Attribution for Creators
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Track performance, ROI, and revenue across all your platforms
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 13, 2025</span>
            <span>⏱️ 5 min read</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Why Multi-Platform Presence Matters
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Today's successful creators rarely rely on a single platform. TikTok might drive awareness, YouTube builds
              authority, Instagram converts sales, and email lists provide stability. But here's the challenge: without
              proper attribution, you can't answer critical questions like:
            </p>
            <ul className="text-body-md text-neutral-700 space-y-2 list-disc list-inside mb-4">
              <li>Which platform actually drives my revenue?</li>
              <li>Where should I invest more time and resources?</li>
              <li>What's the real ROI of each platform?</li>
              <li>Which platform's audience is most valuable?</li>
              <li>How do platforms work together in my funnel?</li>
            </ul>
            <p className="text-body-md text-neutral-700">
              Proper attribution transforms these questions from guesses into data-driven decisions.
            </p>
          </div>
        </Card>

        <Card className="bg-blue-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Calculate Your Multi-Platform Performance
          </h3>
          <p className="text-body-sm text-neutral-700 mb-4">
            Use these calculators to track and compare platform performance.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/multi-platform-earnings" className="btn btn-primary">
              Multi-Platform Earnings →
            </Link>
            <Link href="/calculators/campaign-roi" className="btn btn-secondary">
              Campaign ROI Calculator
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Attribution Challenges for Creators
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Challenge 1: Cross-Platform Audience Overlap</h4>
              <p className="text-body-sm text-neutral-700">
                30-60% of your audience follows you on multiple platforms. Without proper tracking, you may double-count
                reach and overestimate total audience size.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Challenge 2: Indirect Attribution</h4>
              <p className="text-body-sm text-neutral-700">
                Someone discovers you on TikTok, researches on YouTube, then purchases via Instagram link. Which platform
                gets credit? Most tools only show "last-click" attribution.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Challenge 3: Platform-Specific Metrics</h4>
              <p className="text-body-sm text-neutral-700">
                TikTok measures views, YouTube tracks watch time, Instagram counts reach. Comparing apples to oranges makes
                ROI analysis difficult without standardized metrics.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Challenge 4: Time Investment Tracking</h4>
              <p className="text-body-sm text-neutral-700">
                Creating one YouTube video might take 8 hours vs. 20 minutes for a TikTok. Without tracking time investment,
                you can't calculate true ROI.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            5 Key Metrics to Track Across Platforms
          </h2>

          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                1. Traffic Source Tracking
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Measure how much traffic each platform sends to your key destinations (website, email sign-up, product pages).
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Implementation:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Use unique bio links per platform (Linktree, Stan Store, Beacons)</li>
                    <li>Add UTM parameters to all shared links</li>
                    <li>Track in Google Analytics or similar tools</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Example UTM Structure:</p>
                  <code className="block p-2 bg-neutral-50 rounded text-xs mt-2">
                    yoursite.com/product?utm_source=tiktok&utm_medium=bio&utm_campaign=spring2026
                  </code>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                2. Conversion Attribution
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Track which platforms drive actual conversions: sales, sign-ups, downloads, appointments.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-body-sm">
                  <thead>
                    <tr className="border-b border-purple-200">
                      <th className="text-left py-2 px-3 font-semibold">Platform</th>
                      <th className="text-left py-2 px-3 font-semibold">Typical Conversion Role</th>
                      <th className="text-left py-2 px-3 font-semibold">Average CVR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-purple-100">
                      <td className="py-2 px-3">TikTok</td>
                      <td className="py-2 px-3">Awareness, discovery</td>
                      <td className="py-2 px-3">0.5-2%</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="py-2 px-3">YouTube</td>
                      <td className="py-2 px-3">Education, consideration</td>
                      <td className="py-2 px-3">2-5%</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="py-2 px-3">Instagram</td>
                      <td className="py-2 px-3">Conversion, sales</td>
                      <td className="py-2 px-3">3-8%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">Email</td>
                      <td className="py-2 px-3">Retention, repeat sales</td>
                      <td className="py-2 px-3">10-25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                3. Revenue by Platform
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Track total revenue generated from each platform across all income streams.
              </p>
              <div className="p-3 bg-white rounded">
                <p className="text-body-sm font-semibold text-neutral-900 mb-2">Revenue Sources to Track:</p>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1">Direct Platform Revenue:</p>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Creator Fund / Partner Program</li>
                      <li>Platform ad revenue</li>
                      <li>LIVE gifts / Super Thanks</li>
                      <li>Platform shop commissions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1">Attributed External Revenue:</p>
                    <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                      <li>Brand deals (by platform)</li>
                      <li>Affiliate sales (by traffic source)</li>
                      <li>Product sales (by referrer)</li>
                      <li>Service bookings (by source)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href="/calculators/multi-platform-earnings" className="text-body-sm text-green-700 hover:underline inline-block mt-3">
                Calculate Multi-Platform Earnings →
              </Link>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                4. Time Investment vs. ROI
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Calculate the efficiency of each platform by comparing revenue to time invested.
              </p>
              <div className="p-3 bg-white rounded mb-3">
                <p className="text-body-sm font-semibold text-neutral-900 mb-2">ROI Formula:</p>
                <code className="block p-3 bg-neutral-50 rounded text-sm">
                  Platform ROI = (Revenue - Costs) ÷ Hours Invested
                  <br />
                  <br />
                  Example: $2,000 revenue - $100 costs = $1,900 ÷ 20 hours = $95/hour ROI
                </code>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="text-body-sm font-semibold text-neutral-900 mb-2">Track These Time Metrics:</p>
                <ul className="text-body-sm text-neutral-700 space-y-1 list-disc list-inside">
                  <li>Content creation time (filming, editing)</li>
                  <li>Community management (responding to comments)</li>
                  <li>Strategy and planning</li>
                  <li>Analytics review and optimization</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-200">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                5. Audience Overlap Analysis
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Understand how much of your audience follows you on multiple platforms to avoid double-counting.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Methods to Identify Overlap:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Survey your audience asking where they follow you</li>
                    <li>Use cross-platform tracking pixels</li>
                    <li>Analyze unique visitors vs. total reach</li>
                    <li>Track multi-platform engagement patterns</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Typical Overlap Ranges:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• TikTok + Instagram: 40-60% overlap</li>
                    <li>• TikTok + YouTube: 20-40% overlap</li>
                    <li>• YouTube + Instagram: 30-50% overlap</li>
                    <li>• All three platforms: 15-30% overlap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-indigo-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Tools and Methods for Tracking
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-3">Free Tools:</h4>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Google Analytics:</strong> Track website traffic by source</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>UTM Builder:</strong> Create tracking URLs easily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Platform Native Analytics:</strong> TikTok, YouTube, Instagram Insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Spreadsheet Templates:</strong> Manual tracking and ROI calculations</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-3">Paid Tools:</h4>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Hootsuite/Buffer:</strong> Cross-platform analytics ($20-100/mo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Later/Planoly:</strong> Visual analytics and scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>CreatorIQ/GRIN:</strong> Enterprise creator analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>Supermetrics:</strong> Data aggregation and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            UTM Parameters for Creators
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            UTM parameters are the foundation of accurate attribution. Add these to every link you share:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">utm_source (Required)</p>
              <p className="text-body-sm text-neutral-700 mb-2">The platform sending traffic: tiktok, youtube, instagram, email</p>
              <code className="block p-2 bg-white rounded text-xs">?utm_source=tiktok</code>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">utm_medium (Required)</p>
              <p className="text-body-sm text-neutral-700 mb-2">The type of link: bio, post, story, video_description</p>
              <code className="block p-2 bg-white rounded text-xs">?utm_source=tiktok&utm_medium=bio</code>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">utm_campaign (Recommended)</p>
              <p className="text-body-sm text-neutral-700 mb-2">The specific campaign or timeframe: spring_2026, product_launch, black_friday</p>
              <code className="block p-2 bg-white rounded text-xs">?utm_source=tiktok&utm_medium=bio&utm_campaign=spring2026</code>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">utm_content (Optional)</p>
              <p className="text-body-sm text-neutral-700 mb-2">Specific content piece: video_id, post_type</p>
              <code className="block p-2 bg-white rounded text-xs">?utm_source=tiktok&utm_medium=video&utm_campaign=spring2026&utm_content=tutorial_series</code>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Platform-Specific Strategies
          </h2>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg">
              <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">TikTok Attribution Strategy</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li><strong>Bio link:</strong> Primary traffic driver, update frequently with UTM tracking</li>
                <li><strong>Pinned comment links:</strong> Secondary traffic for specific videos</li>
                <li><strong>Shop tab:</strong> Direct product links with native attribution</li>
                <li><strong>LIVE shopping:</strong> Real-time conversion tracking through Shop</li>
                <li><strong>Best for:</strong> Awareness, discovery, driving traffic to other platforms</li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
              <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">YouTube Attribution Strategy</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li><strong>Description links:</strong> Multiple tracked links in video descriptions</li>
                <li><strong>End screens:</strong> Drive to specific playlists or external sites</li>
                <li><strong>Cards:</strong> Mid-video conversion opportunities</li>
                <li><strong>Pinned comments:</strong> Highlight key offers or links</li>
                <li><strong>Best for:</strong> Education, building authority, high-intent conversions</li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">Instagram Attribution Strategy</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li><strong>Bio link:</strong> Linktree or similar with multiple tracked destinations</li>
                <li><strong>Story links (10K+):</strong> Direct swipe-up conversion opportunities</li>
                <li><strong>Shop tab:</strong> Native shopping with built-in attribution</li>
                <li><strong>Highlights:</strong> Permanent story links organized by topic</li>
                <li><strong>Best for:</strong> Visual products, direct sales, high-engagement community</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            ROI Analysis Framework
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Use this monthly framework to analyze and optimize your multi-platform strategy:
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              <div>
                <p className="text-body-sm font-semibold text-neutral-900">Calculate Platform ROI</p>
                <p className="text-body-sm text-neutral-700">Revenue divided by hours invested for each platform</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              <div>
                <p className="text-body-sm font-semibold text-neutral-900">Identify Best Performers</p>
                <p className="text-body-sm text-neutral-700">Which platform has highest ROI? Which is growing fastest?</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              <div>
                <p className="text-body-sm font-semibold text-neutral-900">Reallocate Resources</p>
                <p className="text-body-sm text-neutral-700">Invest 60-70% in best performer, 20-30% in secondary, 10% in testing</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              <div>
                <p className="text-body-sm font-semibold text-neutral-900">Test Platform Synergies</p>
                <p className="text-body-sm text-neutral-700">How do platforms work together? TikTok → YouTube → Email?</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              <div>
                <p className="text-body-sm font-semibold text-neutral-900">Make Strategic Decisions</p>
                <p className="text-body-sm text-neutral-700">Double down, maintain, reduce, or abandon each platform based on data</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Recommended Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/multi-platform-earnings" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Multi-Platform Earnings</h3>
              <p className="text-body-sm text-neutral-600">Compare revenue across platforms</p>
            </Link>
            <Link href="/calculators/campaign-roi" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Campaign ROI</h3>
              <p className="text-body-sm text-neutral-600">Calculate return on investment</p>
            </Link>
            <Link href="/calculators/content-value" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Content Value</h3>
              <p className="text-body-sm text-neutral-600">Determine per-post worth</p>
            </Link>
          </div>
        </Card>

        <FAQSection faqs={faqs} pageName="Multi-Platform Attribution" />
      </div>
    </div>
  );
}
