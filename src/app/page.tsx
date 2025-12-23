import type { Metadata } from 'next';
import Link from 'next/link';
import {
  DollarSign,
  Banknote,
  TrendingUp,
  Handshake,
  Gift,
  ShoppingBag,
  BarChart3,
  Gem,
  Video,
  Clock,
  Users,
  Scale,
  Calendar,
  User,
  Eye,
  Briefcase,
  Coins,
  RefreshCw,
  Camera,
  Smartphone,
  Dumbbell,
  Sparkles,
  Gamepad2,
  Monitor,
  Globe,
  Swords,
  Megaphone,
  CreditCard,
  Wallet,
  Save,
  Target,
  Rocket,
  CheckCircle,
  Lightbulb,
  Hash,
  ClipboardList,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'TikTok Money Calculator & Creator Earnings Hub (2025) | Free Tools',
  description:
    'Calculate TikTok earnings from Creator Fund, brand deals, LIVE gifts, and Shop commissions. 35+ free calculators with transparent methodology. Used by 50,000+ creators to maximize revenue.',
  keywords: [
    'tiktok calculator',
    'tiktok money calculator',
    'tiktok earnings calculator',
    'tiktok creator calculator',
    'creator fund calculator',
    'tiktok rpm calculator',
    'tiktok live calculator',
    'tiktok brand deal calculator',
    'tiktok shop calculator',
    'tiktok revenue calculator',
    'tiktok payout calculator',
    'tiktok view calculator',
    'tiktok followers earnings calculator',
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* HERO SECTION WITH FULL-WIDTH BACKGROUND IMAGE */}
      <section className="relative z-10">
        {/* Full-width Hero Background Image - Optimized with picture element */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <picture>
            <source
              type="image/avif"
              srcSet="/home/hero-dashboard-640.avif 640w, /home/hero-dashboard-1024.avif 1024w, /home/hero-dashboard-1600.avif 1600w, /home/hero-dashboard-1920.avif 1920w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/home/hero-dashboard-640.webp 640w, /home/hero-dashboard-1024.webp 1024w, /home/hero-dashboard-1600.webp 1600w, /home/hero-dashboard-1920.webp 1920w"
              sizes="100vw"
            />
            <img
              src="/home/hero-dashboard-1024.webp"
              alt="TikTok Creator Analytics Dashboard"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-secondary-900/40 to-accent-900/50"></div>
        </div>
        <div className="container-custom py-10 md:py-12">
          <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Trust Badge with Image */}
          <div className="inline-flex items-center space-x-2 glass-dark text-white px-5 py-2.5 rounded-full text-label-md font-medium mb-2 animate-fade-in border border-white/20">
            <picture>
              <source type="image/avif" srcSet="/home/trust-badge-icon-640.avif" />
              <source type="image/webp" srcSet="/home/trust-badge-icon-640.webp" />
              <img
                src="/home/trust-badge-icon-640.webp"
                alt="Trusted by creators badge"
                width={20}
                height={20}
                className="rounded-full"
                loading="eager"
              />
            </picture>
            <span>Trusted by 50,000+ TikTok Creators Worldwide</span>
          </div>

          <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-display font-bold text-white mb-6 text-balance animate-slide-up drop-shadow-2xl">
            TikTok Money Calculator &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 gradient-animated">
              Creator Earnings Hub
            </span>
          </h1>

          <p className="text-body-lg md:text-heading-sm text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Calculate your TikTok earnings from Creator Fund, Creator Rewards Program, brand deals, LIVE gifts, and TikTok Shop commissions.
            Access 35+ free calculators with transparent methodology, real industry data, and expert monetization guides.
          </p>

          <p className="text-body-md text-white/75 mb-10 max-w-3xl mx-auto animate-slide-up stagger-2">
            From RPM analysis to engagement rate optimization, our tools help creators make data-driven decisions
            about their monetization strategy. No sign-up required, completely free, updated daily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-scale-in stagger-3">
            <Link
              href="/calculators/tiktok-money"
              className="btn btn-primary btn-lg gradient-primary gradient-animated glow-purple font-semibold shadow-2xl hover:scale-105 transition-all"
            >
              Calculate Your Total Earnings
            </Link>
            <Link
              href="/calculators/tiktok-creator-fund"
              className="btn btn-lg glass-dark text-white border-2 border-white/30 hover:bg-white/10 font-semibold"
            >
              Estimate Creator Fund Income
            </Link>
          </div>

          {/* E-E-A-T Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-body-sm text-white/80 animate-fade-in stagger-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">100% Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-medium">Transparent Methodology</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-medium">Real Industry Data</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="font-medium">Updated Daily</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* PRIMARY CALCULATOR GRID WITH SHOWCASE IMAGE */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4 animate-fade-in">
            Most Popular TikTok Earnings Calculators
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto animate-fade-in mb-8">
            Instantly estimate your potential revenue from all major TikTok monetization streams
          </p>
          {/* Calculator Showcase Image */}
          <div className="max-w-4xl mx-auto mb-8">
            <picture>
              <source
                type="image/avif"
                srcSet="/home/calculator-interface-640.avif 640w, /home/calculator-interface-1024.avif 1024w, /home/calculator-interface-1600.avif 1600w"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <source
                type="image/webp"
                srcSet="/home/calculator-interface-640.webp 640w, /home/calculator-interface-1024.webp 1024w, /home/calculator-interface-1600.webp 1600w"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <img
                src="/home/calculator-interface-1024.webp"
                alt="TikTok Money Calculator Interface"
                width={1200}
                height={750}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {primaryCalculators.map((calc, idx) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="card card-hover p-6 group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 blur-2xl rounded-full group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-start space-x-4 relative">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary gradient-animated flex items-center justify-center text-primary-600 group-hover:scale-110 transition-all duration-300 glow-purple shadow-lg">
                  <calc.icon size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-heading-md font-display font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {calc.description}
                  </p>
                  {calc.badge && (
                    <span className="inline-block mt-2 px-2 py-1 rounded-md bg-accent-500 text-white text-label-sm font-semibold">
                      {calc.badge}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECONDARY CALCULATORS BY CATEGORY */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
            All TikTok Calculator Categories
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Comprehensive suite of 35+ specialized calculators for every aspect of TikTok creator analytics
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {calculatorCategories.map((category, catIdx) => (
            <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${catIdx * 150}ms` }}>
              <div className="card p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-5 blur-3xl rounded-full"></div>
                <div className="flex items-center space-x-3 mb-4 relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary gradient-animated flex items-center justify-center text-primary-600 glow-purple">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-heading-lg font-display font-bold text-neutral-900">
                    {category.title}
                  </h3>
                </div>
                <p className="text-body-md text-neutral-700 mb-6 leading-relaxed relative">
                  {category.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 relative">
                  {category.calculators.map((calc) => (
                    <Link
                      key={calc.slug}
                      href={`/calculators/${calc.slug}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-300 group"
                    >
                      <calc.icon size={20} className="text-primary-600 flex-shrink-0" />
                      <span className="text-body-sm font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                        {calc.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES HUB WITH MONETIZATION GUIDE PREVIEW */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
            TikTok Monetization Guides & Strategy
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Expert guides covering every aspect of TikTok monetization, from first dollar to six-figure income
          </p>
          {/* Monetization Guide Preview Image */}
          <div className="max-w-4xl mx-auto mt-8">
            <picture>
              <source
                type="image/avif"
                srcSet="/home/monetization-guide-640.avif 640w, /home/monetization-guide-1024.avif 1024w, /home/monetization-guide-1600.avif 1600w"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <source
                type="image/webp"
                srcSet="/home/monetization-guide-640.webp 640w, /home/monetization-guide-1024.webp 1024w, /home/monetization-guide-1600.webp 1600w"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <img
                src="/home/monetization-guide-1024.webp"
                alt="TikTok Monetization Strategy Guide"
                width={1200}
                height={900}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guideCategories.map((category, idx) => (
            <div key={category.title} className="card p-8 animate-slide-in-right" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent gradient-animated flex items-center justify-center text-accent-600 glow-pink">
                  <category.icon size={24} />
                </div>
                <h3 className="text-heading-lg font-display font-bold text-neutral-900">
                  {category.title}
                </h3>
              </div>
              <p className="text-body-md text-neutral-700 mb-6 leading-relaxed">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent-50 transition-all duration-300 group"
                  >
                    <span className="text-body-sm font-medium text-neutral-700 group-hover:text-accent-600 transition-colors">
                      {guide.title}
                    </span>
                    <svg className="w-4 h-4 text-neutral-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/guides"
            className="btn btn-lg glass-dark text-white border-2 border-white/30 hover:bg-white/10 font-semibold inline-flex items-center space-x-2"
          >
            <span>View All Guides</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* DATA & REFERENCE SECTION WITH VISUALIZATION */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
            Industry Data & Benchmarks
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Real-world earnings data, RPM rates, engagement benchmarks, and payment schedules across all niches
          </p>
          {/* Data Visualization Image */}
          <div className="max-w-5xl mx-auto mt-8">
            <picture>
              <source
                type="image/avif"
                srcSet="/home/data-charts-640.avif 640w, /home/data-charts-1024.avif 1024w, /home/data-charts-1600.avif 1600w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <source
                type="image/webp"
                srcSet="/home/data-charts-640.webp 640w, /home/data-charts-1024.webp 1024w, /home/data-charts-1600.webp 1600w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <img
                src="/home/data-charts-1024.webp"
                alt="TikTok Industry Data & Benchmarks"
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dataPages.map((data, idx) => (
            <Link
              key={data.href}
              href={data.href}
              className="card card-hover p-6 group animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-secondary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <data.icon size={40} />
              </div>
              <h3 className="text-heading-md font-display font-bold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                {data.title}
              </h3>
              <p className="text-body-sm text-neutral-600 mb-4 leading-relaxed">
                {data.description}
              </p>
              <span className="text-label-md text-secondary-600 font-semibold group-hover:underline inline-flex items-center space-x-1">
                <span>View Data</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* COMPARISONS BLOCK */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
            Platform & Monetization Comparisons
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto mb-6">
            Understanding how TikTok earnings compare to other platforms helps creators make strategic decisions
            about where to invest their time and which monetization methods to prioritize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comparisons.map((comparison, idx) => (
            <Link
              key={comparison.href}
              href={comparison.href}
              className="card card-hover p-6 group animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-primary-600">
                  <comparison.icon size={28} />
                </span>
                <h3 className="text-heading-md font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {comparison.title}
                </h3>
              </div>
              <p className="text-body-sm text-neutral-600 leading-relaxed">
                {comparison.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* NICHE EARNINGS PAGES WITH SUCCESS STORY */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
            Earnings by Content Niche
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Specialized earning strategies, RPM rates, and monetization opportunities for different content categories
          </p>
          {/* Creator Success Story Image */}
          <div className="max-w-5xl mx-auto mt-8">
            <picture>
              <source
                type="image/avif"
                srcSet="/home/creator-success-640.avif 640w, /home/creator-success-1024.avif 1024w, /home/creator-success-1600.avif 1600w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <source
                type="image/webp"
                srcSet="/home/creator-success-640.webp 640w, /home/creator-success-1024.webp 1024w, /home/creator-success-1600.webp 1600w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <img
                src="/home/creator-success-1024.webp"
                alt="TikTok Creator Success Story"
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {nichePages.map((niche, idx) => (
            <Link
              key={niche.href}
              href={niche.href}
              className="card card-hover p-6 text-center group animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-accent-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <niche.icon size={48} />
              </div>
              <h3 className="text-heading-md font-display font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors">
                {niche.title}
              </h3>
              <p className="text-body-sm text-neutral-600 leading-relaxed">
                {niche.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ SECTION WITH E-E-A-T AUTHORITY */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto">
            Everything you need to know about TikTok earnings, calculators, and monetization
          </p>
          {/* E-E-A-T Authority Image */}
          <div className="max-w-md mx-auto mt-8">
            <picture>
              <source type="image/avif" srcSet="/home/eeat-badge-640.avif" />
              <source type="image/webp" srcSet="/home/eeat-badge-640.webp" />
              <img
                src="/home/eeat-badge-640.webp"
                alt="E-E-A-T Authority Badge"
                width={400}
                height={400}
                className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="card p-6 animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
              <h3 className="text-heading-sm font-display font-bold text-neutral-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-body-md text-neutral-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="btn btn-lg glass-dark text-white border-2 border-white/30 hover:bg-white/10 font-semibold inline-flex items-center space-x-2"
          >
            <span>View All FAQs</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA SECTION WITH BACKGROUND IMAGE */}
      <section className="container-custom py-10 md:py-12 relative z-10">
        <div className="card p-10 md:p-16 text-center max-w-5xl mx-auto overflow-hidden relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <picture>
              <source
                type="image/avif"
                srcSet="/home/hero-dashboard-640.avif 640w, /home/hero-dashboard-1024.avif 1024w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <source
                type="image/webp"
                srcSet="/home/hero-dashboard-640.webp 640w, /home/hero-dashboard-1024.webp 1024w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <img
                src="/home/hero-dashboard-1024.webp"
                alt="TikTok Creator Analytics Dashboard"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-accent-500/80 to-secondary-500/90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-display-sm md:text-display-md font-display font-bold text-white mb-6 drop-shadow-lg">
              Ready to Maximize Your TikTok Earnings?
            </h2>
            <p className="text-body-lg md:text-heading-sm text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 50,000+ creators using our free calculators and expert guides to make data-driven decisions
              about their TikTok monetization strategy. Start calculating your potential today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculators/tiktok-money"
                className="btn btn-lg bg-white text-primary-600 hover:bg-neutral-100 font-bold shadow-2xl hover:scale-105 transition-all"
              >
                Calculate Total Earnings Now
              </Link>
              <Link
                href="/guides"
                className="btn btn-lg glass-dark border-2 border-white text-white hover:bg-white/20 font-semibold"
              >
                Explore Monetization Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER AUTHORITY BLOCK WITH TRUST INDICATORS */}
      <section className="container-custom relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          {/* E-E-A-T Authority Visual */}
          <div className="mb-2 flex justify-center">
            <picture>
              <source type="image/avif" srcSet="/home/eeat-badge-640.avif" />
              <source type="image/webp" srcSet="/home/eeat-badge-640.webp" />
              <img
                src="/home/eeat-badge-640.webp"
                alt="E-E-A-T Authority Badge"
                width={96}
                height={96}
                className="h-24 w-auto rounded-lg border border-white/20"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <h3 className="text-heading-lg font-display font-bold text-white mb-4">
            About CalculateCreator.com
          </h3>
          <p className="text-body-md text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            CalculateCreator.com is the internet's most comprehensive resource for TikTok earnings analysis
            and creator monetization tools. We provide free, transparent, data-driven calculators covering
            Creator Fund payouts, RPM/CPM analytics, brand deal pricing, LIVE gifting revenue, and TikTok Shop
            commission estimates. Our methodology is backed by real creator earnings data, official TikTok
            documentation, and continuous industry research. All tools are free to use, require no sign-up,
            and are updated regularly to reflect the latest platform changes and monetization opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-body-sm text-white/70">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/compliance/sponsorship-disclosure" className="hover:text-white transition-colors">
              Disclosure Policy
            </Link>
          </div>

          <p className="text-body-sm text-white/60 mt-8">
            © 2025 CalculateCreator.com. All calculators and guides are for informational purposes only.
            Individual earnings may vary based on multiple factors including engagement, niche, audience location, and platform changes.
          </p>
        </div>
      </section>
    </div>
  );
}

// PRIMARY CALCULATORS (Most Important)
const primaryCalculators: { name: string; slug: string; description: string; icon: LucideIcon; badge?: string }[] = [
  {
    name: 'TikTok Money Calculator',
    slug: 'tiktok-money',
    description: 'Calculate total earnings across all TikTok monetization streams including Creator Fund, brand deals, LIVE gifts, and Shop commissions',
    icon: DollarSign,
    badge: 'POPULAR',
  },
  {
    name: 'Creator Fund Calculator',
    slug: 'tiktok-creator-fund',
    description: 'Estimate monthly and annual earnings from TikTok Creator Fund based on views, engagement rate, and content niche',
    icon: Banknote,
  },
  {
    name: 'RPM Calculator',
    slug: 'rpm',
    description: 'Calculate your revenue per 1,000 views (RPM) to understand your content monetization efficiency',
    icon: TrendingUp,
  },
  {
    name: 'Brand Deal Rate Calculator',
    slug: 'brand-deal-rate',
    description: 'Determine how much to charge for sponsored content based on followers, engagement, and niche',
    icon: Handshake,
  },
  {
    name: 'LIVE Gifts Calculator',
    slug: 'live-gifts',
    description: 'Estimate potential earnings from TikTok LIVE streaming gifts and viewer engagement',
    icon: Gift,
  },
  {
    name: 'TikTok Shop Commission',
    slug: 'shop-commission',
    description: 'Calculate affiliate earnings from TikTok Shop product promotions and commission rates',
    icon: ShoppingBag,
  },
  {
    name: 'Engagement Rate Calculator',
    slug: 'engagement-rate',
    description: 'Measure your TikTok engagement rate and compare against industry benchmarks',
    icon: BarChart3,
  },
  {
    name: 'TikTok Coins Calculator',
    slug: 'coins',
    description: 'Convert TikTok coins to diamonds and calculate real money value from LIVE gifts',
    icon: Coins,
  },
  {
    name: 'Diamond Converter',
    slug: 'diamond-converter',
    description: 'Convert TikTok diamonds to USD and understand creator payout rates',
    icon: Gem,
  },
];

// CALCULATOR CATEGORIES
const calculatorCategories: { title: string; icon: LucideIcon; description: string; calculators: { name: string; slug: string; icon: LucideIcon }[] }[] = [
  {
    title: 'Earnings & Monetization Calculators',
    icon: DollarSign,
    description: 'Comprehensive tools for calculating TikTok revenue from Creator Fund, brand partnerships, LIVE streaming, and Shop commissions. Understand your earning potential across all monetization channels.',
    calculators: [
      { name: 'TikTok Money Calculator', slug: 'tiktok-money', icon: DollarSign },
      { name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', icon: Banknote },
      { name: 'Brand Deal Rate', slug: 'brand-deal-rate', icon: Handshake },
      { name: 'LIVE Gifts', slug: 'live-gifts', icon: Gift },
      { name: 'Shop Commission', slug: 'shop-commission', icon: ShoppingBag },
      { name: 'Affiliate Commission', slug: 'affiliate-commission', icon: Handshake },
    ],
  },
  {
    title: 'Engagement & Analytics',
    icon: BarChart3,
    description: 'Measure and optimize your TikTok performance metrics including engagement rate, completion rate, watch time, and viral potential. Data-driven insights for content improvement.',
    calculators: [
      { name: 'Engagement Rate', slug: 'engagement-rate', icon: BarChart3 },
      { name: 'Completion Rate', slug: 'completion-rate', icon: CheckCircle },
      { name: 'Watch Time', slug: 'watch-time', icon: Clock },
      { name: 'Video Performance', slug: 'video-performance', icon: Video },
      { name: 'Viral Potential', slug: 'viral-potential', icon: Rocket },
      { name: 'Save Rate', slug: 'save-rate', icon: Save },
      { name: 'Share Ratio', slug: 'share-ratio', icon: RefreshCw },
    ],
  },
  {
    title: 'Growth & Audience Analytics',
    icon: TrendingUp,
    description: 'Track follower growth, profile visit rates, and conversion metrics. Understand how your audience grows and engages with your content over time.',
    calculators: [
      { name: 'Follower Growth', slug: 'follower-growth', icon: TrendingUp },
      { name: 'Profile Visit Rate', slug: 'profile-visit-rate', icon: Eye },
      { name: 'Follower Conversion', slug: 'follower-conversion', icon: Target },
      { name: 'Hashtag Performance', slug: 'hashtag-performance', icon: Hash },
      { name: 'Posting Time Optimizer', slug: 'posting-time', icon: Clock },
    ],
  },
  {
    title: 'Business & ROI Calculators',
    icon: Briefcase,
    description: 'Calculate marketing ROI, campaign profitability, customer acquisition costs, and lifetime value. Essential tools for brands and creator businesses.',
    calculators: [
      { name: 'Campaign ROI', slug: 'campaign-roi', icon: TrendingUp },
      { name: 'Conversion Rate', slug: 'conversion-rate', icon: Target },
      { name: 'Customer Acquisition Cost', slug: 'customer-acquisition-cost', icon: DollarSign },
      { name: 'Lifetime Value', slug: 'lifetime-value', icon: Gem },
      { name: 'Sponsorship ROI', slug: 'sponsorship-roi', icon: Handshake },
      { name: 'Break-Even Analysis', slug: 'break-even', icon: Scale },
    ],
  },
  {
    title: 'Advertising & Marketing Tools',
    icon: Megaphone,
    description: 'Estimate TikTok advertising costs, CPM rates, CPV rates, and ad revenue potential. Plan and optimize your paid marketing campaigns.',
    calculators: [
      { name: 'TikTok Ad Cost', slug: 'tiktok-ad-cost', icon: CreditCard },
      { name: 'CPM & CPV Calculator', slug: 'cpm-cpv', icon: BarChart3 },
      { name: 'Ad Revenue', slug: 'ad-revenue', icon: DollarSign },
      { name: 'Content Calendar ROI', slug: 'content-calendar-roi', icon: Calendar },
    ],
  },
  {
    title: 'Creator Business Tools',
    icon: Video,
    description: 'Manage creator finances, production costs, niche profitability, tax deductions, and content value. Professional tools for serious creators.',
    calculators: [
      { name: 'Production Cost', slug: 'production-cost', icon: Camera },
      { name: 'Creator Tax', slug: 'creator-tax', icon: ClipboardList },
      { name: 'Niche Profitability', slug: 'niche-profitability', icon: Target },
      { name: 'Content Value', slug: 'content-value', icon: Lightbulb },
      { name: 'Multi-Platform Earnings', slug: 'multi-platform-earnings', icon: Globe },
    ],
  },
];

// GUIDE CATEGORIES
const guideCategories: { title: string; icon: LucideIcon; description: string; guides: { title: string; href: string }[] }[] = [
  {
    title: 'Monetization Fundamentals',
    icon: DollarSign,
    description: 'Master the basics of earning money on TikTok. Learn about all monetization methods, Creator Fund requirements, and strategies to reach your first $1,000.',
    guides: [
      { title: 'Complete TikTok Calculator Guide', href: '/guides/complete-tiktok-calculator-guide' },
      { title: 'TikTok Creator Fund Explained', href: '/guides/tiktok-creator-fund' },
      { title: 'How Creator Fund Works', href: '/guides/how-creator-fund-works' },
      { title: 'Maximize Creator Fund RPM', href: '/guides/maximize-creator-fund-rpm' },
    ],
  },
  {
    title: 'Brand Deals & Sponsorships',
    icon: Handshake,
    description: 'Learn how to land, negotiate, and price brand deals. Understand your worth, create compelling proposals, and build long-term partnerships.',
    guides: [
      { title: 'How to Get Brand Deals', href: '/guides/how-to-get-brand-deals' },
      { title: 'Complete Brand Deals Guide', href: '/guides/how-to-get-brand-deals-complete' },
      { title: 'How to Price Brand Deals', href: '/guides/how-to-price-brand-deals' },
      { title: 'How Much to Charge for Sponsorships', href: '/guides/how-much-to-charge-sponsorship' },
    ],
  },
  {
    title: 'LIVE Streaming & Gifts',
    icon: Gift,
    description: 'Optimize your LIVE streaming revenue. Understand gift values, diamond conversion rates, and proven strategies to maximize viewer engagement and earnings.',
    guides: [
      { title: 'Complete TikTok Diamond Guide', href: '/guides/complete-tiktok-diamond-guide' },
      { title: 'LIVE Gift Earnings Optimization', href: '/guides/live-gift-earnings-optimization' },
      { title: 'How to Get 1000 Followers for LIVE', href: '/guides/how-to-get-1000-followers-live' },
    ],
  },
  {
    title: 'Algorithm & Growth',
    icon: Rocket,
    description: 'Crack the TikTok algorithm code. Learn proven strategies for going viral, increasing engagement, and growing your audience organically.',
    guides: [
      { title: 'TikTok Algorithm Optimization', href: '/guides/tiktok-algorithm-optimization' },
      { title: 'How to Go Viral on TikTok', href: '/guides/how-to-go-viral' },
      { title: 'How to Increase Engagement', href: '/guides/how-to-increase-engagement' },
      { title: 'Increase Engagement Rate', href: '/guides/increase-engagement-rate-tiktok' },
    ],
  },
  {
    title: 'Analytics & Performance',
    icon: BarChart3,
    description: 'Master TikTok analytics and metrics. Understand what data matters, how to track performance, and make data-driven content decisions.',
    guides: [
      { title: 'Analytics & Metrics Master Guide', href: '/guides/analytics-metrics-master-guide' },
      { title: 'Calculating True Influence Value', href: '/guides/calculating-true-influence-value' },
      { title: 'Multi-Platform Attribution for Creators', href: '/guides/multi-platform-attribution-creators' },
    ],
  },
  {
    title: 'TikTok Shop & E-commerce',
    icon: ShoppingBag,
    description: 'Build a profitable TikTok Shop business. Learn success strategies, best niches, and how to become an approved affiliate seller.',
    guides: [
      { title: 'TikTok Shop Success Strategies', href: '/guides/tiktok-shop-success-strategies' },
      { title: 'Best TikTok Shop Niches', href: '/guides/best-shop-niches' },
    ],
  },
];

// DATA & REFERENCE PAGES
const dataPages: { title: string; href: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Brand Deal Rates by Followers',
    href: '/data/brand-deal-rates-by-followers',
    description: 'Real-world sponsored content pricing based on follower count, engagement rate, and content niche',
    icon: Banknote,
  },
  {
    title: 'RPM Rates by Niche',
    href: '/data/rpm-rates-by-niche',
    description: 'Creator Fund revenue per 1,000 views across beauty, finance, fitness, gaming, and lifestyle categories',
    icon: TrendingUp,
  },
  {
    title: 'Engagement Rate Benchmarks',
    href: '/data/engagement-rates-by-niche',
    description: 'Industry-standard engagement rates segmented by content category and follower count',
    icon: BarChart3,
  },
];

// COMPARISONS
const comparisons: { title: string; href: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'TikTok vs YouTube Earnings',
    href: '/comparisons/tiktok-vs-youtube-earnings',
    description: 'Compare monetization opportunities, RPM rates, and creator earning potential across platforms',
    icon: Swords,
  },
  {
    title: 'TikTok vs Instagram Income',
    href: '/comparisons/tiktok-vs-instagram',
    description: 'Analyze which platform offers better earning potential for your content niche and audience size',
    icon: Smartphone,
  },
  {
    title: 'Creator Fund vs Brand Deals',
    href: '/comparisons/creator-fund-vs-brand-deals',
    description: 'Understand which monetization method pays more and when to prioritize each revenue stream',
    icon: DollarSign,
  },
];

// NICHE EARNINGS PAGES
const nichePages: { title: string; href: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Beauty Creators',
    href: '/guides/beauty-creators-earnings',
    description: 'Earning strategies, RPM rates, and brand deal opportunities for makeup and skincare content',
    icon: Sparkles,
  },
  {
    title: 'Finance Creators',
    href: '/guides/finance-creators-earnings',
    description: 'Monetization guide for personal finance, investing, and money management content creators',
    icon: CreditCard,
  },
  {
    title: 'Fitness Creators',
    href: '/guides/fitness-creators-earnings',
    description: 'Revenue opportunities for workout, nutrition, and wellness content on TikTok',
    icon: Dumbbell,
  },
];

// FAQ DATA
const faqs = [
  {
    question: 'How much do TikTok creators earn per 1,000 views?',
    answer: 'TikTok Creator Fund pays $0.02-$0.04 per 1,000 views ($20-$40 per million views). Your exact RPM depends on engagement rate, content niche, audience location, and video completion rate. Use our Creator Fund Calculator for personalized estimates based on your metrics.',
  },
  {
    question: 'How does TikTok RPM work and how can I increase it?',
    answer: 'RPM (Revenue Per Mille) measures earnings per 1,000 views. Higher engagement rates, longer watch times, premium content niches (finance, tech), and audiences in high-CPM countries increase your RPM. Our RPM Calculator and optimization guides show you exactly how to maximize your rate.',
  },
  {
    question: 'How do LIVE gifts convert to real money?',
    answer: 'TikTok LIVE viewers send virtual gifts purchased with coins. Creators receive diamonds (50% conversion rate) which convert to cash at $0.005 per diamond. A Rose (1 coin) = 0.5 diamonds = $0.0025. Use our Diamond Converter and LIVE Gifts Calculator to estimate potential earnings.',
  },
  {
    question: 'How do TikTok Shop commissions pay out?',
    answer: 'TikTok Shop affiliates earn 5-20% commission on product sales depending on category. Commissions are paid 7-14 days after order confirmation. Our Shop Commission Calculator helps you estimate earnings based on product price, commission rate, and expected sales volume.',
  },
  {
    question: 'What factors influence TikTok earnings the most?',
    answer: 'The five most important factors are: (1) Engagement rate (comments/shares matter more than likes), (2) Content niche (finance/tech pay 2-3x more than entertainment), (3) Audience geography (US/UK audiences pay higher CPMs), (4) Video completion rate (longer watch time = higher RPM), and (5) Posting consistency (1-3 videos daily maximizes views).',
  },
  {
    question: 'How much does 1 million TikTok views actually pay?',
    answer: 'Creator Fund: $20-$40 per million views. Brand deals: $500-$2,500+ depending on engagement. The same 1 million views can generate 10-50x more revenue through sponsorships than Creator Fund alone. Our TikTok Money Calculator shows total earning potential across all streams.',
  },
];
