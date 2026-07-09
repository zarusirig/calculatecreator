import { SITE_CONFIG } from '@/lib/constants/site-config';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  category: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  category,
  datePublished = '2026-03-01T00:00:00Z',
  dateModified = '2026-03-01T00:00:00Z',
  image,
}: ArticleSchemaProps) {
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
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logoUrl
      }
    },
    image: {
      '@type': 'ImageObject',
      url: image || SITE_CONFIG.ogImage
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
        item: 'https://ttcalculator.net/'
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
