/**
 * E-E-A-T Helper Utility
 * Simplifies adding E-E-A-T elements to any page
 */

import React from 'react';
import { AuthorBio } from '@/components/eeat/AuthorBio';
import { ReviewBadge, ReviewSection } from '@/components/eeat/ReviewBadge';
import { Disclaimer, MultipleDisclaimers } from '@/components/eeat/Disclaimer';
import { Citations, DataSourceBadge } from '@/components/eeat/Citations';
import { ContentFreshness } from '@/components/eeat/ContentFreshness';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { getAuthor, type Author } from '@/lib/constants/authors';
import { getPageMetadata, getDefaultPageMetadata } from '@/lib/constants/page-metadata';

/**
 * Author Person JSON-LD emitter (SCH-3).
 * The shared PersonSchema component does not support an `image` field, so this
 * local emitter renders the author Person schema with `image` (author avatar if
 * present in authors.ts, else the SITE_CONFIG default) and a graceful `sameAs`
 * (omitted entirely when no author social profiles exist).
 */
export function AuthorPersonSchema({ author, url }: { author: Author; url?: string }) {
  const sameAs = [
    author.socialLinks?.tiktok,
    author.socialLinks?.twitter,
    author.socialLinks?.linkedin,
  ].filter(Boolean) as string[];

  // Canonical entity URI for this author desk (SCH-2). /authors/<id>/ pages exist.
  const personId = `${SITE_CONFIG.url}/authors/${author.id}/#person`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    // Desks are org sub-entities with no individual headshots; use the brand logo as avatar (SCH-3).
    image: author.image || SITE_CONFIG.logoUrl,
    ...(url && { url }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(author.expertise.length > 0 && { knowsAbout: author.expertise }),
    affiliation: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.org.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface PageEEATProps {
  pageSlug: string;
  variant?: 'full' | 'minimal';
  theme?: 'light' | 'dark';
}

/**
 * Complete E-E-A-T section for a page
 * Includes author bio, review badge, citations, and disclaimers based on page metadata
 */
export function PageEEAT({ pageSlug, variant = 'full', theme = 'light' }: PageEEATProps) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);
  const reviewer = metadata.reviewedBy ? getAuthor(metadata.reviewedBy) : undefined;

  if (!author) return null;

  if (variant === 'minimal') {
    return (
      <>
        {/* Author Schema */}
        <AuthorPersonSchema
          author={author}
          url={author.authorUrl ? `https://tiktokcalculator.net${author.authorUrl}` : undefined}
        />

        {/* Inline author credit */}
        <div className="flex items-center justify-between text-body-sm text-neutral-600 py-4 border-t border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <span>By</span>
            <span className="font-semibold text-neutral-900">{author.name}</span>
            <span>•</span>
            <span>{author.role}</span>
          </div>
          {reviewer && metadata.reviewDate && (
            <div className="flex items-center space-x-2">
              <ReviewBadge
                reviewer={reviewer}
                reviewDate={metadata.reviewDate}
                reviewType={metadata.reviewType}
                variant="light"
              />
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="space-y-8">
      {/* Author Schema for SEO */}
      <AuthorPersonSchema
        author={author}
        url={author.authorUrl ? `https://tiktokcalculator.net${author.authorUrl}` : undefined}
      />

      {/* Content Freshness */}
      {metadata.verificationDate && (
        <ContentFreshness
          verificationDate={metadata.verificationDate}
          verificationMethod={metadata.verificationMethod}
          changelog={metadata.changelog}
        />
      )}

      {/* Author Bio */}
      <AuthorBio author={author} variant="compact" />

      {/* Expert Review Section */}
      {reviewer && metadata.reviewDate && (
        <ReviewSection
          reviewer={reviewer}
          reviewDate={metadata.reviewDate}
          reviewType={metadata.reviewType || 'expert'}
        />
      )}

      {/* Citations */}
      {metadata.citations && metadata.citations.length > 0 && (
        <Citations citations={metadata.citations} />
      )}

      {/* Disclaimers */}
      {metadata.disclaimers && metadata.disclaimers.length > 0 && (
        <MultipleDisclaimers types={metadata.disclaimers} variant={theme} />
      )}
    </div>
  );
}

/**
 * Just the author byline for pages that need minimal E-E-A-T
 */
export function PageAuthorByline({ pageSlug, variant = 'light' }: { pageSlug: string; variant?: 'light' | 'dark' }) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);
  const reviewer = metadata.reviewedBy ? getAuthor(metadata.reviewedBy) : undefined;

  if (!author) return null;

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white/90' : 'text-neutral-600';
  const textColorBold = isDark ? 'text-white' : 'text-neutral-900';
  const bulletColor = isDark ? 'text-white/70' : 'text-neutral-600';
  const borderColor = isDark ? 'border-white/20' : 'border-neutral-200';

  return (
    <>
      {/* Author Schema */}
      <AuthorPersonSchema
        author={author}
        url={author.authorUrl ? `https://tiktokcalculator.net${author.authorUrl}` : undefined}
      />

      <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-t border-b ${borderColor}`}>
        <div className="flex items-center space-x-3 text-body-sm">
          <span className={textColor}>By</span>
          <span className={`font-semibold ${textColorBold}`}>{author.name}</span>
          <span className={bulletColor}>•</span>
          <span className={textColor}>{author.role}</span>
        </div>
        {reviewer && metadata.reviewDate && (
          <ReviewBadge
            reviewer={reviewer}
            reviewDate={metadata.reviewDate}
            reviewType={metadata.reviewType}
            variant={variant}
          />
        )}
      </div>
    </>
  );
}

/**
 * Just disclaimers for a page
 */
export function PageDisclaimers({ pageSlug, variant = 'light' }: { pageSlug: string; variant?: 'light' | 'dark' }) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();

  if (!metadata.disclaimers || metadata.disclaimers.length === 0) return null;

  return <MultipleDisclaimers types={metadata.disclaimers} variant={variant} />;
}

/**
 * Just citations for a page
 */
export function PageCitations({ pageSlug }: { pageSlug: string }) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();

  if (!metadata.citations || metadata.citations.length === 0) return null;

  return <Citations citations={metadata.citations} />;
}

/**
 * Data source badge for highlighting official sources
 */
export function PageDataSource({ source, url }: { source: string; url?: string }) {
  return <DataSourceBadge source={source} url={url} variant="official" />;
}

/**
 * Get personAuthor object for CalculatorSchema from a page slug.
 * Returns the shape expected by CalculatorSchema's personAuthor prop.
 */
export function getPersonAuthorForSchema(pageSlug: string) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);
  if (!author) return undefined;

  const sameAs = [
    author.socialLinks?.tiktok,
    author.socialLinks?.twitter,
    author.socialLinks?.linkedin,
  ].filter(Boolean) as string[];

  return {
    name: author.name,
    jobTitle: author.role,
    url: author.authorUrl
      ? `https://tiktokcalculator.net${author.authorUrl}`
      : undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    // SCH-3: give the inline calculator author Person an image (desk avatar).
    image: author.image || SITE_CONFIG.logoUrl,
  };
}
