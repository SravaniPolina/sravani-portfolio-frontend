import React from "react";

export default function StrategicLeadershipServices() {
  const services = [
    {
      icon: (
        <svg width="28" height="28" stroke="#0f172a" fill="none"><circle cx="14" cy="14" r="10" strokeWidth="2"/><circle cx="14" cy="14" r="5" strokeWidth="2"/></svg>
      ),
      title: "C-Suite Advisory",
      desc: "Strategic planning, business transformation, organizational excellence"
    },
    {
      icon: (
        <svg width="28" height="28" stroke="#0f172a" fill="none"><path d="M4 17l6-6 6 6" strokeWidth="2"/></svg>
      ),
      title: "Interim Leadership",
      desc: "Chief of Staff, Business Head, Strategic Program Director roles"
    },
    {
      icon: (
        <svg width="28" height="28" stroke="#0f172a" fill="none"><circle cx="9" cy="12" r="4" strokeWidth="2"/><circle cx="19" cy="12" r="4" strokeWidth="2"/><path d="M4 22c0-2.21 3.58-4 8-4s8 1.79 8 4" strokeWidth="2"/></svg>
      ),
      title: "Transformation Consulting",
      desc: "Process optimization, performance management, operational excellence"
    },
    {
      icon: (
        <svg width="28" height="28" stroke="#0f172a" fill="none"><rect x="4" y="8" width="20" height="16" rx="4"/><rect x="8" y="4" width="12" height="4" rx="2"/></svg>
      ),
      title: "Board Advisory",
      desc: "Strategic oversight, governance, executive advisory services"
    }
  ];
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold mb-8">Strategic Leadership Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow px-6 py-6 flex items-center gap-4">
            <span className="bg-slate-800 text-white rounded-xl p-4">{s.icon}</span>
            <div>
              <div className="font-bold text-lg mb-2">{s.title}</div>
              <div className="text-slate-700">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
