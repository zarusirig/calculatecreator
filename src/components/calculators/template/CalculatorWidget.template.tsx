'use client';

/**
 * CALCULATOR WIDGET TEMPLATE
 *
 * This is a template file for creating new calculator widgets.
 * Copy this file and rename it to `CalculatorWidget.tsx` in the appropriate
 * calculator folder (e.g., /components/calculators/coins/CalculatorWidget.tsx)
 *
 * Instructions:
 * 1. Copy this file to /components/calculators/[calculator-name]/
 * 2. Rename to CalculatorWidget.tsx
 * 3. Replace [CalculatorName] with your calculator name (e.g., Coins, EngagementRate)
 * 4. Update input/result types from @/types/calculator
 * 5. Import the appropriate calculate and validate functions from @/lib/calculators/
 * 6. Customize the form inputs and results display
 */

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { trackCalculation } from '@/lib/analytics/ga4';

// TODO: Import your calculator's types
// import type { [CalculatorName]Input, [CalculatorName]Result } from '@/types/calculator';

// TODO: Import your calculator's functions
// import { calculate[CalculatorName], validate[CalculatorName]Input } from '@/lib/calculators/[calculator-name]';

// Placeholder types - replace with actual types from @/types/calculator
interface CalculatorInput {
  // Define your input fields here
  field1: number;
  field2: string;
}

interface CalculatorResult {
  // Define your result fields here
  mainResult: number;
  additionalMetrics?: Record<string, number>;
}

// Default input values
const DEFAULT_INPUTS: CalculatorInput = {
  field1: 1000,
  field2: 'option1',
};

/**
 * [CalculatorName]Widget - Client-side interactive calculator widget
 *
 * This component handles:
 * - Form state management (inputs, results, errors, loading)
 * - Input validation
 * - Calculation execution
 * - Results display
 * - Analytics tracking
 *
 * The parent SSR page handles:
 * - Page layout and structure
 * - SEO metadata and schema
 * - Educational content (intro, benchmarks, tips, etc.)
 * - Methodology and FAQ sections
 */
export function CalculatorWidget() {
  // State management
  const [inputs, setInputs] = useState<CalculatorInput>(DEFAULT_INPUTS);
  const [results, setResults] = useState<CalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  // Handle input changes with error clearing
  const handleInputChange = (field: keyof CalculatorInput, value: any) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Handle calculation
  const handleCalculate = () => {
    // TODO: Replace with actual validation function
    // const validation = validate[CalculatorName]Input(inputs);
    const validation = { valid: true, errors: {} }; // Placeholder

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      // TODO: Replace with actual calculation function
      // const result = calculate[CalculatorName](inputs);
      const result: CalculatorResult = {
        mainResult: inputs.field1 * 2, // Placeholder calculation
      };

      setResults(result);

      // Track calculation for analytics
      trackCalculation(
        'calculator-name', // TODO: Replace with actual calculator name
        { ...inputs },
        { main_result: result.mainResult }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card>
      {/* Form Title */}
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Your Results {/* TODO: Update title */}
      </h2>

      {/* Input Fields */}
      <div className="space-y-4">
        <InputField
          id="field1"
          label="Field 1 Label" // TODO: Update label
          type="number"
          value={inputs.field1}
          onChange={(value) => handleInputChange('field1', value)}
          placeholder="e.g., 1000"
          helperText="Description of this field" // TODO: Update helper text
          error={errors.field1}
          min={1}
          required
        />

        <SelectField
          id="field2"
          label="Field 2 Label" // TODO: Update label
          value={inputs.field2}
          onChange={(value) => handleInputChange('field2', value)}
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          helperText="Description of this field" // TODO: Update helper text
          error={errors.field2}
        />
      </div>

      {/* Calculate Button */}
      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate {/* TODO: Update button text */}
      </Button>

      {/* Results Display */}
      {results && (
        <div className="mt-6 space-y-4">
          <ResultsDisplay
            results={results}
            type="single" // or 'range' for min/max results
            format="currency" // or 'percentage', 'number'
            title="Your Result" // TODO: Update title
          />

          {/* Additional Results (optional) */}
          {results.additionalMetrics && (
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(results.additionalMetrics).map(([key, value]) => (
                <div key={key} className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-label-md text-neutral-600 mb-1">
                    {key}
                  </p>
                  <p className="text-heading-lg font-semibold text-neutral-900">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
