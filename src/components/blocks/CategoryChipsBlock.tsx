import Link from 'next/link';

const chips = [
  { label: 'Platform: TikTok', href: '/tools/' },
  { label: 'Goal: Earnings', href: '/tools/' },
  { label: 'Goal: Engagement', href: '/tools/' },
  { label: 'Goal: Growth', href: '/tools/' },
  { label: 'Metric: RPM', href: '/tools/' },
  { label: 'Metric: ROI', href: '/tools/' },
];

export function CategoryChipsBlock() {
  return (
    <section className="section-padding border-t border-neutral-200/70">
      <h2 className="text-heading-xl font-semibold text-neutral-900">Browse by category</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Find tools by platform, goal, or metric with one click.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Link
            key={chip.label}
            href={chip.href}
            className="inline-flex items-center rounded-pill border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
          >
            {chip.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
