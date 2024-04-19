import "./globals.css";
import Footer from "./ui/layout/footer";
import Header from "./ui/layout/header";
import { Lora, Merriweather } from "next/font/google";

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
  return (
    <html lang="en" className={merri.className}>
      <body className="overflow-hidden w-screen h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="w-full max-h-[1150px] overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
