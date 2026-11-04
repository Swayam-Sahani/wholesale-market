import type { Metadata } from "next";
import Script from "next/script";
import SiteAnalytics from "./components/site-analytics";
import "./globals.css";

const googleSiteVerification = "_rIyVAJL_OVIz5TxV3UYIeftYa-neUAsfKeb0wv7orI";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "Tantu Wholesale Studio | Wholesale Indian Clothing",
    template: "%s | Tantu Wholesale Studio",
  },
  description:
    "A wholesale-first catalog concept for clothing retailers sourcing Indian ethnic wear. Explore categories, compare pack details, and enquire about wholesale access.",
  openGraph: {
    title: "Tantu Wholesale Studio | Source Indian Fashion",
    description:
      "A retailer-first wholesale clothing storefront concept, built for clearer catalog discovery and sourcing enquiries.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: false, follow: false },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="google-tag-manager-loader"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K7NHH8P6"
          strategy="beforeInteractive"
        />
        <Script id="google-tag-manager-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());`}
        </Script>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}

