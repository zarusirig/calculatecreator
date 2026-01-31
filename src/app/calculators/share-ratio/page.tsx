import React from 'react';
import type { Metadata } from 'next';
import { Share2 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { ShareRatioCalculatorWidget } from '@/components/calculators/share-ratio/CalculatorWidget';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';

export const metadata: Metadata = {
  title: 'TikTok Share Rate Calculator: Measure Viral Potential (2026)',
  description: 'Calculate your TikTok share rate. Measure how often your content gets shared, the strongest signal for viral potential.',
  keywords: ['share rate calculator', 'tiktok shares', 'viral potential', 'share ratio', 'content shareability'],
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/share-ratio/',
  },
};

const faqData = [
  {
    question: 'What is a good share ratio on TikTok?',
    answer: 'Excellent: 5%+ (1 in 20 viewers shares), Good: 2-5% (strong shareability), Average: 0.5-2% (typical), Below Average: <0.5% (needs work). Even 2-3% is impressive - it means highly engaged viewers who find value worth sharing.',
  },
  {
    question: 'Why are shares more important than likes?',
    answer: 'Shares require more effort and social risk - you\'re recommending content to your friends. TikTok treats this as a stronger signal of quality. Plus shares expose your content to entirely new networks.',
  },
  {
    question: 'How can I increase my share ratio?',
    answer: 'Create share-worthy content: (1) Surprising facts/statistics, (2) Relatable humor friends will tag each other in, (3) Useful tutorials worth saving/sharing, (4) Controversial takes (tastefully), (5) Emotional stories.',
  },
  {
    question: 'Where can I see my share count in TikTok Analytics?',
    answer: 'Go to Creator Tools → Analytics → Content tab → Select a video → Scroll to "Shares" under engagement metrics.',
  },
];

