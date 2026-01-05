'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateMultiPlatformEarnings,
  validateMultiPlatformEarningsInput,
} from '@/lib/calculators/multi-platform-earnings';
import type {
  MultiPlatformEarningsInput,
  MultiPlatformEarningsResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function MultiPlatformEarningsCalculatorWidget() {
  const [inputs, setInputs] = useState<MultiPlatformEarningsInput>({
    tiktokFollowers: 100000,
    youtubeSubscribers: 50000,
    instagramFollowers: 75000,
    monthlyViews: {
      tiktok: 2000000,
      youtube: 500000,
      instagram: 1000000,
    },
  });

  const [results, setResults] = useState<MultiPlatformEarningsResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof MultiPlatformEarningsInput, value: string | number) => {
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

  const handleViewChange = (platform: 'tiktok' | 'youtube' | 'instagram', value: string | number) => {
    setInputs((prev) => ({
      ...prev,
      monthlyViews: {
        ...prev.monthlyViews,
        [platform]: typeof value === 'string' ? parseFloat(value) || 0 : value,
      },
    }));
  };

  const handleCalculate = () => {
    const validation = validateMultiPlatformEarningsInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateMultiPlatformEarnings(inputs);
      setResults(result);

      trackCalculation(
        'multi-platform-earnings',
        { ...inputs },
        { totalMin: result.totalEarnings.min, totalMax: result.totalEarnings.max }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Enter Platform Stats
      </h2>

      <div className="space-y-4 mb-6">
        <h3 className="text-heading-sm font-semibold text-neutral-900">Followers</h3>
        <InputField
          id="tiktokFollowers"
          label="TikTok Followers"
          type="number"
          value={inputs.tiktokFollowers}
          onChange={(value) => handleInputChange('tiktokFollowers', value)}
          placeholder="e.g., 100000"
          error={errors.tiktokFollowers}
          min={0}
          required
        />
        <InputField
          id="youtubeSubscribers"
          label="YouTube Subscribers"
          type="number"
          value={inputs.youtubeSubscribers}
          onChange={(value) => handleInputChange('youtubeSubscribers', value)}
          placeholder="e.g., 50000"
          error={errors.youtubeSubscribers}
          min={0}
          required
        />
        <InputField
          id="instagramFollowers"
          label="Instagram Followers"
          type="number"
          value={inputs.instagramFollowers}
          onChange={(value) => handleInputChange('instagramFollowers', value)}
          placeholder="e.g., 75000"
          error={errors.instagramFollowers}
          min={0}
          required
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-heading-sm font-semibold text-neutral-900">Monthly Views</h3>
        <InputField
          id="tiktokViews"
          label="TikTok Monthly Views"
          type="number"
          value={inputs.monthlyViews.tiktok}
          onChange={(value) => handleViewChange('tiktok', value)}
          placeholder="e.g., 2000000"
          min={0}
          required
        />
        <InputField
          id="youtubeViews"
          label="YouTube Monthly Views"
          type="number"
          value={inputs.monthlyViews.youtube}
          onChange={(value) => handleViewChange('youtube', value)}
          placeholder="e.g., 500000"
          min={0}
          required
        />
        <InputField
          id="instagramViews"
          label="Instagram Monthly Views"
          type="number"
          value={inputs.monthlyViews.instagram}
          onChange={(value) => handleViewChange('instagram', value)}
          placeholder="e.g., 1000000"
          min={0}
          required
        />
      </div>

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
            results={{ value: results.totalEarnings.min, min: results.totalEarnings.min, max: results.totalEarnings.max }}
            type="range"
            format="currency"
            title="Total Monthly Earnings"
            subtitle={`Best platform: ${results.bestPlatform.toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Platform Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">TikTok</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.tiktokEarnings.min.toLocaleString()} - ${results.tiktokEarnings.max.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">YouTube</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.youtubeEarnings.min.toLocaleString()} - ${results.youtubeEarnings.max.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Instagram</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.instagramEarnings.min.toLocaleString()} - ${results.instagramEarnings.max.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
