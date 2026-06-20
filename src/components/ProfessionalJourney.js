import React from "react";

const experiences = [
  {
    title: "Independent Strategy & Finance Advisor",
    company: "Self-employed",
    date: "2025 - present",
    location: "Hyderabad, India",
    items: [
      "Fractional CFO and financial modelling engagements with growth-stage businesses",
      "M&A and deal diligence for IT services, SaaS, and private credit transactions",
      "PMO and strategy design for multi-unit operating businesses",
      "Building FutureSmart, an educational programme brand for school students"
    ]
  },
  {
    title: "Chief of Staff",
    company: "Mahathi Infra Services Pvt Ltd",
    date: "Aug 2024 - May 2025",
    location: "Hyderabad, Telangana",
    items: [
      "Spearheaded cost optimization initiative across five operational units, improving ROI by 18%",
      "Conducted comprehensive analysis of capital expenditure budget yielding 30% higher ROI",
      "Streamlined operations by implementing new project management framework across 5 projects",
      "Transformed core business processes, reducing operational costs by 20%"
    ]
  },
  {
    title: "Commercial Strategy Manager",
    company: "Noveltech Feeds Private Limited (A Goldman Sachs company)",
    date: "Jun 2022 - Apr 2023",
    location: "Hyderabad, Telangana",
    items: [
      "Drove 40% Q1 revenue growth through targeted commercial strategy",
      "Implemented personalised customer offer system, enhancing retention by 15%",
      "Drove 30% increase in overall profit margins through optimised engagement"
    ]
  },
  {
    title: "Head of Strategy & Business Operations",
    company: "Srinivasa Farms Private Limited",
    date: "Aug 2019 - May 2023",
    location: "Hyderabad, Telangana",
    items: [
      "Led asset-light contract farming transformation with 90% capex reduction",
      "Drove pricing excellence programme with ₹500M revenue impact",
      "Led process optimisation resulting in 75% throughput gain and ₹750M annual savings",
      "Reduced operational losses by ₹200M through strategic interventions"
    ]
  },
  {
    title: "Associate Director, Angel Investments",
    company: "TiE Amaravati",
    date: "Jan 2018 - Jul 2019",
    location: "Vijayawada, Andhra Pradesh",
    items: [
      "Conducted due diligence of 110+ early-stage startups across sectors",
      "Led fundraising campaign attracting 5 angel investors in the first quarter",
      "Advised the Andhra Pradesh IT Ministry on startup ecosystem policy",
      "Managed 6 major investor events end to end"
    ]
  },
  {
    title: "Relationship Manager, Infrastructure Finance",
    company: "ICICI Bank & IDBI Bank",
    date: "Jun 2012 - Oct 2017",
    location: "Hyderabad, Telangana",
    items: [
      "Led financial diligence for ₹20Bn infrastructure projects with zero non-compliance penalties",
      "Managed portfolio of 45+ SME clients totalling ₹3,000M AUM, exceeding targets by 15%",
      "Generated additional ₹400M revenue through fee income and Net Interest Income",
      "Implemented real-time compliance reporting system across 15+ projects"
    ]
  }
];

export default function ProfessionalJourney() {
  return (
    <section id="journey" className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white border rounded-2xl shadow p-7">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                  <div className="text-base text-slate-700">{exp.company}</div>
                </div>
                <div className="text-sm text-slate-500 sm:text-right whitespace-nowrap">
                  <div>{exp.date}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <ul className="text-slate-700 ml-2 space-y-2 mt-3">
                {exp.items.map((item, i) => (
                  <li key={i} className="list-disc marker:text-indigo-600 ml-4">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
