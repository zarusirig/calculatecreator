'use client';

import React from 'react';

type ContentType = 'guide' | 'news';

// Guide category to image mapping
const guideImages: Record<string, string> = {
  'Monetization': 'guide-monetization',
  'Creator Fund': 'guide-creator-fund',
  'Brand Deals': 'guide-brand-deals',
  'LIVE': 'guide-live-streaming',
  'TikTok Shop': 'guide-tiktok-shop',
  'Niche Earnings': 'guide-monetization',
  'Content Strategy': 'guide-content-strategy',
  'Analytics': 'guide-analytics',
  'Tools': 'guide-tools',
  'Advanced': 'guide-analytics',
  'Troubleshooting': 'guide-tools',
  'Growth': 'guide-growth',
  'Algorithm': 'guide-algorithm',
};

// News category to image mapping
const newsImages: Record<string, string> = {
  'Regulatory': 'news-regulatory',
  'Features': 'news-features',
  'TikTok Shop': 'news-shop',
  'Algorithm': 'news-algorithm',
  'Discovery': 'news-algorithm',
  'Monetization': 'news-monetization',
  'Safety': 'news-safety',
};

interface ArticleFeaturedImageProps {
  type: ContentType;
  category: string;
  alt: string;
  priority?: boolean;
}

export function ArticleFeaturedImage({
  type,
  category,
  alt,
  priority = false
}: ArticleFeaturedImageProps) {
  const imageMap = type === 'guide' ? guideImages : newsImages;
  const defaultImage = type === 'guide' ? 'guide-monetization' : 'news-features';
  const imageName = imageMap[category] || defaultImage;
  const basePath = type === 'guide' ? '/guides' : '/news';

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${basePath}/${imageName}-640.avif 640w, ${basePath}/${imageName}-1024.avif 1024w, ${basePath}/${imageName}-1600.avif 1600w`}
        sizes="100vw"
      />
      <source
        type="image/webp"
        srcSet={`${basePath}/${imageName}-640.webp 640w, ${basePath}/${imageName}-1024.webp 1024w, ${basePath}/${imageName}-1600.webp 1600w`}
        sizes="100vw"
      />
      <img
        src={`${basePath}/${imageName}-1024.webp`}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
}

export { guideImages, newsImages };
