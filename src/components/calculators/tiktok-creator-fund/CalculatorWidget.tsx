'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay, type ResultListRow } from '@/components/calculator/ResultsDisplay';
import { calculateCreatorFund, validateCreatorFundInput } from '@/lib/calculators/creator-fund';
import type { CreatorFundInput, CreatorFundResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';
import { formatCurrency } from '@/lib/utils/format';

export function CreatorFundCalculatorWidget() {
  const [inputs, setInputs] = useState<CreatorFundInput>({
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
  });

  const [results, setResults] = useState<CreatorFundResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    const result = calculateCreatorFund(inputs);
    setResults(result);
    trackCalculation(
      'creator-fund',
      { ...inputs },
      { min_monthly: result.minMonthly, max_monthly: result.maxMonthly, avg_rpm: result.avgRPM }
    );
  };

  const rows: ResultListRow[] = results
    ? [
        {
          label: 'Legacy Monthly Estimate',
          value: `${formatCurrency(results.minMonthly, 'USD', 'en-US', 2)}–${formatCurrency(results.maxMonthly, 'USD', 'en-US', 2)}`,
          hint: 'Estimated monthly payout range',
        },
        {
          label: 'Annual Estimate',
          value: `${formatCurrency(results.minAnnual, 'USD', 'en-US', 2)}–${formatCurrency(results.maxAnnual, 'USD', 'en-US', 2)}`,
          hint: 'Projected annual payout range',
        },
        {
          label: 'Average RPM',
          value: formatCurrency(results.avgRPM, 'USD', 'en-US', 3),
          hint: 'Revenue per 1,000 views',
        },
      ]
    : [];

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
        className="w-full mt-6"
      >
        Estimate Legacy Earnings
      </Button>

      {results && (
        <div className="mt-6 space-y-4 animate-slide-up">
          <ResultsDisplay
            subtype="list"
            title="Legacy Creator Fund Estimate"
            rows={rows}
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
