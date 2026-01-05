'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateSaveRate,
  validateSaveRateInput,
} from '@/lib/calculators/save-rate';
import type { SaveRateInput, SaveRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function SaveRateCalculatorWidget() {
  const [inputs, setInputs] = useState<SaveRateInput>({
    views: 50000,
    saves: 1000,
  });

  const [results, setResults] = useState<SaveRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof SaveRateInput, value: string | number) => {
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
    const validation = validateSaveRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateSaveRate(inputs);
      setResults(result);

      trackCalculation(
        'save-rate',
        { ...inputs },
        { saveRate: result.saveRate, contentValueRating: result.contentValueRating }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Save Rate
      </h2>

      <InputField
        id="views"
        label="Total Views"
        type="number"
        value={inputs.views}
        onChange={(value) => handleInputChange('views', value)}
        placeholder="e.g., 50000"
        helperText="Total views on your video"
        error={errors.views}
        min={1}
        required
      />

      <InputField
        id="saves"
        label="Total Saves"
        type="number"
        value={inputs.saves}
        onChange={(value) => handleInputChange('saves', value)}
        placeholder="e.g., 1000"
        helperText="Number of times video was saved"
        error={errors.saves}
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
        Calculate Save Rate
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Save Rate"
            subtitle={`${results.contentValueRating.replace('-', ' ').toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              What This Means
            </p>
            <p className="text-body-sm text-neutral-700">
              {results.saveRate >= 5
                ? 'Exceptional! Your content is highly valuable and worth revisiting.'
                : results.saveRate >= 2
                ? 'Strong save rate! Your content provides lasting value to viewers.'
                : results.saveRate >= 0.5
                ? 'Average save rate. Create more reference-worthy or tutorial content.'
                : 'Low save rate. Focus on educational, inspirational, or practical content.'}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
