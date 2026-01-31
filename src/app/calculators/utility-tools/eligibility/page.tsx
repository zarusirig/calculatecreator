'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertCircle, User, Users, Video, Clock } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

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
          { label: 'Calculators', href: '/calculators' },
          { label: 'Utility Tools', href: '/calculators/utility-tools' },
          { label: 'Eligibility Checker', href: '/calculators/utility-tools/eligibility' }
        ]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500 text-white mb-6">
            <CheckCircle size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Monetization Eligibility</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Check if you qualify for TikTok's monetization programs including Creator Fund, LIVE, and Shop. This eligibility checker evaluates your account against official TikTok requirements for all monetization features. Enter your follower count, video views, age, and location to see which programs you can access. Understand exactly what's needed to unlock Creator Fund, LIVE Gifts, Shop Affiliate, Series, and Creator Rewards. Get instant feedback on your eligibility status and know what milestones to reach next for monetization opportunities.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
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

          <div className="mt-12">
            <Card className="p-8 mb-12">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/calculators/earnings-revenue/creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Estimate monthly earnings from the Creator Fund</p>
                </Link>
                <Link href="/calculators/earnings-revenue/live-earnings" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">LIVE Earnings Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Calculate potential earnings from TikTok LIVE streams</p>
                </Link>
                <Link href="/calculators/utility-tools/payout" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                  <h4 className="font-semibold text-neutral-900 mb-2">Payout Calculator</h4>
                  <p className="text-body-sm text-neutral-700">Calculate net earnings after platform fees</p>
                </Link>
                <Link href="/guides/how-to-join-creator-fund-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
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
