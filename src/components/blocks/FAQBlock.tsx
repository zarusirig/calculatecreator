import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';

interface FAQBlockProps {
  items: Array<{ question: string; answer: string }>;
}

export function FAQBlock({ items }: FAQBlockProps) {
  return (
    <section className="section-padding border-t border-neutral-200/70">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-heading-xl font-semibold text-neutral-900">Frequently asked questions</h2>
          <p className="mt-2 text-body-md text-neutral-600">
            Clear answers before you run your next estimate.
          </p>
        </div>
        <Link href="/faq/" className="btn btn-secondary btn-md">
          See all FAQs
        </Link>
      </div>
      <Accordion
        items={items.map((item) => ({
          title: item.question,
          content: item.answer,
        }))}
      />
    </section>
  );
}
