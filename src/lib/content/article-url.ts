import type { ArticleFrontmatter } from './types';

/**
 * Canonical site path for any article after the "Tools + unified Learn" restructure.
 * Every evergreen article now lives flat at /learn/<slug>/; blog posts stay at /blog/<slug>/.
 * Pure (no fs) so it is safe in both server and client components. `slug` matches the
 * content filename 1:1, so the returned path always mirrors the real route.
 */
export function articleUrl(fm: Pick<ArticleFrontmatter, 'category' | 'slug'>): string {
  const root = fm.category === 'blog' ? 'blog' : 'learn';
  return `/${root}/${fm.slug}/`;
}

/** Absolute canonical URL variant. */
export function articleUrlAbsolute(fm: Pick<ArticleFrontmatter, 'category' | 'slug'>): string {
  return `https://ttcalculator.net${articleUrl(fm)}`;
}

/**
 * Canonical path for a hub/listing page given the legacy section key it filters on
 * (e.g. 'guides/growth' -> '/learn/growth/', 'data/earnings' -> '/learn/earnings/',
 * 'learn' -> '/learn/'). Hubs were relocated under /learn/ keyed by the section basename.
 */
export function hubUrl(section: string): string {
  if (section === 'learn') return '/learn/';
  const slug = section.split('/').filter(Boolean).pop();
  return slug ? `/learn/${slug}/` : '/learn/';
}
