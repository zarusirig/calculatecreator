/**
 * CalculatorAuthor Component
 * Simple wrapper for adding author attribution to calculator pages
 * Uses the existing E-E-A-T infrastructure
 */

import React from 'react';
import Link from 'next/link';
import { AuthorBio } from '@/components/eeat/AuthorBio';
import { ReviewBadge } from '@/components/eeat/ReviewBadge';
import { PersonSchema } from '@/components/seo/CalculatorSchema';
import { getAuthor } from '@/lib/constants/authors';
import { getPageMetadata, getDefaultPageMetadata } from '@/lib/constants/page-metadata';

export interface CalculatorAuthorProps {
  /** Calculator slug (e.g., 'engagement-rate', 'tiktok-money') */
  calculatorSlug: string;
  /** Variant: 'full' shows complete bio, 'compact' shows inline credit */
  variant?: 'full' | 'compact';
  /** Last updated date override (uses metadata date if not provided) */
  lastUpdated?: string;
}

/**
 * Displays author attribution for calculator pages
 * Includes author bio, expert reviewer badge, and schema markup
 */
export function CalculatorAuthor({
  calculatorSlug,
  variant = 'full',
  lastUpdated,
}: CalculatorAuthorProps) {
  const metadata = getPageMetadata(calculatorSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);
  const reviewer = metadata.reviewedBy ? getAuthor(metadata.reviewedBy) : undefined;
  const displayDate = lastUpdated || metadata.reviewDate;

  if (!author) return null;

  // Compact variant - inline byline
  if (variant === 'compact') {
    return (
      <>
        {/* Author Schema for SEO */}
        <PersonSchema
          name={author.name}
          jobTitle={author.role}
          description={author.bio}
          knowsAbout={author.expertise}
          affiliation={{
            name: 'TT Calculator',
            url: 'https://tiktokcalculator.net',
          }}
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 px-4 bg-neutral-50 rounded-lg border border-neutral-200 mt-6">
          <div className="flex items-center space-x-3">
            {/* Author Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center text-sm font-bold">
              {author.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="text-body-sm font-semibold text-neutral-900">
                {author.name}
              </p>
              <p className="text-body-xs text-neutral-600">{author.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {reviewer && displayDate && (
              <ReviewBadge
                reviewer={reviewer}
                reviewDate={displayDate}
                reviewType={metadata.reviewType}
              />
            )}
            <Link
              href="/about/"
              className="text-body-xs text-primary-600 hover:text-primary-700 font-medium"
            >
              Meet Our Team →
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Full variant - complete author section
  return (
    <div className="mt-12 pt-8 border-t border-neutral-200">
      {/* Author Schema for SEO */}
      <PersonSchema
        name={author.name}
        jobTitle={author.role}
        description={author.bio}
        knowsAbout={author.expertise}
        affiliation={{
          name: 'TT Calculator',
          url: 'https://tiktokcalculator.net',
        }}
      />

      <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">
        About This Calculator
      </h2>

      <div className="space-y-6">
        {/* Author Bio */}
        <AuthorBio author={author} variant="compact" showExpertise={true} />

        {/* Expert Review Badge */}
        {reviewer && displayDate && (
          <div className="flex items-center justify-between p-4 bg-success-50 rounded-lg border border-success-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-success-100 text-success-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-body-sm font-semibold text-neutral-900">
                  Expert Reviewed
                </p>
                <p className="text-body-xs text-neutral-600">
                  Verified by {reviewer.name}, {reviewer.role}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-body-xs text-neutral-600">Last Updated</p>
              <p className="text-body-sm font-medium text-neutral-900">{displayDate}</p>
            </div>
          </div>
        )}

        {/* Meet the Team Link */}
        <div className="flex items-center justify-center">
          <Link
            href="/about/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <span>Meet Our Full Team</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Simple inline author credit for use in calculator headers
 */
export function CalculatorAuthorInline({ calculatorSlug }: { calculatorSlug: string }) {
  const metadata = getPageMetadata(calculatorSlug) || getDefaultPageMetadata();
  const author = getAuthor(metadata.author);

  if (!author) return null;

  return (
    <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
      <span>Calculator by</span>
      <span className="font-semibold text-neutral-900">{author.name}</span>
      <span>•</span>
      <span>{author.role}</span>
    </div>
  );
}

export default CalculatorAuthor;
