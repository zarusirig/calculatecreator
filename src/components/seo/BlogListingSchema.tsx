import { SITE_CONFIG } from '@/lib/constants/site-config';

export function BlogListingSchema() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_CONFIG.url}/blog/#blog`,
    name: 'TikTok Creator Blog',
    description: 'Expert insights on TikTok monetization, creator earnings, and platform strategies',
    url: 'https://ttcalculator.net/blog/',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logoUrl
      }
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Creator Fund vs LIVE Gifts: Which Pays More?',
        url: 'https://ttcalculator.net/blog/creator-fund-vs-live-gifts/',
        description: 'Compare TikTok Creator Fund earnings vs LIVE streaming gift revenue. See which monetization method works best for your content style.',
        image: SITE_CONFIG.ogImage,
        datePublished: '2026-03-01',
        dateModified: '2026-03-01'
      }
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
        item: 'https://ttcalculator.net/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://ttcalculator.net/blog/'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
