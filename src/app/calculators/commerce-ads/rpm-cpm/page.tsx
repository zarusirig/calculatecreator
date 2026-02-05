import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, X } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { RpmCalculatorWidget } from '@/components/calculators/rpm/CalculatorWidget';
import { InputsExplained } from '@/components/calculator/InputsExplained';

export const metadata: Metadata = {
  title: 'TikTok RPM Calculator: Revenue Per 1000 Views (2026)',
  description: 'Calculate your TikTok RPM (revenue per mille). Understand how much you earn per 1000 views from Creator Fund and compare to benchmarks.',
  keywords: ['rpm calculator', 'tiktok rpm', 'revenue per thousand views', 'creator fund rpm', 'earnings per view'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/commerce-ads/rpm-cpm/',
  },
};

const faqData = [
  {
    question: 'What is a good RPM on TikTok?',
    answer: 'TikTok Creator Fund RPM ranges from $0.02-$0.04 per 1K views ($20-$40 per million views). RPM above $0.035 is considered good, while $0.045+ is excellent. Finance and tech niches often see higher RPM ($0.05-$0.08), while entertainment sees lower ($0.015-$0.025).'
  },
  {
    question: 'Why is TikTok RPM so low compared to YouTube?',
    answer: 'TikTok RPM is 10-20× lower than YouTube because: (1) Shorter videos = less ad inventory, (2) Younger audience with lower purchasing power, (3) Less advertiser demand, (4) Different monetization model (Creator Fund vs direct ads). YouTube RPM: $2-$10, TikTok RPM: $0.02-$0.04.'
  },
  {
    question: 'How can I increase my TikTok RPM?',
    answer: 'Strategies to boost RPM: (1) Target high-CPM niches (finance, tech, business), (2) Attract US/UK/Canada viewers (higher ad rates), (3) Create longer videos (60+ seconds when possible), (4) Post during peak hours for premium ad inventory, (5) Maintain high watch time (algorithmic boost).'
  },
  {
    question: 'Is RPM the same as CPM?',
    answer: 'No. RPM (Revenue Per Mille) = YOUR earnings per 1K views. CPM (Cost Per Mille) = what ADVERTISERS pay per 1K impressions. TikTok keeps 50-70% as platform fees, so creator RPM is much lower than advertiser CPM. If CPM is $5, creator RPM might be $2.'
  },
  {
    question: 'How is TikTok RPM calculated?',
    answer: 'Calculate RPM by dividing total earnings by total views, then multiplying by 1,000. Formula: RPM = (Total Earnings / Total Views) × 1,000. Example: $50 from 1,000,000 views = ($50 / 1,000,000) × 1,000 = $0.05 RPM. This standardizes your earnings efficiency across different timeframes.'
  },
  {
    question: 'Does video length affect TikTok RPM?',
    answer: 'Yes, longer videos (60+ seconds) with strong watch time typically earn higher RPM because they signal higher engagement quality to the algorithm. However, length alone does not guarantee better RPM—completion rate and average watch time percentage are more important factors than absolute video duration.'
  },
  {
    question: 'What is the difference between RPM and eCPM?',
    answer: 'RPM measures your actual creator earnings per 1,000 views, while eCPM (effective CPM) represents the effective cost per 1,000 impressions across multiple revenue sources. For creators, RPM is more useful as it directly shows your monetization efficiency. eCPM is typically used by advertisers and platforms for campaign analysis.'
  },
  {
    question: 'Why does my RPM fluctuate daily?',
    answer: 'RPM fluctuates based on advertiser demand, seasonal trends, viewer demographics, and algorithm changes. Q4 (October-December) typically sees 2-3× higher RPM due to holiday advertising budgets. Weekday business hours also generate higher RPM than weekends. Track weekly averages instead of daily metrics for better insights.'
  },
  {
    question: 'Which countries generate the highest TikTok RPM?',
    answer: 'Top-tier countries for RPM: United States ($0.04-$0.08), Canada ($0.035-$0.07), United Kingdom ($0.03-$0.06), Australia ($0.025-$0.055). Mid-tier: Germany, France, Japan ($0.02-$0.04). Low-tier: India, Brazil, Philippines ($0.005-$0.015). Geo-targeting tier-1 audiences significantly increases average RPM.'
  },
  {
    question: 'Can I track RPM for individual videos?',
    answer: 'Yes, calculate per-video RPM by dividing that video\'s earnings by its views, then multiplying by 1,000. This helps identify which content types, topics, and formats generate the highest monetization efficiency. Track top-performing videos to replicate successful content strategies and improve overall account RPM.'
  },
];

