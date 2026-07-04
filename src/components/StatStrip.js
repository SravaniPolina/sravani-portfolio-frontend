import React from "react";

const stats = [
  { number: "14+", label: "Years of Cross-Industry Leadership" },
  { number: "₹750M+", label: "Business Value Delivered" },
  { number: "₹20Bn", label: "Debt Structured" },
  { number: "110+", label: "Startups Evaluated" }
];

export default function StatStrip() {
  return (
    <section id="impact" className="py-16" style={{background: "var(--beige)"}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[3px] text-sm font-semibold" style={{color: "var(--gold)"}}>Impact</p>
          <h2 className="font-serif text-5xl mt-4" style={{color: "var(--green)"}}>Measurable business outcomes.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.number} className="rounded-3xl p-10 text-center" style={{background: "white", border: "1px solid rgba(13,59,46,0.12)"}}>
              <h3 className="font-serif text-5xl font-bold mb-4" style={{color: "var(--gold)"}}>{item.number}</h3>
              <p className="text-sm" style={{color: "#3A3A3A"}}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
