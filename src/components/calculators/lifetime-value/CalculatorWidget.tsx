'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay, type ResultListRow } from '@/components/calculator/ResultsDisplay';
import { calculateLTV, validateLTVInput } from '@/lib/calculators/lifetime-value';
import type { LTVInput, LTVResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { formatCurrency } from '@/lib/utils/format';

export function LifetimeValueCalculatorWidget() {
  const [inputs, setInputs] = useState<LTVInput>({
    avgOrderValue: 75,
    purchaseFrequency: 2,
    customerLifespan: 24,
  });

  const [results, setResults] = useState<LTVResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof LTVInput, value: string | number) => {
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
    const validation = validateLTVInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const result = calculateLTV(inputs);
    setResults(result);
    trackCalculation('lifetime-value', { ...inputs }, { ltv: result.ltv });
  };

  const rows: ResultListRow[] = results
    ? [
        {
          label: 'Customer Lifetime Value',
          value: formatCurrency(results.ltv, 'USD', 'en-US', 2),
          hint: 'Total value per customer',
        },
        {
          label: 'Monthly Value per Customer',
          value: formatCurrency(results.monthlyValue, 'USD', 'en-US', 2),
          hint: 'Average revenue per customer per month',
        },
        {
          label: 'Total Revenue Over Lifetime',
          value: formatCurrency(results.totalRevenue, 'USD', 'en-US', 2),
          hint: 'Expected total purchases from one customer',
        },
        {
          label: 'Maximum CAC (at 3:1 ratio)',
          value: formatCurrency(results.ltv / 3, 'USD', 'en-US', 2),
          hint: 'You can spend up to this amount to acquire a customer profitably',
        },
      ]
    : [];

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Customer LTV
      </h2>

      <InputField
        id="avgOrderValue"
        label="Average Order Value ($)"
        type="number"
        value={inputs.avgOrderValue}
        onChange={(value) => handleInputChange('avgOrderValue', value)}
        placeholder="e.g., 75"
        helperText="Average amount a customer spends per order"
        tooltip="Calculate by dividing total revenue by number of orders"
        error={errors.avgOrderValue}
        min={0}
        step={0.01}
        required
      />

      <InputField
        id="purchaseFrequency"
        label="Purchase Frequency (per month)"
        type="number"
        value={inputs.purchaseFrequency}
        onChange={(value) => handleInputChange('purchaseFrequency', value)}
        placeholder="e.g., 2"
        helperText="How many times a customer buys per month on average"
        tooltip="Divide number of purchases by number of unique customers, then divide by months"
        error={errors.purchaseFrequency}
        min={0}
        step={0.1}
        required
      />

      <InputField
        id="customerLifespan"
        label="Customer Lifespan (months)"
        type="number"
        value={inputs.customerLifespan}
        onChange={(value) => handleInputChange('customerLifespan', value)}
        placeholder="e.g., 24"
        helperText="Average number of months a customer stays active"
        tooltip="Use cohort analysis to track how long customers continue purchasing. If new, use industry averages."
        error={errors.customerLifespan}
        min={1}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        className="w-full mt-6"
      >
        Calculate LTV
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Your LTV Results"
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
