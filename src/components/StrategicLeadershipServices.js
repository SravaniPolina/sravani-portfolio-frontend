import React from "react";
import { BriefcaseBusiness, Landmark, TrendingUp, Users, BrainCircuit, Target } from "lucide-react";

const featuredServices = [
  {
    icon: <Users size={36} className="text-[#D4A63A]" />,
    title: "Fractional CFO",
    description: "Strategic execution partner for founders and leadership teams, driving alignment, governance and execution."
  },
  {
    icon: <TrendingUp size={36} className="text-[#D4A63A]" />,
    title: "Growth Strategy",
    description: "Business strategy, market expansion, operating models and growth roadmaps aligned with measurable outcomes."
  },
  {
    icon: <Landmark size={36} className="text-[#D4A63A]" />,
    title: "Capital & Deal Advisory",
    description: "Debt syndication, fundraising support, commercial due diligence and strategic transaction advisory."
  }
];

const otherServices = [
  {
    icon: <BriefcaseBusiness size={30} className="text-[#D4A63A]" />,
    title: "Business Transformation",
    description: "Operational excellence, process optimisation, governance and organisation-wide transformation initiatives."
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
          <p className="mt-6 leading-8 text-justify" style={{ color: "rgba(255,255,255,0.8)" }}>
            I work alongside founders, investors and leadership teams to solve strategic, financial and operational challenges with measurable impact.
          </p>
        </div>

        {/* Featured: top 3 services */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-9 backdrop-blur-md hover:-translate-y-2 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(212,166,58,0.5)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-serif text-white text-2xl mb-3">{service.title}</h3>
              <p className="leading-7 text-sm text-justify" style={{ color: "rgba(255,255,255,0.82)" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Remaining services, smaller grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {otherServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-6 backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(212,166,58,0.25)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.2)"
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-serif text-white text-lg mb-2">{service.title}</h3>
              <p className="leading-6 text-xs text-justify" style={{ color: "rgba(255,255,255,0.75)" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
