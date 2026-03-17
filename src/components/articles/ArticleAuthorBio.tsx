import React from 'react';
import Link from 'next/link';
import { Author, resolveAuthorFromFrontmatter, DEFAULT_AUTHOR } from '@/lib/constants/authors';
import { PersonSchema } from '@/components/seo/CalculatorSchema';

export interface ArticleAuthorBioProps {
    /** The frontmatter `author` string — resolved to Author via resolveAuthorFromFrontmatter */
    authorString?: string;
    /** Directly pass an Author object (takes priority over authorString) */
    author?: Author;
    /** Show expertise tags */
    showExpertise?: boolean;
    /** Show credentials list */
    showCredentials?: boolean;
}

/**
 * Author Bio section for blog posts and guide articles.
 * Renders a visual card with avatar, bio, expertise tags + Person schema markup.
 */
export function ArticleAuthorBio({
    authorString,
    author: directAuthor,
    showExpertise = true,
    showCredentials = false,
}: ArticleAuthorBioProps) {
    const author = directAuthor || resolveAuthorFromFrontmatter(authorString || '');

    const socialLinks = [
        author.socialLinks?.tiktok && { label: 'TikTok', url: author.socialLinks.tiktok },
        author.socialLinks?.twitter && { label: 'X (Twitter)', url: author.socialLinks.twitter },
        author.socialLinks?.linkedin && { label: 'LinkedIn', url: author.socialLinks.linkedin },
    ].filter(Boolean) as { label: string; url: string }[];

    const sameAs = socialLinks.map((l) => l.url);

    return (
        <section
            className="mt-12 pt-8 border-t-2 border-neutral-200"
            aria-label={`About the author: ${author.name}`}
        >
            {/* Person Schema for SEO */}
            <PersonSchema
                name={author.name}
                jobTitle={author.role}
                description={author.bio}
                url={
                    author.authorUrl
                        ? `https://tiktokcalculator.net${author.authorUrl}`
                        : 'https://tiktokcalculator.net/about/'
                }
                sameAs={sameAs.length > 0 ? sameAs : undefined}
                knowsAbout={author.expertise}
                affiliation={{
                    name: 'TT Calculator',
                    url: 'https://tiktokcalculator.net',
                }}
            />

            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
                {/* Header stripe */}
                <div className="h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600" />

                <div className="p-6 md:p-8">
                    {/* Section title */}
                    <h3 className="text-label-sm font-semibold text-neutral-500 uppercase tracking-wider mb-5">
                        About the Author
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            {author.image ? (
                                <img
                                    src={author.image}
                                    alt={author.name}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-primary-100 shadow-md"
                                    width={80}
                                    height={80}
                                />
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white flex items-center justify-center text-2xl font-bold shadow-md border-2 border-primary-100">
                                    {author.name
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')
                                        .slice(0, 2)}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            {/* Name & role */}
                            <div className="mb-3">
                                <h4 className="text-heading-md font-bold text-neutral-900">
                                    {author.authorUrl ? (
                                        <Link
                                            href={author.authorUrl}
                                            className="hover:text-primary-600 transition-colors"
                                        >
                                            {author.name}
                                        </Link>
                                    ) : (
                                        author.name
                                    )}
                                </h4>
                                <p className="text-body-sm font-medium text-primary-600 mt-0.5">
                                    {author.role}
                                </p>
                            </div>

                            {/* Bio */}
                            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                                {author.bio}
                            </p>

                            {/* Expertise tags */}
                            {showExpertise && author.expertise.length > 0 && (
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {author.expertise.map((area) => (
                                            <span
                                                key={area}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-medium bg-primary-50 text-primary-700 border border-primary-100"
                                            >
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Credentials */}
                            {showCredentials && author.credentials.length > 0 && (
                                <div className="mb-4">
                                    <ul className="space-y-1.5">
                                        {author.credentials.map((cred, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-body-sm text-neutral-600"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span>{cred}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Social links + Meet the Team */}
                            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-100">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="text-body-sm text-neutral-500 hover:text-primary-600 transition-colors font-medium"
                                    >
                                        {link.label} →
                                    </a>
                                ))}
                                <Link
                                    href={author.authorUrl || '/about/'}
                                    className="text-body-sm text-primary-600 hover:text-primary-700 font-medium ml-auto"
                                >
                                    View Full Profile →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticleAuthorBio;
