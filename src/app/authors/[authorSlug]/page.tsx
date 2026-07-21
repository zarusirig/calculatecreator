import type { Metadata } from 'next';
import Link from 'next/link';
import { AUTHORS, type Author } from '@/lib/constants/authors';
import { PAGE_METADATA } from '@/lib/constants/page-metadata';
import { CALCULATOR_SCHEMAS } from '@/lib/seo/calculator-schemas';
import { BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { AuthorPersonSchema } from '@/lib/eeat/page-eeat';
import { getArticlesByAuthor } from '@/lib/content';
import { FAQSection } from '@/components/calculator/FAQSection';
import { FAQPageSchema } from '@/components/seo/FAQPageSchema';

const AUTHOR_SLUGS = Object.keys(AUTHORS);

export function generateStaticParams() {
  return AUTHOR_SLUGS.map((authorSlug) => ({ authorSlug }));
}

/**
 * Build a ~150-character meta description from the desk's editorial focus
 * (falling back to the bio when no focus paragraph is defined).
 */
function buildDescription(author: Author): string {
  const source = author.editorialFocus || author.bio;
  const firstSentenceEnd = source.search(/\.\s/);
  const firstSentence =
    firstSentenceEnd === -1 ? source : source.slice(0, firstSentenceEnd + 1);
  return firstSentence.length <= 155
    ? firstSentence
    : firstSentence.slice(0, 152).trimEnd() + '…';
}

export function generateMetadata({
  params,
}: {
  params: { authorSlug: string };
}): Metadata {
  const author = AUTHORS[params.authorSlug];
  if (!author) {
    return { title: 'Author Not Found' };
  }
  return {
    title: `${author.role} — TT Calculator Editorial`,
    description: buildDescription(author),
    alternates: {
      canonical: `https://ttcalculator.net/authors/${params.authorSlug}/`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Build a list of pages this author has written or reviewed */
function getAuthoredPages(authorId: string) {
  const authored: { name: string; slug: string; role: 'author' | 'reviewer' }[] = [];

  // From PAGE_METADATA
  for (const [slug, meta] of Object.entries(PAGE_METADATA)) {
    if (meta.author === authorId) {
      const schema = CALCULATOR_SCHEMAS[slug];
      authored.push({
        name: schema?.name || formatSlug(slug),
        slug,
        role: 'author',
      });
    } else if (meta.reviewedBy === authorId) {
      const schema = CALCULATOR_SCHEMAS[slug];
      authored.push({
        name: schema?.name || formatSlug(slug),
        slug,
        role: 'reviewer',
      });
    }
  }

  return authored;
}

function formatSlug(slug: string): string {
  return slug
    .split('/')
    .pop()!
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// PAGE_METADATA keys that are legacy aliases, not real URL slugs. Map each straight to its
// canonical live page (verified against the export + the firebase 301s) so author cards link
// directly instead of through a redirect — and never 404.
const AUTHOR_PAGE_URL_OVERRIDES: Record<string, string> = {
  'earnings-revenue/creator-fund': '/calculators/tiktok-creator-fund/',
  'earnings-revenue/money': '/calculators/tiktok-money/',
  'coins-gifts-diamonds/diamonds': '/calculators/diamond-converter/',
  'coins-gifts-diamonds/gift': '/calculators/live-gifts/',
  'commerce-ads/ad-cost': '/calculators/tiktok-ad-cost/',
  'commerce-ads/rpm-cpm': '/calculators/rpm/',
  'engagement-influence/influencer-pricing': '/calculators/brand-deal-rate/',
  'engagement-influence/video-engagement': '/calculators/engagement-rate/',
  'engagement-influence/engagement': '/calculators/engagement-rate/',
  'tiktok-creator-fund-guide': '/learn/tiktok-creator-fund/',
  'how-to-go-viral': '/learn/how-to-go-viral-tiktok/',
  region: '/learn/',
};

function getCalculatorHref(slug: string): string {
  // Legacy alias keys resolve straight to their canonical page.
  const override = AUTHOR_PAGE_URL_OVERRIDES[slug];
  if (override) return override;
  // Blog posts stay at /blog/; evergreen guides/hubs are unified under /learn/;
  // calculator tools are flat under /calculators/<basename>/ (no bucket segment).
  if (slug.startsWith('building-') || slug.startsWith('charli-') || slug.startsWith('creator-fund-') || slug.startsWith('best-tiktok-') || slug.startsWith('brand-deal-rate-')) {
    return `/blog/${slug}/`;
  }
  if (slug.startsWith('how-to-') || slug.includes('-guide') || slug.includes('-hub')) {
    return `/learn/${slug}/`;
  }
  return `/calculators/${slug.split('/').pop()}/`;
}

export default function AuthorPage({
  params,
}: {
  params: { authorSlug: string };
}) {
  const author = AUTHORS[params.authorSlug];

  if (!author) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-600">Author not found.</p>
      </div>
    );
  }

  const pages = getAuthoredPages(author.id);
  const authoredPages = pages.filter((p) => p.role === 'author');
  const reviewedPages = pages.filter((p) => p.role === 'reviewer');
  const articles = getArticlesByAuthor(author.id);

  return (
    <>
      {author.faq && author.faq.length > 0 && <FAQPageSchema faqs={author.faq} />}
      <AuthorPersonSchema
        author={author}
        url={`https://ttcalculator.net/authors/${author.id}/`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ttcalculator.net' },
          { name: 'Authors', url: 'https://ttcalculator.net/authors/' },
          {
            name: author.name,
            url: `https://ttcalculator.net/authors/${author.id}/`,
          },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg border-4 border-white">
                {author.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-display-sm md:text-display-md font-bold text-neutral-900 mb-1">
                {author.name}
              </h1>
              <p className="text-body-lg font-medium text-primary-600 mb-3">
                {author.role}
              </p>
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {author.bio}
              </p>
            </div>
          </div>

          {/* What This Desk Covers */}
          {author.editorialFocus && (
            <section className="mb-10 bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                What This Desk Covers
              </h2>
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {author.editorialFocus}
              </p>
            </section>
          )}

          {/* How We Approach This Area */}
          {author.methodologyNote && (
            <section className="mb-10 bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                How We Approach This Area
              </h2>
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {author.methodologyNote}
              </p>
            </section>
          )}

          {/* Expertise & Credentials */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Expertise */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Areas of Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-label-sm font-medium bg-primary-50 text-primary-700 border border-primary-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
                Credentials & Experience
              </h2>
              <ul className="space-y-2">
                {author.credentials.map((cred, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-body-sm text-neutral-700"
                  >
                    <svg
                      className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          {author.socialLinks && (
            <div className="flex flex-wrap gap-4 mb-10">
              {author.socialLinks.tiktok && (
                <a
                  href={author.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-body-sm text-neutral-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  TikTok
                </a>
              )}
              {author.socialLinks.twitter && (
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-body-sm text-neutral-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  X (Twitter)
                </a>
              )}
              {author.socialLinks.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-body-sm text-neutral-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          )}

          {/* Authored Content */}
          {authoredPages.length > 0 && (
            <div className="mb-10">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Calculators & Content by {author.name.split(' ')[0]}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {authoredPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={getCalculatorHref(page.slug)}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <span className="text-body-sm font-medium text-neutral-900">
                      {page.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Reviewed Content */}
          {reviewedPages.length > 0 && (
            <div className="mb-10">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Expert-Reviewed by {author.name.split(' ')[0]}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {reviewedPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={getCalculatorHref(page.slug)}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-secondary-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary-500 flex-shrink-0" />
                    <span className="text-body-sm font-medium text-neutral-900">
                      {page.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Articles maintained by this desk */}
          {articles.length > 0 && (
            <div className="mb-10">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-2">
                Articles From This Desk
              </h2>
              <p className="text-body-sm text-neutral-600 mb-4">
                {author.role} researched, wrote, and keeps these {articles.length} articles current.
                Each one names its sources and its last review date.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {articles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="flex flex-col gap-1 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-sm transition-all"
                  >
                    <span className="text-body-sm font-medium text-neutral-900">
                      {article.title}
                    </span>
                    <span className="text-label-sm text-neutral-500 capitalize">
                      {article.section}
                      {article.publishDate ? ` · ${article.publishDate}` : ''}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Desk FAQ */}
          {author.faq && author.faq.length > 0 && (
            <div className="mb-10">
              <FAQSection faqs={author.faq} pageName={author.role} title={`${author.role} FAQ`} />
            </div>
          )}

          <section className="mb-10 rounded-xl border border-neutral-200 bg-white p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900">Related Resources</h2>
            <p className="mt-3 text-body-sm text-neutral-700">
              Explore the main hubs where our editorial and calculator assumptions are maintained.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/calculators/" className="btn btn-secondary btn-sm">
                Calculator Directory
              </Link>
              <Link href="/learn/" className="btn btn-secondary btn-sm">
                Creator Guides
              </Link>
              <Link href="/learn/" className="btn btn-secondary btn-sm">
                Data & Insights
              </Link>
              <Link href="/methodology/" className="btn btn-secondary btn-sm">
                Methodology
              </Link>
            </div>
          </section>

          {/* Editorial Model */}
          <section className="mb-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
              About TT Calculator&apos;s Editorial Model
            </h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TT Calculator publishes under a desk-based authorship model rather
              than individual bylines. Each author profile names an internal
              editorial function — Editorial, Research, LIVE, Commerce, Tax
              &amp; Operations, or Growth — because every page reflects
              collaborative research, calculator maintenance, and structured
              review. The six desks divide the 35+ calculators and guides on the
              site by subject area so each topic has a clear owner. Read the
              full{' '}
              <Link
                href="/about/"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                about TT Calculator
              </Link>{' '}
              page and our{' '}
              <Link
                href="/methodology/"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                methodology
              </Link>{' '}
              page for details on how calculators are built and how assumptions
              stay current.
            </p>
          </section>

          {/* Back Link */}
          <div className="pt-6 border-t border-neutral-200">
            <Link
              href="/about/"
              className="text-body-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
