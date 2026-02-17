import { Database, FileText, RefreshCcw, Users } from 'lucide-react';

const sources = [
    {
        title: 'TikTok Creator Marketplace',
        body: 'Public engagement and pricing benchmarks from TikTok\'s own creator marketplace data.',
        icon: Database,
    },
    {
        title: 'Published earnings reports',
        body: 'We cross-reference creator self-reports, platform disclosures, and published industry studies.',
        icon: FileText,
    },
    {
        title: 'Community-reported ranges',
        body: 'Aggregated data from 50,000+ creator accounts analyzed, covering nano to mega tiers.',
        icon: Users,
    },
    {
        title: 'Weekly benchmark refreshes',
        body: 'Assumptions and ranges are reviewed every week to reflect the latest Creator Fund and algorithm changes.',
        icon: RefreshCcw,
    },
];

export function DataSourcesBlock() {
    return (
        <section className="section-padding border-t border-neutral-200/70">
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary-700">
                    Our data sources
                </p>
                <h2 className="mt-2 text-heading-xl font-semibold text-neutral-900">
                    Where our numbers come from
                </h2>
                <p className="mt-2 max-w-2xl text-body-md text-neutral-600">
                    We never guess. Every assumption and range is backed by real data,
                    linked to its source, and refreshed regularly.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {sources.map((source) => (
                    <article key={source.title} className="card p-6">
                        <source.icon className="h-5 w-5 text-primary-700" />
                        <h3 className="mt-4 text-heading-sm font-semibold text-neutral-900">
                            {source.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                            {source.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
