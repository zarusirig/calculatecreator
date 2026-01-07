import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle, Lightbulb, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok LIVE vs YouTube LIVE Earnings: 2026 Comparison Guide',
  description: 'Compare TikTok LIVE gifts vs YouTube Super Chat earnings, requirements, payment structures, and which platform pays live streamers more.',
  keywords: ['tiktok live vs youtube', 'live streaming earnings', 'super chat vs gifts', 'live monetization comparison'],
  alternates: {
    canonical: 'https://calculatecreator.com/comparisons/tiktok-live-vs-youtube-live/',
  },
};

export default function TikTokLiveVsYouTubeLivePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/data">Data & Insights</Link><span>/</span>
            <span className="text-neutral-900">TikTok LIVE vs YouTube LIVE</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok LIVE vs YouTube LIVE: Earnings Comparison
          </h1>
          <p className="text-heading-md text-white/90 mb-6">Which platform pays live streamers more in 2025?</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <p className="text-body-lg text-neutral-700 mb-4">
            Live streaming monetization has become a major income source for content creators, but choosing between TikTok LIVE and YouTube LIVE can significantly impact your earnings. TikTok's gift economy offers lower barriers to entry with a younger, generous audience, while YouTube provides better revenue splits and more mature monetization options. This comprehensive comparison analyzes which platform pays live streamers more in 2025.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-left py-3 px-4">TikTok LIVE</th>
                  <th className="text-left py-3 px-4">YouTube LIVE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Requirements', tiktok: '1,000 followers', youtube: '1,000 subscribers (same)' },
                  { feature: 'Creator Revenue Share', tiktok: '50% of gift value', youtube: '70% of Super Chat' },
                  { feature: 'Minimum Payout', tiktok: '$50', youtube: '$100' },
                  { feature: 'Avg Earnings/Hour', tiktok: '$5-$50 (highly variable)', youtube: '$10-$100 (more stable)' },
                  { feature: 'Audience Generosity', tiktok: 'High (younger, gift culture)', youtube: 'Moderate (older, tip culture)' },
                  { feature: 'Discovery', tiktok: 'LIVE tab, FYP integration', youtube: 'Subscription feed, limited discovery' },
                  { feature: 'Stream Length', tiktok: 'Unlimited', youtube: 'Unlimited (12hr+ possible)' },
                  { feature: 'Platform Fee', tiktok: '50% (expensive)', youtube: '30% (better for creators)' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.feature}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.tiktok}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.youtube}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Revenue Share Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-tiktok-pink/10 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok LIVE Gifts</h3>
              <p className="text-body-md text-neutral-700 mb-4">Creator Share: <span className="font-bold text-tiktok-pink">50%</span></p>
              <p className="text-body-sm text-neutral-700 mb-2">Example: $100 in gifts received</p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• TikTok takes: $50 (50%)</li>
                <li>• Creator earns: $50</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">YouTube Super Chat</h3>
              <p className="text-body-md text-neutral-700 mb-4">Creator Share: <span className="font-bold text-red-600">70%</span></p>
              <p className="text-body-sm text-neutral-700 mb-2">Example: $100 in Super Chats</p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• YouTube takes: $30 (30%)</li>
                <li>• Creator earns: $70</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Winner: YouTube</strong> - Creators keep 70% vs TikTok's 50%. YouTube's revenue share is 40% better for creators.
            </p>
          </div>
        </Card>

        {/* Detailed Analysis */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Deep Dive: How Each Platform Pays</h2>

          <div className="space-y-6">
            <div className="border-2 border-pink-200 bg-pink-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-pink-900 mb-4">TikTok LIVE Gift System</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">How Gifts Work</h4>
                <p className="text-body-md text-neutral-700 mb-3">
                  Viewers purchase coins ($0.99 for 65 coins up to $99.99 for 6,500 coins) and send virtual gifts during streams. Creators receive 50% of the gift value in Diamonds, which convert to cash.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-neutral-900 mb-2">Example Calculation:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Viewer sends Rose gift (1 coin = $0.015)</li>
                    <li>You receive 0.5 Diamonds ($0.0075)</li>
                    <li>1,000 Roses = $7.50 earned</li>
                    <li>Minimum withdrawal: $50 (10,000 Diamonds)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Popular Gifts Value Chart</h4>
                <div className="bg-white rounded-lg p-4">
                  <table className="w-full text-body-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-2">Gift</th>
                        <th className="text-left py-2">Cost (Coins)</th>
                        <th className="text-left py-2">You Earn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">Rose</td>
                        <td className="py-2">1 coin</td>
                        <td className="py-2">$0.0075</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">TikTok</td>
                        <td className="py-2">5 coins</td>
                        <td className="py-2">$0.0375</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">Love Bang</td>
                        <td className="py-2">100 coins</td>
                        <td className="py-2">$0.75</td>
                      </tr>
                      <tr>
                        <td className="py-2">Lion</td>
                        <td className="py-2">500 coins</td>
                        <td className="py-2">$3.75</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-red-900 mb-4">YouTube LIVE Monetization</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Multiple Income Streams</h4>
                <p className="text-body-md text-neutral-700 mb-3">
                  YouTube LIVE offers four monetization methods: Super Chat/Stickers (70% split), channel memberships ($4.99-$24.99/month), ads during stream, and Super Thanks tips.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-neutral-900 mb-2">Revenue Breakdown:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-2">
                    <li><strong>Super Chat:</strong> Viewers pay $1-$500 to highlight messages. You keep 70% after fees.</li>
                    <li><strong>Memberships:</strong> Recurring monthly revenue from loyal fans. 70% split.</li>
                    <li><strong>Ads:</strong> Pre-roll and mid-roll ads during stream. Standard 55% revenue share.</li>
                    <li><strong>Super Thanks:</strong> One-time tips from $2-$50. 70% to creator.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Why Revenue Share Is Better</h4>
                <ul className="text-body-sm text-neutral-700 space-y-2">
                  <li><strong>Higher creator cut:</strong> 70% vs TikTok's 50% means $140 vs $100 from $200 in donations</li>
                  <li><strong>Multiple revenue streams:</strong> Stack Super Chat + memberships + ads for maximum income</li>
                  <li><strong>Lower platform fee:</strong> YouTube takes 30%, TikTok takes 50% (plus coin purchase markup)</li>
                  <li><strong>Better for established creators:</strong> Memberships create predictable recurring revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Pros and Cons */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Pros and Cons Analysis</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-pink-200 bg-pink-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-pink-900 mb-4">TikTok LIVE</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-green-700 mb-2">Pros</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Lower barrier: Only 1,000 followers needed</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Generous audience: Young users send gifts freely</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> LIVE tab discovery drives new viewers</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Quick sessions work (30min-1hr)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Simple monetization: Just gifts, no complexity</li>
                </ul>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-red-700 mb-2">Cons</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Poor revenue split (50% vs YouTube's 70%)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Volatile earnings (depends on gift mood)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> No recurring revenue model</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Platform takes huge cut on coin purchases</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Limited analytics and stream tools</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-red-900 mb-4">YouTube LIVE</h3>

              <div className="mb-4">
                <h4 className="text-heading-sm font-semibold text-green-700 mb-2">Pros</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Better revenue split (70% creator share)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Multiple income streams (chat + members + ads)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Memberships = recurring revenue</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Professional streaming tools</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> VODs earn ad revenue after stream ends</li>
                </ul>
              </div>

              <div>
                <h4 className="text-heading-sm font-semibold text-red-700 mb-2">Cons</h4>
                <ul className="space-y-2 text-body-sm text-neutral-800">
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Need existing subscriber base</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Limited discovery for new streamers</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Longer streams expected (1hr+ typical)</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> More setup and technical requirements</li>
                  <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Older audience less spontaneous with tips</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* When to Choose Each */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">When to Choose Each Platform</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-pink-500 bg-pink-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-pink-900 mb-3">Choose TikTok LIVE When:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-800">
                <li><strong>You're just starting:</strong> At 1,000 followers, you can start earning immediately without waiting for 4,000 watch hours.</li>
                <li><strong>Young audience (13-24):</strong> This demographic actively participates in gift culture and sends more donations.</li>
                <li><strong>Quick, interactive streams:</strong> If you thrive on 30-60 minute high-energy streams with constant interaction.</li>
                <li><strong>Building following fast:</strong> LIVE tab and discovery features help grow audience faster than YouTube.</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
              <h3 className="text-heading-sm font-semibold text-red-900 mb-3">Choose YouTube LIVE When:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-800">
                <li><strong>You have established channel:</strong> If you already have 1K+ subscribers, YouTube's better revenue split maximizes earnings.</li>
                <li><strong>Mature audience (25-45+):</strong> Older viewers have more disposable income and appreciate membership benefits.</li>
                <li><strong>Long-form streaming:</strong> Gaming, tutorials, or educational content that benefits from 1-3 hour sessions.</li>
                <li><strong>Want recurring revenue:</strong> Channel memberships provide predictable monthly income beyond one-time tips.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Real Earnings Comparison */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Real Streamer Earnings Examples</h2>

          <div className="space-y-4">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900 mb-2">Small Streamer (5K TikTok / 5K YouTube subs)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <p className="font-medium text-pink-600 mb-2">TikTok LIVE: $150-400/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Daily 45min streams</li>
                    <li>50-100 concurrent viewers</li>
                    <li>Gifts from engaged young audience</li>
                    <li>Revenue split: 50%</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-600 mb-2">YouTube LIVE: $100-250/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>2-3 streams per week (1-2hr each)</li>
                    <li>30-60 concurrent viewers</li>
                    <li>Fewer Super Chats but better split</li>
                    <li>Revenue split: 70%</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm font-semibold text-green-600">Winner: TikTok (more frequent engagement from younger audience)</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900 mb-2">Mid-tier Streamer (50K TikTok / 25K YouTube subs)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <p className="font-medium text-pink-600 mb-2">TikTok LIVE: $800-2,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Daily 1hr streams</li>
                    <li>200-500 concurrent viewers</li>
                    <li>High gift volume</li>
                    <li>But 50% revenue split hurts</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-600 mb-2">YouTube LIVE: $1,200-3,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>3-4 streams per week (2hr each)</li>
                    <li>150-300 concurrent viewers</li>
                    <li>Super Chat + 50 members at $4.99</li>
                    <li>70% split + recurring revenue wins</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm font-semibold text-green-600">Winner: YouTube (better split + memberships create higher total income)</p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <h3 className="font-semibold text-neutral-900 mb-2">Large Streamer (200K TikTok / 100K YouTube subs)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <p className="font-medium text-pink-600 mb-2">TikTok LIVE: $3,000-8,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>Daily 1-2hr streams</li>
                    <li>500-1,500 concurrent viewers</li>
                    <li>Whale donors spend heavily</li>
                    <li>50% split is major limitation</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-600 mb-2">YouTube LIVE: $8,000-20,000/month</p>
                  <ul className="text-neutral-700 space-y-1">
                    <li>4-5 streams per week (2-3hr each)</li>
                    <li>400-1,000 concurrent viewers</li>
                    <li>Super Chat + 500 members + ad revenue</li>
                    <li>70% split + multiple income streams</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm font-semibold text-green-600">Winner: YouTube (2-3x more income at scale from better economics)</p>
            </div>
          </div>
        </Card>

        {/* Expert Recommendation */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Expert Recommendation</h2>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Lightbulb className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Our Data-Backed Verdict: Start TikTok, Scale on YouTube</h3>
                <p className="text-body-md text-neutral-800 mb-4">
                  For beginners (under 10K followers), <strong>TikTok LIVE is better</strong> due to lower requirements and higher engagement from young audiences. However, <strong>YouTube LIVE becomes more profitable at 25K+ subscribers</strong> due to 70% revenue split, memberships, and multiple income streams.
                </p>
                <p className="text-body-md text-neutral-800 mb-4">
                  The optimal strategy: Build your audience on TikTok LIVE first (easier monetization, faster growth), then expand to YouTube LIVE once you have 10K+ followers. Many successful streamers earn $500-1,500/month from TikTok but $2,000-5,000/month from YouTube with smaller audiences.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Recommended Strategy:</p>
                  <ol className="list-decimal list-inside space-y-1 text-body-sm text-neutral-700">
                    <li>Start streaming on TikTok LIVE at 1,000 followers</li>
                    <li>Build consistent streaming schedule (daily or 5x/week)</li>
                    <li>Cross-promote YouTube channel during TikTok streams</li>
                    <li>Once at 10K+ TikTok: Add YouTube LIVE to schedule</li>
                    <li>Use TikTok for audience growth, YouTube for revenue optimization</li>
                    <li>At 50K+: Consider making YouTube your primary platform</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Can I stream on both platforms simultaneously?</h3>
              <p className="text-body-sm text-neutral-700">Yes! Many streamers use multi-streaming tools like Restream or StreamYard to broadcast to TikTok and YouTube simultaneously, maximizing audience and donations.</p>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Which platform has more generous viewers?</h3>
              <p className="text-body-sm text-neutral-700">TikTok's younger audience (13-24) sends more frequent smaller gifts. YouTube's older audience (25-45+) sends fewer but larger Super Chats. Both can be lucrative depending on your niche.</p>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">How do payout thresholds compare?</h3>
              <p className="text-body-sm text-neutral-700">TikTok requires $50 minimum withdrawal (10,000 Diamonds). YouTube requires $100 minimum. However, TikTok offers on-demand withdrawals while YouTube pays monthly.</p>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">What about viewer retention?</h3>
              <p className="text-body-sm text-neutral-700">TikTok viewers typically stay 5-15 minutes (platform encourages hopping between streams). YouTube viewers stay 30-90+ minutes, making longer monetized streams more viable.</p>
            </div>

            <div className="pb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Can I repurpose LIVE streams?</h3>
              <p className="text-body-sm text-neutral-700">YouTube LIVE VODs remain on your channel earning ad revenue indefinitely. TikTok LIVE streams disappear after ending (can download within 30 days). YouTube has major advantage for evergreen content.</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-pink-50 border border-pink-200 rounded-lg">
              <h3 className="font-semibold text-pink-900 mb-3">Choose TikTok LIVE if:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> You have young (13-24) engaged audience</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> You want quick growth (LIVE tab discovery)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Short-form content is your strength</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> You need faster path to monetization (1K easier than YouTube)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> You can stream frequently (daily LIVE builds community)</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-3">Choose YouTube LIVE if:</h3>
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> You have established YouTube channel</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Your audience is older (25-45+)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Long-form content (1hr+ streams)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> You want better revenue share (70% vs 50%)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Building sustainable long-term income</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides/tiktok-live-earnings-guide" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok LIVE Earnings Guide</h4>
              <p className="text-body-sm text-neutral-700">Complete monetization breakdown</p>
            </Link>
            <Link href="/calculators/live-gifts" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">LIVE Gifts Calculator</h4>
              <p className="text-body-sm text-neutral-700">Calculate your streaming earnings</p>
            </Link>
            <Link href="/comparisons/creator-fund-vs-youtube" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund vs YouTube</h4>
              <p className="text-body-sm text-neutral-700">Compare regular content earnings</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
