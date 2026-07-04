import React from "react";

const engagements = [
  {
    tag: "Business Transformation",
    sector: "Agribusiness",
    title: "Business Model Transformation",
    outcome: "₹350M+ incremental bottom line and 80% CapEx reduction.",
    detail: "Asset-light operating model, contract farming restructure, pricing reset and margin-led sales transformation."
  },
  {
    tag: "Chief of Staff",
    sector: "Infrastructure & EPC",
    title: "Chief of Staff Advisory",
    outcome: "Led strategy, governance and execution across 5 business units.",
    detail: "PMO design, capex governance, cost optimisation and real-time dashboards for a multi-unit EPC business."
  },
  {
    tag: "Capital Advisory",
    sector: "Hospitality & Infrastructure",
    title: "Capital & Debt Advisory",
    outcome: "Structured institutional funding and lender-ready business cases.",
    detail: "Five-year financial models, DSCR analysis, bank funding notes and debt syndication for hospitality and infrastructure clients."
  }
];

const quickStats = [
  { number: "6", label: "Sectors" },
  { number: "14+", label: "Years" },
  { number: "3", label: "Featured Engagements" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16" style={{ background: "var(--beige)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label" style={{ color: "var(--gold)" }}>Featured Engagements</p>
        <h2 className="font-serif text-5xl mt-4 mb-4" style={{ color: "var(--green)" }}>
          Selected business transformations.
        </h2>
        <p className="text-lg mb-8" style={{ color: "#3A3A3A" }}>
          14+ years across strategy, finance and business transformation.
        </p>

        {/* Quick stats row */}
        <div className="flex flex-wrap gap-10 mb-16">
          {quickStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold" style={{ color: "var(--gold)" }}>{stat.number}</span>
              <span className="text-sm uppercase tracking-wide" style={{ color: "#3A3A3A" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-10 flex flex-col gap-4"
              style={{ background: "var(--green)", border: "1px solid rgba(200,157,60,0.2)" }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)" }}>{item.tag}</span>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ background: "rgba(212,166,58,0.15)", color: "var(--gold-light)", border: "1px solid rgba(212,166,58,0.3)" }}
                >
                  {item.sector}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white">{item.title}</h3>
              <p className="font-semibold" style={{ color: "var(--gold-light)" }}>{item.outcome}</p>
              <p className="text-sm leading-7" style={{ color: "rgba(255,255,255,0.75)" }}>{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-16" style={{ color: "var(--text-muted)" }}>
          Detailed engagement notes available on request.
        </p>
      </div>
    </section>
  );
}
