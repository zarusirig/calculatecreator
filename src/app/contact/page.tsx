import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Contact TT Calculator',
  description:
    'Contact TT Calculator to report an issue, request a tool, or ask a question about methodology, sources, or editorial updates.',
  alternates: {
    canonical: 'https://ttcalculator.net/contact/',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TT Calculator',
  url: 'https://ttcalculator.net',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@ttcalculator.net',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      email: 'bugs@ttcalculator.net',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'press inquiries',
      email: 'press@ttcalculator.net',
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
            TT Calculator reads creator feedback every week. Use this page to report an error, ask a
            methodology question, suggest a tool, request an accessibility fix, or send a
            partnership note. TT Calculator is a working product, not a static brochure, and reader
            feedback shapes what we publish next.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Primary contact</h2>
            <p className="mt-3 text-sm text-neutral-700">
              Email:{' '}
              <a href="mailto:contact@ttcalculator.net" className="link">
                contact@ttcalculator.net
              </a>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We review every message. <strong>Most replies take one to two business days</strong>;
              methodology and sourcing questions take longer because they require research.
              Time-sensitive calculator bugs are triaged first. Include the word &quot;Urgent&quot;
              and the full page URL in the subject line so the issue routes to the right desk fast.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              Inquiry types we handle
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <strong>Data corrections and benchmark updates:</strong> send the page URL, the
                value you believe is incorrect, and a source we can verify.
              </li>
              <li>
                <strong>Methodology questions:</strong> ask how a specific calculator estimate is
                produced and which assumptions apply.
              </li>
              <li>
                <strong>Product feedback:</strong> feature ideas, UX issues, and requests for new
                tools.
              </li>
              <li>
                <strong>Partnerships and press:</strong> collaboration opportunities, licensing
                requests, and interviews.
              </li>
              <li>
                <strong>Technical bug reports:</strong> input validation issues, result formatting
                errors, and broken links.
              </li>
              <li>
                <strong>Accessibility feedback:</strong> screen-reader problems, contrast issues, and
                keyboard navigation gaps.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Specialized inboxes</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Routing a message to the right inbox speeds up the response. Every inbox is monitored:
            </p>
            <div className="mt-3 space-y-3 text-sm text-neutral-700">
              <p>
                General support:{' '}
                <a href="mailto:contact@ttcalculator.net" className="link">
                  contact@ttcalculator.net
                </a>
              </p>
              <p>
                Bug reports:{' '}
                <a href="mailto:bugs@ttcalculator.net" className="link">
                  bugs@ttcalculator.net
                </a>
              </p>
              <p>
                Data and methodology:{' '}
                <a href="mailto:data@ttcalculator.net" className="link">
                  data@ttcalculator.net
                </a>
              </p>
              <p>
                Partnerships:{' '}
                <a href="mailto:business@ttcalculator.net" className="link">
                  business@ttcalculator.net
                </a>
              </p>
              <p>
                Press:{' '}
                <a href="mailto:press@ttcalculator.net" className="link">
                  press@ttcalculator.net
                </a>
              </p>
            </div>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Report an error</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If you spot a factual error, broken formula behavior, or outdated assumption, send
              three things: the exact page URL, a short description of what appears incorrect, and
              any source or context that supports your claim. We prioritize corrections that impact
              calculator outputs and trust pages.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The correction workflow, including how we log fixes and republish affected pages, is
              documented in the{' '}
              <Link href="/corrections-policy/" className="link">
                Corrections Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              What we can and cannot fix
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We fix calculator bugs, stale assumptions, formatting errors, and clarity gaps. We
              also add requested tools when the use case fits our coverage areas. We do not adjust
              estimates to match a single creator&apos;s payout, because our models represent
              directional ranges, not individual account data.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              For decisions with legal or tax impact, consult a qualified advisor. TT Calculator
              provides planning estimates, not professional advice.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Before you email</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The fastest answer often lives on a trust page already:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <Link href="/faq/" className="link">
                  Frequently Asked Questions
                </Link>{' '}
                for common questions about calculator accuracy, privacy, and updates.
              </li>
              <li>
                <Link href="/methodology/" className="link">
                  Methodology
                </Link>{' '}
                for how assumptions are set and refreshed.
              </li>
              <li>
                <Link href="/corrections-policy/" className="link">
                  Corrections Policy
                </Link>{' '}
                for how error reports are triaged and resolved.
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
                for how ads fund the site.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              Independence and limitations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator is an independent resource. We are not affiliated with, endorsed by, or
              sponsored by TikTok or ByteDance, and we have no access to individual account data.
              Calculator outputs are estimates based on transparent assumptions, not guaranteed
              income. We do not offer a phone line or physical mailing address; email is the contact
              channel.
            </p>
          </section>
        </Container>
      </div>
    </>
  );
}