export default function RPMCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators/' }, { label: 'RPM Calculator', href: '/calculators/rpm/' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-DEFAULT text-white mb-6">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok RPM Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">Calculate your revenue per 1,000 views (RPM) to understand your earning efficiency and compare to industry benchmarks. This calculator helps creators track earnings performance, identify optimization opportunities, and forecast monthly income based on view counts. Essential for creators serious about monetizing their TikTok content through the Creator Fund and other revenue streams.</p>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
            Calculate your <Link href="/calculators/tiktok-creator-fund/" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">TikTok Creator Fund earnings</Link> or learn <Link href="/guides/maximize-creator-fund-rpm/" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">how to maximize your TikTok RPM rate</Link> for higher payouts.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <RpmCalculatorWidget />
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <InputsExplained
            inputs={[
              { name: 'Total Revenue', description: 'Earnings from all monetization sources', example: '$200', required: true },
              { name: 'Total Views', description: 'Total video views in the same period', example: '100,000', required: true },
              { name: 'Revenue Source', description: 'Creator Fund, ads, sponsorships, etc.', example: 'Creator Fund' },
            ]}
            note="RPM = (Total Revenue / Total Views) × 1000. Creator Fund RPM: $0.02-$0.04. Creator Rewards: $0.40-$1.00."
          />
        </div>

        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Understanding TikTok RPM (Revenue Per Mille)</h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-body-md text-neutral-700 mb-4">
                RPM, or Revenue Per Mille (Latin for "thousand"), is one of the most critical metrics for content creators on TikTok. It represents how much money you earn for every 1,000 views your content receives.
              </p>
              <p className="text-body-md text-neutral-700">
                For TikTok creators, RPM is particularly important because it accounts for the platform's unique monetization structure. Understanding your RPM helps you make informed decisions about content strategy, niche selection, and revenue streams.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">RPM vs CPM: Understanding the Difference</h2>
            <div className="prose prose-neutral max-w-none mb-6">
              <p className="text-body-md text-neutral-700 mb-4">
                Many creators confuse RPM and CPM, but understanding the distinction is crucial for monetization strategy. CPM represents what advertisers pay platforms, while RPM shows what you actually earn as a creator.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Metric</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Definition</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Who Uses It</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Typical Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-semibold text-neutral-900">RPM</td>
                    <td className="py-3 px-4 text-body-sm">Revenue Per Mille - Your earnings per 1,000 views</td>
                    <td className="py-3 px-4 text-body-sm">Creators</td>
                    <td className="py-3 px-4 font-medium text-success-DEFAULT">$0.02 - $0.08</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-semibold text-neutral-900">CPM</td>
                    <td className="py-3 px-4 text-body-sm">Cost Per Mille - What advertisers pay per 1,000 impressions</td>
                    <td className="py-3 px-4 text-body-sm">Advertisers</td>
                    <td className="py-3 px-4 font-medium text-primary-DEFAULT">$3 - $12</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body-sm font-semibold text-neutral-900">Platform Cut</td>
                    <td className="py-3 px-4 text-body-sm">TikTok's revenue share from advertiser spend</td>
                    <td className="py-3 px-4 text-body-sm">TikTok</td>
                    <td className="py-3 px-4 font-medium text-warning-DEFAULT">50-70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-primary-light rounded-lg">
              <p className="text-body-sm text-neutral-800"><strong>Key Insight:</strong> If advertisers pay $6 CPM and TikTok takes 60%, your RPM would be approximately $2.40. However, Creator Fund RPM is significantly lower ($0.02-$0.04) because the fund operates on a different model than direct ad revenue sharing.</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">TikTok RPM Benchmarks by Niche 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Content Niche</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Average RPM</th>
                    <th className="py-3 px-4 text-label-md font-semibold text-neutral-900">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr><td className="py-3 px-4 text-body-sm">Finance & Investing</td><td className="py-3 px-4 font-medium">$0.05 - $0.08</td><td className="py-3 px-4"><span className="px-2 py-1 text-xs bg-success-light text-success-dark rounded">Excellent</span></td></tr>
                  <tr><td className="py-3 px-4 text-body-sm">Tech & Business</td><td className="py-3 px-4 font-medium">$0.045 - $0.07</td><td className="py-3 px-4"><span className="px-2 py-1 text-xs bg-success-light text-success-dark rounded">Excellent</span></td></tr>
                  <tr><td className="py-3 px-4 text-body-sm">Education & Tutorials</td><td className="py-3 px-4 font-medium">$0.035 - $0.055</td><td className="py-3 px-4"><span className="px-2 py-1 text-xs bg-primary-light text-primary-dark rounded">Good</span></td></tr>
                  <tr><td className="py-3 px-4 text-body-sm">Lifestyle & Vlogs</td><td className="py-3 px-4 font-medium">$0.025 - $0.04</td><td className="py-3 px-4"><span className="px-2 py-1 text-xs bg-warning-light text-warning-dark rounded">Average</span></td></tr>
                  <tr><td className="py-3 px-4 text-body-sm">Comedy & Entertainment</td><td className="py-3 px-4 font-medium">$0.02 - $0.035</td><td className="py-3 px-4"><span className="px-2 py-1 text-xs bg-warning-light text-warning-dark rounded">Average</span></td></tr>
                  <tr><td className="py-3 px-4 text-body-sm">Dance & Music</td><td className="py-3 px-4 font-medium">$0.015 - $0.03</td><td className="py-3 px-4"><span className="px-2 py-1 text-xs bg-error-light text-error-dark rounded">Below Avg</span></td></tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">3 Proven Strategies to Improve Your RPM</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Maximizing RPM requires strategic content planning and audience targeting. These three strategies have helped creators double or triple their RPM within 3-6 months.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-primary-200 rounded-lg p-6 hover:border-primary-DEFAULT transition-colors">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary-DEFAULT" size={24} />
                </div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Target High-Value Niches</h3>
                <p className="text-body-sm text-neutral-700 mb-4">
                  Shift content focus toward finance, technology, or business topics. These niches attract advertisers willing to pay premium CPM rates, directly increasing your RPM by 2-4×.
                </p>
                <div className="text-body-xs text-neutral-600">
                  <strong>Example:</strong> Creator moved from general entertainment ($0.02 RPM) to personal finance tips ($0.06 RPM) and tripled earnings with same view count.
                </div>
              </div>

              <div className="border-2 border-success-200 rounded-lg p-6 hover:border-success-DEFAULT transition-colors">
                <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-success-DEFAULT" size={24} />
                </div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Optimize Audience Geography</h3>
                <p className="text-body-sm text-neutral-700 mb-4">
                  Use trending sounds, hashtags, and posting times that resonate with US, UK, and Canadian audiences. Tier-1 countries generate 5-10× higher RPM than developing markets.
                </p>
                <div className="text-body-xs text-neutral-600">
                  <strong>Example:</strong> Posting at 8 AM EST instead of 8 AM local time shifted audience from Asia ($0.01 RPM) to North America ($0.05 RPM).
                </div>
              </div>

              <div className="border-2 border-warning-200 rounded-lg p-6 hover:border-warning-DEFAULT transition-colors">
                <div className="w-12 h-12 bg-warning-light rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-warning-DEFAULT" size={24} />
                </div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Maximize Watch Time %</h3>
                <p className="text-body-sm text-neutral-700 mb-4">
                  Create hook-driven content that maintains 60%+ average watch time. Higher completion rates signal quality to the algorithm, resulting in better ad placement and higher RPM.
                </p>
                <div className="text-body-xs text-neutral-600">
                  <strong>Example:</strong> Improving average watch time from 35% to 65% increased RPM from $0.025 to $0.042 due to algorithmic prioritization.
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">10 Strategies to Increase TikTok RPM</h2>
            <div className="space-y-4">
              {[
                { title: 'Target High-CPM Niches', desc: 'Finance, tech, and business attract premium advertisers.' },
                { title: 'Optimize for Premium Audiences', desc: 'Create content for US, UK, Canada, Australia viewers.' },
                { title: 'Create Longer-Form Content', desc: 'Videos over 60 seconds have more ad placement opportunities.' },
                { title: 'Maximize Watch Duration', desc: 'Higher retention signals quality content.' },
                { title: 'Post During Peak Hours', desc: 'Advertisers bid more during business hours.' },
                { title: 'Focus on Older Demographics', desc: 'Ages 25-45 command higher RPM.' },
                { title: 'Increase Engagement Rates', desc: 'High engagement signals valuable content.' },
                { title: 'Maintain Consistent Schedule', desc: 'Regular posting receives better treatment.' },
                { title: 'Avoid Controversial Content', desc: 'Brand-safe content receives full ad inventory.' },
                { title: 'Build Returning Audience', desc: 'Returning viewers have higher engagement.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-primary-DEFAULT pl-4">
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">{i + 1}. {item.title}</h3>
                  <p className="text-body-sm text-neutral-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-error-50 border-error-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Common Mistakes That Tank Your RPM</h2>
            <div className="space-y-4">
              {[
                { title: 'Using Copyrighted Music Extensively', desc: 'Can limit ad placements and reduce RPM by 30-50%.' },
                { title: 'Chasing Viral Trends Without Niche Focus', desc: 'Viral videos attract low-intent viewers.' },
                { title: 'Posting Only Short 7-15 Second Videos', desc: 'Minimal ad inventory and lower RPM.' },
                { title: 'Ignoring Analytics', desc: 'Not knowing audience demographics limits optimization.' },
                { title: 'Buying Fake Views', desc: 'Leads to severely reduced RPM ($0.005-$0.01).' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                    <X className="mr-2 text-error-DEFAULT" size={20} /> {item.title}
                  </h3>
                  <p className="text-body-sm text-neutral-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <MethodologySection
            calculatorName="rpm"
            formula={`RPM = (Total Earnings / Total Views) × 1000

Example:
Views: 100,000
Earnings: $3.00
RPM: ($3.00 / 100,000) × 1000 = $0.030`}
            assumptions={[{ label: 'Benchmarks', value: 'Excellent: $0.04+, Good: $0.03-0.04, Average: $0.02-0.03' }]}
            dataSources={['Creator Fund data', 'Industry averages 2024']}
            limitations="RPM varies by niche, audience location, and engagement."
            lastUpdated="December 5, 2025"
          />

          <FAQSection pageName="RPM Calculator" faqs={faqData} />

          <RelatedCalculators currentCalculator="rpm" calculators={[{ name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Estimate Creator Fund earnings', icon: 'DollarSign' }]} />
        </div>
      </div>
    </div>
  );
}
