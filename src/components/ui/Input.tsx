import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  addon?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, helperText, error, addon, className, ...props },
  ref
) {
  const describedBy = [helperText ? `${id}-helper` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className={cn('input-shell', error && 'input-error')}>
        <input
          id={id}
          ref={ref}
          className={cn('input', addon && 'pr-16', className)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          {...props}
        />
        {addon ? <span className="input-addon">{addon}</span> : null}
      </div>
      {helperText && !error ? (
        <p id={`${id}-helper`} className="helper-text">
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="error-text">
          {error}
        </p>
      ) : null}
    </div>
  );
});
