export type Service = {
  slug: string;
  title: string;
  summary: string;
  whatIncluded: string;
  sla: string;
  timeline: string;
  documents: string;
  riskOwnership: string;
};

export const services: Service[] = [
  {
    slug: "temporary-staffing",
    title: "Temporary Staffing",
    summary:
      "We cover shift-based workforce demand with a controlled and predictable team launch.",
    whatIncluded: "Sourcing, screening, onboarding, attendance control.",
    sla: "Request confirmation within 2 hours, daily status updates.",
    timeline: "First candidates in 24-48 hours, full ramp-up in 5-7 days.",
    documents: "Master service agreement, HR files, timesheets, closure reports.",
    riskOwnership:
      "No-show replacement within the agreed window and clear responsibility matrix.",
  },
  {
    slug: "permanent-recruitment",
    title: "Permanent Recruitment",
    summary:
      "We hire key specialists and managers with a focus on retention after start.",
    whatIncluded:
      "Role profiling, longlist/shortlist, interviews, and reference checks.",
    sla: "Shortlist delivered within 5 business days after project kickoff.",
    timeline: "Typical hiring cycle: 2-4 weeks depending on role complexity.",
    documents: "Role profile, scorecard, candidate report, offer support.",
    riskOwnership: "Replacement guarantee period for agreed positions.",
  },
  {
    slug: "payroll-compliance",
    title: "Payroll and Compliance",
    summary:
      "Contracts, legalization, payroll operations, and labor-risk control under client requirements.",
    whatIncluded:
      "Contract administration, payroll workflows, and document deadline tracking.",
    sla: "Weekly status register with alerts for critical compliance events.",
    timeline: "Process setup completed in 3-5 business days.",
    documents: "Contracts, permits, HR registers, audit checklists.",
    riskOwnership:
      "Defined responsibility boundaries in contract and operational SOPs.",
  },
  {
    slug: "on-site-management",
    title: "On-site Coordination",
    summary:
      "Local coordinator on-site to manage schedules, adaptation, and shift discipline.",
    whatIncluded:
      "Shift planning, attendance control, urgent replacements, daily briefings.",
    sla: "Operational response to critical deviations during the same shift.",
    timeline: "Coordinator starts together with the first hiring wave.",
    documents: "Attendance log, incident report, weekly operations summary.",
    riskOwnership: "Escalation matrix with a dedicated 24/7 contact.",
  },
  {
    slug: "volume-hiring",
    title: "Volume Hiring",
    summary:
      "Large team hiring for seasonal peaks and new site launches without quality drop.",
    whatIncluded:
      "Wave planning, multi-channel sourcing, group interviews, onboarding.",
    sla: "Daily production metrics for funnel progress and starts.",
    timeline: "Pilot launch in 72 hours, scale-up in waves over 2-6 weeks.",
    documents: "Hiring plan, funnel tracker, starter document package.",
    riskOwnership: "Reserve funnel coverage for peak weeks and drop-off scenarios.",
  },
  {
    slug: "workforce-analytics",
    title: "Workforce Analytics",
    summary:
      "Regular reporting on fill rates, attendance, attrition, and hiring quality.",
    whatIncluded:
      "KPI dashboard, cohort analysis, loss reasons, and action recommendations.",
    sla: "Weekly reporting with monthly QBR sessions.",
    timeline: "First dashboard in 5 business days after data integration.",
    documents: "KPI template, risk register, decision protocol.",
    riskOwnership:
      "Bottleneck detection with corrective action plan and clear deadlines.",
  },
];
