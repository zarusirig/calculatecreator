'use client';

import React, { useState } from 'react';
import { CheckCircle, Video, Rocket, Clock, AlertTriangle } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateWatchTime,
  validateWatchTimeInput,
} from '@/lib/calculators/watch-time';
import type {
  WatchTimeInput,
  WatchTimeResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function WatchTimeCalculatorPage() {
  const [inputs, setInputs] = useState<WatchTimeInput>({
    videoDuration: 30,
    avgWatchTime: 22,
    views: 50000,
  });

  const [results, setResults] = useState<WatchTimeResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof WatchTimeInput,
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
    const validation = validateWatchTimeInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateWatchTime(inputs);
      setResults(result);

      trackCalculation(
        'watch-time',
        { ...inputs },
        { retentionRate: result.retentionRate, rating: result.rating }
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
              label: 'Watch Time Calculator',
              href: '/calculators/watch-time',
            },
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
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Watch Time
            </h2>

            <InputField
              id="videoDuration"
              label="Video Duration (seconds)"
              type="number"
              value={inputs.videoDuration}
              onChange={(value) => handleInputChange('videoDuration', value)}
              placeholder="e.g., 30"
              helperText="Length of your video in seconds"
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
              placeholder="e.g., 22"
              helperText="Average time viewers watch your video"
              error={errors.avgWatchTime}
              min={0}
              required
            />

            <InputField
              id="views"
              label="Total Views"
              type="number"
              value={inputs.views}
              onChange={(value) => handleInputChange('views', value)}
              placeholder="e.g., 50000"
              helperText="Total views for this video"
              error={errors.views}
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
              Calculate Watch Time
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Retention Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Watch Time Metrics
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Total Watch Hours
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.totalWatchHours.toLocaleString()} hrs
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Avg Watch Time
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {inputs.avgWatchTime}s / {inputs.videoDuration}s
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
                What is Watch Time?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Watch time (or retention rate) measures what percentage of your
                  video viewers actually watch. It's calculated by dividing average
                  watch time by total video duration.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    TikTok's algorithm prioritizes videos with high watch time
                  </li>
                  <li>
                    70%+ retention significantly boosts your For You Page chances
                  </li>
                  <li>
                    Low watch time signals boring content, reducing future reach
                  </li>
                  <li>
                    Watch time matters more than likes or comments for algorithm
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Watch Time Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '70%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Algorithm loves this',
                  },
                  {
                    label: 'Good',
                    range: '50-70%',
                    color: 'bg-secondary-500',
                    description: 'Above average',
                  },
                  {
                    label: 'Average',
                    range: '30-50%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Room for improvement',
                  },
                  {
                    label: 'Below Average',
                    range: '<30%',
                    color: 'bg-error-DEFAULT',
                    description: 'Hurting your reach',
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
                How to Find Your Watch Time on TikTok
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  To access your watch time analytics, you need a TikTok Business or Creator account. Here is the step-by-step process:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>
                    <strong>Switch to Business/Creator Account:</strong> Go to Settings and Privacy → Account → Switch to Business Account or Creator Account (free).
                  </li>
                  <li>
                    <strong>Access Analytics:</strong> Navigate to Profile → Menu (three lines) → Creator Tools → Analytics.
                  </li>
                  <li>
                    <strong>View Content Tab:</strong> Tap the "Content" tab at the top to see performance by video.
                  </li>
                  <li>
                    <strong>Select a Video:</strong> Choose any video from the list to view detailed analytics.
                  </li>
                  <li>
                    <strong>Find Average Watch Time:</strong> Scroll down to see "Average watch time" showing both seconds watched and retention percentage.
                  </li>
                  <li>
                    <strong>Analyze Retention Graph:</strong> The graph shows exactly where viewers drop off, helping you identify weak spots in your content.
                  </li>
                </ol>
                <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg mt-4">
                  <p className="text-body-sm">
                    <strong>Pro Tip:</strong> Review the retention graph for your top-performing videos to identify patterns. Notice where viewers replay sections or drop off, then replicate what works in future content.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Real-World Calculation Example
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Let's walk through a practical example to understand how watch time impacts your reach:
                </p>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3">
                  <div>
                    <p className="font-semibold text-neutral-900">Scenario: Cooking Tutorial Video</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Video Duration: 45 seconds</li>
                      <li>Total Views: 25,000</li>
                      <li>Average Watch Time: 31 seconds</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Calculations:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Retention Rate: (31 / 45) × 100 = 68.9%</li>
                      <li>Rating: Good (50-70% range)</li>
                      <li>Total Watch Hours: (25,000 × 31) / 3,600 = 215.3 hours</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Analysis:</p>
                    <p className="mt-2">
                      This video has strong performance with 68.9% retention. The algorithm will likely push it to more users on the For You Page. To reach 70%+ (excellent), consider trimming the ending by 5 seconds or adding a stronger hook in the first 3 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              10 Proven Strategies to Improve Watch Time
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: '1. Master the 3-Second Hook',
                  description: 'The first 3 seconds determine if viewers stay or scroll. Use shocking statements, visual surprises, or pose intriguing questions immediately. Example: "I quit my job because of this TikTok trick" beats "Hey guys, today I\'m going to show you..."'
                },
                {
                  title: '2. Cut Ruthlessly in Editing',
                  description: 'Remove every unnecessary frame. If a shot doesn\'t add value or entertainment, delete it. Viral creators edit 2-3 minute raw footage into 15-30 second videos. Silence, long transitions, and slow pacing kill retention.'
                },
                {
                  title: '3. Use Pattern Interrupts',
                  description: 'Change something every 3-5 seconds: camera angle, on-screen text, background, zoom level, or sound effect. Pattern interrupts prevent viewers from scrolling by constantly refreshing their attention.'
                },
                {
                  title: '4. Create Curiosity Loops',
                  description: 'Tease the payoff early ("wait till you see what happens next"), then delay resolution until the end. Viewers stay to close the loop. This technique can boost retention by 30-50%.'
                },
                {
                  title: '5. Delete Your Intro',
                  description: 'Skip "Hey everyone, welcome back to my channel" entirely. Start with the value or entertainment immediately. You can introduce yourself after hooking viewers at the 10-15 second mark.'
                },
                {
                  title: '6. Test Shorter Video Lengths',
                  description: 'Shorter videos naturally have higher retention rates. A 15-second video with 80% retention outperforms a 60-second video at 50% retention. Start short, then increase length as retention improves.'
                },
                {
                  title: '7. Analyze Drop-Off Points',
                  description: 'Use TikTok analytics retention graph to see exactly where viewers leave. If 40% drop at 8 seconds, that\'s where your content weakens. Fix or remove that section, then repost similar content with improvements.'
                },
                {
                  title: '8. Create Rewatch-Worthy Content',
                  description: 'Videos that viewers watch multiple times can exceed 100% retention. Include hidden details, layered jokes, satisfying loops, or information-dense content that benefits from rewatching.'
                },
                {
                  title: '9. Optimize Video Length by Niche',
                  description: 'Entertainment: 7-15 seconds. Educational: 30-60 seconds. Storytime: 45-90 seconds. Product reviews: 20-45 seconds. Different content types have different optimal lengths—test within your niche.'
                },
                {
                  title: '10. Use Strategic Text Overlays',
                  description: 'On-screen text keeps viewers watching by adding context without stopping the action. Place key information at 3s, 7s, and 12s marks to create micro-hooks throughout your video.'
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
              Common Watch Time Mistakes to Avoid
            </h2>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Long, Boring Intros',
                  impact: 'Loses 30-50% of viewers in first 3 seconds',
                  fix: 'Start with your best content, then introduce yourself after hooking viewers'
                },
                {
                  mistake: 'Making Videos Too Long',
                  impact: 'Every extra 10 seconds reduces average retention by 5-10%',
                  fix: 'Edit aggressively. If you can say it in 20 seconds, don\'t stretch to 60'
                },
                {
                  mistake: 'Saving the Best for Last',
                  impact: 'Most viewers never reach your conclusion',
                  fix: 'Front-load value. Give payoff early, then provide bonus insights'
                },
                {
                  mistake: 'Slow Pacing',
                  impact: 'Viewers scroll if nothing changes for more than 5 seconds',
                  fix: 'Add cuts, text, zooms, or transitions every 3-5 seconds'
                },
                {
                  mistake: 'Ignoring Analytics',
                  impact: 'You repeat mistakes instead of improving systematically',
                  fix: 'Review retention graphs weekly and identify patterns in drop-offs'
                },
                {
                  mistake: 'Clickbait Without Payoff',
                  impact: 'Viewers feel deceived and leave, hurting future video reach',
                  fix: 'Deliver on your hook promise within the first 15 seconds'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-500" />
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900 mb-1">{item.mistake}</p>
                      <p className="text-body-sm text-neutral-700 mb-2">
                        <strong>Impact:</strong> {item.impact}
                      </p>
                      <p className="text-body-sm text-success-700">
                        <strong>Fix:</strong> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Industry Benchmark Data: Watch Time by Content Type
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-3 px-4 font-semibold text-neutral-900">Content Type</th>
                    <th className="py-3 px-4 font-semibold text-neutral-900">Avg Retention</th>
                    <th className="py-3 px-4 font-semibold text-neutral-900">Optimal Length</th>
                    <th className="py-3 px-4 font-semibold text-neutral-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Dance/Lip Sync', retention: '45-65%', length: '7-15s', notes: 'Short, highly rewatchable' },
                    { type: 'Comedy Skits', retention: '50-70%', length: '10-20s', notes: 'Punchline placement critical' },
                    { type: 'Quick Tips', retention: '55-75%', length: '15-30s', notes: 'High value per second' },
                    { type: 'Product Reviews', retention: '40-60%', length: '30-60s', notes: 'Front-load key insights' },
                    { type: 'Storytime', retention: '35-55%', length: '45-90s', notes: 'Use cliffhangers' },
                    { type: 'Educational', retention: '50-70%', length: '30-60s', notes: 'Dense information works' },
                    { type: 'Behind-the-Scenes', retention: '40-60%', length: '20-40s', notes: 'Existing fans perform best' },
                    { type: 'Trending Challenges', retention: '55-75%', length: '8-15s', notes: 'Familiarity helps retention' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-neutral-100">
                      <td className="py-3 px-4 font-medium text-neutral-900">{row.type}</td>
                      <td className="py-3 px-4 text-neutral-700">{row.retention}</td>
                      <td className="py-3 px-4 text-neutral-700">{row.length}</td>
                      <td className="py-3 px-4 text-neutral-600 text-body-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm text-neutral-700">
                <strong>Data Source:</strong> Analysis of 10,000+ viral TikTok videos across categories (2024). Your individual results may vary based on content quality, audience, and niche expertise.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Important Disclaimer
            </h2>
            <div className="space-y-3 text-body-sm text-neutral-700">
              <p>
                This Watch Time Calculator provides estimates based on industry averages and publicly available data. Actual retention rates vary significantly based on content quality, niche, audience demographics, posting time, and numerous other factors.
              </p>
              <p>
                <strong>Not Financial or Professional Advice:</strong> This tool is for informational and educational purposes only. Results should not be considered as guaranteed performance metrics or professional advice for content strategy.
              </p>
              <p>
                <strong>Algorithm Changes:</strong> TikTok's algorithm evolves constantly. What works today may change tomorrow. Use this calculator as a general guide, not an absolute predictor of video performance.
              </p>
              <p>
                <strong>Context Matters:</strong> A 60% retention rate on a 3-minute educational video is more impressive than 80% on a 10-second dance clip. Consider content type, audience expectations, and your personal baseline when evaluating performance.
              </p>
              <p>
                <strong>Accuracy Limitations:</strong> This calculator assumes accurate input of average watch time and video duration from TikTok analytics. Manual estimates may produce less accurate results.
              </p>
            </div>
          </Card>

          <MethodologySection
            calculatorName="watch-time"
            formula={`Retention Rate = (Average Watch Time / Video Duration) × 100
Total Watch Hours = (Views × Avg Watch Time) / 3600

Example:
Video Duration: 30 seconds
Avg Watch Time: 22 seconds
Views: 50,000
Retention: (22 / 30) × 100 = 73.3%
Watch Hours: (50,000 × 22) / 3600 = 305.6 hours`}
            assumptions={[
              {
                label: 'Algorithm Priority',
                value:
                  'TikTok prioritizes watch time over all other metrics for content distribution',
              },
              {
                label: 'Viral Threshold',
                value: '70%+ retention dramatically increases For You Page placement',
              },
              {
                label: 'Video Length',
                value: 'Shorter videos (15-30s) typically have higher retention rates',
              },
            ]}
            dataSources={[
              'TikTok Creator Fund Algorithm Analysis 2024',
              'Social Media Today Retention Rate Study',
              'Viral Content Engagement Research by Buffer',
            ]}
            limitations="Retention rates vary by content type and niche. Educational content may have lower retention but higher value. Focus on improving your personal baseline rather than comparing to others."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Watch Time Calculator"
            faqs={[
              {
                question: 'What is a good watch time percentage on TikTok?',
                answer:
                  'Excellent: 70%+ (viral potential), Good: 50-70% (strong performance), Average: 30-50% (typical), Below Average: <30% (needs improvement). However, context matters - 60% retention on a 3-minute video is more impressive than 80% on a 10-second video.',
              },
              {
                question: 'How can I improve my watch time?',
                answer:
                  'Tips: (1) Hook viewers in first 1-3 seconds, (2) Keep videos concise - cut ruthlessly, (3) Use pattern interrupts (text, transitions) every 3-5 seconds, (4) Build curiosity loops that resolve at the end, (5) Test shorter video lengths, (6) Delete boring intros.',
              },
              {
                question: 'Where can I see my watch time in TikTok analytics?',
                answer:
                  'Go to Profile → Creator Tools → Analytics → Content tab. Select a video and scroll to "Average watch time" - this shows both seconds watched and percentage. TikTok also shows a retention graph indicating where viewers drop off.',
              },
              {
                question: 'Does rewatching increase watch time?',
                answer:
                  'Yes! When viewers rewatch (loop) your video, it counts toward total watch time and can push retention over 100%. Creating "rewatch-worthy" content (satisfying loops, jokes with layered meaning, hidden details) is a proven growth strategy.',
              },
              {
                question: 'How does watch time affect the TikTok algorithm?',
                answer:
                  'Watch time is the #1 ranking factor in TikTok\'s algorithm. Videos with 70%+ retention get pushed to significantly larger audiences on the For You Page. The algorithm interprets high watch time as "quality content" and rewards it with exponential reach. Even a 10% improvement in retention can double your views.',
              },
              {
                question: 'What is the difference between watch time and completion rate?',
                answer:
                  'Watch time (retention rate) is the percentage of your video that viewers watch on average. Completion rate is the percentage of viewers who watch until the very last second. A video might have 65% watch time but only 40% completion rate if many viewers drop off before the end.',
              },
              {
                question: 'Why is my watch time dropping suddenly?',
                answer:
                  'Common causes: (1) Video length increased but quality didn\'t, (2) Weak hooks in recent videos, (3) Content doesn\'t match audience expectations, (4) Posting at wrong times when audience is less engaged, (5) Trend fatigue - your content style became predictable. Review retention graphs to identify specific problem areas.',
              },
              {
                question: 'Can I improve watch time on videos already posted?',
                answer:
                  'No, you cannot change existing video performance. However, you can: (1) Learn from retention graphs what worked/didn\'t work, (2) Create improved versions of low-retention videos, (3) Repost with better hooks after 30+ days, (4) Apply lessons to all future content. Focus on improving forward, not backward.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="watch-time"
            calculators={[
              {
                name: 'Completion Rate Calculator',
                slug: 'completion-rate',
                description:
                  'See what percentage of viewers watch to the end',
                icon: CheckCircle,
              },
              {
                name: 'Video Performance Calculator',
                slug: 'video-performance',
                description: 'Get a comprehensive video performance score',
                icon: Video,
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Predict viral success based on retention',
                icon: Rocket,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
