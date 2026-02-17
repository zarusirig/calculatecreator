import { ClipboardList, BarChart3, Lightbulb } from 'lucide-react';

const steps = [
    {
        step: '01',
        title: 'Enter your metrics',
        body: 'Input your follower count, average views, engagement signals, or revenue data. Every field has a tooltip explaining what it means.',
        icon: ClipboardList,
    },
    {
        step: '02',
        title: 'See transparent estimates',
        body: 'Results display with visible assumptions and data ranges so you know exactly how the number was derived — no black boxes.',
        icon: BarChart3,
    },
    {
        step: '03',
        title: 'Take action with guides',
        body: 'Each result links to actionable guides, related calculators, and benchmark comparisons so you know what to do next.',
        icon: Lightbulb,
    },
];

export function HowItWorksBlock() {
    return (
        <section className="section-padding border-t border-neutral-200/70">
            <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary-700">
                    How it works
                </p>
                <h2 className="mt-2 text-heading-xl font-semibold text-neutral-900">
                    From inputs to insights in three steps
                </h2>
                <p className="mt-2 max-w-2xl text-body-md text-neutral-600">
                    Every calculator follows the same transparent flow: you provide the
                    data, we show the math, and then connect you to next steps.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {steps.map((item) => (
                    <div
                        key={item.step}
                        className="card relative overflow-hidden p-6"
                    >
                        <span className="absolute right-4 top-3 text-4xl font-bold text-neutral-100">
                            {item.step}
                        </span>
                        <item.icon className="h-6 w-6 text-primary-700" />
                        <h3 className="mt-4 text-heading-sm font-semibold text-neutral-900">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                            {item.body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
