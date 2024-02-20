import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen overflow-hidden`}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
