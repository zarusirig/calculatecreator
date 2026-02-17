'use client';

import Link from 'next/link';
import { trackNavigation } from '@/lib/analytics/ga4';

const footerLinks = {
  product: [
    { label: 'Tools', href: '/tools/' },
    { label: 'Guides', href: '/guides/' },
    { label: 'Benchmarks', href: '/benchmarks/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Glossary', href: '/glossary/' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'Editorial Policy', href: '/editorial-policy/' },
    { label: 'Advertising Disclosure', href: '/compliance/advertising-disclosure/' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('footer', label, href);
  };

  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="container-custom py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-neutral-900">CalculateCreator</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
              Creator benchmarks and calculators with transparent assumptions, clear inputs, and
              practical outputs.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-900">Product</p>
            <ul className="space-y-2">
              {footerLinks.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                    onClick={() => handleLinkClick(item.label, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-900">Company</p>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                    onClick={() => handleLinkClick(item.label, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-900">Legal</p>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                    onClick={() => handleLinkClick(item.label, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sitemap/"
                  className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  onClick={() => handleLinkClick('HTML Sitemap', '/sitemap/')}
                >
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-500">
            © {currentYear} CalculateCreator. Estimates are directional, not guarantees. Your
            inputs stay in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
