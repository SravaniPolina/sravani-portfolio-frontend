import React from "react";

const principles = [
  {
    number: "01",
    title: "One Advisor",
    description:
      "Every engagement is led directly by me. No hand-offs, no junior consultants—just focused execution and accountability.",
  },
  {
    number: "02",
    title: "Practical Frameworks",
    description:
      "Every financial model, dashboard and strategy document is designed to be used long after the engagement ends.",
  },
  {
    number: "03",
    title: "Technology-Enabled",
    description:
      "I combine business expertise with AI, automation and analytics to improve speed, decision-making and execution.",
  },
];

export default function LeadershipPhilosophy() {
  return (
    <section id="how" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
          HOW I WORK
        </p>

        <h2 className="text-5xl text-white mt-4 mb-16">
          A simple engagement philosophy.
        </h2>

        <div className="space-y-8">

          {principles.map((item) => (
            <div
              key={item.number}
              className="glass rounded-3xl p-10 flex flex-col lg:flex-row lg:items-center gap-8"
            >

              <div className="text-6xl font-bold gold-text min-w-[100px]">
                {item.number}
              </div>

              <div className="flex-1">

                <h3 className="text-3xl text-white mb-4">
                  {item.title}
                </h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
