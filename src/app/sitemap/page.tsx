import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: "TikTok Sitemap for Creator Earnings and Growth Guide",
  description: "Explore TikTok sitemap content with creator earnings context, engagement benchmarks, monetization guidance, and clear next-step recommendations.",
};

const sitemapGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Tools', href: '/tools/' },
      { label: 'Benchmarks', href: '/benchmarks/' },
      { label: 'Methodology', href: '/methodology/' },
    ],
  },
  {
    title: 'Editorial',
    links: [
      { label: 'Guides', href: '/guides/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
      { label: 'Editorial Policy', href: '/editorial-policy/' },
      { label: 'Advertising Disclosure', href: '/compliance/advertising-disclosure/' },
      { label: 'Glossary', href: '/glossary/' },
    ],
  },
];

export default function HtmlSitemapPage() {
  return (
    <div className="pb-16 pt-10">
      <Container className="max-w-4xl">
        <h1 className="text-display-sm font-bold text-neutral-900">HTML Sitemap</h1>
        <p className="mt-3 max-w-3xl text-body-md text-neutral-600">
          TikTok creators can use this sitemap to jump directly to earnings calculators, monetization
          guides, and benchmark datasets without relying on global navigation. Start with the path
          that matches your current goal: estimate income, improve engagement rate, compare platform
          options, or review policy and methodology pages.
        </p>
        <h2 className="mt-8 text-heading-md font-semibold text-neutral-900">How to use this sitemap efficiently</h2>
        <p className="mt-3 text-body-md text-neutral-600">
          Use a simple three-step flow when planning weekly creator operations. First, open your
          primary calculator to estimate current TikTok earnings and monetization performance. Second,
          validate assumptions with the relevant guides and data sections. Third, review policy and
          glossary pages when definitions or compliance details affect your decisions.
        </p>
        <ul className="mt-3 list-disc pl-5 text-body-md text-neutral-600 space-y-2">
          <li>Need a quick estimate? Start from Product links and open tools or benchmarks.</li>
          <li>Need strategy context? Use Editorial links to reach guides and FAQs.</li>
          <li>Need compliance clarity? Use Legal links before publishing sponsored content.</li>
        </ul>
        <p className="mt-3 text-body-md text-neutral-600">
          This structure helps reduce context switching when you are checking multiple inputs such as
          views, engagement, creator payouts, and brand deal assumptions in one workflow.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sitemapGroups.map((group) => (
            <section key={group.title} className="card p-6">
              <h2 className="text-heading-sm font-semibold text-neutral-900">{group.title}</h2>
              <ul className="mt-4 space-y-2">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-600 hover:text-primary-700">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <h2 className="mt-10 text-heading-md font-semibold text-neutral-900">
          High-priority creator paths
        </h2>
        <p className="mt-3 text-body-md text-neutral-600">
          For day-to-day execution, most creators cycle through a small set of pages: the calculator
          directory, the data hub, and the monetization guides. If you are building a repeatable
          operating cadence, save those pages first, then add topic-specific resources such as
          comparisons, niche earnings pages, and creator business references.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/tools/" className="btn btn-secondary btn-sm">
            TikTok Calculators
          </Link>
          <Link href="/data/" className="btn btn-secondary btn-sm">
            Data Hub
          </Link>
          <Link href="/guides/monetization-calculator-hub/" className="btn btn-secondary btn-sm">
            Monetization Guide Hub
          </Link>
          <Link href="/methodology/" className="btn btn-secondary btn-sm">
            Methodology
          </Link>
        </div>
        <p className="mt-4 text-body-md text-neutral-600">
          If you manage a team, treat this sitemap as an onboarding map: analysts can start with data
          and methodology, content operators can start with guides and benchmarks, and partnership
          managers can focus on monetization and compliance sections. A shared navigation baseline
          keeps reporting and planning aligned across roles.
        </p>
        <p className="mt-3 text-body-md text-neutral-600">
          We update this sitemap whenever major navigation groups change so creators and collaborators
          can always reach the latest TikTok tools, earnings data, and strategy references from one
          index page.
        </p>
      </Container>
    </div>
  );
}
