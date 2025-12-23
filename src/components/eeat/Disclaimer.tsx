import React from 'react';
import { DollarSign, ClipboardList, Link, Info, BookOpen, type LucideIcon } from 'lucide-react';

export interface DisclaimerProps {
  type: 'financial' | 'general' | 'affiliate' | 'tax' | 'educational';
  customText?: string;
}

interface DisclaimerConfig {
  title: string;
  icon: LucideIcon;
  text: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export function Disclaimer({ type, customText }: DisclaimerProps) {
  const disclaimers: Record<DisclaimerProps['type'], DisclaimerConfig> = {
    financial: {
      title: 'Financial Disclaimer',
      icon: DollarSign,
      text:
        customText ||
        'The earnings estimates provided by our calculators are for informational purposes only and should not be considered financial advice. Actual earnings may vary significantly based on numerous factors including content quality, audience demographics, engagement rates, platform algorithm changes, and market conditions. Individual results are not guaranteed. We recommend consulting with a qualified financial advisor for personalized financial guidance.',
      bgColor: 'bg-warning-50',
      borderColor: 'border-warning-300',
      textColor: 'text-warning-900',
    },
    tax: {
      title: 'Tax Information Disclaimer',
      icon: ClipboardList,
      text:
        customText ||
        'The tax information and calculations provided are for educational purposes only and should not be considered professional tax advice. Tax laws vary by jurisdiction and change frequently. We strongly recommend consulting with a qualified tax professional (CPA or tax attorney) for advice specific to your situation. Our tax calculators provide estimates only and may not reflect your actual tax obligations.',
      bgColor: 'bg-warning-50',
      borderColor: 'border-warning-300',
      textColor: 'text-warning-900',
    },
    affiliate: {
      title: 'Affiliate Disclosure',
      icon: Link,
      text:
        customText ||
        'This website may contain affiliate links. When you click on certain links and make a purchase, we may receive a commission at no additional cost to you. This helps us maintain and improve our free tools and content. We only recommend products and services we believe will provide value to our users. Our editorial content is not influenced by affiliate partnerships.',
      bgColor: 'bg-info-light',
      borderColor: 'border-info-300',
      textColor: 'text-info-900',
    },
    general: {
      title: 'General Disclaimer',
      icon: Info,
      text:
        customText ||
        'The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website. Any reliance you place on such information is strictly at your own risk.',
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-300',
      textColor: 'text-neutral-900',
    },
    educational: {
      title: 'Educational Content',
      icon: BookOpen,
      text:
        customText ||
        'This content is provided for educational and informational purposes only. It is not intended as a substitute for professional advice. Results and outcomes may vary based on individual circumstances. Always conduct your own research and consider seeking professional guidance before making important decisions.',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      textColor: 'text-primary-900',
    },
  };

  const disclaimer = disclaimers[type];
  const IconComponent = disclaimer.icon;

  return (
    <div
      className={`p-6 rounded-xl border-2 ${disclaimer.bgColor} ${disclaimer.borderColor}`}
      role="note"
      aria-label={disclaimer.title}
    >
      <div className="flex items-start space-x-3">
        <IconComponent className={`w-8 h-8 flex-shrink-0 ${disclaimer.textColor}`} />
        <div className="flex-1 min-w-0">
          <h3 className={`text-heading-sm font-semibold mb-2 ${disclaimer.textColor}`}>
            {disclaimer.title}
          </h3>
          <p className={`text-body-sm leading-relaxed ${disclaimer.textColor}`}>
            {disclaimer.text}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Combined disclaimers for pages that need multiple
 */
export interface MultipleDisclaimersProps {
  types: Array<'financial' | 'general' | 'affiliate' | 'tax' | 'educational'>;
}

export function MultipleDisclaimers({ types }: MultipleDisclaimersProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-heading-md font-semibold text-neutral-900">Important Disclaimers</h3>
      {types.map((type) => (
        <Disclaimer key={type} type={type} />
      ))}
    </div>
  );
}
