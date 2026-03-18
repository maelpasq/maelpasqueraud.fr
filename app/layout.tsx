import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

import { SiteChrome } from "@/components/site-chrome";
import { portfolioContent } from "@/content/portfolio";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioContent.identity.siteUrl),
  title: {
    default: `${portfolioContent.identity.name} | ${portfolioContent.identity.role}`,
    template: `%s | ${portfolioContent.identity.name}`,
  },
  description: portfolioContent.hero.description,
  applicationName: portfolioContent.seo.applicationName,
  authors: [{ name: portfolioContent.identity.name }],
  creator: portfolioContent.identity.name,
  category: portfolioContent.seo.category,
  keywords: portfolioContent.seo.keywords,
  openGraph: {
    title: `${portfolioContent.identity.name} | ${portfolioContent.identity.role}`,
    description: portfolioContent.hero.description,
    siteName: portfolioContent.identity.name,
    locale: "fr_FR",
    type: "website",
    url: portfolioContent.identity.siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: portfolioContent.seo.openGraphAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioContent.identity.name} | ${portfolioContent.identity.role}`,
    description: portfolioContent.hero.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
