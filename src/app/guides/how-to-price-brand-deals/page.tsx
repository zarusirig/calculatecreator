import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/CalculatorSchema';
import { Calendar, Clock, Medal, Trophy, Award, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Price Brand Deals: Complete Influencer Pricing Guide 2026',
  description: 'Master brand deal pricing with 5 pricing models, negotiation framework, and rate calculations. Learn what to charge for sponsored posts on TikTok.',
  keywords: ['how to price brand deals', 'influencer pricing guide', 'sponsored post rates', 'brand deal rates'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/how-to-price-brand-deals/',
  },
};

const faqs = [
  {
    question: 'How much should I charge for a brand deal with 50,000 followers?',
    answer: 'Base rate: $500-1,500 depending on engagement rate and niche. High engagement (8%+) and valuable niches (finance, tech) can command $1,500-2,500. Always factor in engagement rate, audience demographics, and deliverables when pricing.',
  },
  {
    question: 'What is the standard rate per follower for influencers?',
    answer: 'General guideline is $0.01-$0.10 per follower, but this varies widely. High-engagement creators in valuable niches charge $0.05-$0.10+. Entertainment creators in oversaturated niches may see $0.01-$0.03. Engagement rate matters more than follower count.',
  },
  {
    question: 'Should I charge more for exclusive deals?',
    answer: 'Yes! Exclusivity (can\'t work with competitors) should command 25-50% premium. If a brand wants 30-day exclusivity in your niche, add 50% to your base rate. 90-day exclusivity warrants 100-150% premium.',
  },
  {
    question: 'What should I include in my rate card?',
    answer: 'Include: follower count, engagement rate, audience demographics, base rates by deliverable type (in-feed post, story, LIVE mention), package options (bronze/silver/gold), exclusivity pricing, usage rights terms, and 30-day rate guarantee.',
  },
  {
    question: 'How do I negotiate without underselling myself?',
    answer: 'Start 20-30% above your minimum acceptable rate. Justify with metrics (engagement, demographics, past performance). Be willing to walk away from lowball offers. Offer performance bonuses instead of lower rates. Never compete solely on price.',
  },
  {
    question: 'When should I say no to a brand deal?',
    answer: 'Say no when: rate is below 50% of market value, product doesn\'t align with your brand, requirements are unreasonable, contract has unfair terms (unlimited revisions, perpetual usage rights), or brand has poor reputation.',
  },
  {
    question: 'Do I need different rates for TikTok vs. Instagram?',
    answer: 'Yes, typically. Instagram posts often command 20-40% premium due to longer content lifespan and shopping features. YouTube integrations command 2-5x TikTok rates due to production time and longer viewer engagement. Price per platform based on your audience and reach.',
  },
  {
    question: 'How often should I update my rates?',
    answer: 'Review rates quarterly as you grow. Update immediately when: you gain 25%+ more followers, engagement rate significantly improves, you add new high-value deliverables, or market rates in your niche increase. Lock rates for 30 days after providing a quote.',
  },
];

