import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Moon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fun & Niche Calculators | TikTok Creator Tools',
  description: 'Fun and unique calculators for TikTok creators. Explore niche tools like moon phase timing for optimal posting.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/fun-niche/',
  },
};

const calculators = [
  {
    name: 'Moon Phase Calculator',
    slug: 'moon-phase',
    description: 'Discover the best times to post based on moon phases. A fun tool for creators who believe in lunar timing.',
    icon: Moon,
  },
];

export default function FunNichePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Fun & Niche', href: '/calculators/fun-niche' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Fun & Niche Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our collection of fun and unique calculators. These creative tools add a bit of magic to your creator journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/fun-niche/${calc.slug}`}
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
