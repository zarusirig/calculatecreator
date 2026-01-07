import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Algorithm & Engagement: How to Boost Your Reach in 2025',
  description: 'Master the relationship between TikTok algorithm and engagement. Proven tactics to increase likes, comments, shares, and watch time for better reach.',
  keywords: ['tiktok algorithm engagement', 'boost tiktok engagement', 'increase reach', 'fyp algorithm'],
  alternates: {
    canonical: 'https://calculatecreator.com/guides/tiktok-algorithm-engagement/',
  },
};

export default function AlgorithmEngagementPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Algorithm & Engagement</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-analytics-640.avif 640w, /guides/guide-analytics-1024.avif 1024w, /guides/guide-analytics-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-analytics-640.webp 640w, /guides/guide-analytics-1024.webp 1024w, /guides/guide-analytics-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-analytics-1024.webp"
              alt="Featured image for TikTok Algorithm & Engagement 2026"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Algorithm & Engagement 2026</h1>
          <p className="text-heading-md text-white/90 mb-6">How engagement signals drive algorithmic reach</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Algorithm-Engagement Loop</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok algorithm uses engagement as the primary signal of content quality. Higher engagement → broader distribution → more engagement.
          </p>
          <div className="space-y-4">
            {[
              { step: '1. Initial Test', desc: 'TikTok shows video to 200-500 people', action: 'They engage (or don\'t)' },
              { step: '2. Algorithm Evaluates', desc: 'Measures watch time, likes, comments, shares', action: 'Calculates engagement rate' },
              { step: '3. Decision Point', desc: 'High engagement → expand to more viewers', action: 'Low engagement → stop promoting' },
              { step: '4. Viral Growth', desc: 'Each wave of viewers = new test', action: 'Exponential if engagement stays high' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center p-4 bg-neutral-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-tiktok-pink to-tiktok-blue text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900">{item.step}</h3>
                  <p className="text-body-sm text-neutral-700">{item.desc} → {item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Engagement Signals Ranked by Impact</h2>
          <div className="space-y-3">
            {[
              { signal: 'Watch Time %', impact: '🔴 Critical', weight: '100', tactics: ['Hook in first 1-3 seconds', 'Loop videos for rewatches', 'End on cliffhanger'] },
              { signal: 'Shares', impact: '🔴 Critical', weight: '90', tactics: ['Create shareworthy content (helpful, funny, relatable)', 'Ask viewers to share', 'Make content that solves problems'] },
              { signal: 'Comments', impact: '🟠 Very High', weight: '80', tactics: ['Ask questions in caption', 'Create debate/discussion', 'Reply to every comment'] },
              { signal: 'Completion Rate', impact: '🟠 Very High', weight: '75', tactics: ['Keep videos short (7-15s ideal)', 'Deliver value quickly', 'Tease payoff throughout'] },
              { signal: 'Likes', impact: '🟡 High', weight: '60', tactics: ['Create likeable content', 'Remind to like if helpful', 'Show vulnerability/authenticity'] },
              { signal: 'Profile Visits', impact: '🟢 Medium', weight: '40', tactics: ['Strong personal brand in video', 'Tease other content', 'Consistent style'] },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.impact.split(' ')[0]}</span>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{item.signal}</h3>
                      <span className="text-xs text-neutral-600">{item.impact.split(' ').slice(1).join(' ')} Impact</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-600">Algorithm Weight</div>
                    <div className="text-heading-sm font-bold text-tiktok-pink">{item.weight}/100</div>
                  </div>
                </div>
                <div className="pl-8">
                  <p className="text-body-sm font-semibold text-neutral-700 mb-2">Optimization Tactics:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    {item.tactics.map((tactic, tIdx) => (
                      <li key={tIdx}>• {tactic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Engagement Rate Benchmarks</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Engagement Rate</th>
                  <th className="text-left py-3 px-4">Performance</th>
                  <th className="text-left py-3 px-4">Algorithm Response</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rate: '10%+', performance: 'Excellent', response: 'Highly likely to go viral, algorithm aggressively promotes' },
                  { rate: '5-10%', performance: 'Good', response: 'Strong distribution, reaches For You Page widely' },
                  { rate: '3-5%', performance: 'Average', response: 'Moderate push, reaches some new viewers' },
                  { rate: '1-3%', performance: 'Below Average', response: 'Limited distribution beyond followers' },
                  { rate: '<1%', performance: 'Poor', response: 'Minimal promotion, mostly followers only' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.rate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        row.performance === 'Excellent' ? 'bg-green-100 text-green-700' :
                        row.performance === 'Good' ? 'bg-blue-100 text-blue-700' :
                        row.performance === 'Average' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>{row.performance}</span>
                    </td>
                    <td className="py-3 px-4 text-neutral-700 text-xs">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/tiktok-algorithm-explained" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Algorithm Explained</h4>
              <p className="text-body-sm text-neutral-700">How FYP works</p>
            </Link>
            <Link href="/guides/how-to-increase-engagement" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Increase Engagement</h4>
              <p className="text-body-sm text-neutral-700">Proven engagement tactics</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
