import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { BarChart3, TrendingUp, MessageCircle, ThumbsUp, Target, Zap, CheckCircle, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Metrics & Analytics Guide | Engagement Benchmarks 2026',
  description: 'Understand TikTok engagement metrics including comments-to-likes ratio, engagement rates, and performance benchmarks. Free guides for creators to analyze content performance.',
  keywords: ['tiktok metrics', 'engagement analytics', 'comments to likes ratio', 'tiktok benchmarks', 'creator analytics', 'performance metrics'],
  alternates: {
    canonical: 'https://calculatecreator.com/metrics/',
  },
  openGraph: {
    title: 'TikTok Metrics & Analytics Guide | 2026 Benchmarks',
    description: 'Master TikTok engagement metrics with comprehensive guides on comments-to-likes ratio, engagement benchmarks, and performance analytics.',
    url: 'https://calculatecreator.com/metrics/',
    type: 'website',
  },
};

const metrics = [
  {
    name: 'Comments-to-Likes Ratio',
    slug: 'comments-to-likes-ratio',
    description: 'Measure audience engagement depth by analyzing the ratio of comments to likes on your TikTok videos.',
    icon: MessageCircle,
    benchmark: '1-5%',
  },
  {
    name: 'TikTok Comments-to-Likes Ratio Guide',
    slug: 'tiktok-comments-to-likes-ratio',
    description: 'Comprehensive guide to understanding and improving your comments-to-likes ratio for better algorithmic performance.',
    icon: BarChart3,
    benchmark: '2-4% optimal',
  },
];

const faqs = [
  {
    question: 'What is the most important TikTok metric for growth?',
    answer: 'Watch time and completion rate are the most important metrics for TikTok growth. The algorithm prioritizes videos that keep viewers watching until the end. A completion rate above 70% signals high-quality content. Secondary metrics like comments-to-likes ratio, shares, and saves also influence distribution but watch time remains the primary factor.',
  },
  {
    question: 'What is a good comments-to-likes ratio on TikTok?',
    answer: 'A good comments-to-likes ratio on TikTok is 1-5%, meaning 1-5 comments for every 100 likes. Ratios above 3% indicate highly engaging content that sparks conversation. Educational and controversial content typically achieves higher ratios (3-8%), while entertainment content averages 1-2%. Brands particularly value high comment ratios as they indicate genuine audience interest.',
  },
  {
    question: 'How does TikTok calculate engagement rate?',
    answer: 'TikTok engagement rate is calculated as: (Likes + Comments + Shares + Saves) / Views × 100. A good engagement rate is 4-6%, while excellent engagement exceeds 10%. The algorithm weighs different engagement types differently—shares and saves carry more weight than likes because they indicate stronger content value.',
  },
  {
    question: 'Why are my TikTok metrics dropping?',
    answer: 'Common reasons for dropping metrics include: posting at inconsistent times, content that doesn\'t match your niche, low video quality or poor audio, algorithm changes, or audience fatigue from repetitive content. Check your analytics to identify which specific metric is declining and adjust your strategy accordingly.',
  },
  {
    question: 'How often should I check my TikTok analytics?',
    answer: 'Check your TikTok analytics weekly for trend analysis and after each post for immediate performance feedback. Daily checking can lead to overreaction to normal fluctuations. Focus on 7-day and 28-day trends rather than individual video performance. Monthly deep-dives help identify long-term patterns and content strategy effectiveness.',
  },
  {
    question: 'What metrics matter most for brand deals?',
    answer: 'Brands prioritize engagement rate (4%+ is attractive), comments-to-likes ratio (shows genuine interest), audience demographics (age, location, interests), and average views per video. Follower count matters less than consistent engagement. Brands also look at saves and shares as indicators of content value and purchase intent.',
  },
];

