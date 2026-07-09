import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: 'Compliance & Disclosures | TT Calculator',
  description:
    'Compliance hub for TT Calculator: content standards, advertising and affiliate disclosure, data handling, accessibility, the TikTok trademark notice, and links to editorial, sources, corrections, and methodology policies.',
  alternates: {
    canonical: 'https://ttcalculator.net/compliance/',
  },
};

const LAST_UPDATED = 'July 10, 2026';

const disclosures = [
  {
    href: '/compliance/advertising-disclosure/',
    title: 'Advertising Disclosure',
    description:
      'How TT Calculator earns advertising revenue, where ads appear, and how monetization stays separated from calculator logic and editorial positions.',
  },
  {
    href: '/compliance/sponsorship-disclosure/',
    title: 'Sponsorship Disclosure',
    description:
      'When sponsored placements or affiliate relationships apply, how they are labeled, and the standards we hold sponsored content to.',
  },
];

const relatedPolicies = [
  {
    href: '/editorial-policy/',
    title: 'Editorial Policy',
    description: 'How we research, write, review, and update content.',
  },
  {
    href: '/corrections-policy/',
    title: 'Corrections Policy',
    description: 'How we handle error reports and content fixes.',
  },
  {
    href: '/sources-policy/',
    title: 'Sources Policy',
    description: 'How we evaluate and document data sources.',
  },
  {
    href: '/methodology/',
    title: 'Methodology',
    description: 'How we build calculator assumptions and refresh ranges.',
  },
];

const faqs = [
  {
    question: 'Is TT Calculator affiliated with TikTok or ByteDance?',
    answer:
      'No. TT Calculator is independent and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. Platform names appear for descriptive identification only, and all trademarks belong to their respective owners.',
  },
  {
    question: 'How does TT Calculator make money?',
    answer:
      'TT Calculator earns revenue through display advertising served by Google AdSense. Advertising does not influence calculator assumptions, benchmark ranges, or editorial positions.',
  },
  {
    question: 'Does TT Calculator sell user data?',
    answer:
      'No. TT Calculator does not sell user data. Calculator inputs run client-side in the browser, and cookies and data processing are documented in the Privacy Policy.',
  },
  {
    question: 'How often are trust and policy pages reviewed?',
    answer:
      'Policy and trust pages are reviewed at least quarterly. Calculator assumptions are reviewed weekly, and platform policy changes are reflected within 7 days of an official announcement.',
  },
];

const complianceSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Compliance & Disclosures',
  description:
    'Compliance hub covering content standards, advertising and sponsorship disclosures, data handling, accessibility, and the TikTok trademark notice, plus editorial, corrections, sources, and methodology policies for ttcalculator.net.',
  url: 'https://ttcalculator.net/compliance/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://ttcalculator.net',
  },
  hasPart: [...disclosures, ...relatedPolicies].map((item) => ({
    '@type': 'WebPage',
    name: item.title,
    url: `https://ttcalculator.net${item.href}`,
  })),
};

const contentStandards = [
  'A documented source for every quantitative claim',
  'An explicit assumption block on each calculator',
  'Reviewer sign-off on financial and technical claims',
  'A visible last-updated or last-verified date',
];

const updateCadence = [
  'Policy and trust pages: reviewed at least quarterly',
  'Calculator assumptions: reviewed weekly, prioritized on platform changes',
  'Tax rates and brackets: reviewed annually alongside IRS publication cycles',
  'Platform features and policies: updated within 7 days of an official announcement',
];

