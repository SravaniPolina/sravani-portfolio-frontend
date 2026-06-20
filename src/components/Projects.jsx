import React from "react";

const cards = [
  {
    year: "Apr 2026 - present",
    tag: "Fractional CFO",
    title: "Financial backbone for a 3-property serviced apartment business",
    company: "Hospitality client, Hyderabad",
    highlight: "Engagement ongoing",
    problem: "An asset-light hospitality operator running three serviced apartment properties needed an integrated financial view (consolidated P&L, cash flow, DSCR) and was approaching key tax and funding thresholds without a model that could show the implications.",
    didItems: [
      "Built a five-year multi-property financial model covering P&L, cash flow, balance sheet, and DSCR",
      "Prepared the bank funding note for the third property",
      "Stress-tested tax structuring (Section 44AD vs. 44AB) under multiple growth scenarios",
      "Set up budget vs. actual trackers for the under-construction property"
    ],
    outcome: "Surfaced a Section 44AD threshold consideration in FY27 and a tight DSCR window in FY30 tied to bullet repayment. Both flagged early enough to inform structuring choices."
  },
  {
    year: "2019 - 2023",
    tag: "Business Strategy",
    title: "Pricing reset and operating model overhaul",
    company: "Agribusiness, Andhra Pradesh",
    highlight: "₹750M+ value creation",
    problem: "A poultry and feed business with operational losses, weak pricing discipline, and capex-heavy expansion plans.",
    didItems: [
      "Rebuilt the pricing engine and ran margin analysis by SKU and channel",
      "Led the shift to an asset-light contract farming model",
      "Retrained the sales team on margin-led selling",
      "Built dashboards for pricing sensitivity monitoring"
    ],
    outcome: "₹500M revenue impact through pricing alone. ₹200M operational loss reduction. 75% throughput improvement on a 90% lower capex base."
  },
  {
    year: "2024 - 2025",
    tag: "Strategy & PMO",
    title: "PMO setup across five business units",
    company: "Infrastructure EPC, Hyderabad",
    highlight: "18% ROI improvement",
    problem: "Five operating units, no shared cadence, capex decisions made in isolation, project delays cascading into cost overruns.",
    didItems: [
      "Designed a unified PMO framework across all five units",
      "Set up weekly project reviews with live dashboards",
      "Restructured capex governance and approval workflows",
      "Ran a cost-optimisation programme across all five units"
    ],
    outcome: "18% ROI improvement. 30% better capex allocation efficiency. 20% reduction in operational cost base. Frameworks remained in use post-engagement."
  },
  {
    year: "2018 - 2019",
    tag: "Deal Advisory",
    title: "Angel investment diligence at scale",
    company: "Startup ecosystem, Andhra Pradesh",
    highlight: "110+ startups evaluated",
    problem: "An angel network with deal flow but no structured way to evaluate or prioritise it.",
    didItems: [
      "Built and ran the diligence process for 110+ early-stage startups across sectors",
      "Designed evaluation scorecards and founder interview frameworks",
      "Presented investment recommendations to the investor panel",
      "Advised the Andhra Pradesh IT Ministry on startup ecosystem policy"
    ],
    outcome: "15% improvement in investment efficiency. 5 angel investors onboarded in the first quarter. Advisory engagement with the AP IT Ministry."
  },
  {
    year: "2012 - 2017",
    tag: "Debt & Capital",
    title: "Infrastructure project finance, ₹20Bn portfolio",
    company: "IDBI Bank & ICICI Bank, Hyderabad",
    highlight: "Zero non-compliance penalties",
    problem: "A ₹20Bn infrastructure portfolio with complex compliance requirements and tight regulatory oversight, plus a parallel SME book to manage.",
    didItems: [
      "Led financial diligence and ongoing monitoring across 15+ infrastructure projects",
      "Built a real-time compliance reporting system",
      "Managed a parallel SME book of 45+ clients totaling ₹3,000M AUM",
      "Developed comprehensive PSL strategy"
    ],
    outcome: "Zero non-compliance penalties across the portfolio. ₹400M additional revenue through fee income and NII. SME book exceeded targets by 15%."
  }
];

export default function ProjectCards() {
  return (
    <section id="impact" className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Selected Work</h2>
        <div className="space-y-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl p-7 border transition hover:shadow-xl">
              <div className="mb-4">
                <span className="inline-block text-xs bg-gray-100 text-slate-700 px-3 py-1 rounded-lg mr-2">{card.year}</span>
                <span className="inline-block text-xs bg-gray-100 text-slate-700 px-3 py-1 rounded-lg mr-2">{card.tag}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                  <div className="text-base text-slate-600 italic">{card.company}</div>
                </div>
                <div className="text-lg font-bold text-indigo-800 sm:text-right whitespace-nowrap">{card.highlight}</div>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-slate-900 block mb-1">The problem</span>
                <span className="text-gray-700">{card.problem}</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-slate-900 block mb-1">What I did</span>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {card.didItems.map((item, i) => (<li key={i}>{item}</li>))}
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 mt-2">
                <span className="font-semibold text-indigo-900 block mb-1">Outcome</span>
                <span className="text-gray-800">{card.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
