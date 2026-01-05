import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import Link from 'next/link';
import { Briefcase, BookOpen, RefreshCw, BarChart3, TrendingUp, CheckCircle, XCircle, AlertTriangle, Lightbulb, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Influencer Rate Calculator Guide 2026 | How to Price TikTok Sponsorships',
  description: 'Master influencer pricing with our comprehensive rate guide. Learn to calculate brand deal rates, negotiate effectively, create packages, and scale your rates as you grow.',
  keywords: ['influencer rates', 'brand deal pricing', 'tiktok sponsorship rates', 'influencer pricing', 'how to charge brands', 'creator rates'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/influencer-rate-calculator-guide/',
  },
  openGraph: {
    title: 'Influencer Rate Calculator Guide 2026 | Price Your Sponsorships',
    description: 'Master influencer pricing, negotiation, and packaging. Learn what to charge brands at every follower tier.',
    type: 'article',
    url: 'https://calculatecreator.com/guides/influencer-rate-calculator-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Rate Calculator Guide 2026',
    description: 'Master influencer pricing and negotiation strategies.',
  },
};

const tableOfContents = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Rate Calculation Fundamentals', id: 'fundamentals' },
  { title: 'Rate Benchmarks by Tier', id: 'benchmarks' },
  { title: 'Factors That Affect Rates', id: 'factors' },
  { title: 'Deliverable Types & Pricing', id: 'deliverables' },
  { title: 'Negotiation Strategies', id: 'negotiation' },
  { title: 'Rate Packages & Bundling', id: 'packages' },
  { title: 'Contract Essentials', id: 'contracts' },
  { title: 'Scaling Rates Over Time', id: 'scaling' },
  { title: 'FAQs', id: 'faqs' },
];

