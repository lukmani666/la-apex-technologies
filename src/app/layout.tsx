import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/layouts/Header";
import Providers from "./providers";
import Footer from "./components/layouts/footer";
import TopLoader from "./components/layouts/toplayout";

export const metadata: Metadata = {
  title: "L.A. Apex Technologies - Innovative Tech Solutions",
  description: "Empowering businesses through software development, data intelligence, and automation. Professional tech consulting and digital transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopLoader />
        <Header />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

