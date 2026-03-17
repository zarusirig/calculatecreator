import { Database, FileText, RefreshCcw, Users } from 'lucide-react';

const sources = [
    {
        title: 'Official documentation',
        body: 'We use public platform documentation and help-center material when program rules or eligibility affect a calculator.',
        icon: Database,
    },
    {
        title: 'Published references',
        body: 'We cite public articles, benchmark reports, and explanatory references where they materially inform an estimate.',
        icon: FileText,
    },
    {
        title: 'Community-reported ranges',
        body: 'Some ranges rely on public creator and community reporting, so outputs should be treated as directional rather than guaranteed.',
        icon: Users,
    },
    {
        title: 'Methodology updates',
        body: 'We revise assumptions when platform rules, source material, or product logic changes require an update.',
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
                    We show the source categories behind our assumptions and call out where outputs
                    are directional estimates rather than precise measurements.
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
