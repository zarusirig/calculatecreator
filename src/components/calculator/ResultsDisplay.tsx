'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { formatCurrency, formatPercentage, formatRange } from '@/lib/utils/format';
import type { CalculatorResult } from '@/types/calculator';

interface ResultsDisplayProps {
  results: CalculatorResult;
  type: 'range' | 'single' | 'breakdown';
  format?: 'currency' | 'percentage' | 'number';
  title?: string;
  subtitle?: string;
}

export function ResultsDisplay({
  results,
  type,
  format = 'currency',
  title = 'Your Results',
  subtitle,
}: ResultsDisplayProps) {
  const renderValue = (value: number) => {
    switch (format) {
      case 'currency':
        return formatCurrency(value, value < 10 ? 2 : 0);
      case 'percentage':
        return formatPercentage(value);
      case 'number':
      default:
        return value.toLocaleString();
    }
  };

  return (
    <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200 animate-slide-up">
      <div className="text-center mb-6">
        <h3 className="text-heading-lg font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-body-md text-neutral-600">{subtitle}</p>
        )}
      </div>

      {type === 'range' && results.min !== undefined && results.max !== undefined && (
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <p className="text-label-md text-neutral-600 mb-1">Minimum</p>
              <p className="text-display-sm font-bold text-primary-600">
                {renderValue(results.min)}
              </p>
            </div>
            <div className="text-neutral-400">—</div>
            <div className="text-center">
              <p className="text-label-md text-neutral-600 mb-1">Maximum</p>
              <p className="text-display-sm font-bold text-primary-600">
                {renderValue(results.max)}
              </p>
            </div>
          </div>

          {results.interpretation && (
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          )}
        </div>
      )}

      {type === 'single' && results.value !== undefined && (
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-display-lg font-bold text-primary-600">
              {renderValue(results.value)}
            </p>
          </div>

          {results.interpretation && (
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          )}
        </div>
      )}

      {type === 'breakdown' && results.additionalMetrics && (
        <div className="space-y-3">
          {Object.entries(results.additionalMetrics).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-3 bg-white rounded-lg"
            >
              <span className="text-body-md text-neutral-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-heading-sm font-semibold text-neutral-900">
                {typeof value === 'number' ? renderValue(value) : value}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
