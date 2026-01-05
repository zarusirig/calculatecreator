'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateEngagementRate,
  validateEngagementRateInput,
} from '@/lib/calculators/engagement-rate';
import type { EngagementRateInput, EngagementRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function EngagementRateCalculatorWidget() {
  const [inputs, setInputs] = useState<EngagementRateInput>({
    followers: 50000,
    avgLikes: 2500,
    avgComments: 150,
    avgShares: 100,
  });

  const [results, setResults] = useState<EngagementRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof EngagementRateInput, value: string | number) => {
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
    const validation = validateEngagementRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateEngagementRate(inputs);
      setResults(result);
      trackCalculation(
        'engagement-rate',
        { ...inputs },
        { rate: result.rate, rating: result.rating }
      );
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Engagement Rate
      </h2>

      <InputField
        id="followers"
        label="Total Followers"
        type="number"
        value={inputs.followers}
        onChange={(value) => handleInputChange('followers', value)}
        placeholder="e.g., 50000"
        helperText="Your total TikTok follower count"
        error={errors.followers}
        min={1}
        required
      />

      <InputField
        id="avgLikes"
        label="Average Likes Per Video"
        type="number"
        value={inputs.avgLikes}
        onChange={(value) => handleInputChange('avgLikes', value)}
        placeholder="e.g., 2500"
        helperText="Average likes on your recent videos"
        tooltip="Calculate from your last 10-20 videos for accuracy"
        error={errors.avgLikes}
        min={0}
        required
      />

      <InputField
        id="avgComments"
        label="Average Comments Per Video"
        type="number"
        value={inputs.avgComments}
        onChange={(value) => handleInputChange('avgComments', value)}
        placeholder="e.g., 150"
        helperText="Average comments on your recent videos"
        error={errors.avgComments}
        min={0}
        required
      />

      <InputField
        id="avgShares"
        label="Average Shares Per Video"
        type="number"
        value={inputs.avgShares}
        onChange={(value) => handleInputChange('avgShares', value)}
        placeholder="e.g., 100"
        helperText="Average shares on your recent videos"
        error={errors.avgShares}
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
        Calculate Engagement Rate
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Your Engagement Rate"
            subtitle={`${results.rating.charAt(0).toUpperCase() + results.rating.slice(1).replace('-', ' ')} Performance`}
          />

          {results.interpretation && (
            <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          )}

          {results.additionalMetrics && (
            <div className="mt-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">
                Engagement Breakdown
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                  <span className="text-body-md text-neutral-700 flex items-center gap-2">
                    <Heart size={16} className="text-primary-600" /> Likes
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {results.additionalMetrics.likesPercentage}%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                  <span className="text-body-md text-neutral-700 flex items-center gap-2">
                    <MessageCircle size={16} className="text-primary-600" /> Comments
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {results.additionalMetrics.commentsPercentage}%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                  <span className="text-body-md text-neutral-700 flex items-center gap-2">
                    <RefreshCw size={16} className="text-primary-600" /> Shares
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {results.additionalMetrics.sharesPercentage}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
