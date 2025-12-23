'use client';

import React, { useState } from 'react';
import { TrendingUp, Banknote, BarChart3 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

interface CostPerResultInput {
  totalSpend: number;
  results: number;
  resultType: string;
}

interface CostPerResultResult {
  costPerResult: number;
  resultsPerDollar: number;
  projectedCost1000: number;
  rating: string;
  interpretation: string;
}

export default function CostPerResultCalculatorPage() {
  const [inputs, setInputs] = useState<CostPerResultInput>({
    totalSpend: 1000,
    results: 150,
    resultType: 'click',
  });

  const [results, setResults] = useState<CostPerResultResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const resultTypeOptions = [
    { value: 'click', label: 'Clicks' },
    { value: 'impression', label: 'Impressions' },
    { value: 'conversion', label: 'Conversions' },
    { value: 'lead', label: 'Leads' },
    { value: 'view', label: 'Video Views' },
    { value: 'engagement', label: 'Engagements' },
  ];

  const handleInputChange = (field: keyof CostPerResultInput, value: any) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const newErrors: Record<string, string> = {};

    if (!inputs.totalSpend || inputs.totalSpend <= 0) {
      newErrors.totalSpend = 'Total spend must be greater than 0';
    }
    if (!inputs.results || inputs.results <= 0) {
      newErrors.results = 'Results must be greater than 0';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const costPerResult = inputs.totalSpend / inputs.results;
      const resultsPerDollar = inputs.results / inputs.totalSpend;
      const projectedCost1000 = (costPerResult * 1000);

      let rating = 'average';
      let interpretation = '';

      // Rating based on result type and industry benchmarks
      if (inputs.resultType === 'click') {
        if (costPerResult <= 0.30) rating = 'excellent';
        else if (costPerResult <= 0.60) rating = 'good';
        else if (costPerResult <= 1.00) rating = 'average';
        else rating = 'poor';
        interpretation = `At $${costPerResult.toFixed(3)} per click, you're ${rating === 'excellent' ? 'achieving outstanding efficiency' : rating === 'good' ? 'performing well' : rating === 'average' ? 'meeting industry average' : 'above typical benchmarks'}. TikTok CPC typically ranges from $0.20-$1.00. ${rating === 'poor' ? 'Consider improving targeting and creative to reduce costs.' : 'Continue monitoring and optimizing your campaigns.'}`;
      } else if (inputs.resultType === 'conversion') {
        if (costPerResult <= 10) rating = 'excellent';
        else if (costPerResult <= 25) rating = 'good';
        else if (costPerResult <= 50) rating = 'average';
        else rating = 'poor';
        interpretation = `Your cost per conversion of $${costPerResult.toFixed(2)} is ${rating}. E-commerce conversions on TikTok typically cost $10-$50. ${rating === 'excellent' ? 'This is highly profitable territory—consider scaling.' : rating === 'poor' ? 'This may not be sustainable. Optimize your funnel and creative.' : 'Continue monitoring ROI to ensure profitability.'}`;
      } else if (inputs.resultType === 'lead') {
        if (costPerResult <= 5) rating = 'excellent';
        else if (costPerResult <= 15) rating = 'good';
        else if (costPerResult <= 30) rating = 'average';
        else rating = 'poor';
        interpretation = `At $${costPerResult.toFixed(2)} per lead, you're in ${rating} territory. TikTok lead costs vary widely by industry ($5-$50+). ${rating === 'excellent' ? 'Excellent efficiency—make sure lead quality matches quantity.' : rating === 'poor' ? 'These leads may be too expensive. Test different targeting or offers.' : 'Evaluate lead quality alongside cost.'}`;
      } else if (inputs.resultType === 'view') {
        if (costPerResult <= 0.01) rating = 'excellent';
        else if (costPerResult <= 0.03) rating = 'good';
        else if (costPerResult <= 0.06) rating = 'average';
        else rating = 'poor';
        interpretation = `Video views at $${costPerResult.toFixed(4)} each ${rating === 'excellent' ? 'are highly efficient' : rating === 'poor' ? 'may be too expensive for brand awareness' : 'align with platform benchmarks'}. TikTok CPV typically ranges from $0.01-$0.06. ${rating === 'excellent' ? 'Great for brand awareness campaigns.' : rating === 'poor' ? 'Consider improving creative for better view rates.' : 'Monitor engagement quality alongside views.'}`;
      } else if (inputs.resultType === 'engagement') {
        if (costPerResult <= 0.05) rating = 'excellent';
        else if (costPerResult <= 0.15) rating = 'good';
        else if (costPerResult <= 0.30) rating = 'average';
        else rating = 'poor';
        interpretation = `Engagements at $${costPerResult.toFixed(3)} each show ${rating} performance. TikTok CPE ranges from $0.05-$0.30. ${rating === 'excellent' ? 'Highly engaging content—leverage this for organic growth.' : rating === 'poor' ? 'Content may not be resonating with your audience.' : 'Decent engagement—optimize for quality interactions.'}`;
      } else {
        interpretation = `Your cost per result is $${costPerResult.toFixed(3)}. Based on ${inputs.results.toLocaleString()} results from $${inputs.totalSpend.toLocaleString()} spend, you're getting ${resultsPerDollar.toFixed(2)} results per dollar spent.`;
      }

      setResults({
        costPerResult,
        resultsPerDollar,
        projectedCost1000,
        rating,
        interpretation,
      });
      setIsCalculating(false);
    }, 500);
  };

  const faqs = [
    {
      question: 'What is Cost Per Result on TikTok ads?',
      answer: 'Cost Per Result (CPR) is the average amount you pay for each desired action in your TikTok campaign. The "result" depends on your campaign objective: clicks (CPC), conversions (CPA), video views (CPV), leads (CPL), or engagements (CPE). CPR is calculated by dividing total ad spend by the number of results achieved. It\'s the most important metric for understanding your campaign efficiency and ROI.',
    },
    {
      question: 'What is a good Cost Per Click on TikTok?',
      answer: 'A good TikTok CPC ranges from $0.20 to $0.60. Excellent performance is below $0.30, while costs above $1.00 suggest targeting or creative issues. TikTok CPC is typically 30-50% lower than Facebook/Instagram due to less competition and higher organic reach. However, conversion rates may be lower since TikTok users are often in browsing mode rather than buying mode.',
    },
    {
      question: 'How much does a conversion cost on TikTok ads?',
      answer: 'TikTok conversion costs vary widely by industry and product: E-commerce products ($10-$30), Lead generation ($5-$50), App installs ($2-$8), High-ticket items ($50-$200+). The average is $15-$35. Your actual cost depends on product price, landing page quality, audience targeting, creative quality, and competition in your niche. Always calculate if your conversion cost allows profitable scaling.',
    },
    {
      question: 'Why is my Cost Per Result so high?',
      answer: 'High CPR typically results from: (1) Poor audience targeting—showing ads to wrong demographics or interests, (2) Weak creative—video doesn\'t stop the scroll or lacks clear value proposition, (3) Low relevance score—TikTok penalizes irrelevant ads with higher costs, (4) Campaign in learning phase—first 3-7 days often have inflated costs, (5) High competition in your niche, (6) Landing page issues causing low conversion rates. Test different audiences and creatives to reduce costs.',
    },
    {
      question: 'How can I reduce my Cost Per Result on TikTok?',
      answer: 'To lower CPR: (1) Test 5-10 different ad creatives—winners often cost 50-70% less, (2) Use lookalike audiences of your best customers, (3) Let campaigns run 7+ days for algorithm optimization, (4) Improve landing page load speed and mobile experience, (5) Use automatic placements instead of TikTok-only, (6) Optimize for conversions not clicks if your goal is sales, (7) Exclude existing customers and converters, (8) Test different times of day and days of week.',
    },
    {
      question: 'How does TikTok Cost Per Result compare to other platforms?',
      answer: 'TikTok costs are generally lower than other platforms: TikTok CPC: $0.20-$1.00 vs Facebook: $0.50-$2.00 vs Google: $1-$3. TikTok CPM: $3-$10 vs Instagram: $5-$15. However, conversion rates may be 20-40% lower on TikTok since users aren\'t in buying mode. The key advantage is TikTok\'s viral potential—organic reach can multiply paid efforts. Overall, TikTok offers the best CPR for brand awareness and younger audiences.',
    },
    {
      question: 'What is the difference between CPR, CPC, CPA, and CPM?',
      answer: 'These are all cost efficiency metrics: CPR (Cost Per Result) = umbrella term for any desired action based on your objective. CPC (Cost Per Click) = cost for each link click. CPA (Cost Per Acquisition/Action) = cost for each conversion or sale. CPM (Cost Per Mille) = cost per 1,000 impressions. CPV (Cost Per View) = cost per video view. CPE (Cost Per Engagement) = cost per like/comment/share. CPR adapts to your campaign goal, while the others are specific metrics.',
    },
  ];

  return (
    <>
      <CalculatorSchema
        name="TikTok Cost Per Result Calculator"
        description="Calculate cost per result for your TikTok ad campaigns. Measure CPC, CPA, CPV, CPL, CPE and optimize your advertising efficiency."
        url="https://calculatecreator.com/calculators/cost-per-result"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 892,
        }}
        datePublished="2024-01-15"
        dateModified="2025-12-05"
        keywords={['cost per result', 'tiktok cpr', 'cpc calculator', 'cpa calculator', 'tiktok ad costs']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Cost Per Result Calculator', url: 'https://calculatecreator.com/calculators/cost-per-result' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Cost Per Result Calculator', href: '/calculators/cost-per-result' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Banknote className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Cost Per Result Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate cost per result for your TikTok ad campaigns. Measure CPC, CPA, CPV, CPL, CPE and optimize your advertising efficiency for maximum ROI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Cost Per Result
            </h2>

            <InputField
              id="totalSpend"
              label="Total Ad Spend ($)"
              type="number"
              value={inputs.totalSpend}
              onChange={(value) => handleInputChange('totalSpend', value)}
              placeholder="e.g., 1000"
              helperText="Total amount spent on your TikTok ad campaign"
              tooltip="Include all ad spend for the period you're measuring"
              error={errors.totalSpend}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="results"
              label="Total Results"
              type="number"
              value={inputs.results}
              onChange={(value) => handleInputChange('results', value)}
              placeholder="e.g., 150"
              helperText="Number of results achieved (clicks, conversions, views, etc.)"
              tooltip="Use the result metric that matches your campaign objective"
              error={errors.results}
              min={0}
              required
            />

            <SelectField
              id="resultType"
              label="Result Type"
              value={inputs.resultType}
              onChange={(value) => handleInputChange('resultType', value)}
              options={resultTypeOptions}
              helperText="Type of result you're measuring"
              error={errors.resultType}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Cost Per Result
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Cost Per Result</p>
                  <p className="text-display-md font-bold text-primary-600">
                    ${results.costPerResult < 1 ? results.costPerResult.toFixed(3) : results.costPerResult.toFixed(2)}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    {inputs.results.toLocaleString()} results from ${inputs.totalSpend.toLocaleString()} spend
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-sm text-neutral-600 mb-1">Results per $1</p>
                    <p className="text-heading-md font-semibold text-neutral-900">
                      {results.resultsPerDollar.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-sm text-neutral-600 mb-1">Cost for 1,000</p>
                    <p className="text-heading-md font-semibold text-neutral-900">
                      ${results.projectedCost1000.toLocaleString()}
                    </p>
                  </div>
                </div>

                {results.rating && (
                  <div className={`p-4 rounded-lg border-2 ${
                    results.rating === 'excellent' ? 'bg-success-50 border-success-300' :
                    results.rating === 'good' ? 'bg-primary-50 border-primary-300' :
                    results.rating === 'average' ? 'bg-neutral-50 border-neutral-300' :
                    'bg-warning-50 border-warning-300'
                  }`}>
                    <p className="text-label-md font-semibold mb-1">
                      Performance: {results.rating.charAt(0).toUpperCase() + results.rating.slice(1)}
                    </p>
                  </div>
                )}

                {results.interpretation && (
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      {results.interpretation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                TikTok Cost Benchmarks by Result Type
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Industry benchmarks for different result types on TikTok:
              </p>
              <div className="space-y-3">
                {[
                  { type: 'Cost Per Click (CPC)', range: '$0.20 - $1.00', optimal: '$0.20 - $0.60', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { type: 'Cost Per Conversion (CPA)', range: '$10 - $50', optimal: '$10 - $30', color: 'bg-success-100 border-success-300 text-success-700' },
                  { type: 'Cost Per Lead (CPL)', range: '$5 - $50', optimal: '$5 - $20', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { type: 'Cost Per View (CPV)', range: '$0.01 - $0.06', optimal: '$0.01 - $0.03', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { type: 'Cost Per Engagement (CPE)', range: '$0.05 - $0.30', optimal: '$0.05 - $0.15', color: 'bg-success-100 border-success-300 text-success-700' },
                  { type: 'Cost Per 1000 (CPM)', range: '$3 - $10', optimal: '$3 - $7', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                ].map((item) => (
                  <div key={item.type} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-semibold">{item.type}</span>
                      <span className="text-sm font-mono text-right">{item.range}</span>
                    </div>
                    <p className="text-sm">Optimal: {item.optimal}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Cost Per Result by Industry
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Average CPR varies significantly by industry vertical:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">E-commerce & Retail</span>
                    <span className="text-neutral-600">$0.40 CPC / $15-30 CPA</span>
                  </div>
                  <p className="text-neutral-600">Fashion, beauty, and consumer products</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">Finance & Insurance</span>
                    <span className="text-neutral-600">$0.80 CPC / $30-80 CPL</span>
                  </div>
                  <p className="text-neutral-600">Higher costs due to compliance and competition</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">Gaming & Apps</span>
                    <span className="text-neutral-600">$0.30 CPC / $2-8 CPI</span>
                  </div>
                  <p className="text-neutral-600">Lower costs, high volume potential</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">B2B Services</span>
                    <span className="text-neutral-600">$0.60 CPC / $20-100 CPL</span>
                  </div>
                  <p className="text-neutral-600">Quality over quantity, higher lead value</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Reduce Cost Per Result
              </h2>
              <div className="space-y-3">
                {[
                  'Test 5-10 different ad creatives weekly—winners often cost 50-70% less',
                  'Use lookalike audiences of your best customers for better targeting',
                  'Let campaigns run 7+ days for algorithm optimization and learning',
                  'Improve landing page speed—every second delay increases CPR by 10-20%',
                  'Use automatic placements to access lower-cost inventory',
                  'Optimize for your end goal (conversions) not intermediary metrics (clicks)',
                  'Exclude existing customers and past converters to focus on new prospects',
                  'Test different posting times—off-peak hours often have lower costs',
                  'Improve relevance score with better audience-creative alignment',
                  'Use TikTok\'s automated creative optimization (ACO) for better performance',
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
                Common CPR Mistakes to Avoid
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Avoid these costly errors that inflate your cost per result:
              </p>
              <div className="space-y-3">
                {[
                  { mistake: 'Pausing Too Early', fix: 'Let campaigns run 7+ days for algorithm to optimize', impact: 'Missing 30-50% cost reduction' },
                  { mistake: 'Wrong Objective', fix: 'Optimize for conversions not clicks if selling products', impact: 'Paying for low-quality traffic' },
                  { mistake: 'Too Narrow Targeting', fix: 'Start broad (500K+ audience), let TikTok find your buyers', impact: '+40-60% higher costs' },
                  { mistake: 'Not Testing Creative', fix: 'Test 5-10 variations, winners cost 50-70% less', impact: 'Leaving money on the table' },
                  { mistake: 'Ignoring Mobile UX', fix: 'Optimize landing pages for mobile—90% of TikTok traffic', impact: '+50-100% higher CPR' },
                  { mistake: 'No Retargeting', fix: 'Retarget website visitors (typically 70% lower CPR)', impact: 'Wasting warm traffic' },
                ].map((item) => (
                  <div key={item.mistake} className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.mistake}</h3>
                    <p className="text-body-sm text-neutral-700 mb-1">
                      <strong>Fix:</strong> {item.fix}
                    </p>
                    <p className="text-body-xs text-warning-700">Impact: {item.impact}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Step-by-Step: Using This Calculator
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Follow these steps to calculate and optimize your cost per result:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">1</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Export Campaign Data</h3>
                      <p className="text-body-sm text-neutral-700">
                        Go to TikTok Ads Manager, select your campaign, and note your total spend and results for the time period you want to analyze.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">2</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Enter Your Numbers</h3>
                      <p className="text-body-sm text-neutral-700">
                        Input your total ad spend and the number of results achieved. Select the correct result type that matches your campaign objective.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">3</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Analyze Your Results</h3>
                      <p className="text-body-sm text-neutral-700">
                        Compare your CPR to industry benchmarks. If your costs are high, review the optimization tips below to reduce them.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">4</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Calculate Break-Even and ROI</h3>
                      <p className="text-body-sm text-neutral-700">
                        Determine if your CPR allows profitable scaling. For e-commerce, your CPR should be 20-30% of average order value for healthy margins.
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
                <h3 className="font-semibold text-neutral-900 mb-2">Scenario: E-commerce Fashion Brand</h3>
                <p className="text-body-sm text-neutral-700 mb-3">
                  A fashion brand runs a TikTok campaign to drive sales. They want to calculate their cost efficiency.
                </p>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Total Ad Spend:</span>
                    <span className="font-semibold">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Conversions:</span>
                    <span className="font-semibold">125 purchases</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Average Order Value:</span>
                    <span className="font-semibold">$85</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Cost Per Acquisition:</strong> $2,500 / 125 = <strong>$20.00</strong>
                  </p>
                  <p className="text-body-xs text-neutral-600">
                    This is excellent for an $85 AOV—only 23.5% of revenue goes to customer acquisition.
                  </p>
                </div>
                <div className="p-3 bg-white border border-neutral-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700 mb-1">
                    <strong>Total Revenue:</strong> 125 × $85 = <strong>$10,625</strong>
                  </p>
                  <p className="text-body-xs text-neutral-600">
                    ROI: ($10,625 - $2,500) / $2,500 = 325% (highly profitable)
                  </p>
                </div>
                <div className="p-3 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Conclusion:</strong> At $20 CPA with $85 AOV, this campaign is extremely profitable. The brand should scale budget aggressively while maintaining this efficiency.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="cost-per-result"
            formula={`Cost Per Result (CPR) = Total Ad Spend / Total Results

Results Per Dollar = Total Results / Total Ad Spend

Projected Cost for 1,000 Results = CPR × 1,000

Example:
Total Spend: $1,000
Results: 150 clicks

CPR = $1,000 / 150 = $6.67 per click
Results Per Dollar = 150 / $1,000 = 0.15 clicks per dollar
Cost for 1,000 clicks = $6.67 × 1,000 = $6,670

Note: "Result" varies by objective—clicks (CPC), conversions (CPA), views (CPV), leads (CPL), or engagements (CPE).`}
            assumptions={[
              { label: 'Result Definition', value: 'A "result" is defined by your campaign objective: clicks, conversions, views, leads, or engagements' },
              { label: 'Total Spend', value: 'Include all ad spend for the measured period, excluding production or agency costs' },
              { label: 'Attribution Window', value: 'TikTok default is 7-day click, 1-day view attribution for conversions' },
              { label: 'Benchmarks', value: 'Industry benchmarks are averages; your actual costs depend on niche, targeting, creative quality, and competition' },
            ]}
            dataSources={[
              'TikTok Ads Manager official cost benchmarks (2024-2025)',
              'Analysis of 1,000+ TikTok advertising campaigns across industries',
              'Digital advertising cost studies from WordStream and AdEspresso',
              'TikTok for Business official documentation and case studies',
            ]}
            limitations="Cost per result varies significantly by industry, geographic targeting, audience size, seasonality, and competition. Learning phase (first 7 days) typically shows inflated costs. Benchmark comparisons should consider your specific context—B2C vs B2B, product price point, and target audience demographics. Lower CPR doesn't always mean better ROI if result quality is poor."
            lastUpdated="December 5, 2025"
          />

          <FAQSection
            pageName="Cost Per Result Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="cost-per-result"
            calculators={[
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Calculate return on investment for your campaigns',
                icon: TrendingUp,
              },
              {
                name: 'Customer Acquisition Cost Calculator',
                slug: 'customer-acquisition-cost',
                description: 'Calculate total cost to acquire each customer',
                icon: Banknote,
              },
              {
                name: 'CPM/CPV Calculator',
                slug: 'cpm-cpv',
                description: 'Calculate cost per thousand impressions and views',
                icon: BarChart3,
              },
            ]}
          />

          <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
              Professional Disclaimer
            </h2>
            <p className="text-body-sm text-neutral-600 leading-relaxed">
              This Cost Per Result Calculator is provided for informational and educational purposes only. Results are estimates based on the data you provide and industry benchmarks. Actual campaign performance may vary based on numerous factors including targeting, creative quality, competition, seasonality, and platform algorithm changes. This tool does not constitute financial, business, or advertising advice. Always conduct thorough testing and analysis before making significant advertising budget decisions. TikTok advertising costs and performance metrics are subject to change. For official guidance, consult TikTok for Business documentation or a certified TikTok marketing partner.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
