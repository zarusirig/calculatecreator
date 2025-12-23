/**
 * Web Vitals Tracking
 * Tracks Core Web Vitals and sends to GA4
 */

import { onCLS, onFID, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

/**
 * Send metric to GA4
 */
function sendToGA4(metric: Metric): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

/**
 * Report all Web Vitals
 */
export function reportWebVitals(): void {
  onCLS(sendToGA4);
  onFID(sendToGA4);
  onFCP(sendToGA4);
  onLCP(sendToGA4);
  onTTFB(sendToGA4);
}
