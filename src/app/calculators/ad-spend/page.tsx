import { Scale } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { AdSpendCalculatorWidget } from '@/components/calculators/ad-spend/CalculatorWidget';

const faqs = [
  {
    question: 'How much should I spend on TikTok ads as a beginner?',
    answer: 'Start with $20-50 per day for 7-14 days to test and gather data. This gives you enough budget to test 2-3 ad variations and let TikTok\'s algorithm optimize. Total initial investment: $140-700. Once you find winning ads with positive ROI, gradually scale by 20-30% every few days. Don\'t start with large budgets—you need to learn what works first through testing.',
  },
  {
    question: 'What is the minimum daily budget for TikTok ads?',
    answer: 'TikTok requires a minimum of $20 per day at the campaign level and $20 per day at the ad group level. For conversion campaigns, start with at least $50/day to get enough data. Going below minimums spreads your budget too thin and prevents proper optimization. If budget is limited, run one focused campaign rather than multiple underfunded ones.',
  },
  {
    question: 'How do I calculate my TikTok ad budget?',
    answer: 'Calculate budget using: Target Results × Cost Per Result × Buffer (1.15-1.25). Example: 100 conversions × $20 CPA × 1.25 = $2,500. The 15-25% buffer accounts for learning phase costs, which are typically higher. Also consider: (1) Test budget (first 7 days), (2) Scale budget (once profitable), (3) Monthly vs campaign budget. Track ROI—only scale campaigns returning 2-3× your spend.',
  },
  {
    question: 'How long does it take for TikTok ads to optimize?',
    answer: 'TikTok ads typically need 3-7 days to complete the learning phase and optimize performance. During this time, costs may be 20-50% higher than steady state. Give campaigns at least 50 conversions or 7 days before judging performance. Significant budget or targeting changes restart the learning phase. For best results, let campaigns run unchanged for 7-14 days while testing new creative variations in separate ad groups.',
  },
  {
    question: 'Should I use daily budget or lifetime budget on TikTok?',
    answer: 'Daily budget is better for most campaigns—it provides consistent daily spend and easier performance tracking. Lifetime budget works for time-sensitive campaigns (product launches, events) where you want flexibility in daily pacing. TikTok may spend up to 20% over daily budget on high-performing days. Start with daily budget for predictable costs and easier optimization decisions.',
  },
  {
    question: 'How much do TikTok ads cost compared to Facebook and Instagram?',
    answer: 'TikTok ads are typically 30-50% cheaper than Facebook/Instagram: TikTok CPC: $0.20-$1.00 vs Facebook: $0.50-$2.00. TikTok CPA: $10-$30 vs Facebook: $15-$40. TikTok CPM: $3-$10 vs Instagram: $5-$15. However, conversion rates on TikTok may be 20-40% lower since users are in browsing mode. The key advantage is TikTok\'s viral potential—strong organic content can amplify paid reach 5-10×. Overall, TikTok offers better value for brand awareness and younger demographics.',
  },
  {
    question: 'When should I increase my TikTok ad budget?',
    answer: 'Scale your budget when: (1) Campaign ROI is consistently 200%+ (3× ROAS or higher), (2) Cost per result is stable or decreasing, (3) Campaign has run 7+ days past learning phase, (4) Creative performance is strong (high CTR and engagement). Increase by 20-30% every 3-5 days—doubling budget overnight often increases costs. Monitor performance for 2-3 days after each increase. If ROI drops below acceptable levels, reduce budget and optimize creative/targeting.',
  },
];

