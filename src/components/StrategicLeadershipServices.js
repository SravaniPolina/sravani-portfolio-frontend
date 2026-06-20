import React from "react";

export default function StrategicLeadershipServices() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">What I do</h3>
      <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">I take on engagements where the answer needs more than one lens: finance, operations, and strategy together. Most engagements run 3 to 6 months on retainer; some are scoped projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 rounded-xl p-7 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-indigo-800 mb-3">Fractional CFO</span>
          <p className="text-slate-700">Monthly MIS, budget vs. actual, multi-year financial models, cash flow planning, tax structuring. For founders who've outgrown their accountant but don't yet need a full-time CFO.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-7 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-indigo-800 mb-3">Debt &amp; Capital Advisory</span>
          <p className="text-slate-700">Bank funding notes, lender pitch packs, debt syndication, term sheet review. I've structured infrastructure debt at IDBI and now advise growth-stage businesses on the same.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-7 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-indigo-800 mb-3">M&amp;A and Deal Diligence</span>
          <p className="text-slate-700">Commercial and financial diligence for acquirers. Recent work: IT services and SaaS targets ($3 to $6M revenue), private credit deals for NRI investors.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-7 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-indigo-800 mb-3">Strategy &amp; PMO</span>
          <p className="text-slate-700">Strategic planning, OKR rollout, PMO setup, governance cadence. For organisations where the strategy deck exists but execution keeps slipping.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-7 shadow flex flex-col items-start md:col-span-2">
          <span className="text-xl font-bold text-indigo-800 mb-3">Educational Program Design: FutureSmart</span>
          <p className="text-slate-700">Curriculum, pitch decks, and program design for school and corporate learning. Currently building Financial Literacy and Cyber Security programs for Grades 8 to 10 under the FutureSmart brand.</p>
        </div>
      </div>
    </section>
  );
}
