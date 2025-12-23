import type { Metadata } from 'next';
import Link from 'next/link';
import { Swords, Clock, Gamepad2, Calendar, HandHeart, Target, Users, X } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok LIVE Earnings: How Much Can You Really Make? (2025)',
  description: 'Complete earnings breakdown for TikTok LIVE creators. Realistic income by follower tier, gift values, diamond conversion, and proven monetization strategies.',
  keywords: ['tiktok live earnings', 'live stream income', 'tiktok gifts money', 'how much do live streamers make', 'tiktok diamonds'],
};

export default function TikTokLiveEarningsPage() {
  const earningsTiers = [
    {
      followers: '1K-5K',
      hourly: '$5-$20',
      monthly: '$200-$800',
      notes: 'Casual streaming, building audience',
      streamsPerWeek: '2-3',
      avgViewers: '5-20',
      topGiftTypes: 'Roses, Ice Cream Cone'
    },
    {
      followers: '5K-10K',
      hourly: '$20-$50',
      monthly: '$800-$2,000',
      notes: 'Consistent viewers, growing gifts',
      streamsPerWeek: '3-4',
      avgViewers: '20-50',
      topGiftTypes: 'Roses, Hearts, Ice Cream'
    },
    {
      followers: '10K-50K',
      hourly: '$50-$150',
      monthly: '$2,000-$6,000',
      notes: 'Dedicated fan base emerging',
      streamsPerWeek: '4-5',
      avgViewers: '50-200',
      topGiftTypes: 'Drama Queen, TikTok'
    },
    {
      followers: '50K-100K',
      hourly: '$150-$400',
      monthly: '$6,000-$16,000',
      notes: 'Multiple gift battles, loyal supporters',
      streamsPerWeek: '5-7',
      avgViewers: '200-500',
      topGiftTypes: 'Galaxy, Lion, Universe'
    },
    {
      followers: '100K+',
      hourly: '$400-$1,000+',
      monthly: '$16,000-$40,000+',
      notes: 'Top-tier streamers',
      streamsPerWeek: '5-7+',
      avgViewers: '500+',
      topGiftTypes: 'TikTok Universe, Lion'
    },
  ];

  const giftValues = [
    { gift: 'Rose', coins: 1, diamonds: 0.5, usdValue: '$0.005', category: 'Basic' },
    { gift: 'Ice Cream Cone', coins: 1, diamonds: 0.5, usdValue: '$0.005', category: 'Basic' },
    { gift: 'TikTok', coins: 1, diamonds: 0.5, usdValue: '$0.005', category: 'Basic' },
    { gift: 'Heart', coins: 5, diamonds: 2.5, usdValue: '$0.025', category: 'Basic' },
    { gift: 'Perfume', coins: 20, diamonds: 10, usdValue: '$0.10', category: 'Intermediate' },
    { gift: 'Doughnut', coins: 30, diamonds: 15, usdValue: '$0.15', category: 'Intermediate' },
    { gift: 'Sign Language', coins: 100, diamonds: 50, usdValue: '$0.50', category: 'Intermediate' },
    { gift: 'Hand Hearts', coins: 100, diamonds: 50, usdValue: '$0.50', category: 'Intermediate' },
    { gift: 'Drama Queen', coins: 5000, diamonds: 2500, usdValue: '$25.00', category: 'Premium' },
    { gift: 'Lion', coins: 29999, diamonds: 15000, usdValue: '$150.00', category: 'Premium' },
    { gift: 'TikTok Universe', coins: 44999, diamonds: 22500, usdValue: '$225.00', category: 'Premium' },
  ];

  const diamondConversion = {
    rate: '50%',
    explanation: 'TikTok keeps 50% of all gift values. Creators receive the remaining 50% as Diamonds.',
    minimumWithdrawal: '$50 (10,000 diamonds)',
    payoutSchedule: '1-2 weeks processing',
    paymentMethods: ['PayPal', 'Bank Transfer', 'Direct Deposit'],
  };

  const maximizeEarningsStrategies = [
    {
      strategy: 'Host Gift Battles',
      description: 'Gift battles between fans create competitive giving. Announce during stream that the top gifter gets a shoutout or special mention.',
      impact: '2-5x more gifts during battle periods',
      howTo: 'Say "Let us see who can be our top supporter tonight!" and acknowledge every gift.',
      icon: <Swords className="w-7 h-7" />
    },
    {
      strategy: 'Go LIVE During Peak Hours',
      description: 'Streaming during 7-11 PM in your primary audience timezone maximizes both viewers and gift-giving potential.',
      impact: '50-100% more earnings vs off-peak',
      howTo: 'Check your analytics for audience timezone, then schedule prime-time streams.',
      icon: <Clock className="w-7 h-7" />
    },
    {
      strategy: 'Create Interactive Content',
      description: 'Games, Q&As, challenges, and viewer participation keep people engaged longer and more likely to gift.',
      impact: '30-50% increase in watch time and gifts',
      howTo: 'Prepare 3-5 interactive segments per stream: trivia, would-you-rather, talent showcase.',
      icon: <Gamepad2 className="w-7 h-7" />
    },
    {
      strategy: 'Maintain Consistent Schedule',
      description: 'Regular viewers who know your schedule are more likely to show up with coins ready to gift.',
      impact: 'Builds loyal gift-giving fan base over time',
      howTo: 'Stream same days/times weekly. Announce schedule in bio and posts.',
      icon: <Calendar className="w-7 h-7" />
    },
    {
      strategy: 'Acknowledge Every Gift',
      description: 'Saying the sender name and thanking them encourages more gifts from them and others watching.',
      impact: '40-60% increase in repeat gifting',
      howTo: 'Keep gift alerts on, pause briefly for larger gifts, use sender name.',
      icon: <HandHeart className="w-7 h-7" />
    },
    {
      strategy: 'Stream Longer Sessions',
      description: 'Streams over 60 minutes earn significantly more than short streams. Viewers need time to get invested.',
      impact: '3-4x earnings on 90+ min vs 30 min streams',
      howTo: 'Build stamina gradually. Start with 45 min, work up to 90+ min.',
      icon: <Clock className="w-7 h-7" />
    },
    {
      strategy: 'Build to Milestone Goals',
      description: 'Setting visible goals (1000 roses for a dance, 5000 diamonds for a song) gamifies giving.',
      impact: 'Focused giving toward visible targets',
      howTo: 'Use stream overlays or verbally announce goals and progress.',
      icon: <Target className="w-7 h-7" />
    },
    {
      strategy: 'Collaborate with Other Streamers',
      description: 'Multi-person streams and gifting between creator fans create excitement and larger gift totals.',
      impact: 'Access to new audiences, competitive giving',
      howTo: 'Partner with similar-sized creators for joint streams or friendly competitions.',
      icon: <Users className="w-7 h-7" />
    },
  ];

  const realExamples = [
    {
      creator: 'Gaming Streamer',
      followers: '25K',
      streamFrequency: '5x per week, 2 hours each',
      monthlyEarnings: '$3,500-$4,500',
      topStrategy: 'Gift battles during boss fights and victories',
      breakdown: {
        giftBattles: '40%',
        regularGifts: '35%',
        newViewerGifts: '25%'
      }
    },
    {
      creator: 'Music/Singing',
      followers: '50K',
      streamFrequency: '4x per week, 90 min each',
      monthlyEarnings: '$6,000-$8,000',
      topStrategy: 'Song requests for gifts, dedication songs',
      breakdown: {
        songRequests: '50%',
        regularGifts: '30%',
        bigSupporters: '20%'
      }
    },
    {
      creator: 'Lifestyle/Chat',
      followers: '15K',
      streamFrequency: '6x per week, 1 hour each',
      monthlyEarnings: '$1,800-$2,500',
      topStrategy: 'Daily show format, loyal viewer community',
      breakdown: {
        dailyViewers: '60%',
        newDiscoveries: '25%',
        specialEvents: '15%'
      }
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Begging for gifts',
      problem: 'Viewers sense desperation and it creates uncomfortable atmosphere. Gift-giving drops.',
      solution: 'Focus on entertainment value. Gifts follow naturally when viewers enjoy the content.'
    },
    {
      mistake: 'Ignoring small gifts',
      problem: 'People who send roses today might send Lions tomorrow. Ignoring them loses future big gifters.',
      solution: 'Acknowledge EVERY gift with the sender name. Small gifters often become loyal supporters.'
    },
    {
      mistake: 'Inconsistent streaming',
      problem: 'Irregular schedule means viewers cannot plan to watch. Building gifting habits requires consistency.',
      solution: 'Set 2-3 fixed streaming times weekly and stick to them for at least 2 months.'
    },
    {
      mistake: 'Only streaming for gifts',
      problem: 'When monetization is the obvious focus, content quality suffers and viewers leave.',
      solution: 'Create genuinely entertaining streams. Gifts are a byproduct of great content, not the goal.'
    },
    {
      mistake: 'Not using interactive features',
      problem: 'Passive streams get passive viewers. No engagement means minimal gifts.',
      solution: 'Use polls, Q&As, games, challenges. Make viewers feel part of the stream.'
    },
  ];

  const nicheEarnings = [
    { niche: 'Gaming', avgHourly: '$30-$150', giftDensity: 'High', bestFeatures: 'Wins, battles, achievements', notes: 'Peak during gameplay highlights' },
    { niche: 'Music/Singing', avgHourly: '$50-$200', giftDensity: 'Very High', bestFeatures: 'Song requests, dedications', notes: 'Emotional connection drives gifts' },
    { niche: 'Comedy/Entertainment', avgHourly: '$40-$180', giftDensity: 'High', bestFeatures: 'Jokes, reactions, skits', notes: 'Laughter = appreciation gifts' },
    { niche: 'ASMR', avgHourly: '$25-$100', giftDensity: 'Medium-High', bestFeatures: 'Triggers, relaxation', notes: 'Loyal niche audience' },
    { niche: 'Fitness', avgHourly: '$20-$80', giftDensity: 'Medium', bestFeatures: 'Workout challenges', notes: 'Morning streams work well' },
    { niche: 'Educational', avgHourly: '$15-$60', giftDensity: 'Lower', bestFeatures: 'Q&A, tutorials', notes: 'Value-driven, less gift culture' },
    { niche: 'Beauty/Makeup', avgHourly: '$35-$120', giftDensity: 'High', bestFeatures: 'GRWM, tutorials', notes: 'Product reveals get gifts' },
    { niche: 'Cooking', avgHourly: '$25-$100', giftDensity: 'Medium-High', bestFeatures: 'Recipe reveals, taste tests', notes: 'Family-friendly appeal' },
  ];

  const faqs = [
    {
      question: 'How much do TikTok LIVE streamers really make?',
      answer: 'Earnings vary dramatically by follower count and engagement. Creators with 1K-5K followers typically earn $5-$20/hour ($200-$800/month). Mid-tier creators (10K-50K followers) average $50-$150/hour ($2,000-$6,000/month). Top streamers with 100K+ followers can earn $400-$1,000+/hour ($16,000-$40,000+/month). These figures assume regular streaming of 10-20 hours per week.'
    },
    {
      question: 'How does TikTok gift payout work?',
      answer: 'Viewers purchase coins with real money, then send gifts during LIVE streams. You receive 50% of gift value as Diamonds (TikTok keeps 50%). Diamonds convert to cash at approximately $0.01 per diamond. Minimum withdrawal is $50 (10,000 diamonds). Payouts process in 1-2 weeks via PayPal, bank transfer, or direct deposit.'
    },
    {
      question: 'What are the most valuable TikTok gifts?',
      answer: 'The highest value gifts include: TikTok Universe (44,999 coins, $225 creator value), Lion (29,999 coins, $150 creator value), and Drama Queen (5,000 coins, $25 creator value). However, high volumes of smaller gifts like Roses (1 coin each) often total more than occasional large gifts.'
    },
    {
      question: 'How many followers do I need to go LIVE?',
      answer: 'TikTok requires 1,000 followers to unlock LIVE streaming. Once unlocked, you can receive gifts immediately. There is no minimum follower count for receiving gifts - you just need the LIVE feature enabled.'
    },
    {
      question: 'When is the best time to go LIVE?',
      answer: 'Peak streaming times are 7-11 PM in your primary audience timezone. Thursday, Saturday, and Sunday typically see highest viewership. However, your specific audience may differ - check your TikTok analytics for when YOUR followers are most active.'
    },
    {
      question: 'How long should my LIVE streams be?',
      answer: 'Streams over 60 minutes earn 3-4x more than 30-minute streams. Viewers need time to settle in, get engaged, and feel compelled to gift. Aim for minimum 45 minutes, with 60-90 minutes being optimal for most niches. Very long streams (3+ hours) can work for gaming but may cause burnout.'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-primary-600">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">LIVE Earnings Guide</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 py-16">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-live-streaming-640.avif 640w, /guides/guide-live-streaming-1024.avif 1024w, /guides/guide-live-streaming-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-live-streaming-640.webp 640w, /guides/guide-live-streaming-1024.webp 1024w, /guides/guide-live-streaming-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-live-streaming-1024.webp"
              alt="Featured image for TikTok LIVE Earnings Guide"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
            Complete 2025 Breakdown
          </span>
          <h1 className="text-display-lg font-bold text-white mb-6">
            TikTok LIVE Earnings Guide
          </h1>
          <p className="text-heading-md text-white/90 mb-8 max-w-2xl mx-auto">
            How much can you really make from TikTok LIVE? Get realistic earnings data by follower tier, understand the gift system, and learn strategies to maximize your streaming income.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/20 rounded-full text-white">50% Creator Payout</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white">$50 Min Withdrawal</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-white">1-2 Week Processing</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-12">
        {/* Earnings by Tier */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Realistic Earnings by Follower Tier
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Your earning potential scales with follower count, but engagement matters more than raw numbers. A 10K account with loyal viewers can out-earn a 50K account with passive followers.
            </p>
            <div className="space-y-4">
              {earningsTiers.map((tier, idx) => (
                <div key={idx} className="p-5 bg-neutral-50 rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-heading-md font-bold text-neutral-900">{tier.followers} followers</h3>
                      <p className="text-body-sm text-neutral-600">{tier.notes}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-heading-lg font-bold text-green-600">{tier.hourly}/hour</p>
                      <p className="text-body-md text-neutral-700">{tier.monthly}/month</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {tier.streamsPerWeek} streams/week
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      {tier.avgViewers} avg viewers
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                      Top gifts: {tier.topGiftTypes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Gift Values */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              TikTok Gift Values & Creator Payouts
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Understanding gift values helps you appreciate viewer support and set realistic expectations. Remember: you receive 50% of the gift value as Diamonds.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Gift</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Coins</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Your Diamonds</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Your Earnings</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {giftValues.map((gift, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4 font-medium text-neutral-900">{gift.gift}</td>
                      <td className="py-3 px-4 text-neutral-700">{gift.coins.toLocaleString()}</td>
                      <td className="py-3 px-4 text-blue-600">{gift.diamonds.toLocaleString()}</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{gift.usdValue}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          gift.category === 'Premium' ? 'bg-purple-100 text-purple-700' :
                          gift.category === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                          'bg-neutral-100 text-neutral-700'
                        }`}>
                          {gift.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-neutral-900 mb-2">How Payouts Work</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li><span className="font-medium">Conversion Rate:</span> {diamondConversion.rate} of gift value goes to creators</li>
                <li><span className="font-medium">Minimum Withdrawal:</span> {diamondConversion.minimumWithdrawal}</li>
                <li><span className="font-medium">Processing Time:</span> {diamondConversion.payoutSchedule}</li>
                <li><span className="font-medium">Payment Methods:</span> {diamondConversion.paymentMethods.join(', ')}</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Maximize Earnings */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              8 Strategies to Maximize LIVE Earnings
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              The difference between a $20/hour streamer and a $200/hour streamer often comes down to strategy, not follower count. Implement these proven techniques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {maximizeEarningsStrategies.map((strategy, idx) => (
                <div key={idx} className="p-5 bg-neutral-50 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-primary-600">{strategy.icon}</span>
                    <div>
                      <h3 className="text-heading-md font-semibold text-neutral-900">{strategy.strategy}</h3>
                      <p className="text-body-sm text-green-600 font-medium">{strategy.impact}</p>
                    </div>
                  </div>
                  <p className="text-body-sm text-neutral-700 mb-3">{strategy.description}</p>
                  <div className="p-2 bg-white rounded border border-neutral-200">
                    <p className="text-body-xs text-neutral-600">
                      <span className="font-medium">How to:</span> {strategy.howTo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Niche Comparison */}
        <section>
          <Card>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Earnings by Niche
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Some niches naturally attract more gift-giving than others. Music and gaming lead, while educational content sees less gift culture.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Niche</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Avg Hourly</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Gift Density</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Best Features</th>
                  </tr>
                </thead>
                <tbody>
                  {nicheEarnings.map((niche, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                      <td className="py-3 px-4 font-medium text-neutral-900">{niche.niche}</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{niche.avgHourly}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          niche.giftDensity === 'Very High' ? 'bg-green-100 text-green-700' :
                          niche.giftDensity === 'High' ? 'bg-blue-100 text-blue-700' :
                          niche.giftDensity === 'Medium-High' ? 'bg-teal-100 text-teal-700' :
                          niche.giftDensity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-neutral-100 text-neutral-700'
                        }`}>
                          {niche.giftDensity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-body-sm text-neutral-600">{niche.bestFeatures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Real Examples */}
        <section>
          <Card className="bg-blue-50 border-blue-200">
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Real Creator Examples
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              These anonymized examples from real creators show what is achievable with different approaches and follower counts.
            </p>
            <div className="space-y-6">
              {realExamples.map((example, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-heading-md font-bold text-neutral-900">{example.creator}</h3>
                      <p className="text-body-sm text-neutral-600">{example.followers} followers • {example.streamFrequency}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-heading-lg font-bold text-green-600">{example.monthlyEarnings}</p>
                      <p className="text-body-sm text-neutral-600">monthly</p>
                    </div>
                  </div>
                  <p className="text-body-md text-neutral-700 mb-4">
                    <span className="font-medium">Top Strategy:</span> {example.topStrategy}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(example.breakdown).map(([source, percent]) => (
                      <span key={source} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {source.replace(/([A-Z])/g, ' $1').trim()}: {percent}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Common Mistakes */}
        <section>
          <Card className="bg-warning-50 border-warning-200">
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">
              Common Mistakes That Kill Earnings
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-lg">
                  <h3 className="text-heading-md font-semibold text-error-600 mb-2 flex items-center gap-2">
                    <X className="w-5 h-5" /> {item.mistake}
                  </h3>
                  <p className="text-body-md text-neutral-700 mb-2">
                    <span className="font-medium">Problem:</span> {item.problem}
                  </p>
                  <p className="text-body-md text-neutral-700">
                    <span className="font-medium text-green-600">Solution:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-heading-xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <FAQSection pageName="LIVE Earnings" faqs={faqs} />
        </section>

        {/* Calculator CTA */}
        <section>
          <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
            <div className="text-center">
              <h2 className="text-heading-xl font-bold mb-4">Calculate Your LIVE Earnings Potential</h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Use our LIVE Gifts Calculator to estimate your earning potential based on your specific metrics and streaming frequency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators/live-gifts" className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors">
                  LIVE Gifts Calculator →
                </Link>
                <Link href="/guides/best-times-go-live" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors">
                  Best Times to Stream
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Resources */}
        <section>
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/guides/best-times-go-live" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-2">Best Times to Go LIVE</h3>
                <p className="text-body-sm text-neutral-600">Optimal streaming schedule by timezone and niche</p>
              </Link>
              <Link href="/calculators/live-gifts" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-2">LIVE Gifts Calculator</h3>
                <p className="text-body-sm text-neutral-600">Calculate earnings from virtual gifts</p>
              </Link>
              <Link href="/guides/tiktok-monetization-requirements" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-2">Monetization Requirements</h3>
                <p className="text-body-sm text-neutral-600">All TikTok monetization program requirements</p>
              </Link>
            </div>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="p-4 bg-neutral-100 rounded-lg border border-neutral-200">
          <p className="text-body-sm text-neutral-600">
            <span className="font-semibold">Disclaimer:</span> Earnings figures are estimates based on creator surveys and industry data. Actual results vary significantly based on content quality, engagement, niche, streaming consistency, and audience demographics. TikTok policies and payout rates are subject to change. This is not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
