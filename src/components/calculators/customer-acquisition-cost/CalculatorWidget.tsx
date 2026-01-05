'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { calculateCAC, validateCACInput } from '@/lib/calculators/customer-acquisition-cost';
import type { CACInput, CACResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function CustomerAcquisitionCostCalculatorWidget() {
  const [inputs, setInputs] = useState<CACInput>({
    marketingSpend: 5000,
    newCustomers: 100,
    timeframe: 'month',
  });

  const [results, setResults] = useState<CACResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const timeframeOptions = [
    { value: 'month', label: 'Monthly' },
    { value: 'quarter', label: 'Quarterly' },
    { value: 'year', label: 'Annual' },
  ];

  const handleInputChange = (field: keyof CACInput, value: string | number) => {
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
    const validation = validateCACInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCAC(inputs);
      setResults(result);
      trackCalculation('customer-acquisition-cost', { ...inputs }, { cac: result.cac });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your CAC
      </h2>

      <InputField
        id="marketingSpend"
        label="Total Marketing Spend ($)"
        type="number"
        value={inputs.marketingSpend}
        onChange={(value) => handleInputChange('marketingSpend', value)}
        placeholder="e.g., 5000"
        helperText="Total spent on TikTok marketing (ads, content, tools)"
        tooltip="Include ad spend, content creation costs, influencer fees, and marketing software"
        error={errors.marketingSpend}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="newCustomers"
        label="New Customers Acquired"
        type="number"
        value={inputs.newCustomers}
        onChange={(value) => handleInputChange('newCustomers', value)}
        placeholder="e.g., 100"
        helperText="Number of NEW customers gained (not repeat customers)"
        tooltip="Count only first-time customers who made a purchase in this period"
        error={errors.newCustomers}
        min={1}
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
        Calculate CAC
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl border-2 border-success-200">
            <p className="text-label-lg text-neutral-600 mb-2">Customer Acquisition Cost</p>
            <p className="text-display-md font-bold text-success-600">
              ${results.cac.toFixed(2)}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              Per new customer
            </p>
          </div>

          {results.benchmark && (
            <div className={`p-4 rounded-lg border-2 ${
              results.benchmark === 'excellent' ? 'bg-success-50 border-success-300' :
              results.benchmark === 'good' ? 'bg-primary-50 border-primary-300' :
              results.benchmark === 'acceptable' ? 'bg-neutral-50 border-neutral-300' :
              'bg-warning-50 border-warning-300'
            }`}>
              <p className="text-label-md font-semibold mb-1">
                Performance: {results.benchmark.charAt(0).toUpperCase() + results.benchmark.slice(1)}
              </p>
              <p className="text-body-sm text-neutral-600">
                {results.benchmark === 'excellent' && 'Outstanding CAC! You\'re acquiring customers very efficiently.'}
                {results.benchmark === 'good' && 'Solid CAC for most businesses. Monitor and maintain this level.'}
                {results.benchmark === 'acceptable' && 'Typical CAC. Look for optimization opportunities to reduce costs.'}
                {results.benchmark === 'high' && 'CAC is high—focus on improving conversion rate and targeting.'}
              </p>
            </div>
          )}

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Recommended Minimum LTV</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${(results.cac * 3).toFixed(2)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Your customer lifetime value should be at least 3× your CAC</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Customers per $1,000 Spent</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                {(1000 / results.cac).toFixed(1)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Acquisition efficiency metric</p>
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
