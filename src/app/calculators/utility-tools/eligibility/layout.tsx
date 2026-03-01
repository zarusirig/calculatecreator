import type { Metadata } from 'next';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: "TikTok Monetization Eligibility Checker",
  description: "Check TikTok monetization eligibility across Creator Fund, LIVE Gifts, Shop, and Rewards with account threshold guidance and milestone planning details.",
  keywords: ['tiktok eligibility', 'creator fund requirements', 'tiktok monetization requirements', 'live gifts eligibility', 'tiktok shop requirements'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/utility-tools/eligibility/',
  },
};

const faqs = [
  {
    question: 'What are the requirements for TikTok Creator Fund?',
    answer: 'Creator Fund requires: 10,000+ followers, 100,000+ video views in the last 30 days, 18+ years old, and residence in an eligible country (US, UK, Germany, France, Italy, Spain). Your account must be in good standing with Community Guidelines.'
  },
  {
    question: 'How do I qualify for TikTok LIVE?',
    answer: 'TikTok LIVE requires 1,000+ followers and 18+ years old to go LIVE. To receive gifts (monetize), you need the same requirements plus your account must be at least 30 days old. Some regions have different requirements.'
  },
  {
    question: 'Can I join multiple TikTok monetization programs?',
    answer: "Yes! You can participate in Creator Fund, LIVE Gifts, Shop Affiliate, and Series simultaneously if you meet each program's requirements. Many creators diversify income across multiple TikTok monetization streams."
  },
  {
    question: 'What does "account in good standing" mean?',
    answer: 'Good standing means no recent Community Guidelines violations, no copyright strikes, no fake engagement, and authentic content. Violations can temporarily or permanently disqualify you from monetization programs.'
  },
  {
    question: 'How long does it take to get approved for monetization?',
    answer: "Approval times vary by program. Creator Fund: 1-7 days. LIVE access: instant once requirements met. Shop Affiliate: 1-3 days. If you meet requirements but aren't approved, contact TikTok support."
  }
];

export default function EligibilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CalculatorSchema
        name="TikTok Monetization Eligibility Checker"
        description="Check if you qualify for TikTok's monetization programs including Creator Fund, LIVE, and Shop."
        url="https://calculatecreator.com/calculators/utility-tools/eligibility/"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'Utility Tools', url: 'https://calculatecreator.com/calculators/utility-tools/' },
          { name: 'Eligibility Checker', url: 'https://calculatecreator.com/calculators/utility-tools/eligibility/' }
        ]}
      />
      {children}
    </>
  );
}
