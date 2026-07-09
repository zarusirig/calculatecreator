'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { formatNumber, formatPercent } from '@/lib/utils/format';
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

    const overlapPercentage = ((inputs.overlap / Math.min(inputs.audienceA, inputs.audienceB)) * 100);
    const uniqueAudienceA = inputs.audienceA - inputs.overlap;
    const uniqueAudienceB = inputs.audienceB - inputs.overlap;
    const totalReach = uniqueAudienceA + uniqueAudienceB + inputs.overlap;
    const combinedAudience = inputs.audienceA + inputs.audienceB;
    const wastedReach = inputs.overlap;
    const efficiency = ((totalReach / combinedAudience) * 100);

    const overlapPctFmt = formatPercent(overlapPercentage, 1);
    const totalReachFmt = formatNumber(totalReach);
    const combinedFmt = formatNumber(combinedAudience);
    const wastedFmt = formatNumber(wastedReach);

    let rating = 'average';
    let interpretation = '';

    if (overlapPercentage <= 10) {
      rating = 'excellent';
      interpretation = `With only ${overlapPctFmt} overlap, your audiences are highly distinct. This is excellent for maximizing unique reach and minimizing wasted ad spend. Your campaigns are targeting different user segments effectively, allowing you to reach ${totalReachFmt} unique users. This level of audience separation is ideal for testing different messages, running complementary campaigns, or scaling without saturation.`;
    } else if (overlapPercentage <= 25) {
      rating = 'good';
      interpretation = `Your ${overlapPctFmt} audience overlap is within acceptable range. You're reaching ${totalReachFmt} unique users with minimal redundancy. This moderate overlap suggests your targeting strategies are reasonably distinct while potentially sharing some high-value user segments. Consider this a healthy balance—audiences aren't identical but share enough similarity to validate your targeting approach.`;
    } else if (overlapPercentage <= 40) {
      rating = 'moderate';
      interpretation = `At ${overlapPctFmt} overlap, you're seeing moderate audience duplication. Out of ${combinedFmt} total audience slots, you're only reaching ${totalReachFmt} unique users. This means ${wastedFmt} users are being targeted by both campaigns, leading to increased frequency, ad fatigue, and inflated costs. Consider refining your targeting criteria to reduce overlap and improve campaign efficiency.`;
    } else {
      rating = 'high';
      interpretation = `Your ${overlapPctFmt} overlap is significantly high, meaning ${wastedFmt} users are seeing ads from both campaigns. This high duplication wastes budget on repeated impressions, causes ad fatigue faster, and limits your total addressable audience. Reaching only ${totalReachFmt} unique users from ${combinedFmt} audience slots indicates poor targeting differentiation. Immediately review and separate your audience targeting to maximize reach and minimize waste.`;
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
        className="w-full mt-6"
      >
        Calculate Overlap
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Audience Overlap"
            rows={[
              { label: 'Audience Overlap', value: formatPercent(results.overlapPercentage, 1), hint: `${formatNumber(results.wastedReach)} users targeted by both campaigns` },
              { label: 'Total Unique Reach', value: formatNumber(results.totalReach) },
              { label: 'Efficiency', value: formatPercent(results.efficiency, 1) },
              { label: 'Unique to Audience A', value: formatNumber(results.uniqueAudienceA) },
              { label: 'Unique to Audience B', value: formatNumber(results.uniqueAudienceB) },
              { label: 'Combined Audience Size', value: formatNumber(results.combinedAudience) },
              { label: 'Overlap Level', value: results.rating.charAt(0).toUpperCase() + results.rating.slice(1) },
            ]}
          />

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
