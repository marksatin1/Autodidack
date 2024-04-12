import "./globals.css";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { Kreon } from "next/font/google";

const kreon = Kreon({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kreon.className}>
      <body className="h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
