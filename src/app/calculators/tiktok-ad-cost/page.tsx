'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { calculateTikTokAdCost, validateTikTokAdCostInput } from '@/lib/calculators/tiktok-ad-cost';
import type { TikTokAdCostInput, TikTokAdCostResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { DollarSign, RotateCcw, TrendingUp, Users, BarChart2, Target, Tag, ShoppingCart, Lightbulb } from 'lucide-react';

export default function TikTokAdCostCalculatorPage() {
  const [inputs, setInputs] = useState<TikTokAdCostInput>({
    budget: 100,
    impressions: 10000,
    views: 5000,
    clicks: 200,
    conversions: 10,
    conversionValue: 500,
  });
  const [results, setResults] = useState<TikTokAdCostResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setInputs(prev => ({ ...prev, [field]: parseFloat(value) || 0 }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateTikTokAdCostInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateTikTokAdCost(inputs);
      setResults(result);
      trackCalculation('tiktok-ad-cost', inputs, {
        cpm: result.cpm,
        cpv: result.cpv,
        roas: result.roas,
        profit: result.profit
      });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
        <div className="container-custom">
          <Breadcrumb items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'TikTok Ad Cost Calculator', href: '/calculators/tiktok-ad-cost' }
          ]} />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-DEFAULT text-white mb-6">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Ad Cost Calculator 2025</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Calculate TikTok advertising costs, CPM, CPV rates, and measure campaign ROI for effective TikTok marketing. Updated with 2025 benchmarks and industry insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Updated November 2025
              </span>
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                15+ Ad Cost Keywords
              </span>
              <span className="flex items-center gap-1">
                <Lightbulb className="w-4 h-4" />
                Industry Benchmarks
              </span>
              <span className="flex items-center gap-1">
                <BarChart2 className="w-4 h-4" />
                ROI Calculator
              </span>
            </div>
          </div>

          {/* Author Byline with Expert Review Badge */}
          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="tiktok-ad-cost" />
          </div>

          {/* Industry Insights Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  2025 TikTok Ad Trends
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• CPM increased 25% YoY</li>
                  <li>• CPC up 18% for competitive niches</li>
                  <li>• Gen Z targeting costs rising</li>
                  <li>• Video ads gaining traction</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Best Performing Formats
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• In-Feed Ads: 40% of spend</li>
                  <li>• Branded Hashtag: 28% CTR boost</li>
                  <li>• Spark Ads: 35% lower CPM</li>
                  <li>• Shopping Ads: 120% ROAS</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  Cost Efficiency Tips
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Test during off-peak hours</li>
                  <li>• Use audience expansion</li>
                  <li>• Optimize creative frequency</li>
                  <li>• Leverage retargeting</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Campaign Presets */}
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-purple-600" />
                Quick Campaign Presets
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({
                    budget: 500,
                    impressions: 50000,
                    views: 25000,
                    clicks: 1000,
                    conversions: 50,
                    conversionValue: 2500
                  })}
                  className="text-xs"
                >
                  Starter Campaign
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({
                    budget: 2000,
                    impressions: 150000,
                    views: 75000,
                    clicks: 3000,
                    conversions: 150,
                    conversionValue: 9000
                  })}
                  className="text-xs"
                >
                  Growth Campaign
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({
                    budget: 10000,
                    impressions: 500000,
                    views: 250000,
                    clicks: 10000,
                    conversions: 500,
                    conversionValue: 35000
                  })}
                  className="text-xs"
                >
                  Enterprise Campaign
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({
                    budget: 100,
                    impressions: 8000,
                    views: 4000,
                    clicks: 160,
                    conversions: 8,
                    conversionValue: 400
                  })}
                  className="text-xs"
                >
                  Test Budget
                </Button>
              </div>
              <p className="text-xs text-neutral-600">Click presets to auto-fill calculator with realistic campaign data</p>
            </Card>

            <Card className="p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <InputField
                  id="budget"
                  label="Ad Budget ($)"
                  type="number"
                  value={inputs.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                  error={errors.budget}
                  placeholder="100"
                  min={1}
                  max={1000000}
                  required
                />

                <InputField
                  id="impressions"
                  label="Impressions"
                  type="number"
                  value={inputs.impressions}
                  onChange={(value) => handleInputChange('impressions', value)}
                  error={errors.impressions}
                  placeholder="10000"
                  min={1}
                  required
                />

                <InputField
                  id="views"
                  label="Views"
                  type="number"
                  value={inputs.views}
                  onChange={(value) => handleInputChange('views', value)}
                  error={errors.views}
                  placeholder="5000"
                  min={1}
                  required
                />

                <InputField
                  id="clicks"
                  label="Clicks"
                  type="number"
                  value={inputs.clicks}
                  onChange={(value) => handleInputChange('clicks', value)}
                  error={errors.clicks}
                  placeholder="200"
                  min={0}
                  required
                />

                <InputField
                  id="conversions"
                  label="Conversions (optional)"
                  type="number"
                  value={inputs.conversions || 0}
                  onChange={(value) => handleInputChange('conversions', value)}
                  placeholder="10"
                  min={0}
                />

                <InputField
                  id="conversionValue"
                  label="Conversion Value ($) (optional)"
                  type="number"
                  value={inputs.conversionValue || 0}
                  onChange={(value) => handleInputChange('conversionValue', value)}
                  placeholder="500"
                  min={0}
                />
              </div>

              <div className="text-center">
                <Button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  size="lg"
                  className="px-12"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate Ad Costs'}
                </Button>
              </div>
            </Card>

            {results && (
              <Card className="p-6">
                <h3 className="text-heading-lg font-bold text-neutral-900 mb-6">Ad Campaign Results</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">${results.cpm.toFixed(2)}</div>
                    <div className="text-sm text-neutral-600">CPM (Cost Per Mille)</div>
                    <div className="text-xs text-neutral-500 mt-1">Cost per 1,000 impressions</div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">${results.cpv.toFixed(4)}</div>
                    <div className="text-sm text-neutral-600">CPV (Cost Per View)</div>
                    <div className="text-xs text-neutral-500 mt-1">Cost per video view</div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">${results.cpc.toFixed(2)}</div>
                    <div className="text-sm text-neutral-600">CPC (Cost Per Click)</div>
                    <div className="text-xs text-neutral-500 mt-1">Cost per link click</div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{results.roas.toFixed(2)}x</div>
                    <div className="text-sm text-neutral-600">ROAS</div>
                    <div className="text-xs text-neutral-500 mt-1">Return on Ad Spend</div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">${results.profit.toFixed(2)}</div>
                    <div className="text-sm text-neutral-600">Campaign Profit</div>
                    <div className="text-xs text-neutral-500 mt-1">Net profit/loss</div>
                  </div>

                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">{results.additionalMetrics?.efficiency || 'Calculating...'}</div>
                    <div className="text-sm text-neutral-600">Efficiency Rating</div>
                    <div className="text-xs text-neutral-500 mt-1">Performance level</div>
                  </div>
                </div>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-2">Analysis</h4>
                  <p className="text-neutral-700 mb-3">{results.interpretation}</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-900 mb-1">Recommendation</h5>
                    <p className="text-blue-800 text-sm">{results.recommendation}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <MethodologySection
              calculatorName="TikTok Ad Cost Calculator"
              formula="CPM = (Total Ad Spend ÷ Impressions) × 1,000"
              assumptions={[
                { label: 'Auction-Based Pricing', value: 'TikTok uses real-time bidding for ad placements' },
                { label: 'Performance Optimization', value: 'Algorithm favors ads likely to drive engagement' },
                { label: 'Regional Variations', value: 'Costs differ by market maturity and competition' },
                { label: 'Creative Quality', value: 'Better ads get lower costs and better placements' },
                { label: 'Seasonal Trends', value: 'Holiday periods increase costs significantly' },
                { label: 'Account History', value: 'Proven advertisers get better rates over time' }
              ]}
              dataSources={['TikTok Ads Manager Data', 'Q4 2025 Industry Reports', 'TikTok Official Benchmarks']}
              limitations="Costs fluctuate based on real-time auction dynamics and seasonal trends. Actual performance may vary based on creative quality and audience targeting."
              lastUpdated="November 2025"
            />

            <FAQSection
              pageName="TikTok Ad Cost Calculator"
              faqs={[
                {
                  question: "What's a good CPM for TikTok ads?",
                  answer: "A good CPM is typically under $10. Premium targeting and high-competition niches like beauty and fashion can reach $15-20 CPM. Average CPM across industries is $7.50 (2025 data)."
                },
                {
                  question: "How much do TikTok ads cost to start?",
                  answer: "You can start with as little as $1-5 per day, but $20-50 daily budget is recommended for meaningful results. Minimum campaign budget is $50-200 depending on your region."
                },
                {
                  question: "What's the difference between CPM and CPV?",
                  answer: "CPM charges per 1,000 ad impressions (views), while CPV charges per actual video view completion. CPV is often more cost-effective for video-heavy campaigns."
                },
                {
                  question: "How do I reduce TikTok ad costs?",
                  answer: "Improve targeting precision, create engaging creative content, test different ad formats, optimize for specific objectives, run campaigns during off-peak hours, and build account performance history."
                },
                {
                  question: "What's TikTok's ad budget recommendation?",
                  answer: "TikTok recommends $200-500 minimum for testing campaigns, and $1,000+ for serious campaigns to gather sufficient performance data. Enterprise accounts may require higher minimums."
                },
                {
                  question: "Are TikTok ad costs worth it?",
                  answer: "TikTok advertising can be highly cost-effective for reaching Gen Z and millennial audiences. Average ROAS across industries is 3.2x, with e-commerce achieving up to 8x ROAS in 2025."
                },
                {
                  question: "How do TikTok ad costs compare to other platforms?",
                  answer: "TikTok CPM is typically 30-50% lower than Instagram and Facebook. CPC can be 20-40% lower for video-heavy campaigns. CPV is often the most cost-effective model on TikTok."
                },
                {
                  question: "What factors affect TikTok ad costs?",
                  answer: "Competition level, targeting precision, creative quality, audience demographics, seasonality, ad format, bidding strategy, and account performance history all impact costs."
                },
                {
                  question: "Can I get better rates as a TikTok advertiser?",
                  answer: "Yes, proven advertisers with high-performing campaigns often receive better rates through TikTok's advertiser tier system. Build account history and maintain good performance to access premium rates."
                },
                {
                  question: "How often do TikTok ad costs change?",
                  answer: "Costs fluctuate daily based on real-time auction dynamics, seasonal trends, and market competition. Major updates occur quarterly with TikTok's algorithm and platform changes."
                }
              ]}
            />

            <RelatedCalculators
              currentCalculator="tiktok-ad-cost"
              calculators={[
                { name: 'Campaign ROI Calculator', slug: 'campaign-roi', description: 'Measure overall campaign profitability', icon: TrendingUp },
                { name: 'CPM/CPV Calculator', slug: 'cpm-cpv', description: 'Compare different ad pricing models', icon: DollarSign },
                { name: 'Customer Acquisition Cost', slug: 'customer-acquisition-cost', description: 'Calculate CAC for TikTok traffic', icon: Users },
                { name: 'Lifetime Value Calculator', slug: 'lifetime-value', description: 'Measure customer lifetime value', icon: RotateCcw },
              ]}
            />
          </div>

          {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
          <div className="mt-12">
            <PageEEAT pageSlug="tiktok-ad-cost" variant="full" />
          </div>
        </div>
      </div>
  );
}
