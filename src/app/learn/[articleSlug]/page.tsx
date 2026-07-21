import { createArticlePageExports } from '@/lib/content/article-page';

// All evergreen articles live flat in content/learn/ and are served at /learn/<slug>/.
const pageExports = createArticlePageExports('learn');

export const generateStaticParams = pageExports.generateStaticParams;
export const generateMetadata = pageExports.generateMetadata;
export default pageExports.default;
