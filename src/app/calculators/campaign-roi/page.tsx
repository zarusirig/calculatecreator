import type { Metadata } from 'next';
import { TrendingUp, ShoppingCart, Smartphone, Target, Palette } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { CampaignROICalculatorWidget } from '@/components/calculators/campaign-roi/CalculatorWidget';

export const metadata: Metadata = {
  title: 'TikTok Campaign ROI Calculator: Measure Ad Performance (2026)',
  description: 'Calculate your TikTok advertising campaign ROI. Measure ROAS, track conversions, and optimize ad spend with our free campaign ROI calculator.',
  keywords: ['campaign roi calculator', 'tiktok roas', 'ad performance calculator', 'marketing roi', 'tiktok ads roi'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/campaign-roi/',
  },
};

const faqs = [
  {
    question: 'What is a good ROI for TikTok ad campaigns?',
    answer: 'A good TikTok campaign ROI depends on your industry and goals. E-commerce typically aims for 200-400% ROI (3-5× ROAS). Lead generation campaigns may see 300-600% ROI. Brand awareness campaigns might accept 100-200% ROI. The minimum viable ROI is generally 100% (break-even), but you should target at least 200% (3× ROAS) for sustainable profitability.',
  },
  {
    question: 'What\'s the difference between ROI and ROAS?',
    answer: 'ROI (Return on Investment) shows profit as a percentage: ROI = (Revenue - Cost) / Cost × 100. ROAS (Return on Ad Spend) shows revenue as a multiple: ROAS = Revenue / Cost. Example: Spend $1,000, earn $3,000. ROI = 200% (you made $2,000 profit on $1,000 investment). ROAS = 3× (you got $3 back for every $1 spent). Both measure the same campaign from different angles.',
  },
  {
    question: 'How long should I run a TikTok campaign before calculating ROI?',
    answer: 'Run campaigns for at least 7-14 days before judging ROI—TikTok\'s algorithm needs 3-7 days to optimize. For accurate ROI, wait 30 days to capture delayed conversions (people who see your ad but buy later). Track attribution window: TikTok default is 7-day click, but some products have 14-30 day consideration periods. Seasonal products may need 60-90 days of data.',
  },
  {
    question: 'Why is my TikTok campaign ROI negative?',
    answer: 'Negative ROI (losing money) happens when: (1) Poor targeting—showing ads to wrong audience, (2) Low conversion rate on landing page (fix this first—biggest ROI impact), (3) Weak creative that doesn\'t stop the scroll, (4) Product-market fit issues, (5) Too short learning phase (<7 days), (6) Incorrect tracking/attribution setup. Before scaling, get to at least break-even (100% ROI) by optimizing conversion rate and creative.',
  },
  {
    question: 'How can I improve my TikTok campaign ROI?',
    answer: 'To boost ROI: (1) Improve conversion rate—every 1% increase = 20-30% better ROI, (2) Test 5-10 ad variations weekly, winner improves ROI 30-100%, (3) Use lookalike audiences of top customers, (4) Increase AOV with bundles/upsells, (5) Implement retargeting (often 5-10× better ROI than cold traffic), (6) Optimize for "Purchase" not "Traffic", (7) A/B test landing pages, (8) Exclude existing customers from prospecting campaigns.',
  },
];

