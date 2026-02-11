import type { Industry } from "@/content/industries";

type RoleRow = {
  role: string;
  typicalCount: string;
  note: string;
};

type RampUpStep = {
  phase: string;
  target: string;
};

type MiniCase = {
  client: string;
  challenge: string;
  solution: string;
  result: string;
};

export type IndustryDetail = {
  heroWho: string;
  roles: RoleRow[];
  rampUpPlan: RampUpStep[];
  requirements: string[];
  miniCase: MiniCase;
};

export const industryDetails: Record<Industry["slug"], IndustryDetail> = {
  "logistics-warehousing": {
    heroWho:
      "For distribution centers that need predictable shift coverage with WMS-ready staff.",
    roles: [
      { role: "Picker / Packer", typicalCount: "8-40", note: "Scanner workflow, shift accuracy" },
      { role: "WMS Operator", typicalCount: "2-8", note: "System discipline and stock control" },
      { role: "Forklift Operator", typicalCount: "2-12", note: "Valid license and safety routine" },
    ],
    rampUpPlan: [
      { phase: "Day 1-2", target: "Briefing, sourcing launch, first shortlist" },
      { phase: "Day 3-5", target: "10-15 workers onboarded" },
      { phase: "Day 7-10", target: "20+ workers active on shifts" },
    ],
    requirements: [
      "PPE usage and site safety induction",
      "WMS / scanner process discipline",
      "Shift availability (day/night rotation)",
      "Basic operational language for team coordination",
    ],
    miniCase: {
      client: "Regional 3PL operator (Poland)",
      challenge: "High no-show rate in night shifts during seasonal peaks.",
      solution: "Reserve staffing pool with daily coordinator check-ins.",
      result: "20 workers deployed in 8 days, attendance stabilized above 95%.",
    },
  },
  manufacturing: {
    heroWho:
      "For plants that require line-ready staff with stable attendance and process discipline.",
    roles: [
      { role: "Line Operator", typicalCount: "10-60", note: "Standardized line routine" },
      { role: "Quality Controller", typicalCount: "2-10", note: "Defect checks and reporting" },
      { role: "Packer", typicalCount: "6-30", note: "Output and labeling accuracy" },
    ],
    rampUpPlan: [
      { phase: "Day 1-3", target: "Role profiling and sourcing wave launch" },
      { phase: "Day 4-7", target: "8-15 workers trained and started" },
      { phase: "Day 8-14", target: "20-35 workers active by line priority" },
    ],
    requirements: [
      "PPE and OHS induction before first shift",
      "Line SOP compliance and escalation discipline",
      "Shift model flexibility (2/3-shift systems)",
      "Basic language for safety and quality instructions",
    ],
    miniCase: {
      client: "Mid-size packaging plant",
      challenge: "Ramp-up delays after new production line launch.",
      solution: "Wave hiring plan with on-site adaptation support.",
      result: "28 workers onboarded in 12 days with stable line output.",
    },
  },
  "food-processing": {
    heroWho:
      "For food facilities where hygiene compliance and speed must work together.",
    roles: [
      { role: "Packing Operator", typicalCount: "8-35", note: "Hygiene and pace control" },
      { role: "Sorter", typicalCount: "5-20", note: "Quality separation workflow" },
      { role: "Sanitation Associate", typicalCount: "2-8", note: "Zone sanitation protocol" },
    ],
    rampUpPlan: [
      { phase: "Day 1-2", target: "Compliance briefing and candidate screening" },
      { phase: "Day 3-6", target: "Medical + hygiene onboarding completed" },
      { phase: "Day 7-10", target: "20 workers deployed across key shifts" },
    ],
    requirements: [
      "PPE and sanitary discipline in all zones",
      "HACCP-related process adherence",
      "Temperature-zone readiness",
      "Language baseline for hygiene and safety commands",
    ],
    miniCase: {
      client: "Seasonal food producer",
      challenge: "Urgent volume demand with strict sanitation controls.",
      solution: "Pre-verified candidate pool + staged onboarding.",
      result: "22 workers launched in 9 days with zero critical hygiene incidents.",
    },
  },
  "retail-distribution": {
    heroWho:
      "For retail networks that need fast warehouse replenishment support.",
    roles: [
      { role: "Warehouse Associate", typicalCount: "6-25", note: "Flow and dispatch support" },
      { role: "Picker", typicalCount: "4-20", note: "SKU accuracy and speed" },
      { role: "Driver (B)", typicalCount: "2-8", note: "Route discipline and handover" },
    ],
    rampUpPlan: [
      { phase: "Day 1-3", target: "Network demand mapping and sourcing setup" },
      { phase: "Day 4-7", target: "10-14 workers active in core locations" },
      { phase: "Day 8-12", target: "20+ workers deployed in regional wave" },
    ],
    requirements: [
      "Scanner / SKU handling standards",
      "Shift and weekend availability",
      "Basic language for route and site communication",
      "PPE and loading safety compliance",
    ],
    miniCase: {
      client: "Urban retail distributor",
      challenge: "Stock replenishment lag during promotion season.",
      solution: "Rapid deployment of pick/dispatch team across two sites.",
      result: "19 workers launched in 10 days and backlog reduced by 34%.",
    },
  },
  hospitality: {
    heroWho:
      "For hotels and service operators that need reliable day-to-day staffing.",
    roles: [
      { role: "Housekeeping", typicalCount: "4-18", note: "Turnover and quality cadence" },
      { role: "Kitchen Helper", typicalCount: "3-12", note: "Prep and hygiene support" },
      { role: "Front Desk Support", typicalCount: "2-6", note: "Service communication" },
    ],
    rampUpPlan: [
      { phase: "Day 1-2", target: "Service profile alignment and sourcing start" },
      { phase: "Day 3-5", target: "6-10 workers onboarded for core shifts" },
      { phase: "Day 6-10", target: "15+ workers active by occupancy needs" },
    ],
    requirements: [
      "Service etiquette and guest-facing communication",
      "Shift flexibility (early/late/weekend)",
      "Basic language requirements by role",
      "Site onboarding and hygiene standards",
    ],
    miniCase: {
      client: "Multi-site hospitality operator",
      challenge: "High season staffing instability in housekeeping teams.",
      solution: "Role-based sourcing funnel and replacement reserve.",
      result: "16 workers deployed in 9 days with service continuity maintained.",
    },
  },
  "construction-support": {
    heroWho:
      "For project teams that need compliant labor capacity at specific project phases.",
    roles: [
      { role: "General Laborer", typicalCount: "6-30", note: "Site prep and support tasks" },
      { role: "Installer", typicalCount: "3-12", note: "Task-specific technical execution" },
      { role: "Mason / Rebar Worker", typicalCount: "2-10", note: "Phase-critical skilled work" },
    ],
    rampUpPlan: [
      { phase: "Day 1-3", target: "Permit and role-check process initiated" },
      { phase: "Day 4-7", target: "8-12 workers assigned to active phase" },
      { phase: "Day 8-14", target: "20 workers deployed across work fronts" },
    ],
    requirements: [
      "Valid permits and legal site access",
      "PPE and safety induction confirmation",
      "Mobility between project locations",
      "Language baseline for safety instructions",
    ],
    miniCase: {
      client: "Regional construction contractor",
      challenge: "Phase handover risk due to labor shortage.",
      solution: "Staged deployment with permit-first screening.",
      result: "20 workers mobilized in 11 days, phase deadline kept on track.",
    },
  },
};

