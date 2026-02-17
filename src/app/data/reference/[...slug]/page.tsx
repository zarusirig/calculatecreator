import { createCatchAllArticlePageExports } from '@/lib/content/article-page';

const pageExports = createCatchAllArticlePageExports('data/reference');

export const generateStaticParams = pageExports.generateStaticParams;
export const generateMetadata = pageExports.generateMetadata;
export default pageExports.default;
