import { createCatchAllArticlePageExports } from '@/lib/content/article-page';

const pageExports = createCatchAllArticlePageExports('guides/monetization');

export const generateStaticParams = pageExports.generateStaticParams;
export const generateMetadata = pageExports.generateMetadata;
export default pageExports.default;
