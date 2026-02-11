"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/Container";

const LANGUAGES = [
  { code: "en", label: "English", flag: "/flags/gb.svg" },
  { code: "pl", label: "Polish", flag: "/flags/pl.svg" },
  { code: "uk", label: "Ukrainian", flag: "/flags/ua.svg" },
  { code: "ru", label: "Russian", flag: "/flags/ru.svg" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<(typeof LANGUAGES)[number]["code"]>(
    "en"
  );
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const activeLanguage =
    LANGUAGES.find((language) => language.code === selectedLang) ?? LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 py-4">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isScrolled
              ? "w-0 -translate-x-2 opacity-0"
              : "w-[186px] translate-x-0 opacity-100"
          }`}
        >
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Prime Work"
              width={186}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-end md:flex">
          <div className="flex h-14 w-full max-w-[1220px] items-center justify-between rounded-full border border-white/15 bg-[color:color-mix(in_srgb,var(--off-black)_52%,var(--sand)_48%)] px-6 shadow-[0_10px_26px_-16px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md">
            <div className="flex items-center gap-8 text-[1.06rem] font-medium leading-none text-[color:color-mix(in_srgb,var(--off-white)_74%,transparent)]">
              <Link
                href="/about"
                className="whitespace-nowrap transition-colors hover:text-[var(--off-white)]"
              >
                About
              </Link>
              <Link
                href="/why-primework"
                className="rounded-full border border-white/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.08))] px-3 py-1 whitespace-nowrap text-[var(--off-white)] shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_6px_18px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md transition-colors hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.12))]"
              >
                Why Primework?
              </Link>
              <Link
                href="/industries"
                className="whitespace-nowrap transition-colors hover:text-[var(--off-white)]"
              >
                Industries
              </Link>
              <Link
                href="/blog"
                className="whitespace-nowrap transition-colors hover:text-[var(--off-white)]"
              >
                Our Activity
              </Link>
              <Link
                href="/#faq"
                className="whitespace-nowrap transition-colors hover:text-[var(--off-white)]"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="whitespace-nowrap transition-colors hover:text-[var(--off-white)]"
              >
                Contact
              </Link>
            </div>

            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen((value) => !value)}
                className="font-sans inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 text-sm text-[var(--off-white)] transition-colors hover:bg-black/35"
                aria-label="Language"
                aria-expanded={isLangOpen}
              >
                <Image
                  src={activeLanguage.flag}
                  alt={activeLanguage.label}
                  width={18}
                  height={14}
                  className="h-[14px] w-[18px] rounded-[2px] object-cover"
                />
                <span className="min-w-[22px] text-left uppercase">{activeLanguage.code}</span>
                <ChevronDown
                  className={`size-4 opacity-75 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen ? (
                <div className="font-sans absolute right-0 top-full z-50 mt-2 w-48 rounded-2xl border border-white/14 bg-[color:color-mix(in_srgb,var(--off-black)_76%,var(--sand)_24%)] p-1.5 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.55)] backdrop-blur-md">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(language.code);
                        setIsLangOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                        selectedLang === language.code
                          ? "bg-white/12 text-[var(--off-white)]"
                          : "text-[color:color-mix(in_srgb,var(--off-white)_82%,transparent)] hover:bg-white/8"
                      }`}
                    >
                      <Image
                        src={language.flag}
                        alt={language.label}
                        width={18}
                        height={14}
                        className="h-[14px] w-[18px] rounded-[2px] object-cover"
                      />
                      <span>{language.label}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-[color:color-mix(in_srgb,var(--off-black)_52%,var(--sand)_48%)] text-[var(--off-white)] shadow-[0_10px_26px_-16px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-colors hover:bg-[color:color-mix(in_srgb,var(--off-black)_60%,var(--sand)_40%)]"
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--off-black)_42%,transparent)] backdrop-blur-[3px]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute left-3 right-3 top-24 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-[2rem] border border-white/12 bg-[color:color-mix(in_srgb,var(--off-black)_62%,var(--sand)_38%)] p-5 shadow-[0_22px_50px_-20px_rgba(0,0,0,0.62)]">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-white/12 bg-black/20 text-[var(--off-white)] transition-colors hover:bg-black/30"
            >
              <X className="size-4" />
            </button>

            <nav className="grid gap-1.5 pt-14">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[1.6rem] leading-[1.05] text-[var(--off-white)]/92 transition-colors hover:bg-white/8 hover:text-[var(--off-white)]"
              >
                About
              </Link>
              <Link
                href="/why-primework"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl border border-white/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08))] px-3 py-2.5 text-[1.6rem] leading-[1.05] text-[var(--off-white)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md transition-colors hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.12))]"
              >
                Why Primework?
              </Link>
              <Link
                href="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[1.6rem] leading-[1.05] text-[var(--off-white)]/92 transition-colors hover:bg-white/8 hover:text-[var(--off-white)]"
              >
                Industries
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[1.6rem] leading-[1.05] text-[var(--off-white)]/92 transition-colors hover:bg-white/8 hover:text-[var(--off-white)]"
              >
                Our Activity
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[1.6rem] leading-[1.05] text-[var(--off-white)]/92 transition-colors hover:bg-white/8 hover:text-[var(--off-white)]"
              >
                FAQ
              </Link>
            </nav>

            <div className="mt-4 h-px w-full bg-white/12" />

            <div className="mt-4">
              <p className="px-2 text-xs uppercase tracking-[0.12em] text-[var(--off-white)]/58">
                Language
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => setSelectedLang(language.code)}
                    className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors ${
                      selectedLang === language.code
                        ? "border-white/24 bg-white/14 text-[var(--off-white)]"
                        : "border-white/10 bg-black/16 text-[var(--off-white)]/82 hover:bg-white/8"
                    }`}
                  >
                    <Image
                      src={language.flag}
                      alt={language.label}
                      width={18}
                      height={14}
                      className="h-[14px] w-[18px] rounded-[2px] object-cover"
                    />
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--highlight)] px-5 py-3 text-lg font-medium text-[var(--off-black)] transition-colors hover:bg-[var(--highlight-0)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
