import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle, X, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { ToolExplanationSection } from '@/components/calculator/ToolExplanationSection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { CompletionRateCalculatorWidget } from '@/components/calculators/completion-rate/CalculatorWidget';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import { InputsExplained } from '@/components/calculator/InputsExplained';

export const metadata: Metadata = {
  title: "TikTok Completion Rate Calculator — Video Watch-Through Rate",
  description: "Calculate your TikTok video completion rate. See what percentage of viewers watch to the end and how it affects algorithm distribution and reach.",
  keywords: ['completion rate calculator', 'video completion', 'watch through rate', 'tiktok retention', 'video analytics'],
  alternates: {
    canonical: 'https://tiktokcalculator.net/calculators/completion-rate/',
  },
};

const faqData = [
  {
    question: 'What is a good completion rate on TikTok?',
    answer: 'For videos under 30 seconds: aim for 70%+. For 30-60 seconds: 50%+ is good. For 60+ seconds: 40%+ is solid. Videos with 80%+ completion rates often go viral regardless of follower count. Focus on beating your own baseline averages and compare against similar content lengths in your niche.',
  },
  {
    question: 'How do I increase my completion rate?',
    answer: 'Delete the first 2-3 seconds of slow intro, put the payoff at the very end, use text overlays to create anticipation, cut out all fluff ruthlessly, make videos shorter, add pattern interrupts (camera changes, zooms) every 5-7 seconds, create loop-worthy endings, and test multiple versions of the same content at different lengths.',
  },
  {
    question: 'Where can I find completion rate in TikTok Analytics?',
    answer: 'TikTok doesn\'t show "completion rate" directly. Go to Analytics → Content → Select a video. Find "Average watch time" and divide by video duration, then multiply by 100. For example: 25-second average watch time on a 30-second video = (25/30) × 100 = 83.3% completion rate.',
  },
  {
    question: 'Does looping/rewatching count toward completion rate?',
    answer: 'Yes! When viewers rewatch, it can push completion rate over 100%. Creating loop-worthy content where the ending flows seamlessly back to the beginning is one of the most powerful virality strategies. Videos with 100%+ completion rates signal exceptional quality to the algorithm.',
  },
  {
    question: 'Why does completion rate matter more than views?',
    answer: 'Completion rate is a quality signal while views are a volume metric. TikTok algorithm uses completion rate to determine if your content deserves wider distribution. A video with 1,000 views and 90% completion will get pushed harder than one with 100,000 views and 20% completion. High completion proves your content delivers value.',
  },
  {
    question: 'What video length has the best completion rate?',
    answer: 'Videos under 15 seconds typically achieve 70-95% completion rates, the highest on the platform. However, optimal length depends on your content type. Comedy works best at 7-15 seconds, tutorials at 20-40 seconds, and storytelling at 45-90 seconds. Test different lengths to find what works for your niche.',
  },
  {
    question: 'Can completion rate be too high?',
    answer: 'No, there is no such thing as a completion rate that is too high. Rates over 100% (from rewatches) are ideal and signal loop-worthy viral content. Even 150-200% completion is possible and highly beneficial. The algorithm rewards content that keeps viewers engaged through multiple watch cycles.',
  },
  {
    question: 'How does completion rate affect the TikTok algorithm?',
    answer: 'Completion rate is one of the top 3 algorithmic ranking factors alongside watch time and engagement rate. Videos with high completion in the first hour get pushed to larger audiences. The algorithm interprets high completion as proof your content is worth showing to more people, triggering exponential reach growth.',
  },
  {
    question: 'Should I make all my videos shorter to boost completion rate?',
    answer: 'Not necessarily. While shorter videos achieve higher completion rates, longer videos can drive more total watch time, which is also valuable. The key is information density - every second must add value. A tight 60-second video can outperform a bloated 15-second video. Optimize for value per second, not just brevity.',
  },
  {
    question: 'How often should I check my completion rate?',
    answer: 'Check completion rate for each video at 1 hour, 24 hours, and 7 days after posting. The first hour shows initial performance, 24 hours reveals the first push cycle, and 7 days captures the full lifecycle. Compare completion rates across similar content types to identify patterns and optimize your strategy.',
  },
];

