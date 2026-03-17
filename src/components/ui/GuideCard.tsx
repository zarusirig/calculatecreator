import Link from 'next/link';
import { Clock3 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface GuideCardProps {
  title: string;
  href: string;
  readingTime: string;
  updatedAt: string;
  excerpt: string;
  author?: string;
  className?: string;
}

export function GuideCard({
  title,
  href,
  readingTime,
  updatedAt,
  excerpt,
  author = 'TT Calculator Editorial',
  className,
}: GuideCardProps) {
  return (
    <article className={cn('guide-card', className)}>
      <p className="text-xs uppercase tracking-[0.08em] text-neutral-500">{author}</p>
      <h3 className="mt-3 text-heading-md font-semibold text-neutral-900">
        <Link href={href} className="transition-colors hover:text-primary-700">
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-body-sm text-neutral-600">{excerpt}</p>
      <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-3.5 w-3.5" />
          {readingTime}
        </span>
        <span>Updated {updatedAt}</span>
      </div>
    </article>
  );
}
