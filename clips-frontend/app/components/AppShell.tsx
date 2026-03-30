"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import TopNav from "@/component/TopNav";
import Footer from "@/component/Footer";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  if (isDashboardRoute) {
    return <main>{children}</main>;
  }

  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}