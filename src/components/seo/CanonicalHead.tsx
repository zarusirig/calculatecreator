'use client';

import { usePathname } from 'next/navigation';

export function CanonicalHead() {
  const pathname = usePathname();

  // Build the canonical URL with trailing slash
  const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const canonicalUrl = `https://calculatecreator.com${cleanPath}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}



