import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'TikTok Monetization Guides | Creator Revenue Strategy',
  description:
    'Browse monetization guides for TikTok income streams, eligibility rules, pricing, and strategies to build more predictable creator revenue.',
  alternates: { canonical: 'https://ttcalculator.net/guides/monetization/' },
};

export default function MonetizationHubPage() {
  const articles = getArticlesBySection('guides/monetization');
  return (
    <HubListingPage
      title="TikTok Monetization Guides"
      description="Everything you need to know about making money on TikTok. From Creator Fund to brand deals to TikTok Shop — comprehensive guides backed by real earnings data."
      section="guides/monetization"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
      calculatorLink={{ label: "Calculate your TikTok earnings", href: "/calculators/tiktok-money/" }}
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">
            The five TikTok monetization streams
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok pays creators through five distinct streams, and each unlocks at a different
            follower threshold with a different revenue shape. The median creator earns a first dollar
            67 days in, then layers streams as milestones clear. Creators who activate three streams in
            their first year reach $1,000 a month about 40% faster than single-source creators.
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              <strong>Creator Rewards Program:</strong> requires 10,000 followers, 100,000 monthly
              views, and videos longer than 60 seconds, paying per qualified view.
            </li>
            <li>
              <strong>Brand deals:</strong> no platform minimum, priced at $10-$25 per 1,000 followers
              per post at the micro tier and far higher in finance, tech, and health niches.
            </li>
            <li>
              <strong>LIVE gifts:</strong> unlocks at 1,000 followers, converts viewer coins into
              cash, and runs strongest in gaming and entertainment.
            </li>
            <li>
              <strong>TikTok Shop affiliate:</strong> requires 5,000 followers and pays 5-20%
              commissions on in-app product sales.
            </li>
            <li>
              <strong>Ad revenue and subscriptions:</strong> opens alongside the 10,000-follower tier
              through Series and monthly subscriptions.
            </li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            Project total income across these streams with the{' '}
            <Link href="/calculators/tiktok-money/" className="text-primary-700 hover:text-primary-800">
              TikTok money calculator
            </Link>
            , and ground every per-view estimate in real rates from our{' '}
            <Link href="/data/rpm-rates-by-niche/" className="text-primary-700 hover:text-primary-800">
              RPM rates by niche
            </Link>{' '}
            benchmark.
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            How the eligibility thresholds stack
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Two milestones control most monetization. The <strong>1,000-follower</strong> mark opens
            TikTok LIVE and gift income. The <strong>10,000-follower</strong> mark, paired with 100,000
            monthly views and videos over 60 seconds, unlocks the Creator Rewards Program, Series, and
            Subscriptions. Earnings inflect sharply at 10,000 and again at 100,000 followers, where
            brand deal rates jump from the $100-$500 nano tier to the $1,000-$5,000 micro tier.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Below the 10,000-follower line, creators still earn. Micro-influencers under 10,000
            followers generate <strong>$200-$2,000 a month</strong> through affiliate links, UGC
            content, and small sponsorships, with 1,000-10,000 follower accounts producing 8-12%
            engagement, roughly three times the engagement of accounts over 100,000 followers. Read
            the program mechanics in our{' '}
            <Link href="/guides/tiktok-creator-fund/" className="text-primary-700 hover:text-primary-800">
              TikTok Creator Fund guide
            </Link>{' '}
            and the full eligibility breakdown in our{' '}
            <Link href="/guides/tiktok-monetization-requirements/" className="text-primary-700 hover:text-primary-800">
              TikTok monetization requirements
            </Link>{' '}
            checklist.
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            TikTok monetization FAQ
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            <strong>How many followers do you need to make money on TikTok?</strong>{' '}
            <strong>1,000 followers</strong> unlocks LIVE gifts, and <strong>10,000 followers</strong>{' '}
            plus 100,000 monthly views and 60-second-plus videos unlocks the Creator Rewards Program.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            <strong>How much does TikTok pay per 1,000 views?</strong>{' '}
            <strong>Roughly $0.012 to $0.05 per 1,000 views</strong> under the Creator Rewards Program,
            with finance near $0.05 and comedy near $0.012. Niche and viewer location set the rate.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            <strong>What is the minimum TikTok withdrawal?</strong>{' '}
            <strong>$10</strong> in most countries, with funds arriving 15-30 days after a manual
            withdrawal request.
          </p>
        </>
      }
    />
  );
}
