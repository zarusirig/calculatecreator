import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';
import { FAQSection } from '@/components/calculator/FAQSection';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

export const metadata: Metadata = {
  title: "TikTok Earnings Data and Benchmark Insights Guide 2026",
  description: "Review TikTok earnings data with benchmark ranges, monetization context, and clear interpretation guidance for creator decision making.",
  alternates: { canonical: 'https://ttcalculator.net/learn/earnings/' },
};

const earningsFaqs = [
  {
    question: 'How much does the average TikTok creator earn per month?',
    answer: 'The median TikTok creator earns $150 per month, and 67% make under $100. Full-time creators report a median of $2,800 per month, 14 times the part-time median.',
  },
  {
    question: 'How much does TikTok pay per 1,000 views?',
    answer: 'The Creator Rewards Program pays an estimated $0.50 to $2.00 per 1,000 qualified views in the US on videos over one minute. The legacy Creator Fund paid $0.02 to $0.05 per 1,000 views.',
  },
  {
    question: 'How long does it take to earn $1,000 a month on TikTok?',
    answer: 'Consistent creators reach $1,000 per month between months 8 and 14. First income lands in months 3 to 6, and full-time pay arrives between months 18 and 30.',
  },
];

export default function EarningsDataHubPage() {
  const articles = getArticlesBySection('data/earnings');
  return (
    <>
      <FAQPageSchema faqs={earningsFaqs} url="https://ttcalculator.net/learn/earnings/" />
      <HubListingPage
        title="TikTok Earnings Data & Research"
        description="Original earnings data and research for TikTok creators. RPM rates, brand deal benchmarks, and income distribution data you won't find anywhere else."
        section="data/earnings"
        articles={articles}
        parentPath="/learn/"
        parentLabel="Data & Insights"
        calculatorLink={{ label: "Calculate your earnings", href: "/calculators/tiktok-money/" }}
        supplementaryContent={
          <>
            <h2 className="text-heading-md font-semibold text-neutral-900">
              What TikTok earnings data covers
            </h2>
            <p className="mt-3 text-body-md text-neutral-700">
              TikTok earnings data quantifies what creators actually make: pay per view, income by
              country, income distribution, and growth timelines. The{' '}
              <strong className="font-semibold text-neutral-900">22 datasets</strong> in this hub
              answer one creator question: how much TikTok pays at your size, niche, and location.
            </p>
            <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
              How to use this hub
            </h2>
            <p className="mt-3 text-body-md text-neutral-700">
              Match your question to one of three dataset groups: pay benchmarks, country pay
              guides, and market research.
            </p>
            <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
              <li>
                <strong className="font-semibold text-neutral-900">Pay benchmarks (5 datasets)</strong>{' '}
                grade your payouts:{' '}
                <Link href="/learn/average-tiktok-earnings-per-views/" className="text-primary-700 hover:text-primary-800">
                  average TikTok earnings per 1K, 10K, 100K, and 1M views
                </Link>
                , the{' '}
                <Link href="/learn/tiktok-creator-income-distribution/" className="text-primary-700 hover:text-primary-800">
                  TikTok creator income distribution
                </Link>
                , the{' '}
                <Link href="/learn/tiktok-earnings-growth-timeline/" className="text-primary-700 hover:text-primary-800">
                  TikTok earnings growth timeline
                </Link>
                ,{' '}
                <Link href="/learn/fulltime-vs-parttime-creator-earnings/" className="text-primary-700 hover:text-primary-800">
                  full-time vs part-time TikTok creator earnings
                </Link>
                , and{' '}
                <Link href="/learn/seasonal-tiktok-earnings-trends/" className="text-primary-700 hover:text-primary-800">
                  seasonal TikTok earnings trends
                </Link>
                .
              </li>
              <li>
                <strong className="font-semibold text-neutral-900">Country pay guides (12 datasets)</strong>{' '}
                localize the rates. See{' '}
                <Link href="/learn/tiktok-pay-us-earnings/" className="text-primary-700 hover:text-primary-800">
                  how much TikTok pays in the US
                </Link>
                ,{' '}
                <Link href="/learn/tiktok-pay-uk-earnings/" className="text-primary-700 hover:text-primary-800">
                  in the UK
                </Link>
                , and{' '}
                <Link href="/learn/tiktok-pay-germany-earnings/" className="text-primary-700 hover:text-primary-800">
                  in Germany
                </Link>
                , with matching guides for Canada, Australia, France, Brazil, Mexico, India,
                Indonesia, the Philippines, and Nigeria.
              </li>
              <li>
                <strong className="font-semibold text-neutral-900">Market research (5 datasets)</strong>{' '}
                sizes the opportunity: the{' '}
                <Link href="/learn/tiktok-creator-economy-size/" className="text-primary-700 hover:text-primary-800">
                  TikTok creator economy size
                </Link>
                ,{' '}
                <Link href="/learn/tiktok-shop-gmv-growth/" className="text-primary-700 hover:text-primary-800">
                  TikTok Shop GMV growth
                </Link>
                ,{' '}
                <Link href="/learn/tiktok-advertising-rates-benchmarks/" className="text-primary-700 hover:text-primary-800">
                  TikTok advertising rates
                </Link>
                ,{' '}
                <Link href="/learn/tiktok-vs-youtube-rpm-by-niche/" className="text-primary-700 hover:text-primary-800">
                  TikTok vs YouTube RPM comparison by niche
                </Link>
                , and{' '}
                <Link href="/learn/top-tiktok-creators-income/" className="text-primary-700 hover:text-primary-800">
                  how much top TikTok creators make
                </Link>
                .
              </li>
            </ul>
            <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">
              How this data is maintained
            </h2>
            <p className="mt-3 text-body-md text-neutral-700">
              Six editorial desks maintain this hub, and the Research desk owns benchmark sourcing.
              Figures combine TikTok platform documentation, creator-reported earnings, and
              aggregated market benchmarks; conflicting sources publish as ranges. Datasets receive
              off-cycle reviews when TikTok changes a payout program. The full process sits in the{' '}
              <Link href="/methodology/" className="text-primary-700 hover:text-primary-800">
                data methodology
              </Link>
              .
            </p>
            <FAQSection faqs={earningsFaqs} pageName="TikTok Earnings Data" title="TikTok earnings data FAQ" />
          </>
        }
      />
    </>
  );
}
