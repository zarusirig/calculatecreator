import React from 'react';
import type { ChangelogEntry } from '@/lib/constants/page-metadata';

interface ContentFreshnessProps {
  publishedDate?: string;
  verificationDate: string;
  verificationMethod?: string;
  changelog?: ChangelogEntry[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ContentFreshness({
  publishedDate,
  verificationDate,
  verificationMethod,
  changelog,
}: ContentFreshnessProps) {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-4">
      {/* Date Row */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm">
        {publishedDate && (
          <div className="flex items-center gap-1.5 text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Published {formatDate(publishedDate)}
          </div>
        )}
        <div className="flex items-center gap-1.5 text-success-700 font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Last verified {formatDate(verificationDate)}
        </div>
      </div>

      {/* Verification Method */}
      {verificationMethod && (
        <p className="mt-2 text-body-xs text-neutral-500">
          Method: {verificationMethod}
        </p>
      )}

      {/* Changelog */}
      {changelog && changelog.length > 0 && (
        <details className="mt-3 group">
          <summary className="flex items-center gap-1 cursor-pointer text-body-xs text-neutral-500 hover:text-neutral-700 list-none">
            <svg
              className="w-3.5 h-3.5 transition-transform group-open:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Change history ({changelog.length} updates)
          </summary>
          <ul className="mt-2 space-y-1.5 pl-5 border-l-2 border-neutral-100">
            {changelog.map((entry, i) => (
              <li key={i} className="text-body-xs text-neutral-600">
                <span className="font-medium text-neutral-700">{formatDate(entry.date)}</span>
                {' — '}
                {entry.summary}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
