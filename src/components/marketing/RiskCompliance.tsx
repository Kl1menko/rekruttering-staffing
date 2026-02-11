import { Check, ClipboardList, FileText, IdCard, ShieldCheck, Stethoscope } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const verificationItems = [
  {
    title: "Identity verification",
    detail: "ID/passport checks and legal employment eligibility review.",
    icon: IdCard,
  },
  {
    title: "Permits and work rights",
    detail: "Residence/work permits and role-specific legal permissions.",
    icon: ShieldCheck,
  },
  {
    title: "Medical readiness",
    detail: "Pre-employment medical checks where required by role or law.",
    icon: Stethoscope,
  },
  {
    title: "Safety onboarding",
    detail: "OHS induction, site briefings, and documented instruction logs.",
    icon: ClipboardList,
  },
];

const clientDocuments = [
  "Candidate document registry",
  "Permit and expiry status overview",
  "Medical fitness confirmations",
  "Safety instruction acknowledgements",
  "Shift onboarding records",
  "Weekly compliance status report",
];

const auditRows = [
  { item: "Identity and work rights", status: "Complete" },
  { item: "Permit validity tracker", status: "Complete" },
  { item: "Medical checks evidence", status: "Complete" },
  { item: "OHS / instruction logs", status: "Complete" },
  { item: "Client-ready export package", status: "Complete" },
];

export function RiskCompliance() {
  return (
    <Section id="risk-compliance" className="border-t border-border/60 bg-card/20">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground sm:text-sm">
            Risk / Compliance
          </p>
          <h2 className="mt-3 text-[2rem] leading-[0.96] sm:text-[2.45rem] md:text-[2.9rem]">
            Compliance is not optional. It is built into every staffing stage.
          </h2>
          <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-foreground/64 sm:text-base">
            We provide documented controls before launch and maintain audit-ready evidence
            throughout operations.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[1.5rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-5 sm:p-6">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              What we verify
            </p>
            <div className="mt-4 grid gap-3">
              {verificationItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-black/8 bg-white/55 p-3.5">
                  <div className="flex items-center gap-2.5">
                    <item.icon className="size-4.5 text-[#6cb545]" />
                    <p className="text-sm font-semibold text-foreground sm:text-base">{item.title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/62">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-5 sm:p-6">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              Documents we provide to clients
            </p>
            <ul className="mt-4 space-y-2.5">
              {clientDocuments.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/68">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#6cb545]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-4 rounded-[1.5rem] border border-[#91cb6f]/35 bg-[color:color-mix(in_srgb,#76df42_12%,var(--off-white)_88%)] p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <FileText className="size-5 text-[#5da23a]" />
            <p className="text-[1.02rem] font-semibold text-foreground sm:text-[1.12rem]">
              Audit-ready package
            </p>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-black/10 bg-white/60">
            <div className="grid grid-cols-[1fr_auto] border-b border-black/10 bg-white/65 px-4 py-2.5 text-xs uppercase tracking-[0.08em] text-foreground/56">
              <span>Control item</span>
              <span>Status</span>
            </div>
            {auditRows.map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-[1fr_auto] items-center border-b border-black/8 px-4 py-3 text-sm last:border-b-0"
              >
                <span className="text-foreground/72">{row.item}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e5f6d8] px-2.5 py-1 text-xs font-medium text-[#2f6a1a]">
                  <Check className="size-3.5" />
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </article>
      </Container>
    </Section>
  );
}