export default function InfluencerRateCalculatorGuidePage() {
  const readingTime = '11 min read';
  const lastUpdated = 'November 13, 2026';

  return (
    <>
      <ArticleSchema
        headline="Influencer Rate Calculator Guide 2026"
        description="Comprehensive guide to influencer pricing covering rate calculations, benchmarks by tier, negotiation strategies, deliverable pricing, and scaling rates over time."
        url="https://calculatecreator.com/guides/influencer-rate-calculator-guide"
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        keywords={['influencer rates', 'brand deal pricing', 'sponsorship rates', 'creator pricing', 'negotiation strategies']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Guides', url: 'https://calculatecreator.com/guides' },
          { name: 'Influencer Rate Guide', url: 'https://calculatecreator.com/guides/influencer-rate-calculator-guide' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides' },
              { label: 'Influencer Rate Guide', href: '/guides/influencer-rate-calculator-guide' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white mb-6">
              <Briefcase className="w-10 h-10" />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              Influencer Rate Calculator Guide 2026
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto mb-6">
              Master the art of pricing yourself as a TikTok influencer. Learn rate calculations, negotiation tactics, package creation, and how to scale your rates strategically as you grow.
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
                  <span className="text-primary-600 group-hover:text-primary-700">→</span>
                  <span className="text-body-md text-neutral-700 group-hover:text-neutral-900">
                    {item.title}
                  </span>
                </a>
              ))}
            </nav>
          </Card>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section id="introduction">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  How to Price Yourself as a TikTok Influencer
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p>
                    Pricing yourself correctly is one of the most critical skills for influencer success. Charge too little, and you leave thousands on the table while devaluing the creator economy. Charge too much without justification, and brands walk away.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-2 border-red-300 my-6">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      The Underpricing Epidemic
                    </h3>
                    <p className="text-sm text-neutral-700">
                      <strong>70% of creators underprice themselves by 40-60%.</strong> New creators often accept $200 when they should charge $600. This happens because they don't know market rates, fear rejection, or feel "lucky" to get any deal. Stop leaving money on the table - use data to price confidently.
                    </p>
                  </div>

                  <p>
                    This guide provides proven frameworks for calculating your rates based on followers, engagement, niche, and deliverables. You'll learn negotiation tactics, package structures, and when to walk away from bad deals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="p-5 bg-blue-50 rounded-lg text-center">
                      <div className="flex justify-center mb-2">
                        <BarChart3 className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Data-Driven Pricing</h3>
                      <p className="text-sm text-neutral-700">
                        Use calculators and benchmarks, not guesswork
                      </p>
                    </div>

                    <div className="p-5 bg-green-50 rounded-lg text-center">
                      <div className="flex justify-center mb-2">
                        <Shield className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Confident Negotiation</h3>
                      <p className="text-sm text-neutral-700">
                        Know your worth and negotiate from strength
                      </p>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg text-center">
                      <div className="flex justify-center mb-2">
                        <TrendingUp className="w-10 h-10 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Strategic Scaling</h3>
                      <p className="text-sm text-neutral-700">
                        Raise rates systematically as you grow
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 1: Fundamentals */}
            <section id="fundamentals">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 1: Rate Calculation Fundamentals
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Follower-Based Pricing</h3>
                    <p className="text-body-md text-neutral-700 mb-4">
                      The simplest method: charge a rate per follower. Industry standard ranges from $0.01 to $0.10 per follower depending on tier and niche.
                    </p>

                    <div className="p-6 bg-blue-50 rounded-lg mb-6">
                      <h4 className="font-semibold text-neutral-900 mb-3">Basic Formula</h4>
                      <div className="bg-white p-4 rounded border-2 border-blue-300 font-mono text-sm mb-3">
                        Base Rate = Followers × Rate Per Follower
                      </div>
                      <p className="text-sm text-neutral-700">
                        <strong>Example:</strong> 50,000 followers × $0.04 per follower = <strong className="text-green-600">$2,000 base rate</strong>
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="p-3 text-left font-semibold">Follower Tier</th>
                            <th className="p-3 text-left font-semibold">Rate Per Follower</th>
                            <th className="p-3 text-left font-semibold">Why</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          <tr>
                            <td className="p-3">1K-10K (Nano)</td>
                            <td className="p-3 font-semibold">$0.05-$0.10</td>
                            <td className="p-3">Highest engagement, niche audiences, local influence</td>
                          </tr>
                          <tr>
                            <td className="p-3">10K-50K (Micro)</td>
                            <td className="p-3 font-semibold">$0.03-$0.08</td>
                            <td className="p-3">Strong engagement, growing reach, accessible pricing</td>
                          </tr>
                          <tr>
                            <td className="p-3">50K-500K (Mid)</td>
                            <td className="p-3 font-semibold">$0.03-$0.05</td>
                            <td className="p-3">Established creators, proven track record</td>
                          </tr>
                          <tr>
                            <td className="p-3">500K-1M (Macro)</td>
                            <td className="p-3 font-semibold">$0.02-$0.04</td>
                            <td className="p-3">Significant reach, lower engagement percentage</td>
                          </tr>
                          <tr>
                            <td className="p-3">1M+ (Mega)</td>
                            <td className="p-3 font-semibold">$0.02-$0.03</td>
                            <td className="p-3">Celebrity tier, massive reach, custom deals</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Engagement-Based Pricing</h3>
                    <p className="text-body-md text-neutral-700 mb-4">
                      More sophisticated method that accounts for audience quality, not just quantity.
                    </p>

                    <div className="p-6 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-neutral-900 mb-3">Engagement Multiplier Formula</h4>
                      <div className="bg-white p-4 rounded border-2 border-green-300 font-mono text-sm mb-3">
                        Final Rate = Base Rate × (Your Engagement / Industry Average Engagement)
                      </div>
                      <div className="space-y-3 text-sm text-neutral-700">
                        <div className="p-3 bg-white rounded">
                          <strong>Example 1:</strong> Base rate $2,000, your engagement 8%, industry average 5%
                          <br />
                          = $2,000 × (8 / 5) = <strong className="text-green-600">$3,200 final rate</strong> (60% premium)
                        </div>
                        <div className="p-3 bg-white rounded">
                          <strong>Example 2:</strong> Base rate $2,000, your engagement 3%, industry average 5%
                          <br />
                          = $2,000 × (3 / 5) = <strong className="text-orange-600">$1,200 final rate</strong> (40% discount)
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Link href="/calculators/brand-deal-rate">
                        <Button variant="primary" size="lg">Calculate Your Brand Deal Rate</Button>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-heading-lg font-semibold text-neutral-900 mb-4">Niche Multipliers</h3>
                    <p className="text-body-md text-neutral-700 mb-4">
                      Different niches command different rates based on audience value to advertisers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-neutral-900 mb-3">Premium Niches (2-3x base)</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>• Finance/Investing</li>
                          <li>• Business/Entrepreneurship</li>
                          <li>• Technology/SaaS</li>
                          <li>• Real Estate</li>
                          <li>• B2B Services</li>
                        </ul>
                        <p className="text-xs text-neutral-600 mt-3">
                          <strong>Why:</strong> High-value audience, larger brand budgets, longer sales cycles justify premium rates
                        </p>
                      </div>

                      <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-neutral-900 mb-3">High-Value Niches (1.5-2x base)</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>• Beauty/Skincare</li>
                          <li>• Fitness/Health</li>
                          <li>• Fashion/Style</li>
                          <li>• Home Decor</li>
                          <li>• Parenting</li>
                        </ul>
                        <p className="text-xs text-neutral-600 mt-3">
                          <strong>Why:</strong> Strong product market, high purchase intent, established influencer marketing ecosystem
                        </p>
                      </div>

                      <div className="p-5 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold text-neutral-900 mb-3">Standard Niches (1x base)</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>• Lifestyle/General</li>
                          <li>• Food/Cooking</li>
                          <li>• Travel</li>
                          <li>• Pets</li>
                          <li>• DIY/Crafts</li>
                        </ul>
                        <p className="text-xs text-neutral-600 mt-3">
                          <strong>Why:</strong> Broad appeal, moderate brand budgets, competitive influencer market
                        </p>
                      </div>

                      <div className="p-5 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg border-l-4 border-neutral-400">
                        <h4 className="font-semibold text-neutral-900 mb-3">Lower-Rate Niches (0.5-0.8x base)</h4>
                        <ul className="space-y-1 text-sm text-neutral-700">
                          <li>• Gaming/Esports</li>
                          <li>• Comedy/Memes</li>
                          <li>• Dance/Performance</li>
                          <li>• General Entertainment</li>
                        </ul>
                        <p className="text-xs text-neutral-600 mt-3">
                          <strong>Why:</strong> Younger audience, harder monetization, lower CPMs, high creator supply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Section 2: Benchmarks by Tier */}
            <section id="benchmarks">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 2: Rate Benchmarks by Tier
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      tier: 'Nano Influencers (1K-10K)',
                      range: '$50-$300',
                      avgRate: '$10-$100',
                      typical: '$50-$150',
                      characteristics: ['Highest engagement (8-15%)', 'Niche, loyal audiences', 'Local/micro-brand appeal', 'Often product-only deals'],
                      dealTypes: ['Product gifting', 'Product + $50-200 cash', 'Local business partnerships', 'Affiliate-only arrangements'],
                      tips: ['Don\'t work for free if you have 5K+', 'Charge at least $50 for dedicated posts', 'Bundle multiple posts for higher rates', 'Negotiate product + cash, not just product'],
                      color: 'from-blue-50 to-blue-100',
                    },
                    {
                      tier: 'Micro Influencers (10K-50K)',
                      range: '$300-$1,500',
                      avgRate: '$100-$500',
                      typical: '$400-$800',
                      characteristics: ['Strong engagement (5-10%)', 'Growing reach', 'Professional opportunities', 'First paid partnerships'],
                      dealTypes: ['Single post: $300-600', '3-post series: $900-1,500', 'Story + post bundles: $400-800', 'Affiliate + flat fee hybrid'],
                      tips: ['This is where you prove your value', 'Build case studies from successful campaigns', 'Create media kit with stats', 'Start pitching brands proactively'],
                      color: 'from-green-50 to-green-100',
                    },
                    {
                      tier: 'Mid-Tier Influencers (50K-500K)',
                      range: '$1,500-$10,000',
                      avgRate: '$500-$5,000',
                      typical: '$2,000-$4,000',
                      characteristics: ['Proven track record', '4-8% engagement', 'Established creator status', 'Agency representation common'],
                      dealTypes: ['Single post: $2,000-5,000', 'Campaign (3-5 posts): $6,000-15,000', 'Brand ambassadorship (3 months): $15,000-40,000', 'Spark Ads rights: +50-100% fee'],
                      tips: ['Negotiate usage rights separately', 'Charge premium for exclusivity', 'Build long-term partnerships', 'Consider management/agency'],
                      color: 'from-purple-50 to-purple-100',
                    },
                    {
                      tier: 'Macro Influencers (500K-1M)',
                      range: '$10,000-$25,000',
                      avgRate: '$5,000-$20,000',
                      typical: '$12,000-$18,000',
                      characteristics: ['Significant reach', '3-6% engagement', 'Celebrity-adjacent', 'Major brand partnerships'],
                      dealTypes: ['Single post: $10,000-20,000', 'Multi-platform campaign: $30,000-60,000', '6-month ambassadorship: $80,000-200,000', 'Equity deals for startups'],
                      tips: ['Always use agents/managers', 'Negotiate equity in relevant brands', 'Multi-platform bundling increases value', 'Performance bonuses for campaigns'],
                      color: 'from-orange-50 to-orange-100',
                    },
                    {
                      tier: 'Mega Influencers (1M+)',
                      range: '$25,000-$100,000+',
                      avgRate: '$20,000-$50,000',
                      typical: '$30,000-$75,000',
                      characteristics: ['Celebrity status', '2-5% engagement', 'Massive reach', 'Custom deal structures'],
                      dealTypes: ['Single post: $25,000-100,000', 'Full campaign: $100,000-500,000', 'Annual ambassadorship: $500,000-$5M+', 'Product line collaborations'],
                      tips: ['Management essential', 'Equity + cash deals common', 'License your name/image separately', 'Long-term brand building over one-offs'],
                      color: 'from-pink-50 to-pink-100',
                    },
                  ].map((tier) => (
                    <div key={tier.tier} className={`p-6 bg-gradient-to-r ${tier.color} rounded-lg border-2 border-neutral-300`}>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-heading-lg font-bold text-neutral-900">{tier.tier}</h3>
                          <span className="text-xl font-bold text-neutral-900">{tier.range}</span>
                        </div>
                        <div className="flex gap-4 text-sm text-neutral-600">
                          <span><strong>Average:</strong> {tier.avgRate}</span>
                          <span><strong>Most Common:</strong> {tier.typical}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Characteristics:</h4>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {tier.characteristics.map((char, idx) => (
                              <li key={idx}>• {char}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Common Deal Types:</h4>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {tier.dealTypes.map((deal, idx) => (
                              <li key={idx}>• {deal}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Pro Tips:</h4>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {tier.tips.map((tip, idx) => (
                              <li key={idx}>→ {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Sections 3-8 condensed for space */}
            <section id="factors">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 3: Factors That Affect Your Rate
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        factor: 'Engagement Quality Over Quantity',
                        impact: '+50-100%',
                        explanation: '8% engagement can double rates vs 3% engagement at same follower count. Brands want engaged audiences.',
                      },
                      {
                        factor: 'Audience Demographics',
                        impact: '+30-60%',
                        explanation: 'High-income, decision-maker audience (25-45) commands premium. Teen audience has lower value.',
                      },
                      {
                        factor: 'Niche Premium',
                        impact: '+100-200%',
                        explanation: 'Finance/tech creators charge 2-3x entertainment creators. B2B niches highest value.',
                      },
                      {
                        factor: 'Content Quality & Production',
                        impact: '+20-40%',
                        explanation: 'Professional editing, equipment, scripting justify higher rates. Quality signals professionalism.',
                      },
                      {
                        factor: 'Exclusivity & Usage Rights',
                        impact: '+50-300%',
                        explanation: 'Exclusive deals (no competitors): 2x rate. Unlimited usage rights: 3-4x rate. Always negotiate separately.',
                      },
                      {
                        factor: 'Track Record & Case Studies',
                        impact: '+30-50%',
                        explanation: 'Proven ROI from past campaigns justifies premium. Show brands the results you deliver.',
                      },
                    ].map((item) => (
                      <div key={item.factor} className="p-5 bg-neutral-50 rounded-lg border-2 border-neutral-200">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-neutral-900 text-sm">{item.factor}</h3>
                          <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">{item.impact}</span>
                        </div>
                        <p className="text-sm text-neutral-700">{item.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </section>

            <section id="deliverables">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 4: Deliverable Types & Pricing
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-100">
                      <tr>
                        <th className="p-3 text-left font-semibold">Deliverable</th>
                        <th className="p-3 text-left font-semibold">Pricing Multiplier</th>
                        <th className="p-3 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr><td className="p-3">In-feed video (1)</td><td className="p-3 font-semibold">1x base rate</td><td className="p-3">Standard deliverable</td></tr>
                      <tr><td className="p-3">In-feed video (3-pack)</td><td className="p-3 font-semibold">2.5x base rate</td><td className="p-3">Bundle discount vs 3x single posts</td></tr>
                      <tr><td className="p-3">Spark Ads rights (30 days)</td><td className="p-3 font-semibold">+50-100%</td><td className="p-3">Brand can boost as ad</td></tr>
                      <tr><td className="p-3">Spark Ads rights (unlimited)</td><td className="p-3 font-semibold">+200-300%</td><td className="p-3">Perpetual ad usage</td></tr>
                      <tr><td className="p-3">LIVE stream mention</td><td className="p-3 font-semibold">0.5-0.7x base</td><td className="p-3">Less permanent, lower production</td></tr>
                      <tr><td className="p-3">Product showcase/unboxing</td><td className="p-3 font-semibold">1.2-1.5x base</td><td className="p-3">More work, product demo</td></tr>
                      <tr><td className="p-3">Series (5+ videos)</td><td className="p-3 font-semibold">4-5x base</td><td className="p-3">Volume discount, ongoing partnership</td></tr>
                      <tr><td className="p-3">Multi-platform (TT + IG + YT)</td><td className="p-3 font-semibold">2.5-3.5x base</td><td className="p-3">Broader reach, more work</td></tr>
                      <tr><td className="p-3">Brand ambassadorship (3 mo)</td><td className="p-3 font-semibold">8-12x base</td><td className="p-3">Exclusivity, ongoing content</td></tr>
                      <tr><td className="p-3">Exclusivity clause (no competitors)</td><td className="p-3 font-semibold">+100-150%</td><td className="p-3">Opportunity cost</td></tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            <section id="negotiation">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 5: How to Negotiate with Brands
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-4">The Negotiation Framework</h3>
                    <ol className="space-y-4 text-sm text-neutral-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                        <div>
                          <strong>Let them make first offer (if possible):</strong> "I'd love to work together. What's your budget for this campaign?" Often they offer more than you'd ask.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                        <div>
                          <strong>If you must quote first, start high (20-30% above target):</strong> "My rate for this type of campaign is $5,000." Gives negotiation room.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">3</span>
                        <div>
                          <strong>Justify with data:</strong> "Based on my 8% engagement rate and 50K followers, the Brand Deal Rate Calculator suggests $4,000-6,000 for my tier."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">4</span>
                        <div>
                          <strong>Use silence:</strong> After stating your rate, STOP TALKING. First person to speak loses leverage. Let them respond.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">5</span>
                        <div>
                          <strong>If they counter low, negotiate deliverables not just price:</strong> "At $3,000 I can do 2 videos instead of 3, or we remove Spark Ads rights."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">6</span>
                        <div>
                          <strong>Know your walk-away number before negotiating:</strong> If your minimum is $2,500, don't accept $2,000 just because they're pushy.
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        Handling Low Offers
                      </h3>
                      <div className="space-y-2 text-sm text-neutral-700">
                        <p><strong>Brand offers 50% of your rate:</strong></p>
                        <p className="italic">"I appreciate the offer. My rate accounts for my 8% engagement and production quality. I could meet you at $X [20% below your ask] for this scope."</p>
                        <p><strong>If they won't budge:</strong></p>
                        <p className="italic">"I understand budget constraints. Let's reduce to 2 videos at $Y instead of 3 at $Z."</p>
                      </div>
                    </div>

                    <div className="p-5 bg-red-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                        When to Walk Away
                      </h3>
                      <ul className="space-y-1 text-sm text-neutral-700">
                        <li>• Offer &lt;50% of calculator estimate (unless you love brand)</li>
                        <li>• Unlimited usage rights without 3-4x premium</li>
                        <li>• Exclusivity without 2x rate increase</li>
                        <li>• Product-only when you're past 25K followers</li>
                        <li>• Red flags: no contract, vague payment terms, "exposure" talk</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <section id="packages">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 6: Rate Packages & Bundling
                </h2>
                <p className="text-body-md text-neutral-700 mb-6">
                  Create tiered packages to increase deal size and give brands options.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-300">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-neutral-900 text-lg mb-1">Bronze Package</h3>
                      <div className="text-3xl font-bold text-neutral-900">$2,000</div>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>✓ 1 in-feed TikTok video</li>
                      <li>✓ 1 Instagram Story mention</li>
                      <li>✓ 1 round of revisions</li>
                      <li>✓ 30-day usage rights</li>
                      <li>✓ Campaign performance report</li>
                    </ul>
                    <p className="mt-4 text-xs text-neutral-600 italic">Best for: First-time collaborations, testing fit</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-400">
                    <div className="text-center mb-4">
                      <div className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-2">MOST POPULAR</div>
                      <h3 className="font-bold text-neutral-900 text-lg mb-1">Silver Package</h3>
                      <div className="text-3xl font-bold text-neutral-900">$4,500</div>
                      <div className="text-sm text-green-600 font-semibold">(Save $500 vs individual)</div>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>✓ 3 in-feed TikTok videos</li>
                      <li>✓ 2 Instagram Stories</li>
                      <li>✓ 1 Instagram Reel</li>
                      <li>✓ 2 rounds of revisions</li>
                      <li>✓ 60-day usage rights</li>
                      <li>✓ Detailed analytics report</li>
                    </ul>
                    <p className="mt-4 text-xs text-neutral-600 italic">Best for: Campaign launches, established partnerships</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-400">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-neutral-900 text-lg mb-1">Gold Package</h3>
                      <div className="text-3xl font-bold text-neutral-900">$9,000</div>
                      <div className="text-sm text-green-600 font-semibold">(Save $1,500 vs individual)</div>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>✓ 6 in-feed TikTok videos</li>
                      <li>✓ 4 Instagram Stories</li>
                      <li>✓ 2 Instagram Reels</li>
                      <li>✓ 1 YouTube mention/integration</li>
                      <li>✓ Unlimited revisions</li>
                      <li>✓ 90-day usage rights</li>
                      <li>✓ Dedicated campaign strategysession</li>
                      <li>✓ Monthly performance reports</li>
                    </ul>
                    <p className="mt-4 text-xs text-neutral-600 italic">Best for: Long-term partnerships, product launches</p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="contracts">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 7: Contract Essentials
                </h2>
                <p className="text-body-md text-neutral-700 mb-6">
                  Never start work without a signed contract. Here's what must be included:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      Must-Have Clauses
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>✓ <strong>Payment amount:</strong> Exact dollar amount and currency</li>
                      <li>✓ <strong>Payment schedule:</strong> 50% upfront, 50% on delivery OR Net 30/60</li>
                      <li>✓ <strong>Deliverables:</strong> Exactly what you're creating (1 TikTok, 60 seconds max, etc.)</li>
                      <li>✓ <strong>Timeline:</strong> Draft due date, final due date, posting date</li>
                      <li>✓ <strong>Usage rights:</strong> Duration (30/60/90 days vs perpetual), platforms, purposes</li>
                      <li>✓ <strong>Revisions:</strong> Number allowed (1-2 rounds), what counts as revision</li>
                      <li>✓ <strong>Approval process:</strong> Who approves, how long they have, what happens if delayed</li>
                      <li>✓ <strong>FTC compliance:</strong> Who's responsible for disclosure, approved language</li>
                      <li>✓ <strong>Kill fee:</strong> What you get paid if they cancel mid-project (50-100%)</li>
                      <li>✓ <strong>Content ownership:</strong> You own content, brand has licensed rights only</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      Red Flag Terms
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>"Payment upon satisfactory performance" (undefined, risky)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>"Unlimited revisions" (scope creep nightmare)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>"Perpetual, worldwide, exclusive rights" without 5x premium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>"Brand can use content for any purpose" (too broad)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>Non-compete lasting 12+ months (limits future deals)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>"Payment Net 90" or longer (cash flow killer)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>Penalty clauses for underperformance (you can't control algorithm)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>No kill fee if they cancel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>"Work for hire" giving them all rights (negotiate this out)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                        <span>Vague deliverable descriptions open to interpretation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section id="scaling">
              <Card>
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
                  Section 8: Scaling Your Rates Over Time
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-4">When to Raise Prices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Follower Milestones</h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li>• Every 25K-50K followers: Increase 20-30%</li>
                          <li>• Hitting 100K: Often doubles rates from 50K</li>
                          <li>• Hitting 500K: Another 1.5-2x increase</li>
                          <li>• Hitting 1M: 2-3x increase from 500K</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Performance Triggers</h4>
                        <ul className="space-y-2 text-sm text-neutral-700">
                          <li>• Engagement rate increases 2%+ (raise 30-50%)</li>
                          <li>• Booking every inquiry within 48hrs (too low)</li>
                          <li>• Case studies proving ROI (raise 20-40%)</li>
                          <li>• Demand exceeds capacity (raise until it slows)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 flex-shrink-0" />
                      Grandfathering Existing Clients
                    </h3>
                    <p className="text-sm text-neutral-700 mb-3">
                      When raising rates, honor existing clients' old rates for a transition period (3-6 months), then raise to new rates. This maintains relationships while increasing income from new clients.
                    </p>
                    <p className="text-sm text-neutral-700">
                      <strong>Example:</strong> "My new rate is $5,000, but since we've worked together before, I'll honor $4,000 for this campaign. Future campaigns will be at the new rate."
                    </p>
                  </div>

                  <div className="p-6 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 flex-shrink-0" />
                      Premium Positioning Strategy
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>• <strong>Specialist premium:</strong> Position as THE expert in your niche, charge 2-3x generalists</li>
                      <li>• <strong>Results-based premium:</strong> Showcase proven ROI, charge more for guaranteed delivery</li>
                      <li>• <strong>Scarcity premium:</strong> Limited availability (max 2 deals/month) justifies higher rates</li>
                      <li>• <strong>Quality premium:</strong> Invest in better production, charge for elevated output</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200">
              <div className="text-center py-8">
                <h2 className="text-heading-xl font-bold text-neutral-900 mb-4">
                  Calculate Your Brand Deal Rate Now
                </h2>
                <p className="text-body-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
                  Use our Brand Deal Rate Calculator to get your data-backed pricing in seconds. Never undercharge again.
                </p>
                <Link href="/calculators/brand-deal-rate">
                  <Button variant="primary" size="lg">
                    Calculate My Rate
                  </Button>
                </Link>
              </div>
            </Card>

            {/* FAQ */}
            <section id="faqs">
              <FAQSection
                pageName="Influencer Rate Calculator Guide"
                faqs={[
                  {
                    question: 'How much should I charge for a TikTok sponsored post?',
                    answer: 'Industry standard: $0.03-$0.08 per follower as base rate, adjusted for engagement. Nano (1K-10K): $50-$300. Micro (10K-50K): $300-$1,500. Mid (50K-500K): $1,500-$10,000. Macro (500K-1M): $10,000-$25,000. Mega (1M+): $25,000-$100,000+. Use our Brand Deal Rate Calculator for personalized pricing based on your metrics.',
                  },
                  {
                    question: 'How do I calculate my influencer rate?',
                    answer: 'Formula: Base Rate = Followers × $0.03-$0.08, then multiply by engagement factor (Your Engagement / Industry Average). Example: 50K followers × $0.04 = $2,000 base. With 8% engagement vs 5% average: $2,000 × 1.6 = $3,200 final rate. Factor in niche premium (finance/tech 2-3x, entertainment 1x) and deliverables (Spark Ads +50-100%).',
                  },
                  {
                    question: 'Should I charge per post or per campaign?',
                    answer: 'Both. Offer single post pricing and package deals. Packages increase average deal size - 3-post bundle at 2.5x (vs 3x) encourages larger commitments. Example: Single post $2,000, 3-post package $5,000 (saves brand $1,000, you get more guaranteed revenue). Long-term partnerships (3-6 months) should be 8-12x single post rate.',
                  },
                  {
                    question: 'What if a brand says my rate is too high?',
                    answer: 'Justify with data: "Based on my 8% engagement and Brand Deal Rate Calculator, market rate is $X-$Y for my tier." If they won\'t budge, negotiate deliverables (reduce posts or remove Spark Ads rights) rather than dropping price. Walk away if offer is <50% of calculator estimate - underpricing hurts the entire creator economy.',
                  },
                  {
                    question: 'How much extra should I charge for usage rights?',
                    answer: 'Spark Ads rights (30 days): +50-100%. Spark Ads (unlimited): +200-300%. Exclusivity clause: +100-150%. Multi-platform rights: +50% per additional platform. Perpetual usage: 3-4x base rate. Always negotiate usage rights separately from creation fee - they\'re licensing your content, which has separate value.',
                  },
                  {
                    question: 'When should I raise my rates?',
                    answer: 'Raise rates every 25K-50K followers (20-30% increase), when engagement rate improves significantly (+2% = 30-50% raise), if booking every inquiry within 48 hours (demand exceeds supply), or when you have case studies proving ROI. Test new rates on new clients first, grandfather existing clients for 3-6 months before applying new rates.',
                  },
                  {
                    question: 'Can I charge more in premium niches like finance or tech?',
                    answer: 'Yes. Finance/tech/B2B creators charge 2-3x entertainment creators at same follower count. Example: 100K beauty creator charges $3,000, 100K finance creator charges $7,000. Why? Higher-value audience, larger brand budgets, longer sales cycles, premium positioning. Always factor niche premium into calculations.',
                  },
                  {
                    question: 'Should I work for free to build my portfolio?',
                    answer: 'Only if you have <1,000 followers and desperate for case studies. Once you hit 5K+ followers, always charge cash (minimum $50-100). Product-only deals are acceptable for 1K-5K creators from brands you genuinely want to promote. Never work for "exposure" - exposure doesn\'t pay rent. Charge your worth.',
                  },
                  {
                    question: 'How do I handle brands asking for my rate sheet?',
                    answer: 'Send tiered packages (Bronze/Silver/Gold) showing deliverables and prices. Include engagement metrics to justify pricing. Don\'t send rock-bottom minimums - start 20-30% above target to leave negotiation room. Add "Custom campaigns available - let\'s discuss your goals" for larger opportunities. Update rate sheet every 3-6 months as you grow.',
                  },
                  {
                    question: 'What percentage of my rate should I pay to management/agents?',
                    answer: 'Standard is 15-20% of gross deal value. Some managers charge 20-25%. Only work with managers who increase your deal flow and rates by more than their fee. A good manager at 20% who gets you $10,000 deals beats no manager getting you $5,000 deals. Negotiate commission percentage when you\'re at 500K+ followers.',
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
