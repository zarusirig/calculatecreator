import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok vs Instagram Creator Income: Which Pays More? (2025)',
  description: 'Complete comparison of creator earnings on TikTok vs Instagram. Monetization options, brand deal rates, and which platform is better for your niche.',
  keywords: ['tiktok vs instagram earnings', 'creator income comparison', 'which platform pays more', 'tiktok instagram money'],
};

export default function TikTokVsInstagramIncomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/data">Data & Insights</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok vs Instagram Income</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-purple-600 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok vs Instagram Creator Income
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete 2025 comparison: Which platform pays creators more?
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Factor</th>
                  <th className="text-left py-3 px-4 font-semibold">TikTok</th>
                  <th className="text-left py-3 px-4 font-semibold">Instagram</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium">{row.factor}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {row.tiktokWin ? <CheckCircle className="w-4 h-4 text-success-600 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-neutral-400 flex-shrink-0" />}
                        <span>{row.tiktok}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {!row.tiktokWin ? <CheckCircle className="w-4 h-4 text-success-600 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-neutral-400 flex-shrink-0" />}
                        <span>{row.instagram}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>
          {earningsComparison.map((tier, idx) => (
            <div key={idx} className="mb-6 p-4 bg-neutral-50 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">{tier.range}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-tiktok-pink/10 rounded-lg">
                  <p className="font-semibold text-tiktok-pink mb-2">TikTok</p>
                  <p className="text-2xl font-bold text-neutral-900 mb-2">{tier.tiktok.total}</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    {tier.tiktok.breakdown.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <p className="font-semibold text-purple-600 mb-2">Instagram</p>
                  <p className="text-2xl font-bold text-neutral-900 mb-2">{tier.instagram.total}</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    {tier.instagram.breakdown.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm text-neutral-600">
                <strong>Winner:</strong> {tier.winner}
              </p>
            </div>
          ))}
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Which Platform for Your Niche?</h2>
          <div className="space-y-3">
            {nicheRecommendations.map((niche, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{niche.name}</h3>
                <p className="text-body-sm text-neutral-700 mb-2">{niche.recommendation}</p>
                <p className="text-body-sm text-neutral-600"><strong>Best choice:</strong> {niche.winner}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-tiktok-pink/10 to-purple-100">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Multi-Platform Strategy (Best Approach)</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Most successful creators use BOTH platforms to maximize earnings:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold mb-2">1</div>
              <p className="font-semibold text-neutral-900 mb-1">Create on TikTok</p>
              <p className="text-body-sm text-neutral-700">Easier growth, faster results</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold mb-2">2</div>
              <p className="font-semibold text-neutral-900 mb-1">Repurpose to Instagram</p>
              <p className="text-body-sm text-neutral-700">Post as Reels, maximize reach</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold mb-2">3</div>
              <p className="font-semibold text-neutral-900 mb-1">Monetize Both</p>
              <p className="text-body-sm text-neutral-700">40-60% more total income</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Detailed Revenue Stream Analysis</h2>
          <div className="space-y-6">
            <div className="p-5 bg-tiktok-pink/10 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok Monetization Deep Dive</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-tiktok-pink/20">
                  <h4 className="font-semibold text-neutral-800 mb-2">Creator Fund/Creativity Program</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>RPM Range:</strong> $0.02 - $0.04 per 1,000 views</p>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Requirements:</strong> 10K followers, 100K video views (30 days)</p>
                      <p className="text-body-sm text-neutral-700"><strong>Best Niches:</strong> Educational content, finance, business</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-1"><strong>Monthly Earnings Examples:</strong></p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• 1M views/month = $20-40</li>
                        <li>• 5M views/month = $100-200</li>
                        <li>• 20M views/month = $400-800</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-tiktok-pink/20">
                  <h4 className="font-semibold text-neutral-800 mb-2">TikTok Shop Affiliate Program</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Commission:</strong> 5-20% depending on product category</p>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Best Categories:</strong> Beauty (8-20%), Fashion (10-15%), Electronics (2-8%)</p>
                      <p className="text-body-sm text-neutral-700"><strong>Conversion Rate:</strong> 1.5-4% average</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-1"><strong>Income Potential:</strong></p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• 100K views → ~1,500 clicks → 30-60 sales</li>
                        <li>• Average order: $35-85</li>
                        <li>• Monthly potential: $200-2,000+ per 100K views</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-tiktok-pink/20">
                  <h4 className="font-semibold text-neutral-800 mb-2">LIVE Gifts & Virtual Items</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Revenue Share:</strong> 50% of gift value goes to creator</p>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Gift Values:</strong> $0.01 to $500+ per gift</p>
                      <p className="text-body-sm text-neutral-700"><strong>Best Times:</strong> 7-9 PM local time</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-1"><strong>Earning Factors:</strong></p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• Audience loyalty and engagement</li>
                        <li>• Streaming frequency and consistency</li>
                        <li>• Content quality and interaction level</li>
                        <li>• Geographic audience (US/UK pay more)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Instagram Monetization Deep Dive</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-neutral-800 mb-2">Reels Play Bonus Program</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Invite-Only:</strong> Meta selects creators based on performance</p>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Payment:</strong> $0.01-$0.05 per 1,000 plays</p>
                      <p className="text-body-sm text-neutral-700"><strong>Bonus Structure:</strong> Tiered goals with increasing payouts</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-1"><strong>Typical Bonus Tiers:</strong></p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• 50K plays = $50 bonus</li>
                        <li>• 500K plays = $500 bonus</li>
                        <li>• 2M plays = $2,000+ bonus</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-neutral-800 mb-2">Instagram Shopping & Affiliate</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Instagram Shop:</strong> Direct product integration in posts/stories</p>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Commission Rates:</strong> Similar to other platforms (5-20%)</p>
                      <p className="text-body-sm text-neutral-700"><strong>Conversion:</strong> Higher due to visual nature</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-1"><strong>Shopping Features:</strong></p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• Product tags in posts and Reels</li>
                        <li>• Shoppable Stories with product stickers</li>
                        <li>• Instagram Checkout (reduced friction)</li>
                        <li>• Live shopping during broadcasts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-neutral-800 mb-2">Subscriptions & Exclusive Content</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Monthly Subscriptions:</strong> $0.99-$99.99/month</p>
                      <p className="text-body-sm text-neutral-700 mb-2"><strong>Revenue Share:</strong> 70% to creator, 30% to Instagram</p>
                      <p className="text-body-sm text-neutral-700"><strong>Content Types:</strong> Behind-the-scenes, tutorials, Q&As</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-neutral-700 mb-1"><strong>Subscriber Benefits:</strong></p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• Exclusive posts and Reels</li>
                        <li>• Subscriber-only Stories</li>
                        <li>• Direct messaging access</li>
                        <li>• Special badges and recognition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Growth Strategy Comparison</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Platform Growth Mechanisms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-tiktok-pink mb-3">TikTok Algorithm Advantages</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Virality Potential:</strong> 0-follower accounts can get millions of views</li>
                    <li><strong>Interest-Based Discovery:</strong> Algorithm prioritizes engagement over follower count</li>
                    <li><strong>Content Lifespan:</strong> Videos can resurface weeks later</li>
                    <li><strong>Trend Amplification:</strong> Participating in trends boosts visibility</li>
                    <li><strong>Cross-Demographic Reach:</strong> Easier to reach audiences outside your follower base</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-3">Instagram Growth Mechanics</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Follower Loyalty:</strong> Higher percentage of followers see your content</li>
                    <li><strong>Multiple Formats:</strong> Posts, Reels, Stories, IGTV for diverse content</li>
                    <li><strong>Hashtag Discovery:</strong> Strategic hashtag use drives targeted growth</li>
                    <li><strong>Cross-Promotion:</strong> Stories and posts can promote each other</li>
                    <li><strong>Professional Tools:</strong> Creator Studio, advanced analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Content Strategy by Platform</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-l-4 border-tiktok-pink">
                  <h4 className="font-semibold text-neutral-800 mb-2">TikTok Content Strategy</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">High-Performing Formats:</p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• Quick tutorials (15-30s)</li>
                        <li>• Before/after transformations</li>
                        <li>• Trending audio + original visuals</li>
                        <li>• Storytelling hooks</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Posting Strategy:</p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• 1-3 posts per day</li>
                        <li>• Peak times: 6-9 AM, 7-9 PM</li>
                        <li>• Consistent hashtag strategy</li>
                        <li>• Engage within first hour</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Success Metrics:</p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• View completion rate &gt;50%</li>
                        <li>• Engagement rate 3-8%</li>
                        <li>• Share rate &gt;1%</li>
                        <li>• Comment rate &gt;0.5%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold text-neutral-800 mb-2">Instagram Content Strategy</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Content Mix:</p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• 60% Reels (algorithm priority)</li>
                        <li>• 25% Static posts</li>
                        <li>• 15% Stories (engagement)</li>
                        <li>• Weekly IGTV/Video posts</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Aesthetic Focus:</p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• Consistent visual branding</li>
                        <li>• High-quality imagery</li>
                        <li>• Cohesive color palette</li>
                        <li>• Professional photography/editing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mb-1">Engagement Tactics:</p>
                      <ul className="text-body-sm text-neutral-600 space-y-1">
                        <li>• Detailed captions with CTAs</li>
                        <li>• Story polls and questions</li>
                        <li>• User-generated content campaigns</li>
                        <li>• Collaboration with other creators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Brand Partnership Comparison</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Brand Deal Rates by Platform (2025)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-body-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-300">
                      <th className="text-left py-3 px-4">Follower Range</th>
                      <th className="text-left py-3 px-4">TikTok (per post)</th>
                      <th className="text-left py-3 px-4">Instagram (per post)</th>
                      <th className="text-left py-3 px-4">Best Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">10K-50K</td>
                      <td className="py-3 px-4 text-tiktok-pink font-semibold">$100-$500</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">$150-$750</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">Instagram</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">50K-100K</td>
                      <td className="py-3 px-4 text-tiktok-pink font-semibold">$500-$1,500</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">$750-$2,000</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">Instagram</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">100K-500K</td>
                      <td className="py-3 px-4 text-tiktok-pink font-semibold">$1,500-$5,000</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">$2,000-$7,500</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">Instagram</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium">500K-1M</td>
                      <td className="py-3 px-4 text-tiktok-pink font-semibold">$5,000-$15,000</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">$7,500-$20,000</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">Instagram</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">1M+</td>
                      <td className="py-3 px-4 text-tiktok-pink font-semibold">$15,000-$50,000+</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">$20,000-$75,000+</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">Instagram</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-400">
                <p className="text-body-sm text-neutral-700"><strong>Key Insight:</strong> Instagram consistently pays 25-50% more for brand partnerships, but TikTok offers more volume and easier growth to reach partnership thresholds.</p>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Platform-Specific Brand Partnership Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-tiktok-pink mb-3">TikTok Partnership Advantages</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Creator Marketplace:</strong> Built-in platform for brand connections</li>
                    <li><strong>Spark Ads:</strong> Brands can boost your content as ads</li>
                    <li><strong>Higher Reach:</strong> Viral potential means more impressions</li>
                    <li><strong>Younger Demographic:</strong> Attractive to youth-focused brands</li>
                    <li><strong>Trend Integration:</strong> Brands pay premium for trend participation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-3">Instagram Partnership Advantages</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Brand Collabs Manager:</strong> Professional partnership tools</li>
                    <li><strong>Shopping Integration:</strong> Direct purchase links in posts</li>
                    <li><strong>Demographic Trust:</strong> Higher purchasing power audience</li>
                    <li><strong>Content Longevity:</strong> Posts remain visible longer</li>
                    <li><strong>Cross-Format Promotion:</strong> Stories, posts, Reels for campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Time Investment vs. ROI Analysis</h2>
          <div className="space-y-6">
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Weekly Time Investment Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-tiktok-pink/10 rounded">
                  <h4 className="font-semibold text-tiktok-pink mb-3">TikTok (10-15 hours/week)</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Content Creation:</strong> 6-8 hours (planning, filming, editing)</li>
                    <li><strong>Trend Research:</strong> 1-2 hours (staying current with trends)</li>
                    <li><strong>Engagement:</strong> 1-2 hours (responding to comments, going live)</li>
                    <li><strong>Analytics Review:</strong> 0.5 hours (performance tracking)</li>
                    <li><strong>Community Building:</strong> 1-2 hours (engaging with others)</li>
                  </ul>
                  <div className="mt-3 p-2 bg-white rounded">
                    <p className="text-body-sm font-semibold text-green-600">ROI: $8-25/hour (based on earnings)</p>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded">
                  <h4 className="font-semibold text-purple-600 mb-3">Instagram (12-18 hours/week)</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>Content Creation:</strong> 8-10 hours (higher production value)</li>
                    <li><strong>Photo Editing:</strong> 2-3 hours (aesthetic consistency)</li>
                    <li><strong>Caption Writing:</strong> 1-2 hours (detailed, SEO-optimized)</li>
                    <li><strong>Stories/Engagement:</strong> 1-2 hours (daily story updates)</li>
                    <li><strong>Analytics/Strategy:</strong> 1 hour (detailed performance review)</li>
                  </ul>
                  <div className="mt-3 p-2 bg-white rounded">
                    <p className="text-body-sm font-semibold text-green-600">ROI: $12-35/hour (based on earnings)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Efficiency Optimization Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Content Batching (TikTok)</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Film 5-7 videos in one session</li>
                    <li>• Use templates and recurring formats</li>
                    <li>• Batch edit using same effects/transitions</li>
                    <li>• Schedule posts using Creator Tools</li>
                    <li>• Repurpose one idea into multiple formats</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Multi-Format Creation (Instagram)</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Create Reel, carousel post, and Story from same shoot</li>
                    <li>• Use consistent presets for editing efficiency</li>
                    <li>• Repurpose captions across similar posts</li>
                    <li>• Plan feed aesthetic in advance</li>
                    <li>• Use Creator Studio for scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/calculators/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <div className="flex items-center space-x-2 mb-1">
                <BarChart3 className="w-5 h-5 text-primary-600" />
                <h4 className="font-semibold text-neutral-900">TikTok Earnings Calculator</h4>
              </div>
              <p className="text-body-sm text-neutral-700">Project your TikTok income potential</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <div className="flex items-center space-x-2 mb-1">
                <BarChart3 className="w-5 h-5 text-primary-600" />
                <h4 className="font-semibold text-neutral-900">TikTok Monetization Guide</h4>
              </div>
              <p className="text-body-sm text-neutral-700">All ways to earn on TikTok</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

const comparisonData = [
  { factor: 'Easier to go viral', tiktok: 'Yes (algorithm favors new creators)', instagram: 'No (follower count matters more)', tiktokWin: true },
  { factor: 'Better for small accounts', tiktok: 'Yes (can earn with 1K followers)', instagram: 'No (need 10K+ for most features)', tiktokWin: true },
  { factor: 'Creator Fund/Bonus earnings', tiktok: '$0.02-$0.04 per 1K views', instagram: 'Reels bonus pays 2-3× more (invite-only)', tiktokWin: false },
  { factor: 'Brand deal rates', tiktok: 'Slightly lower', instagram: '10-20% higher', tiktokWin: false },
  { factor: 'Growth speed', tiktok: 'Faster', instagram: 'Slower', tiktokWin: true },
];

const earningsComparison = [
  {
    range: '10K-50K Followers',
    tiktok: {
      total: '$500-$2,500/mo',
      breakdown: [
        'Creator Fund: $50-$300',
        'Brand deals: $200-$1,000',
        'LIVE gifts: $100-$500',
      ],
    },
    instagram: {
      total: '$700-$3,500/mo',
      breakdown: [
        'Reels bonus: $100-$500',
        'Brand deals: $300-$1,500',
        'Affiliate: $200-$800',
      ],
    },
    winner: 'Instagram (15-30% higher)',
  },
  {
    range: '100K+ Followers',
    tiktok: {
      total: '$15,000-$80,000/mo',
      breakdown: [
        'Creator Fund: $800-$3,000',
        'Brand deals: $3,000-$15,000/post',
        'Other: $2,000-$10,000',
      ],
    },
    instagram: {
      total: '$20,000-$100,000/mo',
      breakdown: [
        'Reels bonus: $2,000-$10,000',
        'Brand deals: $5,000-$20,000/post',
        'Affiliate: $3,000-$15,000',
      ],
    },
    winner: 'Instagram (25-30% higher)',
  },
];

const nicheRecommendations = [
  { name: 'Entertainment, Comedy', recommendation: 'TikTok\'s format is better for short, punchy comedy. Easier growth.', winner: 'TikTok' },
  { name: 'Fashion, Beauty', recommendation: 'Instagram\'s photo-first approach is better for aesthetic content, but TikTok grows faster.', winner: 'Both (use both platforms)' },
  { name: 'Fitness', recommendation: 'Both work well. TikTok for quick tips, Instagram for transformation photos.', winner: 'Both' },
  { name: 'Professional/Polished content', recommendation: 'Instagram\'s mature audience and aesthetic focus is better.', winner: 'Instagram' },
];
