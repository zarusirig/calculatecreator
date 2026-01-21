import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BarChart3, Handshake, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engagement & Influence Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok engagement rate, influencer pricing, and video performance. Free tools to measure your influence.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/engagement-influence/',
  },
};

const calculators = [
  {
    name: 'Engagement Calculator',
    slug: 'engagement',
    description: 'Calculate your TikTok engagement rate and compare to industry benchmarks.',
    icon: BarChart3,
  },
  {
    name: 'Influencer Pricing Calculator',
    slug: 'influencer-pricing',
    description: 'Calculate how much you should charge brands for sponsored content based on followers and engagement.',
    icon: Handshake,
  },
  {
    name: 'Video Engagement Calculator',
    slug: 'video-engagement',
    description: 'Predict video performance and get a comprehensive performance score based on key metrics.',
    icon: Video,
  },
];

export default function EngagementInfluencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Engagement & Influence', href: '/calculators/engagement-influence' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Engagement & Influence Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Measure and optimize your TikTok engagement. Calculate rates, pricing, and video performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/engagement-influence/${calc.slug}`}
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
