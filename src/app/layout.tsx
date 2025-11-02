import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import Sidebar from "@/components/layouts/sidebar/sidebar";
import Footer from "@/components/layouts/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ihda Anwari",
  description: "Made with love by Ihda Anwari",
};
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
        <section className="flex bg-white divide-x w-screen min-h-screen ">
          <Sidebar />
          <main className="relative lg:w-10/12 w-full flex flex-col justify-between  bg-[url('/bg-pattern.png')] bg-repeat">
            {children}
            <Footer />
          </main>
        </section>
      </body>
    </html>
  );
}
