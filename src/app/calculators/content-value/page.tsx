import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { Gem } from 'lucide-react';
import { ContentValueCalculatorWidget } from '@/components/calculators/content-value/CalculatorWidget';

export default function ContentValueCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Content Value Calculator',
              href: '/calculators/content-value',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Gem className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Content Value Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate the total monetary value of your content portfolio. Useful
            for acquisitions, partnerships, or understanding your content worth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ContentValueCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Content Value?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Content value estimates the monetary worth of your entire video
                  portfolio based on reach, engagement, and niche monetization
                  potential. It's calculated per video and aggregated.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Helps negotiate licensing deals or account acquisitions
                  </li>
                  <li>
                    Demonstrates ROI when pitching to investors
                  </li>
                  <li>
                    Higher-value niches (finance, tech) have better monetization
                  </li>
                  <li>
                    Tracks how your content library grows in value over time
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Content Value by Niche
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Finance', multiplier: '3.0x', color: 'bg-success-DEFAULT' },
                  { label: 'Tech', multiplier: '2.5x', color: 'bg-success-DEFAULT' },
                  { label: 'Beauty & Fashion', multiplier: '2.0x', color: 'bg-secondary-500' },
                  { label: 'Lifestyle', multiplier: '1.5x', color: 'bg-secondary-500' },
                  { label: 'Entertainment', multiplier: '1.0x', color: 'bg-warning-DEFAULT' },
                ].map((niche) => (
                  <div
                    key={niche.label}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${niche.color}`} />
                      <span className="font-semibold text-neutral-900">
                        {niche.label}
                      </span>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      {niche.multiplier}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              How Content Value Works in Creator Economy
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                The Content Value Calculator estimates the monetary worth of your entire content portfolio - essentially treating your video library as a financial asset. This becomes critical during account sales, content licensing deals, investment pitches, or when evaluating your creator business's net worth. Unlike ad revenue which is flow (monthly earnings), content value represents stock (accumulated asset value).
              </p>
              <p>
                Content value is calculated per video based on average views, engagement rate, and niche monetization potential, then multiplied by your total video count. A creator with 200 videos averaging 100K views each at $5 CPM has significantly more portfolio value than someone with 50 videos averaging 400K views - even though monthly views might be similar. The larger catalog represents more licensing opportunities, more evergreen revenue streams, and more resilient business value.
              </p>
              <p>
                Evergreen content (tutorials, educational, reference) retains value longer than trending content (dances, memes, timely reactions). A finance tutorial from 2 years ago might still generate 10-20K views monthly, maintaining its value. A trending dance video becomes worthless weeks after the trend ends. When calculating content value, weight evergreen content 2-3x higher than trending content in your portfolio valuation.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Industry Benchmarks: Content Portfolio Values
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Small Creators (10K-50K followers):</strong> Typical portfolio value: $5,000-25,000. With 100-200 videos averaging 20-50K views, your content library has modest but real value. This matters for insurance purposes, business loan applications, or negotiating small licensing deals. Most value comes from potential rather than catalog earnings.
              </p>
              <p>
                <strong>Mid-Tier Creators (50K-250K followers):</strong> Portfolio range: $25,000-150,000. At this tier, content libraries generate meaningful passive income ($500-3,000 monthly from catalog views). Account acquisitions in this range typically sell for 1-2x annual earnings, making content value a significant factor in business valuation. Investors start viewing you as a real media business.
              </p>
              <p>
                <strong>Large Creators (250K-1M followers):</strong> Content worth: $150,000-800,000. Your video library is a substantial business asset. Media companies license content packages for $10-50K. Brands pay for exclusive access to your archive. If selling your account, content library value comprises 30-40% of total sale price alongside follower base and brand relationships.
              </p>
              <p>
                <strong>Mega Creators (1M+ followers):</strong> Portfolio valuations: $800,000-$5M+. At elite levels, content libraries command premium valuations. Media networks pay six figures for catalog licensing. Private equity firms acquire creator businesses partly based on content IP value. Some creators securitize their content catalogs (similar to music royalty deals) for upfront capital.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Why Content Value Matters Beyond Selling
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Even if you never sell your account, understanding content value serves critical business functions. First, it enables proper business insurance. Most creators are underinsured - if your account gets hacked or banned, you lose years of work. Knowing your content is worth $100K means you should have business insurance covering that loss.
              </p>
              <p>
                Second, content value matters for financing. Banks and investors increasingly fund creator businesses, but need asset valuations. Demonstrating a $200K content portfolio helps secure business loans, investor funding, or credit lines for scaling operations. Traditional businesses use equipment and inventory for collateral - creators use content libraries.
              </p>
              <p>
                Third, it informs strategic decisions. If producing one viral trending video costs 2 hours but creates $50 value, while one evergreen tutorial costs 4 hours but creates $400 value, the evergreen content has 4x better value ROI. Many creators chase viral moments when they should focus on building valuable, lasting content portfolios.
              </p>
              <p>
                Finally, high content value attracts premium opportunities. When media companies evaluate licensing partnerships, they assess content library quality and size. A creator with 500 strong videos gets better licensing deals than one with 100 viral videos. Volume and consistency signal serious business operations worth investing in.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              7 Strategies to Increase Content Portfolio Value
            </h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">1.</span>
                <div>
                  <strong>Prioritize Evergreen Over Trending Content:</strong> Aim for 60-70% evergreen (timeless topics, tutorials, reference) versus 30-40% trending (current events, viral formats). Evergreen content retains 70-80% value for 2-3 years. Trending content loses 90% value within 3-6 months. Build sustainable portfolio value.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">2.</span>
                <div>
                  <strong>Increase Catalog Size Strategically:</strong> More quality videos = higher value. A portfolio of 500 solid videos worth $100 each ($50K total) beats 100 great videos worth $300 each ($30K). Consistency matters. Post 4-7x weekly to build substantial catalog value over 2-3 years.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">3.</span>
                <div>
                  <strong>Optimize for Search and Discovery:</strong> Videos that rank in TikTok search continue generating views for years, maintaining value. Use strong keywords in captions, leverage trending topics in search, create comprehensive content on popular questions. SEO-optimized content is 3-5x more valuable than algorithmically-dependent content.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">4.</span>
                <div>
                  <strong>Elevate Production Quality Over Time:</strong> As your skills improve, your per-video value increases. Early videos might be worth $50, but mastered content can be worth $500+ each. Gradually improve editing, storytelling, and production. Higher quality = better retention = more lasting value.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">5.</span>
                <div>
                  <strong>Focus on High-Value Niches:</strong> Pivot toward finance, tech, business, or education if possible. These niches have 2-3x higher per-video value due to premium CPM and licensing demand. A finance portfolio of 200 videos might be worth $150K while entertainment portfolio of 500 videos is worth $50K.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">6.</span>
                <div>
                  <strong>Build Thematic Content Series:</strong> Series increase value because they're licensable as packages. A 20-video "Complete Guide to X" series is more valuable than 20 unrelated videos. Media companies pay premiums for content packages they can syndicate or license as complete courses.
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                <span className="font-bold text-secondary-600 text-lg">7.</span>
                <div>
                  <strong>Retain Content Rights:</strong> When doing brand deals, never give up perpetual content rights. Retain ownership of your videos. Brands sometimes offer more money for exclusive perpetual rights - decline. Your content library is a compound asset. Selling rights caps its future value.
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Example: Content Portfolio Valuation
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                <strong>Creator Profile:</strong> Tech review niche, 150K followers, 400 total videos posted over 3 years
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                <p><strong>Portfolio Breakdown:</strong></p>
                <p>• 250 evergreen reviews (avg 80K views, 6% engagement)</p>
                <p>• 100 trending tech news (avg 150K views, 4% engagement)</p>
                <p>• 50 older content (avg 10K views, 2% engagement)</p>
                <p className="pt-2"><strong>Valuation Calculation:</strong></p>
                <p>Evergreen: (80,000 ÷ 1,000) × $7 CPM × 1.6 engagement multiplier × 250 videos = $224,000</p>
                <p>Trending: (150,000 ÷ 1,000) × $7 × 1.4 × 100 × 0.3 depreciation = $44,100</p>
                <p>Archive: (10,000 ÷ 1,000) × $7 × 1.2 × 50 = $4,200</p>
                <p className="text-lg font-bold border-t pt-2 mt-2">Total Portfolio Value: $272,300</p>
              </div>
              <p className="pt-4">
                <strong>Key Insight:</strong> The evergreen review content comprises 62.5% of videos but 82% of total value. This creator made a strategic decision 18 months ago to focus on evergreen product reviews versus trending tech news. That shift increased portfolio value by an estimated $150K. When selling this account or seeking investment, the $272K content value + $100K annual revenue supports a $500K-1M business valuation.
              </p>
            </div>
          </Card>

          <MethodologySection
            calculatorName="content-value"
            formula={`Base Value per Video = (Avg Views / 1000) × CPM × Engagement Multiplier
CPM = $2-$10 depending on niche
Engagement Multiplier = 1 + (Engagement Rate / 10)
Total Value = Base Value × Total Videos

Example:
100 videos, 50K avg views, 5% engagement, Lifestyle niche
Base: (50,000 / 1000) × $5 × 1.5 = $375 per video
Total: $375 × 100 = $37,500`}
            assumptions={[
              {
                label: 'CPM Rates',
                value:
                  'Based on industry-standard TikTok CPM rates by niche ($2-10)',
              },
              {
                label: 'Engagement Premium',
                value: 'Higher engagement adds 10-50% value premium',
              },
              {
                label: 'Content Longevity',
                value: 'Assumes evergreen content retains value; trending content depreciates faster',
              },
            ]}
            dataSources={[
              'TikTok Creator Marketplace CPM Data 2024',
              'Content Portfolio Valuation Study',
              'Influencer Account Acquisition Benchmarks',
            ]}
            limitations="Values are estimates for negotiation purposes. Actual value depends on audience demographics, content rights, and buyer needs. Trending content loses value faster than evergreen content."
            lastUpdated="November 13, 2026"
          />

          <FAQSection
            pageName="Content Value Calculator"
            faqs={[
              {
                question: 'How is content value calculated?',
                answer:
                  'Content value is based on three factors: (1) Total reach (views), (2) Engagement quality, and (3) Niche monetization potential. High-value niches like finance and tech command 2-3x premiums due to better brand deal rates and audience purchasing power.',
              },
              {
                question: 'When would I use a content value calculation?',
                answer:
                  'Use cases: (1) Negotiating account acquisition or sale, (2) Licensing your content library to brands/agencies, (3) Pitching to investors or seeking loans, (4) Understanding asset value for tax/accounting, (5) Comparing ROI across different content strategies.',
              },
              {
                question: 'Does old content still have value?',
                answer:
                  'Yes, if it\'s evergreen. Educational, tutorial, and reference content retains value longer. Trending/meme content depreciates quickly. Videos still getting views (even years later) are highly valuable. Check your analytics for "catalog content" that continues performing.',
              },
              {
                question: 'How can I increase my content portfolio value?',
                answer:
                  'Strategies: (1) Pivot to higher-value niches (finance, tech, B2B), (2) Create evergreen content that compounds views, (3) Improve engagement rate (comments/shares worth more), (4) Build a larger content library, (5) Optimize for SEO/discoverability to extend content lifespan.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="content-value"
            calculators={[
              {
                name: 'Niche Profitability Calculator',
                slug: 'niche-profitability',
                description:
                  'Compare earning potential across niches',
                icon: 'Target',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Estimate total earnings across all streams',
                icon: 'Banknote',
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Calculate content creation costs',
                icon: 'Camera',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
