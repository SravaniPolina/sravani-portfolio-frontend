import React from "react";

const services = [
  {
    title: "Business Strategy",
    description:
      "Develop growth strategies, operating models and business roadmaps that align vision with measurable execution.",
  },
  {
    title: "Capital & Deal Advisory",
    description:
      "Support debt syndication, fundraising, commercial due diligence, valuation discussions and transaction execution.",
  },
  {
    title: "Business Transformation",
    description:
      "Improve operational performance, optimise processes and build scalable organisations ready for the next stage of growth.",
  },
  {
    title: "Fractional Chief of Staff",
    description:
      "Partner with founders and leadership teams to drive strategic initiatives, governance, cross-functional alignment and execution.",
  },
  {
    title: "AI-Enabled Business",
    description:
      "Identify practical opportunities to integrate AI into operations, decision-making, reporting and business workflows.",
  },
  {
    title: "Board & Leadership Advisory",
    description:
      "Facilitate strategic planning, performance reviews, business diagnostics and executive decision support.",
  },
];

export default function StrategicLeadershipServices() {
  return (
    <section
      id="services"
      className="py-28 bg-[var(--background)] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-20">

          <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
            SERVICES
          </p>

          <h2 className="text-5xl text-white mt-4 leading-tight">
            Strategic support across the business lifecycle.
          </h2>

          <p className="mt-6 text-lg max-w-2xl">
            Every engagement is designed around solving business problems—not
            delivering presentations. I work alongside founders, investors and
            leadership teams to create measurable outcomes.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="glass p-10 hover:border-[var(--gold)] transition duration-300"
            >
              <h3 className="text-2xl text-white mb-5">
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
