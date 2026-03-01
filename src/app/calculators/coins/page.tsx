import type { Metadata } from 'next';
import Link from 'next/link';
import { Coins, DollarSign, Gift, Gem, Globe, BarChart3, TrendingUp, Zap, ShoppingCart, Calculator } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { RelatedGuides } from '@/components/calculator/RelatedGuides';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { CoinsCalculatorWidget } from '@/components/calculators/coins/CalculatorWidget';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';

export const metadata: Metadata = {
  title: "TikTok Coins Calculator — Coins to USD Converter 2026",
  description: "Convert TikTok coins to USD, diamonds, and real money. See how much coins cost to buy and what creators actually receive after TikTok's 50% commission.",
  keywords: ['tiktok coins calculator', 'tiktok coins to usd', 'tiktok coin price', 'coins to diamonds', 'tiktok gift calculator', 'buy tiktok coins'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins/',
  },
};

const faqData = [
  {
    question: 'How much is 1 TikTok coin worth?',
    answer: 'One TikTok coin costs approximately $0.0152 USD to purchase. When you send gifts, creators receive 50% of the coin value as diamonds ($0.005 per diamond). So 1 coin = $0.0152 for buyers but only $0.0076 for creators.',
  },
  {
    question: 'How much do TikTok coins cost?',
    answer: 'TikTok coins are sold in bundles: 65 coins for $0.99, 330 coins for $4.99, 660 coins for $9.99, 1,321 coins for $19.99, 3,303 coins for $49.99, and 6,607 coins for $99.99. Larger bundles offer slightly better value per coin.',
  },
  {
    question: 'How do TikTok coins convert to diamonds?',
    answer: 'When viewers send gifts with coins, creators receive diamonds at a 2:1 ratio. Every 2 coins spent becomes 1 diamond for the creator. TikTok keeps 50% as platform revenue. This means 100 coins sent = 50 diamonds for the creator.',
  },
  {
    question: 'How many coins do I need to send a Rose gift?',
    answer: 'A Rose gift costs 1 coin ($0.0152). It is the cheapest gift available on TikTok. The creator receives 0.5 diamonds ($0.0025) from a Rose. Other popular gifts: TikTok logo (1 coin), Finger Heart (5 coins), Drama Queen (5,000 coins).',
  },
  {
    question: 'What is the most expensive TikTok gift?',
    answer: 'The TikTok Universe is the most expensive gift at 34,999 coins (approximately $530 USD). The creator receives 17,499 diamonds ($87.50) from this gift. Other expensive gifts include Lion (29,999 coins) and Planet (15,000 coins).',
  },
  {
    question: 'Can I get free TikTok coins?',
    answer: 'TikTok occasionally offers free coins through promotions, first-time purchase bonuses, or special events. However, there is no legitimate way to get large amounts of free coins. Be cautious of scam websites claiming to offer free coins.',
  },
  {
    question: 'Where do I buy TikTok coins?',
    answer: 'Purchase coins directly in the TikTok app by tapping your profile, then the three dots menu, then Balance. You can pay with Apple Pay, Google Pay, credit/debit cards, or PayPal depending on your region.',
  },
  {
    question: 'Do TikTok coin prices vary by country?',
    answer: 'Yes, coin prices may vary slightly by region due to local app store pricing, taxes, and currency conversion. The base value remains similar, but actual prices may differ by 5-15% depending on your country.',
  },
  {
    question: 'Can I refund TikTok coins?',
    answer: 'TikTok coins are generally non-refundable once purchased. However, you may be able to request a refund through Apple App Store or Google Play Store within their refund windows for accidental or unauthorized purchases.',
  },
  {
    question: 'How much does a creator get from 100 coins?',
    answer: 'From 100 coins of gifts, creators receive 50 diamonds worth $0.25 USD. The viewer paid approximately $1.52 for those coins, but TikTok takes 50% as platform fees. Creators always receive half the coin value.',
  },
  {
    question: 'Why are TikTok coins so expensive?',
    answer: 'TikTok coin pricing reflects platform costs, payment processing fees, and TikTok\'s 50% revenue share. While they may seem expensive, the pricing is comparable to other live streaming platforms like Twitch Bits or YouTube Super Chat.',
  },
  {
    question: 'Can I transfer coins to another account?',
    answer: 'No, TikTok coins cannot be transferred between accounts. Coins can only be spent on gifts for creators during LIVE streams or video gifts. Unused coins remain in your account indefinitely.',
  },
];

