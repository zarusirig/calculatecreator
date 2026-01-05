import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { Banknote, DollarSign, Gem, Smartphone } from 'lucide-react';
import { MultiPlatformEarningsCalculatorWidget } from '@/components/calculators/multi-platform-earnings/CalculatorWidget';

export default function MultiPlatformEarningsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Multi-Platform Earnings Calculator',
              href: '/calculators/multi-platform-earnings',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Smartphone className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Multi-Platform Earnings Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Compare earning potential across TikTok, YouTube, and Instagram.
            Identify which platform to prioritize for maximum revenue.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <MultiPlatformEarningsCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Platform Comparison
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>Each platform has different monetization potential and RPM rates:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">YouTube:</span>
                    <span>$1.50-8/1K views - Best ad revenue, requires 1K subs + 4K watch hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Instagram:</span>
                    <span>$0.50-3/1K views - Reels bonus + strong brand deal rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">TikTok:</span>
                    <span>$0.02-0.04/1K views - Lowest ad revenue but fastest growth</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Growth Strategy
              </h2>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Start:</strong> TikTok for rapid audience growth
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Scale:</strong> Repurpose TikToks to Instagram Reels
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Monetize:</strong> Drive traffic to YouTube for higher RPM
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Diversify:</strong> Brand deals across all platforms
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Understanding Multi-Platform Earnings
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                The Multi-Platform Earnings Calculator helps content creators maximize their income by comparing monetization potential across TikTok, YouTube, and Instagram. Each platform has vastly different RPM (revenue per mille/1000 views) rates, making strategic platform selection crucial for financial success. While TikTok excels at audience growth, YouTube dominates monetization, and Instagram offers a balanced middle ground.
              </p>
              <p>
                Smart creators leverage all three platforms in tandem: using TikTok's algorithmic reach for rapid growth, repurposing content to Instagram Reels for additional revenue, and creating longer-form YouTube content for maximum monetization. This cross-platform strategy diversifies income streams and reduces dependence on any single algorithm or monetization policy change.
              </p>
              <p>
                Understanding which platform generates the highest ROI for your specific niche and audience allows you to allocate time and resources efficiently. For instance, finance creators might prioritize YouTube's $8-12 CPM, while entertainment creators might focus on TikTok for audience building before monetizing elsewhere.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Industry Benchmarks: What's Good?
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>YouTube Benchmarks:</strong> Average creators earn $3-5 per 1000 views. Excellent performance is $6-8+. Finance, tech, and B2B niches regularly see $8-12 CPM. The platform requires 1,000 subscribers and 4,000 watch hours for monetization, but rewards creators with the industry's highest ad revenue rates. Creators with 500K monthly views typically earn $1,500-4,000/month from ads alone.
              </p>
              <p>
                <strong>Instagram Benchmarks:</strong> Reels monetization pays $0.50-3 per 1000 views depending on engagement and audience quality. Top performers with high engagement (10%+) and valuable audiences see $2-3 RPM. Instagram's strength lies in brand partnerships rather than ad revenue - creators with 100K followers can command $500-2,000 per sponsored post.
              </p>
              <p>
                <strong>TikTok Benchmarks:</strong> Creator Fund pays $0.02-0.04 per 1000 views - significantly lower than competitors. A viral video with 1M views earns just $20-40. However, TikTok's organic reach is unmatched, making it ideal for audience building. Smart creators use TikTok for growth, then monetize through brand deals, affiliate links, and driving traffic to higher-paying platforms.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Why Multi-Platform Strategy Matters
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Relying on a single platform exposes creators to algorithm changes, policy updates, and account risks. TikTok's algorithm changes in 2024 dropped many creators' reach by 40-60% overnight. Creators with diversified audiences maintained stable income through their YouTube and Instagram presence.
              </p>
              <p>
                Multi-platform presence also compounds audience growth. A follower on one platform might prefer consuming your content elsewhere. Some audiences discover you on TikTok but prefer the community features of YouTube, where they can leave detailed comments and join memberships. Others might follow Instagram for behind-the-scenes stories while watching full content on YouTube.
              </p>
              <p>
                From a monetization perspective, each platform serves different purposes: TikTok builds awareness and drives traffic, Instagram enables quick engagement and storefront sales (TikTok Shop alternative), and YouTube generates passive ad revenue from evergreen content. Together, they create a sustainable creator business model resistant to platform-specific changes.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              8 Strategies to Maximize Multi-Platform Earnings
            </h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">1.</span>
                <div>
                  <strong>Start with TikTok Growth:</strong> Use TikTok's superior organic reach to build your initial audience. Post 1-3 times daily to capitalize on the algorithm. Once you hit 10K followers, expand to other platforms.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">2.</span>
                <div>
                  <strong>Repurpose Efficiently:</strong> Create once, publish everywhere. Post TikToks directly to Instagram Reels (they're the same format). Compile TikToks into YouTube Shorts compilations or expand concepts into 8-15 minute YouTube videos. This 3x multiplies your content reach without 3x the work.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">3.</span>
                <div>
                  <strong>Platform-Specific CTAs:</strong> On TikTok and Instagram, drive traffic to YouTube with CTAs like "Full tutorial on YouTube" or "Watch the extended version." YouTube's superior monetization justifies sending traffic there. Use YouTube end screens to promote TikTok/Instagram for community engagement.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">4.</span>
                <div>
                  <strong>Niche-Specific Platform Priority:</strong> Finance/tech/education creators should prioritize YouTube (highest CPM). Fashion/beauty/lifestyle creators balance Instagram (strong brand deals) and TikTok (trends). Entertainment creators focus on TikTok volume, then monetize through brand deals across all platforms.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">5.</span>
                <div>
                  <strong>Leverage Each Platform's Strengths:</strong> Use Instagram Stories for behind-the-scenes and product links. Use TikTok for trending challenges and viral growth. Use YouTube for in-depth tutorials and evergreen SEO content. Each platform has unique features - maximize all of them.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">6.</span>
                <div>
                  <strong>Remove Platform Watermarks:</strong> TikTok and Instagram suppress content with competitor watermarks. Download videos without watermarks before cross-posting. Use native uploading to each platform's app for maximum algorithm favorability.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">7.</span>
                <div>
                  <strong>Build Email Lists from All Platforms:</strong> Drive followers to a landing page offering a free resource (checklist, template, guide) in exchange for email. This creates a platform-independent audience you can monetize through newsletters, course sales, and affiliate promotions.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">8.</span>
                <div>
                  <strong>Track Platform-Specific Analytics:</strong> Use our calculator monthly to compare earnings. If YouTube generates 70% of revenue from 30% of your time, shift more focus there. Let data guide your platform allocation strategy.
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Example: Multi-Platform Earnings Breakdown
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Creator Profile:</strong> Finance education niche, 100K TikTok followers, 50K YouTube subscribers, 75K Instagram followers.
              </p>
              <p>
                <strong>Monthly Views:</strong> TikTok: 2M views | YouTube: 500K views | Instagram: 1M views
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                <p><strong>TikTok:</strong> 2,000,000 views ÷ 1,000 × $0.03 = $60/month (ad revenue only)</p>
                <p><strong>YouTube:</strong> 500,000 views ÷ 1,000 × $8 = $4,000/month (finance niche premium)</p>
                <p><strong>Instagram:</strong> 1,000,000 views ÷ 1,000 × $1.50 = $1,500/month (Reels bonus)</p>
                <p className="text-lg font-bold border-t pt-2 mt-2">Total Ad Revenue: $5,560/month</p>
              </div>
              <p>
                <strong>Key Insight:</strong> Despite TikTok having 4x more views than YouTube, it generates just 1% of the ad revenue. This creator should focus content efforts on YouTube while using TikTok primarily for audience acquisition and brand deal leverage (where TikTok follower count matters more than ad revenue).
              </p>
            </div>
          </Card>

          <MethodologySection
            calculatorName="multi-platform-earnings"
            formula={`Platform RPM Rates:
- YouTube: $1.50-8/1K views
- Instagram: $0.50-3/1K views
- TikTok: $0.02-0.04/1K views

Monthly Earnings = (Views / 1000) × RPM

Example:
YouTube: 500K views × $4 RPM = $2,000
Instagram: 1M views × $1.50 RPM = $1,500
TikTok: 2M views × $0.03 RPM = $60
Total: $3,560/month`}
            assumptions={[
              { label: 'RPM Variance', value: 'Actual RPM depends on niche, audience location, and engagement' },
              { label: 'Brand Deals', value: 'Does not include brand deal earnings (typically 5-10x ad revenue)' },
              { label: 'YouTube Advantage', value: 'YouTube has highest RPM but requires longer content' },
            ]}
            dataSources={[
              'Multi-Platform Creator Revenue Report 2024',
              'Social Media Monetization Benchmark Study',
              'Platform RPM Comparison Analysis',
            ]}
            limitations="Estimates are for ad revenue only. Brand deals, affiliate marketing, and product sales can significantly increase earnings across all platforms."
            lastUpdated="November 13, 2026"
          />

          <FAQSection
            pageName="Multi-Platform Earnings Calculator"
            faqs={[
              {
                question: 'Which platform pays the most?',
                answer: 'YouTube pays highest per view ($1.50-8/1K) but requires 1K subs + 4K watch hours. Instagram Reels pay $0.50-3/1K. TikTok pays least ($0.02-0.04/1K) but has fastest growth. Strategy: grow on TikTok, repurpose to Instagram, monetize on YouTube.',
              },
              {
                question: 'Should I focus on one platform or all three?',
                answer: 'Start with TikTok (easiest growth), then expand. Repurpose content to Instagram Reels (same vertical format). Once you have an audience, create longer YouTube content for higher monetization. Multi-platform diversifies risk and maximizes reach.',
              },
              {
                question: 'How do I repurpose content across platforms?',
                answer: 'TikTok → Instagram Reels: Direct repost (same format). TikTok → YouTube Shorts: Direct upload. TikTok → YouTube Long-form: Combine multiple TikToks into compilation or expand into 8-15 min video. Use native uploading (don\'t include watermarks).',
              },
              {
                question: 'Why is TikTok RPM so low?',
                answer: 'TikTok Creator Fund pays $0.02-0.04/1K views, much lower than YouTube. However, TikTok has easiest organic reach. Smart creators use TikTok for audience building, then monetize through: brand deals (10x more than fund), affiliate links, own products, or driving traffic to higher-paying platforms.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="multi-platform-earnings"
            calculators={[
              { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Deep dive on TikTok earnings', icon: 'Banknote' },
              { name: 'Ad Revenue Calculator', slug: 'ad-revenue', description: 'Calculate ad revenue potential', icon: 'DollarSign' },
              { name: 'Content Value Calculator', slug: 'content-value', description: 'Assess content portfolio value', icon: 'Gem' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
