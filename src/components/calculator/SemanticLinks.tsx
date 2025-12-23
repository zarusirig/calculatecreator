'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Icon, type IconName } from '@/components/ui/Icon';
import { getSemanticLinks, type SemanticLinkGroup } from '@/lib/seo/semantic-links';
import { trackNavigation } from '@/lib/analytics/ga4';
import { ArrowRight, Scale, Link as LinkIcon, RefreshCw, BarChart3, ChevronRight, type LucideIcon } from 'lucide-react';

export interface SemanticLinksProps {
  currentCalculator: string;
  className?: string;
}

export function SemanticLinks({ currentCalculator, className = '' }: SemanticLinksProps) {
  const linkGroups = getSemanticLinks(currentCalculator);

  if (linkGroups.length === 0) {
    return null;
  }

  const handleLinkClick = (targetSlug: string, relationship: string) => {
    trackNavigation('related_content', currentCalculator, `/calculators/${targetSlug}`);
  };

  const getRelationshipColor = (relationship: string) => {
    switch (relationship) {
      case 'prerequisite':
        return 'border-primary-300 bg-primary-50/50 hover:bg-primary-50';
      case 'next-step':
        return 'border-success-300 bg-success-50/50 hover:bg-success-50';
      case 'compare':
        return 'border-warning-300 bg-warning-50/50 hover:bg-warning-50';
      case 'related':
        return 'border-neutral-300 bg-neutral-50/50 hover:bg-neutral-50';
      case 'alternative':
        return 'border-secondary-300 bg-secondary-50/50 hover:bg-secondary-50';
      default:
        return 'border-neutral-300 bg-neutral-50/50 hover:bg-neutral-50';
    }
  };

  const getTitleIcon = (title: string): LucideIcon => {
    switch (title) {
      case 'Start Here First':
        return ArrowRight;
      case 'Next Steps':
        return ArrowRight;
      case 'Compare With':
        return Scale;
      case 'Related Calculators':
        return LinkIcon;
      case 'Alternatives':
        return RefreshCw;
      default:
        return BarChart3;
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {linkGroups.map((group, groupIndex) => {
        const TitleIcon = getTitleIcon(group.title);
        return (
          <Card key={groupIndex} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TitleIcon className="w-6 h-6 text-neutral-700" />
              <h3 className="text-heading-md font-semibold text-neutral-900">
                {group.title}
              </h3>
            </div>

            <div className="space-y-3">
              {group.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={`/calculators/${link.slug}`}
                  onClick={() => handleLinkClick(link.slug, link.relationship)}
                  className="block group"
                >
                  <div
                    className={`
                      flex items-start gap-4 p-4 rounded-lg border-2 transition-all
                      ${getRelationshipColor(link.relationship)}
                    `}
                  >
                    <span className="flex-shrink-0">
                      <Icon name={link.icon as IconName} size={28} className="text-neutral-700" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-label-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                          {link.name}
                        </h4>
                        <ChevronRight className="flex-shrink-0 w-5 h-5 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-body-sm text-neutral-600 mb-2">
                        {link.description}
                      </p>
                      {link.context && (
                        <p className="text-body-xs text-primary-700 font-medium">
                          {link.context}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/**
 * Compact version for sidebar or inline display
 */
export function SemanticLinksCompact({
  currentCalculator,
  maxLinks = 3,
  className = '',
}: {
  currentCalculator: string;
  maxLinks?: number;
  className?: string;
}) {
  const linkGroups = getSemanticLinks(currentCalculator);

  if (linkGroups.length === 0) {
    return null;
  }

  // Flatten and take first N links
  const allLinks = linkGroups.flatMap((group) => group.links).slice(0, maxLinks);

  const handleLinkClick = (targetSlug: string, relationship: string) => {
    trackNavigation('related_content', currentCalculator, `/calculators/${targetSlug}`);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <h4 className="text-label-md font-semibold text-neutral-700 mb-3">
        Related Tools
      </h4>
      {allLinks.map((link, index) => (
        <Link
          key={index}
          href={`/calculators/${link.slug}`}
          onClick={() => handleLinkClick(link.slug, link.relationship)}
          className="group flex items-center gap-3 p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-primary-300 transition-all"
        >
          <Icon name={link.icon as IconName} size={20} className="text-neutral-600" />
          <div className="flex-1 min-w-0">
            <p className="text-body-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors truncate">
              {link.name}
            </p>
          </div>
          <ChevronRight className="flex-shrink-0 w-4 h-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
        </Link>
      ))}
    </div>
  );
}

/**
 * Contextual prompt to use semantic link
 * Displays as an inline suggestion within calculator content
 */
export function SemanticLinkPrompt({
  currentCalculator,
  relationship = 'next-step',
  className = '',
}: {
  currentCalculator: string;
  relationship?: string;
  className?: string;
}) {
  const linkGroups = getSemanticLinks(currentCalculator);

  // Find first link of specified relationship type
  let targetLink = null;
  for (const group of linkGroups) {
    targetLink = group.links.find((link) => link.relationship === relationship);
    if (targetLink) break;
  }

  if (!targetLink) return null;

  const handleClick = () => {
    trackNavigation('related_content', currentCalculator, `/calculators/${targetLink.slug}`);
  };

  return (
    <Link
      href={`/calculators/${targetLink.slug}`}
      onClick={handleClick}
      className={`block ${className}`}
    >
      <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary-50 to-success-50 border-2 border-primary-200 hover:border-primary-300 transition-all group">
        <Icon name={targetLink.icon as IconName} size={24} className="text-neutral-700" />
        <div className="flex-1">
          <p className="text-body-xs text-primary-700 font-semibold uppercase tracking-wide mb-1">
            {relationship === 'prerequisite' && 'Start Here First'}
            {relationship === 'next-step' && 'Next Step'}
            {relationship === 'compare' && 'Compare'}
            {relationship === 'related' && 'Related Tool'}
          </p>
          <p className="text-label-md font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
            {targetLink.name}
          </p>
          {targetLink.context && (
            <p className="text-body-sm text-neutral-600 mt-1">
              {targetLink.context}
            </p>
          )}
        </div>
        <ArrowRight className="flex-shrink-0 w-6 h-6 text-primary-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
