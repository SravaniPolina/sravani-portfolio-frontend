import React from "react";
import {
  Landmark,
  Fuel,
  Wheat,
  Hotel,
  Rocket,
  BrainCircuit
} from "lucide-react";

const industries = [
  {
    icon: <Landmark size={28} className="text-[#D4A63A]" />,
    industry: "Banking",
    scale: "₹20Bn+ Debt Structured",
    expertise:
      "Working Capital • Project Finance • Credit Underwriting • Risk Assessment • Debt Structuring",
  },
  {
    icon: <Fuel size={28} className="text-[#D4A63A]" />,
    industry: "Oil & Gas",
    scale: "5 Business Units",
    expertise:
      "Strategy • PMO • Governance • ERP • Cash Flow • Executive Reporting",
  },
  {
    icon: <Wheat size={28} className="text-[#D4A63A]" />,
    industry: "Agribusiness",
    scale: "₹750M+ Business Value",
    expertise:
      "Growth Strategy • Pricing • Sales Transformation • Operational Excellence",
  },
  {
    icon: <Hotel size={28} className="text-[#D4A63A]" />,
    industry: "Hospitality",
    scale: "Investor Ready Businesses",
    expertise:
      "Financial Models • MIS • Budgeting • Capital Raise • Revenue Optimisation",
  },
  {
    icon: <Rocket size={28} className="text-[#D4A63A]" />,
    industry: "Startups Ecosystem",
    scale: "110+ Startups Evaluated",
    expertise:
      "Business Models • GTM • Due Diligence • Investment Readiness",
  },
  {
    icon: <BrainCircuit size={28} className="text-[#D4A63A]" />,
    industry: "GenAI",
    scale: "Enterprise Decision Support",
    expertise:
      "Power BI • AI Adoption • Executive Dashboards • Automation",
  },
];

export default function Projects() {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-[#F7F3EB]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[3px] lg:tracking-[4px] text-sm text-center text-[#C89D3C] font-semibold">
          EXPERIENCE ACROSS INDUSTRIES
        </p>

        <h2 className="font-serif text-3xl lg:text-5xl text-center text-[#12352A] mt-5">
          Driving business outcomes across diverse sectors.
        </h2>

        <p className="max-w-4xl mx-auto text-center mt-8 text-base lg:text-lg leading-7 lg:leading-8 text-gray-700">
          My experience spans financial services, infrastructure,
          agribusiness, hospitality, startups and AI-led business
          transformation—bringing strategic thinking together with
          hands-on execution.
        </p>

        {/* MOBILE: stacked cards */}
        <div className="lg:hidden mt-12 space-y-5">
          {industries.map((item) => (
            <div
              key={item.industry}
              className="rounded-2xl p-6 bg-white border border-[#D4A63A]/20"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="font-semibold text-[#12352A] text-lg">{item.industry}</h3>
              </div>
              <p className="font-semibold text-[#C89D3C] mb-3">{item.scale}</p>
              <p className="text-sm text-gray-700 leading-6">{item.expertise}</p>
            </div>
          ))}
        </div>

        {/* DESKTOP: table */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-[#D4A63A]/20 mt-20">
          <table className="w-full">
            <thead className="bg-[#12352A] text-white">
              <tr>
                <th className="text-left p-6">Industry</th>
                <th className="text-left p-6">Scale</th>
                <th className="text-left p-6">Expertise</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((item) => (
                <tr
                  key={item.industry}
                  className="border-b border-[#D4A63A]/10 bg-white hover:bg-[#FCFAF5]"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <div className="font-semibold text-[#12352A]">{item.industry}</div>
                    </div>
                  </td>
                  <td className="p-6 font-semibold text-[#C89D3C]">
                    {item.scale}
                  </td>
                  <td className="p-6 text-gray-700">
                    {item.expertise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
