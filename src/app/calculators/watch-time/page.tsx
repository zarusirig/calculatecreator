import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { WatchTimeCalculatorWidget } from '@/components/calculators/watch-time/CalculatorWidget';

export default function WatchTimeCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Watch Time Calculator', href: '/calculators/watch-time' },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Clock size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Watch Time Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your video retention rate and total watch hours. Watch time
            is the most important metric for TikTok's algorithm.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <WatchTimeCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Watch Time?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Watch time measures how long viewers spend watching your content.
                  It's the single most important metric for TikTok's algorithm.
                </p>
                <p><strong>Why it matters:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Primary signal for For You Page distribution</li>
                  <li>High retention = quality content in TikTok's eyes</li>
                  <li>Directly impacts all other engagement metrics</li>
                  <li>Determines viral potential</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Retention Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Excellent', range: '80%+', color: 'bg-success-DEFAULT', description: 'Viral-worthy content' },
                  { label: 'Good', range: '60-80%', color: 'bg-secondary-500', description: 'Strong performance' },
                  { label: 'Average', range: '40-60%', color: 'bg-warning-DEFAULT', description: 'Room to optimize' },
                  { label: 'Below Average', range: '<40%', color: 'bg-error-DEFAULT', description: 'Hook or pacing issues' },
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

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Why Watch Time is King
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>TikTok's algorithm prioritizes watch time above all other metrics:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Algorithmic weight:</strong> Watch time is weighted 3-5x more than likes</li>
                  <li><strong>Quality signal:</strong> Longer watch = better content in TikTok's view</li>
                  <li><strong>Compound effect:</strong> More watch time → more reach → more watch time</li>
                  <li><strong>Monetization:</strong> Higher watch time = more ad revenue potential</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              7 Strategies to Maximize Watch Time
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Hook in First 1-3 Seconds', description: 'Start with your most compelling moment. No intro, no buildup.' },
                { title: 'Use Pattern Interrupts', description: 'Change visuals, zoom, or add text every 3-5 seconds to reset attention.' },
                { title: 'Create Curiosity Loops', description: 'Tease what\'s coming with "but wait" moments throughout the video.' },
                { title: 'Optimize Video Length', description: 'Match length to content type. Don\'t pad for time.' },
                { title: 'Add Text Overlays', description: 'Visual text keeps viewers engaged and reading.' },
                { title: 'End with Payoff', description: 'Put your best content at the end to maximize completion.' },
                { title: 'Create Loop-Worthy Content', description: 'Design endings that make viewers want to rewatch.' },
              ].map((strategy, index) => (
                <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">{index + 1}. {strategy.title}</h3>
                  <p className="text-body-sm text-neutral-700">{strategy.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Common Watch Time Killers
            </h2>
            <div className="space-y-3">
              {[
                { issue: 'Slow Introductions', fix: 'Cut the first 2-3 seconds. Start in the action.' },
                { issue: 'Low Audio Quality', fix: 'Use external mics. Clear audio = longer watch time.' },
                { issue: 'Boring Visuals', fix: 'Add movement, text, and visual variety every few seconds.' },
                { issue: 'Rambling Content', fix: 'Script key points. Respect viewer time.' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-warning-DEFAULT" /> {item.issue}
                  </p>
                  <p className="text-body-sm text-success-700"><strong>Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </Card>

          <MethodologySection
            calculatorName="watch-time"
            formula={`Retention Rate = (Average Watch Time / Video Duration) × 100
Total Watch Hours = (Views × Avg Watch Time) / 3600

Example:
Video: 30 seconds, Avg Watch: 22 seconds, Views: 50,000
Retention: (22/30) × 100 = 73.3%
Watch Hours: (50,000 × 22) / 3600 = 305.6 hours`}
            assumptions={[
              { label: 'Algorithm Weight', value: 'Watch time is the #1 signal for TikTok distribution' },
              { label: 'Benchmarks', value: '60%+ retention indicates quality content' },
              { label: 'Rewatch Bonus', value: 'Loops can push retention over 100%' },
            ]}
            dataSources={['TikTok Creator Analytics', 'Algorithm Research 2024']}
            limitations="Retention benchmarks vary by video length. Shorter videos naturally have higher rates."
            lastUpdated="December 5, 2025"
          />

          <FAQSection
            pageName="Watch Time Calculator"
            faqs={[
              {
                question: 'What is good watch time on TikTok?',
                answer: 'For 30-second videos, 20+ seconds (66%+) is good. For 60-second videos, 35+ seconds (58%+) is good. Focus on retention rate rather than absolute time for comparison.',
              },
              {
                question: 'How does watch time affect the algorithm?',
                answer: 'Watch time is TikTok\'s primary signal. Videos with high retention get pushed to larger audiences. Low retention (under 40%) limits distribution significantly.',
              },
              {
                question: 'Should I make shorter or longer videos?',
                answer: 'Match length to content. Short (15-30s) for entertainment. Medium (30-60s) for tips. Long (1-3min) for tutorials. High retention on any length beats forced padding.',
              },
              {
                question: 'Where can I see watch time in TikTok Analytics?',
                answer: 'Go to Analytics → Content → Select video → "Average watch time" shows seconds. Divide by video length for retention percentage.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="watch-time"
            calculators={[
              { name: 'Completion Rate Calculator', slug: 'completion-rate', description: 'Detailed retention analysis', icon: 'CheckCircle' },
              { name: 'Viral Potential Calculator', slug: 'viral-potential', description: 'Watch time impacts viral score', icon: 'Rocket' },
              { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Track overall engagement', icon: 'BarChart3' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
