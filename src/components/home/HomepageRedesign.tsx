import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Gift,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import {
  benchmarkStats,
  featuredGuides,
  homeFaqs,
  toolDirectoryItems,
} from '@/lib/content/site-data';

/* ── Quick-start calculator cards ─────────────────────────────── */
const quickStarts = [
  {
    label: 'Earnings',
    title: 'TikTok Money Calculator',
    href: '/calculators/tiktok-money/',
    note: 'Estimate earnings from views, ads, and brand deals',
  },
  {
    label: 'Rates',
    title: 'TikTok Brand Deal Calculator',
    href: '/calculators/brand-deal-rate/',
    note: 'Price sponsorships by followers, niche, and deliverables',
  },
  {
    label: 'Engagement',
    title: 'TikTok Engagement Rate Calculator',
    href: '/calculators/engagement-rate/',
    note: 'Benchmark your likes, comments, and shares ratio',
  },
  {
    label: 'Growth',
    title: 'TikTok Follower Growth Calculator',
    href: '/calculators/follower-growth/',
    note: 'Project follower milestones from posting cadence',
  },
];

/* ── Calculator category cards ────────────────────────────────── */
const calculatorCategories = [
  {
    title: 'TikTok Earnings Calculators',
    description:
      'Estimate your TikTok earnings from Creator Fund payouts, ad revenue, brand deals, and LIVE gifts — all in one place.',
    href: '/calculators/earnings-revenue/',
    icon: CircleDollarSign,
    accent: 'bg-[rgba(255,107,87,0.14)] text-[color:var(--primary)]',
    tools: ['Money Calculator', 'Creator Fund Calculator', 'RPM Calculator'],
  },
  {
    title: 'TikTok Engagement Calculators',
    description:
      'Calculate your TikTok engagement rate, watch time, completion rate, and save-to-view ratio against niche benchmarks.',
    href: '/calculators/engagement-rate/',
    icon: TrendingUp,
    accent: 'bg-[rgba(59,91,219,0.12)] text-[color:var(--info)]',
    tools: ['Engagement Rate', 'Watch Time', 'Completion Rate'],
  },
  {
    title: 'TikTok Brand Deal Calculator',
    description:
      'Set data-backed sponsorship rates using follower tier, engagement benchmarks, niche multipliers, and deliverable type.',
    href: '/calculators/brand-deal-rate/',
    icon: Sparkles,
    accent: 'bg-[rgba(109,211,180,0.18)] text-[#216c57]',
    tools: ['Brand Deal Rate', 'Sponsorship ROI', 'Influencer Pricing'],
  },
  {
    title: 'TikTok Growth Calculators',
    description:
      'Project follower growth, viral potential score, and posting frequency impact with transparent growth assumptions.',
    href: '/guides/tiktok-growth-hub/',
    icon: Compass,
    accent: 'bg-[rgba(244,185,66,0.18)] text-[#8f6400]',
    tools: ['Follower Growth', 'Viral Potential', 'Hashtag Performance'],
  },
];

/* ── "What is" explainer bullets ──────────────────────────────── */
const whatIsFeatures = [
  {
    icon: BarChart3,
    title: 'Estimate TikTok earnings per view',
    text: 'Enter your average views and the TikTok calculator estimates Creator Fund payouts, ad revenue, and total earning potential across monetization streams.',
  },
  {
    icon: Users,
    title: 'Benchmark TikTok engagement rate',
    text: 'Compare your engagement rate against niche-specific benchmarks. See whether your likes-to-views ratio, comment rate, and share rate are above or below average.',
  },
  {
    icon: Gift,
    title: 'Convert TikTok coins, gifts, and diamonds',
    text: 'Instantly convert TikTok coins to USD, calculate diamond values, and estimate LIVE gift earnings with our real-time TikTok coin calculator.',
  },
  {
    icon: ShoppingBag,
    title: 'Calculate TikTok Shop commissions',
    text: 'Model affiliate earnings and shop margins before you commit to products. Factor in TikTok Shop commission rates by category.',
  },
  {
    icon: Award,
    title: 'Price TikTok brand deals accurately',
    text: 'Stop guessing your rate. The TikTok brand deal calculator uses follower count, engagement rate, content niche, and deliverable type to suggest competitive pricing.',
  },
  {
    icon: Zap,
    title: 'Score viral potential before posting',
    text: 'Input early metrics like save rate, share rate, and completion percentage to estimate whether a video has breakout potential on the For You page.',
  },
];

