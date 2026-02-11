export type Testimonial = {
  company: string;
  name: string;
  role: string;
  quote: string;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    company: "Nordic Fulfillment Group",
    name: "Anna Kowalska",
    role: "Operations Director",
    quote:
      "Prime Work stabilized our night shifts, and we returned SLA performance to target within one quarter.",
    result: "31% fewer unfilled shifts in 10 weeks",
  },
  {
    company: "Baltic Food Lines",
    name: "Marek Zielinski",
    role: "Plant HR Manager",
    quote:
      "Their team keeps documentation and adaptation structured, and we passed the audit without critical findings.",
    result: "100% audit compliance in workforce documentation",
  },
  {
    company: "Urban Retail Distribution",
    name: "Iryna Novak",
    role: "Head of Workforce Planning",
    quote:
      "We achieved predictable seasonal scale-up without sacrificing candidate quality.",
    result: "240 workers deployed in 6 weeks",
  },
];
