'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateRPM, validateRPMInput } from '@/lib/calculators/rpm';
import type { RPMInput, RPMResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function RpmCalculatorWidget() {
  const [inputs, setInputs] = useState<RPMInput>({ views: 100000, earnings: 3.00 });
  const [results, setResults] = useState<RPMResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof RPMInput, value: string | number) => {
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
    const validation = validateRPMInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateRPM(inputs);
      setResults(result);
      trackCalculation('rpm', { ...inputs }, { rpm: result.rpm, benchmark: result.benchmark });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Your RPM</h2>

      <InputField
        id="views"
        label="Total Views"
        type="number"
        value={inputs.views}
        onChange={(value) => handleInputChange('views', value)}
        placeholder="e.g., 100000"
        helperText="Total video views for the period"
        error={errors.views}
        min={1000}
        required
      />

      <InputField
        id="earnings"
        label="Total Earnings ($)"
        type="number"
        value={inputs.earnings}
        onChange={(value) => handleInputChange('earnings', value)}
        placeholder="e.g., 3.00"
        helperText="Total earnings from those views"
        error={errors.earnings}
        min={0}
        step={0.01}
        required
      />

      <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
        Calculate RPM
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Your RPM"
            subtitle={`${results.benchmark === 'above' ? 'Above Average' : results.benchmark === 'average' ? 'Average' : 'Below Average'}`}
          />
          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">What This Means</p>
            <p className="text-body-sm text-neutral-700">
              {results.benchmark === 'above'
                ? 'Excellent! Your RPM is above the TikTok average. Your content performs well in terms of earning efficiency.'
                : results.benchmark === 'average'
                ? 'Your RPM is within the typical TikTok range. Consider targeting higher-CPM niches to improve.'
                : 'Your RPM is below average. Focus on high-value content niches and US/UK audiences to boost earnings.'}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
