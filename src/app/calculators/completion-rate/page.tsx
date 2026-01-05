import React from 'react';
import { CheckCircle, X, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CompletionRateCalculatorWidget } from '@/components/calculators/completion-rate/CalculatorWidget';

export default function CompletionRateCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Completion Rate Calculator', href: '/calculators/completion-rate' },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <CheckCircle size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Completion Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate what percentage of viewers watch your video to the end.
            Completion rate is critical for algorithmic success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <CompletionRateCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Completion Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Completion rate is the percentage of viewers who watch your video
                  all the way to the end. It's one of the strongest signals to
                  TikTok's algorithm that your content is engaging.
                </p>
                <p><strong>Why it matters:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>High completion rates trigger increased For You Page distribution</li>
                  <li>Videos over 90% completion often go viral</li>
                  <li>Shows your content delivers on its promise/hook</li>
                  <li>Shorter videos with high completion outperform longer videos</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Completion Rate Benchmarks
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
                Completion Rate Benchmarks by Content Type
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Short-Form Comedy (7-15 seconds): 75-95% completion</p>
                  <p className="text-body-sm text-neutral-700">Quick punchlines and tight editing naturally achieve high completion.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Educational Tips (20-40 seconds): 60-80% completion</p>
                  <p className="text-body-sm text-neutral-700">Value-packed tutorials maintain attention if information density is high.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Storytelling (45-90 seconds): 40-65% completion</p>
                  <p className="text-body-sm text-neutral-700">Longer narratives face natural drop-off. Use cliffhangers to maintain interest.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              8 Strategies to Dramatically Improve Completion Rate
            </h2>
            <div className="space-y-4">
              {[
                { title: '1. Delete Your First 2-3 Seconds', description: 'Most creators waste precious seconds on slow openings. Start with your best moment.' },
                { title: '2. Put the Payoff at the Very End', description: 'Structure your video so the punchline or reveal comes in the final 2-3 seconds.' },
                { title: '3. Use Text Overlays to Tease What\'s Coming', description: 'Add on-screen text: "Wait for it..." to create anticipation.' },
                { title: '4. Make Videos Shorter - Ruthlessly', description: 'If you can say it in 20 seconds, don\'t stretch it to 40. Every second hemorrhages viewers.' },
                { title: '5. Use Pattern Interrupts Every 5-7 Seconds', description: 'Change camera angle, zoom level, or add text overlays to reset viewer attention.' },
                { title: '6. Create Loop-Worthy Endings', description: 'Design endings that flow back to the beginning for rewatches.' },
                { title: '7. Build Curiosity Throughout', description: 'Create mini-cliffhangers: "But that\'s not even the crazy part..."' },
                { title: '8. Test Different Video Lengths', description: 'Post the same concept in 15s, 30s, and 60s versions and compare completion rates.' },
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
              Common Mistakes That Destroy Completion Rate
            </h2>
            <div className="space-y-3">
              {[
                { mistake: 'Long, Rambling Intros', impact: 'Lose 40-60% of viewers before content even starts', fix: 'Cut intros entirely. Start with the hook.' },
                { mistake: 'Dead Time and Slow Pacing', impact: 'Every second of "nothing happening" triggers scrolling', fix: 'Watch frame by frame and cut boring segments.' },
                { mistake: 'Making Videos Longer Than Necessary', impact: 'Natural drop-off increases exponentially with length', fix: 'Challenge yourself to deliver value in half the time.' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-error-50 border border-error-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 flex items-center gap-2 mb-2">
                    <X size={16} className="text-error-600" /> {item.mistake}
                  </p>
                  <p className="text-body-sm text-neutral-700 mb-2"><strong>Impact:</strong> {item.impact}</p>
                  <p className="text-body-sm text-success-700 flex items-start gap-2">
                    <Check size={16} className="text-success-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Fix:</strong> {item.fix}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <MethodologySection
            calculatorName="completion-rate"
            formula={`Completion Rate = (Average Watch Time / Video Duration) × 100

Example:
Video Duration: 30 seconds
Avg Watch Time: 25 seconds
Completion Rate: (25 / 30) × 100 = 83.3%

Note: Rates over 100% are possible when viewers rewatch`}
            assumptions={[
              { label: 'Algorithm Weight', value: 'Completion rate is weighted heavily by TikTok for content distribution' },
              { label: 'Viral Threshold', value: '80%+ completion significantly increases viral potential' },
              { label: 'Video Length Impact', value: 'Shorter videos naturally achieve higher completion rates' },
            ]}
            dataSources={[
              'TikTok Algorithm Research 2024',
              'Viral Content Analysis by Social Media Examiner',
              'Creator Success Metrics Study',
            ]}
            limitations="Completion rate should be evaluated relative to video length. A 50% completion on a 2-minute video may be better than 90% on a 10-second video."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Completion Rate Calculator"
            faqs={[
              {
                question: 'What is a good completion rate on TikTok?',
                answer: 'For videos under 30 seconds: aim for 70%+. For 30-60 seconds: 50%+ is good. For 60+ seconds: 40%+ is solid. Focus on beating your own baseline averages.',
              },
              {
                question: 'How do I increase my completion rate?',
                answer: 'Delete the first 2-3 seconds, put payoff at the end, use text overlays to tease, cut out fluff, make videos shorter, add pattern interrupts every 5 seconds, create loop-worthy endings.',
              },
              {
                question: 'Where can I find completion rate in TikTok Analytics?',
                answer: 'TikTok doesn\'t show "completion rate" directly. Go to Analytics → Content → Select a video. Find "Average watch time" and divide by video duration, then multiply by 100.',
              },
              {
                question: 'Does looping/rewatching count toward completion rate?',
                answer: 'Yes! When viewers rewatch, it can push completion rate over 100%. Creating loop-worthy content is one of the most powerful virality strategies.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="completion-rate"
            calculators={[
              { name: 'Watch Time Calculator', slug: 'watch-time', description: 'Calculate total watch hours and retention rate', icon: 'Clock' },
              { name: 'Viral Potential Calculator', slug: 'viral-potential', description: 'High completion rate = viral potential', icon: 'Rocket' },
              { name: 'Video Performance Calculator', slug: 'video-performance', description: 'Comprehensive video performance analysis', icon: 'Video' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
