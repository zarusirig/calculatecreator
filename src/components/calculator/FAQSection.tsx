import { Card } from '@/components/ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  pageName: string;
  variant?: 'light' | 'dark';
}

/**
 * FAQSection - SSR component for displaying FAQ accordions
 *
 * Uses native <details> elements for expand/collapse behavior,
 * eliminating the need for client-side JavaScript and useState.
 * This improves SEO by making FAQ content immediately crawlable
 * and reduces JS bundle size.
 */
export function FAQSection({ faqs, pageName, variant = 'light' }: FAQSectionProps) {
  const headingColor = variant === 'dark' ? 'text-white' : 'text-neutral-900';

  return (
    <div className="mt-12">
      <h2 className={`text-display-sm font-bold mb-6 ${headingColor}`}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} padding="none" className="overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left p-6 cursor-pointer list-none hover:bg-neutral-50 transition-colors">
                <h3 className="text-heading-sm font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="flex-shrink-0 w-6 h-6 text-neutral-600 transition-transform group-open:rotate-180"
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

              <div className="px-6 pb-6">
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          </Card>
        ))}
      </div>
    </div>
  );
}
