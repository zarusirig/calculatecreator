import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils/cn';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  platform: string;
  metric: string;
  className?: string;
}

export function ToolCard({
  title,
  description,
  href,
  platform,
  metric,
  className,
}: ToolCardProps) {
  return (
    <article className={cn('tool-card', className)}>
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge>{platform}</Badge>
        <Badge tone="active">{metric}</Badge>
      </div>
      <h3 className="text-heading-md font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-body-sm text-neutral-600">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
      >
        Open
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
