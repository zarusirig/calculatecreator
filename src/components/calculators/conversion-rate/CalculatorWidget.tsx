'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { calculateConversionRate, validateConversionRateInput } from '@/lib/calculators/conversion-rate';
import type { ConversionRateInput, ConversionRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ConversionRateCalculatorWidget() {
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

  const handleInputChange = (field: keyof ConversionRateInput, value: string | number) => {
    const processedValue = field === 'timeframe'
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
    const validation = validateConversionRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateConversionRate(inputs);
      setResults(result);
      trackCalculation('conversion-rate', { ...inputs }, { conversion_rate: result.conversionRate });
      setIsCalculating(false);
    }, 500);
  };

  return (
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
        onChange={(value) => handleInputChange('timeframe', value)}
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
  );
}
