import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { XCircle, CheckCircle, BarChart3, Eye, Clock, Globe } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Creator Fund Replaced with Creator Rewards Program | TikTok News',
  description: 'TikTok officially discontinued the Creator Fund and launched the Creator Rewards Program with dramatically increased requirements: 10,000 followers and 100,000 monthly views.',
  keywords: ['creator rewards', 'creator fund', 'tiktok monetization', 'creator economy', 'earnings program'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/creator-rewards-program-launch/',
  },
};

export default function CreatorRewardsProgramLaunchPage() {
  return (
    <>
      <NewsArticleSchema
        headline="Creator Fund Replaced with Creator Rewards Program | TikTok News"
        description="TikTok officially discontinued the Creator Fund and launched the Creator Rewards Program with dramatically increased requirements: 10,000 followers and 100,000 monthly views."
        url="https://calculatecreator.com/news/creator-rewards-program-launch/"
        datePublished="2026-01-01"
        dateModified="2026-01-01"
        image="https://calculatecreator.com/news/news-monetization-1024.webp"
        keywords={['creator rewards', 'creator fund', 'tiktok monetization', 'creator economy', 'earnings program']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'News', url: 'https://calculatecreator.com/news/' },
          { name: 'Creator Rewards Launch', url: 'https://calculatecreator.com/news/creator-rewards-program-launch/' },
        ]}
      />
      <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news/" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Creator Rewards Launch</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/news/news-monetization-640.avif 640w, /news/news-monetization-1024.avif 1024w, /news/news-monetization-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-monetization-640.webp 640w, /news/news-monetization-1024.webp 1024w, /news/news-monetization-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-monetization-1024.webp"
              alt="Featured image for Creator Fund Replaced with Creator Rewards Program"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-green-600">
              MAJOR CHANGE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Monetization
            </span>
            <span className="text-white/80 text-label-sm">Published: 2026</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Creator Fund Replaced with Creator Rewards Program
          </h1>
          <p className="text-heading-md text-white/90">
            New program offers up to 20x higher earnings but requires 10K followers and 100K monthly views
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-green-50 border-2 border-green-200">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-green-800">
            TikTok has officially sunset the Creator Fund and launched the Creator Rewards Program with dramatically higher payouts but significantly increased eligibility requirements. While earnings potential is 10-20x higher, the barrier to entry has raised substantially, focusing rewards on established creators producing longer-form content.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Creator Fund vs. Creator Rewards: Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="p-3 text-left text-heading-sm font-semibold text-neutral-900">Criteria</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-rose-900">Creator Fund (OLD)</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-green-900">Creator Rewards (NEW)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">Follower Requirement</td>
                  <td className="p-3 text-rose-800">1,000 followers</td>
                  <td className="p-3 text-green-800">10,000 followers</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">View Requirement</td>
                  <td className="p-3 text-rose-800">10,000 views (30 days)</td>
                  <td className="p-3 text-green-800">100,000 views (30 days)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">Video Length</td>
                  <td className="p-3 text-rose-800">Any length</td>
                  <td className="p-3 text-green-800">1 minute+ only</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">Earnings Per 1K Views</td>
                  <td className="p-3 text-rose-800">$0.02 - $0.04</td>
                  <td className="p-3 text-green-800">$0.40 - $1.00</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">Status</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2 text-rose-800">
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Discontinued</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2 text-green-800">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Active</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            New Eligibility Requirements
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-blue-900">10,000 Followers</h3>
              </div>
              <p className="text-body-sm text-blue-800">
                You must have at least 10,000 followers on your TikTok account. This is a 10x increase from the Creator Fund's 1,000 follower requirement.
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-purple-900">100,000 Monthly Views</h3>
              </div>
              <p className="text-body-sm text-purple-800">
                Your qualified videos (1 minute+) must generate at least 100,000 views in the last 30 days. This resets monthly and only counts eligible content.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-green-900">Videos Must Be 1 Minute or Longer</h3>
              </div>
              <p className="text-body-sm text-green-800">
                Only videos longer than 60 seconds qualify for Creator Rewards earnings. Short-form content (under 1 minute) does not generate revenue through this program.
              </p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <h3 className="text-heading-sm font-semibold text-amber-900">Regional Availability</h3>
              </div>
              <p className="text-body-sm text-amber-800">
                Must be 18+ and located in an eligible country (US, UK, Germany, France, and select other regions).
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why TikTok Made This Change
          </h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="text-body-md text-neutral-700 mb-4">
              TikTok's shift from Creator Fund to Creator Rewards reflects the platform's strategic pivot toward longer-form content and higher-quality creators. The company aims to:
            </p>
            <ul className="space-y-2 text-body-sm text-neutral-700 list-disc list-inside ml-4">
              <li>Compete with YouTube for mid-form content (1-10 minutes)</li>
              <li>Increase average watch time and platform engagement</li>
              <li>Focus monetization on established creators rather than micro-creators</li>
              <li>Improve earnings for serious, professional content creators</li>
              <li>Reduce fraudulent accounts exploiting low Creator Fund thresholds</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            What Happens to Creator Fund Members?
          </h2>
          <div className="space-y-3">
            <p className="text-body-md text-amber-800">
              Creators currently enrolled in the Creator Fund received notifications about the transition:
            </p>
            <div className="bg-white p-4 rounded-lg">
              <ul className="space-y-2 text-body-sm text-amber-800 list-disc list-inside">
                <li><strong>Automatic Opt-Out:</strong> The Creator Fund was automatically discontinued</li>
                <li><strong>Opt-In Required:</strong> You must manually apply for Creator Rewards if eligible</li>
                <li><strong>Pending Payments:</strong> All Creator Fund earnings were paid out before shutdown</li>
                <li><strong>Grace Period:</strong> Small creators given time to grow to new thresholds</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Qualify for Creator Rewards
          </h2>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Grow to 10,000 Followers</p>
                <p className="text-body-sm text-neutral-700">Focus on consistent, niche content. Use trending sounds, collaborate, and engage with your community</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Create 1+ Minute Videos</p>
                <p className="text-body-sm text-neutral-700">Shift your strategy to produce engaging content over 60 seconds. Focus on retention and storytelling</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Hit 100K Monthly Views</p>
                <p className="text-body-sm text-neutral-700">Post consistently (3-5x/week) and optimize for the algorithm changes favoring retention</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Apply Through Creator Portal</p>
                <p className="text-body-sm text-neutral-700">Once eligible, apply via Settings → Creator Tools → Creator Rewards Program</p>
              </div>
            </li>
          </ol>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your Creator Rewards Potential
          </h2>
          <div className="grid gap-3">
            <Link
              href="/calculators/tiktok-creator-fund/"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Creator Rewards Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/tiktok-money/"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Money Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Detailed Earnings Comparison
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Real-World Earnings Examples</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Here's how the same performance translates to earnings under each program:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Scenario 1: 500,000 Monthly Views</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-rose-700 mb-2">Old Creator Fund:</p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• RPM: $0.02-0.04</li>
                        <li>• Monthly earnings: $10-20</li>
                        <li>• Annual: $120-240</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-2">New Creator Rewards:</p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• RPM: $0.40-1.00</li>
                        <li>• Monthly earnings: $200-500</li>
                        <li>• Annual: $2,400-6,000</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-body-sm text-green-600 font-semibold mt-2">Increase: 10-25x higher earnings</p>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Scenario 2: 2,000,000 Monthly Views</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-rose-700 mb-2">Old Creator Fund:</p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• RPM: $0.02-0.04</li>
                        <li>• Monthly earnings: $40-80</li>
                        <li>• Annual: $480-960</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-2">New Creator Rewards:</p>
                      <ul className="text-body-sm text-neutral-700 space-y-1">
                        <li>• RPM: $0.40-1.00</li>
                        <li>• Monthly earnings: $800-2,000</li>
                        <li>• Annual: $9,600-24,000</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-body-sm text-green-600 font-semibold mt-2">Increase: 20x higher earnings</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Who Benefits Most from Creator Rewards</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                    <h4 className="font-semibold text-green-800">Winners:</h4>
                  </div>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Established creators with 10K+ followers</li>
                    <li>• Educational content creators (naturally longer videos)</li>
                    <li>• Storytellers and vloggers</li>
                    <li>• Tutorial and how-to creators</li>
                    <li>• Creators who already make 1+ minute content</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                    <h4 className="font-semibold text-red-800">Challenges For:</h4>
                  </div>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• New creators under 10K followers</li>
                    <li>• Short-form specialists (15-30s content)</li>
                    <li>• Comedy/entertainment creators (harder to extend)</li>
                    <li>• Trend-focused accounts</li>
                    <li>• Creators in low-view niches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Transition Strategy for Current Creators
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">If You're Under 10K Followers</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-1">Short-term Focus (Next 3-6 months)</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Prioritize follower growth over immediate monetization</li>
                    <li>• Post consistently (1-3 times daily)</li>
                    <li>• Engage heavily with comments to build community</li>
                    <li>• Collaborate with other creators for cross-promotion</li>
                    <li>• Use trending sounds and participate in viral challenges</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-1">Alternative Monetization</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• TikTok Shop affiliate (lower follower requirements)</li>
                    <li>• LIVE gifts (can start at 1K followers)</li>
                    <li>• Build email list for future product sales</li>
                    <li>• Focus on Instagram Reels (Reels bonus program)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">If You're Above 10K Followers</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-1">Content Strategy Shift</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Gradually increase video length to 1-3 minutes</li>
                    <li>• Maintain 70%+ retention rate on longer content</li>
                    <li>• Test different formats to find what works</li>
                    <li>• Keep some short-form content for discovery and growth</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-1">Application Process</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Ensure you meet all requirements consistently</li>
                    <li>• Apply through Creator Tools in settings</li>
                    <li>• Wait 7-14 days for approval</li>
                    <li>• Start earning immediately upon approval</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Industry Impact and Creator Response
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Creator Community Reactions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Positive Responses</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Established creators celebrate 10-20x earnings increase</li>
                    <li>• Educational creators appreciate focus on longer content</li>
                    <li>• Professional creators see this as validation of quality content</li>
                    <li>• Many report monthly earnings jumping from $50 to $500-1,000+</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Concerns Raised</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Smaller creators feel excluded from monetization</li>
                    <li>• Short-form specialists struggle to adapt content</li>
                    <li>• Higher barriers may reduce platform diversity</li>
                    <li>• Concerns about TikTok becoming "YouTube 2.0"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Long-Term Platform Strategy</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                This change signals TikTok's evolution from short-form entertainment to comprehensive content platform:
              </p>
              
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-1">Competing with YouTube</h4>
                  <p className="text-body-sm text-neutral-700">By incentivizing 1-10 minute content, TikTok directly challenges YouTube's dominance in mid-form video</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-1">Increased Watch Time</h4>
                  <p className="text-body-sm text-neutral-700">Longer videos mean more ad inventory and higher platform engagement metrics for advertisers</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-1">Quality Over Quantity</h4>
                  <p className="text-body-sm text-neutral-700">Focusing rewards on established creators encourages higher production values and professionalism</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related News</h3>
          <div className="space-y-3">
            <Link href="/news/creator-rewards-20x-earnings/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">Creator Rewards Offers Up to 20x Higher Earnings</h4>
              <p className="text-body-xs text-neutral-600">New program delivers $0.40-$1.00 per 1K views vs. Creator Fund's $0.02-$0.04</p>
            </Link>
            <Link href="/news/videos-over-one-minute-monetization/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">Only Videos Over 1 Minute Eligible</h4>
              <p className="text-body-xs text-neutral-600">Creator Rewards Program exclusively focuses on videos longer than one minute</p>
            </Link>
            <Link href="/news/retention-metrics-priority/" className="block p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 text-sm">Retention Metrics Now Priority for Distribution</h4>
              <p className="text-body-xs text-neutral-600">Watch time checkpoints at 3s, 15s, and 60s critical for FYP algorithm</p>
            </Link>
          </div>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/guides/tiktok-monetization-requirements/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                TikTok Monetization Requirements Guide →
              </a>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>TikTok Creator Portal:</strong> Official documentation on Creator Rewards Program eligibility and payout structures.
              </p>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>TikTok Newsroom:</strong> Official announcements about the transition from Creator Fund to Creator Rewards.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </>
  );
}
