import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ComparisonSchema } from '@/components/seo/ComparisonSchema';
import { Calendar, Scale, DollarSign, Music, Video, CheckCircle, XCircle, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok vs YouTube Earnings: Which Platform Pays More in 2025?',
  description: 'Complete comparison of TikTok vs YouTube creator earnings. See RPM rates, monetization requirements, and which platform makes more money per view.',
  keywords: ['tiktok vs youtube', 'tiktok youtube earnings comparison', 'which pays more tiktok or youtube', 'creator fund vs adsense', 'tiktok youtube monetization'],
  alternates: {
    canonical: 'https://calculatecreator.com/comparisons/tiktok-vs-youtube-earnings/',
  },
};

export default function TikTokVsYouTubeEarningsPage() {
  const comparisonData = [
    {
      category: 'Ad Revenue (RPM)',
      tiktok: {
        value: '$0.02 - $0.04',
        details: 'Creator Fund pays $20-$40 per million views',
        pros: ['Lower barrier to entry', 'Faster to reach monetization'],
        cons: ['Much lower per-view earnings', 'Inconsistent payouts'],
      },
      youtube: {
        value: '$2 - $10',
        details: 'AdSense pays $2,000-$10,000 per million views',
        pros: ['50-250x higher RPM than TikTok', 'More stable income', 'Scales well'],
        cons: ['Harder to reach monetization', 'Longer videos required'],
      },
      winner: 'youtube',
    },
    {
      category: 'Monetization Requirements',
      tiktok: {
        value: 'Easier',
        details: '10K followers + 100K views (30 days)',
        pros: ['Can reach in 2-3 months', '10K followers is achievable', 'No watch hours requirement'],
        cons: ['Still need consistent views', 'Must be 18+', 'Limited countries'],
      },
      youtube: {
        value: 'Harder',
        details: '1K subscribers + 4K watch hours (12 months)',
        pros: ['Once approved, stays active', 'More mature monetization system'],
        cons: ['Takes 6-12 months average', 'Watch hours are difficult', 'High rejection rate'],
      },
      winner: 'tiktok',
    },
    {
      category: 'Content Type Best For',
      tiktok: {
        value: 'Short-form viral',
        details: '7-60 second videos, trend-based',
        pros: ['Quick to create (15-30 min per video)', 'Easier to go viral', 'Lower production needs'],
        cons: ['Hard to build deep audience connection', 'Trends die quickly', 'Less evergreen potential'],
      },
      youtube: {
        value: 'Long-form educational',
        details: '8-20 minute videos, search-based',
        pros: ['Builds loyal audience', 'Evergreen content earns forever', 'Better for tutorials/deep-dives'],
        cons: ['Requires 2-8 hours per video', 'Slower growth', 'Higher production standards'],
      },
      winner: 'tie',
    },
    {
      category: 'Brand Deal Potential',
      tiktok: {
        value: '$0.10 - $0.20/follower',
        details: 'Standard rates: 25K = $2.5K-$5K per deal',
        pros: ['Hot platform (brands want TikTok presence)', 'Easier to land deals with fewer followers', 'Fast-growing market'],
        cons: ['Lower rates than YouTube', 'Shorter contracts', 'More competition from nano influencers'],
      },
      youtube: {
        value: '$0.20 - $0.40/subscriber',
        details: 'Standard rates: 25K = $5K-$10K per deal',
        pros: ['2x higher rates than TikTok', 'Longer-term partnerships', 'More professional market'],
        cons: ['Harder to land first deal', 'Brands want 50K+ subs', 'More formal contracts'],
      },
      winner: 'youtube',
    },
    {
      category: 'Speed to $1,000',
      tiktok: {
        value: '3-6 months',
        details: 'Primarily through brand deals + LIVE gifts',
        pros: ['Viral potential = faster growth', 'Can monetize at 1K followers (LIVE)', 'Multiple income streams'],
        cons: ['Creator Fund alone is slow', 'Need viral videos or many deals', 'Inconsistent'],
      },
      youtube: {
        value: '6-12 months',
        details: 'Through AdSense + sponsorships',
        pros: ['More predictable once monetized', 'Ad revenue scales with views', 'Passive income from old videos'],
        cons: ['Slower to reach monetization', 'Takes longer to build audience', 'More upfront work'],
      },
      winner: 'tiktok',
    },
  ];

  const faqs = [
    {
      question: 'Which platform pays more per 1,000 views?',
      answer: 'YouTube pays dramatically more: $2-$10 per 1,000 views (AdSense) vs. TikTok\'s $0.02-$0.04 (Creator Fund). That\'s 50-250x more. However, TikTok videos often get more views faster due to viral algorithm. A TikTok video with 1M views earns $20-$40, while a YouTube video with 1M views earns $2,000-$10,000.',
    },
    {
      question: 'Should I focus on TikTok or YouTube as a beginner?',
      answer: 'Start with TikTok for fast growth, then expand to YouTube. TikTok\'s algorithm makes it easier to go viral and hit 10K followers (2-3 months). Once you have TikTok audience, repurpose content to YouTube Shorts (similar algorithm). Then gradually add long-form YouTube videos. Don\'t choose one—use both.',
    },
    {
      question: 'Can I make a full-time income on TikTok alone?',
      answer: 'Yes, but NOT from Creator Fund alone. You need to combine: Creator Fund ($200-$500/month), brand deals ($2K-$5K/month), TikTok LIVE ($300-$800/month), and TikTok Shop affiliate ($200-$500/month). Total: $2.7K-$6.8K/month is achievable with 50K-100K followers. YouTube alone can provide full-time income with 100K+ subs.',
    },
    {
      question: 'Do TikTok creators also succeed on YouTube?',
      answer: 'Mixed results. TikTok creators often struggle with YouTube\'s long-form format. However, YouTube Shorts (60-second videos) is perfect for TikTok creators—same content, different platform. Many TikTok stars now post to both: TikTok for discovery, YouTube Shorts for monetization (50x higher RPM).',
    },
    {
      question: 'Which platform is better for my niche?',
      answer: 'TikTok: Dance, comedy, trends, beauty, fashion (visual, short-form). YouTube: Education, tutorials, tech reviews, finance, long-form storytelling (searchable, evergreen). If your content is "how-to" or educational, YouTube pays better. If it\'s entertainment or trend-based, TikTok grows faster.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ComparisonSchema
        title="TikTok vs YouTube Earnings: Which Platform Pays More in 2025?"
        description="Complete comparison of TikTok vs YouTube creator earnings. See RPM rates, monetization requirements, and which platform makes more money per view."
        url="https://calculatecreator.com/comparisons/tiktok-vs-youtube-earnings/"
        datePublished="2024-11-01"
        dateModified="2025-11-15"
        subjectA="TikTok Creator Earnings"
        subjectB="YouTube Creator Earnings"
        faqs={faqs}
        readTime="12 min"
      />
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides/" className="hover:text-neutral-900 transition-colors">Comparisons</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok vs YouTube Earnings</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-pink-500 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok vs YouTube Earnings
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete comparison: Which platform pays creators more in 2025? See RPM, requirements, and real earnings data
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              Last updated: January 2025
            </span>
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 flex-shrink-0" />
              Side-by-Side Comparison
            </span>
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 flex-shrink-0" />
              Real Creator Data
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-5xl py-12 space-y-8">
        {/* Quick Answer */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Quick Answer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-tiktok-pink to-tiktok-red rounded-lg text-white">
              <h3 className="text-heading-md font-bold mb-3 flex items-center gap-2">
                <Music className="w-6 h-6 flex-shrink-0" />
                TikTok Wins For:
              </h3>
              <ul className="space-y-2 text-body-md">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Faster growth (viral potential)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Easier monetization (10K vs 1K+4K hours)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Quicker first $1,000 (3-6 months)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Short-form, trend-based content
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-600 to-red-800 rounded-lg text-white">
              <h3 className="text-heading-md font-bold mb-3 flex items-center gap-2">
                <Video className="w-6 h-6 flex-shrink-0" />
                YouTube Wins For:
              </h3>
              <ul className="space-y-2 text-body-md">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Earnings per view (50-250x more)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Long-term income (evergreen content)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Brand deal rates (2x higher)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300 mt-0.5" />
                  Educational, searchable content
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-body-md text-neutral-700">
              <strong>Bottom Line:</strong> TikTok for <strong>fast growth and quick wins</strong>. YouTube for <strong>long-term wealth building</strong>. Best strategy? Use both—TikTok for discovery, YouTube for monetization.
            </p>
          </div>
        </Card>

        {/* Detailed Comparison */}
        {comparisonData.map((comparison, idx) => (
          <Card key={idx}>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">{comparison.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* TikTok */}
              <div className={`p-6 rounded-lg border-2 ${comparison.winner === 'tiktok' ? 'bg-tiktok-pink/10 border-tiktok-pink' : 'bg-neutral-50 border-neutral-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-heading-md font-bold text-neutral-900 flex items-center gap-2">
                    <Music className="w-5 h-5 text-tiktok-pink" />
                    TikTok
                  </h3>
                  {comparison.winner === 'tiktok' && (
                    <span className="bg-tiktok-pink text-white px-3 py-1 rounded-full text-body-sm font-semibold">Winner</span>
                  )}
                </div>
                <div className="mb-4">
                  <p className="text-heading-sm font-bold text-tiktok-pink">{comparison.tiktok.value}</p>
                  <p className="text-body-sm text-neutral-700 mt-1">{comparison.tiktok.details}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-body-sm font-semibold text-green-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      {comparison.tiktok.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="text-body-sm text-neutral-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-red-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      {comparison.tiktok.cons.map((con, cIdx) => (
                        <li key={cIdx} className="text-body-sm text-neutral-700 flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* YouTube */}
              <div className={`p-6 rounded-lg border-2 ${comparison.winner === 'youtube' ? 'bg-red-50 border-red-600' : 'bg-neutral-50 border-neutral-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-heading-md font-bold text-neutral-900 flex items-center gap-2">
                    <Video className="w-5 h-5 text-red-600" />
                    YouTube
                  </h3>
                  {comparison.winner === 'youtube' && (
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-body-sm font-semibold">Winner</span>
                  )}
                </div>
                <div className="mb-4">
                  <p className="text-heading-sm font-bold text-red-600">{comparison.youtube.value}</p>
                  <p className="text-body-sm text-neutral-700 mt-1">{comparison.youtube.details}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-body-sm font-semibold text-green-700 mb-1">Pros:</p>
                    <ul className="space-y-1">
                      {comparison.youtube.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="text-body-sm text-neutral-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-red-700 mb-1">Cons:</p>
                    <ul className="space-y-1">
                      {comparison.youtube.cons.map((con, cIdx) => (
                        <li key={cIdx} className="text-body-sm text-neutral-700 flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Real Creator Examples */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Real Creator Examples: TikTok vs YouTube Earnings</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Same follower/subscriber count, different earnings:
          </p>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-4">Example 1: Comedy Creator (50K followers/subs)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-tiktok-pink">
                  <p className="font-semibold text-tiktok-pink mb-2 flex items-center gap-2">
                    <Music className="w-5 h-5 flex-shrink-0" />
                    TikTok Earnings
                  </p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Views: 5M/month</li>
                    <li>• Creator Fund: $60-$100 ($0.012 RPM)</li>
                    <li>• Brand deals: $300-$800 (1-2 deals)</li>
                    <li>• LIVE gifts: $100-$200</li>
                    <li className="font-bold text-tiktok-pink pt-2">Total: $460-$1,100/month</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-600">
                  <p className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <Video className="w-5 h-5 flex-shrink-0" />
                    YouTube Earnings
                  </p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Views: 2M/month (slower growth)</li>
                    <li>• AdSense: $4,000-$8,000 ($2-$4 RPM)</li>
                    <li>• Brand deals: $1,000-$2,000</li>
                    <li>• Memberships: $200-$400</li>
                    <li className="font-bold text-red-600 pt-2">Total: $5,200-$10,400/month</li>
                  </ul>
                </div>
              </div>
              <p className="text-body-sm text-neutral-600 mt-4 italic">
                YouTube earns 5-10x more despite fewer views. AdSense RPM is the key difference.
              </p>
            </div>

            {/* Example 2 */}
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-4">Example 2: Finance Creator (100K followers/subs)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-tiktok-pink">
                  <p className="font-semibold text-tiktok-pink mb-2 flex items-center gap-2">
                    <Music className="w-5 h-5 flex-shrink-0" />
                    TikTok Earnings
                  </p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Views: 10M/month</li>
                    <li>• Creator Fund: $500-$700 ($0.05 RPM)</li>
                    <li>• Brand deals: $2,000-$4,000 (2-3 deals)</li>
                    <li>• Affiliate: $300-$600</li>
                    <li className="font-bold text-tiktok-pink pt-2">Total: $2,800-$5,300/month</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-600">
                  <p className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <Video className="w-5 h-5 flex-shrink-0" />
                    YouTube Earnings
                  </p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Views: 5M/month</li>
                    <li>• AdSense: $25,000-$50,000 ($5-$10 RPM for finance)</li>
                    <li>• Brand deals: $5,000-$10,000</li>
                    <li>• Affiliate: $1,000-$2,000</li>
                    <li className="font-bold text-red-600 pt-2">Total: $31,000-$62,000/month</li>
                  </ul>
                </div>
              </div>
              <p className="text-body-sm text-neutral-600 mt-4 italic">
                Finance niche shows the biggest gap. YouTube\'s finance RPM ($5-$10) is 100-200x higher than TikTok ($0.05).
              </p>
            </div>
          </div>
        </Card>

        {/* The Hybrid Strategy */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Winning Strategy: Use Both Platforms</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Top creators don't choose—they leverage both. Here's the optimal approach:
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-tiktok-pink/10 to-red-50 border-2 border-purple-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Phase 1: Start with TikTok (Months 1-3)</h3>
              <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
                <li><strong>Focus:</strong> Grow to 10K followers on TikTok (easier/faster than YouTube)</li>
                <li><strong>Content:</strong> Post 2-3 short videos per day, jump on trends</li>
                <li><strong>Why:</strong> TikTok's algorithm makes it easier to go viral and build initial audience</li>
                <li><strong>Monetize:</strong> Apply to Creator Fund, start pitching brand deals at 5K</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-red-50 to-purple-50 border-2 border-red-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Phase 2: Add YouTube Shorts (Months 3-6)</h3>
              <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
                <li><strong>Cross-post:</strong> Upload your TikTok videos to YouTube Shorts (same content, 50x RPM)</li>
                <li><strong>Optimize:</strong> Adjust titles/descriptions for YouTube SEO (searchable keywords)</li>
                <li><strong>Why:</strong> YouTube Shorts has similar algorithm to TikTok but pays way more</li>
                <li><strong>Goal:</strong> Hit 1K subs + 4K watch hours to monetize YouTube</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-blue-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Phase 3: Add Long-Form YouTube (Months 6+)</h3>
              <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
                <li><strong>Expand:</strong> Create 8-15 minute deep-dive versions of your TikTok topics</li>
                <li><strong>Strategy:</strong> TikTok = teaser, YouTube = full tutorial/explanation</li>
                <li><strong>Why:</strong> Long-form videos earn 5-10x more per view than Shorts, evergreen income</li>
                <li><strong>Result:</strong> Dual income—TikTok for fast cash (brand deals), YouTube for passive income (AdSense)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-body-md text-neutral-700">
              <strong>Real Example:</strong> A creator with 50K on both platforms can earn $500/month from TikTok + $5K/month from YouTube = <strong>$5,500/month total</strong>. That's 11x more than TikTok alone.
            </p>
          </div>
        </Card>

        {/* Decision Framework */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Which Should YOU Focus On?</h2>
          <div className="space-y-4">
            <div className="p-4 bg-tiktok-pink/10 border-l-4 border-tiktok-pink">
              <h4 className="font-semibold text-neutral-900 mb-2">Choose TikTok as Primary If:</h4>
              <ul className="list-disc list-inside space-y-1 text-body-sm text-neutral-700 ml-4">
                <li>You want fast results (first $1K in 3-6 months)</li>
                <li>Your content is trend-based, visual, or entertainment-focused</li>
                <li>You prefer creating short, quick videos (15-60 seconds)</li>
                <li>You're comfortable with brand deals as primary income (not just ads)</li>
                <li>You're under 25 and understand TikTok culture natively</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 border-l-4 border-red-600">
              <h4 className="font-semibold text-neutral-900 mb-2">Choose YouTube as Primary If:</h4>
              <ul className="list-disc list-inside space-y-1 text-body-sm text-neutral-700 ml-4">
                <li>You want long-term wealth building (evergreen income)</li>
                <li>Your content is educational, tutorial-based, or searchable</li>
                <li>You can create 8-20 minute videos with good production quality</li>
                <li>You prefer passive income from ads over active brand outreach</li>
                <li>You have patience (6-12 months to see significant income)</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 border-l-4 border-purple-600">
              <h4 className="font-semibold text-neutral-900 mb-2">Use Both (Recommended) If:</h4>
              <ul className="list-disc list-inside space-y-1 text-body-sm text-neutral-700 ml-4">
                <li>You want to maximize earnings (best of both worlds)</li>
                <li>You can dedicate 2-3 hours per day to content creation</li>
                <li>Your content works in both short-form and long-form formats</li>
                <li>You want fast growth (TikTok) AND long-term income (YouTube)</li>
                <li>You're willing to learn two platforms simultaneously</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection
          pageName="TikTok vs YouTube Earnings"
          faqs={faqs}
        />

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-make-money-on-tiktok/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0" />
                How to Make Money on TikTok
              </h4>
              <p className="text-body-sm text-neutral-700">Complete guide to all TikTok monetization methods</p>
            </Link>
            <Link href="/guides/tiktok-creator-fund/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                TikTok Creator Fund Guide
              </h4>
              <p className="text-body-sm text-neutral-700">Everything about Creator Fund earnings and RPM rates</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
