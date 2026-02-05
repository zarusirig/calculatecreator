import type { Metadata } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebVitals } from '@/components/performance/WebVitals';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

// Distinctive display font for headings - bold and impactful
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
});

// Technical but readable body font
const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

// Monospace for calculator numbers and data
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'TikTok Creator Calculator - Earnings, Engagement & Analytics Tools',
    template: '%s | TikTok Creator Calculator',
  },
  description:
    'Free TikTok calculators for creators: estimate Creator Fund earnings, engagement rates, brand deal rates, LIVE gifts, and more. Data-driven tools with transparent methodology.',
  keywords: [
    'tiktok calculator',
    'tiktok money calculator',
    'tiktok engagement rate calculator',
    'tiktok creator fund calculator',
    'tiktok earnings calculator',
    'tiktok brand deal calculator',
  ],
  authors: [{ name: 'TikTok Creator Calculator' }],
  creator: 'TikTok Creator Calculator',
  publisher: 'TikTok Creator Calculator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/calculate-creator-transparent-v2.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'TikTok Creator Calculator - Earnings & Analytics Tools',
    description:
      'Free TikTok calculators for creators: estimate earnings, engagement rates, brand deal rates, and more.',
    siteName: 'TikTok Creator Calculator',
    url: 'https://calculatecreator.com',
    images: [
      {
        url: 'https://calculatecreator.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Creator Calculator - Free Earnings & Analytics Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Creator Calculator',
    description:
      'Free TikTok calculators for creators: estimate earnings, engagement rates, and more.',
    images: ['https://calculatecreator.com/images/og-image.png'],
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
    <html lang="en" className={`${bricolage.variable} ${ibmPlex.variable} ${jetbrains.variable}`}>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="w-C9CwLR5pFTw0kjkeKFKIJ-qM3RQGok1qm3Zt8pSwA" />

        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X90GQYNEHW" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X90GQYNEHW');
          `}
        </Script>
      </head>
      <body className="font-sans">

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
        <div className="flex min-h-screen flex-col relative z-10">
          <Header />
          <ErrorBoundary>
            <main className="flex-1 relative">{children}</main>
          </ErrorBoundary>
          <Footer />
          <WebVitals />
        </div>
      </body>
    </html>
  );
}
