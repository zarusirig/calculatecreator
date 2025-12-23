'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface InputFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'email';
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  helperText?: string;
  tooltip?: string;
  error?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function InputField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  helperText,
  tooltip,
  error,
  min,
  max,
  step,
  required,
  disabled,
  icon,
}: InputFieldProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value;
    onChange(newValue);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="label">
          {label}
          {required && <span className="text-error-DEFAULT ml-1">*</span>}
        </label>
        {tooltip && (
          <button
            type="button"
            className="relative text-neutral-500 hover:text-neutral-700 transition-colors"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {showTooltip && (
              <div className="absolute z-10 right-0 top-8 w-64 p-3 bg-neutral-900 text-white text-body-sm rounded-lg shadow-lg animate-fade-in">
                {tooltip}
                <div className="absolute -top-1 right-4 w-2 h-2 bg-neutral-900 transform rotate-45" />
              </div>
            )}
          </button>
        )}
      </div>

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          required={required}
          disabled={disabled}
          className={cn(
            'input',
            icon ? 'pl-10' : '',
            error ? 'input-error' : '',
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          )}
        />
      </div>

      {helperText && !error && (
        <p className="helper-text">{helperText}</p>
      )}

      {error && (
        <p className="error-text flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
