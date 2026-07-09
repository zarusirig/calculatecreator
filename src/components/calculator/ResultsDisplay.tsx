'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { formatCurrency, formatPercentage, formatRange } from '@/lib/utils/format';
import type { CalculatorResult } from '@/types/calculator';

/**
 * Rendering shapes supported by ResultsDisplay.
 * - "hero": existing headline-number layout (default; backward compatible).
 * - "list": array of {label, value} rows.
 * - "rating": headline number + a small qualitative/0-100 scale.
 * - "score": alias of "rating" for 0-100 numeric scores.
 */
export type ResultsSubtype = 'hero' | 'list' | 'rating' | 'score';

/** A single row rendered by the "list" subtype. */
export interface ResultListRow {
  label: string;
  value: string | number;
  /** Optional secondary line under the label. */
  hint?: string;
}

/** Optional endpoints for the rating/score scale. */
export interface ScoreScaleLabels {
  low?: string;
  high?: string;
}

interface ResultsDisplayProps {
  /** Calculator result payload. Optional so a loading skeleton can render without data. */
  results?: CalculatorResult;
  /** Layout of the hero number. Kept for backward compatibility (defaults to "single"). */
  type?: 'range' | 'single' | 'breakdown';
  /** Value formatter for the hero number. */
  format?: 'currency' | 'percentage' | 'number';
  /** Headline above the result. */
  title?: string;
  /** Supporting line under the title. */
  subtitle?: string;
  /** Rendering shape. Defaults to "hero" (existing behavior). */
  subtype?: ResultsSubtype;
  /** Alias for {@link subtype}. Used when {@link subtype} is omitted. */
  variant?: ResultsSubtype;
  /** When true, render a non-blocking skeleton placeholder. */
  loading?: boolean;
  /** Rows for the "list" subtype. */
  rows?: ResultListRow[];
  /** Headline number for the "rating"/"score" subtypes (0-100 by default). */
  score?: number;
  /** Maximum value of the score scale (default 100). */
  scoreMax?: number;
  /** Optional qualitative label rendered next to the score. */
  rating?: string;
  /** Unit suffix for the score (e.g. "%", "/100", "pts"). */
  scoreUnit?: string;
  /** Optional qualitative scale endpoints for the "rating" subtype. */
  scaleLabels?: ScoreScaleLabels;
}

const DEFAULT_TITLE = 'Your Results';

/** Non-blocking skeleton shown while `loading` is true. Visually-only (aria-hidden). */
function ResultsSkeleton({ title = DEFAULT_TITLE }: { title?: string }) {
  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="text-center mb-6 space-y-2">
        <div className="h-7 w-48 mx-auto rounded bg-neutral-200 animate-pulse" />
        <div className="h-4 w-64 mx-auto rounded bg-neutral-200 animate-pulse" />
      </div>
      <div className="h-16 w-40 mx-auto rounded-lg bg-neutral-200 animate-pulse" />
      <div className="h-12 rounded-lg bg-neutral-200 animate-pulse" />
    </div>
  );
}

export function ResultsDisplay({
  results,
  type = 'single',
  format = 'currency',
  title = DEFAULT_TITLE,
  subtitle,
  subtype,
  variant,
  loading = false,
  rows,
  score,
  scoreMax = 100,
  rating,
  scoreUnit,
  scaleLabels,
}: ResultsDisplayProps) {
  const resolvedSubtype: ResultsSubtype = subtype ?? variant ?? 'hero';

  const renderValue = (value: number) => {
    switch (format) {
      case 'currency':
        return formatCurrency(value, 'USD', 'en-US', value < 10 ? 2 : 0);
      case 'percentage':
        return formatPercentage(value);
      case 'number':
      default:
        return value.toLocaleString();
    }
  };

  const renderHeader = () => (
    <div className="text-center mb-6">
      <h3 className="text-heading-lg font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-body-md text-neutral-600">{subtitle}</p>
      )}
    </div>
  );

  return (
    <Card
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200 animate-slide-up"
    >
      {loading ? (
        <ResultsSkeleton title={title} />
      ) : (
        <>
          {renderHeader()}

          {/* ---- hero (default, backward compatible) ---- */}
          {resolvedSubtype === 'hero' && results && (
            <>
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
            </>
          )}

          {/* ---- list subtype ---- */}
          {resolvedSubtype === 'list' && rows && rows.length > 0 && (
            <div className="space-y-3">
              {rows.map((row, idx) => (
                <div
                  key={`${row.label}-${idx}`}
                  className="flex items-center justify-between p-3 bg-white rounded-lg"
                >
                  <span className="text-body-md text-neutral-700">
                    {row.label}
                    {row.hint && (
                      <span className="block text-label-md text-neutral-500">
                        {row.hint}
                      </span>
                    )}
                  </span>
                  <span className="text-heading-sm font-semibold text-neutral-900">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ---- rating / score subtype ---- */}
          {(resolvedSubtype === 'rating' || resolvedSubtype === 'score') && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-display-lg font-bold text-primary-600">
                  {score !== undefined ? (
                    <>
                      {score.toLocaleString()}
                      {scoreUnit && (
                        <span className="text-display-sm ml-1">{scoreUnit}</span>
                      )}
                    </>
                  ) : results?.value !== undefined ? (
                    renderValue(results.value)
                  ) : null}
                </p>
                {rating && (
                  <p className="mt-1 text-heading-sm font-semibold text-neutral-700 uppercase tracking-wide">
                    {rating}
                  </p>
                )}
              </div>

              {score !== undefined && scoreMax > 0 && (
                <div className="mt-2">
                  <div
                    className="relative h-2 w-full rounded-full bg-neutral-200 overflow-hidden"
                    role="meter"
                    aria-valuenow={score}
                    aria-valuemin={0}
                    aria-valuemax={scoreMax}
                  >
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-primary-500"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(0, (score / scoreMax) * 100)
                        )}%`,
                      }}
                    />
                  </div>
                  {(scaleLabels?.low || scaleLabels?.high) && (
                    <div className="mt-1 flex justify-between text-label-md text-neutral-500">
                      <span>{scaleLabels?.low ?? '0'}</span>
                      <span>{scaleLabels?.high ?? scoreMax}</span>
                    </div>
                  )}
                </div>
              )}

              {results?.interpretation && (
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-body-md text-neutral-700 leading-relaxed">
                    {results.interpretation}
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Card>
  );
}
