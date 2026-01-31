export interface FAQ {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  title: string;
  description: string;
  url: string;
  faqs: FAQ[];
}

export function FAQPageSchema({ title, description, url, faqs }: FAQPageSchemaProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: title,
    description: description,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://calculatecreator.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: url,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      '@id': 'https://calculatecreator.com/#website',
    },
    about: {
      '@type': 'Thing',
      name: 'TikTok Creator FAQ',
      description: 'Frequently asked questions about TikTok monetization, calculators, and creator earnings.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
