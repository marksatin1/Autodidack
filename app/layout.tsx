"use client";

import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import { Lora, Merriweather } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

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
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showHeaderFooter = pathname !== "/entrance";

  return (
    <html lang="en" className={merri.className}>
      <body className="overflow-hidden w-screen h-screen flex flex-col">
        {showHeaderFooter && <Header />}
        <main className="w-full h-full overflow-hidden">{children}</main>
        {showHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
