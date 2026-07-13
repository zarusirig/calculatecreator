import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: 'Advertising Disclosure | TT Calculator',
  description:
    'See how TT Calculator handles ads, monetization, and editorial independence across calculators, guides, and benchmark content.',
  alternates: {
    canonical: 'https://ttcalculator.net/compliance/advertising-disclosure/',
  },
};

const LAST_UPDATED = 'July 13, 2026';
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

const faqs = [
  {
    question: 'Do ads change calculator results?',
    answer:
      'No. Calculator assumptions come from the documented research process, and the ad system cannot touch formula logic. Ads render only on allowed content routes, while methodology and policy pages never load an ad.',
  },
  {
    question: 'Why do some pages show ads and others none?',
    answer:
      'A route allowlist in code decides placement. Ads render on 7 content route groups, such as calculators, guides, and blog posts, and stay blocked on 11 trust and utility route groups, such as privacy, methodology, and compliance pages.',
  },
  {
    question: 'Does TT Calculator run affiliate links or sponsored posts?',
    answer:
      'No. Display advertising through Google AdSense is the only monetization channel in production, with no affiliate links and no sponsored or advertorial content on any page.',
  },
  {
    question: 'How do I control the ads I see?',
    answer:
      'Manage ad personalization at adssettings.google.com or use the industry opt-out at optout.networkadvertising.org. Region-based consent settings are documented in the Privacy Policy.',
  },
];

const separationMechanisms = [
  'A text label reading "Advertisement" sits above every unit, as AdSense policy requires, so paid space never reads as editorial content.',
  'Each format reserves fixed space before the creative loads: 90px for leaderboards, 250px for in-content rectangles, and 600px for sidebar units. Content never shifts when an ad fills its slot.',
  'Ad zones sit outside calculator input fields, result panels, and primary action buttons, so paid placements never overlap interactive controls.',
  'Units lazy-load 200px before entering the viewport, so ad requests never block calculator interactivity or page rendering.',
];

export default function AdvertisingDisclosurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(advertisingDisclosureSchema) }}
      />
      <FAQPageSchema faqs={faqs} />

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
          used, states where ads appear and where they are blocked, explains how ads stay visually
          and mechanically separate from content, and confirms the site&apos;s independence from
          TikTok.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          The disclosure makes monetization visible rather than hidden. Readers see exactly how TT
          Calculator earns revenue and where those decisions stay separate from editorial and
          calculator methodology.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. How TT Calculator makes money</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Display advertising is the primary revenue source. Ads fund editorial work, calculator
            development, infrastructure, and maintenance so the tools stay publicly accessible. The site
            sells no subscriptions, runs no paywall, and requires no account; advertising carries the full
            cost of keeping every calculator free.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Additional monetization models are evaluated over time. Any new model appears on this
            page and on the related trust pages before it goes live.
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
            The publisher shares ad revenue with Google under standard AdSense terms; advertisers pay
            Google directly, not TT Calculator, for each placement. Google selects the creative, so
            TT Calculator neither picks nor reviews individual advertisers.
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
            pages. The route list is enforced in code, not by editorial discretion: an allowlist
            names <strong className="font-semibold text-neutral-900">7 content route groups</strong>,
            a blocklist names{' '}
            <strong className="font-semibold text-neutral-900">11 trust and utility route groups</strong>,
            and the blocklist wins whenever both match. A site-wide switch also gates every unit, so
            an ad renders only when the switch and the route both allow it.
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
            <li>Glossary, search, and bookmarks pages</li>
            <li>Methodology and Editorial Policy pages</li>
            <li>Compliance pages, including this Advertising Disclosure</li>
          </ul>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. How ads stay visually separated from content</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Four mechanisms keep every ad visually and functionally distinct from editorial content
            and calculator controls:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {separationMechanisms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The result is a fixed rule a reader verifies on any page: everything inside a labeled ad
            slot is paid, and everything outside it is editorial.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Ads do not influence editorial decisions</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Advertising sets neither calculator assumptions, benchmark ranges, nor editorial
            recommendations. Monetization stays separate from content logic and policy decisions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The separation is mechanical as well as editorial: the ad system renders only on allowed
            routes, while methodology and calculator logic live on routes where ads never load. No
            advertiser sees content before publication, and no advertiser can request a formula,
            ranking, or benchmark change. The principles behind this separation are documented in
            the{' '}
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Affiliate links</h2>
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
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The{' '}
            <Link href="/compliance/sponsorship-disclosure/" className="link">
              Sponsorship Disclosure
            </Link>{' '}
            guide explains how TikTok creators disclose affiliate links in their own content. That
            guide teaches creator compliance; it changes nothing about this site&apos;s no-affiliate
            position.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. No sponsored or advertorial content</h2>
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
          <h2 className="text-heading-md font-semibold text-neutral-900">8. Independence from TikTok</h2>
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
          <h2 className="text-heading-md font-semibold text-neutral-900">9. FTC compliance statement</h2>
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
          <h2 className="text-heading-md font-semibold text-neutral-900">10. Related Resources and policy links</h2>
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
