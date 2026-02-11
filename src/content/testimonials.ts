export type Testimonial = {
  company: string;
  industry: string;
  region: string;
  headcount: string;
  challenge: string;
  solution: string;
  results: string;
  kpis: [string, string];
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    company: "Nordic Fulfillment Group",
    industry: "Logistics and Warehousing",
    region: "Warsaw region, Poland",
    headcount: "85 shift workers",
    challenge:
      "Night shifts were understaffed and fill-rate dropped below SLA during seasonal peaks.",
    solution:
      "Introduced reserve staffing pool, coordinator oversight, and daily attendance control.",
    results:
      "Shift coverage stabilized in under one quarter with predictable weekly staffing output.",
    kpis: ["Fill rate: +18pp in 10 weeks", "Attendance stability: 96% weekly average"],
    name: "Anna Kowalska",
    role: "Operations Director",
  },
  {
    company: "Baltic Food Lines",
    industry: "Food Processing",
    region: "Gdansk, Poland",
    headcount: "62 production workers",
    challenge:
      "Audit risk was increasing due to fragmented document handling across hiring waves.",
    solution:
      "Centralized compliance checklist, permit tracking, and structured onboarding evidence.",
    results:
      "Audit cycle completed without critical findings and documentation remained consistent.",
    kpis: ["Compliance completion: 100%", "Onboarding lead time: -35%"],
    name: "Marek Zielinski",
    role: "Plant HR Manager",
  },
  {
    company: "Urban Retail Distribution",
    industry: "Retail and Distribution",
    region: "Central Europe multi-site",
    headcount: "240 workers in ramp-up phase",
    challenge:
      "Seasonal scale-up required fast volume hiring while keeping candidate quality stable.",
    solution:
      "Phased rollout with role-based funnels, replacement buffer, and coordinator checkpoints.",
    results:
      "Ramp-up executed on schedule with stable quality and lower early churn.",
    kpis: ["First-wave fill rate: 94%", "30-day attrition: -22%"],
    name: "Iryna Novak",
    role: "Head of Workforce Planning",
  },
];
