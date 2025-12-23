import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { DollarSign, TrendingUp, Shield, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Platform Creator Strategy 2025: TikTok, YouTube, Instagram Guide',
  description: 'Complete guide to multi-platform content strategy. How to repurpose content, maximize earnings across TikTok, YouTube, Instagram, and more.',
  keywords: ['multi-platform strategy', 'content repurposing', 'tiktok youtube instagram', 'creator monetization strategy'],
};

export default function MultiPlatformStrategyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Multi-Platform Strategy</span>
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
              alt="Featured image for Multi-Platform Creator Strategy 2025"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Multi-Platform Creator Strategy 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Maximize your reach and earnings across all platforms</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Multi-Platform?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-blue-50 rounded-lg">
              <div className="mb-2">
                <DollarSign className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Diversify Income</h3>
              <p className="text-body-sm text-neutral-700">Don&apos;t rely on one platform&apos;s algorithm or monetization</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-lg">
              <div className="mb-2">
                <TrendingUp className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Maximize Reach</h3>
              <p className="text-body-sm text-neutral-700">Each platform has unique audiences you can tap</p>
            </div>
            <div className="p-5 bg-green-50 rounded-lg">
              <div className="mb-2">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Risk Mitigation</h3>
              <p className="text-body-sm text-neutral-700">Platform changes won&apos;t destroy your business</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform Priorities by Goal</h2>
          <div className="space-y-4">
            {[
              { goal: 'Fastest Growth', stack: '1. TikTok, 2. Instagram Reels, 3. YouTube Shorts', reason: 'Short-form video platforms favor new creators' },
              { goal: 'Highest Ad Revenue', stack: '1. YouTube, 2. TikTok Creativity Program, 3. Instagram', reason: 'YouTube RPM is 25-100x higher than TikTok' },
              { goal: 'Best Brand Deals', stack: '1. TikTok, 2. Instagram, 3. YouTube', reason: 'TikTok has hottest creator economy for sponsorships' },
              { goal: 'Long-term Stability', stack: '1. YouTube, 2. Email List, 3. TikTok', reason: 'YouTube content has longest shelf life, email = owned audience' },
              { goal: 'Product Sales', stack: '1. TikTok Shop, 2. Instagram Shop, 3. YouTube links', reason: 'Native commerce integration drives highest conversion' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{item.goal}</h3>
                <p className="text-body-md text-tiktok-pink font-semibold mb-2">{item.stack}</p>
                <p className="text-body-sm text-neutral-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Content Repurposing Framework</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Hub Content (YouTube)</h3>
              <p className="text-body-sm text-neutral-700 mb-3">Create 8-15 minute videos on YouTube as your &quot;hub&quot; content</p>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive, SEO-optimized</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Monetize with ads (highest RPM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Evergreen traffic for years</span>
                </li>
              </ul>
            </div>

            <div className="text-center text-2xl text-neutral-400">↓ Repurpose ↓</div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">TikTok</h3>
                <p className="text-body-sm text-neutral-700">Extract 3-5 short clips (15-60s) highlighting key points</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Instagram Reels</h3>
                <p className="text-body-sm text-neutral-700">Same clips as TikTok with IG-optimized captions</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">YouTube Shorts</h3>
                <p className="text-body-sm text-neutral-700">Teasers driving to long-form video</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-body-sm text-neutral-800">
                <strong>Result:</strong> 1 piece of content → 5-8 platform variations → Maximum reach & ROI
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform-Specific Content Optimization</h2>
          <div className="space-y-6">
            <div className="p-5 bg-tiktok-pink/10 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok Optimization</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Best Practices:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Start with hook in first 3 seconds</li>
                    <li>• Use trending sounds and effects</li>
                    <li>• Keep videos vertical (9:16 aspect ratio)</li>
                    <li>• Add captions for accessibility</li>
                    <li>• Post when your audience is active</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Content Types:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Quick tips and hacks (15-30s)</li>
                    <li>• Behind-the-scenes content</li>
                    <li>• Trend participation</li>
                    <li>• Educational content with visuals</li>
                    <li>• Storytelling in bite-sized chunks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Instagram Optimization</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Reels Strategy:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Use Instagram-specific hashtags</li>
                    <li>• Create carousel posts from key points</li>
                    <li>• Add detailed captions with call-to-action</li>
                    <li>• Use Instagram&apos;s text overlay features</li>
                    <li>• Cross-promote to Stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Feed Content:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• High-quality static images</li>
                    <li>• Infographics and quote cards</li>
                    <li>• Consistent aesthetic/branding</li>
                    <li>• User-generated content features</li>
                    <li>• Product showcases and tutorials</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">YouTube Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Long-form Content:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Comprehensive tutorials (8-15 min)</li>
                    <li>• SEO-optimized titles and descriptions</li>
                    <li>• Custom thumbnails with text overlay</li>
                    <li>• Detailed video chapters</li>
                    <li>• End screens to related content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Shorts Strategy:</h4>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• Teasers for long-form content</li>
                    <li>• Quick tips extracted from main videos</li>
                    <li>• Trending topic commentary</li>
                    <li>• Behind-the-scenes clips</li>
                    <li>• Community posts for engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Advanced Multi-Platform Strategies</h2>
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Cross-Platform Funnel Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tiktok-pink text-white text-sm font-bold flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Discovery (TikTok + Instagram)</h4>
                    <p className="text-body-sm text-neutral-700">Use short-form content to attract new audiences with viral potential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Education (YouTube)</h4>
                    <p className="text-body-sm text-neutral-700">Provide in-depth value through comprehensive tutorials and guides</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Community (Email + Discord/Community)</h4>
                    <p className="text-body-sm text-neutral-700">Build owned audience for direct communication and monetization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Timing and Scheduling Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Weekly Content Calendar:</h4>
                  <div className="space-y-2 text-body-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday:</span>
                      <span className="text-neutral-700">YouTube long-form</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Tuesday:</span>
                      <span className="text-neutral-700">TikTok clips (3-4 posts)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Wednesday:</span>
                      <span className="text-neutral-700">Instagram Reels + Stories</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Thursday:</span>
                      <span className="text-neutral-700">LinkedIn article/post</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday:</span>
                      <span className="text-neutral-700">YouTube Shorts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Weekend:</span>
                      <span className="text-neutral-700">Community engagement</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-3">Platform-Specific Best Times:</h4>
                  <div className="space-y-2 text-body-sm">
                    <div>
                      <span className="font-medium text-tiktok-pink">TikTok:</span>
                      <span className="text-neutral-700 ml-2">6-10am, 7-9pm EST</span>
                    </div>
                    <div>
                      <span className="font-medium text-purple-600">Instagram:</span>
                      <span className="text-neutral-700 ml-2">11am-1pm, 5-7pm EST</span>
                    </div>
                    <div>
                      <span className="font-medium text-red-600">YouTube:</span>
                      <span className="text-neutral-700 ml-2">2-4pm, 8-11pm EST</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">LinkedIn:</span>
                      <span className="text-neutral-700 ml-2">8-9am, 12-1pm EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tools and Analytics</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-3">Content Creation Tools</h3>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Video Editing:</span>
                    <span className="text-neutral-700">CapCut, InShot</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Design:</span>
                    <span className="text-neutral-700">Canva, Figma</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Scheduling:</span>
                    <span className="text-neutral-700">Later, Buffer</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Analytics:</span>
                    <span className="text-neutral-700">Native + Hootsuite</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-3">Key Metrics to Track</h3>
                <div className="space-y-2 text-body-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Engagement Rate:</span>
                    <span className="text-green-600">Target: 3-8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cross-platform growth:</span>
                    <span className="text-green-600">Track monthly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Revenue per platform:</span>
                    <span className="text-green-600">Compare ROI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Content performance:</span>
                    <span className="text-green-600">A/B test formats</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Monthly Review Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Growth Analysis:</h4>
                  <ul className="space-y-1 text-neutral-700">
                    <li>□ Compare follower growth across platforms</li>
                    <li>□ Identify top-performing content types</li>
                    <li>□ Analyze engagement rate trends</li>
                    <li>□ Review revenue by platform</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Strategy Optimization:</h4>
                  <ul className="space-y-1 text-neutral-700">
                    <li>□ Adjust posting times based on analytics</li>
                    <li>□ Refine content repurposing workflow</li>
                    <li>□ Test new platform features</li>
                    <li>□ Update content calendar for next month</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>Posting Identical Content Everywhere</span>
              </h3>
              <p className="text-body-sm text-neutral-700 mb-2">Each platform has unique algorithms, audiences, and formats.</p>
              <p className="text-body-sm text-green-700"><strong>Fix:</strong> Adapt content for each platform&apos;s strengths and audience preferences.</p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>Spreading Too Thin Initially</span>
              </h3>
              <p className="text-body-sm text-neutral-700 mb-2">Starting on 5+ platforms at once leads to poor content quality.</p>
              <p className="text-body-sm text-green-700"><strong>Fix:</strong> Master 2-3 platforms first, then expand gradually.</p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>Ignoring Platform-Specific Features</span>
              </h3>
              <p className="text-body-sm text-neutral-700 mb-2">Not using Stories, Shorts, live features reduces algorithm visibility.</p>
              <p className="text-body-sm text-green-700"><strong>Fix:</strong> Incorporate platform-native features into your content strategy.</p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Cross-Platform Promotion</span>
              </h3>
              <p className="text-body-sm text-neutral-700 mb-2">Missing opportunities to guide followers between platforms.</p>
              <p className="text-body-sm text-green-700"><strong>Fix:</strong> Strategically mention other platforms and create platform-specific exclusive content.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
