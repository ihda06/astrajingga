import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import Sidebar from "@/components/layouts/sidebar";
import Footer from "@/components/layouts/footer";

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
      <body className={nunito.className}>
        <section className="flex bg-white divide-x w-screen">
          <Sidebar />
          <main className="relative lg:w-10/12 w-full flex flex-col justify-between lg:px-24 px-4">
            {children}
            <Footer />
          </main>
        </section>
      </body>
    </html>
  );
}
