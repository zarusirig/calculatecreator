import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Gift, Banknote, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Earnings & Revenue Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok earnings from LIVE gifts, Creator Fund, and total revenue. Free tools to estimate your creator income.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/earnings-revenue/',
  },
};

const calculators = [
  {
    name: 'LIVE Earnings Calculator',
    slug: 'live-earnings',
    description: 'Estimate earnings from TikTok LIVE streaming based on viewers, duration, and gifting rate.',
    icon: Gift,
  },
  {
    name: 'Money Calculator',
    slug: 'money',
    description: 'Calculate total earnings from all monetization streams: Creator Fund, brand deals, and LIVE gifts.',
    icon: Banknote,
  },
  {
    name: 'Creator Fund Calculator',
    slug: 'creator-fund',
    description: 'Estimate monthly and annual earnings from the TikTok Creator Fund based on views and engagement.',
    icon: DollarSign,
  },
];

export default function EarningsRevenuePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Earnings & Revenue', href: '/calculators/earnings-revenue' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Earnings & Revenue Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your TikTok earnings from all revenue streams. Estimate LIVE gifts, Creator Fund payments, and total creator income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/earnings-revenue/${calc.slug}`}
              className="card card-hover p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <calc.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h2>
                  <p className="text-body-sm text-neutral-600">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
