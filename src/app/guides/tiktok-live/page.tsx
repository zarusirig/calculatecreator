import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Heart, Music, Crown, PawPrint, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok LIVE Monetization: Gifts, Subscriptions, and Earnings Guide (2025)',
  description: 'Complete guide to TikTok LIVE earnings: how gifts work, diamonds to USD conversion, LIVE subscriptions, requirements, and strategies to maximize income.',
  keywords: ['tiktok live', 'tiktok gifts', 'tiktok live earnings', 'tiktok diamonds', 'live streaming money'],
};

export default function TikTokLIVEGuidePage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <nav className="flex items-center space-x-2 text-body-sm mb-6">
          <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
          <span className="text-neutral-400">→</span>
          <Link href="/guides" className="text-neutral-600 hover:text-primary-600">Guides</Link>
          <span className="text-neutral-400">→</span>
          <span className="text-neutral-900 font-medium">TikTok LIVE Monetization</span>
        </nav>

        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
          TikTok LIVE Monetization: Complete 2025 Guide
        </h1>
        <p className="text-body-lg text-neutral-600 mb-4">
          Everything you need to know about earning money from TikTok LIVE: gifts, diamonds, subscriptions, requirements, and proven strategies to maximize your income.
        </p>
        <div className="flex items-center space-x-4 text-body-sm text-neutral-600 mb-12">
          <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> 20 min read</span>
          <span>•</span>
          <span>Last updated: November 13, 2025</span>
        </div>

        {/* Quick Summary */}
        <Card className="mb-12 bg-secondary-50 border border-secondary-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok LIVE at a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Requirements</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• 1,000+ followers</li>
                <li>• 18+ years old</li>
                <li>• Account in good standing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Earnings</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• $0.005 per diamond</li>
                <li>• 50% of gift value</li>
                <li>• $50 minimum payout</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How LIVE Gifts Work */}
        <section id="how-gifts-work" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">How TikTok LIVE Gifts Work</h2>

          <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
            TikTok LIVE allows viewers to send virtual gifts during your live streams. These gifts have real monetary value, and creators receive a percentage of the gift's value in the form of "diamonds" which can be converted to USD.
          </p>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">The Gift Economy Flow</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-info-DEFAULT text-white flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Viewer Purchases Coins</p>
                  <p className="text-body-sm text-neutral-700">$0.0105 per coin (e.g., 100 coins = $1.05)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-info-DEFAULT text-white flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Viewer Sends Gift</p>
                  <p className="text-body-sm text-neutral-700">Gifts range from 5 coins (Rose) to 5,000 coins (Universe)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-info-DEFAULT text-white flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Creator Receives Diamonds</p>
                  <p className="text-body-sm text-neutral-700">2 coins = 1 diamond (50% of gift value)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-info-DEFAULT text-white flex items-center justify-center font-bold">4</div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">Creator Withdraws USD</p>
                  <p className="text-body-sm text-neutral-700">1 diamond = $0.005 (once you reach $50 minimum)</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Popular Gifts & Values</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold">Gift Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Coins</th>
                    <th className="text-left py-3 px-4 font-semibold">Diamonds</th>
                    <th className="text-left py-3 px-4 font-semibold">USD to Creator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 flex items-center gap-2"><Heart className="w-4 h-4 text-pink-500" /> Rose</td>
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">0.5</td>
                    <td className="py-3 px-4">$0.0025</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 flex items-center gap-2"><Music className="w-4 h-4 text-blue-500" /> TikTok</td>
                    <td className="py-3 px-4">5</td>
                    <td className="py-3 px-4">2.5</td>
                    <td className="py-3 px-4">$0.0125</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 flex items-center gap-2"><Heart className="w-4 h-4 text-red-500" /> Finger Heart</td>
                    <td className="py-3 px-4">20</td>
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">$0.05</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 flex items-center gap-2"><Crown className="w-4 h-4 text-yellow-500" /> Drama Queen</td>
                    <td className="py-3 px-4">199</td>
                    <td className="py-3 px-4">99.5</td>
                    <td className="py-3 px-4">$0.50</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 flex items-center gap-2"><PawPrint className="w-4 h-4 text-orange-500" /> Lion</td>
                    <td className="py-3 px-4">500</td>
                    <td className="py-3 px-4">250</td>
                    <td className="py-3 px-4">$1.25</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-500" /> Universe</td>
                    <td className="py-3 px-4">34,999</td>
                    <td className="py-3 px-4">17,499.5</td>
                    <td className="py-3 px-4">$87.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <div className="p-6 bg-secondary-50 rounded-xl border border-secondary-200">
            <p className="text-body-md text-neutral-800 mb-4">
              <strong>Calculate your LIVE earnings potential:</strong>
            </p>
            <Link href="/calculators/live-gifts" className="btn btn-secondary btn-md">
              Use LIVE Gifts Calculator →
            </Link>
          </div>
        </section>

        {/* Earnings Potential */}
        <section id="earnings" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">How Much Can You Earn from LIVE?</h2>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Earnings by Viewer Count</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold">Avg Viewers</th>
                    <th className="text-left py-3 px-4 font-semibold">Per Stream</th>
                    <th className="text-left py-3 px-4 font-semibold">Monthly (8 streams)</th>
                    <th className="text-left py-3 px-4 font-semibold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">20-50</td>
                    <td className="py-3 px-4">$2-$10</td>
                    <td className="py-3 px-4">$16-$80</td>
                    <td className="py-3 px-4">$192-$960</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">50-100</td>
                    <td className="py-3 px-4">$10-$30</td>
                    <td className="py-3 px-4">$80-$240</td>
                    <td className="py-3 px-4">$960-$2,880</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">100-500</td>
                    <td className="py-3 px-4">$30-$150</td>
                    <td className="py-3 px-4">$240-$1,200</td>
                    <td className="py-3 px-4">$2,880-$14,400</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">500-1,000</td>
                    <td className="py-3 px-4">$150-$500</td>
                    <td className="py-3 px-4">$1,200-$4,000</td>
                    <td className="py-3 px-4">$14,400-$48,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">1,000+</td>
                    <td className="py-3 px-4">$500-$2,000+</td>
                    <td className="py-3 px-4">$4,000-$16,000+</td>
                    <td className="py-3 px-4">$48,000-$192,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-sm text-neutral-600 mt-4">
              <strong>Note:</strong> These are estimates. Actual earnings depend on audience generosity, stream duration, engagement level, and gifting culture of your community.
            </p>
          </Card>

          <Card>
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Real Creator Examples</h3>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="font-semibold text-neutral-900">Gaming Creator - 150K followers</p>
                <p className="text-body-sm text-neutral-700 mb-2">Streams 3-4 times/week for 2 hours, averages 300 viewers</p>
                <p className="text-body-sm text-neutral-800"><strong>Monthly LIVE earnings:</strong> $1,200-$1,800</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="font-semibold text-neutral-900">Lifestyle Creator - 75K followers</p>
                <p className="text-body-sm text-neutral-700 mb-2">Streams 2x/week for 1 hour, averages 120 viewers</p>
                <p className="text-body-sm text-neutral-800"><strong>Monthly LIVE earnings:</strong> $400-$600</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="font-semibold text-neutral-900">Comedy Creator - 500K followers</p>
                <p className="text-body-sm text-neutral-700 mb-2">Streams 5x/week for 1.5 hours, averages 800 viewers</p>
                <p className="text-body-sm text-neutral-800"><strong>Monthly LIVE earnings:</strong> $3,000-$5,000</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Strategies to Maximize */}
        <section id="strategies" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">10 Strategies to Maximize LIVE Earnings</h2>

          <div className="space-y-4">
            {liveStrategies.map((strategy, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">{strategy.title}</h3>
                    <p className="text-body-sm text-neutral-700">{strategy.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <p className="text-body-md text-neutral-600 italic text-center py-8">
          Full guide continues with TikTok LIVE subscriptions, badges, requirements, troubleshooting, and more...
        </p>

        {/* FAQ */}
        <FAQSection
          pageName="TikTok LIVE Monetization"
          faqs={[
            {
              question: 'How much is 1 diamond worth on TikTok?',
              answer: '1 diamond = $0.005 USD. You need 200 diamonds to earn $1. Diamonds are what creators receive when viewers send gifts (2 coins = 1 diamond). You need 10,000 diamonds ($50) minimum to withdraw.',
            },
            {
              question: 'How many followers do you need to go LIVE on TikTok?',
              answer: 'You need 1,000 followers to unlock TikTok LIVE. You must also be 18+ years old and have an account in good standing. Once eligible, the LIVE button appears in your creator tools.',
            },
            {
              question: 'What percentage does TikTok take from gifts?',
              answer: 'TikTok takes approximately 50% of gift value. When a viewer sends a 100-coin gift ($1.05), you receive 50 diamonds ($0.25). This 50/50 split is standard across most live streaming platforms.',
            },
            {
              question: 'When can you withdraw LIVE earnings?',
              answer: 'You can withdraw once you reach $50 minimum (10,000 diamonds). Withdrawals are processed within 7-14 business days to your linked PayPal or bank account. There\'s no maximum limit—withdraw as often as you hit the minimum.',
            },
            {
              question: 'Can you make a living from TikTok LIVE?',
              answer: 'Yes, but it requires significant dedication. To earn $3,000/month from LIVE, you need consistent 200-300 concurrent viewers across 15-20 streams monthly. Top LIVE creators earn $10,000-$50,000+/month, but they stream 20-30 hours/week with highly engaged audiences.',
            },
          ]}
        />
      </div>
    </div>
  );
}

const liveStrategies = [
  { title: 'Stream Consistently', description: 'Same days/times weekly. Viewers develop habits—"Every Tuesday at 7pm" trains your audience to attend.' },
  { title: 'Acknowledge Every Gift', description: 'Call out givers by name, thank them specifically. Recognition encourages repeat gifting and creates FOMO for others.' },
  { title: 'Set Gifting Goals', description: '"When we hit 1,000 diamonds, I\'ll [do something special]." Visual goals motivate collective participation.' },
  { title: 'Battle Other Creators', description: 'TikTok LIVE Battles split screen with another creator. Competitive gifting between fan bases drives revenue.' },
  { title: 'Engage Continuously', description: 'Read comments, ask questions, run polls. Idle silence = viewers leave. Active engagement = longer watch time = more gifts.' },
  { title: 'Tease Exclusive Content', description: '"Hit 500 roses and I\'ll share [exclusive tip/story/performance]." Creates urgency and collective effort.' },
  { title: 'Start With Momentum', description: 'First 60 seconds are critical. Jump in enthusiastically, acknowledge viewers immediately. Boring starts = viewer drop-off.' },
  { title: 'Use Multi-Guest', description: 'Invite viewers to join your LIVE. Interactive participation increases engagement and gifting from featured guests.' },
  { title: 'Cross-Promote', description: 'Post a teaser video 1-2 hours before going LIVE. "Going LIVE at 8pm—bring questions!" drives attendance.' },
  { title: 'Thank Top Gifters Publicly', description: 'Weekly shoutouts for top contributors. Recognition incentivizes ongoing support and creates VIP culture.' },
];
