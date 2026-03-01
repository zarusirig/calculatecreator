export function BlogListingSchema() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TikTok Creator Blog',
    description: 'Expert insights on TikTok monetization, creator earnings, and platform strategies',
    url: 'https://calculatecreator.com/blog/',
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://calculatecreator.com/images/calculate-creator-transparent-v2.png'
      }
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Creator Fund vs LIVE Gifts: Which Pays More?',
        url: 'https://calculatecreator.com/blog/creator-fund-vs-live-gifts/',
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
        item: 'https://calculatecreator.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://calculatecreator.com/blog/'
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
