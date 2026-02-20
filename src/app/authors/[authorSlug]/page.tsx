import type { Metadata } from 'next';
import Link from 'next/link';
import { AUTHORS, type Author } from '@/lib/constants/authors';
import { PAGE_METADATA } from '@/lib/constants/page-metadata';
import { CALCULATOR_SCHEMAS } from '@/lib/seo/calculator-schemas';
import { PersonSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

const AUTHOR_SLUGS = Object.keys(AUTHORS);

export function generateStaticParams() {
  return AUTHOR_SLUGS.map((authorSlug) => ({ authorSlug }));
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
    title: `${author.name} — ${author.role} | CalculateCreator`,
    description: author.bio,
    alternates: {
      canonical: `https://calculatecreator.com/authors/${params.authorSlug}/`,
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

function getCalculatorHref(slug: string): string {
  // Guide/blog slugs don't live under /calculators/
  if (
    slug.startsWith('how-to-') ||
    slug.includes('-guide') ||
    slug.includes('-hub') ||
    slug === 'region'
  ) {
    return `/guides/${slug}/`;
  }
  if (slug.startsWith('building-') || slug.startsWith('charli-') || slug.startsWith('creator-fund-') || slug.startsWith('best-tiktok-') || slug.startsWith('brand-deal-rate-')) {
    return `/blog/${slug}/`;
  }
  return `/calculators/${slug}/`;
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

  const sameAs = [
    author.socialLinks?.tiktok,
    author.socialLinks?.twitter,
    author.socialLinks?.linkedin,
  ].filter(Boolean) as string[];

  return (
    <>
      <PersonSchema
        name={author.name}
        jobTitle={author.role}
        description={author.bio}
        url={`https://calculatecreator.com/authors/${author.id}/`}
        sameAs={sameAs.length > 0 ? sameAs : undefined}
        knowsAbout={author.expertise}
        affiliation={{
          name: 'CalculateCreator',
          url: 'https://calculatecreator.com',
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Authors', url: 'https://calculatecreator.com/authors/' },
          {
            name: author.name,
            url: `https://calculatecreator.com/authors/${author.id}/`,
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
