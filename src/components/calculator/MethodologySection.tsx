'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { trackMethodologyView } from '@/lib/analytics/ga4';

interface MethodologySectionProps {
  calculatorName: string;
  formula: string;
  assumptions: { label: string; value: string }[];
  dataSources: string[];
  limitations: string;
  lastUpdated: string;
}

export function MethodologySection({
  calculatorName,
  formula,
  assumptions,
  dataSources,
  limitations,
  lastUpdated,
}: MethodologySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (!isExpanded) {
      trackMethodologyView(calculatorName);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="mt-8">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-heading-md font-semibold text-neutral-900">
          How We Calculate This
        </h3>
        <svg
          className={`w-6 h-6 text-neutral-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-6 animate-slide-down">
          {/* Formula */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Formula
            </h4>
            <pre className="p-4 bg-neutral-100 rounded-lg overflow-x-auto">
              <code className="text-body-sm text-neutral-800">{formula}</code>
            </pre>
          </div>

          {/* Assumptions */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Assumptions
            </h4>
            <ul className="space-y-2">
              {assumptions.map((assumption, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <div className="flex-1">
                    <span className="font-medium text-neutral-900">
                      {assumption.label}:
                    </span>{' '}
                    <span className="text-neutral-700">{assumption.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Data Sources
            </h4>
            <ul className="space-y-2">
              {dataSources.map((source, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-body-md text-neutral-700">{source}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitations */}
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-3">
              Limitations
            </h4>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              {limitations}
            </p>
          </div>

          {/* Last Updated */}
          <div className="pt-4 border-t border-neutral-200">
            <p className="text-body-sm text-neutral-600">
              <span className="font-medium">Last Updated:</span> {lastUpdated}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
