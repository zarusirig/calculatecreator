interface CollectionItem {
  name: string;
  description: string;
  url: string;
  category?: string;
}

interface CollectionSchemaProps {
  title: string;
  description: string;
  url: string;
  items: CollectionItem[];
  collectionType?: 'Calculators' | 'Guides' | 'News' | 'Data';
}

export function CollectionSchema({
  title,
  description,
  url,
  items,
  collectionType = 'Calculators',
}: CollectionSchemaProps) {
  const itemType =
    collectionType === 'Calculators'
      ? 'SoftwareApplication'
      : collectionType === 'Data'
        ? 'Dataset'
        : 'Article';

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@id': 'https://calculatecreator.com/#website',
    },
    about: {
      '@type': 'Thing',
      name: `TikTok Creator ${collectionType}`,
      description: `Collection of ${collectionType.toLowerCase()} for TikTok creators.`,
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

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#itemlist`,
    name: title,
    description: description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': itemType,
        name: item.name,
        description: item.description,
        url: item.url,
        ...(collectionType === 'Calculators' && {
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }),
        ...(item.category && {
          articleSection: item.category,
        }),
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
