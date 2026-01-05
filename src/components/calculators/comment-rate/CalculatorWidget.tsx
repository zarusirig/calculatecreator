'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import {
  calculateCommentRate,
  validateCommentRateInput,
} from '@/lib/calculators/comment-rate';
import type { CommentRateInput, CommentRateResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export function CommentRateCalculatorWidget() {
  const [inputs, setInputs] = useState<CommentRateInput>({
    views: 50000,
    comments: 250,
  });

  const [results, setResults] = useState<CommentRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CommentRateInput, value: string | number) => {
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
    const validation = validateCommentRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCommentRate(inputs);
      setResults(result);

      trackCalculation(
        'comment-rate',
        { ...inputs },
        { commentRate: result.commentRate, engagementRating: result.engagementRating }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <Card className="lg:sticky lg:top-24 h-fit">
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
        Calculate Comment Rate
      </h2>

      <InputField
        id="views"
        label="Total Views"
        type="number"
        value={inputs.views}
        onChange={(value) => handleInputChange('views', value)}
        placeholder="e.g., 50000"
        helperText="Total views on your video"
        error={errors.views}
        min={1}
        required
      />

      <InputField
        id="comments"
        label="Total Comments"
        type="number"
        value={inputs.comments}
        onChange={(value) => handleInputChange('comments', value)}
        placeholder="e.g., 250"
        helperText="Number of comments on your video"
        error={errors.comments}
        min={0}
        required
      />

      <Button
        variant="primary"
        size="lg"
        onClick={handleCalculate}
        isLoading={isCalculating}
        className="w-full mt-6"
      >
        Calculate Comment Rate
      </Button>

      {results && (
        <div className="mt-6">
          <ResultsDisplay
            results={results}
            type="single"
            format="percentage"
            title="Comment Rate"
            subtitle={`${results.engagementRating.replace('-', ' ').toUpperCase()}`}
          />

          <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
            <p className="text-label-md text-neutral-600 mb-3">
              What This Means
            </p>
            <p className="text-body-sm text-neutral-700">
              {results.commentRate >= 1
                ? 'Outstanding! Your content drives exceptional conversation and community engagement.'
                : results.commentRate >= 0.5
                ? 'Strong performance! Your content generates meaningful discussion and audience interaction.'
                : results.commentRate >= 0.2
                ? 'Average comment rate. Add engagement hooks and questions to spark more conversation.'
                : 'Low comment rate. Create content that invites opinions, questions, and community participation.'}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
