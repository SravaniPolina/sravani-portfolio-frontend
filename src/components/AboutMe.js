import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <img
            src="/Aragon-Headshot-70.jpg"
            alt="Sravani Polina"
            className="rounded-3xl w-full max-w-md mx-auto border border-white/10 shadow-2xl"
          />
        </div>

        <div>

          <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
            ABOUT
          </p>

          <h2 className="text-5xl text-white mt-4 mb-8">
            Strategy is only valuable
            <br />
            when it gets executed.
          </h2>

          <p className="mb-6">
            I work with founders, investors and leadership teams to solve
            complex business problems spanning strategy, finance, operations,
            business transformation and AI adoption.
          </p>

          <p className="mb-6">
            Over the past <strong className="text-white">14+ years</strong>,
            I've worked across Banking, Agribusiness, Infrastructure, Startups,
            Hospitality and Consulting—helping organisations improve
            performance, raise capital and execute high-impact initiatives.
          </p>

          <p className="mb-10">
            My approach combines analytical thinking, commercial judgment and
            hands-on execution to deliver measurable business outcomes.
          </p>

          <div className="grid grid-cols-2 gap-4">

            <div className="glass p-6 rounded-2xl">
              <h3 className="gold-text text-2xl font-bold">
                IIM Lucknow
              </h3>
              <p className="mt-2">
                MBA – Agribusiness Management
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="gold-text text-2xl font-bold">
                IIM Kozhikode
              </h3>
              <p className="mt-2">
                Business Analytics
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
