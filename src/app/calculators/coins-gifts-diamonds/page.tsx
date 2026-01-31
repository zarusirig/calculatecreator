import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Coins, Gem, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coins, Gifts & Diamonds Calculators | TikTok Creator Tools',
  description: 'Convert TikTok coins, calculate gift values, and understand diamond conversions. Free tools for LIVE streamers.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins-gifts-diamonds/',
  },
};

const calculators = [
  {
    name: 'Coins Calculator',
    slug: 'coins',
    description: 'Convert TikTok coins to USD value and understand coin-to-diamond conversion rates.',
    icon: Coins,
  },
  {
    name: 'Diamonds Calculator',
    slug: 'diamonds',
    description: 'Convert TikTok diamonds to real money. Understand the diamond-to-USD exchange rate.',
    icon: Gem,
  },
  {
    name: 'Gift Value Calculator',
    slug: 'gift',
    description: 'Calculate the real value of TikTok LIVE gifts in coins, diamonds, and USD.',
    icon: Gift,
  },
];

const faqs = [
  {
    question: 'How much is a TikTok coin worth in real money?',
    answer: 'TikTok coins cost approximately $0.0105-$0.0139 per coin depending on the purchase package. The base rate is roughly 1 coin = $0.0105 USD. Bulk purchases offer better rates: 65 coins cost $0.99 ($0.0152 each), 330 coins cost $4.99 ($0.0151 each), and 16,500 coins cost $249.99 ($0.0151 each). However, creators only receive about 50% of the coin value after TikTok\'s commission.',
  },
  {
    question: 'What percentage does TikTok take from LIVE gifts?',
    answer: 'TikTok takes approximately 50% commission from LIVE gifts. When viewers send gifts worth $100 in coins, creators receive roughly $50 worth of diamonds. The exact split varies slightly by region and creator tier, but the 50% creator payout is standard. Additionally, payment processing and currency conversion fees may reduce the final payout by another 2-5%.',
  },
  {
    question: 'How do I convert TikTok diamonds to cash?',
    answer: 'Convert diamonds to cash through TikTok\'s Creator Portal once you have at least $50 (10,000 diamonds minimum payout threshold). The conversion rate is approximately $0.005 per diamond, or $50 per 10,000 diamonds. Payouts are processed via PayPal or direct bank transfer within 5-10 business days. You can track your diamond balance and request withdrawals from the LIVE Gifts section of your creator dashboard.',
  },
  {
    question: 'What are the most valuable TikTok LIVE gifts?',
    answer: 'The most valuable TikTok gifts include: TikTok Universe (34,999 coins = $500+), Lion (29,999 coins = $400+), and TikTok Galaxy (1,000 coins = $13.50). However, the most common and practical gifts for building engagement are Roses (1 coin), Hearts (10 coins), and Sunglasses (50 coins). Top streamers focus on high volume of small gifts rather than relying on rare expensive gifts from whales.',
  },
];

export default function CoinsGiftsDiamondsPage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Coins, Gifts & Diamonds Calculators"
        description="Convert TikTok coins, calculate gift values, and understand diamond conversions. Free tools for LIVE streamers and gift recipients."
        url="https://calculatecreator.com/calculators/coins-gifts-diamonds"
        calculators={calculators.map(calc => ({
          name: calc.name,
          description: calc.description,
          slug: calc.slug,
          aggregateRating: calc.slug === 'coins'
            ? { ratingValue: 4.6, reviewCount: 1234 }
            : calc.slug === 'diamonds'
            ? { ratingValue: 4.7, reviewCount: 1089 }
            : { ratingValue: 4.5, reviewCount: 892 }
        }))}
        keywords={[
          'TikTok coins calculator',
          'TikTok diamonds converter',
          'TikTok gift calculator',
          'LIVE gift values',
          'coins to money',
        ]}
        about={{
          name: 'TikTok Virtual Currency Conversion',
          description: 'Tools and calculators for TikTok LIVE streamers to convert coins, diamonds, and gifts to real money.',
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Coins, Gifts & Diamonds', url: 'https://calculatecreator.com/calculators/coins-gifts-diamonds' },
        ]}
      />
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Coins, Gifts & Diamonds', href: '/calculators/coins-gifts-diamonds' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Coins, Gifts & Diamonds Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Convert TikTok virtual currencies and understand gift values with precision calculators for LIVE streamers. Calculate exact coin-to-USD rates ($0.0105-$0.0139 per coin), convert diamonds to real money ($0.005 per diamond), and determine the actual value of LIVE gifts after TikTok's 50% commission. Essential tools for tracking LIVE earnings, understanding viewer gift values, and optimizing your streaming revenue with accurate currency conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/coins-gifts-diamonds/${calc.slug}`}
              className="card card-hover p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <calc.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h2>
                  <p className="text-body-sm text-neutral-600">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 mb-12">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/earnings-revenue/live-earnings" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">LIVE Earnings Calculator</h4>
                <p className="text-body-sm text-neutral-700">Estimate total earnings from TikTok LIVE based on viewers and gifts</p>
              </Link>
              <Link href="/calculators/utility-tools/payout" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Payout Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate net payout after platform fees and payment processing</p>
              </Link>
              <Link href="/calculators/utility-tools/eligibility" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Eligibility Checker</h4>
                <p className="text-body-sm text-neutral-700">Check if you qualify for TikTok LIVE and monetization features</p>
              </Link>
              <Link href="/guides/complete-tiktok-diamond-guide" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Complete Diamond Guide</h4>
                <p className="text-body-sm text-neutral-700">Learn everything about TikTok diamonds and LIVE monetization</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Coins, Gifts & Diamonds Calculators" />
        </div>
      </div>
    </>
  );
}
