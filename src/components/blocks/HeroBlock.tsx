'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Container } from '@/components/layout/Container';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  RefreshCw,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';

/* ─── RPM lookup by niche ($/1K views, Creator Fund range) ─── */
const NICHE_RPM: Record<string, { low: number; high: number; label: string }> = {
  general: { low: 0.02, high: 0.05, label: 'General' },
  beauty: { low: 0.03, high: 0.06, label: 'Beauty & Fashion' },
  gaming: { low: 0.03, high: 0.07, label: 'Gaming' },
  finance: { low: 0.04, high: 0.08, label: 'Finance & Business' },
  fitness: { low: 0.03, high: 0.06, label: 'Fitness & Health' },
  food: { low: 0.02, high: 0.05, label: 'Food & Cooking' },
  comedy: { low: 0.02, high: 0.04, label: 'Comedy & Entertainment' },
  education: { low: 0.03, high: 0.07, label: 'Education' },
  tech: { low: 0.04, high: 0.08, label: 'Tech & Reviews' },
  lifestyle: { low: 0.02, high: 0.05, label: 'Lifestyle & Vlog' },
};

const NICHES = Object.entries(NICHE_RPM).map(([key, v]) => ({
  value: key,
  label: v.label,
}));

const trustBadges = [
  { icon: RefreshCw, text: 'Updated weekly' },
  { icon: TrendingUp, text: '2,500+ creator data points' },
  { icon: Shield, text: 'No login required' },
];

function formatCurrency(n: number): string {
  if (n < 1) return '<$1';
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
  return `$${Math.round(n)}`;
}

export function HeroBlock() {
  const [followers, setFollowers] = useState('');
  const [avgViews, setAvgViews] = useState('');
  const [niche, setNiche] = useState('general');
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateEstimate = useCallback(() => {
    const f = parseInt(followers.replace(/,/g, ''), 10);
    const v = parseInt(avgViews.replace(/,/g, ''), 10);

    if (!f || !v || f <= 0 || v <= 0) {
      setEstimate(null);
      setShowResult(false);
      return;
    }

    const nicheData = NICHE_RPM[niche] || NICHE_RPM.general;
    // Monthly estimate: ~20 posts × avg views × RPM
    const postsPerMonth = 20;
    const totalViews = postsPerMonth * v;
    const low = (totalViews / 1000) * nicheData.low;
    const high = (totalViews / 1000) * nicheData.high;

    setEstimate({ low, high });
    setShowResult(true);
  }, [followers, avgViews, niche]);

  /* recalculate on every input change */
  useEffect(() => {
    const timeout = setTimeout(calculateEstimate, 300);
    return () => clearTimeout(timeout);
  }, [calculateEstimate]);

  /* format number input with commas */
  const handleNumberInput = (
    value: string,
    setter: (v: string) => void
  ) => {
    const digits = value.replace(/[^0-9]/g, '');
    if (digits.length > 12) return;
    const formatted = digits ? parseInt(digits, 10).toLocaleString() : '';
    setter(formatted);
  };

  return (
    <section className="hero-creator-glow relative overflow-hidden border-b border-white/[0.06] py-16 md:py-24">
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='g' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-5xl">
          {/* ─── Headline ─── */}
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00D4AA]/20 bg-[#00D4AA]/[0.06] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-[#00D4AA]">
                Numbers-first tools for TikTok creators
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Know what your next{' '}
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#00B894] bg-clip-text text-transparent">
                30 days
              </span>{' '}
              can earn.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-white/50 md:text-lg">
              Enter your numbers. Get a transparent estimate in 5 seconds.
            </p>
          </div>

          {/* ─── Inline Estimator ─── */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="creator-card rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Followers */}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Followers
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={followers}
                    onChange={(e) => handleNumberInput(e.target.value, setFollowers)}
                    placeholder="e.g. 50,000"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/25 transition-all duration-200 focus:border-[#00D4AA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/20"
                  />
                </div>

                {/* Avg views */}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Avg Views / Video
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={avgViews}
                    onChange={(e) => handleNumberInput(e.target.value, setAvgViews)}
                    placeholder="e.g. 10,000"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/25 transition-all duration-200 focus:border-[#00D4AA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/20"
                  />
                </div>

                {/* Niche */}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Niche
                  </label>
                  <div className="relative">
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white transition-all duration-200 focus:border-[#00D4AA]/40 focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/20"
                    >
                      {NICHES.map((n) => (
                        <option key={n.value} value={n.value} className="bg-[#111827] text-white">
                          {n.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  </div>
                </div>
              </div>

              {/* ─── Estimate Result ─── */}
              {showResult && estimate && (
                <div className="mt-6 animate-number-count">
                  <div className="rounded-xl border border-[#00D4AA]/20 bg-[#00D4AA]/[0.04] p-5">
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#00D4AA]/80">
                          Estimated monthly Creator Fund earnings
                        </p>
                        <p className="mt-1 font-display text-3xl font-bold text-white md:text-4xl">
                          {formatCurrency(estimate.low)}{' '}
                          <span className="text-white/30">–</span>{' '}
                          {formatCurrency(estimate.high)}
                        </p>
                        <p className="mt-1 text-xs text-white/35">
                          Based on ~20 posts/month × {NICHE_RPM[niche]?.label || 'General'} niche RPM
                        </p>
                      </div>
                      <Link
                        href="/calculators/tiktok-creator-fund/"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4AA] to-[#00B894] px-5 py-3 text-sm font-semibold text-[#0B1120] transition-all hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:scale-[1.02]"
                      >
                        Run Detailed Estimate
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── Default CTA (when no result) ─── */}
              {!showResult && (
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/calculators/tiktok-creator-fund/"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4AA] to-[#00B894] px-6 py-3 text-sm font-semibold text-[#0B1120] transition-all hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:scale-[1.02]"
                  >
                    Run Detailed Estimate
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/benchmarks/"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
                  >
                    See Real Benchmarks
                  </Link>
                </div>
              )}
            </div>

            {/* ─── How estimates link ─── */}
            <div className="mt-4 text-center">
              <Link
                href="/methodology/"
                className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/50 transition-colors underline-offset-4 hover:underline"
              >
                <CheckCircle className="h-3 w-3" />
                How estimates are calculated
              </Link>
            </div>
          </div>

          {/* ─── Trust Row ─── */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 animate-metric-pulse"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#00D4AA]/60" />
                    <span className="text-xs text-white/40">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
