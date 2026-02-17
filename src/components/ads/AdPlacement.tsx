'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { AdUnit } from '@/components/ads/AdUnit';

type Placement = 'above-tool' | 'below-tool' | 'mid-article' | 'sidebar' | 'footer';
type PageType = 'tool' | 'article' | 'directory' | 'trust' | 'utility' | 'other';

interface AdPlacementProps {
  placement: Placement;
  className?: string;
}

const SLOT_BY_PLACEMENT: Record<Placement, string> = {
  'above-tool': process.env.NEXT_PUBLIC_ADS_SLOT_ABOVE_TOOL || '',
  'below-tool': process.env.NEXT_PUBLIC_ADS_SLOT_BELOW_TOOL || '',
  'mid-article': process.env.NEXT_PUBLIC_ADS_SLOT_MID_ARTICLE || '',
  sidebar: process.env.NEXT_PUBLIC_ADS_SLOT_SIDEBAR || '',
  footer: process.env.NEXT_PUBLIC_ADS_SLOT_FOOTER || '',
};

const ALLOWED: Record<PageType, Placement[]> = {
  tool: ['above-tool', 'below-tool'],
  article: ['mid-article', 'sidebar', 'footer'],
  directory: ['footer'],
  trust: [],
  utility: [],
  other: ['footer'],
};

function resolvePageType(pathname: string): PageType {
  if (!pathname) return 'other';

  if (
    pathname.startsWith('/privacy') ||
    pathname.startsWith('/terms') ||
    pathname.startsWith('/about') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/faq') ||
    pathname.startsWith('/glossary') ||
    pathname.startsWith('/methodology') ||
    pathname.startsWith('/editorial-policy') ||
    pathname.startsWith('/compliance')
  ) {
    return 'trust';
  }

  if (pathname.startsWith('/search') || pathname.startsWith('/bookmarks')) {
    return 'utility';
  }

  if (
    pathname.startsWith('/tools/') ||
    pathname.startsWith('/calculators/')
  ) {
    // Keep list routes separate from tool-detail routes.
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length <= 1) return 'directory';
    return 'tool';
  }

  if (
    pathname.startsWith('/guides/') ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/data/') ||
    pathname.startsWith('/news/') ||
    pathname.startsWith('/comparisons/')
  ) {
    return 'article';
  }

  if (pathname === '/tools' || pathname === '/calculators' || pathname === '/benchmarks') {
    return 'directory';
  }

  return 'other';
}

export function AdPlacement({ placement, className }: AdPlacementProps) {
  const pathname = usePathname() || '';

  const pageType = useMemo(() => resolvePageType(pathname), [pathname]);
  const slot = SLOT_BY_PLACEMENT[placement];

  if (!slot) return null;
  if (!ALLOWED[pageType].includes(placement)) return null;

  return <AdUnit slot={slot} placement={placement} className={className} />;
}
