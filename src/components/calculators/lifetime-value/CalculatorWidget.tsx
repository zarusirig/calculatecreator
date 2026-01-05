'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { calculateLTV, validateLTVInput } from '@/lib/calculators/lifetime-value';
import type { LTVInput, LTVResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function LifetimeValueCalculatorWidget() {
  const [inputs, setInputs] = useState<LTVInput>({
    avgOrderValue: 75,
    purchaseFrequency: 2,
    customerLifespan: 24,
  });

  const [results, setResults] = useState<LTVResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof LTVInput, value: string | number) => {
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
    const validation = validateLTVInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateLTV(inputs);
      setResults(result);
      trackCalculation('lifetime-value', { ...inputs }, { ltv: result.ltv });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Customer LTV
      </h2>

      <InputField
        id="avgOrderValue"
        label="Average Order Value ($)"
        type="number"
        value={inputs.avgOrderValue}
        onChange={(value) => handleInputChange('avgOrderValue', value)}
        placeholder="e.g., 75"
        helperText="Average amount a customer spends per order"
        tooltip="Calculate by dividing total revenue by number of orders"
        error={errors.avgOrderValue}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="purchaseFrequency"
        label="Purchase Frequency (per month)"
        type="number"
        value={inputs.purchaseFrequency}
        onChange={(value) => handleInputChange('purchaseFrequency', value)}
        placeholder="e.g., 2"
        helperText="How many times a customer buys per month on average"
        tooltip="Divide number of purchases by number of unique customers, then divide by months"
        error={errors.purchaseFrequency}
        min={0}
        step={0.1}
        required
      />

      <InputField
        id="customerLifespan"
        label="Customer Lifespan (months)"
        type="number"
        value={inputs.customerLifespan}
        onChange={(value) => handleInputChange('customerLifespan', value)}
        placeholder="e.g., 24"
        helperText="Average number of months a customer stays active"
        tooltip="Use cohort analysis to track how long customers continue purchasing. If new, use industry averages."
        error={errors.customerLifespan}
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
        Calculate LTV
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border-2 border-primary-200">
            <p className="text-label-lg text-neutral-600 mb-2">Customer Lifetime Value</p>
            <p className="text-display-md font-bold text-primary-600">
              ${results.ltv.toFixed(2)}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              Total value per customer
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Monthly Value per Customer</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${results.monthlyValue.toFixed(2)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Average revenue per customer per month</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Total Revenue Over Lifetime</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${results.totalRevenue.toFixed(2)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Expected total purchases from one customer</p>
          </div>

          <div className="p-4 bg-success-50 border-2 border-success-300 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-700">Maximum CAC (at 3:1 ratio)</span>
              <span className="text-heading-md font-semibold text-success-700">
                ${(results.ltv / 3).toFixed(2)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-600">You can spend up to this amount to acquire a customer profitably</p>
          </div>

          {results.interpretation && (
            <div className="p-4 bg-neutral-50 rounded-lg">
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
