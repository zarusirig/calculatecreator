import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Corrections Policy | CalculateCreator',
  description:
    'How CalculateCreator handles corrections, updates, and factual errors across calculators, guides, and data pages.',
  alternates: {
    canonical: 'https://calculatecreator.com/corrections-policy/',
  },
};

const LAST_UPDATED = 'February 20, 2026';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Corrections Policy',
  description:
    'How CalculateCreator handles corrections, updates, and factual errors across calculators, guides, and data pages.',
  url: 'https://calculatecreator.com/corrections-policy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'CalculateCreator',
    url: 'https://calculatecreator.com',
  },
};

export default function CorrectionsPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <h1 className="text-display-sm font-bold text-neutral-900">
            Corrections Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Last Updated: {LAST_UPDATED}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            CalculateCreator is committed to accuracy. When we get something wrong — whether
            it is a formula error, outdated data point, or misleading statement — we correct
            it promptly and transparently. This page explains how to report errors and how
            we handle corrections.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              1. How to Submit a Correction
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If you find an error on any CalculateCreator page, contact us at{' '}
              <a
                href="mailto:corrections@calculatecreator.com"
                className="text-primary-600 underline"
              >
                corrections@calculatecreator.com
              </a>{' '}
              or use our{' '}
              <Link href="/contact/" className="text-primary-600 underline">
                contact form
              </Link>
              . Please include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              <li>The URL of the page containing the error</li>
              <li>A description of what you believe is incorrect</li>
              <li>If possible, a source or reference supporting the correct information</li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              2. Evaluation Process
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every correction request is reviewed by the content author and, for financial
              or technical claims, by the assigned expert reviewer. We verify the reported
              error against our primary sources and, if confirmed, update the content.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              3. Types of Corrections
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-neutral-700">
              <li>
                <strong>Formula errors:</strong> Incorrect math or logic in calculator
                formulas. These are treated as high-priority and corrected within 24 hours.
              </li>
              <li>
                <strong>Data updates:</strong> Outdated rates, benchmarks, or statistics.
                Updated during our regular verification cycle or sooner if reported.
              </li>
              <li>
                <strong>Factual inaccuracies:</strong> Incorrect claims about TikTok
                policies, features, or processes. Corrected promptly with source
                attribution.
              </li>
              <li>
                <strong>Typographical errors:</strong> Spelling, grammar, or formatting
                issues. Fixed as part of routine maintenance.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              4. Response Timeline
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We aim to acknowledge correction requests within 48 hours and publish
              confirmed corrections within 5 business days. Formula errors that affect
              calculator output are prioritized and typically resolved within 24 hours.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              5. Correction Transparency
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              When a correction is made, we update the page content and adjust the
              &ldquo;Last verified&rdquo; date. For significant corrections (formula changes,
              major data updates), we add an entry to the page&rsquo;s change history log
              visible in the E-E-A-T section of each calculator page.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              6. What We Do Not Change
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We do not alter content based on:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              <li>Brand or advertiser pressure</li>
              <li>Disagreements about subjective strategy advice</li>
              <li>
                Requests to remove negative but accurate information about platforms or
                practices
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Our{' '}
              <Link
                href="/editorial-policy/"
                className="text-primary-600 underline"
              >
                editorial policy
              </Link>{' '}
              covers our independence standards in detail.
            </p>
          </section>

          <div className="mt-10 text-sm text-neutral-500">
            <p>
              Related:{' '}
              <Link
                href="/editorial-policy/"
                className="text-primary-600 underline"
              >
                Editorial Policy
              </Link>
              {' · '}
              <Link
                href="/sources-policy/"
                className="text-primary-600 underline"
              >
                Sources Policy
              </Link>
              {' · '}
              <Link
                href="/methodology/"
                className="text-primary-600 underline"
              >
                Methodology
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
