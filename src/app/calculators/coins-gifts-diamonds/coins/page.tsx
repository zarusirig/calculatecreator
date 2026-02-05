import type { Metadata } from 'next';
import { Coins as CoinsIcon, Gift, Gem, Banknote, DollarSign } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { CoinsCalculatorWidget } from '@/components/calculators/coins/CalculatorWidget';
import { InputsExplained } from '@/components/calculator/InputsExplained';

export const metadata: Metadata = {
  title: 'TikTok Coins to USD Calculator: Convert Coins to Money (2026)',
  description: 'Convert TikTok coins to real money. Calculate the USD value of TikTok coins, gifts, and diamonds with our free currency converter.',
  keywords: ['tiktok coins calculator', 'coins to usd', 'tiktok coin value', 'tiktok gift calculator', 'coins converter'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/coins-gifts-diamonds/coins/',
  },
};

const faqData = [
  {
    question: 'How much are TikTok coins worth in real money?',
    answer: 'TikTok coins cost approximately $0.0129 each in the US. Standard packages: 100 coins = $1.29, 1,000 coins = $12.99, 10,000 coins = $129.99. Prices vary slightly by region and platform (iOS vs Android).'
  },
  {
    question: 'How many coins equal 1 diamond for creators?',
    answer: '2 coins = 1 diamond. When a viewer sends a gift worth 1,000 coins, the creator receives 500 diamonds. This represents TikTok\'s 50% platform fee. Diamonds convert to cash at $0.005 per diamond.'
  },
  {
    question: 'What\'s the most expensive gift on TikTok?',
    answer: 'The Universe gift costs 44,999 coins (approximately $580). When sent, the creator receives 22,499.5 diamonds worth $112.50. Other high-value gifts include Planet (15,000 coins), Whale (2,150 coins), and Falcon (999 coins).'
  },
  {
    question: 'How much money do creators actually make from gifts?',
    answer: 'Creators receive 50% of the coin value. If viewers send $100 worth of gifts (7,751 coins), the creator gets 3,875.5 diamonds = $19.38. The minimum cashout is $50 (10,000 diamonds), requiring $100 in total gifts received.'
  },
  {
    question: 'Do coin prices differ on iOS vs Android?',
    answer: 'Yes, iOS prices are typically slightly higher due to Apple\'s 30% App Store fee. Many creators encourage viewers to use Android or web browsers for better coin value. The conversion rate to diamonds remains the same regardless of purchase platform.'
  },
];

