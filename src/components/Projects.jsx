import React from "react";

export default function Projects() {
  // Add your own project list below!
  const projectList = [
    {
      name: "Chief of Staff @ Technique Solaire",
      desc: "Driving strategy and operations in renewable energy sector.",
    },
    {
      name: "Financial Analyst @ IDBI Bank Limited",
      desc: "Led infrastructure financing and operational excellence.",
    },
    {
      name: "Trading & Analysis",
      desc: "Developing skills on financial markets and agile investment strategies.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">Selected Projects</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projectList.map((proj, i) => (
            <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{proj.name}</h3>
              <p className="text-slate-600">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
