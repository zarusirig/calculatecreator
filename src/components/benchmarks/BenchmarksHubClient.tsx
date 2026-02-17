'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { StatCard } from '@/components/ui/StatCard';

interface BenchmarkRow {
  id: string;
  platform: string;
  niche: string;
  metric: string;
  range: string;
  note: string;
  toolHref: string;
  guideHref: string;
}

const benchmarkRows: BenchmarkRow[] = [
  {
    id: 'tiktok-finance-rpm',
    platform: 'TikTok',
    niche: 'Finance',
    metric: 'RPM',
    range: '$0.05-$0.12',
    note: 'Often higher with US-heavy audiences',
    toolHref: '/calculators/commerce-ads/rpm-cpm/',
    guideHref: '/guides/monetization-calculator-hub/',
  },
  {
    id: 'tiktok-lifestyle-rpm',
    platform: 'TikTok',
    niche: 'Lifestyle',
    metric: 'RPM',
    range: '$0.02-$0.05',
    note: 'Directional estimate from broad creator samples',
    toolHref: '/calculators/commerce-ads/rpm-cpm/',
    guideHref: '/guides/tiktok-growth-hub/',
  },
  {
    id: 'tiktok-engagement-median',
    platform: 'TikTok',
    niche: 'All niches',
    metric: 'Engagement rate',
    range: '2%-8%',
    note: 'Short-format content benchmark range',
    toolHref: '/calculators/engagement-influence/engagement/',
    guideHref: '/guides/tiktok-growth-hub/',
  },
  {
    id: 'creator-brand-deal',
    platform: 'Brand Partnerships',
    niche: 'All niches',
    metric: 'Deal value',
    range: '$200-$10,000+',
    note: 'Range expands by follower tier and deliverables',
    toolHref: '/calculators/engagement-influence/influencer-pricing/',
    guideHref: '/guides/tiktok-series-monetization/',
  },
  {
    id: 'tiktok-shop-commission',
    platform: 'TikTok Shop',
    niche: 'Commerce',
    metric: 'Commission',
    range: '2%-20%',
    note: 'Depends on category and seller terms',
    toolHref: '/calculators/commerce-ads/shop-profit/',
    guideHref: '/guides/tiktok-ads-hub/',
  },
  {
    id: 'multi-platform-earnings',
    platform: 'Multi-platform',
    niche: 'All niches',
    metric: 'Estimated monthly earnings',
    range: 'Varies by mix',
    note: 'Compare platform-by-platform assumptions',
    toolHref: '/calculators/multi-platform-earnings/',
    guideHref: '/guides/monetization-calculator-hub/',
  },
];

export function BenchmarksHubClient() {
  const [platform, setPlatform] = useState('all');
  const [niche, setNiche] = useState('all');

  const platformOptions = useMemo(
    () => ['all', ...Array.from(new Set(benchmarkRows.map((row) => row.platform)))],
    []
  );
  const nicheOptions = useMemo(
    () => ['all', ...Array.from(new Set(benchmarkRows.map((row) => row.niche)))],
    []
  );

  const filteredRows = useMemo(() => {
    return benchmarkRows.filter((row) => {
      const platformMatch = platform === 'all' || row.platform === platform;
      const nicheMatch = niche === 'all' || row.niche === niche;
      return platformMatch && nicheMatch;
    });
  }, [niche, platform]);

  return (
    <div>
      <div className="card mb-6 p-4 md:p-5">
        <div className="grid gap-3 md:grid-cols-3">
          <label>
            <span className="label">Platform</span>
            <select className="input" value={platform} onChange={(e) => setPlatform(e.target.value)}>
              {platformOptions.map((option) => (
                <option key={option} value={option}>
                  {option === 'all' ? 'All platforms' : option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="label">Niche</span>
            <select className="input" value={niche} onChange={(e) => setNiche(e.target.value)}>
              {nicheOptions.map((option) => (
                <option key={option} value={option}>
                  {option === 'all' ? 'All niches' : option}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-end">
            <p className="text-sm text-neutral-600">Updated weekly.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredRows.map((row) => (
          <div key={row.id} className="card p-6">
            <StatCard value={row.range} label={row.metric} note={row.note} className="border-0 p-0 shadow-none" />
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="badge badge-secondary">{row.platform}</span>
              <span className="badge badge-primary">{row.niche}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href={row.toolHref} className="btn btn-primary btn-sm">
                Open tool
              </Link>
              <Link href={row.guideHref} className="btn btn-secondary btn-sm">
                Related guide
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
