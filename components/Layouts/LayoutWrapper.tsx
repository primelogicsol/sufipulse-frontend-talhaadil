// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import VocalistLayout from "./VocalistLayout";
import WriterDashboardLayout from "./WriterDashboard";
import AdminLayout from "./AdminLayout";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/vocalist")) {
    return <VocalistLayout>{children}</VocalistLayout>;
  }
  if (pathname?.startsWith("/writer")) {
    return <WriterDashboardLayout>{children}</WriterDashboardLayout>;
  }
  if (pathname?.startsWith("/admin")) {
    return <AdminLayout>{children}</AdminLayout>
  }
  if (pathname?.startsWith("/aLogin")) {
    return (<>
    {children}</>
      )
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
