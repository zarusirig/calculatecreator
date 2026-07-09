'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay, type ResultListRow } from '@/components/calculator/ResultsDisplay';
import { calculateCAC, validateCACInput } from '@/lib/calculators/customer-acquisition-cost';
import type { CACInput, CACResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { formatCurrency, formatNumber } from '@/lib/utils/format';

const BENCHMARK_MESSAGES: Record<string, string> = {
  excellent: 'Outstanding CAC! You\'re acquiring customers very efficiently.',
  good: 'Solid CAC for most businesses. Monitor and maintain this level.',
  acceptable: 'Typical CAC. Look for optimization opportunities to reduce costs.',
  high: 'CAC is high—focus on improving conversion rate and targeting.',
};

export function CustomerAcquisitionCostCalculatorWidget() {
  const [inputs, setInputs] = useState<CACInput>({
    marketingSpend: 5000,
    newCustomers: 100,
    timeframe: 'month',
  });

  const [results, setResults] = useState<CACResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    const result = calculateCAC(inputs);
    setResults(result);
    trackCalculation('customer-acquisition-cost', { ...inputs }, { cac: result.cac });
  };

  const rows: ResultListRow[] = results
    ? [
        {
          label: 'Customer Acquisition Cost',
          value: formatCurrency(results.cac, 'USD', 'en-US', 2),
          hint: 'Per new customer',
        },
        {
          label: 'Recommended Minimum LTV',
          value: formatCurrency(results.cac * 3, 'USD', 'en-US', 2),
          hint: 'Your customer lifetime value should be at least 3× your CAC',
        },
        {
          label: 'Customers per $1,000 Spent',
          value: formatNumber(1000 / results.cac, 1),
          hint: 'Acquisition efficiency metric',
        },
        ...(results.benchmark
          ? [{
              label: 'Performance',
              value: results.benchmark.charAt(0).toUpperCase() + results.benchmark.slice(1),
              hint: BENCHMARK_MESSAGES[results.benchmark] ?? '',
            }]
          : []),
      ]
    : [];

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
        className="w-full mt-6"
      >
        Calculate CAC
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Your CAC Results"
            rows={rows}
          />

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
