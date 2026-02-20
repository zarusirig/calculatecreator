import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "TikTok Methodology for Creator Earnings and Growth",
  description: "Explore TikTok methodology content with creator earnings context, engagement benchmarks, monetization guidance, and clear next-step recommendations.",
  alternates: {
    canonical: 'https://calculatecreator.com/methodology/',
  },
};

export default function MethodologyPage() {
  return (
    <div className="pb-16 pt-10">
      <Container className="max-w-4xl">
        <h1 className="text-display-sm font-bold text-neutral-900">Methodology</h1>
        <p className="mt-4 text-body-md text-neutral-700">TikTok creators: 
          CalculateCreator provides directional estimates, not guarantees. This page explains how we
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
            <a href="mailto:contact@calculatecreator.com" className="link">
              contact@calculatecreator.com
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

        <div className="mt-10 text-sm text-neutral-500">
          <p>
            Related:{' '}
            <Link href="/corrections-policy/" className="text-primary-600 underline">Corrections Policy</Link>
            {' · '}
            <Link href="/sources-policy/" className="text-primary-600 underline">Sources Policy</Link>
            {' · '}
            <Link href="/editorial-policy/" className="text-primary-600 underline">Editorial Policy</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
