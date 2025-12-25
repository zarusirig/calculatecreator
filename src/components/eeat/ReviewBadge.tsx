import React from 'react';
import { Microscope, PenTool, DollarSign, CheckCircle, type LucideIcon } from 'lucide-react';
import type { Author } from '@/lib/constants/authors';

export interface ReviewBadgeProps {
  reviewer: Author;
  reviewDate: string;
  reviewType?: 'technical' | 'editorial' | 'financial' | 'expert';
  variant?: 'light' | 'dark';
}

export function ReviewBadge({ reviewer, reviewDate, reviewType = 'expert', variant = 'light' }: ReviewBadgeProps) {
  const reviewTypeLabels = {
    technical: 'Technically Reviewed',
    editorial: 'Editorially Reviewed',
    financial: 'Financially Reviewed',
    expert: 'Expert Reviewed',
  };

  const reviewTypeIcons: Record<string, LucideIcon> = {
    technical: Microscope,
    editorial: PenTool,
    financial: DollarSign,
    expert: CheckCircle,
  };

  const IconComponent = reviewTypeIcons[reviewType];
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-2 ${
      isDark 
        ? 'bg-white/10 border-white/20 backdrop-blur-sm' 
        : 'bg-success-50 border-success-200'
    }`}>
      <IconComponent className={`w-5 h-5 ${
        isDark ? 'text-white' : 'text-success-700'
      }`} />
      <div className="flex flex-col">
        <span className={`text-label-sm font-semibold ${
          isDark ? 'text-white' : 'text-success-800'
        }`}>
          {reviewTypeLabels[reviewType]}
        </span>
        <span className={`text-body-xs ${
          isDark ? 'text-white/80' : 'text-success-700'
        }`}>
          by {reviewer.name} • {reviewDate}
        </span>
      </div>
    </div>
  );
}

/**
 * Review section with detailed reviewer information
 */
export interface ReviewSectionProps {
  reviewer: Author;
  reviewDate: string;
  reviewType?: 'technical' | 'editorial' | 'financial' | 'expert';
  reviewNotes?: string;
}

export function ReviewSection({
  reviewer,
  reviewDate,
  reviewType = 'expert',
  reviewNotes,
}: ReviewSectionProps) {
  const reviewTypeLabels = {
    technical: 'Technical Review',
    editorial: 'Editorial Review',
    financial: 'Financial Review',
    expert: 'Expert Review',
  };

  return (
    <div className="p-6 bg-success-light rounded-xl border-2 border-success-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-success-500 text-white flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-heading-sm font-semibold text-success-900 mb-2">
            {reviewTypeLabels[reviewType]}
          </h3>
          <p className="text-body-sm text-success-800 mb-3">
            This content has been reviewed by{' '}
            <span className="font-semibold">{reviewer.name}</span>, {reviewer.role}, to ensure
            accuracy and reliability.
          </p>
          {reviewNotes && (
            <p className="text-body-sm text-success-700 italic mb-3">"{reviewNotes}"</p>
          )}
          <div className="flex items-center space-x-4 text-body-xs text-success-700">
            <span>Reviewed: {reviewDate}</span>
            {reviewer.credentials.length > 0 && (
              <>
                <span>•</span>
                <span>{reviewer.credentials[0]}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
