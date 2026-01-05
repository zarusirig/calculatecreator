import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BarChart3, DollarSign as MoneyIcon, Laptop, Gamepad2, ShoppingBag, X, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { CPMCPVCalculatorWidget } from '@/components/calculators/cpm-cpv/CalculatorWidget';

// Dynamic imports for E-E-A-T components
const PageAuthorByline = dynamic(() => import('@/lib/eeat/page-eeat').then(mod => ({ default: mod.PageAuthorByline })), {
  ssr: false
});
const PageEEAT = dynamic(() => import('@/lib/eeat/page-eeat').then(mod => ({ default: mod.PageEEAT })), {
  ssr: false
});

const faqs = [
    {
      question: 'What is a good CPM for TikTok ads?',
      answer: 'A good TikTok CPM ranges from $1-$10 depending on your targeting and industry. Broad targeting typically yields $1-$3 CPM, while highly targeted campaigns (specific demographics, interests) may see $5-$10+ CPM. Tech and finance niches tend to have higher CPMs ($8-$15), while entertainment and lifestyle are lower ($1-$5).',
    },
    {
      question: 'What\'s the difference between CPM and CPV?',
      answer: 'CPM (Cost Per Mille) measures cost per 1,000 impressions—how much you pay for 1,000 people to see your ad. CPV (Cost Per View) measures cost per individual view. CPM is better for brand awareness campaigns, while CPV helps you understand the actual cost-efficiency of your ad delivery.',
    },
    {
      question: 'How can I lower my TikTok CPM?',
      answer: 'To lower CPM: (1) Broaden your target audience to increase available inventory, (2) Use automatic placements instead of manual, (3) Create highly engaging content to improve relevance score, (4) Test different ad formats (In-Feed vs TopView), (5) Avoid peak advertising times (holidays, Q4), (6) Run campaigns for longer periods to let the algorithm optimize.',
    },
    {
      question: 'Why is my TikTok CPM higher than other platforms?',
      answer: 'TikTok CPM can be higher than Facebook or Instagram due to: (1) Smaller ad inventory (fewer ad placements), (2) High demand from advertisers targeting Gen Z, (3) Premium placements like TopView and Branded Hashtag Challenges, (4) Less mature ad platform means less optimization. However, engagement rates are often 2-3× higher on TikTok, making the actual cost per engagement competitive.',
    },
    {
      question: 'What affects CPM on TikTok?',
      answer: 'Key factors affecting TikTok CPM: (1) Target audience size (smaller = higher CPM), (2) Industry/niche (finance > fashion), (3) Geographic targeting (US/UK higher than developing countries), (4) Time of year (Q4 highest), (5) Ad quality and relevance score, (6) Bidding strategy (automatic vs manual), (7) Competition in your niche.',
    },
    {
      question: 'How do I find my TikTok CPM?',
      answer: 'Find your CPM in TikTok Ads Manager: Go to Campaign/Ad Group level → View metrics → Look for "CPM" column. If not visible, customize columns to add it. CPM is calculated automatically based on your total spend divided by impressions. Track CPM daily to spot trends and optimize accordingly.',
    },
    {
      question: 'Is lower CPM always better?',
      answer: 'Not necessarily. A low CPM with poor engagement or conversions is worse than a high CPM with strong results. Focus on your campaign objective: For awareness, optimize CPM. For conversions, optimize CPA (Cost Per Acquisition) or ROAS (Return on Ad Spend). Quality audience > cheap impressions.',
    },
    {
      question: 'What is the average TikTok CPM in 2026?',
      answer: 'As of 2026, average TikTok CPM ranges from $4-$8 for most industries in the US. This varies significantly by country (India/Brazil $0.50-$2, UK/Australia $5-$10), targeting specificity, and seasonality. Q4 (holiday season) sees CPMs increase by 30-50% compared to Q1-Q3.',
    },
];

