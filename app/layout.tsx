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

  let gridRows = pathname === "/" ? "grid-rows-layout-2" : "grid-rows-layout-3";

  return (
    <html lang="en">
      <body className={`${inter.className} grid ${gridRows} min-h-screen`}>
        {pathname !== "/" && pathname !== "/entrance" && (
          <header className="bgg w-full grid justify-center items-center p-4">
            <Logo fontSize="1.5rem" />
          </header>
        )}
        <div className="bgy">{children}</div>
        {pathname !== "/entrance" && (
          <footer className="bgb w-full">
            <NavBar />
          </footer>
        )}
      </body>
    </html>
  );
}
