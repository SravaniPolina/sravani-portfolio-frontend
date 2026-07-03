import React from "react";

const principles = [
  {
    number: "01",
    title: "One Advisor",
    description: "Every engagement is led directly by me. No hand-offs, no junior consultants, just focused execution and accountability."
  },
  {
    number: "02",
    title: "Practical Frameworks",
    description: "Every financial model, dashboard and strategy document is designed to be used long after the engagement ends."
  },
  {
    number: "03",
    title: "Technology-Enabled",
    description: "I combine business expertise with AI, automation and analytics to improve speed, decision-making and execution."
  }
];

export default function LeadershipPhilosophy() {
  return (
    <section id="how" className="py-28" style={{background: "var(--green)"}}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[3px] text-[#D4A63A] text-sm font-semibold">How I work</p>
        <h2 className="font-serif text-5xl text-white mt-4 mb-16">
          A simple engagement philosophy.
        </h2>
        <div className="space-y-8">
          {principles.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl p-10 flex flex-col lg:flex-row lg:items-center gap-8"
              style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(200,157,60,0.2)"}}
            >
              <div className="font-serif text-6xl font-bold min-w-[100px]" style={{color: "#D4A63A"}}>
                {item.number}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-3xl text-white mb-4">{item.title}</h3>
                <p style={{color: "rgba(255,255,255,0.75)"}}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
