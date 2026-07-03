import React from "react";

const stats = [
  {
    number: "14+",
    label: "Years of Cross-Industry Leadership",
  },
  {
    number: "₹750M+",
    label: "Business Value Delivered",
  },
  {
    number: "₹20Bn",
    label: "Debt Structured",
  },
  {
    number: "110+",
    label: "Startups Evaluated",
  },
];

export default function ProjectCards() {
  return (
    <section id="impact" className="py-28" style={{background: "var(--background)"}}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
            IMPACT
          </p>

          <h2 className="text-5xl text-white mt-4">
            Measurable business outcomes.
          </h2>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.number}
              className="glass rounded-3xl p-10 text-center"
            >
              <h3 className="text-5xl font-bold gold-text mb-4">
                {item.number}
              </h3>

              <p className="text-sm">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
