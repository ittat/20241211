import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free PDF Page Rotator - Rotate Individual or All Pages",
  description:
    "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
  referrer: "origin-when-cross-origin",
  keywords: ["PDF", "Rotate PDF", "PDF Tool", "Online PDF", "PDF Rotator"],
  authors: [{ name: "hardy" }, { name: "pdfai" }],
  creator: "pdfai, hardy",
  metadataBase: new URL(process.env.URL_BASE ?? "http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: "Free PDF Page Rotator - Rotate Individual or All Pages",
    description:
      "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
    url: process.env.URL_BASE,
    siteName: "PDF Rotator",
    type: "website",
    images: [
      {
        type: "image/jpeg",
        url: "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/4738d269-b536-45f2-57e1-fe07fef90d00/public",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "PDFdotai - Free PDF Page Rotator",
    description:
      "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
    images: [
      "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/4738d269-b536-45f2-57e1-fe07fef90d00/public",
    ],
  },
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free PDF Page Rotator - Rotate Individual or All Pages",
              "description": "Rotate individual or all pages in your PDF effortlessly. No downloads or sign-ups. Fast, secure, and user-friendly. Try now!",
              "url": "${process.env.URL_BASE}",
              "image": "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/4738d269-b536-45f2-57e1-fe07fef90d00/public",
              "author": {
                "@type": "Person",
                "name": "PDFdotai"
              }
            }
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
