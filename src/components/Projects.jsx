// src/components/Projects.jsx
import React from "react";

const sampleProjects = [
  {
    title: "EPC Project Tracker (Power BI & ERP)",
    desc: "Schedule L2–L6 tracking template for EPC projects, integrated with ERP and project controls.",
    link: "#",
  },
  {
    title: "Strategy Execution Dashboard",
    desc: "C-suite dashboard that converts strategy targets to OKRs and PMO execution view.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold">Selected projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sampleProjects.map((p, i) => (
            <article key={i} className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-gray-600">{p.desc}</p>
              <a href={p.link} className="mt-4 inline-block text-indigo-600">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
