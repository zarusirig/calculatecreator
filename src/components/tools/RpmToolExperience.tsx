'use client';

import { useMemo, useState } from 'react';
import { Copy, RefreshCcw, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Toast } from '@/components/ui/Alert';
import { calculateRPM, validateRPMInput } from '@/lib/calculators/rpm';

function parseNumericValue(value: string): number {
  const cleaned = value.replace(/,/g, '').trim();
  const parsed = Number.parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatInteger(value: string): string {
  const parsed = parseNumericValue(value);
  return parsed > 0 ? Math.round(parsed).toLocaleString() : '';
}

function formatCurrency(value: string): string {
  const parsed = parseNumericValue(value);
  return parsed > 0 ? parsed.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }) : '';
}

export function RpmToolExperience() {
  const [views, setViews] = useState('100,000');
  const [earnings, setEarnings] = useState('3');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasCalculated, setHasCalculated] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(
    null
  );

  const parsedInput = useMemo(
    () => ({
      views: parseNumericValue(views),
      earnings: parseNumericValue(earnings),
    }),
    [views, earnings]
  );

  const result = hasCalculated ? calculateRPM(parsedInput) : null;

  const handleCalculate = () => {
    const validation = validateRPMInput(parsedInput);
    setErrors(validation.errors);
    if (!validation.valid) {
      setHasCalculated(false);
      return;
    }
    setHasCalculated(true);
  };

  const handleReset = () => {
    setViews('100,000');
    setEarnings('3');
    setErrors({});
    setHasCalculated(false);
  };

  const handleCopy = async () => {
    if (!result) return;
    const payload = `Estimated RPM: $${result.rpm.toFixed(3)} per 1,000 views`;
    try {
      await navigator.clipboard.writeText(payload);
      setToast({ message: 'Copied!', type: 'success' });
    } catch {
      setToast({ message: 'Copy failed', type: 'error' });
    }
  };

  const handleShare = async () => {
    if (!result) return;
    const text = `Estimated RPM: $${result.rpm.toFixed(3)} per 1,000 views`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'RPM estimate', text, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(`${text} • ${window.location.href}`);
      }
      setToast({ message: 'Link created', type: 'success' });
    } catch {
      setToast({ message: 'Share canceled', type: 'info' });
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]" data-interactive-tool="true">
      <section className="card p-6 md:p-7">
        <h2 className="text-heading-lg font-semibold text-neutral-900">Inputs</h2>
        <p className="mt-2 text-sm text-neutral-600">Used only to calculate this result.</p>

        <div className="mt-6 space-y-4">
          <Input
            id="rpm-views"
            label="Views per month"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            onBlur={() => setViews(formatInteger(views))}
            placeholder="100,000"
            helperText="Updated weekly."
            error={errors.views}
            inputMode="numeric"
            autoComplete="off"
          />
          <Input
            id="rpm-earnings"
            label="Earnings"
            value={earnings}
            onChange={(e) => setEarnings(e.target.value)}
            onBlur={() => setEarnings(formatCurrency(earnings))}
            placeholder="3"
            helperText="Your inputs stay in your browser."
            error={errors.earnings}
            addon="$"
            inputMode="decimal"
            autoComplete="off"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={handleCalculate}>
            Estimate RPM
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </section>

      <aside className="card p-6 md:sticky md:top-24 md:h-fit">
        <h2 className="text-heading-md font-semibold text-neutral-900">Result</h2>

        <div className="mt-4 min-h-[280px] rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          {result ? (
            <>
              <p className="text-3xl font-semibold tracking-tight text-neutral-900">${result.rpm.toFixed(3)}</p>
              <p className="mt-1 text-sm font-medium text-neutral-700">RPM ($ per 1,000 views)</p>
              <p className="mt-4 text-sm text-neutral-600">
                This estimate changes based on niche, region, and seasonality.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button variant="secondary" size="sm" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button variant="secondary" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[240px] items-center text-sm text-neutral-500">
              Enter inputs to see your estimate and what it means.
            </div>
          )}
        </div>

        <details className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
          <summary className="cursor-pointer list-none text-sm font-medium text-neutral-900">
            Assumptions
          </summary>
          <div className="mt-3 space-y-2 text-sm text-neutral-600">
            <p>We provide fast estimates based on your inputs and commonly reported ranges.</p>
            <p>Results are directional, not guarantees.</p>
          </div>
        </details>
      </aside>

      {toast ? (
        <Toast message={toast.message} type={toast.type} duration={1800} onClose={() => setToast(null)} />
      ) : null}
    </div>
  );
}
