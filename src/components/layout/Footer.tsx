'use client';

import Link from 'next/link';
import { trackNavigation } from '@/lib/analytics/ga4';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  DollarSign,
  TrendingUp,
  BarChart3,
  FileText,
} from 'lucide-react';

/* ─── pathway columns ─── */
const footerSections = [
  {
    title: 'Start Here',
    icon: Zap,
    links: [
      { label: 'Make Your First $1,000', href: '/guides/how-to-make-first-1000-dollars/' },
      { label: 'Creator Fund Guide', href: '/guides/tiktok-creator-fund/' },
      { label: 'Money Calculator', href: '/calculators/tiktok-money/' },
      { label: 'How to Make Money', href: '/guides/how-to-make-money-on-tiktok/' },
      { label: 'All Calculators', href: '/calculators/' },
      { label: 'Utility Tools Hub', href: '/calculators/utility-tools/' },
    ],
  },
  {
    title: 'Monetization',
    icon: DollarSign,
    links: [
      { label: 'Brand Deal Calculator', href: '/calculators/brand-deal-rate/' },
      { label: 'LIVE Gifts Calculator', href: '/calculators/live-gifts/' },
      { label: 'Coins & Gifts Hub', href: '/calculators/coins-gifts-diamonds/' },
      { label: 'Shop Affiliate Guide', href: '/guides/tiktok-shop-affiliate/' },
      { label: 'RPM Calculator', href: '/calculators/rpm/' },
      { label: 'Get Brand Deals', href: '/guides/how-to-get-brand-deals/' },
      { label: 'Negotiate Deals', href: '/guides/how-to-negotiate-brand-deals/' },
    ],
  },
  {
    title: 'Growth',
    icon: TrendingUp,
    links: [
      { label: 'Engagement Rate Calc', href: '/calculators/engagement-rate/' },
      { label: 'Engagement Hub', href: '/calculators/engagement-influence/' },
      { label: 'Benchmarks', href: '/benchmarks/' },
      { label: 'Guides Hub', href: '/guides/' },
      { label: 'Beauty Niche Earnings', href: '/niches/beauty-earnings/' },
      { label: 'Finance Niche Earnings', href: '/niches/finance-earnings/' },
      { label: 'Fitness Niche Earnings', href: '/niches/fitness-earnings/' },
      { label: 'All Calculators', href: '/calculators/' },
    ],
  },
  {
    title: 'Data',
    icon: BarChart3,
    links: [
      { label: 'RPM by Niche', href: '/data/rpm-rates-by-niche/' },
      { label: 'Engagement by Niche', href: '/data/engagement-rates-by-niche/' },
      { label: 'Brand Deal Rates', href: '/data/brand-deal-rates-by-followers/' },
      { label: 'Reference Hub', href: '/reference/' },
      { label: 'Creator Fund Countries', href: '/reference/creator-fund-eligible-countries/' },
      { label: 'Creator Fund Payouts', href: '/reference/creator-fund-payment-schedule/' },
      { label: 'Shop Payment Schedule', href: '/reference/tiktok-shop-payment-schedule/' },
      { label: 'TikTok vs YouTube', href: '/comparisons/tiktok-vs-youtube-earnings/' },
      { label: 'TikTok vs Instagram', href: '/comparisons/tiktok-vs-instagram/' },
    ],
  },
  {
    title: 'Policy',
    icon: FileText,
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
      { label: 'Editorial Policy', href: '/editorial-policy/' },
      { label: 'Ad Disclosure', href: '/compliance/advertising-disclosure/' },
      { label: 'Tax Deductions Guide', href: '/advanced/creator-tax-deductions/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Glossary', href: '/glossary/' },
      { label: 'Sitemap', href: '/sitemap/' },
    ],
  },
];

/* ─── creator tools utility cards ─── */
const toolCards = [
  {
    title: 'ROI Calculator',
    desc: 'Know which revenue stream pays you the most',
    href: '/calculators/tiktok-money/',
    icon: BarChart3,
  },
  {
    title: 'Rate Card Guide',
    desc: 'Set your rates with data, not guesswork',
    href: '/guides/how-to-negotiate-brand-deals/',
    icon: DollarSign,
  },
  {
    title: 'Growth Playbook',
    desc: 'From 0 to your first $1K as a creator',
    href: '/guides/how-to-make-first-1000-dollars/',
    icon: BookOpen,
  },
];

/* ─── trust badges ─── */
const trustBadges = [
  { icon: CheckCircle, text: 'Data-Driven Methodology' },
  { icon: Shield, text: 'Privacy First — No Data Collection' },
  { icon: Zap, text: 'Always Free & Updated' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('footer', label, href);
  };

  return (
    <footer className="mt-20 bg-[#0B1120] text-white">
      {/* ─── E-E-A-T Trust Block ─── */}
      <div className="border-b border-white/[0.06]">
        <div className="container-custom py-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-lg bg-gradient-to-br from-[#00D4AA] to-[#00B894] px-2 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0B1120]">
                CC
              </span>
              <span className="font-display text-lg font-bold text-white">
                CalculateCreator
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-2xl">
              Free, data-driven tools for TikTok creators. Transparent calculators and guides
              based on real creator data, industry research, and official TikTok documentation.
              Our methodology is always explained, and our tools are regularly updated.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="inline-flex items-center gap-2 text-xs text-white/35"
                  >
                    <Icon className="h-4 w-4 text-[#00D4AA]/50" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Creator Tools Utility Row ─── */}
      <div className="border-b border-white/[0.06]">
        <div className="container-custom py-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/25">
            Creator Quick Tools
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {toolCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group creator-card creator-card-hover rounded-xl p-4 transition-all duration-200"
                  onClick={() => handleLinkClick(card.title, card.href)}
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-[#00D4AA]/10 p-2 shrink-0">
                      <Icon className="h-4 w-4 text-[#00D4AA]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-[#00D4AA] transition-colors">
                        {card.title}
                      </p>
                      <p className="mt-0.5 text-xs text-white/35 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Pathway Columns ─── */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerSections.map((section) => {
            const SectionIcon = section.icon;
            return (
              <div key={section.title}>
                <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
                  <SectionIcon className="h-3.5 w-3.5" />
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/35 hover:text-[#00D4AA] transition-colors duration-200"
                        onClick={() => handleLinkClick(link.label, link.href)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="border-t border-white/[0.06]">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/25">
              © {currentYear} CalculateCreator. Estimates are directional, not guarantees.
              Your inputs stay in your browser.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy/"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
                onClick={() => handleLinkClick('Privacy Footer', '/privacy/')}
              >
                Privacy
              </Link>
              <span className="text-white/10">·</span>
              <Link
                href="/terms/"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
                onClick={() => handleLinkClick('Terms Footer', '/terms/')}
              >
                Terms
              </Link>
              <span className="text-white/10">·</span>
              <Link
                href="/contact/"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
                onClick={() => handleLinkClick('Contact Footer', '/contact/')}
              >
                Contact
              </Link>
              <span className="text-white/10">·</span>
              <Link
                href="/sitemap/"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
                onClick={() => handleLinkClick('Sitemap Footer', '/sitemap/')}
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] text-white/15 md:text-left">
            Not affiliated with TikTok, ByteDance Ltd., or any of their subsidiaries.
            All trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
