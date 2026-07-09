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
  /** What this editorial desk owns, why it exists, and the questions it answers for creators. */
  editorialFocus?: string;
  /** How this desk sources, verifies, and updates the content it maintains. */
  methodologyNote?: string;
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
    bio: 'This desk manages editorial structure, monetization explainers, and pricing content for TT Calculator. It coordinates how brand-deal, sponsorship, and creator-income topics are written, reviewed, and kept consistent across the 35+ calculators and guides on the site. The profile represents an internal publishing function rather than a single named public spokesperson.',
    editorialFocus: 'The Editorial Desk owns brand-deal, sponsorship, and creator-monetization explainers across TT Calculator. It answers the questions creators ask before negotiating: how to price a sponsored post, what rate to quote an agency, and which income streams stack for a given follower count. The desk maintains the brand-deal-rate, sponsorship-ROI, and niche-profitability pages, plus the how-to-get-brand-deals guide. It enforces a consistent editorial voice so pricing guidance stays uniform from calculator inputs to long-form explainers. Every monetization page on the site passes through this desk for structure and language review.',
    methodologyNote: 'The desk documents every pricing assumption behind its calculators, including the follower-tier, engagement, and niche multipliers built into brand-deal-rate estimates. It revises inputs when public sponsorship benchmarks shift, recording each change alongside the methodology notes for that page. Cross-checks compare three categories of evidence: published creator-rate surveys, agency rate cards, and disclosed deal examples. Disclaimers mark every estimate as a planning range, not a guaranteed offer. Platform monetization-rule changes trigger updates to the affected calculators and their referencing explainers.',
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
    bio: 'This desk documents public-source research, benchmark ranges, and methodology notes used across TT Calculator. It tracks published creator-program documentation, earnings references, and RPM data points that anchor the calculators on the site. The profile represents a collaborative research workflow rather than an individual analyst.',
    editorialFocus: 'The Research Desk owns benchmark data and source attribution for creator-program, RPM, and earnings content. It answers how creator payouts are calculated, what RPM ranges actually look like by niche, and which program rules change the math. The desk maintains the creator-fund, RPM, and ad-revenue pages, plus the creator-fund guide. Its notes feed the assumptions inside every earnings calculator on the site. The work centers on reading published platform documentation and translating it into inputs creators can act on.',
    methodologyNote: 'The desk cites published platform documentation and disclosed creator earnings, and it labels every benchmark with its source and observation window. It tracks three reference types: official program terms, creator-disclosed earnings, and third-party industry reports. When a platform changes payout formulas or eligibility rules, the desk revises the affected inputs and timestamps the update. Conflicting sources are flagged rather than averaged, so readers see the range, not a smoothed midpoint. The methodology page documents the origin and last-reviewed date of each benchmark.',
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
    bio: 'This desk covers LIVE monetization, community features, and streaming workflows on TT Calculator. It maintains the gifting, audience-engagement, and livestream-planning content that creators use before and during a stream. The profile serves collaborative product and editorial work rather than a single streamer identity.',
    editorialFocus: 'The LIVE Desk owns gift-monetization, audience-engagement, and community-building content for livestream creators. It answers what gifts are worth in real currency, which eligibility gates unlock LIVE monetization, and how engagement patterns affect gift revenue. The desk maintains the live-gifts, diamond-converter, and coins pages, where viewers and creators translate virtual currency into dollar values. It also owns the engagement-rate and comment-rate tools streamers use to benchmark session performance. The content targets three moments: pre-stream planning, in-stream optimization, and post-session review.',
    methodologyNote: 'The desk bases gift-value conversions on the published coin-to-diamond and diamond-to-currency rates that platforms disclose. It revises the live-gifts and diamond-converter pages when TikTok adjusts gift pricing, payout shares, or creator-eligible regions. Eligibility notes distinguish requirements the platform publishes from those reported by creators. The desk documents three conversion layers: coin purchase price, diamond allocation, and creator payout share. Each converter lists its assumed rates and the date those rates were last verified.',
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
    bio: 'This desk focuses on commerce workflows, affiliate economics, and shop-related planning content across TT Calculator. It maintains the seller-fee, commission, and ad-cost assumptions that drive the shop and affiliate calculators. The profile reflects internal category ownership rather than a standalone public consultant.',
    editorialFocus: 'The Commerce Desk owns TikTok Shop, affiliate, and product-margin content on TT Calculator. It answers how affiliate commissions compound across a catalog, what seller fees subtract from gross revenue, and which conversion rates make a product viable. The desk maintains the affiliate-commission, conversion-rate, and campaign-ROI pages, along with the TikTok ads hub. It connects three commerce layers: product margin, traffic cost, and commission payout. The content helps creators and sellers model profit before they commit ad spend or inventory.',
    methodologyNote: 'The desk tracks published seller-fee schedules, affiliate-commission tiers, and ad-cost benchmarks, and it stores each as a labeled input inside the calculators. It revises assumptions when platforms update commission rates, fulfillment fees, or ad-auction dynamics. The desk separates three data classes: platform-published fee tables, creator-reported margins, and modeled breakeven thresholds. Every commerce calculator exposes its margin, fee, and conversion assumptions so users can override them. The methodology page records the source and last-reviewed date for each input.',
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
    bio: 'This desk handles educational tax and operations content for TT Calculator. It maintains the planning boundaries, disclaimers, and operating-cost assumptions that frame the financial tools on the site. The profile is a collaborative internal function and does not represent individualized professional advice.',
    editorialFocus: 'The Tax & Operations Desk owns creator-taxation, business-structure, and operating-cost content. It answers which creator expenses are deductible, how payout frequency affects cash planning, and where the line sits between education and personalized advice. The desk maintains the break-even, production-cost, and milestone-tracker pages, which help creators model costs and goals. It attaches educational disclaimers to every tax-adjacent page, marking the content as general guidance. The work covers three operational areas: income planning, expense tracking, and business formation.',
    methodologyNote: 'The desk cites published tax-code structure and IRS-form references, and it avoids giving individualized filing advice. It revises content when tax brackets, deduction thresholds, or reporting forms change. The desk separates three information tiers: general tax principles, jurisdiction-specific rules, and creator-specific planning notes. Every tax-adjacent page names its assumptions and directs readers to a qualified professional for filing decisions. The methodology page documents the educational boundaries and disclaimer standards for this desk.',
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
    bio: 'This desk covers growth systems, algorithm framing, and performance language across TT Calculator. It maintains the distribution, engagement-metric, and trend-response content that creators use to plan reach. The profile represents shared editorial ownership rather than a named public growth expert.',
    editorialFocus: 'The Growth Desk owns algorithm, distribution, and performance-metric content on TT Calculator. It answers which engagement signals the platform rewards, how watch-time and completion-rate shape reach, and what a viral-potential score actually measures. The desk maintains the viral-potential, watch-time, and follower-growth pages, along with the growth hub. It frames three growth inputs: content-level engagement, posting cadence, and audience-retention patterns. The content translates algorithm behavior into metrics creators can track and improve.',
    methodologyNote: 'The desk documents platform-published ranking signals and separates them from creator-reported patterns. It revises growth content when TikTok changes its recommendation logic, adds ranking signals, or updates feature eligibility. The desk organizes evidence into three buckets: official algorithm statements, observed performance patterns, and benchmark distributions from the calculators on the site. Every growth calculator exposes the weights behind its scores. Users see exactly how each input combines into the final result. The methodology page records the signal definitions and the last-reviewed date for each score.',
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
