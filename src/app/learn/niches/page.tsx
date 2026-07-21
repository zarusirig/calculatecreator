import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesBySection } from '@/lib/content';
import { HubListingPage } from '@/components/articles/HubListingPage';

export const metadata: Metadata = {
  title: 'TikTok Niche Guides | Earnings by Content Category',
  description:
    'Browse niche guides that compare TikTok earnings, monetization patterns, and business models across major content categories.',
  alternates: { canonical: 'https://ttcalculator.net/learn/niches/' },
};

export default function NichesHubPage() {
  const articles = getArticlesBySection('guides/niches');
  return (
    <HubListingPage
      title="TikTok Niche Earnings Guides"
      description="Detailed earnings breakdowns and strategies for every major TikTok content niche. Find the most profitable niche for your content."
      section="guides/niches"
      articles={articles}
      parentPath="/learn/"
      parentLabel="Guides"
      calculatorLink={{ label: "Calculate niche profitability", href: "/calculators/niche-profitability/" }}
      supplementaryContent={
        <>
          <h2 className="text-heading-md font-semibold text-neutral-900">
            Why your TikTok niche sets your earnings ceiling
          </h2>
          <p className="mt-3 text-body-md text-neutral-700">
            Niche choice fixes the advertiser value attached to each view before content quality,
            posting cadence, or follower count enters the equation. A finance creator at a{' '}
            <strong>$0.05 RPM</strong> earns roughly 4.2x more than a comedy creator at a{' '}
            <strong>$0.012 RPM</strong> from the exact same five million monthly views. The gap
            between a high-value niche and an entertainment niche widens as views scale.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            High-RPM niches trade raw engagement for advertiser spend. Entertainment trades money for
            reach. A niche that pays poorly per view still builds income if it generates enough
            volume, strong LIVE gift revenue, or endemic brand deals. The trade matters because no
            single niche wins on RPM, engagement, and brand demand at once.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            Map the tradeoffs with verified figures in our{' '}
            <Link href="/learn/rpm-rates-by-niche/" className="text-primary-700 hover:text-primary-800">
              TikTok RPM rates by niche
            </Link>{' '}
            benchmark, then run your own scenario through the{' '}
            <Link href="/calculators/niche-profitability/" className="text-primary-700 hover:text-primary-800">
              niche profitability calculator
            </Link>{' '}
            before you commit to a category.
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            How major TikTok niches compare
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Each category below pairs a verified RPM band with an engagement rate and a monetization
            shape. Use the combination, not RPM alone, to judge a niche.
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              <strong>Finance and business:</strong> $0.05-$0.08 RPM, 4.8% engagement, the strongest
              brand deal and product demand of any category.
            </li>
            <li>
              <strong>Beauty and fashion:</strong> $0.03-$0.05 RPM, 6.8% engagement, a dense
              sponsorship market with repeat brand partners.
            </li>
            <li>
              <strong>Fitness and health:</strong> a top-earning niche driven by supplement,
              coaching, and digital program sales rather than per-view RPM.
            </li>
            <li>
              <strong>Education and learning:</strong> 5.4% engagement, durable search-driven traffic,
              and mid-tier RPM from intent-rich viewers.
            </li>
            <li>
              <strong>Comedy and entertainment:</strong> $0.012-$0.015 RPM, 8.5% engagement, the
              highest reach but the hardest category to monetize directly.
            </li>
          </ul>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">How to pick a niche</h3>
          <p className="mt-3 text-body-md text-neutral-700">
            Pick one niche for a single account, then expand into adjacent topics only after you
            cross 10,000 followers. Covering finance, gaming, and fitness on one account confuses the
            algorithm and dilutes brand positioning. Follow this sequence:
          </p>
          <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-700 space-y-2">
            <li>
              Start ultra-specific inside a sub-niche for the first three to six months to build
              authority fast.
            </li>
            <li>
              Post 10-15 videos across your top two to three niche candidates over two weeks and track
              views, engagement, and follower conversion.
            </li>
            <li>
              Confirm monetization potential before committing: real products to sell, brands already
              advertising, and proven creators earning from the category.
            </li>
            <li>
              Layer one adjacent topic at a time once a single niche proves profitable, rather than
              splitting focus across unrelated categories.
            </li>
          </ul>
          <p className="mt-3 text-body-md text-neutral-700">
            For the full decision framework, read our{' '}
            <Link href="/learn/niche-selection/" className="text-primary-700 hover:text-primary-800">
              TikTok niche selection guide
            </Link>{' '}
            and the{' '}
            <Link href="/learn/engagement-rates-by-niche/" className="text-primary-700 hover:text-primary-800">
              engagement rates by niche
            </Link>{' '}
            benchmark to validate each candidate against real category averages.
          </p>

          <h3 className="mt-6 text-heading-sm font-semibold text-neutral-900">
            Niche earnings FAQ
          </h3>
          <p className="mt-3 text-body-md text-neutral-700">
            <strong>Which TikTok niche pays the most?</strong>{' '}
            <strong>Finance and business</strong>, at a $0.05-$0.08 RPM. Advertisers pay premium rates
            to reach high-intent finance viewers, and brand deal budgets dwarf those of any other
            category.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            <strong>Which niche has the highest engagement?</strong>{' '}
            <strong>Comedy and entertainment, at 8.5%</strong> average engagement. Dance and
            choreography lead the platform at 9.2%, followed by pets and animals at 8.9%.
          </p>
          <p className="mt-3 text-body-md text-neutral-700">
            <strong>Can I run multiple niches on one account?</strong>{' '}
            <strong>No.</strong> Pick one niche for your main account and open separate accounts for
            other topics only after the first one proves profitable. Splitting niches confuses the
            algorithm and weakens brand deal pricing.
          </p>
        </>
      }
    />
  );
}
