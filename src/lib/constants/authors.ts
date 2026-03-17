/**
 * Public author profiles used across bylines, bio cards, and schema.
 * These profiles represent internal editorial desks rather than individual public personas.
 */

export interface Author {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  expertise: string[];
  bio: string;
  image?: string;
  authorUrl?: string;
  socialLinks?: {
    tiktok?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const AUTHORS: Record<string, Author> = {
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'TT Calculator Editorial Desk',
    role: 'Editorial Desk',
    authorUrl: '/about/',
    credentials: [
      'Maintains editorial standards for calculator and guide pages',
      'Coordinates revisions when assumptions, wording, or examples need correction',
      'Works across monetization, pricing, and sponsorship content',
    ],
    expertise: [
      'Brand Deals & Sponsorships',
      'Creator Monetization',
      'Influencer Marketing',
      'Content QA',
    ],
    bio: 'This desk manages editorial structure, monetization explainers, and pricing content for TT Calculator. It represents an internal publishing function rather than a single named public spokesperson.',
  },
  'michael-chen': {
    id: 'michael-chen',
    name: 'TT Calculator Research Desk',
    role: 'Research Desk',
    authorUrl: '/about/',
    credentials: [
      'Reviews public documentation and published market references',
      'Maintains benchmark notes and source attribution standards',
      'Flags outdated assumptions and conflicting source material',
    ],
    expertise: [
      'Creator Program Analysis',
      'RPM Optimization',
      'Algorithm Analysis',
      'Performance Metrics',
    ],
    bio: 'This desk is responsible for documenting public-source research, benchmark ranges, and methodology notes used across TT Calculator. It represents a collaborative research workflow rather than an individual analyst profile.',
  },
  'jessica-rodriguez': {
    id: 'jessica-rodriguez',
    name: 'TT Calculator LIVE Desk',
    role: 'LIVE & Community Desk',
    authorUrl: '/about/',
    credentials: [
      'Maintains LIVE, gifting, and audience-interaction guidance',
      'Documents feature eligibility, workflow notes, and known limitations',
      'Coordinates updates for livestream-related tools and guides',
    ],
    expertise: [
      'TikTok LIVE Streaming',
      'Audience Engagement',
      'Gift Monetization',
      'Community Building',
    ],
    bio: 'This desk covers LIVE monetization, community features, and streaming workflows on TT Calculator. The profile is used for collaborative product and editorial work, not to represent a single streamer identity.',
  },
  'david-kim': {
    id: 'david-kim',
    name: 'TT Calculator Commerce Desk',
    role: 'Commerce Desk',
    authorUrl: '/about/',
    credentials: [
      'Maintains commerce, affiliate, and product-margin explainers',
      'Tracks seller-fee, commission, and ad-cost assumptions',
      'Coordinates updates for shop and affiliate calculators',
    ],
    expertise: [
      'TikTok Shop',
      'Affiliate Marketing',
      'E-commerce Strategy',
      'Conversion Optimization',
    ],
    bio: 'This desk focuses on commerce workflows, affiliate economics, and shop-related planning content across TT Calculator. It reflects internal category ownership rather than a standalone public consultant profile.',
  },
  'emily-thompson': {
    id: 'emily-thompson',
    name: 'TT Calculator Tax & Operations Desk',
    role: 'Tax & Operations Desk',
    authorUrl: '/about/',
    credentials: [
      'Maintains tax-planning and business-operations content',
      'Adds educational disclaimers and planning boundaries where needed',
      'Coordinates updates for tax, payout, and operating-cost tools',
    ],
    expertise: [
      'Creator Taxation',
      'Business Structure',
      'Expense Deductions',
      'Financial Planning',
    ],
    bio: 'This desk handles educational tax and operations content for TT Calculator. It is a collaborative internal profile used for workflow ownership and does not represent individualized professional advice.',
  },
  'alex-martinez': {
    id: 'alex-martinez',
    name: 'TT Calculator Growth Desk',
    role: 'Growth Desk',
    authorUrl: '/about/',
    credentials: [
      'Maintains growth, distribution, and engagement explainers',
      'Tracks platform-change notes and content-performance terminology',
      'Coordinates updates for algorithm and growth-related calculators',
    ],
    expertise: [
      'TikTok Algorithm',
      'Viral Content Strategy',
      'Growth Optimization',
      'Analytics & Metrics',
    ],
    bio: 'This desk covers growth systems, algorithm framing, and performance language across TT Calculator. It represents shared editorial ownership instead of a named public growth expert.',
  },
};

const LEGACY_AUTHOR_NAME_TO_ID: Record<string, string> = {
  'sarah johnson': 'sarah-johnson',
  'michael chen': 'michael-chen',
  'jessica rodriguez': 'jessica-rodriguez',
  'david kim': 'david-kim',
  'emily thompson': 'emily-thompson',
  'emily thompson, cpa': 'emily-thompson',
  'alex martinez': 'alex-martinez',
};

/**
 * Get author by ID
 */
export function getAuthor(authorId: string): Author | undefined {
  return AUTHORS[authorId];
}

/**
 * Get authors by expertise area
 */
export function getAuthorsByExpertise(expertise: string): Author[] {
  return Object.values(AUTHORS).filter((author) =>
    author.expertise.includes(expertise)
  );
}

/**
 * Resolve an author from frontmatter 'author' string.
 * Accepts author ID (e.g., 'sarah-johnson'), display name, or legacy byline name,
 * or falls back to DEFAULT_AUTHOR.
 */
export function resolveAuthorFromFrontmatter(authorString: string): Author {
  if (!authorString) return DEFAULT_AUTHOR;

  // Direct ID match
  if (AUTHORS[authorString]) return AUTHORS[authorString];

  // Match by display name (case-insensitive)
  const normalised = authorString.toLowerCase().trim();
  const byName = Object.values(AUTHORS).find(
    (a) => a.name.toLowerCase() === normalised
  );
  if (byName) return byName;

  const legacyAuthorId = LEGACY_AUTHOR_NAME_TO_ID[normalised];
  if (legacyAuthorId && AUTHORS[legacyAuthorId]) {
    return AUTHORS[legacyAuthorId];
  }

  // Generic team names → default
  if (
    normalised.includes('team') ||
    normalised.includes('calculatecreator') ||
    normalised.includes('tt calculator') ||
    normalised.includes('tiktok calculator')
  ) {
    return DEFAULT_AUTHOR;
  }

  return DEFAULT_AUTHOR;
}

/**
 * Default author for generic content
 */
export const DEFAULT_AUTHOR: Author = {
  id: 'tiktok-calculator-team',
  name: 'TT Calculator Team',
  role: 'Editorial Team',
  authorUrl: '/about/',
  credentials: [
    'Maintains shared calculator, guide, and policy content across the site',
    'Documents assumptions, limitations, and corrections in a common workflow',
    'Uses team bylines when work is collaborative rather than attributable to one person',
  ],
  expertise: [
    'TikTok Monetization',
    'Creator Analytics',
    'Industry Trends',
  ],
  bio: 'TT Calculator publishes calculators and editorial guidance through a shared internal workflow. Team bylines are used when a page reflects collaborative research, editing, and product work rather than a single named contributor.',
};

/**
 * Topic-based author mapping.
 * Used to auto-assign the most relevant author to an article
 * based on keywords in the slug or primaryKeyword.
 */
const TOPIC_AUTHOR_MAP: Array<{ patterns: RegExp[]; authorId: string }> = [
  {
    patterns: [/brand.?deal/i, /sponsorship/i, /negotiat/i, /influencer.?market/i, /monetization.?feature/i, /income.?stream/i, /side.?hustle/i, /money(?!.*shop)/i, /niche/i, /100k/i, /quit.?job/i],
    authorId: 'sarah-johnson',
  },
  {
    patterns: [/creator.?fund/i, /rpm/i, /earnings?.?report/i, /creator.?reward/i, /payout/i, /worth.?it/i, /vs.?youtube/i],
    authorId: 'michael-chen',
  },
  {
    patterns: [/live/i, /engagement/i, /gift/i, /streaming/i, /community/i],
    authorId: 'jessica-rodriguez',
  },
  {
    patterns: [/shop/i, /affiliate/i, /e.?commerce/i, /product/i, /spark.?ad/i],
    authorId: 'david-kim',
  },
  {
    patterns: [/tax/i, /deduction/i, /finance/i, /business.?structure/i, /cpa/i],
    authorId: 'emily-thompson',
  },
  {
    patterns: [/algorithm/i, /growth/i, /viral/i, /trend/i, /ban/i, /update/i, /feature/i, /new.?feature/i, /strategy/i, /lemon8/i],
    authorId: 'alex-martinez',
  },
];

/**
 * Guess the best author for an article based on its slug or primary keyword.
 */
export function guessAuthorForTopic(slugOrKeyword: string): Author {
  for (const mapping of TOPIC_AUTHOR_MAP) {
    for (const pattern of mapping.patterns) {
      if (pattern.test(slugOrKeyword)) {
        return AUTHORS[mapping.authorId] || DEFAULT_AUTHOR;
      }
    }
  }
  return DEFAULT_AUTHOR;
}
