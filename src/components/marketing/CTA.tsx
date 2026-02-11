"use client";

import { useMemo, useState } from "react";
import { getCountries, getCountryCallingCode, isValidPhoneNumber } from "libphonenumber-js/min";
import { Mail, Phone, ShieldCheck } from "lucide-react";

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

type CountryCode = (typeof COUNTRY_CODES)[number];

type FormValues = {
  contactName: string;
  company: string;
  contactEmail: string;
  contactPhone: string;
  request: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const COUNTRY_CODES = getCountries();

export function CTA() {
  const [countryCode, setCountryCode] = useState<CountryCode>("PL");
  const [values, setValues] = useState<FormValues>({
    contactName: "",
    company: "",
    contactEmail: "",
    contactPhone: "",
    request: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const countryName = useMemo(() => new Intl.DisplayNames(["en"], { type: "region" }), []);

  const countries = useMemo(
    () =>
      COUNTRY_CODES.map((code) => ({
        code,
        label: countryName.of(code) ?? code,
        dialCode: `+${getCountryCallingCode(code)}`,
      })).sort((a, b) => a.label.localeCompare(b.label)),
    [countryName]
  );

  const selectedCountry = useMemo(() => {
    return countries.find((country) => country.code === countryCode) ?? countries[0];
  }, [countries, countryCode]);

  const fullPhoneNumber = useMemo(() => {
    const localDigits = values.contactPhone.replace(/\D/g, "");
    return `${selectedCountry.dialCode}${localDigits}`;
  }, [selectedCountry.dialCode, values.contactPhone]);

  const validateField = (name: keyof FormValues, value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      if (name === "company" || name === "request") return "";
      return "This field is required.";
    }

    if (name === "contactName") {
      if (trimmed.length < 2) return "Enter at least 2 characters.";
      if (!/^[a-zA-Z\s'`-]+$/.test(trimmed)) return "Use letters only.";
    }

    if (name === "contactEmail") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Enter a valid email.";
    }

    if (name === "contactPhone") {
      const digits = trimmed.replace(/\D/g, "");
      if (digits.length < 6 || digits.length > 14) {
        return "Enter a valid phone number.";
      }
      if (!isValidPhoneNumber(`${selectedCountry.dialCode}${digits}`)) {
        return "Enter a valid phone number.";
      }
    }

    return "";
  };

  const onChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let next = event.target.value;
      if (field === "contactPhone") {
        const countryDigits = selectedCountry.dialCode.replace(/\D/g, "");
        const onlyDigits = next.replace(/\D/g, "");
        const withoutCountry = onlyDigits.startsWith(countryDigits)
          ? onlyDigits.slice(countryDigits.length)
          : onlyDigits;
        next = withoutCountry.slice(0, 14);
      }
      setValues((prev) => ({ ...prev, [field]: next }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  const onBlur = (field: keyof FormValues) => () => {
    const message = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {
      contactName: validateField("contactName", values.contactName),
      company: validateField("company", values.company),
      contactEmail: validateField("contactEmail", values.contactEmail),
      contactPhone: validateField("contactPhone", values.contactPhone),
      request: validateField("request", values.request),
    };

    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      return;
    }

    setIsSuccessOpen(true);
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
                <div className="grid gap-2">
                  <Label htmlFor="contact-phone">
                    Phone <span className="text-[#b50000]">*</span>
                  </Label>
                  <div
                    className={cn(
                      "flex h-11 items-center rounded-xl border bg-[color:color-mix(in_srgb,var(--off-white)_75%,white_25%)] transition-shadow",
                      errors.contactPhone
                        ? "border-[#b50000] ring-[3px] ring-[#b50000]/20"
                        : "border-black/12 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]"
                    )}
                  >
                    <Select
                      value={countryCode}
                      onValueChange={(value) => setCountryCode(value as CountryCode)}
                    >
                      <SelectTrigger className="h-11 w-[8.5rem] rounded-none border-0 bg-transparent px-2.5 text-xs shadow-none focus:ring-0 focus-visible:ring-0 sm:w-[10.75rem] sm:px-3 sm:text-sm md:w-[12.75rem]">
                        <SelectValue placeholder="Country code" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[19rem] rounded-xl border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_85%,white_15%)]">
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.label} ({country.dialCode})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="h-6 w-px bg-black/12" />
                    <Input
                      id="contact-phone"
                      name="contactPhone"
                      type="tel"
                      inputMode="tel"
                      placeholder="000 000 000"
                      value={values.contactPhone}
                      onChange={onChange("contactPhone")}
                      onBlur={onBlur("contactPhone")}
                      aria-invalid={Boolean(errors.contactPhone)}
                      required
                      aria-required="true"
                      className="h-11 min-w-0 border-0 bg-transparent text-sm shadow-none focus-visible:ring-0"
                    />
                  </div>
                  <p className="text-xs text-foreground/58">
                    Enter digits only, without the country code. Example: 501234567
                  </p>
                  <input type="hidden" name="contactPhoneFull" value={fullPhoneNumber} />
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
                  partnerships@primework.example
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="icon-ui text-[#a5d56a]" />
                  +48 22 100 20 30
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
