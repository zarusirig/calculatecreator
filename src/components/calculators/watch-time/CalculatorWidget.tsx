'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateWatchTime, validateWatchTimeInput } from '@/lib/calculators/watch-time';
import type { WatchTimeInput, WatchTimeResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function WatchTimeCalculatorWidget() {
  const [inputs, setInputs] = useState<WatchTimeInput>({
    videoDuration: 30,
    avgWatchTime: 22,
    views: 50000,
  });

  const [results, setResults] = useState<WatchTimeResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof WatchTimeInput, value: string | number) => {
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
    const validation = validateWatchTimeInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateWatchTime(inputs);
      setResults(result);
      trackCalculation('watch-time', { ...inputs }, { retentionRate: result.retentionRate, rating: result.rating });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Watch Time</h2>

      <InputField
        id="videoDuration"
        label="Video Duration (seconds)"
        type="number"
        value={inputs.videoDuration}
        onChange={(value) => handleInputChange('videoDuration', value)}
        placeholder="e.g., 30"
        helperText="Total length of your video"
        error={errors.videoDuration}
        min={1}
        max={600}
        required
      />

      <InputField
        id="avgWatchTime"
        label="Average Watch Time (seconds)"
        type="number"
        value={inputs.avgWatchTime}
        onChange={(value) => handleInputChange('avgWatchTime', value)}
        placeholder="e.g., 22"
        helperText="From TikTok Analytics"
        error={errors.avgWatchTime}
        min={0}
        required
      />

      <InputField
        id="views"
        label="Total Views"
        type="number"
        value={inputs.views}
        onChange={(value) => handleInputChange('views', value)}
        placeholder="e.g., 50000"
        helperText="Total views on the video"
        error={errors.views}
        min={1}
        required
      />

      <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
        Calculate Watch Time
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="number"
            title="Total Watch Hours"
            subtitle={`${results.rating.replace('-', ' ').toUpperCase()} Retention`}
          />

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-neutral-200 text-center">
              <p className="text-heading-sm font-semibold text-neutral-900">{results.retentionRate.toFixed(1)}%</p>
              <p className="text-label-sm text-neutral-600">Retention Rate</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-neutral-200 text-center">
              <p className="text-heading-sm font-semibold text-neutral-900">{results.totalWatchHours.toFixed(1)}</p>
              <p className="text-label-sm text-neutral-600">Watch Hours</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
