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
    canonical: 'https://tiktokcalculator.net/news/creator-rewards-program-launch/',
  },
};

export default function CreatorRewardsProgramLaunchPage() {
  return (
    <>
      <NewsArticleSchema
        headline="Creator Fund Replaced with Creator Rewards Program | TikTok News"
        description="TikTok support now directs creators from the discontinued Creator Fund to Creator Rewards, which emphasizes original public videos longer than 1 minute."
        url="https://tiktokcalculator.net/news/creator-rewards-program-launch/"
        datePublished="2026-01-01"
        dateModified="2026-03-15"
        image="https://tiktokcalculator.net/news/news-monetization-1024.webp"
        keywords={['creator rewards', 'creator fund', 'tiktok monetization', 'creator economy', 'earnings program']}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net' },
          { name: 'News', url: 'https://tiktokcalculator.net/news/' },
          { name: 'Creator Rewards Launch', url: 'https://tiktokcalculator.net/news/creator-rewards-program-launch/' },
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
              srcSet="/news/news-monetization-640.avif 640w, /news/news-monetization-1024.avif 1024w, /news/news-monetization-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-monetization-640.webp 640w, /news/news-monetization-1024.webp 1024w, /news/news-monetization-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-monetization-1024.webp"
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
              <span className="text-white/80 text-label-sm">Updated: March 15, 2026</span>
            </div>
            <h1 className="text-display-lg font-bold text-white mb-4">
              Creator Fund Replaced with Creator Rewards Program
            </h1>
            <p className="text-heading-md text-white/90">
              The Creator Fund is no longer available. TikTok now routes eligible creators to Creator Rewards, which adds stricter content requirements for original public videos longer than 1 minute.
            </p>
          </div>
        </section>

        <div className="container-custom max-w-4xl py-12 space-y-8">
          <Card className="bg-green-50 border-2 border-green-200">
            <h2 className="text-heading-lg font-semibold text-green-900 mb-3">
              Key Takeaway
            </h2>
            <p className="text-body-md text-green-800">
              The major change is not a jump from 1,000 followers to 10,000 followers. TikTok support now positions Creator Rewards as the replacement program, while emphasizing longer original videos and qualified views inside supported regions.
            </p>
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
                  <p className="text-body-sm text-neutral-700">If you still need to benchmark older payouts, use the legacy Creator Fund estimator rather than treating it as an active calculator.</p>
                </div>
              </li>
            </ol>
          </Card>

          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Current resources
            </h2>
            <div className="grid gap-3">
              <Link
                href="/guides/creator-rewards-program/"
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
