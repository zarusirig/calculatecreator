'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateVideoPerformance,
  validateVideoPerformanceInput,
} from '@/lib/calculators/video-performance';
import type {
  VideoPerformanceInput,
  VideoPerformanceResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function VideoPerformanceCalculatorWidget() {
  const [inputs, setInputs] = useState<VideoPerformanceInput>({
    avgViews: 50000,
    avgLikes: 2500,
    avgComments: 150,
    avgShares: 100,
    followers: 30000,
  });

  const [results, setResults] = useState<VideoPerformanceResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof VideoPerformanceInput, value: string | number) => {
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
    const validation = validateVideoPerformanceInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateVideoPerformance(inputs);
      setResults(result);

      trackCalculation(
        'video-performance',
        { ...inputs },
        { performanceScore: result.performanceScore, rating: result.rating }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Analyze Video Performance
      </h2>

      <InputField
        id="avgViews"
        label="Average Views"
        type="number"
        value={inputs.avgViews}
        onChange={(value) => handleInputChange('avgViews', value)}
        placeholder="e.g., 50000"
        helperText="Average views per video"
        error={errors.avgViews}
        min={0}
        required
      />

      <InputField
        id="avgLikes"
        label="Average Likes"
        type="number"
        value={inputs.avgLikes}
        onChange={(value) => handleInputChange('avgLikes', value)}
        placeholder="e.g., 2500"
        helperText="Average likes per video"
        error={errors.avgLikes}
        min={0}
        required
      />

      <InputField
        id="avgComments"
        label="Average Comments"
        type="number"
        value={inputs.avgComments}
        onChange={(value) => handleInputChange('avgComments', value)}
        placeholder="e.g., 150"
        helperText="Average comments per video"
        error={errors.avgComments}
        min={0}
        required
      />

      <InputField
        id="avgShares"
        label="Average Shares"
        type="number"
        value={inputs.avgShares}
        onChange={(value) => handleInputChange('avgShares', value)}
        placeholder="e.g., 100"
        helperText="Average shares per video"
        error={errors.avgShares}
        min={0}
        required
      />

      <InputField
        id="followers"
        label="Followers"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 30000"
        helperText="Your total follower count"
        error={errors.followers}
        min={1}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Analyze Performance
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="number"
            title="Performance Score"
            subtitle={results.rating}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Performance Metrics
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Performance Score</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.performanceScore}/100
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">View-to-Follower Ratio</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.viewToFollowerRatio.toFixed(1)}x
                </span>
              </div>
            </div>
          </div>

          {results.interpretation && (
            <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
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
