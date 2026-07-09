import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebVitals } from '@/components/performance/WebVitals';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { CookieConsent } from '@/components/consent/CookieConsent';

// Self-hosted fonts via next/font/local — the .woff2 files live in ./fonts and
// are served from our own origin. This removes the build-time fetch to
// fonts.googleapis.com/fonts.gstatic.com (which was hanging builds) AND the
// render-blocking Google Fonts round-trip at runtime. CSS variables are
// consumed by globals.css (--font-body / --font-display / --font-mono) and the
// Tailwind fontFamily config, so all existing class/variable references keep
// working unchanged.
const fraunces = localFont({
  src: [
    { path: './fonts/fraunces-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/fraunces-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-fraunces',
});

const manrope = localFont({
  src: [
    { path: './fonts/manrope-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/manrope-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/manrope-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/manrope-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: './fonts/manrope-latin-800-normal.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-manrope',
});

const ibmPlexMono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ibm-plex-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'TT Calculator - Creator Benchmarks and Calculators',
    template: '%s',
  },
  description: "Free TikTok creator calculators and benchmarks. Transparent earnings estimates, engagement analytics, and growth tools with expert-reviewed methodology.",
  keywords: [
    'creator calculator',
    'creator benchmarks',
    'rpm calculator',
    'engagement calculator',
    'earnings calculator',
    'creator analytics tools',
  ],
  authors: [{ name: 'TT Calculator' }],
  creator: 'TT Calculator',
  publisher: 'TT Calculator',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/tt-calculator-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'TT Calculator - Creator Benchmarks and Calculators',
    description:
      'A calm, trustworthy creator analytics product for estimates, comparisons, and benchmarks.',
    siteName: 'TT Calculator',
    images: [
      {
        url: 'https://ttcalculator.net/home/hero-dashboard-1600.webp',
        width: 1200,
        height: 630,
        alt: 'TT Calculator - Free Earnings & Analytics Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TT Calculator',
    description:
      'Creator benchmarks and calculators with transparent assumptions.',
    images: ['https://ttcalculator.net/home/hero-dashboard-1600.webp'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className="font-sans text-neutral-900">
        <a href="#main" className="skip-link">Skip to content</a>

        {/* Service Worker Registration */}
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <ErrorBoundary>
            <main id="main" className="relative flex-1">{children}</main>
          </ErrorBoundary>
          <Footer />
          <WebVitals />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
