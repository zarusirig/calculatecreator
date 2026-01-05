'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import {
  calculatePostingTime,
  validatePostingTimeInput,
} from '@/lib/calculators/posting-time';
import type {
  PostingTimeInput,
  PostingTimeResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function PostingTimeCalculatorWidget() {
  const [inputs, setInputs] = useState<PostingTimeInput>({
    timezone: 'EST',
    audienceRegion: 'north-america',
    contentType: 'entertainment',
  });

  const [results, setResults] = useState<PostingTimeResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof PostingTimeInput, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validatePostingTimeInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculatePostingTime(inputs);
      setResults(result);

      trackCalculation(
        'posting-time',
        { ...inputs },
        { optimalTimesCount: result.optimalTimes.length }
      );

      setIsCalculating(false);
    }, 500);
  };

  const timezoneOptions = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
  ];

  const regionOptions = [
    { value: 'north-america', label: 'North America' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia' },
    { value: 'global', label: 'Global Audience' },
  ];

  const contentOptions = [
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'educational', label: 'Educational' },
    { value: 'promotional', label: 'Promotional' },
    { value: 'inspirational', label: 'Inspirational' },
  ];

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Find Your Best Posting Times
      </h2>

      <SelectField
        id="timezone"
        label="Your Timezone"
        value={inputs.timezone}
        onChange={(value) => handleInputChange('timezone', value)}
        options={timezoneOptions}
        helperText="Select your local timezone"
        error={errors.timezone}
        required
      />

      <SelectField
        id="audienceRegion"
        label="Target Audience Region"
        value={inputs.audienceRegion}
        onChange={(value) => handleInputChange('audienceRegion', value)}
        options={regionOptions}
        helperText="Where is your audience located?"
        error={errors.audienceRegion}
        required
      />

      <SelectField
        id="contentType"
        label="Content Type"
        value={inputs.contentType}
        onChange={(value) => handleInputChange('contentType', value)}
        options={contentOptions}
        helperText="What type of content do you create?"
        error={errors.contentType}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Optimal Times
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg border border-primary-200">
            <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Best Posting Times
            </h3>
            <div className="space-y-2">
              {results.optimalTimes.map((time, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white rounded border border-neutral-200"
                >
                  <span className="font-semibold text-neutral-900">{time.time}</span>
                  <span className="text-primary-600 font-medium">Score: {time.score}</span>
                </div>
              ))}
            </div>
          </div>

          {results.worstTimes && results.worstTimes.length > 0 && (
            <div className="p-4 bg-error-50 rounded-lg border border-error-200">
              <h4 className="text-label-md font-semibold text-neutral-900 mb-2">
                Times to Avoid
              </h4>
              <ul className="space-y-1">
                {results.worstTimes.map((time, index) => (
                  <li key={index} className="text-body-sm text-neutral-700">
                    <strong>{time.time}:</strong> {time.reason}
                  </li>
                ))}
              </ul>
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
