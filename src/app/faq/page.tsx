import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: 'TT Calculator FAQ',
  description:
    'Find answers about calculator accuracy, assumptions, privacy, updates, methodology, and how TT Calculator handles creator earnings estimates.',
  alternates: {
    canonical: 'https://tiktokcalculator.net/faq/',
  },
};

const faqs = [
  {
    question: 'What is TT Calculator?',
    answer:
      'TT Calculator is a creator analytics product and editorial site that helps people estimate, compare, and benchmark outcomes such as RPM, projected earnings, engagement rate, deal pricing, and conversion performance. We focus on clear inputs, transparent assumptions, and readable outputs. The site is designed for creators, managers, and small teams that need practical directional models without requiring enterprise analytics tools.',
  },
  {
    question: 'How accurate are your calculators?',
    answer:
      'Our calculators are directional models, not guarantees. Accuracy depends on your inputs and how closely your niche, audience geography, seasonality, and content quality match the assumptions shown on each page. We intentionally surface assumptions so you can stress-test scenarios rather than rely on one fixed answer. If you need contractual or legal certainty, treat calculator outputs as planning support and verify with your own records and advisors.',
  },
  {
    question: 'Where do your benchmark ranges come from?',
    answer:
      'We use a blend of public platform documentation, creator-reported ranges, campaign norms, and historical benchmark signals. We do not claim direct access to internal TikTok systems. We synthesize public and community data, then map those signals into assumption bands that are visible to users. Our methodology page explains how we handle uncertainty and when we update ranges.',
  },
  {
    question: 'How often do you update assumptions and benchmark data?',
    answer:
      'We review assumptions weekly and prioritize updates when there are material changes in platform policies, monetization programs, or observed market behavior. We also update individual pages when users report a calculation issue or a stale assumption. Policy and trust pages include explicit last-updated dates so readers can verify freshness.',
  },
  {
    question: 'Is TT Calculator affiliated with TikTok or ByteDance?',
    answer:
      'No. TT Calculator is independent and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. We reference platform names descriptively because our tools are designed around creator workflows that happen on those platforms. Trademark ownership remains with the respective companies.',
  },
  {
    question: 'How does TT Calculator make money?',
    answer:
      'We monetize through advertising, including Google AdSense. Advertising helps fund calculator development, editorial maintenance, infrastructure, and data review work so tools remain free to use. Advertising does not control calculator outputs or editorial conclusions. We document this separation in our Advertising Disclosure and Editorial Policy pages.',
  },
  {
    question: 'Do you sell user data or calculator inputs?',
    answer:
      'No. We do not sell calculator inputs or personal data. Calculator inputs are processed in your browser for estimation. We use analytics and advertising technologies as described in our Privacy Policy, including controls for consent and ad personalization preferences where required. We do not run a data brokerage model.',
  },
  {
    question: 'What monetization programs do your tools cover?',
    answer:
      'Our tools cover creator scenarios such as ad-based earnings projections, RPM analysis, engagement benchmarks, brand deal estimates, shop commission modeling, tax planning, and multi-platform comparisons. Coverage may vary by route as we expand templates and migrate legacy pages. The tools directory lists currently available calculators and links to related guides.',
  },
  {
    question: 'Can I cite TT Calculator data in my own article or deck?',
    answer:
      'Yes, with attribution. Link to the relevant page and mention the date you accessed the data because benchmark ranges can change over time. If you are using outputs in client-facing or financial materials, include the assumptions and limitations so readers understand that estimates are directional. We do not grant exclusivity over public benchmark summaries.',
  },
  {
    question: 'How do I report a bug or incorrect benchmark?',
    answer:
      'Email contact@tiktokcalculator.net or bugs@tiktokcalculator.net with the exact URL, what you expected, what happened, and any source supporting your claim. We triage issues by impact, then patch formulas, copy, or assumptions as needed. Our correction workflow and editorial standards are documented in the Editorial Policy page.',
  },
  {
    question: 'Do you use AI to produce content?',
    answer:
      'We may use AI-assisted drafting, summarization, and editing support in parts of our workflow, but final publication decisions, assumptions, and compliance checks are human-reviewed. We do not treat AI output as a source of truth. Human reviewers validate high-impact claims, formula behavior, and policy language before publication.',
  },
  {
    question: 'Are your calculators financial, legal, or tax advice?',
    answer:
      'No. TT Calculator provides educational estimates and planning tools. Results should not be interpreted as financial, legal, tax, accounting, or investment advice. Platform rates and payouts can shift quickly. For decisions with legal or tax impact, consult a qualified advisor licensed in your jurisdiction.',
  },
  {
    question: 'Are calculator URLs standardized to one route?',
    answer:
      'Yes. /calculators/ is the primary route family for tool discovery and individual calculators. Legacy /tools/ aliases may still resolve in some contexts, but they are treated as redirects to the canonical /calculators/ paths so internal links and indexation signals stay consistent.',
  },
  {
    question: 'How can I stay updated when policies or calculators change?',
    answer:
      'Review last-updated dates on policy pages, check calculator methodology sections, and revisit benchmark pages for refresh cycles. We do not promise fixed schedules for every tool, but we prioritize updates where assumptions move materially. You can always contact us directly to confirm whether a specific page is current for your use case.',
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQPageSchema
        faqs={faqs}
        title="TT Calculator Frequently Asked Questions"
        description="Common questions about tools, methodology, privacy, and monetization policy on tiktokcalculator.net"
        url="https://tiktokcalculator.net/faq/"
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <h1 className="text-display-sm font-bold text-neutral-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-body-md text-neutral-700">TikTok creators: 
            This page answers the most common questions we receive about TT Calculator: how our
            calculators work, how we update assumptions, how we handle privacy, and how we fund the
            site. If your question is not listed, contact us and we will add coverage where useful.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            We maintain this FAQ as an operational document, not a marketing page. Answers are
            updated when methodology changes, policy language is revised, or repeated reader
            questions indicate missing clarity in a tool workflow.
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="card p-6">
                <h2 className="text-heading-sm font-semibold text-neutral-900">{item.question}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.answer}</p>
              </article>
            ))}
          </div>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related trust pages</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <Link href="/about/" className="link">
                  About
                </Link>{' '}
                to learn who runs TT Calculator and how the product is maintained.
              </li>
              <li>
                <Link href="/privacy/" className="link">
                  Privacy Policy
                </Link>{' '}
                for cookie, analytics, and ad data handling.
              </li>
              <li>
                <Link href="/contact/" className="link">
                  Contact
                </Link>{' '}
                for corrections, feature requests, and technical issues.
              </li>
              <li>
                <Link href="/compliance/advertising-disclosure/" className="link">
                  Advertising Disclosure
                </Link>{' '}
                for details on AdSense and revenue model transparency.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              If you need a page-level clarification for a specific calculator, include the exact
              URL when you contact us. That helps our reviewers audit assumptions, schema, and copy
              in the same pass and respond with a precise answer.
            </p>
          </section>
        </Container>
      </div>
    </>
  );
}
