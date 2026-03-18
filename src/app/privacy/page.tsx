import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | TT Calculator',
  description:
    'Review how TT Calculator handles cookies, analytics, advertising, local storage, and user data across the site.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/privacy/',
  },
};

const LAST_UPDATED = 'March 1, 2026';
const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description:
    'Privacy Policy for tiktokcalculator.net covering cookies, analytics, advertising, user rights, and data handling.',
  url: 'https://tiktokcalculator.net/privacy/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'TT Calculator',
    url: 'https://tiktokcalculator.net',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
        <h1 className="text-display-sm font-bold text-neutral-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

        <p className="mt-5 text-sm leading-relaxed text-neutral-700">
          This Privacy Policy explains how TT Calculator ("we," "us," or "our") collects,
          uses, and protects information when you use tiktokcalculator.net. We built
          TT Calculator to help creators estimate and benchmark outcomes such as RPM,
          engagement, earnings, and related business metrics. Because trust is part of our product,
          we explain our data handling in plain language and document third-party technologies used
          for analytics and advertising.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          This policy applies to all public pages on tiktokcalculator.net, including calculator
          pages, guides, benchmark pages, and trust pages. By using the site, you acknowledge this
          policy. If you do not agree, you should discontinue use of the site.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          We built TT Calculator with a minimal-data mindset. Most features are available without
          account creation, and we try to process only the data needed to run the site, protect it,
          and improve the quality of tools and editorial content.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. Information we collect</h2>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">A. Information you provide</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We may receive information you send us directly, such as when you email contact,
            support, bug, press, or partnership inboxes. This can include your name, email address,
            and the content of your message.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            If you include attachments or screenshots in a support request, those files may contain
            additional contextual information. We recommend sharing only what is necessary to
            describe the issue.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">B. Calculator input data</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Calculator inputs are used to generate results in your browser. We do not intentionally
            store your raw calculator inputs as user profiles. Tool outputs are estimates and do not
            require account registration.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Some convenience features, such as bookmarks or preference toggles, may rely on local
            browser storage so settings persist between sessions. These values stay on your device
            unless you choose to send related context to us.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">C. Automatically collected technical data</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Like most websites, we and our service providers may collect technical usage data such
            as device type, browser type, pages visited, approximate location, referral source,
            interaction timing, and diagnostic events. We use this to improve reliability,
            performance, and content quality.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Depending on configuration and region, this data may include truncated or full IP
            address information, user-agent strings, and page-level interaction signals used for
            aggregate reporting and abuse prevention.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">D. Cookies and similar technologies</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We use cookies and related technologies for measurement, site operation, and
            advertising. Some cookies are set by us, and others are set by third-party services such
            as Google Analytics and Google AdSense.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Cookie categories can include essential site-operation cookies, analytics cookies, and
            advertising cookies. Essential cookies support basic functionality. Analytics cookies
            help us understand aggregated behavior. Advertising cookies support ad delivery and
            measurement.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. How we use information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Operate, maintain, and secure tiktokcalculator.net.</li>
            <li>Understand product usage patterns and improve user experience.</li>
            <li>Respond to support, correction, and business inquiries.</li>
            <li>Monitor site quality, performance, and abuse prevention.</li>
            <li>Display ads through Google AdSense so tools can remain free to use.</li>
            <li>Comply with legal obligations and enforce site policies.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We do not sell personal data as a standalone product. We also do not provide your
            calculator inputs to unaffiliated brokers for resale.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our team also uses aggregate behavioral trends to prioritize content refreshes, identify
            unclear UI flows, and improve methodology explanations for high-impact calculators. These
            analyses are designed to improve product quality rather than profile individuals.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. Third-party services</h2>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Google Analytics</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We use Google Analytics to understand aggregate traffic and product usage trends.
            Google Analytics may collect device and interaction information through cookies and
            similar technologies. You can review Google's privacy practices at{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="link">
              policies.google.com/privacy
            </a>
            .
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We use analytics data for trend-level reporting and product decisions. We do not use
            analytics dashboards to make legal, credit, insurance, or employment decisions about
            users.
          </p>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Google AdSense</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We use Google AdSense to display advertising. AdSense may use cookies and related
            technologies to deliver personalized or non-personalized ads, depending on your consent
            and region. Learn more at{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="link">
              policies.google.com/technologies/ads
            </a>
            .
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            For ad preference controls, visit{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="link">
              adssettings.google.com
            </a>
            .
          </p>

          <h3 className="mt-4 text-sm font-semibold text-neutral-900">Firebase Hosting and infrastructure</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            TT Calculator is deployed on Firebase Hosting. Standard hosting logs and operational
            diagnostics may be processed to deliver and secure the site.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Service providers process data under their own terms and security controls. Where
            possible, we configure services to limit unnecessary collection and to align with consent
            settings and privacy obligations.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Additional detail about our advertising model is provided in our{' '}
            <Link href="/compliance/advertising-disclosure/" className="link">
              Advertising Disclosure
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. Cookie and consent controls</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We present a consent interface that allows you to accept or decline personalized ad
            experiences. If you decline personalization, we configure non-personalized ad behavior
            where applicable. You can also control cookies through browser settings.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Consent choices are stored so your preference can be respected on later visits. You can
            change your choice by reopening cookie settings, clearing browser storage, or adjusting
            platform-level ad controls.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Adjust ad preferences at adssettings.google.com.</li>
            <li>Use browser controls to block or remove cookies.</li>
            <li>Use private browsing modes where appropriate.</li>
            <li>
              For additional ad-industry controls, review the Network Advertising Initiative opt-out
              tool at{' '}
              <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="link">
                optout.networkadvertising.org
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Data retention</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We retain information only as long as needed for the purposes described in this policy,
            including operational reliability, legal compliance, and dispute handling. Support emails
            may be retained for workflow continuity and quality assurance. Analytics and ad-related
            data retention timelines are also influenced by third-party platform settings and
            policies.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We periodically review retention practices and delete or anonymize data when it is no
            longer required for legitimate business or legal purposes.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Retention windows vary by data type. For example, support correspondence may be retained
            longer than short-lived diagnostic logs because it is needed to resolve follow-up
            requests, investigate repeat issues, and maintain continuity in support conversations.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Your rights (all users)</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Depending on your jurisdiction, you may have rights to request access, correction,
            deletion, or restriction of certain personal data. You may also have rights to object to
            specific processing activities and to withdraw consent where consent is the legal basis.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            To submit a privacy request, email{' '}
            <a href="mailto:privacy@tiktokcalculator.net" className="link">
              privacy@tiktokcalculator.net
            </a>
            . We may request additional verification to protect account and data security.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We evaluate requests in line with applicable law and may decline requests that are
            excessive, duplicative, impossible to verify, or prohibited by legal obligations. When
            we cannot fulfill a request in full, we explain the reason.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. GDPR notice (EU/EEA/UK users)</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            If you are located in the EU, EEA, or UK, you may have rights under GDPR or equivalent
            local law, including access, rectification, erasure, restriction, portability, and
            objection rights. You may also have the right to lodge a complaint with your local data
            protection authority.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Where required, we request and record consent choices for advertising preferences.
            You can revise choices by clearing local consent settings and revisiting the site.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Depending on the context, our legal bases for processing may include consent, legitimate
            interests in operating and securing the service, and compliance with legal obligations.
            When consent is the basis, you can withdraw it without affecting prior lawful
            processing.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. CCPA/CPRA notice (California users)</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            California residents may have rights under CCPA/CPRA, including the right to know what
            categories of personal information are collected, the right to request deletion, the
            right to correct inaccurate information, and the right to limit certain uses of
            sensitive personal information where applicable.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator does not sell personal information in the traditional data-broker sense.
            To request disclosure or deletion of personal data that may be associated with direct
            communications, contact privacy@tiktokcalculator.net.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            California residents may also designate an authorized agent to submit requests where
            permitted by law. We may ask for proof of authority and identity verification before
            processing agent-submitted requests.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">9. Children's privacy (COPPA)</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator is intended for general audiences and creator-business research. We do
            not knowingly collect personal information from children under 13. If you believe a
            child under 13 has provided personal information to us, contact us at
            privacy@tiktokcalculator.net and we will investigate and take appropriate action.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Because our site covers social platform monetization topics that may interest younger
            audiences, we take this section seriously and aim to minimize direct data collection by
            design.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Parents or guardians who have concerns about child-related data can contact
            privacy@tiktokcalculator.net. We will review reported cases promptly and remove
            information when appropriate.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">10. Security</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We use reasonable technical and organizational safeguards to protect data handled through
            tiktokcalculator.net. No internet system can be guaranteed fully secure, but we follow a
            minimal-data approach and secure deployment practices to reduce exposure.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            If we become aware of a material security issue affecting user data, we will investigate
            promptly and provide notice where legally required.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Security controls include access limitations, deployment safeguards, and ongoing
            monitoring for suspicious activity. While no system is perfect, we routinely review our
            setup and improve controls as risks evolve.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">11. External links and third-party content</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our content may link to third-party websites, documentation, and services. Those sites
            maintain independent privacy policies and terms. We are not responsible for the privacy
            practices of third-party services.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">12. Policy updates</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We may update this Privacy Policy to reflect product changes, legal requirements, or
            technical updates. We will post revisions on this page and update the Last Updated date.
            Material changes to core data handling practices will be highlighted prominently.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Prior versions may be retained internally for compliance and record-keeping. We
            encourage users to review this page periodically to stay informed about how data
            practices evolve at tiktokcalculator.net.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">13. Contact us</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Privacy inquiries: <a href="mailto:privacy@tiktokcalculator.net" className="link">privacy@tiktokcalculator.net</a>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            General support: <a href="mailto:contact@tiktokcalculator.net" className="link">contact@tiktokcalculator.net</a>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            We aim to respond within 48 hours on business days.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Please include the relevant page URL and a short description of your request so we can
            route it to the right reviewer quickly.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Related pages:{' '}
            <Link href="/compliance/advertising-disclosure/" className="link">
              Advertising Disclosure
            </Link>{' '}
            and{' '}
            <Link href="/contact/" className="link">
              Contact
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">14. Trademark notice</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            TT Calculator is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance
            Ltd. &quot;TikTok&quot; is a trademark of its respective owner and appears on this site for
            descriptive purposes only.
          </p>
        </section>
        </Container>
      </div>
    </>
  );
}
