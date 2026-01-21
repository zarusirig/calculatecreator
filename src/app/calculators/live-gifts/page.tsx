'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/calculators/earnings-revenue/live-earnings/');
  }, [router]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <p className="text-neutral-600">Redirecting to LIVE Gifts Calculator...</p>
    </div>
  );
}
