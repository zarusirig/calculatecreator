'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateTotalMoney, validateMoneyCalculatorInput } from '@/lib/calculators/money';
import type { MoneyCalculatorInput, MoneyCalculatorResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export function TikTokMoneyCalculatorWidget() {
  const [inputs, setInputs] = useState<MoneyCalculatorInput>({
    followers: 50000,
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
    avgStreamViewers: 100,
    monthlyStreams: 8,
  });

  const [results, setResults] = useState<MoneyCalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(([value, label]) => ({ value, label }));

  const handleInputChange = (field: keyof MoneyCalculatorInput, value: string | number) => {
    const processedValue = field === 'niche'
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
    const validation = validateMoneyCalculatorInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateTotalMoney(inputs);
      setResults(result);
      trackCalculation('tiktok-money', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Earnings
      </h2>

      <InputField
        id="followers"
        label="Followers"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 50000"
        helperText="Your TikTok follower count"
        error={errors.followers}
        min={0}
        required
      />

      <InputField
        id="monthlyViews"
        label="Monthly Views"
        type="number"
        value={inputs.monthlyViews}
        onChange={(value) => handleInputChange('monthlyViews', value)}
        placeholder="e.g., 500000"
        helperText="Total views in the past 30 days"
        error={errors.monthlyViews}
        min={0}
        required
      />

      <InputField
        id="engagementRate"
        label="Engagement Rate (%)"
        type="number"
        value={inputs.engagementRate}
        onChange={(value) => handleInputChange('engagementRate', value)}
        placeholder="e.g., 5"
        helperText="Your average engagement rate"
        error={errors.engagementRate}
        min={0}
        max={100}
        step={0.1}
        required
      />

      <SelectField
        id="niche"
        label="Content Niche"
        value={inputs.niche}
        onChange={(value) => handleInputChange('niche', value)}
        options={nicheOptions}
        helperText="Your primary content category"
        error={errors.niche}
        required
      />

      <InputField
        id="avgStreamViewers"
        label="Avg LIVE Viewers"
        type="number"
        value={inputs.avgStreamViewers || 0}
        onChange={(value) => handleInputChange('avgStreamViewers', value)}
        placeholder="e.g., 100"
        helperText="Average concurrent viewers during LIVE"
        error={errors.avgStreamViewers}
        min={0}
      />

      <InputField
        id="monthlyStreams"
        label="Monthly Streams"
        type="number"
        value={inputs.monthlyStreams || 0}
        onChange={(value) => handleInputChange('monthlyStreams', value)}
        placeholder="e.g., 8"
        helperText="Number of LIVE streams per month"
        error={errors.monthlyStreams}
        min={0}
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
        <div className="mt-6">
          <ResultsDisplay
            results={{ value: results.total.min, min: results.total.min, max: results.total.max }}
            type="range"
            format="currency"
            title="Estimated Monthly Earnings"
            subtitle="Combined from all revenue streams"
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Revenue Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Creator Fund</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.creatorFund.min.toLocaleString()} - ${results.creatorFund.max.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Brand Deals</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.brandDeals.min.toLocaleString()} - ${results.brandDeals.max.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">LIVE Gifts</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.liveGifts.min.toLocaleString()} - ${results.liveGifts.max.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
