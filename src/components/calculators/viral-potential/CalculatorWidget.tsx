'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateViralPotential, validateViralPotentialInput } from '@/lib/calculators/viral-potential';
import type { ViralPotentialInput, ViralPotentialResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ViralPotentialCalculatorWidget() {
  const [inputs, setInputs] = useState<ViralPotentialInput>({
    followers: 50000,
    engagementRate: 6,
    shareRate: 3,
    saveRate: 2.5,
    completionRate: 70,
  });

  const [results, setResults] = useState<ViralPotentialResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ViralPotentialInput, value: string | number) => {
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
    const validation = validateViralPotentialInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateViralPotential(inputs);
      setResults(result);
      trackCalculation('viral-potential', { ...inputs }, { viralScore: result.viralScore, viralChance: result.viralChance });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Viral Potential</h2>

      <InputField
        id="followers"
        label="Total Followers"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 50000"
        helperText="Your current follower count"
        error={errors.followers}
        min={0}
        required
      />

      <InputField
        id="engagementRate"
        label="Engagement Rate (%)"
        type="number"
        value={inputs.engagementRate}
        onChange={(value) => handleInputChange('engagementRate', value)}
        placeholder="e.g., 6"
        helperText="(Likes + Comments + Shares) / Followers × 100"
        error={errors.engagementRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="shareRate"
        label="Share Rate (%)"
        type="number"
        value={inputs.shareRate}
        onChange={(value) => handleInputChange('shareRate', value)}
        placeholder="e.g., 3"
        helperText="Shares / Views × 100"
        error={errors.shareRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="saveRate"
        label="Save Rate (%)"
        type="number"
        value={inputs.saveRate}
        onChange={(value) => handleInputChange('saveRate', value)}
        placeholder="e.g., 2.5"
        helperText="Saves / Views × 100"
        error={errors.saveRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="completionRate"
        label="Completion Rate (%)"
        type="number"
        value={inputs.completionRate}
        onChange={(value) => handleInputChange('completionRate', value)}
        placeholder="e.g., 70"
        helperText="Avg Watch Time / Video Duration × 100"
        error={errors.completionRate}
        min={0}
        max={150}
        step={1}
        required
      />

      <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
        Calculate Viral Potential
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="number"
            title="Viral Score"
            subtitle={`${results.viralChance.replace('-', ' ').toUpperCase()} Viral Chance`}
          />

          {results.factors && results.factors.length > 0 && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-md text-neutral-600 mb-3">Score Breakdown</p>
              <div className="space-y-2">
                {results.factors.map((factor, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-body-sm text-neutral-700">{factor.label}</span>
                    <span className="text-body-sm font-semibold text-neutral-900">{factor.score.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
