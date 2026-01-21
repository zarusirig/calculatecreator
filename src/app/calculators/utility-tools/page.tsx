import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Receipt, Wallet, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Utility Tools | TikTok Creator Calculators',
  description: 'Essential utility calculators for TikTok creators. Calculate taxes, payouts, and check monetization eligibility.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/utility-tools/',
  },
};

const calculators = [
  {
    name: 'Tax Calculator',
    slug: 'tax',
    description: 'Estimate your tax obligations including federal, state, and self-employment taxes.',
    icon: Receipt,
  },
  {
    name: 'Payout Calculator',
    slug: 'payout',
    description: 'Calculate your expected payout after platform fees and payment processing.',
    icon: Wallet,
  },
  {
    name: 'Eligibility Checker',
    slug: 'eligibility',
    description: 'Check if you meet the requirements for TikTok monetization programs.',
    icon: CheckCircle,
  },
];

export default function UtilityToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Utility Tools', href: '/calculators/utility-tools' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Utility Tools
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Essential tools for managing your creator business. Calculate taxes, payouts, and check your eligibility for monetization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/utility-tools/${calc.slug}`}
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
