'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateContentCalendarROI, validateContentCalendarROIInput } from '@/lib/calculators/content-calendar-roi';
import type { ContentCalendarROIInput, ContentCalendarROIResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function ContentCalendarROICalculatorWidget() {
  const [inputs, setInputs] = useState<ContentCalendarROIInput>({
    hoursSpentPlanning: 4,
    hourlyRate: 50,
    videosPlanned: 20,
    avgPerformanceIncrease: 25,
    avgRevenuePerVideo: 100,
  });

  const [results, setResults] = useState<ContentCalendarROIResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ContentCalendarROIInput, value: string | number) => {
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
    const validation = validateContentCalendarROIInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateContentCalendarROI(inputs);
      setResults(result);

      trackCalculation(
        'content-calendar-roi',
        { ...inputs },
        { roi: result.roi, roiPercentage: result.roiPercentage }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Planning ROI
      </h2>

      <InputField
        id="hoursSpentPlanning"
        label="Planning Time (hours)"
        type="number"
        value={inputs.hoursSpentPlanning}
        onChange={(value) => handleInputChange('hoursSpentPlanning', value)}
        placeholder="e.g., 4"
        helperText="Hours spent planning content"
        error={errors.hoursSpentPlanning}
        min={0}
        step={0.5}
        required
      />

      <InputField
        id="hourlyRate"
        label="Your Hourly Rate ($)"
        type="number"
        value={inputs.hourlyRate}
        onChange={(value) => handleInputChange('hourlyRate', value)}
        placeholder="e.g., 50"
        helperText="Value of your time per hour"
        error={errors.hourlyRate}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="videosPlanned"
        label="Videos Planned"
        type="number"
        value={inputs.videosPlanned}
        onChange={(value) => handleInputChange('videosPlanned', value)}
        placeholder="e.g., 20"
        helperText="Number of videos in your calendar"
        error={errors.videosPlanned}
        min={1}
        required
      />

      <InputField
        id="avgPerformanceIncrease"
        label="Performance Increase (%)"
        type="number"
        value={inputs.avgPerformanceIncrease}
        onChange={(value) => handleInputChange('avgPerformanceIncrease', value)}
        placeholder="e.g., 25"
        helperText="Expected improvement from planning"
        error={errors.avgPerformanceIncrease}
        min={0}
        max={1000}
        step={1}
        required
      />

      <InputField
        id="avgRevenuePerVideo"
        label="Revenue per Video ($)"
        type="number"
        value={inputs.avgRevenuePerVideo}
        onChange={(value) => handleInputChange('avgRevenuePerVideo', value)}
        placeholder="e.g., 100"
        helperText="Average earnings per video"
        error={errors.avgRevenuePerVideo}
        min={0}
        step={0.01}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate ROI
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="ROI Percentage"
            subtitle={results.roiPercentage >= 0 ? 'POSITIVE ROI' : 'NEGATIVE ROI'}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              ROI Breakdown
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Planning Cost</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.planningCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-neutral-600">Additional Revenue</span>
                <span className="text-body-sm font-semibold text-neutral-900">
                  ${results.additionalRevenue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-body-sm text-neutral-600">Net Profit</span>
                <span className={`text-body-sm font-semibold ${results.roi >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                  ${results.roi.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
