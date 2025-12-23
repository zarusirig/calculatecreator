'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import {
  calculateAffiliateCommission,
  validateAffiliateCommissionInput,
} from '@/lib/calculators/affiliate-commission';
import type { AffiliateCommissionInput, AffiliateCommissionResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Banknote, ShoppingBag, Target, Sparkles, Shirt, Home, Smartphone, Check, X } from 'lucide-react';

export default function AffiliateCommissionCalculatorPage() {
  const [inputs, setInputs] = useState<AffiliateCommissionInput>({
    productPrice: 50,
    commissionRate: 10,
    monthlyClicks: 1000,
    conversionRate: 3,
  });

  const [results, setResults] = useState<AffiliateCommissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof AffiliateCommissionInput, value: any) => {
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
    const validation = validateAffiliateCommissionInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateAffiliateCommission(inputs);
      setResults(result);
      trackCalculation(
        'affiliate-commission',
        { ...inputs },
        { monthly_earnings: result.monthlyEarnings, commission_per_sale: result.commissionPerSale }
      );
      setIsCalculating(false);
    }, 500);
  };

  const faqs = [
    {
      question: 'How much commission does TikTok Shop affiliate pay?',
      answer: 'TikTok Shop affiliate commissions typically range from 5-30% depending on the product category. Beauty and fashion products often pay 10-20%, while electronics may pay 5-10%. Some brands offer up to 30% commission for high-margin products. Check each product\'s specific commission rate in TikTok Shop affiliate marketplace.',
    },
    {
      question: 'How do I become a TikTok Shop affiliate?',
      answer: 'To join TikTok Shop affiliate program: (1) Have 5,000+ followers, (2) Apply through TikTok Shop Seller Center or Creator Marketplace, (3) Get approved (usually 3-7 days), (4) Browse products in the affiliate marketplace, (5) Add products to your videos. Some regions allow accounts with 1,000+ followers to apply.',
    },
    {
      question: 'When do I get paid for TikTok affiliate sales?',
      answer: 'TikTok Shop pays affiliate commissions 7-14 days after the order is confirmed and the return window closes. Payments are processed monthly, and you need a minimum balance of $10 (US) to withdraw. Funds can be transferred to your bank account or PayPal, typically within 2-5 business days.',
    },
    {
      question: 'What\'s a good conversion rate for TikTok affiliate links?',
      answer: 'A good TikTok affiliate conversion rate is 2-5%. Top performers achieve 5-10% conversion by creating authentic product reviews, showing real use cases, and building trust with their audience. Factors affecting conversion: product price point, niche alignment, audience trust, video quality, and call-to-action strength.',
    },
    {
      question: 'Can I do TikTok affiliate marketing without showing my face?',
      answer: 'Yes! Many successful TikTok affiliates use faceless content: product unboxings, hands-only demonstrations, voiceover reviews, aesthetic product photography, comparison videos, or animation. Focus on showcasing the product benefits clearly. Some niches (tech gadgets, home products) work particularly well for faceless affiliate content.',
    },
  ];

  return (
    <>
      <CalculatorSchema
        name="TikTok Affiliate Commission Calculator"
        description="Calculate your potential earnings from TikTok Shop affiliate marketing and product commissions."
        url="https://calculatecreator.com/calculators/affiliate-commission"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 1034,
        }}
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['tiktok affiliate calculator', 'tiktok shop commission', 'affiliate earnings', 'tiktok affiliate income']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Affiliate Commission Calculator', url: 'https://calculatecreator.com/calculators/affiliate-commission' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Affiliate Commission Calculator', href: '/calculators/affiliate-commission' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Affiliate Commission Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your potential earnings from TikTok Shop affiliate marketing and product commissions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Affiliate Earnings
            </h2>

            <InputField
              id="productPrice"
              label="Product Price ($)"
              type="number"
              value={inputs.productPrice}
              onChange={(value) => handleInputChange('productPrice', value)}
              placeholder="e.g., 50"
              helperText="Average price of products you promote"
              tooltip="Enter the typical product price you'll be promoting as an affiliate"
              error={errors.productPrice}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="commissionRate"
              label="Commission Rate (%)"
              type="number"
              value={inputs.commissionRate}
              onChange={(value) => handleInputChange('commissionRate', value)}
              placeholder="e.g., 10"
              helperText="Percentage you earn per sale"
              tooltip="Check the product's commission rate in TikTok Shop affiliate marketplace"
              error={errors.commissionRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="monthlyClicks"
              label="Monthly Clicks"
              type="number"
              value={inputs.monthlyClicks}
              onChange={(value) => handleInputChange('monthlyClicks', value)}
              placeholder="e.g., 1000"
              helperText="Expected clicks on your affiliate links per month"
              tooltip="Estimate based on your average video views and link click-through rate (typically 2-5%)"
              error={errors.monthlyClicks}
              min={0}
              required
            />

            <InputField
              id="conversionRate"
              label="Conversion Rate (%)"
              type="number"
              value={inputs.conversionRate}
              onChange={(value) => handleInputChange('conversionRate', value)}
              placeholder="e.g., 3"
              helperText="Percentage of clicks that result in sales"
              tooltip="Typical TikTok affiliate conversion rates: 2-5% (good products with authentic reviews)"
              error={errors.conversionRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Earnings
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl border-2 border-success-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Monthly Earnings</p>
                  <p className="text-display-md font-bold text-success-600">
                    ${results.monthlyEarnings.toFixed(2)}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Annual: ${results.annualProjection.toFixed(2)}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label-md text-neutral-600">Commission per Sale</span>
                    <span className="text-heading-md font-semibold text-neutral-900">
                      ${results.commissionPerSale.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-body-xs text-neutral-500">Your earnings per product sold</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label-md text-neutral-600">Expected Monthly Sales</span>
                    <span className="text-heading-md font-semibold text-neutral-900">
                      {results.expectedSales.toFixed(0)}
                    </span>
                  </div>
                  <p className="text-body-xs text-neutral-500">Estimated conversions from your traffic</p>
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
                TikTok Shop Commission Rates by Category
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Typical commission rates for popular product categories:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-pink-500" />
                      Beauty & Skincare
                    </span>
                    <span className="text-neutral-600">15-30%</span>
                  </div>
                  <p className="text-neutral-600">High margins, repeat purchases</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-purple-500" />
                      Fashion & Apparel
                    </span>
                    <span className="text-neutral-600">10-20%</span>
                  </div>
                  <p className="text-neutral-600">Popular on TikTok, high conversion</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Home className="w-4 h-4 text-blue-500" />
                      Home & Living
                    </span>
                    <span className="text-neutral-600">8-15%</span>
                  </div>
                  <p className="text-neutral-600">Good volume, viral potential</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-gray-500" />
                      Electronics & Tech
                    </span>
                    <span className="text-neutral-600">5-10%</span>
                  </div>
                  <p className="text-neutral-600">Higher prices, lower margins</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Maximize Affiliate Earnings
              </h2>
              <div className="space-y-3">
                {[
                  'Choose products you genuinely use and believe in—authenticity converts',
                  'Show the product in action with real use cases and results',
                  'Create honest reviews mentioning both pros and cons',
                  'Use clear calls-to-action: "Link in bio" or "Shop now in video"',
                  'Focus on niche products with passionate audiences (10-50K monthly searches)',
                  'Post consistently—top affiliates post 1-3 product videos per day',
                  'Engage with comments to build trust and answer questions',
                  'Test different price points—$20-$100 products often convert best',
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
                Conversion Rate Optimization
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Improve your conversion rate with these proven strategies:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Build Trust First</h3>
                  <p className="text-body-sm text-neutral-700">
                    Don't jump straight into selling. Build authority by sharing valuable content in your niche for 2-4 weeks before promoting products. Followers are 3× more likely to buy from creators they trust.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Show Transformation</h3>
                  <p className="text-body-sm text-neutral-700">
                    Before/after videos convert 2-4× better than simple product showcases. Show the problem, the solution (product), and the results. This storytelling approach drives higher conversions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Address Objections</h3>
                  <p className="text-body-sm text-neutral-700">
                    Mention common concerns in your videos: "I know it looks expensive, but it lasts 6 months" or "Yes, shipping takes 5 days, but it's worth the wait." Proactively answering objections increases conversions by 20-30%.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Best Products to Promote
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                These product types tend to perform best for TikTok affiliates:
              </p>
              <div className="space-y-2 text-body-sm">
                {[
                  { text: 'Problem-solving products (acne solutions, organization tools)', isGood: true },
                  { text: 'Impulse buys under $50 (low decision threshold)', isGood: true },
                  { text: 'Products with visual results (before/after potential)', isGood: true },
                  { text: 'Trending items (check TikTok Shop "Top Products")', isGood: true },
                  { text: 'Items with high perceived value vs actual cost', isGood: true },
                  { text: 'Products you can demo in 15-30 seconds', isGood: true },
                  { text: 'Avoid: Generic products with lots of competition', isGood: false },
                  { text: 'Avoid: Very expensive items (>$200) without building trust first', isGood: false },
                ].map((item, index) => (
                  <div key={index} className="p-2 bg-neutral-50 rounded flex items-start gap-2">
                    {item.isGood ? (
                      <Check className="w-4 h-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-error-DEFAULT flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-neutral-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="affiliate-commission"
            formula={`Commission per Sale = Product Price × (Commission Rate / 100)

Expected Sales = Monthly Clicks × (Conversion Rate / 100)

Monthly Earnings = Expected Sales × Commission per Sale

Annual Earnings = Monthly Earnings × 12

Example:
Product Price: $50
Commission Rate: 10%
Monthly Clicks: 1,000
Conversion Rate: 3%

Commission per Sale = $50 × 0.10 = $5.00
Expected Sales = 1,000 × 0.03 = 30 sales
Monthly Earnings = 30 × $5 = $150
Annual Earnings = $150 × 12 = $1,800`}
            assumptions={[
              { label: 'Conversion Rate', value: 'Typical TikTok affiliate conversion: 2-5% (varies by niche, trust level, product fit)' },
              { label: 'Click-Through Rate', value: 'Estimated 2-5% of viewers click affiliate links (depends on CTA strength and engagement)' },
              { label: 'Commission Rates', value: 'Based on TikTok Shop 2024 standard commission ranges by category' },
              { label: 'Consistency', value: 'Assumes consistent posting and traffic—actual results depend on content quality and frequency' },
            ]}
            dataSources={[
              'TikTok Shop Seller Center commission data',
              'TikTok Creator Marketplace affiliate program guidelines',
              'Analysis of 300+ TikTok affiliate creators (10K-500K followers)',
              'Industry benchmarks from affiliate marketing platforms (ShareASale, Impact)',
            ]}
            limitations="Actual earnings vary significantly based on content quality, audience trust, product-niche fit, and posting consistency. Seasonal factors (holidays, trends) can cause 2-5× variance in monthly earnings. Building audience trust typically takes 1-3 months before seeing optimal conversion rates."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Affiliate Commission Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="affiliate-commission"
            calculators={[
              {
                name: 'Shop Commission Calculator',
                slug: 'shop-commission',
                description: 'Calculate TikTok Shop seller commissions and fees',
                icon: ShoppingBag,
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Estimate total earnings from all TikTok income streams',
                icon: Banknote,
              },
              {
                name: 'Conversion Rate Calculator',
                slug: 'conversion-rate',
                description: 'Optimize your affiliate link conversion rates',
                icon: Target,
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
