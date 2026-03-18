'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, BookOpen, Calculator, Mail, Sparkles } from 'lucide-react';
import { trackNavigation } from '@/lib/analytics/ga4';

const pathwayLinks = [
  {
    title: 'Start with earnings',
    description: 'Model monthly income across views, deals, and monetization paths.',
    href: '/calculators/tiktok-money/',
    icon: Calculator,
  },
  {
    title: 'Study the benchmarks',
    description: 'Use ranges before you price a deal or call a post a miss.',
    href: '/benchmarks/',
    icon: BarChart3,
  },
  {
    title: 'Read the playbooks',
    description: 'Creator-first guides for growth, monetization, and decision making.',
    href: '/guides/',
    icon: BookOpen,
  },
];

const footerColumns = [
  {
    heading: 'Explore',
    links: [
      { label: 'All calculators', href: '/calculators/' },
      { label: 'Benchmarks', href: '/benchmarks/' },
      { label: 'Guides', href: '/guides/' },
      { label: 'News', href: '/news/' },
    ],
  },
  {
    heading: 'Popular tools',
    links: [
      { label: 'Money Calculator', href: '/calculators/tiktok-money/' },
      { label: 'Brand Deal Calculator', href: '/calculators/brand-deal-rate/' },
      { label: 'RPM Calculator', href: '/calculators/rpm/' },
      { label: 'Engagement Rate', href: '/calculators/engagement-rate/' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Data & Earnings', href: '/data/earnings/' },
      { label: 'Engagement Data', href: '/data/engagement/' },
      { label: 'Platform Comparisons', href: '/data/platform-comparisons/' },
      { label: 'Comparisons', href: '/comparisons/' },
      { label: 'Reference', href: '/reference/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('footer', label, href);
  };

  return (
    <footer className="px-3 pb-4 pt-10 md:px-5 md:pb-5 md:pt-16">
      <div className="mx-auto max-w-7xl rounded-[34px] border border-[rgba(23,32,51,0.1)] bg-[linear-gradient(180deg,rgba(255,250,244,0.92),rgba(247,240,231,0.94))] p-6 shadow-[0_20px_60px_rgba(23,32,51,0.1)] md:p-10">
        <div className="grid gap-8 border-b border-[rgba(23,32,51,0.08)] pb-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Built for creators
            </span>
            <h2 className="section-heading mt-5 max-w-xl text-3xl font-bold text-[color:var(--text)] md:text-4xl">
              Clear numbers for creative work.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--text-2)] md:text-base">
              TT Calculator helps creators estimate earnings, benchmark performance, and make
              better pricing decisions without the usual hype. The tools are free, transparent,
              and designed to leave you with one useful next step.
            </p>
          </div>

          <div className="studio-card p-5 md:p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,107,87,0.12)] text-[color:var(--primary)]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[color:var(--text)]">Need a specific tool?</p>
                <p className="text-sm text-[color:var(--text-2)]">
                  Tell us what creators need help calculating next.
                </p>
              </div>
            </div>
            <Link
              href="/contact/"
              className="btn btn-primary btn-md mt-5 w-full justify-center gap-2"
              onClick={() => handleLinkClick('Footer CTA', '/contact/')}
            >
              Send a request
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 border-b border-[rgba(23,32,51,0.08)] py-8 md:grid-cols-3">
          {pathwayLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="studio-note p-5 transition-transform duration-200 hover:-translate-y-1"
                onClick={() => handleLinkClick(item.title, item.href)}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(59,91,219,0.12)] text-[color:var(--info)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-base font-semibold text-[color:var(--text)]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">{item.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff6b57,#ff9f7e)] text-sm font-extrabold uppercase tracking-[0.16em] text-white">
                TT
              </span>
              <div>
                <p className="font-display text-xl font-bold text-[color:var(--text)]">TT Calculator</p>
                <p className="text-sm text-[color:var(--muted)]">
                  Estimates are directional. Inputs stay in your browser.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-[color:var(--text-2)] transition-colors hover:text-[color:var(--text)]"
                        onClick={() => handleLinkClick(link.label, link.href)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(23,32,51,0.08)] pt-5 text-xs text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} TT Calculator. Free creator calculators and benchmark tools.</p>
          <p>Built to make creator economics easier to reason about.</p>
        </div>
        <p className="mt-3 text-center text-[10px] leading-4 text-[color:var(--muted)]">
          TT Calculator is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd. All trademarks belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
