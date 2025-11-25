import React from "react";

export default function CareerHighlights() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Career Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <span className="text-4xl font-bold text-blue-700 block mb-2">7+</span>
          <span className="text-lg font-medium text-slate-700">Years Strategic Leadership</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-blue-700 block mb-2">₹1500M+</span>
          <span className="text-lg font-medium text-slate-700">Business Impact Created</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-blue-700 block mb-2">3</span>
          <span className="text-lg font-medium text-slate-700">Sectors Led (EPC, Banking, Agribusiness)</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-blue-700 block mb-2">100+</span>
          <span className="text-lg font-medium text-slate-700">Cross-functional Projects</span>
        </div>
      </div>
    </section>
  );
}
