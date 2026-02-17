'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { trackNavigation } from '@/lib/analytics/ga4';
import {
  DollarSign,
  TrendingUp,
  BarChart3,
  BookOpen,
  Newspaper,
  Search,
  ChevronDown,
  X,
  Menu,
  Zap,
  Sparkles,
  Users,
  ArrowRight,
} from 'lucide-react';

/* ─── goal-based nav ─── */
const navItems = [
  {
    label: 'Earn',
    href: '/calculators/',
    icon: DollarSign,
    mega: {
      featured: [
        {
          title: 'Creator Fund Calculator',
          desc: 'Estimate your monthly Creator Fund earnings',
          href: '/calculators/tiktok-creator-fund/',
          icon: DollarSign,
        },
        {
          title: 'Brand Deal Calculator',
          desc: 'Know your rate before the negotiation',
          href: '/calculators/brand-deal-rate/',
          icon: Sparkles,
        },
        {
          title: 'Money Calculator',
          desc: 'Total earnings across all revenue streams',
          href: '/calculators/tiktok-money/',
          icon: TrendingUp,
        },
      ],
      links: [
        { label: 'LIVE Gifts Calculator', href: '/calculators/live-gifts/' },
        { label: 'RPM Calculator', href: '/calculators/rpm/' },
        { label: 'Shop Commission', href: '/calculators/commerce-ads/shop-profit/' },
        { label: 'Engagement Rate', href: '/calculators/engagement-rate/' },
        { label: 'Coins Converter', href: '/calculators/coins/' },
      ],
      cta: { label: 'View all calculators', href: '/calculators/' },
    },
  },
  {
    label: 'Grow',
    href: '/guides/',
    icon: TrendingUp,
    mega: {
      featured: [
        {
          title: 'How to Make Money on TikTok',
          desc: 'The complete 2025 monetization playbook',
          href: '/guides/how-to-make-money-on-tiktok/',
          icon: DollarSign,
        },
        {
          title: 'Get Brand Deals',
          desc: 'From first pitch to paid partnership',
          href: '/guides/how-to-get-brand-deals/',
          icon: Users,
        },
        {
          title: 'Make Your First $1,000',
          desc: 'Step-by-step earnings roadmap for new creators',
          href: '/guides/how-to-make-first-1000-dollars/',
          icon: Sparkles,
        },
      ],
      links: [
        { label: 'Creator Fund Guide', href: '/guides/tiktok-creator-fund/' },
        { label: 'Brand Deals Guide', href: '/guides/brand-deals/' },
        { label: 'LIVE Monetization', href: '/guides/tiktok-live/' },
        { label: 'Shop Affiliate Guide', href: '/guides/tiktok-shop-affiliate/' },
        { label: 'Negotiate Deals', href: '/guides/how-to-negotiate-brand-deals/' },
      ],
      cta: { label: 'View all guides', href: '/guides/' },
    },
  },
  {
    label: 'Data',
    href: '/data/',
    icon: BarChart3,
    mega: {
      featured: [
        {
          title: 'Brand Deal Rates by Followers',
          desc: 'Real rate ranges from nano to mega',
          href: '/data/brand-deal-rates-by-followers/',
          icon: BarChart3,
        },
        {
          title: 'RPM Rates by Niche',
          desc: 'Which niches earn the most per 1K views',
          href: '/data/rpm-rates-by-niche/',
          icon: TrendingUp,
        },
        {
          title: 'TikTok vs YouTube',
          desc: 'Side-by-side earnings comparison',
          href: '/comparisons/tiktok-vs-youtube-earnings/',
          icon: BarChart3,
        },
      ],
      links: [
        { label: 'Engagement Benchmarks', href: '/data/engagement-rates-by-niche/' },
        { label: 'TikTok vs Instagram', href: '/comparisons/tiktok-vs-instagram/' },
        { label: 'Benchmarks Overview', href: '/benchmarks/' },
      ],
      cta: { label: 'Explore all data', href: '/data/' },
    },
  },
  { label: 'Guides', href: '/guides/', icon: BookOpen },
  { label: 'News', href: '/news/', icon: Newspaper },
];

