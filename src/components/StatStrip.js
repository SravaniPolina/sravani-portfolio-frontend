import React from "react";

const stats = [
  { value: "14+", label: "Years across banking, agribusiness, infrastructure, hospitality" },
  { value: "₹750M+", label: "Value delivered for clients" },
  { value: "110+", label: "Startups evaluated for angel investment" },
  { value: "₹20Bn", label: "Infrastructure debt structured" }
];

export default function StatStrip() {
  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-8 border-y">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">{s.value}</div>
            <div className="text-sm text-slate-600 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