export default function CompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(complianceSchema) }}
      />
      <FAQPageSchema faqs={faqs} />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <Breadcrumb items={[{ label: 'Compliance', href: '/compliance/' }]} />
          <h1 className="text-display-sm font-bold text-neutral-900">Compliance &amp; Disclosures</h1>
          <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            This hub gathers the transparency and disclosure documents that govern how TT Calculator
            operates. Advertising and sponsorship disclosures make the site&rsquo;s funding model visible,
            and monetization decisions stay separate from calculator assumptions and editorial positions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator is <strong>independent</strong> and is not affiliated with, endorsed by, or
            sponsored by TikTok or ByteDance. Brand, platform, and program names appear on this site for
            descriptive identification only.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Content standards</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator applies one editorial standard to every calculator, guide, and benchmark page.
              Each page moves through a four-stage workflow: research, drafting, expert review, then
              publication. Financial and technical claims require reviewer sign-off before release.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every page carries a visible last-updated date, and every calculator exposes its assumptions
              inline so readers can stress-test the inputs. Pages that outlive their source data get revised
              or retired rather than left stale. The full workflow and independence standards appear in the{' '}
              <Link href="/editorial-policy/" className="link">
                Editorial Policy
              </Link>
              .
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">Every published page meets four requirements:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {contentStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Advertising and affiliate disclosure</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Display advertising funds TT Calculator. Google AdSense serves the ads, and ad placements sit
              apart from calculator inputs and action buttons so monetization never touches formula logic.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator does not run affiliate links at scale today. If a page adds an affiliate
              relationship, the relationship is labeled on-page and recorded in this hub, and presence of
              monetization never changes editorial evaluation standards. The{' '}
              <Link href="/compliance/advertising-disclosure/" className="link">
                Advertising Disclosure
              </Link>{' '}
              details ad type, placement, and user controls.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Data handling and privacy</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Calculator inputs stay in the browser. The core tools run client-side and require no account
              creation, so earnings estimates never leave the device unless a user explicitly submits a
              contact request.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator does not sell user data. Analytics and ad measurement operate under a documented
              consent flow, and personalization follows the user&rsquo;s region and consent state. Cookies,
              consent, and data processing are documented in full in the{' '}
              <Link href="/privacy/" className="link">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Accessibility</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator targets <strong>WCAG 2.1 Level AA</strong> conformance as its design baseline.
              Pages use semantic HTML, sufficient color contrast, keyboard-navigable controls, and text
              alternatives for meaningful icons.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Calculator outputs render as plain text and structured tables rather than images, so screen
              readers reach the numbers directly. Accessibility is treated as ongoing maintenance rather than
              a one-time audit, and reported barriers enter the standard correction queue through the{' '}
              <Link href="/contact/" className="link">
                Contact
              </Link>{' '}
              page.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">TikTok trademark notice</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator is an independent site and is not affiliated with, endorsed by, or sponsored by
              TikTok or ByteDance. The names &ldquo;TikTok,&rdquo; &ldquo;ByteDance,&rdquo; and related
              program names appear on this site only for descriptive identification of the platform the tools
              model.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              All trademarks, service marks, and brand names belong to their respective owners. Nothing on
              ttcalculator.net implies partnership, certification, or data access from TikTok or ByteDance.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The calculators use public benchmarks and the site&rsquo;s own modeling assumptions, not
              proprietary TikTok data. TikTok does not publish exact Creator Fund RPM rates, algorithm
              weights, or gift revenue-share percentages, so those inputs remain labeled estimates.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Policy update cadence</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Compliance and trust content follows a fixed review calendar rather than ad-hoc edits. The
              site applies four review cycles across its pages.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-sm text-neutral-700">
              {updateCadence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-heading-md font-semibold text-neutral-900">Disclosures</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {disclosures.map((item) => (
                <Link key={item.href} href={item.href} className="card p-6 block hover:border-primary-300">
                  <h3 className="text-heading-sm font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary-600">Read more →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related policies</h2>
            <ul className="mt-4 space-y-3">
              {relatedPolicies.map((item) => (
                <li key={item.href} className="card p-5">
                  <Link href={item.href} className="link font-semibold">
                    {item.title}
                  </Link>
                  <span className="text-sm text-neutral-700"> — {item.description}</span>
                </li>
              ))}
            </ul>
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

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Questions or corrections</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              For disclosure questions, corrections, or compliance concerns, email{' '}
              <a href="mailto:contact@ttcalculator.net" className="link">
                contact@ttcalculator.net
              </a>{' '}
              or visit{' '}
              <Link href="/contact/" className="link">
                Contact
              </Link>
              . The{' '}
              <Link href="/corrections-policy/" className="link">
                Corrections Policy
              </Link>{' '}
              documents the review and response timeline.
            </p>
          </section>
        </Container>
      </div>
    </>
  );
}