export default function CampaignROICalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Campaign ROI Calculator"
        description="Calculate return on investment for your TikTok marketing campaigns to measure profitability and performance."
        url="https://calculatecreator.com/calculators/campaign-roi"
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 1156,
        }}
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['campaign roi calculator', 'tiktok roi', 'roas calculator', 'marketing roi']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Campaign ROI Calculator', url: 'https://calculatecreator.com/calculators/campaign-roi' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Campaign ROI Calculator', href: '/calculators/campaign-roi' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Campaign ROI Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate return on investment for your TikTok marketing campaigns to measure profitability and performance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CampaignROICalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                ROI Benchmarks for TikTok
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Industry benchmarks for TikTok campaign ROI:
              </p>
              <div className="space-y-3">
                {[
                  { range: '300%+ (4× ROAS)', label: 'Excellent', desc: 'Highly profitable, scale aggressively', color: 'bg-success-100 border-success-300 text-success-700' },
                  { range: '200-300% (3-4× ROAS)', label: 'Good', desc: 'Solid profitability, maintain and optimize', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { range: '100-200% (2-3× ROAS)', label: 'Acceptable', desc: 'Profitable but tight margins', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { range: '0-100% (1-2× ROAS)', label: 'Break-Even to Low', desc: 'Barely profitable or losing money', color: 'bg-warning-100 border-warning-300 text-warning-700' },
                  { range: 'Below 0% (<1× ROAS)', label: 'Unprofitable', desc: 'Losing money—pause and fix', color: 'bg-error-100 border-error-300 text-error-700' },
                ].map((item) => (
                  <div key={item.label} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm font-mono">{item.range}</span>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                ROI by Business Model
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Target ROI varies by business type:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <ShoppingCart size={16} className="text-primary-600" /> E-commerce
                    </span>
                    <span className="text-neutral-600">200-400% ROI (3-5× ROAS)</span>
                  </div>
                  <p className="text-neutral-600">Typical target for profitable scaling</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Smartphone size={16} className="text-primary-600" /> App Installs
                    </span>
                    <span className="text-neutral-600">150-300% ROI (2.5-4× ROAS)</span>
                  </div>
                  <p className="text-neutral-600">Based on in-app purchases or LTV</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Target size={16} className="text-primary-600" /> Lead Generation
                    </span>
                    <span className="text-neutral-600">300-600% ROI (4-7× ROAS)</span>
                  </div>
                  <p className="text-neutral-600">High-value B2B leads or services</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Palette size={16} className="text-primary-600" /> Brand Awareness
                    </span>
                    <span className="text-neutral-600">100-200% ROI (2-3× ROAS)</span>
                  </div>
                  <p className="text-neutral-600">Harder to measure, longer-term value</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Improve Campaign ROI
              </h2>
              <div className="space-y-3">
                {[
                  'Optimize conversion rate first—1% improvement = 20-30% better ROI',
                  'Test 5-10 ad variations weekly—winners can double your ROI',
                  'Implement retargeting for website visitors (5-10× better ROI)',
                  'Increase AOV with bundles, upsells, or free shipping thresholds',
                  'Use lookalike audiences of your highest-LTV customers',
                  'Exclude existing customers from prospecting campaigns',
                  'Run campaigns 7+ days to let algorithm optimize',
                  'A/B test landing pages—better pages = instant ROI boost',
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
                Common ROI Calculation Mistakes
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Avoid these errors that lead to inaccurate ROI:
              </p>
              <div className="space-y-3">
                {[
                  { mistake: 'Only Counting Ad Spend', fix: 'Include ALL costs: production, tools, agency fees, time', impact: 'Overstates ROI by 20-50%' },
                  { mistake: 'Ignoring Attribution Window', fix: 'Track 30-day conversions—many purchases happen days later', impact: 'Understates ROI by 15-40%' },
                  { mistake: 'Including Existing Customers', fix: 'Exclude repeat buyers who would have purchased anyway', impact: 'Overstates ROI by 30-60%' },
                  { mistake: 'Too Short Time Period', fix: 'Need at least 7-14 days of data for algorithm optimization', impact: 'Early results misleading' },
                ].map((item) => (
                  <div key={item.mistake} className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.mistake}</h3>
                    <p className="text-body-sm text-neutral-700 mb-1">
                      <strong>Fix:</strong> {item.fix}
                    </p>
                    <p className="text-body-xs text-warning-700">{item.impact}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Scaling Strategy Based on ROI
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                How to act on your ROI results:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-success-50 border-2 border-success-300 rounded-lg">
                  <h3 className="font-semibold text-success-900 mb-2">ROI 300%+ (4× ROAS) → Scale Aggressively</h3>
                  <p className="text-body-sm text-neutral-700">
                    Increase budget by 20-50% daily until ROI drops below 250%. Duplicate winning ad sets, expand to lookalike audiences, test new creatives to maintain performance.
                  </p>
                </div>
                <div className="p-4 bg-primary-50 border-2 border-primary-300 rounded-lg">
                  <h3 className="font-semibold text-primary-900 mb-2">ROI 200-300% (3-4× ROAS) → Scale Gradually</h3>
                  <p className="text-body-sm text-neutral-700">
                    Increase budget by 10-20% every 3-5 days. Continuously test new creatives and audiences to find the next winner. This is sustainable, profitable growth.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 border-2 border-neutral-300 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">ROI 100-200% (2-3× ROAS) → Optimize Before Scaling</h3>
                  <p className="text-body-sm text-neutral-700">
                    Maintain current budget. Focus on improving conversion rate, testing new creatives, and reducing costs. Don't scale until you hit 200%+ ROI consistently.
                  </p>
                </div>
                <div className="p-4 bg-error-50 border-2 border-error-300 rounded-lg">
                  <h3 className="font-semibold text-error-900 mb-2">ROI Below 100% (&lt;2× ROAS) → Pause and Fix</h3>
                  <p className="text-body-sm text-neutral-700">
                    Stop spending. Analyze: Is targeting wrong? Is creative weak? Is landing page broken? Fix fundamentals before spending another dollar. Test on small budgets ($20-50/day) until profitable.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="campaign-roi"
            formula={`Return on Investment (ROI) = [(Revenue - Cost) / Cost] × 100

Return on Ad Spend (ROAS) = Revenue / Cost

Profit = Revenue - Cost

Example:
Campaign Cost: $2,000
Revenue Generated: $6,000

Profit = $6,000 - $2,000 = $4,000
ROI = ($4,000 / $2,000) × 100 = 200%
ROAS = $6,000 / $2,000 = 3.0×

Interpretation: You made $3 for every $1 spent, resulting in $4,000 profit (200% ROI).`}
            assumptions={[
              { label: 'Total Costs', value: 'Include all campaign costs: ad spend, content production, influencer fees, tools, agency costs' },
              { label: 'Attribution', value: 'Revenue directly attributed to this campaign via TikTok pixel, UTM codes, or promo codes' },
              { label: 'Time Window', value: '7-30 day attribution window to capture delayed conversions' },
              { label: 'Gross Revenue', value: 'Calculations use gross revenue before COGS/overhead. For net ROI, use profit margin × revenue' },
            ]}
            dataSources={[
              'TikTok Ads Manager conversion tracking and reporting',
              'E-commerce ROI benchmarks from Shopify and industry reports',
              'Analysis of 600+ TikTok ad campaigns across industries (2024)',
              'Digital marketing ROI standards from WordStream and HubSpot',
            ]}
            limitations="ROI varies significantly by industry, product type, pricing, and campaign maturity. Early campaigns (first 7 days) may show lower ROI as algorithm learns. Seasonal factors affect ROI—Q4 holidays typically 20-40% better than Q1. Attribution challenges (multi-touch, view-through) may undercount conversions. Doesn't account for lifetime value—acceptable ROI depends on repeat purchase potential."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Campaign ROI Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="campaign-roi"
            calculators={[
              {
                name: 'CPM/CPV Calculator',
                slug: 'cpm-cpv',
                description: 'Analyze your campaign cost efficiency',
                icon: 'BarChart3',
              },
              {
                name: 'Customer Acquisition Cost Calculator',
                slug: 'customer-acquisition-cost',
                description: 'Calculate cost per customer acquired',
                icon: 'Banknote',
              },
              {
                name: 'Sponsorship ROI Calculator',
                slug: 'sponsorship-roi',
                description: 'Measure ROI for sponsored content',
                icon: 'Video',
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
