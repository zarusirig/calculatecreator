import Link from 'next/link';
import { AUTHORS } from '@/lib/constants/authors';

const featuredExperts = [
    AUTHORS['michael-chen'],
    AUTHORS['sarah-johnson'],
    AUTHORS['emily-thompson'],
    AUTHORS['alex-martinez'],
];

export function ExpertTeamBlock() {
    return (
        <section className="section-padding border-t border-neutral-200/70">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary-700">
                        Editorial workflow
                    </p>
                    <h2 className="mt-2 text-heading-xl font-semibold text-neutral-900">
                        Internal desks behind the site
                    </h2>
                    <p className="mt-2 max-w-2xl text-body-md text-neutral-600">
                        TT Calculator uses shared editorial, research, growth, commerce, and
                        operations desks to maintain calculators, guides, and methodology notes.
                    </p>
                </div>
                <Link href="/about/" className="btn btn-secondary btn-md">
                    About our workflow
                </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {featuredExperts.map((expert) => (
                    <article key={expert.id} className="card p-6">
                        {/* Avatar initials */}
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-sm font-bold text-white shadow-sm">
                            {expert.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                        </div>
                        <h3 className="text-heading-sm font-semibold text-neutral-900">
                            {expert.name}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-primary-700">
                            {expert.role}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                            {expert.credentials[0]}
                        </p>
                        {/* Expertise tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {expert.expertise.slice(0, 2).map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex rounded-full border border-primary-100 bg-primary-50 px-2.5 py-0.5 text-[0.6875rem] font-medium text-primary-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
