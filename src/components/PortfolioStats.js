import React from "react";

export default function PortfolioStats() {
  return (
   <section id="PortfolioStats" className="py-12 px-4 sm:px-8 bg-white">
  <section className="my-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <span className="text-4xl font-bold text-blue-700 mb-2 block">40+</span>
          <div className="text-lg text-slate-700 font-medium">Technical Skills</div>
        </div>
        <div>
          <span className="text-4xl font-bold text-green-700 mb-2 block">5</span>
          <div className="text-lg text-slate-700 font-medium">Core Domains</div>
        </div>
        <div>
          <span className="text-4xl font-bold text-purple-700 mb-2 block">11+</span>
          <div className="text-lg text-slate-700 font-medium">Years Applied</div>
        </div>
        <div>
          <span className="text-4xl font-bold text-orange-700 mb-2 block">₹1500M</span>
          <div className="text-lg text-slate-700 font-medium">Value Created</div>
        </div>
      </div>
    </section>
  );
}
