'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { trackFAQExpand } from '@/lib/analytics/ga4';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  pageName: string;
}

export function FAQSection({ faqs, pageName }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    const newIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newIndex);

    if (newIndex !== null) {
      trackFAQExpand(faqs[index].question, pageName);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} padding="none" className="overflow-hidden">
            <button
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between w-full text-left p-6 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="text-heading-sm font-semibold text-neutral-900 pr-4">
                {faq.question}
              </h3>
              <svg
                className={`flex-shrink-0 w-6 h-6 text-neutral-600 transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
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
            </button>

            {expandedIndex === index && (
              <div className="px-6 pb-6 animate-slide-down">
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
