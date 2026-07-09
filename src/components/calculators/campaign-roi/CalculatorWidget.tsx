'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { formatCurrency, formatNumber, formatPercent } from '@/lib/utils/format';
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

    const result = calculateCampaignROI(inputs);
    setResults(result);
    trackCalculation('campaign-roi', { ...inputs }, { roi: result.roi, roas: result.roas });
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
        className="w-full mt-6"
      >
        Calculate ROI
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Campaign ROI"
            rows={[
              { label: 'Return on Investment (ROI)', value: `${results.roi > 0 ? '+' : ''}${formatPercent(results.roi, 1)}`, hint: `${results.roi >= 0 ? 'Profit' : 'Loss'}: ${formatCurrency(Math.abs(results.profit), 'USD', 'en-US', 2)}` },
              { label: 'Return on Ad Spend (ROAS)', value: `${formatNumber(results.roas, 2)}×`, hint: `For every $1 spent, you earned ${formatCurrency(results.roas, 'USD', 'en-US', 2)}` },
              { label: 'Performance', value: results.rating === 'break-even' ? 'Break-Even' : results.rating.charAt(0).toUpperCase() + results.rating.slice(1), hint: results.rating === 'excellent' ? 'Strong ROI. This campaign is performing well and may justify more budget if results stay consistent.' : results.rating === 'good' ? 'Solid ROI. Campaign is profitable and worth continuing.' : results.rating === 'break-even' ? 'Breaking even. Optimize before scaling further.' : 'Losing money. Pause and optimize targeting, creative, or landing page.' },
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
