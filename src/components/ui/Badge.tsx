import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'active' | 'success' | 'warning' | 'danger';
}

export function Badge({ children, className, tone = 'default' }: BadgeProps) {
  const toneClasses = {
    default: 'bg-neutral-100 text-neutral-700',
    active: 'bg-primary-100 text-primary-700',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-red-50 text-red-700',
  };

  return (
    <span className={cn('badge', toneClasses[tone], className)}>
      {children}
    </span>
  );
}
