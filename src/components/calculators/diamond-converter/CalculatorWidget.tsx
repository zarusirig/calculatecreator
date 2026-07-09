'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay, type ResultListRow } from '@/components/calculator/ResultsDisplay';
import { Gem } from 'lucide-react';
import { calculateDiamondConverter, validateDiamondConverterInput } from '@/lib/calculators/diamond-converter';
import type { DiamondConverterInput, DiamondConverterResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { formatCurrency, formatNumber } from '@/lib/utils/format';

export function DiamondConverterCalculatorWidget() {
  const [inputs, setInputs] = useState<DiamondConverterInput>({ diamonds: 1000, currency: 'USD' });
  const [results, setResults] = useState<DiamondConverterResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | number) => {
    const processedValue = field === 'diamonds'
      ? (typeof value === 'string' ? parseInt(value) || 0 : value)
      : value;
    setInputs(prev => ({ ...prev, [field]: processedValue }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateDiamondConverterInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const result = calculateDiamondConverter(inputs);
    setResults(result);
    trackCalculation('diamond-converter', inputs, {
      usd_value: result.usdValue,
      converted_value: result.convertedValue,
      currency: result.currency
    });
  };

  const currencyOptions = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'EUR', label: 'EUR (€)' },
    { value: 'GBP', label: 'GBP (£)' },
    { value: 'CAD', label: 'CAD (C$)' },
    { value: 'AUD', label: 'AUD (A$)' },
  ];

  const rows: ResultListRow[] = results
    ? (() => {
        const payoutRate = Number(results.additionalMetrics?.payoutRate ?? 0.005);
        const diamondsPerDollar = Number(results.additionalMetrics?.diamondsPerDollar ?? 200);
        const coinsEquivalent = Number(results.additionalMetrics?.coinsEquivalent ?? results.equivalentCoins);
        return [
          {
            label: 'USD Value',
            value: formatCurrency(results.usdValue, 'USD', 'en-US', 2),
            hint: 'Value in US Dollars',
          },
          {
            label: `${results.currency} Value`,
            value: formatCurrency(results.convertedValue, results.currency, 'en-US', 2),
            hint: `Value in ${results.currency}`,
          },
          {
            label: 'Equivalent Coins',
            value: formatNumber(results.equivalentCoins),
            hint: 'TikTok coins needed',
          },
          {
            label: 'Payout Rate',
            value: formatCurrency(payoutRate, 'USD', 'en-US', 3),
            hint: 'Per diamond',
          },
          {
            label: 'Diamonds per Dollar',
            value: formatNumber(diamondsPerDollar),
            hint: 'Conversion rate',
          },
          {
            label: 'Coin Equivalent',
            value: formatNumber(coinsEquivalent),
            hint: 'Coins for these diamonds',
          },
        ];
      })()
    : [];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6 mb-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <Gem size={24} className="text-warning-600" /> Quick Diamond Presets
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInputs({ diamonds: 100, currency: 'USD' })}
            className="text-xs"
          >
            Small Stream
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInputs({ diamonds: 1000, currency: 'USD' })}
            className="text-xs"
          >
            Good Session
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInputs({ diamonds: 5000, currency: 'USD' })}
            className="text-xs"
          >
            Popular Stream
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInputs({ diamonds: 25000, currency: 'USD' })}
            className="text-xs"
          >
            Viral Session
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInputs({ diamonds: 100000, currency: 'USD' })}
            className="text-xs"
          >
            Celebrity Level
          </Button>
        </div>
        <p className="text-xs text-neutral-600">Click presets to auto-fill calculator with realistic diamond amounts from different streaming levels</p>
      </Card>

      <Card className="p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <InputField
            id="diamonds"
            label="Diamonds"
            type="number"
            value={inputs.diamonds}
            onChange={(value) => handleInputChange('diamonds', value)}
            error={errors.diamonds}
            placeholder="1000"
            min={1}
            max={10000000}
            required
          />

          <SelectField
            id="currency"
            label="Currency"
            value={inputs.currency}
            onChange={(value) => handleInputChange('currency', value)}
            options={currencyOptions}
            required
          />
        </div>

        <div className="text-center">
          <Button
            onClick={handleCalculate}
            size="lg"
            className="px-12"
          >
            Convert Diamonds
          </Button>
        </div>
      </Card>

      {results && (
        <div className="space-y-4">
          <ResultsDisplay
            subtype="list"
            title="Diamond Conversion Results"
            rows={rows}
          />

          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-2">Conversion Analysis</h4>
            <p className="text-neutral-700">{results.interpretation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
