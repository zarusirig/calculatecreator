'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateNicheProfitability,
  validateNicheProfitabilityInput,
} from '@/lib/calculators/niche-profitability';
import type {
  NicheProfitabilityInput,
  NicheProfitabilityResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function NicheProfitabilityCalculatorWidget() {
  const [inputs, setInputs] = useState<NicheProfitabilityInput>({
    niche: 'lifestyle',
    followers: 50000,
    monthlyViews: 1000000,
    engagementRate: 5,
  });

  const [results, setResults] = useState<NicheProfitabilityResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof NicheProfitabilityInput, value: string | number) => {
    const processedValue = field === 'niche'
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
    const validation = validateNicheProfitabilityInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateNicheProfitability(inputs);
      setResults(result);

      trackCalculation(
        'niche-profitability',
        { ...inputs },
        { estimatedMonthlyEarnings: result.estimatedMonthlyEarnings.min }
      );

      setIsCalculating(false);
    }, 500);
  };

  const nicheOptions = [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'beauty-fashion', label: 'Beauty & Fashion' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'finance', label: 'Finance' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'food', label: 'Food' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'tech', label: 'Tech' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Niche Profitability
      </h2>

      <SelectField
        id="niche"
        label="Content Niche"
        value={inputs.niche}
        onChange={(value) => handleInputChange('niche', value)}
        options={nicheOptions}
        helperText="Select your primary content category"
        error={errors.niche}
        required
      />

      <InputField
        id="followers"
        label="Followers"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 50000"
        helperText="Your TikTok follower count"
        error={errors.followers}
        min={1}
        required
      />

      <InputField
        id="monthlyViews"
        label="Monthly Views"
        type="number"
        value={inputs.monthlyViews}
        onChange={(value) => handleInputChange('monthlyViews', value)}
        placeholder="e.g., 1000000"
        helperText="Total monthly video views"
        error={errors.monthlyViews}
        min={0}
        required
      />

      <InputField
        id="engagementRate"
        label="Engagement Rate (%)"
        type="number"
        value={inputs.engagementRate}
        onChange={(value) => handleInputChange('engagementRate', value)}
        placeholder="e.g., 5"
        helperText="Your average engagement rate"
        error={errors.engagementRate}
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
        Calculate Profitability
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={{ value: results.estimatedMonthlyEarnings.min, min: results.estimatedMonthlyEarnings.min, max: results.estimatedMonthlyEarnings.max }}
            type="range"
            format="currency"
            title="Estimated Monthly Earnings"
            subtitle={`${results.nicheMultiplier}x niche multiplier`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Niche Analysis
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Niche Ranking</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  #{results.nichRanking} of 11
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Recommendation</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.nicheMultiplier >= 2 ? 'Excellent' : results.nicheMultiplier >= 1.5 ? 'Good' : 'Average'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
