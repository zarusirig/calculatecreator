'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateFollowerConversion,
  validateFollowerConversionInput,
} from '@/lib/calculators/follower-conversion';
import type {
  FollowerConversionInput,
  FollowerConversionResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function FollowerConversionCalculatorWidget() {
  const [inputs, setInputs] = useState<FollowerConversionInput>({
    followers: 50000,
    websiteClicks: 2500,
    purchases: 75,
    avgOrderValue: 50,
  });

  const [results, setResults] = useState<FollowerConversionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof FollowerConversionInput, value: string | number) => {
    const processedValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
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
    const validation = validateFollowerConversionInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateFollowerConversion(inputs);
      setResults(result);

      trackCalculation(
        'follower-conversion',
        { ...inputs },
        { overallConversionRate: result.overallConversionRate, revenue: result.revenue }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Conversion Metrics
      </h2>

      <InputField
        id="followers"
        label="Total Followers"
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
        id="websiteClicks"
        label="Website Clicks"
        type="number"
        value={inputs.websiteClicks}
        onChange={(value) => handleInputChange('websiteClicks', value)}
        placeholder="e.g., 2500"
        helperText="Clicks to your website/store"
        error={errors.websiteClicks}
        min={0}
        required
      />

      <InputField
        id="purchases"
        label="Total Purchases"
        type="number"
        value={inputs.purchases}
        onChange={(value) => handleInputChange('purchases', value)}
        placeholder="e.g., 75"
        helperText="Number of completed purchases"
        error={errors.purchases}
        min={0}
        required
      />

      <InputField
        id="avgOrderValue"
        label="Average Order Value ($)"
        type="number"
        value={inputs.avgOrderValue}
        onChange={(value) => handleInputChange('avgOrderValue', value)}
        placeholder="e.g., 50"
        helperText="Average purchase amount"
        error={errors.avgOrderValue}
        min={0}
        step={0.01}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Conversion
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Overall Conversion Rate"
            subtitle={`$${results.revenuePerFollower.toFixed(2)} per follower`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Funnel Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Click-Through Rate</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.clickThroughRate.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Conversion Rate</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.conversionRate.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">Total Revenue</span>
                <span className="text-body-sm font-semibold text-success-DEFAULT">
                  ${results.revenue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
