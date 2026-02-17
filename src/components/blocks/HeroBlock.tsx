import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function HeroBlock() {
  return (
    <section className="hero-glow border-b border-neutral-200/80 py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-primary-100 bg-white px-3 py-1 text-xs font-medium text-primary-700">
            Numbers-first tools for creators
          </p>
          <h1 className="mt-5 text-display-md font-bold text-neutral-900 md:text-display-xl">
            Creator benchmarks made simple.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-body-md text-neutral-600 md:text-body-lg">
            Estimate, compare, and benchmark outcomes with clear inputs, transparent assumptions,
            and clean outputs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/tools/" className="btn btn-primary btn-lg">
              Explore calculators
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/benchmarks/" className="btn btn-secondary btn-lg">
              View benchmarks
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
