import Link from 'next/link';

export function CTAStripBlock() {
  return (
    <section className="section-padding border-t border-neutral-200/70">
      <div className="cta-strip rounded-2xl border border-primary-100 p-8 md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary-700">
              Quick start
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-neutral-900">
              Get your estimate in 30 seconds
            </h2>
            <p className="mt-2 text-body-md text-neutral-600">
              Used only to calculate this result. Your inputs stay in your browser.
            </p>
          </div>
          <Link href="/calculators/" className="btn btn-primary btn-lg">
            Explore tools
          </Link>
        </div>
      </div>
    </section>
  );
}
