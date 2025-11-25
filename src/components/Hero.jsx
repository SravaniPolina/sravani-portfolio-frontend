import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left: Main Text */}
        <div className="flex-1 lg:pr-12">
          <span className="inline-block px-4 py-2 mb-3 rounded-full bg-white border text-gray-700 font-medium">
            Strategic Business Leader
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2 leading-tight">
            Sravani <span className="block text-indigo-800">Polina</span>
          </h1>
          <h2 className="text-2xl font-light text-slate-700 mb-5">
            Transformation Architect | Results Driver
          </h2>
          {/* Justified summary section */}
          <p className="text-lg text-slate-700 mb-8 font-semibold text-justify">
           Think BIG, deliver bigger. Over 12 years leading transformations, scaling teams, and driving results in EPC, banking, and agribusiness; I've built value that sticks: ₹750M+, five business turnarounds, 75% leaps in efficiency, and real culture shifts everyone in the company can feel. 
  Whether it's jumping in with CEOs and Boards or rolling up my sleeves in PMO rooms, I make strategy actionable. My superpowers? Cutting through silos, making OKRs work in real life (not just slides), and rallying people behind growth. If you want someone who can decode analytics, spot cross-functional risks, and energize an org to move — let's have a chat.
          </p>
          {/* Executive Impact Summary Card */}
          <div className="bg-white border rounded-xl px-6 py-5 mb-6 w-full max-w-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Executive Impact Summary</h3>
            <div className="flex flex-wrap gap-5 text-slate-600 text-base">
              <span>₹750M+ Value Creation</span>
              <span>75% Efficiency Gains</span>
              <span>5 Business Transformations</span>
              <span>20% Cost Reductions</span>
            </div>
          </div>
        </div>
        {/* Right: Profile Photo (no badge) */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative">
            <img
              src="/Aragon-Headshot-70.jpg"
              alt="Sravani Polina"
              className="w-72 h-72 object-cover rounded-xl border-4 border-white shadow-lg"
            />
            {/* 20Bn badge removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
