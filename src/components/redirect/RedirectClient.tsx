'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface RedirectClientProps {
  to: string;
  label: string;
}

export function RedirectClient({ to, label }: RedirectClientProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <p className="text-neutral-600">Redirecting to {label}...</p>
    </div>
  );
}
