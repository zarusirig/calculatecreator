interface FAQ {
  question: string;
  answer: string;
}

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  faqs?: FAQ[];
  readTime?: string;
  image?: string;
  wordCount?: number;
  articleSection?: string;
}

export function BlogPostSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  faqs = [],
  readTime = '7 min',
  image,
  wordCount,
  articleSection,
}: BlogPostSchemaProps) {
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
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
    timeRequired: readTime,
    ...(image && { image }),
    ...(wordCount && { wordCount }),
    ...(articleSection && { articleSection }),
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
        name: 'Blog',
        item: 'https://calculatecreator.com/blog/'
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
