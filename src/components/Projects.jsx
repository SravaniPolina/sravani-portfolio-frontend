import React from "react";

export default function ProjectCards() {
  return (
    <section id="impact" className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img
            src="/Impact_Stat_Strip.jpg"
            alt="Impact at a glance: 5 engagements, ₹750M+ value created, ₹20Bn debt structured, 110+ startups evaluated, across hospitality, agribusiness, infrastructure, startups, and banking"
            className="w-full max-w-5xl rounded-2xl shadow border"
          />
        </div>
        <p className="text-center text-sm text-slate-500 italic mt-8">Detailed engagement notes available on request.</p>
      </div>
    </section>
  );
}
