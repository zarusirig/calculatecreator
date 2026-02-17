import { cn } from '@/lib/utils/cn';

interface StatCardProps {
  value: string;
  label: string;
  note: string;
  className?: string;
}

export function StatCard({ value, label, note, className }: StatCardProps) {
  return (
    <article className={cn('stat-card', className)}>
      <p className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">{value}</p>
      <p className="mt-2 text-sm font-medium text-neutral-700">{label}</p>
      <p className="mt-1 text-xs text-neutral-500">{note}</p>
    </article>
  );
}
