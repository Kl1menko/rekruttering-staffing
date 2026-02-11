"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const servicesSection = document.getElementById("services");
    if (!servicesSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.08 }
    );

    observer.observe(servicesSection);
    return () => observer.disconnect();
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      type="button"
      size="icon"
      aria-label="Scroll to top"
      onClick={handleScrollTop}
      className={[
        "fixed bottom-5 right-4 z-40 h-11 w-11 rounded-full border border-black/15",
        "bg-[color:color-mix(in_srgb,var(--off-white)_80%,white_20%)] text-foreground",
        "backdrop-blur-md shadow-[0_16px_24px_-18px_rgba(0,0,0,0.5)]",
        "transition-all duration-200 hover:scale-[1.02] hover:bg-[color:color-mix(in_srgb,var(--off-white)_62%,white_38%)]",
        "sm:bottom-6 sm:right-6 sm:h-12 sm:w-12",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ChevronUp className="size-5" />
    </Button>
  );
}

