import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Did My TikTok Creator Fund Earnings Drop? Complete Troubleshooting',
  description: '12 common reasons for Creator Fund earnings drops with diagnostic checklist and fixes. Troubleshoot low payments and recover your income.',
  alternates: {
    canonical: 'https://calculatecreator.com/guides/why-creator-fund-earnings-dropped/',
  },
};

export default function WhyEarningsDroppedPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Why Earnings Dropped</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-600 py-12">
        <picture>
          <source
            type="image/avif"
            srcSet="/guides/guide-creator-fund-640.avif 640w, /guides/guide-creator-fund-1024.avif 1024w, /guides/guide-creator-fund-1600.avif 1600w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/guides/guide-creator-fund-640.webp 640w, /guides/guide-creator-fund-1024.webp 1024w, /guides/guide-creator-fund-1600.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/guides/guide-creator-fund-1024.webp"
            alt="Featured image for Why Did My Creator Fund Earnings Drop?"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Why Did My Creator Fund Earnings Drop?
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete troubleshooting guide with 12 common causes and solutions
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated: November 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 13 min read</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding Creator Fund Payments</h2>
          <div className="p-4 bg-blue-50 rounded-lg mb-4">
            <p className="font-semibold text-neutral-900 mb-2">The RPM Formula</p>
            <code className="block p-3 bg-white rounded text-sm">
              Earnings = (Total Views ÷ 1,000) × RPM
            </code>
            <p className="text-body-sm text-neutral-700 mt-2">
              Your earnings depend on: (1) Total video views, and (2) RPM rate (value per 1,000 views)
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">12 Common Reasons for Earnings Drops</h2>
          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">{idx + 1}. {reason.title}</h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Symptom:</strong> {reason.symptom}</p>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Cause:</strong> {reason.cause}</p>
                <p className="text-body-sm text-green-800"><strong>Fix:</strong> {reason.fix}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Advanced Diagnostic Steps</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Step 1: Analyze Your RPM Trends</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Calculate Your Recent RPM:</h4>
                  <div className="p-3 bg-white rounded text-body-sm">
                    <p className="mb-2"><strong>Formula:</strong> (Total Earnings ÷ Total Views) × 1,000</p>
                    <p className="mb-1"><strong>Example:</strong></p>
                    <p>$45 earnings ÷ 850,000 views × 1,000 = $0.053 RPM</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Industry Benchmarks (2026):</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• High RPM: $0.08-$0.15 (Education, Finance)</li>
                    <li>• Average RPM: $0.03-$0.07 (General content)</li>
                    <li>• Low RPM: $0.01-$0.03 (Entertainment, Dance)</li>
                    <li>• Very Low: Under $0.01 (Often indicates issues)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Step 2: Content Performance Analysis</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-neutral-800 mb-2">Engagement Rate Calculation</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Check if your engagement rate has declined:</p>
                  <code className="block p-2 bg-neutral-100 rounded text-sm">
                    (Likes + Comments + Shares) ÷ Views × 100 = Engagement Rate %
                  </code>
                  <p className="text-body-sm text-neutral-600 mt-2">Target: 3-8% for most content types</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white rounded">
                    <h5 className="font-semibold text-neutral-800 mb-1">Watch Time</h5>
                    <p className="text-body-sm text-neutral-700">Average watch time should be 50%+ of video length</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <h5 className="font-semibold text-neutral-800 mb-1">Completion Rate</h5>
                    <p className="text-body-sm text-neutral-700">Videos watched to end signal quality to algorithm</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <h5 className="font-semibold text-neutral-800 mb-1">Share Rate</h5>
                    <p className="text-body-sm text-neutral-700">Shares are weighted 3x more than likes in algorithm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Step 3: Audience Quality Assessment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Geographic Analysis:</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Check your top countries in TikTok Analytics:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li><strong>Tier 1 (High RPM):</strong> US, UK, Canada, Australia</li>
                    <li><strong>Tier 2 (Medium RPM):</strong> Germany, France, Japan</li>
                    <li><strong>Tier 3 (Lower RPM):</strong> Philippines, Indonesia, India</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Age Demographics:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• <strong>18-24:</strong> Highest engagement, medium RPM</li>
                    <li>• <strong>25-34:</strong> Best purchasing power, high RPM</li>
                    <li>• <strong>35+:</strong> Lower volume but premium rates</li>
                    <li>• <strong>Under 18:</strong> Limited ad targeting, low RPM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Recovery Action Plan</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">30-Day Recovery Strategy</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Week 1-2: Audit & Optimize</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>□ Analyze your top 10 performing videos from before earnings drop</li>
                    <li>□ Identify common elements (topics, formats, lengths)</li>
                    <li>□ Check posting times against your audience activity peaks</li>
                    <li>□ Review and update your bio and profile optimization</li>
                    <li>□ Remove or private any potentially policy-violating content</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Week 3-4: Test & Iterate</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>□ Create content similar to your best-performing posts</li>
                    <li>□ Experiment with new trending sounds and effects</li>
                    <li>□ A/B test different video lengths (15s, 30s, 60s)</li>
                    <li>□ Engage heavily with comments in first 2 hours after posting</li>
                    <li>□ Collaborate with other creators in your niche</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Content Optimization Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Hook Optimization:</h4>
                  <div className="space-y-2 text-body-sm">
                    <div className="p-3 bg-white rounded border-l-4 border-purple-400">
                      <p className="font-semibold text-neutral-800">First 3 Seconds Rule</p>
                      <p className="text-neutral-700">Use powerful hooks that create immediate curiosity or promise value</p>
                    </div>
                    <div className="space-y-1 text-neutral-700">
                      <p><strong>Examples:</strong></p>
                      <p>• &quot;This mistake cost me $500...&quot;</p>
                      <p>• &quot;POV: You&apos;re about to save hours...&quot;</p>
                      <p>• &quot;Watch this before you...&quot;</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Retention Tactics:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Use pattern interrupts (scene changes every 2-3 seconds)</li>
                    <li>• Add text overlays with key points</li>
                    <li>• Create cliffhangers (&quot;Wait until you see what happens&quot;)</li>
                    <li>• Use jump cuts to maintain energy</li>
                    <li>• End with strong CTA for engagement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Algorithm Recovery Tactics</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white rounded">
                    <h5 className="font-semibold text-orange-800 mb-2">Consistency</h5>
                    <p className="text-body-sm text-neutral-700">Post 1-3 times daily at consistent times for 2-3 weeks</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <h5 className="font-semibold text-orange-800 mb-2">Engagement</h5>
                    <p className="text-body-sm text-neutral-700">Reply to every comment within the first hour of posting</p>
                  </div>
                  <div className="p-3 bg-white rounded">
                    <h5 className="font-semibold text-orange-800 mb-2">Trending</h5>
                    <p className="text-body-sm text-neutral-700">Use current trending sounds and participate in viral challenges</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Pro Strategy: The &quot;Batch and Test&quot; Approach</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Create 5 videos in one session using the same successful format but different topics:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• Post them 6-8 hours apart over 2-3 days</li>
                    <li>• Monitor which performs best in first 4 hours</li>
                    <li>• Double down on the highest-performing topic/format</li>
                    <li>• This helps you recover faster by finding what currently works</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Alternative Monetization During Recovery</h2>
          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Diversify Your Income Streams</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Immediate Options:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>TikTok Shop Affiliate:</strong> 5-20% commission on product sales</li>
                    <li><strong>LIVE Gifts:</strong> Direct monetization through live streaming</li>
                    <li><strong>Brand Partnerships:</strong> Direct deals outside Creator Fund</li>
                    <li><strong>Course/Digital Products:</strong> Sell your expertise</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Long-term Strategy:</h4>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li><strong>YouTube Channel:</strong> Higher RPM rates ($1-5 per 1K views)</li>
                    <li><strong>Email List:</strong> Own your audience, 10x higher conversion</li>
                    <li><strong>Paid Community:</strong> Monthly recurring revenue</li>
                    <li><strong>Consulting/Services:</strong> High-value one-on-one offerings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Cross-Platform Recovery Strategy</h3>
              <p className="text-body-sm text-neutral-700 mb-4">While recovering TikTok earnings, simultaneously build on other platforms:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-purple-600 mb-2">Instagram Reels</h4>
                  <p className="text-body-sm text-neutral-700">Repurpose TikTok content for Reels bonus program</p>
                  <div className="text-xs text-green-600 font-semibold mt-2">Potential: 2-3x TikTok RPM</div>
                </div>
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-red-600 mb-2">YouTube Shorts</h4>
                  <p className="text-body-sm text-neutral-700">Convert top TikToks to Shorts, build long-term channel</p>
                  <div className="text-xs text-green-600 font-semibold mt-2">Potential: 5-10x TikTok RPM</div>
                </div>
                <div className="p-4 bg-white rounded">
                  <h4 className="font-semibold text-blue-600 mb-2">LinkedIn</h4>
                  <p className="text-body-sm text-neutral-700">Professional content for B2B audience and networking</p>
                  <div className="text-xs text-green-600 font-semibold mt-2">Potential: Higher-value clients</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Prevention and Long-term Success</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Early Warning System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Weekly Metrics to Monitor:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Average views per post (7-day rolling average)</li>
                    <li>• Engagement rate trends</li>
                    <li>• RPM calculations</li>
                    <li>• Follower growth rate</li>
                    <li>• Top audience countries percentage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Red Flags to Watch:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• 20%+ drop in average views for 3+ days</li>
                    <li>• RPM below your 3-month average</li>
                    <li>• Engagement rate declining for 1+ week</li>
                    <li>• Significant audience geography shifts</li>
                    <li>• Multiple videos with &lt;500 views</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Long-term Sustainability Framework</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-neutral-800 mb-2">The 70-20-10 Rule</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li><strong>70%:</strong> Proven content formats that consistently perform</li>
                    <li><strong>20%:</strong> Trending topics and challenges in your niche</li>
                    <li><strong>10%:</strong> Experimental content to discover new opportunities</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-neutral-800 mb-2">Audience Diversification Strategy</h4>
                  <p className="text-body-sm text-neutral-700 mb-2">Reduce dependence on any single platform or algorithm:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Build email list (aim for 1 email subscriber per 100 TikTok followers)</li>
                    <li>• Create content hub on your own website</li>
                    <li>• Develop community on Discord or Circle</li>
                    <li>• Maintain presence on 2-3 social platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-tiktok-pink/10">
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your Actual RPM
            </h3>
            <Link href="/calculators/rpm" className="btn btn-primary">
              Use RPM Calculator →
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

