import React from "react";

const caseStudies = [
  {
    tag: "Agribusiness",
    situation: "A contract-farming business was carrying high fixed costs and an asset-heavy operating model, squeezing margins as growth slowed.",
    action: "Redesigned the operating model to asset-light, restructured contract farming terms, reset pricing, and led a margin-focused sales transformation.",
    outcome: "₹350M+ incremental bottom line and an 80% reduction in CapEx."
  },
  {
    tag: "Infrastructure & EPC",
    situation: "A multi-unit EPC business lacked unified governance, with each business unit operating on separate reporting and cost structures.",
    action: "Stepped in as strategic execution partner, designing a PMO structure, capex governance framework, and real-time executive dashboards across 5 business units.",
    outcome: "Unified strategy, governance and cost visibility across the entire business."
  },
  {
    tag: "Hospitality",
    situation: "A growing hospitality group needed to raise institutional debt but lacked lender-ready financial documentation.",
    action: "Built five-year financial models, DSCR analysis, and a full bank-ready funding note to support the capital raise conversation.",
    outcome: "Structured, lender-ready business case supporting institutional funding discussions."
  }
];

export default function Casestudies() {
  return (
    <section id="case-studies" className="py-16 lg:py-24" style={{ background: "var(--green)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[3px] lg:tracking-[4px] text-sm text-center font-semibold" style={{ color: "var(--gold)" }}>
          Case Studies
        </p>
        <h2 className="font-serif text-3xl lg:text-5xl text-center mt-4 mb-6 text-white">
          Real engagements, real outcomes.
        </h2>
        <p className="max-w-3xl mx-auto text-center text-base lg:text-lg leading-7 lg:leading-8 mb-16 text-justify" style={{ color: "rgba(255,255,255,0.8)" }}>
          Client details are anonymised to protect confidentiality. Full engagement notes are available on request.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.tag}
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{ background: "var(--beige)", border: "1px solid rgba(212,166,58,0.3)" }}
            >
              <span
                className="text-xs uppercase tracking-widest font-semibold self-start px-3 py-1 rounded-full"
                style={{ background: "rgba(13,59,46,0.08)", color: "var(--green)", border: "1px solid rgba(13,59,46,0.2)" }}
              >
                {study.tag}
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--green)" }}>Situation</p>
                <p className="text-sm leading-6 text-justify" style={{ color: "#3A3A3A" }}>{study.situation}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--green)" }}>Action</p>
                <p className="text-sm leading-6 text-justify" style={{ color: "#3A3A3A" }}>{study.action}</p>
              </div>

              <div className="pt-3 mt-auto" style={{ borderTop: "1px solid rgba(13,59,46,0.15)" }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--gold)" }}>Outcome</p>
                <p className="font-semibold text-sm leading-6 text-justify" style={{ color: "var(--green)" }}>{study.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
