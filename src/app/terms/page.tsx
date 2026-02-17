import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "Terms and CalculateCreator Platform Details Guide 2026",
  description: "Review terms information for CalculateCreator, including policy context, methodology transparency, and practical guidance for creator-focused use.",
  alternates: {
    canonical: 'https://calculatecreator.com/terms/',
  },
};

const LAST_UPDATED = 'February 17, 2026';
const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description:
    'Terms of Service for calculatecreator.com covering estimate disclaimers, user responsibilities, intellectual property, and liability limits.',
  url: 'https://calculatecreator.com/terms/',
  dateModified: LAST_UPDATED,
  publisher: {
    '@type': 'Organization',
    name: 'CalculateCreator',
    url: 'https://calculatecreator.com',
  },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
        <h1 className="text-display-sm font-bold text-neutral-900">Terms of Service</h1>
        <p className="mt-3 text-sm text-neutral-600">Last Updated: {LAST_UPDATED}</p>

        <p className="mt-5 text-sm leading-relaxed text-neutral-700">
          These Terms of Service ("Terms") govern your use of calculatecreator.com and related
          content, tools, calculators, and benchmark pages published by CalculateCreator. By
          accessing or using the site, you agree to these Terms. If you do not agree, do not use
          the site.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          These Terms apply to all publicly accessible sections of the website, including legacy
          calculator routes, newer tools routes, article pages, benchmark pages, and trust pages.
          Additional notices may appear on specific pages to clarify assumptions or limitations for
          that page type.
        </p>

        <section className="mt-8 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">1. Description of service</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            CalculateCreator provides informational tools and educational content for creator
            economics and performance modeling. Services include calculator pages, benchmarks,
            guides, glossaries, and compliance resources. We may add, remove, or modify features at
            any time to improve quality, maintain security, or align with policy and legal
            requirements.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We do not provide brokerage services, investment advisory services, accounting services,
            legal representation, or tax filing services through this website.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Feature availability may vary by route as templates are upgraded. We may retire older
            interfaces, reclassify tools, or adjust content architecture as part of product
            maintenance without prior notice.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">2. Accuracy and estimate disclaimer</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Calculator outputs are estimates based on user inputs and published assumptions. They are
            intended for planning, benchmarking, and educational use only.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 font-medium text-neutral-900">
            TikTok rates change frequently. Our calculator results are estimates based on aggregated
            data and should not be treated as guaranteed earnings.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Platform payouts, brand pricing, ad rates, conversion behavior, and regional policies
            can shift quickly. You are responsible for verifying any high-impact decision with your
            own records and professional advisors where appropriate.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Examples shown on calculator pages are instructional scenarios. They are not promises of
            future performance and should not be represented to clients, sponsors, or partners as
            guaranteed outcomes.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">3. No professional advice</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Content on CalculateCreator does not constitute financial, tax, accounting, legal,
            investment, or business advisory services. Any action you take based on site content is
            at your own discretion and risk.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            If you need professional advice, consult a qualified professional licensed in your
            jurisdiction.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">4. User responsibilities</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>Use the site lawfully and in good faith.</li>
            <li>Do not attempt to disrupt, overload, or compromise site operations.</li>
            <li>Do not scrape at abusive rates or attempt to bypass technical controls.</li>
            <li>Do not misrepresent calculator outputs as guaranteed financial outcomes.</li>
            <li>Do not post or transmit malicious code through site interactions.</li>
            <li>Respect intellectual property rights and attribution requirements.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            You are responsible for how you apply outputs from calculatecreator.com in your own
            business context. Use independent judgment before making spending, hiring, contracting,
            tax, or legal decisions.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">5. Prohibited uses</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            You may not use CalculateCreator to engage in fraud, illegal conduct, deceptive
            advertising, harassment, unauthorized data extraction, or any behavior that violates
            applicable law or third-party rights. We may restrict access if we detect abuse,
            security threats, or policy violations.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Automated querying intended to replicate or repackage proprietary calculators at scale
            without permission may be treated as abusive use and may result in blocking.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">6. Intellectual property</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Unless otherwise noted, site content and tooling, including text, design elements,
            formulas, and custom software implementation, are owned by CalculateCreator or licensed
            to us. You may reference public pages with attribution and links to original URLs.
            Unauthorized reproduction or redistribution of substantial proprietary content may
            violate copyright or other laws.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            "TikTok" and related marks are trademarks of their respective owners. CalculateCreator
            is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Limited quotations for commentary, research, or educational discussion should include
            source attribution and should not imply ownership transfer or partnership.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">7. Third-party links and services</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Our site may link to third-party websites, tools, and resources. We provide those links
            for convenience and context. We do not control or guarantee third-party content,
            availability, or privacy practices. Your interactions with third-party services are
            governed by their own policies.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">8. Advertising and monetization</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            CalculateCreator is funded in part through advertising, including Google AdSense.
            Advertising helps us keep tools publicly accessible without user paywalls. Advertising
            does not determine calculator outputs or editorial conclusions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            For details, review our{' '}
            <Link href="/compliance/advertising-disclosure/" className="link">
              Advertising Disclosure
            </Link>{' '}
            and{' '}
            <Link href="/privacy/" className="link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">9. Disclaimer of warranties</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            The site is provided on an "as is" and "as available" basis. To the maximum extent
            permitted by law, CalculateCreator disclaims all warranties, express or implied,
            including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We do not warrant uninterrupted access, error-free operation, or complete accuracy of
            every estimate at all times.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Temporary interruptions may occur during deployment, maintenance, infrastructure issues,
            or third-party outages. We aim to restore availability promptly but cannot guarantee
            continuous service.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">10. Limitation of liability</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            To the fullest extent permitted by law, CalculateCreator and its operators are not
            liable for indirect, incidental, special, consequential, or punitive damages arising out
            of or related to your use of the site. This includes lost profits, lost opportunities,
            business interruption, data loss, or reliance on estimated results.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            In jurisdictions where liability limits are restricted, our liability is limited to the
            minimum extent permitted by applicable law.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Nothing in these Terms excludes liability that cannot be excluded under applicable law,
            including statutory rights that remain mandatory in your jurisdiction.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">11. Indemnification</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            You agree to defend, indemnify, and hold harmless CalculateCreator, its operators, and
            contributors from claims, liabilities, damages, and costs (including reasonable legal
            fees) arising from your misuse of the site, your violation of these Terms, or your
            violation of law or third-party rights.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">12. Modifications and service changes</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We may revise these Terms and modify site functionality at any time. When Terms are
            revised, we update the Last Updated date on this page. Continued use of the site after
            updates indicates acceptance of the revised Terms.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">13. Governing law</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            These Terms are governed by applicable laws of the jurisdiction in which the site
            operator is established, without regard to conflict-of-law rules. Any disputes arising
            from these Terms shall be handled in courts of competent jurisdiction, subject to
            mandatory consumer protection laws where applicable.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Before formal proceedings, we encourage users to contact us so we can attempt a practical
            resolution in good faith.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">14. Severability</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            If any provision of these Terms is found unenforceable, the remaining provisions will
            remain in effect to the maximum extent permitted by law.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">15. Termination and suspension</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We may suspend or limit access where needed to protect site security, prevent abuse, or
            comply with legal obligations. You may stop using the site at any time. Provisions that
            reasonably should survive termination, including intellectual property, disclaimers, and
            liability limits, will continue to apply.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">16. Entire agreement</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            These Terms, together with linked policies, represent the complete agreement between you
            and CalculateCreator regarding use of calculatecreator.com. If there is a conflict
            between these Terms and page-level notices, the more specific notice controls for that
            context.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Headings are provided for readability and do not limit interpretation of any provision.
            Any waiver of a right under these Terms must be explicit and does not waive future
            enforcement. Delays in enforcement do not reduce our ability to apply these Terms later.
          </p>
        </section>

        <section className="mt-6 card p-6">
          <h2 className="text-heading-md font-semibold text-neutral-900">17. Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Terms inquiries: <a href="mailto:contact@calculatecreator.com" className="link">contact@calculatecreator.com</a>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Privacy inquiries: <a href="mailto:privacy@calculatecreator.com" className="link">privacy@calculatecreator.com</a>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Related trust pages:{' '}
            <Link href="/privacy/" className="link">
              Privacy Policy
            </Link>{' '}
            and{' '}
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