/* ── Creator use-case scenarios ───────────────────────────────── */
const creatorScenarios = [
  {
    title: 'How much does TikTok pay for 1 million views?',
    summary:
      'Use the TikTok money calculator to estimate Creator Fund payouts, brand deal value, and total revenue from a viral video.',
    href: '/calculators/tiktok-money/',
  },
  {
    title: 'What should I charge for a TikTok sponsorship?',
    summary:
      'The TikTok brand deal calculator factors in your follower count, engagement rate, and niche to suggest a competitive rate card.',
    href: '/calculators/brand-deal-rate/',
  },
  {
    title: 'Is my TikTok engagement rate good?',
    summary:
      'Check your engagement rate against 2026 benchmarks by follower tier and content category with the TikTok engagement calculator.',
    href: '/calculators/engagement-rate/',
  },
  {
    title: 'How much can I earn from TikTok LIVE gifts?',
    summary:
      'Convert TikTok diamonds to USD and estimate hourly LIVE earnings based on your typical viewer count and gift frequency.',
    href: '/calculators/diamond-converter/',
  },
];

const faqPreview = homeFaqs.slice(0, 5);
const popularTools = toolDirectoryItems.filter((tool) => tool.popular).slice(0, 6);

export function HomepageRedesign() {
  return (
    <div className="pb-6">
      {/* ══════════ HERO ══════════ */}
      <section className="hero-editorial overflow-hidden px-3 pb-8 pt-6 md:px-5 md:pb-12 md:pt-8">
        <Container className="paper-grid overflow-hidden rounded-[40px] border border-[rgba(255,255,255,0.78)] px-5 py-10 shadow-[0_20px_70px_rgba(23,32,51,0.08)] md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <span className="eyebrow">
                <Calculator className="h-3.5 w-3.5" />
                Free TikTok Calculator
              </span>

              <h1 className="section-heading mt-6 max-w-3xl text-5xl font-bold text-[color:var(--text)] md:text-6xl lg:text-[4.8rem] lg:leading-[1.06]">
                TikTok Calculator — Estimate Earnings, Engagement &amp; Brand Deal Rates
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-2)] md:text-lg">
                The free <strong>TikTok calculator</strong> trusted by creators to estimate
                TikTok earnings per view, benchmark engagement rates, price brand deals, and
                convert coins to dollars. 35+ calculators, transparent methodology, no signup.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/calculators/tiktok-money/" className="btn btn-primary btn-lg gap-2">
                  Calculate TikTok Earnings
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/calculators/engagement-rate/" className="btn btn-secondary btn-lg">
                  Check Engagement Rate
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="studio-chip">No login required</span>
                <span className="studio-chip">35+ free calculators</span>
                <span className="studio-chip">Updated for 2026</span>
              </div>
            </div>

            {/* Quick-start card */}
            <div className="grid gap-4">
              <div className="studio-card rotate-[-1.5deg] p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <span className="metric-pill">TikTok Calculator Quick Start</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    2026
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  What do you want to calculate?
                </p>
                <div className="mt-4 grid gap-3">
                  {quickStarts.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="studio-note flex items-center justify-between p-4 transition-transform duration-200 hover:-translate-y-1"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                          {String(index + 1).padStart(2, '0')} · {item.label}
                        </p>
                        <p className="mt-1 text-base font-semibold text-[color:var(--text)]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-[color:var(--text-2)]">{item.note}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[color:var(--info)]" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="studio-note p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Most-used TikTok calculator
                  </p>
                  <p className="mt-3 text-xl font-semibold text-[color:var(--text)]">
                    TikTok Money Calculator
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                    Estimate how much TikTok pays per 1,000 views across all revenue streams.
                  </p>
                </div>
                <div className="studio-note bg-[rgba(59,91,219,0.08)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Key TikTok metrics
                  </p>
                  <p className="mt-3 font-mono text-3xl font-semibold text-[color:var(--info)]">
                    RPM + ER + Rate
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                    Revenue per mille, engagement rate, and deal rate explain more than follower count.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="section-padding">
        {/* ══════════ WHAT IS A TIKTOK CALCULATOR ══════════ */}
        <section>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">
                <Calculator className="h-3.5 w-3.5" />
                What is a TikTok Calculator?
              </span>
              <h2 className="section-heading mt-4 max-w-2xl text-4xl font-bold text-[color:var(--text)] md:text-5xl">
                A TikTok calculator estimates how much TikTok creators earn and how their content performs.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--text-2)]">
                A <strong>TikTok calculator</strong> takes your real metrics — views, followers,
                engagement rate, niche — and estimates earnings from Creator Fund payouts, brand
                sponsorships, LIVE gifts, and TikTok Shop commissions. Instead of guessing what
                TikTok pays, you get a transparent, data-backed estimate you can act on.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--text-2)]">
                Our TikTok calculator suite includes 35+ specialized tools covering every
                monetization stream available to creators in 2026. Each calculator shows its
                assumptions, methodology, and the benchmark data behind every estimate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whatIsFeatures.slice(0, 4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="studio-note p-5">
                    <Icon className="h-5 w-5 text-[color:var(--info)]" />
                    <h3 className="mt-3 text-base font-semibold text-[color:var(--text)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional feature cards below */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {whatIsFeatures.slice(4).map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="studio-note p-5">
                  <Icon className="h-5 w-5 text-[color:var(--info)]" />
                  <h3 className="mt-3 text-base font-semibold text-[color:var(--text)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════ CALCULATOR CATEGORIES ══════════ */}
        <section className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">
                <Compass className="h-3.5 w-3.5" />
                TikTok Calculator Categories
              </span>
              <h2 className="section-heading mt-4 max-w-2xl text-4xl font-bold text-[color:var(--text)] md:text-5xl">
                Choose the TikTok calculator for your goal.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--text-2)] md:text-base">
              Whether you need to estimate TikTok earnings, benchmark engagement, price a brand
              deal, or project follower growth — pick the right calculator and get one useful number.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {calculatorCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="studio-note group p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${cat.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[color:var(--text)]">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--text-2)]">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.tools.map((tool) => (
                      <span key={tool} className="metric-pill text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--info)]">
                    Open calculators
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ══════════ BENCHMARK STATS ══════════ */}
        <section className="mt-16">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="studio-card p-6 md:p-8">
              <span className="eyebrow">
                <BarChart3 className="h-3.5 w-3.5" />
                TikTok Creator Benchmarks 2026
              </span>
              <h2 className="section-heading mt-5 text-3xl font-bold text-[color:var(--text)] md:text-4xl">
                How much does TikTok pay? Real benchmark data.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-2)] md:text-base">
                Every TikTok calculator on this site uses these benchmarks as baseline context.
                Numbers come from commonly reported creator ranges and are updated when platform
                rules or payout structures change.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {benchmarkStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`studio-note p-6 ${index === 1 ? 'md:-translate-y-4' : ''}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-4 font-mono text-3xl font-semibold text-[color:var(--text)]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--text-2)]">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ POPULAR CALCULATORS ══════════ */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                Most Popular TikTok Calculators
              </span>
              <h2 className="section-heading mt-4 text-4xl font-bold text-[color:var(--text)] md:text-5xl">
                The TikTok calculators creators use most.
              </h2>
            </div>
            <Link
              href="/calculators/"
              className="hidden text-sm font-semibold text-[color:var(--info)] md:inline-flex"
            >
              Browse all 35+ calculators
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="studio-note group p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="badge badge-secondary">{tool.goal}</span>
                    <h3 className="mt-4 text-xl font-semibold text-[color:var(--text)]">
                      {tool.title}
                    </h3>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-[color:var(--muted)] transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-2)]">
                  {tool.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-[color:var(--muted)]">
                  <span className="metric-pill">{tool.platform}</span>
                  <span className="metric-pill">{tool.metric}</span>
                  <span className="metric-pill">Updated {tool.updatedAt}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════ CREATOR SCENARIOS (question-based) ══════════ */}
        <section className="mt-16 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="studio-card p-6 md:p-8">
            <span className="eyebrow">
              <CheckCircle2 className="h-3.5 w-3.5" />
              TikTok Calculator Use Cases
            </span>
            <h2 className="section-heading mt-5 text-3xl font-bold text-[color:var(--text)] md:text-4xl">
              Questions the TikTok calculator answers.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-2)]">
              Creators come to the TikTok calculator with specific monetization questions.
              Here are the most common ones — and the calculator that answers each.
            </p>
            <div className="mt-6 grid gap-4">
              {creatorScenarios.map((scenario) => (
                <Link
                  key={scenario.href + scenario.title}
                  href={scenario.href}
                  className="studio-note flex items-start justify-between gap-4 p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <p className="text-base font-semibold text-[color:var(--text)]">
                      {scenario.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                      {scenario.summary}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--info)]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="studio-note p-6 md:p-8">
              <span className="eyebrow">
                <BookOpen className="h-3.5 w-3.5" />
                TikTok Creator Guides
              </span>
              <div className="mt-5 grid gap-4">
                {featuredGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="border-b border-[rgba(23,32,51,0.08)] pb-4 last:border-b-0 last:pb-0"
                  >
                    <p className="text-lg font-semibold text-[color:var(--text)]">{guide.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                      {guide.excerpt}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      {guide.readingTime} · Updated {guide.updatedAt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="studio-note bg-[linear-gradient(135deg,rgba(255,107,87,0.12),rgba(255,255,255,0.7))] p-6 md:p-8">
              <span className="eyebrow">Transparent Methodology</span>
              <h3 className="mt-5 text-2xl font-semibold text-[color:var(--text)]">
                Every TikTok calculator shows its work.
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-2)]">
                Unlike other TikTok calculators that hide their math, every tool on this site
                shows its assumptions, data sources, and what changes the estimate. You see exactly
                how your TikTok earnings are calculated.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ HOW THE TIKTOK CALCULATOR WORKS ══════════ */}
        <section className="mt-16">
          <div className="studio-card p-6 md:p-10">
            <span className="eyebrow">
              <Zap className="h-3.5 w-3.5" />
              How the TikTok Calculator Works
            </span>
            <h2 className="section-heading mt-5 max-w-3xl text-3xl font-bold text-[color:var(--text)] md:text-4xl">
              Three steps to calculate your TikTok earnings.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <p className="font-mono text-4xl font-bold text-[color:var(--primary)]">01</p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--text)]">
                  Enter your TikTok metrics
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                  Input your follower count, average views, engagement rate, and content niche.
                  The TikTok calculator uses these to personalize your estimate.
                </p>
              </div>
              <div>
                <p className="font-mono text-4xl font-bold text-[color:var(--primary)]">02</p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--text)]">
                  See earnings across all streams
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                  The calculator breaks down estimated earnings from Creator Fund, brand deals,
                  LIVE gifts, TikTok Shop, and ad revenue — with the methodology visible.
                </p>
              </div>
              <div>
                <p className="font-mono text-4xl font-bold text-[color:var(--primary)]">03</p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--text)]">
                  Compare against benchmarks
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">
                  See how your TikTok earnings, engagement rate, and RPM compare to creators
                  in your niche and follower tier. Identify where to optimize.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="mt-16">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="studio-card p-6 md:p-8">
              <span className="eyebrow">TikTok Calculator FAQ</span>
              <h2 className="section-heading mt-5 text-3xl font-bold text-[color:var(--text)] md:text-4xl">
                Frequently asked questions about the TikTok calculator.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-2)] md:text-base">
                Get quick answers about how our TikTok calculators work, how accurate they are,
                and what data they use to estimate your earnings.
              </p>
            </div>
            <div className="grid gap-4">
              {faqPreview.map((item) => (
                <div key={item.question} className="studio-note p-5">
                  <p className="text-base font-semibold text-[color:var(--text)]">
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-2)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FINAL CTA ══════════ */}
        <section className="mt-16">
          <div className="studio-card overflow-hidden p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="eyebrow">
                  <Calculator className="h-3.5 w-3.5" />
                  Start Calculating
                </span>
                <h2 className="section-heading mt-5 max-w-2xl text-4xl font-bold text-[color:var(--text)] md:text-5xl">
                  Use the TikTok calculator and leave with one useful number.
                </h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--text-2)]">
                  35+ free TikTok calculators for earnings, engagement, brand deals, coins, and
                  growth. No signup. Transparent methodology. Built for creators.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/calculators/" className="btn btn-primary btn-lg gap-2">
                  Explore All TikTok Calculators
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/guides/" className="btn btn-secondary btn-lg">
                  Read Creator Guides
                </Link>
              </div>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[color:var(--muted)]">
          TT Calculator is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd.
          &quot;TikTok&quot; is a trademark of its respective owner and appears on this site for descriptive purposes only.
        </p>
      </Container>
    </div>
  );
}
