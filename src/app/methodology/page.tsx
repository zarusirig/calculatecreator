import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Methodology | TT Calculator',
  description:
    'See how TT Calculator builds assumptions, reviews sources, updates ranges, and explains limitations across tools and content.',
  alternates: {
    canonical: 'https://ttcalculator.net/methodology/',
  },
};

export default function MethodologyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ttcalculator.net' },
          { name: 'Methodology', url: 'https://ttcalculator.net/methodology/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Methodology',
            description:
              'How TT Calculator builds calculator assumptions, evaluates source quality, refreshes ranges, and explains limitations across tools and content.',
            url: 'https://ttcalculator.net/methodology/',
            isPartOf: {
              '@type': 'WebSite',
              name: 'TT Calculator',
              url: 'https://ttcalculator.net/',
            },
            about: {
              '@type': 'Thing',
              name: 'Calculator methodology and assumption sourcing',
            },
            inLanguage: 'en-US',
          }),
        }}
      />
    <div className="pb-16 pt-10">
      <Container className="max-w-4xl">
        <Breadcrumb items={[{ label: 'Methodology', href: '/methodology/' }]} />
        <h1 className="text-display-sm font-bold text-neutral-900">Methodology</h1>
        <p className="mt-4 text-body-md text-neutral-700">
          TT Calculator produces directional estimates, not guarantees. This page documents the
          inputs each tool accepts, the revenue streams it models, the formula steps it runs, the
          source categories it weights, and the limitations users face when planning creator
          earnings.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. Intent-first modeling</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Each tool answers one specific creator question, such as &quot;What is my RPM?&quot; or
            &quot;How much does this revenue stream pay?&quot; Inputs are chosen for practical
            interpretability, then mapped to formula steps users can read step by step. TT
            Calculator avoids opaque black-box scoring that outputs a number without context.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. Calculator inputs</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Every calculator accepts a defined set of creator inputs and converts them into revenue
            estimates through documented formulas. The core input set covers six variables.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Views (per video or per 30-day window)</li>
            <li>Followers (current follower count)</li>
            <li>Engagement rate (likes, comments, and shares relative to views)</li>
            <li>Niche or vertical (beauty, gaming, finance, and similar categories)</li>
            <li>Geography (creator country and audience location)</li>
            <li>Content cadence (videos posted per week or per month)</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Each input maps to an assumption band for the revenue stream in question. Views and
            followers set scale, engagement sets conversion quality, and niche sets the rate band,
            because advertiser demand differs sharply across verticals.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Revenue stream outputs</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculators return estimate ranges across the revenue streams TikTok creators earn
            from. Outputs are split by stream so users can see which channels drive the total.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Creator Rewards Program estimates for videos over one minute long</li>
            <li>Legacy Creator Fund comparisons for context on prior payout structures</li>
            <li>Brand deal rate ranges priced per post or per campaign</li>
            <li>LIVE gift earnings converted from coin-based gifting</li>
            <li>TikTok Shop commission estimates for affiliate and seller revenue</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TikTok&apos;s published Creator Rewards Program eligibility requires at least 10,000
            followers and 100,000 views in the prior 30 days for videos longer than one minute. TT
            Calculator surfaces eligibility gates like this before estimating a stream a creator
            cannot yet access.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Estimation process</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Each estimate passes through a five-step process from raw input to the displayed range.
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-700">
            <li>Normalize the user&apos;s inputs to consistent units.</li>
            <li>Map each input to the applicable assumption band for the revenue stream.</li>
            <li>Combine the inputs against the band to produce a midpoint estimate.</li>
            <li>Apply a spread around the midpoint to generate a low-to-high range.</li>
            <li>Display the range with the assumptions that produced it.</li>
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The spread in step four widens when source reliability is low and narrows when platform
            documentation fixes the rate. Users see the same assumptions the formula uses, so a
            changed input always explains the changed output.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Data source types compared</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator weights four categories of data sources by reliability. Higher-reliability
            sources anchor the band, while lower-reliability sources widen it.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="p-3 text-left text-sm font-semibold text-neutral-900">Source type</th>
                  <th className="p-3 text-left text-sm font-semibold text-neutral-900">Example</th>
                  <th className="p-3 text-left text-sm font-semibold text-neutral-900">Reliability</th>
                  <th className="p-3 text-left text-sm font-semibold text-neutral-900">Handling</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-sm font-semibold text-neutral-900">Primary platform documentation</td>
                  <td className="p-3 text-sm text-neutral-700">TikTok Creator Rewards Program eligibility rules</td>
                  <td className="p-3 text-sm text-neutral-700">Highest</td>
                  <td className="p-3 text-sm text-neutral-700">Treated as ground truth for program terms</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-sm font-semibold text-neutral-900">Creator-reported ranges</td>
                  <td className="p-3 text-sm text-neutral-700">Public earnings breakdowns from working creators</td>
                  <td className="p-3 text-sm text-neutral-700">Medium</td>
                  <td className="p-3 text-sm text-neutral-700">Averaged into the band, never used alone</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-sm font-semibold text-neutral-900">Aggregated market benchmarks</td>
                  <td className="p-3 text-sm text-neutral-700">Cross-platform CPM and RPM trend data</td>
                  <td className="p-3 text-sm text-neutral-700">Medium</td>
                  <td className="p-3 text-sm text-neutral-700">Used for directional context and spread</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm font-semibold text-neutral-900">Community observations</td>
                  <td className="p-3 text-sm text-neutral-700">Forum and social discussion of payout shifts</td>
                  <td className="p-3 text-sm text-neutral-700">Lowest</td>
                  <td className="p-3 text-sm text-neutral-700">Flagged for review, not fed into the formula</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The full evaluation criteria for each source category appear in the{' '}
            <Link href="/sources-policy/" className="link">
              Sources Policy
            </Link>
            . Benchmark datasets drawn from these sources sit in the{' '}
            <Link href="/learn/" className="link">
              TikTok Creator Data Hub
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Assumption sourcing and benchmark ranges</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Assumptions assemble from the four source categories above into transparent bands. TT
            Calculator treats source quality as a spectrum and never presents anecdotal evidence as
            deterministic fact. Where uncertainty runs high, the model widens the estimate range
            rather than overstating precision.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Terminology stays normalized across pages so metrics carry one meaning everywhere. RPM is
            labeled RPM throughout, and eligible views are distinguished from total views, because
            only monetizable views feed payouts.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Benchmark ranges refresh on a rolling schedule rather than a fixed annual cycle. Niche
            bands tied to volatile advertiser demand update more often than stable program-eligibility
            rules.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. Formula and QA workflow</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The workflow runs in four stages: research, formula drafting, editorial and logic review,
            then publication. During review, testers check boundary values, unit consistency,
            formatting behavior, and explanation clarity. Every page carries an assumptions block and
            methodological context so users interpret output responsibly.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            High-impact formula changes run boundary tests before publication. Reported issues after
            release trigger a correction cycle that updates the affected pages and their dates.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. Refresh cadence and update triggers</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Assumptions receive a weekly review, with priority for pages where platform or market
            shifts materially change outcomes. Trust and policy pages carry explicit update dates so
            readers judge freshness at a glance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Four trigger events force an off-cycle review of the affected calculator and its band.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>TikTok changes a payout program&apos;s eligibility, rate structure, or eligible markets</li>
            <li>A monetization program is retired or replaced, such as the Creator Fund to Creator Rewards transition</li>
            <li>Widespread advertiser-demand or CPM shifts reshape RPM across multiple niches</li>
            <li>Corrected source material or new primary documentation supersedes an existing band</li>
          </ul>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">9. Limitations and uncertainty</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculator outputs are{' '}
            <strong className="font-semibold text-neutral-900">directional estimates, not guaranteed payouts</strong>.
            Creator economics move with geography, niche, season, algorithm state, advertiser demand,
            and conversion quality. Models stay useful for direction even when exact production
            payouts differ.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Five limitations bound every estimate on the site.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Estimates guide planning and never constitute a contractual income guarantee.</li>
            <li>TikTok does not publish per-view payout rates, so RPM bands are inferred from the source categories above.</li>
            <li>Creator results vary by geography, audience behavior, seasonality, and algorithm changes the inputs do not fully capture.</li>
            <li>Brand deal rates depend on negotiation, exclusivity terms, and deliverables outside the calculator&apos;s input set.</li>
            <li>LIVE gift and TikTok Shop revenue depend on audience purchase behavior, which fluctuates session by session.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Users fold their own actual results, negotiation constraints, and channel-specific context
            into any financial commitment built on these estimates.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">10. Privacy by design</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculator inputs stay in the browser for calculation. Core tools require no account
            creation, and transparent data handling is documented across the trust pages. Privacy
            details sit in the{' '}
            <Link href="/privacy/" className="link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">11. Contact and corrections</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Report a suspect assumption or formula behavior with the URL and issue details to{' '}
            <a href="mailto:contact@ttcalculator.net" className="link">
              contact@ttcalculator.net
            </a>
            . The correction process is documented in the{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>{' '}
            and the{' '}
            <Link href="/corrections-policy/" className="link">
              Corrections Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">12. Version visibility</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Material assumption changes update the related trust pages and refresh the affected
            calculators in one pass. Readers check Last Updated markers and methodology links before
            relying on estimates for contracts, staffing, or budgeting decisions.
          </p>
        </section>

        <section className="mt-10 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">Related Resources</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/corrections-policy/" className="btn btn-secondary btn-sm">
              Corrections Policy
            </Link>
            <Link href="/sources-policy/" className="btn btn-secondary btn-sm">
              Sources Policy
            </Link>
            <Link href="/editorial-policy/" className="btn btn-secondary btn-sm">
              Editorial Policy
            </Link>
            <Link href="/learn/" className="btn btn-secondary btn-sm">
              TikTok Creator Data Hub
            </Link>
          </div>
        </section>
      </Container>
    </div>
    </>
  );
}
