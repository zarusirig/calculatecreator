import React from 'react';
import { Card } from '@/components/ui/Card';
import { Landmark, BarChart3, Newspaper, Briefcase, TrendingUp, CheckCircle, type LucideIcon } from 'lucide-react';

export interface Citation {
  id: string;
  title: string;
  source: string;
  url?: string;
  accessDate?: string;
  publicationDate?: string;
  type?: 'official' | 'research' | 'news' | 'industry' | 'data';
}

export interface CitationsProps {
  citations: Citation[];
  title?: string;
}

export function Citations({ citations, title = 'Sources & References' }: CitationsProps) {
  const typeIcons: Record<string, LucideIcon> = {
    official: Landmark,
    research: BarChart3,
    news: Newspaper,
    industry: Briefcase,
    data: TrendingUp,
  };

  const typeLabels = {
    official: 'Official Source',
    research: 'Research Study',
    news: 'News Article',
    industry: 'Industry Report',
    data: 'Data Source',
  };

  return (
    <Card>
      <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">{title}</h3>
      <p className="text-body-sm text-neutral-600 mb-6">
        All data and information is sourced from reputable sources to ensure accuracy and
        reliability.
      </p>
      <ol className="space-y-4">
        {citations.map((citation, index) => {
          const IconComponent = citation.type ? typeIcons[citation.type] : null;
          return (
            <li key={citation.id} className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-label-sm font-semibold">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {citation.url ? (
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-md font-medium text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {citation.title}
                      </a>
                    ) : (
                      <span className="text-body-md font-medium text-neutral-900">
                        {citation.title}
                      </span>
                    )}
                    <p className="text-body-sm text-neutral-700 mt-1">{citation.source}</p>
                    <div className="flex items-center gap-3 mt-2 text-body-xs text-neutral-500">
                      {citation.type && IconComponent && (
                        <span className="inline-flex items-center space-x-1">
                          <IconComponent className="w-4 h-4" />
                          <span>{typeLabels[citation.type]}</span>
                        </span>
                      )}
                      {citation.publicationDate && <span>Published: {citation.publicationDate}</span>}
                      {citation.accessDate && <span>Accessed: {citation.accessDate}</span>}
                    </div>
                  </div>
                  {citation.url && (
                    <svg
                      className="w-5 h-5 text-neutral-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}

/**
 * Inline citation reference (superscript number)
 */
export interface InlineCitationProps {
  citationNumber: number;
  onClick?: () => void;
}

export function InlineCitation({ citationNumber, onClick }: InlineCitationProps) {
  return (
    <sup>
      <button
        onClick={onClick}
        className="text-primary-600 hover:text-primary-700 font-semibold cursor-pointer"
        aria-label={`View citation ${citationNumber}`}
      >
        [{citationNumber}]
      </button>
    </sup>
  );
}

/**
 * Data source badge (for highlighting official sources)
 */
export interface DataSourceBadgeProps {
  source: string;
  url?: string;
  variant?: 'official' | 'verified' | 'research';
}

export function DataSourceBadge({ source, url, variant = 'verified' }: DataSourceBadgeProps) {
  const variantStyles: Record<string, { bg: string; border: string; text: string; Icon: LucideIcon }> = {
    official: {
      bg: 'bg-success-50',
      border: 'border-success-300',
      text: 'text-success-800',
      Icon: CheckCircle,
    },
    verified: {
      bg: 'bg-primary-50',
      border: 'border-primary-300',
      text: 'text-primary-800',
      Icon: CheckCircle,
    },
    research: {
      bg: 'bg-info-light',
      border: 'border-info-300',
      text: 'text-info-800',
      Icon: BarChart3,
    },
  };

  const style = variantStyles[variant];
  const IconComponent = style.Icon;

  const content = (
    <div
      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${style.bg} ${style.border}`}
    >
      <IconComponent className="w-4 h-4" />
      <span className={`text-label-sm font-medium ${style.text}`}>
        Source: {source}
      </span>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}
