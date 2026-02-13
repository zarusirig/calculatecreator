import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import Link from 'next/link';
import { Briefcase, BookOpen, RefreshCw, CheckCircle, Lightbulb, DollarSign, FileText, Shield, AlertTriangle, TrendingUp, Users, Scale, Percent, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Brand Deals Guide 2026 | Influencer Pricing, Contracts & Negotiation',
  description: 'Complete guide to TikTok brand deals in 2026. Rate benchmarks from Nano ($50) to Mega ($2M), pricing models, usage rights, exclusivity, contract essentials, and negotiation strategies.',
  keywords: ['tiktok brand deals', 'influencer pricing', 'tiktok sponsorship rates', 'how much to charge brand deals', 'influencer rate card', 'tiktok creator marketplace'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/brand-deals/',
  },
  openGraph: {
    title: 'TikTok Brand Deals Guide 2026 | Influencer Pricing, Contracts & Negotiation',
    description: 'Complete guide to TikTok brand deals. Rate benchmarks, pricing models, usage rights, exclusivity, contract essentials, and negotiation strategies.',
    type: 'article',
    url: 'https://calculatecreator.com/guides/brand-deals/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Brand Deals Guide 2026 | Influencer Pricing & Negotiation',
    description: 'Complete guide to brand deals with rate benchmarks, pricing models, and negotiation strategies.',
  },
};

const tableOfContents = [
  { title: 'Introduction: Brand Deals as #1 Income Stream', id: 'introduction' },
  { title: 'Pricing Models', id: 'pricing-models' },
  { title: 'Rate Benchmarks by Tier', id: 'rate-benchmarks' },
  { title: 'How to Build a Rate Card', id: 'rate-card' },
  { title: 'Usage Rights & Whitelisting Pricing', id: 'usage-rights' },
  { title: 'Exclusivity Pricing Multipliers', id: 'exclusivity' },
  { title: 'Contract Must-Have Clauses', id: 'contract-clauses' },
  { title: 'Negotiation Scripts & Strategies', id: 'negotiation' },
  { title: 'Payment Terms: Net 30/45/60', id: 'payment-terms' },
  { title: 'FAQs', id: 'faqs' },
];