export default function MetricsPage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Metrics & Analytics Guides"
        description="Comprehensive guides to understanding TikTok engagement metrics, performance benchmarks, and analytics for content creators."
        url="https://calculatecreator.com/metrics"
        calculators={metrics.map(m => ({ name: m.name, description: m.description, slug: m.slug }))}
        keywords={['tiktok metrics', 'engagement analytics', 'comments to likes ratio', 'creator benchmarks']}
        about={{
          name: 'TikTok Analytics',
          description: 'Understanding and optimizing TikTok performance metrics for creator growth',
        }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Metrics', url: 'https://calculatecreator.com/metrics' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Metrics', href: '/metrics' },
            ]}
          />

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white mb-6">
              <BarChart3 size={32} />
            </div>
            <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
              TikTok Metrics & Analytics
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Master TikTok performance metrics to understand your content's true impact. Learn how to analyze comments-to-likes ratios, engagement benchmarks, and key performance indicators that drive algorithmic success. These guides help creators interpret analytics data, identify growth opportunities, and optimize content strategy based on real performance insights rather than vanity metrics.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {metrics.map((metric) => (
              <Link
                key={metric.slug}
                href={`/metrics/${metric.slug}`}
                className="card card-hover p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <metric.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {metric.name}
                    </h2>
                    <p className="text-body-sm text-neutral-600 mb-3">
                      {metric.description}
                    </p>
                    <div className="flex items-center text-body-sm text-primary-600 font-medium">
                      <span>Benchmark: {metric.benchmark}</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Why Metrics Matter Section */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Why TikTok Metrics Matter for Creators
            </h2>
            <div className="space-y-6 text-body-md text-neutral-700">
              <p>
                Understanding TikTok metrics is essential for sustainable growth on the platform. While follower count gets the most attention, successful creators know that engagement metrics tell the real story of content performance and audience connection.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle size={20} /> Algorithm Signals
                  </h3>
                  <p className="text-body-sm text-green-800">
                    TikTok's algorithm uses engagement metrics to determine content quality. High comments-to-likes ratios, strong completion rates, and shares signal valuable content worthy of broader distribution on the For You Page.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Target size={20} /> Brand Partnerships
                  </h3>
                  <p className="text-body-sm text-blue-800">
                    Brands evaluate creators based on engagement quality, not just follower count. A creator with 50K followers and 8% engagement rate is more valuable than one with 500K followers and 1% engagement.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <TrendingUp size={20} /> Content Strategy
                  </h3>
                  <p className="text-body-sm text-purple-800">
                    Analyzing which videos generate the highest engagement helps you understand what resonates with your audience. Use metrics to double down on successful content formats and topics.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <Zap size={20} /> Growth Optimization
                  </h3>
                  <p className="text-body-sm text-amber-800">
                    Tracking metrics over time reveals patterns in your growth. Identify what's working, spot declining trends early, and make data-driven decisions to accelerate your creator journey.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Metrics Overview */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Essential TikTok Metrics to Track
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <ThumbsUp size={18} className="text-primary-600" /> Engagement Rate
                  </h3>
                  <span className="text-body-sm text-neutral-600">Target: 4-6%</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  Total engagement (likes + comments + shares + saves) divided by views. The most comprehensive measure of content performance and audience interest.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <MessageCircle size={18} className="text-primary-600" /> Comments-to-Likes Ratio
                  </h3>
                  <span className="text-body-sm text-neutral-600">Target: 1-5%</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  Measures how often viewers take the extra step to comment versus just liking. Higher ratios indicate content that sparks conversation and deeper engagement.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <BarChart3 size={18} className="text-primary-600" /> Completion Rate
                  </h3>
                  <span className="text-body-sm text-neutral-600">Target: 70%+</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  Percentage of viewers who watch your video to the end. The algorithm's primary quality signal—videos with high completion rates get pushed to more viewers.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <TrendingUp size={18} className="text-primary-600" /> Share Rate
                  </h3>
                  <span className="text-body-sm text-neutral-600">Target: 1-3%</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  Shares carry the most algorithmic weight because they indicate content valuable enough to spread. High share rates often lead to viral distribution.
                </p>
              </div>
            </div>
          </Card>

          {/* Common Mistakes */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Common Analytics Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertCircle size={18} /> Focusing Only on Views
                </h3>
                <p className="text-body-sm text-red-800">
                  Views are a vanity metric. A video with 100K views and 1% engagement is less valuable than one with 20K views and 10% engagement. Prioritize engagement quality over view quantity.
                </p>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertCircle size={18} /> Comparing to Other Creators
                </h3>
                <p className="text-body-sm text-red-800">
                  Metrics vary dramatically by niche, follower count, and content type. Compare your performance to your own historical data, not other creators. Track your personal improvement over time.
                </p>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertCircle size={18} /> Ignoring Trends Over Time
                </h3>
                <p className="text-body-sm text-red-800">
                  Single video performance varies naturally. Look at 7-day and 28-day trends to understand true performance patterns. One viral or underperforming video shouldn't drive strategy changes.
                </p>
              </div>
            </div>
          </Card>

          {/* Pro Tips */}
          <Card className="max-w-4xl mx-auto mb-8 bg-gradient-to-br from-primary-50 to-secondary-50">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              <Lightbulb size={24} className="text-primary-600" /> Pro Tips for Analytics Success
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Check analytics 24-48 hours after posting for accurate data',
                'Export your data monthly to track long-term trends',
                'A/B test posting times and track which slots perform best',
                'Monitor follower growth rate, not just total count',
                'Track which hooks generate highest completion rates',
                'Identify your top 10% of videos and analyze what they share',
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-body-sm text-neutral-700">{tip}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Related Resources */}
          <Card className="max-w-4xl mx-auto mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/engagement-rate/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-1">Engagement Rate Calculator</h3>
                <p className="text-body-sm text-neutral-600">Calculate your exact engagement rate</p>
              </Link>
              <Link href="/guides/increase-engagement-rate-tiktok/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-1">Increase Engagement Guide</h3>
                <p className="text-body-sm text-neutral-600">Proven strategies to boost engagement</p>
              </Link>
              <Link href="/calculators/viral-potential/" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h3 className="font-semibold text-neutral-900 mb-1">Viral Potential Calculator</h3>
                <p className="text-body-sm text-neutral-600">Assess your content's viral likelihood</p>
              </Link>
            </div>
          </Card>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <FAQSection
              pageName="TikTok Metrics"
              faqs={faqs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
