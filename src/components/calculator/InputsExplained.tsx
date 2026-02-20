/**
 * InputsExplained Component
 * Displays calculator inputs in a clean table format
 */

import React from 'react';
import { Card } from '@/components/ui/Card';

export interface InputItem {
  name: string;
  description: string;
  example?: string;
  required?: boolean;
  unit?: string;
  validRange?: string;
}

export interface InputsExplainedProps {
  title?: string;
  inputs: InputItem[];
  note?: string;
}

export function InputsExplained({
  title = 'Calculator Inputs Explained',
  inputs,
  note,
}: InputsExplainedProps) {
  return (
    <Card>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="pb-3 pr-4 text-body-sm font-semibold text-neutral-900">Input</th>
              <th className="pb-3 pr-4 text-body-sm font-semibold text-neutral-900">Description</th>
              <th className="pb-3 pr-4 text-body-sm font-semibold text-neutral-900">Example</th>
              <th className="pb-3 text-body-sm font-semibold text-neutral-900">Range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {inputs.map((input, index) => (
              <tr key={index} className="align-top">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-neutral-900 whitespace-nowrap">{input.name}</span>
                    {input.required && (
                      <span className="text-xs px-1.5 py-0.5 bg-primary-100 text-primary-700 rounded">
                        Required
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 pr-4 text-body-sm text-neutral-700">
                  {input.description}
                </td>
                <td className="py-3 pr-4 text-body-sm font-mono text-primary-600 whitespace-nowrap">
                  {input.example ? `${input.example}${input.unit ? ` ${input.unit}` : ''}` : '—'}
                </td>
                <td className="py-3 text-body-sm text-neutral-500 whitespace-nowrap">
                  {input.validRange || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-4 text-body-sm text-neutral-600 italic border-t border-neutral-100 pt-4">
          {note}
        </p>
      )}
    </Card>
  );
}

export default InputsExplained;
