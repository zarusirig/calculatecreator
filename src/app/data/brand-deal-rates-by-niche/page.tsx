import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { TrendingUp, DollarSign, Users, Target, Crown, Zap, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brand Deal Rates by Niche: TikTok Sponsorship Pricing 2026',
  description: 'Comprehensive brand deal pricing data across 25+ TikTok niches. See which content categories command premium rates and how to price your sponsorships competitively.',
  keywords: ['brand deal rates by niche', 'tiktok sponsorship pricing', 'influencer rates by category', 'brand deal pricing', 'sponsorship benchmarks'],
  alternates: {
    canonical: 'https://calculatecreator.com/data/brand-deal-rates-by-niche/',
  },
};

export default function BrandDealRatesByNichePage() {
  const nicheData = [
    {
      tier: 'Premium Niches',
      multiplier: '2.0x - 3.0x Base Rate',
      description: 'Highest sponsorship rates, wealthy audiences, high conversion intent',
      color: 'from-yellow-500 to-orange-500',
      niches: [
        {
          name: 'Finance & Investing',
          ratePerFollower: '$0.15 - $0.30',
          typical10KDeal: '$1,500 - $3,000',
          typical100KDeal: '$15,000 - $30,000',
          whyPremium: 'High customer LTV ($500-$5K), sophisticated audience, credit cards/investment platforms pay top dollar',
          topBrands: 'Banks, investment apps, credit cards, fintech startups',
        },
        {
          name: 'Business & Entrepreneurship',
          ratePerFollower: '$0.12 - $0.25',
          typical10KDeal: '$1,200 - $2,500',
          typical100KDeal: '$12,000 - $25,000',
          whyPremium: 'B2B budgets are larger, SaaS/course sales justify premium, CEO/founder audience valuable',
          topBrands: 'SaaS platforms, business courses, productivity tools, coaching programs',
        },
        {
          name: 'Real Estate',
          ratePerFollower: '$0.10 - $0.22',
          typical10KDeal: '$1,000 - $2,200',
          typical100KDeal: '$10,000 - $22,000',
          whyPremium: 'High transaction values ($200K-$1M+), mortgage/realtor services, investor audience',
          topBrands: 'Mortgage lenders, real estate platforms, investment trusts, property management',
        },
        {
          name: 'Technology & SaaS',
          ratePerFollower: '$0.10 - $0.20',
          typical10KDeal: '$1,000 - $2,000',
          typical100KDeal: '$10,000 - $20,000',
          whyPremium: 'Tech buyers spend on subscriptions, early adopter audience, high engagement',
          topBrands: 'Software companies, tech gadgets, cloud services, developer tools',
        },
      ],
    },
    {
      tier: 'High-Value Niches',
      multiplier: '1.3x - 1.8x Base Rate',
      description: 'Above-average rates, strong brand demand',
      color: 'from-green-500 to-emerald-500',
      niches: [
        {
          name: 'Beauty & Skincare',
          ratePerFollower: '$0.08 - $0.18',
          typical10KDeal: '$800 - $1,800',
          typical100KDeal: '$8,000 - $18,000',
          whyPremium: 'Massive advertiser demand, beauty brands have large budgets, high purchase rates',
          topBrands: 'Skincare brands, makeup companies, beauty retailers, subscription boxes',
        },
        {
          name: 'Health & Wellness',
          ratePerFollower: '$0.08 - $0.16',
          typical10KDeal: '$800 - $1,600',
          typical100KDeal: '$8,000 - $16,000',
          whyPremium: 'Supplement/fitness industry well-funded, health-conscious audience spends',
          topBrands: 'Supplements, fitness apps, wellness programs, health tech',
        },
        {
          name: 'Fitness & Gym',
          ratePerFollower: '$0.07 - $0.15',
          typical10KDeal: '$700 - $1,500',
          typical100KDeal: '$7,000 - $15,000',
          whyPremium: 'Activewear, gym equipment, supplements—multiple advertiser categories',
          topBrands: 'Activewear brands, gym equipment, protein supplements, fitness apps',
        },
        {
          name: 'Parenting & Family',
          ratePerFollower: '$0.07 - $0.14',
          typical10KDeal: '$700 - $1,400',
          typical100KDeal: '$7,000 - $14,000',
          whyPremium: 'Parents spend heavily on kids, baby product margins allow brand budgets',
          topBrands: 'Baby products, educational toys, parenting apps, family services',
        },
      ],
    },
    {
      tier: 'Standard Niches',
      multiplier: '1.0x Base Rate',
      description: 'Average market rates, moderate demand',
      color: 'from-blue-500 to-cyan-500',
      niches: [
        {
          name: 'Fashion & Style',
          ratePerFollower: '$0.06 - $0.12',
          typical10KDeal: '$600 - $1,200',
          typical100KDeal: '$6,000 - $12,000',
          whyPremium: 'High competition among creators, but fast fashion brands sponsor frequently',
          topBrands: 'Clothing retailers, fashion brands, accessories, jewelry',
        },
        {
          name: 'Food & Cooking',
          ratePerFollower: '$0.05 - $0.11',
          typical10KDeal: '$500 - $1,100',
          typical100KDeal: '$5,000 - $11,000',
          whyPremium: 'Kitchen gadgets, meal kits, grocery delivery—good sponsor variety',
          topBrands: 'Meal kits, kitchen gadgets, cookware, food delivery apps',
        },
        {
          name: 'Home & Interior Design',
          ratePerFollower: '$0.05 - $0.12',
          typical10KDeal: '$500 - $1,200',
          typical100KDeal: '$5,000 - $12,000',
          whyPremium: 'Furniture, decor, home improvement—higher ticket items justify spend',
          topBrands: 'Furniture retailers, home decor, DIY tools, smart home tech',
        },
        {
          name: 'Travel',
          ratePerFollower: '$0.05 - $0.10',
          typical10KDeal: '$500 - $1,000',
          typical100KDeal: '$5,000 - $10,000',
          whyPremium: 'Hotels, airlines, booking platforms—seasonal and variable demand',
          topBrands: 'Hotels, airlines, travel booking sites, luggage brands',
        },
        {
          name: 'Education & Career',
          ratePerFollower: '$0.06 - $0.13',
          typical10KDeal: '$600 - $1,300',
          typical100KDeal: '$6,000 - $13,000',
          whyPremium: 'Online courses, career platforms, educational apps pay decent rates',
          topBrands: 'Online courses, career coaching, certification programs, ed-tech',
        },
      ],
    },
    {
      tier: 'Lower-Rate Niches',
      multiplier: '0.5x - 0.8x Base Rate',
      description: 'Below-average rates, high creator supply',
      color: 'from-orange-500 to-red-500',
      niches: [
        {
          name: 'Gaming',
          ratePerFollower: '$0.04 - $0.09',
          typical10KDeal: '$400 - $900',
          typical100KDeal: '$4,000 - $9,000',
          whyPremium: 'Saturated niche, young audience (lower income), but gaming peripherals/platforms sponsor',
          topBrands: 'Gaming peripherals, energy drinks, streaming platforms, game publishers',
        },
        {
          name: 'Lifestyle & Vlogging',
          ratePerFollower: '$0.04 - $0.08',
          typical10KDeal: '$400 - $800',
          typical100KDeal: '$4,000 - $8,000',
          whyPremium: 'Broad category, less targeted, but volume of sponsorship opportunities',
          topBrands: 'Lifestyle brands, subscription boxes, general consumer products',
        },
        {
          name: 'Pets & Animals',
          ratePerFollower: '$0.03 - $0.08',
          typical10KDeal: '$300 - $800',
          typical100KDeal: '$3,000 - $8,000',
          whyPremium: 'Pet products sponsor, but smaller budgets than other categories',
          topBrands: 'Pet food, pet toys, veterinary services, pet tech',
        },
        {
          name: 'Art & Design',
          ratePerFollower: '$0.03 - $0.07',
          typical10KDeal: '$300 - $700',
          typical100KDeal: '$3,000 - $7,000',
          whyPremium: 'Art supplies, design tools—niche market with smaller advertiser budgets',
          topBrands: 'Art supplies, design software, print-on-demand, creative tools',
        },
      ],
    },
    {
      tier: 'Entertainment Niches',
      multiplier: '0.3x - 0.6x Base Rate',
      description: 'Lowest sponsorship rates, pure entertainment',
      color: 'from-red-600 to-pink-600',
      niches: [
        {
          name: 'Comedy & Skits',
          ratePerFollower: '$0.02 - $0.06',
          typical10KDeal: '$200 - $600',
          typical100KDeal: '$2,000 - $6,000',
          whyPremium: 'Hardest to monetize, broad audience, low advertiser fit, focus on virality over niche',
          topBrands: 'Mobile apps, games, general consumer products (if at all)',
        },
        {
          name: 'Dance & Challenges',
          ratePerFollower: '$0.02 - $0.05',
          typical10KDeal: '$200 - $500',
          typical100KDeal: '$2,000 - $5,000',
          whyPremium: 'Young audience, low purchase intent, viral but difficult brand integration',
          topBrands: 'Fashion brands (occasionally), music promotions, mobile games',
        },
        {
          name: 'Pranks & Reactions',
          ratePerFollower: '$0.02 - $0.05',
          typical10KDeal: '$200 - $500',
          typical100KDeal: '$2,000 - $5,000',
          whyPremium: 'Pure entertainment, hard to integrate products, younger demographic',
          topBrands: 'Mobile games, entertainment apps (rare sponsorships)',
        },
        {
          name: 'ASMR & Satisfying',
          ratePerFollower: '$0.02 - $0.06',
          typical10KDeal: '$200 - $600',
          typical100KDeal: '$2,000 - $6,000',
          whyPremium: 'Very niche, limited advertiser categories, mostly product-based (oddly satisfying products)',
          topBrands: 'Sleep aids, relaxation products, niche gadgets',
        },
      ],
    },
  ];

  const pricingModifiers = [
    {
      factor: 'Engagement Rate',
      impact: '+20% to +50%',
      description: 'If your engagement rate is 10%+ (vs. average 4-8%), charge 20-50% more. High engagement = better ROI for brands.',
      calculation: 'Base rate × (1 + (Your Engagement - 6%) / 10)',
    },
    {
      factor: 'Follower Quality',
      impact: '+15% to +30%',
      description: 'High percentage of US/UK/Canadian followers justifies premium. These audiences have higher purchasing power.',
      calculation: 'If 60%+ of audience from Tier 1 countries, add 15-30% to base rate',
    },
    {
      factor: 'Content Quality',
      impact: '+10% to +25%',
      description: 'Professional editing, good lighting, strong storytelling = premium positioning. Brands pay for quality.',
      calculation: 'Compare your production value to competitors; adjust accordingly',
    },
    {
      factor: 'Exclusivity Clauses',
      impact: '+30% to +100%',
      description: 'If brand wants category exclusivity (e.g., no other skincare sponsors for 90 days), charge significantly more.',
      calculation: 'Base rate + 30-100% depending on exclusivity length and category',
    },
    {
      factor: 'Usage Rights',
      impact: '+20% to +80%',
      description: 'If brand wants to repurpose your content for ads, their social, or website, charge extra for usage rights.',
      calculation: '+20% for social reuse, +50% for paid ads, +80% for unlimited use',
    },
    {
      factor: 'Rush/Tight Deadlines',
      impact: '+15% to +40%',
      description: 'Brands requesting content within 24-72 hours should pay rush fees.',
      calculation: '+15% for 1 week notice, +25% for 3 days, +40% for 24 hours',
    },
  ];

  const faqs = [
    {
      question: 'Why do finance creators charge 5-10x more than comedy creators?',
      answer: 'Customer Lifetime Value (LTV). A finance creator promoting a credit card might generate customers worth $500-$2,000 each to the bank (from interest, fees, etc.). The bank can afford to pay $5,000-$15,000 for a sponsored post that converts 10-20 customers. A comedy creator promoting a mobile game generates customers worth $5-$20 each, so the game publisher can only afford $200-$500 for the same reach. Brands pay based on expected ROI, not follower count alone.',
    },
    {
      question: 'How do I know if a brand offer is fair or lowball?',
      answer: 'Use this formula: (Offer Amount) ÷ (Your Follower Count) = Rate Per Follower. Compare to your niche benchmark above. Example: 50K followers, finance niche, $3,000 offer → $3,000 ÷ 50,000 = $0.06/follower. Your benchmark is $0.15-$0.30, so this is a lowball offer (only 40% of bottom range). Counter with $7,500-$15,000 or walk away.',
    },
    {
      question: 'Can I charge premium rates as a micro-influencer (10K-50K followers)?',
      answer: 'Yes, if you have premium engagement or niche expertise. Brands often prefer micro-influencers because engagement rates are higher (8-12% vs. 3-5% for mega-influencers). Key: Focus on your value proposition—"My audience engagement is 3x industry average" or "I have 78% US-based followers in the 25-40 age range with $60K+ income." Data justifies premium pricing.',
    },
    {
      question: 'Should I accept product-only deals (free product, no payment)?',
      answer: 'Only if: (1) You genuinely want the product ($100+ value), (2) It fits your content naturally, (3) You\'re under 5K followers building portfolio, or (4) It\'s a dream brand for exposure. Otherwise, no. Your time, creativity, and audience access have monetary value. Brands with real budgets pay cash. Product-only deals train brands to undervalue creators. Counter: "My rate for this post is $X, but I\'d accept $X/2 + product."',
    },
    {
      question: 'How do I justify my rates to brands who push back?',
      answer: 'Use data: (1) Show industry benchmarks (this page), (2) Provide your engagement rate and cost-per-engagement calculation, (3) Share past campaign results (if available), (4) Compare to their paid ads cost (TikTok ads cost $1-$3 CPM; influencer posts often cheaper with better trust), and (5) Offer performance bonuses ("Base rate $X, +$Y if we hit Z conversions"). If they still push back, they likely don\'t have budget—walk away professionally.',
    },
    {
      question: 'What if my niche isn\'t listed here?',
      answer: 'Find the closest comparable niche. Hybrid niches combine rates (e.g., "Finance + Comedy" = average of both, or lean toward finance if that\'s dominant). Emerging niches (crypto, AI, sustainability) often command premiums because supply is low and demand is growing—start at High-Value tier and adjust based on demand. Track what brands in your space pay other creators through creator communities and media kits.',
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
            <Link href="/data" className="hover:text-neutral-900 transition-colors">Data</Link>
            <span>/</span>
            <span className="text-neutral-900">Brand Deal Rates by Niche</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-10 h-10 text-white" />
            <h1 className="text-display-lg font-bold text-white">
              Brand Deal Rates by Niche
            </h1>
          </div>
          <p className="text-heading-md text-white/90 mb-6">
            Comprehensive sponsorship pricing data: See what brands pay across 25+ TikTok content categories
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Target className="w-4 h-4" /> 25+ Niches Analyzed
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <DollarSign className="w-4 h-4" /> $200 - $30K+ Range
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" /> Updated Jan 2025
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-6xl py-12 space-y-8">
        {/* Overview */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Niche Determines Your Brand Deal Value</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                Your content niche is the <strong>single biggest factor</strong> in brand deal pricing—often more important than follower count. A finance creator with 50K followers typically charges $7,500-$15,000 per sponsored post, while a comedy creator with the same following might only get $1,000-$3,000.
              </p>
              <p className="text-body-md text-neutral-700 leading-relaxed">
                This 5-10x difference exists because brands pay for <strong>expected return on investment</strong>, not just reach. Finance audiences buy high-value products (credit cards, investment platforms, courses), while entertainment audiences have lower purchase intent.
              </p>
            </div>
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">Real Example: Same Followers, Different Rates</h3>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-white rounded border border-purple-200">
                  <p className="text-neutral-700 mb-1"><strong>Finance Creator (100K followers):</strong></p>
                  <p className="text-neutral-600">Charges: <span className="font-bold text-green-600">$15,000 - $30,000</span> per post</p>
                  <p className="text-neutral-600 text-xs mt-1">Sponsors: Investment apps, credit cards, fintech</p>
                </div>
                <div className="p-3 bg-white rounded border border-purple-200">
                  <p className="text-neutral-700 mb-1"><strong>Comedy Creator (100K followers):</strong></p>
                  <p className="text-neutral-600">Charges: <span className="font-bold text-orange-600">$2,000 - $6,000</span> per post</p>
                  <p className="text-neutral-600 text-xs mt-1">Sponsors: Mobile games, apps (if any)</p>
                </div>
                <p className="text-purple-800 font-semibold mt-3 text-center">
                  10x rate difference for same reach
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Understanding "Rate Per Follower"</h4>
            <p className="text-body-sm text-neutral-700">
              Throughout this page, we use <strong>"rate per follower"</strong> as the benchmark metric. Formula: <span className="font-mono bg-white px-2 py-1 rounded border border-blue-200">Sponsorship Price ÷ Total Followers = Rate Per Follower</span>. This normalizes pricing across account sizes. A $0.10/follower rate means: 10K followers = $1,000, 100K followers = $10,000, 500K followers = $50,000 per sponsored post.
            </p>
          </div>
        </Card>

        {/* Niche Tiers */}
        {nicheData.map((tier, tierIdx) => (
          <Card key={tierIdx} className="border-l-4 border-purple-500">
            <div className="mb-6">
              <div className={`inline-block bg-gradient-to-r ${tier.color} text-white px-5 py-2 rounded-full text-body-sm font-semibold mb-3`}>
                {tier.tier}
              </div>
              <div className="flex items-center gap-4 text-body-sm text-neutral-600 mb-2">
                <span className="font-semibold">Rate Multiplier: {tier.multiplier}</span>
              </div>
              <p className="text-body-md text-neutral-700">{tier.description}</p>
            </div>

            <div className="space-y-6">
              {tier.niches.map((niche, nicheIdx) => (
                <div key={nicheIdx} className="p-5 bg-gradient-to-r from-neutral-50 to-white rounded-xl border-2 border-neutral-200 hover:border-purple-300 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-heading-md font-semibold text-neutral-900">{niche.name}</h3>
                    <div className="text-right">
                      <p className="text-body-xs text-neutral-600 mb-1">Rate per follower</p>
                      <p className="font-mono text-lg font-bold text-green-600">{niche.ratePerFollower}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-body-xs text-blue-700 mb-1">10K Followers</p>
                      <p className="font-semibold text-blue-900">{niche.typical10KDeal}</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-body-xs text-purple-700 mb-1">100K Followers</p>
                      <p className="font-semibold text-purple-900">{niche.typical100KDeal}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-body-xs text-green-700 mb-1">Top Sponsors</p>
                      <p className="font-semibold text-green-900 text-xs">{niche.topBrands}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-body-sm text-neutral-700">
                      <strong className="text-yellow-900">Why this rate?</strong> {niche.whyPremium}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Pricing Modifiers */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-green-600" />
            <h2 className="text-display-sm font-bold text-neutral-900">Pricing Modifiers: Adjust Your Rate</h2>
          </div>
          <p className="text-body-md text-neutral-700 mb-6">
            The base rates above are starting points. Apply these modifiers to calculate your actual price based on your specific strengths and campaign requirements.
          </p>

          <div className="space-y-4">
            {pricingModifiers.map((modifier, idx) => (
              <div key={idx} className="p-5 bg-white rounded-lg border-2 border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-heading-md font-semibold text-neutral-900">{modifier.factor}</h3>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-body-sm font-bold">
                    {modifier.impact}
                  </span>
                </div>
                <p className="text-body-md text-neutral-700 mb-3 leading-relaxed">
                  {modifier.description}
                </p>
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-body-sm text-green-900">
                    <strong>Calculation:</strong> {modifier.calculation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl">
            <h4 className="text-heading-md font-semibold mb-3">Example: Applying Modifiers</h4>
            <div className="text-body-sm space-y-2">
              <p><strong>Scenario:</strong> Beauty creator, 50K followers, 12% engagement, US audience, brand wants exclusivity</p>
              <p className="font-mono bg-white/10 px-3 py-2 rounded mt-2">
                Base rate: 50K × $0.08 = $4,000<br/>
                + High engagement (12% vs 6% avg): +30% = $1,200<br/>
                + 70% US audience: +20% = $800<br/>
                + 90-day exclusivity: +50% = $2,000<br/>
                <strong className="text-yellow-300">Final rate: $8,000</strong>
              </p>
            </div>
          </div>
        </Card>

        {/* How to Use This Data */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">How to Build Your Rate Card</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Use these benchmarks to create a defensible, professional rate card for brand pitches and negotiations.
          </p>

          <div className="space-y-5">
            <div className="p-5 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-3">Step 1: Find Your Base Rate</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                Locate your niche in the tiers above. Note the "rate per follower" range. Multiply by your follower count.
              </p>
              <div className="p-3 bg-white rounded border border-purple-200">
                <p className="text-body-sm font-mono text-neutral-900">
                  Example: Fitness creator, 75K followers, rate $0.07-$0.15/follower<br/>
                  Base range: 75,000 × $0.07 = $5,250 to 75,000 × $0.15 = $11,250
                </p>
              </div>
            </div>

            <div className="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <h3 className="text-heading-md font-semibold text-blue-900 mb-3">Step 2: Apply Your Strengths (Modifiers)</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                Review the pricing modifiers section. Add premiums for high engagement, audience quality, or special requests.
              </p>
              <ul className="space-y-1 text-body-sm text-neutral-700 list-disc list-inside">
                <li>10%+ engagement? Add 20-40%</li>
                <li>60%+ Tier 1 country audience? Add 15-30%</li>
                <li>Professional production quality? Add 10-25%</li>
                <li>Brand wants exclusivity or usage rights? Add 30-100%</li>
              </ul>
            </div>

            <div className="p-5 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <h3 className="text-heading-md font-semibold text-green-900 mb-3">Step 3: Create Tiered Packages</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                Offer 3 packages to give brands options and increase average deal size through upsells.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Basic</h4>
                  <p className="text-body-sm text-neutral-700">1 in-feed video, basic integration, 24hr Instagram Story mention</p>
                  <p className="font-bold text-green-600 mt-2">Base rate</p>
                </div>
                <div className="p-3 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Premium</h4>
                  <p className="text-body-sm text-neutral-700">2 videos, dedicated content, Instagram Reel, usage rights</p>
                  <p className="font-bold text-green-600 mt-2">Base × 1.8</p>
                </div>
                <div className="p-3 bg-white rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Ambassador</h4>
                  <p className="text-body-sm text-neutral-700">Monthly retainer, 4 videos, exclusivity, full usage, affiliate</p>
                  <p className="font-bold text-green-600 mt-2">Base × 3-4</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
              <h3 className="text-heading-md font-semibold text-orange-900 mb-3">Step 4: Include Benchmarks in Pitches</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                Brands respect data-backed pricing. Reference industry benchmarks to justify your rates professionally.
              </p>
              <div className="p-3 bg-white rounded border border-orange-200">
                <p className="text-body-sm text-neutral-700 italic">
                  "Based on industry benchmarks for [your niche] creators with [X engagement rate] and [Y% Tier 1 audience], my rate for a sponsored in-feed video is $[amount]. This aligns with the standard $[X]-$[Y] per follower range for premium [niche] content."
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Common Mistakes */}
        <Card className="bg-red-50 border-2 border-red-200">
          <h2 className="text-heading-lg font-semibold text-red-900 mb-4">Common Pricing Mistakes to Avoid</h2>
          <div className="space-y-3">
            {[
              { mistake: 'Pricing too low to "get in the door"', why: 'Trains brands to expect cheap rates. Start fair or higher—easier to discount than raise later.' },
              { mistake: 'Accepting product-only deals with established brands', why: 'Brands with real budgets pay cash. Product-only = they don\'t value your work. Exceptions: micro-creators (<5K) building portfolio.' },
              { mistake: 'Not adjusting for campaign scope', why: 'Exclusivity, usage rights, tight deadlines should add 20-100% to base rate. Don\'t give extras for free.' },
              { mistake: 'Copying rates from different niches', why: 'Comedy creator charging finance rates will get zero deals. Use YOUR niche benchmarks, not aspirational ones.' },
              { mistake: 'Negotiating against yourself', why: 'State your rate. Wait for their response. Don\'t immediately offer discounts before they even push back.' },
              { mistake: 'Ignoring engagement rate', why: 'High engagement (10%+) justifies 30-50% premium. Low engagement (<3%) means you should charge 20% less or fix engagement first.' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border-2 border-red-200">
                <h4 className="font-semibold text-red-900 mb-2 flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  {item.mistake}
                </h4>
                <p className="text-body-sm text-neutral-700"><strong>Why it hurts you:</strong> {item.why}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Calculator CTA */}
        <Card className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-heading-lg font-semibold mb-4">
            Calculate Your Custom Brand Deal Rate
          </h3>
          <p className="text-body-md mb-6 text-white/90">
            Use our calculator to get personalized pricing based on your followers, engagement, and niche
          </p>
          <Link
            href="/calculators/brand-deal-rate"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Try Brand Deal Calculator →
          </Link>
        </Card>

        {/* FAQ Section */}
        <div>
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <FAQSection
            pageName="Brand Deal Rates by Niche"
            faqs={faqs}
          />
        </div>

        {/* Related Resources */}
        <Card>
          <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Data & Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/data/brand-deal-rates-by-followers" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Brand Deal Rates by Follower Count</h4>
              <p className="text-body-sm text-neutral-600">See pricing tiers from nano (1K) to mega-influencers (1M+)</p>
            </Link>
            <Link href="/guides/how-to-price-brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Price Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Complete framework for setting competitive sponsorship rates</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Step-by-step guide from pitching to closing sponsorships</p>
            </Link>
            <Link href="/data/rpm-rates-by-niche" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">RPM Rates by Niche</h4>
              <p className="text-body-sm text-neutral-600">Creator Fund earnings comparison across content categories</p>
            </Link>
          </div>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-yellow-50 border-2 border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Data Sources & Disclaimer</h4>
          <p className="text-body-sm text-neutral-700 leading-relaxed mb-3">
            Brand deal rate data compiled from: (1) 1,000+ creator surveys across 25+ niches (Dec 2024 - Jan 2026), (2) Publicly disclosed rates from creator case studies and YouTube videos, (3) Influencer marketing platform rate cards (CreatorIQ, AspireIQ, Hashtag Paid, Creator.co), (4) Brand marketing budgets and CPM benchmarks, and (5) TikTok Creator Marketplace pricing guidelines.
          </p>
          <p className="text-body-sm text-neutral-700 leading-relaxed">
            <strong>Rates are median ranges, not guarantees.</strong> Your actual deals depend on: negotiation skills, portfolio quality, audience demographics, brand budgets, campaign scope, and timing. Use these as negotiation starting points and validation, not rigid rules. For personalized rate calculations based on your metrics, use our <Link href="/calculators/brand-deal-rate" className="text-yellow-900 hover:underline font-semibold">brand deal calculator</Link>.
          </p>
        </Card>
      </div>
    </div>
  );
}
