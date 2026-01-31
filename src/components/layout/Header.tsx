'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { trackNavigation } from '@/lib/analytics/ga4';
import { cn } from '@/lib/utils/cn';
import { Globe } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    {
      label: 'Calculators',
      href: '/calculators/',
      dropdown: [
        { href: '/calculators/tiktok-creator-fund/', label: 'TikTok Creator Fund Calculator' },
        { href: '/calculators/engagement-rate/', label: 'TikTok Engagement Rate Calculator' },
        { href: '/calculators/brand-deal-rate/', label: 'TikTok Brand Deal Calculator' },
        { href: '/calculators/live-gifts/', label: 'TikTok LIVE Gifts Calculator' },
        { href: '/calculators/tiktok-money/', label: 'TikTok Money Calculator' },
        { href: '/calculators/rpm/', label: 'TikTok RPM Calculator' },
        { href: '/calculators/commerce-ads/shop-profit/', label: 'TikTok Shop Commission Calculator' },
        { href: '/calculators/', label: 'View All TikTok Calculators', featured: true },
      ],
    },
    {
      label: 'Guides',
      href: '/guides/',
      dropdown: [
        { href: '/guides/how-to-make-money-on-tiktok/', label: 'How to Make Money on TikTok' },
        { href: '/guides/tiktok-creator-fund/', label: 'TikTok Creator Fund Guide' },
        { href: '/guides/brand-deals/', label: 'TikTok Brand Deals Guide' },
        { href: '/guides/tiktok-live/', label: 'TikTok LIVE Monetization Guide' },
        { href: '/guides/tiktok-shop-affiliate/', label: 'TikTok Shop Affiliate Guide' },
        { href: '/guides/how-to-get-brand-deals/', label: 'How to Get TikTok Brand Deals' },
        { href: '/guides/', label: 'View All TikTok Guides', featured: true },
      ],
    },
    {
      label: 'News',
      href: '/news/',
      dropdown: [
        { href: '/news/', label: 'Latest News' },
        { href: '/news/', label: 'Algorithm Updates' },
        { href: '/news/', label: 'Monetization News' },
        { href: '/news/', label: 'TikTok Shop Updates' },
        { href: '/news/', label: 'Platform Features' },
        { href: '/news/', label: 'View All News', featured: true },
      ],
    },
    {
      label: 'Data & Insights',
      href: '/data/',
      dropdown: [
        { href: '/data/brand-deal-rates-by-followers/', label: 'TikTok Brand Deal Rates by Followers' },
        { href: '/data/rpm-rates-by-niche/', label: 'TikTok RPM Rates by Niche' },
        { href: '/data/engagement-rates-by-niche/', label: 'TikTok Engagement Rate Benchmarks' },
        { href: '/comparisons/', label: 'Platform Comparisons', featured: true },
        { href: '/niches/', label: 'Niche Earnings' },
        { href: '/blog/', label: 'Blog' },
      ],
    },
    {
      label: 'Global',
      href: '/region/',
      dropdown: [
        { href: '/region/', label: 'Global TikTok Stats', featured: true, hasIcon: true },
        { href: '/calculator/de/', label: 'Deutsch (DE)' },
        { href: '/calculator/es/', label: 'Español (ES)' },
        { href: '/calculator/fr/', label: 'Français (FR)' },
        { href: '/calculator/it/', label: 'Italiano (IT)' },
        { href: '/calculator/pt-br/', label: 'Português (BR)' },
        { href: '/calculator/my/', label: 'Bahasa Malaysia (MY)' },
      ],
    },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
  ];

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('header', label, href);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-900 border-b border-white/20 shadow-lg">
      <div className="container-custom py-4 relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => handleLinkClick('Home', '/')}
          >
            <div className="h-12 w-auto group-hover:scale-110 transition-all duration-300">
              <Image
                src="/images/calculate-creator-transparent-v2.png"
                alt="Calculate Creator Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={cn(
                        'text-body-md font-medium transition-all duration-300 px-3 py-2 rounded-lg flex items-center space-x-1',
                        pathname?.startsWith(link.href)
                          ? 'text-accent-400 bg-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      )}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform',
                          openDropdown === link.label && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-neutral-900 border border-white/20 rounded-xl shadow-2xl py-2 animate-slide-down">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              'block px-4 py-2 text-body-sm transition-all duration-300',
                              item.featured
                                ? 'text-accent-400 font-semibold hover:bg-white/10'
                                : 'text-white/90 hover:bg-white/10 hover:text-white',
                              'hasIcon' in item && item.hasIcon && 'flex items-center gap-2'
                            )}
                            onClick={() => handleLinkClick(item.label, item.href)}
                          >
                            {'hasIcon' in item && item.hasIcon && <Globe size={14} />}
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'text-body-md font-medium transition-all duration-300 px-3 py-2 rounded-lg block',
                      pathname?.startsWith(link.href)
                        ? 'text-accent-400 bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                    onClick={() => handleLinkClick(link.label, link.href)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/calculators/tiktok-creator-fund/"
              className="btn btn-primary btn-sm ml-2 gradient-primary gradient-animated glow-purple font-semibold"
              onClick={() => handleLinkClick('Calculate CTA', '/calculators/tiktok-creator-fund/')}
            >
              Calculate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20 animate-slide-down relative z-10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className={cn(
                          'w-full text-left text-body-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-between',
                          pathname?.startsWith(link.href)
                            ? 'text-accent-400 bg-white/20'
                            : 'text-white/90 hover:bg-white/10'
                        )}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={cn(
                            'w-5 h-5 transition-transform',
                            openDropdown === link.label && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                'block px-4 py-2 text-body-md rounded-lg transition-all duration-300',
                                item.featured
                                  ? 'text-accent-400 font-semibold hover:bg-white/10'
                                  : 'text-white/80 hover:bg-white/10'
                              )}
                              onClick={() => handleLinkClick(item.label, item.href)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'block text-body-lg font-medium px-4 py-2 rounded-lg transition-all duration-300',
                        pathname?.startsWith(link.href)
                          ? 'text-accent-400 bg-white/20'
                          : 'text-white/90 hover:bg-white/10'
                      )}
                      onClick={() => handleLinkClick(link.label, link.href)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/calculators/tiktok-creator-fund/"
                  className="btn btn-primary w-full gradient-primary gradient-animated glow-purple font-semibold"
                  onClick={() => handleLinkClick('Calculate CTA Mobile', '/calculators/tiktok-creator-fund/')}
                >
                  Calculate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
