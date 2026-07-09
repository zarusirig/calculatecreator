import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Advertising Disclosure | TT Calculator',
  description:
    'See how TT Calculator handles ads, monetization, and editorial independence across calculators, guides, and benchmark content.',
  alternates: {
    canonical: 'https://ttcalculator.net/compliance/advertising-disclosure/',
  },
};

const LAST_UPDATED = 'March 1, 2026';
const advertisingDisclosureSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Advertising Disclosure',
  description:
    'Advertising Disclosure for ttcalculator.net explaining AdSense usage, editorial independence, and monetization transparency.',
  url: 'https://ttcalculator.net/compliance/advertising-disclosure/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://ttcalculator.net',
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
          TT Calculator earns revenue through display advertising. This page names the ad network
          used, states where ads appear and where they are blocked, explains how editorial content
          stays separate from ads, and confirms the site&apos;s independence from TikTok.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          The disclosure makes monetization visible rather than hidden. Readers understand how TT
          Calculator earns revenue and where those decisions stay separate from editorial and
          calculator methodology.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. How TT Calculator makes money</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Display advertising is the primary revenue source. Ads fund editorial work, calculator
            development, infrastructure, and maintenance so the tools stay publicly accessible. Core
            calculators charge users nothing to run.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Additional monetization models are evaluated over time. Any new model introduced appears
            on this page and on the related trust pages before it goes live.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Revenue funds product development, content refresh cycles, technical audits, hosting, and
            ongoing quality improvements across calculator and guide pages.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. Google AdSense usage</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator serves display ads through{' '}
            <strong className="font-semibold text-neutral-900">Google AdSense</strong>. The site&apos;s
            AdSense publisher ID is{' '}
            <code className="rounded bg-neutral-100 px-1 py-0.5 text-neutral-900">ca-pub-6191764023643150</code>,
            loaded in the site <code className="rounded bg-neutral-100 px-1 text-neutral-900">&lt;head&gt;</code>{' '}
            and tied to ad units placed on content routes.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Ad units render in four formats: horizontal leaderboards, in-content rectangles, vertical
            sidebars, and responsive auto-units. Each unit reserves its space before loading to
            prevent layout shift, and each unit carries an &quot;Advertisement&quot; label above the
            creative, as AdSense policy requires.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Ad units lazy-load through an intersection observer and render only when they near the
            viewport, which keeps calculator and guide pages fast. The publisher shares ad revenue
            with Google under standard AdSense terms; advertisers pay Google directly, not TT
            Calculator, for each placement.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            AdSense uses cookies and related technologies to serve personalized or non-personalized
            ads depending on consent settings and region. Manage preferences at{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="link">
              https://adssettings.google.com
            </a>{' '}
            or use the industry opt-out at{' '}
            <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="link">
              https://optout.networkadvertising.org
            </a>
            . Consent flow details sit in the{' '}
            <Link href="/privacy/" className="link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Where ads appear and where they do not</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Ads render only on designated content routes and never on trust, legal, or compliance
            pages. The route list is enforced in code, not by editorial discretion.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Ads appear on the following content routes:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Calculator pages</li>
            <li>Guide pages</li>
            <li>Blog pages</li>
            <li>Comparison pages</li>
            <li>Data hub pages</li>
            <li>News pages</li>
            <li>Niche pages</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Ads are blocked on every trust and legal route, including this page:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Privacy, Terms, and Contact pages</li>
            <li>About and FAQ pages</li>
            <li>Glossary and search pages</li>
            <li>Methodology and Editorial Policy pages</li>
            <li>Compliance pages, including this Advertising Disclosure</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            On calculator pages, ad zones sit away from input fields and primary action buttons so
            paid placements never overlap interactive controls.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Ads do not influence editorial decisions</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Advertising sets neither calculator assumptions, benchmark ranges, nor editorial
            recommendations. Monetization stays separate from content logic and policy decisions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The separation is mechanical as well as editorial: the ad system renders only on allowed
            routes, while methodology and calculator logic live on routes where ads never load. The
            principles behind this separation are documented in the{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Affiliate links</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator runs{' '}
            <strong className="font-semibold text-neutral-900">no active affiliate program as of this update</strong>.
            Display advertising is the sole monetization channel in production. This includes no
            TikTok Shop affiliate relationship and no third-party affiliate links on any page.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            If affiliate links are added on specific pages, the relationship is disclosed on-page and
            in this policy before the links go live. Affiliate presence, where introduced, changes no
            editorial evaluation standard.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. No sponsored or advertorial content</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator publishes{' '}
            <strong className="font-semibold text-neutral-900">no sponsored posts, paid placements, or advertorial disguised as editorial content</strong>.
            No brand pays for a calculator result, a benchmark ranking, or a guide recommendation.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The only paid surface on the site is the clearly labeled AdSense unit. Anything that reads
            as content is editorially produced and reviewed under the standards in the{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. Independence from TikTok</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator is{' '}
            <strong className="font-semibold text-neutral-900">not affiliated with, endorsed by, or sponsored by TikTok or ByteDance</strong>.
            All brand, platform, and program names appear for descriptive identification only.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            AdSense ad creative is served by Google and is not controlled or curated by TikTok.
            Advertisers pay Google, not TT Calculator, for placement, and TT Calculator receives a
            share of that ad revenue under Google&apos;s standard publisher terms.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. FTC compliance statement</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator follows Federal Trade Commission disclosure principles by communicating
            material monetization relationships clearly and by avoiding deceptive content framing.
            Advertising and any future affiliate relationship are disclosed so users evaluate content
            context transparently.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Users never guess whether a page is monetized. Disclosure language stays visible, plain,
            and consistent with U.S. advertising disclosure expectations.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">9. Related Resources and policy links</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Advertising and disclosure questions go to{' '}
            <a href="mailto:contact@ttcalculator.net" className="link">
              contact@ttcalculator.net
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
              <Link href="/methodology/" className="link">
                Methodology
              </Link>{' '}
              for calculator inputs, outputs, and limitations.
            </li>
            <li>
              <Link href="/contact/" className="link">
                Contact TT Calculator
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
