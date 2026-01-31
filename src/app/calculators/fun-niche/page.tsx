import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { CollectionPageSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Moon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fun & Niche Calculators | TikTok Creator Tools',
  description: 'Fun and unique calculators for TikTok creators. Explore niche tools like moon phase timing for optimal posting.',
  alternates: {
    canonical: 'https://calculatecreator.com/calculators/fun-niche/',
  },
};

const calculators = [
  {
    name: 'Moon Phase Calculator',
    slug: 'moon-phase',
    description: 'Discover the best times to post based on moon phases. A fun tool for creators who believe in lunar timing.',
    icon: Moon,
  },
];

const faqs = [
  {
    question: 'Does posting during specific moon phases actually affect TikTok performance?',
    answer: 'While there\'s no scientific evidence that moon phases directly impact TikTok algorithm performance, many creators report anecdotal patterns. The "manifesting TikTok" community particularly engages with lunar timing. What matters most for virality is posting quality content during peak audience hours (typically 6-9 PM local time). However, if moon phase posting builds your confidence and consistency, that psychological boost can improve your content creation process.',
  },
  {
    question: 'What are the best moon phases for posting content?',
    answer: 'According to lunar timing enthusiasts, New Moon (new beginnings) is ideal for launching series or rebrands, Waxing Moon (growth) for growth-focused content and trending sounds, Full Moon (peak energy) for your best performing content types, and Waning Moon (release) for retrospectives and authentic storytelling. Many creators in wellness, spirituality, and lifestyle niches align their content calendars with these phases to resonate with moon-conscious audiences.',
  },
  {
    question: 'Can niche tools like moon phase calculators help with content strategy?',
    answer: 'Niche tools can enhance content strategy when used intentionally. Moon phase calculators help create themed content series, build community with spiritually-minded audiences, and maintain consistent posting schedules (lunar cycle = 29.5 days). They work best as creative frameworks rather than strict rules. The real benefit is having a content planning system that keeps you consistent, whether that\'s lunar cycles, weekly themes, or data-driven posting schedules.',
  },
];

export default function FunNichePage() {
  return (
    <>
      <CollectionPageSchema
        name="TikTok Fun & Niche Calculators"
        description="Explore fun and unique calculators for TikTok creators, including moon phase timing tools for creators who believe in lunar influences on content performance."
        url="https://calculatecreator.com/calculators/fun-niche"
        calculators={calculators.map(c => ({ name: c.name, description: c.description, slug: c.slug }))}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://calculatecreator.com' },
          { name: 'Calculators', url: 'https://calculatecreator.com/calculators' },
          { name: 'Fun & Niche', url: 'https://calculatecreator.com/calculators/fun-niche' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Fun & Niche', href: '/calculators/fun-niche' },
          ]}
          includeHome={true}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Fun & Niche Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our collection of fun and unique calculators designed for creative TikTok strategies. These niche tools include moon phase timing for creators who align content with lunar cycles, astrological posting schedules, and other creative frameworks. While not scientifically proven to impact the algorithm, these tools help build consistent posting habits, create themed content series, and resonate with spiritually-minded audiences. Perfect for wellness, lifestyle, and mystical content creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {calculators.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/fun-niche/${calc.slug}`}
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
              <Link href="/calculators/posting-time" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Best Time to Post</h4>
                <p className="text-body-sm text-neutral-700">Find optimal posting times based on data and audience timezone</p>
              </Link>
              <Link href="/calculators/engagement-influence/video-engagement" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Video Engagement Calculator</h4>
                <p className="text-body-sm text-neutral-700">Predict video performance with comprehensive metrics</p>
              </Link>
              <Link href="/guides/content-strategy-2025" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Content Strategy 2026</h4>
                <p className="text-body-sm text-neutral-700">Latest strategies for TikTok growth and viral content</p>
              </Link>
              <Link href="/guides/hashtag-strategy" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                <h4 className="font-semibold text-neutral-900 mb-2">Hashtag Strategy Guide</h4>
                <p className="text-body-sm text-neutral-700">Optimize hashtags to maximize content discovery</p>
              </Link>
            </div>
          </Card>

          <FAQSection faqs={faqs} pageName="Fun & Niche Calculators" />
        </div>
      </div>
    </div>
    </>
  );
}
