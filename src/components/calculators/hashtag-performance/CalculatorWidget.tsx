'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { formatPercent } from '@/lib/utils/format';
import {
  calculateHashtagPerformance,
  validateHashtagPerformanceInput,
} from '@/lib/calculators/hashtag-performance';
import type {
  HashtagPerformanceInput,
  HashtagPerformanceResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function HashtagPerformanceCalculatorWidget() {
  const [inputs, setInputs] = useState<HashtagPerformanceInput>({
    baselineViews: 50000,
    hashtagViews: 75000,
    hashtagEngagement: 4500,
    baselineEngagement: 2500,
  });

  const [results, setResults] = useState<HashtagPerformanceResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof HashtagPerformanceInput, value: string | number) => {
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
    const validation = validateHashtagPerformanceInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});

    const result = calculateHashtagPerformance(inputs);
    setResults(result);

    trackCalculation(
      'hashtag-performance',
      { ...inputs },
      { effectivenessScore: result.effectivenessScore, rating: result.rating }
    );
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Hashtag Impact
      </h2>

      <InputField
        id="baselineViews"
        label="Baseline Views"
        type="number"
        value={inputs.baselineViews}
        onChange={(value) => handleInputChange('baselineViews', value)}
        placeholder="e.g., 50000"
        helperText="Average views without the hashtag"
        error={errors.baselineViews}
        min={1}
        required
      />

      <InputField
        id="hashtagViews"
        label="Hashtag Views"
        type="number"
        value={inputs.hashtagViews}
        onChange={(value) => handleInputChange('hashtagViews', value)}
        placeholder="e.g., 75000"
        helperText="Views when using the hashtag"
        error={errors.hashtagViews}
        min={0}
        required
      />

      <InputField
        id="baselineEngagement"
        label="Baseline Engagement"
        type="number"
        value={inputs.baselineEngagement}
        onChange={(value) => handleInputChange('baselineEngagement', value)}
        placeholder="e.g., 2500"
        helperText="Engagement without the hashtag"
        error={errors.baselineEngagement}
        min={0}
        required
      />

      <InputField
        id="hashtagEngagement"
        label="Hashtag Engagement"
        type="number"
        value={inputs.hashtagEngagement}
        onChange={(value) => handleInputChange('hashtagEngagement', value)}
        placeholder="e.g., 4500"
        helperText="Engagement with the hashtag"
        error={errors.hashtagEngagement}
        min={0}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        className="w-full mt-6"
      >
        Analyze Hashtag
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="number"
            title="Effectiveness Score"
            subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Performance Lift
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">View Lift</span>
                <span className={`text-body-sm font-semibold ${results.viewLift >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                  {results.viewLift >= 0 ? '+' : ''}{formatPercent(results.viewLift, 1)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Engagement Lift</span>
                <span className={`text-body-sm font-semibold ${results.engagementLift >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                  {results.engagementLift >= 0 ? '+' : ''}{formatPercent(results.engagementLift, 1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
