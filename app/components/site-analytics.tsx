"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.match(
  /^G-[A-Z0-9]+$/,
)?.[0];
export default function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      {measurementId ? (
        <>
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments);}; window.gtag('js', new Date()); window.gtag('config', '${measurementId}', { send_page_view: false });`}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}
    </>
  );
}