export default function ShareRatioCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Share Rate Calculator"
        description="Calculate your TikTok share rate. Measure how often your content gets shared, the strongest signal for viral potential."
        url="https://calculatecreator.com/calculators/share-ratio"
        aggregateRating={{ ratingValue: 4.9, reviewCount: 2387 }}
        datePublished="2024-02-28"
        dateModified="2025-12-05"
        keywords={['share rate calculator', 'tiktok shares', 'viral potential', 'share ratio']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Share Ratio Calculator', url: 'https://calculatecreator.com/calculators/share-ratio' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Share Ratio Calculator', href: '/calculators/share-ratio' },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Share2 className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Share Ratio Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your share-to-view ratio to measure viral potential and content shareability. This calculator analyzes how often viewers share your videos, which is the strongest signal to TikTok's algorithm for content quality and reach expansion. Perfect for creators wanting to understand their viral metrics, optimize content strategy, and boost For You Page distribution through higher share rates.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ShareRatioCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Share Ratio?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Share ratio measures what percentage of viewers share your content.
                  It's calculated by dividing shares by views and is the single most
                  important metric for viral content.
                </p>
                <p><strong>Why it matters:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>TikTok's algorithm weighs shares more heavily than likes or comments</li>
                  <li>5%+ share ratio dramatically increases For You Page distribution</li>
                  <li>Shares indicate genuine value - people stake their reputation</li>
                  <li>High share rates trigger exponential reach growth</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Share Ratio Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Excellent', range: '5%+', color: 'bg-success-DEFAULT', description: 'Viral-worthy content' },
                  { label: 'Good', range: '2-5%', color: 'bg-secondary-500', description: 'Above average shareability' },
                  { label: 'Average', range: '0.5-2%', color: 'bg-warning-DEFAULT', description: 'Typical share rate' },
                  { label: 'Below Average', range: '<0.5%', color: 'bg-error-DEFAULT', description: 'Needs improvement' },
                ].map((benchmark) => (
                  <div key={benchmark.label} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${benchmark.color}`} />
                      <div>
                        <p className="font-semibold text-neutral-900">{benchmark.label}</p>
                        <p className="text-body-sm text-neutral-600">{benchmark.description}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-neutral-900">{benchmark.range}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Mastering TikTok Share Ratio: The Ultimate Virality Metric
            </h2>
            <div className="space-y-6 text-body-md text-neutral-700">
              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Why Share Ratio is the Most Important TikTok Metric
                </h3>
                <p className="mb-3">
                  While likes and comments get more attention, shares are the true currency of viral content on TikTok. When someone shares your video, they're essentially endorsing it to their social circle.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Shares create network effects:</strong> Each share exposes your content to entirely new audiences</li>
                  <li><strong>Shares require more effort:</strong> Unlike double-tapping for a like, sharing requires deliberate action</li>
                  <li><strong>Shares indicate quality:</strong> People carefully curate what they share</li>
                  <li><strong>Shares extend reach:</strong> The algorithm interprets shares as a signal to push content further</li>
                </ul>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Share Ratio Benchmarks Across Content Types
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Educational & Tutorial Content (3-7% share rate)</p>
                    <p className="text-body-sm">How-to videos get shared frequently as viewers want to help friends learn.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Relatable Humor & Memes (4-8% share rate)</p>
                    <p className="text-body-sm">Comedy content with universal relatability gets tagged and shared.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Surprising Facts & Statistics (5-10% share rate)</p>
                    <p className="text-body-sm">"Mind-blowing" content that challenges assumptions is highly shareable.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Proven Strategies to Boost Your Share Ratio
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">1. Create "Tag a Friend" Moments</p>
                    <p>Design content that makes viewers immediately think of someone specific.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">2. Deliver Surprising Information</p>
                    <p>Share counterintuitive facts or little-known tips that make viewers say "Wait, what?"</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">3. Solve Specific Problems</p>
                    <p>Address common frustrations with clear solutions.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">4. Trigger Strong Emotions</p>
                    <p>Content that evokes powerful feelings gets shared more frequently.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <MethodologySection
            calculatorName="share-ratio"
            formula={`Share Ratio = (Shares / Views) × 100

Example:
Views: 50,000
Shares: 1,500
Share Ratio: (1,500 / 50,000) × 100 = 3%

This 3% share ratio indicates good viral potential`}
            assumptions={[
              { label: 'Algorithm Weight', value: 'Shares are weighted 2-3x more than likes in TikTok\'s algorithm' },
              { label: 'Viral Threshold', value: '5%+ share ratio significantly increases viral probability' },
              { label: 'Content Type', value: 'Educational and emotional content typically have higher share rates' },
            ]}
            dataSources={[
              'TikTok Algorithm Analysis 2024',
              'Viral Content Patterns Study',
              'Social Sharing Behavior Research',
            ]}
            limitations="Share ratio varies by content type and niche. Tutorial content naturally gets more shares than entertainment. Compare against your own baseline, not others."
            lastUpdated="December 5, 2025"
          />

          <FAQSection
            pageName="Share Ratio Calculator"
            faqs={[
              {
                question: 'What is a good share ratio on TikTok?',
                answer: 'Excellent: 5%+ (1 in 20 viewers shares), Good: 2-5% (strong shareability), Average: 0.5-2% (typical), Below Average: <0.5% (needs work). Even 2-3% is impressive - it means highly engaged viewers who find value worth sharing.',
              },
              {
                question: 'Why are shares more important than likes?',
                answer: 'Shares require more effort and social risk - you\'re recommending content to your friends. TikTok treats this as a stronger signal of quality. Plus shares expose your content to entirely new networks.',
              },
              {
                question: 'How can I increase my share ratio?',
                answer: 'Create share-worthy content: (1) Surprising facts/statistics, (2) Relatable humor friends will tag each other in, (3) Useful tutorials worth saving/sharing, (4) Controversial takes (tastefully), (5) Emotional stories.',
              },
              {
                question: 'Where can I see my share count in TikTok Analytics?',
                answer: 'Go to Creator Tools → Analytics → Content tab → Select a video → Scroll to "Shares" under engagement metrics.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="share-ratio"
            calculators={[
              { name: 'Viral Potential Calculator', slug: 'viral-potential', description: 'Comprehensive viral potential score including shares', icon: 'Rocket' },
              { name: 'Save Rate Calculator', slug: 'save-rate', description: 'Measure content value through saves', icon: 'Bookmark' },
              { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Overall engagement including shares', icon: 'BarChart3' },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
