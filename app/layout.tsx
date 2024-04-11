import "./globals.css";
import Logo from "./ui/logo";
import Footer from "./ui/footer";
import Header from "./ui/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen grid grid-rows-layout">
        <Header title="Autodidack" />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
