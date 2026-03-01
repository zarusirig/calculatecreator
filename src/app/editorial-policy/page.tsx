import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: "Editorial Policy and CalculateCreator Platform Details",
  description: "Review editorial policy information for CalculateCreator, including policy context, methodology transparency, and practical guidance for creator-focused",
  alternates: {
    canonical: 'https://calculatecreator.com/editorial-policy/',
  },
};

const LAST_UPDATED = 'March 1, 2026';
const editorialPolicySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Editorial Policy',
  description:
    'Editorial Policy for calculatecreator.com covering research workflow, updates, correction handling, and independence standards.',
  url: 'https://calculatecreator.com/editorial-policy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'CalculateCreator',
    url: 'https://calculatecreator.com',
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
          This page explains how CalculateCreator plans, produces, reviews, and updates content
          across calculators, guides, benchmark pages, and trust pages. Our editorial goal is
          straightforward: publish content that is useful, transparent, and technically defensible.
          We prioritize clarity over hype and assumptions over vague claims.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          Editorial quality and product quality are treated as the same system on
          calculatecreator.com. If formula logic improves, explanatory copy and assumptions should
          improve with it. If benchmark context changes, related pages should be refreshed together.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. Commitment to accuracy</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We present calculator outputs as directional estimates, not guaranteed outcomes. Creator
            monetization depends on many moving variables, including geography, niche, seasonality,
            algorithm changes, advertiser demand, and conversion quality. Our editorial standard is
            to explain those variables rather than hide them.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We explicitly label assumptions, date major updates, and avoid certainty language where
            precision is not justified. If a range is unstable, we say so. If a data point is weak,
            we either qualify it or remove it.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. Content creation process</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We use a multi-step workflow for both product and editorial pages.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Research</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We gather inputs from platform documentation, creator-reported ranges, historical
            observations, and community knowledge. We track whether each source is primary,
            secondary, or anecdotal.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Drafting</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Writers create draft copy with explicit units, assumptions, and limitations. Drafts are
            written for practical decision support, not keyword stuffing.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Review</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Reviewers check formula logic, consistency of terminology, factual claims, link
            integrity, and trust-policy alignment. We verify that copy does not imply guaranteed
            income.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Publication</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Pages are published with metadata, canonical settings, and schema where relevant. Trust
            pages include update dates and cross-links to supporting policies.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Data sources and calculator methodology</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We do not claim privileged access to internal TikTok systems. Our methodology uses public
            and community-visible signals, then converts them into transparent assumption bands.
            These bands are shown in calculator pages so users can adjust inputs according to their
            own situation.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Whenever possible, we include a "How we estimate" section and an assumptions block. Our
            team treats methodology transparency as a trust requirement, not an optional extra.
            Users should be able to see exactly why a result moved when an input changed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            For a practical overview, see{' '}
            <Link href="/methodology/" className="link">
              Methodology
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Update and refresh policy</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We run weekly assumption reviews and prioritize updates to pages with higher decision
            impact. Major trigger events include changes to monetization programs, ad-rate behavior,
            and widely observed platform policy shifts.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Not every page updates on the same cadence, but each trust and policy page is dated so
            readers can evaluate freshness. If a page is stale relative to new platform realities,
            we prefer to revise promptly rather than preserve outdated estimates.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Corrections policy</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We accept correction requests from users, partners, and readers. When a correction is
            submitted, we review source quality, assess impact, and patch copy or formulas if the
            issue is valid.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>High-impact formula errors are prioritized first.</li>
            <li>Factual copy issues are reviewed and corrected in regular editorial cycles.</li>
            <li>Broken links and structural issues are fixed as part of ongoing maintenance.</li>
            <li>Material policy changes are reflected in trust pages with updated dates.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            To report an issue, email{' '}
            <a href="mailto:contact@calculatecreator.com" className="link">
              contact@calculatecreator.com
            </a>{' '}
            or visit{' '}
            <Link href="/contact/" className="link">
              Contact
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Editorial independence</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Advertising revenue supports operations, but it does not dictate calculator assumptions
            or editorial positions. We separate monetization decisions from content logic. Our
            editors and reviewers are expected to preserve analytical integrity even when commercial
            incentives exist.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We are NOT affiliated with, endorsed by, or sponsored by TikTok or ByteDance. Brand,
            platform, and program names are used descriptively.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. AI usage disclosure</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We may use AI-assisted tools for drafting, summarization, formatting support, and
            workflow acceleration. AI assistance does not replace final human review. We do not
            publish critical claims, formulas, or policy content without editorial sign-off.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our reviewers validate output quality, check factual coherence, verify links, and enforce
            voice and compliance standards before publication.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. Reader trust commitments</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>We label estimates as estimates.</li>
            <li>We expose assumptions and limitations.</li>
            <li>We maintain accessible contact channels for corrections.</li>
            <li>We disclose ad monetization clearly.</li>
            <li>We avoid misleading guarantees and manipulative copy.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            When uncertainty is high, we prioritize explicit caveats over persuasive copy. Our
            default editorial stance is to reduce overconfidence, especially on monetization claims
            that can materially affect creator decisions.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">9. Related Resources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>
              <Link href="/about/" className="link">
                About
              </Link>{' '}
              for team and mission context.
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
              for how we handle error reports and content fixes.
            </li>
            <li>
              <Link href="/sources-policy/" className="link">
                Sources Policy
              </Link>{' '}
              for how we evaluate and document data sources.
            </li>
            <li>
              <Link href="/contact/" className="link">
                Contact
              </Link>{' '}
              for error reporting and editorial questions.
            </li>
          </ul>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">10. Contacting the editorial team</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            For corrections, source challenges, or methodology concerns, email{' '}
            <a href="mailto:contact@calculatecreator.com" className="link">
              contact@calculatecreator.com
            </a>{' '}
            and include the exact URL plus your evidence or rationale. We aim to acknowledge
            high-impact reports within 48 hours on business days.
          </p>
        </section>
        </Container>
      </div>
    </>
  );
}
