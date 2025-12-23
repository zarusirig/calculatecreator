/**
 * Google Analytics 4 Tracking Functions
 * Implements event tracking for calculator interactions, navigation, and content engagement
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Track a page view
 */
export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-X90GQYNEHW', {
      page_path: url,
    });
  }
}

/**
 * Track a generic event
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track calculator interaction
 */
export function trackCalculatorInteraction(
  calculatorName: string,
  action: 'input_change' | 'calculate' | 'result_displayed',
  additionalParams: Record<string, any> = {}
): void {
  trackEvent('calculator_interaction', {
    calculator_name: calculatorName,
    action,
    event_category: 'calculator',
    event_label: calculatorName,
    ...additionalParams,
  });
}

/**
 * Track calculator calculation performed
 */
export function trackCalculation(
  calculatorName: string,
  inputs: Record<string, any>,
  results: Record<string, any>
): void {
  // Track calculation action
  trackCalculatorInteraction(calculatorName, 'calculate', inputs);

  // Track result displayed
  trackCalculatorInteraction(calculatorName, 'result_displayed', {
    ...results,
  });

  // Track as conversion
  trackEvent('conversion', {
    conversion_type: 'calculator_used',
    calculator_name: calculatorName,
    event_category: 'conversion',
  });
}

/**
 * Track navigation click
 */
export function trackNavigation(
  location: 'header' | 'footer' | 'breadcrumb' | 'related_content' | 'sidebar',
  linkText: string,
  linkUrl: string
): void {
  trackEvent('navigation_click', {
    location,
    link_text: linkText,
    link_url: linkUrl,
    event_category: 'navigation',
  });
}

/**
 * Track content engagement
 */
export function trackContentEngagement(
  contentType: 'guide' | 'calculator' | 'data' | 'comparison',
  contentTitle: string,
  action: 'toc_click' | 'faq_expand' | 'methodology_view' | 'scroll_milestone',
  additionalParams: Record<string, any> = {}
): void {
  trackEvent('content_engagement', {
    content_type: contentType,
    content_title: contentTitle,
    action,
    event_category: 'engagement',
    ...additionalParams,
  });
}

/**
 * Track FAQ expansion
 */
export function trackFAQExpand(question: string, pageName: string): void {
  trackContentEngagement('guide', pageName, 'faq_expand', {
    question,
  });
}

/**
 * Track methodology section view
 */
export function trackMethodologyView(calculatorName: string): void {
  trackContentEngagement('calculator', calculatorName, 'methodology_view');
}

/**
 * Track table of contents click
 */
export function trackTOCClick(sectionTitle: string, pageName: string): void {
  trackContentEngagement('guide', pageName, 'toc_click', {
    section_title: sectionTitle,
  });
}

/**
 * Track scroll depth milestones
 */
export function trackScrollDepth(
  depth: 25 | 50 | 75 | 100,
  pageName: string
): void {
  trackContentEngagement('guide', pageName, 'scroll_milestone', {
    scroll_depth: depth,
  });
}

/**
 * Track conversion event
 */
export function trackConversion(
  conversionType:
    | 'calculator_used'
    | 'guide_read'
    | 'related_click'
    | 'external_link',
  additionalParams: Record<string, any> = {}
): void {
  trackEvent('conversion', {
    conversion_type: conversionType,
    event_category: 'conversion',
    ...additionalParams,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(linkUrl: string, linkText: string): void {
  trackEvent('external_link_click', {
    link_url: linkUrl,
    link_text: linkText,
    event_category: 'outbound',
  });

  trackConversion('external_link', {
    link_url: linkUrl,
  });
}

/**
 * Track related content click
 */
export function trackRelatedContentClick(
  currentPage: string,
  relatedPage: string,
  relatedType: 'calculator' | 'guide' | 'comparison'
): void {
  trackNavigation('related_content', relatedPage, relatedPage);

  trackConversion('related_click', {
    source_page: currentPage,
    destination_page: relatedPage,
    content_type: relatedType,
  });
}
