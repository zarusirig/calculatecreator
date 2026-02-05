import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface IntroSectionProps {
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Main page title (H1) */
  title: string;
  /** Primary description paragraph */
  description: string;
  /** Optional secondary description with links (can include JSX) */
  secondaryDescription?: ReactNode;
  /** Icon background style - defaults to gradient */
  iconStyle?: 'gradient' | 'solid';
  /** Icon background color for solid style */
  iconBgColor?: string;
  /** Gradient classes for gradient style */
  gradientClasses?: string;
}

/**
 * IntroSection - SSR component for calculator hero sections
 *
 * Displays a centered hero section with an icon, title, and description.
 * This component is server-rendered for better SEO and initial page load.
 *
 * @example
 * ```tsx
 * <IntroSection
 *   icon={BarChart3}
 *   title="TikTok Engagement Rate Calculator"
 *   description="Calculate your TikTok engagement rate..."
 *   secondaryDescription={
 *     <>Use your engagement rate to calculate <Link href="/calculators/brand-deal-rate/">brand deal pricing</Link></>
 *   }
 * />
 * ```
 */
export function IntroSection({
  icon: Icon,
  title,
  description,
  secondaryDescription,
  iconStyle = 'gradient',
  iconBgColor = 'bg-primary-500',
  gradientClasses = 'bg-gradient-to-r from-primary-500 to-secondary-500',
}: IntroSectionProps) {
  const iconContainerClasses =
    iconStyle === 'gradient'
      ? gradientClasses
      : iconBgColor;

  return (
    <div className="max-w-4xl mx-auto text-center mb-8">
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${iconContainerClasses} text-white mb-6`}
      >
        <Icon size={32} />
      </div>
      <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
        {title}
      </h1>
      <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">
        {description}
      </p>
      {secondaryDescription && (
        <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
          {secondaryDescription}
        </p>
      )}
    </div>
  );
}
