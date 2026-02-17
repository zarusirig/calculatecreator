import Link from 'next/link';
import { Search } from 'lucide-react';
import type { ToolDirectoryItem } from '@/lib/content/site-data';
import { ToolCard } from '@/components/ui/ToolCard';

interface ToolGridBlockProps {
  title: string;
  description: string;
  tools: ToolDirectoryItem[];
  showViewAll?: boolean;
}

export function ToolGridBlock({
  title,
  description,
  tools,
  showViewAll = true,
}: ToolGridBlockProps) {
  return (
    <section className="section-padding">
      <div className="mb-8">
        <h2 className="text-display-sm font-bold text-neutral-900 md:text-heading-xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-body-md text-neutral-600">{description}</p>
      </div>

      <div className="mb-6 rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4">
        <label htmlFor="home-tool-search" className="sr-only">
          Search calculators
        </label>
        <div className="flex items-center gap-3">
          <Search className="h-4 w-4 text-neutral-400" />
          <input
            id="home-tool-search"
            type="text"
            readOnly
            value=""
            placeholder="Search calculators by goal, platform, or metric"
            className="w-full border-0 p-0 text-sm text-neutral-600 placeholder:text-neutral-400 focus:outline-none"
          />
          <Link href="/tools/" className="btn btn-secondary btn-sm">
            Search
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            platform={tool.platform}
            metric={tool.metric}
          />
        ))}
      </div>

      {showViewAll ? (
        <div className="mt-8">
          <Link href="/tools/" className="btn btn-secondary btn-md">
            View all calculators
          </Link>
        </div>
      ) : null}
    </section>
  );
}
