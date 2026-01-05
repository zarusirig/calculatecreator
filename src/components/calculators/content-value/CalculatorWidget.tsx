'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateContentValue, validateContentValueInput } from '@/lib/calculators/content-value';
import type { ContentValueInput, ContentValueResult, ContentNiche } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ContentValueCalculatorWidget() {
  const [inputs, setInputs] = useState<ContentValueInput>({
    totalVideos: 100,
    avgViewsPerVideo: 50000,
    engagementRate: 5,
    niche: 'lifestyle',
  });

  const [results, setResults] = useState<ContentValueResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'beauty-fashion', label: 'Beauty & Fashion' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'finance', label: 'Finance' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'food', label: 'Food' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'tech', label: 'Tech' },
    { value: 'other', label: 'Other' },
  ];

  const handleInputChange = (field: keyof ContentValueInput, value: string | number) => {
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
    const validation = validateContentValueInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateContentValue(inputs);
      setResults(result);

      trackCalculation(
        'content-value',
        { ...inputs },
        { estimatedValue: result.estimatedValue }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Content Value
      </h2>

      <InputField
        id="totalVideos"
        label="Total Videos"
        type="number"
        value={inputs.totalVideos}
        onChange={(value) => handleInputChange('totalVideos', value)}
        placeholder="e.g., 100"
        helperText="Total number of videos on your account"
        error={errors.totalVideos}
        min={1}
        required
      />

      <InputField
        id="avgViewsPerVideo"
        label="Average Views per Video"
        type="number"
        value={inputs.avgViewsPerVideo}
        onChange={(value) => handleInputChange('avgViewsPerVideo', value)}
        placeholder="e.g., 50000"
        helperText="Average views across all videos"
        error={errors.avgViewsPerVideo}
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
        onChange={(value) => handleInputChange('niche', value as ContentNiche)}
        options={nicheOptions}
        helperText="Your primary content category"
        error={errors.niche}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Content Value
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Estimated Content Value"
            subtitle={`$${results.valuePerVideo.toLocaleString()} per video average`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              Value Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Total Reach
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  {results.totalReach.toLocaleString()} views
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">
                  Value per Video
                </span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.valuePerVideo.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">
                  Total Portfolio Value
                </span>
                <span className="text-body-sm font-semibold text-success-DEFAULT">
                  ${results.estimatedValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
