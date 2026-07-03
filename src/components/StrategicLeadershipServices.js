import React from "react";

const services = [
  { emoji: "📊", title: "Fractional CFO", desc: "Monthly MIS, budgets, cash flow, tax structuring. For founders who've outgrown their accountant but don't yet need a full-time CFO." },
  { emoji: "🏦", title: "Debt & Capital Advisory", desc: "Bank funding notes, lender pitch packs, debt syndication, term sheet review." },
  { emoji: "🤝", title: "M&A and Deal Diligence", desc: "Commercial and financial diligence for acquirers. Recent work: IT services and SaaS targets, private credit deals for NRI investors." },
  { emoji: "🎯", title: "Strategy & PMO", desc: "Strategic planning, OKR rollout, PMO setup, governance cadence. For organisations where the strategy deck exists but execution keeps slipping." },
  { emoji: "🎓", title: "Educational Program Design — FutureSmart", desc: "Curriculum, pitch decks, and program design for school and corporate learning. Financial Literacy and Cyber Security programs for Grades 8 to 10." }
];

export default function StrategicLeadershipServices() {
  return (
    <section id="services" className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex justify-center">
          <img
            src="/What-I-Do-Venn.jpg"
            alt="What I do: a Venn diagram showing services across Finance, Operations, and Strategy"
            className="w-full max-w-4xl rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:hidden">
          <h3 className="text-3xl font-bold text-center mb-3">What I do</h3>
          <p className="text-base text-slate-600 text-center mb-8">Finance, operations, and strategy: most engagements live where two or more overlap.</p>
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{s.emoji}</div>
                <div>
                  <div className="font-bold text-indigo-800 text-base mb-1">{s.title}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 italic mt-6">Most engagements run 3 to 6 months on retainer; some are scoped projects.</p>
        </div>
      </div>
    </section>
  );
}
