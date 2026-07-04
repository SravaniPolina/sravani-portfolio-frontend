import React from "react";
import { BriefcaseBusiness, Landmark, TrendingUp, Users, BrainCircuit, Target } from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={30} className="text-[#D4A63A]" />,
    title: "Growth Strategy",
    description: "Business strategy, market expansion, operating models and growth roadmaps aligned with measurable outcomes."
  },
  {
    icon: <Landmark size={30} className="text-[#D4A63A]" />,
    title: "Capital & Deal Advisory",
    description: "Debt syndication, fundraising support, commercial due diligence and strategic transaction advisory."
  },
  {
    icon: <BriefcaseBusiness size={30} className="text-[#D4A63A]" />,
    title: "Business Transformation",
    description: "Operational excellence, process optimisation, governance and organisation-wide transformation initiatives."
  },
  {
    icon: <Users size={30} className="text-[#D4A63A]" />,
    title: "Fractional Chief of Staff",
    description: "Strategic execution partner for founders and leadership teams, driving alignment, governance and execution."
  },
  {
    icon: <BrainCircuit size={30} className="text-[#D4A63A]" />,
    title: "AI & Analytics",
    description: "Practical AI adoption, executive dashboards, business intelligence and automation for better decisions."
  },
  {
    icon: <Target size={30} className="text-[#D4A63A]" />,
    title: "Board Advisory",
    description: "Board presentations, strategic planning, performance reviews and executive decision support."
  }
];

export default function StrategicLeadershipServices() {
  return (
    <section
      id="services"
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url('/Financial Planning.jpg')` }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(13,59,46,0.92) 0%, rgba(13,59,46,0.85) 40%, rgba(10,22,16,0.93) 100%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[4px] text-[#D4A63A] text-sm font-semibold">Services</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4">
            Advisory services built around business outcomes.
          </h2>
          <p className="mt-6 leading-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            I work alongside founders, investors and leadership teams to solve strategic, financial and operational challenges with measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-7 backdrop-blur-md hover:-translate-y-2 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(212,166,58,0.35)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
              }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-serif text-white text-xl mb-3">{service.title}</h3>
              <p className="leading-7 text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
