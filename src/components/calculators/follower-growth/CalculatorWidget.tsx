'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateFollowerGrowth,
  validateFollowerGrowthInput,
} from '@/lib/calculators/follower-growth';
import type { FollowerGrowthInput, FollowerGrowthResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function FollowerGrowthCalculatorWidget() {
  const [inputs, setInputs] = useState<FollowerGrowthInput>({
    currentFollowers: 10000,
    dailyGrowthRate: 2.5,
    projectionDays: 30,
  });

  const [results, setResults] = useState<FollowerGrowthResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof FollowerGrowthInput, value: string | number) => {
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
    const validation = validateFollowerGrowthInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateFollowerGrowth(inputs);
      setResults(result);

      trackCalculation(
        'follower-growth',
        { ...inputs },
        { projectedFollowers: result.projectedFollowers, totalGrowth: result.totalGrowth }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Follower Growth
      </h2>

      <InputField
        id="currentFollowers"
        label="Current Followers"
        type="number"
        value={inputs.currentFollowers}
        onChange={(value) => handleInputChange('currentFollowers', value)}
        placeholder="e.g., 10000"
        helperText="Your current TikTok follower count"
        error={errors.currentFollowers}
        min={0}
        required
      />

      <InputField
        id="dailyGrowthRate"
        label="Daily Growth Rate (%)"
        type="number"
        value={inputs.dailyGrowthRate}
        onChange={(value) => handleInputChange('dailyGrowthRate', value)}
        placeholder="e.g., 2.5"
        helperText="Average daily follower growth percentage"
        error={errors.dailyGrowthRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="projectionDays"
        label="Projection Period (Days)"
        type="number"
        value={inputs.projectionDays}
        onChange={(value) => handleInputChange('projectionDays', value)}
        placeholder="e.g., 30"
        helperText="How many days to project forward"
        error={errors.projectionDays}
        min={1}
        max={365}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Growth Projection
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="number"
            title="Projected Followers"
            subtitle={`+${results.totalGrowth.toLocaleString()} followers in ${inputs.projectionDays} days`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Growth Breakdown
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-heading-sm font-semibold text-neutral-900">
                  {results.dailyAverage.toLocaleString()}
                </p>
                <p className="text-label-sm text-neutral-600">
                  Daily Average
                </p>
              </div>
              <div className="text-center">
                <p className="text-heading-sm font-semibold text-neutral-900">
                  {results.growthPercentage.toFixed(1)}%
                </p>
                <p className="text-label-sm text-neutral-600">
                  Total Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
