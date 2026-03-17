import { CALCULATOR_SCHEMAS } from '@/lib/seo/calculator-schemas';
import { SITE_CONFIG, siteUrl } from '@/lib/constants/site-config';

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
    name: SITE_CONFIG.name,
    url: siteUrl('/'),
    logo: SITE_CONFIG.logoUrl,
    description: 'Free TikTok creator calculators and benchmarks. Transparent earnings estimates, engagement analytics, and growth tools with expert-reviewed methodology.',
    sameAs: [] as string[],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: 'TikTok Calculator — Free TikTok Earnings & Engagement Calculator',
    url: siteUrl('/'),
    description: 'Free TikTok calculator to estimate earnings per view, engagement rate, brand deal rates, RPM, LIVE gift revenue, and TikTok Shop commissions. 35+ calculators with transparent methodology.',
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
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
        name: 'How accurate is the TikTok calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our TikTok calculator provides directional estimates based on your actual metrics and commonly reported payout ranges. Results reflect what creators in similar niches and follower tiers typically report. Each calculator shows its assumptions and methodology so you can evaluate the estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the TikTok money calculator estimate earnings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The TikTok money calculator combines your view count, engagement rate, content niche, and audience geography to estimate earnings across Creator Fund payouts ($0.02-$0.05 per 1,000 views), brand deals, LIVE gifts, and TikTok Shop commissions. Each revenue stream is calculated separately with transparent methodology.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this TikTok calculator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All 35+ TikTok calculators are completely free with no signup, no email gate, and no usage limits. Your inputs stay in your browser and are never stored or shared.',
        },
      },
      {
        '@type': 'Question',
        name: 'What TikTok calculators are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer 35+ free TikTok calculators including: TikTok Money Calculator, Engagement Rate Calculator, Brand Deal Rate Calculator, RPM Calculator, Creator Fund Calculator, Coin Converter, LIVE Gift Calculator, Diamond Converter, Shop Commission Calculator, Follower Growth Calculator, Viral Potential Calculator, Watch Time Calculator, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does TikTok pay per 1 million views?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TikTok Creator Fund pays $20-$50 per million views depending on engagement, niche, and audience geography. Brand deals for the same 1 million views can generate $500-$2,500+. Use the TikTok money calculator to see total earning potential across all revenue streams.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often is the TikTok calculator updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We update TikTok calculator assumptions when TikTok changes its payout structure, Creator Fund rates, or monetization rules. Benchmark data is reviewed regularly against the latest reported creator earnings in 2026.',
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
        item: siteUrl('/'),
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_CONFIG.url}/#calculator-list`,
    name: 'TikTok Calculator — All Free TikTok Calculators',
    description: 'Free TikTok calculator suite: estimate TikTok earnings, engagement rate, brand deal rates, Creator Fund payouts, LIVE gift revenue, and more.',
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
          url: siteUrl(`/calculators/${slug}`),
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      };
    }),
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_CONFIG.url}/#collection`,
    name: 'TikTok Calculator Hub — Free Creator Tools',
    description: 'Comprehensive TikTok calculator collection: 35+ free tools to estimate TikTok earnings, engagement rate, brand deal pricing, and growth metrics.',
    url: siteUrl('/'),
    isPartOf: {
      '@id': `${SITE_CONFIG.url}/#website`,
    },
    about: {
      '@type': 'Thing',
      name: 'TikTok Creator Earnings',
      description: 'Tools and calculators for TikTok content creators to estimate and optimize their earnings.',
    },
    mainEntity: {
      '@id': `${SITE_CONFIG.url}/#calculator-list`,
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
