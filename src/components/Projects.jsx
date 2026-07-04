import React from "react";
import {
  Landmark,
  Building2,
  Wheat,
  Hotel,
  Rocket,
  BrainCircuit
} from "lucide-react";

const industries = [
  {
    icon: <Landmark size={28} className="text-[#D4A63A]" />,
    industry: "Banking & Financial Services",
    role: "Relationship Manager",
    scale: "₹20Bn+ Debt Structured",
    expertise:
      "Working Capital • Project Finance • Credit Underwriting • Risk Assessment • Debt Structuring",
  },
  {
    icon: <Building2 size={28} className="text-[#D4A63A]" />,
    industry: "Infrastructure & EPC",
    role: "Chief of Staff",
    scale: "5 Business Units",
    expertise:
      "Strategy • PMO • Governance • ERP • Cash Flow • Executive Reporting",
  },
  {
    icon: <Wheat size={28} className="text-[#D4A63A]" />,
    industry: "Agribusiness",
    role: "Business Head",
    scale: "₹750M+ Business Value",
    expertise:
      "Growth Strategy • Pricing • Sales Transformation • Operational Excellence",
  },
  {
    icon: <Hotel size={28} className="text-[#D4A63A]" />,
    industry: "Hospitality",
    role: "Fractional CFO",
    scale: "Investor Ready Businesses",
    expertise:
      "Financial Models • MIS • Budgeting • Capital Raise • Revenue Optimisation",
  },
  {
    icon: <Rocket size={28} className="text-[#D4A63A]" />,
    industry: "Startup Ecosystem",
    role: "Investment Advisor",
    scale: "110+ Startups Evaluated",
    expertise:
      "Business Models • GTM • Due Diligence • Investment Readiness",
  },
  {
    icon: <BrainCircuit size={28} className="text-[#D4A63A]" />,
    industry: "AI & Analytics",
    role: "Strategy Consultant",
    scale: "Enterprise Decision Support",
    expertise:
      "Power BI • AI Adoption • Executive Dashboards • Automation",
  },
];

const stats = [
  "14+ Years",
  "₹20Bn+ Debt",
  "₹750M+ Value",
  "110+ Startups",
  "6 Industries",
  "5 Leadership Roles",
];

export default function Projects() {
  return (
    <section id="industries" className="py-24 bg-[#F7F3EB]">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[4px] text-sm text-center text-[#C89D3C] font-semibold">
          EXPERIENCE ACROSS INDUSTRIES
        </p>

        <h2 className="font-serif text-5xl text-center text-[#12352A] mt-5">
          Driving business outcomes across diverse sectors.
        </h2>

        <p className="max-w-4xl mx-auto text-center mt-8 text-lg leading-8 text-gray-700">
          My experience spans financial services, infrastructure,
          agribusiness, hospitality, startups and AI-led business
          transformation—bringing strategic thinking together with
          hands-on execution.
        </p>

        <div className="overflow-hidden rounded-3xl border border-[#D4A63A]/20 mt-20">

          <table className="w-full">

            <thead className="bg-[#12352A] text-white">

              <tr>

                <th className="text-left p-6">Industry</th>

                <th className="text-left p-6">Role</th>

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

                      <div className="font-semibold">
                        {item.industry}
                      </div>

                    </div>

                  </td>

                  <td className="p-6">
                    {item.role}
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

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 mt-16">

          {stats.map((item) => (

            <div
              key={item}
              className="bg-white rounded-2xl p-6 text-center border border-[#D4A63A]/15 font-semibold text-[#12352A]"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
