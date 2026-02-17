import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AdPlacement } from '@/components/ads/AdPlacement';

interface ToolPageTemplateProps {
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
  description: string;
  updatedAt: string;
  methodologyHref: string;
  inputAndResult: React.ReactNode;
  howTo?: React.ReactNode;
  examples?: React.ReactNode;
  relatedTools?: React.ReactNode;
  faqs?: React.ReactNode;
  relatedGuides?: React.ReactNode;
}

export function ToolPageTemplate({
  breadcrumbs,
  title,
  description,
  updatedAt,
  methodologyHref,
  inputAndResult,
  howTo,
  examples,
  relatedTools,
  faqs,
  relatedGuides,
}: ToolPageTemplateProps) {
  return (
    <div className="pb-16 pt-8">
      <Container>
        <Breadcrumbs items={breadcrumbs} className="mb-5" />

        <header className="mb-7">
          <h1 className="text-display-sm font-bold text-neutral-900">{title}</h1>
          <p className="mt-3 max-w-3xl text-body-md text-neutral-600">{description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span>Updated {updatedAt}</span>
            <Link href={methodologyHref} className="link">
              Methodology
            </Link>
            <button type="button" className="btn btn-ghost btn-sm">
              Save
            </button>
          </div>
        </header>

        <AdPlacement placement="above-tool" />
        {inputAndResult}
        <AdPlacement placement="below-tool" />

        {howTo ? <section className="mt-8">{howTo}</section> : null}
        {examples ? <section className="mt-10">{examples}</section> : null}
        {relatedTools ? <section className="mt-8">{relatedTools}</section> : null}
        {faqs ? <section className="mt-8">{faqs}</section> : null}
        {relatedGuides ? <section className="mt-8">{relatedGuides}</section> : null}
      </Container>
    </div>
  );
}
