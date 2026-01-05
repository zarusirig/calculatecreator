import React from 'react';
import Link from 'next/link';
import { TrendingUp, X } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { RpmCalculatorWidget } from '@/components/calculators/rpm/CalculatorWidget';

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
];

export default function RPMCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'RPM Calculator', href: '/calculators/rpm' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-DEFAULT text-white mb-6">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok RPM Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">Calculate your revenue per 1,000 views (RPM) to understand your earning efficiency and compare to industry benchmarks.</p>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
            Calculate your <Link href="/calculators/tiktok-creator-fund" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">TikTok Creator Fund earnings</Link> or learn <Link href="/guides/maximize-creator-fund-rpm" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">how to maximize your TikTok RPM rate</Link> for higher payouts.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <RpmCalculatorWidget />
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
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">TikTok RPM Benchmarks by Niche (2025)</h2>
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
