import React from "react";

const engagements = [
  {
    tag: "Business Transformation",
    title: "Business Model Transformation",
    outcome: "₹350M+ incremental bottom line and 80% CapEx reduction.",
    detail: "Asset-light operating model, contract farming restructure, pricing reset and margin-led sales transformation."
  },
  {
    tag: "Chief of Staff",
    title: "Chief of Staff Advisory",
    outcome: "Led strategy, governance and execution across 5 business units.",
    detail: "PMO design, capex governance, cost optimisation and real-time dashboards for a multi-unit EPC business."
  },
  {
    tag: "Capital Advisory",
    title: "Capital & Debt Advisory",
    outcome: "Structured institutional funding and lender-ready business cases.",
    detail: "Five-year financial models, DSCR analysis, bank funding notes and debt syndication for hospitality and infrastructure clients."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28" style={{background: "var(--beige)"}}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label" style={{color: "var(--gold)"}}>Featured Engagements</p>
       <h2 className="font-serif text-5xl mt-4 mb-4" style={{color: "var(--green)"}}>
          Selected business transformations.
        </h2>
        <p className="text-lg mb-16" style={{color: "#3A3A3A"}}>14+ years across strategy, finance and business transformation.</p>
        <div className="grid lg:grid-cols-3 gap-8">
          {engagements.map((item) => (
            <div key={item.title} className="rounded-3xl p-10 flex flex-col gap-4" style={{background: "var(--green)", border: "1px solid rgba(200,157,60,0.2)"}}>
              <span className="text-xs uppercase tracking-widest" style={{color: "var(--gold)"}}>{item.tag}</span>
              <h3 className="font-serif text-2xl text-white">{item.title}</h3>
              <p className="font-semibold" style={{color: "var(--gold-light)"}}>{item.outcome}</p>
              <p className="text-sm leading-7" style={{color: "rgba(255,255,255,0.75)"}}>{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-16" style={{color: "var(--text-muted)"}}>Detailed engagement notes available on request.</p>
      </div>
    </section>
  );
}
