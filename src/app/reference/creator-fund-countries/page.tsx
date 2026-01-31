import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ReferenceSchema } from '@/components/seo/ReferenceSchema';

export const metadata: Metadata = {
  title: 'TikTok Creator Fund Eligible Countries List 2026',
  description: 'Complete list of countries where TikTok Creator Fund is available. Regional requirements and alternatives.',
  keywords: ['creator fund countries', 'tiktok monetization countries', 'eligible regions', 'creator fund availability'],
  alternates: {
    canonical: 'https://calculatecreator.com/reference/creator-fund-countries/',
  },
};

export default function CreatorFundCountriesPage() {
  const regions = [
    { region: 'North America', countries: ['United States', 'Canada (select provinces)'] },
    { region: 'Europe', countries: ['UK', 'Germany', 'France', 'Italy', 'Spain'] },
    { region: 'Asia-Pacific', countries: ['Limited availability'] },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ReferenceSchema
        title="TikTok Creator Fund Eligible Countries List 2026"
        description="Complete list of countries where TikTok Creator Fund is available. Regional requirements and alternatives."
        url="https://calculatecreator.com/reference/creator-fund-countries/"
        datePublished="2024-01-15"
        dateModified="2026-01-15"
        hasTable={false}
      />
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides/">Guides</Link><span>/</span>
            <span className="text-neutral-900">Creator Fund Countries</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Creator Fund Eligible Countries</h1>
          <p className="text-heading-md text-white/90">Where TikTok Creator Fund is available</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Available Regions</h2>
          <div className="space-y-4">
            {regions.map((region, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{region.region}</h3>
                <ul className="space-y-1">
                  {region.countries.map((country, i) => (
                    <li key={i} className="text-body-sm text-neutral-700">• {country}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <p className="text-body-md text-neutral-900">
            <strong>Not available in your country?</strong> Focus on brand deals, TikTok Shop (if available), and LIVE gifts as alternative income streams.
          </p>
        </Card>

        {/* Related Content */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Content</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-join-creator-fund-complete/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Join Creator Fund</h4>
              <p className="text-body-sm text-neutral-700">Complete eligibility requirements and application process guide</p>
            </Link>
            <Link href="/data/creator-fund-rates-by-country/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Rates by Country</h4>
              <p className="text-body-sm text-neutral-700">RPM and earnings data for each eligible region</p>
            </Link>
            <Link href="/reference/creator-fund-payment-schedule/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Payment Schedule</h4>
              <p className="text-body-sm text-neutral-700">When and how you receive Creator Fund payments</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Alternative Monetization Methods</h4>
              <p className="text-body-sm text-neutral-700">All ways to earn on TikTok beyond the Creator Fund</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

