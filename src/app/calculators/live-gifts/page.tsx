import React from 'react';
import { Gift } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { FAQSchema } from '@/components/seo/CalculatorSchema';
import { LiveGiftsCalculatorWidget } from '@/components/calculators/live-gifts/CalculatorWidget';

const faqData = [
  {
    question: 'How much can you make from TikTok LIVE gifts?',
    answer: 'Earnings vary widely. Small creators (50-200 viewers) earn $10-$50 per hour. Mid-tier creators (200-1000 viewers) earn $50-$300/hour. Top creators (1000+ viewers) can earn $300-$1000+/hour. Your gifting rate (gifts per viewer) is the biggest factor.'
  },
  {
    question: 'What is a good gifts-per-viewer rate?',
    answer: 'Average creators get 0.3-0.5 gifts per viewer. Engaging personalities can reach 0.7-1.0. Top entertainers exceed 1.5. To improve: interact with chat, call out gifters by name, create gift goals, and use gift battles during peak times.'
  },
  {
    question: 'How long should I stream to maximize earnings?',
    answer: 'Optimal duration: 60-90 minutes for most creators. Longer streams (2-3 hours) work if engagement stays high. The first 15-30 minutes are most profitable as initial viewers gift. Schedule multiple shorter streams over one marathon session.'
  },
  {
    question: 'When is the best time to go LIVE for gifts?',
    answer: 'Peak gifting hours: 7-10 PM in your audience\'s timezone (weekdays), 2-11 PM (weekends). Friday/Saturday nights see 40-60% more gifting. Avoid early mornings (6-10 AM) when gifting drops 50-70%. Test different times for 2 weeks to find your sweet spot.'
  },
  {
    question: 'How do I increase viewer gifting during streams?',
    answer: 'Top strategies: (1) Set visible gift goals with rewards, (2) Thank gifters by name within 10 seconds, (3) Create "battles" with other creators, (4) Use gift-triggered content (song requests, challenges), (5) Build anticipation for next stream, (6) Engage non-gifters to keep viewer count high.'
  },
];

