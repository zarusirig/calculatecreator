import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'TikTok Growth Guides | Algorithm & Content Strategy',
  description:
    'Browse growth guides on TikTok SEO, analytics, posting strategy, content testing, and audience development.',
  alternates: { canonical: 'https://ttcalculator.net/guides/growth/' },
};

export default function GrowthHubPage() {
  const articles = getArticlesBySection('guides/growth');
  return (
    <HubListingPage
      title="TikTok Growth & Algorithm Guides"
      description="Data-backed strategies to grow your TikTok following. Understand the algorithm, optimize your content, and build a sustainable audience."
      section="guides/growth"
      articles={articles}
      parentPath="/guides/"
      parentLabel="Guides"
      calculatorLink={{ label: "Track your engagement rate", href: "/calculators/engagement-rate/" }}
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">
            The inputs that move TikTok growth
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            TikTok growth breaks down into five controllable inputs, and posting frequency is the
            strongest predictor of speed. Creators who post five to seven times a week reach the
            10,000-follower monetization threshold in a median of 4.5 months, against 11 months at two
            to three posts a week and over 18 months at one post a week or fewer. Cadence sets the
            ceiling, and the other four inputs decide how fast you reach it.
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              <strong>Posting cadence:</strong> three to five posts a week at your best windows, with a
              monthly review of timing as audience behavior shifts.
            </li>
            <li>
              <strong>Hook quality:</strong> the first one to three seconds determine whether a viewer
              stays, so lead with the payoff, not an introduction.
            </li>
            <li>
              <strong>Watch time and completion:</strong> the algorithm rewards high completion rates,
              because a video with 20,000 high-completion views beats 50,000 low-watch views for
              qualified reach.
            </li>
            <li>
              <strong>Engagement quality:</strong> saves and shares predict future distribution better
              than likes alone, since they signal higher viewer intent.
            </li>
            <li>
              <strong>Niche fit:</strong> a tight, defined niche lets the algorithm test your content
              against the right audience batch and compound distribution faster.
            </li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            Measure the engagement half of that list with the{' '}
            <Link href="/calculators/engagement-rate/" className="text-primary-700 hover:text-primary-800">
              TikTok engagement rate calculator
            </Link>{' '}
            across your last 10-20 videos, then convert weak metrics into tests with our{' '}
            <Link href="/guides/how-to-increase-engagement/" className="text-primary-700 hover:text-primary-800">
              guide to increasing TikTok engagement
            </Link>
            .
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            Realistic follower timelines
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Site data tracks how follower milestones arrive for creators who post five to seven times a
            week in a mid-value niche. Treat these ranges as planning targets, not guarantees, since
            niche choice alone shifts them by a factor of two to four.
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              <strong>1,000 followers:</strong> three weeks to two months, which unlocks TikTok LIVE.
            </li>
            <li>
              <strong>10,000 followers:</strong> three to six months, which opens the Creator Rewards
              Program.
            </li>
            <li>
              <strong>50,000 followers:</strong> eight to 14 months, which brings regular brand deal
              inquiries.
            </li>
            <li>
              <strong>100,000 followers:</strong> 12 to 20 months, which lifts brand deal rates into
              the $1,000-$5,000 per post tier.
            </li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            Engagement rate falls as you scale, so judge performance against your niche average, not the
            platform. Nano accounts of 1,000-10,000 followers average <strong>8.8%</strong>{' '}
            engagement, while accounts over one million average <strong>2.4%</strong>. A good engagement
            rate sits at 3-8% across most niches, with 10% or higher counting as excellent.
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">Algorithm basics</h3>
          <p className="mt-3 text-body-md text-neutral-700">
            The For You Page tests each new video on a small audience batch and expands distribution
            when watch time, completion, saves, and shares clear the average for that test group. Search
            now indexes spoken words, on-screen text, and captions, so videos optimized for searchable
            terms earn sustained traffic for weeks after the For You peak fades. A single viral video of
            10 million or more views lifts monthly earnings roughly three times for the next two to three
            months, but viral spikes stay unpredictable and never belong in an income plan.
          </p>
        </>
      }
    />
  );
}
