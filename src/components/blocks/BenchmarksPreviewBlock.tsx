import Link from 'next/link';
import { StatCard } from '@/components/ui/StatCard';

interface BenchmarksPreviewBlockProps {
  stats: Array<{
    value: string;
    label: string;
    note: string;
  }>;
}

export function BenchmarksPreviewBlock({ stats }: BenchmarksPreviewBlockProps) {
  return (
    <section className="section-padding border-t border-neutral-200/70">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-heading-xl font-semibold text-neutral-900">Benchmarks preview</h2>
          <p className="mt-2 text-body-md text-neutral-600">
            Snapshot ranges to benchmark your current performance.
          </p>
        </div>
        <Link href="/benchmarks/" className="btn btn-secondary btn-md">
          View benchmarks
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} note={stat.note} />
        ))}
      </div>
    </section>
  );
}