export default function LiveGiftsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <FAQSchema faqs={faqData} />
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'LIVE Gifts Calculator', href: '/calculators/live-gifts' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-secondary text-white mb-6">
            <Gift size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok LIVE Gifts Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate your earnings from TikTok LIVE streaming based on average viewers, stream duration, and gifting rate.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <LiveGiftsCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">About TikTok LIVE Gifts</h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>TikTok LIVE allows viewers to send virtual gifts during live streams. Creators receive diamonds (converted from coins), which can be exchanged for real money. This calculator helps you estimate potential earnings based on your audience size and engagement patterns.</p>
                <p><strong>How it works:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Viewers purchase coins ($0.0105 per coin)</li>
                  <li>Viewers send gifts (valued in coins) during LIVE</li>
                  <li>Creators receive diamonds (2 coins = 1 diamond)</li>
                  <li>Diamonds convert to USD ($0.005 per diamond, 50% of coin value)</li>
                </ul>
                <p className="mt-4">Understanding these conversion rates is crucial for setting realistic income expectations and planning your LIVE streaming strategy effectively.</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">LIVE Earnings Benchmarks</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-3 px-4 text-label-md text-neutral-900">Creator Level</th>
                      <th className="py-3 px-4 text-label-md text-neutral-900">Avg Viewers</th>
                      <th className="py-3 px-4 text-label-md text-neutral-900">Gifts/Viewer</th>
                      <th className="py-3 px-4 text-label-md text-neutral-900">Est. Per Hour</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-sm">
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-semibold">Beginner</td>
                      <td className="py-3 px-4">20-50</td>
                      <td className="py-3 px-4">0.2-0.3</td>
                      <td className="py-3 px-4 text-neutral-600">$5-$15</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-semibold">Growing</td>
                      <td className="py-3 px-4">50-200</td>
                      <td className="py-3 px-4">0.3-0.5</td>
                      <td className="py-3 px-4 text-neutral-600">$15-$50</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-semibold">Mid-Tier</td>
                      <td className="py-3 px-4">200-1000</td>
                      <td className="py-3 px-4">0.5-0.8</td>
                      <td className="py-3 px-4 text-neutral-600">$50-$300</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-semibold">Established</td>
                      <td className="py-3 px-4">1000-5000</td>
                      <td className="py-3 px-4">0.8-1.2</td>
                      <td className="py-3 px-4 text-neutral-600">$300-$1000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Top Creator</td>
                      <td className="py-3 px-4">5000+</td>
                      <td className="py-3 px-4">1.2-2.0</td>
                      <td className="py-3 px-4 text-success-DEFAULT font-semibold">$1000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Use This Calculator</h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Enter Average Viewers</h3>
                    <p>Input your typical concurrent viewer count during streams. Check your past streams in TikTok Analytics to find this number. If you're new, start with a conservative estimate like 50-100 viewers.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Set Stream Duration</h3>
                    <p>Enter how long you plan to stream in minutes. Most successful creators stream 60-90 minutes. Longer streams work if engagement stays high, but avoid marathon sessions that lead to burnout.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Estimate Gifts Per Viewer</h3>
                    <p>This is the average number of gifts each viewer sends. Start with 0.3-0.5 for typical creators. Track your actual rate over 5-10 streams and adjust accordingly. Highly engaging personalities can reach 1.0+.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Review Your Projections</h3>
                    <p>The calculator shows earnings per stream and monthly potential based on 8 streams per month. Use these estimates for planning, but remember actual results vary based on content quality and audience generosity.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Real-World Example</h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p className="font-semibold text-neutral-900">Case Study: Beauty Creator Sarah</p>
                <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                  <p><strong>Profile:</strong> 45K followers, beauty tutorials niche</p>
                  <p><strong>Average Viewers:</strong> 250 concurrent viewers</p>
                  <p><strong>Stream Duration:</strong> 75 minutes (tutorial + Q&A)</p>
                  <p><strong>Gifts Per Viewer:</strong> 0.65 (above average due to engaged community)</p>
                </div>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Per Stream: ~$122 ($97 after platform fees)</li>
                  <li>Monthly (8 streams): ~$976</li>
                  <li>Annually: ~$11,712 supplemental income</li>
                </ul>
                <p className="mt-4">Sarah increased her gifts-per-viewer rate from 0.4 to 0.65 over 3 months by implementing gift goals, calling out gifters immediately, and creating weekly themes that encouraged participation. Her key strategy: making viewers feel valued and part of the community.</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tips to Maximize LIVE Earnings</h2>
              <div className="space-y-3 text-body-md text-neutral-700">
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Create Gift Goals</h3>
                  <p>Set visible milestones like "At 1000 diamonds, I'll sing a song!" This gives viewers a reason to gift and creates excitement.</p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Acknowledge Gifters Immediately</h3>
                  <p>Thank every gifter by name within 10 seconds. This recognition encourages repeat gifting and makes viewers feel valued.</p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Schedule Consistently</h3>
                  <p>Stream same days/times weekly. Regularity builds anticipation and ensures your audience knows when to tune in.</p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Use Gift Battles</h3>
                  <p>Partner with other creators for gift battles. Competitive energy drives gifting up 40-60% during battle periods.</p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Engage Non-Gifters Too</h3>
                  <p>Don't ignore viewers who don't gift. Answer questions, respond to comments. Higher viewer counts lead to more total gifts.</p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Build Anticipation</h3>
                  <p>End streams with teasers for next time. "Tomorrow I'll reveal..." creates anticipation and ensures viewers return.</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-3 text-body-md text-neutral-700">
                <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                  <h3 className="font-semibold text-error-DEFAULT mb-1">Begging for Gifts</h3>
                  <p className="text-neutral-700">Viewers hate being pressured. Instead of "Please send gifts," try "Let's hit 500 diamonds for a surprise!" Framing it as a shared goal feels collaborative, not desperate.</p>
                </div>
                <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                  <h3 className="font-semibold text-error-DEFAULT mb-1">Ignoring Chat</h3>
                  <p className="text-neutral-700">Silent streams kill engagement. Read comments aloud, ask questions, respond quickly. Active chat interaction increases gifting by 30-50%.</p>
                </div>
                <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                  <h3 className="font-semibold text-error-DEFAULT mb-1">Streaming Too Long</h3>
                  <p className="text-neutral-700">Energy drops after 90 minutes for most creators. Better to do 2 high-energy 60-minute streams than 1 exhausting 3-hour stream.</p>
                </div>
                <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                  <h3 className="font-semibold text-error-DEFAULT mb-1">No Content Plan</h3>
                  <p className="text-neutral-700">Random streaming leads to awkward silence. Plan segments: intro (5 min), main content (45 min), Q&A (15 min), wrap-up (5 min).</p>
                </div>
                <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                  <h3 className="font-semibold text-error-DEFAULT mb-1">Poor Timing</h3>
                  <p className="text-neutral-700">Streaming at 6 AM means low viewership and fewer gifts. Test evening hours (7-10 PM) when your audience is most active and willing to spend.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection calculatorName="live-gifts" formula={`Per-Stream Earnings = (Avg Viewers × 2) × Gifts/Viewer × Avg Gift Value (50 coins) / 2 × $0.005

Monthly Potential = Per-Stream Earnings × 8 streams`} assumptions={[{ label: 'Viewer Turnover', value: '2x - assumes viewers join/leave during stream' }, { label: 'Avg Gift Value', value: '50 coins (ranges 5-5000)' }, { label: 'Diamond Conversion', value: '$0.005 per diamond (50% of coin value)' }]} dataSources={['TikTok Creator Portal', 'Creator surveys Q4 2024']} limitations="Actual earnings depend on audience generosity, stream engagement, and viewer purchasing power." lastUpdated="November 13, 2025" />

          <FAQSection pageName="LIVE Gifts Calculator" faqs={[{ question: 'How much can you earn from TikTok LIVE?', answer: 'Earnings vary widely. Small creators (50-100 viewers) earn $5-$20 per stream. Mid-tier (500-1000 viewers) earn $50-$200. Top streamers (5000+ viewers) can earn $500-$5000+ per stream. Your gifts-per-viewer rate is the biggest factor in earnings.' }, { question: 'How do I withdraw LIVE earnings?', answer: 'Once you reach $50 in diamonds, you can withdraw to PayPal or bank account. Withdrawals process within 7-14 business days. Go to Profile > Settings > Balance > Withdraw to initiate.' }, { question: 'What factors affect my LIVE earnings?', answer: 'Key factors: audience size (concurrent viewers), engagement quality (how interactive you are), audience purchasing power, stream timing (peak hours earn more), content type (entertainment streams earn more than casual chats), and gifting culture in your niche.' }, { question: 'Can I make a full-time income from TikTok LIVE?', answer: 'Yes, but it requires dedication. To earn $3000/month, you need roughly 400-600 viewers with 0.5 gifts/viewer doing 8-12 streams monthly. Top creators earning $10K+ monthly typically have 1000+ viewers and stream 15-20 times per month.' }, { question: 'How long does it take to become eligible for LIVE?', answer: 'Requirements: 1000+ followers and 18+ years old in most regions. Once eligible, focus on building engagement before monetizing. Creators with 5K+ engaged followers typically see better LIVE earnings than those who go LIVE immediately at 1K.' }, { question: 'What are the most profitable stream times?', answer: 'Peak earning hours: 7-10 PM weekdays, 2-11 PM weekends in your audience timezone. Friday/Saturday nights see 40-60% higher gifting. Avoid early mornings (6-10 AM) when gifting drops 50-70%. Test for 2 weeks to find your sweet spot.' }, { question: 'How do I calculate my actual gifts-per-viewer rate?', answer: 'Formula: Total diamonds earned / (peak viewers x 2). The x2 accounts for viewer turnover. Example: 1000 diamonds from stream with 200 peak viewers = 1000/(200x2) = 2.5 gifts per viewer. Track across 5-10 streams for accuracy.' }, { question: 'Do I need special equipment for LIVE streaming?', answer: 'Basic setup works: smartphone with good camera, stable internet (5+ Mbps upload), good lighting (ring light recommended), and quiet environment. Audio quality matters more than video - consider a basic microphone ($20-50) if streaming regularly.' }]} />

          <Card className="mt-12 bg-warning-50 border border-warning-200">
            <div className="space-y-4 text-body-md text-neutral-700">
              <h2 className="text-heading-lg font-semibold text-neutral-900">Professional Disclaimer</h2>
              <p>This calculator provides estimates based on industry averages and typical creator performance. Actual earnings will vary significantly based on numerous factors including but not limited to: audience demographics, content quality, engagement levels, streaming consistency, niche/category, geographic location of viewers, time of day, day of week, seasonal trends, and individual creator appeal.</p>
              <p>TikTok's gift conversion rates and policies may change. The calculator uses current rates as of November 2025: $0.005 per diamond, with 2 coins converting to 1 diamond. Virtual gift earnings are subject to applicable taxes and must be reported as income according to your local tax laws.</p>
              <p>This tool is for educational and planning purposes only. Results are not guaranteed. Past performance does not guarantee future results. The creator of this calculator is not affiliated with TikTok/ByteDance and assumes no liability for decisions made based on these calculations.</p>
              <p className="font-semibold text-neutral-900">Always diversify your income streams and do not rely solely on any single platform for your livelihood.</p>
            </div>
          </Card>

          <RelatedCalculators currentCalculator="live-gifts" calculators={[{ name: 'Coins Calculator', slug: 'coins', description: 'Convert TikTok coins to USD', icon: 'Coins' }, { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Total earnings including LIVE', icon: 'Banknote' }]} />
        </div>
      </div>
    </div>
  );
}
