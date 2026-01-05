import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Moon, MessageCircle, Users, Shield, BookOpen, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Rolls Out Age-Specific Privacy Features for Internet Safety Day | TikTok News',
  description: 'TikTok introduced comprehensive age-based parental controls in February 2026, including restricted nighttime notifications, comment limitations, and Family Pairing enhancements.',
  keywords: ['tiktok safety', 'internet safety day', 'age-based controls', 'teen privacy', 'child protection'],
  alternates: {
    canonical: 'https://calculatecreator.com/news/age-specific-privacy-features/',
  },
};

export default function AgeSpecificPrivacyFeaturesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Age-Specific Privacy</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-rose-500 to-red-600 py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/news/news-safety-640.avif 640w, /news/news-safety-1024.avif 1024w, /news/news-safety-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/news/news-safety-640.webp 640w, /news/news-safety-1024.webp 1024w, /news/news-safety-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/news/news-safety-1024.webp"
              alt="Featured image for Age-Specific Privacy Features for Internet Safety Day 2026"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-pink-600">
              SAFETY INITIATIVE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Internet Safety Day
            </span>
            <span className="text-white/80 text-label-sm">Published: February 2026</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Age-Specific Privacy Features for Internet Safety Day 2026
          </h1>
          <p className="text-heading-md text-white/90">
            Comprehensive age-based controls including nighttime restrictions and enhanced family protections
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-pink-50 border-2 border-pink-200">
          <h2 className="text-heading-lg font-semibold text-pink-900 mb-3">
            Key Takeaway
          </h2>
          <p className="text-body-md text-pink-800">
            For Internet Safety Day 2026, TikTok introduced age-specific privacy features that automatically adjust safety settings based on user age. These include nighttime notification restrictions, comment limitations, and enhanced Family Pairing capabilities designed to protect younger users while giving teens age-appropriate autonomy.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Age-Based Safety Features by User Age
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-md font-semibold text-blue-900 mb-3">
                Ages 13-15: Maximum Protection
              </h3>
              <ul className="space-y-2 text-body-sm text-blue-800 list-disc list-inside ml-4">
                <li><strong>Private by Default:</strong> Accounts automatically set to private</li>
                <li><strong>Comment Restrictions:</strong> Only friends can comment on videos</li>
                <li><strong>No Direct Messages:</strong> DMs disabled for users under 16</li>
                <li><strong>Download Restrictions:</strong> Videos cannot be downloaded by others</li>
                <li><strong>Duet/Stitch Limits:</strong> Only friends can duet or stitch content</li>
                <li><strong>Bedtime Notifications Off:</strong> No notifications between 9 PM - 7 AM</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-3">
                Ages 16-17: Enhanced Controls
              </h3>
              <ul className="space-y-2 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li><strong>Suggested Settings:</strong> App recommends private account (user choice)</li>
                <li><strong>Direct Messages:</strong> Enabled but with safety filters</li>
                <li><strong>Comment Controls:</strong> Can choose Everyone, Friends, or No One</li>
                <li><strong>Download Settings:</strong> User can enable/disable downloads</li>
                <li><strong>Duet/Stitch:</strong> Customizable by user preference</li>
                <li><strong>Nighttime Limits:</strong> Optional quiet hours (10 PM - 6 AM)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-md font-semibold text-green-900 mb-3">
                Ages 18+: Full Control
              </h3>
              <ul className="space-y-2 text-body-sm text-green-800 list-disc list-inside ml-4">
                <li><strong>All Features Available:</strong> No automatic restrictions</li>
                <li><strong>Manual Privacy Controls:</strong> User manages all settings</li>
                <li><strong>Full Messaging:</strong> DMs with everyone enabled (can restrict)</li>
                <li><strong>Monetization Access:</strong> Eligible for Creator Rewards</li>
                <li><strong>TikTok Shop:</strong> Full shopping and selling capabilities</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            New Internet Safety Day Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Moon className="w-5 h-5 flex-shrink-0 text-indigo-600" />
                <h3 className="text-heading-sm font-semibold text-indigo-900">Nighttime Quiet Hours</h3>
              </div>
              <p className="text-body-sm text-indigo-800">
                Automatically silences notifications during bedtime hours based on user age
              </p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 flex-shrink-0 text-teal-600" />
                <h3 className="text-heading-sm font-semibold text-teal-900">Comment Filtering</h3>
              </div>
              <p className="text-body-sm text-teal-800">
                AI-powered filter removes inappropriate comments for teen accounts
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 flex-shrink-0 text-amber-600" />
                <h3 className="text-heading-sm font-semibold text-amber-900">Family Pairing Plus</h3>
              </div>
              <p className="text-body-sm text-amber-800">
                Enhanced parent dashboard with weekly activity summaries
              </p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 flex-shrink-0 text-rose-600" />
                <h3 className="text-heading-sm font-semibold text-rose-900">Sensitive Content Warning</h3>
              </div>
              <p className="text-body-sm text-rose-800">
                Age-appropriate content warnings before potentially sensitive videos
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            How to Verify or Update Your Age
          </h2>
          <p className="text-body-md text-amber-800 mb-4">
            If your age settings are incorrect, you can verify your age:
          </p>
          <ol className="space-y-3 text-body-md text-amber-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>Go to Settings → Account → Birthday</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>Tap "Verify Your Age" if prompted</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>Upload government-issued ID (driver's license, passport, etc.)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>TikTok verifies within 24-48 hours and updates settings accordingly</span>
            </li>
          </ol>
          <p className="text-body-sm text-amber-700 mt-4 italic">
            Note: ID information is used only for age verification and is deleted after processing
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Resources for Parents and Teens
          </h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 flex-shrink-0 text-blue-600" />
                <h3 className="text-heading-sm font-semibold text-blue-900">TikTok Safety Center</h3>
              </div>
              <p className="text-body-sm text-blue-800 mb-2">
                Comprehensive guides on safety features, privacy settings, and digital wellness
              </p>
              <Link href="https://www.tiktok.com/safety" target="_blank" className="text-primary-600 hover:underline text-body-sm">
                Visit Safety Center →
              </Link>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 flex-shrink-0 text-purple-600" />
                <h3 className="text-heading-sm font-semibold text-purple-900">Family Pairing Guide</h3>
              </div>
              <p className="text-body-sm text-purple-800 mb-2">
                Step-by-step instructions for setting up parental controls
              </p>
              <Link href="/news/parent-safety-features-update" className="text-primary-600 hover:underline text-body-sm">
                Read Full Guide →
              </Link>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 flex-shrink-0 text-green-600" />
                <h3 className="text-heading-sm font-semibold text-green-900">Digital Citizenship Resources</h3>
              </div>
              <p className="text-body-sm text-green-800">
                Educational materials about online safety, cyberbullying prevention, and responsible social media use
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/news/parent-safety-features-update"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                TikTok Parent Safety Features Update →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
