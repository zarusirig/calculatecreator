'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { Loading, ProgressBar } from '@/components/ui/Loading';
import { calculateCreatorFund, validateCreatorFundInput } from '@/lib/calculators/creator-fund';
import type { CreatorFundInput, CreatorFundResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export function CreatorFundCalculatorWidget() {
  const [inputs, setInputs] = useState<CreatorFundInput>({
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
  });

  const [results, setResults] = useState<CreatorFundResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationProgress, setCalculationProgress] = useState(0);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(([value, label]) => ({
    value,
    label,
  }));

  const handleInputChange = (field: keyof CreatorFundInput, value: string | number) => {
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
    const validation = validateCreatorFundInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setCalculationProgress(0);

    const progressInterval = setInterval(() => {
      setCalculationProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 15;
      });
    }, 50);

    setTimeout(() => {
      clearInterval(progressInterval);
      setCalculationProgress(100);

      const result = calculateCreatorFund(inputs);
      setResults(result);
      trackCalculation(
        'creator-fund',
        { ...inputs },
        { min_monthly: result.minMonthly, max_monthly: result.maxMonthly, avg_rpm: result.avgRPM }
      );

      setTimeout(() => {
        setIsCalculating(false);
        setCalculationProgress(0);
      }, 200);
    }, 600);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit animate-scale-in overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
      <h2 className="text-heading-lg font-display font-bold text-neutral-900 mb-6 relative">
        Estimate Legacy Creator Fund Earnings
      </h2>

      <InputField
        id="monthlyViews"
        label="Monthly Video Views"
        type="number"
        value={inputs.monthlyViews}
        onChange={(value) => handleInputChange('monthlyViews', value)}
        placeholder="e.g., 500000"
        helperText="Estimated monthly views used in the legacy Creator Fund model"
        tooltip="Historical Creator Fund threshold: 100,000 views in the last 30 days"
        error={errors.monthlyViews}
        min={100000}
        required
      />

      <InputField
        id="engagementRate"
        label="Engagement Rate (%)"
        type="number"
        value={inputs.engagementRate}
        onChange={(value) => handleInputChange('engagementRate', value)}
        placeholder="e.g., 5.0"
        helperText="Your average engagement rate"
        tooltip="Higher engagement = higher RPM = more earnings. Use our Engagement Rate Calculator if unsure."
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

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Estimate Legacy Earnings
      </Button>

      {isCalculating && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl border-2 border-neutral-200">
            <Loading variant="dots" size="lg" className="mb-4" />
            <p className="text-label-lg text-neutral-600 mb-3">Estimating Legacy Payouts...</p>
            <ProgressBar progress={calculationProgress} className="max-w-xs mx-auto" />
          </div>
        </div>
      )}

      {results && !isCalculating && (
        <div className="mt-6 space-y-4 animate-slide-up">
          <div className="relative text-center p-8 bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 rounded-2xl border-2 border-white/30 overflow-hidden glow-purple">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-gradient-shift"></div>
            <p className="text-label-lg text-white/90 mb-2 font-medium relative z-10">Legacy Monthly Estimate</p>
            <p className="text-display-md font-display font-bold text-white drop-shadow-lg relative z-10 font-mono">
              ${results.minMonthly.toFixed(2)}–${results.maxMonthly.toFixed(2)}
            </p>
            <p className="text-body-sm text-white/80 mt-2 relative z-10">
              Annual: ${results.minAnnual.toFixed(2)}–${results.maxAnnual.toFixed(2)}
            </p>
          </div>

          <div className="p-4 glass rounded-xl border border-primary-200/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-700 font-medium">Your Avg RPM</span>
              <span className="text-heading-md font-display font-bold text-primary-600 font-mono">
                ${results.avgRPM.toFixed(3)}
              </span>
            </div>
            <p className="text-body-xs text-neutral-600">Revenue per 1,000 views</p>
          </div>

          {results.interpretation && (
            <div className="p-4 glass-dark rounded-xl border border-white/10 backdrop-blur-xl">
              <p className="text-body-md text-white/90 leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
