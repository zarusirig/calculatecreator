'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { trackNavigation } from '@/lib/analytics/ga4';

const navItems = [
  { label: 'Tools', href: '/calculators/' },
  { label: 'Benchmarks', href: '/benchmarks/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Data', href: '/data/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Comparisons', href: '/comparisons/' },
  { label: 'News', href: '/news/' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (label: string, href: string) => {
    trackNavigation('header', label, href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={cn(
          'mx-auto max-w-7xl rounded-[28px] border transition-all duration-300',
          'bg-[rgba(255,249,241,0.82)] backdrop-blur-xl',
          isCompact ? 'border-[rgba(23,32,51,0.12)] shadow-[0_18px_50px_rgba(23,32,51,0.12)]' : 'border-[rgba(255,255,255,0.75)] shadow-[0_10px_30px_rgba(23,32,51,0.08)]'
        )}
      >
        <nav className="flex items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            onClick={() => handleNavClick('Wordmark', '/')}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff6b57,#ff9f7e)] text-sm font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(255,107,87,0.25)]">
              TT
            </span>
            <span className="font-display text-lg font-bold leading-none text-[color:var(--text)]">
              TT Calculator
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-[rgba(23,32,51,0.08)] text-[color:var(--text)]'
                      : 'text-[color:var(--text-2)] hover:bg-white/70 hover:text-[color:var(--text)]'
                  )}
                  onClick={() => handleNavClick(item.label, item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact/"
              className="btn btn-ghost btn-sm"
              onClick={() => handleNavClick('Contact', '/contact/')}
            >
              Contact
            </Link>
            <Link
              href="/calculators/tiktok-money/"
              className="btn btn-primary btn-sm gap-2"
              onClick={() => handleNavClick('Primary CTA', '/calculators/tiktok-money/')}
            >
              Start with a number
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(23,32,51,0.08)] bg-white/60 text-[color:var(--text)] lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-[rgba(23,32,51,0.08)] px-4 py-4 lg:hidden md:px-6">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm font-semibold',
                      isActive
                        ? 'bg-[rgba(23,32,51,0.08)] text-[color:var(--text)]'
                        : 'bg-white/50 text-[color:var(--text-2)]'
                    )}
                    onClick={() => handleNavClick(item.label, item.href)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact/"
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-[color:var(--text-2)]"
                onClick={() => handleNavClick('Contact', '/contact/')}
              >
                Contact
              </Link>
              <Link
                href="/calculators/tiktok-money/"
                className="btn btn-primary btn-md mt-2 gap-2"
                onClick={() => handleNavClick('Primary CTA', '/calculators/tiktok-money/')}
              >
                Start with a number
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
