import React from "react";

export default function StrategicLeadershipServices() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Strategic Leadership Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-xl p-8 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-blue-800 mb-3">Business Strategy & PMO</span>
          <p className="text-slate-700 mb-2">Design and drive organizational growth, implement PMO frameworks, and accelerate strategic execution across units.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-8 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-blue-800 mb-3">Operational Excellence</span>
          <p className="text-slate-700 mb-2">Establish governance cadences, build real dashboards, and deliver cost optimization, capital efficiency and value creation.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-8 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-blue-800 mb-3">Stakeholder Engagement</span>
          <p className="text-slate-700 mb-2">Align boards, executive teams, and field units for maximum business impact and organization-wide transformation.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-8 shadow flex flex-col items-start">
          <span className="text-xl font-bold text-blue-800 mb-3">Consultative Leadership Coaching</span>
          <p className="text-slate-700 mb-2">Unlock agility and leadership resilience among aspiring and established leaders.</p>
        </div>
      </div>
    </section>
  );
}
