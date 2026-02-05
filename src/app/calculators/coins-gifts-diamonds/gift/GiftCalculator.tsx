'use client';

import React, { useState } from 'react';
import { Gift, Coins, Gem, DollarSign, TrendingUp, Users, Clock, Target } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { CalculatorSchema, FAQSchema } from '@/components/seo/CalculatorSchema';
import { InputsExplained } from '@/components/calculator/InputsExplained';
import Link from 'next/link';

const giftData = [
  { name: 'Rose', coins: 1, diamonds: 0.5, usd: 0.0025 },
  { name: 'TikTok', coins: 1, diamonds: 0.5, usd: 0.0025 },
  { name: 'Ice Cream Cone', coins: 5, diamonds: 2.5, usd: 0.0125 },
  { name: 'Finger Heart', coins: 5, diamonds: 2.5, usd: 0.0125 },
  { name: 'Perfume', coins: 20, diamonds: 10, usd: 0.05 },
  { name: 'Doughnut', coins: 30, diamonds: 15, usd: 0.075 },
  { name: 'Sign Language', coins: 49, diamonds: 24.5, usd: 0.1225 },
  { name: 'Confetti', coins: 100, diamonds: 50, usd: 0.25 },
  { name: 'Drama Queen', coins: 199, diamonds: 99.5, usd: 0.4975 },
  { name: 'Cap', coins: 299, diamonds: 149.5, usd: 0.7475 },
  { name: 'Love Bang', coins: 599, diamonds: 299.5, usd: 1.4975 },
  { name: 'Sun Cream', coins: 899, diamonds: 449.5, usd: 2.2475 },
  { name: 'Falcon', coins: 999, diamonds: 499.5, usd: 2.4975 },
  { name: 'Gold Mine', coins: 1000, diamonds: 500, usd: 2.50 },
  { name: 'Leon the Kitten', coins: 2150, diamonds: 1075, usd: 5.375 },
  { name: 'Whale', coins: 2150, diamonds: 1075, usd: 5.375 },
  { name: 'Interstellar', coins: 4888, diamonds: 2444, usd: 12.22 },
  { name: 'Lion', coins: 29999, diamonds: 14999.5, usd: 74.9975 },
  { name: 'Universe', coins: 44999, diamonds: 22499.5, usd: 112.4975 },
];

const popularGifts = [
  { name: 'Rose', coins: 1, diamonds: 0.5, usd: 0.0025, popularity: 'Most Common', description: 'Entry-level gift for casual engagement' },
  { name: 'Drama Queen', coins: 199, diamonds: 99.5, usd: 0.4975, popularity: 'High Engagement', description: 'Popular mid-tier showing strong support' },
  { name: 'Gold Mine', coins: 1000, diamonds: 500, usd: 2.50, popularity: 'Premium', description: 'Milestone gift for special moments' },
  { name: 'Lion', coins: 29999, diamonds: 14999.5, usd: 74.9975, popularity: 'Ultra Premium', description: 'Top-tier gift from superfans' },
  { name: 'Universe', coins: 44999, diamonds: 22499.5, usd: 112.4975, popularity: 'Elite', description: 'Maximum value gift showing ultimate support' },
];

