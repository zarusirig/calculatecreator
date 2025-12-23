'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateCompletionRate,
  validateCompletionRateInput,
} from '@/lib/calculators/completion-rate';
import type {
  CompletionRateInput,
  CompletionRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Clock, Rocket, Video, CheckCircle, X, Check } from 'lucide-react';

export default function CompletionRateCalculatorPage() {
  const [inputs, setInputs] = useState<CompletionRateInput>({
    videoDuration: 30,
    avgWatchTime: 25,
  });

  const [results, setResults] = useState<CompletionRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof CompletionRateInput,
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
    const validation = validateCompletionRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCompletionRate(inputs);
      setResults(result);

      trackCalculation(
        'completion-rate',
        { ...inputs },
        { completionRate: result.completionRate, rating: result.rating }
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
              label: 'Completion Rate Calculator',
              href: '/calculators/completion-rate',
            },
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
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Completion Rate
            </h2>

            <InputField
              id="videoDuration"
              label="Video Duration (seconds)"
              type="number"
              value={inputs.videoDuration}
              onChange={(value) => handleInputChange('videoDuration', value)}
              placeholder="e.g., 30"
              helperText="Total length of your video"
              error={errors.videoDuration}
              min={1}
              max={600}
              required
            />

            <InputField
              id="avgWatchTime"
              label="Average Watch Time (seconds)"
              type="number"
              value={inputs.avgWatchTime}
              onChange={(value) => handleInputChange('avgWatchTime', value)}
              placeholder="e.g., 25"
              helperText="Average time viewers watch"
              error={errors.avgWatchTime}
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
              Calculate Completion Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Completion Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    What This Means
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    {results.completionRate >= 80
                      ? 'Excellent! Most viewers watch to the end - your content keeps attention.'
                      : results.completionRate >= 60
                      ? 'Good! Above-average completion. Consider front-loading your best content.'
                      : results.completionRate >= 40
                      ? 'Average completion. Work on pacing and eliminate dead spots.'
                      : 'Low completion rate. Viewers are dropping off early - reassess your hook and content structure.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

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
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    High completion rates trigger increased For You Page distribution
                  </li>
                  <li>
                    Videos over 90% completion often go viral
                  </li>
                  <li>
                    Shows your content delivers on its promise/hook
                  </li>
                  <li>
                    Shorter videos with high completion outperform longer videos
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Completion Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '80%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Viral-worthy content',
                  },
                  {
                    label: 'Good',
                    range: '60-80%',
                    color: 'bg-secondary-500',
                    description: 'Strong performance',
                  },
                  {
                    label: 'Average',
                    range: '40-60%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Room to optimize',
                  },
                  {
                    label: 'Below Average',
                    range: '<40%',
                    color: 'bg-error-DEFAULT',
                    description: 'Hook or pacing issues',
                  },
                ].map((benchmark) => (
                  <div
                    key={benchmark.label}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${benchmark.color}`}
                      />
                      <div>
                        <p className="font-semibold text-neutral-900">
                          {benchmark.label}
                        </p>
                        <p className="text-body-sm text-neutral-600">
                          {benchmark.description}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      {benchmark.range}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Why 100% Watch Time is the Holy Grail
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Completion rate isn't just another metric - it's THE metric TikTok's algorithm uses to determine content quality. When viewers watch your entire video, especially if they rewatch it, TikTok interprets this as "this content is so good, people can't look away."
                </p>
                <p>
                  The algorithm operates on a simple principle: if people watch your video all the way through, it deserves to be shown to more people. Videos with 90%+ completion rates often experience exponential reach growth as TikTok continuously tests them with larger audiences.
                </p>
                <p>
                  Here's why completion rate matters more than likes or comments: Anyone can mindlessly double-tap or leave a generic comment while scrolling. But watching to the end requires sustained attention - the scarcest resource on TikTok. High completion rates prove your content earns and keeps that attention.
                </p>
                <p>
                  <strong>The Rewatch Effect:</strong> When viewers loop your video (watch it multiple times in a row), your completion rate can exceed 100%. This is the ultimate signal to the algorithm. TikTok loves rewatch-worthy content because it maximizes time on platform.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Completion Rate Benchmarks by Content Type
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Different content formats have vastly different completion rate expectations. Understanding your niche helps set realistic goals:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Short-Form Comedy (7-15 seconds): 75-95% completion</p>
                    <p className="text-body-sm text-neutral-700">Quick punchlines and tight editing naturally achieve high completion. The shorter the video, the higher the expected completion rate.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Educational Tips (20-40 seconds): 60-80% completion</p>
                    <p className="text-body-sm text-neutral-700">Value-packed tutorials maintain attention if information density is high and pacing is fast.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Storytelling (45-90 seconds): 40-65% completion</p>
                    <p className="text-body-sm text-neutral-700">Longer narratives face natural drop-off. Use cliffhangers and pacing variations to maintain interest.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Product Reviews (30-60 seconds): 50-70% completion</p>
                    <p className="text-body-sm text-neutral-700">Front-load key insights. Many viewers leave once they get the answer they came for.</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <p className="text-body-sm">
                    <strong>Pro Insight:</strong> Don't compare your 60-second tutorial's 65% completion to a 10-second dance video's 85% completion. Instead, track your personal baseline and aim to beat it consistently.
                  </p>
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
                {
                  title: '1. Delete Your First 2-3 Seconds',
                  description: 'Most creators waste precious seconds on slow openings. Review your video and ruthlessly cut anything that happens before the actual content starts. If nothing interesting occurs in the first 3 seconds, viewers scroll. Start with your best moment, then provide context.'
                },
                {
                  title: '2. Put the Payoff at the Very End',
                  description: 'Structure your video so the punchline, answer, or reveal comes in the final 2-3 seconds. This keeps viewers watching all the way through. Example: "3 TikTok hacks you need - but the third one is insane" then deliver #3 at second 28 of your 30-second video.'
                },
                {
                  title: '3. Use Text Overlays to Tease What\'s Coming',
                  description: 'Add on-screen text at 5-10 second mark: "Wait for it..." or "The best part is coming." This creates anticipation and prevents early drop-off. Text keeps viewers engaged even during slower moments.'
                },
                {
                  title: '4. Make Videos Shorter - Ruthlessly',
                  description: 'If you can say it in 20 seconds, don\'t stretch it to 40. Every unnecessary second hemorrhages viewers. Cut every pause, filler word, and slow transition. Aim for maximum value per second. Many viral videos are 15-25 seconds of ultra-dense content.'
                },
                {
                  title: '5. Use Pattern Interrupts Every 5-7 Seconds',
                  description: 'Change something frequently: camera angle, zoom level, scene, text overlay, or background music. These "pattern interrupts" reset viewer attention and prevent the urge to scroll. Static content loses viewers fast.'
                },
                {
                  title: '6. Create Loop-Worthy Endings',
                  description: 'Design your video so the ending flows naturally back to the beginning, making viewers want to rewatch. Satisfying loops can push completion rates over 100%. Example: transformation videos that loop seamlessly.'
                },
                {
                  title: '7. Build Curiosity Throughout',
                  description: 'Don\'t reveal everything upfront. Create mini-cliffhangers throughout: "But that\'s not even the crazy part..." (pause) "Because..." Keep viewers guessing. Each curiosity gap buys you another 5-10 seconds of attention.'
                },
                {
                  title: '8. Test Different Video Lengths',
                  description: 'Post the same concept in 15s, 30s, and 60s versions. Compare completion rates. You might discover your audience prefers ultra-short content, giving you a clear optimization path. Shorter almost always wins for completion rate.'
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
              Common Mistakes That Destroy Completion Rate
            </h2>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Long, Rambling Intros',
                  impact: 'Lose 40-60% of viewers before content even starts',
                  fix: 'Cut intros entirely. Start with the hook or most interesting moment. You can add context at the 10-15 second mark after hooking viewers.'
                },
                {
                  mistake: 'Saving the Best for Last (Without Setup)',
                  impact: 'Viewers leave before reaching your payoff',
                  fix: 'Tease the ending immediately: "Wait till you see what happens at the end" or show a 1-second preview, then rewind to the start.'
                },
                {
                  mistake: 'Dead Time and Slow Pacing',
                  impact: 'Every second of "nothing happening" triggers scrolling',
                  fix: 'Watch your video frame by frame. If any 3-second segment is boring or repetitive, cut it. Speed up slow sections by 1.5-2x.'
                },
                {
                  mistake: 'Making Videos Longer Than Necessary',
                  impact: 'Natural audience drop-off increases exponentially with length',
                  fix: 'If your video is 45 seconds, challenge yourself to deliver the same value in 30. Shorter videos with high completion outperform longer videos with low completion.'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-error-50 border border-error-200 rounded-lg">
                  <div className="space-y-2">
                    <p className="font-semibold text-neutral-900 flex items-center gap-2">
                      <X size={16} className="text-danger-DEFAULT" />
                      {item.mistake}
                    </p>
                    <p className="text-body-sm text-neutral-700">
                      <strong>Impact:</strong> {item.impact}
                    </p>
                    <p className="text-body-sm text-success-700 flex items-start gap-2">
                      <Check size={16} className="text-success-DEFAULT flex-shrink-0 mt-0.5" />
                      <span><strong>Fix:</strong> {item.fix}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Creator Case Study: 45% to 87% Completion Rate
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <X size={20} className="text-danger-DEFAULT" />
                    Before (45% Completion)
                  </p>
                  <ul className="text-body-sm space-y-2">
                    <li>• Video: "How to grow on TikTok"</li>
                    <li>• Length: 60 seconds</li>
                    <li>• Started with "Hey guys, today I'll..."</li>
                    <li>• Tips spread throughout with filler</li>
                    <li>• Slow pacing, talking head format</li>
                    <li>• Average watch time: 27 seconds</li>
                  </ul>
                </div>
                <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <CheckCircle size={20} className="text-success-DEFAULT" />
                    After (87% Completion)
                  </p>
                  <ul className="text-body-sm space-y-2">
                    <li>• Video: Same topic, reoptimized</li>
                    <li>• Length: 28 seconds (cut 53%!)</li>
                    <li>• Hook: "This got me 100K in 30 days"</li>
                    <li>• 3 tips, ultra-concise, no filler</li>
                    <li>• Fast cuts every 4 seconds</li>
                    <li>• Average watch time: 24 seconds</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg">
                <p className="text-body-sm">
                  <strong>Result:</strong> By cutting the video nearly in half and removing all fluff, completion rate jumped from 45% to 87%. Despite shorter watch time (27s → 24s), the video performed 6x better in the algorithm because TikTok cares about completion percentage, not absolute seconds. Views increased from 8,000 to 450,000.
                </p>
              </div>
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
              {
                label: 'Algorithm Weight',
                value:
                  'Completion rate is weighted heavily by TikTok for content distribution',
              },
              {
                label: 'Viral Threshold',
                value: '80%+ completion significantly increases viral potential',
              },
              {
                label: 'Video Length Impact',
                value: 'Shorter videos naturally achieve higher completion rates',
              },
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
                answer:
                  'For videos under 30 seconds: aim for 70%+. For 30-60 seconds: 50%+ is good. For 60+ seconds: 40%+ is solid. Context matters significantly - completion rate naturally decreases with video length. A 60% completion rate on a 90-second educational video is more impressive than 80% on a 12-second dance clip. Focus on beating your own baseline averages rather than comparing to others.',
              },
              {
                question: 'How do I increase my completion rate?',
                answer:
                  'Best practices: (1) Delete the first 2-3 seconds if nothing happens - start with your hook, (2) Put payoff/punchline at the very end to keep viewers watching, (3) Use text overlays to tease what\'s coming ("wait for it"), (4) Cut out any "fluff" or slow moments ruthlessly, (5) Make videos shorter - 15-30s is the sweet spot, (6) Add pattern interrupts (cuts, zooms, text) every 5 seconds, (7) Create loop-worthy endings that flow back to the beginning, (8) Test different video lengths to find your optimal duration.',
              },
              {
                question: 'Where can I find completion rate in TikTok Analytics?',
                answer:
                  'TikTok doesn\'t explicitly show "completion rate" as a single number, but you can calculate it: Go to Profile → Creator Tools → Analytics → Content tab → Select a video. Find "Average watch time" and divide it by your video duration, then multiply by 100 for percentage. The retention graph also shows exactly what percentage of viewers made it to each second of your video, with the final second showing your true completion rate.',
              },
              {
                question: 'Does looping/rewatching count toward completion rate?',
                answer:
                  'Yes! When viewers rewatch (loop) your video, it absolutely counts toward watch time and can push your completion rate over 100%. Some viral videos achieve 120-150% completion rates because viewers watch them multiple times in a row. Creating loop-worthy content - satisfying endings that flow back to the beginning, jokes with layered meaning, or mesmerizing visuals - is one of the most powerful virality strategies on TikTok.',
              },
              {
                question: 'Why is completion rate more important than likes?',
                answer:
                  'Completion rate is the strongest signal to TikTok\'s algorithm that your content is valuable. Anyone can double-tap a video they barely watched, but watching all the way through requires sustained attention - the scarcest resource on the platform. TikTok prioritizes watch time over all other metrics because it directly increases time spent on the app. A video with 90% completion and 1000 likes will outperform a video with 40% completion and 5000 likes in the algorithm every time.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="completion-rate"
            calculators={[
              {
                name: 'Watch Time Calculator',
                slug: 'watch-time',
                description:
                  'Calculate total watch hours and retention rate',
                icon: Clock,
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'High completion rate = viral potential',
                icon: Rocket,
              },
              {
                name: 'Video Performance Calculator',
                slug: 'video-performance',
                description: 'Comprehensive video performance analysis',
                icon: Video,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
