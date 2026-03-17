'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { calculateCampaignROI, validateCampaignROIInput } from '@/lib/calculators/campaign-roi';
import type { CampaignROIInput, CampaignROIResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function CampaignROICalculatorWidget() {
  const [inputs, setInputs] = useState<CampaignROIInput>({
    campaignCost: 2000,
    revenue: 6000,
  });

  const [results, setResults] = useState<CampaignROIResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CampaignROIInput, value: string | number) => {
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
    const validation = validateCampaignROIInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCampaignROI(inputs);
      setResults(result);
      trackCalculation('campaign-roi', { ...inputs }, { roi: result.roi, roas: result.roas });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Campaign ROI
      </h2>

      <InputField
        id="campaignCost"
        label="Campaign Cost ($)"
        type="number"
        value={inputs.campaignCost}
        onChange={(value) => handleInputChange('campaignCost', value)}
        placeholder="e.g., 2000"
        helperText="Total cost of your TikTok campaign (ads, content, tools)"
        tooltip="Include all costs: ad spend, video production, influencer fees, agency costs"
        error={errors.campaignCost}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="revenue"
        label="Revenue Generated ($)"
        type="number"
        value={inputs.revenue}
        onChange={(value) => handleInputChange('revenue', value)}
        placeholder="e.g., 6000"
        helperText="Total revenue directly attributed to this campaign"
        tooltip="Use TikTok pixel, UTM codes, or promo codes to track campaign revenue"
        error={errors.revenue}
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
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl border-2 border-success-200">
            <p className="text-label-lg text-neutral-600 mb-2">Return on Investment (ROI)</p>
            <p className={`text-display-md font-bold ${results.roi >= 0 ? 'text-success-600' : 'text-error-600'}`}>
              {results.roi > 0 ? '+' : ''}{results.roi.toFixed(1)}%
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              {results.roi >= 0 ? 'Profit' : 'Loss'}: ${Math.abs(results.profit).toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Return on Ad Spend (ROAS)</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                {results.roas.toFixed(2)}×
              </span>
            </div>
            <p className="text-body-xs text-neutral-500">For every $1 spent, you earned ${results.roas.toFixed(2)}</p>
          </div>

          {results.rating && (
            <div className={`p-4 rounded-lg border-2 ${
              results.rating === 'excellent' ? 'bg-success-50 border-success-300' :
              results.rating === 'good' ? 'bg-primary-50 border-primary-300' :
              results.rating === 'break-even' ? 'bg-neutral-50 border-neutral-300' :
              'bg-error-50 border-error-300'
            }`}>
              <p className="text-label-md font-semibold mb-1">
                Performance: {results.rating === 'break-even' ? 'Break-Even' : results.rating.charAt(0).toUpperCase() + results.rating.slice(1)}
              </p>
              <p className="text-body-sm text-neutral-600">
                {results.rating === 'excellent' && 'Strong ROI. This campaign is performing well and may justify more budget if results stay consistent.'}
                {results.rating === 'good' && 'Solid ROI. Campaign is profitable and worth continuing.'}
                {results.rating === 'break-even' && 'Breaking even. Optimize before scaling further.'}
                {results.rating === 'loss' && 'Losing money. Pause and optimize targeting, creative, or landing page.'}
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
