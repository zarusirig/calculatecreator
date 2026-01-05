'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateSponsorshipROI,
  validateSponsorshipROIInput,
} from '@/lib/calculators/sponsorship-roi';
import type {
  SponsorshipROIInput,
  SponsorshipROIResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function SponsorshipROICalculatorWidget() {
  const [inputs, setInputs] = useState<SponsorshipROIInput>({
    sponsorshipFee: 5000,
    productionCost: 500,
    expectedReach: 100000,
    conversionRate: 2,
    avgOrderValue: 50,
  });

  const [results, setResults] = useState<SponsorshipROIResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof SponsorshipROIInput, value: string | number) => {
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
    const validation = validateSponsorshipROIInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateSponsorshipROI(inputs);
      setResults(result);

      trackCalculation(
        'sponsorship-roi',
        { ...inputs },
        { roi: result.roi, roiPercentage: result.roiPercentage }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Sponsorship ROI
      </h2>

      <InputField
        id="sponsorshipFee"
        label="Sponsorship Fee ($)"
        type="number"
        value={inputs.sponsorshipFee}
        onChange={(value) => handleInputChange('sponsorshipFee', value)}
        placeholder="e.g., 5000"
        helperText="What you will pay the creator"
        error={errors.sponsorshipFee}
        min={1}
        required
      />

      <InputField
        id="productionCost"
        label="Production Cost ($)"
        type="number"
        value={inputs.productionCost}
        onChange={(value) => handleInputChange('productionCost', value)}
        placeholder="e.g., 500"
        helperText="Additional production expenses"
        error={errors.productionCost}
        min={0}
        required
      />

      <InputField
        id="expectedReach"
        label="Expected Reach"
        type="number"
        value={inputs.expectedReach}
        onChange={(value) => handleInputChange('expectedReach', value)}
        placeholder="e.g., 100000"
        helperText="Estimated views/impressions"
        error={errors.expectedReach}
        min={1}
        required
      />

      <InputField
        id="conversionRate"
        label="Conversion Rate (%)"
        type="number"
        value={inputs.conversionRate}
        onChange={(value) => handleInputChange('conversionRate', value)}
        placeholder="e.g., 2"
        helperText="Expected conversion percentage"
        error={errors.conversionRate}
        min={0.1}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="avgOrderValue"
        label="Avg Order Value ($)"
        type="number"
        value={inputs.avgOrderValue}
        onChange={(value) => handleInputChange('avgOrderValue', value)}
        placeholder="e.g., 50"
        helperText="Average purchase amount"
        error={errors.avgOrderValue}
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
        Calculate ROI
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Return on Investment"
            subtitle={results.roiPercentage >= 100 ? 'Profitable!' : 'Below break-even'}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Financial Summary
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Total Revenue</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.totalRevenue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Total Cost</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.totalCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">Net Profit/Loss</span>
                <span className={`text-body-sm font-semibold ${results.roi >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                  ${results.roi.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Break-Even Units</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.breakEvenUnits.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
