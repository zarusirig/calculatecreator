import React from 'react';
import { Card } from '@/components/ui/Card';
import type { Author } from '@/lib/constants/authors';

export interface AuthorBioProps {
  author: Author;
  variant?: 'full' | 'compact' | 'inline';
  showCredentials?: boolean;
  showExpertise?: boolean;
}

export function AuthorBio({
  author,
  variant = 'compact',
  showCredentials = true,
  showExpertise = true,
}: AuthorBioProps) {
  if (variant === 'inline') {
    return (
      <div className="flex items-center space-x-3 text-body-sm text-neutral-700">
        <span>By</span>
        <span className="font-semibold text-neutral-900">{author.name}</span>
        <span>•</span>
        <span className="text-neutral-600">{author.role}</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-xl font-bold">
            {author.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-heading-sm font-semibold text-neutral-900 mb-1">
            {author.name}
          </h3>
          <p className="text-body-sm text-primary-600 mb-2">{author.role}</p>
          <p className="text-body-sm text-neutral-700 leading-relaxed">{author.bio}</p>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <Card>
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-gradient-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg">
            {author.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <h3 className="text-heading-lg font-semibold text-neutral-900 mb-1">
              {author.name}
            </h3>
            <p className="text-body-md text-primary-600 font-medium">{author.role}</p>
          </div>

          <p className="text-body-md text-neutral-700 leading-relaxed mb-4">{author.bio}</p>

          {showExpertise && author.expertise.length > 0 && (
            <div className="mb-4">
              <h4 className="text-label-md font-semibold text-neutral-900 mb-2">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-medium bg-primary-50 text-primary-700 border border-primary-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {showCredentials && author.credentials.length > 0 && (
            <div>
              <h4 className="text-label-md font-semibold text-neutral-900 mb-2">
                Credentials & Experience
              </h4>
              <ul className="space-y-1">
                {author.credentials.map((credential, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-body-sm text-neutral-700"
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
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.socialLinks && (
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center space-x-4">
                {author.socialLinks.tiktok && (
                  <a
                    href={author.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-body-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    TikTok →
                  </a>
                )}
                {author.socialLinks.twitter && (
                  <a
                    href={author.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-body-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    Twitter →
                  </a>
                )}
                {author.socialLinks.linkedin && (
                  <a
                    href={author.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-body-sm text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/**
 * Multiple authors display (for collaborative content)
 */
export interface MultipleAuthorsProps {
  authors: Author[];
}

export function MultipleAuthors({ authors }: MultipleAuthorsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-heading-md font-semibold text-neutral-900">
        Content Contributors
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {authors.map((author) => (
          <AuthorBio key={author.id} author={author} variant="compact" />
        ))}
      </div>
    </div>
  );
}
