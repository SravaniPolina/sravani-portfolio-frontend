import React from "react";

const engagements = [
  {
    title: "Business Model Transformation",
    outcome: "₹200M+ incremental revenue and 80% CapEx reduction.",
  },
  {
    title: "Chief of Staff Advisory",
    outcome: "Led strategy, governance and execution across 5 business units.",
  },
  {
    title: "Capital & Debt Advisory",
    outcome: "Structured institutional funding and lender-ready business cases.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
          FEATURED ENGAGEMENTS
        </p>

        <h2 className="text-5xl text-white mt-4 mb-16">
          Selected business transformations.
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {engagements.map((item) => (
            <div key={item.title} className="glass p-10 rounded-3xl">

              <h3 className="text-2xl text-white mb-6">
                {item.title}
              </h3>

              <p>{item.outcome}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
