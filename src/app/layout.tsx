import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { Caveat } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Mohamed Ibrahim - Web Developer Portfolio",
  description:
    "Experienced web developer specializing in JavaScript, React, and Node.js. View my projects and skills.",
  icons: {
    icon: "/portfolio.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <head>
        {/* Google Analytics Script loaded after the page is interactive */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MTE962SSF8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MTE962SSF8');
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
