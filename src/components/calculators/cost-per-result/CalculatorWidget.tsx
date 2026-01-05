'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';

interface CostPerResultInput {
  totalSpend: number;
  results: number;
  resultType: string;
}

interface CostPerResultResult {
  costPerResult: number;
  resultsPerDollar: number;
  projectedCost1000: number;
  rating: string;
  interpretation: string;
}

export function CostPerResultCalculatorWidget() {
  const [inputs, setInputs] = useState<CostPerResultInput>({
    totalSpend: 1000,
    results: 150,
    resultType: 'click',
  });

  const [results, setResults] = useState<CostPerResultResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const resultTypeOptions = [
    { value: 'click', label: 'Clicks' },
    { value: 'impression', label: 'Impressions' },
    { value: 'conversion', label: 'Conversions' },
    { value: 'lead', label: 'Leads' },
    { value: 'view', label: 'Video Views' },
    { value: 'engagement', label: 'Engagements' },
  ];

  const handleInputChange = (field: keyof CostPerResultInput, value: string | number) => {
    const processedValue = field === 'resultType'
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
    const newErrors: Record<string, string> = {};

    if (!inputs.totalSpend || inputs.totalSpend <= 0) {
      newErrors.totalSpend = 'Total spend must be greater than 0';
    }
    if (!inputs.results || inputs.results <= 0) {
      newErrors.results = 'Results must be greater than 0';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const costPerResult = inputs.totalSpend / inputs.results;
      const resultsPerDollar = inputs.results / inputs.totalSpend;
      const projectedCost1000 = (costPerResult * 1000);

      let rating = 'average';
      let interpretation = '';

      if (inputs.resultType === 'click') {
        if (costPerResult <= 0.30) rating = 'excellent';
        else if (costPerResult <= 0.60) rating = 'good';
        else if (costPerResult <= 1.00) rating = 'average';
        else rating = 'poor';
        interpretation = `At $${costPerResult.toFixed(3)} per click, you're ${rating === 'excellent' ? 'achieving outstanding efficiency' : rating === 'good' ? 'performing well' : rating === 'average' ? 'meeting industry average' : 'above typical benchmarks'}. TikTok CPC typically ranges from $0.20-$1.00. ${rating === 'poor' ? 'Consider improving targeting and creative to reduce costs.' : 'Continue monitoring and optimizing your campaigns.'}`;
      } else if (inputs.resultType === 'conversion') {
        if (costPerResult <= 10) rating = 'excellent';
        else if (costPerResult <= 25) rating = 'good';
        else if (costPerResult <= 50) rating = 'average';
        else rating = 'poor';
        interpretation = `Your cost per conversion of $${costPerResult.toFixed(2)} is ${rating}. E-commerce conversions on TikTok typically cost $10-$50. ${rating === 'excellent' ? 'This is highly profitable territory—consider scaling.' : rating === 'poor' ? 'This may not be sustainable. Optimize your funnel and creative.' : 'Continue monitoring ROI to ensure profitability.'}`;
      } else if (inputs.resultType === 'lead') {
        if (costPerResult <= 5) rating = 'excellent';
        else if (costPerResult <= 15) rating = 'good';
        else if (costPerResult <= 30) rating = 'average';
        else rating = 'poor';
        interpretation = `At $${costPerResult.toFixed(2)} per lead, you're in ${rating} territory. TikTok lead costs vary widely by industry ($5-$50+). ${rating === 'excellent' ? 'Excellent efficiency—make sure lead quality matches quantity.' : rating === 'poor' ? 'These leads may be too expensive. Test different targeting or offers.' : 'Evaluate lead quality alongside cost.'}`;
      } else if (inputs.resultType === 'view') {
        if (costPerResult <= 0.01) rating = 'excellent';
        else if (costPerResult <= 0.03) rating = 'good';
        else if (costPerResult <= 0.06) rating = 'average';
        else rating = 'poor';
        interpretation = `Video views at $${costPerResult.toFixed(4)} each ${rating === 'excellent' ? 'are highly efficient' : rating === 'poor' ? 'may be too expensive for brand awareness' : 'align with platform benchmarks'}. TikTok CPV typically ranges from $0.01-$0.06. ${rating === 'excellent' ? 'Great for brand awareness campaigns.' : rating === 'poor' ? 'Consider improving creative for better view rates.' : 'Monitor engagement quality alongside views.'}`;
      } else if (inputs.resultType === 'engagement') {
        if (costPerResult <= 0.05) rating = 'excellent';
        else if (costPerResult <= 0.15) rating = 'good';
        else if (costPerResult <= 0.30) rating = 'average';
        else rating = 'poor';
        interpretation = `Engagements at $${costPerResult.toFixed(3)} each show ${rating} performance. TikTok CPE ranges from $0.05-$0.30. ${rating === 'excellent' ? 'Highly engaging content—leverage this for organic growth.' : rating === 'poor' ? 'Content may not be resonating with your audience.' : 'Decent engagement—optimize for quality interactions.'}`;
      } else {
        interpretation = `Your cost per result is $${costPerResult.toFixed(3)}. Based on ${inputs.results.toLocaleString()} results from $${inputs.totalSpend.toLocaleString()} spend, you're getting ${resultsPerDollar.toFixed(2)} results per dollar spent.`;
      }

      setResults({
        costPerResult,
        resultsPerDollar,
        projectedCost1000,
        rating,
        interpretation,
      });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Cost Per Result
      </h2>

      <InputField
        id="totalSpend"
        label="Total Ad Spend ($)"
        type="number"
        value={inputs.totalSpend}
        onChange={(value) => handleInputChange('totalSpend', value)}
        placeholder="e.g., 1000"
        helperText="Total amount spent on your TikTok ad campaign"
        tooltip="Include all ad spend for the period you're measuring"
        error={errors.totalSpend}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="results"
        label="Total Results"
        type="number"
        value={inputs.results}
        onChange={(value) => handleInputChange('results', value)}
        placeholder="e.g., 150"
        helperText="Number of results achieved (clicks, conversions, views, etc.)"
        tooltip="Use the result metric that matches your campaign objective"
        error={errors.results}
        min={0}
        required
      />

      <SelectField
        id="resultType"
        label="Result Type"
        value={inputs.resultType}
        onChange={(value) => handleInputChange('resultType', value)}
        options={resultTypeOptions}
        helperText="Type of result you're measuring"
        error={errors.resultType}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Cost Per Result
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border-2 border-primary-200">
            <p className="text-label-lg text-neutral-600 mb-2">Cost Per Result</p>
            <p className="text-display-md font-bold text-primary-600">
              ${results.costPerResult < 1 ? results.costPerResult.toFixed(3) : results.costPerResult.toFixed(2)}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              {inputs.results.toLocaleString()} results from ${inputs.totalSpend.toLocaleString()} spend
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-sm text-neutral-600 mb-1">Results per $1</p>
              <p className="text-heading-md font-semibold text-neutral-900">
                {results.resultsPerDollar.toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-sm text-neutral-600 mb-1">Cost for 1,000</p>
              <p className="text-heading-md font-semibold text-neutral-900">
                ${results.projectedCost1000.toLocaleString()}
              </p>
            </div>
          </div>

          {results.rating && (
            <div className={`p-4 rounded-lg border-2 ${
              results.rating === 'excellent' ? 'bg-success-50 border-success-300' :
              results.rating === 'good' ? 'bg-primary-50 border-primary-300' :
              results.rating === 'average' ? 'bg-neutral-50 border-neutral-300' :
              'bg-warning-50 border-warning-300'
            }`}>
              <p className="text-label-md font-semibold mb-1">
                Performance: {results.rating.charAt(0).toUpperCase() + results.rating.slice(1)}
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
