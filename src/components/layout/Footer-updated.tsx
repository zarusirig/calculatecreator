'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { trackNavigation } from '@/lib/analytics/ga4';
import { Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('footer', label, href);
  };

  const footerSections = [
    {
      title: 'Calculators',
      links: [
        { href: '/calculators/tiktok-creator-fund/', label: 'Creator Fund Calculator' },
        { href: '/calculators/engagement-rate/', label: 'Engagement Rate' },
        { href: '/calculators/brand-deal-rate/', label: 'Brand Deal Rate' },
        { href: '/calculators/live-gifts/', label: 'LIVE Gifts' },
        { href: '/calculators/tiktok-money/', label: 'Money Calculator' },
        { href: '/calculators/rpm/', label: 'RPM Calculator' },
        { href: '/calculators/commerce-ads/shop-profit/', label: 'Shop Commission' },
        { href: '/calculators/coins/', label: 'Coins Converter' },
        { href: '/calculators/', label: 'All Calculators' },
      ],
    },
    {
      title: 'Guides & Resources',
      links: [
        { href: '/guides/how-to-make-money-on-tiktok/', label: 'Make Money on TikTok' },
        { href: '/guides/tiktok-creator-fund/', label: 'Creator Fund Guide' },
        { href: '/guides/brand-deals/', label: 'Brand Deals' },
        { href: '/guides/how-to-get-brand-deals/', label: 'Get Brand Deals' },
        { href: '/guides/how-to-negotiate-brand-deals/', label: 'Negotiate Deals' },
        { href: '/guides/tiktok-live/', label: 'LIVE Monetization' },
        { href: '/guides/tiktok-shop-affiliate/', label: 'Shop Affiliate' },
        { href: '/guides/how-to-make-first-1000-dollars/', label: 'Make First $1,000' },
        { href: '/guides/', label: 'All Guides' },
      ],
    },
    {
      title: 'News & Updates',
      links: [
        { href: '/news/', label: 'Latest TikTok News' },
        { href: '/news/', label: 'Algorithm Updates' },
        { href: '/news/', label: 'Monetization Changes' },
        { href: '/news/', label: 'TikTok Shop News' },
        { href: '/news/', label: 'Platform Features' },
        { href: '/news/', label: 'Safety & Privacy' },
      ],
    },
    {
      title: 'Data & Insights',
      links: [
        { href: '/data/brand-deal-rates-by-followers/', label: 'Brand Deal Rates' },
        { href: '/data/rpm-rates-by-niche/', label: 'RPM Rates by Niche' },
        { href: '/data/engagement-rates-by-niche/', label: 'Engagement Benchmarks' },
        { href: '/data/platform-comparisons/', label: 'TikTok vs YouTube' },
        { href: '/data/platform-comparisons/', label: 'TikTok vs Instagram' },
        { href: '/data/platform-comparisons/', label: 'Fund vs Brand Deals' },
      ],
    },
    {
      title: 'Niche Earnings',
      links: [
        { href: '/guides/beauty-creators-earnings/', label: 'Beauty Creators' },
        { href: '/guides/finance-creators-earnings/', label: 'Finance Creators' },
        { href: '/guides/fitness-creators-earnings/', label: 'Fitness Creators' },
      ],
    },
    {
      title: 'Global Calculators',
      hasGlobeIcon: true,
      links: [
        { href: '/region/', label: 'Global TikTok Stats' },
        { href: '/calculator/de/', label: 'Deutsch (DE)' },
        { href: '/calculator/es/', label: 'Español (ES)' },
        { href: '/calculator/fr/', label: 'Français (FR)' },
        { href: '/calculator/it/', label: 'Italiano (IT)' },
        { href: '/calculator/pt-br/', label: 'Português (BR)' },
        { href: '/calculator/my/', label: 'Bahasa Malaysia (MY)' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about/', label: 'About Us' },
        { href: '/contact/', label: 'Contact Us' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/privacy/', label: 'Privacy Policy' },
        { href: '/terms/', label: 'Terms of Service' },
        { href: '/glossary/', label: 'Glossary' },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="container-custom py-12">
        {/* E-E-A-T Section - OPTIMIZED */}
        <div className="mb-12 pb-12 border-b border-neutral-800">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-20 md:w-auto">
                <OptimizedImage
                  src="/images/tt-calculator-logo.png"
                  alt="TikTok Creator Calculator"
                  width={80}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-heading-md font-bold">
                TikTok Creator Calculator
              </span>
            </div>
            <p className="text-body-md text-neutral-400 mb-6 leading-relaxed">
              Free, data-driven tools for TikTok creators. We provide transparent calculators and guides
              based on real creator data, industry research, and official TikTok documentation. Our
              methodology is always explained, and our tools are regularly updated to reflect the latest
              platform changes.
            </p>
            <div className="flex flex-wrap gap-6 text-label-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Data-Driven Methodology</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Privacy First - No Data Collection</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Always Free & Updated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-heading-sm font-semibold mb-4 flex items-center gap-2">
                {'hasGlobeIcon' in section && section.hasGlobeIcon && <Globe size={16} />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-neutral-400 hover:text-white transition-colors"
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

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-4">
            <p className="text-body-sm text-neutral-400 text-center md:text-left">
              &copy; {currentYear} TikTok Creator Calculator. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy/"
                className="text-body-sm text-neutral-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick('Privacy Policy Footer', '/privacy/')}
              >
                Privacy
              </Link>
              <span className="text-neutral-700">•</span>
              <Link
                href="/terms/"
                className="text-body-sm text-neutral-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick('Terms Footer', '/terms/')}
              >
                Terms
              </Link>
              <span className="text-neutral-700">•</span>
              <Link
                href="/contact/"
                className="text-body-sm text-neutral-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick('Contact Footer', '/contact/')}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-label-sm text-neutral-500 mb-2">
              Not affiliated with TikTok, ByteDance Ltd., or any of their subsidiaries. All trademarks
              are property of their respective owners.
            </p>
            <p className="text-label-sm text-neutral-600">
              Our calculators provide estimates based on available data and should be used for informational
              purposes only. Actual earnings may vary based on numerous factors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



