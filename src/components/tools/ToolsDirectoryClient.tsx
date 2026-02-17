'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import type { ToolDirectoryItem } from '@/lib/content/site-data';
import { ToolCard } from '@/components/ui/ToolCard';

type SortMode = 'popular' | 'new' | 'az';

interface ToolsDirectoryClientProps {
  tools: ToolDirectoryItem[];
  initialFilters?: {
    platform?: string;
    goal?: string;
    metric?: string;
  };
}

const PAGE_SIZE = 9;

export function ToolsDirectoryClient({ tools, initialFilters }: ToolsDirectoryClientProps) {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState(initialFilters?.platform?.toLowerCase() || 'all');
  const [goal, setGoal] = useState(initialFilters?.goal?.toLowerCase() || 'all');
  const [metric, setMetric] = useState(initialFilters?.metric?.toLowerCase() || 'all');
  const [sortMode, setSortMode] = useState<SortMode>('popular');
  const [page, setPage] = useState(1);

  const platforms = useMemo(
    () => ['all', ...Array.from(new Set(tools.map((tool) => tool.platform)))],
    [tools]
  );
  const goals = useMemo(
    () => ['all', ...Array.from(new Set(tools.map((tool) => tool.goal.toLowerCase())))],
    [tools]
  );
  const metrics = useMemo(
    () => ['all', ...Array.from(new Set(tools.map((tool) => tool.metric.toLowerCase())))],
    [tools]
  );

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const base = tools.filter((tool) => {
      const matchesQuery =
        !normalizedQuery ||
        tool.title.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.platform.toLowerCase().includes(normalizedQuery) ||
        tool.metric.toLowerCase().includes(normalizedQuery);

      const matchesPlatform =
        platform === 'all' || tool.platform.toLowerCase() === platform;
      const matchesGoal = goal === 'all' || tool.goal.toLowerCase() === goal;
      const matchesMetric = metric === 'all' || tool.metric.toLowerCase() === metric;

      return matchesQuery && matchesPlatform && matchesGoal && matchesMetric;
    });

    if (sortMode === 'az') {
      return [...base].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortMode === 'new') {
      return [...base].sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    }

    return [...base].sort((a, b) => Number(Boolean(b.popular)) - Number(Boolean(a.popular)));
  }, [goal, metric, platform, query, sortMode, tools]);

  const totalPages = Math.max(1, Math.ceil(filteredTools.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filteredTools.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const startResult = filteredTools.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const endResult = filteredTools.length === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, filteredTools.length);

  const handleResetPage = () => setPage(1);

  return (
    <div>
      <div className="card mb-6 p-4 md:p-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          <label className="lg:col-span-2">
            <span className="label">Search</span>
            <div className="input-shell">
              <Search className="ml-3 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                className="input pl-2"
                placeholder="Search tools"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleResetPage();
                }}
              />
            </div>
          </label>

          <label>
            <span className="label">Platform</span>
            <select
              className="input"
              value={platform}
              onChange={(e) => {
                setPlatform(e.target.value);
                handleResetPage();
              }}
            >
              {platforms.map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item === 'all' ? 'All platforms' : item}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="label">Goal</span>
            <select
              className="input"
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                handleResetPage();
              }}
            >
              {goals.map((item) => (
                <option key={item} value={item}>
                  {item === 'all' ? 'All goals' : item[0].toUpperCase() + item.slice(1)}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="label">Metric</span>
            <select
              className="input"
              value={metric}
              onChange={(e) => {
                setMetric(e.target.value);
                handleResetPage();
              }}
            >
              {metrics.map((item) => (
                <option key={item} value={item}>
                  {item === 'all' ? 'All metrics' : item}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="label">Sort</span>
            <select
              className="input"
              value={sortMode}
              onChange={(e) => {
                setSortMode(e.target.value as SortMode);
                handleResetPage();
              }}
            >
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="az">A-Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {paginated.map((tool) => (
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

      {paginated.length === 0 ? (
        <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
          No tools matched your filters. Try broadening platform, goal, or metric.
        </div>
      ) : null}

      <div className="mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-neutral-600">
          Showing {startResult}-{endResult} of {filteredTools.length} tools
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>
          <span className="rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
