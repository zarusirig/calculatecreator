interface DatasetSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  creator?: string;
  keywords?: string[];
  distribution?: {
    contentUrl?: string;
    encodingFormat?: string;
  }[];
}

export function DatasetSchema({
  title,
  description,
  url,
  datePublished = '2024-01-15',
  dateModified = '2026-01-27',
  creator = 'CalculateCreator.com',
  keywords = [],
  distribution = [],
}: DatasetSchemaProps) {
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: title,
    description: description,
    url: url,
    creator: {
      '@type': 'Organization',
      name: creator,
      url: 'https://calculatecreator.com/',
    },
    datePublished: datePublished,
    dateModified: dateModified,
    keywords: keywords,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    ...(distribution.length > 0 && { distribution }),
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
        name: 'Data',
        item: 'https://calculatecreator.com/data/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
