'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bookmark, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { trackNavigation } from '@/lib/analytics/ga4';

const primaryNav = [
  { label: 'Tools', href: '/tools/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Benchmarks', href: '/benchmarks/' },
];

const quickLinks = [
  { label: 'All Tools', href: '/tools/' },
  { label: 'Popular Calculators', href: '/tools/#popular' },
  { label: 'Methodology', href: '/methodology/' },
  { label: 'FAQs', href: '/faq/' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (label: string, href: string) => {
    trackNavigation('header', label, href);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/92 backdrop-blur-md">
      <div className="container-custom">
        <nav className="flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            onClick={() => handleNavClick('Wordmark', '/')}
          >
            <span className="rounded-lg bg-primary-700 px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              CC
            </span>
            <span className="text-base font-semibold tracking-tight text-neutral-900">
              CalculateCreator
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  pathname?.startsWith(item.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                )}
                onClick={() => handleNavClick(item.label, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/search/"
              className="btn btn-ghost btn-sm"
              onClick={() => handleNavClick('Search', '/search/')}
              aria-label="Search tools and guides"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Link>
            <Link
              href="/bookmarks/"
              className="btn btn-secondary btn-sm"
              onClick={() => handleNavClick('Bookmarks', '/bookmarks/')}
              aria-label="Saved items"
            >
              <Bookmark className="h-4 w-4" />
              <span>Save</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {isMobileOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="container-custom py-4">
            <div className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100"
                  onClick={() => handleNavClick(item.label, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 border-t border-neutral-200 pt-4">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/search/"
                  className="btn btn-ghost btn-sm justify-start"
                  onClick={() => handleNavClick('Search Mobile', '/search/')}
                >
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Link>
                <Link
                  href="/bookmarks/"
                  className="btn btn-secondary btn-sm justify-start"
                  onClick={() => handleNavClick('Bookmarks Mobile', '/bookmarks/')}
                >
                  <Bookmark className="h-4 w-4" />
                  <span>Save</span>
                </Link>
              </div>
            </div>

            <div className="mt-4 border-t border-neutral-200 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">
                Quick Links
              </p>
              <div className="grid grid-cols-2 gap-1">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    onClick={() => handleNavClick(item.label, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
