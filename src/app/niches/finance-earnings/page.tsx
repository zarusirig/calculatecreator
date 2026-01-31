import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ArticleSchema } from '@/components/seo/ArticleSchema';

export const metadata: Metadata = {
  title: 'Finance Creators TikTok Earnings: FinTok Income Data 2026',
  description: 'How much finance creators earn on TikTok. Brand deal rates, RPM data, and monetization strategies for financial content.',
  keywords: ['fintok earnings', 'finance creator income', 'financial influencer rates', 'money tiktok'],
  alternates: {
    canonical: 'https://calculatecreator.com/niches/finance-earnings/',
  },
};

export default function FinanceEarningsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticleSchema
        title="Finance Creators TikTok Earnings: FinTok Income Data 2026"
        description="How much finance creators earn on TikTok. Brand deal rates, RPM data, and monetization strategies for financial content."
        url="https://calculatecreator.com/niches/finance-earnings/"
        category="Niche Guides"
      />
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/niches/">Niches</Link><span>/</span>
            <span className="text-neutral-900">Finance Creators</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-600 via-teal-500 to-blue-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Finance Creators Earnings</h1>
          <p className="text-heading-md text-white/90">FinTok income data and monetization strategies</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Finance Performs Well</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-body-md text-neutral-700">High-value audience (earners, investors)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-body-md text-neutral-700">Premium brand partnerships (fintech, banks)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-body-md text-neutral-700">High RPM rates (1.4× average)</span>
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Typical Earnings at 50K Followers</h3>
          <p className="text-heading-lg font-bold text-green-600 mb-2">$3,000-$7,500/month</p>
          <p className="text-body-sm text-neutral-600">From brand deals ($2,500-$5,000) + Creator Fund ($500-$1,000) + Affiliate commissions ($0-$1,500)</p>
        </Card>

        {/* Related Content */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Content</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/finance-creators-earnings/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Complete Finance Creator Guide</h4>
              <p className="text-body-sm text-neutral-700">In-depth strategies for monetizing financial content on TikTok</p>
            </Link>
            <Link href="/data/brand-deal-rates-by-niche/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Brand Deal Rates by Niche</h4>
              <p className="text-body-sm text-neutral-700">Compare finance niche rates to other high-paying categories</p>
            </Link>
            <Link href="/niches/fitness-earnings/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Fitness Creators Earnings</h4>
              <p className="text-body-sm text-neutral-700">Similar high-value niche monetization data and strategies</p>
            </Link>
            <Link href="/calculators/earnings-revenue/money/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok Money Calculator</h4>
              <p className="text-body-sm text-neutral-700">Estimate your potential earnings as a finance creator</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