export default function CPMCPVCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok CPM/CPV Calculator"
        description="Calculate Cost Per Mille (CPM) and Cost Per View (CPV) for your TikTok ad campaigns to measure advertising efficiency."
        url="https://calculatecreator.com/calculators/cpm-cpv"
        aggregateRating={{
          ratingValue: 4.7,
          reviewCount: 892,
        }}
        datePublished="2024-01-15"
        dateModified="2026-11-13"
        keywords={['tiktok cpm calculator', 'cost per mille', 'cpv calculator', 'tiktok ad cost']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'CPM/CPV Calculator', url: 'https://calculatecreator.com/calculators/cpm-cpv' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'CPM/CPV Calculator', href: '/calculators/cpm-cpv' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <BarChart3 size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok CPM/CPV Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">
            Calculate Cost Per Mille (CPM) and Cost Per View (CPV) for your TikTok ad campaigns to measure advertising efficiency and optimize your ad spend.
          </p>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
            Understanding your CPM is crucial for managing ad budgets effectively. Use this calculator alongside our <Link href="/calculators/campaign-roi" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">Campaign ROI Calculator</Link> to measure overall campaign performance and <Link href="/calculators/tiktok-ad-cost" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">TikTok Ad Cost Calculator</Link> for budget planning.
          </p>
        </div>

        {/* Author Byline */}
        <div className="max-w-5xl mx-auto mb-8">
          <PageAuthorByline pageSlug="cpm-cpv" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CPMCPVCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                TikTok CPM Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Industry benchmarks for TikTok advertising CPM:
              </p>
              <div className="space-y-3">
                {[
                  { range: '$1-$3', label: 'Excellent', desc: 'Broad targeting, high engagement', color: 'bg-success-100 border-success-300 text-success-700' },
                  { range: '$3-$6', label: 'Good', desc: 'Standard campaigns, good targeting', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { range: '$6-$10', label: 'Average', desc: 'Niche targeting, competitive industries', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { range: '$10+', label: 'High', desc: 'Premium niches, highly specific targeting', color: 'bg-warning-100 border-warning-300 text-warning-700' },
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
                How to Optimize Your CPM
              </h2>
              <div className="space-y-3">
                {[
                  'Broaden your audience targeting to increase available ad inventory',
                  'Create scroll-stopping content in the first 3 seconds',
                  'Test multiple ad variations to improve relevance scores',
                  'Use TikTok\'s automatic bidding for better optimization',
                  'Avoid over-targeting which limits inventory and raises costs',
                  'Run campaigns for at least 7 days to let algorithm learn',
                  'Target countries with lower CPMs (avoid only US/UK)',
                  'Schedule ads during off-peak hours for lower competition',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-sm text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                CPM by Industry
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Average TikTok CPM varies significantly by industry:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <MoneyIcon size={16} className="text-success-600" />
                      Finance & Insurance
                    </span>
                    <span className="text-neutral-600">$8-$15</span>
                  </div>
                  <p className="text-neutral-600">Highest CPM, competitive niche</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Laptop size={16} className="text-primary-600" />
                      Technology & Software
                    </span>
                    <span className="text-neutral-600">$6-$12</span>
                  </div>
                  <p className="text-neutral-600">High-value customers, B2B focus</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <ShoppingBag size={16} className="text-secondary-600" />
                      E-commerce & Retail
                    </span>
                    <span className="text-neutral-600">$3-$6</span>
                  </div>
                  <p className="text-neutral-600">Mid-range, high conversion potential</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Gamepad2 size={16} className="text-warning-600" />
                      Entertainment & Gaming
                    </span>
                    <span className="text-neutral-600">$1-$4</span>
                  </div>
                  <p className="text-neutral-600">Lower CPM, broad audience appeal</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is CPM and Why It Matters
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  CPM (Cost Per Mille) is the cost you pay for 1,000 ad impressions on TikTok. It's one of the most important metrics for measuring advertising efficiency and comparing campaign performance across different platforms, audiences, and time periods.
                </p>
                <p>
                  <strong>Why CPM matters for your TikTok ads:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Helps you budget and forecast ad spend for campaigns</li>
                  <li>Enables comparison of cost efficiency across different audience segments</li>
                  <li>Identifies which targeting strategies deliver the best value</li>
                  <li>Critical for brand awareness campaigns focused on maximum reach</li>
                  <li>Used by agencies and brands to benchmark advertising costs</li>
                </ul>
                <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Industry Insight:</strong> TikTok CPM has become increasingly competitive as more advertisers join the platform. In 2026, average CPMs range from $4-$8 in the US, but can vary dramatically based on your targeting, creative quality, and industry. Understanding your CPM helps you stay competitive and maximize your advertising ROI.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Use This CPM Calculator
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Follow these steps to calculate and analyze your TikTok advertising costs:
                </p>
                <div className="space-y-3">
                  {[
                    { step: 1, title: 'Find Your Ad Spend', desc: 'Go to TikTok Ads Manager and locate your total campaign spend for the period you want to analyze.' },
                    { step: 2, title: 'Get Your Impressions', desc: 'In the same campaign report, find the total number of impressions (times your ad was shown to users).' },
                    { step: 3, title: 'Enter Values', desc: 'Input both numbers into the calculator above and click "Calculate CPM/CPV".' },
                    { step: 4, title: 'Analyze Results', desc: 'Review your CPM, compare it to industry benchmarks, and identify opportunities for optimization.' },
                    { step: 5, title: 'Take Action', desc: 'Use the insights to adjust targeting, creative, or bidding strategy to improve your CPM and overall campaign performance.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">{item.title}</p>
                        <p className="text-body-sm text-neutral-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Understanding TikTok Ad Metrics
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">When to Focus on CPM</h3>
                  <p className="text-body-sm text-neutral-700">
                    Use CPM as your primary metric for brand awareness campaigns where your goal is maximum reach and impressions, not immediate conversions. CPM optimization works best for product launches, brand building, and building top-of-funnel awareness.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">When CPM Doesn't Matter</h3>
                  <p className="text-body-sm text-neutral-700">
                    For conversion campaigns, focus on CPA (Cost Per Acquisition) or ROAS (Return on Ad Spend) instead. A high CPM is fine if your conversion rate is excellent. Never sacrifice conversion quality just to achieve a lower CPM.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">CPM vs CPV: Which to Track?</h3>
                  <p className="text-body-sm text-neutral-700">
                    CPM gives you the big picture (cost per 1,000 impressions), while CPV shows the granular cost per single impression. Use CPM for strategic decisions and budget planning, use CPV for detailed optimization and A/B testing.
                  </p>
                </div>
                <div className="p-3 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Pro Tip:</strong> Compare your CPM to your engagement rate and conversion rate. A $10 CPM with 10% conversion rate is better than a $2 CPM with 1% conversion. Always prioritize quality metrics over vanity metrics.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Common CPM Mistakes to Avoid
              </h2>
              <div className="space-y-3">
                {[
                  { mistake: 'Focusing only on low CPM', solution: 'A low CPM with poor engagement or conversions wastes money. Track CPM alongside engagement rate and conversion metrics.' },
                  { mistake: 'Not testing different creatives', solution: 'Creative quality dramatically affects CPM. Test 3-5 ad variations to find what resonates and lowers costs.' },
                  { mistake: 'Over-targeting your audience', solution: 'Very narrow targeting limits inventory and increases CPM. Start broad and narrow down based on performance data.' },
                  { mistake: 'Ignoring seasonal trends', solution: 'CPMs spike during Q4 holidays and major shopping events. Plan budgets accordingly and adjust expectations.' },
                  { mistake: 'Not using automatic bidding', solution: 'Manual bidding often results in higher CPMs. Let TikTok\'s algorithm optimize for at least 7 days before judging performance.' },
                  { mistake: 'Running campaigns too short', solution: 'Campaigns need 7-14 days for the algorithm to learn and optimize. Short campaigns result in higher CPMs and poor performance.' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-warning-500">
                    <p className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                      <X size={16} className="text-danger-DEFAULT" />
                      {item.mistake}
                    </p>
                    <p className="text-body-sm text-neutral-700 flex items-center gap-2">
                      <Check size={16} className="text-success-DEFAULT" />
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="cpm-cpv"
            formula={`CPM (Cost Per Mille) = (Ad Spend / Impressions) × 1,000

CPV (Cost Per View) = Ad Spend / Impressions

Impressions per Dollar = Impressions / Ad Spend

Example:
Ad Spend: $1,000
Impressions: 100,000

CPM = ($1,000 / 100,000) × 1,000 = $10.00
CPV = $1,000 / 100,000 = $0.01
Impressions per $1 = 100,000 / 1,000 = 100`}
            assumptions={[
              { label: 'Impressions Accuracy', value: 'Data comes directly from TikTok Ads Manager reporting' },
              { label: 'Industry Benchmarks', value: 'Based on 2024 TikTok advertising performance data across industries' },
              { label: 'CPM Variance', value: 'CPM varies by targeting, industry, seasonality, and ad quality' },
              { label: 'Performance Rating', value: 'Benchmarks: Excellent <$3, Good $3-$6, Average $6-$10, High >$10' },
            ]}
            dataSources={[
              'TikTok Ads Manager official metrics',
              'TikTok for Business advertising benchmarks (2024)',
              'Industry reports from WordStream and AdEspresso',
              'Analysis of 500+ TikTok ad campaigns across industries',
            ]}
            limitations="CPM alone doesn't measure campaign success—consider engagement rate, conversion rate, and ROAS. CPM varies significantly by geography, targeting parameters, and seasonality. Lower CPM doesn't always mean better campaign performance."
            lastUpdated="November 13, 2026"
          />

          <FAQSection
            pageName="CPM/CPV Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="cpm-cpv"
            calculators={[
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Calculate return on investment for your TikTok ad campaigns',
                icon: 'TrendingUp',
              },
              {
                name: 'Ad Revenue Calculator',
                slug: 'ad-revenue',
                description: 'Estimate revenue from TikTok advertising campaigns',
                icon: 'DollarSign',
              },
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description: 'Calculate your brand sponsorship rates',
                icon: 'Handshake',
              },
            ]}
          />

          {/* Real-World Example Section */}
          <Card className="mt-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real-World Example: Calculating TikTok CPM
            </h2>
            <p className="text-body-md text-neutral-700 mb-4 leading-relaxed">
              Let's walk through a real campaign example. You're a D2C brand launching a new product and running a TikTok awareness campaign. You've allocated $5,000 for a week-long campaign targeting US females aged 18-35 interested in beauty and wellness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Campaign Stats</h3>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between"><span>Total Ad Spend:</span><span className="font-medium">$5,000</span></div>
                  <div className="flex justify-between"><span>Total Impressions:</span><span className="font-medium">750,000</span></div>
                  <div className="flex justify-between"><span>Campaign Duration:</span><span className="font-medium">7 days</span></div>
                  <div className="flex justify-between"><span>Target Audience:</span><span className="font-medium">US, F, 18-35</span></div>
                  <div className="flex justify-between"><span>Ad Format:</span><span className="font-medium">In-Feed</span></div>
                </div>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Calculated Results</h3>
                <p className="text-display-sm font-bold text-primary-600 mb-2">$6.67</p>
                <p className="text-body-sm text-neutral-700 mb-3">CPM (Cost Per Mille)</p>
                <p className="text-body-xs text-neutral-600 mb-1">CPV: $0.00667 per impression</p>
                <p className="text-body-xs text-neutral-600">Impressions per $1: 150</p>
                <span className="inline-block mt-2 px-3 py-1 bg-white rounded-full text-label-sm font-medium text-success-700">
                  Good Performance
                </span>
              </div>
            </div>
            <div className="p-4 bg-success-50 rounded-lg border border-success-200 mb-4">
              <p className="text-body-sm text-neutral-800">
                <span className="font-semibold">Analysis:</span> Your $6.67 CPM is in the "Good" range for beauty/wellness targeting in the US. This indicates efficient audience targeting and quality creative. For every dollar spent, you're getting 150 impressions—solid value for brand awareness.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="text-label-md font-semibold text-neutral-900 mb-2">Optimization Opportunities</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Test broader age targeting (18-45) to potentially lower CPM to $4-$5</li>
                <li>• Run A/B tests with 3-5 creative variations to improve engagement and reduce CPM</li>
                <li>• Consider adding lookalike audiences based on website visitors</li>
                <li>• Schedule more budget to peak performance hours (6-9 PM) to improve efficiency</li>
              </ul>
            </div>
          </Card>

          {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
          <div className="mt-12">
            <PageEEAT pageSlug="cpm-cpv" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
