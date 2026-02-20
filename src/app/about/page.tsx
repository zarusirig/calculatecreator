import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "About and CalculateCreator Platform Details Guide 2026",
  description: "Review about information for CalculateCreator, including policy context, methodology transparency, and practical guidance for creator-focused use.",
  alternates: {
    canonical: 'https://calculatecreator.com/about/',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CalculateCreator',
  url: 'https://calculatecreator.com',
  logo: 'https://calculatecreator.com/images/calculate-creator-transparent-v2.png',
  description:
    'CalculateCreator helps creators estimate, compare, and benchmark earnings and performance metrics with transparent assumptions.',
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@calculatecreator.com',
      url: 'https://calculatecreator.com/contact/',
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="pb-16 pt-10">
        <Container className="max-w-4xl">
          <h1 className="text-display-sm font-bold text-neutral-900">About CalculateCreator</h1>
          <p className="mt-4 text-body-md text-neutral-700">
            CalculateCreator is an independent product and editorial platform focused on one job:
            helping creators make better decisions with numbers they can actually understand.
            We publish creator calculators, benchmark pages, and practical guides for people who
            want a clear view of earnings potential, engagement performance, and growth tradeoffs.
            We are not a get-rich-quick brand. We are a numbers-first team that believes good
            decision making starts with transparent assumptions.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Our mission is to make creator analytics practical for everyday use. Most creators do
              not have analyst teams, internal dashboards, or paid data subscriptions. They have a
              phone, a publishing schedule, and business decisions they need to make quickly. We
              built CalculateCreator so creators can estimate likely outcomes in minutes instead of
              guessing in the dark.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We design every page around a single intent: inputs, result, meaning, and next step.
              That approach keeps our tools useful for new creators and experienced operators. It
              also keeps us honest about limitations. Creator income can change fast based on niche,
              region, platform policy, seasonality, and content quality. Our role is to provide
              directional models and context, not promises.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">What we do</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              CalculateCreator publishes two core products.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              First, we build calculators for key creator workflows. These include tools for RPM,
              total earnings, engagement rate, brand deal pricing, shop commission, tax set-aside,
              and multi-platform comparisons. We also maintain supporting utilities for conversion
              analysis, content value, and campaign ROI. You can browse them in our{' '}
              <Link href="/tools/" className="link">
                tools directory
              </Link>{' '}
              and legacy{' '}
              <Link href="/calculators/" className="link">
                calculators directory
              </Link>
              .
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Second, we publish editorial guides and benchmark explainers that show how to use
              calculator outputs in real decisions. Instead of dumping raw numbers, we explain what
              ranges mean, what assumptions matter, and when a metric is too uncertain to trust.
              That editorial layer is a major part of our product, not an afterthought.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">How we get our data</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We combine public platform documentation, creator-reported ranges, campaign norms,
              and historical benchmark distributions to build assumption sets. We do not claim to
              have direct internal access to TikTok, YouTube, or any platform. We use aggregated
              public and community signals, then convert those signals into transparent calculator
              inputs.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every major calculator includes methodology and assumptions so users can see what is
              driving the result. If a payout range is volatile, we say so. If a model has known
              blind spots, we document them. We prefer a clear estimate with caveats over a false
              sense of precision.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We review benchmark assumptions weekly and revise when there are meaningful changes in
              monetization programs, market behavior, or input quality. You can review our process
              in the{' '}
              <Link href="/methodology/" className="link">
                methodology page
              </Link>{' '}
              and full editorial workflow in our{' '}
              <Link href="/editorial-policy/" className="link">
                editorial policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Our team</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              CalculateCreator is run by a small cross-functional team of monetization analysts,
              data researchers, editors, and frontend engineers. We work directly on calculator
              logic, content QA, and publishing infrastructure in the same repository. The team
              follows a publish-review-refresh workflow so formulas, copy, and metadata are audited
              together.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We treat creator analytics as an applied discipline. That means we care about model
              structure, input clarity, and reproducibility more than catchy claims. We test tools,
              read feedback, and revise assumptions continuously. When we find errors, we correct
              them and document updates in policy pages and methodology blocks.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Values and independence</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We operate with four core values: clarity, transparency, consistency, and editorial
              independence. Our pages are designed to make assumptions visible and units explicit.
              We avoid sensational claims and avoid language that implies guaranteed outcomes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              CalculateCreator is not affiliated with, endorsed by, or sponsored by TikTok,
              ByteDance, or any social platform. "TikTok" is a trademark of its owner and appears
              on our site for descriptive purposes only.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We fund operations through advertising and related publishing revenue. Ads do not
              determine calculator outputs or editorial conclusions. Our advertising standards and
              controls are documented in the{' '}
              <Link href="/compliance/advertising-disclosure/" className="link">
                advertising disclosure
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Who we serve</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We serve solo creators, creator managers, small agencies, and brand-side teams that
              need quick directional modeling. We are especially useful for people who need to
              compare options: whether to prioritize RPM improvement, brand deal volume, shop
              conversion, or cross-platform strategy.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              If you want to suggest a calculator, report a data issue, or ask how a formula was
              built, contact us directly. We review product and data feedback continuously and use
              that feedback to prioritize updates.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Our readers often use CalculateCreator before negotiation calls, campaign planning
              sessions, and monthly performance reviews. That practical use case shapes how we write
              and design every page: concise inputs, explicit units, transparent assumptions, and a
              clear next action.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Continue reading</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <Link href="/editorial-policy/" className="link">
                  Editorial Policy
                </Link>{' '}
                for our content process, corrections policy, and AI usage disclosures.
              </li>
              <li>
                <Link href="/methodology/" className="link">
                  Methodology
                </Link>{' '}
                for how assumptions are assembled and updated.
              </li>
              <li>
                <Link href="/corrections-policy/" className="link">
                  Corrections Policy
                </Link>{' '}
                for how we handle error reports and content fixes.
              </li>
              <li>
                <Link href="/sources-policy/" className="link">
                  Sources Policy
                </Link>{' '}
                for how we evaluate and document data sources.
              </li>
              <li>
                <Link href="/contact/" className="link">
                  Contact
                </Link>{' '}
                to report errors, request features, or ask data questions.
              </li>
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
