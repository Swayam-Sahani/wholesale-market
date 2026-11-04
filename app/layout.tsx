import type { Metadata } from "next";
import SiteAnalytics from "./components/site-analytics";
import "./globals.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

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
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}

