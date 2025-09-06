// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import VocalistLayout from "./VocalistLayout";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/vocalist")) {
    return <VocalistLayout>{children}</VocalistLayout>;
  }

  const showNavbarFooter = !pathname?.includes("dashboard");

  return (
    <>
      {showNavbarFooter && <Navbar />}
      {children}
      {showNavbarFooter && <Footer />}
    </>
  );
}
