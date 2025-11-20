import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import Sidebar from "@/components/layouts/sidebar/sidebar";
import Footer from "@/components/layouts/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Frontend Engineer with 3+ years of experience specializing in React, Next.js, and modern web technologies. Building high-performance web interfaces with AI integration.",
  type: "website",
});
dayjs.extend(CustomParseFormat);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
        {/* Google Tag Manager */}
      </head>
      <GoogleTagManager gtmId="GTM-P2VBWHL3" />
      <GoogleAnalytics gaId="G-EQ339C2DTK" />
      <body className={nunito.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Skip to main content
        </a>
        <section className="flex bg-white divide-x w-screen min-h-screen ">
          <Sidebar />
          <main
            id="main-content"
            className="relative lg:w-10/12 w-full flex flex-col justify-between  bg-[url('/bg-pattern.png')] bg-repeat"
          >
            {children}
            <Footer />
          </main>
        </section>
      </body>
    </html>
  );
}
