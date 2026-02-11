export type Industry = {
  slug: string;
  title: string;
  summary: string;
  typicalRoles: string;
  typicalVolume: string;
  fillSpeed: string;
  requirements: string;
};

export const industries: Industry[] = [
  {
    slug: "logistics-warehousing",
    title: "Logistics and Warehousing",
    summary: "Picking, sorting, receiving, and shipping operations.",
    typicalRoles: "Picker, packer, WMS operator, forklift operator.",
    typicalVolume: "15-120 workers per location.",
    fillSpeed: "First starts within 48 hours.",
    requirements: "Shift readiness and baseline safety compliance.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Assembly lines, packaging, quality control, and shift operators.",
    typicalRoles: "Line operator, quality controller, packer, shift technician.",
    typicalVolume: "20-150 workers depending on shift model.",
    fillSpeed: "Hiring operations launched within 72 hours.",
    requirements: "Process discipline, OHS induction, medical clearances when needed.",
  },
  {
    slug: "food-processing",
    title: "Food Processing",
    summary: "Workforce supply with strict sanitation and HACCP standards.",
    typicalRoles:
      "Packing operator, sorter, quality controller, sanitation associate.",
    typicalVolume: "25-100 workers during seasonal peaks.",
    fillSpeed: "First candidates in 2-4 days.",
    requirements: "Sanitary permits, HACCP compliance, temperature-zone readiness.",
  },
  {
    slug: "retail-distribution",
    title: "Retail and Distribution",
    summary: "Back-office warehouse support and network replenishment.",
    typicalRoles: "Warehouse associate, picker, category B driver, merchandiser.",
    typicalVolume: "10-80 workers per region.",
    fillSpeed: "Hiring wave closure in 5-10 days.",
    requirements: "Picking accuracy and scanner/SKU workflow discipline.",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    summary: "Operational workforce for stable day-to-day service delivery.",
    typicalRoles: "Housekeeping, kitchen helper, steward, front desk support.",
    typicalVolume: "8-60 workers per site.",
    fillSpeed: "Urgent replacements in 24-72 hours.",
    requirements: "Service culture, baseline communication language, shift flexibility.",
  },
  {
    slug: "construction-support",
    title: "Construction Support",
    summary: "Skilled and general labor teams for project-based execution.",
    typicalRoles: "Rebar worker, mason, installer, general laborer.",
    typicalVolume: "12-90 workers per project phase.",
    fillSpeed: "Crew formation in 4-9 days.",
    requirements: "Valid permits, safety induction, and mobility between sites.",
  },
];
