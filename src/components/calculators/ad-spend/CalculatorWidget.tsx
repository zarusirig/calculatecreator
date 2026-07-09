'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { formatCurrency, formatNumber } from '@/lib/utils/format';

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

    const days = parseInt(inputs.timeframe);
    const totalBudget = inputs.targetResults * inputs.costPerResult;

    const bufferMultiplier = inputs.campaignType === 'conversion' ? 1.25 : 1.15;
    const budgetWithBuffer = totalBudget * bufferMultiplier;

    const dailyBudget = budgetWithBuffer / days;
    const weeklyBudget = dailyBudget * 7;
    const monthlyBudget = dailyBudget * 30;

    const targetResultsFmt = formatNumber(inputs.targetResults);
    const costPerResultFmt = formatCurrency(inputs.costPerResult, 'USD', 'en-US', 2);
    const totalBudgetFmt = formatCurrency(totalBudget, 'USD', 'en-US', 0);
    const budgetWithBufferFmt = formatCurrency(budgetWithBuffer, 'USD', 'en-US', 0);
    const dailyBudgetFmt = formatCurrency(dailyBudget, 'USD', 'en-US', 2);

    let interpretation = '';

    if (inputs.campaignType === 'conversion') {
      interpretation = `To achieve ${targetResultsFmt} conversions over ${days} days at ${costPerResultFmt} per conversion, you'll need a total budget of ${totalBudgetFmt}. We recommend ${budgetWithBufferFmt} (25% buffer) to account for TikTok's learning phase and optimization. This works out to ${dailyBudgetFmt} per day. Start with a smaller daily budget for the first 7 days to test and optimize before scaling.`;
    } else if (inputs.campaignType === 'traffic') {
      interpretation = `For ${targetResultsFmt} clicks at ${costPerResultFmt} per click, budget ${budgetWithBufferFmt} over ${days} days (${dailyBudgetFmt}/day). Traffic campaigns optimize quickly—expect costs to stabilize within 3-5 days. Monitor click quality and bounce rates to ensure you're getting valuable traffic.`;
    } else if (inputs.campaignType === 'awareness') {
      interpretation = `Brand awareness campaigns need ${budgetWithBufferFmt} to reach ${targetResultsFmt} results over ${days} days. At ${dailyBudgetFmt} per day, you'll maximize reach while staying within budget. Awareness campaigns benefit from longer run times (30+ days) for better frequency and recall.`;
    } else if (inputs.campaignType === 'engagement') {
      interpretation = `To generate ${targetResultsFmt} engagements, allocate ${budgetWithBufferFmt} over ${days} days (${dailyBudgetFmt} daily). Engagement campaigns typically optimize quickly—test different content styles to find what resonates. High engagement can boost organic reach significantly.`;
    } else if (inputs.campaignType === 'leads') {
      interpretation = `Lead generation requires ${budgetWithBufferFmt} for ${targetResultsFmt} leads over ${days} days. Daily budget of ${dailyBudgetFmt} allows consistent lead flow. Focus on lead quality over quantity—track lead-to-customer conversion rates to optimize your spend.`;
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
        className="w-full mt-6"
      >
        Calculate Budget
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Recommended Budget Breakdown"
            subtitle="Includes optimization buffer for best results"
            rows={[
              { label: 'Recommended Total Budget', value: formatCurrency(results.budgetWithBuffer, 'USD', 'en-US', 0), hint: 'With optimization buffer' },
              { label: 'Base Cost', value: formatCurrency(results.totalBudget, 'USD', 'en-US', 0) },
              { label: 'Daily Budget', value: formatCurrency(results.dailyBudget, 'USD', 'en-US', 2) },
              { label: 'Weekly Budget', value: formatCurrency(results.weeklyBudget, 'USD', 'en-US', 2) },
              { label: 'Monthly Budget', value: formatCurrency(results.monthlyBudget, 'USD', 'en-US', 2) },
              { label: 'Expected Results', value: formatNumber(results.projectedResults), hint: 'With the recommended budget and learning-phase optimization' },
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
