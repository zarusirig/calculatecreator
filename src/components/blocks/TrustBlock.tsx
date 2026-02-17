import Link from 'next/link';
import { ShieldCheck, Sigma, RefreshCcw } from 'lucide-react';

const trustPoints = [
  {
    title: 'How we estimate',
    body: 'We provide fast estimates based on your inputs and commonly reported ranges.',
    icon: Sigma,
  },
  {
    title: 'Assumptions',
    body: 'Assumptions are shown for transparency and can be adjusted for your context.',
    icon: ShieldCheck,
  },
  {
    title: 'Updated frequency',
    body: 'Benchmarks and assumptions are reviewed weekly to keep estimates relevant.',
    icon: RefreshCcw,
  },
];

export function TrustBlock() {
  return (
    <section className="section-padding border-t border-neutral-200/70">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-heading-xl font-semibold text-neutral-900">Trust and methodology</h2>
          <p className="mt-2 max-w-xl text-body-md text-neutral-600">
            This product is built for clarity: inputs, results, assumptions, and limitations are
            all visible.
          </p>
          <p className="mt-3 flex flex-wrap gap-3 text-sm text-neutral-600">
            <Link href="/methodology/" className="link">
              Methodology
            </Link>
            <Link href="/about/" className="link">
              About
            </Link>
            <Link href="/editorial-policy/" className="link">
              Editorial Policy
            </Link>
          </p>
        </div>
        <Link href="/methodology/" className="btn btn-secondary btn-md">
          Read methodology
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {trustPoints.map((point) => (
          <article key={point.title} className="card p-6">
            <point.icon className="h-5 w-5 text-primary-700" />
            <h3 className="mt-4 text-heading-sm font-semibold text-neutral-900">{point.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{point.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
