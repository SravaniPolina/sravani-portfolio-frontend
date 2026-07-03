import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-28 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">

        <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
          ABOUT
        </p>

        <h2 className="text-5xl text-white mt-4 mb-10 leading-tight">
          Helping businesses navigate
          complexity with clarity.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <p className="mb-6">
              I partner with founders, investors and leadership teams to solve
              complex business challenges across strategy, finance, business
              transformation and AI-enabled execution.
            </p>

            <p className="mb-6">
              My experience spans Banking, Agribusiness, Infrastructure,
              Hospitality, Startups and Consulting, allowing me to connect
              commercial strategy with practical execution.
            </p>

            <p>
              Every engagement is outcome-focused—whether that means raising
              capital, improving operational performance, supporting M&A,
              designing governance structures or helping organisations scale
              sustainably.
            </p>
          </div>

          <div className="glass p-10 rounded-3xl">

            <h3 className="text-2xl text-white mb-6">
              Areas of Expertise
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div>Business Strategy</div>
              <div>Business Transformation</div>
              <div>Capital Advisory</div>
              <div>Due Diligence</div>
              <div>Fractional Chief of Staff</div>
              <div>AI Adoption</div>
              <div>Operational Excellence</div>
              <div>Governance & PMO</div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
