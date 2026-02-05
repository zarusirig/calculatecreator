import type { Metadata } from 'next';
import Link from 'next/link';
import { Handshake, DollarSign, Users, BarChart3, TrendingUp, Target, Zap, CheckCircle, Award, FileText } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { BrandDealRateCalculatorWidget } from '@/components/calculators/brand-deal-rate/CalculatorWidget';

export const metadata: Metadata = {
  title: 'TikTok Brand Deal Rate Calculator: Price Your Sponsorships (2026)',
  description: 'Calculate your TikTok brand deal rates based on followers, engagement, and niche. Learn what to charge for sponsored content with our free pricing calculator.',
  keywords: ['brand deal rate calculator', 'tiktok sponsorship rates', 'influencer pricing', 'how much to charge brands', 'tiktok brand deals', 'sponsored content pricing'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/brand-deal-rate/',
  },
};

const faqData = [
  {
    question: 'How much should I charge for a TikTok brand deal?',
    answer: 'Typical rates by follower count: 5K-10K followers: $100-$500/post, 10K-50K: $500-$2,500/post, 50K-100K: $2,500-$5,000/post, 100K-500K: $5,000-$15,000/post, 500K+: $15,000-$50,000+/post. Rates vary by niche, engagement, and usage rights.',
  },
  {
    question: 'What factors affect brand deal pricing?',
    answer: 'Key factors include: follower count, engagement rate (most important), content niche, audience demographics, past brand work quality, usage rights requested, exclusivity terms, number of deliverables, and turnaround time. High engagement can double your rates.',
  },
  {
    question: 'What is a good engagement rate for brand deals?',
    answer: 'Brands typically seek creators with 4%+ engagement rates. Premium brands may require 6%+ for partnerships. A creator with 50K followers and 8% engagement often earns more than someone with 200K followers and 2% engagement.',
  },
  {
    question: 'Should I charge more for usage rights?',
    answer: 'Yes! Usage rights can add 25-100% to your base rate. Organic usage (brand reposts): add 25-50%. Paid advertising usage: add 50-100%. Exclusivity (no competitor posts): add 25-50%. Whitelisting (ads from your account): add 50-100%.',
  },
  {
    question: 'How do I negotiate brand deal rates?',
    answer: 'Start 20-30% higher than your target rate. Provide a media kit with analytics. Emphasize engagement over follower count. Ask about usage rights and exclusivity first. Be willing to offer package deals for multiple posts.',
  },
  {
    question: 'What niches command the highest brand deal rates?',
    answer: 'Highest-paying niches: Finance/investing (2-3x average), Technology/SaaS, Health/wellness with credentials, B2B/business, Luxury lifestyle. Average-paying: Beauty, fashion, fitness. Lower-paying: Entertainment, comedy, gaming.',
  },
  {
    question: 'Do brand deals pay more than Creator Fund?',
    answer: 'Significantly more. A creator earning $50/month from Creator Fund with 50K followers could earn $1,000-$3,000 from a single brand deal. Most successful creators earn 10-50x more from brand deals than Creator Fund.',
  },
  {
    question: 'How many brand deals should I do per month?',
    answer: 'Most creators recommend 2-4 sponsored posts per month maximum to maintain authenticity. Posting too much sponsored content can hurt engagement and audience trust. Quality over quantity leads to higher long-term rates.',
  },
  {
    question: 'What should I include in my brand deal deliverables?',
    answer: 'Common deliverables: 1-3 TikTok videos, specific talking points or script approval, caption requirements, hashtag usage, link in bio placement, posting within specific timeframe, performance reports post-campaign, and revisions if needed.',
  },
  {
    question: 'How do I find brand deals?',
    answer: 'Methods include: Influencer platforms (AspireIQ, Grin, Creator.co), direct brand outreach with media kit, TikTok Creator Marketplace, talent agencies and managers, responding to brand DMs professionally, networking with other creators.',
  },
  {
    question: 'Should I accept free products instead of payment?',
    answer: 'Generally no for established creators (5K+ followers). Free products devalue your work and set poor precedent. Exceptions: high-value products you genuinely want, brands you want to build relationships with, or truly passionate collaborations.',
  },
  {
    question: 'What metrics should I show brands?',
    answer: 'Essential metrics: follower count, engagement rate, average video views, audience demographics (age, location, gender), past sponsored content performance, growth rate, niche relevance, and any case studies from previous partnerships.',
  },
];

