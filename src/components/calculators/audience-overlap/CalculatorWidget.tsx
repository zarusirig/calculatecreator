'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { trackCalculation } from '@/lib/analytics/ga4';

interface AudienceOverlapInput {
  audienceA: number;
  audienceB: number;
  overlap: number;
}

interface AudienceOverlapResult {
  overlapPercentage: number;
  uniqueAudienceA: number;
  uniqueAudienceB: number;
  totalReach: number;
  combinedAudience: number;
  wastedReach: number;
  efficiency: number;
  rating: string;
  interpretation: string;
}

export function AudienceOverlapCalculatorWidget() {
  const [inputs, setInputs] = useState<AudienceOverlapInput>({
    audienceA: 500000,
    audienceB: 400000,
    overlap: 100000,
  });

  const [results, setResults] = useState<AudienceOverlapResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof AudienceOverlapInput, value: string | number) => {
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
    const newErrors: Record<string, string> = {};

    if (!inputs.audienceA || inputs.audienceA <= 0) {
      newErrors.audienceA = 'Audience A must be greater than 0';
    }
    if (!inputs.audienceB || inputs.audienceB <= 0) {
      newErrors.audienceB = 'Audience B must be greater than 0';
    }
    if (inputs.overlap < 0) {
      newErrors.overlap = 'Overlap cannot be negative';
    }
    if (inputs.overlap > inputs.audienceA) {
      newErrors.overlap = 'Overlap cannot exceed Audience A size';
    }
    if (inputs.overlap > inputs.audienceB) {
      newErrors.overlap = 'Overlap cannot exceed Audience B size';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const overlapPercentage = ((inputs.overlap / Math.min(inputs.audienceA, inputs.audienceB)) * 100);
      const uniqueAudienceA = inputs.audienceA - inputs.overlap;
      const uniqueAudienceB = inputs.audienceB - inputs.overlap;
      const totalReach = uniqueAudienceA + uniqueAudienceB + inputs.overlap;
      const combinedAudience = inputs.audienceA + inputs.audienceB;
      const wastedReach = inputs.overlap;
      const efficiency = ((totalReach / combinedAudience) * 100);

      let rating = 'average';
      let interpretation = '';

      if (overlapPercentage <= 10) {
        rating = 'excellent';
        interpretation = `With only ${overlapPercentage.toFixed(1)}% overlap, your audiences are highly distinct. This is excellent for maximizing unique reach and minimizing wasted ad spend. Your campaigns are targeting different user segments effectively, allowing you to reach ${totalReach.toLocaleString()} unique users. This level of audience separation is ideal for testing different messages, running complementary campaigns, or scaling without saturation.`;
      } else if (overlapPercentage <= 25) {
        rating = 'good';
        interpretation = `Your ${overlapPercentage.toFixed(1)}% audience overlap is within acceptable range. You're reaching ${totalReach.toLocaleString()} unique users with minimal redundancy. This moderate overlap suggests your targeting strategies are reasonably distinct while potentially sharing some high-value user segments. Consider this a healthy balance—audiences aren't identical but share enough similarity to validate your targeting approach.`;
      } else if (overlapPercentage <= 40) {
        rating = 'moderate';
        interpretation = `At ${overlapPercentage.toFixed(1)}% overlap, you're seeing moderate audience duplication. Out of ${combinedAudience.toLocaleString()} total audience slots, you're only reaching ${totalReach.toLocaleString()} unique users. This means ${wastedReach.toLocaleString()} users are being targeted by both campaigns, leading to increased frequency, ad fatigue, and inflated costs. Consider refining your targeting criteria to reduce overlap and improve campaign efficiency.`;
      } else {
        rating = 'high';
        interpretation = `Your ${overlapPercentage.toFixed(1)}% overlap is significantly high, meaning ${wastedReach.toLocaleString()} users are seeing ads from both campaigns. This high duplication wastes budget on repeated impressions, causes ad fatigue faster, and limits your total addressable audience. Reaching only ${totalReach.toLocaleString()} unique users from ${combinedAudience.toLocaleString()} audience slots indicates poor targeting differentiation. Immediately review and separate your audience targeting to maximize reach and minimize waste.`;
      }

      setResults({
        overlapPercentage,
        uniqueAudienceA,
        uniqueAudienceB,
        totalReach,
        combinedAudience,
        wastedReach,
        efficiency,
        rating,
        interpretation,
      });

      trackCalculation(
        'audience-overlap',
        { ...inputs },
        { overlapPercentage, efficiency }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Audience Overlap
      </h2>

      <InputField
        id="audienceA"
        label="Audience A Size"
        type="number"
        value={inputs.audienceA}
        onChange={(value) => handleInputChange('audienceA', value)}
        placeholder="e.g., 500000"
        helperText="Total size of your first campaign audience"
        tooltip="Find this in TikTok Ads Manager under your campaign's audience settings"
        error={errors.audienceA}
        min={1}
        required
      />

      <InputField
        id="audienceB"
        label="Audience B Size"
        type="number"
        value={inputs.audienceB}
        onChange={(value) => handleInputChange('audienceB', value)}
        placeholder="e.g., 400000"
        helperText="Total size of your second campaign audience"
        tooltip="Compare this against Audience A to identify overlap"
        error={errors.audienceB}
        min={1}
        required
      />

      <InputField
        id="overlap"
        label="Overlapping Users"
        type="number"
        value={inputs.overlap}
        onChange={(value) => handleInputChange('overlap', value)}
        placeholder="e.g., 100000"
        helperText="Number of users present in both audiences"
        tooltip="Estimate based on combined reach vs sum of individual reaches, or use TikTok's audience insights"
        error={errors.overlap}
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
        Calculate Overlap
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-warning-50 rounded-xl border-2 border-primary-200">
            <p className="text-label-lg text-neutral-600 mb-2">Audience Overlap</p>
            <p className={`text-display-md font-bold ${
              results.rating === 'excellent' ? 'text-success-600' :
              results.rating === 'good' ? 'text-primary-600' :
              results.rating === 'moderate' ? 'text-warning-600' :
              'text-error-600'
            }`}>
              {results.overlapPercentage.toFixed(1)}%
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              {results.wastedReach.toLocaleString()} users targeted by both campaigns
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-sm text-neutral-600 mb-1">Total Unique Reach</p>
              <p className="text-heading-md font-semibold text-neutral-900">
                {results.totalReach.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-sm text-neutral-600 mb-1">Efficiency</p>
              <p className="text-heading-md font-semibold text-neutral-900">
                {results.efficiency.toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="space-y-2 text-body-sm">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Unique to Audience A:</span>
                <span className="font-semibold text-neutral-900">
                  {results.uniqueAudienceA.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Unique to Audience B:</span>
                <span className="font-semibold text-neutral-900">
                  {results.uniqueAudienceB.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-neutral-600">Combined Audience Size:</span>
                <span className="font-semibold text-neutral-900">
                  {results.combinedAudience.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {results.rating && (
            <div className={`p-4 rounded-lg border-2 ${
              results.rating === 'excellent' ? 'bg-success-50 border-success-300' :
              results.rating === 'good' ? 'bg-primary-50 border-primary-300' :
              results.rating === 'moderate' ? 'bg-warning-50 border-warning-300' :
              'bg-error-50 border-error-300'
            }`}>
              <p className="text-label-md font-semibold mb-1">
                Overlap Level: {results.rating.charAt(0).toUpperCase() + results.rating.slice(1)}
              </p>
            </div>
          )}

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
