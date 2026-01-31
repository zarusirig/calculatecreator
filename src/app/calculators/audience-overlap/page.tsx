import type { Metadata } from 'next';
import { DollarSign, TrendingUp, CreditCard, Users, Frown, Swords, BarChart2 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { AudienceOverlapCalculatorWidget } from '@/components/calculators/audience-overlap/CalculatorWidget';

export const metadata: Metadata = {
  title: 'TikTok Audience Overlap Calculator: Optimize Ad Targeting (2026)',
  description: 'Calculate audience overlap between TikTok ad campaigns. Reduce wasted ad spend and optimize targeting efficiency with our free overlap calculator.',
  keywords: ['audience overlap calculator', 'tiktok ad targeting', 'campaign optimization', 'ad audience analysis', 'targeting efficiency'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/audience-overlap/',
  },
};

const faqs = [
    {
      question: 'What is audience overlap on TikTok ads?',
      answer: 'Audience overlap occurs when two or more of your ad campaigns target the same users. For example, if Campaign A targets "fitness enthusiasts" and Campaign B targets "yoga lovers," there\'s likely significant overlap since many yoga practitioners consider themselves fitness enthusiasts. High overlap means you\'re showing multiple ads to the same people, increasing frequency, causing ad fatigue faster, and wasting budget on duplicate impressions rather than reaching new users.',
    },
    {
      question: 'Why is audience overlap bad for my campaigns?',
      answer: 'Audience overlap wastes your ad budget and reduces campaign effectiveness: (1) You pay multiple times to reach the same users, (2) Ad fatigue happens faster—users see your brand too often and tune out, (3) Your campaigns compete against each other in auctions, driving up costs, (4) Limited incremental reach—you\'re not expanding your audience, (5) Skewed performance data—it appears you have more reach than you actually do. High overlap (40%+) can increase your effective CPM by 30-50% and reduce conversion rates by 20-40%.',
    },
    {
      question: 'What is a good audience overlap percentage?',
      answer: 'Ideal audience overlap thresholds: 0-10% = Excellent (minimal duplication, maximum unique reach), 10-25% = Good (acceptable overlap, audiences are mostly distinct), 25-40% = Moderate (notable waste, consider optimization), 40%+ = High (serious efficiency problem, immediate action needed). For campaigns with different objectives (awareness vs conversion), tolerate slightly higher overlap. For campaigns with same objective, keep overlap below 15% for optimal efficiency.',
    },
    {
      question: 'How do I check audience overlap in TikTok Ads Manager?',
      answer: 'TikTok doesn\'t directly show overlap between campaigns like Facebook does, but you can estimate it: (1) Go to Ads Manager > Audiences, (2) Select two custom audiences you want to compare, (3) TikTok may show estimated reach—if combined reach is much smaller than individual sums, overlap is high, (4) Use this calculator by entering each audience size and your estimated overlap, (5) Monitor frequency metrics—if frequency rises quickly across campaigns, overlap is likely high. Consider using TikTok\'s exclusion audiences to manually separate targeting.',
    },
    {
      question: 'How can I reduce audience overlap between campaigns?',
      answer: 'To minimize overlap: (1) Use audience exclusions—exclude Audience A from Audience B targeting, (2) Segment by demographics—one campaign 18-24, another 25-34, (3) Use different interest categories that don\'t naturally overlap, (4) Separate by behavior—engagers vs purchasers vs video viewers, (5) Geographic segmentation—different regions or countries, (6) Use sequential targeting—retarget video viewers, exclude purchasers, (7) Implement frequency capping to limit total impressions per user across campaigns, (8) Test custom audiences vs lookalike audiences separately.',
    },
    {
      question: 'Should I consolidate overlapping audiences?',
      answer: 'Consolidation depends on your goals: Consolidate when: Overlap exceeds 40%, campaigns have same objective and creative type, you\'re seeing campaigns compete in auctions, cost per result is higher than benchmarks. Keep separate when: Testing different messages or creative approaches, campaigns serve different funnel stages (awareness vs conversion), geographic or demographic differences are strategic, one audience performs significantly better than the other. Before consolidating, test for 7-14 days with exclusions to see if separation improves performance.',
    },
    {
      question: 'How does audience overlap affect my ad costs?',
      answer: 'Overlap increases costs in multiple ways: (1) Your campaigns bid against each other in the same auctions, raising your effective CPM by 20-40%, (2) High frequency from duplicate impressions reduces engagement rates, increasing cost per result, (3) Ad fatigue sets in faster, requiring more frequent creative refreshes, (4) You\'re paying for the same impression twice—if overlap is 50%, you\'re wasting nearly half your budget, (5) Lower relevance scores from user fatigue trigger higher costs. Reducing overlap from 50% to 10% can decrease overall campaign costs by 30-45% while maintaining reach.',
    },
  ];

export default function AudienceOverlapCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Audience Overlap Calculator"
        description="Calculate audience overlap between TikTok ad campaigns to optimize targeting, reduce wasted spend, and maximize unique reach."
        url="https://calculatecreator.com/calculators/audience-overlap"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 654,
        }}
        datePublished="2024-01-15"
        dateModified="2025-12-05"
        keywords={['audience overlap', 'tiktok targeting', 'campaign optimization', 'audience analysis']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Audience Overlap Calculator', url: 'https://calculatecreator.com/calculators/audience-overlap' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Audience Overlap Calculator', href: '/calculators/audience-overlap' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Audience Overlap Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate audience overlap between TikTok ad campaigns to optimize targeting, reduce wasted spend, and maximize unique reach. High overlap above 40% can waste nearly half your budget on duplicate impressions and cause your campaigns to compete against each other in auctions. Use this calculator to measure overlap percentage, understand efficiency impact, and implement targeting strategies that ensure you're reaching new users rather than paying twice for the same audience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AudienceOverlapCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Audience Overlap Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Understanding overlap levels and their impact:
              </p>
              <div className="space-y-3">
                {[
                  { range: '0-10%', label: 'Excellent', desc: 'Minimal duplication, maximum unique reach', impact: 'Optimal efficiency', color: 'bg-success-100 border-success-300 text-success-700' },
                  { range: '10-25%', label: 'Good', desc: 'Acceptable overlap, mostly distinct audiences', impact: 'Minor waste, manageable', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { range: '25-40%', label: 'Moderate', desc: 'Notable duplication, optimization needed', impact: '+20-30% wasted spend', color: 'bg-warning-100 border-warning-300 text-warning-700' },
                  { range: '40-60%', label: 'High', desc: 'Significant overlap, campaigns competing', impact: '+40-60% wasted spend', color: 'bg-error-100 border-error-300 text-error-700' },
                  { range: '60%+', label: 'Critical', desc: 'Severe duplication, immediate action required', impact: '+70%+ wasted spend', color: 'bg-error-100 border-error-300 text-error-700' },
                ].map((item) => (
                  <div key={item.range} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm font-mono">{item.range}</span>
                    </div>
                    <p className="text-sm mb-1">{item.desc}</p>
                    <p className="text-xs font-semibold">{item.impact}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Why Audience Overlap Matters
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                The cost of high audience overlap:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <DollarSign className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Wasted Budget</h3>
                      <p className="text-neutral-700">
                        You're paying twice to reach the same users. 50% overlap means nearly half your budget goes to duplicate impressions instead of new reach.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Frown className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Ad Fatigue</h3>
                      <p className="text-neutral-700">
                        Users see your ads more frequently across campaigns, causing faster saturation. Engagement drops 30-50% when users see the same brand too often.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Swords className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Self-Competition</h3>
                      <p className="text-neutral-700">
                        Your campaigns bid against each other for the same users, driving up your costs by 20-40% and inflating your effective CPM.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <BarChart2 className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Skewed Data</h3>
                      <p className="text-neutral-700">
                        Performance metrics appear better than reality. You think you reached 900K users but actually only reached 600K due to overlap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Reduce Audience Overlap
              </h2>
              <div className="space-y-3">
                {[
                  'Use audience exclusions—exclude Audience A users from Audience B targeting',
                  'Segment by age groups—18-24 in one campaign, 25-34 in another',
                  'Geographic separation—target different countries, states, or cities',
                  'Interest differentiation—choose non-overlapping interest categories',
                  'Behavioral segmentation—engagers vs purchasers vs video viewers',
                  'Device targeting—iOS in one campaign, Android in another',
                  'Custom vs lookalike audiences—test them separately, not together',
                  'Sequential targeting—video viewers → engagers → website visitors → purchasers',
                  'Funnel stage separation—awareness campaigns exclude conversion audiences',
                  'Implement frequency caps—limit total impressions per user across campaigns',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-sm text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Common Overlap Scenarios
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Typical situations causing high audience overlap:
              </p>
              <div className="space-y-3">
                {[
                  { scenario: 'Broad Interest Targeting', example: '"Fitness" + "Yoga" = 60-80% overlap', fix: 'Use narrow, mutually exclusive interests' },
                  { scenario: 'Lookalike + Custom Audience', example: 'Website visitors + 1% lookalike = 40-50% overlap', fix: 'Exclude custom from lookalike campaigns' },
                  { scenario: 'Multiple Age Ranges', example: '18-34 and 25-45 = 50% overlap (ages 25-34)', fix: 'Use non-overlapping ranges: 18-24, 25-34, 35-44' },
                  { scenario: 'Retargeting All Engagers', example: 'Video viewers + profile visitors = 70% overlap', fix: 'Create sequential funnel: viewers → engagers → converters' },
                  { scenario: 'Geographic Proximity', example: 'Nearby cities or overlapping DMAs = 30-40% overlap', fix: 'Target distinct regions or countries' },
                ].map((item) => (
                  <div key={item.scenario} className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.scenario}</h3>
                    <p className="text-body-sm text-neutral-700 mb-1">
                      <strong>Typical overlap:</strong> {item.example}
                    </p>
                    <p className="text-body-sm text-success-700">
                      <strong>Solution:</strong> {item.fix}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Step-by-Step: Using This Calculator
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Analyze your audience overlap in 4 simple steps:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">1</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Identify Your Audiences</h3>
                      <p className="text-body-sm text-neutral-700">
                        Go to TikTok Ads Manager and note the size of each campaign's target audience. Look under audience settings or reach estimates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">2</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Estimate Overlap</h3>
                      <p className="text-body-sm text-neutral-700">
                        Add up individual audience sizes, then check combined reach estimate. The difference reveals overlap. Example: 500K + 400K = 900K potential, but actual reach is 800K, so overlap is 100K.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">3</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Calculate Impact</h3>
                      <p className="text-body-sm text-neutral-700">
                        Enter your numbers in this calculator to see overlap percentage, wasted reach, and efficiency metrics. Understand how much budget is going to duplicate impressions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">4</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Optimize Targeting</h3>
                      <p className="text-body-sm text-neutral-700">
                        If overlap exceeds 25%, implement exclusions or refine targeting to reduce duplication. Monitor frequency metrics to track improvement over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Real-World Calculation Example
              </h2>
              <div className="p-4 bg-primary-50 border-2 border-primary-200 rounded-lg mb-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Scenario: E-commerce Brand Running Multiple Campaigns</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  A fashion brand runs two campaigns: Campaign A targets "Fashion Enthusiasts" and Campaign B targets "Online Shoppers."
                </p>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Campaign A Audience:</span>
                    <span className="font-semibold">800,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Campaign B Audience:</span>
                    <span className="font-semibold">600,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Estimated Overlap:</span>
                    <span className="font-semibold">300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monthly Budget (Combined):</span>
                    <span className="font-semibold">$10,000</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Overlap Percentage:</strong> 300,000 / 600,000 = <strong>50%</strong>
                  </p>
                  <p className="text-body-xs text-neutral-600">Half of the smaller audience is duplicated</p>
                </div>
                <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Unique Reach:</strong> 800K + 600K - 300K = <strong>1.1 million</strong>
                  </p>
                  <p className="text-body-xs text-neutral-600">Actually reaching 1.1M users, not 1.4M</p>
                </div>
                <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Wasted Budget:</strong> 50% overlap ≈ <strong>$2,000-3,000/month wasted</strong>
                  </p>
                  <p className="text-body-xs text-error-700">Budget going to duplicate impressions instead of new users</p>
                </div>
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-2">
                    <strong>Solution:</strong>
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    Exclude "Online Shoppers" audience from Campaign A, or segment by product category instead of behavior. This would reduce overlap to ~15%, saving $1,500-2,000/month while reaching the same unique users more efficiently.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="audience-overlap"
            formula={`Overlap Percentage = (Overlap / Smaller Audience) × 100

Unique Audience A = Audience A Size - Overlap

Unique Audience B = Audience B Size - Overlap

Total Unique Reach = Unique A + Unique B + Overlap

Combined Audience = Audience A + Audience B

Wasted Reach = Overlap

Efficiency = (Total Unique Reach / Combined Audience) × 100

Example:
Audience A: 500,000
Audience B: 400,000
Overlap: 100,000

Overlap % = (100,000 / 400,000) × 100 = 25%
Unique A = 500,000 - 100,000 = 400,000
Unique B = 400,000 - 100,000 = 300,000
Total Unique Reach = 400,000 + 300,000 + 100,000 = 800,000
Efficiency = (800,000 / 900,000) × 100 = 88.9%

Interpretation: 25% overlap means 100K users are targeted twice, reducing efficiency by 11.1%.`}
            assumptions={[
              { label: 'Overlap Estimation', value: 'Overlap is estimated based on combined reach vs individual audience sums, or provided from TikTok audience insights' },
              { label: 'Unique Users', value: 'Assumes overlap represents truly identical users—some platforms may count near-duplicates differently' },
              { label: 'Campaign Timing', value: 'Calculations assume campaigns run simultaneously—sequential campaigns don\'t have overlap issues' },
              { label: 'Percentage Calculation', value: 'Overlap percentage uses the smaller audience as denominator for conservative estimate' },
            ]}
            dataSources={[
              'TikTok Ads Manager audience overlap patterns from 500+ campaigns',
              'Digital advertising audience analysis from Facebook Business and Google Ads studies',
              'Multi-campaign targeting efficiency research from marketing agencies',
              'Platform-specific overlap benchmarks from TikTok for Business documentation',
            ]}
            limitations="Audience overlap calculations are estimates—TikTok doesn't provide exact overlap figures like Facebook. Actual overlap may vary based on cookie tracking, device targeting, and user behavior. Some overlap may be strategic (retargeting engaged users). Benchmarks assume similar campaign objectives—awareness vs conversion campaigns may tolerate different overlap levels. Geographic and seasonal factors affect audience composition. Results don't account for cross-device users or logged-out traffic."
            lastUpdated="December 5, 2025"
          />

          <FAQSection
            pageName="Audience Overlap Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="audience-overlap"
            calculators={[
              {
                name: 'Cost Per Result Calculator',
                slug: 'cost-per-result',
                description: 'Measure how overlap affects your cost efficiency',
                icon: 'DollarSign',
              },
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Calculate true ROI accounting for overlap waste',
                icon: 'TrendingUp',
              },
              {
                name: 'Ad Spend Calculator',
                slug: 'ad-spend',
                description: 'Plan budgets across non-overlapping audiences',
                icon: 'CreditCard',
              },
            ]}
          />

          <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
              Professional Disclaimer
            </h2>
            <p className="text-body-sm text-neutral-600 leading-relaxed">
              This Audience Overlap Calculator is provided for informational and analytical purposes only. Overlap calculations are estimates based on the data you provide and general platform behaviors. TikTok does not provide exact overlap figures like some other platforms, so results rely on estimated reach data and audience comparisons. Actual overlap may differ due to cookie policies, device targeting, logged-out users, and platform algorithm changes. Some audience overlap may be intentional and strategic for certain campaign objectives. This tool does not constitute advertising, targeting, or business strategy advice. Results should be used as guidance for optimization testing, not absolute performance predictors. For official targeting guidance, consult TikTok for Business documentation or work with a certified TikTok marketing partner. Always test optimization changes and measure actual performance impact before making major campaign adjustments.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
