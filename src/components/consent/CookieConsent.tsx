'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const CONSENT_KEY = 'cc_cookie_consent_v1';

type ConsentState = 'accepted' | 'rejected' | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || consent === null) return;
    window.localStorage.setItem(CONSENT_KEY, consent);
  }, [consent, ready]);

  const analyticsStorage = consent === 'accepted' ? 'granted' : 'denied';
  const adStorage = consent === 'accepted' ? 'granted' : 'denied';
  const adPersonalization = consent === 'accepted' ? 'granted' : 'denied';
  const shouldLoadScripts = consent !== null;

  return (
    <>
      {ready && consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-neutral-200 bg-white p-4 shadow-lg">
          <div className="container-custom">
            <p className="text-sm font-medium text-neutral-900">Cookie and ad consent</p>
            <p className="mt-2 max-w-3xl text-xs leading-relaxed text-neutral-600">
              CalculateCreator uses cookies and similar technologies for analytics and Google
              AdSense advertising. You can accept personalized ads or continue with
              non-personalized ads. Learn more in our privacy and advertising disclosure pages.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setConsent('accepted')}
              >
                Accept all
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setConsent('rejected')}
              >
                Reject personalized ads
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {ready && consent !== null ? (
        <button
          type="button"
          className="fixed bottom-4 left-4 z-[60] rounded-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm hover:bg-neutral-50"
          onClick={() => setConsent(null)}
        >
          Cookie settings
        </button>
      ) : null}

      {shouldLoadScripts ? (
        <>
          <Script id="cc-consent-mode" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('consent', 'default', {
                ad_storage: '${adStorage}',
                ad_user_data: '${adStorage}',
                ad_personalization: '${adPersonalization}',
                analytics_storage: '${analyticsStorage}'
              });
            `}
          </Script>

          <Script
            id="cc-ga-script"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-X90GQYNEHW"
            strategy="afterInteractive"
          />

          <Script id="cc-ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', 'G-X90GQYNEHW', {
                anonymize_ip: true,
                allow_ad_personalization_signals: ${consent === 'accepted' ? 'true' : 'false'}
              });
            `}
          </Script>

          <Script id="cc-adsense-mode" strategy="afterInteractive">
            {`
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.requestNonPersonalizedAds = ${consent === 'accepted' ? 0 : 1};
            `}
          </Script>

          <Script
            id="cc-adsense-script"
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6191764023643150"
            crossOrigin="anonymous"
          />
        </>
      ) : null}
    </>
  );
}
