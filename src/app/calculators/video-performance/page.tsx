import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BarChart3, Rocket, Clock, Video, X, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { VideoPerformanceCalculatorWidget } from '@/components/calculators/video-performance/CalculatorWidget';

// Dynamic imports for E-E-A-T components
const PageAuthorByline = dynamic(() => import('@/lib/eeat/page-eeat').then(mod => ({ default: mod.PageAuthorByline })), {
  ssr: false
});
const PageEEAT = dynamic(() => import('@/lib/eeat/page-eeat').then(mod => ({ default: mod.PageEEAT })), {
  ssr: false
});

// FAQ data for schema markup
const faqData = [
  {
    question: 'What is a good video performance score?',
    answer: 'A score of 60+ is considered good, 80+ is excellent. However, context matters - a consistent score of 50-60 is better than occasional viral hits (90+) with mostly low scores. Focus on improving your average performance over time.',
  },
  {
    question: 'Why do some videos perform much better than others?',
    answer: 'Common factors: (1) Hook quality (first 3 seconds), (2) Trending audio usage, (3) Optimal posting time, (4) Topic relevance to current trends, (5) Video length (often shorter = higher completion rate), (6) Thumbnail/text overlay effectiveness. Analyze your top videos to identify patterns.',
  },
  {
    question: 'How can I improve my video performance score?',
    answer: 'Tips: (1) Study analytics for your top 10% of videos - replicate what works, (2) Optimize for watch time/completion rate, (3) Use CTAs to encourage comments/shares, (4) Test different content formats, (5) Post consistently to train the algorithm, (6) Engage with comments in first hour after posting.',
  },
  {
    question: 'Should I delete low-performing videos?',
    answer: 'Generally no - TikTok doesn\'t penalize low performers. However, if a video misrepresents your current content direction or brand, deletion is okay. Focus energy on creating better content rather than cleaning up old posts.',
  },
  {
    question: 'What is a good view-to-follower ratio?',
    answer: 'A ratio of 1.5-2x (views = 1.5-2× your follower count) is typical. 3x+ indicates strong algorithmic push and viral potential. Below 1x suggests your content isn\'t resonating with your audience or you have inactive followers. Consistent 2x+ ratio means your content regularly reaches beyond your follower base.',
  },
  {
    question: 'How often should I check my video performance?',
    answer: 'Check individual video performance 1 hour, 24 hours, and 7 days after posting to understand trajectory. Review overall performance metrics weekly to identify trends. Monthly deep-dives help spot patterns in your top-performing content categories, formats, and posting strategies.',
  },
  {
    question: 'What metrics matter most for TikTok performance?',
    answer: 'Priority order: (1) Watch time/completion rate (most important for algorithm), (2) Engagement rate (comments/shares > likes), (3) Share rate (indicates content value), (4) Profile visits (shows interest in you), (5) Follower growth rate. Views alone don\'t indicate quality—engagement velocity and depth matter more.',
  },
];

