import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { CheckCircle, Clock, Eye, Globe, Video, XCircle } from 'lucide-react';
import { NewsArticleSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Creator Fund Replaced by Creator Rewards Program',
  description: 'TikTok now points creators from the discontinued Creator Fund to Creator Rewards. This page summarizes the current requirements and the main program changes.',
  keywords: ['creator rewards', 'creator fund', 'tiktok monetization', 'creator economy', 'earnings program'],
  alternates: {
    canonical: 'https://ttcalculator.net/news/creator-rewards-program-launch/',
  },
};

export default function CreatorRewardsProgramLaunchPage() {
  return (
    <>
      <NewsArticleSchema
        headline="Creator Fund Replaced with Creator Rewards Program | TikTok News"
        description="TikTok support now directs creators from the discontinued Creator Fund to Creator Rewards, which emphasizes original public videos longer than 1 minute."
        url="https://ttcalculator.net/news/creator-rewards-program-launch/"
        datePublished="2026-01-01"
        dateModified="2026-07-13"
        image="https://ttcalculator.net/featured/creator-rewards-program-launch-1024.webp"
        keywords={['creator rewards', 'creator fund', 'tiktok monetization', 'creator economy', 'earnings program']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ttcalculator.net' },
          { name: 'News', url: 'https://ttcalculator.net/news/' },
          { name: 'Creator Rewards Launch', url: 'https://ttcalculator.net/news/creator-rewards-program-launch/' },
        ]}
      />

      <div className="min-h-screen bg-neutral-50">
        <nav className="bg-white border-b border-neutral-200 py-3">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
              <Link href="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <Link href="/news/" className="hover:text-primary-600">News</Link>
              <span>/</span>
              <span className="text-neutral-900">Creator Rewards Launch</span>
            </div>
          </div>
        </nav>

        <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 py-12">
          <picture>
            <source
              type="image/avif"
              srcSet="/featured/creator-rewards-program-launch-640.avif 640w, /featured/creator-rewards-program-launch-1024.avif 1024w, /featured/creator-rewards-program-launch-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/featured/creator-rewards-program-launch-640.webp 640w, /featured/creator-rewards-program-launch-1024.webp 1024w, /featured/creator-rewards-program-launch-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/featured/creator-rewards-program-launch-1024.webp"
              alt="Featured image for Creator Fund Replaced with Creator Rewards Program"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
          <div className="container-custom max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-label-sm font-semibold text-green-600">
                PROGRAM CHANGE
              </span>
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-label-sm font-semibold text-white">
                Monetization
              </span>
              <span className="text-white/80 text-label-sm">Updated: July 13, 2026</span>
            </div>
            <h1 className="text-display-lg font-bold text-white mb-4">
              Creator Fund Replaced with Creator Rewards Program
            </h1>
            <p className="text-heading-md text-white/90">
              The Creator Fund is no longer available. Creator Rewards replaced it on January 1, 2026, and pays an estimated $0.50–$2.00 per 1,000 qualified views for original public videos longer than 1 minute.
            </p>
          </div>
        </section>

        <div className="container-custom max-w-4xl py-12 space-y-8">
          <Card className="bg-green-50 border-2 border-green-200">
            <h2 className="text-heading-lg font-semibold text-green-900 mb-3">
              Key Takeaway
            </h2>
            <p className="text-body-md text-green-800">
              Creator Rewards replaced the discontinued Creator Fund on <strong>January 1, 2026</strong>. The entry thresholds stay identical — 10,000 followers and 100,000 views in 30 days — but the pay rate rises from the Fund&apos;s $0.02–$0.05 to an estimated <strong>$0.50–$2.00 per 1,000 qualified views</strong>, and only original public videos longer than 1 minute earn.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              What Changed at Launch
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Five things changed at launch: the pay rate, the video rule, the views that count, the eligible account types, and the application path.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <p className="text-body-md text-neutral-700">
                  <strong>Pay rate:</strong> creator-reported RPM rises from $0.02–$0.05 per 1,000 views under the Fund to $0.50–$2.00 per 1,000 qualified US views — roughly 10–40x.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <p className="text-body-md text-neutral-700">
                  <strong>Video rule:</strong> only original public videos longer than 1 minute earn rewards; short clips and reposts earn nothing.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <p className="text-body-md text-neutral-700">
                  <strong>View counting:</strong> a qualified view is a unique For You feed view watched for more than 5 seconds, and rewards begin after 1,000 qualified views per video.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <p className="text-body-md text-neutral-700">
                  <strong>Account types:</strong> Personal accounts in good standing only — Business, political, and government accounts are excluded.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <p className="text-body-md text-neutral-700">
                  <strong>Application path:</strong> creators apply in-app through TikTok Studio, and TikTok typically replies within about 3 days.
                </p>
              </li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Creator Fund vs. Creator Rewards
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="p-3 text-left text-heading-sm font-semibold text-neutral-900">Criteria</th>
                    <th className="p-3 text-left text-heading-sm font-semibold text-rose-900">Creator Fund (legacy)</th>
                    <th className="p-3 text-left text-heading-sm font-semibold text-green-900">Creator Rewards (current)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">Status</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 text-rose-800">
                        <XCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Discontinued</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Active in supported regions</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">Follower requirement</td>
                    <td className="p-3 text-rose-800">10,000 followers</td>
                    <td className="p-3 text-green-800">10,000 followers</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">30-day view requirement</td>
                    <td className="p-3 text-rose-800">100,000 views</td>
                    <td className="p-3 text-green-800">100,000 views</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">Video rule</td>
                    <td className="p-3 text-rose-800">Legacy short and long videos could qualify</td>
                    <td className="p-3 text-green-800">Original public videos longer than 1 minute</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">Qualified views</td>
                    <td className="p-3 text-rose-800">Legacy pooled payout model</td>
                    <td className="p-3 text-green-800">Rewards begin after 1,000 qualified For You feed views</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">US pay rate (estimated)</td>
                    <td className="p-3 text-rose-800">$0.02–$0.05 per 1,000 views</td>
                    <td className="p-3 text-green-800">$0.50–$2.00 per 1,000 qualified views</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">Age requirement</td>
                    <td className="p-3 text-rose-800">18+</td>
                    <td className="p-3 text-green-800">18+ (19 in South Korea)</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-3 font-semibold text-neutral-900">Account type</td>
                    <td className="p-3 text-rose-800">Personal accounts</td>
                    <td className="p-3 text-green-800">Personal accounts only — no Business, political, or government accounts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Primary use</td>
                    <td className="p-3 text-rose-800">Historical reference only</td>
                    <td className="p-3 text-green-800">Current TikTok program for eligible creators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Current Creator Rewards requirements
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <h3 className="text-heading-sm font-semibold text-blue-900">100,000 views in the last 30 days</h3>
                </div>
                <p className="text-body-sm text-blue-800">
                  TikTok support lists 100,000 recent views as a core eligibility threshold for creators entering the current program.
                </p>
              </div>
              <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <h3 className="text-heading-sm font-semibold text-purple-900">10,000 followers and good standing</h3>
                </div>
                <p className="text-body-sm text-purple-800">
                  TikTok also requires at least 10,000 followers plus an account in good standing.
                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <Video className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <h3 className="text-heading-sm font-semibold text-green-900">Original public videos longer than 1 minute</h3>
                </div>
                <p className="text-body-sm text-green-800">
                  This is the clearest operational difference from the old Fund. The current program is structured around longer original videos and qualified views.
                </p>
              </div>
              <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <h3 className="text-heading-sm font-semibold text-amber-900">Supported regions only</h3>
                </div>
                <p className="text-body-sm text-amber-800">
                  Availability still depends on location, so creators should verify the current region list inside TikTok support and Creator Tools.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-amber-50">
            <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
              What happens to legacy Creator Fund earnings?
            </h2>
            <p className="text-body-md text-amber-800 mb-3">
              TikTok support says collected Creator Fund earnings remain available, and enrolling in Creator Rewards does not remove previously collected rewards.
            </p>
            <p className="text-body-sm text-amber-800">
              That means the practical job for most creators is to treat the Fund as archive history and plan around the current program instead.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              How RPM works in the Creator Rewards Program
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Creator Rewards pays on qualified views, not raw play counts. A qualified view is a
              unique For You feed view watched for more than 5 seconds, and TikTok begins counting
              rewards only after a video accrues <strong>1,000 qualified For You feed views</strong>.
              Payouts then multiply qualified views by a revenue-per-mille (RPM) rate.
            </p>
            <p className="text-body-md text-neutral-700 mb-4">
              TikTok publishes no official rate card. Across publicly reported creator data,
              Creator Rewards RPM commonly falls between <strong>$0.50 and $2.00 per 1,000
              qualified US views</strong> — roughly 10–40x the legacy Fund&apos;s $0.02–$0.05. Four
              factors move a creator&apos;s RPM: viewer geography, content niche, average watch
              time, and audience demographics. Niche shifts the rate most: finance and business
              content runs $1.50–$3.00 per 1,000 qualified views, technology $1.00–$2.50, and
              entertainment $0.40–$1.00.
            </p>
            <p className="text-body-md text-neutral-700">
              For per-category bands, see the{' '}
              <Link href="/learn/rpm-rates-by-niche/" className="text-primary-600 hover:underline">
                TikTok RPM rates by niche
              </Link>{' '}
              data. The full eligibility breakdown lives in the{' '}
              <Link href="/learn/creator-rewards-program/" className="text-primary-600 hover:underline">
                TikTok Creator Rewards Program
              </Link>{' '}
              guide.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              What this means for earnings estimates
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Because TikTok withholds official per-view rates, any Creator Rewards earnings figure
              is a <strong>directional estimate</strong>, not a guaranteed payout. At the commonly
              reported band, 1 million qualified views return roughly <strong>$500–$2,000</strong>.
              The calculators apply that band to a creator&apos;s qualified views and return a
              low-to-high range rather than a single fixed number.
            </p>
            <p className="text-body-md text-neutral-700 mb-4">
              The formulas, source categories, and refresh schedule that produce these ranges are
              documented in the{' '}
              <Link href="/methodology/" className="text-primary-600 hover:underline">methodology</Link>{' '}
              reference. The{' '}
              <Link href="/calculators/tiktok-money/" className="text-primary-600 hover:underline">
                TikTok Money Calculator
              </Link>{' '}
              applies the same RPM band to estimate total creator earnings.
            </p>
            <p className="text-body-md text-neutral-700">
              Three practices keep estimates realistic: enter a niche-specific RPM instead of the
              platform average, count qualified views instead of total views, and rerun the estimate
              monthly as benchmarks refresh.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              What to verify in the TikTok app
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Five checks inside TikTok Studio confirm whether the program pays you: eligibility
              numbers, region, account type, application status, and payout settings.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-body-sm font-semibold text-white">1</span>
                <p className="text-body-md text-neutral-700">
                  <strong>Eligibility numbers.</strong> Confirm 10,000 followers and 100,000 views
                  in the last 30 days under Profile → Menu → TikTok Studio → Creator Rewards Program.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-body-sm font-semibold text-white">2</span>
                <p className="text-body-md text-neutral-700">
                  <strong>Region availability.</strong> The rollout has included the United States,
                  United Kingdom, France, Germany, Japan, South Korea, and Brazil — the in-app list
                  is authoritative.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-body-sm font-semibold text-white">3</span>
                <p className="text-body-md text-neutral-700">
                  <strong>Account type.</strong> A Personal account in good standing is required;
                  Business, political, and government accounts do not qualify.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-body-sm font-semibold text-white">4</span>
                <p className="text-body-md text-neutral-700">
                  <strong>Application status.</strong> TikTok typically replies within about 3 days;
                  rejected creators appeal within 30 days or re-apply after that window.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-body-sm font-semibold text-white">5</span>
                <p className="text-body-md text-neutral-700">
                  <strong>Payout settings.</strong> Link PayPal or a bank account in Creator Tools;
                  earnings pass a validation period before withdrawal, and most creators withdraw on
                  a roughly monthly cycle.
                </p>
              </li>
            </ol>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Impact by creator tier
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              The launch affects three creator tiers differently: accounts under 10,000 followers
              stay excluded, mid-size accounts gain real per-view income, and large accounts gain a
              paying back catalog.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50 p-5">
                <h3 className="text-heading-sm font-semibold text-rose-900 mb-2">Under 10,000 followers</h3>
                <p className="text-body-sm text-rose-800">
                  <strong>Not eligible</strong> for Creator Rewards. LIVE Gifts open at 1,000
                  followers and TikTok Shop affiliate access opens at 5,000, so smaller accounts
                  monetize there first. The{' '}
                  <Link href="/learn/tiktok-monetization-requirements/" className="text-primary-600 hover:underline">
                    TikTok monetization requirements
                  </Link>{' '}
                  guide compares every threshold.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
                <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">10,000–100,000 followers</h3>
                <p className="text-body-sm text-amber-800">
                  Per-view income becomes meaningful for the first time: 500,000 qualified monthly
                  views return roughly <strong>$250–$1,000</strong> at the reported band, versus
                  about $10–$25 under the old Fund. Videos longer than 1 minute are the entry ticket.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5">
                <h3 className="text-heading-sm font-semibold text-green-900 mb-2">100,000+ followers</h3>
                <p className="text-body-sm text-green-800">
                  A back catalog of original long-form videos keeps earning: 1 million qualified
                  monthly views return roughly <strong>$500–$2,000</strong>, versus about $20–$50
                  under the Fund rates documented in the{' '}
                  <Link href="/learn/tiktok-creator-fund/" className="text-primary-600 hover:underline">
                    TikTok Creator Fund (Discontinued)
                  </Link>{' '}
                  guide.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              What creators should do now
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 font-semibold text-white">1</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Check Creator Rewards eligibility</p>
                  <p className="text-body-sm text-neutral-700">Confirm followers, 30-day views, region, and account standing before changing your monetization plan.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 font-semibold text-white">2</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Shift current content planning toward longer original videos</p>
                  <p className="text-body-sm text-neutral-700">The strongest program-level change is the emphasis on original public videos longer than 1 minute.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 font-semibold text-white">3</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Use legacy Fund numbers only for comparison</p>
                  <p className="text-body-sm text-neutral-700">Benchmark older payouts with the legacy Creator Fund estimator rather than treating it as an active calculator.</p>
                </div>
              </li>
            </ol>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Creator Rewards Program FAQ
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Is the Creator Rewards Program the same as the old Creator Fund?
                </h3>
                <p className="text-body-md text-neutral-700">
                  <strong>No.</strong> Creator Rewards replaces the discontinued Fund and adds three
                  stricter rules: original content, public videos longer than one minute, and rewards
                  that begin after 1,000 qualified For You feed views.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  How much does the Creator Rewards Program pay per view?
                </h3>
                <p className="text-body-md text-neutral-700">
                  Creator Rewards RPM commonly lands between <strong>$0.50 and $2.00 per 1,000
                  qualified US views</strong>, based on publicly reported creator data. TikTok
                  publishes no official rate, so individual payouts move with niche, geography,
                  and watch time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  When did Creator Rewards replace the Creator Fund?
                </h3>
                <p className="text-body-md text-neutral-700">
                  Creator Rewards replaced the Creator Fund on <strong>January 1, 2026</strong>,
                  after TikTok closed new Fund enrollments in March 2024 and distributed final Fund
                  payouts in Q3 2024.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  What counts as a qualified view in Creator Rewards?
                </h3>
                <p className="text-body-md text-neutral-700">
                  A qualified view is a <strong>unique For You feed view watched for more than 5
                  seconds</strong>, and a video starts earning after it passes 1,000 qualified views.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Can creators still access money earned from the Creator Fund?
                </h3>
                <p className="text-body-md text-neutral-700">
                  <strong>Yes.</strong> Previously collected Creator Fund earnings remain available,
                  and enrolling in Creator Rewards does not remove past payouts.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Current resources
            </h2>
            <div className="grid gap-3">
              <Link
                href="/learn/creator-rewards-program/"
                className="flex items-center justify-between rounded-lg border-2 border-transparent bg-white p-4 transition-colors hover:border-primary-500"
              >
                <span className="font-semibold text-neutral-900">Creator Rewards Program guide</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/calculators/tiktok-creator-fund/"
                className="flex items-center justify-between rounded-lg border-2 border-transparent bg-white p-4 transition-colors hover:border-primary-500"
              >
                <span className="font-semibold text-neutral-900">Legacy Creator Fund estimator</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/calculators/tiktok-money/"
                className="flex items-center justify-between rounded-lg border-2 border-transparent bg-white p-4 transition-colors hover:border-primary-500"
              >
                <span className="font-semibold text-neutral-900">TikTok Money Calculator</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/calculators/rpm/"
                className="flex items-center justify-between rounded-lg border-2 border-transparent bg-white p-4 transition-colors hover:border-primary-500"
              >
                <span className="font-semibold text-neutral-900">TikTok RPM Calculator</span>
                <span className="text-primary-600">→</span>
              </Link>
            </div>
          </Card>

          <Card className="bg-gray-50">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Official sources
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://support.tiktok.com/en/business-and-creator/creator-fund-us/creator-fund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
                >
                  TikTok support: Creator Fund is no longer available →
                </a>
              </li>
              <li>
                <a
                  href="https://support.tiktok.com/en/business-and-creator/creator-rewards-program/creator-rewards-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
                >
                  TikTok support: Creator Rewards Program requirements and qualified views →
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
