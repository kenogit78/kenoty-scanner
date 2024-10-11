"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const segments = useSelectedLayoutSegments();
  const isAdminRoute = segments.some((segment) =>
    segment.startsWith("(dashboard)")
  );

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
