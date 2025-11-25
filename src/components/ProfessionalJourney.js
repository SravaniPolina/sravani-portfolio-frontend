import React from "react";

const experiences = [
  {
    title: "Chief of Staff",
    company: "Mahathi Infra Services Pvt Ltd",
    date: "Aug 2024 - May 2025",
    location: "Hyderabad, Telangana",
    items: [
      "Spearheaded cost optimization initiative across five operational units improving ROI by 18%",
      "Conducted comprehensive analysis of capital expenditure budget yielding 30% higher ROI",
      "Streamlined operations by implementing new project management framework across 5 projects",
      "Transformed core business processes reducing operational costs by 20%"
    ]
  },
  {
    title: "Head Marketing",
    company: "Noveltec Feeds Private Limited (A Goldman Sachs company)",
    date: "Jun 2022 - Apr 2023",
    location: "Hyderabad, Telangana",
    items: [
      "Developed targeted marketing strategies increasing brand awareness by 40%",
      "Implemented personalized customer offer system enhancing retention by 15%",
      "Drove 30% increase in overall profit margins through optimized engagement"
    ]
  },
  {
    title: "Business Head",
    company: "Srinivasa Farms Private Limited",
    date: "Jun 2021 - May 2022",
    location: "Hyderabad, Telangana",
    items: [
      "Leveraged CRM analytics increasing sales team productivity by 30%",
      "Masterminded customer loyalty program boosting repeat purchase rate by 35%",
      "Led process optimization initiatives resulting in 75% throughput gain and INR 750 Mn savings"
    ]
  },
  {
    title: "Executive Assistant to MD",
    company: "Srinivasa Farms Private Limited",
    date: "Aug 2019 - Jun 2021",
    location: "Hyderabad, Telangana",
    items: [
      "Drove pricing excellence program with INR 500 Mn revenue impact",
      "Led strategic decision-making for INR 500 Mn revenue impact",
    ]
  },
  {
    title: "Associate Director",
    company: "TiE Amaravati",
    date: "Jan 2018 - Jul 2019",
    location: "Vijayawada, Andhra Pradesh",
    items: [
      "Managed operational aspects of 6 major events ensuring seamless execution",
      "Conducted due diligence of 110+ early-stage startups increasing investment efficiency by 15%",
      "Led fundraising campaign attracting 5 angel investors within first week"
    ]
  },
  {
    title: "Senior Banking Professional",
    company: "BFSI Sector Leadership (ICICI Bank & IDBI Bank)",
    date: "Jun 2012 - Oct 2017",
    location: "Hyderabad, Telangana",
    items: [
      "Led financial diligence for INR 20 Bn infrastructure projects with zero non-compliance penalties",
      "Managed portfolio of 45+ SME clients totaling INR 3,000 Mn AUM, exceeding targets by 15%",
      "Generated additional INR 400 Mn revenue through fee income and Net Interest Income",
      "Developed comprehensive PSL strategy resulting in INR 200 Mn portfolio expansion",
      "Implemented real-time reporting system ensuring adherence across 15+ projects"
    ]
  }
];

export default function ProfessionalJourney() {
  return (
    <section id="journey" className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Professional Journey</h2>
        <p className="text-xl text-slate-600">
          A progressive career path showcasing growth in strategic leadership roles across diverse industries and organizations.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-slate-200 rounded"></div>
        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 bg-slate-800 rounded-full h-3 w-3 z-20"></div>
              <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} z-10`}>
                <div className="bg-white border rounded-2xl shadow-xl p-8 w-full max-w-xl">
                  <div className="flex items-center mb-4">
                    <span className="bg-slate-800 text-white rounded-xl p-3 mr-4">
                      {/* Briefcase icon */}
                      <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2"><rect x="8" y="12" width="16" height="12" rx="3" /><rect x="12" y="8" width="8" height="4" rx="1" /></svg>
                    </span>
                    <div>
                      <div className="text-xl font-bold">{exp.title}</div>
                      <div className="text-slate-700">{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-3 text-sm">
                    <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded text-slate-700">
                      <svg width="16" height="16" fill="none" stroke="#555" className="mr-1"><rect x="2" y="4" width="12" height="10" rx="2" /><path d="M2 8h12" /></svg>
                      {exp.date}
                    </span>
                    <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded text-slate-700">
                      <svg width="16" height="16" fill="none" stroke="#555" className="mr-1"><circle cx="8" cy="8" r="6" /><circle cx="8" cy="8" r="2" /></svg>
                      {exp.location}
                    </span>
                  </div>
                  <ul className="text-slate-800 ml-2 space-y-2">
                    {exp.items.map((item, i) => (
                      <li key={i} className="list-disc marker:text-indigo-600 ml-4">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Spacer on opposite side for responsive balance */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
