"use client";

import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import { Lora, Merriweather } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";

const lora = Lora({
  subsets: ["latin"],
  weight: "400",
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const showHeaderFooter = pathname !== "/entrance";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <html lang="en" className={merri.className}>
        <body className="overflow-hidden w-screen h-[100svh] flex flex-col">
          {showHeaderFooter && <Header />}
          <main className="w-full h-full overflow-hidden">{children}</main>
          {showHeaderFooter && <Footer animationDuration={2000} />}
        </body>
      </html>
    </>
  );
}
