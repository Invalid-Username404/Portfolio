import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { Caveat } from "next/font/google";

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
export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <body className="flex flex-col min-h-screen antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
