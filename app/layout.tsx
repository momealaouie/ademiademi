import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./responsive.css";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ademi AB | Paketering, montering & etikettering",
    template: "%s | Ademi AB",
  },
  description: siteConfig.description,
  keywords: [
    "paketering Helsingborg",
    "montering företag",
    "etikettering",
    "ompackning",
    "manuella arbetsmoment",
    "Ademi AB",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: siteConfig.name,
    title: "Paketerat. Monterat. Klart.",
    description: siteConfig.description,
    images: [
      {
        url: "/images/production.webp",
        width: 1280,
        height: 719,
        alt: "Paketerade produkter hos Ademi AB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paketerat. Monterat. Klart.",
    description: siteConfig.description,
    images: ["/images/production.webp"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sv">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