const reasons = [
  {
    title: 'Decreased Video Views',
    symptom: 'Recent videos getting fewer views than before',
    cause: 'Algorithm changes, content quality drop, or audience fatigue',
    fix: 'Review top-performing content and replicate. Test different posting times. Refresh content strategy with new hooks and formats.',
  },
  {
    title: 'Lower Engagement Rate',
    symptom: 'Similar views but earnings down',
    cause: 'Engagement rate decreased (fewer likes, comments, shares)',
    fix: 'Add clear CTAs. Create stitch/duet-worthy content. Respond to comments within first hour. Use cliffhangers to increase watch time.',
  },
  {
    title: 'Audience Location Shift',
    symptom: 'Views steady, engagement similar, earnings dropped',
    cause: 'More views from lower-paying regions',
    fix: 'Post at times when target audience (US/UK) is active. Use language/references specific to higher-RPM markets.',
  },
  {
    title: 'Content Niche Changed',
    symptom: 'Earnings dropped after pivoting niche',
    cause: 'Different niches have different RPM rates. Finance/business pays more than entertainment/comedy.',
    fix: 'If pivot was intentional, accept the RPM difference. Focus on growing views to compensate. Consider hybrid approach.',
  },
  {
    title: 'Increased Reposted Content',
    symptom: 'More duets/stitches, earnings dropped despite views',
    cause: 'TikTok pays less for non-original content',
    fix: 'Aim for 70%+ original content. When using duets/stitches, add substantial commentary.',
  },
  {
    title: 'Community Guidelines Violations',
    symptom: 'Sudden earnings drop with no view changes',
    cause: 'Shadow ban or content restrictions due to policy violations',
    fix: 'Review Community Guidelines. Remove potentially violating content. Appeal if wrongly flagged. Stay compliant for 2-3 weeks.',
  },
  {
    title: 'Watch Time Decreased',
    symptom: 'Views similar but earnings lower',
    cause: 'People not watching videos to completion',
    fix: 'Shorten videos. Improve hooks in first 3 seconds. Use pattern interrupts. Add text overlays to maintain interest.',
  },
  {
    title: 'Seasonal Fluctuations',
    symptom: 'Earnings drop during specific months',
    cause: 'Advertiser spending varies by season (lower in January, summer)',
    fix: 'Expect 20-30% drops post-holidays. Plan content calendar around high-spending periods (Q4, back-to-school).',
  },
  {
    title: 'Account Age and History',
    symptom: 'New account or recent policy strikes',
    cause: 'TikTok favors established accounts with clean records',
    fix: 'Build account reputation over time. Maintain consistent posting. Avoid any policy violations. Engage authentically.',
  },
  {
    title: 'Video Length Issues',
    symptom: 'Longer videos getting lower RPM',
    cause: 'Longer videos often have lower completion rates',
    fix: 'Test optimal length for your niche. Generally 15-30 seconds performs best. Use longer format only when retention stays high.',
  },
  {
    title: 'Competitor Saturation',
    symptom: 'Gradual earnings decline over months',
    cause: 'More creators in your niche competing for same audience',
    fix: 'Find unique angle or sub-niche. Improve production quality. Build personal brand. Differentiate your content style.',
  },
  {
    title: 'Platform-Wide RPM Changes',
    symptom: 'Everyone reporting lower earnings',
    cause: 'TikTok adjusting Creator Fund payout structure',
    fix: 'Diversify income streams. Focus on alternative monetization. Consider TikTok Creativity Program (higher RPM). Build off-platform assets.',
  },
];

