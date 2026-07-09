/**
 * Class Name Utility
 * Merges class names with support for conditional classes.
 *
 * Delegates to `clsx` (conditional/object/array flattening) and then
 * `tailwind-merge` (resolves conflicting Tailwind classes so the last
 * value wins deterministically, e.g. `px-2 px-4` -> `px-4`).
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
