import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: 'Sources Policy | TT Calculator',
  description:
    'How TT Calculator selects, evaluates, and cites data sources for calculators, guides, and research pages, including the source quality hierarchy, citation standards, and the data the site does not use.',
  alternates: {
    canonical: 'https://ttcalculator.net/sources-policy/',
  },
};

const LAST_UPDATED = 'July 13, 2026';

const faqs = [
  {
    question: 'What sources does TT Calculator use?',
    answer:
      'TT Calculator uses official TikTok and ByteDance documentation, published benchmark research, aggregated public creator disclosures, and its own labeled modeling assumptions. Three classes are external and one is internal.',
  },
  {
    question: 'What happens when two sources disagree?',
    answer:
      'Conflicting figures display as a range with both sources cited, never as a single averaged number. For program terms, the higher-tier source wins outright, so official TikTok documentation overrides every lower tier.',
  },
  {
    question: 'Does TT Calculator use private TikTok data?',
    answer:
      'No. TT Calculator does not use confidential TikTok or ByteDance internal data, paywalled data, or unverifiable creator claims. Only public and community-reported data feed the calculators.',
  },
  {
    question: 'How does TT Calculator cite its sources?',
    answer:
      'Each calculator page lists primary sources with the source name, document title, publication date, access date, and a direct link where available in the E-E-A-T section.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sources Policy',
  description:
    'How TT Calculator selects, evaluates, and cites data sources for calculators, guides, and research pages, including the source quality hierarchy, citation standards, and the data the site does not use.',
  url: 'https://ttcalculator.net/sources-policy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://ttcalculator.net',
  },
};

const sourceTypes = [
  {
    term: 'Official platform documentation',
    detail:
      'TikTok Creator Portal, TikTok for Business, TikTok Ads Manager, and published policy announcements. These set program terms such as eligibility thresholds and are treated as ground truth.',
  },
  {
    term: 'Published benchmark research',
    detail:
      'Reports from Influencer Marketing Hub, Statista, DataReportal, and Social Blade, plus peer-reviewed academic work on creator economics. These anchor the market-rate ranges.',
  },
  {
    term: 'Public creator disclosures',
    detail:
      'Aggregated, anonymized earnings ranges shared by creators through surveys and community participation. These widen or sanity-check ranges and never stand alone.',
  },
  {
    term: 'TT Calculator assumptions',
    detail:
      'Modeled estimates developed by the specialist team and clearly labeled as estimates, never as confirmed figures. These fill the gaps the three external classes leave open.',
  },
];

const qualityHierarchy = [
  'Official TikTok documentation and policy pages',
  'Government and regulatory sources (IRS, FTC)',
  'Peer-reviewed or methodologically transparent research',
  'Established industry tracking platforms (Social Blade, Statista)',
  'Aggregated creator-reported data (minimum sample size: 50 creators)',
  'Individual creator reports (used directionally, not as primary evidence)',
];

const conflictRules = [
  'Program terms: the highest-tier source wins outright, so an official TikTok eligibility rule overrides every creator anecdote and blog summary.',
  'Market figures: the page publishes the span between credible endpoints as a low-to-high range, with each endpoint attributed to its source.',
  'Unresolvable conflicts: when no source passes the quality gates, the figure is removed rather than guessed.',
];

const citationComponents = [
  'Source name and publishing organization',
  'Document title and publication date',
  'Access date for the cited figure',
  'Direct link where a public URL exists',
];

const qualityGates = [
  'A named publisher: anonymous dashboard screenshots and unattributed forum posts fail this gate.',
  'A publication date: undated blog posts and evergreen pages without revision history fail this gate.',
  'Visible methodology: statistics quoted without sample size or collection method fail this gate.',
];

const evaluationCriteria = [
  'Publication date and recency against the current platform state',
  'Methodology transparency, including sample size and collection method',
  'Primary versus secondary status, favoring primary sources',
  'Reproducibility of the underlying numbers',
  'Conflict of interest or funding bias in the publishing organization',
];

const currencySchedule = [
  'RPM and payout rates: quarterly or when TikTok announces policy changes',
  'Engagement benchmarks: semi-annually, using fresh sample data',
  'Tax rates and brackets: annually, aligned with IRS publication updates',
  'Platform features and policies: within 7 days of announced changes',
];

const estimatePractices = [
  'Labels estimates and ranges as estimates, never as confirmed figures',
  'Explains the derivation method in each calculator methodology section',
  'Publishes a range rather than a single misleading point value',
  'Updates the estimate when better public data arrives',
];

