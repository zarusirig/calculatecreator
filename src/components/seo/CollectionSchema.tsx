import { SITE_CONFIG } from '@/lib/constants/site-config';

interface CollectionItem {
  name: string;
  description: string;
  url: string;
  category?: string;
  /** Optional per-item image; falls back to the site default OG image (SCH-1). */
  image?: string;
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
      '@id': `${SITE_CONFIG.url}/#website`,
    },
    about: {
      '@type': 'Thing',
      name: `TikTok Creator ${collectionType}`,
      description: `Collection of ${collectionType.toLowerCase()} for TikTok creators.`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logoUrl,
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
        // SCH-1: Article/Dataset items need an image for rich-result eligibility.
        // Use the item-specific image when provided, else the site default OG image.
        ...(itemType !== 'SoftwareApplication' && {
          image: item.image || SITE_CONFIG.ogImage,
        }),
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
        item: 'https://tiktokcalculator.net/',
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
