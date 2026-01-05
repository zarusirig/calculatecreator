'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { calculateCPMCPV, validateCPMCPVInput } from '@/lib/calculators/cpm-cpv';
import type { CPMCPVInput, CPMCPVResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function CPMCPVCalculatorWidget() {
  const [inputs, setInputs] = useState<CPMCPVInput>({
    adSpend: 1000,
    impressions: 100000,
  });

  const [results, setResults] = useState<CPMCPVResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

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

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCPMCPV(inputs);
      setResults(result);
      trackCalculation(
        'cpm-cpv',
        { ...inputs },
        { cpm: result.cpm, cpv: result.cpv }
      );
      setIsCalculating(false);
    }, 500);
  };

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
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate CPM/CPV
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border-2 border-primary-200">
            <p className="text-label-lg text-neutral-600 mb-2">Cost Per Mille (CPM)</p>
            <p className="text-display-md font-bold text-primary-600">
              ${results.cpm.toFixed(2)}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              Cost per 1,000 impressions
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Cost Per View (CPV)</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${results.cpv.toFixed(4)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Cost for each individual impression</p>
          </div>

          {results.benchmark && (
            <div className={`p-4 rounded-lg border-2 ${
              results.benchmark === 'excellent' ? 'bg-success-50 border-success-300' :
              results.benchmark === 'good' ? 'bg-primary-50 border-primary-300' :
              results.benchmark === 'average' ? 'bg-neutral-50 border-neutral-300' :
              'bg-warning-50 border-warning-300'
            }`}>
              <p className="text-label-md font-semibold mb-1">
                Performance: {results.benchmark.charAt(0).toUpperCase() + results.benchmark.slice(1)}
              </p>
              <p className="text-body-sm text-neutral-600">
                {results.benchmark === 'excellent' && 'Your CPM is excellent—great targeting and ad efficiency!'}
                {results.benchmark === 'good' && 'Your CPM is above average—solid campaign performance.'}
                {results.benchmark === 'average' && 'Your CPM is within typical range for TikTok ads.'}
                {results.benchmark === 'expensive' && 'Your CPM is higher than average—consider optimizing targeting or creative.'}
              </p>
            </div>
          )}

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Impressions per $1</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                {(1000 / results.cpm).toFixed(0)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">How many impressions you get for every dollar spent</p>
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
