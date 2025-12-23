import React from 'react';
import { cn } from '@/lib/utils/cn';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  className?: string;
  text?: string;
}

export function Loading({
  size = 'md',
  variant = 'spinner',
  className,
  text
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  if (variant === 'skeleton') {
    return (
      <div className={cn('animate-pulse bg-neutral-200 rounded', className)}>
        {text && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-pulse-slow bg-neutral-300 h-4 rounded w-24"></div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'bg-primary-500 rounded-full animate-bounce-subtle',
              sizeClasses[size]
            )}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {text && (
          <span className="ml-3 text-body-sm text-neutral-600">{text}</span>
        )}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('flex items-center space-x-3', className)}>
        <div className={cn('bg-primary-500 rounded-full animate-pulse-slow', sizeClasses[size])} />
        {text && (
          <span className="text-body-sm text-neutral-600">{text}</span>
        )}
      </div>
    );
  }

  // Default spinner
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn('border-2 border-primary-200 border-t-primary-500 rounded-full animate-spin', sizeClasses[size])} />
      {text && (
        <span className="ml-3 text-body-sm text-neutral-600">{text}</span>
      )}
    </div>
  );
}

// Skeleton card for calculator results
export function CalculatorSkeleton() {
  return (
    <div className="space-y-6">
      <div className="animate-pulse">
        <div className="h-6 bg-neutral-200 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="h-4 bg-neutral-200 rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-neutral-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-neutral-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Progress bar component
interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'success' | 'warning';
}

export function ProgressBar({
  progress,
  className,
  showPercentage = false,
  color = 'primary'
}: ProgressBarProps) {
  const colorClasses = {
    primary: 'bg-primary-500',
    success: 'bg-success-DEFAULT',
    warning: 'bg-warning-DEFAULT',
  };

  return (
    <div className={cn('w-full bg-neutral-200 rounded-full h-2', className)}>
      <div
        className={cn(
          'h-2 rounded-full transition-all duration-300 ease-out',
          colorClasses[color]
        )}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
      {showPercentage && (
        <div className="text-center mt-2 text-body-sm text-neutral-600">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
}
