'use client';

import { useEffect, useRef, useState } from 'react';
import { ADS_CONFIG } from '@/lib/ads/config';

type AdFormat = 'horizontal' | 'rectangle' | 'vertical' | 'auto';

interface AdSlotProps {
  slotId: string;
  format?: AdFormat;
  lazyLoad?: boolean;
  className?: string;
}

const FORMAT_STYLES: Record<AdFormat, { minHeight: string; minWidth?: string }> = {
  horizontal: { minHeight: '90px', minWidth: '728px' },
  rectangle: { minHeight: '250px', minWidth: '300px' },
  vertical: { minHeight: '600px', minWidth: '160px' },
  auto: { minHeight: '100px' },
};

/**
 * AdSlot - Client component for rendering Google AdSense ad units.
 *
 * - Renders nothing unless NEXT_PUBLIC_ADS_ENABLED === 'true'
 * - Reserves space with min-height to prevent CLS
 * - Supports lazy loading via IntersectionObserver
 * - Shows "Advertisement" label per AdSense policy
 */
export function AdSlot({ slotId, format = 'auto', lazyLoad = true, className = '' }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!lazyLoad);

  useEffect(() => {
    if (!lazyLoad || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [lazyLoad]);

  // Don't render anything if ads are disabled
  if (!ADS_CONFIG.enabled || !ADS_CONFIG.clientId) {
    return null;
  }

  const styles = FORMAT_STYLES[format];

  return (
    <div
      ref={containerRef}
      className={`ad-slot ${className}`}
      style={{ minHeight: styles.minHeight, minWidth: styles.minWidth }}
    >
      <p className="text-label-sm text-neutral-400 text-center mb-1">Advertisement</p>
      {isVisible && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADS_CONFIG.clientId}
          data-ad-slot={slotId}
          data-ad-format={format === 'auto' ? 'auto' : undefined}
          data-full-width-responsive={format === 'auto' ? 'true' : undefined}
        />
      )}
    </div>
  );
}
