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
      "We launch shift-ready teams for warehouses, production lines, and retail operations with controlled delivery.",
    whatIncluded: "Sourcing, screening, onboarding, and shift attendance control.",
    sla: "Scope confirmation within 2 hours with same-day coordinator response.",
    timeline: "First shortlisted workers in 24-48 hours, stable ramp-up in 5-7 days.",
    documents: "Master service agreement, HR files, timesheets, closure reports.",
    riskOwnership:
      "No-show replacement within the agreed window and clear responsibility matrix.",
  },
  {
    slug: "permanent-recruitment",
    title: "Permanent Recruitment",
    summary:
      "We hire long-term specialists and supervisors with retention and operational fit in focus.",
    whatIncluded:
      "Role profiling, longlist/shortlist, interviews, and reference checks.",
    sla: "Role brief aligned in 1 business day, shortlist delivered within 5 business days.",
    timeline: "Typical hiring cycle: 2-4 weeks depending on seniority and market depth.",
    documents: "Role profile, scorecard, candidate report, offer support.",
    riskOwnership: "Replacement guarantee period for agreed positions.",
  },
  {
    slug: "payroll-compliance",
    title: "Payroll and Compliance",
    summary:
      "Contracts, payroll, legalization, and labor-risk control aligned to client and audit standards.",
    whatIncluded:
      "Contract administration, payroll workflows, and document deadline tracking.",
    sla: "Weekly compliance register with same-day escalation for critical risks.",
    timeline: "Process setup and handover completed in 3-5 business days.",
    documents: "Contracts, permits, HR registers, audit checklists.",
    riskOwnership:
      "Defined responsibility boundaries in contract and operational SOPs.",
  },
  {
    slug: "on-site-management",
    title: "On-site Coordination",
    summary:
      "Dedicated site coordinator to manage attendance, adaptation, and shift discipline in real time.",
    whatIncluded:
      "Shift planning, attendance control, urgent replacements, daily briefings.",
    sla: "Operational response to critical deviations during the same shift.",
    timeline: "Coordinator starts with wave one and follows the full stabilization period.",
    documents: "Attendance log, incident report, weekly operations summary.",
    riskOwnership: "Escalation matrix with a dedicated 24/7 contact.",
  },
  {
    slug: "volume-hiring",
    title: "Volume Hiring",
    summary:
      "Fast multi-wave hiring for seasonal peaks and new launches without quality decline.",
    whatIncluded:
      "Wave planning, multi-channel sourcing, group interviews, onboarding.",
    sla: "Daily funnel and starts metrics with agreed checkpoint reporting.",
    timeline: "Pilot wave in 72 hours, full scale-up over 2-6 weeks.",
    documents: "Hiring plan, funnel tracker, starter document package.",
    riskOwnership: "Reserve funnel coverage for peak weeks and drop-off scenarios.",
  },
  {
    slug: "workforce-analytics",
    title: "Workforce Analytics",
    summary:
      "Operational reporting on fill rate, attendance, attrition, and staffing quality trends.",
    whatIncluded:
      "KPI dashboard, cohort analysis, loss reasons, and action recommendations.",
    sla: "Weekly reporting cycle plus monthly QBR for corrective actions.",
    timeline: "First dashboard in 5 business days after source alignment.",
    documents: "KPI template, risk register, decision protocol.",
    riskOwnership:
      "Bottleneck detection with corrective action plan and clear deadlines.",
  },
];
