import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { Calendar, Clock, CheckCircle, User, Users, Eye, CheckSquare, MapPin, XCircle, TrendingUp, TrendingDown, Globe, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Join TikTok Creator Fund: Complete Application Guide (2025)',
  description: 'Complete guide to joining the TikTok Creator Fund. Step-by-step application process, eligibility requirements, approval tips, and what to do if rejected.',
  keywords: ['how to join creator fund', 'tiktok creator fund application', 'creator fund eligibility', 'apply for creator fund', 'tiktok monetization'],
};

export default function HowToJoinCreatorFundCompletePage() {
  const faqs = [
    {
      question: 'How long does Creator Fund application take?',
      answer: 'Most applications are reviewed within 24-72 hours. Complex cases or high-volume periods may extend to 7 days. You\'ll receive notification via in-app notification and email.',
    },
    {
      question: 'Can I apply if I live in an ineligible country but have a VPN?',
      answer: 'No. TikTok detects your actual location through multiple signals. VPN use violates terms of service and will result in permanent account suspension.',
    },
    {
      question: 'Do I need a business account to join Creator Fund?',
      answer: 'No. Personal accounts are eligible. However, switching to a Creator Account (free) gives you access to analytics needed to track performance.',
    },
    {
      question: 'Can I be in Creator Fund and also do brand deals?',
      answer: 'Yes! Most creators use Creator Fund as passive income while actively seeking brand deals, which typically pay much more.',
    },
    {
      question: 'What happens to my old videos before I joined?',
      answer: 'Only videos published after your approval date earn Creator Fund payments. Previous videos don\'t retroactively generate earnings.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">How to Join Creator Fund</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">

          <picture>
            <source
              type="image/avif"
              srcSet="/guides/guide-creator-fund-640.avif 640w, /guides/guide-creator-fund-1024.avif 1024w, /guides/guide-creator-fund-1600.avif 1600w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/guides/guide-creator-fund-640.webp 640w, /guides/guide-creator-fund-1024.webp 1024w, /guides/guide-creator-fund-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/guides/guide-creator-fund-1024.webp"
              alt="Featured image for How to Join TikTok Creator Fund: Complete Application Guide"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="eager"
            />
          </picture>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How to Join TikTok Creator Fund: Complete Application Guide
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Step-by-step guide to qualifying, applying, and getting approved for TikTok's monetization program
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated: November 2025</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min read</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Complete Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Eligibility Requirements */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Creator Fund Eligibility Requirements</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Before you apply, ensure you meet all five requirements:
          </p>
          <div className="space-y-4">
            {[
              { icon: <User className="w-6 h-6" />, title: 'Age Requirement', req: 'Must be 18 years or older', detail: 'TikTok verifies age through your account birthdate. Cannot use a minor\'s account even with parental permission.' },
              { icon: <Users className="w-6 h-6" />, title: 'Follower Count', req: 'Minimum 10,000 followers', detail: 'Must be authentic followers (not purchased or bot accounts). TikTok monitors follower quality.' },
              { icon: <Eye className="w-6 h-6" />, title: 'Video Views', req: '100,000 authentic video views in the last 30 days', detail: 'Views must be from original content. Must be recent views (rolling 30-day window).' },
              { icon: <CheckSquare className="w-6 h-6" />, title: 'Content Guidelines Compliance', req: 'Must follow TikTok Community Guidelines', detail: 'No violations in the past 90 days. Content must be original. No copyright strikes.' },
              { icon: <MapPin className="w-6 h-6" />, title: 'Location Eligibility', req: 'Must be in an eligible country', detail: 'Currently: US, UK, Germany, France, Italy, Spain. Check official list for updates.' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-body-md text-neutral-900 mb-2">{item.req}</p>
                    <p className="text-body-sm text-neutral-700">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Step-by-Step Application */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Step-by-Step Application Process</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Verify You Meet Requirements',
                content: 'Check your follower count in TikTok analytics. Review your 28-day video views total. Confirm your account is in good standing. Verify your account location.',
              },
              {
                step: 2,
                title: 'Access the Creator Tools',
                content: 'On mobile: Open TikTok app → Profile → Three-line menu → Creator Tools. On desktop: Go to TikTok Creator Portal → Log in → Navigate to Monetization section.',
              },
              {
                step: 3,
                title: 'Find Creator Fund Application',
                content: 'In Creator Tools, scroll to TikTok Creator Fund section. Tap "Learn More" or "Apply". Review program terms and eligibility.',
              },
              {
                step: 4,
                title: 'Submit Application',
                content: 'Complete application form with legal name, date of birth, email, phone number, tax ID, and payment details. Processing time: 1-7 days typically.',
              },
              {
                step: 5,
                title: 'Set Up Payment Method',
                content: 'Choose PayPal (recommended) or direct bank transfer. Provide required account information. Verify payment method.',
              },
              {
                step: 6,
                title: 'Wait for Approval',
                content: 'TikTok reviews application (1-7 days). Account verified for eligibility. You\'ll receive notification via in-app and email.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-body-md text-neutral-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Common Rejection Reasons */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Rejection Reasons and Solutions</h2>
          <div className="space-y-4">
            {[
              {
                reason: 'Insufficient Views',
                problem: 'Didn\'t reach 100,000 views in the past 30 days',
                solution: 'Wait until you consistently hit 100K+ views monthly. Focus on engagement-boosting strategies. Reapply once you meet the threshold.',
              },
              {
                reason: 'Community Guidelines Violation',
                problem: 'Recent violation in the past 90 days',
                solution: 'Remove any borderline content. Ensure all future content is fully compliant. Wait 90 days from violation date, then reapply.',
              },
              {
                reason: 'Inauthentic Activity Detected',
                problem: 'Purchased followers, views, or engagement',
                solution: 'Stop using any growth services immediately. Focus on organic growth for 60+ days. Reapply with clean growth history.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2"><XCircle className="w-5 h-5 text-error-500" /> {item.reason}</h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Problem:</strong> {item.problem}</p>
                <p className="text-body-sm text-neutral-900"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Tips to Maximize Approval */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tips to Maximize Approval Chances</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Build a Buffer', tip: 'Aim for 15,000+ followers and 150K+ views (buffer for fluctuations)' },
              { title: 'Clean Up Content', tip: 'Remove borderline content, delete videos with copyright issues' },
              { title: 'Show Consistency', tip: 'Post regularly for 60+ days before applying' },
              { title: 'Optimize Profile', tip: 'Professional photo, clear bio, verified email/phone' },
              { title: 'Verify Information', tip: 'Ensure legal name matches ID, accurate payment info' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-success-600" /> {item.title}</h4>
                <p className="text-body-sm text-neutral-700">{item.tip}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Calculator CTA */}
        <Card className="bg-gradient-to-br from-tiktok-pink/10 to-tiktok-blue/10 border-tiktok-pink/20">
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Ready to Estimate Your Creator Fund Earnings?
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our free calculator to project your monthly income based on your views and engagement.
            </p>
            <Link
              href="/calculators/tiktok-creator-fund"
              className="inline-block bg-tiktok-pink text-white px-8 py-3 rounded-lg font-semibold hover:bg-tiktok-red transition-colors"
            >
              Calculate Your Earnings →
            </Link>
          </div>
        </Card>

        {/* FAQ */}
        <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection pageName="How to Join Creator Fund" faqs={faqs} />

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary-600" /> TikTok Creator Fund Complete Guide</h4>
              <p className="text-body-sm text-neutral-700">Everything about how the fund works and RPM rates</p>
            </Link>
            <Link href="/guides/why-creator-fund-earnings-dropped" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-error-600" /> Why Creator Fund Earnings Dropped</h4>
              <p className="text-body-sm text-neutral-700">Troubleshoot earnings issues and find solutions</p>
            </Link>
            <Link href="/reference/creator-fund-eligible-countries" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><Globe className="w-5 h-5 text-primary-600" /> Creator Fund Eligible Countries</h4>
              <p className="text-body-sm text-neutral-700">Complete list of countries with Creator Fund access</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1 flex items-center gap-2"><DollarSign className="w-5 h-5 text-success-600" /> How to Make Money on TikTok</h4>
              <p className="text-body-sm text-neutral-700">All TikTok monetization methods beyond Creator Fund</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
