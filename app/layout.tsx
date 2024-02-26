import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        <footer>
          <NavBar />
        </footer>
      </body>
    </html>
  );
}
