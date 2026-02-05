'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertCircle, User, Users, Video, Clock, Target, TrendingUp, Zap, Shield } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { InputsExplained } from '@/components/calculator/InputsExplained';

const faqData = [
  {
    question: 'What are the requirements for TikTok Creator Fund?',
    answer: 'Creator Fund requires: 10,000+ followers, 100,000+ video views in the last 30 days, 18+ years old, and residence in an eligible country (US, UK, Germany, France, Italy, Spain). Your account must be in good standing with Community Guidelines.'
  },
  {
    question: 'How do I qualify for TikTok LIVE?',
    answer: 'TikTok LIVE requires 1,000+ followers and 18+ years old to go LIVE. To receive gifts (monetize), you need the same requirements plus your account must be at least 30 days old. Some regions have different requirements.'
  },
  {
    question: 'Can I join multiple TikTok monetization programs?',
    answer: 'Yes! You can participate in Creator Fund, LIVE Gifts, Shop Affiliate, and Series simultaneously if you meet each program\'s requirements. Many creators diversify income across multiple TikTok monetization streams.'
  },
  {
    question: 'What does "account in good standing" mean?',
    answer: 'Good standing means no recent Community Guidelines violations, no copyright strikes, no fake engagement, and authentic content. Violations can temporarily or permanently disqualify you from monetization programs.'
  },
  {
    question: 'How long does it take to get approved for monetization?',
    answer: 'Approval times vary by program. Creator Fund: 1-7 days. LIVE access: instant once requirements met. Shop Affiliate: 1-3 days. If you meet requirements but aren\'t approved, contact TikTok support.'
  },
  {
    question: 'Why was my monetization application rejected?',
    answer: 'Common rejection reasons: using fake followers or engagement bots, reposting content from other platforms, violating Community Guidelines, underage account, inaccurate location information, or insufficient authentic engagement despite meeting follower thresholds. TikTok\'s algorithm detects purchased followers and spam engagement patterns. Ensure all growth is organic and content is original before reapplying.'
  },
  {
    question: 'Do I need different follower counts for different programs?',
    answer: 'Yes. TikTok Shop requires no minimum followers, LIVE Gifts needs 1,000+ followers, Creator Fund and Creator Rewards require 10,000+ followers and 100,000+ video views in 30 days, while Series needs 10,000+ followers but only 1,000+ views. Brand deals through Creator Marketplace typically require 100,000+ followers though requirements vary by campaign.'
  },
  {
    question: 'Can I lose monetization eligibility after being approved?',
    answer: 'Yes. Monetization can be revoked if you violate Community Guidelines, engage in spam or artificial engagement, fall below minimum requirements (followers/views), receive copyright strikes, or engage in prohibited content. LIVE gift access is commonly suspended for policy violations. Maintain consistent content quality, authentic engagement, and guideline compliance to protect monetization status.'
  },
  {
    question: 'What counts as "authentic engagement" for eligibility?',
    answer: 'Authentic engagement means real users genuinely interacting with your content through organic likes, comments, shares, and watch time. TikTok\'s algorithm detects patterns from engagement pods, bot services, and follow-for-follow schemes. Purchased engagement often comes from fake accounts with no profile pictures or activity. Focus on creating valuable content that naturally drives comments, shares, and completion rates rather than artificially inflating metrics.'
  },
  {
    question: 'How do I check my eligibility status in the TikTok app?',
    answer: 'Navigate to Profile > Menu (three lines) > Creator Tools > Creator Fund (or Creator Rewards) to see if you\'re eligible or how close you are to requirements. For LIVE Gifts, go to Profile > Menu > Settings and privacy > Creator tools > LIVE Gifts. TikTok displays your current follower count, video views (30-day rolling window), and eligibility status. If you meet requirements but don\'t see the option, ensure your account age, location, and age verification are correct.'
  },
  {
    question: 'What\'s the difference between Creator Fund and Creator Rewards eligibility?',
    answer: 'Creator Fund has specific numeric requirements: 10K+ followers and 100K+ views in 30 days. Creator Rewards requires the same baseline but is currently invitation-only in most regions. TikTok invites creators who consistently produce high-quality, original videos over 1 minute with strong completion rates. You can\'t apply directly for Creator Rewards; you must meet Creator Fund requirements and wait for TikTok to invite you based on content quality and engagement patterns.'
  },
  {
    question: 'Are there regional differences in eligibility requirements?',
    answer: 'Yes. Creator Fund is only available in select countries (US, UK, Germany, France, Spain, Italy, and a few others). LIVE Gifts minimum age varies: 18+ in most regions, but some allow 16+ with restrictions. TikTok Shop availability and requirements vary significantly by market. UK creators may have different thresholds than US creators. Check TikTok\'s official country-specific requirements as they change frequently based on regulatory environments and market maturity.'
  },
  {
    question: 'Can I apply for monetization with a brand new account?',
    answer: 'No. While TikTok doesn\'t explicitly publish a minimum account age for Creator Fund, accounts typically need 30-60 days of history before approval. LIVE Gifts explicitly requires 30+ days account age for monetization. New accounts also struggle to accumulate 100,000 views in 30 days. Focus on building authentic engagement and consistent posting for 2-3 months before applying. Rushed applications from brand new accounts with suspicious rapid growth trigger fraud detection systems.'
  },
  {
    question: 'What should I do if I\'m stuck just below eligibility thresholds?',
    answer: 'Focus on content optimization rather than gaming metrics. Use trending sounds, optimize posting times (check TikTok Analytics for when your audience is active), create videos over 1 minute for Creator Rewards potential, engage with comments to boost engagement rates, and post consistently (1-3 times daily). Analyze your top-performing videos and replicate successful formats. Avoid buying followers or engagement as this leads to rejection. Small creators often see breakthrough growth when one video goes viral, so focus on quality and volume.'
  },
  {
    question: 'How long does the 100,000 views requirement window last?',
    answer: 'The 100,000 video views requirement is a rolling 30-day window, not a one-time achievement. If you got 150,000 views last month but only 50,000 this month, you\'re no longer eligible for Creator Fund. TikTok recalculates daily, so you need sustained performance. This is why some creators lose monetization access if posting frequency drops or content performance declines. Use the Eligibility Checker regularly to monitor your 30-day rolling view count and ensure you maintain thresholds.'
  }
];

