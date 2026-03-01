import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: "Advertising Disclosure and CalculateCreator Platform Details",
  description: "Review advertising disclosure information for CalculateCreator, including policy context, methodology transparency, and practical guidance for",
  alternates: {
    canonical: 'https://calculatecreator.com/compliance/advertising-disclosure/',
  },
};

const LAST_UPDATED = 'March 1, 2026';
const advertisingDisclosureSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Advertising Disclosure',
  description:
    'Advertising Disclosure for calculatecreator.com explaining AdSense usage, editorial independence, and monetization transparency.',
  url: 'https://calculatecreator.com/compliance/advertising-disclosure/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'CalculateCreator',
    url: 'https://calculatecreator.com',
  },
};

export default function AdvertisingDisclosurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(advertisingDisclosureSchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
        <Breadcrumb
          items={[
            { label: 'Compliance', href: '/compliance/' },
            { label: 'Advertising Disclosure', href: '/compliance/advertising-disclosure/' },
          ]}
        />
        <h1 className="text-display-sm font-bold text-neutral-900">Advertising Disclosure</h1>
        <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

        <p className="mt-5 text-sm leading-relaxed text-neutral-700">
          CalculateCreator is funded in part through advertising. This page explains how ads appear
          on calculatecreator.com, how advertising affects (and does not affect) our content, and
          what controls are available to users.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          We publish this disclosure to make monetization visible, not hidden. Readers should be
          able to understand how CalculateCreator earns revenue and where those decisions are kept
          separate from editorial and calculator methodology.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. How we make money</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We monetize primarily through display advertising. Ads help cover editorial work,
            calculator development, infrastructure, and maintenance so our tools remain publicly
            accessible. We do not charge users to run core calculators.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We may also evaluate additional monetization models over time. If those models are
            introduced, we update this page and related trust pages.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Revenue is used to fund product development, content refresh cycles, technical audits,
            hosting, and ongoing quality improvements across calculator and guide pages.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. About our ads (Google AdSense)</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            CalculateCreator uses Google AdSense for display advertising. AdSense may use cookies and
            related technologies to serve personalized or non-personalized ads depending on your
            consent settings and region.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            You can review and manage ad preferences at{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="link">
              https://adssettings.google.com
            </a>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            You can also use industry opt-out controls through the Network Advertising Initiative at{' '}
            <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="link">
              https://optout.networkadvertising.org
            </a>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Depending on your region and consent state, ads may be personalized or non-personalized.
            Our consent flow is described in our{' '}
            <Link href="/privacy/" className="link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Ads do not influence editorial decisions</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Advertising does not determine calculator assumptions, benchmark ranges, or editorial
            recommendations. We separate monetization from content logic and policy decisions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our editorial principles and correction process are documented in our{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We also avoid ad placements that create confusion around interactive controls. On
            calculator pages, ad zones are intentionally separated from input fields and primary
            action buttons.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Affiliate links</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            As of this update, CalculateCreator primarily relies on display advertising. If we add
            affiliate links on specific pages, we disclose that relationship clearly on-page and in
            this policy. Presence of affiliate monetization, where used, does not change editorial
            evaluation standards.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. FTC compliance statement</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We follow Federal Trade Commission (FTC) disclosure principles by clearly communicating
            material monetization relationships and by avoiding deceptive content framing.
            Advertising and any future affiliate relationships are disclosed so users can evaluate
            content context transparently.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our objective is simple: users should never have to guess whether a page is monetized.
            We keep disclosure language visible, plain, and consistent with U.S. advertising
            disclosure expectations.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Related Resources and policy links</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            For advertising or disclosure questions, contact{' '}
            <a href="mailto:contact@calculatecreator.com" className="link">
              contact@calculatecreator.com
            </a>
            .
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>
              <Link href="/privacy/" className="link">
                Privacy Policy
              </Link>{' '}
              for cookie and data processing details.
            </li>
            <li>
              <Link href="/editorial-policy/" className="link">
                Editorial Policy
              </Link>{' '}
              for independence and correction standards.
            </li>
            <li>
              <Link href="/contact/" className="link">
                Contact
              </Link>{' '}
              for support and compliance requests.
            </li>
          </ul>
        </section>
        </Container>
      </div>
    </>
  );
}
