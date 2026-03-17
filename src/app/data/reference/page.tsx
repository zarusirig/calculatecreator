import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: "TikTok Reference Data and Benchmark Insights Guide",
  description: "Review TikTok reference data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  alternates: { canonical: 'https://tiktokcalculator.net/data/reference/' },
};

export default function ReferenceDataHubPage() {
  const articles = getArticlesBySection('data/reference');
  return (
    <HubListingPage
      title="TikTok Reference Data"
      description="Technical reference data for TikTok creators. Gift values, coin prices, payment schedules, and platform requirements — always up to date."
      section="data/reference"
      articles={articles}
      parentPath="/data/"
      parentLabel="Data & Insights"
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">Why TikTok reference data matters</h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Reference pages answer operational questions that directly affect TikTok earnings quality:
            payment timing, country eligibility, gift conversion values, and policy limits. These are
            not growth tactics, but they remove costly mistakes in forecasting and cash-flow planning.
            Creators who ignore reference constraints often misprice deals, overestimate payout timing,
            or set goals on programs that are unavailable in their region.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Use this section whenever you build a revenue model, confirm monetization eligibility, or
            explain payout assumptions to partners. For example, before committing to a TikTok Shop
            campaign, confirm commission rates and settlement windows. Before estimating LIVE income,
            verify coin and gift conversion mechanics with current reference values.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            For practical forecasting, combine this reference hub with the{' '}
            <Link href="/calculators/utility-tools/payout/" className="text-primary-700 hover:text-primary-800">
              payout calculator
            </Link>{' '}
            and{' '}
            <Link href="/calculators/coins/" className="text-primary-700 hover:text-primary-800">
              coins calculator
            </Link>{' '}
            so your estimates reflect both platform rules and real creator inputs.
          </p>
          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            Reference checks before publishing campaigns
          </h3>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>Confirm program eligibility by country before committing to payout targets.</li>
            <li>Validate settlement timing so cash-flow expectations match real transfer windows.</li>
            <li>Cross-check coin and gift conversions before setting LIVE revenue goals.</li>
            <li>Revisit platform limits whenever monetization policies or feature rules update.</li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            These checks look small, but they prevent downstream planning errors that compound across
            ad spend, sponsorship commitments, and creator payroll forecasting.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Keep a dated note of each reference check you use in monthly planning so you can quickly
            audit why a forecast changed when TikTok updates payout rules or eligibility thresholds.
          </p>
        </>
      }
    />
  );
}
