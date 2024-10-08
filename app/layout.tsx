import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Kenoty Scanner",
  description: "A Digital Product Studio that will Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} antialiased bg-white dark:bg-secondary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
