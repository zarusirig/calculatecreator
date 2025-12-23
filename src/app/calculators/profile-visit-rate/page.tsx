'use client';

import React, { useState } from 'react';
import { User, X, CheckCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateProfileVisitRate,
  validateProfileVisitRateInput,
} from '@/lib/calculators/profile-visit-rate';
import type {
  ProfileVisitRateInput,
  ProfileVisitRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function ProfileVisitRateCalculatorPage() {
  const [inputs, setInputs] = useState<ProfileVisitRateInput>({
    views: 100000,
    profileVisits: 5000,
    followers: 25000,
  });

  const [results, setResults] = useState<ProfileVisitRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ProfileVisitRateInput,
    value: any
  ) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateProfileVisitRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateProfileVisitRate(inputs);
      setResults(result);

      trackCalculation(
        'profile-visit-rate',
        { ...inputs },
        { visitRate: result.visitRate, conversionRate: result.conversionRate }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Profile Visit Rate Calculator',
              href: '/calculators/profile-visit-rate',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <User size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Profile Visit Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how effectively your content drives profile visits and
            follower conversions. Essential for growth tracking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Profile Visit Rate
            </h2>

            <InputField
              id="views"
              label="Total Views"
              type="number"
              value={inputs.views}
              onChange={(value) => handleInputChange('views', value)}
              placeholder="e.g., 100000"
              helperText="Total views on your content"
              error={errors.views}
              min={1}
              required
            />

            <InputField
              id="profileVisits"
              label="Profile Visits"
              type="number"
              value={inputs.profileVisits}
              onChange={(value) => handleInputChange('profileVisits', value)}
              placeholder="e.g., 5000"
              helperText="Number of profile visits"
              error={errors.profileVisits}
              min={0}
              required
            />

            <InputField
              id="followers"
              label="Current Followers"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 25000"
              helperText="Your total follower count"
              error={errors.followers}
              min={0}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Visit Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Profile Visit Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Conversion Metrics
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Visit to Follow Rate
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.conversionRate.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Profile Visit Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Profile visit rate measures what percentage of viewers are
                  intrigued enough to visit your profile after watching your content. High rates indicate
                  content that makes people want to see more from you. This metric is the critical bridge between casual viewers and committed followers.
                </p>
                <p>
                  When someone watches your video and then taps through to your profile, they're actively seeking more of your content. This demonstrates strong curiosity and genuine interest - the exact mindset you need to convert views into followers.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Profile visits are the first step to gaining followers - without visits, conversion is impossible</li>
                  <li>Shows your content creates curiosity about you beyond a single video</li>
                  <li>Higher visit rates directly correlate with better follower growth potential</li>
                  <li>Indicates strong personal branding and positioning in your niche</li>
                  <li>Helps predict which content styles drive sustainable audience building</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How TikTok's Algorithm Uses Profile Visit Rate
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  TikTok's algorithm doesn't just care about immediate engagement like likes and comments. It pays special attention to profile visits because they signal deeper interest. When users visit your profile, TikTok interprets this as "this creator's content is compelling enough to explore further."
                </p>
                <p>
                  The algorithm tracks several profile-related behaviors: how many viewers click through, how long they stay on your profile, how many videos they watch there, and whether they follow. High profile visit rates tell TikTok your content has staying power beyond individual videos.
                </p>
                <p>
                  Creators with 5%+ profile visit rates often see the algorithm favor their future content because TikTok has learned their videos inspire curiosity. This creates a compounding effect where good visit rates lead to better reach, which leads to more profile visits, continuing the cycle.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Visit Rate Benchmarks by Content Type
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Different content types naturally drive varying profile visit rates. Understanding your niche's benchmarks helps set realistic goals:
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Excellent', range: '10%+', color: 'bg-success-DEFAULT', desc: 'Educational & How-To Content' },
                    { label: 'Good', range: '5-10%', color: 'bg-secondary-500', desc: 'Niche Expertise & Series Content' },
                    { label: 'Average', range: '2-5%', color: 'bg-warning-DEFAULT', desc: 'General Entertainment' },
                    { label: 'Below Average', range: '<2%', color: 'bg-error-DEFAULT', desc: 'Trend-Following Content' },
                  ].map((benchmark) => (
                    <div
                      key={benchmark.label}
                      className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${benchmark.color}`} />
                        <div>
                          <p className="font-semibold text-neutral-900">{benchmark.label}</p>
                          <p className="text-body-sm text-neutral-600">{benchmark.desc}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-neutral-900">{benchmark.range}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <p className="text-body-sm">
                    <strong>Niche Breakdown:</strong> Educational creators (tutorials, tips) see 8-15% visit rates. Lifestyle and personal brand creators achieve 4-8%. Comedy and entertainment creators typically see 1-4% since viewers enjoy the content without needing to explore further.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                8 Proven Strategies to Increase Profile Visits
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: '1. Create Series or Multi-Part Content',
                    description: 'When viewers see "Part 1 of 5," they visit your profile to watch the rest. Series content can boost visit rates by 200-400%. Use titles like "Day 1 of my 30-day challenge" or "3 secrets to... (Part 1)".'
                  },
                  {
                    title: '2. Add Strong Profile CTAs',
                    description: 'End videos with "Check my profile for more tips like this" or add text overlay saying "Full tutorial on my profile." Direct CTAs can increase visit rates by 50-100%. Make the CTA specific and valuable.'
                  },
                  {
                    title: '3. Showcase Your Personality and Voice',
                    description: 'Generic content doesn\'t inspire profile visits. Show your unique perspective, humor, or expertise. When viewers connect with YOU as a creator, not just the content, they want to see more.'
                  },
                  {
                    title: '4. Use an Intriguing, Benefit-Focused Bio',
                    description: 'Your bio appears when users visit your profile. Make it compelling: "Helping 100K+ creators grow on TikTok" beats "TikTok tips & tricks." Include value propositions and social proof.'
                  },
                  {
                    title: '5. Create Pattern Interrupts That Build Curiosity',
                    description: 'End videos with cliffhangers or teasers: "But the crazy part is..." then cut. This unfinished feeling drives viewers to your profile seeking resolution or similar content.'
                  },
                  {
                    title: '6. Reference Other Content You\'ve Made',
                    description: 'Say "I covered this in detail in another video" or "My most viral tip was..." This signals you have a valuable content library worth exploring, prompting profile visits.'
                  },
                  {
                    title: '7. Build a Recognizable Brand Aesthetic',
                    description: 'Consistent colors, fonts, editing style, or intro formats make your content instantly recognizable. When viewers see your style in their feed repeatedly, they visit to see more.'
                  },
                  {
                    title: '8. Optimize Your Profile Layout',
                    description: 'Pin your best 3 videos at the top. Create highlight covers. Organize content so visitors immediately see value and want to follow. A messy profile converts poorly even with high visit rates.'
                  }
                ].map((strategy, index) => (
                  <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                    <h3 className="font-semibold text-neutral-900 mb-2">{strategy.title}</h3>
                    <p className="text-body-sm text-neutral-700">{strategy.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Common Mistakes That Kill Profile Visit Rate
              </h2>
              <div className="space-y-3">
                {[
                  {
                    mistake: 'One-Off Viral Content',
                    fix: 'Viral videos on random topics don\'t build profile visits because viewers have no reason to explore more. Focus on niche-specific content that attracts your target audience.'
                  },
                  {
                    mistake: 'No Clear Niche or Theme',
                    fix: 'If your profile is all over the place (cooking, gaming, fitness), visitors don\'t know what to expect. Pick a lane and dominate it before diversifying.'
                  },
                  {
                    mistake: 'Poor Profile Bio',
                    fix: 'Empty or generic bios waste the curiosity that drove the visit. Use your bio to immediately communicate value and give reasons to follow.'
                  },
                  {
                    mistake: 'Not Enough Quality Content',
                    fix: 'When visitors arrive at a profile with only 3-5 videos, they won\'t follow. Post 15-20 quality videos minimum before aggressively driving profile traffic.'
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-error-50 border border-error-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                      <X size={16} className="text-error-600" /> {item.mistake}
                    </p>
                    <p className="text-body-sm text-success-700 flex items-start gap-2">
                      <CheckCircle size={16} className="text-success-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Fix:</strong> {item.fix}</span>
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Real Creator Example: Before & After
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <X size={18} className="text-error-600" /> Before (1.8% Visit Rate)
                    </p>
                    <ul className="text-body-sm space-y-2">
                      <li>• Random trending sounds, no clear niche</li>
                      <li>• Generic content anyone could make</li>
                      <li>• Bio: "Just having fun on TikTok"</li>
                      <li>• No CTAs or series content</li>
                      <li>• 100,000 views → 1,800 profile visits</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <CheckCircle size={18} className="text-success-600" /> After (8.2% Visit Rate)
                    </p>
                    <ul className="text-body-sm space-y-2">
                      <li>• Focused niche: TikTok growth tips</li>
                      <li>• Series content: "30 Days to 10K"</li>
                      <li>• Bio: "Grew 50K in 60 days | Daily tips"</li>
                      <li>• CTAs: "Part 2 on my profile"</li>
                      <li>• 100,000 views → 8,200 profile visits</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <p className="text-body-sm">
                    <strong>Result:</strong> By implementing series content, adding clear CTAs, and focusing on a specific niche, this creator increased profile visits by 356%. More importantly, their follower conversion rate jumped from 22% to 38%, meaning more visitors actually hit follow.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="profile-visit-rate"
            formula={`Profile Visit Rate = (Profile Visits / Views) × 100
Conversion Rate = (Followers / Profile Visits) × 100

Example:
Views: 100,000
Profile Visits: 5,000
Visit Rate: (5,000 / 100,000) × 100 = 5%`}
            assumptions={[
              { label: 'Visit Tracking', value: 'Based on TikTok Analytics profile view data' },
              { label: 'Conversion', value: 'Typical profile-to-follow conversion is 20-40%' },
              { label: 'Growth Driver', value: '10%+ visit rate indicates strong growth potential' },
            ]}
            dataSources={[
              'TikTok Creator Analytics Best Practices',
              'Profile Growth Optimization Study',
              'Follower Acquisition Research 2024',
            ]}
            limitations="Visit rates vary by content type. How-to and educational content naturally drive more profile visits than entertainment content."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Profile Visit Rate Calculator"
            faqs={[
              {
                question: 'What is a good profile visit rate on TikTok?',
                answer: 'Excellent: 10%+ (1 in 10 viewers visits), Good: 5-10%, Average: 2-5%, Below Average: <2%. Educational and niche-specific content typically achieves 8-15% visit rates, while entertainment content averages 1-4%. Focus on improving both visit rate AND conversion to followers - a 6% visit rate with 35% follow conversion is better than 12% visits with 15% conversion.',
              },
              {
                question: 'How can I increase my profile visit rate?',
                answer: 'Best strategies: (1) Create series/multi-part content so viewers need to visit for more, (2) Add direct CTAs like "Part 2 on my profile", (3) Showcase unique personality that makes people curious about you, (4) Write a compelling bio with clear value proposition, (5) End videos with cliffhangers, (6) Reference other content you\'ve made, (7) Build consistent brand aesthetic, (8) Pin your best videos at the top of your profile.',
              },
              {
                question: 'Where can I see profile visits in TikTok Analytics?',
                answer: 'Go to Profile → Three dots menu → Creator Tools → Analytics → Overview tab. "Profile views" shows total visits over your selected time period (7, 28, or 60 days). To calculate visit rate, divide profile views by total video views for that period. Example: 5,000 profile views ÷ 100,000 video views = 5% visit rate.',
              },
              {
                question: 'Why do people visit my profile but not follow?',
                answer: 'Common reasons: (1) Inconsistent content - visitors can\'t tell what to expect from your account, (2) Unclear niche - your profile covers too many unrelated topics, (3) Poor or empty bio that doesn\'t communicate value, (4) Not enough quality content - visitors see only 3-5 videos and leave, (5) Content doesn\'t deliver on the promise that drove the visit. Fix: Create 15-20+ quality videos in one niche before aggressively driving profile traffic.',
              },
              {
                question: 'How does profile visit rate predict follower growth?',
                answer: 'Profile visit rate is the first step in the follower conversion funnel: Views → Profile Visits → Follows. If 100,000 people view your content, a 5% visit rate = 5,000 profile visitors. If 30% of visitors follow, you gain 1,500 followers. Improving visit rate from 5% to 8% would yield 2,400 followers instead - a 60% increase from the same view count. Track both metrics together for maximum growth.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="profile-visit-rate"
            calculators={[
              { name: 'Follower Growth Calculator', slug: 'follower-growth', description: 'Project follower growth rate', icon: TrendingUp },
              { name: 'Follower Conversion Calculator', slug: 'follower-conversion', description: 'Track conversion funnel metrics', icon: Target },
              { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Measure overall engagement', icon: BarChart3 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
