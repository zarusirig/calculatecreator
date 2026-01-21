import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FileText, TrendingUp, DollarSign } from 'lucide-react';
import { BlogListingSchema } from '@/components/seo/BlogListingSchema';

export const metadata: Metadata = {
  title: 'TikTok Creator Blog: Tips, Guides & Insights | Calculate Creator',
  description: 'Expert insights on TikTok monetization, creator earnings, and platform strategies. Learn how to maximize your income as a content creator.',
  keywords: ['tiktok blog', 'creator tips', 'tiktok monetization', 'creator earnings blog', 'tiktok strategy'],
  alternates: {
    canonical: 'https://calculatecreator.com/blog/',
  },
};

const blogPosts = [
  {
    title: 'Creator Fund vs LIVE Gifts: Which Pays More?',
    slug: 'creator-fund-vs-live-gifts',
    description: 'Compare TikTok Creator Fund earnings vs LIVE streaming gift revenue. See which monetization method works best for your content style.',
    category: 'Monetization',
    icon: DollarSign,
  },
];

export default function BlogPage() {
  return (
    <>
      <BlogListingSchema />
      <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-neutral-900">Blog</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-white" />
            <h1 className="text-display-lg font-bold text-white">Creator Blog</h1>
          </div>
          <p className="text-heading-md text-white/90">
            Expert insights, strategies, and tips for TikTok creators looking to grow and monetize their content.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <div className="container-custom max-w-4xl py-12">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <post.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <span className="text-body-xs text-blue-600 font-medium uppercase tracking-wide">{post.category}</span>
                    <h2 className="text-heading-md font-semibold text-neutral-900 mt-1 mb-2">{post.title}</h2>
                    <p className="text-body-md text-neutral-600">{post.description}</p>
                  </div>
                  <TrendingUp className="w-5 h-5 text-neutral-400" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Related Sections */}
        <div className="mt-12">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Explore More</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/guides" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Creator Guides</h4>
              <p className="text-body-sm text-neutral-600">In-depth guides on monetization</p>
            </Link>
            <Link href="/comparisons/creator-fund-vs-brand-deals" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Comparisons</h4>
              <p className="text-body-sm text-neutral-600">Compare income strategies</p>
            </Link>
            <Link href="/calculators" className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Calculators</h4>
              <p className="text-body-sm text-neutral-600">Calculate your earnings</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
