import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'Learn TikTok Creator Earnings, Growth & Monetization',
  description:
    'The full TikTok creator knowledge base: earnings data, monetization guides, growth strategy, niche breakdowns, and platform benchmarks — all in one place.',
  alternates: { canonical: 'https://ttcalculator.net/learn/' },
};

const TOPIC_HUBS: { href: string; label: string }[] = [
  { href: '/learn/monetization/', label: 'Monetization guides' },
  { href: '/learn/growth/', label: 'Growth & algorithm' },
  { href: '/learn/business/', label: 'Creator business & tax' },
  { href: '/learn/niches/', label: 'Niche breakdowns' },
  { href: '/learn/earnings/', label: 'Earnings data' },
  { href: '/learn/engagement/', label: 'Engagement benchmarks' },
  { href: '/learn/platform-comparisons/', label: 'Platform comparisons' },
  { href: '/learn/reference/', label: 'Reference tables' },
];

export default function LearnIndexPage() {
  const articles = getArticlesBySection('learn');
  return (
    <HubListingPage
      title="TikTok Creator Learn Center"
      description="Data-backed guides, benchmarks, and reference tables covering how TikTok creators earn, grow, and monetize — pair any topic with the matching calculator."
      section="learn"
      articles={articles}
      parentPath="/"
      parentLabel="Home"
      calculatorLink={{ label: 'Estimate your TikTok earnings', href: '/calculators/tiktok-money/' }}
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">Browse by topic</h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Every article is written to sit next to a calculator, so you can read the method and then
            run your own numbers. Start with a topic hub below, or scan the full index underneath.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {TOPIC_HUBS.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-primary-700 hover:text-primary-800">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
