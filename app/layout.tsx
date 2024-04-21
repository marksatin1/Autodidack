import "./globals.css";
import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import { Lora, Merriweather } from "next/font/google";
import Head from "next/head";
import { flags } from "./lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Autodidack",
  },
  description: "Welcome to Autodidack, the photography and webdev portfolio of Mark Satin.",
  metadataBase: new URL("https://autodidack.com"),
};

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
      <Head>
        <link href={flags[0].path} as="image" />
      </Head>
      <body className="overflow-hidden w-screen h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="w-full max-h-[1150px] overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