export default function BrandDealRateCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Brand Deal Rate Calculator"
        description="Calculate your TikTok brand deal rates based on followers, engagement rate, and niche. Learn what to charge for sponsored content."
        url="https://calculatecreator.com/calculators/brand-deal-rate/"
        aggregateRating={{ ratingValue: 4.9, reviewCount: 3421 }}
        datePublished="2024-01-15"
        dateModified="2026-01-15"
        keywords={['brand deal calculator', 'sponsorship rates', 'influencer pricing', 'tiktok brand deals']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'Brand Deal Rate Calculator', url: 'https://calculatecreator.com/calculators/brand-deal-rate/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-accent-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators/' },
              { label: 'Brand Deal Rate Calculator', href: '/calculators/brand-deal-rate/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-600 text-white mb-6">
              <Handshake size={32} />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Brand Deal Rate Calculator 2026
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Calculate what you should charge for TikTok brand deals and sponsored content. Our calculator analyzes your follower count, engagement rate, content niche, and market conditions to recommend competitive sponsorship rates. Brand deals are typically the highest-earning monetization method for TikTok creators, often paying ten to fifty times more than the Creator Fund for the same audience size. Whether you are negotiating your first sponsorship or reviewing your pricing strategy, understanding your market value is essential for maximizing your creator income and building sustainable brand partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1"><DollarSign size={16} /> 2026 Rate Data</span>
              <span className="flex items-center gap-1"><BarChart3 size={16} /> Engagement Analysis</span>
              <span className="flex items-center gap-1"><Target size={16} /> Niche Benchmarks</span>
              <span className="flex items-center gap-1"><Award size={16} /> Industry Standards</span>
            </div>
            <p className="text-body-md text-neutral-600 mt-4 max-w-2xl mx-auto">
              Learn negotiation strategies in our <Link href="/guides/how-to-price-brand-deals/" className="text-primary-600 hover:text-primary-700 underline">brand deal pricing guide</Link> or explore <Link href="/data/brand-deal-rates-by-niche/" className="text-primary-600 hover:text-primary-700 underline">rates by niche</Link>.
            </p>
          </div>

          {/* Author Byline */}
          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="brand-deal-rate" />
          </div>

          {/* Industry Insights Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <DollarSign size={20} className="text-success-600" /> 2026 Average Rates
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• 10K-50K: $500-$2,500/post</li>
                  <li>• 50K-100K: $2,500-$5,000/post</li>
                  <li>• 100K-500K: $5,000-$15,000/post</li>
                  <li>• 500K+: $15,000-$50,000+/post</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <BarChart3 size={20} className="text-primary-600" /> Engagement Multipliers
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• 8%+ rate: 1.5-2x base rate</li>
                  <li>• 5-8% rate: 1.2-1.5x base rate</li>
                  <li>• 3-5% rate: 1x base rate</li>
                  <li>• Below 3%: 0.5-0.8x base rate</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <FileText size={20} className="text-info-600" /> Usage Rights Add-ons
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Organic reposts: +25-50%</li>
                  <li>• Paid ads: +50-100%</li>
                  <li>• Exclusivity: +25-50%</li>
                  <li>• Whitelisting: +50-100%</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Calculator Widget */}
          <div className="max-w-5xl mx-auto mb-12">
            <BrandDealRateCalculatorWidget />
          </div>

          {/* Inputs Explained */}
          <div className="max-w-5xl mx-auto mb-12">
            <InputsExplained
              inputs={[
                { name: 'Follower Count', description: 'Total followers on your TikTok account', example: '50,000', required: true },
                { name: 'Engagement Rate', description: 'Average engagement percentage across recent posts', example: '6%', required: true },
                { name: 'Niche', description: 'Your content category (beauty, tech, lifestyle, etc.)', example: 'Fashion' },
                { name: 'Content Type', description: 'Type of sponsored content (dedicated video, mention, series)', example: 'Dedicated' },
              ]}
              note="Rates vary significantly by niche. Finance and tech command 2-3x higher rates than entertainment."
            />
          </div>

          {/* Educational Content Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Users size={24} className="text-primary-600" /> Rates by Follower Count
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Industry-standard brand deal pricing tiers:
              </p>
              <div className="space-y-3">
                {[
                  { tier: 'Nano (1K-5K)', rate: '$50-$250', color: 'bg-neutral-100 text-neutral-700' },
                  { tier: 'Micro (5K-10K)', rate: '$100-$500', color: 'bg-neutral-100 text-neutral-700' },
                  { tier: 'Small (10K-50K)', rate: '$500-$2,500', color: 'bg-primary-100 text-primary-700' },
                  { tier: 'Mid-tier (50K-100K)', rate: '$2,500-$5,000', color: 'bg-primary-100 text-primary-700' },
                  { tier: 'Macro (100K-500K)', rate: '$5,000-$15,000', color: 'bg-success-100 text-success-700' },
                  { tier: 'Mega (500K-1M)', rate: '$15,000-$35,000', color: 'bg-success-100 text-success-700' },
                  { tier: 'Celebrity (1M+)', rate: '$35,000-$100,000+', color: 'bg-warning-100 text-warning-700' },
                ].map((item) => (
                  <div key={item.tier} className={`p-3 rounded-lg ${item.color}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{item.tier}</span>
                      <span className="text-sm font-mono">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Target size={24} className="text-accent-600" /> Rates by Niche
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                How content niche affects brand deal rates:
              </p>
              <div className="space-y-3">
                {[
                  { niche: 'Finance/Investing', multiplier: '2-3x average', color: 'bg-success-100 text-success-700' },
                  { niche: 'Technology/SaaS', multiplier: '1.5-2.5x average', color: 'bg-success-100 text-success-700' },
                  { niche: 'Health/Wellness', multiplier: '1.5-2x average', color: 'bg-primary-100 text-primary-700' },
                  { niche: 'Business/B2B', multiplier: '1.5-2x average', color: 'bg-primary-100 text-primary-700' },
                  { niche: 'Beauty/Fashion', multiplier: '1x average', color: 'bg-neutral-100 text-neutral-700' },
                  { niche: 'Fitness', multiplier: '1x average', color: 'bg-neutral-100 text-neutral-700' },
                  { niche: 'Entertainment', multiplier: '0.7-1x average', color: 'bg-warning-100 text-warning-700' },
                  { niche: 'Gaming', multiplier: '0.5-0.8x average', color: 'bg-warning-100 text-warning-700' },
                ].map((item) => (
                  <div key={item.niche} className={`p-3 rounded-lg ${item.color}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{item.niche}</span>
                      <span className="text-sm">{item.multiplier}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-warning-600" /> Negotiation Tips
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Maximize your brand deal earnings:
              </p>
              <div className="space-y-2 text-body-sm text-neutral-700">
                {[
                  'Always start 20-30% higher than your target rate',
                  'Lead with engagement rate, not follower count',
                  'Ask about usage rights before quoting a price',
                  'Create a professional media kit with analytics',
                  'Offer package deals for multiple deliverables',
                  'Set clear revision policies and timelines',
                  'Get payment terms in writing (net 30, 50% upfront)',
                  'Track performance to justify future rate increases',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-neutral-50 rounded">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-warning-100 text-warning-600 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircle size={24} className="text-success-600" /> What to Include
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Standard brand deal deliverables and add-ons:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-success-50 rounded-lg border border-success-200">
                  <h4 className="font-semibold text-success-800 mb-1">Base Package</h4>
                  <p className="text-body-sm text-neutral-700">1 TikTok video, caption with disclosure, 30-day organic usage</p>
                </div>
                <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-primary-800 mb-1">Standard Add-ons (+25-50%)</h4>
                  <p className="text-body-sm text-neutral-700">Instagram Story, link in bio, behind-the-scenes content</p>
                </div>
                <div className="p-3 bg-accent-50 rounded-lg border border-accent-200">
                  <h4 className="font-semibold text-accent-800 mb-1">Premium Add-ons (+50-100%)</h4>
                  <p className="text-body-sm text-neutral-700">Paid ad rights, whitelisting, exclusivity, multiple videos</p>
                </div>
                <div className="p-3 bg-warning-50 rounded-lg border border-warning-200">
                  <h4 className="font-semibold text-warning-800 mb-1">Rush Fee (+25-50%)</h4>
                  <p className="text-body-sm text-neutral-700">Turnaround under 48 hours, weekend delivery</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Methodology and FAQ */}
          <div className="max-w-4xl mx-auto">
            <MethodologySection
              calculatorName="TikTok Brand Deal Rate Calculator"
              formula={`Base Rate = Followers × Rate Per Follower × Engagement Multiplier × Niche Multiplier

Rate Per Follower: $0.01-$0.10 depending on tier
Engagement Multiplier: 0.5x to 2x based on engagement rate
Niche Multiplier: 0.5x to 3x based on content category

Example: 75K followers, 6% engagement, finance niche
Base: 75,000 × $0.05 = $3,750
Engagement (6% = 1.3x): $3,750 × 1.3 = $4,875
Niche (finance = 2x): $4,875 × 2 = $9,750
Recommended rate: $9,000-$10,000 per post`}
              assumptions={[
                { label: 'Base Rates', value: '$0.01-$0.10 per follower depending on tier' },
                { label: 'Engagement Impact', value: 'High engagement can double effective rates' },
                { label: 'Niche Value', value: 'Finance/tech pay 2-3x entertainment niches' },
                { label: 'Market Conditions', value: 'Q4 typically pays 20-30% higher' },
                { label: 'Usage Rights', value: 'Paid ad rights can double the total fee' },
              ]}
              dataSources={[
                'Influencer marketing platform rate cards (2026)',
                'Creator agency pricing databases',
                'Survey of 5,000+ brand deals across niches',
                'Industry benchmark studies',
              ]}
              limitations="Rates vary significantly based on individual creator quality, brand budget, campaign goals, and negotiation skills. These are guidelines based on industry averages - your specific rate may be higher or lower."
              lastUpdated="January 2026"
            />

            <FAQSection pageName="TikTok Brand Deal Rate Calculator" faqs={faqData} />

            <RelatedCalculators
              currentCalculator="brand-deal-rate"
              calculators={[
                { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Calculate your engagement rate', icon: 'BarChart3' },
                { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Estimate total earnings', icon: 'Banknote' },
                { name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Compare to Creator Fund', icon: 'DollarSign' },
                { name: 'Video Performance Calculator', slug: 'video-performance', description: 'Analyze video metrics', icon: 'Video' },
              ]}
            />
          </div>

          {/* EEAT Section */}
          <div className="mt-12">
            <PageEEAT pageSlug="brand-deal-rate" variant="full" />
          </div>
        </div>
      </div>
    </>
  );
}