export default function CompletionRateCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Video Completion Rate Calculator"
        description="Calculate your TikTok video completion rate. Measure watch-through rates and optimize content length for better algorithm performance."
        url="https://tiktokcalculator.net/calculators/completion-rate/"
        datePublished="2024-02-10"
        dateModified="2026-03-01"
        keywords={['completion rate calculator', 'video completion', 'watch through rate', 'tiktok retention', 'video analytics']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.net' },
          { name: 'Calculators', url: 'https://tiktokcalculator.net/calculators/' },
          { name: 'Completion Rate Calculator', url: 'https://tiktokcalculator.net/calculators/completion-rate/' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators/' },
            { label: 'Completion Rate Calculator', href: '/calculators/completion-rate/' },
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
            Calculate what percentage of viewers watch your video all the way to the end using average watch time and video duration. Completion rate is one of the strongest algorithmic signals on TikTok. Videos with 80%+ completion rates often go viral as they prove your content delivers on its promise. Essential for optimizing video length and pacing decisions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <PageAuthorByline pageSlug="completion-rate" />
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <CompletionRateCalculatorWidget />

            {/* Inputs Explained */}
            <div>
              <InputsExplained
                inputs={[
                  { name: 'Total Views', description: 'Number of times the video was started', example: '100,000', required: true },
                  { name: 'Complete Views', description: 'Number of viewers who watched to the end', example: '65,000', required: true },
                ]}
                note="Aim for 60%+ completion rate. Videos under 15 seconds naturally have higher completion rates."
              />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
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

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Completion Rate Benchmarks by Video Length
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Video length dramatically impacts completion rates. Shorter content inherently achieves higher completion, but value density matters more than duration alone.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-success-50 border border-success-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-neutral-900">5-15 seconds</p>
                    <p className="text-body-sm text-neutral-600">Ultra-short format</p>
                  </div>
                  <span className="font-bold text-success-700 text-lg">70-95%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 border border-primary-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-neutral-900">15-30 seconds</p>
                    <p className="text-body-sm text-neutral-600">Standard TikTok format</p>
                  </div>
                  <span className="font-bold text-primary-700 text-lg">60-80%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-neutral-900">30-60 seconds</p>
                    <p className="text-body-sm text-neutral-600">Extended content</p>
                  </div>
                  <span className="font-bold text-secondary-700 text-lg">45-65%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-warning-50 border border-warning-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-neutral-900">60-90 seconds</p>
                    <p className="text-body-sm text-neutral-600">Long-form storytelling</p>
                  </div>
                  <span className="font-bold text-warning-700 text-lg">35-55%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-100 border border-neutral-300 rounded-lg">
                  <div>
                    <p className="font-semibold text-neutral-900">90+ seconds</p>
                    <p className="text-body-sm text-neutral-600">Maximum length content</p>
                  </div>
                  <span className="font-bold text-neutral-700 text-lg">25-45%</span>
                </div>
              </div>
              <p className="text-body-sm text-neutral-600 mt-4 p-3 bg-neutral-50 rounded-lg">
                <strong>Key insight:</strong> A 40% completion rate on a 90-second educational video may be more valuable than 80% on a 10-second meme. Context and content quality matter. Focus on delivering maximum value per second rather than simply making videos shorter.
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h2 className="text-heading-xl font-bold text-neutral-900 mb-6 text-center">
              How to Improve Your Completion Rate
            </h2>
            <p className="text-body-lg text-neutral-600 text-center mb-8 max-w-3xl mx-auto">
              Completion rate is one of the most powerful levers for virality. These three core strategies address the biggest drop-off points in most TikTok videos.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 border-2 border-secondary-200 hover:border-secondary-400 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-secondary-700">1</span>
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">
                  Master the Hook
                </h3>
                <p className="text-body-md text-neutral-700 mb-4">
                  The first 1-3 seconds determine if viewers stay or scroll. Most creators lose 60% of potential viewers in this window.
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span>Start with your best moment or payoff preview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span>Delete all intro fluff, logo animations, slow builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span>Use text overlays for instant context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span>Test multiple hook versions of same video</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-primary-200 hover:border-primary-400 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-700">2</span>
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">
                  Maintain Momentum
                </h3>
                <p className="text-body-md text-neutral-700 mb-4">
                  Every second after the hook is a battle to keep attention. Pattern interrupts reset the attention clock.
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Change camera angle every 5-7 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Use visual effects, zooms, or transitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Add text reveals or on-screen graphics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Cut ruthlessly - remove every boring frame</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-success-200 hover:border-success-400 transition-colors">
                <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-success-700">3</span>
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">
                  Optimize the Ending
                </h3>
                <p className="text-body-md text-neutral-700 mb-4">
                  The final seconds determine if viewers rewatch and whether they feel satisfied or disappointed.
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-success-600 flex-shrink-0 mt-0.5" />
                    <span>Place payoff in the last 2-3 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-success-600 flex-shrink-0 mt-0.5" />
                    <span>Create loop-worthy endings that restart seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-success-600 flex-shrink-0 mt-0.5" />
                    <span>End on a question or teaser for next video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-success-600 flex-shrink-0 mt-0.5" />
                    <span>Avoid slow outros or long CTAs that kill rewatches</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              8 Advanced Tactics to Maximize Completion Rate
            </h2>
            <div className="space-y-4">
              {[
                { title: '1. Delete Your First 2-3 Seconds', description: 'Most creators waste precious seconds on slow openings. Start with your best moment. Export your video, then trim the beginning in TikTok before posting.' },
                { title: '2. Put the Payoff at the Very End', description: 'Structure your video so the punchline or reveal comes in the final 2-3 seconds. This forces viewers to watch completely to get the value they were promised.' },
                { title: '3. Use Text Overlays to Tease What\'s Coming', description: 'Add on-screen text like "Wait for it..." or "Watch until the end" to create anticipation. Position text to guide eye movement throughout the video.' },
                { title: '4. Make Videos Shorter - Ruthlessly', description: 'If you can say it in 20 seconds, don\'t stretch it to 40. Every second hemorrhages viewers. Review your raw footage and ask: does every second add value?' },
                { title: '5. Use Pattern Interrupts Every 5-7 Seconds', description: 'Change camera angle, zoom level, add text overlays, or switch scenes to reset viewer attention span. Maintain visual variety without being chaotic.' },
                { title: '6. Create Loop-Worthy Endings', description: 'Design endings that flow back to the beginning for rewatches. Completion rates over 100% dramatically boost algorithmic distribution.' },
                { title: '7. Build Curiosity Throughout', description: 'Create mini-cliffhangers every 5-10 seconds: "But that\'s not even the crazy part..." Keep promising value just ahead to maintain watch time.' },
                { title: '8. Test Different Video Lengths', description: 'Post the same concept in 15s, 30s, and 60s versions and compare completion rates. Your optimal length varies by niche and content type.' },
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

          <ToolExplanationSection
            whatItDoes="This calculator determines the percentage of viewers who watch your TikTok video all the way to the end by dividing average watch time by video duration. Completion rate is one of TikTok's top three algorithmic ranking factors, and videos with 80%+ completion frequently go viral regardless of follower count."
            howToUse={[
              'Find your video\'s average watch time in TikTok Analytics (Creator Tools > Analytics > Content > select a video).',
              'Enter the video duration and the average watch time into the calculator fields.',
              'Review your completion rate percentage and compare it against the length-specific benchmarks to identify whether your hook, pacing, or ending needs optimization.',
            ]}
            examples={[
              { scenario: 'Short-form comedy clip', input: '12-second video, 10.5-second average watch time', output: '87.5% completion rate -- excellent, strong viral potential' },
              { scenario: 'Product tutorial', input: '45-second video, 30-second average watch time', output: '66.7% completion rate -- good for this length, consider tightening the middle section' },
              { scenario: 'Storytelling content', input: '90-second video, 38-second average watch time', output: '42.2% completion rate -- average for long-form, needs stronger hooks or pattern interrupts to reduce drop-off' },
            ]}
            limitations={[
              'Shorter videos inherently achieve higher completion rates, so comparing a 10-second clip against a 90-second video is misleading without adjusting for length.',
              'Completion rates above 100% are possible when viewers loop (rewatch) content, which is actually a positive signal but can make percentage comparisons confusing.',
              'The calculator uses average watch time, which does not reveal where viewers drop off -- use TikTok\'s retention graph for second-by-second analysis.',
            ]}
            relatedContent={[
              { title: 'Watch Time Calculator', href: '/calculators/watch-time/' },
              { title: 'Engagement Rate Calculator', href: '/calculators/engagement-rate/' },
              { title: 'Comment Rate Calculator', href: '/calculators/comment-rate/' },
            ]}
          />

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
            faqs={faqData}
          />

          <RelatedCalculators
            currentCalculator="completion-rate"
            calculators={[
              { name: 'Watch Time Calculator', slug: 'watch-time', description: 'Calculate total watch hours and retention rate', icon: 'Clock' },
              { name: 'Viral Potential Calculator', slug: 'viral-potential', description: 'High completion rate = viral potential', icon: 'Rocket' },
              { name: 'Video Performance Calculator', slug: 'video-performance', description: 'Comprehensive video performance analysis', icon: 'Video' },
            ]}
          />

          <div className="mt-12">
            <PageEEAT pageSlug="completion-rate" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