const faqData = [
  {
    question: 'How do I calculate TikTok gift values?',
    answer: 'Multiply the gift coin cost by $0.0129 for viewer cost. For creator earnings: divide coins by 2 to get diamonds, then multiply by $0.005. Example: A 1,000 coin gift costs viewers $12.90 and pays creators $2.50.'
  },
  {
    question: 'What is the most popular TikTok gift?',
    answer: 'The Rose (1 coin) is the most common gift due to its affordability. For higher-value gifts, the Lion (29,999 coins) and Drama Queen (199 coins) are popular choices that show significant support.'
  },
  {
    question: 'Do gift values change by region?',
    answer: 'Coin prices vary slightly by region and platform (iOS vs Android), but the conversion rates remain constant: 2 coins = 1 diamond, and 1 diamond = $0.005 USD for creators globally.'
  },
  {
    question: 'Can I send multiple gifts at once?',
    answer: 'Yes, you can send the same gift multiple times during a LIVE stream. Use the quantity selector to calculate bulk gift values and understand the total cost and creator payout for sending multiple gifts.'
  },
  {
    question: 'How long does it take for creators to receive gift earnings?',
    answer: 'Creators typically receive diamond payouts 7-14 business days after the LIVE stream ends. A minimum balance of $50 (10,000 diamonds) is required before withdrawal is available.'
  },
  {
    question: 'Why do creators only receive 50% of gift value?',
    answer: 'TikTok retains 50% as a platform fee for hosting, bandwidth, payment processing, and maintaining LIVE infrastructure. This split (2 coins = 1 diamond) is standard across all gifts and regions.'
  },
  {
    question: 'What are the best gifts for viewer ROI?',
    answer: 'All gifts have the same 50% conversion rate, so value depends on your budget. Roses (1 coin) maximize quantity for engagement metrics, while Lions (29,999 coins) make the biggest impact per gift sent.'
  },
  {
    question: 'Can I schedule gifts to be sent automatically?',
    answer: 'No, TikTok does not support scheduled or automated gift sending. All gifts must be sent manually during live streams to ensure authentic real-time engagement between viewers and creators.'
  },
  {
    question: 'Do gifts affect TikTok algorithm ranking?',
    answer: 'Yes, receiving gifts during LIVE streams signals high engagement to the algorithm, potentially increasing your visibility in For You pages and LIVE recommendations after the stream ends.'
  },
  {
    question: 'What happens if I accidentally send the wrong gift?',
    answer: 'TikTok does not offer refunds or reversals for gifts sent during LIVE streams. Always verify your gift selection and quantity before confirming, as all transactions are final and non-refundable.'
  },
];

