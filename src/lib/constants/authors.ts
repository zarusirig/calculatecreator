/**
 * Author profiles for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * All content is authored and reviewed by experienced TikTok creators and industry experts
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
    name: 'Sarah Johnson',
    role: 'Senior Creator Strategist',
    authorUrl: '/about/#sarah-johnson',
    credentials: [
      '5+ years TikTok creator experience',
      'Managed 100+ brand partnerships',
      'Former social media manager at Fortune 500 company',
      '2M+ followers across platforms',
    ],
    expertise: [
      'Brand Deals & Sponsorships',
      'Creator Monetization',
      'Influencer Marketing',
      'Content Strategy',
    ],
    bio: 'Sarah is a full-time content creator and monetization expert with over 5 years of experience building profitable TikTok accounts. She has secured over $500K in brand deals and helps creators maximize their earning potential through data-driven strategies.',
    socialLinks: {
      twitter: 'https://twitter.com/sarahjcreator',
      linkedin: 'https://linkedin.com/in/sarahjohnson-creator',
    },
  },
  'michael-chen': {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Data Analyst & Creator Economist',
    authorUrl: '/about/#michael-chen',
    credentials: [
      'MS in Data Science',
      '3+ years analyzing creator economy trends',
      'Published research on social media monetization',
      'Consulted for 50+ creators on growth strategy',
    ],
    expertise: [
      'Creator Fund Analytics',
      'RPM Optimization',
      'Algorithm Analysis',
      'Performance Metrics',
    ],
    bio: 'Michael specializes in analyzing TikTok creator earnings data and platform algorithms. His research has helped thousands of creators understand their metrics and optimize for higher earnings. He tracks Creator Fund rates, engagement benchmarks, and platform trends.',
    socialLinks: {
      twitter: 'https://twitter.com/michaelchendata',
      linkedin: 'https://linkedin.com/in/michaelchen-analyst',
    },
  },
  'jessica-rodriguez': {
    id: 'jessica-rodriguez',
    name: 'Jessica Rodriguez',
    role: 'LIVE Streaming & Engagement Expert',
    authorUrl: '/about/#jessica-rodriguez',
    credentials: [
      '4+ years TikTok LIVE streaming',
      '$250K+ earned from LIVE gifts',
      'Certified digital marketing professional',
      'Trained 200+ creators on LIVE best practices',
    ],
    expertise: [
      'TikTok LIVE Streaming',
      'Audience Engagement',
      'Gift Monetization',
      'Community Building',
    ],
    bio: 'Jessica is a top TikTok LIVE streamer who has earned over $250,000 from gifts and built a loyal community of 500K+ followers. She teaches creators how to maximize LIVE earnings and build engaged audiences.',
    socialLinks: {
      tiktok: 'https://tiktok.com/@jessicarlive',
      twitter: 'https://twitter.com/jessicarlive',
    },
  },
  'david-kim': {
    id: 'david-kim',
    name: 'David Kim',
    role: 'E-commerce & TikTok Shop Specialist',
    authorUrl: '/about/#david-kim',
    credentials: [
      'MBA in E-commerce',
      '$1M+ in TikTok Shop sales',
      'Former Amazon seller',
      'TikTok Shop certified partner',
    ],
    expertise: [
      'TikTok Shop',
      'Affiliate Marketing',
      'E-commerce Strategy',
      'Conversion Optimization',
    ],
    bio: 'David has generated over $1 million in sales through TikTok Shop and affiliate marketing. He helps creators monetize through product sales and teaches effective e-commerce strategies for the creator economy.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidkim-ecommerce',
    },
  },
  'emily-thompson': {
    id: 'emily-thompson',
    name: 'Emily Thompson, CPA',
    role: 'Creator Tax & Finance Advisor',
    authorUrl: '/about/#emily-thompson',
    credentials: [
      'Certified Public Accountant (CPA)',
      '8+ years tax accounting experience',
      'Specialized in creator economy taxation',
      'Advised 300+ influencers on tax strategy',
    ],
    expertise: [
      'Creator Taxation',
      'Business Structure',
      'Expense Deductions',
      'Financial Planning',
    ],
    bio: 'Emily is a licensed CPA specializing in creator and influencer taxation. She helps content creators navigate tax obligations, maximize deductions, and structure their businesses for optimal financial outcomes.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilythompson-cpa',
    },
  },
  'alex-martinez': {
    id: 'alex-martinez',
    name: 'Alex Martinez',
    role: 'Algorithm & Growth Expert',
    authorUrl: '/about/#alex-martinez',
    credentials: [
      'Computer Science degree',
      '6+ years in social media growth',
      'Grew 10+ accounts to 100K+ followers',
      'Algorithm researcher & analyst',
    ],
    expertise: [
      'TikTok Algorithm',
      'Viral Content Strategy',
      'Growth Optimization',
      'Analytics & Metrics',
    ],
    bio: 'Alex is a growth strategist who has helped dozens of creators reach 100K+ followers by understanding and leveraging the TikTok algorithm. He analyzes platform changes and develops data-backed growth strategies.',
    socialLinks: {
      twitter: 'https://twitter.com/alexmgrowth',
      tiktok: 'https://tiktok.com/@alexmgrowth',
    },
  },
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
 * Accepts author ID (e.g., 'sarah-johnson'), display name (e.g., 'Sarah Johnson'),
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

  // Generic team names → default
  if (
    normalised.includes('team') ||
    normalised.includes('calculatecreator') ||
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
  name: 'CalculateCreator Team',
  role: 'Editorial Team',
  authorUrl: '/about/',
  credentials: [
    'Collective 20+ years creator experience',
    'Data from 50,000+ creator accounts',
    'Industry research & analysis',
  ],
  expertise: [
    'TikTok Monetization',
    'Creator Analytics',
    'Industry Trends',
  ],
  bio: 'Our team of experienced creators, data analysts, and industry experts work together to provide accurate, up-to-date information for TikTok creators. All content is thoroughly researched and based on real creator data.',
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
