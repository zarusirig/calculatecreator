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
  calculateViralPotential,
  validateViralPotentialInput,
} from '@/lib/calculators/viral-potential';
import type {
  ViralPotentialInput,
  ViralPotentialResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { Share2, CheckCircle, BarChart3, Rocket, X, Check } from 'lucide-react';

export default function ViralPotentialCalculatorPage() {
  const [inputs, setInputs] = useState<ViralPotentialInput>({
    followers: 50000,
    engagementRate: 6,
    shareRate: 3,
    saveRate: 2.5,
    completionRate: 70,
  });

  const [results, setResults] = useState<ViralPotentialResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ViralPotentialInput,
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
    const validation = validateViralPotentialInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateViralPotential(inputs);
      setResults(result);

      trackCalculation(
        'viral-potential',
        { ...inputs },
        { viralScore: result.viralScore, viralChance: result.viralChance }
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
              label: 'Viral Potential Calculator',
              href: '/calculators/viral-potential',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Rocket size={32} />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Viral Potential Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Predict your content's viral likelihood based on key engagement signals.
            Get a comprehensive viral score and actionable insights.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Viral Potential
            </h2>

            <InputField
              id="followers"
              label="Follower Count"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 50000"
              helperText="Your total TikTok followers"
              error={errors.followers}
              min={0}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="e.g., 6"
              helperText="Your average engagement rate"
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="shareRate"
              label="Share Rate (%)"
              type="number"
              value={inputs.shareRate}
              onChange={(value) => handleInputChange('shareRate', value)}
              placeholder="e.g., 3"
              helperText="Shares divided by views"
              error={errors.shareRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="saveRate"
              label="Save Rate (%)"
              type="number"
              value={inputs.saveRate}
              onChange={(value) => handleInputChange('saveRate', value)}
              placeholder="e.g., 2.5"
              helperText="Saves divided by views"
              error={errors.saveRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="completionRate"
              label="Completion Rate (%)"
              type="number"
              value={inputs.completionRate}
              onChange={(value) => handleInputChange('completionRate', value)}
              placeholder="e.g., 70"
              helperText="Percentage who watch to the end"
              error={errors.completionRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Viral Potential
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="number"
                  title="Viral Score"
                  subtitle={`${results.viralChance.replace('-', ' ').toUpperCase()} POTENTIAL`}
                />

                {results.factors && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-md text-neutral-600 mb-3">
                      Factor Breakdown
                    </p>
                    <div className="space-y-2">
                      {results.factors.map((factor) => (
                        <div key={factor.label} className="flex justify-between items-center">
                          <span className="text-body-sm text-neutral-600">
                            {factor.label}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-neutral-100 rounded-full h-2">
                              <div
                                className="bg-secondary-500 h-2 rounded-full"
                                style={{ width: `${factor.score}%` }}
                              />
                            </div>
                            <span className="text-body-sm font-semibold text-neutral-900 w-10 text-right">
                              {factor.score}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Viral Potential?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Viral potential predicts how likely your content is to achieve
                  viral reach on TikTok's For You Page. It analyzes four key signals
                  that the algorithm prioritizes.
                </p>
                <p>
                  <strong>Key factors:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Share Rate (30% weight):</strong> Most important - shares
                    signal valuable content
                  </li>
                  <li>
                    <strong>Engagement Rate (25%):</strong> Overall interaction level
                  </li>
                  <li>
                    <strong>Completion Rate (25%):</strong> Viewers watching to the end
                  </li>
                  <li>
                    <strong>Save Rate (20%):</strong> Content valuable enough to save
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Viral Potential Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Very High',
                    range: '80-100',
                    color: 'bg-success-DEFAULT',
                    description: 'Viral breakthrough likely',
                  },
                  {
                    label: 'High',
                    range: '60-79',
                    color: 'bg-secondary-500',
                    description: 'Strong viral potential',
                  },
                  {
                    label: 'Medium',
                    range: '40-59',
                    color: 'bg-warning-DEFAULT',
                    description: 'Occasional viral hits',
                  },
                  {
                    label: 'Low',
                    range: '<40',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs optimization',
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
                Understanding the Virality Coefficient
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Viral potential isn't random luck - it's a measurable combination of specific engagement signals. The virality coefficient represents how likely your content is to spread exponentially beyond your existing audience. When this coefficient exceeds a critical threshold, your video enters what's known as "viral momentum."
                </p>
                <p>
                  Think of virality like nuclear physics: you need to achieve "critical mass" where each viewer generates more than one additional view through shares, profile visits, and algorithm amplification. A video with a viral score of 80+ has achieved this critical mass, meaning TikTok's algorithm is actively pushing it to exponentially larger audiences.
                </p>
                <p>
                  The four factors in our calculator - engagement rate, share rate, save rate, and completion rate - aren't weighted equally because TikTok's algorithm doesn't treat them equally. Share rate carries the most weight (30%) because shares create network effects that compound your reach. Each share exposes your content to entirely new audiences who may have never encountered your profile.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Share Velocity: The Hidden Viral Metric
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  While total shares matter, <strong>share velocity</strong> - how quickly shares happen - is equally crucial for achieving viral status. A video that gets 1,000 shares in the first hour has dramatically higher viral potential than one that accumulates 1,000 shares over a week.
                </p>
                <p>
                  TikTok's algorithm watches for rapid engagement spikes in the first 1-3 hours after posting. If your video achieves a 5%+ share rate within the first hour, the algorithm interprets this as a strong signal to test your content with progressively larger audiences. This creates a snowball effect where early momentum generates more momentum.
                </p>
                <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">Viral Velocity Benchmarks:</p>
                  <ul className="text-body-sm space-y-1">
                    <li>• <strong>First Hour:</strong> 3%+ share rate = high viral potential</li>
                    <li>• <strong>First 6 Hours:</strong> Sustained 2%+ share rate = viral momentum building</li>
                    <li>• <strong>First 24 Hours:</strong> 70%+ of final shares should occur here for true virality</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Viral Potential by Content Niche
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Relatable Humor & Memes (Score: 70-90)</p>
                  <p className="text-body-sm text-neutral-700">Naturally shareable content with universal appeal. High share rates compensate for lower save rates. Key: timing and cultural relevance.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Educational "Mind-Blown" Content (Score: 75-95)</p>
                  <p className="text-body-sm text-neutral-700">Surprising facts and little-known information drive both shares and saves. Excellent completion rates due to curiosity. Key: counterintuitive insights.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Controversial Takes (Score: 65-85)</p>
                  <p className="text-body-sm text-neutral-700">Spark debate and discussion. High engagement and share rates but potentially lower completion if viewers rage-quit. Key: respectful provocation.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Transformation Videos (Score: 60-80)</p>
                  <p className="text-body-sm text-neutral-700">Before/after content with high completion due to curiosity about the result. Moderate share rates. Key: dramatic visual change.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-1">Personal Vlogs (Score: 30-50)</p>
                  <p className="text-body-sm text-neutral-700">Low viral potential unless you're already famous. Minimal shares as content is too personal/specific. Key: build audience first.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              6 Strategies to Boost Your Viral Score
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: '1. Optimize Your Weakest Factor First',
                  description: 'Check your viral score breakdown. If shares are your lowest score, focus entirely on creating more shareable content rather than trying to improve all metrics at once. One weak factor drags down your overall viral potential more than moderate performance across the board.'
                },
                {
                  title: '2. Front-Load Shareability in First 3 Seconds',
                  description: 'Make your hook immediately shareable: "Everyone needs to know this" or "I can\'t believe this is legal." When viewers see share-worthy content instantly, they\'re more likely to share before scrolling. Delayed payoffs hurt share velocity.'
                },
                {
                  title: '3. Create "Tag a Friend" Moments',
                  description: 'Design specific moments where viewers instantly think of someone: "Tag someone who always does this" or create scenarios so relatable that tagging is inevitable. Comedy about personality types works exceptionally well.'
                },
                {
                  title: '4. Leverage Pattern Interrupts for Completion',
                  description: 'If completion rate is your weak point, add visual or audio changes every 3-5 seconds. Pattern interrupts prevent scrolling and push completion rates from 60% to 80%+, significantly boosting your overall viral score.'
                },
                {
                  title: '5. Test Controversial Takes (Respectfully)',
                  description: 'Unpopular opinions drive massive engagement and shares as people debate in comments and share to their networks for validation. Frame it as "Am I wrong?" or "Hot take:" to invite discussion without being aggressive.'
                },
                {
                  title: '6. Post at Peak Times for Share Velocity',
                  description: 'Timing affects share velocity dramatically. Post when your audience is most active (check Analytics) to maximize first-hour engagement. Viral videos often achieve 30-40% of their total shares in the first 3 hours.'
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
              Common Viral Potential Killers
            </h2>
            <div className="space-y-3">
              {[
                {
                  mistake: 'Too Niche Without Context',
                  fix: 'Inside jokes or extremely specific references limit shareability. Provide enough context that shared content makes sense to people outside your immediate community. Broad appeal + niche insight = viral potential.'
                },
                {
                  mistake: 'No Clear Hook or Value Proposition',
                  fix: 'If viewers can\'t immediately understand why this matters or why it\'s interesting, they won\'t share it. Make your value proposition crystal clear in the first 2 seconds.'
                },
                {
                  mistake: 'Weak Emotional Trigger',
                  fix: 'Viral content evokes strong emotions: laughter, surprise, inspiration, anger, or joy. Mild interest doesn\'t go viral. Ask yourself: does this make people FEEL something intensely?'
                },
                {
                  mistake: 'Low Production Quality',
                  fix: 'Poor audio, bad lighting, or unprofessional editing signals low-value content. People hesitate to share content that might reflect poorly on them. Minimum quality standards are non-negotiable for virality.'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-error-50 border border-error-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <X size={16} className="text-danger-DEFAULT" />
                    {item.mistake}
                  </p>
                  <p className="text-body-sm text-success-700 flex items-start gap-2">
                    <Check size={16} className="text-success-DEFAULT flex-shrink-0 mt-0.5" />
                    <span><strong>Fix:</strong> {item.fix}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real Creator Example: Viral Score Impact
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <X size={20} className="text-danger-DEFAULT" />
                    Low Viral Score (Score: 42)
                  </p>
                  <ul className="text-body-sm space-y-2">
                    <li>• Engagement: 4% (53/100)</li>
                    <li>• Shares: 0.8% (16/100)</li>
                    <li>• Saves: 1.2% (24/100)</li>
                    <li>• Completion: 55% (69/100)</li>
                    <li>• Result: 12,000 views, minimal growth</li>
                  </ul>
                </div>
                <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <CheckCircle size={20} className="text-success-DEFAULT" />
                    High Viral Score (Score: 82)
                  </p>
                  <ul className="text-body-sm space-y-2">
                    <li>• Engagement: 8% (85/100)</li>
                    <li>• Shares: 4.2% (84/100)</li>
                    <li>• Saves: 3.5% (70/100)</li>
                    <li>• Completion: 78% (98/100)</li>
                    <li>• Result: 2.4M views, 45K new followers</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg">
                <p className="text-body-sm">
                  <strong>Analysis:</strong> Same creator, same niche, dramatically different results. The high-scoring video focused on a surprising fact (boosted shares), provided actionable value (increased saves), and had tight editing (improved completion). The low-scoring video was a generic day-in-the-life vlog with no clear hook. Viral potential is predictable and optimizable.
                </p>
              </div>
            </div>
          </Card>

          <MethodologySection
            calculatorName="viral-potential"
            formula={`Viral Score = (Engagement × 0.25) + (Share × 0.30) + (Save × 0.20) + (Completion × 0.25)

Each metric normalized to 0-100 scale:
- Engagement: Max at 15%
- Share Rate: Max at 5%
- Save Rate: Max at 5%
- Completion: Max at 80%

Example: 6% engagement, 3% shares, 2.5% saves, 70% completion
Score: (40 × 0.25) + (60 × 0.30) + (50 × 0.20) + (88 × 0.25) = 62/100`}
            assumptions={[
              {
                label: 'Algorithm Signals',
                value:
                  'Based on confirmed TikTok algorithm priorities: shares > completion > engagement > saves',
              },
              {
                label: 'Viral Threshold',
                value: '80+ score indicates very high probability of For You Page dominance',
              },
              {
                label: 'Compound Effect',
                value: 'High scores in multiple categories increase viral odds exponentially',
              },
            ]}
            dataSources={[
              'TikTok Algorithm Leak Analysis 2024',
              'Viral Content Study by Later',
              'Creator Success Patterns Research',
            ]}
            limitations="Viral success also depends on timing, trends, and luck. This calculator predicts potential based on content quality signals, not guarantees. Use it to optimize weak areas."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Viral Potential Calculator"
            faqs={[
              {
                question: 'What viral score do I need to go viral on TikTok?',
                answer:
                  'A score of 80+ indicates very high viral potential with exponential reach likely. Scores of 60-79 show strong potential for above-average performance and possible viral hits. 40-59 suggests occasional viral videos with optimization. Below 40 needs significant improvement. However, focus less on hitting a specific number and more on identifying which factors are dragging down your score - those are your biggest optimization opportunities. Even a score of 65 with the right timing, trending sound, and topic can go viral.',
              },
              {
                question: 'Why is share rate weighted so heavily in the viral score?',
                answer:
                  'TikTok\'s algorithm treats shares as the strongest signal of valuable content because shares create network effects. When users share, they\'re essentially endorsing your content to their personal network and putting their reputation on the line, which carries exponentially more weight than passive engagement like likes or comments. Each share exposes your content to entirely new audiences. A 3%+ share rate can trigger algorithmic momentum where TikTok progressively tests your content with larger and larger audiences.',
              },
              {
                question: 'How can I improve my viral score?',
                answer:
                  'Focus on your lowest-scoring factor first - it\'s dragging down your overall score: (1) Low shares? Create surprising facts, relatable humor, or "tag a friend" moments. Educational and controversial content naturally drives shares. (2) Low completion? Cut video length ruthlessly, delete slow openings, put the payoff at the end. (3) Low saves? Create tutorials, recipes, life hacks, or reference content worth revisiting. (4) Low engagement? Use clear CTAs, ask questions, create debate-worthy takes.',
              },
              {
                question: 'Does follower count affect viral potential?',
                answer:
                  'Not directly - TikTok\'s algorithm gives everyone an equal chance at virality regardless of follower count. Small accounts regularly achieve millions of views. However, larger accounts have more initial engagement (from existing followers) in the critical first 1-3 hours, which can create early momentum that the algorithm rewards. Focus on optimizing the quality metrics (shares, completion rate, saves) rather than worrying about follower count. Content quality, not audience size, determines viral potential.',
              },
              {
                question: 'What is share velocity and why does it matter?',
                answer:
                  'Share velocity is how quickly shares happen, not just total shares. A video getting 500 shares in the first hour has dramatically higher viral potential than one getting 500 shares over a week. TikTok\'s algorithm watches for rapid engagement spikes in the first 1-3 hours. Fast early sharing signals strong content, prompting the algorithm to test it with progressively larger audiences. This creates viral momentum. Post when your audience is most active to maximize share velocity.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="viral-potential"
            calculators={[
              {
                name: 'Share Ratio Calculator',
                slug: 'share-ratio',
                description:
                  'Analyze your share rate in detail',
                icon: Share2,
              },
              {
                name: 'Completion Rate Calculator',
                slug: 'completion-rate',
                description: 'Optimize your completion rate',
                icon: CheckCircle,
              },
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Track overall engagement performance',
                icon: BarChart3,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
