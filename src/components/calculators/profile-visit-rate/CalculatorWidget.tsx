'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateProfileVisitRate,
  validateProfileVisitRateInput,
} from '@/lib/calculators/profile-visit-rate';
import type { ProfileVisitRateInput, ProfileVisitRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ProfileVisitRateCalculatorWidget() {
  const [inputs, setInputs] = useState<ProfileVisitRateInput>({
    views: 50000,
    profileVisits: 2500,
    followers: 10000,
  });

  const [results, setResults] = useState<ProfileVisitRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ProfileVisitRateInput, value: string | number) => {
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
    const validation = validateProfileVisitRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateProfileVisitRate(inputs);
      setResults(result);

      trackCalculation(
        'profile-visit-rate',
        { ...inputs },
        { visitRate: result.visitRate, conversionRate: result.conversionRate, rating: result.rating }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Profile Visit Rate
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
        id="profileVisits"
        label="Profile Visits"
        type="number"
        value={inputs.profileVisits}
        onChange={(value) => handleInputChange('profileVisits', value)}
        placeholder="e.g., 2500"
        helperText="From TikTok Analytics"
        error={errors.profileVisits}
        min={0}
        required
      />

      <InputField
        id="followers"
        label="New Followers (from video)"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 10000"
        helperText="New followers gained from this video"
        error={errors.followers}
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
        Calculate Profile Visit Rate
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Profile Visit Rate"
            subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Conversion Rate
            </p>
            <p className="text-heading-sm font-semibold text-neutral-900 mb-2">
              {results.conversionRate.toFixed(1)}%
            </p>
            <p className="text-body-sm text-neutral-700">
              Percentage of profile visitors who followed you
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
