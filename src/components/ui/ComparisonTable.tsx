import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  name: string;
  features: Record<string, string | boolean>;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
  caption?: string;
  footnote?: string;
  className?: string;
}

export function ComparisonTable({
  items,
  caption,
  footnote,
  className,
}: ComparisonTableProps) {
  // Collect all unique feature keys preserving insertion order
  const featureKeys = Array.from(
    new Set(items.flatMap((item) => Object.keys(item.features)))
  );

  return (
    <div className={cn('w-full', className)}>
      <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
        <table className="w-full border-collapse text-left text-body-sm">
          {caption && (
            <caption className="px-4 py-3 text-left text-heading-sm font-semibold text-neutral-900 bg-neutral-50 border-b border-neutral-200">
              {caption}
            </caption>
          )}
          <thead>
            <tr className="bg-primary-50">
              {/* Feature name column header */}
              <th
                scope="col"
                className="px-4 py-3 text-label-md font-semibold text-primary-800 border-b-2 border-primary-200 whitespace-nowrap"
              >
                Feature
              </th>
              {items.map((item) => (
                <th
                  key={item.name}
                  scope="col"
                  className="px-4 py-3 text-label-md font-semibold text-primary-800 border-b-2 border-primary-200 whitespace-nowrap text-center"
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {featureKeys.map((feature, rowIndex) => (
              <tr
                key={feature}
                className={cn(
                  'transition-colors hover:bg-primary-50/50',
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                )}
              >
                <td className="px-4 py-3 font-semibold text-neutral-900 whitespace-nowrap">
                  {feature}
                </td>
                {items.map((item) => {
                  const value = item.features[feature];
                  return (
                    <td key={item.name} className="px-4 py-3 text-center">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-success-100">
                            <Check size={16} className="text-success-600" aria-label="Yes" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-error-100">
                            <X size={16} className="text-error-600" aria-label="No" />
                          </span>
                        )
                      ) : (
                        <span className="text-neutral-700">{value ?? '—'}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="mt-2 text-label-sm text-neutral-500 italic px-1">
          {footnote}
        </p>
      )}
    </div>
  );
}
