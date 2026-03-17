import React from 'react';
import { BarChart3, Users, CheckCircle, Lock, type LucideIcon } from 'lucide-react';

interface TrustBadge {
  icon: LucideIcon;
  text: string;
  color: string;
}

interface TrustBadgesProps {
  badges?: TrustBadge[];
  className?: string;
}

const DEFAULT_BADGES: TrustBadge[] = [
  {
    icon: BarChart3,
    text: 'Public-source research',
    color: 'text-blue-600',
  },
  {
    icon: Users,
    text: 'Methodology notes',
    color: 'text-green-600',
  },
  {
    icon: CheckCircle,
    text: 'Assumptions shown',
    color: 'text-purple-600',
  },
  {
    icon: Lock,
    text: 'Transparent calculations',
    color: 'text-orange-600',
  },
];

export function TrustBadges({ badges = DEFAULT_BADGES, className = '' }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 py-6 ${className}`}>
      {badges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-2 bg-white border border-neutral-200 rounded-lg px-4 py-2 shadow-sm"
          >
            <IconComponent className={`w-5 h-5 ${badge.color}`} />
            <span className={`text-sm font-medium ${badge.color}`}>
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// Compact version for inline use
export function TrustBadgesCompact({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-6 text-sm text-neutral-600 ${className}`}>
      <div className="flex items-center space-x-1">
        <BarChart3 className="w-4 h-4" />
        <span>Source-led</span>
      </div>
      <div className="flex items-center space-x-1">
        <CheckCircle className="w-4 h-4" />
        <span>Assumptions shown</span>
      </div>
      <div className="flex items-center space-x-1">
        <Lock className="w-4 h-4" />
        <span>Transparent</span>
      </div>
    </div>
  );
}
