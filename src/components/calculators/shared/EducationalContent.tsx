import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Card } from '@/components/ui/Card';

// Content block types
export interface BenchmarkItem {
  range: string;
  label: string;
  description: string;
  colorClass: string;
}

export interface IconTextItem {
  icon: LucideIcon;
  title: string;
  content: ReactNode;
}

export interface TipItem {
  text: string;
}

export interface TableColumn {
  key: string;
  header: string;
  className?: string;
}

export interface TableRow {
  [key: string]: string | ReactNode;
}

// Section types
export interface BenchmarkSection {
  type: 'benchmarks';
  title: string;
  description?: string;
  items: BenchmarkItem[];
}

export interface IconTextSection {
  type: 'icon-text';
  title: string;
  description?: string;
  items: IconTextItem[];
}

export interface TipsSection {
  type: 'tips';
  title: string;
  description?: ReactNode;
  items: TipItem[];
}

export interface TableSection {
  type: 'table';
  title: string;
  description?: string;
  columns: TableColumn[];
  rows: TableRow[];
}

export interface TextSection {
  type: 'text';
  title: string;
  content: ReactNode;
}

export type EducationalSection =
  | BenchmarkSection
  | IconTextSection
  | TipsSection
  | TableSection
  | TextSection;

export interface EducationalContentProps {
  sections: EducationalSection[];
}

/**
 * EducationalContent - SSR component for rendering educational content blocks
 *
 * Supports multiple content types:
 * - benchmarks: Colored range cards (Excellent, Good, Average, etc.)
 * - icon-text: Icon + heading + paragraph blocks
 * - tips: Numbered tips list
 * - table: Data comparison tables
 * - text: Simple title + content block
 *
 * @example
 * ```tsx
 * <EducationalContent
 *   sections={[
 *     {
 *       type: 'benchmarks',
 *       title: 'Engagement Rate Benchmarks',
 *       items: [
 *         { range: '10%+', label: 'Excellent', description: 'Top 10%', colorClass: 'bg-success-100 border-success-300 text-success-700' },
 *       ]
 *     }
 *   ]}
 * />
 * ```
 */
export function EducationalContent({ sections }: EducationalContentProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <Card key={index}>
          {renderSection(section)}
        </Card>
      ))}
    </div>
  );
}

function renderSection(section: EducationalSection) {
  switch (section.type) {
    case 'benchmarks':
      return <BenchmarkContent section={section} />;
    case 'icon-text':
      return <IconTextContent section={section} />;
    case 'tips':
      return <TipsContent section={section} />;
    case 'table':
      return <TableContent section={section} />;
    case 'text':
      return <TextContent section={section} />;
    default:
      return null;
  }
}

function BenchmarkContent({ section }: { section: BenchmarkSection }) {
  return (
    <>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {section.title}
      </h2>
      {section.description && (
        <p className="text-body-md text-neutral-700 mb-4">{section.description}</p>
      )}
      <div className="space-y-3">
        {section.items.map((item) => (
          <div
            key={item.label}
            className={`p-4 rounded-lg border-2 ${item.colorClass}`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold">{item.label}</span>
              <span className="text-sm font-mono">{item.range}</span>
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function IconTextContent({ section }: { section: IconTextSection }) {
  return (
    <>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {section.title}
      </h2>
      {section.description && (
        <p className="text-body-md text-neutral-700 mb-4">{section.description}</p>
      )}
      <div className="space-y-4 text-body-md text-neutral-700">
        {section.items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index}>
              <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                <Icon size={20} className="text-primary-600" />
                {item.title}
              </h3>
              <div>{item.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function TipsContent({ section }: { section: TipsSection }) {
  return (
    <>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {section.title}
      </h2>
      {section.description && (
        <p className="text-body-md text-neutral-700 mb-4">{section.description}</p>
      )}
      <div className="space-y-3">
        {section.items.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg"
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </span>
            <p className="text-body-sm text-neutral-700">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function TableContent({ section }: { section: TableSection }) {
  return (
    <>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {section.title}
      </h2>
      {section.description && (
        <p className="text-body-md text-neutral-700 mb-4">{section.description}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-body-sm">
          <thead>
            <tr className="border-b border-neutral-200">
              {section.columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 font-semibold text-neutral-900 ${col.className || ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-neutral-100">
                {section.columns.map((col) => (
                  <td key={col.key} className={`py-3 px-4 ${col.className || ''}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function TextContent({ section }: { section: TextSection }) {
  return (
    <>
      <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
        {section.title}
      </h2>
      <div className="text-body-md text-neutral-700">{section.content}</div>
    </>
  );
}
