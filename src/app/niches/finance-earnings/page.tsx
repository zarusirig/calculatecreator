import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Finance Creators TikTok Earnings: FinTok Income Data (2025)',
  description: 'How much finance creators earn on TikTok. Brand deal rates, RPM data, and monetization strategies for financial content.',
  keywords: ['fintok earnings', 'finance creator income', 'financial influencer rates', 'money tiktok'],
};

export default function FinanceEarningsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/niches">Niches</Link><span>/</span>
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
      </div>
    </div>
  );
}

