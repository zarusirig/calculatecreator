import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: "TikTok Reference Data and Benchmark Insights Guide",
  description: "Review TikTok reference data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  alternates: { canonical: 'https://ttcalculator.net/data/reference/' },
};

const referenceFaqs = [
  {
    question: 'When does TikTok Shop pay creators?',
    answer: 'TikTok Shop pays on a monthly cycle: earnings calculate during the first 10-15 days of the following month, initiate around mid-month, and land 1-7 days later through PayPal or bank transfer.',
  },
  {
    question: 'What is the TikTok Shop referral fee?',
    answer: 'TikTok Shop charges sellers a flat 6% referral fee on most US categories in 2026, with jewelry at 5%.',
  },
  {
    question: 'What are the TikTok Creator Rewards eligibility requirements?',
    answer: 'Creator Rewards requires 10,000 followers, 100,000 views in the last 30 days, and age 18 or older, and pays on eligible videos over one minute.',
  },
  {
    question: 'What is the typical TikTok Shop affiliate commission?',
    answer: 'Sellers set creator affiliate commissions, which typically range from 5-25% of the sale.',
  },
];

export default function ReferenceDataHubPage() {
  const articles = getArticlesBySection('data/reference');
  return (
    <>
    <FAQPageSchema faqs={referenceFaqs} url="https://ttcalculator.net/data/reference/" />
    <HubListingPage
      title="TikTok Reference Data"
      description="Technical reference data for TikTok creators. Gift values, coin prices, payment schedules, and platform requirements — always up to date."
      section="data/reference"
      articles={articles}
      parentPath="/data/"
      parentLabel="Data & Insights"
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">
            What TikTok reference data covers
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok reference data records the platform&apos;s fixed rules: gift values, coin
            conversions, Shop commissions, payment schedules, and program eligibility by country.
            The <strong className="font-semibold text-neutral-900">7 reference pages</strong> in
            this hub answer one creator question: which exact rate or rule applies to your payout.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Reference values differ from benchmarks because TikTok sets them directly. A gift&apos;s
            coin price, a category&apos;s referral fee, and a program&apos;s follower threshold are
            platform rules, not estimates, so these pages track the published values and flag every
            change with a date.
          </p>
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">Why TikTok reference data matters</h2>
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
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
            What TikTok reference data this site publishes
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            This hub publishes six core reference datasets that creators use for forecasting,
            eligibility checks, and payout modeling:
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>Creator Rewards Program eligibility and availability by country.</li>
            <li>TikTok Shop commission rates by category and seller tier.</li>
            <li>TikTok Shop payment and settlement schedule windows.</li>
            <li>LIVE gift values and coin conversion charts.</li>
            <li>Video length limits by account type and program.</li>
            <li>Business versus creator account feature differences.</li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            Each dataset lives in a dedicated child article. Review{' '}
            <Link href="/data/reference/creator-fund-countries/" className="text-primary-700 hover:text-primary-800">
              Creator Rewards Program countries
            </Link>, the{' '}
            <Link href="/data/reference/shop-commission-rates/" className="text-primary-700 hover:text-primary-800">
              Shop commission rates
            </Link>, the{' '}
            <Link href="/data/reference/shop-payment-schedule/" className="text-primary-700 hover:text-primary-800">
              Shop payment schedule
            </Link>, and the{' '}
            <Link href="/data/reference/live-gifts-value-chart/" className="text-primary-700 hover:text-primary-800">
              LIVE gifts value chart
            </Link>{' '}
            before building any revenue model.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Three further pages complete the hub&apos;s 7 reference articles. The{' '}
            <Link href="/data/reference/tiktok-video-length-limits/" className="text-primary-700 hover:text-primary-800">
              TikTok video length limits and recommendations
            </Link>{' '}
            page defines format ceilings by account type, the{' '}
            <Link href="/data/reference/tiktok-business-vs-creator-account/" className="text-primary-700 hover:text-primary-800">
              TikTok Business vs Creator account
            </Link>{' '}
            comparison explains feature differences, and{' '}
            <Link href="/data/reference/how-much-is-a-galaxy-on-tiktok/" className="text-primary-700 hover:text-primary-800">
              how much a Galaxy is on TikTok
            </Link>{' '}
            prices the platform&apos;s most-asked-about single gift.
          </p>
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
            How reference data is sourced and updated
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Reference values originate from TikTok's official creator documentation, the seller help
            center, and in-app program pages. Each figure carries a logged source and publication date,
            and editors re-verify payout-critical pages on a fixed cadence.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Six editorial desks divide ownership of these tables. The LIVE desk maintains gift and
            coin values, the Commerce desk maintains Shop commission and settlement pages, and the
            Research desk grades every source before a value publishes. Conflicting sources publish
            as ranges rather than a single picked number. Read the full verification
            process in our{' '}
            <Link href="/methodology/" className="text-primary-700 hover:text-primary-800">
              data methodology
            </Link>{' '}
            and the source selection rules in our{' '}
            <Link href="/sources-policy/" className="text-primary-700 hover:text-primary-800">
              sources policy
            </Link>.
          </p>
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
            How to use TikTok reference data
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Reference data becomes useful only when each value feeds a specific forecast input. Pair
            payout windows with cash-flow dates, commission rates with margin models, and eligibility
            thresholds with program access checks:
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>Map each reference value to one forecast input so payout timing, commission, and eligibility each anchor a line in the model.</li>
            <li>Re-verify figures before each monthly model or campaign launch, since TikTok updates payout rules and category rates on short notice.</li>
            <li>Feed confirmed values into the payout and coins calculators on this page to translate platform rules into creator earnings estimates.</li>
            <li>Record the source date beside each input so a later forecast change traces back to a specific policy update instead of a silent error.</li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            This workflow turns static reference tables into a repeatable forecasting routine, so policy
            updates surface as dated, auditable changes rather than unnoticed drift in the numbers.
          </p>
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
            TikTok reference FAQ
          </h2>
          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            When does TikTok Shop pay creators?
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok Shop pays on a <strong className="font-semibold text-neutral-900">monthly cycle</strong>: earnings calculate during the first 10–15 days of the following month, initiate around mid-month, and land <strong className="font-semibold text-neutral-900">1–7 days later</strong> through PayPal or bank transfer.
          </p>
          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            What is the TikTok Shop referral fee?
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok Shop charges sellers a flat <strong className="font-semibold text-neutral-900">6% referral fee on most US categories in 2026</strong>, with jewelry at 5%.
          </p>
          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            What are the TikTok Creator Rewards eligibility requirements?
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Creator Rewards requires <strong className="font-semibold text-neutral-900">10,000 followers, 100,000 views in the last 30 days, and age 18 or older</strong>, and pays on eligible videos over one minute.
          </p>
          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            What is the typical TikTok Shop affiliate commission?
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Sellers set creator affiliate commissions, which typically range from <strong className="font-semibold text-neutral-900">5–25%</strong> of the sale.
          </p>
        </>
      }
    />
    </>
  );
}
