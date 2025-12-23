import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, BarChart3, CheckCircle, DollarSign, TrendingUp, Target, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How TikTok Creator Fund Works: Complete 2025 Breakdown',
  description: 'Detailed explanation of how TikTok Creator Fund calculates payments, RPM rates, factors affecting earnings, and how to maximize your income.',
  keywords: ['how tiktok creator fund works', 'creator fund calculation', 'tiktok rpm', 'creator fund algorithm', 'tiktok earnings explained'],
};

export default function HowCreatorFundWorksPage() {
  const faqs = [
    {
      question: 'How does TikTok calculate Creator Fund payments?',
      answer: 'TikTok uses a CPM/RPM model based on video views, engagement rate, viewer location, advertiser demand, and content category. Formula: (Views / 1,000) × RPM rate. RPM typically ranges from $0.02-$0.04 per 1,000 views.',
    },
    {
      question: 'Why do my Creator Fund earnings fluctuate daily?',
      answer: 'Earnings vary based on: (1) Video performance that day, (2) Advertiser demand (higher on weekdays), (3) Viewer demographics (US/UK viewers worth more), (4) Content category, (5) Seasonal changes. This is normal.',
    },
    {
      question: 'Do I get paid for old videos or only new ones?',
      answer: 'Only videos published after you join Creator Fund generate earnings. Old videos posted before approval don\'t earn retroactively. Each eligible video earns for approximately 7-14 days after posting.',
    },
    {
      question: 'Does Creator Fund affect my views?',
      answer: 'This is debated. Some creators report view drops after joining. TikTok denies this. Theory: Fund members post more (diluting performance), or views naturally stabilize after initial viral growth. Not conclusively proven either way.',
    },
    {
      question: 'Can I make a living from Creator Fund alone?',
      answer: 'Unlikely unless you\'re generating 50M+ views/month ($1,000-$2,000). Most successful creators use Creator Fund as passive income while focusing on higher-paying brand deals and other revenue streams.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">How Creator Fund Works</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-creator-fund-640.avif 640w, /guides/guide-creator-fund-1024.avif 1024w, /guides/guide-creator-fund-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-creator-fund-640.webp 640w, /guides/guide-creator-fund-1024.webp 1024w, /guides/guide-creator-fund-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-creator-fund-1024.webp"
              alt="Featured image for How TikTok Creator Fund Works: Complete Breakdown"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How TikTok Creator Fund Works: Complete Breakdown
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Understanding the algorithm, payment calculations, and factors that determine your Creator Fund earnings
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Updated: November 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 15 min read</span>
            <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Deep Dive</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Overview */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What Is TikTok Creator Fund?</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            The TikTok Creator Fund is a monetization program that pays eligible creators based on video performance. Launched in 2020 with a $1 billion commitment, it's TikTok's answer to YouTube's Partner Program.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">How It Works:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Creators qualify at 10K followers + 100K views/30 days</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Earnings calculated daily based on video views</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Payment varies by engagement, location, and content type</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Withdraw earnings once you hit $50 minimum</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> No limit on how much you can earn</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">Realistic Expectations:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2"><BarChart3 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /> Average RPM: $0.02-$0.04 per 1,000 views</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> 1 million views ≈ $20-$40</li>
                <li className="flex items-start gap-2"><TrendingUp className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" /> 10 million views/month ≈ $200-$400</li>
                <li className="flex items-start gap-2"><Target className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" /> 50 million views/month ≈ $1,000-$2,000</li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" /> Much lower than YouTube RPMs</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Payment Calculation */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How Creator Fund Calculates Your Earnings</h2>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-6">
            <h3 className="font-semibold text-neutral-900 mb-4 text-center">The Creator Fund Formula</h3>
            <div className="text-center mb-4">
              <div className="inline-block p-4 bg-white rounded-lg shadow-sm">
                <p className="text-heading-md font-mono font-bold text-tiktok-pink">
                  Earnings = (Total Views ÷ 1,000) × RPM
                </p>
              </div>
            </div>
            <p className="text-body-sm text-neutral-700 text-center">
              RPM = Revenue Per Mille (per 1,000 views)
            </p>
          </div>

          <h3 className="font-semibold text-neutral-900 mb-3">Example Calculations:</h3>
          <div className="space-y-3">
            {[
              { views: '100,000', rpm: '$0.03', earnings: '$3.00', scenario: 'Small viral video' },
              { views: '500,000', rpm: '$0.03', earnings: '$15.00', scenario: 'Moderately viral video' },
              { views: '1,000,000', rpm: '$0.03', earnings: '$30.00', scenario: '1M views benchmark' },
              { views: '10,000,000', rpm: '$0.03', earnings: '$300.00', scenario: 'Highly viral video' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900">{item.views} views</p>
                  <p className="text-body-sm text-neutral-600">{item.scenario}</p>
                </div>
                <div className="text-right">
                  <p className="text-body-sm text-neutral-600">RPM: {item.rpm}</p>
                  <p className="text-heading-sm font-bold text-tiktok-pink">{item.earnings}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/calculators/tiktok-creator-fund" className="inline-block px-6 py-3 bg-tiktok-pink text-white font-semibold rounded-lg hover:bg-tiktok-pink/90 transition-colors">
              Use Creator Fund Calculator →
            </Link>
          </div>
        </Card>

        {/* Factors Affecting RPM */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">8 Factors That Affect Your RPM Rate</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Not all views are worth the same. Your RPM rate varies based on these factors:
          </p>
          <div className="space-y-4">
            {[
              {
                number: '1',
                title: 'Viewer Location',
                impact: 'High Impact',
                description: 'US/UK/Canada viewers generate higher RPM ($0.03-$0.05) than viewers from developing countries ($0.01-$0.02). TikTok prioritizes advertiser-rich markets.',
              },
              {
                number: '2',
                title: 'Engagement Rate',
                impact: 'High Impact',
                description: 'Videos with higher likes, comments, shares, and completion rates earn more. Engagement signals valuable content to advertisers.',
              },
              {
                number: '3',
                title: 'Content Category',
                impact: 'Medium Impact',
                description: 'Finance, tech, and business content earn higher RPM (more advertiser demand). Dance, comedy, and general entertainment earn less.',
              },
              {
                number: '4',
                title: 'Watch Time',
                impact: 'Medium Impact',
                description: 'Videos watched to completion earn more than videos with high drop-off. Complete views signal quality content.',
              },
              {
                number: '5',
                title: 'Follower Authenticity',
                impact: 'Medium Impact',
                description: 'Authentic, engaged followers boost RPM. Purchased or bot followers lower RPM and may disqualify you from Creator Fund.',
              },
              {
                number: '6',
                title: 'Posting Consistency',
                impact: 'Low Impact',
                description: 'Consistent creators may see slight RPM advantages. Irregular posting doesn\'t directly affect RPM but impacts overall earnings.',
              },
              {
                number: '7',
                title: 'Time of Year',
                impact: 'Low Impact',
                description: 'Q4 (Oct-Dec) typically has higher RPM due to holiday advertising budgets. Q1 (Jan-Mar) often lower.',
              },
              {
                number: '8',
                title: 'Video Length',
                impact: 'Low Impact',
                description: 'Longer videos (>60s) may have higher earning potential if watched fully. Very short videos (<10s) earn less.',
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold text-heading-sm">
                  {item.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.impact === 'High Impact' ? 'bg-red-100 text-red-700' :
                      item.impact === 'Medium Impact' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.impact}
                    </span>
                  </div>
                  <p className="text-body-sm text-neutral-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Earnings Timeline */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Creator Fund Earnings Timeline</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            How long each video continues earning and when you get paid:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Days 1-3: Peak Earning Period</h3>
              <p className="text-body-sm text-neutral-700">
                Most views (70-80%) happen in first 72 hours. This is when majority of Creator Fund earnings accumulate.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Days 4-7: Declining Views</h3>
              <p className="text-body-sm text-neutral-700">
                Video continues earning but at reduced rate. Typically 15-20% of total earnings happen in this period.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Days 8-14: Long Tail</h3>
              <p className="text-body-sm text-neutral-700">
                Minimal ongoing views unless video goes viral again. Usually 5-10% of total earnings.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">Day 15+: Evergreen Earning</h3>
              <p className="text-body-sm text-neutral-700">
                Very few views from search/profile visits. Negligible earnings unless video resurges in For You Page.
              </p>
            </div>
          </div>
        </Card>

        {/* RPM by Niche */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Average RPM Rates by Content Category</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Based on creator reports and industry data (November 2025):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Content Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Typical RPM Range</th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-900">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: 'Finance & Investing', rpm: '$0.04 - $0.06', reason: 'High-value advertisers, older demographics' },
                  { category: 'Business & Entrepreneurship', rpm: '$0.03 - $0.05', reason: 'Strong advertiser demand' },
                  { category: 'Tech & Gadgets', rpm: '$0.03 - $0.05', reason: 'Affluent audience, product advertisers' },
                  { category: 'Education & How-To', rpm: '$0.02 - $0.04', reason: 'High engagement, moderate ad demand' },
                  { category: 'Beauty & Fashion', rpm: '$0.02 - $0.04', reason: 'Strong brand partnerships available' },
                  { category: 'Fitness & Health', rpm: '$0.02 - $0.03', reason: 'Moderate advertiser interest' },
                  { category: 'Food & Cooking', rpm: '$0.02 - $0.03', reason: 'Average engagement, niche advertisers' },
                  { category: 'Comedy & Entertainment', rpm: '$0.01 - $0.03', reason: 'Broad audience, lower CPM' },
                  { category: 'Dance & Music', rpm: '$0.01 - $0.02', reason: 'Young demographic, brand deals more lucrative' },
                  { category: 'Gaming', rpm: '$0.02 - $0.03', reason: 'Engaged audience but competitive' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{item.category}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{item.rpm}</td>
                    <td className="py-3 px-4 text-neutral-700">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800 flex items-start gap-2">
              <Target className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><strong>Strategy Tip:</strong> Don't choose a niche solely for higher RPM. Brand deals pay 10-50x more than Creator Fund. Build engaged audience in a niche you're passionate about.</span>
            </p>
          </div>
        </Card>

        {/* Pros and Cons */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Creator Fund: Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> Advantages
              </h3>
              <ul className="space-y-3 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Passive Income:</strong> Earn automatically from views without finding sponsors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>No Minimum Views Per Video:</strong> Every eligible video earns something</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Easy to Join:</strong> 10K followers is achievable for most creators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>No Content Restrictions:</strong> Compatible with brand deals and other income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Builds Business Credibility:</strong> "Creator Fund member" status helps land deals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" /> Disadvantages
              </h3>
              <ul className="space-y-3 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Very Low Rates:</strong> $0.02-$0.04 per 1K views vs YouTube's $1-$5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Unpredictable Earnings:</strong> RPM fluctuates daily based on many factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>High Views Required:</strong> Need millions of views monthly for meaningful income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Limited Countries:</strong> Only available in handful of regions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-neutral-700"><strong>Tax Complexity:</strong> Self-employment income requires quarterly tax payments</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* FAQ */}
        <FAQSection pageName="How Creator Fund Works" faqs={faqs} />

        {/* Related Resources */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/calculators/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Calculator</h4>
              <p className="text-body-sm text-neutral-700">Estimate your monthly earnings</p>
            </Link>
            <Link href="/guides/how-to-join-creator-fund-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Join Creator Fund</h4>
              <p className="text-body-sm text-neutral-700">Application process guide</p>
            </Link>
            <Link href="/data/rpm-rates-by-niche" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">RPM Rates by Niche</h4>
              <p className="text-body-sm text-neutral-700">Detailed earnings data</p>
            </Link>
            <Link href="/guides/how-to-increase-creator-fund-earnings" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Increase Fund Earnings</h4>
              <p className="text-body-sm text-neutral-700">Optimization strategies</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
