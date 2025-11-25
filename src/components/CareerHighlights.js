import React from "react";

export default function CareerHighlights() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Career Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <span className="text-4xl font-bold text-slate-900 mb-2 block">7</span>
          <span className="text-lg text-slate-700">Organizations</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-slate-900 mb-2 block">6</span>
          <span className="text-lg text-slate-700">Leadership Roles</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-slate-900 mb-2 block">₹20Bn</span>
          <span className="text-lg text-slate-700">Projects Managed</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-slate-900 mb-2 block">15+</span>
          <span className="text-lg text-slate-700">Target Exceeded</span>
        </div>
      </div>
    </section>
  );
}