const excludedData = [
  'Paywalled or private data not available to the public',
  'Unverifiable individual creator earnings claims',
  'Confidential TikTok or ByteDance internal data',
  'Leaked documents of unknown authenticity',
  'Advertiser-supplied statistics presented without methodology',
];

export default function SourcesPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FAQPageSchema faqs={faqs} />

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
            TT Calculator tools and content rely on verifiable data. This page lists the source types the
            site uses, ranks their reliability, sets the citation standard, explains how conflicts resolve,
            and names the data the site does not use. The modeling logic behind these sources appears in
            the{' '}
            <Link href="/methodology/" className="text-primary-600 underline">
              Methodology
            </Link>
            .
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              1. Source types
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator draws on <strong>four source categories</strong> across its calculators,
              guides, and benchmark pages. Three are external: official platform documentation, published
              benchmark research, and public creator disclosures. The fourth is internal: the site&rsquo;s
              own labeled modeling assumptions.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-neutral-700">
              {sourceTypes.map((item) => (
                <li key={item.term}>
                  <strong>{item.term}:</strong> {item.detail}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Each category carries a different level of authority, which the quality hierarchy below
              resolves.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              2. Source quality hierarchy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              When sources conflict, TT Calculator resolves disagreements using this priority order:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-sm text-neutral-700">
              {qualityHierarchy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The hierarchy works the same way at every level: a TikTok eligibility rule beats a creator
              anecdote, an IRS bracket table beats a blog summary of tax rates, and a Statista dataset
              beats an unattributed forum figure.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              3. How conflicting sources are shown
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Conflicting sources display as a <strong>range, never as a single averaged number</strong>.
              Averaging two conflicting figures produces a value no source ever published, so the site
              shows the span and cites both endpoints instead. Three rules govern the handling:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {conflictRules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Combining many individual creator reports into one assumption band is a separate modeling
              step, not a conflict resolution. That aggregation process, including how band spreads widen
              with source uncertainty, is documented in the{' '}
              <Link href="/methodology/" className="text-primary-600 underline">
                Methodology
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              4. Citation standards
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every citation carries <strong>four components</strong> in a fixed order: publisher first,
              then document title with publication date, then access date, then link.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {citationComponents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              All citations appear in the E-E-A-T section at the bottom of each calculator and guide page,
              so readers verify any number against its origin without leaving the page. A figure without a
              qualifying citation does not publish; it is either re-sourced or cut.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              5. Source evaluation criteria
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              A source enters evaluation only after passing <strong>three minimum quality gates</strong>:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {qualityGates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Sources that pass the gates then face a five-point evaluation against the current platform
              state. A source that fails any point drops to a lower tier or leaves the page entirely.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {evaluationCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              6. Source currency
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The creator economy changes rapidly. TT Calculator verifies key data points on this schedule:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {currencySchedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Each calculator page displays a &ldquo;Last verified&rdquo; date indicating when its data was
              last confirmed accurate. When a benchmark publisher releases a new edition, the old citation
              swaps out during the next scheduled review rather than lingering beside fresher data.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              7. Undisclosed data
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TikTok does not publicly disclose exact Creator Fund RPM rates, algorithm weights, or gift
              revenue-share percentages. When TT Calculator fills an undisclosed value, the team labels it
              as an estimate and follows four practices:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {estimatePractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              8. What we do not use
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator excludes data that readers cannot verify or that carries conflicts of interest.
              The following five categories never feed a calculator:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {excludedData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The exclusion holds even when excluded data agrees with published sources. A number readers
              cannot check adds risk without adding evidence.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              9. Reference data and methodology
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator publishes its modeling assumptions and ranges alongside each tool rather than
              hiding them. The{' '}
              <Link href="/methodology/" className="text-primary-600 underline">
                Methodology
              </Link>{' '}
              page explains how assumptions are built, refreshed, and bounded.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Readers who want the underlying figures find them in the{' '}
              <Link href="/data/reference/" className="text-primary-600 underline">
                reference data
              </Link>{' '}
              hub and in the citations section of each calculator page.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              10. Challenging our sources
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Readers who find a source outdated, misrepresented, or unreliable contact{' '}
              <a
                href="mailto:corrections@ttcalculator.net"
                className="text-primary-600 underline"
              >
                corrections@ttcalculator.net
              </a>
              . The team reviews every challenge against the quality hierarchy and updates content when
              warranted. Response timelines appear in the{' '}
              <Link href="/corrections-policy/" className="text-primary-600 underline">
                Corrections Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Frequently asked questions</h2>
            <div className="mt-4 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-heading-sm font-semibold text-neutral-900">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{faq.answer}</p>
                </div>
              ))}
            </div>
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
