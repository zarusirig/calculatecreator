import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Fitness Creators TikTok Earnings: FitTok Income Data (2025)',
  description: 'How much fitness creators earn on TikTok. Brand deal rates, affiliate income, and monetization strategies.',
  keywords: ['fittok earnings', 'fitness creator income', 'workout influencer rates', 'fitness tiktok money'],
};

export default function FitnessEarningsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/niches">Niches</Link><span>/</span>
            <span className="text-neutral-900">Fitness Creators</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Fitness Creators Earnings</h1>
          <p className="text-heading-md text-white/90">FitTok income data and monetization strategies</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-orange-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Top Income Streams</h2>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-neutral-900">Brand Deals</h3>
              <p className="text-body-sm text-neutral-600">Supplement companies, activewear brands, fitness apps</p>
              <p className="font-semibold text-tiktok-pink">$1,500-$5,000 per post (50K followers)</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-neutral-900">Affiliate Links</h3>
              <p className="text-body-sm text-neutral-600">Amazon fitness gear, workout programs</p>
              <p className="font-semibold text-tiktok-pink">$500-$2,000/month passive</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

