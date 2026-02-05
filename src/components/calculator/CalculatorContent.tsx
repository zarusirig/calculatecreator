/**
 * Calculator Content Components
 * Reusable content sections for enriching calculator pages
 * Target: 800-1,200 words per calculator page for AdSense compliance
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

// ============================================
// WHY IT MATTERS SECTION
// ============================================
export interface WhyItMattersProps {
  title?: string;
  metricName: string;
  paragraphs: string[];
  keyPoints?: Array<{
    icon: string;
    text: string;
  }>;
}

export function WhyItMatters({
  title,
  metricName,
  paragraphs,
  keyPoints,
}: WhyItMattersProps) {
  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {title || `Why ${metricName} Matters`}
      </h2>
      <div className="space-y-4 text-body-md text-neutral-700">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">{paragraph}</p>
        ))}
        {keyPoints && keyPoints.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg"
              >
                <span className="text-xl flex-shrink-0">{point.icon}</span>
                <span className="text-body-sm text-neutral-700">{point.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

// ============================================
// HOW TO IMPROVE SECTION
// ============================================
export interface HowToImproveProps {
  title?: string;
  metricName: string;
  intro?: string;
  tips: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  proTip?: string;
}

export function HowToImprove({
  title,
  metricName,
  intro,
  tips,
  proTip,
}: HowToImproveProps) {
  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {title || `How to Improve Your ${metricName}`}
      </h2>
      {intro && (
        <p className="text-body-md text-neutral-700 mb-6 leading-relaxed">{intro}</p>
      )}
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm">
              {tip.icon || (index + 1)}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">{tip.title}</h3>
              <p className="text-body-sm text-neutral-700">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
      {proTip && (
        <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <p className="text-body-sm text-neutral-800">
            <span className="font-semibold">Pro Tip:</span> {proTip}
          </p>
        </div>
      )}
    </Card>
  );
}

// ============================================
// REAL EXAMPLE SECTION
// ============================================
export interface RealExampleProps {
  title?: string;
  scenario: string;
  inputs: Array<{
    label: string;
    value: string;
  }>;
  result: {
    label: string;
    value: string;
    rating?: string;
  };
  analysis: string;
  takeaway?: string;
}

export function RealExample({
  title = 'Real-World Example',
  scenario,
  inputs,
  result,
  analysis,
  takeaway,
}: RealExampleProps) {
  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {title}
      </h2>
      <p className="text-body-md text-neutral-700 mb-4 leading-relaxed">{scenario}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="p-4 bg-neutral-50 rounded-lg">
          <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Inputs</h3>
          <div className="space-y-2">
            {inputs.map((input, index) => (
              <div key={index} className="flex justify-between text-body-sm">
                <span className="text-neutral-600">{input.label}:</span>
                <span className="font-medium text-neutral-900">{input.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Result</h3>
          <div className="text-center">
            <p className="text-display-sm font-bold text-primary-600">{result.value}</p>
            <p className="text-body-sm text-neutral-700">{result.label}</p>
            {result.rating && (
              <span className="inline-block mt-2 px-3 py-1 bg-white rounded-full text-label-sm font-medium text-neutral-700">
                {result.rating}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
        <p className="text-body-md text-neutral-700 leading-relaxed">{analysis}</p>
      </div>

      {takeaway && (
        <div className="mt-4 p-4 bg-success-50 rounded-lg border border-success-200">
          <p className="text-body-sm text-neutral-800">
            <span className="font-semibold">Key Takeaway:</span> {takeaway}
          </p>
        </div>
      )}
    </Card>
  );
}

// ============================================
// BENCHMARKS SECTION
// ============================================
export interface BenchmarkItem {
  label: string;
  range: string;
  color: 'success' | 'warning' | 'error' | 'info';
  description: string;
}

export interface BenchmarksSectionProps {
  title?: string;
  metricName: string;
  intro?: string;
  benchmarks: BenchmarkItem[];
  note?: string;
}

const colorClasses = {
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  error: 'bg-error-500',
  info: 'bg-secondary-500',
};

export function BenchmarksSection({
  title,
  metricName,
  intro,
  benchmarks,
  note,
}: BenchmarksSectionProps) {
  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {title || `${metricName} Benchmarks`}
      </h2>
      {intro && (
        <p className="text-body-md text-neutral-700 mb-4 leading-relaxed">{intro}</p>
      )}
      <div className="space-y-3">
        {benchmarks.map((benchmark, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${colorClasses[benchmark.color]}`} />
              <div>
                <p className="font-semibold text-neutral-900">{benchmark.label}</p>
                <p className="text-body-sm text-neutral-600">{benchmark.description}</p>
              </div>
            </div>
            <span className="font-semibold text-neutral-900 whitespace-nowrap">
              {benchmark.range}
            </span>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-4 text-body-sm text-neutral-600 italic">{note}</p>
      )}
    </Card>
  );
}

// ============================================
// FORMULA EXPLANATION SECTION
// ============================================
export interface FormulaExplanationProps {
  title?: string;
  formula: string;
  explanation: string;
  variables?: Array<{
    symbol: string;
    meaning: string;
  }>;
}

export function FormulaExplanation({
  title = 'The Formula',
  formula,
  explanation,
  variables,
}: FormulaExplanationProps) {
  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">{title}</h2>

      {/* Formula Display */}
      <div className="p-4 bg-neutral-900 rounded-lg mb-4">
        <pre className="text-body-md text-white font-mono text-center overflow-x-auto">
          {formula}
        </pre>
      </div>

      <p className="text-body-md text-neutral-700 mb-4 leading-relaxed">{explanation}</p>

      {variables && variables.length > 0 && (
        <div className="p-4 bg-neutral-50 rounded-lg">
          <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Variables Explained</h3>
          <div className="space-y-2">
            {variables.map((variable, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="font-mono text-primary-600 font-semibold">
                  {variable.symbol}
                </span>
                <span className="text-body-sm text-neutral-700">{variable.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

// ============================================
// QUICK FACTS SECTION
// ============================================
export interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

export interface QuickFactsProps {
  title?: string;
  facts: QuickFact[];
}

export function QuickFacts({ title = 'Quick Facts', facts }: QuickFactsProps) {
  return (
    <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
      <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {facts.map((fact, index) => (
          <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="text-2xl mb-2 block">{fact.icon}</span>
            <p className="text-body-xs text-neutral-600 mb-1">{fact.label}</p>
            <p className="font-semibold text-neutral-900 text-body-sm">{fact.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ============================================
// RELATED RESOURCES SECTION
// ============================================
export interface RelatedResource {
  title: string;
  description: string;
  href: string;
  icon: string;
  type: 'calculator' | 'guide' | 'data';
}

export interface RelatedResourcesProps {
  title?: string;
  resources: RelatedResource[];
}

export function RelatedResources({ title = 'Related Resources', resources }: RelatedResourcesProps) {
  return (
    <Card>
      <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <Link
            key={index}
            href={resource.href}
            className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <span className="text-2xl flex-shrink-0">{resource.icon}</span>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">{resource.title}</h3>
              <p className="text-body-sm text-neutral-600">{resource.description}</p>
              <span className="inline-block mt-2 text-label-sm text-primary-600 font-medium">
                {resource.type === 'calculator' && 'Use Calculator →'}
                {resource.type === 'guide' && 'Read Guide →'}
                {resource.type === 'data' && 'View Data →'}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}

// ============================================
// DISCLAIMER SECTION
// ============================================
export interface CalculatorDisclaimerProps {
  type?: 'financial' | 'educational' | 'general';
  customText?: string;
}

export function CalculatorDisclaimer({ type = 'general', customText }: CalculatorDisclaimerProps) {
  const disclaimerText = {
    financial: 'This calculator provides estimates for educational purposes only. Actual earnings vary based on many factors including audience location, content quality, and platform changes. This is not financial advice. Consult a financial professional for personalized guidance.',
    educational: 'This calculator provides estimates based on industry data and creator surveys. Actual results may vary. Use these figures as benchmarks to understand typical performance, not guaranteed outcomes.',
    general: 'Calculator results are estimates based on aggregated data. Your actual results may vary depending on content, audience, and platform factors.',
  };

  return (
    <div className="p-4 bg-neutral-100 rounded-lg border border-neutral-200 mt-6">
      <p className="text-body-sm text-neutral-600 leading-relaxed">
        <span className="font-semibold text-neutral-700">Disclaimer: </span>
        {customText || disclaimerText[type]}
      </p>
    </div>
  );
}

// ============================================
// INPUTS EXPLAINED (re-export from separate file)
// ============================================
export { InputsExplained } from './InputsExplained';
export type { InputItem, InputsExplainedProps } from './InputsExplained';

// ============================================
// EXPORT ALL
// ============================================
export default {
  WhyItMatters,
  HowToImprove,
  RealExample,
  BenchmarksSection,
  FormulaExplanation,
  QuickFacts,
  RelatedResources,
  CalculatorDisclaimer,
};
