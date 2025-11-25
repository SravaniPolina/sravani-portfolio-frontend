import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white scroll-smooth">
      <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>
      <p className="max-w-4xl mx-auto text-center text-xl text-slate-700 mb-12">
        Result-oriented strategic manager with 11+ years of experience in roles of increasing responsibility, from Assistant Manager to Chief of Staff. Directed cross-functional teams to implement strategic initiatives encompassing Strategy development and Vision development, leading to a measurable results across companies. Expert in implementing process improvements and utilizing OKRs for Performance Management. Passionate about turning boardroom vision into execution to drive business transformation.
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
        {/* Education Box */}
        <div className="flex-1 bg-white rounded-2xl shadow border py-8 px-8">
          <div className="flex items-center mb-5">
            <span className="text-3xl bg-slate-100 text-slate-800 rounded-xl p-2 mr-4">
              {/* Mortar Board Icon */}
              <svg height="32" width="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 7L12 3 2 7l10 4 10-4zm0 6a9.77 9.77 0 01-10 6 9.77 9.77 0 01-10-6m10 8v-6"></path></svg>
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Education</h3>
          </div>
          <div className="mb-5">
            <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">Aug 2022</span>
            <span className="font-bold">Professional Certificate Program (e-MDP): Business Analytics</span>
            <div className="text-gray-500 text-sm">Indian Institute of Management - Kozhikode, Kerala</div>
          </div>
          <div>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">Mar 2012</span>
            <span className="font-bold">Post Graduate Diploma: Agribusiness Management</span>
            <div className="text-gray-500 text-sm">Indian Institute of Management - Lucknow, Uttar Pradesh</div>
          </div>
        </div>

        {/* Certifications Box */}
        <div className="flex-1 bg-white rounded-2xl shadow border py-8 px-8">
          <div className="flex items-center mb-5">
            <span className="text-3xl bg-slate-100 text-slate-800 rounded-xl p-2 mr-4">
              {/* Certificate Icon */}
              <svg height="32" width="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 16v4m8-4v4m-6-10a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4zm-8 4a4 4 0 108 0"></path></svg>
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
          </div>
          <ul className="ml-2 space-y-4">
            <li className="flex items-center text-lg text-gray-700">
              <span className="mr-3 text-indigo-500">&#9679;</span>
              Microsoft Power BI
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="mr-3 text-indigo-500">&#9679;</span>
              Tableau
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="mr-3 text-indigo-500">&#9679;</span>
              Power Query &amp; DAX
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
