import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Hashtag Strategy Guide: Best Practices (2026)',
  description: 'Complete hashtag strategy for TikTok growth. How many, which types, and optimal combinations for maximum reach.',
  keywords: ['tiktok hashtags', 'hashtag strategy', 'best hashtags', 'fyp hashtags'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/hashtag-strategy/',
  },
};

export default function HashtagStrategyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Hashtag Strategy</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-content-strategy-640.avif 640w, /guides/guide-content-strategy-1024.avif 1024w, /guides/guide-content-strategy-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-content-strategy-640.webp 640w, /guides/guide-content-strategy-1024.webp 1024w, /guides/guide-content-strategy-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-content-strategy-1024.webp"
              alt="Featured image for TikTok Hashtag Strategy"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Hashtag Strategy</h1>
          <p className="text-heading-md text-white/90">Best practices for maximum reach</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Optimal Hashtag Mix</h2>
          <div className="space-y-3">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">2-3 Broad Hashtags</h3>
              <p className="text-body-sm text-neutral-600">Examples: #fyp #foryou #viral (high competition)</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">2-3 Niche Hashtags</h3>
              <p className="text-body-sm text-neutral-600">Examples: #fitnesstips #beautyhacks (medium competition)</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">1-2 Micro Hashtags</h3>
              <p className="text-body-sm text-neutral-600">Examples: #beginner workouts #minimalistmakeup (low competition)</p>
            </div>
          </div>
        </Card>

        <Card className="bg-purple-50">
          <p className="text-body-md text-neutral-700">
            <strong>Pro tip:</strong> Use 3-5 total hashtags. More isn't better—focus on relevance over quantity.
          </p>
        </Card>
      </div>
    </div>
  );
}

