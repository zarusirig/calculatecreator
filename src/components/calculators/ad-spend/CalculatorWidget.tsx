'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';

interface AdSpendInput {
  targetResults: number;
  costPerResult: number;
  timeframe: string;
  campaignType: string;
}

interface AdSpendResult {
  totalBudget: number;
  dailyBudget: number;
  weeklyBudget: number;
  monthlyBudget: number;
  projectedResults: number;
  budgetWithBuffer: number;
  interpretation: string;
}

export function AdSpendCalculatorWidget() {
  const [inputs, setInputs] = useState<AdSpendInput>({
    targetResults: 200,
    costPerResult: 15,
    timeframe: '30',
    campaignType: 'conversion',
  });

  const [results, setResults] = useState<AdSpendResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const timeframeOptions = [
    { value: '7', label: '7 Days (1 Week)' },
    { value: '14', label: '14 Days (2 Weeks)' },
    { value: '30', label: '30 Days (1 Month)' },
    { value: '60', label: '60 Days (2 Months)' },
    { value: '90', label: '90 Days (3 Months)' },
  ];

  const campaignTypeOptions = [
    { value: 'conversion', label: 'Conversion/Sales' },
    { value: 'traffic', label: 'Traffic/Clicks' },
    { value: 'awareness', label: 'Brand Awareness' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'leads', label: 'Lead Generation' },
  ];

  const handleInputChange = (field: keyof AdSpendInput, value: string | number) => {
    const processedValue = field === 'timeframe' || field === 'campaignType'
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

    if (!inputs.targetResults || inputs.targetResults <= 0) {
      newErrors.targetResults = 'Target results must be greater than 0';
    }
    if (!inputs.costPerResult || inputs.costPerResult <= 0) {
      newErrors.costPerResult = 'Cost per result must be greater than 0';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const days = parseInt(inputs.timeframe);
      const totalBudget = inputs.targetResults * inputs.costPerResult;

      const bufferMultiplier = inputs.campaignType === 'conversion' ? 1.25 : 1.15;
      const budgetWithBuffer = totalBudget * bufferMultiplier;

      const dailyBudget = budgetWithBuffer / days;
      const weeklyBudget = dailyBudget * 7;
      const monthlyBudget = dailyBudget * 30;

      let interpretation = '';

      if (inputs.campaignType === 'conversion') {
        interpretation = `To achieve ${inputs.targetResults.toLocaleString()} conversions over ${days} days at $${inputs.costPerResult.toFixed(2)} per conversion, you'll need a total budget of $${totalBudget.toLocaleString()}. We recommend $${budgetWithBuffer.toLocaleString()} (25% buffer) to account for TikTok's learning phase and optimization. This works out to $${dailyBudget.toFixed(2)} per day. Start with a smaller daily budget for the first 7 days to test and optimize before scaling.`;
      } else if (inputs.campaignType === 'traffic') {
        interpretation = `For ${inputs.targetResults.toLocaleString()} clicks at $${inputs.costPerResult.toFixed(2)} per click, budget $${budgetWithBuffer.toLocaleString()} over ${days} days ($${dailyBudget.toFixed(2)}/day). Traffic campaigns optimize quickly—expect costs to stabilize within 3-5 days. Monitor click quality and bounce rates to ensure you're getting valuable traffic.`;
      } else if (inputs.campaignType === 'awareness') {
        interpretation = `Brand awareness campaigns need $${budgetWithBuffer.toLocaleString()} to reach ${inputs.targetResults.toLocaleString()} results over ${days} days. At $${dailyBudget.toFixed(2)} per day, you'll maximize reach while staying within budget. Awareness campaigns benefit from longer run times (30+ days) for better frequency and recall.`;
      } else if (inputs.campaignType === 'engagement') {
        interpretation = `To generate ${inputs.targetResults.toLocaleString()} engagements, allocate $${budgetWithBuffer.toLocaleString()} over ${days} days ($${dailyBudget.toFixed(2)} daily). Engagement campaigns typically optimize quickly—test different content styles to find what resonates. High engagement can boost organic reach significantly.`;
      } else if (inputs.campaignType === 'leads') {
        interpretation = `Lead generation requires $${budgetWithBuffer.toLocaleString()} for ${inputs.targetResults.toLocaleString()} leads over ${days} days. Daily budget of $${dailyBudget.toFixed(2)} allows consistent lead flow. Focus on lead quality over quantity—track lead-to-customer conversion rates to optimize your spend.`;
      }

      setResults({
        totalBudget,
        dailyBudget,
        weeklyBudget,
        monthlyBudget,
        projectedResults: inputs.targetResults,
        budgetWithBuffer,
        interpretation,
      });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Ad Budget
      </h2>

      <InputField
        id="targetResults"
        label="Target Results"
        type="number"
        value={inputs.targetResults}
        onChange={(value) => handleInputChange('targetResults', value)}
        placeholder="e.g., 200"
        helperText="Number of results you want to achieve (conversions, clicks, etc.)"
        tooltip="Set realistic goals based on your business objectives and capacity"
        error={errors.targetResults}
        min={1}
        required
      />

      <InputField
        id="costPerResult"
        label="Expected Cost Per Result ($)"
        type="number"
        value={inputs.costPerResult}
        onChange={(value) => handleInputChange('costPerResult', value)}
        placeholder="e.g., 15"
        helperText="Estimated cost for each result based on benchmarks or past data"
        tooltip="Use industry benchmarks if you don't have historical data"
        error={errors.costPerResult}
        min={0}
        step={0.01}
        required
      />

      <SelectField
        id="campaignType"
        label="Campaign Type"
        value={inputs.campaignType}
        onChange={(value) => handleInputChange('campaignType', value)}
        options={campaignTypeOptions}
        helperText="Type of campaign you're running"
        error={errors.campaignType}
        required
      />

      <SelectField
        id="timeframe"
        label="Campaign Duration"
        value={inputs.timeframe}
        onChange={(value) => handleInputChange('timeframe', value)}
        options={timeframeOptions}
        helperText="How long you plan to run the campaign"
        error={errors.timeframe}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Budget
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl border-2 border-success-200">
            <p className="text-label-lg text-neutral-600 mb-2">Recommended Total Budget</p>
            <p className="text-display-md font-bold text-success-600">
              ${results.budgetWithBuffer.toLocaleString()}
            </p>
            <p className="text-body-sm text-neutral-600 mt-2">
              Includes optimization buffer for best results
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-sm text-neutral-600 mb-1">Daily Budget</p>
              <p className="text-heading-md font-semibold text-neutral-900">
                ${results.dailyBudget.toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-label-sm text-neutral-600 mb-1">Base Cost</p>
              <p className="text-heading-md font-semibold text-neutral-900">
                ${results.totalBudget.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg border border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-neutral-600">Weekly Budget</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${results.weeklyBudget.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-label-md text-neutral-600">Monthly Budget</span>
              <span className="text-heading-md font-semibold text-neutral-900">
                ${results.monthlyBudget.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 border-2 border-primary-200 rounded-lg">
            <p className="text-label-md font-semibold mb-2 text-primary-900">
              Expected Results: {results.projectedResults.toLocaleString()}
            </p>
            <p className="text-body-sm text-neutral-700">
              With the recommended budget and learning phase optimization
            </p>
          </div>

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
