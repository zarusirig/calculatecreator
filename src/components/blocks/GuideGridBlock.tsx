import Link from 'next/link';
import type { GuideItem } from '@/lib/content/site-data';
import { GuideCard } from '@/components/ui/GuideCard';

interface GuideGridBlockProps {
  guides: GuideItem[];
}

export function GuideGridBlock({ guides }: GuideGridBlockProps) {
  return (
    <section className="section-padding border-t border-neutral-200/70">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-heading-xl font-semibold text-neutral-900">Featured guides</h2>
          <p className="mt-2 text-body-md text-neutral-600">
            Practical editorial breakdowns that connect directly to calculators and benchmarks.
          </p>
        </div>
        <Link href="/guides/" className="btn btn-secondary btn-md">
          View all guides
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard
            key={guide.href}
            title={guide.title}
            href={guide.href}
            excerpt={guide.excerpt}
            readingTime={guide.readingTime}
            updatedAt={guide.updatedAt}
          />
        ))}
      </div>
    </section>
  );
}
