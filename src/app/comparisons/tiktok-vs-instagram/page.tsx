import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, DollarSign, CheckCircle, XCircle, Music, Zap, Camera, Briefcase, Dumbbell, Utensils, BookOpen, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok vs Instagram Creator Income: Complete Comparison (2026)',
  description: 'Compare TikTok and Instagram creator earnings, monetization options, and which platform pays better at each follower tier with 2026 data.',
  keywords: ['tiktok vs instagram creator income', 'instagram vs tiktok earnings', 'tiktok monetization vs instagram', 'creator platform comparison', 'tiktok vs instagram reels'],
  alternates: {
    canonical: 'https://calculatecreator.com/comparisons/tiktok-vs-instagram/',
  },
};

export default function TikTokVsInstagramPage() {
  const faqs = [
    {
      question: 'Should I focus on TikTok or Instagram?',
      answer: 'Start with TikTok (faster growth), then expand to Instagram once you have content library. Use both for maximum earnings.',
    },
    {
      question: 'Which has better brand deal rates?',
      answer: 'Instagram pays 10–20% more per follower, but TikTok\'s easier growth can lead to more total deals.',
    },
    {
      question: 'Can I post same content on both?',
      answer: 'Yes. Successful creators repurpose TikToks to Instagram Reels (adjusting aspect ratio if needed).',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/data" className="hover:text-neutral-900 transition-colors">Data & Insights</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok vs Instagram</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12">
      <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok vs Instagram Creator Income: Complete Comparison (2026)
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Compare TikTok and Instagram creator earnings, monetization options, and which platform pays better at each follower tier with real 2026 data.
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated: November 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10 min read</span>
            <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> Platform Comparison Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <p className="text-body-lg text-neutral-700 mb-4">
            Choosing between TikTok and Instagram for creator income depends on your audience, content style, and monetization strategy.
            This comprehensive guide compares earning potential, requirements, and which platform pays better at each follower tier.
          </p>
        </Card>

        {/* Quick Comparison */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Quick Comparison: TikTok vs Instagram</h2>
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
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Easier to go viral</td>
                  <td className="py-3 px-4 text-green-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes (algorithm favors new creators)</span></td>
                  <td className="py-3 px-4 text-red-600"><span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> No (follower count matters more)</span></td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Better for small accounts</td>
                  <td className="py-3 px-4 text-green-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes (can earn with 1K followers)</span></td>
                  <td className="py-3 px-4 text-red-600"><span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> No (need 10K+ for most opportunities)</span></td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Higher Creator Fund/Bonus earnings</td>
                  <td className="py-3 px-4 text-red-600"><span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> No ($0.02–$0.04 per 1K views)</span></td>
                  <td className="py-3 px-4 text-green-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes (Reels bonus pays more)</span></td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Better brand deal rates</td>
                  <td className="py-3 px-4 text-yellow-600"><span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> Slightly lower</span></td>
                  <td className="py-3 px-4 text-green-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Slightly higher (10–20% more)</span></td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">More monetization options</td>
                  <td className="py-3 px-4 text-green-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes (LIVE gifts, Shop, etc.)</span></td>
                  <td className="py-3 px-4 text-yellow-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Similar</span></td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">Faster growth potential</td>
                  <td className="py-3 px-4 text-green-600"><span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes</span></td>
                  <td className="py-3 px-4 text-red-600"><span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> No</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Monetization Options Compared */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Monetization Options Compared</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4 text-pink-600">TikTok Monetization</h3>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Creator Fund</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> 10K followers, 100K views/30 days</li>
                    <li><strong>Earnings:</strong> $0.02–$0.04 per 1K views</li>
                    <li><strong>Avg monthly (50K followers):</strong> $200–$800</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">LIVE Gifts</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> 1,000 followers</li>
                    <li><strong>Earnings:</strong> $50–$1,000/month (varies widely)</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">TikTok Shop Affiliate</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> 5,000 followers</li>
                    <li><strong>Earnings:</strong> 10–20% commission</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Brand Deals</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> Any (but easier with 10K+)</li>
                    <li><strong>Rates:</strong> $0.01–$0.05 per follower</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4 text-purple-600">Instagram Monetization</h3>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Reels Bonus Program</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> Invitation-only</li>
                    <li><strong>Earnings:</strong> Varies ($100–$10,000 per month based on views)</li>
                    <li><strong>Note:</strong> Generally pays 2–3× more than TikTok Creator Fund</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Instagram Shopping</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> Business account</li>
                    <li><strong>Earnings:</strong> Commission-based (similar to TikTok Shop)</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">In-Stream Video Ads</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Status:</strong> Coming 2026</li>
                    <li><strong>Note:</strong> IGTV ads discontinued, but new format coming</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-heading-sm font-semibold text-neutral-900 mb-2">Brand Deals</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li><strong>Requirement:</strong> Any (10K+ for swipe-up links)</li>
                    <li><strong>Rates:</strong> $0.01–$0.05 per follower (10–20% higher than TikTok)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Earnings by Follower Tier */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">10K–50K Followers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-heading-sm font-semibold text-pink-600 mb-2">TikTok</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Creator Fund: $50–$300/month</li>
                    <li>Brand deals: $200–$1,000/post (2–3/month)</li>
                    <li>LIVE gifts: $100–$500/month</li>
                    <li><strong>Total: $500–$2,500/month</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-heading-sm font-semibold text-purple-600 mb-2">Instagram</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Reels bonus: $100–$500/month (if invited)</li>
                    <li>Brand deals: $300–$1,500/post (2–3/month)</li>
                    <li><strong>Total: $700–$3,500/month</strong></li>
                  </ul>
                </div>
                <p className="text-green-600 font-medium pt-2">Winner: Instagram (15–30% higher earnings)</p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">50K–100K Followers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-heading-sm font-semibold text-pink-600 mb-2">TikTok</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Creator Fund: $300–$800/month</li>
                    <li>Brand deals: $1,000–$3,000/post (3–4/month)</li>
                    <li>LIVE/Shop: $500–$2,000/month</li>
                    <li><strong>Total: $4,000–$15,000/month</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-heading-sm font-semibold text-purple-600 mb-2">Instagram</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Reels bonus: $500–$2,000/month</li>
                    <li>Brand deals: $1,500–$4,000/post (3–4/month)</li>
                    <li><strong>Total: $5,000–$18,000/month</strong></li>
                  </ul>
                </div>
                <p className="text-green-600 font-medium pt-2">Winner: Instagram (20% higher)</p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">100K+ Followers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-heading-sm font-semibold text-pink-600 mb-2">TikTok</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Creator Fund: $800–$3,000/month</li>
                    <li>Brand deals: $3,000–$15,000/post</li>
                    <li>Other: $2,000–$10,000/month</li>
                    <li><strong>Total: $15,000–$80,000/month</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-heading-sm font-semibold text-purple-600 mb-2">Instagram</h4>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>Reels bonus: $2,000–$10,000/month</li>
                    <li>Brand deals: $5,000–$20,000/post</li>
                    <li><strong>Total: $20,000–$100,000/month</strong></li>
                  </ul>
                </div>
                <p className="text-green-600 font-medium pt-2">Winner: Instagram (25–30% higher)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Growth Speed Comparison */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Growth Speed Comparison</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-pink-200 bg-pink-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-pink-900 mb-4">TikTok: Faster Growth</h3>
              <ul className="space-y-2 text-body-sm text-pink-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /> New accounts can go viral with first video</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /> Algorithm doesn't require existing followers</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /> Average time to 10K: 60–120 days (active posting)</li>
              </ul>
            </div>

            <div className="border border-purple-200 bg-purple-50 rounded-lg p-6">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-4">Instagram: Slower Growth</h3>
              <ul className="space-y-2 text-body-sm text-purple-800">
                <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0" /> Requires follower base to see significant reach</li>
                <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0" /> Algorithm favors accounts with engagement history</li>
                <li className="flex items-start gap-2"><XCircle className="w-5 h-5 flex-shrink-0" /> Average time to 10K: 6–12 months</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium"><strong>Winner for new creators:</strong> TikTok</p>
          </div>
        </Card>

        {/* Which Platform for Your Niche */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Which Platform for Your Niche?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-heading-md font-semibold text-pink-600 mb-4">Better on TikTok</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2"><Music className="w-5 h-5 flex-shrink-0" /> Entertainment, comedy</li>
                <li className="flex items-start gap-2"><Music className="w-5 h-5 flex-shrink-0" /> Dance, lip-sync</li>
                <li className="flex items-start gap-2"><Zap className="w-5 h-5 flex-shrink-0" /> Short tips/hacks</li>
                <li className="flex items-start gap-2"><Music className="w-5 h-5 flex-shrink-0" /> Younger audiences (Gen Z)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-purple-600 mb-4">Better on Instagram</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2"><Camera className="w-5 h-5 flex-shrink-0" /> Lifestyle, travel</li>
                <li className="flex items-start gap-2"><Camera className="w-5 h-5 flex-shrink-0" /> Fashion, beauty (photo-focused)</li>
                <li className="flex items-start gap-2"><Briefcase className="w-5 h-5 flex-shrink-0" /> Professional/polished content</li>
                <li className="flex items-start gap-2"><Camera className="w-5 h-5 flex-shrink-0" /> Older audiences (Millennials+)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-heading-sm font-semibold text-blue-900 mb-2">Works well on both</h4>
            <ul className="text-body-sm text-blue-800 grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2"><Dumbbell className="w-4 h-4" /> Fitness</li>
              <li className="flex items-center gap-2"><Utensils className="w-4 h-4" /> Food/recipes</li>
              <li className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Education</li>
              <li className="flex items-center gap-2"><Package className="w-4 h-4" /> Product reviews</li>
            </ul>
          </div>
        </Card>

        {/* Multi-Platform Strategy */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Multi-Platform Strategy (Best Approach)</h2>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
            <p className="text-body-lg text-neutral-800 mb-4">
              <strong>Most successful creators use both platforms:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 text-body-md text-neutral-700">
              <li><strong>Create on TikTok</strong> (easier growth)</li>
              <li><strong>Repurpose to Instagram Reels</strong> (maximize reach)</li>
              <li><strong>Drive to Instagram for DMs/sales</strong> (better conversion)</li>
              <li><strong>Monetize on both platforms</strong></li>
            </ol>
            <p className="text-green-600 font-medium mt-4">
              <strong>Result:</strong> 40–60% more total income than single-platform
            </p>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="TikTok vs Instagram Creator Income" />

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Calculate your earnings</h3>
              <div className="space-y-3">
                <Link href="/calculators/tiktok-money" className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <Camera className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">TikTok Earnings Calculator</h4>
                    <p className="text-body-sm text-neutral-600">Project TikTok income</p>
                  </div>
                </Link>
                <Link href="/calculators/brand-deal-rate" className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <DollarSign className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Brand Deal Calculator</h4>
                    <p className="text-body-sm text-neutral-600">Calculate sponsorship rates</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Compare monetization options</h3>
              <div className="space-y-3">
                <Link href="/comparisons/creator-fund-vs-brand-deals" className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <DollarSign className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Creator Fund vs Brand Deals</h4>
                    <p className="text-body-sm text-neutral-600">Which pays more?</p>
                  </div>
                </Link>
                <Link href="/guides/fitness-creators-earnings" className="flex items-center p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <Dumbbell className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900">Fitness Creators Earnings</h4>
                    <p className="text-body-sm text-neutral-600">High-paying niche guide</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Optimize strategy</h3>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Start with TikTok for fast growth</p>
                <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Expand to Instagram at 10K followers</p>
                <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Cross-promote between platforms</p>
                <p className="flex items-start gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" /> Focus on high-engagement content</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
