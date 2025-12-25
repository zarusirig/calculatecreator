'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackNavigation } from '@/lib/analytics/ga4';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  includeHome?: boolean;
  className?: string;
  maxItems?: number;
  homeLabel?: string;
  homeHref?: string;
  variant?: 'light' | 'dark';
}

export function Breadcrumb({
  items,
  includeHome = true,
  className = "mb-6",
  maxItems = 4,
  homeLabel = "Home",
  homeHref = "/",
  variant = 'light'
}: BreadcrumbProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (label: string, href: string) => {
    trackNavigation('breadcrumb', label, href);
  };

  // Process items for mobile truncation
  const processedItems = React.useMemo(() => {
    if (!isMobile || items.length <= maxItems) return items;

    // Keep first item, add ellipsis, keep last 2 items
    const firstItem = items[0];
    const lastTwoItems = items.slice(-2);
    const middleEllipsis = { label: '...', href: firstItem.href };

    return [firstItem, middleEllipsis, ...lastTwoItems];
  }, [items, isMobile, maxItems]);

  const allItems = includeHome
    ? [{ label: homeLabel, href: homeHref }, ...processedItems]
    : processedItems;

  return (
    <nav
      className={`flex items-center text-body-sm ${className}`}
      aria-label="Breadcrumb navigation"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center space-x-1 md:space-x-2">
        {allItems.map((item, index) => (
          <li
            key={`${item.href}-${index}`}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight
                className={`w-4 h-4 mx-1 md:mx-2 flex-shrink-0 ${
                  variant === 'dark' ? 'text-neutral-300' : 'text-neutral-400'
                }`}
                aria-hidden="true"
              />
            )}

            {index === allItems.length - 1 ? (
              <span
                className={`font-medium truncate max-w-32 md:max-w-none ${
                  variant === 'dark' ? 'text-neutral-100' : 'text-neutral-900'
                }`}
                itemProp="name"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors truncate max-w-24 md:max-w-none ${
                  variant === 'dark'
                    ? 'text-neutral-300 hover:text-neutral-100'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
                onClick={() => handleClick(item.label, item.href)}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}

            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
