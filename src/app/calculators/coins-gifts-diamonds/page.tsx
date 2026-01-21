import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Coins, Gem, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coins, Gifts & Diamonds Calculators | TikTok Creator Tools',
  description: 'Convert TikTok coins, calculate gift values, and understand diamond conversions. Free tools for LIVE streamers.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins-gifts-diamonds/',
  },
};

const calculators = [
  {
    name: 'Coins Calculator',
    slug: 'coins',
    description: 'Convert TikTok coins to USD value and understand coin-to-diamond conversion rates.',
    icon: Coins,
  },
  {
    name: 'Diamonds Calculator',
    slug: 'diamonds',
    description: 'Convert TikTok diamonds to real money. Understand the diamond-to-USD exchange rate.',
    icon: Gem,
  },
  {
    name: 'Gift Value Calculator',
    slug: 'gift',
    description: 'Calculate the real value of TikTok LIVE gifts in coins, diamonds, and USD.',
    icon: Gift,
  },
];

export default function CoinsGiftsDiamondsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Coins, Gifts & Diamonds', href: '/calculators/coins-gifts-diamonds' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Coins, Gifts & Diamonds Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Convert TikTok virtual currencies and understand gift values. Essential tools for LIVE streamers and gift recipients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/coins-gifts-diamonds/${calc.slug}`}
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
