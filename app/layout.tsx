import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { getSiteUrl } from "./lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SEO Training Demo",
    template: "%s | SEO Training Demo",
  },

  description:
    "Learn how to build, publish and optimize websites for search engines.",

  keywords: [
    "SEO training",
    "website development",
    "technical SEO",
    "Next.js SEO",
    "search engine optimization",
  ],

  authors: [
    {
      name: "SEO Training Team",
    },
  ],

  creator: "SEO Training Team",
  publisher: "SEO Training Demo",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SEO Training Demo",
    description:
      "Learn website development, deployment and search-engine optimization through a practical project.",
    url: "/",
    siteName: "SEO Training Demo",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Training Demo",
    description:
      "Learn website development, deployment and search-engine optimization through a practical project.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SEO Training Demo",
  description:
    "A practical website for learning website development, publishing and search-engine optimization.",
  url: siteUrl,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "SEO Training Team",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteStructuredData} />

        <Navbar />

        <div className="min-h-screen">{children}</div>

        <Footer />
      </body>
    </html>
  );
}