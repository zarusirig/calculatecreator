import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Methodology | TT Calculator',
  description:
    'See how TT Calculator builds assumptions, reviews sources, updates ranges, and explains limitations across tools and content.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/methodology/',
  },
};

export default function MethodologyPage() {
  return (
    <div className="pb-16 pt-10">
      <Container className="max-w-4xl">
        <Breadcrumb items={[{ label: 'Methodology', href: '/methodology/' }]} />
        <h1 className="text-display-sm font-bold text-neutral-900">Methodology</h1>
        <p className="mt-4 text-body-md text-neutral-700">
          TT Calculator provides directional estimates, not guarantees. This page explains how we
          build calculator assumptions, how we evaluate source quality, how often we refresh ranges,
          and what limitations users should expect when using outputs for planning decisions.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. Intent-first modeling</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We design each tool around a specific user question, such as "What is my RPM?" or "How
            much can I earn from this revenue stream?" Inputs are chosen to be practical and
            interpretable, then mapped to formula steps that users can understand. We avoid opaque
            black-box scoring models that produce a number without context.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. Assumption sourcing</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Assumptions are assembled from public platform documentation, creator-reported ranges,
            benchmark archives, and market observations. We treat source quality as a spectrum and
            do not present anecdotal evidence as deterministic fact. Where uncertainty is high, we
            widen estimate ranges rather than overstate precision.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We also normalize terminology across pages so metrics are consistent. For example, RPM
            is labeled RPM throughout rather than mixing labels across sections.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Formula and QA workflow</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our workflow runs in four stages: research, formula drafting, editorial and logic review,
            then publication. During review, we test boundary values, unit consistency, formatting
            behavior, and explanation clarity. We also verify that pages include assumptions and
            methodological context so users can interpret output responsibly.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            High-impact formula changes are tested before publication. If an issue is reported after
            release, we run a correction cycle and update affected pages.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Refresh cadence</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We review assumptions weekly and prioritize updates where platform changes or market
            behavior materially affect outcomes. Not all pages update at the same cadence, but trust
            and policy pages carry explicit update dates. We prefer revising stale assumptions over
            preserving legacy copy for convenience.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Limitations and uncertainty</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Creator economics are dynamic. A model can be directionally useful even when exact
            payouts differ in production. We therefore frame results as ranges and scenarios,
            especially where volatility is known. Users should incorporate their own actual results,
            negotiation constraints, and channel-specific context before making financial
            commitments.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Privacy by design</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculator inputs are intended to stay in your browser for calculation. We avoid
            requiring account creation for core tools and emphasize transparent data handling in our
            trust pages. Privacy details are documented in our{' '}
            <Link href="/privacy/" className="link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. Contact and corrections</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            If you find a suspect assumption or formula behavior, send the URL and issue details to{' '}
            <a href="mailto:contact@tiktokcalculator.net" className="link">
              contact@tiktokcalculator.net
            </a>
            . Our correction process is documented in the{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. Version visibility</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            When assumption logic changes materially, we update related trust pages and refresh
            affected calculators so users can review the latest model context in one pass. We
            encourage readers to check Last Updated markers and methodology links before relying on
            estimates for contracts, staffing, or budgeting decisions.
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
          </div>
        </section>
      </Container>
    </div>
  );
}