export default function VideoPerformanceCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="TikTok Video Performance Calculator"
        description="Calculate a comprehensive performance score for your TikTok videos based on views, engagement, reach, and audience interaction metrics."
        url="https://calculatecreator.com/calculators/video-performance"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 1583,
        }}
        datePublished="2024-01-15"
        dateModified="2025-12-04"
        keywords={['tiktok video performance', 'video analytics', 'content performance score', 'tiktok metrics']}
      />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Video Performance Calculator', url: 'https://calculatecreator.com/calculators/video-performance' },
        ]}
      />

    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Video Performance Calculator',
              href: '/calculators/video-performance',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white mb-6">
            <Video className="w-8 h-8" />
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Video Performance Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">
            Analyze your video performance with a comprehensive score based on
            views, engagement, and reach. Identify top-performing content and patterns to replicate success.
          </p>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
            Understanding video performance helps you create more viral content. Combine this analysis with our <Link href="/calculators/engagement-rate" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">Engagement Rate Calculator</Link> for audience quality insights and <Link href="/calculators/viral-potential" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">Viral Potential Calculator</Link> to predict which videos might go viral.
          </p>
        </div>

        {/* Author Byline */}
        <div className="max-w-5xl mx-auto mb-8">
          <PageAuthorByline pageSlug="video-performance" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <VideoPerformanceCalculatorWidget />

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Video Performance Score?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Video performance score is a composite metric that evaluates how
                  well your content performs across multiple dimensions: reach (views),
                  engagement (likes, comments, shares), and audience resonance. It provides a single number (0-100) that summarizes overall video quality and appeal.
                </p>
                <p>
                  <strong>Why video performance score matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Identifies which content types resonate best with your audience
                  </li>
                  <li>
                    Helps optimize future content strategy based on data-driven insights
                  </li>
                  <li>
                    Views exceeding 2x your follower count indicate viral potential
                  </li>
                  <li>
                    Brands evaluate performance scores when selecting creators for partnerships
                  </li>
                  <li>
                    Reveals patterns in your top-performing videos to replicate success
                  </li>
                  <li>
                    Tracks improvement over time as you optimize your content strategy
                  </li>
                </ul>
                <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Pro Insight:</strong> Consistency beats virality. A creator with steady 60-70 scores is more valuable (and monetizable) than someone with occasional 95s and mostly 20s. The algorithm and brands both prefer reliable performance over unpredictable spikes.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Use This Performance Calculator
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Follow these steps to analyze your TikTok video performance:
                </p>
                <div className="space-y-3">
                  {[
                    { step: 1, title: 'Choose Your Time Period', desc: 'Decide if you want to analyze recent videos (last 7-10) or overall averages (last 30 days). Recent data shows current trends, longer periods show consistency.' },
                    { step: 2, title: 'Calculate Averages', desc: 'For views, likes, comments, and shares, add up totals from your chosen period and divide by number of videos.' },
                    { step: 3, title: 'Enter Your Follower Count', desc: 'Use your current follower count from your TikTok profile.' },
                    { step: 4, title: 'Get Your Score', desc: 'Click "Calculate Performance Score" to see your comprehensive performance rating and breakdown.' },
                    { step: 5, title: 'Analyze Top Performers', desc: 'Look at your highest-scoring videos. What do they have in common? Topic? Format? Length? Hook? Replicate these elements.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">{item.title}</p>
                        <p className="text-body-sm text-neutral-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Performance Score Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Compare your video performance score to these industry benchmarks:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '80-100',
                    color: 'bg-success-DEFAULT',
                    description: 'Top-tier content—viral potential, strong brand appeal',
                  },
                  {
                    label: 'Good',
                    range: '60-79',
                    color: 'bg-secondary-500',
                    description: 'Above average—consistent growth, brand-ready',
                  },
                  {
                    label: 'Average',
                    range: '40-59',
                    color: 'bg-warning-DEFAULT',
                    description: 'Room for improvement—focus on optimization',
                  },
                  {
                    label: 'Below Average',
                    range: '<40',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs work—revisit content strategy',
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
                Key Metrics That Impact Performance Score
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">View-to-Follower Ratio (30% weight)</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Measures how far your content reaches beyond your existing audience. 2x+ indicates strong For You page presence.
                  </p>
                  <p className="text-body-xs text-neutral-600">Target: 1.5-3x your follower count</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Engagement Rate (40% weight)</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Percentage of viewers who interact (like, comment, share). Shows content quality and audience connection.
                  </p>
                  <p className="text-body-xs text-neutral-600">Target: 5-10% for most creators</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Share & Comment Ratio (20% weight)</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Shares and comments indicate deeper engagement than likes. Algorithm prioritizes these actions.
                  </p>
                  <p className="text-body-xs text-neutral-600">Target: 10%+ of total engagements should be comments/shares</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Consistency Factor (10% weight)</h3>
                  <p className="text-body-sm text-neutral-700 mb-2">
                    Reward for maintaining stable performance across videos. Algorithm loves consistency.
                  </p>
                  <p className="text-body-xs text-neutral-600">Track: Standard deviation of performance across videos</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Improve Your Performance Score
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Analyze Your Top 10%', desc: 'Export analytics for your best-performing videos. Look for common patterns: topics, formats, video length, hooks, sounds, posting times. Create more of what works.' },
                  { title: 'Optimize Your Hook (0-3 seconds)', desc: 'The first 3 seconds determine if viewers watch. Use text overlay, pattern interrupts, or intriguing questions to stop the scroll.' },
                  { title: 'Improve Watch Time', desc: 'Completion rate is crucial. Keep videos concise, cut fluff, maintain pacing, use jump cuts. Aim for 60%+ average watch time.' },
                  { title: 'Encourage Comments & Shares', desc: 'Ask questions, create debate, provide value people want to share. Comments/shares are weighted heavier than likes by the algorithm.' },
                  { title: 'Post Consistently', desc: '3-5 videos per week trains the algorithm and your audience. Consistency beats sporadic posting, even if individual videos vary in quality.' },
                  { title: 'Use Trending Sounds (Strategically)', desc: 'Trending audio helps discovery, but only if it fits your content naturally. Forced trends hurt performance.' },
                  { title: 'Engage in First Hour', desc: 'Reply to comments within 60 minutes of posting. This boosts engagement velocity, signaling to the algorithm to push your video further.' },
                  { title: 'Test Different Formats', desc: 'Try tutorials, behind-the-scenes, storytelling, challenges. Track which formats score highest for YOUR audience.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">{item.title}</p>
                      <p className="text-body-sm text-neutral-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Common Performance Mistakes to Avoid
              </h2>
              <div className="space-y-3">
                {[
                  { mistake: 'Chasing viral trends that don\'t fit your niche', solution: 'Focus on YOUR audience. A 50K view video to the right audience is better than 500K to the wrong one.' },
                  { mistake: 'Ignoring analytics and posting blindly', solution: 'Check TikTok Analytics weekly. Let data guide your content decisions, not guesses or assumptions.' },
                  { mistake: 'Making videos too long', solution: 'Shorter often performs better. Cut ruthlessly. If you can say it in 15 seconds, don\'t make it 60.' },
                  { mistake: 'Weak or missing hook', solution: 'First 3 seconds are everything. Open with value, intrigue, or pattern interrupt—not intros or logos.' },
                  { mistake: 'Not leveraging captions/text overlay', solution: '80%+ of TikTok is watched without sound. Use captions to communicate key points visually.' },
                  { mistake: 'Deleting "failed" videos', solution: 'TikTok doesn\'t penalize low performers. Leave them up—they might gain traction later or with different audiences.' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-warning-500">
                    <p className="font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                      <X className="w-4 h-4 text-error-DEFAULT" />
                      {item.mistake}
                    </p>
                    <p className="text-body-sm text-neutral-700 flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-DEFAULT" />
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="video-performance"
            formula={`Performance Score Components:
- Engagement Rate: (Likes + Comments + Shares) / Views × 100
- Reach Factor: Views / Followers
- Interaction Quality: (Comments + Shares) / Total Engagements
- Final Score: Weighted average of all components (0-100)`}
            assumptions={[
              {
                label: 'Calculation Method',
                value:
                  'Combines multiple metrics with algorithmic weights based on TikTok best practices',
              },
              {
                label: 'Viral Threshold',
                value: 'Views 2x+ your follower count indicates strong algorithmic push',
              },
              {
                label: 'Quality Signals',
                value: 'Comments and shares weighted higher than likes (indicate deeper engagement)',
              },
            ]}
            dataSources={[
              'TikTok Creator Analytics Best Practices 2024',
              'Social Media Engagement Benchmarks Report',
              'Viral Content Analysis Study by Influencer Marketing Hub',
            ]}
            limitations="Performance varies by niche, content type, and posting time. Scores are relative to your follower count - smaller accounts may score higher on reach metrics."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Video Performance Calculator"
            faqs={faqData}
          />

          <RelatedCalculators
            currentCalculator="video-performance"
            calculators={[
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description:
                  'Measure audience engagement across all videos',
                icon: 'BarChart3',
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Predict which videos might go viral',
                icon: 'Rocket',
              },
              {
                name: 'Completion Rate Calculator',
                slug: 'completion-rate',
                description: 'Analyze how well videos retain viewers',
                icon: 'Clock',
              },
            ]}
          />

          {/* Real-World Example Section */}
          <Card className="mt-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Real-World Example: Analyzing Video Performance
            </h2>
            <p className="text-body-md text-neutral-700 mb-4 leading-relaxed">
              Let's analyze Maya, a food content creator with 68,000 followers. She posts recipe tutorials and wants to understand why some videos perform better than others. Here's her last 10 videos' average performance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Maya's Average Stats</h3>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between"><span>Followers:</span><span className="font-medium">68,000</span></div>
                  <div className="flex justify-between"><span>Avg Views:</span><span className="font-medium">145,000</span></div>
                  <div className="flex justify-between"><span>Avg Likes:</span><span className="font-medium">8,200</span></div>
                  <div className="flex justify-between"><span>Avg Comments:</span><span className="font-medium">420</span></div>
                  <div className="flex justify-between"><span>Avg Shares:</span><span className="font-medium">680</span></div>
                  <div className="flex justify-between border-t pt-2 mt-2"><span>Total Engagements:</span><span className="font-bold">9,300</span></div>
                </div>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200">
                <h3 className="text-label-md font-semibold text-neutral-900 mb-3">Performance Analysis</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-display-sm font-bold text-secondary-600">74</p>
                    <p className="text-body-sm text-neutral-700">Performance Score (Good)</p>
                  </div>
                  <div className="space-y-2 text-body-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">View-to-Follower Ratio:</span>
                      <span className="font-medium text-neutral-900">2.13x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Engagement Rate:</span>
                      <span className="font-medium text-neutral-900">6.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Share+Comment %:</span>
                      <span className="font-medium text-neutral-900">11.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-success-50 rounded-lg border border-success-200 mb-4">
              <p className="text-body-sm text-neutral-800 mb-2">
                <span className="font-semibold">Analysis:</span> Maya's 74 score is "Good." Her 2.13x view-to-follower ratio shows strong For You page presence—her videos consistently reach 2x beyond her follower base. The 6.4% engagement rate is above average for food content, and her 11.8% share/comment ratio indicates people find her recipes valuable enough to save and share.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="text-label-md font-semibold text-neutral-900 mb-2">Top-Performing Video Breakdown</h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                Maya's best video (Score: 89) was a "5-Minute Pasta Hack" with 387K views, 22K likes, 1.2K comments, 2.8K shares:
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                  <span><strong>Hook:</strong> "This pasta hack changed my life" (strong opening)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                  <span><strong>Length:</strong> 23 seconds (high completion rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                  <span><strong>Value:</strong> Simple, replicable, saved thousands of times</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                  <span><strong>Engagement:</strong> Comments asking questions drove algorithm boost</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                  <span><strong>Share ratio:</strong> 12.7% (people wanted to share the hack)</span>
                </li>
              </ul>
              <p className="text-body-xs text-neutral-600 mt-3">
                <strong>Optimization Plan:</strong> Maya now creates more "quick hack" format videos (under 30 seconds, simple techniques, strong hooks), which consistently score 70-85. She increased posting frequency of this format from 1/week to 3/week, resulting in 40% follower growth over 2 months.
              </p>
            </div>
          </Card>

          {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
          <div className="mt-12">
            <PageEEAT pageSlug="video-performance" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
