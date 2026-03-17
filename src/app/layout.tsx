import type { Metadata } from 'next';
import '@/styles/globals.css';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebVitals } from '@/components/performance/WebVitals';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { CookieConsent } from '@/components/consent/CookieConsent';

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
        url: 'https://tiktokcalculator.net/home/hero-dashboard-1600.webp',
        width: 1200,
        height: 630,
        alt: 'TikTok Creator Calculator - Free Earnings & Analytics Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TT Calculator',
    description:
      'Creator benchmarks and calculators with transparent assumptions.',
    images: ['https://tiktokcalculator.net/home/hero-dashboard-1600.webp'],
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
    <html lang="en">
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
            <main className="relative flex-1">{children}</main>
          </ErrorBoundary>
          <Footer />
          <WebVitals />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
