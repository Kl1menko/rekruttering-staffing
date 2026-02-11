import type { Service } from "@/content/services";

type ServiceFaq = {
  question: string;
  answer: string;
};

type SlaRow = {
  metric: string;
  target: string;
};

export type ServiceDetail = {
  heroWho: string;
  included: string[];
  slaRows: SlaRow[];
  pricingModel: string[];
  faq: ServiceFaq[];
};

export const serviceDetails: Record<Service["slug"], ServiceDetail> = {
  "temporary-staffing": {
    heroWho:
      "For employers who need fast shift coverage without sacrificing compliance and control.",
    included: [
      "Workforce demand briefing and role calibration",
      "Multi-channel sourcing and pre-screening",
      "Document checks and legal eligibility verification",
      "Medical readiness and safety onboarding coordination",
      "Shift launch planning with attendance control",
      "Reserve replacement pool for no-shows",
      "Weekly KPI reporting and escalation tracking",
    ],
    slaRows: [
      { metric: "Initial response", target: "Within 2 business hours" },
      { metric: "First candidate profiles", target: "24-48 hours" },
      { metric: "Replacement for no-show", target: "Within agreed SLA window" },
      { metric: "Status reporting", target: "Daily launch updates + weekly KPI" },
    ],
    pricingModel: [
      "Pricing is based on role complexity, shift schedule, and target headcount.",
      "On-site coordination, reserve coverage, and compliance scope are priced transparently.",
      "You receive a clear commercial model before launch: setup, delivery, and support layers.",
    ],
    faq: [
      {
        question: "How fast can you start?",
        answer:
          "We can launch first sourcing actions on the same day after scope approval. Typical first profiles come in 24-48 hours.",
      },
      {
        question: "Do you cover urgent absences?",
        answer:
          "Yes. We maintain reserve capacity and an escalation workflow for urgent shift replacements.",
      },
      {
        question: "What is included in compliance control?",
        answer:
          "Identity checks, permit validity review, onboarding records, and document status monitoring.",
      },
    ],
  },
  "permanent-recruitment": {
    heroWho: "For hiring managers who need long-term employees with retention in mind.",
    included: [
      "Role profile alignment and hiring scorecard",
      "Targeted sourcing and market mapping",
      "Longlist and shortlist curation",
      "Structured interviews and candidate assessment",
      "Reference and background checks",
      "Offer process support and candidate closing",
      "Replacement support during guarantee period",
    ],
    slaRows: [
      { metric: "Kickoff and brief alignment", target: "Within 1 business day" },
      { metric: "First shortlist", target: "Within 5 business days" },
      { metric: "Candidate feedback loop", target: "Within 24 hours after interview" },
      { metric: "Replacement guarantee", target: "Defined in agreed terms" },
    ],
    pricingModel: [
      "Pricing depends on role seniority, specialization, and hiring volume.",
      "Search strategy and assessment depth are reflected in the final model.",
      "Commercial terms are agreed upfront with no hidden post-launch costs.",
    ],
    faq: [
      {
        question: "Do you work with niche roles?",
        answer:
          "Yes. We support both high-volume and specialized recruitment with role-specific sourcing plans.",
      },
      {
        question: "How do you reduce early attrition?",
        answer:
          "We use fit-based screening, expectation alignment, and structured onboarding handover.",
      },
      {
        question: "Can we interview candidates in stages?",
        answer:
          "Yes. We configure interview flow and feedback checkpoints around your internal process.",
      },
    ],
  },
  "payroll-compliance": {
    heroWho: "For teams that need legal workforce operations with predictable document control.",
    included: [
      "Contract administration and legal onboarding flow",
      "Payroll process setup and execution control",
      "Permit and deadline tracking",
      "Compliance risk alerts and issue escalation",
      "Audit checklist and evidence preparation",
      "Weekly status register for client stakeholders",
      "Process documentation and SOP alignment",
    ],
    slaRows: [
      { metric: "Compliance setup", target: "3-5 business days" },
      { metric: "Critical alert notification", target: "Same day escalation" },
      { metric: "Status reporting cadence", target: "Weekly compliance register" },
      { metric: "Audit package readiness", target: "Before audit checkpoints" },
    ],
    pricingModel: [
      "Pricing is built around headcount volume, payroll complexity, and compliance scope.",
      "Document tracking and audit support can be packaged as standard or advanced tiers.",
      "The model is aligned before launch with clear ownership boundaries.",
    ],
    faq: [
      {
        question: "Do you provide audit-ready files?",
        answer:
          "Yes. We provide structured records and checklists aligned with agreed compliance requirements.",
      },
      {
        question: "Can you support multi-site operations?",
        answer:
          "Yes. We support centralized compliance visibility across locations with unified reporting.",
      },
      {
        question: "How are legal risks handled?",
        answer:
          "We operate with a defined responsibility matrix and escalation protocol per contract.",
      },
    ],
  },
  "on-site-management": {
    heroWho: "For operations that require day-to-day workforce discipline directly on site.",
    included: [
      "Dedicated on-site coordinator assignment",
      "Shift planning and attendance supervision",
      "First-day onboarding and adaptation support",
      "Urgent replacement coordination",
      "Deviation and incident logging",
      "Daily briefings with site leadership",
      "Weekly operations summary and actions",
    ],
    slaRows: [
      { metric: "Coordinator deployment", target: "From first staffing wave" },
      { metric: "Critical issue response", target: "Within the same shift" },
      { metric: "Escalation path", target: "Defined 24/7 contact route" },
      { metric: "Operational reporting", target: "Daily logs + weekly summary" },
    ],
    pricingModel: [
      "Pricing is based on site complexity, shift count, and coordinator coverage windows.",
      "Extended hours and multi-site support are scoped transparently in advance.",
      "You receive a clear delivery model with role ownership and reporting cadence.",
    ],
    faq: [
      {
        question: "Is coordinator support on-site full-time?",
        answer:
          "Coverage model can be full-time or shift-based depending on site operating requirements.",
      },
      {
        question: "How do you handle last-minute gaps?",
        answer:
          "The coordinator triggers replacement workflow and communicates ETA under agreed SLA.",
      },
      {
        question: "Do we get site-level reporting?",
        answer:
          "Yes. Attendance, incidents, and corrective actions are documented and shared regularly.",
      },
    ],
  },
  "volume-hiring": {
    heroWho: "For seasonal peaks and launches where volume speed must stay quality-controlled.",
    included: [
      "Wave-based hiring plan and capacity forecasting",
      "Parallel sourcing channels by role type",
      "Group interview and assessment operations",
      "Onboarding pack distribution and tracking",
      "Reserve funnel for drop-off scenarios",
      "Daily funnel metrics and launch dashboard",
      "Scale-up governance with decision checkpoints",
    ],
    slaRows: [
      { metric: "Pilot launch", target: "Within 72 hours" },
      { metric: "Daily funnel reporting", target: "Every business day" },
      { metric: "Scale waves", target: "2-6 weeks depending on scope" },
      { metric: "Quality control checks", target: "At every wave checkpoint" },
    ],
    pricingModel: [
      "Pricing depends on total volume, time-to-launch, and role mix.",
      "Peak-period reserve and onboarding intensity are included as separate model parts.",
      "Commercial structure is prepared before execution with transparent assumptions.",
    ],
    faq: [
      {
        question: "Can you launch in multiple waves?",
        answer:
          "Yes. We structure volume projects in controlled waves with KPI checkpoints.",
      },
      {
        question: "How do you prevent quality drop at scale?",
        answer:
          "We use standardized screening criteria, reserve pipeline, and coordinator control.",
      },
      {
        question: "Do you report progress daily?",
        answer:
          "Yes. You receive funnel, starts, and risk updates each business day during active waves.",
      },
    ],
  },
  "workforce-analytics": {
    heroWho: "For leadership teams that need actionable workforce decisions from clean metrics.",
    included: [
      "KPI framework definition aligned with operations goals",
      "Fill rate, attendance, and attrition tracking",
      "Cohort and source-quality analysis",
      "Loss reasons and bottleneck diagnostics",
      "Weekly dashboard and monthly QBR outputs",
      "Corrective action planning with owners",
      "Decision protocol and improvement follow-up",
    ],
    slaRows: [
      { metric: "Analytics setup", target: "Up to 5 business days" },
      { metric: "Reporting cadence", target: "Weekly dashboard updates" },
      { metric: "QBR review", target: "Monthly performance session" },
      { metric: "Action tracking", target: "Owner-based follow-up cycle" },
    ],
    pricingModel: [
      "Pricing is based on data sources, report depth, and review cadence.",
      "Dashboard-only and advisory-supported models are both available.",
      "Scope, ownership, and delivery intervals are fixed before start.",
    ],
    faq: [
      {
        question: "Can analytics be integrated with existing operations data?",
        answer:
          "Yes. We align available data inputs and build reporting around your current process reality.",
      },
      {
        question: "What KPIs do you usually track?",
        answer:
          "Most clients track fill rate, attendance, attrition, quality signals, and replacement speed.",
      },
      {
        question: "Do you provide recommendations, not just dashboards?",
        answer:
          "Yes. Every cycle includes practical actions with owners and timelines.",
      },
    ],
  },
};

