interface ReferenceSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  hasTable?: boolean;
}

export function ReferenceSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  hasTable = true,
}: ReferenceSchemaProps) {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      url: 'https://calculatecreator.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/images/calculate-creator-transparent-v2.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    breadcrumb: {
      '@id': `${url}#breadcrumb`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
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
        name: 'Reference',
        item: 'https://calculatecreator.com/reference/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  const tableSchema = hasTable
    ? {
        '@context': 'https://schema.org',
        '@type': 'Table',
        '@id': `${url}#table`,
        name: title,
        description: description,
        about: {
          '@type': 'Thing',
          name: 'TikTok Creator Information',
          description: description,
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {tableSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
        />
      )}
    </>
  );
}
