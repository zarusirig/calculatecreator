'use client';

import { usePathname } from 'next/navigation';

export function CanonicalHead() {
  const pathname = usePathname();

  // Build the canonical URL
  const canonicalUrl = `https://calculatecreator.com${pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}



