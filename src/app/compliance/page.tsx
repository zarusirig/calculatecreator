import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Compliance & Disclosures | TT Calculator',
  description:
    'Compliance hub for TT Calculator: advertising and sponsorship disclosures plus editorial, corrections, and sources policies.',
  alternates: {
    canonical: 'https://ttcalculator.net/compliance/',
  },
};

const LAST_UPDATED = 'July 9, 2026';

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
];

const complianceSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Compliance & Disclosures',
  description:
    'Compliance hub covering advertising and sponsorship disclosures plus editorial, corrections, and sources policies for ttcalculator.net.',
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

export default function CompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(complianceSchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <Breadcrumb items={[{ label: 'Compliance', href: '/compliance/' }]} />
          <h1 className="text-display-sm font-bold text-neutral-900">Compliance &amp; Disclosures</h1>
          <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

          <p className="mt-5 text-sm leading-relaxed text-neutral-700">
            This hub gathers the transparency and disclosure documents that govern how TT Calculator
            operates. We publish advertising and sponsorship disclosures so readers always know how
            the site is funded, and we keep monetization decisions separate from calculator
            assumptions and editorial positions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We are NOT affiliated with, endorsed by, or sponsored by TikTok or ByteDance. Brand,
            platform, and program names are used descriptively.
          </p>

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
              .
            </p>
          </section>
        </Container>
      </div>
    </>
  );
}
