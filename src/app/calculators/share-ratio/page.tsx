'use client';

import React, { useState } from 'react';
import { Rocket, Bookmark, BarChart3, Share2 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateShareRatio,
  validateShareRatioInput,
} from '@/lib/calculators/share-ratio';
import type {
  ShareRatioInput,
  ShareRatioResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ShareRatioCalculatorPage() {
  const [inputs, setInputs] = useState<ShareRatioInput>({
    views: 50000,
    shares: 1500,
  });

  const [results, setResults] = useState<ShareRatioResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ShareRatioInput,
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
    const validation = validateShareRatioInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateShareRatio(inputs);
      setResults(result);

      trackCalculation(
        'share-ratio',
        { ...inputs },
        { shareRatio: result.shareRatio, viralityRating: result.viralityRating }
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
              label: 'Share Ratio Calculator',
              href: '/calculators/share-ratio',
            },
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
            Calculate your share-to-view ratio to measure viral potential. Shares
            are the strongest signal to TikTok's algorithm for content quality and reach expansion.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Share Ratio
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
              id="shares"
              label="Total Shares"
              type="number"
              value={inputs.shares}
              onChange={(value) => handleInputChange('shares', value)}
              placeholder="e.g., 1500"
              helperText="Number of times video was shared"
              error={errors.shares}
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
              Calculate Share Ratio
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Share Ratio"
                  subtitle={`${results.viralityRating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    What This Means
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    {results.shareRatio >= 5
                      ? 'Exceptional! Your content is highly shareable and has viral potential.'
                      : results.shareRatio >= 2
                      ? 'Strong performance! Above-average share rate indicates engaging content.'
                      : results.shareRatio >= 0.5
                      ? 'Average share rate. Focus on creating more shareable moments.'
                      : 'Low share rate. Create content that viewers feel compelled to share with friends.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

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
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    TikTok's algorithm weighs shares more heavily than likes or comments
                  </li>
                  <li>
                    5%+ share ratio dramatically increases For You Page distribution
                  </li>
                  <li>
                    Shares indicate genuine value - people stake their reputation
                  </li>
                  <li>
                    High share rates trigger exponential reach growth
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Share Ratio Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '5%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Viral-worthy content',
                  },
                  {
                    label: 'Good',
                    range: '2-5%',
                    color: 'bg-secondary-500',
                    description: 'Above average shareability',
                  },
                  {
                    label: 'Average',
                    range: '0.5-2%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Typical share rate',
                  },
                  {
                    label: 'Below Average',
                    range: '<0.5%',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs improvement',
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
              Mastering TikTok Share Ratio: The Ultimate Virality Metric
            </h2>
            <div className="space-y-6 text-body-md text-neutral-700">
              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  How to Use This Share Ratio Calculator
                </h3>
                <p className="mb-3">
                  Understanding your share ratio is critical for predicting and achieving viral content. Here's how to use this calculator effectively:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Access TikTok Analytics:</strong> Open your TikTok app, tap Profile, then the three-line menu, and select Creator Tools followed by Analytics.</li>
                  <li><strong>Navigate to Content:</strong> Tap the Content tab to see all your posted videos with performance metrics.</li>
                  <li><strong>Select Target Video:</strong> Choose the video you want to analyze for shareability performance.</li>
                  <li><strong>Locate Share Metrics:</strong> Scroll through the engagement section to find the "Shares" count displayed alongside likes and comments.</li>
                  <li><strong>Input View Count:</strong> Enter the total number of views in the calculator's "Total Views" field.</li>
                  <li><strong>Input Share Count:</strong> Enter the number of shares in the "Total Shares" field.</li>
                  <li><strong>Analyze Results:</strong> Review your share ratio percentage and virality rating to understand your content's viral potential.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Why Share Ratio is the Most Important TikTok Metric
                </h3>
                <p className="mb-3">
                  While likes and comments get more attention, shares are the true currency of viral content on TikTok. When someone shares your video, they're essentially endorsing it to their social circle, putting their personal reputation on the line. This makes shares the strongest quality signal to TikTok's algorithm.
                </p>
                <p className="mb-3">
                  TikTok's recommendation system prioritizes shares over other engagement metrics because:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Shares create network effects:</strong> Each share exposes your content to entirely new audiences who may have never encountered your profile, creating exponential growth potential.</li>
                  <li><strong>Shares require more effort:</strong> Unlike double-tapping for a like, sharing requires deliberate action and confidence that the content is worth recommending.</li>
                  <li><strong>Shares indicate quality:</strong> People carefully curate what they share because it reflects on them. A high share rate tells TikTok your content is genuinely valuable.</li>
                  <li><strong>Shares extend reach:</strong> The algorithm interprets shares as a signal to push content beyond your existing audience and deeper into the For You Page of new users.</li>
                </ul>
                <p className="mt-3">
                  Content that achieves a 5%+ share ratio often experiences viral momentum, with TikTok dramatically increasing distribution to test the content with progressively larger audiences.
                </p>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Share Ratio Benchmarks Across Content Types
                </h3>
                <p className="mb-3">
                  Different content niches naturally achieve varying share rates. Understanding your category's benchmarks helps set realistic goals:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Educational & Tutorial Content (3-7% share rate)</p>
                    <p className="text-body-sm">How-to videos, life hacks, and skill tutorials get shared frequently as viewers want to help friends learn the same valuable information.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Relatable Humor & Memes (4-8% share rate)</p>
                    <p className="text-body-sm">Comedy content with universal relatability gets tagged and shared as users identify friends who'd appreciate the humor.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Surprising Facts & Statistics (5-10% share rate)</p>
                    <p className="text-body-sm">"Mind-blowing" content that challenges assumptions or reveals little-known information is highly shareable.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Emotional Stories & Inspiration (3-6% share rate)</p>
                    <p className="text-body-sm">Content that evokes strong emotions motivates viewers to share the experience with their network.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Product Reviews & Recommendations (2-5% share rate)</p>
                    <p className="text-body-sm">Helpful product discoveries get shared with friends who might benefit from the recommendation.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Dance & Lip Sync (0.5-2% share rate)</p>
                    <p className="text-body-sm">While popular for participation, trend-following content typically has lower share rates unless exceptionally creative.</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-1">Personal Vlog Content (0.3-1.5% share rate)</p>
                    <p className="text-body-sm">Day-in-the-life and personal update content generally sees the lowest share rates as it's less relevant to viewers' networks.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Real-World Example: Analyzing Share Ratio Success
                </h3>
                <p className="mb-3">
                  Let's examine a practical scenario to understand how share ratio translates to viral success:
                </p>
                <div className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg mb-4">
                  <p className="font-semibold text-neutral-900 mb-3">Case Study: Life Hack Video</p>
                  <ul className="space-y-2 text-body-sm">
                    <li><strong>Content Type:</strong> "3 Hidden iPhone Features You Never Knew Existed"</li>
                    <li><strong>Total Views:</strong> 120,000</li>
                    <li><strong>Total Shares:</strong> 7,200</li>
                    <li><strong>Calculation:</strong> (7,200 ÷ 120,000) × 100 = 6%</li>
                    <li><strong>Analysis:</strong> This excellent 6% share ratio indicates strong viral potential. Viewers found the tips valuable enough to share with friends and family who own iPhones.</li>
                    <li><strong>Algorithm Response:</strong> TikTok likely pushed this video to progressively larger audiences, testing it across different user segments to maximize reach.</li>
                  </ul>
                </div>
                <p className="mb-3">
                  This creator should analyze the elements that made this video shareable: immediate practical value, surprising information, clear presentation, and universal appeal to iPhone users. Replicating these elements in future content can consistently achieve high share rates.
                </p>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Proven Strategies to Boost Your Share Ratio
                </h3>
                <p className="mb-3">
                  Increasing your share ratio requires strategic content creation focused on shareability. Implement these tactics:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">1. Create "Tag a Friend" Moments</p>
                    <p>Design content that makes viewers immediately think of someone specific. Use captions like "Tag someone who needs to see this" or create situations so relatable that tagging is inevitable. Comedy sketches about specific personality types work exceptionally well.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">2. Deliver Surprising Information</p>
                    <p>Share counterintuitive facts, hidden features, or little-known tips that make viewers say "Wait, what?" The surprise factor compels sharing. Frame it as "Most people don't know this..." to create urgency around sharing exclusive knowledge.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">3. Solve Specific Problems</p>
                    <p>Address common frustrations with clear solutions. "How to fix..." or "The easy way to..." content gets shared because viewers want to help others facing the same issue. Be specific rather than generic for maximum shareability.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">4. Trigger Strong Emotions</p>
                    <p>Content that evokes powerful feelings - whether laughter, inspiration, anger, or joy - gets shared more frequently. Emotional resonance makes people want to extend that feeling to their social circle.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">5. Make Viewers Look Good</p>
                    <p>Create content that makes the sharer appear knowledgeable, cultured, or helpful. People share content that enhances their personal brand within their social network. Educational content excels here.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">6. Use Controversy Strategically</p>
                    <p>Respectfully challenge common beliefs or present unpopular opinions with solid reasoning. Controversial takes spark conversation and sharing, but ensure you're adding value, not just being contrarian for attention.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">7. Include Clear Call-to-Actions</p>
                    <p>Don't hesitate to explicitly ask for shares. "Send this to someone who needs it" or "Share if you agree" can significantly boost share rates. Make the CTA specific and relevant to your content.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">8. Create Compilation Value</p>
                    <p>Develop content that people want to save and reference later. Lists, tutorials, and resource compilations naturally get shared as viewers bookmark them by sending to themselves or others.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Common Mistakes That Kill Share Ratio
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Making Content Too Personal</p>
                    <p className="text-body-sm text-neutral-700">Vlogs about your specific daily life lack shareability because they're not relevant to your viewers' networks. Balance personal content with universally shareable material.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Ignoring the Hook</p>
                    <p className="text-body-sm text-neutral-700">If viewers scroll past in the first second, they can't share. Create compelling hooks that immediately communicate value or intrigue to maximize watch time and sharing.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Being Too Niche Without Context</p>
                    <p className="text-body-sm text-neutral-700">Inside jokes or extremely specific references limit shareability. Provide enough context that shared content makes sense to people outside your immediate audience.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Creating Only Passive Content</p>
                    <p className="text-body-sm text-neutral-700">Content that's merely interesting but doesn't inspire action won't be shared. Include elements that make viewers want to discuss, debate, or act on your content.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Delivering Expected Information</p>
                    <p className="text-body-sm text-neutral-700">If your content is common knowledge or predictable, viewers have no reason to share it. Always include a unique angle, surprising detail, or novel approach.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-semibold text-neutral-900 mb-2">Poor Production Quality</p>
                    <p className="text-body-sm text-neutral-700">Viewers hesitate to share content with bad audio, poor lighting, or unprofessional presentation because it reflects on them. Maintain minimum quality standards.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  Advanced Share Ratio Optimization Techniques
                </h3>
                <p className="mb-3">
                  Once you've mastered the basics, implement these advanced strategies to further boost your share ratio:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Time Your Posts Strategically:</strong> Share content when your audience is most active and likely to engage immediately, creating momentum that the algorithm rewards.</li>
                  <li><strong>Create Series That Require Context:</strong> Multi-part content encourages sharing as viewers share previous episodes to provide context to friends.</li>
                  <li><strong>Leverage Current Events:</strong> Timely content related to trending topics gets shared more as people participate in cultural conversations.</li>
                  <li><strong>Use Cliffhangers and Open Loops:</strong> Create anticipation that makes viewers share and return for follow-up content.</li>
                  <li><strong>Collaborate with Other Creators:</strong> Cross-promotion introduces your content to new audiences predisposed to engage and share.</li>
                  <li><strong>A/B Test Your Hooks:</strong> Post similar content with different openings to identify which hooks drive the highest share rates.</li>
                </ul>
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
              {
                label: 'Algorithm Weight',
                value:
                  'Shares are weighted 2-3x more than likes in TikTok\'s algorithm',
              },
              {
                label: 'Viral Threshold',
                value: '5%+ share ratio significantly increases viral probability',
              },
              {
                label: 'Content Type',
                value: 'Educational and emotional content typically have higher share rates',
              },
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
                answer:
                  'Excellent: 5%+ (1 in 20 viewers shares), Good: 2-5% (strong shareability), Average: 0.5-2% (typical), Below Average: <0.5% (needs work). Even 2-3% is impressive - it means highly engaged viewers who find value worth sharing.',
              },
              {
                question: 'Why are shares more important than likes?',
                answer:
                  'Shares require more effort and social risk - you\'re recommending content to your friends. TikTok treats this as a stronger signal of quality. Plus shares expose your content to entirely new networks, creating exponential reach potential that likes/comments can\'t match.',
              },
              {
                question: 'How can I increase my share ratio?',
                answer:
                  'Create share-worthy content: (1) Surprising facts/statistics ("Wait, WHAT?"), (2) Relatable humor friends will tag each other in, (3) Useful tutorials worth saving/sharing, (4) Controversial takes (tastefully), (5) Emotional stories, (6) Life hacks or tips, (7) Content that makes people look good for sharing it.',
              },
              {
                question: 'Where can I see my share count in TikTok Analytics?',
                answer:
                  'Go to Creator Tools → Analytics → Content tab → Select a video → Scroll to "Shares" under engagement metrics. TikTok also shows share trends over time. Focus on analyzing your highest-performing videos to identify share-worthy patterns.',
              },
              {
                question: 'Does share ratio affect my video reach?',
                answer:
                  'Absolutely. High share ratios signal to TikTok that your content is valuable, prompting the algorithm to distribute it more widely. Content with 5%+ share ratios often experiences viral momentum as TikTok progressively shows it to larger audiences. Shares also expose your content to entirely new networks outside your followers.',
              },
              {
                question: 'Can I see who shared my videos?',
                answer:
                  'TikTok shows you the total share count but doesn\'t reveal who specifically shared your content due to privacy considerations. You can, however, see when your video is shared to other platforms like Instagram or Snapchat through the analytics breakdown.',
              },
              {
                question: 'How quickly should shares happen for virality?',
                answer:
                  'The first 1-3 hours after posting are critical. Rapid shares in the initial window signal strong engagement to the algorithm, increasing the likelihood of broader distribution. If a video achieves 2%+ share ratio in the first few hours, it has strong viral potential. Monitor early performance closely.',
              },
              {
                question: 'Should I focus on shares over other metrics?',
                answer:
                  'While shares are crucial for virality, balance them with other metrics. High shares with low watch time or completion rate won\'t go viral. Focus on: (1) Watch time and completion rate first, (2) Shares second for viral distribution, (3) Comments for community building, (4) Saves for evergreen value. All metrics work together.',
              },
            ]}
          />

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-body-sm text-neutral-600">
              This TikTok Share Ratio Calculator provides estimates based on publicly available information and industry research. Results may vary based on content type, niche, audience demographics, posting time, and TikTok's evolving algorithm. Share ratio is one of many factors that influence viral potential and content reach. Use this calculator as a strategic guide, but always analyze multiple engagement metrics for comprehensive performance evaluation. TikTok's algorithm and recommendation systems change regularly, so benchmarks and best practices should be reviewed periodically for accuracy.
            </p>
          </Card>

          <RelatedCalculators
            currentCalculator="share-ratio"
            calculators={[
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description:
                  'Comprehensive viral potential score including shares',
                icon: Rocket,
              },
              {
                name: 'Save Rate Calculator',
                slug: 'save-rate',
                description: 'Measure content value through saves',
                icon: Bookmark,
              },
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Overall engagement including shares',
                icon: BarChart3,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
