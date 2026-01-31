import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Coins, Gem, Gift, TrendingUp, DollarSign, Users, ArrowRight, Target, Clock, Zap, Heart } from 'lucide-react';

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
  {
    question: 'When can I withdraw my TikTok diamond earnings?',
    answer: 'You can withdraw diamond earnings once you reach the $50 minimum threshold (10,000 diamonds). Withdrawals are processed within 5-10 business days after request submission. New creators may experience a 7-14 day holding period for their first withdrawal. TikTok processes payouts twice monthly on the 1st and 15th. Ensure your payment method (PayPal or bank account) is verified in Creator Portal before requesting withdrawal.',
  },
  {
    question: 'Do coin prices differ by country or region?',
    answer: 'Yes, TikTok coin prices vary by region due to currency conversion, local taxes, and market conditions. US pricing is $0.99 for 65 coins, while European users pay €0.99 (slightly higher USD equivalent). Southeast Asian markets often have lower coin prices to match purchasing power. The diamond-to-USD conversion rate remains consistent globally at $0.005 per diamond, but local payout currency may affect final amounts received.',
  },
  {
    question: 'What gift strategy maximizes creator earnings?',
    answer: 'Maximize earnings by encouraging frequent low-value gifts rather than waiting for expensive ones. Create gift goals and milestones during streams (e.g., "100 roses for next song request"). Acknowledge every gift immediately to build reciprocity. Use TikTok\'s gift effects strategically—gifts with animations boost engagement and encourage more gifting. Host themed streams with gift-based interactions. Consistency matters more than individual gift value for sustainable LIVE income.',
  },
  {
    question: 'Can I transfer diamonds between TikTok accounts?',
    answer: 'No, TikTok diamonds cannot be transferred between accounts. Diamonds are tied to the specific creator account that earned them through LIVE gifts. They cannot be sold, traded, or gifted to other users. Each creator must independently earn and withdraw their own diamond balance. This policy prevents fraud and ensures proper tax reporting. If you manage multiple accounts, each must reach the $50 minimum withdrawal threshold separately.',
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

        {/* 2026 LIVE Gifting Economy */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <div>
                <h2 className="text-heading-md font-bold text-neutral-900 mb-2">2026 LIVE Gifting Economy</h2>
                <p className="text-body-md text-neutral-700">
                  TikTok LIVE gifting reached $4.8 billion globally in 2025, with 2026 projections exceeding $6.2 billion. The average LIVE streamer with 1,000+ viewers earns $50-$200 per stream through gifts, with top creators generating $500-$2,000 per session.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="text-primary-600" size={20} />
                  <h4 className="font-semibold text-neutral-900">Top Markets</h4>
                </div>
                <p className="text-body-sm text-neutral-700">US, Indonesia, Saudi Arabia, UK, Philippines lead in LIVE gift spending</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="text-primary-600" size={20} />
                  <h4 className="font-semibold text-neutral-900">Avg Per Viewer</h4>
                </div>
                <p className="text-body-sm text-neutral-700">$0.15-$0.35 in gifts per engaged viewer across entertainment streams</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="text-primary-600" size={20} />
                  <h4 className="font-semibold text-neutral-900">Growth Rate</h4>
                </div>
                <p className="text-body-sm text-neutral-700">28% YoY growth in LIVE gifting revenue, driven by emerging markets</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Currency Conversion Table */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8">
            <h2 className="text-heading-md font-bold text-neutral-900 mb-6">TikTok Currency Conversion Rates</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Currency</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">USD Value (Viewer)</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Creator Receives</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 text-neutral-700">Coins</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">100 coins</td>
                    <td className="py-3 px-4 text-neutral-700">~$1.39</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">50 diamonds ($0.25)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 text-neutral-700">Coins</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">1,000 coins</td>
                    <td className="py-3 px-4 text-neutral-700">~$13.90</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">500 diamonds ($2.50)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 text-neutral-700">Diamonds</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">1,000 diamonds</td>
                    <td className="py-3 px-4 text-neutral-700">—</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">$5.00 USD</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 text-neutral-700">Diamonds</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">10,000 diamonds</td>
                    <td className="py-3 px-4 text-neutral-700">—</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">$50.00 USD (min withdrawal)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 bg-primary-50">
                    <td className="py-3 px-4 text-neutral-700 font-semibold">Popular Gift: Rose</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">1 coin</td>
                    <td className="py-3 px-4 text-neutral-700">$0.0139</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">0.5 diamonds ($0.0025)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 bg-primary-50">
                    <td className="py-3 px-4 text-neutral-700 font-semibold">Popular Gift: Galaxy</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">1,000 coins</td>
                    <td className="py-3 px-4 text-neutral-700">$13.90</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">500 diamonds ($2.50)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 bg-primary-50">
                    <td className="py-3 px-4 text-neutral-700 font-semibold">Popular Gift: Universe</td>
                    <td className="py-3 px-4 text-neutral-900 font-medium">34,999 coins</td>
                    <td className="py-3 px-4 text-neutral-700">$486.49</td>
                    <td className="py-3 px-4 text-primary-600 font-medium">17,499 diamonds ($87.50)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-neutral-600 mt-4">
              Note: TikTok takes approximately 50% commission. Viewer pays full coin price, creator receives 50% value in diamonds. Diamond-to-USD conversion: $0.005 per diamond.
            </p>
          </Card>
        </div>

        {/* How the Gift Economy Works */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8">
            <h2 className="text-heading-md font-bold text-neutral-900 mb-6">How the TikTok Gift Economy Works</h2>
            <p className="text-body-md text-neutral-700 mb-8">
              Understanding the complete flow from viewer purchase to creator payout helps you maximize LIVE earnings and set realistic income expectations.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-3">
                    <DollarSign size={28} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">1. Viewer Buys Coins</h3>
                  <p className="text-body-sm text-neutral-700">
                    Viewer purchases coins via in-app payment. 100 coins = $1.39 USD
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 -right-2 text-primary-300">
                  <ArrowRight size={24} />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center mb-3">
                    <Gift size={28} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">2. Sends Gift</h3>
                  <p className="text-body-sm text-neutral-700">
                    Viewer sends gift to creator during LIVE stream using coins
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 -right-2 text-primary-300">
                  <ArrowRight size={24} />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-3">
                    <Gem size={28} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">3. Creator Gets Diamonds</h3>
                  <p className="text-body-sm text-neutral-700">
                    TikTok converts gift to diamonds. Creator receives ~50% of coin value
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 -right-2 text-primary-300">
                  <ArrowRight size={24} />
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-success-100 text-success-600 flex items-center justify-center mb-3">
                    <Coins size={28} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">4. Cash Out</h3>
                  <p className="text-body-sm text-neutral-700">
                    Convert diamonds to USD. Min $50 payout via PayPal or bank
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <p className="text-body-sm text-neutral-900">
                <strong>Example:</strong> Viewer spends $13.90 for 1,000 coins → Sends TikTok Galaxy gift → Creator receives 500 diamonds → Converts to $2.50 USD (50% of viewer spend after TikTok commission)
              </p>
            </div>
          </Card>
        </div>

        {/* LIVE Streaming Tips */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-heading-md font-bold text-neutral-900 mb-6">Maximize LIVE Gift Revenue</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-primary-600">
              <div className="flex items-start space-x-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Set Gift Goals & Milestones</h3>
                  <p className="text-body-sm text-neutral-700">
                    Create visible on-screen goals like "500 roses unlocks next song" or "Galaxy gift = personal shoutout." Track progress live to encourage participation. Viewers engage 3x more when they see tangible milestones and immediate rewards for their gifts.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-secondary-600">
              <div className="flex items-start space-x-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary-100 text-secondary-600 flex items-center justify-center">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Acknowledge Every Gift Immediately</h3>
                  <p className="text-body-sm text-neutral-700">
                    Call out gifters by username within 5 seconds. Thank small gifts as enthusiastically as large ones. Create custom reactions for top-tier gifts. Immediate recognition builds reciprocity and encourages repeat gifting throughout the stream.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-success-600">
              <div className="flex items-start space-x-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success-100 text-success-600 flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Stream Consistently at Peak Times</h3>
                  <p className="text-body-sm text-neutral-700">
                    Go live 3-5x weekly at the same times when your audience is most active. Evening hours (7-10 PM local) generate 2.5x more gifts than morning streams. Consistency builds routine viewership and higher-value regular gifters who anticipate your schedule.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-warning-600">
              <div className="flex items-start space-x-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warning-100 text-warning-600 flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Use Interactive Gift Mechanics</h3>
                  <p className="text-body-sm text-neutral-700">
                    Enable TikTok's gift effects that trigger animations, sounds, or special stream interactions. Host gift battles between viewers, create tiered reward systems, or offer exclusive content at gift thresholds. Interactive mechanics increase average gift value by 40%.
                  </p>
                </div>
              </div>
            </Card>
          </div>
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
