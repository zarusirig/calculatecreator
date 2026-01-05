'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateLiveGifts, validateLiveGiftsInput } from '@/lib/calculators/live-gifts';
import type { LiveGiftsInput, LiveGiftsResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function LiveGiftsCalculatorWidget() {
  const [inputs, setInputs] = useState<LiveGiftsInput>({
    avgViewers: 100,
    avgStreamDuration: 60,
    giftsPerViewer: 0.5,
  });

  const [results, setResults] = useState<LiveGiftsResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof LiveGiftsInput, value: string | number) => {
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
    const validation = validateLiveGiftsInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateLiveGifts(inputs);
      setResults(result);
      trackCalculation('live-gifts', { ...inputs }, { diamondsEarned: result.diamondsEarned, usdEarnings: result.usdEarnings });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate LIVE Earnings</h2>

      <InputField
        id="avgViewers"
        label="Average Concurrent Viewers"
        type="number"
        value={inputs.avgViewers}
        onChange={(value) => handleInputChange('avgViewers', value)}
        placeholder="e.g., 100"
        helperText="Average viewers during your stream"
        error={errors.avgViewers}
        min={1}
        required
      />

      <InputField
        id="avgStreamDuration"
        label="Stream Duration (minutes)"
        type="number"
        value={inputs.avgStreamDuration}
        onChange={(value) => handleInputChange('avgStreamDuration', value)}
        placeholder="e.g., 60"
        helperText="How long you typically stream"
        error={errors.avgStreamDuration}
        min={1}
        required
      />

      <InputField
        id="giftsPerViewer"
        label="Gifts Per Viewer"
        type="number"
        value={inputs.giftsPerViewer}
        onChange={(value) => handleInputChange('giftsPerViewer', value)}
        placeholder="e.g., 0.5"
        helperText="Avg gifts received per viewer per stream"
        tooltip="0.5 means half of viewers gift on average"
        error={errors.giftsPerViewer}
        min={0}
        step={0.1}
        required
      />

      <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">
        Calculate Earnings
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="Estimated Earnings"
            subtitle="Per Stream"
          />

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-neutral-200 text-center">
              <p className="text-heading-sm font-semibold text-neutral-900">{results.diamondsEarned.toLocaleString()}</p>
              <p className="text-label-sm text-neutral-600">Diamonds Earned</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-neutral-200 text-center">
              <p className="text-heading-sm font-semibold text-primary-600">${results.monthlyPotential.toLocaleString()}</p>
              <p className="text-label-sm text-neutral-600">Monthly Potential</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
