'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils/cn';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

interface DataTableProps {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
  highlightFirst?: boolean;
  sortable?: boolean;
  footnote?: string;
  className?: string;
}

type SortDirection = 'asc' | 'desc' | null;

export function DataTable({
  headers,
  rows,
  caption,
  highlightFirst = false,
  sortable = false,
  footnote,
  className,
}: DataTableProps) {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = useCallback(
    (columnIndex: number) => {
      if (!sortable) return;
      if (sortColumn === columnIndex) {
        // Cycle: asc -> desc -> none
        if (sortDirection === 'asc') {
          setSortDirection('desc');
        } else if (sortDirection === 'desc') {
          setSortColumn(null);
          setSortDirection(null);
        }
      } else {
        setSortColumn(columnIndex);
        setSortDirection('asc');
      }
    },
    [sortable, sortColumn, sortDirection]
  );

  const sortedRows = useMemo(() => {
    if (sortColumn === null || sortDirection === null) return rows;

    return [...rows].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      // Numeric comparison if both values are numbers
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      // String comparison
      const aStr = String(aVal);
      const bStr = String(bVal);

      // Try parsing as numbers (handles "$1,234" style strings)
      const aNum = parseFloat(aStr.replace(/[^0-9.-]/g, ''));
      const bNum = parseFloat(bStr.replace(/[^0-9.-]/g, ''));
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
      }

      return sortDirection === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [rows, sortColumn, sortDirection]);

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
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className={cn(
                    'px-4 py-3 text-label-md font-semibold text-primary-800 whitespace-nowrap',
                    'border-b-2 border-primary-200',
                    sortable && 'cursor-pointer select-none hover:bg-primary-100 transition-colors'
                  )}
                  onClick={() => handleSort(index)}
                  aria-sort={
                    sortColumn === index && sortDirection
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  <span className="inline-flex items-center gap-1.5">
                    {header}
                    {sortable && (
                      <span className="text-primary-400">
                        {sortColumn === index && sortDirection === 'asc' ? (
                          <ChevronUp size={14} />
                        ) : sortColumn === index && sortDirection === 'desc' ? (
                          <ChevronDown size={14} />
                        ) : (
                          <ChevronsUpDown size={14} />
                        )}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {sortedRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  'transition-colors hover:bg-primary-50/50',
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                )}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={cn(
                      'px-4 py-3 text-neutral-700',
                      highlightFirst && cellIndex === 0 && 'font-semibold text-neutral-900'
                    )}
                  >
                    {cell}
                  </td>
                ))}
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
