import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';
import { FAQSection } from '@/components/calculator/FAQSection';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: 'TikTok Creator Business Guides | Taxes & Contracts',
  description:
    'Browse creator business guides on taxes, contracts, compliance, pricing, and financial planning for a more durable creator business.',
  alternates: { canonical: 'https://ttcalculator.net/guides/business/' },
};

const businessFaqs = [
  {
    question: 'How much should TikTok creators set aside for taxes?',
    answer: 'TikTok creators set aside 25-35% of every payout for taxes, with 30% as the safe default for incomes between $30,000 and $100,000 a year. US creators pay 15.3% self-employment tax on top of income tax.',
  },
  {
    question: 'Do TikTok creators need an LLC?',
    answer: 'Creators earning over $50,000 a year gain liability protection and potential tax advantages from an LLC. At higher incomes, an S-Corp election saves $2,000 to $15,000 a year in self-employment tax.',
  },
  {
    question: 'Do TikTok creators have to disclose brand deals?',
    answer: 'Yes. The FTC requires a clear disclosure such as #ad on every sponsored TikTok post, and liability for missing disclosures is shared between the creator and the brand.',
  },
  {
    question: 'When can a TikTok creator go full-time?',
    answer: 'Sustainable full-time income starts around $4,000 per month, a level most consistent creators reach between months 18 and 30. Three active income streams and a three-to-six-month expense buffer come first.',
  },
];

export default function BusinessHubPage() {
  const articles = getArticlesBySection('guides/business');
  return (
    <>
    <FAQPageSchema faqs={businessFaqs} url="https://ttcalculator.net/guides/business/" />
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
            What TikTok creator business guides cover
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok creator business guides cover the money and legal side of creating: taxes,
            contracts, disclosure rules, insurance, and exit planning. The{' '}
            <strong className="font-semibold text-neutral-900">12 guides</strong> in this hub
            answer one creator question: how do you protect the income your content earns.
          </p>
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
            How to use this hub
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Match your next decision to one of three guide groups: taxes and structure, contracts
            and compliance, or career operations.
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              <strong className="font-semibold text-neutral-900">Taxes and structure:</strong> the{' '}
              <Link href="/guides/business/tiktok-creator-taxes-guide/" className="text-primary-700 hover:text-primary-800">
                TikTok creator taxes guide by country
              </Link>{' '}
              covers what to set aside, the{' '}
              <Link href="/guides/business/international-creator-tax-implications/" className="text-primary-700 hover:text-primary-800">
                cross-border tax implications
              </Link>{' '}
              guide covers foreign income, and{' '}
              <Link href="/guides/business/tiktok-creator-insurance/" className="text-primary-700 hover:text-primary-800">
                TikTok creator insurance
              </Link>{' '}
              covers liability cover. Pair them with the LLC guide linked below for entity choice.
            </li>
            <li>
              <strong className="font-semibold text-neutral-900">Contracts and compliance:</strong>{' '}
              <Link href="/guides/business/brand-deal-contract-negotiate/" className="text-primary-700 hover:text-primary-800">
                brand deal contract essentials
              </Link>
              ,{' '}
              <Link href="/guides/business/ftc-disclosure-tiktok/" className="text-primary-700 hover:text-primary-800">
                FTC disclosure requirements
              </Link>
              ,{' '}
              <Link href="/guides/business/tiktok-copyright-fair-use/" className="text-primary-700 hover:text-primary-800">
                copyright and fair use on TikTok
              </Link>
              ,{' '}
              <Link href="/guides/business/tiktok-intellectual-property-protection/" className="text-primary-700 hover:text-primary-800">
                TikTok intellectual property protection
              </Link>
              , and{' '}
              <Link href="/guides/business/tiktok-community-guidelines-strikes/" className="text-primary-700 hover:text-primary-800">
                avoiding community guidelines strikes
              </Link>{' '}
              keep deals and accounts safe.
            </li>
            <li>
              <strong className="font-semibold text-neutral-900">Career operations:</strong>{' '}
              <Link href="/guides/business/when-to-hire-manager-tiktok/" className="text-primary-700 hover:text-primary-800">
                when to hire a manager
              </Link>
              ,{' '}
              <Link href="/guides/business/tiktok-creator-burnout-guide/" className="text-primary-700 hover:text-primary-800">
                creator burnout signs and recovery
              </Link>
              , and{' '}
              <Link href="/guides/business/tiktok-exit-strategies/" className="text-primary-700 hover:text-primary-800">
                TikTok exit strategies
              </Link>{' '}
              cover scaling the operation and leaving on your terms.
            </li>
          </ul>
          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
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

          <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
            How these guides are maintained
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Six editorial desks maintain this site, and the Tax desk owns earnings-to-tax context
            and jurisdiction-aware guidance in this hub. The Editorial desk checks formula logic,
            terminology, and factual claims before publication, and the Research desk grades every
            cited source. Conflicting sources publish as ranges rather than a single picked number.
            Guides refresh quarterly, with immediate revisions when tax rules, FTC guidance, or
            TikTok policies change. The full process sits in the{' '}
            <Link href="/editorial-policy/" className="text-primary-700 hover:text-primary-800">
              editorial policy
            </Link>
            .
          </p>
          <FAQSection faqs={businessFaqs} pageName="TikTok Creator Business Guides" title="Creator business FAQ" />
        </>
      }
    />
    </>
  );
}
