'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateCompletionRate,
  validateCompletionRateInput,
} from '@/lib/calculators/completion-rate';
import type { CompletionRateInput, CompletionRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function CompletionRateCalculatorWidget() {
  const [inputs, setInputs] = useState<CompletionRateInput>({
    videoDuration: 60,
    avgWatchTime: 45,
  });

  const [results, setResults] = useState<CompletionRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CompletionRateInput, value: string | number) => {
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
    const validation = validateCompletionRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCompletionRate(inputs);
      setResults(result);

      trackCalculation(
        'completion-rate',
        { ...inputs },
        { completionRate: result.completionRate, rating: result.rating }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Completion Rate
      </h2>

      <InputField
        id="videoDuration"
        label="Video Duration (seconds)"
        type="number"
        value={inputs.videoDuration}
        onChange={(value) => handleInputChange('videoDuration', value)}
        placeholder="e.g., 60"
        helperText="Total length of your video in seconds"
        error={errors.videoDuration}
        min={1}
        required
      />

      <InputField
        id="avgWatchTime"
        label="Average Watch Time (seconds)"
        type="number"
        value={inputs.avgWatchTime}
        onChange={(value) => handleInputChange('avgWatchTime', value)}
        placeholder="e.g., 45"
        helperText="From TikTok Analytics"
        error={errors.avgWatchTime}
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
        Calculate Completion Rate
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Completion Rate"
            subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              What This Means
            </p>
            <p className="text-body-sm text-neutral-700">
              {results.completionRate >= 80
                ? 'Excellent retention! Viewers are watching nearly the entire video.'
                : results.completionRate >= 60
                ? 'Good retention. Most viewers are engaged through majority of the content.'
                : results.completionRate >= 40
                ? 'Average retention. Consider improving your hook and pacing.'
                : 'Low retention. Viewers are dropping off early. Focus on stronger hooks.'}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