export default function CoinsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-warning-50 py-8">
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'Coins Calculator', href: '/calculators/coins' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning-DEFAULT text-white mb-6">
            <CoinsIcon size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Coins Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Convert TikTok coins to USD and calculate diamond payouts for creators. This calculator helps viewers understand gift costs and creators estimate LIVE earnings from virtual gifts. Essential for anyone participating in TikTok's virtual economy, whether you're sending gifts or receiving them during streams. Calculate exact conversion rates between coins, diamonds, and dollars using current 2026 pricing. Understand TikTok's 50% platform fee and plan your LIVE streaming income or gifting budget accurately.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <CoinsCalculatorWidget />

          <InputsExplained
            inputs={[
              { name: 'Coin Amount', description: 'Number of TikTok coins', example: '5,000', required: true },
            ]}
            note="TikTok coins are purchased by viewers to send gifts. 1 Coin = approximately $0.0105."
          />
        </div>

        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Understanding TikTok's Virtual Currency System
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <CoinsIcon size={20} className="text-warning-600" /> Coins (Viewer Currency)
                </h3>
                <p>
                  Coins are purchased by viewers with real money and used to send gifts during LIVE streams. Viewers buy coin packages ranging from 100 to 10,000 coins.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <Gift size={20} className="text-secondary-600" /> Gifts (Sent to Creators)
                </h3>
                <p>
                  Gifts are virtual items (roses, lions, galaxies) that viewers send using coins. Each gift has a specific coin cost. Popular gifts range from 5 coins (Rose) to 44,999 coins (Universe).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <Gem size={20} className="text-primary-600" /> Diamonds (Creator Currency)
                </h3>
                <p>
                  When creators receive gifts, they're converted to diamonds. The conversion is 2 coins = 1 diamond (50% split). Creators cash out diamonds for real money: 1 diamond = $0.005 USD.
                </p>
              </div>
              <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
                <p className="text-body-sm">
                  <strong>Important:</strong> TikTok takes a 50% cut. If a viewer sends a 1,000 coin gift ($10.50), the creator receives 500 diamonds ($2.50).
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Common Gift Values
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Here are the most popular TikTok gifts and their values:
            </p>
            <div className="space-y-2">
              {[
                { gift: 'Rose', coins: 1, diamonds: 0.5, usd: '$0.0025' },
                { gift: 'TikTok', coins: 5, diamonds: 2.5, usd: '$0.0125' },
                { gift: 'Finger Heart', coins: 5, diamonds: 2.5, usd: '$0.0125' },
                { gift: 'Ice Cream', coins: 30, diamonds: 15, usd: '$0.075' },
                { gift: 'Panda', coins: 100, diamonds: 50, usd: '$0.25' },
                { gift: 'Drama Queen', coins: 500, diamonds: 250, usd: '$1.25' },
                { gift: 'Lion', coins: 400, diamonds: 200, usd: '$1.00' },
                { gift: 'Falcon', coins: 999, diamonds: 499.5, usd: '$2.50' },
                { gift: 'Planet', coins: 15000, diamonds: 7500, usd: '$37.50' },
                { gift: 'Universe', coins: 44999, diamonds: 22499.5, usd: '$112.50' },
              ].map((item) => (
                <div key={item.gift} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg text-body-sm">
                  <span className="font-semibold text-neutral-900">{item.gift}</span>
                  <div className="flex gap-4 text-neutral-700">
                    <span>{item.coins} coins</span>
                    <span className="flex items-center gap-1">→ {item.diamonds} <Gem size={14} className="text-primary-600" /></span>
                    <span className="font-semibold text-success-600">→ {item.usd}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Coin Package Pricing
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Viewers can purchase coins in various packages. Larger packages often have better value:
            </p>
            <div className="space-y-2">
              {[
                { coins: 100, price: '$1.29', perCoin: '$0.0129', note: 'Starter' },
                { coins: 500, price: '$6.49', perCoin: '$0.0130', note: '' },
                { coins: 1000, price: '$12.99', perCoin: '$0.0130', note: '' },
                { coins: 2000, price: '$25.99', perCoin: '$0.0130', note: '' },
                { coins: 5000, price: '$64.99', perCoin: '$0.0130', note: 'Popular' },
                { coins: 10000, price: '$129.99', perCoin: '$0.0130', note: 'Best Value' },
              ].map((pkg) => (
                <div key={pkg.coins} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg text-body-sm">
                  <div>
                    <span className="font-semibold text-neutral-900">{pkg.coins.toLocaleString()} Coins</span>
                    {pkg.note && <span className="ml-2 text-xs text-primary-600">• {pkg.note}</span>}
                  </div>
                  <div className="flex gap-4 text-neutral-700">
                    <span className="font-semibold">{pkg.price}</span>
                    <span className="text-neutral-500">({pkg.perCoin}/coin)</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-info-50 border border-info-200 rounded-lg">
              <p className="text-body-sm text-neutral-700">
                <strong>Note:</strong> Prices shown are for US region. Actual prices may vary by country and platform (iOS vs Android).
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              How TikTok's Currency System Works 2026
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                TikTok operates a dual-currency ecosystem that bridges viewers and creators. Viewers purchase coins with real money, which they use to send virtual gifts during LIVE streams. These gifts are then converted into diamonds for creators, who can cash them out for real currency. Understanding this flow is essential for both viewers who want to support creators and creators planning their monetization strategy.
              </p>
              <p>
                The system works in three distinct steps: First, viewers buy coin packages ranging from 100 coins ($1.29) to 10,000 coins ($129.99). Second, during LIVE streams, viewers send gifts valued in coins—from simple roses (1 coin) to elaborate animations like the Universe gift (44,999 coins). Third, creators receive 50% of the coin value as diamonds, which they can withdraw as cash once reaching the $50 minimum threshold (10,000 diamonds).
              </p>
              <p>
                This currency system creates a unique economy where TikTok acts as the intermediary. The platform takes approximately 50% of all gift transactions as a platform fee, covering operational costs, payment processing, content moderation, and platform development. While this might seem high, it's comparable to other platforms—YouTube takes 30% of Super Chat revenue, and Twitch takes 50% of subscription revenue.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Conversion Rates Explained: 2024-2025 Updates
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                As of 2026, TikTok coin pricing remains consistent at approximately $0.0129 per coin in the United States, though regional variations exist. The platform maintains a fixed 2:1 conversion ratio where 2 coins equal 1 diamond for creators. This means when a viewer sends a 1,000-coin gift, the creator receives 500 diamonds worth $2.50. TikTok's 50% platform cut is non-negotiable and applies universally to all creators regardless of follower count or performance.
              </p>
              <p>
                Regional pricing varies significantly due to currency exchange rates and local purchasing power. European users might pay €1.19 for 100 coins, UK users pay £1.09, while users in developing markets like India or Brazil see proportionally lower prices. However, the diamond payout rate for creators remains standardized at $0.005 per diamond globally, meaning geographic arbitrage doesn't benefit creators—only the viewer's purchase experience differs.
              </p>
              <p>
                iOS users typically pay 5-10% more for coins due to Apple's 30% App Store commission, which TikTok partially passes to consumers. Many savvy creators encourage their audiences to purchase coins via Android devices or TikTok's web browser to maximize the value of viewer spending. A viewer spending $100 on iOS might get 7,500 coins, while the same $100 on Android could yield 7,750 coins—a meaningful difference for frequent gifters.
              </p>
              <div className="p-4 bg-warning-50 border-l-4 border-warning-400 rounded">
                <p className="text-body-sm"><strong>Important 2026 Update:</strong> TikTok has introduced tiered coin packages with slight bulk discounts. While the base rate is $0.0129/coin, the 10,000 coin package effectively costs $0.0130/coin—minimal savings. Focus on content quality over package optimization.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Maximizing Your Earnings as a Creator
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                The most successful LIVE streamers on TikTok employ strategic tactics to maximize gift revenue. First and foremost: <strong>engagement is everything</strong>. Creators who acknowledge every gifter by name within 10 seconds see 40-60% higher total gift values than those who ignore or batch-acknowledge supporters. This immediate recognition creates a psychological reward loop that encourages repeat gifting throughout the stream.
              </p>
              <p>
                Set visible gift goals with specific rewards. Instead of generically asking for support, try "When we hit 5,000 diamonds, I'll sing your song requests!" or "10,000 diamonds unlocks the surprise announcement!" This gamification transforms gifting from a one-way transaction into a collaborative community goal. Top creators update progress visually and celebrate milestones enthusiastically, creating momentum that drives additional gifting from viewers who want to be part of reaching the goal.
              </p>
              <p>
                Timing dramatically impacts earnings. Stream during peak hours (7-10 PM in your audience's primary timezone) when viewers are relaxed, off work, and more willing to spend. Friday and Saturday evenings see 40-60% higher gifting rates compared to Tuesday mornings. Additionally, avoid streaming for longer than 90 minutes—viewer fatigue and decreased gifting rates after this point mean diminishing returns. Better to do two energetic 60-minute streams than one exhausting 3-hour marathon.
              </p>
              <p>
                Participate in gift battles with other creators. When two streamers compete for gifts, the competitive dynamic drives both audiences to gift more aggressively. Battles can increase per-stream earnings by 50-100%, especially when matched with a creator of similar size and niche. Coordinate battles during peak hours and promote them 24-48 hours in advance to maximize turnout from both communities.
              </p>
              <div className="space-y-3 mt-4">
                <div className="p-3 bg-success-50 rounded-lg border border-success-200">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">Pro Strategy #1: The First-Five Rule</p>
                  <p className="text-body-sm">The first 5 minutes of your stream set the tone. Thank early gifters enthusiastically and mention how close you are to your first goal. This creates FOMO (fear of missing out) for late joiners who see an active, engaged community.</p>
                </div>
                <div className="p-3 bg-success-50 rounded-lg border border-success-200">
                  <p className="text-body-sm font-semibold text-neutral-900 mb-1">Pro Strategy #2: Tiered Recognition</p>
                  <p className="text-body-sm">Create VIP status for top gifters—name shoutouts, special roles, or exclusive content access. When viewers see others being recognized, they're motivated to reach those same tiers.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Withdrawal Process: How to Cash Out Your Diamonds
            </h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <p>
                Cashing out TikTok diamonds is straightforward but has specific requirements. You must accumulate a minimum of $50 (10,000 diamonds) before withdrawal becomes available. Once you reach this threshold, navigate to Settings and Privacy → Creator Tools → LIVE Gifts → Withdraw. TikTok supports PayPal and direct bank deposit in most regions, with payment processing typically taking 7-14 business days.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <Banknote size={18} className="text-success-600" /> Minimum Threshold
                  </h4>
                  <p className="text-body-sm">$50 USD (10,000 diamonds). This requires approximately $100 in total gifts received from viewers, accounting for TikTok's 50% platform fee.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <DollarSign size={18} className="text-primary-600" /> Processing Time
                  </h4>
                  <p className="text-body-sm">7-30 business days depending on your region and payment method. PayPal is typically faster (7-14 days) than bank transfer (14-30 days).</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-2">Payment Methods</h4>
                  <p className="text-body-sm">PayPal (most regions), Direct bank deposit (select countries), or platform-specific options based on your location.</p>
                </div>
              </div>
              <div className="p-4 bg-info-50 border border-info-200 rounded-lg mt-4">
                <p className="text-body-sm"><strong>Tax Reminder:</strong> Diamond earnings are taxable income in most countries. US creators receive 1099 forms if earning $600+ annually. Consult a tax professional and set aside 25-30% for taxes to avoid surprises.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Best Practices for Success
            </h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-neutral-900 mb-1">Build Anticipation Between Streams</h3>
                <p className="text-body-sm">Post teaser videos 12-24 hours before going LIVE. Mention special guests, topics, or giveaways. Creators who pre-promote see 30-50% higher initial viewer counts and more early gifting.</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-neutral-900 mb-1">Never Beg, Always Invite</h3>
                <p className="text-body-sm">Saying "Please send gifts!" feels desperate. Instead: "Let's see if we can hit 500 roses by the 30-minute mark!" Framing gifts as collaborative goals feels authentic and community-driven rather than transactional.</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-neutral-900 mb-1">Engage Non-Gifters Too</h3>
                <p className="text-body-sm">Don't ignore viewers who aren't gifting. Answer their questions, respond to comments, and include them in the conversation. Higher viewer counts attract more potential gifters, and engaged non-gifters often become gifters in future streams.</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-neutral-900 mb-1">Maintain Consistent Streaming Schedule</h3>
                <p className="text-body-sm">Stream same days and times weekly (e.g., every Tuesday and Friday at 8 PM). Regularity trains your audience when to show up, leading to higher concurrent viewership and more total gifts.</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-neutral-900 mb-1">Track Your Gift-Per-Viewer Rate</h3>
                <p className="text-body-sm">Calculate: Total diamonds ÷ (peak viewers × 2). A rate of 0.5+ is good, 1.0+ is excellent. Use this metric to measure improvement over time and identify your most lucrative content types.</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-neutral-900 mb-1">Optimize for Platform, Not Just Income</h3>
                <p className="text-body-sm">Android gifters spend the same 1,000 coins but you effectively get slightly more value. Subtly encourage Android/web gifting: "If you're gifting, using the website gives more bang for your buck!"</p>
              </div>
            </div>
          </Card>

          <MethodologySection
            calculatorName="coins"
            formula={`USD Value = Coins × $0.0105

Diamonds (Creator Receives) = Coins × 0.5

Creator Payout = Diamonds × $0.005

Example:
1,000 coins sent as gift
→ Viewer pays: $10.50
→ Creator receives: 500 diamonds
→ Creator cashes out: $2.50 (50% of original value)`}
            assumptions={[
              { label: 'Coin Price', value: '$0.0129 per coin (standard US pricing for most packages)' },
              { label: 'Conversion Rate', value: '2 coins = 1 diamond (50% split between TikTok and creator)' },
              { label: 'Diamond Value', value: '1 diamond = $0.005 USD (fixed rate)' },
              { label: 'Platform Fee', value: 'TikTok takes 50% of all gift values' }
            ]}
            dataSources={[
              'TikTok official pricing (US region)',
              'TikTok Creator Portal gift catalog',
              'TikTok LIVE Gifts & Diamonds documentation'
            ]}
            limitations="Coin prices vary by region (iOS/Android differences). Some promotional packages offer bonus coins. Actual conversion rates are fixed by TikTok."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Coins Calculator"
            faqs={[
              {
                question: 'How much are TikTok coins worth in real money?',
                answer: 'TikTok coins cost approximately $0.0129 each in the US. Standard packages: 100 coins = $1.29, 1,000 coins = $12.99, 10,000 coins = $129.99. Prices vary slightly by region and platform (iOS vs Android).'
              },
              {
                question: 'How many coins equal 1 diamond for creators?',
                answer: '2 coins = 1 diamond. When a viewer sends a gift worth 1,000 coins, the creator receives 500 diamonds. This represents TikTok\'s 50% platform fee. Diamonds convert to cash at $0.005 per diamond.'
              },
              {
                question: 'What\'s the most expensive gift on TikTok?',
                answer: 'The Universe gift costs 44,999 coins (approximately $580). When sent, the creator receives 22,499.5 diamonds worth $112.50. Other high-value gifts include Planet (15,000 coins), Whale (2,150 coins), and Falcon (999 coins).'
              },
              {
                question: 'How much money do creators actually make from gifts?',
                answer: 'Creators receive 50% of the coin value. If viewers send $100 worth of gifts (7,751 coins), the creator gets 3,875.5 diamonds = $19.38. The minimum cashout is $50 (10,000 diamonds), requiring $100 in total gifts received.'
              },
              {
                question: 'Can I buy coins for someone else?',
                answer: 'No, TikTok coins can only be purchased and used on your own account. You cannot transfer coins between accounts. However, you can send gifts to creators using your purchased coins during their LIVE streams.'
              },
              {
                question: 'Do coin prices differ on iOS vs Android?',
                answer: 'Yes, iOS prices are typically slightly higher due to Apple\'s 30% App Store fee. Many creators encourage viewers to use Android or web browsers for better coin value. The conversion rate to diamonds remains the same regardless of purchase platform.'
              }
            ]}
          />

          <RelatedCalculators
            currentCalculator="coins"
            calculators={[
              {
                name: 'LIVE Gifts Calculator',
                slug: 'live-gifts',
                description: 'Calculate total LIVE streaming earnings from gifts',
                icon: 'Gift'
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Calculate total earnings including LIVE gifts',
                icon: 'Banknote'
              },
              {
                name: 'Creator Fund Calculator',
                slug: 'tiktok-creator-fund',
                description: 'Compare gift earnings to Creator Fund income',
                icon: 'DollarSign'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
