import React from "react";
import { BriefcaseBusiness, Landmark, TrendingUp, Users, BrainCircuit, Target } from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={34} className="text-[#D4A63A]" />,
    title: "Growth Strategy",
    description: "Business strategy, market expansion, operating models and growth roadmaps aligned with measurable outcomes."
  },
  {
    icon: <Landmark size={34} className="text-[#D4A63A]" />,
    title: "Capital & Deal Advisory",
    description: "Debt syndication, fundraising support, commercial due diligence and strategic transaction advisory."
  },
  {
    icon: <BriefcaseBusiness size={34} className="text-[#D4A63A]" />,
    title: "Business Transformation",
    description: "Operational excellence, process optimisation, governance and organisation-wide transformation initiatives."
  },
  {
    icon: <Users size={34} className="text-[#D4A63A]" />,
    title: "Fractional Chief of Staff",
    description: "Strategic execution partner for founders and leadership teams, driving alignment, governance and execution."
  },
  {
    icon: <BrainCircuit size={34} className="text-[#D4A63A]" />,
    title: "AI & Analytics",
    description: "Practical AI adoption, executive dashboards, business intelligence and automation for better decisions."
  },
  {
    icon: <Target size={34} className="text-[#D4A63A]" />,
    title: "Board Advisory",
    description: "Board presentations, strategic planning, performance reviews and executive decision support."
  }
];

export default function StrategicLeadershipServices() {
  return (
    <section id="services" className="py-20" style={{background: "var(--green)"}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[4px] text-[#D4A63A] text-sm font-semibold">Services</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4">
            Advisory services built around business outcomes.
          </h2>
          <p className="mt-6 leading-8" style={{color: "rgba(255,255,255,0.75)"}}>
            I work alongside founders, investors and leadership teams to solve strategic, financial and operational challenges with measurable impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
              style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(200,157,60,0.2)"}}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-serif text-white text-2xl mb-4">{service.title}</h3>
              <p className="leading-7" style={{color: "rgba(255,255,255,0.75)"}}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
