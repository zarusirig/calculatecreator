/**
 * E-E-A-T Helper Utility
 * Simplifies adding E-E-A-T elements to any page
 */

import React from 'react';
import { AuthorBio } from '@/components/eeat/AuthorBio';
import { ReviewBadge, ReviewSection } from '@/components/eeat/ReviewBadge';
import { Disclaimer, MultipleDisclaimers } from '@/components/eeat/Disclaimer';
import { Citations, DataSourceBadge } from '@/components/eeat/Citations';
import { PersonSchema } from '@/components/seo/CalculatorSchema';
import { getAuthor } from '@/lib/constants/authors';
import { getPageMetadata, getDefaultPageMetadata } from '@/lib/constants/page-metadata';

export interface PageEEATProps {
  pageSlug: string;
  variant?: 'full' | 'minimal';
}

/**
 * Complete E-E-A-T section for a page
 * Includes author bio, review badge, citations, and disclaimers based on page metadata
 */
export function PageEEAT({ pageSlug, variant = 'full' }: PageEEATProps) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);
  const reviewer = metadata.reviewedBy ? getAuthor(metadata.reviewedBy) : undefined;

  if (!author) return null;

  if (variant === 'minimal') {
    return (
      <>
        {/* Author Schema */}
        <PersonSchema
          name={author.name}
          jobTitle={author.role}
          description={author.bio}
          knowsAbout={author.expertise}
          affiliation={{
            name: 'TikTok Calculator',
            url: 'https://calculatecreator.com',
          }}
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
      <PersonSchema
        name={author.name}
        jobTitle={author.role}
        description={author.bio}
        knowsAbout={author.expertise}
        affiliation={{
          name: 'TikTok Calculator',
          url: 'https://calculatecreator.com',
        }}
      />

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
        <MultipleDisclaimers types={metadata.disclaimers} />
      )}
    </div>
  );
}

/**
 * Just the author byline for pages that need minimal E-E-A-T
 */
export function PageAuthorByline({ pageSlug }: { pageSlug: string }) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);
  const reviewer = metadata.reviewedBy ? getAuthor(metadata.reviewedBy) : undefined;

  if (!author) return null;

  return (
    <>
      {/* Author Schema */}
      <PersonSchema
        name={author.name}
        jobTitle={author.role}
        description={author.bio}
        knowsAbout={author.expertise}
        affiliation={{
          name: 'TikTok Calculator',
          url: 'https://calculatecreator.com',
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-t border-b border-neutral-200">
        <div className="flex items-center space-x-3 text-body-sm">
          <span className="text-neutral-600">By</span>
          <span className="font-semibold text-neutral-900">{author.name}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-600">{author.role}</span>
        </div>
        {reviewer && metadata.reviewDate && (
          <ReviewBadge
            reviewer={reviewer}
            reviewDate={metadata.reviewDate}
            reviewType={metadata.reviewType}
          />
        )}
      </div>
    </>
  );
}

/**
 * Just disclaimers for a page
 */
export function PageDisclaimers({ pageSlug }: { pageSlug: string }) {
  const metadata = getPageMetadata(pageSlug) || getDefaultPageMetadata();

  if (!metadata.disclaimers || metadata.disclaimers.length === 0) return null;

  return <MultipleDisclaimers types={metadata.disclaimers} />;
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
