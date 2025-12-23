import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Comments-to-Likes Ratio: What\'s Good? (2025)',
  description: 'Understanding the comments-to-likes ratio metric. Benchmarks, what it means, and how to improve it.',
  keywords: ['comments to likes ratio', 'tiktok engagement metrics', 'comment rate', 'engagement analysis'],
};

export default function CommentsToLikesRatioPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/metrics">Metrics</Link><span>/</span>
            <span className="text-neutral-900">Comments-to-Likes Ratio</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Comments-to-Likes Ratio</h1>
          <p className="text-heading-md text-white/90">Understanding this key engagement metric</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Benchmarks</h2>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900">Excellent: 1:10 or better</h3>
              <p className="text-body-sm text-neutral-600">1 comment for every 10 likes</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900">Good: 1:15 to 1:20</h3>
              <p className="text-body-sm text-neutral-600">Average for most creators</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900">Low: 1:30 or worse</h3>
              <p className="text-body-sm text-neutral-600">Needs improvement</p>
            </div>
          </div>
        </Card>

        <Card className="bg-purple-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">How to Improve</h3>
          <ul className="space-y-2">
            <li className="text-body-md text-neutral-700">• Ask questions in captions</li>
            <li className="text-body-md text-neutral-700">• Create controversial/debatable content</li>
            <li className="text-body-md text-neutral-700">• Respond to comments to encourage more</li>
            <li className="text-body-md text-neutral-700">• Use "wrong answers only" hooks</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

