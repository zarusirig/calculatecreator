import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <details
          key={item.title}
          className="group rounded-xl border border-neutral-200 bg-white px-5 py-4 [&+details]:mt-3"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between text-left">
            <span className="text-sm font-medium text-neutral-900">{item.title}</span>
            <ChevronDown className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pt-3 text-sm leading-relaxed text-neutral-600">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
