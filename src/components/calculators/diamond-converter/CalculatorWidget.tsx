'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { Gem } from 'lucide-react';
import { calculateDiamondConverter, validateDiamondConverterInput } from '@/lib/calculators/diamond-converter';
import type { DiamondConverterInput, DiamondConverterResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function DiamondConverterCalculatorWidget() {
  const [inputs, setInputs] = useState<DiamondConverterInput>({ diamonds: 1000, currency: 'USD' });
  const [results, setResults] = useState<DiamondConverterResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

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

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateDiamondConverter(inputs);
      setResults(result);
      trackCalculation('diamond-converter', inputs, {
        usd_value: result.usdValue,
        converted_value: result.convertedValue,
        currency: result.currency
      });
      setIsCalculating(false);
    }, 500);
  };

  const currencyOptions = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'EUR', label: 'EUR (€)' },
    { value: 'GBP', label: 'GBP (£)' },
    { value: 'CAD', label: 'CAD (C$)' },
    { value: 'AUD', label: 'AUD (A$)' },
  ];

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
            disabled={isCalculating}
            size="lg"
            className="px-12"
          >
            {isCalculating ? 'Converting...' : 'Convert Diamonds'}
          </Button>
        </div>
      </Card>

      {results && (
        <Card className="p-6">
          <h3 className="text-heading-lg font-bold text-neutral-900 mb-6">Diamond Conversion Results</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">${results.usdValue.toLocaleString()}</div>
              <div className="text-sm text-neutral-600">USD Value</div>
              <div className="text-xs text-neutral-500 mt-1">Value in US Dollars</div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{results.currencySymbol}{results.convertedValue.toLocaleString()}</div>
              <div className="text-sm text-neutral-600">{results.currency} Value</div>
              <div className="text-xs text-neutral-500 mt-1">Value in {results.currency}</div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{results.equivalentCoins.toLocaleString()}</div>
              <div className="text-sm text-neutral-600">Equivalent Coins</div>
              <div className="text-xs text-neutral-500 mt-1">TikTok coins needed</div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">${results.additionalMetrics?.payoutRate || '0.005'}</div>
              <div className="text-sm text-neutral-600">Payout Rate</div>
              <div className="text-xs text-neutral-500 mt-1">Per diamond</div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{results.additionalMetrics?.diamondsPerDollar || '200'}</div>
              <div className="text-sm text-neutral-600">Diamonds per Dollar</div>
              <div className="text-xs text-neutral-500 mt-1">Conversion rate</div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">{results.additionalMetrics?.coinsEquivalent.toLocaleString() || results.equivalentCoins.toLocaleString()}</div>
              <div className="text-sm text-neutral-600">Coin Equivalent</div>
              <div className="text-xs text-neutral-500 mt-1">Coins for these diamonds</div>
            </div>
          </div>

          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-2">Conversion Analysis</h4>
            <p className="text-neutral-700">{results.interpretation}</p>
          </div>
        </Card>
      )}
    </div>
  );
}
