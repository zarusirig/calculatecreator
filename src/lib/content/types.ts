export interface ArticleFrontmatter {
  // Required fields
  title: string;
  metaDescription: string;
  slug: string;
  section: 'core' | 'outer';
  category: string;

  // Koray Framework
  macroContext: string;
  microContext: string[];
  centralEntity: 'TikTok';

  // SEO
  primaryKeyword: string;
  secondaryKeywords: string[];

  // Information Tree
  parentArticle: string;
  childArticles: string[];
  relatedArticles: string[];
  siblingArticles: string[];
  parentCalculator?: string;

  // Content
  headingVector: string[];
  articleType: 'informative' | 'commercial' | 'transactional' | 'comparison' | 'data';
  priorityScore: number;
  wordCount: number;
  readTime?: number;

  // Dates
  publishDate: string;
  updatedDate?: string;
  author: string;

  // Display
  featuredImage?: string;
  imageAlt?: string;
  showCalculatorCTA?: boolean;
  calculatorCTAType?: string;
}

export interface ArticleData {
  frontmatter: ArticleFrontmatter;
  content: string;
  readTime: number;
  filePath: string;
}
