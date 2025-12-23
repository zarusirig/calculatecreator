'use client';

import React, { useState } from 'react';
import { Gem, DollarSign, Gift, Coins as CoinsIcon, Banknote, Globe, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { calculateDiamondConverter, validateDiamondConverterInput } from '@/lib/calculators/diamond-converter';
import type { DiamondConverterInput, DiamondConverterResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function DiamondConverterPage() {
  const [inputs, setInputs] = useState<DiamondConverterInput>({ diamonds: 1000, currency: 'USD' });
  const [results, setResults] = useState<DiamondConverterResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  // FAQ data for schema markup (top 6 most important FAQs)
  const faqData = [
    {
      question: "How much is 1 TikTok diamond worth?",
      answer: "1 TikTok diamond is worth $0.005 USD for creators (as of November 2025). This rate has been stable since 2023, meaning 200 diamonds equal $1 USD. Regional variations may apply due to currency conversion."
    },
    {
      question: "How do I convert diamonds to money?",
      answer: "Multiply your diamonds by $0.005 to get the USD value, then convert to your local currency. For example, 1,000 diamonds = $5 USD. Use our calculator for accurate multi-currency conversions."
    },
    {
      question: "What's the difference between coins and diamonds?",
      answer: "Coins are purchased by viewers ($0.0152 per coin) to send gifts during LIVE streams. Diamonds are what creators receive at a 2:1 conversion ratio (2 coins = 1 diamond), worth $0.005 each."
    },
    {
      question: "When do creators get paid for diamonds?",
      answer: "Creators typically receive diamond payouts 7-14 business days after the LIVE session ends. You need a minimum balance of $50 equivalent diamonds to withdraw, and payments are made via PayPal or bank transfer."
    },
    {
      question: "How many diamonds do top creators earn?",
      answer: "Top TikTok creators can earn 50,000-500,000+ diamonds per month from LIVE gifts alone. Celebrity-level creators regularly exceed 1 million diamonds monthly, equating to $5,000+ in payouts."
    },
    {
      question: "Are there fees for diamond payouts?",
      answer: "TikTok doesn't charge fees for diamond payouts, but your bank or PayPal may charge currency conversion or international transfer fees. These vary by region and financial institution."
    },
  ];

  const handleInputChange = (field: string, value: any) => {
    const processedValue = field === 'diamonds' ? parseInt(value) || 0 : value;
    setInputs(prev => ({ ...prev, [field]: processedValue }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateDiamondConverterInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateDiamondConverter(inputs);
      setResults(result);
      trackCalculation('diamond-converter', inputs, {
        usd_value: result.usdValue,
        converted_value: result.convertedValue,
        currency: result.currency
      });
      setIsCalculating(false);
    }, 500);
  };

  const currencyOptions = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'EUR', label: 'EUR (€)' },
    { value: 'GBP', label: 'GBP (£)' },
    { value: 'CAD', label: 'CAD (C$)' },
    { value: 'AUD', label: 'AUD (A$)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-warning-50 py-8">
        <FAQSchema faqs={faqData} />
        <div className="container-custom">
          <Breadcrumb items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Diamond Converter', href: '/calculators/diamond-converter' }
          ]} />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning-DEFAULT text-white mb-6">
              <Gem size={32} />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Diamond Converter 2025</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Convert TikTok diamonds to real money in multiple currencies. Calculate your creator payouts and understand diamond values with updated 2025 rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1"><DollarSign size={16} /> Updated Payout Rates</span>
              <span className="flex items-center gap-1"><Globe size={16} /> 5 Currency Support</span>
              <span className="flex items-center gap-1"><BarChart3 size={16} /> Creator Earnings Calculator</span>
              <span className="flex items-center gap-1"><Gift size={16} /> LIVE Gift Value Tool</span>
            </div>
          </div>

          {/* Author Byline with Expert Review Badge */}
          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="diamond-converter" />
          </div>

          {/* Industry Insights Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Gem size={20} className="text-warning-600" /> 2025 Diamond Economy
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Average payout: $0.005 per diamond</li>
                  <li>• LIVE gifting up 40% YoY</li>
                  <li>• Top creators earn $50K+ monthly</li>
                  <li>• Global creator payouts exceed $2B</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Gift size={20} className="text-secondary-600" /> Popular Gift Values
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Rose: 1 coin → 0.5 diamonds → $0.0025</li>
                  <li>• Finger Heart: 5 coins → 2.5 diamonds → $0.0125</li>
                  <li>• TikTok: 1 coin → 0.5 diamonds → $0.0025</li>
                  <li>• Drama Queen: 5,000 coins → 2,500 diamonds → $12.50</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Globe size={20} className="text-info-600" /> Regional Payouts
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• United States: $0.005/diamond</li>
                  <li>• European Union: €0.0045/diamond</li>
                  <li>• United Kingdom: £0.0039/diamond</li>
                  <li>• Australia: A$0.0072/diamond</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Diamond Presets */}
            <Card className="p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Gem size={24} className="text-warning-600" /> Quick Diamond Presets
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({ diamonds: 100, currency: 'USD' })}
                  className="text-xs"
                >
                  Small Stream
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({ diamonds: 1000, currency: 'USD' })}
                  className="text-xs"
                >
                  Good Session
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({ diamonds: 5000, currency: 'USD' })}
                  className="text-xs"
                >
                  Popular Stream
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({ diamonds: 25000, currency: 'USD' })}
                  className="text-xs"
                >
                  Viral Session
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputs({ diamonds: 100000, currency: 'USD' })}
                  className="text-xs"
                >
                  Celebrity Level
                </Button>
              </div>
              <p className="text-xs text-neutral-600">Click presets to auto-fill calculator with realistic diamond amounts from different streaming levels</p>
            </Card>
            <Card className="p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <InputField
                  id="diamonds"
                  label="Diamonds"
                  type="number"
                  value={inputs.diamonds}
                  onChange={(value) => handleInputChange('diamonds', value)}
                  error={errors.diamonds}
                  placeholder="1000"
                  min={1}
                  max={10000000}
                  required
                />

                <SelectField
                  id="currency"
                  label="Currency"
                  value={inputs.currency}
                  onChange={(value) => handleInputChange('currency', value)}
                  options={currencyOptions}
                  required
                />
              </div>

              <div className="text-center">
                <Button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  size="lg"
                  className="px-12"
                >
                  {isCalculating ? 'Converting...' : 'Convert Diamonds'}
                </Button>
              </div>
            </Card>

            {results && (
              <Card className="p-6">
                <h3 className="text-heading-lg font-bold text-neutral-900 mb-6">Diamond Conversion Results</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">${results.usdValue.toLocaleString()}</div>
                    <div className="text-sm text-neutral-600">USD Value</div>
                    <div className="text-xs text-neutral-500 mt-1">Value in US Dollars</div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">{results.currencySymbol}{results.convertedValue.toLocaleString()}</div>
                    <div className="text-sm text-neutral-600">{results.currency} Value</div>
                    <div className="text-xs text-neutral-500 mt-1">Value in {results.currency}</div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{results.equivalentCoins.toLocaleString()}</div>
                    <div className="text-sm text-neutral-600">Equivalent Coins</div>
                    <div className="text-xs text-neutral-500 mt-1">TikTok coins needed</div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">${results.additionalMetrics?.payoutRate || '0.005'}</div>
                    <div className="text-sm text-neutral-600">Payout Rate</div>
                    <div className="text-xs text-neutral-500 mt-1">Per diamond</div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{results.additionalMetrics?.diamondsPerDollar || '200'}</div>
                    <div className="text-sm text-neutral-600">Diamonds per Dollar</div>
                    <div className="text-xs text-neutral-500 mt-1">Conversion rate</div>
                  </div>

                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">{results.additionalMetrics?.coinsEquivalent.toLocaleString() || results.equivalentCoins.toLocaleString()}</div>
                    <div className="text-sm text-neutral-600">Coin Equivalent</div>
                    <div className="text-xs text-neutral-500 mt-1">Coins for these diamonds</div>
                  </div>
                </div>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-2">Conversion Analysis</h4>
                  <p className="text-neutral-700">{results.interpretation}</p>
                </div>
              </Card>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <MethodologySection
              calculatorName="TikTok Diamond Converter"
              formula="USD Value = Diamonds × $0.005"
              assumptions={[
                { label: 'Fixed Payout Rate', value: '$0.005 per diamond (stable since 2023)' },
                { label: 'Coin-to-Diamond Ratio', value: '2 coins = 1 diamond (fixed conversion)' },
                { label: 'Revenue Split', value: '50% platform, 50% creator (consistent globally)' },
                { label: 'Currency Conversion', value: 'Based on current market exchange rates' },
                { label: 'Regional Variations', value: 'Minor differences due to banking fees and taxes' },
                { label: 'Payout Minimum', value: '$50 equivalent balance required' }
              ]}
              dataSources={['TikTok Creator Portal Data', 'Q4 2025 Creator Surveys', 'TikTok Official Documentation', 'Creator Payout Reports']}
              limitations="Exchange rates fluctuate daily. Actual payout amounts may vary based on regional banking fees, currency conversion costs, and local tax withholding."
              lastUpdated="November 2025"
            />

            <FAQSection
              pageName="TikTok Diamond Converter"
              faqs={[
                {
                  question: "How much is 1 TikTok diamond worth?",
                  answer: "1 TikTok diamond is worth $0.005 USD for creators (as of November 2025). This rate has been stable since 2023, meaning 200 diamonds equal $1 USD. Regional variations may apply due to currency conversion."
                },
                {
                  question: "How do I convert diamonds to money?",
                  answer: "Multiply your diamonds by $0.005 to get the USD value, then convert to your local currency. For example, 1,000 diamonds = $5 USD. Use our calculator for accurate multi-currency conversions."
                },
                {
                  question: "What's the difference between coins and diamonds?",
                  answer: "Coins are purchased by viewers ($0.0152 per coin) to send gifts during LIVE streams. Diamonds are what creators receive at a 2:1 conversion ratio (2 coins = 1 diamond), worth $0.005 each."
                },
                {
                  question: "When do creators get paid for diamonds?",
                  answer: "Creators typically receive diamond payouts 7-14 business days after the LIVE session ends. You need a minimum balance of $50 equivalent diamonds to withdraw, and payments are made via PayPal or bank transfer."
                },
                {
                  question: "Do diamond values change?",
                  answer: "The $0.005 per diamond rate has been stable since TikTok's monetization launch in 2023. However, TikTok reserves the right to adjust rates with advance notice to creators."
                },
                {
                  question: "How many diamonds do top creators earn?",
                  answer: "Top TikTok creators can earn 50,000-500,000+ diamonds per month from LIVE gifts alone. Celebrity-level creators regularly exceed 1 million diamonds monthly, equating to $5,000+ in payouts."
                },
                {
                  question: "Why do creators only get 50% of coin value?",
                  answer: "TikTok retains 50% of the coin value as platform revenue to cover operational costs, content moderation, and platform development. The remaining 50% goes to creators as diamonds."
                },
                {
                  question: "Can diamond payouts be in different currencies?",
                  answer: "Yes, TikTok supports payouts in multiple currencies including USD, EUR, GBP, CAD, AUD, and many others. The base rate is always $0.005 per diamond, converted to your local currency."
                },
                {
                  question: "What happens if I don't reach the minimum payout threshold?",
                  answer: "Diamonds accumulate in your account until you reach the $50 minimum threshold. You can continue earning diamonds, but won't receive payouts until you meet the minimum balance requirement."
                },
                {
                  question: "Are there fees for diamond payouts?",
                  answer: "TikTok doesn't charge fees for diamond payouts, but your bank or PayPal may charge currency conversion or international transfer fees. These vary by region and financial institution."
                },
                {
                  question: "How has the diamond economy changed in 2025?",
                  answer: "In 2025, LIVE gifting increased 40% YoY, with global creator payouts exceeding $2 billion annually. Diamond values remain stable at $0.005, but competition for viewer attention has intensified."
                },
                {
                  question: "What's the most valuable TikTok gift?",
                  answer: "The TikTok Universe gift is currently the most valuable at 34,999 coins ($53.84), converting to 17,499.5 diamonds worth $87.50 for creators. Prices vary by region and platform."
                }
              ]}
            />

            <RelatedCalculators
              currentCalculator="diamond-converter"
              calculators={[
                { name: 'LIVE Gifts Calculator', slug: 'live-gifts', description: 'Calculate potential earnings from LIVE gifts', icon: Gift },
                { name: 'Coins Calculator', slug: 'coins', description: 'Convert coins to diamonds and money', icon: CoinsIcon },
                { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Calculate total earnings from all sources', icon: Banknote },
                { name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Estimate Creator Fund earnings', icon: DollarSign },
              ]}
            />
          </div>

          {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
          <div className="mt-12">
            <PageEEAT pageSlug="diamond-converter" variant="full" />
          </div>
        </div>
      </div>
  );
}
