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

const LAST_UPDATED = 'July 13, 2026';

const faqs = [
  {
    question: 'How do I report an error on TT Calculator?',
    answer:
      'Email corrections@ttcalculator.net or bugs@ttcalculator.net, or use the contact page. Include the page URL, the incorrect item, and a supporting source. All inboxes feed the same triage queue, and acknowledgment targets 48 hours.',
  },
  {
    question: 'How long does a correction take?',
    answer:
      'Acknowledgment targets 48 hours, and confirmed corrections publish within 5 business days. Formula errors that affect calculator output target a 24-hour fix.',
  },
  {
    question: 'Does TT Calculator show its corrections?',
    answer:
      'Material corrections appear in the change history inside each calculator E-E-A-T section. Each entry records what changed, when it changed, and which source drove the change. Typographical and routine updates apply silently without a log entry.',
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
  'Report: the message is logged, given an owner, and sorted by type within 1 business day.',
  'Triage: the owner classifies the report into a severity tier and sets a resolution target.',
  'Verify: the claim is checked against the primary source, and financial or technical claims route to the assigned expert reviewer.',
  'Fix: the content or formula updates, and affected calculators re-run boundary-value tests.',
  'Log: the last-verified date refreshes, and material changes enter the page change log.',
];

const severityTiers = [
  {
    name: 'Tier 1: Formula and factual errors',
    target: '24 hours for formulas, 5 business days for factual claims',
    covers:
      'Incorrect math or logic in a calculator, plus wrong claims about TikTok policies, features, or payout processes.',
    steps: [
      'Verify the correct value against official TikTok documentation or another primary source.',
      'Fix the formula or claim, then re-run boundary-value tests on every affected calculator.',
      'Publish a correction note in the page change log with source attribution.',
    ],
  },
  {
    name: 'Tier 2: Stale benchmarks and data',
    target: 'next scheduled verification cycle, or sooner when reported',
    covers:
      'Outdated RPM rates, engagement benchmarks, brand deal bands, and third-party statistics that a newer report has replaced.',
    steps: [
      'Pull the latest edition of the benchmark report or dataset.',
      'Update the published range and refresh the last-verified date.',
      'Log the change when the range moves; apply it silently when the range holds.',
    ],
  },
  {
    name: 'Tier 3: Typos and formatting',
    target: 'routine maintenance',
    covers:
      'Spelling, grammar, punctuation, and layout issues that change no published value or formula result.',
    steps: [
      'Fix the text in the next scheduled maintenance pass.',
      'Batch similar fixes across pages to keep copy consistent.',
      'Skip the change log, because no substance changed.',
    ],
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

const logExamples = [
  'A payout range widened after a quarterly benchmark refresh',
  'A formula fix that changed calculator output for a specific input band',
  'A rewritten description of a TikTok program rule after a policy announcement',
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
            When a formula error, outdated data point, or misleading statement appears, the team corrects
            it and records the change. This page explains how errors are found, how to report one, how
            each severity tier is handled, and what gets logged.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              1. How errors are identified
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator finds errors through <strong>four channels</strong>: reader reports, scheduled
              source reviews, quarterly content audits, and automated formula tests. Reader reports catch
              most factual issues. Scheduled reviews catch stale rates and benchmarks before readers notice
              them.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The team monitors official TikTok and ByteDance announcements for policy or payout changes
              that invalidate existing assumptions. When an announcement lands, the affected pages enter
              the correction queue automatically.
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
              Three inboxes accept error reports, and all three feed one triage queue.{' '}
              <a
                href="mailto:corrections@ttcalculator.net"
                className="text-primary-600 underline"
              >
                corrections@ttcalculator.net
              </a>{' '}
              handles content and data errors,{' '}
              <a href="mailto:bugs@ttcalculator.net" className="text-primary-600 underline">
                bugs@ttcalculator.net
              </a>{' '}
              handles calculator behavior, and{' '}
              <a href="mailto:contact@ttcalculator.net" className="text-primary-600 underline">
                contact@ttcalculator.net
              </a>{' '}
              handles everything else. The{' '}
              <Link href="/contact/" className="text-primary-600 underline">
                Contact
              </Link>{' '}
              page works for all three purposes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              A complete report takes four steps:
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-sm text-neutral-700">
              {reportSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Calculator bug reports that include the page URL, the input values used, and the expected
              result usually resolve in <strong>one reply</strong>. Reports missing a supporting source
              still get reviewed; verification just takes longer.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              3. Correction workflow
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every confirmed report follows the same <strong>five-step path</strong>: report, triage,
              verify, fix, log.
            </p>
            <ol className="mt-3 list-decimal pl-6 space-y-1 text-sm text-neutral-700">
              {workflowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              No step is skipped for speed. A Tier 1 formula fix compresses the five steps into 24 hours;
              a Tier 3 typo runs the same path inside a maintenance batch.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              4. Severity tiers and how each is handled
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Reports sort into <strong>three severity tiers</strong>, and each tier carries its own
              resolution target and handling steps. Severity depends on one question: does the error
              change a number, formula result, or factual claim a reader acts on?
            </p>
            <div className="mt-4 space-y-5">
              {severityTiers.map((tier) => (
                <div key={tier.name}>
                  <h3 className="text-heading-sm font-semibold text-neutral-900">{tier.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    <strong>Target: {tier.target}.</strong> Covers: {tier.covers}
                  </p>
                  <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-neutral-700">
                    {tier.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              5. Correction notes vs silent updates
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Corrections fall into two classes based on whether the change affects a published value or
              formula result. A public correction note is logged when the substance changes; a silent
              update covers routine maintenance.
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
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Triage happens within <strong>1 business day</strong> of receipt, and most email replies
              arrive within 1 to 2 business days. Corrections that require fresh research, such as sourcing
              a replacement benchmark, take 3 to 5 business days.
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
              Every public correction note records <strong>three fields</strong>: what changed, when it
              changed, and which source drove the correction. The notes appear in the change history inside
              each calculator&rsquo;s E-E-A-T section. Silent updates do not generate a log entry.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Three examples of changes that generate a log entry:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {logExamples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
              A rejected correction request still gets a reply that explains the decision. Independence
              standards are documented in the{' '}
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
