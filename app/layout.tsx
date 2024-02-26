"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/nav-bar";
import Logo from "./ui/logo";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== "/" && (
          <header className="w-full grid justify-center p-4 mb-8">
            <Logo fontSize="48px" />
          </header>
        )}
        <div>{children}</div>
        <footer className="fixed bottom-0 w-full">
          <NavBar />
        </footer>
      </body>
    </html>
  );
}
