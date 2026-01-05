'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateCreatorTax, validateCreatorTaxInput } from '@/lib/calculators/creator-tax';
import type { CreatorTaxInput, CreatorTaxResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function CreatorTaxCalculatorWidget() {
  const [inputs, setInputs] = useState<CreatorTaxInput>({
    annualIncome: 75000,
    state: 'medium',
    filingStatus: 'single',
    businessExpenses: 10000,
  });

  const [results, setResults] = useState<CreatorTaxResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CreatorTaxInput, value: string | number) => {
    const processedValue = field === 'state' || field === 'filingStatus'
      ? value
      : typeof value === 'string' ? parseFloat(value) || 0 : value;
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
    const validation = validateCreatorTaxInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCreatorTax(inputs);
      setResults(result);

      trackCalculation(
        'creator-tax',
        { ...inputs },
        { totalTax: result.totalTax, effectiveTaxRate: result.effectiveTaxRate }
      );

      setIsCalculating(false);
    }, 500);
  };

  const stateOptions = [
    { value: 'no-state-tax', label: 'No State Tax (AK, FL, NV, SD, TN, TX, WA, WY)' },
    { value: 'low', label: 'Low State Tax (3%)' },
    { value: 'medium', label: 'Medium State Tax (5%)' },
    { value: 'high', label: 'High State Tax (8%)' },
    { value: 'very-high', label: 'Very High State Tax (10%+)' },
  ];

  const filingOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married Filing Jointly' },
    { value: 'head-of-household', label: 'Head of Household' },
  ];

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Tax Obligations
      </h2>

      <InputField
        id="annualIncome"
        label="Annual Income ($)"
        type="number"
        value={inputs.annualIncome}
        onChange={(value) => handleInputChange('annualIncome', value)}
        placeholder="e.g., 75000"
        helperText="Total annual creator income"
        error={errors.annualIncome}
        min={0}
        required
      />

      <SelectField
        id="state"
        label="State Tax Level"
        value={inputs.state}
        onChange={(value) => handleInputChange('state', value)}
        options={stateOptions}
        helperText="Your state's income tax rate"
        error={errors.state}
        required
      />

      <SelectField
        id="filingStatus"
        label="Filing Status"
        value={inputs.filingStatus}
        onChange={(value) => handleInputChange('filingStatus', value)}
        options={filingOptions}
        helperText="Your tax filing status"
        error={errors.filingStatus}
        required
      />

      <InputField
        id="businessExpenses"
        label="Business Expenses ($)"
        type="number"
        value={inputs.businessExpenses}
        onChange={(value) => handleInputChange('businessExpenses', value)}
        placeholder="e.g., 10000"
        helperText="Deductible business expenses"
        error={errors.businessExpenses}
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
        Calculate Tax
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Total Tax Owed"
            subtitle={`${results.effectiveTaxRate.toFixed(1)}% effective tax rate`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Tax Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Federal Tax
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.federalTax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  State Tax
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.stateTax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Self-Employment Tax
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.selfEmploymentTax.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">
                  Net Income (After Tax)
                </span>
                <span className="text-body-sm font-semibold text-success-DEFAULT">
                  ${results.netIncome.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
