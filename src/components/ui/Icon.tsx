import React from 'react';
import {
  DollarSign,
  Banknote,
  TrendingUp,
  Handshake,
  Gift,
  ShoppingBag,
  BarChart3,
  Gem,
  Video,
  Clock,
  Users,
  Scale,
  Calendar,
  User,
  Eye,
  Briefcase,
  Coins,
  RefreshCw,
  Camera,
  Smartphone,
  Dumbbell,
  Sparkles,
  Gamepad2,
  UtensilsCrossed,
  Monitor,
  BookOpen,
  Laugh,
  Globe,
  Swords,
  Megaphone,
  CreditCard,
  Wallet,
  Save,
  Calculator,
  Lock,
  Lightbulb,
  Theater,
  Hash,
  Bookmark,
  Link,
  ClipboardList,
  Receipt,
  ShoppingCart,
  MapPin,
  ArrowUpRight,
  Info,
  Heart,
  Cake,
  Target,
  Rocket,
  CheckCircle,
  MessageCircle,
  Play,
  Shield,
  XCircle,
  Repeat,
  Film,
  Timer,
  Zap,
  Star,
  Award,
  TrendingDown,
  FileText,
  Share2,
  AlertTriangle,
  ThumbsUp,
  Percent,
  type LucideIcon,
} from 'lucide-react';

// Map emoji identifiers to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  // Money & Earnings
  'money-bag': DollarSign,
  'money': Banknote,
  'dollar': Banknote,
  'wallet': Wallet,
  'credit-card': CreditCard,
  'cash': Banknote,

  // Charts & Analytics
  'chart-up': TrendingUp,
  'chart-bar': BarChart3,
  'trending': TrendingUp,
  'analytics': BarChart3,

  // Business & Deals
  'handshake': Handshake,
  'deal': Handshake,
  'partnership': Handshake,
  'briefcase': Briefcase,

  // Gifts & Shopping
  'gift': Gift,
  'shopping': ShoppingBag,
  'shop': ShoppingBag,
  'cart': ShoppingCart,

  // Gems & Value
  'gem': Gem,
  'diamond': Gem,
  'coins': Coins,

  // Video & Content
  'video': Video,
  'camera': Camera,
  'play': Play,
  'clapperboard': Video,

  // Time & Clock
  'clock': Clock,
  'time': Clock,
  'calendar': Calendar,
  'schedule': Calendar,

  // Users & Audience
  'users': Users,
  'user': User,
  'audience': Users,
  'followers': Users,
  'eye': Eye,
  'views': Eye,

  // Engagement
  'target': Target,
  'goal': Target,
  'rocket': Rocket,
  'launch': Rocket,
  'check': CheckCircle,
  'verified': CheckCircle,
  'message': MessageCircle,
  'comment': MessageCircle,

  // Save & Refresh
  'save': Save,
  'refresh': RefreshCw,
  'sync': RefreshCw,

  // Categories & Niches
  'smartphone': Smartphone,
  'mobile': Smartphone,
  'fitness': Dumbbell,
  'workout': Dumbbell,
  'sparkles': Sparkles,
  'beauty': Sparkles,
  'gaming': Gamepad2,
  'food': UtensilsCrossed,
  'cooking': UtensilsCrossed,
  'tech': Monitor,
  'computer': Monitor,
  'book': BookOpen,
  'education': BookOpen,
  'laugh': Laugh,
  'comedy': Laugh,

  // Global & Location
  'globe': Globe,
  'world': Globe,
  'global': Globe,
  'location': MapPin,

  // Tools & Utility
  'calculator': Calculator,
  'lock': Lock,
  'security': Lock,
  'lightbulb': Lightbulb,
  'idea': Lightbulb,
  'theater': Theater,
  'entertainment': Theater,
  'hash': Hash,
  'hashtag': Hash,
  'bookmark': Bookmark,
  'tag': Bookmark,
  'link': Link,
  'clipboard': ClipboardList,
  'list': ClipboardList,
  'receipt': Receipt,
  'invoice': Receipt,

  // Comparison & Balance
  'versus': Swords,
  'compare': Swords,
  'scale': Scale,
  'balance': Scale,

  // Marketing
  'megaphone': Megaphone,
  'announce': Megaphone,
  'promotion': Megaphone,

  // Misc
  'arrow-up-right': ArrowUpRight,
  'external': ArrowUpRight,
  'info': Info,
  'heart': Heart,
  'love': Heart,
  'cake': Cake,
  'birthday': Cake,

  // Protection & Security
  'shield': Shield,
  'protection': Shield,
  'secure': Shield,

  // Errors & Warnings
  'x-circle': XCircle,
  'error': XCircle,
  'warning': AlertTriangle,
  'alert': AlertTriangle,

  // Repeat & Sync
  'repeat': Repeat,
  'loop': Repeat,
  'share': Share2,

  // Media & Production
  'film': Film,
  'production': Film,
  'movie': Film,
  'timer': Timer,
  'stopwatch': Timer,

  // Performance & Growth
  'zap': Zap,
  'fast': Zap,
  'energy': Zap,
  'star': Star,
  'rating': Star,
  'award': Award,
  'trophy': Award,
  'trending-down': TrendingDown,
  'decline': TrendingDown,

  // Documents
  'file': FileText,
  'document': FileText,
  'contract': FileText,

  // Engagement extras
  'thumbs-up': ThumbsUp,
  'like': ThumbsUp,
  'percent': Percent,
  'percentage': Percent,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
}

// Export the icon map for reference
export { iconMap };
