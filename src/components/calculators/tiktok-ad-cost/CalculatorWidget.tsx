'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateTikTokAdCost, validateTikTokAdCostInput } from '@/lib/calculators/tiktok-ad-cost';
import type { TikTokAdCostInput, TikTokAdCostResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function TikTokAdCostCalculatorWidget() {
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

  const handleInputChange = (field: string, value: string | number) => {
    const processedValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
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
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Ad Performance
      </h2>

      <InputField
        id="budget"
        label="Ad Budget ($)"
        type="number"
        value={inputs.budget}
        onChange={(value) => handleInputChange('budget', value)}
        placeholder="e.g., 100"
        helperText="Total ad spend"
        error={errors.budget}
        min={1}
        required
      />

      <InputField
        id="impressions"
        label="Impressions"
        type="number"
        value={inputs.impressions}
        onChange={(value) => handleInputChange('impressions', value)}
        placeholder="e.g., 10000"
        helperText="Total ad impressions"
        error={errors.impressions}
        min={1}
        required
      />

      <InputField
        id="views"
        label="Video Views"
        type="number"
        value={inputs.views}
        onChange={(value) => handleInputChange('views', value)}
        placeholder="e.g., 5000"
        helperText="Views (6+ seconds)"
        error={errors.views}
        min={0}
        required
      />

      <InputField
        id="clicks"
        label="Clicks"
        type="number"
        value={inputs.clicks}
        onChange={(value) => handleInputChange('clicks', value)}
        placeholder="e.g., 200"
        helperText="Total ad clicks"
        error={errors.clicks}
        min={0}
        required
      />

      <InputField
        id="conversions"
        label="Conversions"
        type="number"
        value={inputs.conversions}
        onChange={(value) => handleInputChange('conversions', value)}
        placeholder="e.g., 10"
        helperText="Sales or sign-ups"
        error={errors.conversions}
        min={0}
        required
      />

      <InputField
        id="conversionValue"
        label="Conversion Value ($)"
        type="number"
        value={inputs.conversionValue}
        onChange={(value) => handleInputChange('conversionValue', value)}
        placeholder="e.g., 500"
        helperText="Total revenue from conversions"
        error={errors.conversionValue}
        min={0}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Ad Costs
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Cost Per Result"
            subtitle={`ROAS: ${results.roas.toFixed(2)}x`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Key Metrics
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">CPM (per 1K impressions)</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.cpm.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">CPV (per view)</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.cpv.toFixed(4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">CPC (per click)</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.cpc.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">CPA (per conversion)</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.cpa.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">Profit/Loss</span>
                <span className={`text-body-sm font-semibold ${results.profit >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                  ${results.profit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
