/**
 * Content Type Definitions
 * Defines guide pages, comparison pages, and data pages
 */

// Content Types
export type ContentType = 'guide' | 'comparison' | 'data' | 'glossary';

// Guide Configuration
export interface GuideConfig {
  id: string;
  type: 'pillar' | 'spoke' | 'how-to';
  title: string;
  slug: string;
  description: string;
  topicCluster: string;
  wordCount: number;
  sections: GuideSectionConfig[];
  relatedGuides: string[];
  relatedCalculators: string[];
  faq: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  lastUpdated: string;
  nextReview: string;
}

// Guide Section Configuration
export interface GuideSectionConfig {
  id: string;
  title: string;
  level: 2 | 3 | 4;
  content?: string;
  subsections?: GuideSectionConfig[];
}

// Comparison Page Configuration
export interface ComparisonConfig {
  id: string;
  title: string;
  slug: string;
  description: string;
  items: ComparisonItemConfig[];
  criteria: ComparisonCriterionConfig[];
  relatedCalculators: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Comparison Item
export interface ComparisonItemConfig {
  id: string;
  name: string;
  description: string;
  icon?: string;
  scores: Record<string, number | string>;
}

// Comparison Criterion
export interface ComparisonCriterionConfig {
  id: string;
  label: string;
  weight: number;
  description?: string;
  format: 'number' | 'currency' | 'percentage' | 'rating' | 'text';
}

// Data Page Configuration
export interface DataPageConfig {
  id: string;
  title: string;
  slug: string;
  description: string;
  dataType: 'statistics' | 'benchmarks' | 'rates' | 'trends';
  datasets: DatasetConfig[];
  visualizations: VisualizationConfig[];
  relatedCalculators: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  lastUpdated: string;
  source: string;
}

// Dataset Configuration
export interface DatasetConfig {
  id: string;
  title: string;
  description: string;
  data: Record<string, any>[];
  columns: {
    key: string;
    label: string;
    format?: 'currency' | 'percentage' | 'number' | 'text';
  }[];
}

// Visualization Configuration
export interface VisualizationConfig {
  id: string;
  type: 'bar' | 'line' | 'pie' | 'table';
  title: string;
  datasetId: string;
  config?: Record<string, any>;
}

// Table of Contents Item
export interface TOCItem {
  id: string;
  title: string;
  level: number;
  children?: TOCItem[];
}

// Breadcrumb Item
export interface BreadcrumbItem {
  label: string;
  href: string;
}

// Related Content Item
export interface RelatedContentItem {
  type: 'calculator' | 'guide' | 'comparison';
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
}
