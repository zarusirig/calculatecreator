interface FAQ {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
  url?: string;
}

export function FAQPageSchema({ faqs, title, description, url }: FAQPageSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Add optional properties if provided
  if (title) faqSchema.name = title;
  if (description) faqSchema.description = description;
  if (url) faqSchema.url = url;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
