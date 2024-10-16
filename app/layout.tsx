import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./styles/globals.css";
import ClientLayout from "./components/RootLayoutClient";
import { ThemeProvider } from "next-themes";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Kenoty Scanner",
  description: "A Digital Product Studio that will Work",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} antialiased bg-white dark:bg-secondary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
