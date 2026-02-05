import type { Metadata } from 'next';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'TikTok Payout Calculator | Net Earnings After Fees 2026',
  description: 'Calculate your actual TikTok payout after platform fees and payment processing. See what you really receive from LIVE gifts, Creator Fund, and Shop earnings.',
  keywords: ['tiktok payout calculator', 'creator earnings after fees', 'tiktok platform fees', 'live gift payout', 'net earnings calculator'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/utility-tools/payout/',
  },
};

const faqs = [
  {
    question: 'Why does TikTok take 50% of LIVE gifts?',
    answer: "The 50% platform fee covers operational costs, payment processing, content moderation, platform development, and infrastructure. This is comparable to other platforms - Twitch takes 50% of subscriptions, YouTube takes 30% of Super Chat."
  },
  {
    question: 'What payment method has the lowest fees?',
    answer: 'Bank transfer (0% fee) has the lowest processing cost. Payoneer is second (2% fee). PayPal has the highest fee (2.9%). For large payouts, bank transfer saves significant money over time.'
  },
  {
    question: 'Can I negotiate lower platform fees with TikTok?',
    answer: "No, TikTok's platform fees are fixed and non-negotiable. All creators pay the same percentage regardless of follower count or earnings. The only way to \"reduce\" fees is choosing lower-cost payment methods."
  },
  {
    question: 'Are payouts taxable income?',
    answer: 'Yes! All creator payouts are taxable income in most countries. US creators receive 1099 forms if earning $600+ annually. Set aside 25-35% for taxes. Consult a tax professional for your specific situation.'
  },
  {
    question: 'How long does it take to receive payouts?',
    answer: 'Processing times: PayPal (7-14 days), Bank transfer (14-30 days), Payoneer (7-21 days). Times vary by region. Factor in payment processing when planning your cash flow.'
  }
];

export default function PayoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CalculatorSchema
        name="Creator Payout Calculator"
        description="Calculate your actual payout after platform fees and payment processing charges."
        url="https://calculatecreator.com/calculators/utility-tools/payout/"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Utility Tools', url: 'https://calculatecreator.com/calculators/utility-tools' },
          { name: 'Payout Calculator', url: 'https://calculatecreator.com/calculators/utility-tools/payout/' }
        ]}
      />
      {children}
    </>
  );
}