export default function HowToPriceBrandDealsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticleSchema
        headline="How to Price Brand Deals: Complete Influencer Pricing Guide"
        description="Master brand deal pricing with proven models, negotiation frameworks, and rate calculations for TikTok creators and influencers."
        url="https://calculatecreator.com/guides/how-to-price-brand-deals"
        datePublished="2025-11-13"
        dateModified="2025-11-13"
        keywords={['brand deals', 'influencer pricing', 'sponsored posts', 'creator rates']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Guides', url: 'https://calculatecreator.com/guides' },
          { name: 'How to Price Brand Deals', url: 'https://calculatecreator.com/guides/how-to-price-brand-deals' },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">How to Price Brand Deals</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-brand-deals-640.avif 640w, /guides/guide-brand-deals-1024.avif 1024w, /guides/guide-brand-deals-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-brand-deals-640.webp 640w, /guides/guide-brand-deals-1024.webp 1024w, /guides/guide-brand-deals-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-brand-deals-1024.webp"
              alt="Featured image for How to Price Your Brand Deals"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How to Price Your Brand Deals
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete pricing guide with 5 models, rate calculations, and negotiation framework
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated: November 13, 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Industry Rate Standards by Follower Tier
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            These are baseline rates for standard in-feed posts. Adjust based on engagement, niche, and deliverables.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Follower Count</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Base Rate Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">High Engagement</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Premium Niche</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">1K-10K (Nano)</td>
                  <td className="py-3 px-4">$50-200</td>
                  <td className="py-3 px-4 text-green-600">$200-400</td>
                  <td className="py-3 px-4 text-blue-600">$300-500</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">10K-50K (Micro)</td>
                  <td className="py-3 px-4">$200-800</td>
                  <td className="py-3 px-4 text-green-600">$800-1,500</td>
                  <td className="py-3 px-4 text-blue-600">$1,200-2,500</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">50K-100K (Mid-tier)</td>
                  <td className="py-3 px-4">$800-2,500</td>
                  <td className="py-3 px-4 text-green-600">$2,500-5,000</td>
                  <td className="py-3 px-4 text-blue-600">$4,000-8,000</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">100K-500K (Macro)</td>
                  <td className="py-3 px-4">$2,500-10,000</td>
                  <td className="py-3 px-4 text-green-600">$10,000-20,000</td>
                  <td className="py-3 px-4 text-blue-600">$15,000-35,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">500K+ (Mega)</td>
                  <td className="py-3 px-4">$10,000-50,000+</td>
                  <td className="py-3 px-4 text-green-600">$50,000-150,000+</td>
                  <td className="py-3 px-4 text-blue-600">$100,000-500,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="bg-blue-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Calculate Your Fair Rate
          </h3>
          <p className="text-body-sm text-neutral-700 mb-4">
            Use these calculators to determine your pricing based on performance metrics.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/brand-deal-rate" className="btn btn-primary">
              Brand Deal Rate Calculator →
            </Link>
            <Link href="/calculators/content-value" className="btn btn-secondary">
              Content Value Calculator
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            5 Pricing Models
          </h2>

          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                1. Follower-Based Pricing ($0.01-$0.10 per follower)
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Simplest model: multiply followers by a rate per follower. Best for starting creators establishing baseline rates.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Rate Per Follower by Category:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    <li>• <strong>$0.01-$0.03:</strong> Entertainment, general lifestyle (oversaturated)</li>
                    <li>• <strong>$0.03-$0.05:</strong> Beauty, fashion, fitness (moderate competition)</li>
                    <li>• <strong>$0.05-$0.08:</strong> Food, travel, parenting (valuable demographics)</li>
                    <li>• <strong>$0.08-$0.10+:</strong> Finance, tech, business, education (premium niches)</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-100 rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">Example:</p>
                  <p className="text-body-sm text-neutral-700">
                    50,000 followers × $0.05 (fitness niche) = $2,500 base rate per post
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                2. Engagement-Based Pricing (Weighted by Engagement Rate)
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                More sophisticated model that accounts for audience quality. Higher engagement = higher rates.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Formula:</p>
                  <code className="block p-3 bg-neutral-50 rounded text-sm">
                    Base Rate = (Followers × $0.05) × (Engagement % ÷ 5)
                  </code>
                </div>
                <div className="p-3 bg-purple-100 rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">Example:</p>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    50,000 followers with 10% engagement rate:
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    (50,000 × $0.05) × (10 ÷ 5) = $2,500 × 2 = <strong>$5,000 per post</strong>
                  </p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Engagement Multipliers:</strong> 3% = 0.6x, 5% = 1.0x, 8% = 1.6x, 10% = 2.0x, 12%+ = 2.4x
                  </p>
                </div>
              </div>
              <Link href="/calculators/engagement-rate" className="text-body-sm text-purple-600 hover:underline inline-block mt-3">
                Calculate Your Engagement Rate →
              </Link>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                3. Flat Rate Packages (Bronze/Silver/Gold)
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Tiered packages that bundle deliverables at different price points. Encourages brands to buy premium packages.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-amber-100 rounded-lg">
                  <p className="text-body-md font-semibold text-amber-900 mb-3 flex items-center gap-2"><Medal className="w-5 h-5" /> Bronze Package</p>
                  <ul className="text-body-sm text-neutral-700 space-y-2 mb-3">
                    <li>• 1 in-feed post</li>
                    <li>• 30-day usage rights</li>
                    <li>• 1 revision</li>
                  </ul>
                  <p className="text-body-sm font-bold text-amber-900">Base Rate</p>
                </div>
                <div className="p-4 bg-neutral-200 rounded-lg border-2 border-neutral-400">
                  <p className="text-body-md font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Trophy className="w-5 h-5" /> Silver Package (Most Popular)</p>
                  <ul className="text-body-sm text-neutral-700 space-y-2 mb-3">
                    <li>• 2 in-feed posts</li>
                    <li>• 3 stories</li>
                    <li>• 90-day usage rights</li>
                    <li>• 2 revisions</li>
                  </ul>
                  <p className="text-body-sm font-bold text-neutral-900">Base Rate × 2.5</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg border-2 border-yellow-500">
                  <p className="text-body-md font-semibold text-yellow-900 mb-3 flex items-center gap-2"><Award className="w-5 h-5" /> Gold Package</p>
                  <ul className="text-body-sm text-neutral-700 space-y-2 mb-3">
                    <li>• 3 in-feed posts</li>
                    <li>• 5 stories</li>
                    <li>• 1 LIVE mention</li>
                    <li>• 1-year usage rights</li>
                    <li>• Unlimited revisions</li>
                  </ul>
                  <p className="text-body-sm font-bold text-yellow-900">Base Rate × 4</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                4. Performance-Based Pricing (CPA, Affiliate)
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Payment based on results: clicks, conversions, or sales. Lower risk for brands, higher upside for creators.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Performance Model Options:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-2">
                    <li>• <strong>CPC (Cost Per Click):</strong> $0.50-$2.00 per click to brand's site</li>
                    <li>• <strong>CPA (Cost Per Acquisition):</strong> $10-$100+ per sale/sign-up</li>
                    <li>• <strong>Revenue Share:</strong> 10-30% of sales from your audience</li>
                    <li>• <strong>Affiliate Commission:</strong> Ongoing % of referred customer sales</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-100 rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">When to Use:</p>
                  <p className="text-body-sm text-neutral-700">
                    Best for proven products you believe in. Requires tracking setup. Can earn 2-5x flat rates for
                    high-converting content. Risk: no guarantee of minimum payment.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                5. Hybrid Models (Base + Performance Bonus)
              </h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Guaranteed base rate plus performance bonuses. Best of both worlds: security + upside potential.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">Hybrid Structure Example:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-2">
                    <li>• <strong>Base Rate:</strong> $2,000 guaranteed (60-70% of full flat rate)</li>
                    <li>• <strong>View Bonus:</strong> $500 for every 100K views over 500K</li>
                    <li>• <strong>Conversion Bonus:</strong> $20 per sale above 50 sales</li>
                    <li>• <strong>Engagement Bonus:</strong> $300 if engagement rate exceeds 8%</li>
                  </ul>
                </div>
                <div className="p-3 bg-indigo-100 rounded">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">Negotiation Strategy:</p>
                  <p className="text-body-sm text-neutral-700">
                    When brand offers below your rate, counter with hybrid: "I can do a $2K base + performance bonuses
                    that could bring total to $4-5K if content performs well."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            10 Factors That Increase Your Rate (Premium Pricing Justified)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">1. High Engagement Rate (8%+)</h4>
              <p className="text-body-sm text-neutral-700">Add 50-100% premium over base rate</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">2. Premium Demographics (US/UK, 25-45 age)</h4>
              <p className="text-body-sm text-neutral-700">Add 30-60% for high-income audiences</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">3. Niche Authority/Expertise</h4>
              <p className="text-body-sm text-neutral-700">Add 40-80% for established expert status</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">4. Professional Production Quality</h4>
              <p className="text-body-sm text-neutral-700">Add 20-40% for premium content</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">5. Past Campaign Success</h4>
              <p className="text-body-sm text-neutral-700">Proven ROI justifies 50-100% premium</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">6. Exclusivity Requirements</h4>
              <p className="text-body-sm text-neutral-700">30 days = +50%, 90 days = +100%</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">7. Extended Usage Rights</h4>
              <p className="text-body-sm text-neutral-700">1 year = +50%, perpetual = +150%</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">8. Paid Amplification Rights</h4>
              <p className="text-body-sm text-neutral-700">Brand running ads with your content: +75-150%</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">9. Rush/Priority Timing</h4>
              <p className="text-body-sm text-neutral-700">Under 1 week turnaround: +30-50%</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-body-md font-semibold text-green-900 mb-2">10. Multi-Platform Integration</h4>
              <p className="text-body-sm text-neutral-700">TikTok + IG + YouTube: 2.5-3x single platform rate</p>
            </div>
          </div>
        </Card>

        <Card className="bg-indigo-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Rate Calculation Worksheet
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-3">Step 1: Calculate Base Rate</p>
              <div className="p-3 bg-neutral-50 rounded">
                <code className="text-sm">Base Rate = Followers × Rate Per Follower (based on niche)</code>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-3">Step 2: Apply Engagement Multiplier</p>
              <div className="p-3 bg-neutral-50 rounded">
                <code className="text-sm">Adjusted Rate = Base Rate × (Engagement % ÷ 5)</code>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-3">Step 3: Add Premium Factors</p>
              <div className="p-3 bg-neutral-50 rounded">
                <code className="text-sm">Final Rate = Adjusted Rate × (1 + Sum of Premium %)</code>
              </div>
            </div>
            <div className="p-4 bg-indigo-100 rounded-lg">
              <p className="text-body-sm font-semibold text-neutral-900 mb-2">Complete Example:</p>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>• 80,000 followers in finance niche</li>
                <li>• $0.08 per follower = $6,400 base rate</li>
                <li>• 9% engagement rate: 9 ÷ 5 = 1.8x multiplier</li>
                <li>• $6,400 × 1.8 = $11,520</li>
                <li>• Premium factors: +50% (high engagement), +40% (niche authority), +50% (30-day exclusivity)</li>
                <li>• $11,520 × (1 + 1.40) = <strong>$27,648 final rate</strong></li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Deliverable Pricing (By Content Type)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Deliverable Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Relative Value</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">Standard In-Feed Post</td>
                  <td className="py-3 px-4 font-semibold">1.0x (Base Rate)</td>
                  <td className="py-3 px-4">60-90 seconds, integrated product mention</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">Dedicated Product Video</td>
                  <td className="py-3 px-4 font-semibold text-green-600">1.5-2.0x</td>
                  <td className="py-3 px-4">Entire video focused on product</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">LIVE Mention/Demo</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">0.5x per mention</td>
                  <td className="py-3 px-4">During existing LIVE stream (5-10 min)</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">Dedicated LIVE Session</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">2.0-3.0x</td>
                  <td className="py-3 px-4">30-60 min dedicated LIVE with product</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">Spark Ads Permission</td>
                  <td className="py-3 px-4 font-semibold text-purple-600">+0.75-1.5x</td>
                  <td className="py-3 px-4">Brand can boost your post as ad</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-3 px-4">TikTok Shop Showcase</td>
                  <td className="py-3 px-4 font-semibold text-orange-600">0.5x</td>
                  <td className="py-3 px-4">Adding product to your Shop showcase</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Brand Takeover (Profile)</td>
                  <td className="py-3 px-4 font-semibold text-red-600">3.0-5.0x</td>
                  <td className="py-3 px-4">Brand controls your profile for 24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="bg-purple-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Package Bundling Strategies
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Encourage larger deals by bundling deliverables at discounted rates. Brands perceive better value, you secure bigger contracts.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Bundle Strategy 1: Volume Discount</h4>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>• 1 post = $2,000 (full rate)</li>
                <li>• 3 posts = $5,400 (10% discount, $1,800 each)</li>
                <li>• 5 posts = $8,500 (15% discount, $1,700 each)</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Bundle Strategy 2: Multi-Platform Package</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                TikTok + Instagram package = 2.5x single platform rate (instead of 3x for separate deals)
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-2">Bundle Strategy 3: Long-Term Partnership</h4>
              <p className="text-body-sm text-neutral-700 mb-2">
                3-month ambassador deal (12 posts total) = 20% discount on per-post rate for commitment and volume
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            When to Say No to Low Offers
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-body-sm font-semibold text-red-900 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Offer below 50% of market rate</p>
              <p className="text-body-sm text-neutral-700">
                Unless it's a dream brand or provides massive exposure, don't undersell. You set the market rate for your tier.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-body-sm font-semibold text-red-900 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> "Exposure" or "gifted product" only</p>
              <p className="text-body-sm text-neutral-700">
                Your audience is your business asset. Brands with budgets pay cash. Gifted products are supplements, not payment.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-body-sm font-semibold text-red-900 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Unlimited revisions or perpetual rights without premium</p>
              <p className="text-body-sm text-neutral-700">
                Set revision limits (2-3 max) and charge 150%+ for perpetual usage rights.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-body-sm font-semibold text-red-900 mb-2 flex items-center gap-2"><X className="w-5 h-5" /> Brand doesn't align with values/audience</p>
              <p className="text-body-sm text-neutral-700">
                Audience trust is worth more than any single deal. One bad partnership can damage long-term earning potential.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
            Contract Negotiation Framework
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-3">Phase 1: Initial Pitch Response</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>Thank them for interest and opportunity</li>
                <li>Ask about campaign goals, timeline, and deliverables</li>
                <li>Request their budget range (let them anchor first if possible)</li>
                <li>Share your rate card and portfolio</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-3">Phase 2: Rate Presentation</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>Present rate 20-30% above your minimum acceptable</li>
                <li>Justify with metrics: engagement, demographics, past performance</li>
                <li>Offer tiered packages (bronze/silver/gold)</li>
                <li>Emphasize value, not just reach</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-3">Phase 3: Handling Objections</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>"Budget is limited" → Offer smaller package or hybrid model</li>
                <li>"Other creators charge less" → Differentiate with quality/results</li>
                <li>"Can you do it for exposure?" → "My rate accounts for the exposure value"</li>
                <li>Always be willing to walk away</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="text-body-md font-semibold text-neutral-900 mb-3">Phase 4: Closing the Deal</h4>
              <ul className="text-body-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>Negotiate payment terms (50% upfront for deals over $1K)</li>
                <li>Clarify deliverables, timelines, revision policy</li>
                <li>Define usage rights and exclusivity clearly</li>
                <li>Get everything in writing before starting work</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Recommended Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/brand-deal-rate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Brand Deal Rate</h3>
              <p className="text-body-sm text-neutral-600">Calculate fair pricing</p>
            </Link>
            <Link href="/calculators/content-value" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Content Value</h3>
              <p className="text-body-sm text-neutral-600">Determine post worth</p>
            </Link>
            <Link href="/calculators/engagement-rate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-2">Engagement Rate</h3>
              <p className="text-body-sm text-neutral-600">Measure audience quality</p>
            </Link>
          </div>
        </Card>

        <FAQSection faqs={faqs} pageName="How to Price Brand Deals" />
      </div>
    </div>
  );
}
