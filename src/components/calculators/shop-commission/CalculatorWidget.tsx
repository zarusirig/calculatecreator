'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateShopCommission, validateShopCommissionInput } from '@/lib/calculators/shop-commission';
import type { ShopCommissionInput, ShopCommissionResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ShopCommissionCalculatorWidget() {
  const [inputs, setInputs] = useState<ShopCommissionInput>({
    productPrice: 50,
    commissionRate: 5,
    monthlySales: 20,
  });

  const [results, setResults] = useState<ShopCommissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ShopCommissionInput, value: string | number) => {
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
    const validation = validateShopCommissionInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateShopCommission(inputs);
      setResults(result);
      trackCalculation('shop-commission', { ...inputs }, { monthly_commission: result.monthlyCommission, annual: result.annualProjection });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Commission Earnings</h2>

      <InputField
        id="productPrice"
        label="Product Price ($)"
        type="number"
        value={inputs.productPrice}
        onChange={(value) => handleInputChange('productPrice', value)}
        placeholder="e.g., 50"
        helperText="Average product price"
        error={errors.productPrice}
        min={0.01}
        step={0.01}
        required
      />

      <InputField
        id="commissionRate"
        label="Commission Rate (%)"
        type="number"
        value={inputs.commissionRate}
        onChange={(value) => handleInputChange('commissionRate', value)}
        placeholder="e.g., 5"
        helperText="Commission percentage (2-20%)"
        error={errors.commissionRate}
        min={2}
        max={20}
        step={0.5}
        required
      />

      <InputField
        id="monthlySales"
        label="Expected Monthly Sales"
        type="number"
        value={inputs.monthlySales}
        onChange={(value) => handleInputChange('monthlySales', value)}
        placeholder="e.g., 20"
        helperText="Number of sales you expect per month"
        error={errors.monthlySales}
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
        Calculate Commission
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Monthly Commission"
            subtitle={`$${results.annualProjection.toLocaleString()} annually`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Commission Details
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Per Sale Commission</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.commissionPerSale.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Annual Projection</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.annualProjection.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
