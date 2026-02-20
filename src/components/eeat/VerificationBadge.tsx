import React from 'react';

interface VerificationBadgeProps {
  date: string;
  compact?: boolean;
}

export function VerificationBadge({ date, compact = false }: VerificationBadgeProps) {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 text-label-sm text-success-700">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Verified {formatted}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-sm font-medium bg-success-50 text-success-700 border border-success-200">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Verified {formatted}
    </span>
  );
}
