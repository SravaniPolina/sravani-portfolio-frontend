import React from "react";

const experience = [
  {
    period: "2025 – Present",
    role: "Independent Strategy Advisor",
    company: "Strategy • Capital Advisory • AI",
  },
  {
    period: "2024 – 2025",
    role: "Chief of Staff",
    company: "Mahathi Infra Services",
  },
  {
    period: "2021 – 2023",
    role: "Business Head & Head of Strategy",
    company: "Srinivasa Farms & Noveltech Feeds",
  },
  {
    period: "2018 – 2019",
    role: "Associate Director",
    company: "TiE Amaravati",
  },
  {
    period: "2012 – 2017",
    role: "Relationship Manager",
    company: "ICICI Bank & IDBI Bank",
  },
];

export default function ProfessionalJourney() {
  return (
    <section className="py-28" style={{background: "var(--background)"}}>

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
          EXPERIENCE
        </p>

       <h2 className="font-serif text-5xl text-white mt-4 mb-16">
          14+ years across strategy, finance and business transformation.
        </h2>

        <div className="relative">

          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--gold)] opacity-30"></div>

          <div className="space-y-12">

            {experience.map((item) => (

              <div key={item.period} className="relative pl-16">

                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-[var(--gold)]"></div>

                <p className="text-[var(--gold)] font-semibold mb-2">
                  {item.period}
                </p>

                <h3 className="font-serif text-2xl text-white mb-1">
                  {item.role}
                </h3>

                <p>{item.company}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
