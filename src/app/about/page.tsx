import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'About TT Calculator | Mission, Methodology, and Standards',
  description:
    'Learn what TT Calculator does, how we build our tools, and the standards behind our creator earnings estimates, benchmarks, and guides.',
  alternates: {
    canonical: 'https://ttcalculator.net/about/',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TT Calculator',
  url: 'https://ttcalculator.net',
  logo: 'https://ttcalculator.net/images/tt-calculator-logo.png',
  description:
    'TT Calculator helps creators estimate, compare, and benchmark earnings and performance metrics with transparent assumptions.',
  // TODO: add real social profiles
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@ttcalculator.net',
      url: 'https://ttcalculator.net/contact/',
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
          <h1 className="text-display-sm font-bold text-neutral-900">About TT Calculator</h1>
          <p className="mt-4 text-body-md text-neutral-700">
            TT Calculator is an independent product and editorial platform for TikTok creators. We
            publish <strong>35+ free calculators</strong>, benchmark pages, and practical guides
            that convert earnings potential, engagement performance, and growth tradeoffs into
            numbers creators understand. The site is not a get-rich-quick brand. We are a
            numbers-first team: good decisions start with transparent assumptions.
          </p>

          <section className="mt-8 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Our mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Our mission is to make creator analytics practical for everyday use. Most creators
              lack analyst teams, internal dashboards, and paid data subscriptions. They have a
              phone, a publishing schedule, and fast business decisions. TT Calculator lets creators
              estimate likely outcomes in minutes instead of guessing in the dark.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We design every page around a single intent: inputs, result, meaning, next step. That
              approach keeps our tools useful for new creators and experienced operators. It also
              keeps us honest about limitations. Creator income shifts with niche, region, platform
              policy, seasonality, and content quality. Our role is directional models and context,
              not promises.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">What we do</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator publishes two core products. First, we build{' '}
              <strong>35+ free calculators</strong> for the workflows creators actually run: RPM
              and total earnings, engagement rate, brand deal pricing, Shop commission, LIVE gift
              value, tax set-aside, and multi-platform comparisons. Supporting utilities cover
              conversion analysis, content value, and campaign ROI. Browse the full set in our{' '}
              <Link href="/calculators/" className="link">
                TikTok calculators directory
              </Link>
              .
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Second, we publish editorial guides and benchmark explainers that show how to use
              calculator outputs in real decisions. Instead of dumping raw numbers, we explain what
              ranges mean, which assumptions matter, and when a metric is too uncertain to trust.
              That editorial layer is a core part of the product, not an afterthought.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">What we cover</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Coverage spans six creator decision areas, each backed by dedicated calculators:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <strong>Earnings and revenue:</strong> RPM, ad revenue projections, Creator Rewards
                estimates, and multi-platform earnings.
              </li>
              <li>
                <strong>Engagement:</strong> engagement rate, comment rate, completion rate, share
                ratio, and watch time.
              </li>
              <li>
                <strong>Brand deals and commerce:</strong> brand deal rates, affiliate commission,
                campaign ROI, sponsorship ROI, and conversion rate.
              </li>
              <li>
                <strong>TikTok Shop and LIVE:</strong> live gifts, coin value, diamond conversion,
                and Shop ad performance.
              </li>
              <li>
                <strong>Growth and content:</strong> follower growth, posting time, hashtag
                performance, viral potential, and video performance.
              </li>
              <li>
                <strong>Financial planning:</strong> break-even, customer acquisition cost, lifetime
                value, and production cost.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Our editorial model</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator runs a desk-based editorial model. <strong>Six desks</strong> own the
              work, and none rely on a single named expert. This structure keeps coverage
              consistent, makes ownership traceable, and protects estimates from individual bias.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <strong>Editorial desk</strong> owns calculator copy, guides, and the
                publish-review-refresh workflow.
              </li>
              <li>
                <strong>Research desk</strong> owns benchmark sourcing, assumption bands, and source
                documentation.
              </li>
              <li>
                <strong>LIVE desk</strong> owns TikTok LIVE earnings tools: gift value, coin
                conversion, diamond value, and Creator Rewards estimates.
              </li>
              <li>
                <strong>Commerce desk</strong> owns brand deal, affiliate, Shop, and campaign ROI
                calculators.
              </li>
              <li>
                <strong>Tax desk</strong> owns financial-planning tools: break-even, customer
                acquisition cost, lifetime value, and production cost.
              </li>
              <li>
                <strong>Growth desk</strong> owns engagement, follower growth, posting time, and
                niche profitability tools.
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              The desks are internal functions, not personas. When we cite a benchmark, the source
              trail and the owning desk are visible in the methodology block on each page.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              How estimates and benchmarks are produced
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Estimates and benchmarks start with public platform documentation, creator-reported
              ranges, campaign norms, and historical benchmark distributions. We do not claim direct
              internal access to TikTok, YouTube, or any platform. We aggregate public and community
              signals, then convert those signals into transparent calculator inputs.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Every major calculator exposes its methodology and assumptions so users see what
              drives the result. If a payout range is volatile, we say so. If a model carries known
              blind spots, we document them. We prefer a clear estimate with caveats over a false
              sense of precision.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We review benchmark assumptions on a recurring schedule and revise when monetization
              programs, market behavior, or input quality change materially. Our full process lives
              on the{' '}
              <Link href="/methodology/" className="link">
                Methodology
              </Link>{' '}
              page, and the publishing workflow is documented in the{' '}
              <Link href="/editorial-policy/" className="link">
                Editorial Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              What makes TT Calculator different
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Four commitments separate the site from generic earnings estimators:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <strong>Transparent assumptions:</strong> each calculator shows the inputs and bands
                driving the result.
              </li>
              <li>
                <strong>No signup:</strong> every tool loads and runs without an account, paywall, or
                email gate.
              </li>
              <li>
                <strong>Methodology shown:</strong> assumptions, formulas, and limitations appear
                on-page and link to the{' '}
                <Link href="/methodology/" className="link">
                  Methodology
                </Link>{' '}
                page.
              </li>
              <li>
                <strong>Privacy by design:</strong> calculator inputs are processed in the browser,
                not shipped to a server for estimation.
              </li>
            </ul>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">
              Values and independence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We operate on four values: clarity, transparency, consistency, and editorial
              independence. Our pages make assumptions visible and units explicit. We avoid
              sensational claims and language that implies guaranteed outcomes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator is not affiliated with, endorsed by, or sponsored by TikTok,
              ByteDance, or any social platform. &quot;TikTok&quot; is a trademark of its owner and
              appears on this site for descriptive purposes only.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              We fund operations through advertising and related publishing revenue. Ads do not
              determine calculator outputs or editorial conclusions. Our advertising standards are
              documented in the{' '}
              <Link href="/compliance/advertising-disclosure/" className="link">
                Advertising Disclosure
              </Link>
              .
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Who we serve</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              TT Calculator serves solo creators, creator managers, small agencies, and brand-side
              teams that need quick directional modeling. The site fits people comparing options:
              RPM improvement versus brand deal volume, Shop conversion versus cross-platform
              strategy, or growth investment versus content cost.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Readers use TT Calculator before negotiation calls, campaign planning sessions, and
              monthly performance reviews. That practical use case shapes every page: concise
              inputs, explicit units, transparent assumptions, and a clear next action.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              To suggest a calculator, report a data issue, or ask how a formula was built, reach
              the team on the{' '}
              <Link href="/contact/" className="link">
                Contact TT Calculator
              </Link>{' '}
              page.
            </p>
          </section>

          <section className="mt-6 card p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Continue reading</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <Link href="/editorial-policy/" className="link">
                  Editorial Policy
                </Link>{' '}
                for our content process, corrections handling, and AI usage disclosures.
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
                <Link href="/faq/" className="link">
                  Frequently Asked Questions
                </Link>{' '}
                for answers on accuracy, privacy, and how tools are funded.
              </li>
              <li>
                <Link href="/contact/" className="link">
                  Contact TT Calculator
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
