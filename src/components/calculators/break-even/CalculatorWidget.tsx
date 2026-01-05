'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateBreakEven, validateBreakEvenInput } from '@/lib/calculators/break-even';
import type { BreakEvenInput, BreakEvenResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function BreakEvenCalculatorWidget() {
  const [inputs, setInputs] = useState<BreakEvenInput>({
    adSpend: 1000,
    costPerClick: 0.50,
    conversionRate: 2,
    productPrice: 50,
    productCost: 20,
  });

  const [results, setResults] = useState<BreakEvenResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof BreakEvenInput, value: string | number) => {
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
    const validation = validateBreakEvenInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateBreakEven(inputs);
      setResults(result);

      trackCalculation(
        'break-even',
        { ...inputs },
        { breakEvenUnits: result.breakEvenUnits }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Break Even Point
      </h2>

      <InputField
        id="adSpend"
        label="Ad Spend ($)"
        type="number"
        value={inputs.adSpend}
        onChange={(value) => handleInputChange('adSpend', value)}
        placeholder="e.g., 1000"
        helperText="Total advertising budget"
        error={errors.adSpend}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="costPerClick"
        label="Cost per Click ($)"
        type="number"
        value={inputs.costPerClick}
        onChange={(value) => handleInputChange('costPerClick', value)}
        placeholder="e.g., 0.50"
        helperText="Average CPC for your ads"
        error={errors.costPerClick}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="conversionRate"
        label="Conversion Rate (%)"
        type="number"
        value={inputs.conversionRate}
        onChange={(value) => handleInputChange('conversionRate', value)}
        placeholder="e.g., 2"
        helperText="Percentage of clicks that convert"
        error={errors.conversionRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="productPrice"
        label="Product Price ($)"
        type="number"
        value={inputs.productPrice}
        onChange={(value) => handleInputChange('productPrice', value)}
        placeholder="e.g., 50"
        helperText="Selling price per unit"
        error={errors.productPrice}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="productCost"
        label="Product Cost ($)"
        type="number"
        value={inputs.productCost}
        onChange={(value) => handleInputChange('productCost', value)}
        placeholder="e.g., 20"
        helperText="Cost to produce/acquire per unit"
        error={errors.productCost}
        min={0}
        step={0.01}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Break Even
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="number"
            title="Break Even Units"
            subtitle={`${results.breakEvenUnits} sales to break even`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Break Even Analysis
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Required Clicks
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.requiredClicks.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Required Conversions
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.requiredConversions.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">
                  Break Even Revenue
                </span>
                <span className="text-body-sm font-semibold text-success-DEFAULT">
                  ${results.breakEvenRevenue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
