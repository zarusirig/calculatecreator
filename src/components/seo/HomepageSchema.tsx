import { CALCULATOR_SCHEMAS } from '@/lib/seo/calculator-schemas';

const PRIMARY_CALCULATOR_SLUGS = [
  'tiktok-money',
  'tiktok-creator-fund',
  'rpm',
  'brand-deal-rate',
  'live-gifts',
  'shop-commission',
  'engagement-rate',
  'coins',
  'diamond-converter',
];

export function HomepageSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculateCreator.com',
    url: 'https://calculatecreator.com/',
    logo: 'https://calculatecreator.com/logo.png',
    description: 'Free TikTok earnings calculators and monetization tools for creators. Calculate Creator Fund earnings, brand deal rates, LIVE gifts, and Shop commissions.',
    sameAs: [
      'https://twitter.com/calculatecreator',
      'https://facebook.com/calculatecreator',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@calculatecreator.com',
      url: 'https://calculatecreator.com/contact/',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://calculatecreator.com/#website',
    name: 'CalculateCreator.com',
    url: 'https://calculatecreator.com/',
    description: 'Calculate TikTok earnings from Creator Fund, brand deals, LIVE gifts, and Shop commissions. 35+ free calculators with transparent methodology.',
    publisher: {
      '@type': 'Organization',
      name: 'CalculateCreator.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://calculatecreator.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much do TikTok creators earn per 1,000 views?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TikTok Creator Fund pays $0.02-$0.04 per 1,000 views ($20-$40 per million views). Your exact RPM depends on engagement rate, content niche, audience location, and video completion rate. Use our Creator Fund Calculator for personalized estimates based on your metrics.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does TikTok RPM work and how can I increase it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RPM (Revenue Per Mille) measures earnings per 1,000 views. Higher engagement rates, longer watch times, premium content niches (finance, tech), and audiences in high-CPM countries increase your RPM. Our RPM Calculator and optimization guides show you exactly how to maximize your rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do LIVE gifts convert to real money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TikTok LIVE viewers send virtual gifts purchased with coins. Creators receive diamonds (50% conversion rate) which convert to cash at $0.005 per diamond. A Rose (1 coin) = 0.5 diamonds = $0.0025. Use our Diamond Converter and LIVE Gifts Calculator to estimate potential earnings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do TikTok Shop commissions pay out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TikTok Shop affiliates earn 5-20% commission on product sales depending on category. Commissions are paid 7-14 days after order confirmation. Our Shop Commission Calculator helps you estimate earnings based on product price, commission rate, and expected sales volume.',
        },
      },
      {
        '@type': 'Question',
        name: 'What factors influence TikTok earnings the most?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The five most important factors are: (1) Engagement rate (comments/shares matter more than likes), (2) Content niche (finance/tech pay 2-3x more than entertainment), (3) Audience geography (US/UK audiences pay higher CPMs), (4) Video completion rate (longer watch time = higher RPM), and (5) Posting consistency (1-3 videos daily maximizes views).',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does 1 million TikTok views actually pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Creator Fund: $20-$40 per million views. Brand deals: $500-$2,500+ depending on engagement. The same 1 million views can generate 10-50x more revenue through sponsorships than Creator Fund alone. Our TikTok Money Calculator shows total earning potential across all streams.',
        },
      },
    ],
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
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://calculatecreator.com/#calculator-list',
    name: 'TikTok Earnings Calculators',
    description: 'Free calculators for TikTok creators to estimate earnings from Creator Fund, brand deals, LIVE gifts, and more.',
    numberOfItems: PRIMARY_CALCULATOR_SLUGS.length,
    itemListElement: PRIMARY_CALCULATOR_SLUGS.map((slug, index) => {
      const config = CALCULATOR_SCHEMAS[slug];
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: config?.name || slug,
          description: config?.description || '',
          url: `https://calculatecreator.com/calculators/${slug}/`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          ...(config?.aggregateRating && {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: config.aggregateRating.ratingValue,
              reviewCount: config.aggregateRating.reviewCount,
              bestRating: 5,
              worstRating: 1,
            },
          }),
        },
      };
    }),
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://calculatecreator.com/#collection',
    name: 'TikTok Creator Calculator Hub',
    description: 'Comprehensive collection of free TikTok earnings calculators for creators to maximize their income potential.',
    url: 'https://calculatecreator.com/',
    isPartOf: {
      '@id': 'https://calculatecreator.com/#website',
    },
    about: {
      '@type': 'Thing',
      name: 'TikTok Creator Earnings',
      description: 'Tools and calculators for TikTok content creators to estimate and optimize their earnings.',
    },
    mainEntity: {
      '@id': 'https://calculatecreator.com/#calculator-list',
    },
    keywords: [
      'TikTok calculator',
      'creator earnings',
      'TikTok money calculator',
      'influencer tools',
      'social media earnings',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
    </>
  );
}
