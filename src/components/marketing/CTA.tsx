"use client";

import { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js/min";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormValues = {
  contactName: string;
  company: string;
  industry: string;
  serviceModel: string;
  headcount: string;
  startUrgency: string;
  contactEmail: string;
  contactPhone: string;
  request: string;
  privacyAccepted: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type StringFormField = Exclude<keyof FormValues, "privacyAccepted">;

const INDUSTRY_OPTIONS = [
  "Logistics and Warehousing",
  "Manufacturing",
  "Food Processing",
  "Retail and Distribution",
  "Hospitality",
  "Construction Support",
];
const SERVICE_MODEL_OPTIONS = [
  { value: "temporary", label: "Temporary staffing" },
  { value: "permanent", label: "Permanent recruitment" },
  { value: "payroll", label: "Payroll and compliance" },
];
const START_URGENCY_OPTIONS = [
  { value: "asap", label: "ASAP (0-3 days)" },
  { value: "week", label: "Within 7 days" },
  { value: "two-weeks", label: "Within 14 days" },
  { value: "month", label: "Within 30 days" },
  { value: "flexible", label: "Flexible timeline" },
];

export function CTA() {
  const [values, setValues] = useState<FormValues>({
    contactName: "",
    company: "",
    industry: "",
    serviceModel: "",
    headcount: "",
    startUrgency: "",
    contactEmail: "",
    contactPhone: "",
    request: "",
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const validateField = (name: StringFormField, value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      if (name === "company" || name === "request") return "";
      return "This field is required.";
    }

    if (name === "contactName") {
      if (trimmed.length < 2) return "Enter at least 2 characters.";
      if (!/^[a-zA-Z\s'`-]+$/.test(trimmed)) return "Use letters only.";
    }

    if (name === "headcount") {
      const count = Number.parseInt(trimmed, 10);
      if (Number.isNaN(count) || count <= 0) return "Enter a valid headcount.";
      if (count > 10000) return "Headcount is too large.";
    }

    if (name === "contactEmail") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Enter a valid email.";
    }

    if (name === "contactPhone") {
      if (!trimmed.startsWith("+")) {
        return "Use international format, e.g. +48 501 234 567.";
      }
      const digits = trimmed.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15) {
        return "Enter a valid phone number.";
      }
      if (!isValidPhoneNumber(trimmed)) {
        return "Enter a valid phone number.";
      }
    }

    return "";
  };

  const onChange =
    (field: StringFormField) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = event.target.value;
      setValues((prev) => ({ ...prev, [field]: next }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  const onSelectChange = (field: StringFormField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const onBlur = (field: StringFormField) => () => {
    const message = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {
      contactName: validateField("contactName", values.contactName),
      company: validateField("company", values.company),
      industry: validateField("industry", values.industry),
      serviceModel: validateField("serviceModel", values.serviceModel),
      headcount: validateField("headcount", values.headcount),
      startUrgency: validateField("startUrgency", values.startUrgency),
      contactEmail: validateField("contactEmail", values.contactEmail),
      contactPhone: validateField("contactPhone", values.contactPhone),
      request: validateField("request", values.request),
      privacyAccepted: values.privacyAccepted ? "" : "Please accept the privacy notice.",
    };

    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      return;
    }

    setIsSuccessOpen(true);
    toast.success("Request submitted successfully", {
      description: "Thank you. Our managers will contact you shortly.",
    });
  };

  return (
    <Section id="contact" className="border-t border-border/60">
      <Container>
        <FadeIn>
          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_88%,var(--sand)_12%)] p-6 md:grid-cols-[1.25fr_0.75fr] md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground sm:text-sm">
                Request
              </p>
              <h2 className="mt-3 text-[2.55rem] leading-[0.95] sm:text-[3.4rem] lg:text-[5rem]">
                Get a commercial proposal for your hiring needs.
              </h2>
              <p className="text-measure mt-4 text-[1rem] leading-[1.35] text-muted-foreground sm:text-[1.06rem]">
                Share your workforce request and we will provide cooperation model,
                launch timeline, and budget guidance.
              </p>

              <form className="mt-8 grid gap-4" noValidate onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">
                    Name <span className="text-[#b50000]">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="contactName"
                    placeholder="Your name"
                    value={values.contactName}
                    onChange={onChange("contactName")}
                    onBlur={onBlur("contactName")}
                    aria-invalid={Boolean(errors.contactName)}
                    required
                    aria-required="true"
                    className="h-11 rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]"
                  />
                  {errors.contactName ? (
                    <p className="text-xs text-[#920000]">{errors.contactName}</p>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company name"
                    value={values.company}
                    onChange={onChange("company")}
                    onBlur={onBlur("company")}
                    aria-invalid={Boolean(errors.company)}
                    className="h-11 rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]"
                  />
                  {errors.company ? <p className="text-xs text-[#920000]">{errors.company}</p> : null}
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="industry">
                      Industry <span className="text-[#b50000]">*</span>
                    </Label>
                    <Select value={values.industry} onValueChange={(value) => onSelectChange("industry", value)}>
                      <SelectTrigger
                        id="industry"
                        className={cn(
                          "h-11 w-full rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]",
                          errors.industry ? "border-[#b50000] ring-[3px] ring-[#b50000]/20" : ""
                        )}
                      >
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[18rem] rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_85%,white_15%)]">
                        {INDUSTRY_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.industry ? <p className="text-xs text-[#920000]">{errors.industry}</p> : null}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service-model">
                      Service model <span className="text-[#b50000]">*</span>
                    </Label>
                    <Select
                      value={values.serviceModel}
                      onValueChange={(value) => onSelectChange("serviceModel", value)}
                    >
                      <SelectTrigger
                        id="service-model"
                        className={cn(
                          "h-11 w-full rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]",
                          errors.serviceModel ? "border-[#b50000] ring-[3px] ring-[#b50000]/20" : ""
                        )}
                      >
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_85%,white_15%)]">
                        {SERVICE_MODEL_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceModel ? (
                      <p className="text-xs text-[#920000]">{errors.serviceModel}</p>
                    ) : null}
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="headcount">
                      Headcount <span className="text-[#b50000]">*</span>
                    </Label>
                    <Input
                      id="headcount"
                      name="headcount"
                      type="number"
                      min={1}
                      step={1}
                      inputMode="numeric"
                      placeholder="e.g. 25"
                      value={values.headcount}
                      onChange={onChange("headcount")}
                      onBlur={onBlur("headcount")}
                      aria-invalid={Boolean(errors.headcount)}
                      required
                      aria-required="true"
                      className="h-11 rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]"
                    />
                    {errors.headcount ? <p className="text-xs text-[#920000]">{errors.headcount}</p> : null}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="start-urgency">
                      Start date / urgency <span className="text-[#b50000]">*</span>
                    </Label>
                    <Select
                      value={values.startUrgency}
                      onValueChange={(value) => onSelectChange("startUrgency", value)}
                    >
                      <SelectTrigger
                        id="start-urgency"
                        className={cn(
                          "h-11 w-full rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]",
                          errors.startUrgency ? "border-[#b50000] ring-[3px] ring-[#b50000]/20" : ""
                        )}
                      >
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_85%,white_15%)]">
                        {START_URGENCY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.startUrgency ? (
                      <p className="text-xs text-[#920000]">{errors.startUrgency}</p>
                    ) : null}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-phone">
                    Phone <span className="text-[#b50000]">*</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    name="contactPhone"
                    type="tel"
                    inputMode="tel"
                    placeholder="+48 501 234 567"
                    value={values.contactPhone}
                    onChange={onChange("contactPhone")}
                    onBlur={onBlur("contactPhone")}
                    aria-invalid={Boolean(errors.contactPhone)}
                    required
                    aria-required="true"
                    className="h-11 rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]"
                  />
                  <p className="text-xs text-foreground/58">
                    Enter full phone number with country code, e.g. +48 501 234 567
                  </p>
                  {errors.contactPhone ? (
                    <p className="text-xs text-[#920000]">{errors.contactPhone}</p>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">
                    Email <span className="text-[#b50000]">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="contactEmail"
                    type="email"
                    placeholder="name@company.com"
                    value={values.contactEmail}
                    onChange={onChange("contactEmail")}
                    onBlur={onBlur("contactEmail")}
                    aria-invalid={Boolean(errors.contactEmail)}
                    required
                    aria-required="true"
                    className="h-11 rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]"
                  />
                  {errors.contactEmail ? (
                    <p className="text-xs text-[#920000]">{errors.contactEmail}</p>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="request">Need description</Label>
                  <Textarea
                    id="request"
                    name="request"
                    placeholder="Headcount, roles, locations, start date..."
                    rows={5}
                    value={values.request}
                    onChange={onChange("request")}
                    onBlur={onBlur("request")}
                    aria-invalid={Boolean(errors.request)}
                    className="rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)]"
                  />
                  {errors.request ? <p className="text-xs text-[#920000]">{errors.request}</p> : null}
                </div>
                <div className="grid gap-2">
                  <label className="flex items-start gap-2.5 text-sm text-foreground/72">
                    <input
                      type="checkbox"
                      checked={values.privacyAccepted}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, privacyAccepted: event.target.checked }));
                        setErrors((prev) => ({ ...prev, privacyAccepted: "" }));
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-black/25 accent-[#76df42]"
                      aria-invalid={Boolean(errors.privacyAccepted)}
                      required
                    />
                    <span>
                      I agree to the processing of my data for contact purposes and accept the privacy
                      notice. <span className="text-[#b50000]">*</span>
                    </span>
                  </label>
                  {errors.privacyAccepted ? (
                    <p className="text-xs text-[#920000]">{errors.privacyAccepted}</p>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl bg-[#76df42] px-8 text-base font-semibold text-[#132300] hover:bg-[#6ed23d] md:w-fit"
                >
                  Get a Proposal
                </Button>
              </form>
            </div>
            <aside className="h-fit self-start rounded-2xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_80%,white_20%)] p-5 md:p-6">
              <h3 className="text-[2.2rem] leading-[0.96] sm:text-[3rem]">Contacts</h3>
              <div className="mt-5 space-y-4 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="icon-ui text-[#a5d56a]" />
                  <a
                    href="mailto:partnerships@primework.example"
                    className="transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
                  >
                    partnerships@primework.example
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="icon-ui text-[#a5d56a]" />
                  <a
                    href="tel:+48221002030"
                    className="transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
                  >
                    +48 22 100 20 30
                  </a>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="icon-ui text-[#a5d56a]" />
                  Contract, NDA, and compliance package delivered before project launch.
                </p>
              </div>
            </aside>
          </div>
        </FadeIn>

        <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
          <DialogContent className="max-w-[34rem] rounded-2xl border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-6 sm:p-7">
            <DialogHeader className="text-left">
              <DialogTitle className="text-[1.9rem] leading-[0.96] text-foreground sm:text-[2.4rem]">
                Thank you for your request
              </DialogTitle>
              <DialogDescription className="mt-2 text-[1rem] leading-[1.4] text-foreground/70 sm:text-[1.06rem]">
                Everything is submitted successfully. Our managers will contact you shortly.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-2 justify-start sm:justify-start">
              <DialogClose asChild>
                <Button className="h-11 rounded-xl bg-[#76df42] px-6 text-base font-semibold text-[#132300] hover:bg-[#6ed23d]">
                  Great, thanks
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  );
}
