import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Sources Policy | TT Calculator',
  description:
    'How TT Calculator evaluates, selects, and cites data sources used in calculators, guides, and research pages.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/sources-policy/',
  },
};

const LAST_UPDATED = 'March 1, 2026';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sources Policy',
  description:
    'How TT Calculator evaluates, selects, and cites data sources used in calculators, guides, and research pages.',
  url: 'https://tiktokcalculator.net/sources-policy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://tiktokcalculator.net',
  },
};

export default function SourcesPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <Breadcrumb items={[{ label: 'Sources Policy', href: '/sources-policy/' }]} />
          <h1 className="text-display-sm font-bold text-neutral-900">
            Sources Policy
          </h1>
          <div className="mt-3 text-sm text-neutral-600">
            Last Updated: {LAST_UPDATED}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            TT Calculator TikTok tools and content rely on verifiable data. This page
            explains how we select sources, rank their reliability, handle
            undisclosed data, and keep information current.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              1. Source Types
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We use four categories of sources across our content:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-neutral-700">
              <li>
                <strong>Official platform sources:</strong> TikTok Creator
                Portal, TikTok for Business, TikTok Ads Manager, and official
                policy announcements.
              </li>
              <li>
                <strong>Industry research:</strong> Reports from Influencer
                Marketing Hub, Social Blade, Statista, DataReportal, and
                peer-reviewed academic research on creator economics.
              </li>
              <li>
                <strong>Creator-reported data:</strong> Aggregated, anonymized
                earnings data shared directly by creators through surveys and
                community participation.
              </li>
              <li>
                <strong>Expert analysis:</strong> Interpretations and models
                developed by our specialist team members, clearly labeled as
                estimates.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              2. Source Quality Hierarchy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              When sources conflict, we resolve disagreements using this
              priority order:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-sm text-neutral-700">
              <li>
                Official TikTok documentation and policy pages
              </li>
              <li>
                Government and regulatory sources (IRS, FTC)
              </li>
              <li>
                Peer-reviewed or methodologically transparent research
              </li>
              <li>
                Established industry tracking platforms (Social Blade, Statista)
              </li>
              <li>
                Aggregated creator-reported data (minimum sample size: 50
                creators)
              </li>
              <li>
                Individual creator reports (used directionally, not as primary
                evidence)
              </li>
            </ol>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              3. Citation Standards
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every calculator page includes a citations section listing the
              primary data sources used. Citations include source name, title,
              publication date, and access date. Where a URL is available, we
              link directly to the source. All citations are visible in the
              E-E-A-T section at the bottom of each calculator and guide page.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              4. Source Currency
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The creator economy changes rapidly. We verify key data points on
              the following schedule:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              <li>
                <strong>RPM and payout rates:</strong> Quarterly or when TikTok
                announces policy changes
              </li>
              <li>
                <strong>Engagement benchmarks:</strong> Semi-annually, using
                fresh sample data
              </li>
              <li>
                <strong>Tax rates and brackets:</strong> Annually, aligned with
                IRS publication updates
              </li>
              <li>
                <strong>Platform features and policies:</strong> Within 7 days
                of announced changes
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Each calculator page displays a &ldquo;Last verified&rdquo; date
              indicating when its data was last confirmed accurate.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              5. Undisclosed Data
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TikTok does not publicly disclose exact Creator Fund RPM rates,
              algorithm weights, or gift revenue-share percentages. When we use
              estimates for undisclosed values, we:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              <li>Clearly label them as estimates or ranges</li>
              <li>
                Explain the methodology used to derive the estimate in each
                calculator&rsquo;s methodology section
              </li>
              <li>
                Provide the data range rather than a single point value
              </li>
              <li>
                Update estimates when better data becomes available
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              6. Challenging Our Sources
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If you believe a source is outdated, misrepresented, or
              unreliable, please contact us at{' '}
              <a
                href="mailto:corrections@tiktokcalculator.net"
                className="text-primary-600 underline"
              >
                corrections@tiktokcalculator.net
              </a>
              . We review all source challenges against our quality hierarchy
              and update content when warranted. See our{' '}
              <Link
                href="/corrections-policy/"
                className="text-primary-600 underline"
              >
                corrections policy
              </Link>{' '}
              for response timelines.
            </p>
          </section>

          <section className="mt-10 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related Resources</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/editorial-policy/" className="btn btn-secondary btn-sm">
                Editorial Policy
              </Link>
              <Link href="/corrections-policy/" className="btn btn-secondary btn-sm">
                Corrections Policy
              </Link>
              <Link href="/methodology/" className="btn btn-secondary btn-sm">
                Methodology
              </Link>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
