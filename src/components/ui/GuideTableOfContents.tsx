'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export interface TOCItem {
  id: string;
  title: string;
  subtopics?: Array<{ id: string; title: string }>;
}

interface GuideTableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export function GuideTableOfContents({ items, className = '' }: GuideTableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <div className={`mb-12 rounded-xl bg-primary-50 border-2 border-primary-200 p-8 ${className}`}>
      <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Table of Contents</h2>
      <nav className="space-y-3">
        {items.map((item, index) => (
          <div key={item.id} className="space-y-1">
            <Link
              href={`#${item.id}`}
              className="text-body-md text-primary-700 hover:text-primary-800 hover:underline block font-medium transition-colors"
            >
              {index + 1}. {item.title}
            </Link>
            {item.subtopics && item.subtopics.length > 0 && (
              <div className="ml-6 mt-1 space-y-1.5">
                {item.subtopics.map((sub, subIndex) => (
                  <Link
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="text-body-sm text-neutral-700 hover:text-primary-700 hover:underline block transition-colors"
                  >
                    {index + 1}.{subIndex + 1} {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

