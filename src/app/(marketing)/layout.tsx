import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { Toaster } from "@/components/ui/sonner";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <ScrollToTopButton />
      <Toaster position="bottom-right" richColors />
      <Footer />
    </div>
  );
}
