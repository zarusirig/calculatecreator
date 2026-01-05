'use client';

import React from 'react';
import Link from 'next/link';
import { trackRelatedContentClick } from '@/lib/analytics/ga4';
import {
  Gift,
  Banknote,
  DollarSign,
  BarChart3,
  TrendingUp,
  Users,
  Heart,
  Eye,
  Video,
  Play,
  Clock,
  Target,
  Calculator,
  Percent,
  Coins,
  Gem,
  Star,
  Zap,
  Award,
  Crown,
  Sparkles,
  MessageCircle,
  Share2,
  ThumbsUp,
  Bookmark,
  Hash,
  Music,
  Camera,
  Mic,
  Radio,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  PenTool,
  type LucideIcon,
} from 'lucide-react';

// Icon registry - maps string names to Lucide icon components
const iconRegistry: Record<string, LucideIcon> = {
  Gift,
  Banknote,
  DollarSign,
  BarChart3,
  TrendingUp,
  Users,
  Heart,
  Eye,
  Video,
  Play,
  Clock,
  Target,
  Calculator,
  Percent,
  Coins,
  Gem,
  Star,
  Zap,
  Award,
  Crown,
  Sparkles,
  MessageCircle,
  Share2,
  ThumbsUp,
  Bookmark,
  Hash,
  Music,
  Camera,
  Mic,
  Radio,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  PenTool,
};

interface RelatedCalculator {
  name: string;
  slug: string;
  description: string;
  /** Icon name as string (e.g., 'Gift', 'DollarSign') or emoji string */
  icon: string;
}

interface RelatedCalculatorsProps {
  calculators: RelatedCalculator[];
  currentCalculator: string;
  variant?: 'light' | 'dark';
}

export function RelatedCalculators({
  calculators,
  currentCalculator,
  variant = 'light',
}: RelatedCalculatorsProps) {
  const handleClick = (slug: string, name: string) => {
    trackRelatedContentClick(currentCalculator, `/calculators/${slug}`, 'calculator');
  };

  const headingColor = variant === 'dark' ? 'text-white' : 'text-neutral-900';

  const renderIcon = (iconName: string) => {
    const IconComponent = iconRegistry[iconName];
    if (IconComponent) {
      return <IconComponent size={24} />;
    }
    // Fallback to emoji or text if not in registry
    return <span className="text-2xl">{iconName}</span>;
  };

  return (
    <div className="mt-12">
      <h2 className={`text-display-sm font-bold mb-6 ${headingColor}`}>
        Related Calculators
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Link
            key={calc.slug}
            href={`/calculators/${calc.slug}`}
            className="card card-hover p-6 group"
            onClick={() => handleClick(calc.slug, calc.name)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                {renderIcon(calc.icon)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {calc.name}
                </h3>
                <p className="text-body-sm text-neutral-600">
                  {calc.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
