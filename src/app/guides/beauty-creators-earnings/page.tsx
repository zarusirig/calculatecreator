import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Palette, DollarSign, Briefcase, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'How Much Do Beauty Creators Make on TikTok? Earnings Breakdown 2026',
  description: 'Complete earnings guide for TikTok beauty creators. See real income data by follower tier, brand deal rates, and monetization strategies for makeup & skincare content.',
  keywords: ['beauty creator earnings', 'tiktok beauty money', 'makeup influencer income', 'skincare creator earnings', 'beautytok monetization'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/beauty-creators-earnings/',
  },
};

export default function BeautyCreatorsEarningsPage() {
  const earningsByTier = [
    {
      tier: 'Nano (1K-10K)',
      monthly: '$100 - $500',
      breakdown: {
        creatorFund: '$10-$30',
        brandDeals: '$50-$300 (1-2 gifted/paid deals)',
        live: '$20-$100',
        affiliate: '$20-$70',
      },
      typical: 'Mostly gifted products, occasional $50-$150 paid deals',
    },
    {
      tier: 'Micro (10K-50K)',
      monthly: '$500 - $3,000',
      breakdown: {
        creatorFund: '$30-$150',
        brandDeals: '$300-$2,000 (2-3 deals at $150-$800 each)',
        live: '$50-$300',
        affiliate: '$120-$550',
      },
      typical: '2-3 paid brand deals per month, mix of skincare/makeup',
    },
    {
      tier: 'Mid-Tier (50K-500K)',
      monthly: '$3,000 - $20,000',
      breakdown: {
        creatorFund: '$150-$800',
        brandDeals: '$2,000-$15,000 (2-4 deals at $1,000-$5,000 each)',
        live: '$300-$1,500',
        affiliate: '$550-$2,700',
      },
      typical: 'Premium brand partnerships, ambassador deals, PR packages',
    },
    {
      tier: 'Macro (500K-1M+)',
      monthly: '$20,000 - $100,000+',
      breakdown: {
        creatorFund: '$500-$2,000',
        brandDeals: '$15,000-$80,000 (exclusive partnerships, campaigns)',
        live: '$1,000-$5,000',
        affiliate: '$3,500-$13,000',
      },
      typical: 'Multi-month ambassador deals, brand collaborations, product launches',
    },
  ];

  const faqs = [
    {
      question: 'Do beauty creators earn more than other niches on TikTok?',
      answer: 'Yes, beauty is one of the highest-paying niches. Brand deals pay 30-40% more than average ($0.15-$0.25 per follower vs. $0.10-$0.20). This is because: (1) Beauty brands have large marketing budgets, (2) Products are visual (perfect for TikTok), (3) High conversion rates (viewers actually buy). However, the niche is very saturated—you need unique angle.',
    },
    {
      question: 'How many followers do I need to start making money as a beauty creator?',
      answer: 'You can start at 1K-3K followers. Many beauty brands work with nano influencers (1K-10K) for $50-$150 per post or gifted products. The key is engagement rate (5%+) and niche specificity (e.g., "Korean skincare for acne" vs. "general beauty"). You can also join TikTok Shop affiliate program at 1K.',
    },
    {
      question: 'What types of beauty content earn the most?',
      answer: 'Highest earning: (1) Skincare routines and reviews ($$$—high engagement, repeat purchases), (2) Makeup tutorials with affordable products ($$—mass appeal), (3) "Get ready with me" (GRWM) ($$—natural product placement), (4) Before/after transformations ($$$—high virality). Lowest: Generic "hauls" or unboxings without value-add.',
    },
    {
      question: 'Do I need to be a professional makeup artist to succeed?',
      answer: 'No. Many top beauty creators are self-taught. What matters: (1) Good lighting (ring light essential), (2) Clear close-up shots of products, (3) Honest reviews (not always positive), (4) Consistency (post daily or 2x/day). Authenticity beats perfection—viewers prefer relatable creators over pros.',
    },
    {
      question: 'How do beauty creators get free PR packages?',
      answer: 'PR packages come after you hit 10K-25K followers with consistent beauty content. Brands search hashtags (#pr #prpackage #gifted) and follower #beautycreator or #skinfluencer accounts. Tips: (1) Use PR hashtags in bio, (2) Tag brands in reviews (even unpaid), (3) Create wish list content ("5 products I want to try"), (4) Email brands\' PR teams directly with media kit.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Beauty Creators Earnings</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-rose-400 to-orange-400 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-monetization-640.avif 640w, /guides/guide-monetization-1024.avif 1024w, /guides/guide-monetization-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-monetization-640.webp 640w, /guides/guide-monetization-1024.webp 1024w, /guides/guide-monetization-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-monetization-1024.webp"
              alt="Featured image for How Much Do Beauty Creators Make on TikTok?"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How Much Do Beauty Creators Make on TikTok?
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete earnings breakdown for makeup & skincare creators—from 1K to 1M followers
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Last updated: January 2026</span>
            <span className="flex items-center gap-2"><Palette className="w-4 h-4" /> Beauty & Skincare Focus</span>
            <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> Real Creator Data</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Quick Overview */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Quick Answer</h2>
          <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-lg">
            <p className="text-heading-md font-bold text-neutral-900 mb-4">
              Beauty Creators Earn 30-40% More Than Average TikTokers
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-body-sm text-neutral-700 mb-1">At 10K Followers</p>
                <p className="text-heading-lg font-bold text-pink-600">$500/mo</p>
                <p className="text-body-xs text-neutral-600">Mostly gifted + small deals</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="text-body-sm text-neutral-700 mb-1">At 50K Followers</p>
                <p className="text-heading-lg font-bold text-pink-600">$3K/mo</p>
                <p className="text-body-xs text-neutral-600">2-3 paid brand deals</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="text-body-sm text-neutral-700 mb-1">At 100K+ Followers</p>
                <p className="text-heading-lg font-bold text-pink-600">$10K+/mo</p>
                <p className="text-body-xs text-neutral-600">Premium partnerships</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-body-md text-neutral-700">
              <strong>Why beauty pays more:</strong> Beauty brands have massive marketing budgets ($10B+ industry), high product margins (50-80%), and TikTok drives actual sales. A single viral video can generate $100K+ in revenue for a brand, so they pay creators well.
            </p>
          </div>
        </Card>

        {/* Earnings by Tier */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Earnings by Follower Tier</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Here's what beauty creators actually earn at each level:
          </p>

          <div className="space-y-6">
            {earningsByTier.map((tier, idx) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border-l-4 border-pink-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-heading-md font-semibold text-neutral-900">{tier.tier} Followers</h3>
                    <p className="text-body-sm text-neutral-600 mt-1">{tier.typical}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-body-sm text-neutral-700">Total Monthly:</p>
                    <p className="text-heading-lg font-bold text-pink-600">{tier.monthly}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-3">Income Breakdown:</h4>
                    <div className="space-y-2 text-body-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-700">Creator Fund:</span>
                        <span className="font-semibold text-neutral-900">{tier.breakdown.creatorFund}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-700">Brand Deals:</span>
                        <span className="font-semibold text-pink-600">{tier.breakdown.brandDeals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-700">LIVE Gifts:</span>
                        <span className="font-semibold text-neutral-900">{tier.breakdown.live}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-700">Affiliate/Shop:</span>
                        <span className="font-semibold text-neutral-900">{tier.breakdown.affiliate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-3">Key Insight:</h4>
                    <p className="text-body-sm text-neutral-700">
                      {idx === 0 && "Focus on building engaged audience. Accept gifted products to build portfolio, but start charging by 5K followers."}
                      {idx === 1 && "This is where beauty creators turn profitable. 2-3 paid deals per month covers living expenses in most US cities."}
                      {idx === 2 && "Sweet spot for full-time beauty creators. Mix of mid-tier brands + premium partnerships. Consider hiring manager/agent."}
                      {idx === 3 && "Top-tier income. Focus on exclusive long-term partnerships over one-off deals. Product collaboration opportunities."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Brand Deal Rates for Beauty */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Beauty Brand Deal Rates (Premium Multiplier)</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Beauty creators can charge 30-40% more than general creators:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-pink-50 border-b-2 border-pink-200">
                  <th className="text-left p-4 font-semibold text-neutral-900">Followers</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">General Rate</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Beauty Rate (+30-40%)</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { followers: '10K', general: '$1,000-$2,000', beauty: '$1,300-$2,800', example: 'Skincare review video' },
                  { followers: '25K', general: '$2,500-$5,000', beauty: '$3,250-$7,000', example: 'Makeup tutorial + product' },
                  { followers: '50K', general: '$5,000-$10,000', beauty: '$6,500-$14,000', example: '3-video campaign' },
                  { followers: '100K', general: '$10,000-$20,000', beauty: '$13,000-$28,000', example: 'Monthly ambassador' },
                  { followers: '250K', general: '$25,000-$50,000', beauty: '$32,500-$70,000', example: 'Exclusive partnership' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-semibold text-neutral-900">{row.followers}</td>
                    <td className="p-4 text-neutral-700">{row.general}</td>
                    <td className="p-4">
                      <span className="font-bold text-pink-600">{row.beauty}</span>
                    </td>
                    <td className="p-4 text-body-sm text-neutral-600">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>Pro Tip:</strong> Skincare deals pay 10-20% more than makeup deals. Why? Higher price points ($50-$200 vs. $10-$40), repeat purchases (monthly skincare routines), and less saturated market.
            </p>
          </div>
        </Card>

        {/* Real Creator Examples */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Real Beauty Creator Examples</h2>
          <div className="space-y-6">
            {[
              {
                name: 'Sarah - 35K Followers (Skincare Focus)',
                monthly: '$2,400',
                breakdown: [
                  'Creator Fund: $80/month (2M views)',
                  'Brand Deals: $1,800 (2 deals: $900 each from indie skincare brands)',
                  'LIVE: $200 (weekly GRWM streams)',
                  'TikTok Shop Affiliate: $320 (selling skincare through shop)',
                ],
                note: 'Posts daily skincare routines, honest reviews, and ingredient breakdowns. 6.2% engagement rate.',
              },
              {
                name: 'Marcus - 80K Followers (Makeup Artistry)',
                monthly: '$6,500',
                breakdown: [
                  'Creator Fund: $200/month (5M views)',
                  'Brand Deals: $5,000 (1 major brand deal with Sephora-level brand)',
                  'LIVE: $600 (3x/week makeup tutorials)',
                  'Affiliate: $700 (Amazon affiliate + TikTok Shop)',
                ],
                note: 'Professional MUA, posts tutorials and transformations. Works with mid-tier and premium brands.',
              },
              {
                name: 'Emma - 200K Followers (Affordable Drugstore Beauty)',
                monthly: '$18,000',
                breakdown: [
                  'Creator Fund: $500/month (12M views)',
                  'Brand Deals: $14,000 (2-3 deals: Maybelline, ELF, NYX at $5K-$6K each)',
                  'LIVE: $1,200',
                  'Affiliate: $2,300 (high conversion on affordable products)',
                ],
                note: 'Focuses on drugstore dupes and affordable beauty. Massive engagement because products are accessible.',
              },
            ].map((creator, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-heading-md font-semibold text-neutral-900">{creator.name}</h4>
                  <div className="text-right">
                    <p className="text-body-sm text-neutral-700">Monthly Income:</p>
                    <p className="text-heading-lg font-bold text-pink-600">{creator.monthly}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-neutral-900 mb-2">Income Sources:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    {creator.breakdown.map((item, bIdx) => (
                      <li key={bIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-body-sm text-neutral-600 italic">{creator.note}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Monetization Strategies */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Top 7 Monetization Strategies for Beauty Creators</h2>
          <div className="space-y-4">
            {[
              {
                strategy: 'Niche Down (Don\'t Be "General Beauty")',
                why: 'Brands want specialists. "Acne skincare for 20s" beats "general beauty tips."',
                action: 'Pick ONE sub-niche: K-beauty, clean beauty, acne care, mature skin, budget beauty, luxury skincare, etc.',
              },
              {
                strategy: 'Create Honest Reviews (Not Always Positive)',
                why: 'Authenticity = trust = higher conversion = brands pay more. Fake positivity hurts long-term.',
                action: 'Rate products 1-10, show real before/afters, mention pros AND cons. Brands respect honest creators.',
              },
              {
                strategy: 'Post "Dupes" Content (High Engagement)',
                why: '"Luxury vs. Drugstore" and "Designer dupe" videos go viral and drive affiliate sales.',
                action: 'Compare high-end to affordable alternatives. Example: "La Mer vs. CeraVe" or "$200 vs. $15 foundation."',
              },
              {
                strategy: 'Use TikTok Shop Affiliate Aggressively',
                why: 'Beauty has highest Shop conversion rates (8-15%). You earn 5-10% commission on every sale.',
                action: 'Link products in every video. Create "shop my favorites" collections. Mention "link in bio" verbally.',
              },
              {
                strategy: 'Build Email List for Brand Pitches',
                why: 'Brands check audience quality. Email list = proof of engaged audience beyond TikTok.',
                action: 'Offer free guide ("My 10-step Korean skincare routine PDF") in exchange for emails. Use Beacons or Stan Store.',
              },
              {
                strategy: 'Go LIVE 2-3x/Week (GRWM Format)',
                why: 'Beauty LIVE streams have high gift rates. Viewers love real-time Q&A about products.',
                action: 'Schedule consistent LIVE slots: "Monday GRWM" or "Thursday skincare routine." Engage with every commenter.',
              },
              {
                strategy: 'Pitch Indie Brands (Less Competition)',
                why: 'Everyone pitches Fenty, Glossier, Rare Beauty. Indie brands (100K-500K followers) pay well + less competition.',
                action: 'Find indie brands on Instagram, check if they work with creators, email with media kit. They often respond faster.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-pink-500">
                <h4 className="font-semibold text-neutral-900 mb-1">{idx + 1}. {item.strategy}</h4>
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>Why:</strong> {item.why}
                </p>
                <p className="text-body-sm text-neutral-900">
                  <strong>Action:</strong> {item.action}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* FAQ Section */}
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection
          pageName="FAQ"
          faqs={faqs}
        />

        {/* Calculator CTA */}
        <Card>
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your Beauty Creator Earnings
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our brand deal calculator to see what you should charge as a beauty creator (remember to add 30-40% premium):
            </p>
            <Link
              href="/calculators/brand-deal-rate"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-colors"
            >
              Calculate Your Rate →
            </Link>
          </div>
        </Card>

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-get-brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><Briefcase className="w-5 h-5" /> How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-700">4 methods to land beauty brand sponsorships</p>
            </Link>
            <Link href="/data/brand-deal-rates-by-followers" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Brand Deal Rates by Followers</h4>
              <p className="text-body-sm text-neutral-700">Complete pricing benchmarks for all follower tiers</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