export default function EligibilityCalculatorPage() {
  const [followers, setFollowers] = useState(10000);
  const [videoViews, setVideoViews] = useState(100000);
  const [age, setAge] = useState(18);
  const [accountAge, setAccountAge] = useState(30);
  const [isUSBased, setIsUSBased] = useState(true);

  const programs = [
    {
      name: 'Creator Fund',
      requirements: [
        { label: '10,000+ followers', met: followers >= 10000 },
        { label: '100,000+ video views (last 30 days)', met: videoViews >= 100000 },
        { label: '18+ years old', met: age >= 18 },
        { label: 'Eligible country', met: isUSBased },
      ],
    },
    {
      name: 'Creator Rewards Program',
      requirements: [
        { label: '10,000+ followers', met: followers >= 10000 },
        { label: '100,000+ video views (last 30 days)', met: videoViews >= 100000 },
        { label: '18+ years old', met: age >= 18 },
        { label: 'US-based creator', met: isUSBased },
      ],
    },
    {
      name: 'TikTok LIVE',
      requirements: [
        { label: '1,000+ followers', met: followers >= 1000 },
        { label: '18+ years old (for gifts)', met: age >= 18 },
        { label: '30+ days account age', met: accountAge >= 30 },
      ],
    },
    {
      name: 'TikTok Shop Affiliate',
      requirements: [
        { label: '1,000+ followers', met: followers >= 1000 },
        { label: '18+ years old', met: age >= 18 },
        { label: 'Account in good standing', met: true },
      ],
    },
    {
      name: 'Series (Paid Content)',
      requirements: [
        { label: '10,000+ followers', met: followers >= 10000 },
        { label: '1,000+ video views (last 30 days)', met: videoViews >= 1000 },
        { label: '18+ years old', met: age >= 18 },
        { label: '3+ public videos', met: true },
      ],
    },
  ];

  const isEligible = (requirements: { met: boolean }[]) =>
    requirements.every((r) => r.met);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-50 py-8">
        <div className="container-custom">
        <Breadcrumb items={[
          { label: 'Calculators', href: '/calculators/' },
          { label: 'Utility Tools', href: '/calculators/utility-tools/' },
          { label: 'Eligibility Checker', href: '/calculators/utility-tools/eligibility/' }
        ]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500 text-white mb-6">
            <CheckCircle size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Monetization Eligibility</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Check if you qualify for TikTok's monetization programs including Creator Fund, LIVE, and Shop. This eligibility checker evaluates your account against official TikTok requirements for all monetization features. Enter your follower count, video views, age, and location to see which programs you can access. Understand exactly what's needed to unlock Creator Fund, LIVE Gifts, Shop Affiliate, Series, and Creator Rewards. Get instant feedback on your eligibility status and know what milestones to reach next for monetization opportunities.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <Card className="p-6">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-6">Your Account Stats</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">
                  <Users className="inline w-4 h-4 mr-1" /> Followers
                </label>
                <input
                  type="number"
                  min="0"
                  value={followers}
                  onChange={(e) => setFollowers(parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">
                  <Video className="inline w-4 h-4 mr-1" /> Video Views (Last 30 Days)
                </label>
                <input
                  type="number"
                  min="0"
                  value={videoViews}
                  onChange={(e) => setVideoViews(parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" /> Your Age
                </label>
                <input
                  type="number"
                  min="13"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-neutral-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" /> Account Age (Days)
                </label>
                <input
                  type="number"
                  min="0"
                  value={accountAge}
                  onChange={(e) => setAccountAge(parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isUSBased}
                    onChange={(e) => setIsUSBased(e.target.checked)}
                    className="w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-body-sm text-neutral-700">I'm based in an eligible country (US, UK, Germany, France, etc.)</span>
                </label>
              </div>
            </div>
          </Card>

          <InputsExplained
            inputs={[
              { name: 'Follower Count', description: 'Your current TikTok followers', example: '10,000', required: true },
              { name: 'Account Age', description: 'How long your account has existed', example: '30 days' },
              { name: 'Video Count', description: 'Number of public videos', example: '15' },
            ]}
            note="Most monetization features require 10K+ followers, 18+ age, and compliance with Community Guidelines."
          />
        </div>

        {/* Eligibility Requirements Comparison Table */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8">
            <h2 className="text-heading-md font-semibold text-neutral-900 mb-6">Eligibility Requirements Comparison</h2>
            <p className="text-body-md text-neutral-700 mb-6">Each TikTok monetization program has different thresholds. This comparison shows exactly what you need to unlock each revenue stream and the earning potential of each program.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Program</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Followers</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Views (30 Days)</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Other Requirements</th>
                    <th className="text-left p-4 text-body-md font-semibold text-neutral-900 border-b-2 border-neutral-300">Earning Potential</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Creator Rewards</td>
                    <td className="p-4 text-body-md text-neutral-700">10,000+</td>
                    <td className="p-4 text-body-md text-neutral-700">100,000+</td>
                    <td className="p-4 text-body-sm text-neutral-700">18+, invitation only, 1+ min videos</td>
                    <td className="p-4 text-body-sm text-green-700 font-semibold">High ($0.50-$1.00+ RPM)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">LIVE Gifts</td>
                    <td className="p-4 text-body-md text-neutral-700">1,000+</td>
                    <td className="p-4 text-body-md text-neutral-700">No minimum</td>
                    <td className="p-4 text-body-sm text-neutral-700">18+, 30+ days account age</td>
                    <td className="p-4 text-body-sm text-orange-700 font-semibold">Variable ($10-$1,000+ per LIVE)</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">TikTok Shop</td>
                    <td className="p-4 text-body-md text-neutral-700">No minimum</td>
                    <td className="p-4 text-body-md text-neutral-700">No minimum</td>
                    <td className="p-4 text-body-sm text-neutral-700">18+, region availability, approval</td>
                    <td className="p-4 text-body-sm text-green-700 font-semibold">Medium-High (1-20% commission)</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Creator Fund</td>
                    <td className="p-4 text-body-md text-neutral-700">10,000+</td>
                    <td className="p-4 text-body-md text-neutral-700">100,000+</td>
                    <td className="p-4 text-body-sm text-neutral-700">18+, eligible country</td>
                    <td className="p-4 text-body-sm text-red-700 font-semibold">Low ($0.02-$0.04 RPM)</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 text-body-md text-neutral-900 font-medium">Series</td>
                    <td className="p-4 text-body-md text-neutral-700">10,000+</td>
                    <td className="p-4 text-body-md text-neutral-700">1,000+</td>
                    <td className="p-4 text-body-sm text-neutral-700">18+, 3+ public videos</td>
                    <td className="p-4 text-body-sm text-orange-700 font-semibold">Variable (set your own price)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-body-sm text-neutral-800">
                <strong>Strategy Tip:</strong> Start with TikTok Shop (no minimums) and LIVE Gifts (1K followers) while working toward Creator Rewards eligibility (10K followers + invitation). Diversifying across multiple programs maximizes income stability. Use our <Link href="/calculators/earnings-revenue/money/" className="text-primary-600 hover:text-primary-700 underline">Money Calculator</Link> to estimate total earnings potential across all programs.
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 text-center">Your Eligibility Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const eligible = isEligible(program.requirements);
              return (
                <Card key={program.name} className={`p-6 border-2 ${eligible ? 'border-success-300 bg-success-50' : 'border-neutral-200'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-heading-sm font-semibold text-neutral-900">{program.name}</h3>
                    {eligible ? (
                      <CheckCircle className="w-6 h-6 text-success-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-neutral-400" />
                    )}
                  </div>
                  <ul className="space-y-2">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-body-sm">
                        {req.met ? (
                          <CheckCircle className="w-4 h-4 text-success-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-error-500 flex-shrink-0" />
                        )}
                        <span className={req.met ? 'text-neutral-700' : 'text-error-600'}>{req.label}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-4 p-2 rounded text-center text-body-sm font-medium ${eligible ? 'bg-success-100 text-success-700' : 'bg-neutral-100 text-neutral-600'}`}>
                    {eligible ? 'Eligible!' : 'Not Yet Eligible'}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Fast-Track Your Eligibility */}
          <div className="mt-12 mb-12">
            <Card className="p-8">
              <h2 className="text-heading-md font-semibold text-neutral-900 mb-6 text-center">Fast-Track Your Eligibility</h2>
              <p className="text-body-md text-neutral-700 mb-8 text-center max-w-2xl mx-auto">
                Strategic tactics to accelerate your path to TikTok monetization eligibility. Focus on these high-impact strategies to reach thresholds faster.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-primary-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      <Target size={24} />
                    </div>
                    <div>
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Optimize for Virality</h3>
                      <p className="text-body-md text-neutral-700">
                        Focus on trending sounds, hooks in the first 3 seconds, and content formats proven to perform in your niche. One viral video can deliver 100K+ views instantly, meeting Creator Fund requirements in a single post. Analyze your top-performing content and replicate successful patterns. Use our <Link href="/calculators/engagement-rate/" className="text-primary-600 hover:text-primary-700 underline">Engagement Rate Calculator</Link> to track performance metrics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Post Consistently</h3>
                      <p className="text-body-md text-neutral-700">
                        Upload 1-3 times daily to maximize algorithmic reach. Consistent posting signals TikTok that you're an active creator, increasing distribution potential. Even if individual videos get modest views (5K-10K), posting 3x daily generates 300K-900K monthly views. Check TikTok Analytics to identify when your audience is most active and schedule posts accordingly for maximum initial engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Engage With Your Community</h3>
                      <p className="text-body-md text-neutral-700">
                        Reply to comments within the first hour of posting to boost engagement rate. Create response videos to popular comments to drive additional views. Higher engagement signals quality content to TikTok's algorithm, increasing distribution. Engaged followers are more likely to watch multiple videos, compounding your 30-day view totals. Use our <Link href="/calculators/engagement-influence/" className="text-primary-600 hover:text-primary-700 underline">Influence Calculator</Link> to measure community strength.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">Maintain Account Health</h3>
                      <p className="text-body-md text-neutral-700">
                        Avoid Community Guidelines violations, copyright strikes, and artificial engagement. Even if you hit follower/view thresholds, violations disqualify you. Never buy followers or use engagement pods as TikTok's fraud detection is sophisticated. Verify your account age is 30+ days before applying for LIVE monetization. Ensure your location, age, and tax information are accurate to prevent application rejection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Common Rejection Reasons */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <AlertCircle size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Common Rejection Reasons & How to Avoid Them</h2>
                  <p className="text-body-md text-neutral-700 mb-6">
                    Meeting follower and view thresholds doesn't guarantee approval. TikTok rejects monetization applications for these common reasons:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-white rounded-lg border border-red-200">
                      <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        Fake Followers or Engagement
                      </h3>
                      <p className="text-body-sm text-neutral-700 mb-2">
                        Purchased followers, bot services, and engagement pods are easily detected by TikTok's algorithm. Accounts with 10K followers but 200 average views clearly show inauthentic growth.
                      </p>
                      <p className="text-body-sm text-green-700 font-medium">
                        Solution: Focus on organic growth through quality content. Authentic engagement rates (3-10%) are more valuable than inflated follower counts.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-lg border border-red-200">
                      <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        Reposted or Stolen Content
                      </h3>
                      <p className="text-body-sm text-neutral-700 mb-2">
                        Downloading videos from other platforms (YouTube, Instagram) and reuploading to TikTok violates Community Guidelines. Watermarks from other platforms are red flags.
                      </p>
                      <p className="text-body-sm text-green-700 font-medium">
                        Solution: Create 100% original content. Film your own videos, use royalty-free music, and add unique value rather than reposting.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-lg border border-red-200">
                      <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        Community Guidelines Violations
                      </h3>
                      <p className="text-body-sm text-neutral-700 mb-2">
                        Recent violations (hate speech, harassment, dangerous content, spam) disqualify you even if violations were months ago. Strikes remain on your account.
                      </p>
                      <p className="text-body-sm text-green-700 font-medium">
                        Solution: Review Community Guidelines thoroughly. If you have violations, wait 90+ days, post guideline-compliant content consistently, then reapply.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-lg border border-red-200">
                      <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                        <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        Inaccurate Account Information
                      </h3>
                      <p className="text-body-sm text-neutral-700 mb-2">
                        Mismatched location (VPN use to fake eligible country), wrong birthdate, or incorrect tax information causes automatic rejection. TikTok verifies account details.
                      </p>
                      <p className="text-body-sm text-green-700 font-medium">
                        Solution: Ensure your profile location, age, and tax forms (W-9 for US creators) are accurate. Don't use VPNs to bypass regional restrictions.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
                    <p className="text-body-sm text-neutral-800">
                      <strong>Reapplication Timeline:</strong> If rejected, wait 30 days before reapplying. Use this time to fix issues, remove violative content, and build genuine engagement. Repeated rapid applications without addressing root causes lead to permanent disqualification. Check our <Link href="/guides/how-to-price-brand-deals/" className="text-primary-600 hover:text-primary-700 underline">Brand Deal Pricing Guide</Link> for alternative monetization while building eligibility.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="p-8 mb-12">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculators/earnings-revenue/creator-fund/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Estimate monthly earnings from the Creator Fund</p>
                </Link>
                <Link href="/calculators/earnings-revenue/live-earnings/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">LIVE Earnings Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Calculate potential earnings from TikTok LIVE streams</p>
                </Link>
                <Link href="/calculators/utility-tools/payout/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Payout Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Calculate net earnings after platform fees</p>
                </Link>
                <Link href="/guides/how-to-join-creator-fund-complete/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Join Creator Fund Guide</h4>
                  <p className="text-body-sm text-neutral-700">Complete guide to qualifying for TikTok monetization</p>
                </Link>
              </div>
            </Card>

            <FAQSection
              pageName="Eligibility Checker"
              faqs={faqData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
