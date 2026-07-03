import React from "react";

const principles = [
  { num: "3", title: "One advisor, not a team behind a slide", description: "You get me, not a junior associate doing the work." },
  { num: "2", title: "Models you'll actually use", description: "Every spreadsheet I hand over is structured for the person who'll open it next month, not just for the deliverable." },
  { num: "1", title: "Tech-fluent foundation", description: "From Power BI dashboards to AI-driven analysis, I use the tools that deliver results 50% faster, without making them the headline." }
];

export default function LeadershipPhilosophy() {
  return (
    <section id="how" className="py-16 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex justify-center">
          <img
            src="/HowIWork_Pyramid.jpg"
            alt="How I work, built from the ground up: tech-fluent foundation, models you'll use, one accountable advisor"
            className="w-full max-w-5xl rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:hidden">
          <h2 className="text-3xl font-bold text-center mb-2">How I work</h2>
          <p className="text-sm text-slate-600 text-center mb-8">Built from the ground up.</p>
          <div className="space-y-4">
            {principles.map((p, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-800 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">{p.num}</div>
                <div>
                  <div className="font-bold text-indigo-800 text-base mb-1">{p.title}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">{p.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
