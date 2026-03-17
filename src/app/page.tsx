import type { Metadata } from 'next';
import { HomepageSchema } from '@/components/seo/HomepageSchema';
import { HomepageRedesign } from '@/components/home/HomepageRedesign';

export const metadata: Metadata = {
  title: 'TikTok Calculator — Free TikTok Money, Earnings & Engagement Calculator [2026]',
  description:
    'Free TikTok Calculator to estimate earnings per view, engagement rate, brand deal pricing, and Creator Fund payouts. 35+ TikTok calculators trusted by 100k+ creators — no signup required.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/',
  },
  openGraph: {
    title: 'TikTok Calculator — Free TikTok Money, Earnings & Engagement Calculator',
    description:
      'Free TikTok Calculator for creators. Estimate TikTok earnings, engagement rate, brand deal rates, RPM, and LIVE gift revenue with transparent methodology.',
    url: 'https://tiktokcalculator.net/',
    type: 'website',
    images: [
      {
        url: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp',
        width: 1200,
        height: 630,
        alt: 'TikTok Calculator — free earnings, engagement, and money calculators for TikTok creators',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div>
      <HomepageSchema />
      <HomepageRedesign />
    </div>
  );
}
