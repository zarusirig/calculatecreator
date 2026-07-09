import React from 'react';
import { SITE_CONFIG } from '@/lib/constants/site-config';

/** Stable canonical URIs for cross-page entity linking (SCH-2). */
const ORG_ID = `${SITE_CONFIG.url}/#organization`;
const SITE_ID = `${SITE_CONFIG.url}/#website`;
const DEFAULT_ARTICLE_IMAGE = SITE_CONFIG.ogImage;
const DEFAULT_PERSON_IMAGE = SITE_CONFIG.logoUrl;

export interface CalculatorSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  author?: {
    name: string;
    url?: string;
  };
  /** When provided, uses Person schema type for the author instead of Organization */
  personAuthor?: {
    name: string;
    jobTitle?: string;
    url?: string;
    sameAs?: string[];
    image?: string;
  };
  datePublished?: string;
  dateModified?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  image?: string;
  keywords?: string[];
}

export function CalculatorSchema({
  name,
  description,
  url,
  category = 'BusinessApplication',
  author = { name: SITE_CONFIG.name, url: `${SITE_CONFIG.url}/` },
  personAuthor,
  datePublished,
  dateModified,
  offers = { price: '0', priceCurrency: 'USD' },
  image,
  keywords,
}: CalculatorSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#calculator`,
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: 'https://schema.org/InStock',
    },
    author: personAuthor
      ? {
        '@type': 'Person' as const,
        '@id': personAuthor.url
          ? `${personAuthor.url.replace(/\/$/, '')}#person`
          : undefined,
        name: personAuthor.name,
        ...(personAuthor.jobTitle && { jobTitle: personAuthor.jobTitle }),
        ...(personAuthor.url && { url: personAuthor.url }),
        image: personAuthor.image || DEFAULT_PERSON_IMAGE,
        ...(personAuthor.sameAs && personAuthor.sameAs.length > 0 && { sameAs: personAuthor.sameAs }),
      }
      : {
        '@type': 'Organization' as const,
        '@id': ORG_ID,
        name: author.name,
        url: author.url,
      },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image }),
    ...(keywords && { keywords: keywords.join(', ') }),
    isAccessibleForFree: true,
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema for guides and pillar pages
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: {
    name: string;
    url?: string;
  };
  /** When provided, uses Person schema type for the author instead of Organization */
  personAuthor?: {
    name: string;
    jobTitle?: string;
    url?: string;
    sameAs?: string[];
    image?: string;
  };
  image?: string;
  keywords?: string[];
  articleBody?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author = { name: SITE_CONFIG.name, url: `${SITE_CONFIG.url}/` },
  personAuthor,
  image,
  keywords,
  articleBody,
}: ArticleSchemaProps) {
  const resolvedImage = image || DEFAULT_ARTICLE_IMAGE;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: personAuthor
      ? {
        '@type': 'Person' as const,
        '@id': personAuthor.url
          ? `${personAuthor.url.replace(/\/$/, '')}#person`
          : undefined,
        name: personAuthor.name,
        ...(personAuthor.jobTitle && { jobTitle: personAuthor.jobTitle }),
        ...(personAuthor.url && { url: personAuthor.url }),
        image: personAuthor.image || DEFAULT_PERSON_IMAGE,
        ...(personAuthor.sameAs && personAuthor.sameAs.length > 0 && { sameAs: personAuthor.sameAs }),
      }
      : {
        '@type': 'Organization' as const,
        '@id': ORG_ID,
        name: author.name,
        url: author.url,
      },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logoUrl,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: resolvedImage,
    },
    ...(keywords && { keywords: keywords.join(', ') }),
    ...(articleBody && { articleBody }),
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for FAQ sections
export interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
export interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization Schema for homepage
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_CONFIG.name,
    url: `${SITE_CONFIG.url}/`,
    logo: SITE_CONFIG.logoUrl,
    description:
      'Free TikTok creator calculators and benchmarks. Transparent earnings estimates, engagement analytics, and growth tools with expert-reviewed methodology.',
    // NOTE (SCH-3/EEAT-1): sameAs is intentionally empty — the site has no verified
    // social/profile URLs today. Populate from a shared constant (e.g. SITE_CONFIG.sameAs)
    // once real profiles exist; do not fabricate URLs.
    sameAs: [] as string[],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema for homepage
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: SITE_CONFIG.name,
    alternateName: 'TikTok Calculator',
    url: `${SITE_CONFIG.url}/`,
    description:
      'Free TikTok calculators and tools for creators. Calculate earnings, engagement rates, follower growth, and more.',
    publisher: {
      '@id': ORG_ID,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Person Schema for authors
export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  url?: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  affiliation?: {
    name: string;
    url: string;
  };
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  url,
  image,
  sameAs,
  knowsAbout,
  affiliation,
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    ...(url && { '@id': `${url.replace(/\/$/, '')}#person` }),
    name,
    jobTitle,
    description,
    image: image || DEFAULT_PERSON_IMAGE,
    ...(url && { url }),
    ...(sameAs && { sameAs }),
    ...(knowsAbout && { knowsAbout }),
    ...(affiliation && {
      affiliation: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: affiliation.name,
        url: affiliation.url,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for guides
export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    value: string;
    currency: string;
  };
  tool?: string[];
  supply?: string[];
  steps: HowToStep[];
}

export function HowToSchema({
  name,
  description,
  image,
  totalTime,
  estimatedCost,
  tool,
  supply,
  steps,
}: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(image && { image }),
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        value: estimatedCost.value,
        currency: estimatedCost.currency,
      },
    }),
    ...(tool && { tool }),
    ...(supply && { supply }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Review Schema for tools and calculators
export interface ReviewSchemaProps {
  itemReviewed: {
    name: string;
    type: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  author: {
    name: string;
    type?: string;
  };
  reviewBody?: string;
  datePublished?: string;
}

export function ReviewSchema({
  itemReviewed,
  reviewRating,
  author,
  reviewBody,
  datePublished,
}: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': itemReviewed.type || 'SoftwareApplication',
      name: itemReviewed.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue.toString(),
      bestRating: reviewRating.bestRating.toString(),
      worstRating: reviewRating.worstRating.toString(),
    },
    author: {
      '@type': author.type || 'Organization',
      name: author.name,
    },
    ...(reviewBody && { reviewBody }),
    ...(datePublished && { datePublished }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// NewsArticle Schema for news pages
export interface NewsArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: {
    name: string;
    url?: string;
  };
  /** When provided, uses Person schema type for the author instead of Organization (SCH-5). */
  personAuthor?: {
    name: string;
    jobTitle?: string;
    url?: string;
    sameAs?: string[];
    image?: string;
  };
  image?: string;
  keywords?: string[];
  articleBody?: string;
}

export function NewsArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author = { name: SITE_CONFIG.name, url: `${SITE_CONFIG.url}/` },
  personAuthor,
  image,
  keywords,
  articleBody,
}: NewsArticleSchemaProps) {
  const resolvedImage = image || DEFAULT_ARTICLE_IMAGE;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${url}#newsarticle`,
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: personAuthor
      ? {
        '@type': 'Person' as const,
        '@id': personAuthor.url
          ? `${personAuthor.url.replace(/\/$/, '')}#person`
          : undefined,
        name: personAuthor.name,
        ...(personAuthor.jobTitle && { jobTitle: personAuthor.jobTitle }),
        ...(personAuthor.url && { url: personAuthor.url }),
        image: personAuthor.image || DEFAULT_PERSON_IMAGE,
        ...(personAuthor.sameAs && personAuthor.sameAs.length > 0 && { sameAs: personAuthor.sameAs }),
      }
      : {
        '@type': 'Organization' as const,
        '@id': ORG_ID,
        name: author.name,
        url: author.url,
      },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logoUrl,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: resolvedImage,
    },
    ...(keywords && { keywords: keywords.join(', ') }),
    ...(articleBody && { articleBody }),
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// CollectionPage Schema for category pages
export interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  calculators: Array<{
    name: string;
    description: string;
    slug: string;
    url?: string;
  }>;
  keywords?: string[];
  about?: {
    name: string;
    description: string;
  };
}

export function CollectionPageSchema({
  name,
  description,
  url,
  calculators,
  keywords,
  about,
}: CollectionPageSchemaProps) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#calculator-list`,
    name,
    description,
    numberOfItems: calculators.length,
    itemListElement: calculators.map((calc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: calc.name,
        description: calc.description,
        url: calc.url || `${url.replace(/\/$/, '')}/${calc.slug}`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    })),
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name,
    description,
    url,
    isPartOf: {
      '@id': SITE_ID,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logoUrl,
      },
    },
    ...(about && {
      about: {
        '@type': 'Thing',
        name: about.name,
        description: about.description,
      },
    }),
    mainEntity: {
      '@id': `${url}#calculator-list`,
    },
    ...(keywords && { keywords }),
  };

  return (
    <>
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
