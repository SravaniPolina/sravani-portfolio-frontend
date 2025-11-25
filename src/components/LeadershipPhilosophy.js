import React from "react";

export default function LeadershipPhilosophy() {
  return (
    <section id="leadership" className="py-16 px-4 sm:px-8 bg-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">Leadership Philosophy</h2>
        <p className="text-xl text-slate-600">
          Strategic leadership principles that drive organizational transformation, operational excellence, and sustainable competitive advantages.
        </p>
      </div>

      {/* Executive Leadership Approach */}
      <div className="max-w-3xl mx-auto mb-8 bg-white shadow rounded-2xl flex flex-col items-center py-8 px-6">
        <div className="flex flex-col items-center mb-4">
          <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
            {/* Quotation/Approach Icon */}
            <svg width="32" height="32" fill="none" stroke="currentColor"><path d="M11 12H7V21H15V12H11V8H17V21H25V12H21V8H27V21H29" stroke="#fff" strokeWidth="2" /></svg>
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Executive Leadership Approach</h3>
        </div>
        <p className="text-lg text-slate-700 font-medium text-center">
          My leadership philosophy centers on transformation through strategic thinking, operational excellence, and measurable results. I believe in empowering cross-functional teams, leveraging data-driven insights, and building sustainable competitive advantages that deliver long-term value for all stakeholders.
        </p>
        <h4 className="mt-6 text-xl font-semibold text-slate-900">Management Style</h4>
        <p className="text-lg text-slate-600 mt-2 text-center">
          Collaborative yet decisive, focusing on clear communication, accountability, and empowerment. I build high-performing teams by establishing clear objectives, providing strategic guidance, and fostering an environment of innovation and continuous improvement.
        </p>
      </div>

      {/* Leadership Competencies Card Row */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-3xl font-bold text-center mb-8">Executive Leadership Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Strategic Vision */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-start">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              {/* Target Icon */}
              <svg width="28" height="28" fill="none" stroke="currentColor"><circle cx="14" cy="14" r="10" stroke="#fff" strokeWidth="2" /><circle cx="14" cy="14" r="5" stroke="#fff" strokeWidth="2" /><circle cx="14" cy="14" r="2" fill="#fff" /></svg>
            </span>
            <h4 className="text-xl font-bold mb-4">Strategic Vision</h4>
            <ul className="text-slate-700 space-y-2 pl-4 list-disc">
              <li>Long-term strategic planning</li>
              <li>Market analysis and positioning</li>
              <li>Competitive advantage development</li>
              <li>Vision alignment across teams</li>
            </ul>
          </div>
          {/* Team Excellence */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-start">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              {/* Team Icon */}
              <svg width="28" height="28" fill="none" stroke="currentColor"><circle cx="9" cy="12" r="4" stroke="#fff" strokeWidth="2" /><circle cx="19" cy="12" r="4" stroke="#fff" strokeWidth="2" /><path d="M4 22c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#fff" strokeWidth="2" /></svg>
            </span>
            <h4 className="text-xl font-bold mb-4">Team Excellence</h4>
            <ul className="text-slate-700 space-y-2 pl-4 list-disc">
              <li>Cross-functional collaboration</li>
              <li>Talent development and mentoring</li>
              <li>Performance management systems</li>
              <li>Culture transformation</li>
            </ul>
          </div>
          {/* Results Delivery */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-start">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              {/* Upward Arrow */}
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17l6-6 6 6" /></svg>
            </span>
            <h4 className="text-xl font-bold mb-4">Results Delivery</h4>
            <ul className="text-slate-700 space-y-2 pl-4 list-disc">
              <li>Operational excellence frameworks</li>
              <li>Financial performance optimization</li>
              <li>Risk management and mitigation</li>
              <li>Continuous improvement culture</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Philosophy Pillars */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Results-Driven Excellence */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-center">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              <svg width="28" height="28" fill="none" stroke="#fff"><circle cx="14" cy="14" r="10" strokeWidth="2" /><circle cx="14" cy="14" r="5" strokeWidth="2" /><circle cx="14" cy="14" r="2" fill="#fff" /></svg>
            </span>
            <h5 className="text-lg font-bold mb-2 text-center">Results-Driven Excellence</h5>
            <p className="text-slate-700 text-center">
              Every strategic initiative must deliver measurable business impact with clear ROI and sustainable competitive advantages.
            </p>
          </div>
          {/* Data-Informed Decision Making */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-center">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              <svg width="28" height="28" fill="none"><rect x="6" y="16" width="3" height="6" rx="1" fill="#fff"/><rect x="13" y="10" width="3" height="12" rx="1" fill="#fff"/><rect x="20" y="4" width="3" height="18" rx="1" fill="#fff"/></svg>
            </span>
            <h5 className="text-lg font-bold mb-2 text-center">Data-Informed Decision Making</h5>
            <p className="text-slate-700 text-center">
              Leveraging analytics, business intelligence, and performance metrics to guide strategic choices and operational improvements.
            </p>
          </div>
          {/* Cross-Functional Collaboration */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-center">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              <svg width="28" height="28" fill="none"><circle cx="9" cy="12" r="4" stroke="#fff" strokeWidth="2" /><circle cx="19" cy="12" r="4" stroke="#fff" strokeWidth="2" /><path d="M4 22c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#fff" strokeWidth="2" /></svg>
            </span>
            <h5 className="text-lg font-bold mb-2 text-center">Cross-Functional Collaboration</h5>
            <p className="text-slate-700 text-center">
              Building consensus across departments, fostering innovation through diverse perspectives, and aligning stakeholder objectives.
            </p>
          </div>
          {/* Continuous Process Optimization */}
          <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col items-center">
            <span className="bg-slate-800 text-white rounded-xl p-4 mb-4">
              <svg width="28" height="28" fill="none" stroke="#fff"><path d="M4 22V6m0 0l16 16" strokeWidth="2" /></svg>
            </span>
            <h5 className="text-lg font-bold mb-2 text-center">Continuous Process Optimization</h5>
            <p className="text-slate-700 text-center">
              Identifying inefficiencies, implementing lean methodologies, and creating frameworks for sustained operational excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Impact Metrics */}
      <div className="max-w-6xl mx-auto mb-10">
        <h3 className="text-3xl font-bold text-center mb-8">Leadership Impact Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Years Leadership Experience */}
          <div className="bg-green-50 flex flex-col items-center rounded-2xl py-8 px-2">
            <span className="bg-green-100 rounded-xl p-4 mb-4">
              <svg width="32" height="32"><path d="M8 20l8-8 8 8" stroke="#16a34a" strokeWidth="2" /></svg>
            </span>
            <span className="text-3xl font-bold text-slate-900 mb-2">11+</span>
            <span className="text-lg text-slate-700 text-center">Years Leadership Experience</span>
          </div>
          {/* Teams Led */}
          <div className="bg-blue-50 flex flex-col items-center rounded-2xl py-8 px-2">
            <span className="bg-blue-100 rounded-xl p-4 mb-4">
              <svg width="32" height="32"><circle cx="12" cy="16" r="7" fill="#3b82f6" /><circle cx="24" cy="16" r="4" fill="#3b82f6" /></svg>
            </span>
            <span className="text-3xl font-bold text-slate-900 mb-2">50+</span>
            <span className="text-lg text-slate-700 text-center">Teams Led Across Industries</span>
          </div>
          {/* Value Created */}
          <div className="bg-purple-50 flex flex-col items-center rounded-2xl py-8 px-2">
            <span className="bg-purple-100 rounded-xl p-4 mb-4">
              <svg width="32" height="32"><circle cx="16" cy="16" r="8" fill="#a78bfa" /><circle cx="16" cy="16" r="4" fill="#fff" /></svg>
            </span>
            <span className="text-3xl font-bold text-slate-900 mb-2">₹750M</span>
            <span className="text-lg text-slate-700 text-center">Value Through Leadership</span>
          </div>
          {/* Business Transformations */}
          <div className="bg-orange-50 flex flex-col items-center rounded-2xl py-8 px-2">
            <span className="bg-orange-100 rounded-xl p-4 mb-4">
              <svg width="32" height="32"><rect x="8" y="20" width="4" height="8" fill="#f59e42" /><rect x="16" y="8" width="4" height="20" fill="#f59e42" /></svg>
            </span>
            <span className="text-3xl font-bold text-slate-900 mb-2">5</span>
            <span className="text-lg text-slate-700 text-center">Business Transformations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
