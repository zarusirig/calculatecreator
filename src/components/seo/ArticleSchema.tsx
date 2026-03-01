interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  category: string;
  datePublished?: string;
  dateModified?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  category,
  datePublished = '2026-03-01T00:00:00Z',
  dateModified = '2026-03-01T00:00:00Z',
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
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
    articleSection: category,
    inLanguage: 'en-US',
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
        name: category,
        item: url.substring(0, url.lastIndexOf('/'))
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url
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
    </>
  );
}
