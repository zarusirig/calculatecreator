interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates breadcrumb structure and consistency
 */
export function validateBreadcrumbs(
  items: BreadcrumbItem[],
  pagePath: string,
  includeHome: boolean = true
): BreadcrumbValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if breadcrumbs exist
  if (!items || items.length === 0) {
    errors.push('No breadcrumb items provided');
    return { isValid: false, errors, warnings };
  }

  // Validate first item (should be Home if includeHome is true)
  if (includeHome) {
    const firstItem = items[0];
    if (!firstItem || firstItem.href !== '/') {
      errors.push('First breadcrumb item should be Home (/) when includeHome is true');
    }
  }

  // Check for circular references
  const hrefs = items.map(item => item.href);
  const uniqueHrefs = new Set(hrefs);
  if (hrefs.length !== uniqueHrefs.size) {
    errors.push('Duplicate hrefs found in breadcrumb items');
  }

  // Check for valid hrefs (basic validation)
  items.forEach((item, index) => {
    if (!item.href || typeof item.href !== 'string') {
      errors.push(`Invalid href for item at index ${index}: ${item.href}`);
    }

    if (!item.label || typeof item.label !== 'string') {
      errors.push(`Invalid label for item at index ${index}: ${item.label}`);
    }

    // Check if href starts with /
    if (!item.href.startsWith('/')) {
      warnings.push(`Href should start with '/' for item at index ${index}: ${item.href}`);
    }
  });

  // Check breadcrumb depth
  const totalItems = includeHome ? items.length : items.length;
  if (totalItems > 4) {
    warnings.push(`Breadcrumb depth is high (${totalItems} items). Consider simplifying the navigation structure.`);
  }

  // Check if last item matches current page
  const lastItem = items[items.length - 1];
  if (lastItem && lastItem.href !== pagePath) {
    warnings.push(`Last breadcrumb item href (${lastItem.href}) doesn't match current page path (${pagePath})`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Common breadcrumb patterns for consistent navigation
 */
export const breadcrumbPatterns = {
  calculator: (calculatorName: string, calculatorSlug: string) => [
    { label: 'Calculators', href: '/calculators/' },
    { label: calculatorName, href: `/calculators/${calculatorSlug}` }
  ],

  guide: (guideName: string, guideSlug: string) => [
    { label: 'Guides', href: '/guides/' },
    { label: guideName, href: `/guides/${guideSlug}` }
  ],

  data: (dataName: string, dataSlug: string) => [
    { label: 'Data & Insights', href: '/data/' },
    { label: dataName, href: `/data/${dataSlug}` }
  ],

  news: (newsTitle: string, newsSlug: string) => [
    { label: 'News', href: '/news/' },
    { label: newsTitle, href: `/news/${newsSlug}` }
  ],

  comparison: (comparisonName: string, comparisonSlug: string) => [
    { label: 'Data & Insights', href: '/data/' },
    { label: comparisonName, href: `/comparisons/${comparisonSlug}` }
  ]
} as const;




