import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Calendar, Gem, Gift, DollarSign, Coins } from 'lucide-react';
import { ReferenceSchema } from '@/components/seo/ReferenceSchema';

export const metadata: Metadata = {
  title: 'TikTok LIVE Gifts Value Chart 2026: Complete Price & Earnings Guide',
  description: 'Complete chart of all TikTok LIVE gift values, coin costs, creator earnings (50% split), and diamonds to USD conversion rates.',
  keywords: ['tiktok live gifts value', 'gift prices', 'diamonds to usd', 'live gifts chart', 'creator earnings gifts'],
  alternates: {
    canonical: 'https://calculatecreator.com/reference/live-gifts-value-chart/',
  },
};

export default function LiveGiftsValueChartPage() {
  const gifts = [
    { name: 'Rose', coins: 1, usd: '$0.01', creatorEarns: '$0.005', popularity: 'Very Common' },
    { name: 'TikTok', coins: 1, usd: '$0.01', creatorEarns: '$0.005', popularity: 'Very Common' },
    { name: 'Heart Me', coins: 10, usd: '$0.13', creatorEarns: '$0.065', popularity: 'Common' },
    { name: 'Rainbow Puke', coins: 10, usd: '$0.13', creatorEarns: '$0.065', popularity: 'Common' },
    { name: 'Finger Heart', coins: 25, usd: '$0.32', creatorEarns: '$0.16', popularity: 'Common' },
    { name: 'Team Bracelet', coins: 69, usd: '$0.88', creatorEarns: '$0.44', popularity: 'Common' },
    { name: 'Hands Up', coins: 99, usd: '$1.27', creatorEarns: '$0.64', popularity: 'Common' },
    { name: 'GG', coins: 199, usd: '$2.55', creatorEarns: '$1.28', popularity: 'Medium' },
    { name: 'Paper Crane', coins: 99, usd: '$1.27', creatorEarns: '$0.64', popularity: 'Medium' },
    { name: 'Star', coins: 100, usd: '$1.28', creatorEarns: '$0.64', popularity: 'Common' },
    { name: 'Love Bang', coins: 300, usd: '$3.85', creatorEarns: '$1.93', popularity: 'Medium' },
    { name: 'Birthday Cake', coins: 500, usd: '$6.41', creatorEarns: '$3.21', popularity: 'Medium' },
    { name: 'Swan', coins: 699, usd: '$8.96', creatorEarns: '$4.48', popularity: 'Medium' },
    { name: 'Breakthrough Star', coins: 999, usd: '$12.81', creatorEarns: '$6.41', popularity: 'Rare' },
    { name: 'Planet', coins: 1000, usd: '$12.82', creatorEarns: '$6.41', popularity: 'Rare' },
    { name: 'Adam\'s Dream', coins: 1699, usd: '$21.78', creatorEarns: '$10.89', popularity: 'Rare' },
    { name: 'Big Love Energy', coins: 2000, usd: '$25.64', creatorEarns: '$12.82', popularity: 'Rare' },
    { name: 'Drama Queen', coins: 4188, usd: '$53.68', creatorEarns: '$26.84', popularity: 'Very Rare' },
    { name: 'Leon the Kitten', coins: 29999, usd: '$384.60', creatorEarns: '$192.30', popularity: 'Ultra Rare' },
    { name: 'Universe', coins: 34999, usd: '$448.71', creatorEarns: '$224.36', popularity: 'Ultra Rare' },
    { name: 'Lion', coins: 39999, usd: '$512.82', creatorEarns: '$256.41', popularity: 'Ultra Rare' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <ReferenceSchema
        title="TikTok LIVE Gifts Value Chart 2026: Complete Price & Earnings Guide"
        description="Complete chart of all TikTok LIVE gift values, coin costs, creator earnings (50% split), and diamonds to USD conversion rates."
        url="https://calculatecreator.com/reference/live-gifts-value-chart/"
        datePublished="2024-01-20"
        dateModified="2026-01-15"
        hasTable={true}
      />
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides/">Guides</Link><span>/</span>
            <span className="text-neutral-900">LIVE Gifts Value Chart</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-6xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok LIVE Gifts Value Chart 2026</h1>
          <p className="text-heading-md text-white/90 mb-6">Complete reference for all gift values, prices, and creator earnings</p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated: November 2025</span>
            <span className="flex items-center gap-1"><Gem className="w-4 h-4" /> All Gift Values</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How TikTok LIVE Gifts Work</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 bg-blue-50 rounded-lg text-center">
              <div className="flex justify-center mb-2"><Coins className="w-10 h-10 text-blue-600" /></div>
              <h3 className="font-semibold text-neutral-900 mb-2">Viewers Buy Coins</h3>
              <p className="text-body-sm text-neutral-700">Purchase TikTok coins with real money (~$1.29 per 100 coins)</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-lg text-center">
              <div className="flex justify-center mb-2"><Gift className="w-10 h-10 text-purple-600" /></div>
              <h3 className="font-semibold text-neutral-900 mb-2">Send Gifts During LIVE</h3>
              <p className="text-body-sm text-neutral-700">Viewers use coins to send virtual gifts to creators</p>
            </div>
            <div className="p-5 bg-green-50 rounded-lg text-center">
              <div className="flex justify-center mb-2"><DollarSign className="w-10 h-10 text-green-600" /></div>
              <h3 className="font-semibold text-neutral-900 mb-2">Creator Earns 50%</h3>
              <p className="text-body-sm text-neutral-700">Creators receive diamonds (50% of coin value) convertible to USD</p>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Important:</strong> TikTok takes 50% commission on all gifts. The values shown in "Creator Earns" column reflect the 50% split after TikTok's commission.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Complete Gift Value Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Gift Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Coin Cost</th>
                  <th className="text-left py-3 px-4 font-semibold">USD Value</th>
                  <th className="text-left py-3 px-4 font-semibold">Creator Earns</th>
                  <th className="text-left py-3 px-4 font-semibold">Rarity</th>
                </tr>
              </thead>
              <tbody>
                {gifts.map((gift, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{gift.name}</td>
                    <td className="py-3 px-4 text-neutral-700">{gift.coins}</td>
                    <td className="py-3 px-4 text-neutral-700">{gift.usd}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-bold">{gift.creatorEarns}</td>
                    <td className="py-3 px-4 text-neutral-600 text-xs">{gift.popularity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Conversion Rates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Coins to USD (Viewer Cost)</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• 100 coins = $1.29</li>
                <li>• 500 coins = $6.49</li>
                <li>• 1,000 coins = $12.99</li>
                <li>• 5,000 coins = $64.99</li>
                <li>• 10,000 coins = $129.99</li>
              </ul>
            </div>
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Diamonds to USD (Creator Earnings)</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• 1 diamond = $0.005 USD</li>
                <li>• 100 diamonds = $0.50</li>
                <li>• 1,000 diamonds = $5.00</li>
                <li>• 10,000 diamonds = $50.00 (min withdrawal)</li>
                <li>• 100,000 diamonds = $500.00</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding Gift Tiers and Rarity</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok LIVE gifts are organized into tiers based on their coin cost, with rarity impacting both viewer psychology and creator earnings. Understanding these tiers helps you strategically encourage higher-value gifts during your streams.
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Common Gifts (1-100 Coins)</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                These are the bread-and-butter of LIVE streaming revenue. While individual gifts earn only $0.005-$0.64 each, high volume makes them lucrative. Successful streamers receive 50-200+ common gifts per hour-long stream.
              </p>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">When Viewers Send Common Gifts:</h4>
                <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                  <li>First-time viewers testing the gifting feature</li>
                  <li>Regular supporters showing appreciation for specific moments</li>
                  <li>During high-energy segments (dancing, singing, gaming wins)</li>
                  <li>When creators actively acknowledge and thank gifters by name</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Medium Gifts (100-1,000 Coins)</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                These gifts ($1.28-$12.82 creator earnings) signal stronger viewer engagement. They're typically sent by loyal fans or during special stream moments. Creators can expect 5-20 medium gifts per successful stream.
              </p>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">Triggers for Medium Gifts:</h4>
                <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                  <li>Milestone celebrations (follower counts, birthdays, anniversaries)</li>
                  <li>Exclusive content reveals or announcements</li>
                  <li>Emotional or particularly entertaining moments</li>
                  <li>Gratitude for consistent streaming schedule</li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Rare & Ultra Rare Gifts (1,000+ Coins)</h3>
              <p className="text-body-md text-neutral-700 mb-3">
                High-value gifts ($12.82-$256.41 creator earnings) are sent by superfans or wealthy viewers. Receiving even one ultra-rare gift can make an entire stream financially successful. These are rare but game-changing.
              </p>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-2">What Triggers Big Gifts:</h4>
                <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                  <li>Competing for top gifter recognition (leaderboard battles)</li>
                  <li>Special requests or shoutouts (some creators offer acknowledgment for high gifts)</li>
                  <li>Emotional connection to creator's story or cause</li>
                  <li>Wealthy viewers with disposable income showing support</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Maximizing Your LIVE Gift Revenue</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Strategic approaches to increase gift volume and value during your TikTok LIVE streams:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">1. Acknowledge Every Gift Immediately</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Say the gifter's username out loud and thank them specifically: "Thank you @SarahJones for the Rose! I really appreciate it!" This personal acknowledgment encourages more gifts and builds community.
              </p>
              <p className="text-body-xs text-neutral-600">
                Tip: For gift storms (many gifts at once), thank the top 3-5 gifters individually, then thank the group collectively.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">2. Create Gift-Triggering Moments</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Design your stream with high-energy peaks: countdowns, reveals, performances, Q&A sessions. Viewers are 3-5× more likely to send gifts during exciting moments than during casual chat.
              </p>
              <p className="text-body-xs text-neutral-600">
                Example: "In 2 minutes, I'm revealing my new song! Can't wait to share this with you all!"
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">3. Use On-Screen Gift Goals</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Display visible goals: "Help me reach 500 roses and I'll do an extra 30-minute stream!" Gamification increases participation and creates urgency. Reset goals frequently (every 20-30 minutes) to maintain momentum.
              </p>
              <p className="text-body-xs text-neutral-600">
                Advanced: Use TikTok's built-in goal feature or third-party overlays to show progress bars.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">4. Feature Top Gifters with Recognition</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Create friendly competition by acknowledging top gifters: "Sarah is leading today with 50 gifts! Anyone else want to join the top supporters?" This encourages leaderboard battles and repeat gifting.
              </p>
              <p className="text-body-xs text-neutral-600">
                Caution: Keep it light and fun, never pressure or guilt-trip viewers into gifting.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">5. Stream at Optimal Times for Your Audience</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Gift volume peaks when viewers have disposable time and money. Evenings (7-10 PM) and weekends see 40-60% higher gift rates than early mornings or weekday afternoons. Test different times and track earnings.
              </p>
              <p className="text-body-xs text-neutral-600">
                Use TikTok Analytics to identify when your followers are most active online.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">6. Build Genuine Relationships with Viewers</h3>
              <p className="text-body-sm text-neutral-700 mb-2">
                Regular viewers who feel personally connected to you send 5-10× more gifts than casual viewers. Remember names, ask about their day, create inside jokes. Loyalty drives consistent gifting.
              </p>
              <p className="text-body-xs text-neutral-600">
                Track regular viewers in a notebook and reference previous conversations to deepen relationships.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Withdraw and Cash Out Diamonds</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Gifts you receive convert to diamonds, which you can then withdraw as cash. Here's the complete withdrawal process:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Step-by-Step Withdrawal Process</h3>
              <ol className="text-body-sm text-blue-800 space-y-2 ml-4 list-decimal">
                <li><strong>Accumulate Minimum Balance:</strong> You need 10,000 diamonds ($50 USD) to withdraw. Smaller amounts remain in your balance.</li>
                <li><strong>Navigate to Creator Tools:</strong> Profile → Menu (three lines) → Creator Tools → LIVE Gifts</li>
                <li><strong>Click "Withdraw":</strong> Select amount (minimum 10,000 diamonds)</li>
                <li><strong>Choose Payment Method:</strong> PayPal (faster, 3-5 days) or Bank Transfer (7-10 days)</li>
                <li><strong>Confirm Details:</strong> Verify payment information is correct</li>
                <li><strong>Submit Withdrawal:</strong> Request is processed. You'll receive confirmation email within 24 hours</li>
                <li><strong>Wait for Processing:</strong> Funds arrive based on payment method chosen</li>
              </ol>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Important Withdrawal Notes</h3>
              <ul className="text-body-sm text-yellow-800 space-y-1 ml-4 list-disc">
                <li>Diamond-to-USD conversion is fixed: 1 diamond = $0.005 USD (200 diamonds = $1)</li>
                <li>TikTok already took their 50% commission when converting gifts to diamonds</li>
                <li>No additional fees from TikTok (PayPal may charge withdrawal fees from your PayPal account)</li>
                <li>Withdrawals are processed Monday-Friday (weekend requests process on Monday)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Why do I earn less than viewers spend?</h3>
              <p className="text-body-sm text-neutral-700">
                TikTok takes a 50% commission on all gifts. When a viewer sends a 100-coin gift (costing them $1.28), you receive 50 diamonds worth $0.64. The 50% split covers platform costs and TikTok's revenue share.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Can I request specific gifts during streams?</h3>
              <p className="text-body-sm text-neutral-700">
                TikTok's Community Guidelines discourage directly asking for gifts, but you can acknowledge and appreciate gifts you receive. Focus on creating value and entertainment rather than soliciting gifts.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Do diamonds expire?</h3>
              <p className="text-body-sm text-neutral-700">
                No. Diamonds remain in your account indefinitely until you withdraw them. However, it's recommended to withdraw regularly once you hit the $50 minimum to avoid potential account issues.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">What's the best gift to encourage viewers to send?</h3>
              <p className="text-body-sm text-neutral-700">
                Don't focus on specific gifts. Instead, create engaging content that naturally inspires gifting. Viewers typically start with low-cost gifts (Roses, TikTok) and upgrade to higher-value gifts as they become more invested in your content.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/live-gifts/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">LIVE Gifts Calculator</h4>
              <p className="text-body-sm text-neutral-700">Estimate your earnings</p>
            </Link>
            <Link href="/guides/tiktok-live-earnings-guide/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">LIVE Earnings Guide</h4>
              <p className="text-body-sm text-neutral-700">Maximize gift income</p>
            </Link>
            <Link href="/guides/how-to-qualify-for-tiktok-live/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Qualify for LIVE</h4>
              <p className="text-body-sm text-neutral-700">Reach 1K followers</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
