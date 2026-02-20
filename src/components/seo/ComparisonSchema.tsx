interface FAQ {
  question: string;
  answer: string;
}

interface ComparisonSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  subjectA: string;
  subjectB: string;
  faqs?: FAQ[];
  readTime?: string;
}

export function ComparisonSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  subjectA,
  subjectB,
  faqs = [],
  readTime = '8 min'
}: ComparisonSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/images/calculate-creator-transparent-v2.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    articleSection: 'Creator Earnings Comparison',
    about: [
      {
        '@type': 'Thing',
        name: subjectA,
        description: `Analysis of ${subjectA} for content creators`
      },
      {
        '@type': 'Thing',
        name: subjectB,
        description: `Analysis of ${subjectB} for content creators`
      }
    ],
    timeRequired: readTime,
    keywords: [
      `${subjectA} vs ${subjectB}`,
      'creator earnings comparison',
      'TikTok monetization',
      'influencer income',
      'social media earnings'
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://calculatecreator.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Comparisons',
        item: 'https://calculatecreator.com/comparisons/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url
      }
    ]
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'ComparisonTable',
    '@id': `${url}#comparison`,
    name: `${subjectA} vs ${subjectB} Comparison`,
    description: `Detailed comparison between ${subjectA} and ${subjectB} for content creators`,
    url: url,
    about: [
      {
        '@type': 'Thing',
        name: subjectA
      },
      {
        '@type': 'Thing',
        name: subjectB
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
