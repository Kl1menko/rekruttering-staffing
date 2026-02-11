import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/25 py-10">
      <Container className="grid gap-8 text-sm text-muted-foreground md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-medium text-foreground">Prime Work</p>
          <p className="text-measure">
            B2B recruitment partner for logistics, manufacturing and shift-based
            operations.
          </p>
          <p>© {new Date().getFullYear()} Prime Work.</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-foreground">Contact</p>
          <p>partnerships@primework.example</p>
          <p>+48 22 100 20 30</p>
          <p>Warsaw, Poland</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-foreground">Links</p>
          <div className="grid gap-2">
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
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
