'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { calculateAffiliateCommission, validateAffiliateCommissionInput } from '@/lib/calculators/affiliate-commission';
import type { AffiliateCommissionInput, AffiliateCommissionResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function AffiliateCommissionCalculatorWidget() {
  const [inputs, setInputs] = useState<AffiliateCommissionInput>({
    productPrice: 50,
    commissionRate: 10,
    monthlyClicks: 1000,
    conversionRate: 3,
  });

  const [results, setResults] = useState<AffiliateCommissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof AffiliateCommissionInput, value: string | number) => {
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
    const validation = validateAffiliateCommissionInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateAffiliateCommission(inputs);
      setResults(result);
      trackCalculation(
        'affiliate-commission',
        { ...inputs },
        { monthly_earnings: result.monthlyEarnings, commission_per_sale: result.commissionPerSale }
      );
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Affiliate Earnings
      </h2>

      <InputField
        id="productPrice"
        label="Product Price ($)"
        type="number"
        value={inputs.productPrice}
        onChange={(value) => handleInputChange('productPrice', value)}
        placeholder="e.g., 50"
        helperText="Average price of products you promote"
        tooltip="Enter the typical product price you'll be promoting as an affiliate"
        error={errors.productPrice}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="commissionRate"
        label="Commission Rate (%)"
        type="number"
        value={inputs.commissionRate}
        onChange={(value) => handleInputChange('commissionRate', value)}
        placeholder="e.g., 10"
        helperText="Percentage you earn per sale"
        tooltip="Check the product's commission rate in TikTok Shop affiliate marketplace"
        error={errors.commissionRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <InputField
        id="monthlyClicks"
        label="Monthly Clicks"
        type="number"
        value={inputs.monthlyClicks}
        onChange={(value) => handleInputChange('monthlyClicks', value)}
        placeholder="e.g., 1000"
        helperText="Expected clicks on your affiliate links per month"
        tooltip="Estimate based on your average video views and link click-through rate (typically 2-5%)"
        error={errors.monthlyClicks}
        min={0}
        required
      />

      <InputField
        id="conversionRate"
        label="Conversion Rate (%)"
        type="number"
        value={inputs.conversionRate}
        onChange={(value) => handleInputChange('conversionRate', value)}
        placeholder="e.g., 3"
        helperText="Percentage of clicks that result in sales"
        tooltip="Typical TikTok affiliate conversion rates: 2-5% (good products with authentic reviews)"
        error={errors.conversionRate}
        min={0}
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
        Calculate Earnings
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl border-2 border-success-200">
            <p className="text-label-lg text-neutral-600 mb-2">Monthly Earnings</p>
            <p className="text-display-md font-bold text-success-600">
              ${results.monthlyEarnings.toFixed(2)}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              Annual: ${results.annualProjection.toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Commission per Sale</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${results.commissionPerSale.toFixed(2)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Your earnings per product sold</p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Expected Monthly Sales</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                {results.expectedSales.toFixed(0)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">Estimated conversions from your traffic</p>
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
