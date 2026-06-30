import React from "react";

const principles = [
  {
    title: "One advisor, not a team behind a slide",
    description: "You get me, not a junior associate doing the work."
  },
  {
    title: "Models you'll actually use",
    description: "Every spreadsheet I hand over is structured for the person who'll open it next month, not just for the deliverable."
  },
  {
    title: "Tech-fluent across the stack",
    description: "From Power BI dashboards to AI-driven analysis, I use the tools that deliver results 50% faster, without making them the headline."
  }
];

export default function LeadershipPhilosophy() {
  return (
    <section id="how" className="py-16 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">How I work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow border p-8 flex flex-col">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">{p.title}</h3>
              <p className="text-slate-700 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
