'use client';

import React, { useState } from 'react';
import { Share2, Rocket, Gem } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateSaveRate,
  validateSaveRateInput,
} from '@/lib/calculators/save-rate';
import type {
  SaveRateInput,
  SaveRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function SaveRateCalculatorPage() {
  const [inputs, setInputs] = useState<SaveRateInput>({
    views: 50000,
    saves: 1000,
  });

  const [results, setResults] = useState<SaveRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof SaveRateInput,
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
    const validation = validateSaveRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateSaveRate(inputs);
      setResults(result);

      trackCalculation(
        'save-rate',
        { ...inputs },
        { saveRate: result.saveRate, contentValueRating: result.contentValueRating }
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
              label: 'Save Rate Calculator',
              href: '/calculators/save-rate',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🔖
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Save Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your save-to-view ratio to measure content value. High save
            rates indicate evergreen, reference-worthy content that viewers want to revisit.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Save Rate
            </h2>

            <InputField
              id="views"
              label="Total Views"
              type="number"
              value={inputs.views}
              onChange={(value) => handleInputChange('views', value)}
              placeholder="e.g., 50000"
              helperText="Total views on your video"
              error={errors.views}
              min={1}
              required
            />

            <InputField
              id="saves"
              label="Total Saves"
              type="number"
              value={inputs.saves}
              onChange={(value) => handleInputChange('saves', value)}
              placeholder="e.g., 1000"
              helperText="Number of times video was saved"
              error={errors.saves}
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
              Calculate Save Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Save Rate"
                  subtitle={`${results.contentValueRating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    What This Means
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    {results.saveRate >= 5
                      ? 'Exceptional! Your content is highly valuable and worth revisiting.'
                      : results.saveRate >= 2
                      ? 'Strong save rate! Your content provides lasting value to viewers.'
                      : results.saveRate >= 0.5
                      ? 'Average save rate. Create more reference-worthy or tutorial content.'
                      : 'Low save rate. Focus on educational, inspirational, or practical content.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Save Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Save rate measures what percentage of viewers save your content for
                  later viewing. High save rates indicate valuable, evergreen content
                  that viewers want to reference again.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Saves signal high content value to TikTok's algorithm
                  </li>
                  <li>
                    Educational and tutorial content naturally gets more saves
                  </li>
                  <li>
                    High save rates improve long-term content discoverability
                  </li>
                  <li>
                    Saves indicate content worth revisiting, not just scrolling past
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Save Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '5%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Highly valuable content',
                  },
                  {
                    label: 'Good',
                    range: '2-5%',
                    color: 'bg-secondary-500',
                    description: 'Reference-worthy',
                  },
                  {
                    label: 'Average',
                    range: '0.5-2%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Typical save rate',
                  },
                  {
                    label: 'Below Average',
                    range: '<0.5%',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs more value',
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
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Understanding TikTok Save Rate: A Complete Guide
            </h2>
            <div className="space-y-6 text-body-md text-neutral-700">
              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  How to Use This Calculator
                </h3>
                <p className="mb-3">
                  Using the TikTok Save Rate Calculator is straightforward. Follow these steps to analyze your content performance:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Open TikTok Analytics:</strong> Navigate to your Creator Tools and select Analytics, then go to the Content tab.</li>
                  <li><strong>Select Your Video:</strong> Choose the video you want to analyze from your content library.</li>
                  <li><strong>Find Save Count:</strong> Scroll down to engagement metrics and locate the "Favorites" count (TikTok's term for saves).</li>
                  <li><strong>Enter Views:</strong> Input the total number of views your video has received in the "Total Views" field.</li>
                  <li><strong>Enter Saves:</strong> Input the number of favorites/saves in the "Total Saves" field.</li>
                  <li><strong>Calculate:</strong> Click the "Calculate Save Rate" button to see your results instantly.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Why Save Rate Matters for TikTok Success
                </h3>
                <p className="mb-3">
                  Save rate is one of the most powerful yet underutilized metrics on TikTok. Unlike likes or comments, which are momentary reactions, saves demonstrate that viewers find your content valuable enough to revisit. This signals to TikTok's algorithm that your content has lasting value, not just entertainment appeal.
                </p>
                <p className="mb-3">
                  When users save your content, TikTok interprets this as a strong quality signal. The platform wants to promote content that provides genuine value, and saves are a clear indicator of this. Content with high save rates often experiences:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Extended lifespan on the For You Page, appearing weeks or months after posting</li>
                  <li>Higher rankings in search results when users look for educational or tutorial content</li>
                  <li>Increased algorithmic distribution as TikTok identifies your content as valuable</li>
                  <li>Better performance in niche communities where reference material is highly valued</li>
                </ul>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Industry Benchmarks by Niche
                </h3>
                <p className="mb-3">
                  Save rates vary significantly depending on your content niche. Understanding where your content fits helps set realistic expectations:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Educational Content (10-15% save rate)</p>
                    <p className="text-body-sm">Tutorials, how-to guides, and skill-building content naturally achieve the highest save rates as viewers bookmark them for future reference.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Recipe & Cooking (8-12% save rate)</p>
                    <p className="text-body-sm">Food content performs exceptionally well for saves since users want to recreate recipes later.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Fitness & Wellness (5-8% save rate)</p>
                    <p className="text-body-sm">Workout routines, nutrition tips, and health advice generate strong save rates from committed audiences.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">DIY & Crafts (6-10% save rate)</p>
                    <p className="text-body-sm">Step-by-step project guides are frequently saved for future execution.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Fashion & Beauty (3-6% save rate)</p>
                    <p className="text-body-sm">Style tips, outfit ideas, and beauty tutorials see moderate save rates.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Entertainment & Comedy (0.5-2% save rate)</p>
                    <p className="text-body-sm">While highly shareable, entertainment content typically has lower save rates as it's consumed once rather than referenced.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Real-World Example Calculation
                </h3>
                <p className="mb-3">
                  Let's walk through a practical example to understand how save rate calculation works:
                </p>
                <div className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg mb-4">
                  <p className="font-semibold text-neutral-900 mb-3">Scenario: Fitness Tutorial Video</p>
                  <ul className="space-y-2 text-body-sm">
                    <li><strong>Total Views:</strong> 75,000</li>
                    <li><strong>Total Saves:</strong> 4,500</li>
                    <li><strong>Calculation:</strong> (4,500 ÷ 75,000) × 100 = 6%</li>
                    <li><strong>Result:</strong> This 6% save rate is excellent for fitness content, indicating viewers find the workout valuable enough to save for their next gym session.</li>
                  </ul>
                </div>
                <p>
                  This creator should analyze what made this particular workout video save-worthy and replicate those elements in future content. Perhaps it was the clear step-by-step instructions, proper form demonstrations, or easily followable routine structure.
                </p>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Proven Strategies to Improve Your Save Rate
                </h3>
                <p className="mb-3">
                  Increasing your save rate requires strategic content creation focused on long-term value. Here are actionable tactics:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">1. Create Reference-Worthy Content</p>
                    <p>Develop content that viewers will need to return to. Think tutorials, step-by-step guides, recipes, workout routines, or educational series. The key is making content that can't be fully absorbed in one viewing.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">2. Use Clear Value Propositions</p>
                    <p>State the benefit upfront: "5 exercises to build bigger shoulders" or "How to meal prep for the week under 30." When viewers know exactly what value they'll get, they're more likely to save it.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">3. Include Call-to-Action for Saves</p>
                    <p>Don't be shy about asking viewers to save your content. Add text overlay saying "Save this for later!" or verbally remind them to bookmark the video for future reference.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">4. Create List-Based Content</p>
                    <p>Lists are inherently save-worthy: "10 TikTok Growth Hacks," "7 Budget Travel Tips," "15 Productivity Tools." Viewers save these to work through the list over time.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">5. Provide Downloadable Resources</p>
                    <p>Mention printable templates, checklists, or resources in your bio. Viewers save the video to remember to access these materials later.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">6. Create Series Content</p>
                    <p>Multi-part series encourage saves as viewers bookmark the content to watch subsequent episodes. "Day 1 of 30-Day Challenge" naturally prompts saves.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Common Mistakes That Lower Save Rate
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Creating Only Entertainment Content</p>
                    <p className="text-body-sm text-neutral-700">While entertaining content gets views and likes, it rarely gets saved. Balance viral entertainment with educational value content.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Lack of Clear Structure</p>
                    <p className="text-body-sm text-neutral-700">Rambling content without clear takeaways isn't save-worthy. Use numbered lists, clear steps, and organized information delivery.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">No Evergreen Value</p>
                    <p className="text-body-sm text-neutral-700">Trend-based content becomes outdated quickly. While riding trends is important, balance it with timeless educational content.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Overcomplicating Information</p>
                    <p className="text-body-sm text-neutral-700">If viewers can't easily follow or implement your advice, they won't save it. Keep instructions clear and actionable.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Not Optimizing for Search</p>
                    <p className="text-body-sm text-neutral-700">Use keywords in your caption and voiceover. Users searching for specific solutions are more likely to save content when they find it.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <MethodologySection
            calculatorName="save-rate"
            formula={`Save Rate = (Saves / Views) × 100

Example:
Views: 50,000
Saves: 1,000
Save Rate: (1,000 / 50,000) × 100 = 2%

This 2% save rate indicates good content value`}
            assumptions={[
              {
                label: 'Content Type',
                value:
                  'Educational, tutorial, and recipe content typically have higher save rates',
              },
              {
                label: 'Long-term Value',
                value: 'Saves boost content in search and recommendations over time',
              },
              {
                label: 'Evergreen Content',
                value: 'Content with high saves continues performing months/years later',
              },
            ]}
            dataSources={[
              'TikTok Algorithm Insights 2024',
              'Content Value Metrics Study',
              'User Engagement Behavior Research',
            ]}
            limitations="Save rate varies significantly by content type. Entertainment content naturally gets fewer saves than educational content. Compare against similar content in your niche."
            lastUpdated="December 5, 2025"
          />

          <FAQSection
            pageName="Save Rate Calculator"
            faqs={[
              {
                question: 'What is a good save rate on TikTok?',
                answer:
                  'Excellent: 5%+ (exceptional value), Good: 2-5% (save-worthy), Average: 0.5-2% (typical), Below Average: <0.5%. Educational creators should aim for 3-5%, while entertainment creators might see 0.5-2%. Focus on your niche\'s benchmarks.',
              },
              {
                question: 'Why do saves matter for the algorithm?',
                answer:
                  'Saves signal that your content has lasting value beyond immediate entertainment. TikTok interprets this as high-quality content worth recommending to more users. Saved videos often get resurged in the FYP weeks or months later, creating long-tail traffic.',
              },
              {
                question: 'How can I increase my save rate?',
                answer:
                  'Create save-worthy content: (1) Tutorials and how-tos, (2) Recipes and cooking guides, (3) Educational content worth revisiting, (4) Life hacks and tips, (5) Workout routines, (6) Book/product recommendations, (7) Travel itineraries, (8) Add text "Save this for later!" as a CTA.',
              },
              {
                question: 'Where can I see save counts in TikTok Analytics?',
                answer:
                  'Go to Creator Tools → Analytics → Content tab → Select a video → Scroll to engagement metrics. "Favorites" is TikTok\'s term for saves. High favorites often correlate with better long-term performance as TikTok reshows saved content.',
              },
              {
                question: 'Does save rate affect my follower count?',
                answer:
                  'Yes, indirectly. High save rates signal valuable content, leading to more algorithmic distribution. As more people discover your content through the FYP, your follower count naturally increases. Saved content also performs well in search, attracting followers looking for specific expertise.',
              },
              {
                question: 'How often should I track my save rate?',
                answer:
                  'Check save rates weekly for recent content and monthly for overall account trends. Focus on identifying patterns in your highest-saving content to replicate success. Track save rates alongside other metrics like watch time and engagement rate for comprehensive performance analysis.',
              },
              {
                question: 'Can I improve save rate on existing videos?',
                answer:
                  'While you can\'t directly change existing videos, you can add text overlays or edit captions to encourage saves. More effectively, analyze your high-saving content and create similar videos. Use TikTok\'s "Repost" feature to resurface valuable old content to new audiences.',
              },
              {
                question: 'What\'s the difference between saves and shares?',
                answer:
                  'Saves (Favorites) indicate personal value - viewers want to watch again later. Shares indicate social value - viewers think their friends should see it. Both are important: saves drive long-term performance and search visibility, while shares create viral potential and immediate reach expansion.',
              },
            ]}
          />

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-body-sm text-neutral-600">
              This TikTok Save Rate Calculator provides estimates based on publicly available information and industry research. Results may vary based on content type, niche, audience demographics, and TikTok's evolving algorithm. Save rate is one of many metrics that influence content performance. Use this calculator as a guide for content strategy, but always analyze multiple engagement metrics for comprehensive performance evaluation. TikTok's algorithm and features change regularly, so benchmarks should be updated periodically.
            </p>
          </Card>

          <RelatedCalculators
            currentCalculator="save-rate"
            calculators={[
              {
                name: 'Share Ratio Calculator',
                slug: 'share-ratio',
                description:
                  'Measure viral potential through shares',
                icon: Share2,
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Comprehensive viral score including saves',
                icon: Rocket,
              },
              {
                name: 'Content Value Calculator',
                slug: 'content-value',
                description: 'Estimate content portfolio value',
                icon: Gem,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
