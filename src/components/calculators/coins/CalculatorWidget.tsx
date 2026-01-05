'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { calculateCoins, validateCoinsInput } from '@/lib/calculators/coins';
import type { CoinsInput, CoinsResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

/**
 * CoinsCalculatorWidget - Client-side interactive calculator widget
 *
 * Handles the interactive form, state management, and calculation
 * for the Coins calculator. The parent SSR page handles layout,
 * educational content, and SEO.
 */
export function CoinsCalculatorWidget() {
  const [inputs, setInputs] = useState<CoinsInput>({ coins: 1000 });
  const [results, setResults] = useState<CoinsResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (value: any) => {
    setInputs({ coins: value });
    if (errors.coins) setErrors({});
  };

  const handleCalculate = () => {
    const validation = validateCoinsInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCoins(inputs);
      setResults(result);
      trackCalculation('coins', { coins: inputs.coins }, {
        usd_value: result.usdValue,
        diamonds: result.diamonds,
      });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Convert Coins
      </h2>

      <InputField
        id="coins"
        label="TikTok Coins"
        type="number"
        value={inputs.coins}
        onChange={handleInputChange}
        placeholder="e.g., 1000"
        helperText="Number of TikTok coins to convert"
        error={errors.coins}
        min={1}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Convert Coins
      </Button>

      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            results={results}
            type="single"
            format="currency"
            title="USD Value"
          />
          <div className="p-4 bg-neutral-50 rounded-lg">
            <p className="text-label-md text-neutral-600 mb-1">Diamonds</p>
            <p className="text-heading-lg font-semibold text-neutral-900">
              {results.diamonds.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
