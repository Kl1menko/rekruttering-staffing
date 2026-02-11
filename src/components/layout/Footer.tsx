import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_88%,var(--sand)_12%)]">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 text-sm text-muted-foreground md:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.svg"
                alt="Prime Work"
                width={188}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-[36ch] text-sm leading-relaxed">
              Primework is a B2B recruitment and staffing partner for logistics, manufacturing,
              retail, and other shift-based operations.
            </p>
            <p className="text-xs uppercase tracking-[0.08em] text-foreground/55">
              Response SLA: first reply within 2 business hours
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/60">
              Contact
            </p>
            <a
              href="mailto:partnerships@primework.example"
              className="block text-foreground/80 transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
            >
              partnerships@primework.example
            </a>
            <a
              href="tel:+48221002030"
              className="block text-foreground/80 transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
            >
              +48 22 100 20 30
            </a>
            <p className="text-foreground/80">Warsaw, Poland</p>
            <Link href="/contact" className="inline-flex text-foreground underline underline-offset-4">
              Request a proposal
            </Link>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/60">
              Navigation
            </p>
            <div className="grid gap-2">
              <Link href="/why-primework" className="hover:text-foreground">
                Why Primework?
              </Link>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <Link href="/industries" className="hover:text-foreground">
                Industries
              </Link>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-black/10 pt-4 text-xs text-foreground/60 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Primework. All rights reserved.</p>
          <div className="mt-2 flex items-center gap-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
