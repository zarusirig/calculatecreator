'use client';

import React, { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Static TOC based on known content structure for this page
  const tocItems: TOCItem[] = [
    { id: 'top-strategies', text: 'Top 5 Strategies', level: 2 },
    { id: 'check-your-rate', text: 'Check Your Current Rate', level: 3 },
  ];

  useEffect(() => {
    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className={`bg-neutral-50 border border-neutral-200 rounded-lg p-6 ${className}`}>
      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li
              key={item.id}
              className={`${item.level === 3 ? 'ml-4' : item.level === 4 ? 'ml-8' : ''}`}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left hover:text-primary-600 transition-colors text-body-sm ${
                  activeId === item.id
                    ? 'text-primary-600 font-medium'
                    : 'text-neutral-700'
                }`}
              >
                {item.level === 3 && '• '}
                {item.level === 4 && '◦ '}
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
