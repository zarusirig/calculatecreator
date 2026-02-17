'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';

type AdPlacementType = 'above-tool' | 'below-tool' | 'mid-article' | 'sidebar' | 'footer';

interface AdUnitProps {
  slot: string;
  placement: AdPlacementType;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>> & {
      requestNonPersonalizedAds?: number;
    };
  }
}

function getMinHeightByPlacement(placement: AdPlacementType) {
  if (placement === 'sidebar') return 250;
  if (placement === 'footer') return 100;
  return 120;
}

export function AdUnit({ slot, placement, className }: AdUnitProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isSafeToRender, setIsSafeToRender] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;

    const viewportTooSmall = window.innerWidth < 320;
    const insideInteractiveContainer = Boolean(
      rootRef.current.closest('form, [data-interactive-tool="true"], [data-interactive-container="true"]')
    );

    setIsSafeToRender(!viewportTooSmall && !insideInteractiveContainer);
  }, []);

  useEffect(() => {
    if (!isSafeToRender || !slot) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ignore push timing errors until ads script is loaded.
    }
  }, [isSafeToRender, slot]);

  if (!slot || !isSafeToRender) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      data-ad-placement={placement}
      className={cn(
        'my-6 border-y border-neutral-200 py-6',
        className
      )}
    >
      <p className="mb-2 text-center text-xs uppercase tracking-[0.08em] text-neutral-500">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minHeight: getMinHeightByPlacement(placement),
        }}
        data-ad-client="ca-pub-6191764023643150"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