export default function BrandDealsGuidePage() {
  const readingTime = '24 min read';
  const lastUpdated = 'February 13, 2026';

  return (
    <>
      <ArticleSchema
        headline="TikTok Brand Deals Guide 2026: Influencer Pricing, Contracts & Negotiation"
        description="Complete guide to TikTok brand deals covering rate benchmarks from Nano to Mega influencers, pricing models, usage rights and whitelisting pricing, exclusivity multipliers, contract essentials, and negotiation strategies."
        url="https://calculatecreator.com/guides/brand-deals/"
        datePublished="2026-02-13"
        dateModified="2026-02-13"
        keywords={['tiktok brand deals', 'influencer pricing', 'sponsorship rates', 'usage rights', 'creator contracts', 'negotiation strategies']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Guides', url: 'https://calculatecreator.com/guides/' },
          { name: 'Brand Deals Guide', url: 'https://calculatecreator.com/guides/brand-deals/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides/' },
              { label: 'Brand Deals Guide', href: '/guides/brand-deals/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white mb-6">
              <Briefcase className="w-12 h-12" />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Brand Deals Guide 2026
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto mb-6">
              The complete resource for TikTok brand deals and influencer pricing. Master rate benchmarks from Nano to Mega tiers, understand pricing models and usage rights, build professional rate cards, negotiate confidently with brands, and structure contracts that protect your interests while maximizing income.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {readingTime}
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Updated: {lastUpdated}
              </span>
            </div>
          </div>

          {/* Introduction */}
          <section className="py-8 bg-white -mx-4 px-4 mb-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                Brand deals are the #1 income stream for TikTok creators across ALL tiers, from nano-influencers with 1,000 followers to mega-influencers with millions. The average brand deal across all tiers is $285, but understanding your true worth and how to negotiate effectively can dramatically increase your earnings. Brand deals generate 10-50x more than Creator Rewards for the same audience size, making them the most lucrative monetization path for serious creators. In 2026, the influencer marketing industry has grown to $21 billion+, with brands increasingly allocating budget to micro and nano-influencers who deliver higher engagement and better ROI than mega-influencers. Yet many creators undercharge because they don&apos;t understand market rates, fail to factor in usage rights and exclusivity, or accept the first offer without negotiating. This comprehensive guide provides the exact rate benchmarks, pricing models, negotiation scripts, and contract frameworks used by top creators to command premium rates while building sustainable brand partnerships.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <Card className="max-w-4xl mx-auto mb-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Table of Contents</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                >
                  <span className="text-primary-600 group-hover:text-primary-700">&rarr;</span>
                  <span className="text-body-md text-neutral-700 group-hover:text-neutral-900">
                    {item.title}
                  </span>
                </a>
              ))}
            </nav>
          </Card>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1: Introduction */}
            <section id="introduction">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Introduction: Brand Deals as #1 Income Stream
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    Brand deals are the single most lucrative income stream for TikTok creators across every follower tier. While Creator Rewards and TikTok Shop affiliate commissions provide passive income, brand deals represent active, negotiable revenue that scales with your influence and negotiation skills. The average brand deal across all creator tiers is $285, but this number varies wildly: nano-influencers (1K-10K followers) average $50-$500 per post, while mega-influencers (1M+) command $500,000-$2,000,000+ per sponsored video. What makes brand deals so powerful is the earning potential relative to other monetization streams—a creator with 50,000 followers might earn $50/month from Creator Rewards but $1,000-$5,000 per month from brand deals, a 10-50x multiplier. The influencer marketing industry reached $21 billion in 2026, with brands shifting budgets from traditional advertising to creator partnerships because authentic endorsements from trusted voices deliver measurably better ROI than banner ads or TV commercials.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <h3 className="font-semibold text-neutral-900 mb-2">For Creators</h3>
                      <ul className="text-sm space-y-1">
                        <li>&bull; Know your worth: don&apos;t undercharge</li>
                        <li>&bull; Negotiate confidently with data</li>
                        <li>&bull; Factor in usage rights and exclusivity</li>
                        <li>&bull; Build long-term partnerships for recurring income</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <h3 className="font-semibold text-neutral-900 mb-2">For Brands</h3>
                      <ul className="text-sm space-y-1">
                        <li>&bull; Understand fair market rates by tier</li>
                        <li>&bull; Micro/nano-influencers deliver better ROI</li>
                        <li>&bull; Usage rights and exclusivity cost more</li>
                        <li>&bull; Negotiate win-win partnerships</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Whether you&apos;re a creator learning to price your services or a brand building an influencer strategy, this hub provides the complete framework. Use the <Link href="/calculators/brand-deal-rate/" className="text-primary-600 underline">Brand Deal Rate Calculator</Link> to determine your exact rate, and learn the negotiation tactics that separate six-figure creators from those leaving money on the table.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300 mt-6">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-600" /> Key Insight: Engagement Rate Matters More Than Follower Count</h3>
                    <p className="text-sm text-neutral-700">
                      A micro-influencer with 50K followers and 8% engagement rate often delivers better ROI for brands than a mega-influencer with 2M followers and 2% engagement. Authentic engagement translates to higher conversion rates, making engaged niche audiences more valuable than large but disengaged followings. Lead with your engagement rate in negotiations if it&apos;s above 5%.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: Pricing Models */}
            <section id="pricing-models">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 1: Pricing Models
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Understanding the five primary pricing models for brand deals is essential for choosing the right structure for your brand partnerships. Each model has different risk profiles, income potential, and suitability depending on your audience size, niche, and content performance consistency.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Five Brand Deal Pricing Models</h3>

                    <div className="space-y-4">
                      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                        <div className="mb-3">
                          <h4 className="font-bold text-neutral-900 text-lg">1. Flat Fee (Most Common)</h4>
                          <p className="text-sm text-neutral-600 italic">Fixed price per deliverable</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 mb-3">
                          <div>
                            <strong>Pros:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Predictable income</li>
                              <li>&bull; Simple to calculate and invoice</li>
                              <li>&bull; Creator keeps full payment regardless of performance</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Cons:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; No upside if content goes viral</li>
                              <li>&bull; Brand carries all performance risk</li>
                              <li>&bull; May leave money on table for top performers</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700"><strong>Best for:</strong> Most creators, especially those with consistent view counts. Standard for 80% of brand deals.</p>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                        <div className="mb-3">
                          <h4 className="font-bold text-neutral-900 text-lg">2. CPM-Based ($5-$20 per 1K views)</h4>
                          <p className="text-sm text-neutral-600 italic">Payment based on actual views</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 mb-3">
                          <div>
                            <strong>Pros:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Unlimited upside if video goes viral</li>
                              <li>&bull; Fair payment based on actual reach</li>
                              <li>&bull; Brand pays for performance, not promise</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Cons:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Income uncertainty—algorithm dependent</li>
                              <li>&bull; Risk of underperformance</li>
                              <li>&bull; Payment delayed until view count finalized</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700"><strong>Best for:</strong> Creators with consistent 100K+ views per video who want to capitalize on viral potential.</p>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                        <div className="mb-3">
                          <h4 className="font-bold text-neutral-900 text-lg">3. CPA (Cost Per Action)</h4>
                          <p className="text-sm text-neutral-600 italic">Payment per click, sign-up, or purchase</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 mb-3">
                          <div>
                            <strong>Pros:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Highest potential earnings per post</li>
                              <li>&bull; Aligns incentives—you benefit from conversions</li>
                              <li>&bull; Brands love it (low risk for them)</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Cons:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; High risk—you might earn nothing</li>
                              <li>&bull; Dependent on product quality and brand funnel</li>
                              <li>&bull; Tracking can be complex</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700"><strong>Best for:</strong> Creators with high-converting audiences in niches like finance, tech, SaaS, or products you&apos;ve personally vetted.</p>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
                        <div className="mb-3">
                          <h4 className="font-bold text-neutral-900 text-lg">4. Revenue Share (5-30%)</h4>
                          <p className="text-sm text-neutral-600 italic">Percentage of sales generated</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 mb-3">
                          <div>
                            <strong>Pros:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Recurring income if sales continue</li>
                              <li>&bull; Scales with product success</li>
                              <li>&bull; Works well for digital products (high margin)</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Cons:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Income dependent on brand&apos;s sales funnel</li>
                              <li>&bull; You control promotion, not conversion</li>
                              <li>&bull; Requires trust in brand&apos;s reporting</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700"><strong>Best for:</strong> Creators promoting digital products, courses, or high-margin physical products where you have confidence in conversion rates.</p>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-500">
                        <div className="mb-3">
                          <h4 className="font-bold text-neutral-900 text-lg">5. Hybrid (Increasingly Standard)</h4>
                          <p className="text-sm text-neutral-600 italic">Base fee + performance bonus</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 mb-3">
                          <div>
                            <strong>Pros:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; Guaranteed base income + upside potential</li>
                              <li>&bull; Win-win: brand caps risk, creator has floor</li>
                              <li>&bull; Incentivizes high-quality content</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Cons:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>&bull; More complex to structure and track</li>
                              <li>&bull; Base fee typically lower than pure flat fee</li>
                              <li>&bull; Requires clear performance metrics upfront</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700"><strong>Best for:</strong> Mid-tier and macro creators negotiating with established brands. Example: $3,000 base + $10 per 1K views over 100K.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Pricing Model Comparison Table</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Model</th>
                            <th className="p-3 text-left font-semibold">Risk Level</th>
                            <th className="p-3 text-left font-semibold">Upside Potential</th>
                            <th className="p-3 text-left font-semibold">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">Flat Fee</td>
                            <td className="p-3 text-green-600">Low</td>
                            <td className="p-3 text-orange-600">Low</td>
                            <td className="p-3">Most creators, predictable income</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">CPM-Based</td>
                            <td className="p-3 text-orange-600">Medium</td>
                            <td className="p-3 text-green-600">High</td>
                            <td className="p-3">Consistent 100K+ view creators</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">CPA</td>
                            <td className="p-3 text-red-600">High</td>
                            <td className="p-3 text-green-600">Very High</td>
                            <td className="p-3">High-converting niches (finance, tech)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Revenue Share</td>
                            <td className="p-3 text-orange-600">Medium</td>
                            <td className="p-3 text-green-600">High</td>
                            <td className="p-3">Digital products, recurring sales</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Hybrid</td>
                            <td className="p-3 text-green-600">Low</td>
                            <td className="p-3 text-green-600">Medium-High</td>
                            <td className="p-3">Win-win for mid-tier+ creators</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 3: Rate Benchmarks by Tier */}
            <section id="rate-benchmarks">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 2: Rate Benchmarks by Tier
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Understanding market rate benchmarks by follower tier is the foundation of confident pricing. These benchmarks represent the standard range across industries, with premium niches (finance, tech, beauty) commanding 20-30% above baseline.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Rate Benchmarks by Creator Tier</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Tier</th>
                            <th className="p-3 text-left font-semibold">Followers</th>
                            <th className="p-3 text-left font-semibold">Rate Per Post</th>
                            <th className="p-3 text-left font-semibold">Rate Per Follower</th>
                            <th className="p-3 text-left font-semibold">Avg Engagement</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">Nano</td>
                            <td className="p-3">1K-10K</td>
                            <td className="p-3 text-green-600 font-semibold">$50-$500</td>
                            <td className="p-3">$0.05-$0.10</td>
                            <td className="p-3">8-15%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Micro</td>
                            <td className="p-3">10K-100K</td>
                            <td className="p-3 text-green-600 font-semibold">$500-$5,000</td>
                            <td className="p-3">$0.05-$0.10</td>
                            <td className="p-3">5-10%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Mid-Tier</td>
                            <td className="p-3">100K-500K</td>
                            <td className="p-3 text-blue-600 font-semibold">$5,000-$50,000</td>
                            <td className="p-3">$0.05-$0.10</td>
                            <td className="p-3">3-6%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Macro</td>
                            <td className="p-3">500K-1M</td>
                            <td className="p-3 text-orange-600 font-semibold">$50,000-$500,000</td>
                            <td className="p-3">$0.10-$0.50</td>
                            <td className="p-3">2-4%</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Mega</td>
                            <td className="p-3">1M+</td>
                            <td className="p-3 text-red-600 font-semibold">$500,000-$2,000,000+</td>
                            <td className="p-3">$0.50-$2.00</td>
                            <td className="p-3">1-3%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-neutral-700">
                        <strong>Important Note:</strong> Rates vary significantly by niche, engagement rate, and content quality. Premium niches (Finance, Tech, Beauty) command +20-30% above baseline rates. Always lead with engagement rate if it&apos;s above 5%.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-orange-600" /> Key Insight: Engagement Rate Matters More Than Follower Count</h3>
                    <p className="text-sm text-neutral-700">
                      A micro-influencer with 50K followers and 8% engagement rate delivers measurably better ROI for brands than a mega-influencer with 2M followers and 2% engagement. Engaged audiences convert at higher rates, making authentic niche communities more valuable than large disengaged followings. Calculate your engagement rate and lead with it in negotiations if it&apos;s above industry average.
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link href="/calculators/brand-deal-rate/">
                      <Button variant="primary">Calculate Your Brand Deal Rate</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 4: How to Build a Rate Card */}
            <section id="rate-card">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 3: How to Build a Rate Card
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    A professional rate card is essential for pitching brands and streamlining negotiations. It establishes your baseline pricing while allowing flexibility for custom packages and add-ons.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">What to Include in Your Rate Card</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><FileText className="w-8 h-8 text-blue-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Base Rates</h4>
                        <p className="text-sm text-neutral-700">
                          Single post, story, LIVE integration pricing with clear deliverables and terms.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><TrendingUp className="w-8 h-8 text-green-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Package Deals</h4>
                        <p className="text-sm text-neutral-700">
                          Multi-post bundles with discounts (e.g., 3-video package at 15% savings).
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><DollarSign className="w-8 h-8 text-purple-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Add-On Pricing</h4>
                        <p className="text-sm text-neutral-700">
                          Usage rights, whitelisting, exclusivity, revisions, and rush delivery fees.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Rate Card Template Structure</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-orange-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-neutral-900">Single In-Feed Video</h4>
                          <span className="font-bold text-lg text-neutral-900">$X</span>
                        </div>
                        <p className="text-sm text-neutral-700">60-90 second TikTok video featuring product, organic posting style, standard 30-day usage rights.</p>
                      </div>

                      <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-neutral-900">Video + Story</h4>
                          <span className="font-bold text-lg text-neutral-900">$X</span>
                        </div>
                        <p className="text-sm text-neutral-700">In-feed video + 3-5 story frames promoting same product/campaign.</p>
                      </div>

                      <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-neutral-900">3-Video Package</h4>
                          <span className="font-bold text-lg text-neutral-900">$X (15% discount)</span>
                        </div>
                        <p className="text-sm text-neutral-700">Three in-feed videos over 30 days. Best for product launches or sustained campaigns.</p>
                      </div>

                      <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-neutral-900">LIVE Integration</h4>
                          <span className="font-bold text-lg text-neutral-900">$X</span>
                        </div>
                        <p className="text-sm text-neutral-700">Product mention/demo during 30-60 minute LIVE session. High engagement, direct Q&A.</p>
                      </div>

                      <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-neutral-900">Spark Ads Authorization (30-day)</h4>
                          <span className="font-bold text-lg text-neutral-900">+$X</span>
                        </div>
                        <p className="text-sm text-neutral-700">Grant brand permission to boost your organic post as Spark Ad for 30 days. Add-on to base rate.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tips for Presenting Your Rate Card Professionally</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Do&apos;s</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Include audience demographics and engagement rate</li>
                          <li>&bull; Use professional design (Canva, Figma)</li>
                          <li>&bull; Clearly define what&apos;s included vs add-ons</li>
                          <li>&bull; Specify turnaround time and revision policy</li>
                          <li>&bull; Update quarterly as you grow</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Don&apos;ts</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Don&apos;t anchor too low—start 20-30% above target</li>
                          <li>&bull; Don&apos;t make it overly complex (1-2 pages max)</li>
                          <li>&bull; Don&apos;t lock yourself in—state &quot;rates subject to change&quot;</li>
                          <li>&bull; Don&apos;t include personal contact info publicly</li>
                          <li>&bull; Don&apos;t forget to watermark/protect your PDF</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Pro Tip:</strong> Adjust rates based on exclusivity (category vs broad), usage rights duration (30/60/90 days vs perpetual), turnaround time (rush fees for &lt;7 days), and number of revisions included (standard is 2 rounds).
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 5: Usage Rights & Whitelisting */}
            <section id="usage-rights">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 4: Usage Rights & Whitelisting Pricing
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Usage rights (how long and where brands can use your content) and whitelisting (brands running your content as paid ads) are separate, billable components that creators often give away for free. Understanding how to price these adds thousands to your deal value.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Usage Rights Pricing by License Period</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">License Period</th>
                            <th className="p-3 text-left font-semibold">Price Uplift</th>
                            <th className="p-3 text-left font-semibold">Example ($5,000 base)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3">30 days (standard)</td>
                            <td className="p-3 font-semibold text-green-600">+25%</td>
                            <td className="p-3">$6,250</td>
                          </tr>
                          <tr>
                            <td className="p-3">60 days</td>
                            <td className="p-3 font-semibold text-blue-600">+50%</td>
                            <td className="p-3">$7,500</td>
                          </tr>
                          <tr>
                            <td className="p-3">90 days</td>
                            <td className="p-3 font-semibold text-orange-600">+75%</td>
                            <td className="p-3">$8,750</td>
                          </tr>
                          <tr>
                            <td className="p-3">Perpetual/Buyout</td>
                            <td className="p-3 font-semibold text-red-600">+100%</td>
                            <td className="p-3">$10,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Whitelisting Pricing (Spark Ads Authorization)</h3>
                    <div className="p-5 bg-purple-50 rounded-lg">
                      <p className="text-sm text-neutral-700 mb-4">
                        <strong>What is whitelisting?</strong> Whitelisting means granting the brand permission to run your content as their paid ad using Spark Ads. The ad still lives on your profile and accumulates engagement for you, but the brand controls the paid distribution and targeting.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Standard Whitelisting Fee:</strong> 20-25% of base rate per 30-day window</span>
                          <span className="text-xs text-purple-600 font-semibold">Most Common</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Example:</strong> $5,000 base + 30-day whitelisting = $6,000-$6,250</span>
                          <span className="text-xs text-green-600 font-semibold">+$1,000-$1,250</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                          <span><strong>Extended Whitelisting (60-90 days):</strong> Charge 30-40% uplift</span>
                          <span className="text-xs text-orange-600 font-semibold">Higher Value</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> Warning: Never Give Perpetual Usage Rights Without Proportional Compensation</h4>
                    <p className="text-sm text-neutral-700">
                      Brands will often request &quot;in perpetuity&quot; usage rights buried in contract boilerplate. This means they can use your content forever, across all platforms, including in paid ads—without paying you again. NEVER agree to this without at least a 100% uplift (doubling your rate). Your content has long-term value; protect it.
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Pro Tip:</strong> Always specify usage rights explicitly in your contract: duration (30/60/90 days), platforms (TikTok only vs all social), geography (US only vs worldwide), and whether paid ad usage (whitelisting) is included or additional. Ambiguity costs you money.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 6: Exclusivity Pricing */}
            <section id="exclusivity">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 5: Exclusivity Pricing Multipliers
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Exclusivity clauses prevent you from working with competing brands during a specified period. Because this limits your future income opportunities, exclusivity must be compensated proportionally. Many creators unknowingly agree to broad exclusivity that locks them out of an entire category for months without additional payment.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Exclusivity Pricing Structure</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Exclusivity Type</th>
                            <th className="p-3 text-left font-semibold">Duration</th>
                            <th className="p-3 text-left font-semibold">Uplift</th>
                            <th className="p-3 text-left font-semibold">Example ($5K base)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3">Category (e.g., skincare only)</td>
                            <td className="p-3">30 days</td>
                            <td className="p-3 font-semibold text-green-600">+15%</td>
                            <td className="p-3">$5,750</td>
                          </tr>
                          <tr>
                            <td className="p-3">Category</td>
                            <td className="p-3">90 days</td>
                            <td className="p-3 font-semibold text-blue-600">+25%</td>
                            <td className="p-3">$6,250</td>
                          </tr>
                          <tr>
                            <td className="p-3">Broad (e.g., all beauty)</td>
                            <td className="p-3">30 days</td>
                            <td className="p-3 font-semibold text-orange-600">+25%</td>
                            <td className="p-3">$6,250</td>
                          </tr>
                          <tr>
                            <td className="p-3">Broad</td>
                            <td className="p-3">90 days</td>
                            <td className="p-3 font-semibold text-red-600">+30%+</td>
                            <td className="p-3">$6,500+</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Category vs Broad Exclusivity</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3">Category Exclusivity (Preferred)</h4>
                        <p className="text-sm text-neutral-700 mb-3">
                          Narrow exclusivity limits you only from competing brands in the same product category.
                        </p>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Example:</strong> &quot;Skincare cleansers only&quot; means you can still promote:</p>
                          <ul className="space-y-1 ml-4">
                            <li>&bull; Moisturizers</li>
                            <li>&bull; Serums</li>
                            <li>&bull; Makeup</li>
                            <li>&bull; Hair care</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-5 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-3">Broad Exclusivity (Costly)</h4>
                        <p className="text-sm text-neutral-700 mb-3">
                          Wide exclusivity blocks you from an entire industry vertical.
                        </p>
                        <div className="space-y-2 text-sm text-neutral-700">
                          <p><strong>Example:</strong> &quot;All beauty products&quot; means you CANNOT promote:</p>
                          <ul className="space-y-1 ml-4">
                            <li>&bull; Skincare of any kind</li>
                            <li>&bull; Makeup</li>
                            <li>&bull; Hair care</li>
                            <li>&bull; Fragrance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> Real Creator Story: 6 Months of Lost Income</h4>
                    <p className="text-sm text-neutral-700">
                      A fitness creator signed a $2,000 brand deal for a supplement company without reading the exclusivity clause. Buried in the contract was a 6-month broad exclusivity preventing them from promoting ANY fitness, nutrition, or wellness products. They lost an estimated $15,000-$20,000 in brand deal opportunities during that period—all for a single $2,000 payment. Always specify narrow category exclusivity and shorter durations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Always Specify These Three Elements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Scale className="w-8 h-8 text-orange-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Category</h4>
                        <p className="text-sm text-neutral-700">
                          Narrow scope: &quot;Facial cleansers&quot; not &quot;all skincare&quot;
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Clock className="w-8 h-8 text-blue-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Duration</h4>
                        <p className="text-sm text-neutral-700">
                          30-90 days max unless premium compensation
                        </p>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg text-center">
                        <div className="mb-2 flex justify-center"><Users className="w-8 h-8 text-green-600" /></div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Geographic Scope</h4>
                        <p className="text-sm text-neutral-700">
                          US-only vs worldwide exclusivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 7: Contract Must-Have Clauses */}
            <section id="contract-clauses">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 6: Contract Must-Have Clauses (10 Essentials)
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    A strong contract protects both parties and prevents costly disputes. These 10 clauses are non-negotiable for professional creator-brand partnerships. Never proceed without a written agreement.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        number: 1,
                        title: 'Scope of Work',
                        description: 'Exact deliverables with specificity: number of videos, length (e.g., &quot;one 60-90 second TikTok video&quot;), format (In-Feed, Story, LIVE), key messaging points, and whether brand has script approval. Ambiguity leads to scope creep.',
                      },
                      {
                        number: 2,
                        title: 'Compensation & Payment Terms',
                        description: 'Total payment amount, payment schedule (50% upfront / 50% on delivery is standard), payment method (wire, PayPal, check), and late payment penalties (1.5-2% per month is standard for Net 30/45/60 terms).',
                      },
                      {
                        number: 3,
                        title: 'Usage Rights & Licensing',
                        description: 'Duration (30/60/90 days vs perpetual), platforms (TikTok only vs all social media), geography (US-only vs worldwide), and whether brand can use content in paid ads (whitelisting/Spark Ads) or repurpose for their own channels.',
                      },
                      {
                        number: 4,
                        title: 'IP Ownership (Creator Retains Copyright)',
                        description: 'CRITICAL: You own the copyright to your content. Brand receives a LICENSE to use it per the usage rights, not ownership. Never transfer copyright unless compensated at buyout rates (100%+ uplift). This allows you to reuse your content later.',
                      },
                      {
                        number: 5,
                        title: 'Content Creator Controls',
                        description: 'Your right to approve final posted content before it goes live, clearly disclose the partnership per FTC requirements, and delete the content after the license period expires if you choose. Brand cannot force you to keep content live indefinitely.',
                      },
                      {
                        number: 6,
                        title: 'Liability & Indemnification',
                        description: 'Who is responsible if claims arise. Standard: brand indemnifies you for product liability or false advertising claims (since they control the product/claims), and you indemnify brand for copyright infringement if you use unlicensed music/content.',
                      },
                      {
                        number: 7,
                        title: 'Termination Clause',
                        description: 'How either party can exit the agreement. Include provisions for termination with notice (e.g., 7-14 days written notice), what happens to payment if terminated early (you keep deposit, prorated payment for work completed), and who owns content if deal is terminated mid-project.',
                      },
                      {
                        number: 8,
                        title: 'Exclusivity Terms (If Applicable)',
                        description: 'If brand requires exclusivity, specify: exact category (narrow, not broad), duration (30-90 days max unless premium compensation), geographic scope (US vs worldwide), and the additional fee for exclusivity (15-30% uplift minimum).',
                      },
                      {
                        number: 9,
                        title: 'FTC Disclosure Compliance',
                        description: 'Both parties agree to follow FTC disclosure guidelines. Creator will clearly label sponsored content with #ad or #sponsored, and brand acknowledges disclosure is required. Include language that brand cannot prohibit or limit disclosure—this is legally required.',
                      },
                      {
                        number: 10,
                        title: 'Dispute Resolution',
                        description: 'How disagreements will be resolved. Standard approach: attempt mediation first, then binding arbitration if mediation fails, before resorting to litigation. Specify which state&apos;s laws govern the contract (typically your state or brand&apos;s headquarters state).',
                      },
                    ].map((clause) => (
                      <div key={clause.number} className="p-5 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border-l-4 border-orange-500">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                            {clause.number}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-neutral-900 text-lg mb-2">{clause.title}</h4>
                            <p className="text-sm text-neutral-700">{clause.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-neutral-700">
                      <strong>Contract Templates:</strong> Use free templates from the Creator Law Center, consult entertainment attorneys for high-value deals ($10K+), or purchase contract templates from platforms like the Contract Shop. Never proceed without a written agreement—verbal deals are not enforceable.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 8: Negotiation Scripts & Strategies */}
            <section id="negotiation">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 7: Negotiation Scripts & Strategies
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Negotiation is a skill that directly impacts your earnings. The difference between accepting the first offer and confidently negotiating can be thousands of dollars per deal. Master these five rules and use the script templates below to maximize your brand deal income.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">5 Golden Rules of Brand Deal Negotiation</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-neutral-900 mb-2">Rule 1: Always Start 20-30% Above Your Target</h4>
                        <p className="text-sm text-neutral-700">
                          Brands expect negotiation and typically have budget flexibility they won&apos;t reveal upfront. If your target is $1,000, quote $1,200-$1,300. This gives you room to &quot;compromise&quot; while still hitting your goal. Anchoring high sets the negotiation range in your favor.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-neutral-900 mb-2">Rule 2: Never Accept First Offer (Counter +15-20%)</h4>
                        <p className="text-sm text-neutral-700">
                          Even if the first offer seems fair, ALWAYS counter with 15-20% more. Example: Brand offers $1,000. Respond: &quot;Thank you for the offer! Based on my engagement metrics and audience demographics, I typically work at $1,200 for this deliverable. Can we meet there?&quot; You&apos;ll be surprised how often they say yes.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-neutral-900 mb-2">Rule 3: Lead with Engagement Rate if Above 5%</h4>
                        <p className="text-sm text-neutral-700">
                          High engagement is your strongest negotiating leverage. If your engagement rate is above 5%, lead with this: &quot;My engagement rate is 7.2%, which is 2x the TikTok average, meaning my audience is highly engaged and converts well for brand partners.&quot; This justifies premium pricing.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold text-neutral-900 mb-2">Rule 4: Offer Value-Adds Instead of Price Cuts</h4>
                        <p className="text-sm text-neutral-700">
                          If brand pushes back on price, offer value-adds instead of discounting. Example: &quot;I can&apos;t reduce my rate, but I can add 3 Instagram story frames to amplify reach across platforms at no additional cost.&quot; This maintains your rate integrity while making the brand feel they&apos;re getting more value.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-semibold text-neutral-900 mb-2">Rule 5: Know Your Walk-Away Rate</h4>
                        <p className="text-sm text-neutral-700">
                          Before every negotiation, set your minimum acceptable rate—the point below which you&apos;ll decline the deal. This prevents you from accepting lowball offers out of desperation. Example: If your target is $1,000, your walk-away might be $800. Below that, politely decline: &quot;I appreciate the opportunity, but I can&apos;t accommodate this budget. I&apos;d love to collaborate on a future campaign that aligns with my rates.&quot;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Negotiation Script Templates</h3>

                    <div className="space-y-4">
                      <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                        <h4 className="font-semibold text-neutral-900 mb-3">Script 1: Initial Rate Quote (Anchoring High)</h4>
                        <div className="p-4 bg-white rounded-lg text-sm text-neutral-700 space-y-2">
                          <p><em>&quot;Thank you for reaching out! I&apos;d love to collaborate with [Brand Name]. Based on my engagement rate of [X]% and average views of [Y] per post, my standard rate for a single in-feed TikTok video with 30-day usage rights is $[Z].&quot;</em></p>
                          <p><em>&quot;This includes [specific deliverables: length, style, key messaging, posting timeline]. Usage rights for paid ads (Spark Ads) would be an additional [20-25%]. Does this align with your budget for this campaign?&quot;</em></p>
                        </div>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                        <h4 className="font-semibold text-neutral-900 mb-3">Script 2: Counter-Offer When Rate Is Too Low</h4>
                        <div className="p-4 bg-white rounded-lg text-sm text-neutral-700 space-y-2">
                          <p><em>&quot;Thank you for the offer of $[X]. I appreciate you considering me for this campaign.&quot;</em></p>
                          <p><em>&quot;After reviewing my analytics, my recent posts in this niche average [Y] views with [Z]% engagement, which translates to a $[implied CPM] CPM. Based on these metrics and the scope of work, my rate for this deliverable is $[X + 15-20%].&quot;</em></p>
                          <p><em>&quot;I&apos;m confident I can deliver excellent results for your brand at this rate. Would you be open to meeting at $[counter-offer]?&quot;</em></p>
                        </div>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border-2 border-purple-200">
                        <h4 className="font-semibold text-neutral-900 mb-3">Script 3: Bundle Offer (Volume Discount)</h4>
                        <div className="p-4 bg-white rounded-lg text-sm text-neutral-700 space-y-2">
                          <p><em>&quot;For clients looking for sustained visibility, I offer a 3-video package over 30 days at $[X], which represents a 15% savings compared to individual videos.&quot;</em></p>
                          <p><em>&quot;This approach works well for product launches or seasonal campaigns where consistent touchpoints drive better brand recall and conversion. Would a package deal be of interest?&quot;</em></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-600" /> Pro Negotiation Insight: Research Your Metrics First</h3>
                    <p className="text-sm text-neutral-700">
                      Before any negotiation, calculate your engagement rate, average views per post, and implied CPM (how much a brand would pay per 1K impressions). Use our <Link href="/calculators/engagement-rate/" className="text-primary-600 underline">Engagement Rate Calculator</Link> and pull your TikTok analytics for the last 30 days. Having data-backed metrics makes you sound professional and justifies your pricing. Brands respect creators who understand their value.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 9: Payment Terms */}
            <section id="payment-terms">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 8: Payment Terms: Net 30/45/60
                </h2>

                <div className="space-y-6">
                  <p className="text-body-lg text-neutral-700">
                    Payment terms define when you receive payment after delivering your content. Understanding standard industry terms and negotiating favorable payment structures protects your cash flow and ensures you get paid on time.
                  </p>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Standard Payment Terms</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Term</th>
                            <th className="p-3 text-left font-semibold">Description</th>
                            <th className="p-3 text-left font-semibold">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3 font-semibold">Net 15</td>
                            <td className="p-3">Payment within 15 days of invoice</td>
                            <td className="p-3">Small brands, quick deals, micro-influencers</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Net 30</td>
                            <td className="p-3">Payment within 30 days of invoice</td>
                            <td className="p-3 text-green-600 font-semibold">Standard (most common)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Net 45</td>
                            <td className="p-3">Payment within 45 days of invoice</td>
                            <td className="p-3">Mid-size brands with standard AP processes</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold">Net 60</td>
                            <td className="p-3">Payment within 60 days of invoice</td>
                            <td className="p-3">Large brands and agencies (longer AP cycles)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Practice: Request 50/50 Payment Split</h3>
                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-neutral-700 mb-3">
                        <strong>The 50/50 Split Structure:</strong> Request 50% upfront (before any work begins) and 50% upon delivery or within Net 30 of delivery. This protects both parties: you&apos;re not fully at risk if the brand doesn&apos;t pay, and the brand has incentive to pay the remainder to receive the content.
                      </p>
                      <div className="space-y-2 text-sm text-neutral-700">
                        <p><strong>Example Timeline:</strong></p>
                        <ul className="space-y-1 ml-4">
                          <li>&bull; Day 0: Contract signed</li>
                          <li>&bull; Day 1-3: 50% deposit received (via wire/PayPal)</li>
                          <li>&bull; Day 4-10: Content created and approved</li>
                          <li>&bull; Day 11: Content delivered and posted</li>
                          <li>&bull; Day 11-41: Remaining 50% due (Net 30)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">100% Upfront Payment (Ideal but Rare)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">When It&apos;s Possible</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Deals under $1,000</li>
                          <li>&bull; Small brands with flexible payment processes</li>
                          <li>&bull; Creators with strong negotiating leverage</li>
                          <li>&bull; Product-only deals (no cash, just free product)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">When It&apos;s Rare</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Deals over $5,000</li>
                          <li>&bull; Large brands with strict accounts payable policies</li>
                          <li>&bull; Agencies managing multiple creator campaigns</li>
                          <li>&bull; Long-term partnership agreements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Late Payment Protection: Include Late Fee Clause</h3>
                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-semibold text-neutral-900 mb-3">Standard Late Payment Clause</h4>
                      <p className="text-sm text-neutral-700 mb-3">
                        Include this language in your contract to protect against late payment: <em>&quot;Payments not received within the agreed Net [X] terms will accrue a late fee of 1.5% per month (18% annual percentage rate) until paid in full.&quot;</em>
                      </p>
                      <p className="text-sm text-neutral-700">
                        <strong>Example:</strong> $5,000 invoice due Net 30. Payment is 60 days late. Late fee: $5,000 × 1.5% × 2 months = $150 additional owed. This incentivizes on-time payment and compensates you for cash flow disruption.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Invoice Template Tips</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Must Include</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Your name/business name and address</li>
                          <li>&bull; Invoice number and date issued</li>
                          <li>&bull; Payment due date (e.g., &quot;Due: Net 30&quot;)</li>
                          <li>&bull; Description of services rendered</li>
                          <li>&bull; Total amount due</li>
                          <li>&bull; Payment instructions (wire details, PayPal, Venmo)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-white border-2 border-neutral-200 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">Pro Tips</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>&bull; Use professional invoicing software (FreshBooks, Wave, QuickBooks)</li>
                          <li>&bull; Send invoice immediately after content delivery</li>
                          <li>&bull; Follow up 1 week before payment due date</li>
                          <li>&bull; For large deals ($10K+), request wire transfer (faster than checks)</li>
                          <li>&bull; Keep records for tax purposes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200">
              <div className="text-center py-8">
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-4">
                  Ready to Price Your Brand Deals Confidently?
                </h2>
                <p className="text-body-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
                  Use our calculators to determine your exact brand deal rate and understand your true earning potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/calculators/brand-deal-rate/">
                    <Button variant="primary" size="lg">
                      Calculate Your Rate
                    </Button>
                  </Link>
                  <Link href="/calculators/influencer-pricing/">
                    <Button variant="secondary" size="lg">
                      Influencer Pricing Calculator
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Related Guides */}
            <Card>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/how-to-get-brand-deals/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">How to Get Brand Deals</h4>
                  <p className="text-body-sm text-neutral-700">Find and pitch brands for sponsorship opportunities</p>
                </Link>
                <Link href="/guides/how-to-get-brand-deals-complete/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">How to Get Brand Deals (Complete)</h4>
                  <p className="text-body-sm text-neutral-700">Comprehensive guide from 0 to first sponsorship</p>
                </Link>
                <Link href="/guides/how-to-negotiate-brand-deals/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">How to Negotiate Brand Deals</h4>
                  <p className="text-body-sm text-neutral-700">Advanced negotiation tactics for premium rates</p>
                </Link>
                <Link href="/guides/how-to-price-brand-deals/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">How to Price Brand Deals</h4>
                  <p className="text-body-sm text-neutral-700">Set profitable rates based on your metrics</p>
                </Link>
                <Link href="/guides/how-much-to-charge-for-sponsorships/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">How Much to Charge for Sponsorships</h4>
                  <p className="text-body-sm text-neutral-700">Platform-specific sponsorship pricing guide</p>
                </Link>
                <Link href="/guides/tiktok-creator-marketplace/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                  <h4 className="font-semibold text-neutral-900 mb-2">TikTok Creator Marketplace Guide</h4>
                  <p className="text-body-sm text-neutral-700">Get discovered by brands on official platform</p>
                </Link>
              </div>
            </Card>

            {/* FAQ Section */}
            <section id="faqs">
              <FAQSection
                pageName="Brand Deals Guide"
                faqs={[
                  {
                    question: 'How much should I charge for a TikTok brand deal?',
                    answer: 'Brand deal rates vary by follower tier: Nano (1K-10K) charge $50-$500, Micro (10K-100K) charge $500-$5,000, Mid-Tier (100K-500K) charge $5,000-$50,000, Macro (500K-1M) charge $50,000-$500,000, and Mega (1M+) charge $500,000-$2M+. Rates also depend on engagement rate, niche (premium niches like finance/tech command +20-30% above baseline), usage rights, and exclusivity. Use our Brand Deal Rate Calculator to determine your exact rate.',
                  },
                  {
                    question: 'What percentage does TikTok take from brand deals?',
                    answer: 'TikTok takes 0% from direct brand deals you negotiate yourself. You keep 100% of the payment. This includes deals negotiated through TikTok Creator Marketplace—unlike YouTube which takes 45% of ad revenue, TikTok does not take a commission from creator brand partnerships. This makes brand deals the most lucrative income stream for TikTok creators.',
                  },
                  {
                    question: 'How many followers do I need for brand deals?',
                    answer: 'You can start getting brand deals with as few as 1,000 followers as a nano-influencer. Nano-influencers (1K-10K) typically earn $50-$500 per post. Most creators see consistent brand deal flow around 10,000-25,000 followers. High engagement rate (5%+) is more important than follower count—brands prefer engaged niche audiences over large disengaged followings.',
                  },
                  {
                    question: 'What are usage rights in brand deals?',
                    answer: 'Usage rights define how long and where brands can use your content beyond the original organic post. Standard usage rights are 30 days on TikTok only. Extended rights cost more: 60 days = +50% uplift, 90 days = +75% uplift, perpetual/buyout = +100% uplift. Always specify usage rights explicitly in your contract—duration, platforms, geography, and whether brand can use content in paid ads (whitelisting).',
                  },
                  {
                    question: 'How much extra should I charge for exclusivity?',
                    answer: 'Exclusivity pricing depends on scope and duration: Category exclusivity (e.g., skincare only) for 30 days = +15% uplift, 90 days = +25% uplift. Broad exclusivity (e.g., all beauty) for 30 days = +25% uplift, 90 days = +30%+ uplift. Always narrow exclusivity to specific categories and limit duration to 30-90 days unless receiving premium compensation. Never agree to broad exclusivity without substantial uplifts.',
                  },
                  {
                    question: 'What is whitelisting and how much should I charge?',
                    answer: 'Whitelisting (also called Spark Ads authorization) means granting the brand permission to run your organic content as their paid ad. Engagement from whitelisted ads flows back to your profile. Charge 20-25% of your base rate per 30-day whitelisting period. Example: $5,000 base rate + 30-day whitelisting = $6,000-$6,250 total. Extended whitelisting (60-90 days) should be 30-40% uplift.',
                  },
                  {
                    question: 'Should I accept product-only brand deals?',
                    answer: 'Only accept product-only deals if: (1) Product value exceeds your standard rate, (2) You genuinely want the product for personal use, (3) You&apos;re a nano-influencer building your portfolio, or (4) The brand is willing to negotiate cash payment for future collaborations. Never accept product-only deals from brands with large marketing budgets—they can afford to pay. Product trades devalue your work and set a bad precedent.',
                  },
                  {
                    question: 'How do I negotiate a higher brand deal rate?',
                    answer: 'Follow these negotiation tactics: (1) Start 20-30% above your target to anchor high, (2) Never accept first offer—counter with +15-20%, (3) Lead with engagement rate if above 5%, (4) Offer value-adds instead of discounting (e.g., add story frames instead of cutting price), (5) Know your walk-away rate and politely decline lowball offers. Research your metrics first using our Engagement Rate Calculator.',
                  },
                  {
                    question: 'What payment terms are standard for brand deals?',
                    answer: 'Net 30 (payment within 30 days of invoice) is the most common payment term. Request a 50/50 split when possible: 50% upfront before work begins, 50% upon delivery or within Net 30 of delivery. Large brands may require Net 45 or Net 60 due to accounts payable processes. Include a late fee clause (1.5-2% per month) in your contract to incentivize on-time payment.',
                  },
                  {
                    question: 'Do I need a contract for brand deals?',
                    answer: 'Always use a written contract for brand deals. Verbal agreements are not legally enforceable. Your contract must include: scope of work, compensation, payment terms, usage rights, IP ownership (you retain copyright), content creator controls, liability/indemnification, termination clause, exclusivity terms (if applicable), FTC disclosure compliance, and dispute resolution. Use free templates from Creator Law Center or consult an entertainment attorney for deals over $10K.',
                  },
                  {
                    question: 'What is the difference between flat fee and CPM brand deals?',
                    answer: 'Flat fee deals pay a fixed amount per deliverable regardless of performance—predictable income but no upside if content goes viral. CPM-based deals (Cost Per Mille) pay $5-$20 per 1,000 views—unlimited upside potential but income is uncertain and algorithm-dependent. Flat fee is standard for 80% of brand deals. CPM is best for creators with consistent 100K+ views who want to capitalize on viral potential.',
                  },
                  {
                    question: 'How do I build a media kit for brand deals?',
                    answer: 'Your media kit should include: (1) Profile photo and bio, (2) Follower count and engagement rate, (3) Audience demographics (age, gender, location from TikTok analytics), (4) Top-performing videos (3-5 examples with view counts), (5) Previous brand partnerships or testimonials, (6) Rate card or contact information. Use Canva free templates, Adobe Express, or hire a designer on Fiverr ($20-$50). Keep it 1-2 pages, professional, and update quarterly.',
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
