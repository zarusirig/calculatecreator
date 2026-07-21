import type { Metadata } from 'next';
import Link from 'next/link';
import { AUTHORS } from '@/lib/constants/authors';
import { SITE_CONFIG, siteUrl } from '@/lib/constants/site-config';
import { BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'Authors & Editorial Desks | TT Calculator',
  description:
    'Meet the editorial and research desks behind TT Calculator. Each desk maintains the assumptions, benchmarks, and guidance across our creator calculators and guides.',
  alternates: {
    canonical: siteUrl('/authors'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Authors & Editorial Desks | TT Calculator',
    description:
      'Meet the editorial and research desks behind TT Calculator, and the calculators and guides each one maintains.',
    url: siteUrl('/authors'),
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'TT Calculator Authors & Editorial Desks',
      },
    ],
  },
};

const authors = Object.values(AUTHORS);

export default function AuthorsHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ttcalculator.net' },
          { name: 'Authors', url: 'https://ttcalculator.net/authors/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Authors & Editorial Desks',
            description:
              'Editorial and research desks that maintain TT Calculator calculators, benchmarks, and guides.',
            url: siteUrl('/authors'),
            hasPart: authors.map((author) => ({
              '@type': 'Person',
              name: author.name,
              jobTitle: author.role,
              url: `https://ttcalculator.net/authors/${author.id}/`,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
        <div className="container-custom max-w-5xl mx-auto">
          <header className="mb-10">
            <h1 className="text-display-sm md:text-display-md font-bold text-neutral-900 mb-3">
              Authors &amp; Editorial Desks
            </h1>
            <p className="text-body-lg text-neutral-700 max-w-3xl">
              TT Calculator publishes calculators, benchmarks, and guides through a set of
              internal editorial and research desks. Each desk owns a category of content and
              maintains its assumptions, sources, and corrections over time.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/authors/${author.id}/`}
                className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary-500 to-secondary-600 text-lg font-bold text-white shadow">
                    {author.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-heading-md font-semibold text-neutral-900 group-hover:text-primary-600">
                    {author.name}
                  </h2>
                  <p className="text-body-sm font-medium text-primary-600">{author.role}</p>
                  <p className="mt-2 line-clamp-3 text-body-sm text-neutral-700">{author.bio}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {author.expertise.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-2.5 py-1 text-label-sm font-medium text-primary-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-12 rounded-xl border border-neutral-200 bg-white p-6">
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
                Data &amp; Insights
              </Link>
              <Link href="/about/" className="btn btn-secondary btn-sm">
                About the Team
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
