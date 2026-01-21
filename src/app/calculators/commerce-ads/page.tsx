import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { TrendingUp, ShoppingBag, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commerce & Ads Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok RPM, CPM, shop profits, and ad costs. Free tools to optimize your commerce and advertising revenue.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/commerce-ads/',
  },
};

const calculators = [
  {
    name: 'RPM/CPM Calculator',
    slug: 'rpm-cpm',
    description: 'Calculate your revenue per 1,000 views (RPM) and cost per mille to understand earning efficiency.',
    icon: TrendingUp,
  },
  {
    name: 'Shop Profit Calculator',
    slug: 'shop-profit',
    description: 'Calculate earnings from TikTok Shop affiliate commissions and product sales.',
    icon: ShoppingBag,
  },
  {
    name: 'Ad Cost Calculator',
    slug: 'ad-cost',
    description: 'Estimate TikTok advertising costs including CPM, CPC, and total campaign budget.',
    icon: DollarSign,
  },
];

export default function CommerceAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Commerce & Ads', href: '/calculators/commerce-ads' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Commerce & Ads Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Optimize your TikTok revenue with our commerce and advertising calculators. Calculate RPM, shop profits, and ad costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/commerce-ads/${calc.slug}`}
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
