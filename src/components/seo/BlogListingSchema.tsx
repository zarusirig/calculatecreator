export function BlogListingSchema() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TikTok Creator Blog',
    description: 'Expert insights on TikTok monetization, creator earnings, and platform strategies',
    url: 'https://tiktokcalculator.net/blog/',
    publisher: {
      '@type': 'Organization',
      name: 'TT Calculator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tiktokcalculator.net/images/tt-calculator-logo.png'
      }
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Creator Fund vs LIVE Gifts: Which Pays More?',
        url: 'https://tiktokcalculator.net/blog/creator-fund-vs-live-gifts/',
        description: 'Compare TikTok Creator Fund earnings vs LIVE streaming gift revenue. See which monetization method works best for your content style.',
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
        item: 'https://tiktokcalculator.net/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://tiktokcalculator.net/blog/'
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
