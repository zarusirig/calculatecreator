import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { CheckCircle, BarChart3, RefreshCw, Briefcase, AlertTriangle } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Understanding TikTok\'s De Jure Nationwide Ban Status | TikTok News',
  description: 'While a nationwide TikTok ban technically took effect on January 19, 2026, enforcement has been repeatedly delayed through executive orders, allowing the app to continue operating.',
  keywords: ['tiktok ban', 'tiktok enforcement', 'de jure ban', 'tiktok status', 'tiktok news'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/tiktok-nationwide-ban-status/',
  },
};

export default function TikTokNationwideBanStatusPage() {
  return (
    <>
      <NewsArticleSchema
        headline="Understanding TikTok's De Jure Nationwide Ban Status"
        description="While a nationwide TikTok ban technically took effect on January 19, 2026, enforcement has been repeatedly delayed through executive orders, allowing the app to continue operating."
        url="https://calculatecreator.com/news/tiktok-nationwide-ban-status/"
        datePublished="2025-11-01"
        dateModified="2025-11-01"
        image="https://calculatecreator.com/news/news-regulatory-1024.webp"
        keywords={['tiktok ban', 'tiktok enforcement', 'de jure ban', 'tiktok status', 'tiktok news']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'News', url: 'https://calculatecreator.com/news' },
          { name: 'TikTok Ban Status', url: 'https://calculatecreator.com/news/tiktok-nationwide-ban-status/' },
        ]}
      />
      <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Ban Status Explained</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-600 to-indigo-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/news/news-regulatory-640.avif 640w, /news/news-regulatory-1024.avif 1024w, /news/news-regulatory-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-regulatory-640.webp 640w, /news/news-regulatory-1024.webp 1024w, /news/news-regulatory-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-regulatory-1024.webp"
              alt="Featured image for Understanding TikTok's De Jure Nationwide Ban Status"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-amber-500 text-white">
              EXPLAINER
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Legal & Regulatory
            </span>
            <span className="text-white/80 text-label-sm">
              Updated: November 2025
            </span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Understanding TikTok's De Jure Nationwide Ban Status
          </h1>
          <p className="text-heading-md text-white/90">
            The complex legal situation explained: Why TikTok is technically banned but still operational
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Key Takeaway Card */}
        <Card className="bg-amber-50 border-2 border-amber-200">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-amber-800 mb-3">
            TikTok exists in a unique legal limbo: a nationwide ban has been "on the books" since January 19, 2026 (de jure), but the government has repeatedly chosen not to enforce it (de facto), allowing the platform to operate normally while negotiations continue.
          </p>
          <p className="text-body-md text-amber-800">
            <strong>What this means:</strong> TikTok is fully operational and creators can continue using the platform, but the underlying legal framework creates ongoing uncertainty that may affect long-term strategic decisions.
          </p>
        </Card>

        {/* Understanding the Legal Terms Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Understanding "De Jure" vs. "De Facto"
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                De Jure Ban (By Law)
              </h3>
              <p className="text-body-md text-blue-800 mb-2">
                "De jure" means "according to law." A nationwide TikTok ban is technically law as of January 19, 2026, passed by Congress and signed by the President.
              </p>
              <p className="text-body-sm text-blue-700 italic">
                Think of it as: "On paper, TikTok is banned."
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                De Facto Status (In Reality)
              </h3>
              <p className="text-body-md text-green-800 mb-2">
                "De facto" means "in fact" or "in practice." Despite the law, TikTok continues to operate because the government has delayed enforcement through executive orders.
              </p>
              <p className="text-body-sm text-green-700 italic">
                Think of it as: "In reality, TikTok is available and working."
              </p>
            </div>
          </div>
        </Card>

        {/* Timeline of Events Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How We Got Here: Timeline
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 pb-4 border-b border-neutral-200">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                2023-2024
              </div>
              <div className="flex-1">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">
                  Legislative Process
                </h3>
                <p className="text-body-md text-neutral-700">
                  Congress debates and passes legislation requiring ByteDance to divest TikTok or face a ban, citing national security concerns over data collection and Chinese government influence.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pb-4 border-b border-neutral-200">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                January 19, 2026
              </div>
              <div className="flex-1">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">
                  Ban Takes Legal Effect
                </h3>
                <p className="text-body-md text-neutral-700">
                  The nationwide ban officially becomes law. TikTok is now "de jure" banned in the United States.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pb-4 border-b border-neutral-200">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                January-September 2026
              </div>
              <div className="flex-1">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">
                  Repeated Enforcement Delays
                </h3>
                <p className="text-body-md text-neutral-700">
                  The administration issues multiple executive orders delaying enforcement, allowing TikTok to continue operating while pursuing a "qualified divestiture" solution.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                September 24, 2026
              </div>
              <div className="flex-1">
                <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">
                  Fourth Extension Announced
                </h3>
                <p className="text-body-md text-neutral-700">
                  Enforcement delayed until December 16, 2026, as diplomatic negotiations continue between the U.S. and China.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Why This Matters Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why This Legal Distinction Matters
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                For Creators
              </h3>
              <ul className="space-y-2 text-body-md text-neutral-700 list-disc list-inside">
                <li>Platform remains fully functional for content creation and monetization</li>
                <li>However, the underlying legal framework creates uncertainty for long-term planning</li>
                <li>Enforcement delays could end at any time, though diplomatic progress suggests otherwise</li>
                <li>Smart creators maintain presence on multiple platforms as a risk management strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                For Brands and Businesses
              </h3>
              <ul className="space-y-2 text-body-md text-neutral-700 list-disc list-inside">
                <li>Some brands remain hesitant to commit to long-term TikTok campaigns due to legal uncertainty</li>
                <li>The U.S.-China framework agreement announced in September has increased confidence</li>
                <li>Many businesses continue TikTok Shop operations with contingency plans</li>
                <li>Legal departments often require additional risk assessments for TikTok initiatives</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Current Status Section */}
        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-4">
            Current Status: What's Happening Now?
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-body-md text-green-800">
                <strong>TikTok is fully operational</strong> in the United States with all features available
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-body-md text-green-800">
                <strong>Monetization programs are active</strong> including Creator Rewards, LIVE Gifts, and TikTok Shop
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-body-md text-green-800">
                <strong>Enforcement is delayed</strong> until at least December 16, 2026
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-body-md text-green-800">
                <strong>Diplomatic negotiations are ongoing</strong> with a framework agreement in place
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-body-md text-amber-800">
                <strong>Legal uncertainty remains</strong> beyond December 2026 deadline
              </p>
            </div>
          </div>
        </Card>

        {/* What This Means Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Practical Guidance for TikTok Creators
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Continue Creating Content
              </h3>
              <p className="text-body-md text-green-800">
                TikTok is operational and monetizable. Maintain your regular posting schedule and continue building your audience. The recent U.S.-China framework agreement suggests a path toward long-term resolution.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Track Your Progress
              </h3>
              <p className="text-body-md text-blue-800">
                Use analytics to understand what's working. Document your growth and engagement rates. This data becomes valuable whether you stay on TikTok or need to demonstrate your capabilities to brands on other platforms.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Maintain Multi-Platform Presence
              </h3>
              <p className="text-body-md text-purple-800">
                Cross-post to Instagram Reels, YouTube Shorts, and other platforms. Build audiences you own through email lists or Discord communities. Diversification protects you regardless of what happens with TikTok.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Approach Brand Deals Strategically
              </h3>
              <p className="text-body-md text-amber-800">
                Some brands remain cautious about long-term TikTok commitments. Be transparent about the situation and emphasize your multi-platform presence. Many brands are moving forward with TikTok campaigns, especially shorter-term ones.
              </p>
            </div>
          </div>
        </Card>

        {/* Related Tools Section */}
        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your TikTok Potential
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            While TikTok remains operational, continue optimizing your earnings:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/tiktok-money"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Money Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/engagement-rate"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Engagement Rate Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/guides/how-to-make-money-on-tiktok"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Complete Monetization Guide</span>
              <span className="text-primary-600">→</span>
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Legal Mechanisms Behind the Delays
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Executive Authority and Enforcement Discretion</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                Understanding how a law can exist but not be enforced requires examining executive branch powers:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Presidential Powers</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>Enforcement Discretion:</strong> President can prioritize which laws to actively enforce</li>
                    <li>• <strong>Executive Orders:</strong> Can delay implementation for national security negotiations</li>
                    <li>• <strong>National Security Authority:</strong> Broad powers in matters affecting US security</li>
                    <li>• <strong>Diplomatic Flexibility:</strong> Can pause enforcement during international negotiations</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Legal Precedents</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Similar enforcement delays used in immigration policy</li>
                    <li>• Trade sanctions often have phased implementation</li>
                    <li>• Technology regulations frequently include grace periods</li>
                    <li>• National security laws allow for diplomatic solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Congressional Intent vs. Executive Implementation</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Legislative Intent</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Congress passed the ban legislation with these goals:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Force ByteDance to sell TikTok to US-based company</li>
                    <li>• Eliminate Chinese government access to US user data</li>
                    <li>• Address national security concerns about data collection</li>
                    <li>• Create deadline pressure for negotiations</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Executive Interpretation</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">The administration has interpreted the law to allow:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• "Qualified divestiture" as alternative to complete sale</li>
                    <li>• Collaborative security frameworks instead of forced separation</li>
                    <li>• Extended negotiation periods through enforcement delays</li>
                    <li>• Diplomatic solutions that satisfy legislative intent differently</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Comparing TikTok to Other Platform Regulations
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Historical Context of Social Media Regulation</h3>
              <p className="text-body-sm text-neutral-700 mb-4">
                TikTok's situation is unique, but not unprecedented in tech regulation history:
              </p>
              
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-1">Huawei (2019-Present)</h4>
                  <p className="text-body-sm text-neutral-700">Chinese telecom company faced similar national security concerns; banned from US 5G networks but operates in other capacities</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-1">WeChat (2020)</h4>
                  <p className="text-body-sm text-neutral-700">Faced ban threats similar to TikTok; courts blocked enforcement; continues operating with restrictions</p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-1">Grindr (2020)</h4>
                  <p className="text-body-sm text-neutral-700">Chinese-owned dating app forced to divest due to national security concerns; successfully sold to US investors</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Lessons from Other Platform Transitions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">What Worked:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Phased transitions with clear timelines</li>
                    <li>• Collaborative approaches between governments and companies</li>
                    <li>• Security frameworks that address concerns without complete bans</li>
                    <li>• Transparent communication with users and stakeholders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">What Caused Problems:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Abrupt enforcement without transition periods</li>
                    <li>• Lack of clear alternative solutions</li>
                    <li>• Insufficient consideration of economic impact</li>
                    <li>• Poor communication creating unnecessary panic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Scenario Planning for Creators
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Preparing for Different Outcomes</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Best Case: Permanent Resolution (Estimated 50% probability)</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>What to do now:</strong></p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Invest heavily in TikTok content and growth</li>
                    <li>• Pursue long-term brand partnerships</li>
                    <li>• Build TikTok-specific products and services</li>
                    <li>• Still maintain presence on 1-2 backup platforms</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Middle Case: Continued Uncertainty (Estimated 30% probability)</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>What to do now:</strong></p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Continue TikTok but with 3-6 month planning horizons</li>
                    <li>• Build equally strong presence on Instagram/YouTube</li>
                    <li>• Focus on owned audience (email, community platforms)</li>
                    <li>• Negotiate shorter brand contracts with renewal options</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Worst Case: Enforcement Proceeds (Estimated 20% probability)</h4>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>What to do now:</strong></p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Prioritize building audiences on permanent platforms</li>
                    <li>• Collect email addresses aggressively</li>
                    <li>• Create content that works across all platforms</li>
                    <li>• Have migration plan ready to execute within 48 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Official Sources Section */}
        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Restrictions_on_TikTok_in_the_United_States"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                Wikipedia: Restrictions on TikTok in the United States →
              </a>
            </li>
            <li>
              <Link href="/news/tiktok-ban-delayed-december-2026" className="text-primary-600 hover:text-primary-700 hover:underline text-body-md">
                Related: TikTok Ban Enforcement Delayed Until December 16, 2026 →
              </Link>
            </li>
            <li>
              <Link href="/news/us-china-deal-tiktok-operational" className="text-primary-600 hover:text-primary-700 hover:underline text-body-md">
                Related: US-China Framework Agreement Reached →
              </Link>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>Congressional Record:</strong> Full text of TikTok ban legislation and related hearings.
              </p>
            </li>
            <li>
              <p className="text-body-sm text-neutral-700">
                <strong>Federal Register:</strong> Official documentation of executive orders delaying enforcement.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </>
  );
}