export default function CoinsCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Coins Calculator"
        description="Calculate TikTok coin values, convert coins to USD and diamonds, and understand gift pricing with our free calculator."
        url="https://calculatecreator.com/calculators/coins/"
        datePublished="2024-01-15"
        dateModified="2026-03-01"
        keywords={['tiktok coins calculator', 'coins to usd', 'tiktok coin price', 'coins to diamonds']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators/' },
          { name: 'Coins Calculator', url: 'https://calculatecreator.com/calculators/coins/' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators/' },
              { label: 'Coins Calculator', href: '/calculators/coins/' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-6">
              <Coins size={32} />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Coins Calculator 2026
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">
              Calculate TikTok coin values, convert coins to USD and diamonds, and understand exactly how much your gifts are worth to creators. Our coins calculator uses 2026 pricing data to show you the real value of TikTok's virtual currency system. Whether you are a viewer planning to support your favorite creators or a creator understanding your gift income, this tool provides instant and accurate conversions between coins, diamonds, and real money. TikTok coins are the currency viewers purchase to send virtual gifts during LIVE streams.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1"><Coins size={16} /> 2026 Coin Prices</span>
              <span className="flex items-center gap-1"><Gem size={16} /> Diamond Conversion</span>
              <span className="flex items-center gap-1"><DollarSign size={16} /> USD Values</span>
              <span className="flex items-center gap-1"><Gift size={16} /> Gift Calculator</span>
            </div>
            <p className="text-body-md text-neutral-600 mt-4 max-w-2xl mx-auto">
              Want to understand the full system? Read our <Link href="/guides/tiktok-coin-converter-complete-guide/" className="text-primary-600 hover:text-primary-700 underline">complete TikTok coin guide</Link> or learn about <Link href="/guides/complete-tiktok-diamond-guide/" className="text-primary-600 hover:text-primary-700 underline">how diamonds work for creators</Link>.
            </p>
          </div>

          {/* Author Byline */}
          <div className="max-w-5xl mx-auto mb-8">
            <PageAuthorByline pageSlug="coins" />
          </div>

          {/* Industry Insights Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Coins size={20} className="text-primary-600" /> 2026 Coin Pricing
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• 1 coin = ~$0.0152 USD</li>
                  <li>• 65 coins = $0.99</li>
                  <li>• 660 coins = $9.99</li>
                  <li>• 6,607 coins = $99.99</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Gem size={20} className="text-warning-600" /> Coin to Diamond Ratio
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• 2 coins = 1 diamond</li>
                  <li>• 50% goes to TikTok</li>
                  <li>• 50% goes to creator</li>
                  <li>• 1 diamond = $0.005</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Gift size={20} className="text-secondary-600" /> Popular Gift Costs
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Rose: 1 coin ($0.015)</li>
                  <li>• Finger Heart: 5 coins ($0.08)</li>
                  <li>• Drama Queen: 5,000 coins ($76)</li>
                  <li>• Universe: 34,999 coins ($530)</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Calculator Widget */}
          <div className="max-w-5xl mx-auto mb-12">
            <CoinsCalculatorWidget />
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <InputsExplained
              inputs={[
                { name: 'Coin Amount', description: 'Number of TikTok coins to convert', example: '1,000', required: true },
                { name: 'Purchase Bundle', description: 'Coin package purchased (affects price per coin)', example: '1,000 coins ($13.99)' },
                { name: 'Currency', description: 'Your local currency', example: 'USD' },
              ]}
              note="1 coin ≈ $0.0139. Creators receive 50% of gift value as diamonds. Larger bundles offer slightly better rates."
            />
          </div>

          {/* Educational Content Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <ShoppingCart size={24} className="text-primary-600" /> TikTok Coin Bundles
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Available coin packages and their USD values:
              </p>
              <div className="space-y-2">
                {[
                  { coins: '65', price: '$0.99', perCoin: '$0.0152' },
                  { coins: '330', price: '$4.99', perCoin: '$0.0151' },
                  { coins: '660', price: '$9.99', perCoin: '$0.0151' },
                  { coins: '1,321', price: '$19.99', perCoin: '$0.0151' },
                  { coins: '3,303', price: '$49.99', perCoin: '$0.0151' },
                  { coins: '6,607', price: '$99.99', perCoin: '$0.0151' },
                ].map((item) => (
                  <div key={item.coins} className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="text-body-sm font-semibold text-neutral-900">{item.coins} coins</span>
                    <div className="text-right">
                      <span className="text-body-sm font-semibold text-primary-600">{item.price}</span>
                      <span className="text-body-xs text-neutral-500 ml-2">({item.perCoin}/coin)</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Gift size={24} className="text-secondary-600" /> Gift Value Guide
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                What creators actually receive from popular gifts:
              </p>
              <div className="space-y-2">
                {[
                  { gift: 'Rose', coins: '1', viewer: '$0.015', creator: '$0.0025' },
                  { gift: 'TikTok Logo', coins: '1', viewer: '$0.015', creator: '$0.0025' },
                  { gift: 'Finger Heart', coins: '5', viewer: '$0.08', creator: '$0.013' },
                  { gift: 'Ice Cream Cone', coins: '30', viewer: '$0.46', creator: '$0.075' },
                  { gift: 'Perfume', coins: '199', viewer: '$3.02', creator: '$0.50' },
                  { gift: 'Drama Queen', coins: '5,000', viewer: '$76', creator: '$12.50' },
                  { gift: 'Universe', coins: '34,999', viewer: '$530', creator: '$87.50' },
                ].map((item) => (
                  <div key={item.gift} className="flex items-center justify-between p-2 bg-neutral-50 rounded">
                    <div>
                      <span className="text-body-sm font-semibold text-neutral-900">{item.gift}</span>
                      <span className="text-body-xs text-neutral-500 ml-2">({item.coins} coins)</span>
                    </div>
                    <div className="text-right text-body-xs">
                      <span className="text-neutral-600">Cost: {item.viewer}</span>
                      <span className="text-success-600 ml-2">→ Creator: {item.creator}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <BarChart3 size={24} className="text-info-600" /> How the Coin System Works
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Understanding TikTok's virtual currency flow:
              </p>
              <div className="space-y-4 text-body-sm text-neutral-700">
                <div className="p-3 bg-info-50 rounded-lg">
                  <h4 className="font-semibold text-info-800 mb-1">Step 1: Viewer Buys Coins</h4>
                  <p>Purchase coins through TikTok app (~$0.0152 per coin)</p>
                </div>
                <div className="p-3 bg-secondary-50 rounded-lg">
                  <h4 className="font-semibold text-secondary-800 mb-1">Step 2: Send Gift During LIVE</h4>
                  <p>Use coins to send virtual gifts to creators during streams</p>
                </div>
                <div className="p-3 bg-warning-50 rounded-lg">
                  <h4 className="font-semibold text-warning-800 mb-1">Step 3: Coins Convert to Diamonds</h4>
                  <p>2 coins = 1 diamond (TikTok takes 50%)</p>
                </div>
                <div className="p-3 bg-success-50 rounded-lg">
                  <h4 className="font-semibold text-success-800 mb-1">Step 4: Creator Withdraws</h4>
                  <p>Diamonds converted to cash ($0.005 per diamond, $50 minimum)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-warning-600" /> Coin Buying Tips
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Get the most value from your TikTok coin purchases:
              </p>
              <div className="space-y-2 text-body-sm text-neutral-700">
                {[
                  'Buy larger bundles for slightly better per-coin rates',
                  'Watch for promotional coin bonuses during special events',
                  'First-time buyers sometimes get bonus coins',
                  'Set spending limits in TikTok settings to control purchases',
                  'Remember: creators only receive 50% of coin value',
                  'Consider direct donations for supporting creators more efficiently',
                  'Check for regional pricing differences if traveling',
                  'Enable purchase verification to prevent accidental buys',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-neutral-50 rounded">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-warning-100 text-warning-600 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Methodology and FAQ */}
          <div className="max-w-4xl mx-auto">
            <ToolExplanationSection
              whatItDoes="This calculator converts TikTok coins to their real-money USD value and shows how many diamonds a creator receives from gift purchases. It helps both viewers understand the true cost of sending gifts and creators understand what they actually earn from coin-based gifts."
              howToUse={[
                'Enter the number of TikTok coins you want to convert, or select a coin bundle to see its value.',
                'Optionally choose your local currency for region-specific pricing.',
                'View the instant conversion showing USD cost to the viewer, diamonds received by the creator, and the creator payout amount.',
              ]}
              examples={[
                { scenario: 'Viewer checking gift cost', input: '1,000 coins', output: 'Viewer cost: ~$15.20, Creator receives: 500 diamonds ($2.50)' },
                { scenario: 'Creator calculating LIVE earnings', input: '5,000 coins received from gifts in a stream', output: 'Creator receives: 2,500 diamonds worth $12.50 (TikTok keeps $25.10)' },
              ]}
              limitations={[
                'Coin prices vary slightly by region and are set by Apple App Store and Google Play Store pricing tiers.',
                'TikTok may change coin bundle pricing or introduce promotional bonus coins at any time.',
                'The 50% platform fee is fixed and cannot be negotiated, so creators always receive half the coin value.',
                'Tax obligations on creator earnings vary by country and are not factored into the conversion.',
              ]}
              relatedContent={[
                { title: 'Diamond Converter', href: '/calculators/diamond-converter/' },
                { title: 'LIVE Gifts Calculator', href: '/calculators/live-gifts/' },
                { title: 'TikTok Money Calculator', href: '/calculators/tiktok-money/' },
                { title: 'Complete TikTok Coin Guide', href: '/guides/tiktok-coin-converter-complete-guide/' },
              ]}
            />

            <MethodologySection
              calculatorName="TikTok Coins Calculator"
              formula={`Coin to USD: Coins × $0.0152 = USD cost
Coins to Diamonds: Coins ÷ 2 = Diamonds (creator receives)
Diamonds to USD: Diamonds × $0.005 = Creator earnings

Example: Sending 1,000 coins of gifts
Viewer pays: 1,000 × $0.0152 = $15.20
Creator receives: 500 diamonds × $0.005 = $2.50
TikTok keeps: $15.20 - $2.50 = $12.70 (50%)`}
              assumptions={[
                { label: 'Coin Price', value: '~$0.0152 USD per coin (varies by bundle)' },
                { label: 'Diamond Ratio', value: '2 coins = 1 diamond (50% platform fee)' },
                { label: 'Diamond Value', value: '$0.005 USD per diamond for creators' },
                { label: 'Regional Variance', value: 'Prices may differ 5-15% by country' },
                { label: 'Bundle Discounts', value: 'Larger bundles offer slight savings' },
              ]}
              dataSources={[
                'TikTok in-app coin pricing (2026)',
                'Gift value database from TikTok LIVE',
                'Creator payout reports and documentation',
                'Regional pricing comparisons',
              ]}
              limitations="Coin prices may vary by region and are subject to change by TikTok. App store fees and taxes may affect final prices. Gift values are fixed, but coin bundle pricing occasionally changes."
              lastUpdated="January 2026"
            />

            <FAQSection pageName="TikTok Coins Calculator" faqs={faqData} />

            <RelatedCalculators
              currentCalculator="coins"
              calculators={[
                { name: 'Diamond Converter', slug: 'diamond-converter', description: 'Convert diamonds to real money', icon: 'Gem' },
                { name: 'LIVE Gifts Calculator', slug: 'live-gifts', description: 'Estimate total LIVE earnings', icon: 'Gift' },
                { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Calculate all income streams', icon: 'Banknote' },
                { name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Estimate view-based earnings', icon: 'DollarSign' },
              ]}
            />

            <RelatedGuides calculatorPath="/calculators/coins" />
          </div>

          {/* EEAT Section */}
          <div className="mt-12">
            <PageEEAT pageSlug="coins" variant="full" />
          </div>
        </div>
      </div>
    </>
  );
}