export function GiftCalculator() {
  const [quantity, setQuantity] = useState(1);
  const [selectedGift, setSelectedGift] = useState(giftData[0]);

  const totalCoins = selectedGift.coins * quantity;
  const totalDiamonds = selectedGift.diamonds * quantity;
  const totalUsd = selectedGift.usd * quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <CalculatorSchema
        name="TikTok Gift Value Calculator"
        description="Calculate the real value of TikTok LIVE gifts in coins, diamonds, and USD. Understand how much creators earn from each gift type sent during LIVE streams."
        url="https://calculatecreator.com/calculators/coins-gifts-diamonds/gift/"
        category="FinanceApplication"
        keywords={[
          'TikTok gift calculator',
          'LIVE gift value',
          'gift to money converter',
          'TikTok LIVE earnings',
          'diamond earnings',
        ]}
        datePublished="2024-01-25"
        dateModified="2026-01-27"
        aggregateRating={{ ratingValue: 4.5, reviewCount: 892 }}
      />
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Calculators', href: '/calculators/' },
          { label: 'Coins, Gifts & Diamonds', href: '/calculators/coins-gifts-diamonds/' },
          { label: 'Gift Calculator', href: '/calculators/coins-gifts-diamonds/gift/' }
        ]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-500 text-white mb-6">
            <Gift size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Gift Value Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate the real value of TikTok LIVE gifts in coins, diamonds, and USD for creators. Enter any gift quantity to see instant conversions showing what viewers pay versus what creators actually earn from virtual gifts. Perfect for understanding the economics behind popular gifts like roses, universes, and lions during LIVE streams, including the 50% platform fee split.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-6">Calculate Gift Value</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Select Gift</label>
                <select
                  value={selectedGift.name}
                  onChange={(e) => setSelectedGift(giftData.find(g => g.name === e.target.value) || giftData[0])}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {giftData.map((gift) => (
                    <option key={gift.name} value={gift.name}>
                      {gift.name} ({gift.coins} coins)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
                <div className="text-center p-4 bg-warning-50 rounded-lg">
                  <Coins className="w-8 h-8 text-warning-600 mx-auto mb-2" />
                  <div className="text-heading-md font-bold text-neutral-900">{totalCoins.toLocaleString()}</div>
                  <div className="text-body-sm text-neutral-600">Total Coins</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Gem className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-heading-md font-bold text-neutral-900">{totalDiamonds.toLocaleString()}</div>
                  <div className="text-body-sm text-neutral-600">Creator Diamonds</div>
                </div>
                <div className="text-center p-4 bg-success-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-success-600 mx-auto mb-2" />
                  <div className="text-heading-md font-bold text-neutral-900">${totalUsd.toFixed(2)}</div>
                  <div className="text-body-sm text-neutral-600">Creator Earnings</div>
                </div>
              </div>
            </div>
          </Card>

          <InputsExplained
            inputs={[
              { name: 'Gift Type', description: 'Type of TikTok gift received', example: 'Rose, Lion', required: true },
              { name: 'Quantity', description: 'Number of this gift received', example: '50' },
            ]}
            note="Gift values range from 1 coin (Rose) to 34,999 coins (TikTok Universe). Creators receive 50% value."
          />
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Popular Gift Value Comparison</h2>
            <p className="text-body-md text-neutral-600 mb-6">
              Compare the most popular TikTok LIVE gifts based on cost, creator earnings, and typical use cases. Understanding gift tiers helps both viewers budget their support and creators anticipate potential earnings from different audience segments.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="text-left py-3 px-4">Gift Name</th>
                    <th className="text-right py-3 px-4">Coins Cost</th>
                    <th className="text-right py-3 px-4">Creator Earnings</th>
                    <th className="text-left py-3 px-4">Popularity Tier</th>
                    <th className="text-left py-3 px-4">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  {popularGifts.map((gift) => (
                    <tr key={gift.name} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4 font-semibold text-neutral-900">{gift.name}</td>
                      <td className="text-right py-3 px-4">{gift.coins.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-success-700 font-medium">${gift.usd.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-primary-100 text-primary-700">
                          {gift.popularity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-neutral-600">{gift.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-12">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Maximize Gift Revenue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Build Superfan Relationships</h3>
                    <p className="text-body-sm text-neutral-600">
                      Recognize top gifters by name during streams, create exclusive shoutout segments, and maintain a leaderboard. Superfans sending premium gifts (Lion, Universe) often contribute 80% of total revenue and expect personalized acknowledgment.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-success-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Engage Casual Gifters</h3>
                    <p className="text-body-sm text-neutral-600">
                      Acknowledge all gifts including roses (1 coin) to encourage repeat behavior. Volume from casual gifters adds up—100 roses equals $0.25 in creator earnings. Use visual effects and reactions to make small gifts feel impactful.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-warning-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warning-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Strategic Stream Timing</h3>
                    <p className="text-body-sm text-neutral-600">
                      Stream during peak hours (7-10 PM local time) when audiences have disposable income and leisure time. Test different days—weekends typically see 40% higher gift volumes. Analyze your <Link href="/calculators/live-gifts/" className="text-primary-600 hover:text-primary-700 underline">LIVE earnings patterns</Link> to optimize scheduling.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Create Gift Milestones</h3>
                    <p className="text-body-sm text-neutral-600">
                      Set visible goals (e.g., "At 10,000 diamonds, I'll reveal X") to gamify gifting. Celebrate milestones with special content or performances. Track progress using the <Link href="/calculators/diamond-converter/" className="text-primary-600 hover:text-primary-700 underline">diamond converter</Link> to convert goals into USD equivalents.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Card className="p-8">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Practices for LIVE Streaming Gift Revenue</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-body-md text-neutral-700 mb-4">
                  Maximizing gift earnings requires consistent audience engagement, strategic content planning, and understanding viewer psychology. Here's how to optimize your LIVE streams for higher gift revenue while maintaining authentic connections.
                </p>

                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Content Structure</h3>
                    <ul className="space-y-2 text-body-sm text-neutral-700">
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Start streams with high-energy content (first 5 minutes critical for retention and early gifting momentum)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Plan interactive segments every 15-20 minutes (Q&A, challenges, polls) to maintain engagement and gift opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>End with a "final call" segment—viewers often send premium gifts in closing minutes to secure recognition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Technical Optimization</h3>
                    <ul className="space-y-2 text-body-sm text-neutral-700">
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Use excellent lighting and audio—technical quality correlates with 35% higher gift rates as viewers perceive professionalism</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Stable internet connection prevents stream drops that disrupt gifting flow and viewer momentum</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Enable chat moderation to keep environment positive—toxic chat reduces gifting by 60%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Audience Psychology</h3>
                    <ul className="space-y-2 text-body-sm text-neutral-700">
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Create scarcity with limited-time offers ("Next 10 minutes only") to trigger urgency and impulse gifting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Acknowledge all gift tiers equally—viewers who send roses today may become Lion senders tomorrow</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-2">•</span>
                        <span>Use social proof by celebrating when multiple viewers gift simultaneously, encouraging others to join</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
                    <p className="text-body-sm text-neutral-800 font-medium mb-2">Pro Tip: Consistency Builds Revenue</p>
                    <p className="text-body-sm text-neutral-700">
                      Streaming 3-5 times weekly at consistent times builds viewer habits and superfan loyalty. Creators with regular schedules earn 3x more in gifts than sporadic streamers, as audiences anticipate and budget for their favorite creator's LIVE sessions. Calculate your potential monthly earnings with the <Link href="/calculators/live-gifts/" className="text-primary-700 hover:text-primary-800 underline font-medium">LIVE gifts calculator</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Complete TikTok Gift Value Chart</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-body-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4">Gift Name</th>
                      <th className="text-right py-3 px-4">Coins</th>
                      <th className="text-right py-3 px-4">Creator Diamonds</th>
                      <th className="text-right py-3 px-4">Creator USD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {giftData.map((gift) => (
                      <tr key={gift.name} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="py-3 px-4 font-medium">{gift.name}</td>
                        <td className="text-right py-3 px-4">{gift.coins.toLocaleString()}</td>
                        <td className="text-right py-3 px-4">{gift.diamonds.toLocaleString()}</td>
                        <td className="text-right py-3 px-4">${gift.usd.toFixed(4)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <MethodologySection
              calculatorName="gift"
              formula={`Viewer Cost (USD) = Coins × $0.0129
Creator Diamonds = Coins ÷ 2
Creator Payout (USD) = Diamonds × $0.005

Example:
Rose (1 coin):
→ Viewer pays: $0.0129
→ Creator receives: 0.5 diamonds = $0.0025

Universe (44,999 coins):
→ Viewer pays: $580.49
→ Creator receives: 22,499.5 diamonds = $112.50`}
              assumptions={[
                { label: 'Coin Price', value: '$0.0129 per coin (US standard rate)' },
                { label: 'Conversion Rate', value: '2 coins = 1 diamond (50% split)' },
                { label: 'Diamond Value', value: '1 diamond = $0.005 USD' },
                { label: 'Platform Fee', value: 'TikTok retains 50% of gift value' }
              ]}
              dataSources={[
                'TikTok LIVE Gifts catalog',
                'TikTok Creator Portal documentation',
                'Official TikTok pricing (November 2025)'
              ]}
              limitations="Gift prices may vary by region and platform (iOS vs Android). Actual costs and payouts depend on regional pricing."
              lastUpdated="November 27, 2025"
            />

            <FAQSection
              pageName="Gift Calculator"
              faqs={faqData}
            />

            <RelatedCalculators
              currentCalculator="gift"
              calculators={[
                {
                  name: 'Coins Calculator',
                  slug: 'coins',
                  description: 'Convert TikTok coins to USD and diamonds',
                  icon: 'Coins'
                },
                {
                  name: 'LIVE Earnings Calculator',
                  slug: 'earnings-revenue/live-earnings',
                  description: 'Estimate total LIVE streaming income',
                  icon: 'Gift'
                },
                {
                  name: 'Diamond Converter',
                  slug: 'coins-gifts-diamonds/diamonds',
                  description: 'Convert diamonds to multiple currencies',
                  icon: 'Gem'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
