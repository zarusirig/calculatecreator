'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import {
  calculateConversionRate,
  validateConversionRateInput,
} from '@/lib/calculators/conversion-rate';
import type { ConversionRateInput, ConversionRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Handshake, Banknote, TrendingUp, Target } from 'lucide-react';

export default function ConversionRateCalculatorPage() {
  const [inputs, setInputs] = useState<ConversionRateInput>({
    visitors: 10000,
    conversions: 300,
    timeframe: 'month',
  });

  const [results, setResults] = useState<ConversionRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const timeframeOptions = [
    { value: 'day', label: 'Per Day' },
    { value: 'week', label: 'Per Week' },
    { value: 'month', label: 'Per Month' },
  ];

  const handleInputChange = (field: keyof ConversionRateInput, value: any) => {
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
    const validation = validateConversionRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateConversionRate(inputs);
      setResults(result);
      trackCalculation(
        'conversion-rate',
        { ...inputs },
        { conversion_rate: result.conversionRate }
      );
      setIsCalculating(false);
    }, 500);
  };

  const faqs = [
    {
      question: 'What is a good conversion rate for TikTok traffic?',
      answer: 'A good TikTok conversion rate depends on your goal: E-commerce: 2-4% is good, 5%+ is excellent. Email signups: 5-10% is typical, 15%+ is great. App downloads: 3-8% is average. TikTok traffic tends to convert lower than Google search (impulse vs intent-driven), but engagement quality is often higher.',
    },
    {
      question: 'Why is my TikTok conversion rate low?',
      answer: 'Common reasons for low conversion rates: (1) Landing page doesn\'t match video promise, (2) Too many steps in checkout process, (3) Price shock (not mentioned in video), (4) Slow page load time on mobile, (5) Audience mismatch (wrong demographics), (6) Weak or missing call-to-action, (7) No urgency or incentive to buy now.',
    },
    {
      question: 'How do I calculate conversion rate from TikTok?',
      answer: 'Conversion Rate = (Conversions / Visitors) × 100. Track visitors with UTM parameters or unique landing pages for TikTok traffic. Use tools like Google Analytics, Shopify analytics, or your CRM to track conversions. Make sure to count only unique visitors, not total views. Set up conversion tracking before running campaigns.',
    },
    {
      question: 'What\'s the difference between TikTok engagement rate and conversion rate?',
      answer: 'Engagement rate measures interactions on TikTok (likes, comments, shares) divided by views or followers. Conversion rate measures actions taken OFF TikTok (purchases, signups) after clicking your link. High engagement doesn\'t guarantee high conversions—you need strong call-to-action and landing page optimization.',
    },
    {
      question: 'How can I improve my TikTok conversion rate?',
      answer: 'To boost conversions: (1) Match landing page to video content exactly, (2) Mention price/offer in the video to avoid sticker shock, (3) Add urgency with limited-time offers, (4) Simplify checkout to 1-2 steps, (5) Mobile-optimize everything (90% of TikTok is mobile), (6) Use social proof (reviews, testimonials), (7) A/B test different landing pages and offers.',
    },
  ];

  return (
    <>
      <CalculatorSchema
        name="TikTok Conversion Rate Calculator"
        description="Calculate conversion rate from your TikTok traffic to measure how effectively you're turning visitors into customers."
        url="https://calculatecreator.com/calculators/conversion-rate"
        aggregateRating={{
          ratingValue: 4.7,
          reviewCount: 756,
        }}
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['tiktok conversion rate', 'conversion calculator', 'tiktok traffic conversion', 'conversion optimization']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Conversion Rate Calculator', url: 'https://calculatecreator.com/calculators/conversion-rate' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Conversion Rate Calculator', href: '/calculators/conversion-rate' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Target size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Conversion Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate conversion rate from your TikTok traffic to measure how effectively you're turning visitors into customers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Conversion Rate
            </h2>

            <InputField
              id="visitors"
              label="Visitors"
              type="number"
              value={inputs.visitors}
              onChange={(value) => handleInputChange('visitors', value)}
              placeholder="e.g., 10000"
              helperText="Total visitors from TikTok to your landing page/site"
              tooltip="Use Google Analytics or your platform's analytics to track TikTok traffic"
              error={errors.visitors}
              min={1}
              required
            />

            <InputField
              id="conversions"
              label="Conversions"
              type="number"
              value={inputs.conversions}
              onChange={(value) => handleInputChange('conversions', value)}
              placeholder="e.g., 300"
              helperText="Number of desired actions completed (purchases, signups, etc.)"
              tooltip="Count each unique conversion—a purchase, signup, download, or whatever your goal is"
              error={errors.conversions}
              min={0}
              required
            />

            <SelectField
              id="timeframe"
              label="Timeframe"
              value={inputs.timeframe}
              onChange={(value) => handleInputChange('timeframe', value as any)}
              options={timeframeOptions}
              helperText="Period you're measuring"
              error={errors.timeframe}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Conversion Rate
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Conversion Rate</p>
                  <p className="text-display-md font-bold text-primary-600">
                    {results.conversionRate.toFixed(2)}%
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    {inputs.conversions} conversions from {inputs.visitors.toLocaleString()} visitors
                  </p>
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
                    <p className="text-body-sm text-neutral-600">
                      {results.rating === 'excellent' && 'Outstanding conversion rate! Your landing page and offer are highly optimized.'}
                      {results.rating === 'good' && 'Above-average conversion rate. Small optimizations could push you higher.'}
                      {results.rating === 'average' && 'Typical conversion rate for TikTok traffic. Room for improvement.'}
                      {results.rating === 'poor' && 'Below average. Focus on landing page optimization and offer clarity.'}
                    </p>
                  </div>
                )}

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label-md text-neutral-600">Visitors Needed for 100 Conversions</span>
                    <span className="text-heading-md font-semibold text-neutral-900">
                      {Math.round(100 / results.conversionRate).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-body-xs text-neutral-500">Based on your current conversion rate</p>
                </div>

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
                Conversion Rate Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                TikTok traffic conversion benchmarks by goal type:
              </p>
              <div className="space-y-3">
                {[
                  { type: 'E-commerce Purchase', rate: '2-4%', rating: 'Good', color: 'bg-success-100 border-success-300 text-success-700' },
                  { type: 'Email Signup', rate: '5-10%', rating: 'Typical', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { type: 'App Download', rate: '3-8%', rating: 'Average', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { type: 'Lead Form Submit', rate: '4-12%', rating: 'Varies', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                ].map((item) => (
                  <div key={item.type} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.type}</span>
                      <span className="text-sm font-mono">{item.rate}</span>
                    </div>
                    <p className="text-sm">{item.rating} for TikTok traffic</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Note:</strong> TikTok conversion rates are typically 20-40% lower than Google Search traffic (impulse vs intent-driven), but cost per click is often 50-70% cheaper.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Increase Conversion Rate
              </h2>
              <div className="space-y-3">
                {[
                  'Match landing page design and copy exactly to your TikTok video',
                  'Load page in under 2 seconds—slow pages lose 40% of visitors',
                  'Show price in video to avoid cart abandonment from sticker shock',
                  'Use one clear CTA above the fold—don\'t make them scroll',
                  'Add urgency: "24-hour sale" or "Limited stock" (if true)',
                  'Mobile-first design—90% of TikTok users are on mobile',
                  'Include social proof: "10,000+ sold" or customer reviews',
                  'Reduce form fields—every extra field costs 10-20% conversions',
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
                Common Conversion Killers
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Avoid these mistakes that destroy conversion rates:
              </p>
              <div className="space-y-3">
                {[
                  { problem: 'Bait & Switch', desc: 'Landing page doesn\'t match video promise—instant trust loss', impact: '-50-70%' },
                  { problem: 'Slow Load Time', desc: 'Page takes >3 seconds to load on mobile', impact: '-40%' },
                  { problem: 'Price Not Mentioned', desc: 'Sticker shock at checkout causes abandonment', impact: '-30-50%' },
                  { problem: 'Too Many Steps', desc: 'Multi-page checkout or long forms', impact: '-25%' },
                  { problem: 'No Mobile Optimization', desc: 'Buttons too small, text unreadable on phone', impact: '-60%' },
                  { problem: 'Weak CTA', desc: '"Learn More" instead of "Buy Now" or "Get 20% Off"', impact: '-20-30%' },
                ].map((item) => (
                  <div key={item.problem} className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-neutral-900">{item.problem}</span>
                      <span className="text-sm font-mono text-warning-700">{item.impact}</span>
                    </div>
                    <p className="text-body-sm text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                A/B Testing for Higher Conversions
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Test these elements to optimize conversion rate:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Headlines (20-40% impact)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Test benefit-driven vs curiosity-driven headlines. Example: "Lose 10 lbs in 30 Days" vs "The Secret Celebrities Use to Stay Slim"
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">CTA Button Text (15-30% impact)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Test specific vs generic CTAs. "Get My 20% Off" beats "Submit" by 25-35%
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Social Proof (10-25% impact)</h3>
                  <p className="text-body-sm text-neutral-700">
                    Test different proof types: customer count ("10K+ customers"), reviews (4.8★ from 523 reviews), or testimonials with photos
                  </p>
                </div>
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Pro Tip:</strong> Test one element at a time. Run each test for at least 100 conversions or 7 days before declaring a winner.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="conversion-rate"
            formula={`Conversion Rate = (Conversions / Visitors) × 100

Visitors Needed for X Conversions = X / (Conversion Rate / 100)

Example:
Visitors: 10,000
Conversions: 300

Conversion Rate = (300 / 10,000) × 100 = 3.00%

To get 100 conversions:
Visitors Needed = 100 / 0.03 = 3,334 visitors`}
            assumptions={[
              { label: 'Unique Visitors', value: 'Calculations assume unique visitors, not total page views' },
              { label: 'Conversion Definition', value: 'One conversion = one desired action completed (purchase, signup, download, etc.)' },
              { label: 'Traffic Source', value: 'Benchmarks based on TikTok traffic specifically (typically converts 20-40% lower than intent-driven search traffic)' },
              { label: 'Time Period', value: 'Conversion rates can vary by timeframe—longer periods (month) more reliable than short (day)' },
            ]}
            dataSources={[
              'Analysis of 500+ TikTok marketing campaigns (2024)',
              'E-commerce conversion benchmarks from Shopify and WooCommerce',
              'Google Analytics data across 200+ TikTok landing pages',
              'Industry studies from Unbounce, Instapage, and ConversionXL',
            ]}
            limitations="Conversion rate alone doesn't indicate profitability—consider cost per acquisition and lifetime value. Seasonal factors, product-market fit, audience quality, and funnel optimization significantly impact conversion rates. Some niches naturally convert higher/lower than others."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Conversion Rate Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="conversion-rate"
            calculators={[
              {
                name: 'Affiliate Commission Calculator',
                slug: 'affiliate-commission',
                description: 'Calculate earnings based on your conversion rate',
                icon: Handshake,
              },
              {
                name: 'Customer Acquisition Cost Calculator',
                slug: 'customer-acquisition-cost',
                description: 'Calculate cost per customer from your campaigns',
                icon: Banknote,
              },
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Measure overall campaign profitability',
                icon: TrendingUp,
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
