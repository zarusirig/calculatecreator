import { createArticlePageExports } from '@/lib/content/article-page';

const pageExports = createArticlePageExports('guides');

export const generateStaticParams = pageExports.generateStaticParams;
export const generateMetadata = pageExports.generateMetadata;
export default pageExports.default;
