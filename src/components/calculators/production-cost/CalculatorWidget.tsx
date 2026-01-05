'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateProductionCost,
  validateProductionCostInput,
} from '@/lib/calculators/production-cost';
import type {
  ProductionCostInput,
  ProductionCostResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ProductionCostCalculatorWidget() {
  const [inputs, setInputs] = useState<ProductionCostInput>({
    equipmentCost: 2000,
    softwareCost: 50,
    timePerVideo: 120,
    hourlyRate: 50,
    videosPerMonth: 20,
  });

  const [results, setResults] = useState<ProductionCostResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ProductionCostInput, value: string | number) => {
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
    const validation = validateProductionCostInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateProductionCost(inputs);
      setResults(result);

      trackCalculation(
        'production-cost',
        { ...inputs },
        { costPerVideo: result.costPerVideo, monthlyCost: result.monthlyCost }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Production Costs
      </h2>

      <InputField
        id="equipmentCost"
        label="Equipment Cost ($)"
        type="number"
        value={inputs.equipmentCost}
        onChange={(value) => handleInputChange('equipmentCost', value)}
        placeholder="e.g., 2000"
        helperText="Total equipment investment (amortized over 12 months)"
        error={errors.equipmentCost}
        min={0}
        required
      />

      <InputField
        id="softwareCost"
        label="Monthly Software Cost ($)"
        type="number"
        value={inputs.softwareCost}
        onChange={(value) => handleInputChange('softwareCost', value)}
        placeholder="e.g., 50"
        helperText="Monthly editing software subscriptions"
        error={errors.softwareCost}
        min={0}
        required
      />

      <InputField
        id="timePerVideo"
        label="Time Per Video (minutes)"
        type="number"
        value={inputs.timePerVideo}
        onChange={(value) => handleInputChange('timePerVideo', value)}
        placeholder="e.g., 120"
        helperText="Average time to create one video"
        error={errors.timePerVideo}
        min={1}
        required
      />

      <InputField
        id="hourlyRate"
        label="Your Hourly Rate ($)"
        type="number"
        value={inputs.hourlyRate}
        onChange={(value) => handleInputChange('hourlyRate', value)}
        placeholder="e.g., 50"
        helperText="Value of your time per hour"
        error={errors.hourlyRate}
        min={1}
        required
      />

      <InputField
        id="videosPerMonth"
        label="Videos Per Month"
        type="number"
        value={inputs.videosPerMonth}
        onChange={(value) => handleInputChange('videosPerMonth', value)}
        placeholder="e.g., 20"
        helperText="Number of videos you create monthly"
        error={errors.videosPerMonth}
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
        Calculate Costs
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Cost Per Video"
            subtitle={`$${results.monthlyCost.toLocaleString()}/month total`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Cost Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Annual Cost</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.annualCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Break-Even Views/Video</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.breakEvenViews.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
