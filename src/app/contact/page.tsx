import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Contact TT Calculator',
  description:
    'Contact TT Calculator to report an issue, request a tool, or ask a question about methodology, sources, or editorial updates.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/contact/',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TT Calculator',
  url: 'https://tiktokcalculator.net',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@tiktokcalculator.net',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      email: 'bugs@tiktokcalculator.net',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'press inquiries',
      email: 'press@tiktokcalculator.net',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <h1 className="text-display-sm font-bold text-neutral-900">Contact TT Calculator</h1>
          <p className="mt-4 text-body-md text-neutral-700">
            We read feedback from creators every week. If you find an error, have a methodology
            question, want to suggest a tool, or need help interpreting a result, email us and we
            will respond. TT Calculator is a working product, not a static brochure, and your
            feedback directly influences what we publish next.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Primary contact</h2>
            <p className="mt-3 text-sm text-neutral-700">
              Email:{' '}
              <a href="mailto:contact@tiktokcalculator.net" className="link">
                contact@tiktokcalculator.net
              </a>
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Response time: within 48 hours on business days.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If your message is time-sensitive (for example, a calculator bug that affects results),
              include "Urgent" in the subject line and include the full page URL where the issue
              appeared.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Inquiry types we handle</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                Data corrections and benchmark updates: send the page URL, the value you believe is
                incorrect, and a source we can verify.
              </li>
              <li>
                Methodology questions: ask how a specific calculator estimate is produced and which
                assumptions are used.
              </li>
              <li>
                Product feedback: feature ideas, UX issues, or requests for new tools.
              </li>
              <li>
                Partnerships and media: collaboration opportunities, licensing requests, and press
                interviews.
              </li>
              <li>
                Technical bug reports: input validation issues, result formatting issues, and broken
                links.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Specialized inboxes</h2>
            <div className="mt-3 space-y-3 text-sm text-neutral-700">
              <p>
                General support:{' '}
                <a href="mailto:contact@tiktokcalculator.net" className="link">
                  contact@tiktokcalculator.net
                </a>
              </p>
              <p>
                Bug reports:{' '}
                <a href="mailto:bugs@tiktokcalculator.net" className="link">
                  bugs@tiktokcalculator.net
                </a>
              </p>
              <p>
                Data and methodology:{' '}
                <a href="mailto:data@tiktokcalculator.net" className="link">
                  data@tiktokcalculator.net
                </a>
              </p>
              <p>
                Partnerships:{' '}
                <a href="mailto:business@tiktokcalculator.net" className="link">
                  business@tiktokcalculator.net
                </a>
              </p>
              <p>
                Press:{' '}
                <a href="mailto:press@tiktokcalculator.net" className="link">
                  press@tiktokcalculator.net
                </a>
              </p>
            </div>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Report an error</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If you spot a factual error, broken formula behavior, or outdated assumption, send us:
              the exact page URL, a short description of what appears incorrect, and any source or
              context that supports your claim. We prioritize corrections that impact calculator
              outputs and trust pages.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Our correction workflow is documented in the{' '}
              <Link href="/editorial-policy/" className="link">
                Editorial Policy
              </Link>
              . We log corrections, review assumptions, and republish affected pages when needed.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Before you email</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              You may get a faster answer by checking our trust pages first:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <Link href="/faq/" className="link">
                  FAQ
                </Link>{' '}
                for common questions about calculator accuracy and updates.
              </li>
              <li>
                <Link href="/methodology/" className="link">
                  Methodology
                </Link>{' '}
                for how assumptions are set and refreshed.
              </li>
              <li>
                <Link href="/privacy/" className="link">
                  Privacy Policy
                </Link>{' '}
                for data handling and cookie details.
              </li>
              <li>
                <Link href="/compliance/advertising-disclosure/" className="link">
                  Advertising Disclosure
                </Link>{' '}
                for details on how ads fund the site.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Important note</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator is an independent resource. We are not affiliated with, endorsed by,
              or sponsored by TikTok or ByteDance. Calculator outputs are estimates based on
              transparent assumptions and should not be treated as guaranteed income.
            </p>
          </section>
        </Container>
      </div>
    </>
  );
}
