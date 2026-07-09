import { SITE_CONFIG } from '@/lib/constants/site-config';

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
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: title,
    description: description,
    url: url,
    inLanguage: languageCode,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
    },
    about: {
      '@type': 'Thing',
      name: `TikTok monetization in ${countryName}`,
      description: `Calculator and guide for TikTok creators in ${countryName} to estimate earnings from Creator Fund, brand deals, and LIVE gifts.`,
    },
    ...(rpmMin &&
      rpmMax && {
        mainEntity: {
          '@type': 'SoftwareApplication',
          name: `TikTok Creator Fund Calculator - ${countryName}`,
          description: `Estimated RPM rates: ${rpmMin}-${rpmMax} per 1,000 views`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
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
        item: 'https://tiktokcalculator.net/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Global TikTok Statistics',
        item: 'https://tiktokcalculator.net/region/',
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
