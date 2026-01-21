'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/calculators/engagement-influence/video-engagement/');
  }, [router]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <p className="text-neutral-600">Redirecting to Video Performance Calculator...</p>
    </div>
  );
}
