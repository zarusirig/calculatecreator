import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { BarChart3, Handshake, Video } from 'lucide-react';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'Engagement & Influence Calculators | TikTok Creator Tools',
  description: 'Calculate your TikTok engagement rate, influencer pricing, and video performance. Free tools to measure your influence.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/engagement-influence/',
  },
};

const calculators = [
  {
    name: 'Engagement Calculator',
    slug: 'engagement',
    description: 'Calculate your TikTok engagement rate and compare to industry benchmarks.',
    icon: BarChart3,
  },
  {
    name: 'Influencer Pricing Calculator',
    slug: 'influencer-pricing',
    description: 'Calculate how much you should charge brands for sponsored content based on followers and engagement.',
    icon: Handshake,
  },
  {
    name: 'Video Engagement Calculator',
    slug: 'video-engagement',
    description: 'Predict video performance and get a comprehensive performance score based on key metrics.',
    icon: Video,
  },
];

const faqs = [
  {
    question: 'What is a good engagement rate on TikTok?',
    answer: 'A good TikTok engagement rate varies by follower count. Nano-influencers (1K-10K followers) should aim for 15-20% engagement, micro-influencers (10K-100K) typically see 8-15%, and large creators (100K+) average 5-10%. Engagement rate is calculated as (likes + comments + shares) / followers × 100. Rates above these benchmarks indicate highly engaged audiences that brands value.',
  },
  {
    question: 'How do brands evaluate influencer rates and pricing?',
    answer: 'Brands evaluate influencers based on engagement rate (more important than follower count), audience demographics, niche relevance, and past campaign performance. Most use the $10-$30 per 1,000 followers benchmark, but creators with 10%+ engagement can charge 2-3× higher. Brands also consider video quality, posting consistency, and whether the creator\'s audience matches their target demographic.',
  },
  {
    question: 'How can I calculate my influencer pricing for brand deals?',
    answer: 'Start with the baseline of $10-$30 per 1,000 followers, then adjust based on engagement rate. If your engagement is above 10%, multiply by 1.5-2×. Add premiums for exclusivity (20-50%), usage rights (25-100%), and multiple platforms (30-50% each). A creator with 50K followers and 12% engagement could charge $750-$1,500 for a single post, or $2,000+ for full usage rights.',
  },
  {
    question: 'What metrics should I track to improve my video engagement?',
    answer: 'Focus on watch time percentage (aim for 70%+), completion rate (60%+ is excellent), like-to-view ratio (5-10%), comment rate (0.5-2%), and share rate (1-3%). The TikTok algorithm heavily weights watch time and rewatches. Videos with hooks in the first 3 seconds, 15-30 second length, and strong CTAs for engagement consistently outperform longer content.',
  },
];

export default function EngagementInfluencePage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Engagement & Influence Calculators"
        description="Free calculators to measure TikTok engagement rate, calculate influencer pricing for brand deals, and predict video performance based on key metrics."
        url="https://calculatecreator.com/calculators/engagement-influence"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Engagement & Influence', url: 'https://calculatecreator.com/calculators/engagement-influence' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Engagement & Influence', href: '/calculators/engagement-influence' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Engagement & Influence Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Measure and optimize your TikTok engagement with professional tools used by top creators. Calculate your engagement rate (industry average: 5-15%), determine influencer pricing for brand deals ($10-$30 per 1K followers baseline), and predict video performance based on watch time, completion rate, and interaction metrics. These calculators help you understand your true influence value and negotiate better sponsorship rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/engagement-influence/${calc.slug}`}
              className="card card-hover p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <calc.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h2>
                  <p className="text-body-sm text-neutral-600">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 mb-12">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-6">Related Calculators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/earnings-revenue/money" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Money Calculator</h4>
                <p className="text-body-sm text-neutral-700">Estimate total earnings from all revenue streams</p>
              </Link>
              <Link href="/calculators/commerce-ads/rpm-cpm" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">RPM/CPM Calculator</h4>
                <p className="text-body-sm text-neutral-700">Calculate revenue per 1,000 views efficiency</p>
              </Link>
              <Link href="/metrics/comments-to-likes-ratio" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Comments-to-Likes Ratio</h4>
                <p className="text-body-sm text-neutral-700">Analyze engagement quality with advanced metrics</p>
              </Link>
              <Link href="/guides/how-to-increase-engagement" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Engagement Optimization Guide</h4>
                <p className="text-body-sm text-neutral-700">Proven strategies to boost engagement rates</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Engagement & Influence Calculators" />
        </div>
      </div>
    </div>
    </>
  );
}
