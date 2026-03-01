import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BenchmarksHubClient } from '@/components/benchmarks/BenchmarksHubClient';

export const metadata: Metadata = {
  title: "TikTok Benchmarks Data and Benchmark Insights Guide",
  description: "Review TikTok benchmarks data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  alternates: {
    canonical: 'https://calculatecreator.com/benchmarks/',
  },
};

export default function BenchmarksPage() {
  return (
    <div className="pb-16 pt-10">
      <Container>
        <Breadcrumb items={[{ label: 'Benchmarks', href: '/benchmarks/' }]} />
        <div className="mb-8 max-w-3xl">
          <h1 className="text-display-sm font-bold text-neutral-900 md:text-display-md">Benchmarks</h1>
          <p className="mt-3 text-body-md text-neutral-600">TikTok creators: 
            Compare your numbers with benchmark ranges by platform and niche. Every card links to a
            calculator and a guide so you can move from metric to action.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Benchmark ranges on CalculateCreator are directional. They are designed to help you
            estimate whether your current metrics look below, near, or above commonly observed
            ranges for similar creator contexts. They are not guarantees of future performance and
            should always be interpreted with your own audience mix, seasonality, and content type.
          </p>
        </div>

        <section className="card mb-6 p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">How to use these benchmarks</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
            <li>Filter by platform and niche to narrow to a relevant comparison set.</li>
            <li>Open the linked calculator and run your own numbers with matching time periods.</li>
            <li>Review the assumptions and methodology notes before making business decisions.</li>
            <li>Track trend direction over time instead of relying on a single benchmark snapshot.</li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Benchmarks are updated on a regular cadence, but update timing may vary by metric. If
            you see a range that appears stale relative to major platform changes, report it via{' '}
            <Link href="/contact/" className="link">
              Contact
            </Link>{' '}
            and include the URL.
          </p>
        </section>

        <BenchmarksHubClient />

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">Methodology and limits</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our benchmark cards are built from aggregated public and community-visible signals, not
            private platform databases. Variability can be high across countries, monetization
            programs, ad demand cycles, and creator verticals. Use these ranges to frame decisions,
            then validate against your own historical performance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            For assumptions and refresh policy details, review{' '}
            <Link href="/methodology/" className="link">
              Methodology
            </Link>{' '}
            and{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
            . For practical usage examples, explore the{' '}
            <Link href="/calculators/" className="link">
              calculators directory
            </Link>{' '}
            and related guides.
          </p>
          <h3 className="mt-5 text-sm font-semibold text-neutral-900">Before you make a decision</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
            <li>Match the date range of your data to the benchmark period.</li>
            <li>Compare against at least two adjacent benchmark cards, not one isolated value.</li>
            <li>Use calculator scenarios to test best-case and conservative assumptions.</li>
            <li>Re-check ranges after major platform policy shifts or seasonal demand changes.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            CalculateCreator benchmarks are built for planning conversations, pricing hypotheses,
            and performance reviews. They are not legal, tax, or financial advice. If your decision
            has contractual or regulatory impact, pair these ranges with your own records and
            advisor guidance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Revisit this hub before quarterly planning, sponsorship negotiations, and major content
            shifts so your assumptions remain aligned with current market conditions.
          </p>
        </section>
      </Container>
    </div>
  );
}
