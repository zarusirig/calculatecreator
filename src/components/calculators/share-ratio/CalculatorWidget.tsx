'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateShareRatio,
  validateShareRatioInput,
} from '@/lib/calculators/share-ratio';
import type { ShareRatioInput, ShareRatioResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ShareRatioCalculatorWidget() {
  const [inputs, setInputs] = useState<ShareRatioInput>({
    views: 50000,
    shares: 1500,
  });

  const [results, setResults] = useState<ShareRatioResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ShareRatioInput, value: string | number) => {
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
    const validation = validateShareRatioInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateShareRatio(inputs);
      setResults(result);

      trackCalculation(
        'share-ratio',
        { ...inputs },
        { shareRatio: result.shareRatio, viralityRating: result.viralityRating }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Share Ratio
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
        id="shares"
        label="Total Shares"
        type="number"
        value={inputs.shares}
        onChange={(value) => handleInputChange('shares', value)}
        placeholder="e.g., 1500"
        helperText="Number of times video was shared"
        error={errors.shares}
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
        Calculate Share Ratio
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Share Ratio"
            subtitle={`${results.viralityRating.replace('-', ' ').toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              What This Means
            </p>
            <p className="text-body-sm text-neutral-700">
              {results.shareRatio >= 5
                ? 'Viral content! Your video is spreading rapidly through shares.'
                : results.shareRatio >= 2
                ? 'Strong share performance! Your content has high viral potential.'
                : results.shareRatio >= 0.5
                ? 'Average share rate. Create more share-worthy content to boost virality.'
                : 'Low share rate. Focus on emotional, relatable, or useful content that people want to share.'}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
