'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateMilestoneTracker,
  validateMilestoneTrackerInput,
} from '@/lib/calculators/milestone-tracker';
import type {
  MilestoneTrackerInput,
  MilestoneTrackerResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function MilestoneTrackerCalculatorWidget() {
  const [inputs, setInputs] = useState<MilestoneTrackerInput>({
    currentFollowers: 5000,
    targetMilestone: 10000,
    dailyGrowthRate: 2.0,
  });

  const [results, setResults] = useState<MilestoneTrackerResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof MilestoneTrackerInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateMilestoneTrackerInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateMilestoneTracker(inputs);
      setResults(result);

      trackCalculation(
        'milestone-tracker',
        { ...inputs },
        { daysToMilestone: result.daysToMilestone, progressPercentage: result.progressPercentage }
      );

      setIsCalculating(false);
    }, 500);
  };

  const commonMilestones = [1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Track Your Milestone Progress
      </h2>

      <InputField
        id="currentFollowers"
        label="Current Followers"
        type="number"
        value={inputs.currentFollowers}
        onChange={(value) => handleInputChange('currentFollowers', value)}
        placeholder="e.g., 5000"
        helperText="Your current TikTok follower count"
        error={errors.currentFollowers}
        min={0}
        required
      />

      <InputField
        id="targetMilestone"
        label="Target Milestone"
        type="number"
        value={inputs.targetMilestone}
        onChange={(value) => handleInputChange('targetMilestone', value)}
        placeholder="e.g., 10000"
        helperText="Your next follower goal"
        error={errors.targetMilestone}
        min={1}
        required
      />

      <div className="mb-4">
        <p className="text-label-sm text-neutral-600 mb-2">Quick Select Milestone:</p>
        <div className="flex flex-wrap gap-2">
          {commonMilestones.map((milestone) => (
            <button
              key={milestone}
              onClick={() => handleInputChange('targetMilestone', milestone)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                inputs.targetMilestone === milestone
                  ? 'bg-secondary-500 text-white border-secondary-500'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-secondary-500'
              }`}
            >
              {milestone >= 1000000
                ? `${milestone / 1000000}M`
                : milestone >= 1000
                ? `${milestone / 1000}K`
                : milestone}
            </button>
          ))}
        </div>
      </div>

      <InputField
        id="dailyGrowthRate"
        label="Daily Growth Rate (%)"
        type="number"
        value={inputs.dailyGrowthRate}
        onChange={(value) => handleInputChange('dailyGrowthRate', value)}
        placeholder="e.g., 2.0"
        helperText="Your average daily follower growth percentage"
        error={errors.dailyGrowthRate}
        min={0.1}
        max={100}
        step={0.1}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Milestone ETA
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Progress to Milestone"
            subtitle={results.milestoneName}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">Progress</span>
                <span className="font-semibold">{results.progressPercentage.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, results.progressPercentage)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-neutral-50 rounded-lg">
                <p className="text-heading-sm font-semibold text-neutral-900">
                  {results.followersNeeded.toLocaleString()}
                </p>
                <p className="text-label-sm text-neutral-600">
                  Followers Needed
                </p>
              </div>
              <div className="text-center p-3 bg-neutral-50 rounded-lg">
                <p className="text-heading-sm font-semibold text-neutral-900">
                  {results.daysToMilestone} days
                </p>
                <p className="text-label-sm text-neutral-600">
                  Estimated Time
                </p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-secondary-50 rounded-lg">
              <p className="text-label-sm text-secondary-700">
                Estimated Date: <strong>{new Date(results.estimatedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
            <p className="text-body-md text-neutral-700" dangerouslySetInnerHTML={{ __html: results.interpretation || '' }} />
          </div>
        </div>
      )}
    </Card>
  );
}
