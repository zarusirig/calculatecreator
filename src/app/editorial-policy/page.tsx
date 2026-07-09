import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Editorial Policy | TT Calculator',
  description:
    'Review how TT Calculator researches, writes, reviews, updates, and corrects calculator, guide, and benchmark content.',
  alternates: {
    canonical: 'https://ttcalculator.net/editorial-policy/',
  },
};

const LAST_UPDATED = 'March 1, 2026';
const editorialPolicySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Editorial Policy',
  description:
    'Editorial Policy for ttcalculator.net covering research workflow, updates, correction handling, and independence standards.',
  url: 'https://ttcalculator.net/editorial-policy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://ttcalculator.net',
  },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialPolicySchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
        <Breadcrumb items={[{ label: 'Editorial Policy', href: '/editorial-policy/' }]} />
        <h1 className="text-display-sm font-bold text-neutral-900">Editorial Policy</h1>
        <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

        <p className="mt-5 text-sm leading-relaxed text-neutral-700">
          This page documents how TT Calculator plans, produces, reviews, and updates content across
          calculators, guides, benchmark pages, and trust pages. The editorial standard is direct:
          publish content that is useful, transparent, and technically defensible. Clarity outranks
          hype, and stated assumptions outrank vague claims.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          Editorial quality and product quality run as one system on ttcalculator.net. When formula
          logic improves, explanatory copy and assumptions improve with it. When benchmark context
          shifts, related pages refresh together.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. Commitment to accuracy</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculator outputs are{' '}
            <strong className="font-semibold text-neutral-900">directional estimates, not guaranteed outcomes</strong>.
            Creator monetization depends on moving variables including geography, niche, seasonality,
            algorithm changes, advertiser demand, and conversion quality. The editorial standard
            explains those variables rather than hiding them.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Every page labels its assumptions, dates major updates, and avoids certainty language
            where precision is unjustified. Unstable ranges are called unstable, and weak data points
            are qualified or removed.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. Desk-based authorship model</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator operates an internal desk model rather than a roster of named individual
            experts. Each desk owns a content domain and is accountable for the assumptions, copy, and
            corrections inside it. Attribution on a page points to the responsible desk, not to a
            personal byline the site does not maintain.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Six desks divide the editorial workload.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Editorial desk: review, voice consistency, and trust-policy alignment</li>
            <li>Research desk: data sourcing, benchmark bands, and source-quality grading</li>
            <li>LIVE desk: livestream gift economics and creator monetization during streams</li>
            <li>Commerce desk: TikTok Shop, affiliate economics, and seller revenue</li>
            <li>Tax desk: earnings-to-tax context and jurisdiction-aware guidance</li>
            <li>Growth desk: audience metrics, benchmarking, and platform comparison</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The desk model keeps continuity when contributors change. Ownership of a topic lives in
            the desk, so turnover in any single contributor does not break the editorial chain.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Content creation process</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Product and editorial pages share a multi-step workflow.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Research</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            The Research desk gathers inputs from platform documentation, creator-reported ranges,
            historical observations, and community knowledge. Each source is tagged primary,
            secondary, or anecdotal before it enters a draft.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Drafting</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            The responsible desk drafts copy with explicit units, assumptions, and limitations. Drafts
            target practical decision support, not keyword stuffing.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Review</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            The Editorial desk checks formula logic, terminology consistency, factual claims, link
            integrity, and trust-policy alignment. Reviewers confirm that copy never implies
            guaranteed income.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Publication</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Pages ship with metadata, canonical settings, and schema where relevant. Trust pages
            carry update dates and cross-links to supporting policies.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Fact-checking standards</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Every numeric claim, eligibility threshold, and program term passes a three-check
            standard before publication.
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-700">
            <li>Verify the claim against at least one primary or high-reliability source.</li>
            <li>Confirm the source is current and not superseded by a later platform change.</li>
            <li>Quote or paraphrase the claim with the source category attached.</li>
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Claims that fail the standard are removed or rewritten as qualified ranges. The Research
            desk logs the source category behind each retained number so a later reviewer can retrace
            the decision.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Data sources and calculator methodology</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator claims no privileged access to internal TikTok systems. The methodology uses
            public and community-visible signals, then converts them into transparent assumption bands
            shown on calculator pages. Users adjust inputs to their own situation and watch the result
            move.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculator pages carry a &quot;How we estimate&quot; section and an assumptions block
            wherever the structure allows. Methodology transparency is a trust requirement, not an
            optional extra. The practical overview lives in the{' '}
            <Link href="/methodology/" className="link">
              Methodology
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Update and refresh policy</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Assumption reviews run weekly, with priority for pages of higher decision impact. Trigger
            events include monetization-program changes, ad-rate behavior, and widely observed
            platform policy shifts.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Each trust and policy page is dated so readers evaluate freshness directly. Stale
            assumptions are revised promptly rather than preserved for convenience.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. Handling TikTok&apos;s rapidly changing policies</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TikTok updates monetization rules, eligibility gates, and eligible markets on short
            notice. TT Calculator tracks those changes and routes them through a fixed response
            process.
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-700">
            <li>Monitor TikTok&apos;s official program documentation and creator-facing announcements.</li>
            <li>Flag changes that affect eligibility, payout structure, or available markets.</li>
            <li>Revise the affected assumption bands and calculator logic.</li>
            <li>Update related guide, benchmark, and trust pages with a refreshed date.</li>
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Where a change is confirmed but details remain unclear, affected pages state the open
            question instead of inventing a precise figure.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. Corrections policy</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Correction requests from users, partners, and readers enter the same review queue.
            Submitted issues trigger source review, impact assessment, and a copy or formula patch
            when the issue is valid.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>High-impact formula errors take priority over all other work.</li>
            <li>Factual copy issues are corrected inside the regular editorial cycle.</li>
            <li>Broken links and structural problems are fixed during ongoing maintenance.</li>
            <li>Material policy changes land in trust pages with refreshed dates.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The detailed workflow for error reports and content fixes sits in the{' '}
            <Link href="/corrections-policy/" className="link">
              Corrections Policy
            </Link>
            . To report an issue, email{' '}
            <a href="mailto:contact@ttcalculator.net" className="link">
              contact@ttcalculator.net
            </a>{' '}
            or visit{' '}
            <Link href="/contact/" className="link">
              Contact TT Calculator
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">9. Editorial independence</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Advertising revenue funds operations but dictates neither calculator assumptions nor
            editorial positions. Monetization decisions stay separate from content logic, and editors
            preserve analytical integrity even where commercial incentives exist.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator is{' '}
            <strong className="font-semibold text-neutral-900">not affiliated with, endorsed by, or sponsored by TikTok or ByteDance</strong>.
            Brand, platform, and program names appear descriptively. Monetization transparency lives
            in the{' '}
            <Link href="/compliance/advertising-disclosure/" className="link">
              Advertising Disclosure
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">10. AI usage disclosure</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            AI-assisted tools support drafting, summarization, formatting, and workflow acceleration.
            AI assistance does not replace final human review. No critical claim, formula, or policy
            content publishes without editorial sign-off.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Reviewers validate output quality, check factual coherence, verify links, and enforce
            voice and compliance standards before publication.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">11. Reader trust commitments</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Estimates are labeled as estimates.</li>
            <li>Assumptions and limitations stay visible.</li>
            <li>Accessible contact channels accept corrections.</li>
            <li>Ad monetization is disclosed clearly.</li>
            <li>Misleading guarantees and manipulative copy are excluded.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            High uncertainty produces explicit caveats over persuasive copy. The default editorial
            stance reduces overconfidence, especially on monetization claims that move creator
            decisions.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">12. Related Resources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>
              <Link href="/about/" className="link">
                About TT Calculator
              </Link>{' '}
              for team and mission context.
            </li>
            <li>
              <Link href="/methodology/" className="link">
                Methodology
              </Link>{' '}
              for calculator inputs, outputs, and limits.
            </li>
            <li>
              <Link href="/compliance/advertising-disclosure/" className="link">
                Advertising Disclosure
              </Link>{' '}
              for monetization transparency.
            </li>
            <li>
              <Link href="/privacy/" className="link">
                Privacy Policy
              </Link>{' '}
              for data and consent handling.
            </li>
            <li>
              <Link href="/corrections-policy/" className="link">
                Corrections Policy
              </Link>{' '}
              for how error reports and content fixes are handled.
            </li>
            <li>
              <Link href="/sources-policy/" className="link">
                Sources Policy
              </Link>{' '}
              for how data sources are evaluated and documented.
            </li>
          </ul>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">13. Contacting the editorial team</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Corrections, source challenges, and methodology concerns go to{' '}
            <a href="mailto:contact@ttcalculator.net" className="link">
              contact@ttcalculator.net
            </a>{' '}
            with the exact URL plus supporting evidence. High-impact reports receive acknowledgment
            within 48 hours on business days.
          </p>
        </section>
        </Container>
      </div>
    </>
  );
}
