'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  aspectRatio?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  // Props for external CDN loader
  useCDN?: boolean;
  cdnUrl?: string;
}

/**
 * OptimizedImage component for static export with modern formats support
 * 
 * Supports two approaches:
 * 1. External CDN (recommended): Set useCDN=true and provide cdnUrl
 * 2. Local responsive images: Use <picture> with manually generated formats
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  aspectRatio,
  sizes,
  quality = 75,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL,
  useCDN = false,
  cdnUrl = '',
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center bg-neutral-100 text-neutral-400 ${className}`}
        style={aspectRatio ? { aspectRatio } : {}}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  // External CDN approach (recommended)
  if (useCDN && cdnUrl) {
    const loader = ({ src: imgSrc, width: w, quality: q }: { src: string; width: number; quality?: number }) => {
      return `${cdnUrl}${imgSrc}?w=${w}&q=${q || 75}&format=auto&fit=crop`;
    };

    return (
      <div className={fill ? 'relative' : ''} style={fill ? {} : aspectRatio ? { aspectRatio } : {}}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          sizes={sizes}
          quality={quality}
          loading={loading}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          loader={loader}
          className={`${className} ${fill ? 'object-cover' : ''}`}
          onError={() => setImageError(true)}
          unoptimized // Important for static export
          {...props}
        />
      </div>
    );
  }

  // Local approach with picture element for formats
  const getBaseFilename = (url: string): string => {
    const filename = url.split('/').pop() || '';
    return filename.substring(0, filename.lastIndexOf('.'));
  };

  const getBasePath = (url: string): string => {
    const parts = url.split('/');
    parts.pop();
    return parts.join('/');
  };

  const baseFilename = getBaseFilename(src);
  const basePath = getBasePath(src);

  // For LCP images, use priority loading
  if (priority && loading === 'lazy') {
    loading = 'eager';
  }

  return (
    <div className={fill ? 'relative' : ''} style={fill ? {} : aspectRatio ? { aspectRatio } : {}}>
      <picture>
        {/* AVIF source - most efficient modern format */}
        <source
          type="image/avif"
          srcSet={`
            ${basePath}/${baseFilename}-640.avif 640w,
            ${basePath}/${baseFilename}-1024.avif 1024w,
            ${basePath}/${baseFilename}-1600.avif 1600w,
            ${basePath}/${baseFilename}-1920.avif 1920w
          `}
          sizes={sizes}
        />
        {/* WebP source - fallback for browsers without AVIF */}
        <source
          type="image/webp"
          srcSet={`
            ${basePath}/${baseFilename}-640.webp 640w,
            ${basePath}/${baseFilename}-1024.webp 1024w,
            ${basePath}/${baseFilename}-1600.webp 1600w,
            ${basePath}/${baseFilename}-1920.webp 1920w
          `}
          sizes={sizes}
        />
        {/* Fallback to original format */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          sizes={sizes}
          quality={quality}
          loading={loading}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`${className} ${fill ? 'object-cover' : ''}`}
          onError={() => setImageError(true)}
          {...props}
        />
      </picture>
    </div>
  );
}