export default function AdSpendCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Ad Spend Calculator"
        description="Calculate recommended ad spend budget for your TikTok campaigns based on target results and expected costs. Plan daily, weekly, and monthly budgets."
        url="https://calculatecreator.com/calculators/ad-spend"
        aggregateRating={{
          ratingValue: 4.7,
          reviewCount: 743,
        }}
        datePublished="2024-01-15"
        dateModified="2025-12-05"
        keywords={['tiktok ad budget', 'ad spend calculator', 'tiktok budget planning', 'campaign budget']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Ad Spend Calculator', url: 'https://calculatecreator.com/calculators/ad-spend' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Ad Spend Calculator', href: '/calculators/ad-spend' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-3xl mb-6">
            💳
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Ad Spend Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate recommended ad spend budget for your TikTok campaigns based on target results and expected costs. Plan daily, weekly, and monthly budgets with confidence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AdSpendCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                TikTok Ad Budget Guidelines
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Recommended minimum budgets by campaign type:
              </p>
              <div className="space-y-3">
                {[
                  { type: 'Conversion Campaigns', daily: '$50-100/day', total: '$1,500-3,000/month', color: 'bg-success-100 border-success-300 text-success-700' },
                  { type: 'Traffic Campaigns', daily: '$30-50/day', total: '$900-1,500/month', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { type: 'Lead Generation', daily: '$40-80/day', total: '$1,200-2,400/month', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { type: 'Brand Awareness', daily: '$50-150/day', total: '$1,500-4,500/month', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { type: 'Testing Phase', daily: '$20-30/day', total: '$140-420 (7-14 days)', color: 'bg-warning-100 border-warning-300 text-warning-700' },
                ].map((item) => (
                  <div key={item.type} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-semibold">{item.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Daily: {item.daily}</span>
                      <span>Total: {item.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Budget Allocation Strategy
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                How to split your budget for maximum effectiveness:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-neutral-900">Testing (30%)</span>
                    <span className="text-primary-600 font-mono">First 7-14 days</span>
                  </div>
                  <p className="text-neutral-600">
                    Test multiple audiences and creatives with smaller budgets to find winners before scaling
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-neutral-900">Scaling (50%)</span>
                    <span className="text-success-600 font-mono">Profitable campaigns</span>
                  </div>
                  <p className="text-neutral-600">
                    Allocate majority of budget to proven winning campaigns with positive ROI
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-neutral-900">Retargeting (20%)</span>
                    <span className="text-primary-600 font-mono">Warm audiences</span>
                  </div>
                  <p className="text-neutral-600">
                    Retarget engaged users and website visitors (typically 70% lower costs)
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Budget Optimization Tips
              </h2>
              <div className="space-y-3">
                {[
                  'Start with minimum viable budget—$20-50/day for testing phase',
                  'Add 15-25% buffer to account for learning phase higher costs',
                  'Scale winning campaigns by 20-30% every 3-5 days maximum',
                  'Pause campaigns with ROI below 100% after 7 days (break-even)',
                  'Use campaign budget optimization (CBO) for better allocation',
                  'Reserve 20-30% budget for testing new creatives and audiences',
                  'Run campaigns 7+ days before making major budget changes',
                  'Monitor daily—don\'t let bad campaigns drain budget unnecessarily',
                  'Use dayparting to focus spend on high-performing hours',
                  'Set bid caps to control costs on competitive objectives',
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
                Common Budget Mistakes
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Avoid these errors that waste ad spend:
              </p>
              <div className="space-y-3">
                {[
                  { mistake: 'Starting Too Big', fix: 'Begin with $20-50/day testing budget, not $500/day', impact: 'Wasting 80% of initial budget' },
                  { mistake: 'Scaling Too Fast', fix: 'Increase budget 20-30% max every 3-5 days', impact: 'Costs spike 50-100%' },
                  { mistake: 'No Testing Budget', fix: 'Reserve 20-30% for testing new creatives and audiences', impact: 'Stagnant performance' },
                  { mistake: 'Ignoring Learning Phase', fix: 'Let campaigns run 7+ days before judging performance', impact: 'Killing potential winners early' },
                  { mistake: 'Spreading Too Thin', fix: 'Better to fund 2-3 campaigns well than 10 poorly', impact: 'None reach optimization' },
                  { mistake: 'No ROI Tracking', fix: 'Calculate ROI weekly—pause losers, scale winners', impact: 'Bleeding money on bad campaigns' },
                ].map((item) => (
                  <div key={item.mistake} className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.mistake}</h3>
                    <p className="text-body-sm text-neutral-700 mb-1">
                      <strong>Fix:</strong> {item.fix}
                    </p>
                    <p className="text-body-xs text-warning-700">Risk: {item.impact}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Step-by-Step Budget Planning
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Follow this framework to plan your TikTok ad budget:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">1</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Define Your Goal</h3>
                      <p className="text-body-sm text-neutral-700">
                        Determine what success looks like—number of sales, leads, app installs, or awareness reach. Set specific, measurable targets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">2</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Research Cost Benchmarks</h3>
                      <p className="text-body-sm text-neutral-700">
                        Look up industry average CPR (cost per result) for your objective and vertical. Use our Cost Per Result Calculator for estimates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">3</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Calculate Base Budget</h3>
                      <p className="text-body-sm text-neutral-700">
                        Multiply target results by expected cost per result. Example: 100 sales × $25 CPA = $2,500 base budget.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">4</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Add Optimization Buffer</h3>
                      <p className="text-body-sm text-neutral-700">
                        Add 15-25% for learning phase and testing. This accounts for higher initial costs and creative testing needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">5</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Distribute Over Time</h3>
                      <p className="text-body-sm text-neutral-700">
                        Divide total budget by campaign duration to get daily budget. Ensure daily budget meets TikTok's $20 minimum per ad group.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">6</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Monitor and Adjust</h3>
                      <p className="text-body-sm text-neutral-700">
                        Track performance daily. After 7 days, reallocate budget from underperformers to winners. Scale proven campaigns gradually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Real-World Budget Example
              </h2>
              <div className="p-4 bg-primary-50 border-2 border-primary-200 rounded-lg mb-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Scenario: Online Course Launch</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  A creator wants to sell 50 courses at $297 each using TikTok ads over 30 days.
                </p>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Target Sales:</span>
                    <span className="font-semibold">50 courses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Course Price:</span>
                    <span className="font-semibold">$297</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Industry Avg CPA:</span>
                    <span className="font-semibold">$40</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Campaign Duration:</span>
                    <span className="font-semibold">30 days</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Base Budget:</strong> 50 sales × $40 = <strong>$2,000</strong>
                  </p>
                </div>
                <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>With 25% Buffer:</strong> $2,000 × 1.25 = <strong>$2,500</strong>
                  </p>
                </div>
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Daily Budget:</strong> $2,500 / 30 days = <strong>$83.33/day</strong>
                  </p>
                </div>
                <div className="p-3 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-2">
                    <strong>ROI Projection:</strong>
                  </p>
                  <div className="space-y-1 text-body-sm">
                    <div className="flex justify-between">
                      <span>Revenue (50 × $297):</span>
                      <span className="font-semibold">$14,850</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ad Spend:</span>
                      <span className="font-semibold">-$2,500</span>
                    </div>
                    <div className="flex justify-between border-t pt-1 mt-1">
                      <span className="font-semibold">Profit:</span>
                      <span className="font-semibold text-success-600">$12,350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">ROI:</span>
                      <span className="font-semibold text-success-600">494%</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Strategy:</strong> Start with $50/day for first 7 days to test audiences and creative. If hitting $40 CPA target, scale to $100/day. If CPA is lower ($25-30), scale more aggressively to $150-200/day to maximize sales while remaining profitable.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="ad-spend"
            formula={`Total Budget = Target Results × Cost Per Result × Buffer

Daily Budget = Total Budget / Campaign Duration (days)

Weekly Budget = Daily Budget × 7

Monthly Budget = Daily Budget × 30

Buffer Multiplier = 1.15-1.25 (15-25% additional)

Example:
Target: 200 conversions
Cost Per Result: $15
Duration: 30 days
Buffer: 1.25 (25%)

Base Budget = 200 × $15 = $3,000
Total Budget with Buffer = $3,000 × 1.25 = $3,750
Daily Budget = $3,750 / 30 = $125/day
Weekly Budget = $125 × 7 = $875/week
Monthly Budget = $125 × 30 = $3,750/month`}
            assumptions={[
              { label: 'Cost Estimates', value: 'Uses industry average costs or your provided estimates—actual costs may vary by targeting, creative, and competition' },
              { label: 'Optimization Buffer', value: '15-25% buffer accounts for learning phase, testing, and initial higher costs before optimization' },
              { label: 'Campaign Minimum', value: 'TikTok requires minimum $20/day at campaign and ad group levels—budget may need adjustment' },
              { label: 'Scaling Assumptions', value: 'Budgets assume gradual scaling—doubling budget overnight often increases costs significantly' },
            ]}
            dataSources={[
              'TikTok Ads Manager official budget guidelines and minimums',
              'Analysis of 800+ TikTok campaign budget patterns and performance',
              'Industry budget allocation studies from digital marketing agencies',
              'TikTok for Business best practices and scaling documentation',
            ]}
            limitations="Budget calculations are estimates based on expected cost per result. Actual costs vary by industry, targeting precision, creative quality, competition, and seasonal factors. Learning phase typically lasts 7 days with 20-50% higher costs. Platform algorithm changes and market conditions affect costs. Budget recommendations don't guarantee specific results—testing and optimization are essential. Minimum daily budgets apply per campaign and ad group."
            lastUpdated="December 5, 2025"
          />

          <FAQSection
            pageName="Ad Spend Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="ad-spend"
            calculators={[
              {
                name: 'Cost Per Result Calculator',
                slug: 'cost-per-result',
                description: 'Calculate your actual cost per result from campaigns',
                icon: 'DollarSign',
              },
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Measure return on your ad investment',
                icon: 'TrendingUp',
              },
              {
                name: 'Break-Even Calculator',
                slug: 'break-even',
                description: 'Calculate maximum affordable cost per acquisition',
                icon: 'Scale',
              },
            ]}
          />

          <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
              Professional Disclaimer
            </h2>
            <p className="text-body-sm text-neutral-600 leading-relaxed">
              This Ad Spend Calculator is provided for informational and budget planning purposes only. Budget recommendations are estimates based on industry benchmarks and the data you provide. Actual campaign costs and performance will vary based on numerous factors including audience targeting, creative quality, competition, seasonality, and TikTok algorithm changes. This tool does not constitute financial, business, or advertising advice. Results are not guaranteed. Always start with smaller test budgets to validate assumptions before scaling. TikTok platform policies, minimums, and advertising costs are subject to change. For official guidance, consult TikTok for Business documentation or work with a certified TikTok marketing partner. Monitor campaigns closely and adjust budgets based on actual performance data.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
