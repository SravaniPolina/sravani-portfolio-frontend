import React from "react";

const stats = [
  {
    value: "12+",
    label: "Years of Cross-Industry Leadership",
  },
  {
    value: "₹200M+",
    label: "Incremental Revenue Delivered",
  },
  {
    value: "110+",
    label: "Startups Evaluated",
  },
  {
    value: "5",
    label: "Business Units Led",
  },
];

export default function StatStrip() {
  return (
    <section
      id="impact"
      className="bg-[#081E1E] py-24 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
            IMPACT
          </p>

          <h2 className="text-4xl lg:text-5xl text-white mt-4">
            Business outcomes,
            <br />
            not just advice.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.value}
              className="glass text-center p-10 hover:-translate-y-2 transition duration-500"
            >
              <h3 className="text-5xl font-bold gold-text mb-4">
                {item.value}
              </h3>

              <p className="text-sm leading-7">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
