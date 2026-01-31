import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Zap, TrendingUp, Lightbulb, DollarSign, Brain, Shield, Sparkles, Calendar, Bell, Search, Users } from 'lucide-react';
import { CollectionSchema } from '@/components/seo/CollectionSchema';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: {
    absolute: 'TikTok News Today - Latest Creator Updates & Platform Changes | CalculateCreator',
  },
  description: 'Stay updated with the latest TikTok news including algorithm changes, monetization updates, new features, TikTok Shop developments, and safety announcements affecting creators.',
  keywords: ['tiktok news', 'creator updates', 'tiktok changes', 'platform news', 'social media news'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/',
  },
};

interface NewsArticle {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  featured?: boolean;
}

export default function NewsPage() {
  const newsArticles: NewsArticle[] = [
    // Regulatory & Legal (3)
    {
      title: 'TikTok Ban Enforcement Delayed Until December 16, 2025',
      slug: 'tiktok-ban-delayed-december-2025',
      description: 'White House extends enforcement deadline for fourth time as administration pursues qualified divestiture solution.',
      date: '2025-09-24',
      category: 'Regulatory',
      featured: true,
    },
    {
      title: 'US-China Deal Reached to Keep TikTok Operational',
      slug: 'us-china-deal-tiktok-operational',
      description: 'Framework agreement announced between Trump administration and China to maintain TikTok operations in the United States.',
      date: '2026-09-15',
      category: 'Regulatory',
      featured: true,
    },
    {
      title: 'Understanding TikTok\'s De Jure Nationwide Ban Status',
      slug: 'tiktok-nationwide-ban-status',
      description: 'Explainer on why TikTok is technically banned but still operational, and what this means for creators.',
      date: '2026-11-01',
      category: 'Regulatory',
    },
    // Product Features (4)
    {
      title: 'TikTok Launches AI Outline and Smart Split Features',
      slug: 'ai-outline-smart-split-features',
      description: 'Two new AI-powered tools designed to streamline video creation and enhance editing capabilities for creators.',
      date: '2026-11-05',
      category: 'Features',
      featured: true,
    },
    {
      title: 'TikTok Releases Personalized AI Avatar Stickers',
      slug: 'personalized-ai-avatar-stickers',
      description: 'Create custom stickers based on your likeness with AI-powered avatar generation technology.',
      date: '2026-10-15',
      category: 'Features',
    },
    {
      title: 'New Mention Features for Liked and Favorited Videos',
      slug: 'mention-liked-favorited-videos',
      description: 'Users can now reference videos from their saved collections directly in their content.',
      date: '2026-11-08',
      category: 'Features',
    },
    {
      title: 'TikTok Introduces New Playback Settings',
      slug: 'playback-settings-update',
      description: 'Disable HDR videos and display object tags for enhanced viewing control and accessibility.',
      date: '2026-11-10',
      category: 'Features',
    },
    // TikTok Shop (5)
    {
      title: 'TikTok Shop Kicks Off Biggest Holiday Season Ever',
      slug: 'tiktok-shop-holiday-campaign',
      description: 'Platform launches largest holiday shopping campaign with special creator incentives and exclusive deals.',
      date: '2026-11-01',
      category: 'TikTok Shop',
      featured: true,
    },
    {
      title: 'TikTok Shop Ranks as Third-Fastest Growing Brand in the US',
      slug: 'tiktok-shop-third-fastest-growing',
      description: 'Morning Consult research reveals 145% year-over-year growth in consumer favorability.',
      date: '2026-11-03',
      category: 'TikTok Shop',
    },
    {
      title: 'TikTok Shop Expands to France, Germany, and Italy',
      slug: 'tiktok-shop-europe-expansion',
      description: 'Major European expansion brings social commerce to 83 million new users across three countries.',
      date: '2026-03-27',
      category: 'TikTok Shop',
    },
    {
      title: 'TikTok Shop GMV Projected to Double by End of 2026',
      slug: 'tiktok-shop-gmv-doubling',
      description: 'Industry analysts forecast explosive growth from $20B to $40B+ in gross merchandise value.',
      date: '2026-11-07',
      category: 'TikTok Shop',
    },
    {
      title: 'TikTok Shop Introduces Product Subscriptions',
      slug: 'product-subscriptions-feature',
      description: 'New recurring revenue model enables subscription-based purchasing for consumable products.',
      date: '2026-11-09',
      category: 'TikTok Shop',
    },
    // Algorithm (3)
    {
      title: 'TikTok Algorithm Undergoes Eight Major Shifts in 2025',
      slug: 'algorithm-eight-major-shifts',
      description: 'Enhanced personalization, off-platform behavior tracking, and retention focus reshape content distribution.',
      date: '2026-06-15',
      category: 'Algorithm',
    },
    {
      title: 'Retention Metrics Become Priority for Content Distribution',
      slug: 'retention-metrics-priority',
      description: 'Completion rates and watch time at 3s, 15s, and 60s checkpoints now determine video distribution.',
      date: '2026-06-20',
      category: 'Algorithm',
    },
    {
      title: 'TikTok Search Volume Increases by Over 40%',
      slug: 'search-volume-increase-40-percent',
      description: 'Billions of daily searches prompt major platform investment in search advertising and SEO features.',
      date: '2026-10-01',
      category: 'Discovery',
    },
    // Monetization (3)
    {
      title: 'Creator Fund Replaced with Creator Rewards Program',
      slug: 'creator-rewards-program-launch',
      description: 'New program requires 10K followers and 100K monthly views but offers up to 20x higher earnings.',
      date: '2026-05-01',
      category: 'Monetization',
      featured: true,
    },
    {
      title: 'Creator Rewards Offers Up to 20x Higher Earnings',
      slug: 'creator-rewards-20x-earnings',
      description: 'New program delivers $0.40-$1.00 per 1K views compared to Creator Fund\'s $0.02-$0.04.',
      date: '2026-05-02',
      category: 'Monetization',
    },
    {
      title: 'Only Videos Over 1 Minute Now Eligible for Monetization',
      slug: 'videos-over-one-minute-monetization',
      description: 'Creator Rewards Program exclusively focuses on longer-form content, pushing creators to adapt strategy.',
      date: '2026-05-03',
      category: 'Monetization',
    },
    // Safety (2)
    {
      title: 'TikTok Unveils New Safety Features for Parents',
      slug: 'parent-safety-features-update',
      description: 'Enhanced parental controls give families more visibility into teen account activity and customizable settings.',
      date: '2026-07-15',
      category: 'Safety',
    },
    {
      title: 'Age-Specific Privacy Features for Internet Safety Day 2026',
      slug: 'age-specific-privacy-features',
      description: 'Comprehensive age-based controls including nighttime restrictions and enhanced Family Pairing capabilities.',
      date: '2026-02-11',
      category: 'Safety',
    },
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const recentArticles = newsArticles.filter(article => !article.featured);

  const categories = Array.from(new Set(newsArticles.map(a => a.category)));

  // Map categories to optimized images
  const categoryImages: Record<string, string> = {
    'Regulatory': 'news-regulatory',
    'Features': 'news-features',
    'TikTok Shop': 'news-shop',
    'Algorithm': 'news-algorithm',
    'Discovery': 'news-algorithm',
    'Monetization': 'news-monetization',
    'Safety': 'news-safety',
  };

  const getCategoryImage = (category: string) => categoryImages[category] || 'news-features';

  const schemaItems = newsArticles.map(article => ({
    name: article.title,
    description: article.description,
    url: `https://calculatecreator.com/news/${article.slug}`,
    category: article.category,
  }));

  return (
    <>
      <CollectionSchema
        title="TikTok News Today - Latest Creator Updates & Platform Changes"
        description="Stay updated with the latest TikTok news including algorithm changes, monetization updates, new features, TikTok Shop developments, and safety announcements affecting creators."
        url="https://calculatecreator.com/news/"
        items={schemaItems}
        collectionType="News"
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
        <Breadcrumb
          items={[
            { label: 'News', href: '/news' },
          ]}
          includeHome={true}
        />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-display-xl font-bold text-white mb-4">
              TikTok News Today
            </h1>
            <p className="text-body-lg text-white/90 max-w-3xl mx-auto mb-6">
              Stay updated with the latest TikTok announcements, feature releases, monetization changes, and platform updates affecting creators. Fresh news covering everything you need to know about TikTok in 2025.
            </p>
            <p className="text-body-md text-white/80 max-w-3xl mx-auto">
              Our team monitors TikTok's official announcements, creator forums, and industry publications to bring you verified, actionable updates. From algorithm changes to new monetization features, we cover the news that impacts your creator business.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-4 py-2 rounded-full text-label-sm font-semibold bg-white/20 text-white backdrop-blur-sm"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Why Follow TikTok News */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">First to Know</h3>
              <p className="text-body-sm text-white/80">Get early alerts on monetization changes and new features before they impact your earnings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Strategic Advantage</h3>
              <p className="text-body-sm text-white/80">Adapt your strategy based on algorithm updates and platform shifts ahead of competitors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Creator-Focused</h3>
              <p className="text-body-sm text-white/80">We translate TikTok announcements into actionable insights for monetization and growth</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-12">
        {/* 2026 TikTok Updates Overview */}
        <div className="mb-16">
          <h2 className="text-display-md font-bold text-neutral-900 mb-6">
            2026 TikTok Updates Overview
          </h2>
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-heading-md font-semibold text-neutral-900">Creator Rewards</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-2">
                  The Creator Fund has been replaced with the Creator Rewards Program, offering up to 20x higher earnings for videos over 1 minute.
                </p>
                <p className="text-body-sm text-neutral-600">
                  New requirements: 10K followers and 100K monthly views. RPM rates now range from $0.40-$1.00 per 1K views.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h3 className="text-heading-md font-semibold text-neutral-900">TikTok Shop Expansion</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-2">
                  TikTok Shop expanded to France, Germany, and Italy, with GMV projected to double from $20B to $40B+ by end of 2026.
                </p>
                <p className="text-body-sm text-neutral-600">
                  New features include product subscriptions and enhanced creator commission structures for affiliate sales.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <h3 className="text-heading-md font-semibold text-neutral-900">Algorithm Changes</h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-2">
                  Eight major algorithm shifts prioritize retention metrics, with completion rates at 3s, 15s, and 60s checkpoints determining distribution.
                </p>
                <p className="text-body-sm text-neutral-600">
                  Search volume increased 40%+, prompting major investment in search SEO features and advertising capabilities.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Dates Timeline */}
        <div className="mb-16">
          <h2 className="text-display-md font-bold text-neutral-900 mb-6">
            Key Dates Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-6 ml-12">
              {[
                { date: 'Feb 11, 2026', event: 'Age-Specific Privacy Features', category: 'Safety', color: 'blue' },
                { date: 'Mar 27, 2026', event: 'TikTok Shop Europe Expansion', category: 'TikTok Shop', color: 'green' },
                { date: 'May 1, 2026', event: 'Creator Rewards Program Launch', category: 'Monetization', color: 'amber' },
                { date: 'Jun 15, 2026', event: 'Eight Major Algorithm Shifts', category: 'Algorithm', color: 'indigo' },
                { date: 'Oct 1, 2026', event: 'Search Volume +40%', category: 'Discovery', color: 'cyan' },
                { date: 'Nov 1, 2026', event: 'Biggest Holiday Season Launch', category: 'TikTok Shop', color: 'green' },
                { date: 'Nov 5, 2026', event: 'AI Outline & Smart Split Features', category: 'Features', color: 'purple' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[3.25rem] top-2 w-8 h-8 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary-600" />
                  </div>
                  <Card className="card-hover">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-label-sm font-semibold text-neutral-500">{item.date}</span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-label-xs font-semibold ${
                            item.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                            item.color === 'green' ? 'bg-green-100 text-green-700' :
                            item.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                            item.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' :
                            item.color === 'cyan' ? 'bg-cyan-100 text-cyan-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-heading-sm font-semibold text-neutral-900">{item.event}</h3>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Stay Updated */}
        <div className="mb-16">
          <h2 className="text-display-md font-bold text-neutral-900 mb-6">
            Why Stay Updated with TikTok News
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Maximize Monetization Opportunities
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    Early awareness of monetization changes helps you adapt your content strategy before competitors. When Creator Rewards launched in May 2026, creators who pivoted to 1-minute+ videos immediately saw 10-20x earnings increases while others continued making short content at old Creator Fund rates.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Stay Ahead of Algorithm Changes
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    TikTok's algorithm evolves constantly. The 2025-2026 shift to retention metrics at 3s, 15s, and 60s checkpoints meant creators focusing on hook optimization and watch time retention dramatically outperformed those still optimizing for likes and comments alone.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Leverage New Features First
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    TikTok often rewards early adopters of new features with increased reach. Creators who immediately used AI Outline and Smart Split tools in November 2026 reported 25-40% higher distribution as the algorithm promoted content using new platform capabilities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
                    Navigate Policy and Compliance
                  </h3>
                  <p className="text-body-md text-neutral-700">
                    Regulatory news directly impacts creator business continuity. Understanding the US-China framework agreement that kept TikTok operational helped creators make informed decisions about platform diversification strategy versus doubling down on TikTok growth.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* News Categories Deep Dive */}
        <div className="mb-16">
          <h2 className="text-display-md font-bold text-neutral-900 mb-6">
            News Categories Explained
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-amber-500">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Monetization</h3>
                  <p className="text-body-md text-neutral-700">
                    Track changes to Creator Rewards, TikTok Shop commissions, LIVE Gifts, brand partnership tools, and payout structures. This category covers everything that directly impacts creator revenue streams and earning potential.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-indigo-500">
              <div className="flex items-start gap-3 mb-3">
                <Brain className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Algorithm</h3>
                  <p className="text-body-md text-neutral-700">
                    Updates to content distribution logic, ranking factors, retention metrics, personalization improvements, and For You Page mechanics. Understanding these changes is critical for optimizing content performance and reach.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-red-500">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Policy and Regulatory</h3>
                  <p className="text-body-md text-neutral-700">
                    Legal developments, government regulations, data privacy updates, content moderation policy changes, and community guidelines revisions. Essential for understanding platform stability and compliance requirements.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Features and Tools</h3>
                  <p className="text-body-md text-neutral-700">
                    New creative tools, AI-powered features, editing capabilities, analytics improvements, and creator studio updates. Early adoption of new features often results in algorithmic promotion and competitive advantage.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Featured/Breaking News Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-display-md font-bold text-neutral-900">
              Breaking News
            </h2>
            <span className="text-body-sm text-neutral-600">
              {featuredArticles.length} Featured Stories
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => {
              const imgBase = getCategoryImage(article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group"
                >
                  <Card className="h-full card-hover bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 overflow-hidden p-0">
                    <picture>
                      <source type="image/avif" srcSet={`/news/${imgBase}-640.avif 640w, /news/${imgBase}-1024.avif 1024w`} sizes="(max-width: 768px) 100vw, 50vw" />
                      <source type="image/webp" srcSet={`/news/${imgBase}-640.webp 640w, /news/${imgBase}-1024.webp 1024w`} sizes="(max-width: 768px) 100vw, 50vw" />
                      <img src={`/news/${imgBase}-640.webp`} alt={article.title} className="w-full h-40 object-cover" loading="lazy" />
                    </picture>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-red-500 text-white">
                          FEATURED
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-blue-100 text-blue-700">
                          {article.category}
                        </span>
                        <span className="text-label-sm text-neutral-500 ml-auto">
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-heading-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-body-md text-neutral-600">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary-600 font-semibold text-body-sm">
                        Read More →
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* All News Articles Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-display-md font-bold text-neutral-900">
              Recent Updates
            </h2>
            <span className="text-body-sm text-neutral-600">
              {recentArticles.length} Articles
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => {
              const imgBase = getCategoryImage(article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group"
                >
                  <Card className="h-full card-hover overflow-hidden p-0">
                    <picture>
                      <source type="image/avif" srcSet={`/news/${imgBase}-640.avif`} />
                      <source type="image/webp" srcSet={`/news/${imgBase}-640.webp`} />
                      <img src={`/news/${imgBase}-640.webp`} alt={article.title} className="w-full h-32 object-cover" loading="lazy" />
                    </picture>
                    <div className="p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold ${
                            article.category === 'Regulatory' ? 'bg-red-100 text-red-700' :
                            article.category === 'Features' ? 'bg-purple-100 text-purple-700' :
                            article.category === 'TikTok Shop' ? 'bg-green-100 text-green-700' :
                            article.category === 'Algorithm' ? 'bg-indigo-100 text-indigo-700' :
                            article.category === 'Discovery' ? 'bg-cyan-100 text-cyan-700' :
                            article.category === 'Monetization' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {article.category}
                        </span>
                        <span className="text-label-sm text-neutral-500 ml-auto">
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-body-sm text-neutral-600">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary-600 font-semibold text-body-sm">
                        Read More →
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection
          pageName="TikTok News"
          faqs={[
            {
              question: 'How often does TikTok release major updates?',
              answer: 'TikTok typically releases major feature updates monthly, with algorithm adjustments happening even more frequently (sometimes weekly). Monetization program changes tend to occur quarterly, while policy and regulatory news is ongoing. Our news page is updated within 24 hours of official announcements to keep creators informed of all changes affecting their strategy and earnings.'
            },
            {
              question: 'How do algorithm changes affect my existing content?',
              answer: 'Algorithm changes can retroactively impact older content distribution. When TikTok shifted to prioritize retention metrics in mid-2026, videos with strong hooks and high completion rates saw renewed distribution even months after posting. However, content optimized for old metrics (like likes/comments only) experienced decreased reach. This is why monitoring algorithm news helps you understand fluctuations in older video performance.'
            },
            {
              question: 'Where does TikTok announce official updates?',
              answer: 'TikTok announces updates through multiple channels: TikTok Newsroom (newsroom.tiktok.com) for major features and policy changes, the TikTok Creator Portal for monetization updates, in-app notifications for feature rollouts, and the @tiktokforbusiness account for advertising/commerce news. We aggregate all these sources plus industry reports to provide comprehensive coverage in one place.'
            },
            {
              question: 'Do TikTok Shop updates affect all creators?',
              answer: 'TikTok Shop updates primarily impact creators who sell products or participate in affiliate programs. However, Shop expansion and GMV growth indirectly affect all creators as TikTok invests more resources in commerce features, search optimization, and longer video formats. Even non-Shop creators should monitor these updates as they signal platform priorities and algorithm focus areas.'
            },
            {
              question: 'How quickly should I adapt to new monetization requirements?',
              answer: 'Adapt immediately when monetization requirements change. When Creator Rewards replaced Creator Fund in May 2026, the 1-minute minimum video length requirement took effect instantly. Creators who continued posting 15-30 second videos became ineligible for monetization overnight. Set up alerts for monetization category updates and have a rapid content strategy pivot plan ready.'
            },
            {
              question: 'Are regulatory updates relevant to international creators?',
              answer: 'Yes. While US regulatory news (like the TikTok ban discussions) directly impacts American creators, these decisions influence TikTok\'s global strategy. The US-China framework agreement in September 2026 led to increased platform stability worldwide, expanded Shop to Europe, and increased Creator Rewards investment globally. Regulatory changes often cascade to affect features and policies internationally.'
            },
            {
              question: 'What is the best way to stay updated on TikTok news?',
              answer: 'Bookmark this page and check weekly for breaking news. Subscribe to TikTok Creator Portal email updates for monetization changes. Follow TikTok Newsroom for official announcements. Join creator communities on Discord or Reddit where changes are discussed in real-time. Set Google Alerts for "TikTok algorithm update" and "TikTok monetization change" to catch news from multiple sources.'
            },
            {
              question: 'How do new features impact content distribution?',
              answer: 'TikTok algorithmically promotes content using new features to encourage adoption. When AI Outline and Smart Split launched in November 2026, creators using these tools reported 25-40% higher initial distribution. This "new feature boost" typically lasts 2-4 weeks before normalizing. Early adoption gives you a temporary algorithmic advantage and helps you master tools before competitors.'
            }
          ]}
        />

        {/* Related Tools CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Related Tools & Guides
            </h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our calculators and guides to maximize your TikTok strategy based on the latest platform changes:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link
                href="/calculators/tiktok-money/"
                className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
              >
                <span className="font-semibold text-neutral-900">TikTok Money Calculator</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/calculators/tiktok-creator-fund/"
                className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
              >
                <span className="font-semibold text-neutral-900">Creator Rewards Calculator</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/calculators/commerce-ads/shop-profit/"
                className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
              >
                <span className="font-semibold text-neutral-900">TikTok Shop Profit Calculator</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/calculators/engagement-rate/"
                className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
              >
                <span className="font-semibold text-neutral-900">Engagement Rate Calculator</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/guides/how-to-make-money-on-tiktok/"
                className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
              >
                <span className="font-semibold text-neutral-900">Monetization Guide</span>
                <span className="text-primary-600">→</span>
              </Link>
              <Link
                href="/guides/tiktok-algorithm-optimization/"
                className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
              >
                <span className="font-semibold text-neutral-900">Algorithm Guide</span>
                <span className="text-primary-600">→</span>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
