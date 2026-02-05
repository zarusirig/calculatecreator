import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TikTok Creator Glossary | 100+ Terms Explained | CalculateCreator',
  description: 'Complete glossary of TikTok creator terms, monetization vocabulary, and social media metrics. Learn CPM, RPM, engagement rate, Creator Fund, and 100+ essential terms.',
  keywords: ['tiktok glossary', 'creator terms', 'tiktok vocabulary', 'cpm meaning', 'rpm meaning', 'engagement rate definition', 'creator fund explained'],
  alternates: {
    canonical: 'https://calculatecreator.com/glossary/',
  },
  openGraph: {
    title: 'TikTok Creator Glossary | 100+ Terms Explained',
    description: 'Complete glossary of TikTok creator terms, monetization vocabulary, and social media metrics.',
    url: 'https://calculatecreator.com/glossary/',
    type: 'website',
  },
};

const glossaryTerms = [
  // Monetization Terms
  {
    category: 'Monetization',
    terms: [
      {
        term: 'Creator Fund',
        definition: 'TikTok\'s program that pays creators based on video views. Requires 10,000+ followers, 100,000+ views in 30 days, and age 18+. Pays approximately $0.02-$0.04 per 1,000 views.',
        relatedCalc: '/calculators/tiktok-creator-fund/',
      },
      {
        term: 'Creativity Program',
        definition: 'TikTok\'s newer monetization program replacing Creator Fund in some regions. Pays higher rates (up to $1 per 1,000 views) but requires videos over 1 minute with original content.',
        relatedCalc: '/calculators/tiktok-creator-fund/',
      },
      {
        term: 'RPM (Revenue Per Mille)',
        definition: 'Revenue earned per 1,000 video views. Includes all monetization sources (Creator Fund, ads, etc.). Higher RPM indicates better monetization efficiency.',
        relatedCalc: '/calculators/rpm/',
      },
      {
        term: 'CPM (Cost Per Mille)',
        definition: 'Cost advertisers pay per 1,000 ad impressions. Higher CPM means advertisers pay more, which can translate to higher creator earnings in ad-supported programs.',
        relatedCalc: '/calculators/cpm-cpv/',
      },
      {
        term: 'CPV (Cost Per View)',
        definition: 'Cost advertisers pay for each video view. Typically used for video ad campaigns where advertisers pay only when users watch the ad.',
        relatedCalc: '/calculators/cpm-cpv/',
      },
      {
        term: 'Brand Deal',
        definition: 'Paid partnership where a creator promotes a brand\'s product or service. Rates vary by follower count, engagement rate, and niche. Can range from $100 to $100,000+ per post.',
        relatedCalc: '/calculators/brand-deal-rate/',
      },
      {
        term: 'Sponsorship',
        definition: 'Long-term brand partnership involving multiple posts, exclusivity agreements, or ambassador roles. Usually pays more than one-off brand deals.',
        relatedCalc: '/calculators/sponsorship-roi/',
      },
      {
        term: 'Affiliate Commission',
        definition: 'Percentage earned when followers purchase products through your unique affiliate link. TikTok Shop affiliates earn 5-20% commission typically.',
        relatedCalc: '/calculators/affiliate-commission/',
      },
      {
        term: 'TikTok Shop',
        definition: 'E-commerce feature allowing creators to sell products directly on TikTok. Creators earn through their own products or affiliate commissions on others\' products.',
        relatedCalc: '/calculators/commerce-ads/shop-profit/',
      },
      {
        term: 'LIVE Gifts',
        definition: 'Virtual gifts viewers send during TikTok LIVE streams. Gifts convert to Diamonds, then to cash. TikTok takes approximately 50% of gift value.',
        relatedCalc: '/calculators/live-gifts/',
      },
      {
        term: 'Diamonds',
        definition: 'TikTok\'s internal currency received from LIVE gifts. 1 Diamond ≈ $0.005 USD. Minimum 100 Diamonds ($0.50) to withdraw.',
        relatedCalc: '/calculators/diamond-converter/',
      },
      {
        term: 'Coins',
        definition: 'Virtual currency viewers purchase to send gifts during LIVE streams. 1 Coin ≈ $0.0105-$0.015 USD depending on purchase bundle.',
        relatedCalc: '/calculators/coins/',
      },
    ],
  },
  // Engagement Metrics
  {
    category: 'Engagement Metrics',
    terms: [
      {
        term: 'Engagement Rate',
        definition: 'Percentage of audience that interacts with content. Calculated as (likes + comments + shares) ÷ views × 100. Average TikTok engagement rate is 4-8%.',
        relatedCalc: '/calculators/engagement-rate/',
      },
      {
        term: 'Watch Time',
        definition: 'Total time viewers spend watching your video. Longer watch time signals quality content to the algorithm, increasing video distribution.',
        relatedCalc: '/calculators/watch-time/',
      },
      {
        term: 'Completion Rate',
        definition: 'Percentage of viewers who watch your entire video. Higher completion rates boost algorithm ranking. 60%+ completion is considered excellent.',
        relatedCalc: '/calculators/completion-rate/',
      },
      {
        term: 'Save Rate',
        definition: 'Percentage of viewers who save your video for later. High save rates indicate valuable, reference-worthy content that the algorithm favors.',
        relatedCalc: '/calculators/save-rate/',
      },
      {
        term: 'Share Ratio',
        definition: 'Number of shares relative to views. Videos with high share ratios have viral potential as they\'re being actively distributed by viewers.',
        relatedCalc: '/calculators/share-ratio/',
      },
      {
        term: 'Comment Rate',
        definition: 'Percentage of viewers who leave comments. High comment rates indicate engaging, discussion-worthy content.',
        relatedCalc: '/calculators/comment-rate/',
      },
      {
        term: 'Profile Visit Rate',
        definition: 'Percentage of video viewers who visit your profile afterward. Indicates content that makes viewers want to see more from you.',
        relatedCalc: '/calculators/profile-visit-rate/',
      },
      {
        term: 'Follower Conversion Rate',
        definition: 'Percentage of profile visitors who follow you. Optimization of bio, pinned videos, and content consistency affects this metric.',
        relatedCalc: '/calculators/follower-conversion/',
      },
    ],
  },
  // Algorithm & Distribution
  {
    category: 'Algorithm & Distribution',
    terms: [
      {
        term: 'For You Page (FYP)',
        definition: 'TikTok\'s main content discovery feed. The algorithm personalizes this page based on user behavior, showing content likely to engage each viewer.',
      },
      {
        term: 'Algorithm',
        definition: 'TikTok\'s recommendation system that determines which videos appear on users\' For You pages. Considers watch time, engagement, account settings, and content signals.',
      },
      {
        term: 'Viral',
        definition: 'Content that spreads rapidly through shares and algorithm distribution. No fixed view count defines "viral" but typically means 1M+ views within 24-48 hours.',
        relatedCalc: '/calculators/viral-potential/',
      },
      {
        term: 'Shadowban',
        definition: 'Unofficial term for reduced content distribution without notification. May result from guideline violations or spam-like behavior. Content still posts but reaches fewer viewers.',
      },
      {
        term: 'Hashtag',
        definition: 'Keywords preceded by # that categorize content. Using relevant hashtags helps TikTok understand and distribute your content to interested viewers.',
        relatedCalc: '/calculators/hashtag-performance/',
      },
      {
        term: 'Trending Sound',
        definition: 'Audio clips gaining popularity on TikTok. Using trending sounds can boost video distribution as the algorithm promotes content using popular audio.',
      },
      {
        term: 'Duet',
        definition: 'Feature allowing creators to create side-by-side videos with existing content. Useful for reactions, collaborations, and riding trends.',
      },
      {
        term: 'Stitch',
        definition: 'Feature allowing creators to clip and integrate segments from other videos into their own. Often used for responses and commentary.',
      },
    ],
  },
  // Content Types
  {
    category: 'Content Types',
    terms: [
      {
        term: 'UGC (User Generated Content)',
        definition: 'Content created by users rather than brands. Brands often pay creators to make UGC-style content that appears authentic and relatable.',
      },
      {
        term: 'POV (Point of View)',
        definition: 'Content format where creator acts out a scenario from a specific perspective. Popular format: "POV: you\'re [situation]".',
      },
      {
        term: 'GRWM (Get Ready With Me)',
        definition: 'Content showing the creator\'s preparation routine, often for going out. Popular in beauty and lifestyle niches.',
      },
      {
        term: 'Tutorial',
        definition: 'Educational content teaching viewers how to do something. High save rates and longer watch times make tutorials algorithm-friendly.',
      },
      {
        term: 'Storytime',
        definition: 'Narrative content where creators share personal stories or experiences. Builds connection and often achieves high completion rates.',
      },
      {
        term: 'Green Screen',
        definition: 'Effect allowing creators to place themselves in front of images, videos, or other backgrounds. Useful for commentary and reactions.',
      },
    ],
  },
  // Business Terms
  {
    category: 'Business & Analytics',
    terms: [
      {
        term: 'Media Kit',
        definition: 'Professional document showcasing your metrics, audience demographics, past collaborations, and rates. Essential for landing brand deals.',
      },
      {
        term: 'Rate Card',
        definition: 'Document listing your prices for different types of sponsored content (posts, stories, LIVE streams, etc.).',
        relatedCalc: '/calculators/brand-deal-rate/',
      },
      {
        term: 'ROI (Return on Investment)',
        definition: 'Measure of profitability. For creators: earnings relative to time/money invested. For brands: value generated from creator partnerships.',
        relatedCalc: '/calculators/campaign-roi/',
      },
      {
        term: 'CAC (Customer Acquisition Cost)',
        definition: 'Cost to acquire one customer through marketing efforts. Brands track this to evaluate creator campaign effectiveness.',
        relatedCalc: '/calculators/customer-acquisition-cost/',
      },
      {
        term: 'LTV (Lifetime Value)',
        definition: 'Total revenue expected from a customer over their relationship with a brand. High LTV justifies higher CAC for quality customers.',
        relatedCalc: '/calculators/lifetime-value/',
      },
      {
        term: 'Analytics',
        definition: 'Data about your account and video performance. TikTok provides analytics for Pro/Business accounts including views, engagement, audience demographics.',
      },
      {
        term: 'Demographics',
        definition: 'Characteristics of your audience including age, gender, location. Important for matching with relevant brand partnerships.',
      },
      {
        term: 'Niche',
        definition: 'Specific topic or category your content focuses on. Examples: fitness, cooking, finance, comedy. Focused niches often command higher brand deal rates.',
        relatedCalc: '/calculators/niche-profitability/',
      },
    ],
  },
  // Account Types
  {
    category: 'Account Types & Features',
    terms: [
      {
        term: 'Creator Account',
        definition: 'Account type with access to analytics, Creator Fund eligibility, and monetization features. Free to switch from personal account.',
      },
      {
        term: 'Business Account',
        definition: 'Account type designed for brands with additional features like contact buttons and commercial music library. Cannot access Creator Fund.',
      },
      {
        term: 'Verified Badge',
        definition: 'Blue checkmark indicating TikTok has confirmed account authenticity. Given to notable public figures, celebrities, and established brands.',
      },
      {
        term: 'TikTok LIVE',
        definition: 'Real-time streaming feature. Requires 1,000+ followers (18+) or 16+ with parental consent. Enables gift monetization.',
        relatedCalc: '/calculators/live-gifts/',
      },
      {
        term: 'LIVE Access',
        definition: 'Permission to go live on TikTok. Requirements vary by region but typically need 1,000+ followers and 18+ age.',
        relatedCalc: '/calculators/utility-tools/eligibility/',
      },
      {
        term: 'Series',
        definition: 'Feature allowing creators to publish premium, paywalled video collections. Viewers pay to access exclusive content.',
      },
    ],
  },
  // Technical Terms
  {
    category: 'Technical Terms',
    terms: [
      {
        term: 'Aspect Ratio',
        definition: 'Proportional relationship between video width and height. TikTok\'s optimal ratio is 9:16 (vertical). Using wrong ratios can hurt engagement.',
      },
      {
        term: 'Resolution',
        definition: 'Video quality measured in pixels. TikTok supports up to 1080p. Higher resolution generally performs better.',
      },
      {
        term: 'FPS (Frames Per Second)',
        definition: 'Number of individual frames in one second of video. TikTok supports 24-60 FPS. Higher FPS creates smoother motion.',
      },
      {
        term: 'Caption',
        definition: 'Text description accompanying your video. Affects discoverability through keyword matching. Also refers to on-screen text/subtitles.',
      },
      {
        term: 'Auto-Captions',
        definition: 'TikTok\'s automatic subtitle generation feature. Improves accessibility and can boost engagement as many watch without sound.',
      },
      {
        term: 'Original Sound',
        definition: 'Audio you create or record yourself. Using original sounds can help build recognition if your audio goes viral.',
      },
    ],
  },
  // Advertising Terms
  {
    category: 'Advertising',
    terms: [
      {
        term: 'Spark Ads',
        definition: 'TikTok ad format using existing organic posts. Brands can boost creator content as ads while maintaining authentic feel.',
      },
      {
        term: 'In-Feed Ads',
        definition: 'Ads appearing in users\' For You feeds. Look like regular TikTok videos but marked as "Sponsored".',
      },
      {
        term: 'TopView',
        definition: 'Premium ad placement appearing when users first open TikTok. High visibility, high cost.',
      },
      {
        term: 'Branded Hashtag Challenge',
        definition: 'Advertiser-sponsored hashtag encouraging user participation. Often includes custom effects and dedicated banner.',
      },
      {
        term: 'Whitelisting',
        definition: 'When creators grant brands permission to run ads through the creator\'s account. Allows brands to use creator content as ads.',
      },
      {
        term: 'Usage Rights',
        definition: 'Permissions granted for how brands can use creator content. Includes where (platforms), how long, and for what purposes.',
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is RPM on TikTok?',
    answer: 'RPM (Revenue Per Mille) is the amount you earn per 1,000 video views from all monetization sources combined. Average TikTok RPM ranges from $0.02-$0.05 for Creator Fund, but can be much higher when including brand deals and affiliate income.',
  },
  {
    question: 'What is the difference between CPM and RPM?',
    answer: 'CPM (Cost Per Mille) is what advertisers pay per 1,000 ad impressions. RPM (Revenue Per Mille) is what creators earn per 1,000 views. CPM is the advertiser\'s cost; RPM is the creator\'s revenue after platform fees.',
  },
  {
    question: 'What is a good engagement rate on TikTok?',
    answer: 'Average TikTok engagement rate is 4-8%. Rates above 10% are considered excellent. Engagement rate is calculated as (likes + comments + shares) divided by views, multiplied by 100.',
  },
  {
    question: 'How much does TikTok Creator Fund pay?',
    answer: 'TikTok Creator Fund pays approximately $0.02-$0.04 per 1,000 views, or $20-$40 per million views. The newer Creativity Program pays higher rates, up to $1 per 1,000 views for qualifying content.',
  },
  {
    question: 'What are TikTok Diamonds worth?',
    answer: 'TikTok Diamonds are worth approximately $0.005 USD each (half a cent). You receive Diamonds when viewers send you gifts during LIVE streams. TikTok takes about 50% of the gift value before converting to Diamonds.',
  },
];

export default function GlossaryPage() {
  return (
    <>
      <WebPageSchema
        title="TikTok Creator Glossary | 100+ Terms Explained"
        description="Complete glossary of TikTok creator terms, monetization vocabulary, and social media metrics."
        url="https://calculatecreator.com/glossary/"
      />
      <FAQPageSchema faqs={faqs} />

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="container-custom max-w-5xl">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/images/calculate-creator-transparent-v2.png"
              alt="TikTok Creator Calculator"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-display-md font-bold text-neutral-900">TikTok Creator Glossary</h1>
            </div>
          </div>
          <p className="text-body-lg text-neutral-600 mb-8 max-w-3xl">
            Complete reference guide to TikTok creator terminology, monetization terms, and social media metrics.
            Whether you&apos;re new to content creation or negotiating brand deals, understanding these terms is essential
            for maximizing your TikTok success.
          </p>

          {/* Quick Navigation */}
          <Card className="mb-8">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Jump to Category</h2>
            <div className="flex flex-wrap gap-2">
              {glossaryTerms.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-body-sm font-medium hover:bg-primary-100 transition-colors"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </Card>

          {/* Glossary Content */}
          <div className="space-y-8">
            {glossaryTerms.map((category) => (
              <div key={category.category} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                <h2 className="text-heading-lg font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                  {category.category}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.terms.map((item) => (
                    <Card key={item.term} className="h-full">
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">{item.term}</h3>
                      <p className="text-body-md text-neutral-700 mb-3">{item.definition}</p>
                      {item.relatedCalc && (
                        <Link
                          href={item.relatedCalc}
                          className="inline-flex items-center text-primary-600 text-body-sm font-medium hover:text-primary-700"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Related Calculator
                        </Link>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-heading-lg font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                  <p className="text-body-md text-neutral-700">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mt-12 bg-primary-50 border-primary-200">
            <div className="text-center">
              <h2 className="text-heading-lg font-bold text-neutral-900 mb-3">Ready to Calculate Your Earnings?</h2>
              <p className="text-body-md text-neutral-700 mb-6 max-w-2xl mx-auto">
                Now that you understand the terminology, use our free calculators to estimate your TikTok earnings,
                optimize engagement rates, and plan your brand deal pricing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculators/"
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Explore All Calculators
                </Link>
                <Link
                  href="/guides/"
                  className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  Read Creator Guides
                </Link>
              </div>
            </div>
          </Card>

          {/* Last Updated */}
          <p className="text-body-sm text-neutral-500 mt-8 text-center">
            Last updated: February 2026. Terms and definitions are regularly updated to reflect TikTok platform changes.
          </p>
        </div>
      </div>
    </>
  );
}
