import { Card } from '@/components/ui/Card';

export interface CalculationStep {
  step: string;
  formula: string;
  values: string;
  result: string;
}

export interface CalculationExample {
  steps: CalculationStep[];
  finalResult: string;
}

interface MethodologySectionProps {
  calculatorName: string;
  formula: string;
  calculationExample?: CalculationExample;
  assumptions: { label: string; value: string }[];
  dataSources: string[];
  limitations: string;
  lastUpdated: string;
}

/**
 * MethodologySection - SSR component for displaying calculator methodology
 *
 * Uses native <details> element for expand/collapse behavior,
 * eliminating the need for client-side JavaScript and useState.
 * This improves SEO by making content crawlable and reduces JS bundle size.
 */
export function MethodologySection({
  calculatorName,
  formula,
  calculationExample,
  assumptions,
  dataSources,
  limitations,
  lastUpdated,
}: MethodologySectionProps) {
  return (
    <Card className="mt-8">
      <details className="group">
        <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
          <h3 className="text-heading-md font-semibold text-neutral-900">
            How We Calculate This
          </h3>
          <svg
            className="w-6 h-6 text-neutral-600 transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div className="mt-6 space-y-6">
          {/* Formula */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Formula
            </h4>
            <pre className="p-4 bg-neutral-100 rounded-lg overflow-x-auto">
              <code className="text-body-sm text-neutral-800">{formula}</code>
            </pre>
          </div>

          {/* Worked Example */}
          {calculationExample && (
            <div>
              <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
                Worked Example
              </h4>
              <div className="space-y-3">
                {calculationExample.steps.map((step, index) => (
                  <div key={index} className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-semibold text-neutral-900">{step.step}</p>
                        <pre className="mt-1 text-body-xs text-neutral-600 font-mono whitespace-pre-wrap">{step.formula}</pre>
                        <p className="mt-1 text-body-xs text-neutral-500">Values: {step.values}</p>
                        <p className="mt-1 text-body-sm font-medium text-primary-700">= {step.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                  <p className="text-body-sm font-semibold text-primary-800">
                    Final Result: {calculationExample.finalResult}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Assumptions */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Assumptions
            </h4>
            <ul className="space-y-2">
              {assumptions.map((assumption, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <div className="flex-1">
                    <span className="font-medium text-neutral-900">
                      {assumption.label}:
                    </span>{' '}
                    <span className="text-neutral-700">{assumption.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Data Sources
            </h4>
            <ul className="space-y-2">
              {dataSources.map((source, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-body-md text-neutral-700">{source}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitations */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Limitations
            </h4>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              {limitations}
            </p>
          </div>

          {/* Last Updated */}
          <div className="pt-4 border-t border-neutral-200">
            <p className="text-body-sm text-neutral-600">
              <span className="font-medium">Last Updated:</span> {lastUpdated}
            </p>
          </div>
        </div>
      </details>
    </Card>
  );
}
