'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateBrandDeal, validateBrandDealInput } from '@/lib/calculators/brand-deal';
import type { BrandDealInput, BrandDealResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export function BrandDealRateCalculatorWidget() {
  const [inputs, setInputs] = useState<BrandDealInput>({
    followers: 50000,
    engagementRate: 5,
    niche: 'lifestyle',
    deliverableType: 'in-feed',
  });

  const [results, setResults] = useState<BrandDealResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(
    ([value, label]) => ({ value, label })
  );

  const deliverableOptions = [
    { value: 'in-feed', label: 'In-Feed Video' },
    { value: 'spark-ad', label: 'Spark Ad' },
    { value: 'live-mention', label: 'LIVE Mention' },
    { value: 'product-showcase', label: 'Product Showcase' },
  ];

  const handleInputChange = (field: keyof BrandDealInput, value: string | number) => {
    const processedValue = field === 'niche' || field === 'deliverableType'
      ? value
      : typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInputs((prev) => ({ ...prev, [field]: processedValue }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateBrandDealInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateBrandDeal(inputs);
      setResults(result);
      trackCalculation('brand-deal-rate', { ...inputs }, { minRate: result.minRate, maxRate: result.maxRate });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Your Rate</h2>

      <InputField
        id="followers"
        label="Total Followers"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 50000"
        helperText="Your total TikTok follower count"
        error={errors.followers}
        min={1000}
        required
      />

      <InputField
        id="engagementRate"
        label="Engagement Rate (%)"
        type="number"
        value={inputs.engagementRate}
        onChange={(value) => handleInputChange('engagementRate', value)}
        placeholder="e.g., 5"
        helperText="Average engagement rate across videos"
        tooltip="Use the Engagement Rate Calculator to find this"
        error={errors.engagementRate}
        min={0.1}
        max={100}
        step={0.1}
        required
      />

      <SelectField
        id="niche"
        label="Content Niche"
        value={inputs.niche}
        onChange={(value) => handleInputChange('niche', value)}
        options={nicheOptions}
        helperText="Your primary content category"
        error={errors.niche}
        required
      />

      <SelectField
        id="deliverableType"
        label="Deliverable Type"
        value={inputs.deliverableType}
        onChange={(value) => handleInputChange('deliverableType', value)}
        options={deliverableOptions}
        helperText="Type of content for the brand deal"
        error={errors.deliverableType}
        required
      />

      <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
        Calculate Rate
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="range"
            format="currency"
            title="Suggested Rate"
            subtitle={`${results.tier.charAt(0).toUpperCase() + results.tier.slice(1).replace('-', ' ')} Creator`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-2">Rate Range</p>
            <p className="text-heading-md font-semibold text-neutral-900">
              ${results.minRate.toLocaleString()} - ${results.maxRate.toLocaleString()}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              per post for {inputs.deliverableType.replace('-', ' ')} content
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
