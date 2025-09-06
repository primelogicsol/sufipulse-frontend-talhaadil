// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import VocalistLayout from "./VocalistLayout";
import WriterDashboardLayout from "./WriterDashboard";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/vocalist")) {
    return <VocalistLayout>{children}</VocalistLayout>;
  }
  if (pathname?.startsWith("/writer")) {
    return <WriterDashboardLayout>{children}</WriterDashboardLayout>;
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
