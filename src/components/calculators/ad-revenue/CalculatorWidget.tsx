'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateAdRevenue, validateAdRevenueInput } from '@/lib/calculators/ad-revenue';
import type { AdRevenueInput, AdRevenueResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function AdRevenueCalculatorWidget() {
  const [inputs, setInputs] = useState<AdRevenueInput>({
    monthlyViews: 1000000,
    cpm: 5,
    adFrequency: 1,
  });

  const [results, setResults] = useState<AdRevenueResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof AdRevenueInput, value: string | number) => {
    setInputs((prev) => ({ ...prev, [field]: typeof value === 'string' ? parseFloat(value) || 0 : value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateAdRevenueInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateAdRevenue(inputs);
      setResults(result);

      trackCalculation(
        'ad-revenue',
        { ...inputs },
        { monthlyRevenue: result.monthlyRevenue, annualRevenue: result.annualRevenue }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Ad Revenue
      </h2>

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
        id="cpm"
        label="CPM (Cost per 1000 views)"
        type="number"
        value={inputs.cpm}
        onChange={(value) => handleInputChange('cpm', value)}
        placeholder="e.g., 5"
        helperText="Typical range: $2-10"
        error={errors.cpm}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="adFrequency"
        label="Ads per Video"
        type="number"
        value={inputs.adFrequency}
        onChange={(value) => handleInputChange('adFrequency', value)}
        placeholder="e.g., 1"
        helperText="Number of ad placements per video"
        error={errors.adFrequency}
        min={1}
        max={5}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Ad Revenue
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Monthly Revenue"
            subtitle={`$${results.annualRevenue.toLocaleString()} annual`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Revenue Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Annual Revenue
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.annualRevenue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Revenue per Video
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.revenuePerVideo.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
