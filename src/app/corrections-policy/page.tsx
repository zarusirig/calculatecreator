import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: 'Corrections Policy | TT Calculator',
  description:
    'How TT Calculator identifies, reports, verifies, and logs corrections across calculators, guides, and data pages, including response timelines and the difference between public correction notes and silent updates.',
  alternates: {
    canonical: 'https://ttcalculator.net/corrections-policy/',
  },
};

const LAST_UPDATED = 'July 10, 2026';

const faqs = [
  {
    question: 'How do I report an error on TT Calculator?',
    answer:
      'Email corrections@ttcalculator.net or use the contact page with the page URL, the incorrect item, and a supporting source. The target acknowledgment window is 48 hours.',
  },
  {
    question: 'How long does a correction take?',
    answer:
      'Acknowledgment targets 48 hours, and confirmed corrections publish within 5 business days. Formula errors that affect calculator output target a 24-hour fix.',
  },
  {
    question: 'Does TT Calculator show its corrections?',
    answer:
      'Material corrections appear in the change history inside each calculator E-E-A-T section. Typographical and routine updates apply silently without a log entry.',
  },
  {
    question: 'Can a sponsor or advertiser change a correction?',
    answer:
      'No. TT Calculator does not alter content for brand, advertiser, or sponsor pressure. Independence standards are documented in the editorial policy.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Corrections Policy',
  description:
    'How TT Calculator identifies, reports, verifies, and logs corrections across calculators, guides, and data pages, including response timelines and the difference between public correction notes and silent updates.',
  url: 'https://ttcalculator.net/corrections-policy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://ttcalculator.net',
  },
};

const reportSteps = [
  'Copy the URL of the page containing the error.',
  'Describe the incorrect value, statement, or formula behavior.',
  'Attach a source that supports the correct information, such as an official doc or benchmark report.',
  'Send the report to corrections@ttcalculator.net or through the contact page.',
];

const workflowSteps = [
  'Log the report and assign it to the content author.',
  'Verify the error against the primary source.',
  'Route financial or technical claims to the assigned expert reviewer.',
  'Update the content and run boundary-value tests on affected calculators.',
  'Refresh the last-verified date and record the change in the page log.',
];

const correctionTypes = [
  {
    term: 'Formula errors',
    detail:
      'Incorrect math or logic in a calculator. These take priority with a 24-hour resolution target.',
  },
  {
    term: 'Data updates',
    detail:
      'Outdated rates, benchmarks, or statistics. These update in the regular verification cycle or sooner when reported.',
  },
  {
    term: 'Factual inaccuracies',
    detail:
      'Incorrect claims about TikTok policies, features, or processes. These correct promptly with source attribution.',
  },
  {
    term: 'Typographical errors',
    detail: 'Spelling, grammar, or formatting issues. These fix in routine maintenance.',
  },
];

const publicNotes = [
  'Formula changes that alter calculator output',
  'Material corrections to published rates, ranges, or benchmarks',
  'Factual corrections to platform policy or feature descriptions',
];

const silentUpdates = [
  'Typographical, grammar, and formatting fixes',
  'Clarifying rewording that preserves the original meaning',
  'Routine refreshes of dates, links, and non-substantive copy',
];

const updateCadence = [
  'Calculator assumptions: reviewed weekly',
  'Rates and benchmarks: reviewed quarterly or on platform announcement',
  'Tax rates and brackets: reviewed annually alongside IRS updates',
  'Trust and policy pages: reviewed at least quarterly',
];

export default function CorrectionsPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FAQPageSchema faqs={faqs} />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <Breadcrumb items={[{ label: 'Corrections Policy', href: '/corrections-policy/' }]} />
          <h1 className="text-display-sm font-bold text-neutral-900">
            Corrections Policy
          </h1>
          <div className="mt-3 text-sm text-neutral-600">
            Last Updated: {LAST_UPDATED}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            TT Calculator holds every TikTok calculator, guide, and data page to one accuracy standard.
            When a formula error, outdated data point, or misleading statement appears, the team corrects it
            promptly and records the change. This page explains how errors are identified, how to report one,
            and how corrections are logged.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              1. How errors are identified
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator discovers errors through four channels: reader reports, scheduled source reviews,
              quarterly content audits, and automated formula tests. Reader reports catch most factual issues,
              and scheduled reviews catch stale rates and benchmarks before readers notice them.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The team monitors official TikTok and ByteDance announcements for policy or payout changes that
              invalidate existing assumptions. When an announcement lands, the affected pages enter the
              correction queue automatically.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Quarterly audits target three high-risk areas: payout formula pages after TikTok program
              changes, tax calculator pages at the start of each calendar year, and benchmark tables that
              depend on third-party reports.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              2. How to report an error
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Reporting an error takes one message. Send it to{' '}
              <a
                href="mailto:corrections@ttcalculator.net"
                className="text-primary-600 underline"
              >
                corrections@ttcalculator.net
              </a>{' '}
              or through the{' '}
              <Link href="/contact/" className="text-primary-600 underline">
                Contact
              </Link>{' '}
              page using these steps:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-sm text-neutral-700">
              {reportSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              3. Correction workflow
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every confirmed report follows the same five-step path from intake to republication.
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-sm text-neutral-700">
              {workflowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              4. Types of corrections
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-neutral-700">
              {correctionTypes.map((item) => (
                <li key={item.term}>
                  <strong>{item.term}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              5. Correction notes vs silent updates
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Corrections fall into two classes based on whether the change affects a published value or
              formula result. A public correction note is logged when the substance changes; a silent update
              covers routine maintenance.
            </p>
            <p className="mt-3 text-sm font-medium text-neutral-900">Public correction note (logged):</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {publicNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-medium text-neutral-900">Silent update (routine):</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {silentUpdates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              6. Response timeline
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The target acknowledgment window is <strong>48 hours</strong>. Confirmed corrections publish
              within <strong>5 business days</strong>. Formula errors that affect calculator output take
              priority with a <strong>24-hour</strong> resolution target.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              7. Update cadence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Correction requests run alongside a scheduled review cycle, so pages refresh even without an
              inbound report. The full assumption-refresh process appears in the{' '}
              <Link href="/methodology/" className="text-primary-600 underline">
                Methodology
              </Link>
              .
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {updateCadence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              8. Change log and transparency
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Public correction notes appear in the change history inside each calculator&rsquo;s E-E-A-T
              section. Each entry records what changed, when it changed, and which source drove the
              correction. Silent updates do not generate a log entry.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Historical entries stay visible so readers trace how a calculator&rsquo;s assumptions evolved
              over time. The supporting data behind each correction follows the standards in the{' '}
              <Link href="/sources-policy/" className="text-primary-600 underline">
                Sources Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              9. What we do not change
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator does not alter content for:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              <li>Brand or advertiser pressure</li>
              <li>Disagreements about subjective strategy advice</li>
              <li>
                Requests to remove accurate but unflattering information about platforms or practices
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Independence standards are documented in the{' '}
              <Link href="/editorial-policy/" className="text-primary-600 underline">
                Editorial Policy
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
              <Link href="/sources-policy/" className="btn btn-secondary btn-sm">
                Sources Policy
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
