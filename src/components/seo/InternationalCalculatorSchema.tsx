interface FAQ {
  question: string;
  answer: string;
}

interface InternationalCalculatorSchemaProps {
  locale: string; // e.g., 'de_DE', 'es_ES', 'fr_FR'
  languageCode: string; // e.g., 'de', 'es', 'fr'
  countryName: string; // e.g., 'Germany', 'Spain', 'France'
  title: string; // Calculator title in local language
  description: string; // Calculator description in local language
  url: string; // Full URL of the page
  faqs: FAQ[];
  currency?: string; // e.g., 'EUR', 'USD', 'MXN'
  rpmMin?: string; // e.g., '€0.030', '$0.020'
  rpmMax?: string; // e.g., '€0.048', '$0.032'
}

export function InternationalCalculatorSchema({
  locale,
  languageCode,
  countryName,
  title,
  description,
  url,
  faqs,
  currency = 'USD',
  rpmMin,
  rpmMax,
}: InternationalCalculatorSchemaProps) {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    description: description,
    url: url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currency,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'Creator Fund earnings calculator',
      'Brand deal rate estimator',
      'LIVE gifts revenue calculator',
      'TikTok Shop commission calculator',
      'RPM/CPM analyzer',
      'Engagement rate calculator',
    ],
    inLanguage: languageCode,
    availableLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Deutsch', alternateName: 'de' },
      { '@type': 'Language', name: 'Español', alternateName: 'es' },
      { '@type': 'Language', name: 'Français', alternateName: 'fr' },
      { '@type': 'Language', name: 'Italiano', alternateName: 'it' },
      { '@type': 'Language', name: 'Português', alternateName: 'pt' },
      { '@type': 'Language', name: 'Bahasa Malaysia', alternateName: 'ms' },
    ],
    provider: {
      '@type': 'Organization',
      name: 'CalculateCreator.com',
      url: 'https://calculatecreator.com/',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    inLanguage: languageCode,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CalculateCreator.com',
      url: 'https://calculatecreator.com/',
    },
    about: {
      '@type': 'Thing',
      name: `TikTok monetization in ${countryName}`,
      description: `Calculator and guide for TikTok creators in ${countryName} to estimate earnings from Creator Fund, brand deals, and LIVE gifts.`,
    },
    ...(rpmMin &&
      rpmMax && {
        mainEntity: {
          '@type': 'FinancialProduct',
          name: `TikTok Creator Fund - ${countryName}`,
          description: `Estimated RPM rates: ${rpmMin}-${rpmMax} per 1,000 views`,
        },
      }),
  };

  const faqSchema = {
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
    inLanguage: languageCode,
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
        name: 'Global TikTok Statistics',
        item: 'https://calculatecreator.com/region/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: countryName,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
