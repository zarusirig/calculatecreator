'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay, type ResultListRow } from '@/components/calculator/ResultsDisplay';
import { calculateCPMCPV, validateCPMCPVInput } from '@/lib/calculators/cpm-cpv';
import type { CPMCPVInput, CPMCPVResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { formatCurrency, formatNumber } from '@/lib/utils/format';

const BENCHMARK_MESSAGES: Record<string, string> = {
  excellent: 'Your CPM is excellent—great targeting and ad efficiency!',
  good: 'Your CPM is above average—solid campaign performance.',
  average: 'Your CPM is within typical range for TikTok ads.',
  expensive: 'Your CPM is higher than average—consider optimizing targeting or creative.',
};

export function CPMCPVCalculatorWidget() {
  const [inputs, setInputs] = useState<CPMCPVInput>({
    adSpend: 1000,
    impressions: 100000,
  });

  const [results, setResults] = useState<CPMCPVResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof CPMCPVInput, value: string | number) => {
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
    const validation = validateCPMCPVInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const result = calculateCPMCPV(inputs);
    setResults(result);
    trackCalculation(
      'cpm-cpv',
      { ...inputs },
      { cpm: result.cpm, cpv: result.cpv }
    );
  };

  const rows: ResultListRow[] = results
    ? [
        {
          label: 'Cost Per Mille (CPM)',
          value: formatCurrency(results.cpm, 'USD', 'en-US', 2),
          hint: 'Cost per 1,000 impressions',
        },
        {
          label: 'Cost Per View (CPV)',
          value: formatCurrency(results.cpv, 'USD', 'en-US', 4),
          hint: 'Cost for each individual impression',
        },
        {
          label: 'Impressions per $1',
          value: formatNumber(1000 / results.cpm),
          hint: 'How many impressions you get for every dollar spent',
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
        Calculate Your CPM/CPV
      </h2>

      <InputField
        id="adSpend"
        label="Ad Spend ($)"
        type="number"
        value={inputs.adSpend}
        onChange={(value) => handleInputChange('adSpend', value)}
        placeholder="e.g., 1000"
        helperText="Total amount spent on your ad campaign"
        tooltip="Enter your total advertising budget or campaign spend"
        error={errors.adSpend}
        min={1}
        required
      />

      <InputField
        id="impressions"
        label="Impressions"
        type="number"
        value={inputs.impressions}
        onChange={(value) => handleInputChange('impressions', value)}
        placeholder="e.g., 100000"
        helperText="Total number of times your ad was shown"
        tooltip="Find this metric in your TikTok Ads Manager dashboard"
        error={errors.impressions}
        min={100}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        className="w-full mt-6"
      >
        Calculate CPM/CPV
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Your CPM/CPV Results"
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
