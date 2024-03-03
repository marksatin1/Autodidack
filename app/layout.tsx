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

  let gridRows = pathname === "/" ? "grid-rows-layout-3" : "grid-rows-layout-3";

  return (
    // <html lang="en">
    //   <body className={`${inter.className} h-screen`}>
    //     {/* {pathname === "/" && (
    //       <header className="w-full sticky top-0 grid justify-center items-center p-4">
    //         <Logo fontSize="1.5rem" />
    //       </header>
    //     )} */}
    //     <div className="h-full">{children}</div>
    //     <footer className="w-full sticky bottom-0 appear-large">
    //       <NavBar />
    //     </footer>
    //   </body>
    // </html>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* {pathname !== "/entrance" && (
          <header className="w-full sticky top-0 grid justify-center items-center p-4">
            <Logo fontSize="1.5rem" />
          </header>
        )} */}
        <div>{children}</div>
        {/* {pathname !== "/entrance" && (
          <footer className="w-full sticky bottom-0 rounded-lg ">
            <NavBar />
          </footer>
        )} */}
      </body>
    </html>
  );
}
