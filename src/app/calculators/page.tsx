import type { Metadata } from 'next';
import Link from 'next/link';
import { ToolsDirectoryPage } from '@/components/tools/ToolsDirectoryPage';

export const metadata: Metadata = {
  title: "TikTok Calculators Directory for Creators",
  description: "Browse TikTok calculators for earnings, engagement, monetization planning, and growth analysis with transparent assumptions and practical creator benchmarks.",
  alternates: {
    canonical: 'https://ttcalculator.net/calculators/',
  },
};

export default function CalculatorsPage() {
  return (
    <>
      <ToolsDirectoryPage
        title="Calculators"
        description="Browse TikTok calculators for creator earnings, engagement rate, monetization planning, and growth analysis."
        canonicalPath="/calculators/"
        breadcrumbLabel="Calculators"
      />
      <section className="container-custom max-w-5xl mx-auto pb-16">
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
          Calculator categories
        </h2>
        <p className="text-body-sm text-neutral-700 mb-4">
          Two specialized hubs group related tools for deeper planning: commerce and ad
          performance, and creator utility tooling for tax, payout, and eligibility checks.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/calculators/commerce-ads/"
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-neutral-900 mb-1">Commerce &amp; Ads Calculators</h3>
            <p className="text-body-sm text-neutral-700">
              Shop profit, ad cost, and ROAS tools for TikTok commerce and advertising performance.
            </p>
            <span className="mt-3 inline-block text-body-sm text-primary-600 font-medium">
              Explore commerce calculators &rarr;
            </span>
          </Link>
          <Link
            href="/calculators/utility-tools/"
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-neutral-900 mb-1">Creator Utility Tools</h3>
            <p className="text-body-sm text-neutral-700">
              Tax, payout, and eligibility checkers that support creator business operations.
            </p>
            <span className="mt-3 inline-block text-body-sm text-primary-600 font-medium">
              Explore utility tools &rarr;
            </span>
          </Link>
        </div>
      </section>

      <section className="container-custom max-w-5xl mx-auto pb-16">
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
          What each calculator category measures
        </h2>
        <p className="text-body-md text-neutral-700 mb-6">
          The directory groups every tool by the creator question it answers. Each category below
          covers a distinct revenue or growth decision and draws its benchmarks from the same source
          set documented in the <Link href="/methodology/" className="text-primary-600 hover:underline">methodology</Link> reference.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 mb-1">Earnings</h3>
            <p className="text-body-sm text-neutral-700 mb-2">
              Estimates creator payouts across monetization streams such as ad revenue, gifts, and the Creator Rewards Program.
            </p>
            <p className="text-body-sm text-neutral-500">TikTok Money Calculator, RPM calculator, multi-platform earnings</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 mb-1">Engagement</h3>
            <p className="text-body-sm text-neutral-700 mb-2">
              Measures how viewers interact with content through completion, comments, saves, and shares.
            </p>
            <p className="text-body-sm text-neutral-500">Engagement rate, completion rate, save rate</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 mb-1">Brand Deals</h3>
            <p className="text-body-sm text-neutral-700 mb-2">
              Prices sponsored content and partnership value per post, campaign, or niche.
            </p>
            <p className="text-body-sm text-neutral-500">Brand deal rate, sponsorship ROI, niche profitability</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 mb-1">Growth</h3>
            <p className="text-body-sm text-neutral-700 mb-2">
              Projects audience expansion and reach from followers, hashtags, and posting cadence.
            </p>
            <p className="text-body-sm text-neutral-500">Follower growth, hashtag performance, posting time</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 mb-1">Commerce</h3>
            <p className="text-body-sm text-neutral-700 mb-2">
              Models TikTok Shop profit, ad cost, and return on ad spend for sellers and advertisers.
            </p>
            <p className="text-body-sm text-neutral-500">Shop break-even, campaign ROI, cost per result</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 mb-1">LIVE</h3>
            <p className="text-body-sm text-neutral-700 mb-2">
              Estimates gifts, coins, and diamond payouts earned during live streams.
            </p>
            <p className="text-body-sm text-neutral-500">Live gifts, coin earnings, diamond converter</p>
          </div>
        </div>
      </section>

      <section className="container-custom max-w-5xl mx-auto pb-16">
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
          How to choose the right calculator
        </h2>
        <p className="text-body-md text-neutral-700 mb-4">
          Match the tool to the decision in front of you. Earnings calculators answer how much money
          a creator makes, engagement calculators diagnose why content performs, and brand deal
          calculators set a defensible sponsorship price.
        </p>
        <ol className="space-y-3 text-body-md text-neutral-700">
          <li className="flex gap-3">
            <span className="font-semibold text-primary-600">1.</span>
            <span><strong className="text-neutral-900">Set the question</strong> — earnings, growth, engagement, or deal pricing.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-primary-600">2.</span>
            <span><strong className="text-neutral-900">Pick the category</strong> from the list above that answers that question.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-primary-600">3.</span>
            <span><strong className="text-neutral-900">Enter real inputs</strong> — followers, qualified views, niche, and region.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-primary-600">4.</span>
            <span><strong className="text-neutral-900">Compare the range</strong> against actual results, then adjust inputs.</span>
          </li>
        </ol>
      </section>

      <section className="container-custom max-w-5xl mx-auto pb-16">
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
          How these calculators produce estimates
        </h2>
        <p className="text-body-md text-neutral-700 mb-4">
          Every estimate combines your inputs with benchmark ranges gathered from publicly reported
          creator data, then applies a documented formula. Each calculator returns a low-to-high
          range rather than a single fixed number, because TikTok does not publish official per-view
          payout rates. Creator RPM commonly lands between <strong>$0.02 and $0.05</strong> per
          qualified view; the tools expose that band instead of a guaranteed rate. For per-category
          bands, see the <Link href="/data/rpm-rates-by-niche/" className="text-primary-600 hover:underline">TikTok RPM rates by niche</Link> data.
        </p>
        <p className="text-body-md text-neutral-700">
          The full formula set, source categories, and refresh schedule live in the{' '}
          <Link href="/methodology/" className="text-primary-600 hover:underline">methodology</Link> reference.
        </p>
      </section>

      <section className="container-custom max-w-5xl mx-auto pb-16">
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
          Calculators FAQ
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">How accurate are these TikTok calculator estimates?</h3>
            <p className="text-body-md text-neutral-700">
              The calculators return <strong>directional estimate ranges</strong>, not exact payouts.
              TikTok withholds official per-view rates, so every result reflects commonly reported
              creator benchmarks instead of a guaranteed figure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Are these calculators free, and do they require an account?</h3>
            <p className="text-body-md text-neutral-700">
              Every calculator is <strong>free</strong> and requires <strong>no signup</strong>. The
              tools run without a login or subscription.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">Do these tools store the numbers I enter?</h3>
            <p className="text-body-md text-neutral-700">
              Inputs <strong>stay in your browser</strong>. The calculators process values on the
              client side and send no personal data to a server.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">How often do the benchmark ranges update?</h3>
            <p className="text-body-md text-neutral-700">
              Benchmark ranges refresh on a <strong>rolling schedule</strong> as new creator-reported
              data arrives, rather than on a fixed annual cycle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
