import React from "react";

const cards = [
  {
    year: "2012-2015",
    tag: "Risk Management",
    icon: (
      // Chart/Bar-graph icon
      <span className="text-3xl bg-blue-50 text-blue-700 rounded-xl p-2">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="5" y="21" width="3" height="6" rx="1" fill="#2563eb" />
          <rect x="12" y="16" width="3" height="11" rx="1" fill="#2563eb" />
          <rect x="19" y="12" width="3" height="15" rx="1" fill="#2563eb" />
          <rect x="26" y="7" width="3" height="20" rx="1" fill="#2563eb" />
        </svg>
      </span>
    ),
    title: "Infrastructure Investment & Risk Management",
    company: "IDBI Bank Limited",
    highlight: "₹20Bn Projects Success",
    challenge:
      "Complex infrastructure project compliance requirements, regulatory risk management, and need for zero non-compliance across INR 20 Bn portfolio.",
    result: {
      primary: "Zero Non-compliance Penalties",
      secondary: "INR 400 Mn Additional Revenue",
    },
  },
  {
    year: "2022-2023",
    tag: "Marketing Strategy",
    icon: (
      // User/Management icon
      <span className="text-3xl bg-blue-50 text-blue-700 rounded-xl p-2">
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          <path d="M15.22 16.87A8.94 8.94 0 0 0 12 16c-2.5 0-4.71 1.06-6.21 2.87C6.62 21.74 9.22 23 12 23s5.38-1.26 6.21-3.13z"/>
        </svg>
      </span>
    ),
    title: "Strategic Marketing & Brand Transformation",
    company: "Noveltec Feeds Private Limited (Goldman Sachs)",
    highlight: "40% Brand Growth",
    challenge:
      "Low brand awareness in competitive market, declining customer engagement rates, and suboptimal customer retention affecting revenue growth.",
    result: {
      primary: "40% Brand Awareness Increase",
      secondary: "15% Customer Retention Improvement",
    },
  },
  {
    year: "2021-2022",
    tag: "Business Strategy",
    icon: (
      // Target icon
      <span className="text-3xl bg-blue-50 text-blue-700 rounded-xl p-2">
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill="#2563eb" />
          <path d="M20 20l-6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
    ),
    title: "Revenue Optimization & Business Transformation",
    company: "Srinivasa Farms Private Limited",
    highlight: "₹750M Value Creation",
    challenge:
      "Underperforming sales operations, operational bottlenecks limiting growth, and inefficient resource allocation across business units affecting profitability.",
    result: {
      primary: "INR 750 Mn Annual Savings",
      secondary: "75% Throughput Improvement",
    },
  },
  {
    year: "2024",
    tag: "Process Optimization",
    icon: (
      // Upward Arrow icon
      <span className="text-3xl bg-blue-50 text-blue-700 rounded-xl p-2">
        <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 17l6-6 6 6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
    ),
    title: "Operational Excellence Transformation",
    company: "Mahathi Infra Services Pvt Ltd",
    highlight: "₹50M+ Annual Savings",
    challenge:
      "Inefficient processes across 5 operational units leading to cost overruns and delayed project delivery; impacting overall organizational performance and client satisfaction.",
    result: {
      primary: "18% ROI Improvement",
      secondary: "30% Higher Return on Investment",
    },
  },
  {
    year: "2019-2021",
    tag: "Financial Strategy",
    icon: (
      // Dollar icon
      <span className="text-3xl bg-blue-50 text-blue-700 rounded-xl p-2">
        <svg height="28" width="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="#2563eb" strokeWidth="2"/>
          <text x="9" y="18" fontSize="12" fill="currentColor">$</text>
        </svg>
      </span>
    ),
    title: "Pricing Excellence & Data-Driven Strategy",
    company: "Srinivasa Farms Private Limited",
    highlight: "₹500M Revenue Growth",
    challenge:
      "Pricing inefficiencies impacting profitability margins, lack of data-driven pricing strategies, and operational losses affecting business sustainability.",
    result: {
      primary: "INR 500 Mn Revenue Impact",
      secondary: "INR 200 Mn Operational Loss Reduction",
    },
  },
];

export default function ProjectCards() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Executive Impact & Case Studies</h2>
        <div className="space-y-10">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-3 border transition hover:shadow-xl">
              <div className="flex items-center gap-4">
                {card.icon}
                <div>
                  <span className="inline-block text-xs bg-gray-100 text-slate-700 px-3 py-1 rounded-lg mr-2">{card.year}</span>
                  <span className="inline-block text-xs bg-gray-100 text-slate-700 px-3 py-1 rounded-lg mr-2">{card.tag}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                  <div className="text-lg text-slate-600">{card.company}</div>
                </div>
                <div className="text-xl font-bold text-green-700 sm:text-right">{card.highlight}</div>
              </div>
              <div className="mt-1">
                <span className="font-semibold text-slate-700 block mb-1">Executive Challenge</span>
                <span className="text-gray-600">{card.challenge}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <span className="font-semibold text-green-800 block mb-1">Primary Result</span>
                  <span className="text-lg font-bold text-green-900">{card.result.primary}</span>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <span className="font-semibold text-blue-800 block mb-1">Secondary Impact</span>
                  <span className="text-lg font-bold text-blue-900">{card.result.secondary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
