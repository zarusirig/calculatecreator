import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface ToolExplanationSectionProps {
  whatItDoes: string;
  howToUse: string[];
  examples: { scenario: string; input: string; output: string }[];
  limitations: string[];
  relatedContent: { title: string; href: string }[];
}

/**
 * ToolExplanationSection - SSR component for explaining what a tool does and how to use it
 *
 * Uses native <details> element for expand/collapse behavior,
 * eliminating the need for client-side JavaScript and useState.
 * This improves SEO by making content crawlable and reduces JS bundle size.
 */
export function ToolExplanationSection({
  whatItDoes,
  howToUse,
  examples,
  limitations,
  relatedContent,
}: ToolExplanationSectionProps) {
  return (
    <Card className="mt-8">
      <details className="group" open>
        <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
          <h3 className="text-heading-md font-semibold text-neutral-900">
            About This Tool
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
          {/* What This Tool Does */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              What This Tool Does
            </h4>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              {whatItDoes}
            </p>
          </div>

          {/* How to Use This Tool */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              How to Use This Tool
            </h4>
            <ol className="space-y-2 list-none">
              {howToUse.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-700 text-body-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-body-md text-neutral-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Real-World Examples */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Real-World Examples
            </h4>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-lg p-4"
                >
                  <p className="text-body-md font-medium text-neutral-900 mb-2">
                    {example.scenario}
                  </p>
                  <div className="space-y-1">
                    <p className="text-body-md text-neutral-700">
                      <span className="font-medium text-neutral-900">Input:</span>{' '}
                      {example.input}
                    </p>
                    <p className="text-body-md text-neutral-700">
                      <span className="font-medium text-neutral-900">Output:</span>{' '}
                      {example.output}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Limitations
            </h4>
            <ul className="space-y-2">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-body-md text-neutral-700">
                    {limitation}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Resources */}
          <div className="pt-4 border-t border-neutral-200">
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Related Resources
            </h4>
            <ul className="space-y-2">
              {relatedContent.map((link, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <Link
                    href={link.href}
                    className="text-body-md text-primary-600 hover:text-primary-700 underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </Card>
  );
}