/* ─── mobile intent chips ─── */
const intentChips = [
  { label: '💰 Estimate Earnings', href: '/calculators/tiktok-creator-fund/' },
  { label: '📊 Compare Niches', href: '/data/rpm-rates-by-niche/' },
  { label: '📈 Get Benchmarks', href: '/benchmarks/' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* sticky compact state on scroll */
  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenMega(null);
    setMobileAccordion(null);
  }, [pathname]);

  const handleNavClick = (label: string, href: string) => {
    trackNavigation('header', label, href);
    setIsMobileOpen(false);
    setOpenMega(null);
  };

  const handleMegaEnter = (label: string) => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setOpenMega(label);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setOpenMega(null), 150);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        'bg-[#0B1120]/95 backdrop-blur-xl border-b',
        isCompact
          ? 'border-white/10 shadow-lg shadow-black/20'
          : 'border-white/[0.06]'
      )}
    >
      <div className="container-custom">
        <nav
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            isCompact ? 'h-14' : 'h-[72px]'
          )}
        >
          {/* ─── Brand ─── */}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 group"
            onClick={() => handleNavClick('Wordmark', '/')}
          >
            <span
              className={cn(
                'rounded-lg bg-gradient-to-br from-[#00D4AA] to-[#00B894] px-2 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0B1120] transition-all',
                'group-hover:shadow-[0_0_12px_rgba(0,212,170,0.3)]'
              )}
            >
              CC
            </span>
            <span
              className={cn(
                'font-display font-semibold tracking-tight text-white transition-all',
                isCompact ? 'text-sm' : 'text-base'
              )}
            >
              CalculateCreator
            </span>
          </Link>

          {/* ─── Desktop Nav ─── */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              const hasMega = !!item.mega;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMega && handleMegaEnter(item.label)}
                  onMouseLeave={() => hasMega && handleMegaLeave()}
                >
                  {hasMega ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-[#00D4AA] bg-white/[0.06]'
                          : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          openMega === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-[#00D4AA] bg-white/[0.06]'
                          : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                      )}
                      onClick={() => handleNavClick(item.label, item.href)}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* ─── Mega Menu ─── */}
                  {hasMega && openMega === item.label && (
                    <div
                      className="absolute left-1/2 top-full mt-2 w-[640px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0f1729] shadow-2xl shadow-black/40 animate-fade-in"
                      onMouseEnter={() => handleMegaEnter(item.label)}
                      onMouseLeave={handleMegaLeave}
                    >
                      <div className="p-5">
                        {/* featured cards */}
                        <div className="grid grid-cols-3 gap-3">
                          {item.mega!.featured.map((card) => {
                            const CardIcon = card.icon;
                            return (
                              <Link
                                key={card.href}
                                href={card.href}
                                className="group/card creator-card creator-card-hover rounded-xl p-4 transition-all duration-200"
                                onClick={() => {
                                  trackNavigation('header', `mega_menu: ${card.title}`, card.href);
                                  setOpenMega(null);
                                }}
                              >
                                <div className="mb-2 inline-flex rounded-lg bg-[#00D4AA]/10 p-2">
                                  <CardIcon className="h-4 w-4 text-[#00D4AA]" />
                                </div>
                                <p className="text-sm font-semibold text-white group-hover/card:text-[#00D4AA] transition-colors">
                                  {card.title}
                                </p>
                                <p className="mt-1 text-xs text-white/50 leading-relaxed">
                                  {card.desc}
                                </p>
                              </Link>
                            );
                          })}
                        </div>

                        {/* quick links */}
                        <div className="mt-4 border-t border-white/[0.06] pt-4">
                          <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {item.mega!.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs text-white/50 hover:text-[#00D4AA] transition-colors"
                                onClick={() => {
                                  handleNavClick(link.label, link.href);
                                }}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                          <Link
                            href={item.mega!.cta.href}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00D4AA] hover:text-[#00B894] transition-colors"
                            onClick={() => handleNavClick(item.mega!.cta.label, item.mega!.cta.href)}
                          >
                            {item.mega!.cta.label}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ─── Desktop CTA ─── */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/search/"
              className="rounded-lg p-2 text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
              onClick={() => handleNavClick('Search', '/search/')}
              aria-label="Search tools and guides"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              href="/calculators/tiktok-creator-fund/"
              className={cn(
                'inline-flex items-center gap-2 rounded-xl px-4 font-semibold text-[#0B1120] transition-all duration-300',
                'bg-gradient-to-r from-[#00D4AA] to-[#00B894]',
                'hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:scale-[1.02]',
                isCompact ? 'h-9 text-xs' : 'h-10 text-sm'
              )}
              onClick={() => handleNavClick('Run Estimate CTA', '/calculators/tiktok-creator-fund/')}
            >
              <Zap className="h-3.5 w-3.5" />
              Run Estimate
            </Link>
          </div>

          {/* ─── Mobile Toggle ─── */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((p) => !p)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/[0.06] transition-all lg:hidden"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* ─── Mobile Menu ─── */}
      {isMobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#0B1120] lg:hidden animate-slide-down">
          <div className="container-custom py-4">
            {/* intent chips */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-3 border-b border-white/[0.06] scrollbar-hide">
              {intentChips.map((chip) => (
                <Link
                  key={chip.href}
                  href={chip.href}
                  className="inline-flex flex-shrink-0 items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/80 hover:border-[#00D4AA]/30 hover:text-[#00D4AA] transition-all"
                  onClick={() => handleNavClick(chip.label, chip.href)}
                >
                  {chip.label}
                </Link>
              ))}
            </div>

            {/* nav items as accordion */}
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => {
                const hasMega = !!item.mega;
                const NavIcon = item.icon;
                const isOpen = mobileAccordion === item.label;

                return (
                  <div key={item.label}>
                    {hasMega ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileAccordion(isOpen ? null : item.label)
                          }
                          className={cn(
                            'flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-all',
                            isOpen
                              ? 'text-[#00D4AA] bg-white/[0.04]'
                              : 'text-white/80 hover:bg-white/[0.04]'
                          )}
                        >
                          <span className="flex items-center gap-2.5">
                            <NavIcon className="h-4 w-4" />
                            {item.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              isOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="ml-6 mt-1 flex flex-col gap-0.5 pb-2 animate-fade-in">
                            {item.mega!.featured.map((card) => (
                              <Link
                                key={card.href}
                                href={card.href}
                                className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-[#00D4AA] hover:bg-white/[0.04] transition-all"
                                onClick={() => handleNavClick(card.title, card.href)}
                              >
                                {card.title}
                              </Link>
                            ))}
                            {item.mega!.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-3 py-2 text-sm text-white/50 hover:text-white/80 transition-all"
                                onClick={() => handleNavClick(link.label, link.href)}
                              >
                                {link.label}
                              </Link>
                            ))}
                            <Link
                              href={item.mega!.cta.href}
                              className="mt-1 inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#00D4AA] hover:bg-white/[0.04] transition-all"
                              onClick={() => handleNavClick(item.mega!.cta.label, item.mega!.cta.href)}
                            >
                              {item.mega!.cta.label}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-2.5 rounded-lg px-3 py-3 text-base font-medium transition-all',
                          pathname?.startsWith(item.href)
                            ? 'text-[#00D4AA] bg-white/[0.04]'
                            : 'text-white/80 hover:bg-white/[0.04]'
                        )}
                        onClick={() => handleNavClick(item.label, item.href)}
                      >
                        <NavIcon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* mobile CTA */}
            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <Link
                href="/calculators/tiktok-creator-fund/"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4AA] to-[#00B894] px-4 py-3 text-sm font-semibold text-[#0B1120] transition-all hover:shadow-[0_0_20px_rgba(0,212,170,0.3)]"
                onClick={() => handleNavClick('Run Estimate CTA Mobile', '/calculators/tiktok-creator-fund/')}
              >
                <Zap className="h-4 w-4" />
                Run Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
