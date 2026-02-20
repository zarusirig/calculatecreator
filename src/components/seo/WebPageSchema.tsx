interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export function WebPageSchema({ title, description, url, breadcrumbs = [] }: WebPageSchemaProps) {
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
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/images/calculate-creator-transparent-v2.png',
      },
    },
  };

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://calculatecreator.com/',
    },
    ...breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: crumb.name,
      item: crumb.url,
    })),
    {
      '@type': 'ListItem',
      position: breadcrumbs.length + 2,
      name: title,
      item: url,
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

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
    </>
  );
}
