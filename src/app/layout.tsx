import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/sidebar";
import Footer from "@/components/layouts/footer";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
dayjs.extend(CustomParseFormat);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
