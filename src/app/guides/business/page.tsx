import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'TikTok Creator Business Guides | Taxes & Contracts',
  description:
    'Browse creator business guides on taxes, contracts, compliance, pricing, and financial planning for a more durable creator business.',
  alternates: { canonical: 'https://ttcalculator.net/guides/business/' },
};

export default function BusinessHubPage() {
  const articles = getArticlesBySection('guides/business');
  return (
    <HubListingPage
      title="TikTok Creator Business Guides"
      description="Run your TikTok creator career like a business. Taxes, contracts, legal requirements, and financial planning for sustainable income."
      section="guides/business"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">
            Run your TikTok creator career as a business
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok income arrives as irregular contractor payments, not a salary, so the creators who
            last treat the work as a business from the first dollar. Five fundamentals decide whether
            creator income compounds or collapses: tax reserves, written contracts, a media kit,
            defensible pricing, and distribution across more than one platform.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Set aside <strong>25-35% of every payout</strong> for taxes, with 30% as a safe default
            for creators earning $30,000-$100,000 a year. Move that share into a separate tax savings
            account the day a payment clears, not at year end. Pair the reserve with a dedicated
            business checking account so creator revenue never mixes with personal cash.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            For the full framework on deductions, record-keeping, and entity choice, read our{' '}
            <Link href="/guides/creator-tax-strategy/" className="text-primary-700 hover:text-primary-800">
              TikTok creator tax strategy guide
            </Link>
            . Creators earning over $50,000 a year gain liability protection and potential tax
            advantages by forming an LLC, covered in detail in our{' '}
            <Link href="/guides/business/llc-for-tiktok-creators/" className="text-primary-700 hover:text-primary-800">
              LLC for TikTok creators
            </Link>{' '}
            guide.
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            Price deals and protect each arrangement in writing
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Standard micro-influencer pricing runs <strong>$10-$25 per 1,000 followers per post</strong>,
            and high-value niches like finance, tech, and health command two to three times that base.
            Set every rate with the{' '}
            <Link href="/calculators/brand-deal-rate/" className="text-primary-700 hover:text-primary-800">
              brand deal rate calculator
            </Link>{' '}
            rather than guessing from a single competitor quote.
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              Confirm scope, deliverables, usage rights, revision rounds, and payment due date inside a
              signed contract before you film anything.
            </li>
            <li>
              Maintain a current media kit with follower count, engagement rate, audience demographics,
              past campaign results, and base rates.
            </li>
            <li>
              Invoice every deal on the day you deliver, and chase overdue invoices weekly so cash flow
              stays predictable.
            </li>
          </ul>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            Checklist for going full-time
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Site data places sustainable full-time income around <strong>$4,000 or more per month</strong>,
            a threshold most consistent creators reach between months 18 and 30. Move toward full-time
            only after these checkpoints read true:
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              Hit at least three active income streams, since creators who diversify early reach
              $1,000 a month about 40% faster than single-source creators.
            </li>
            <li>
              Bank a three-to-six-month expense buffer separate from your tax reserve before you leave
              other work.
            </li>
            <li>
              Extend distribution beyond TikTok, because repurposing to two platforms lifts reach
              40-80% and revenue by a 1.4x-2.2x multiple for roughly four to eight added hours a week.
            </li>
            <li>
              Track monthly revenue, cost per hour, and effective tax rate so you replace a salary with
              data instead of hope.
            </li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            Build the multi-channel half of that plan with our{' '}
            <Link href="/guides/multi-platform-strategy/" className="text-primary-700 hover:text-primary-800">
              multi-platform strategy guide
            </Link>
            , which lays out the posting, repurposing, and revenue stacking steps that protect creator
            income when a single platform shifts.
          </p>
        </>
      }
    />
  );
}
