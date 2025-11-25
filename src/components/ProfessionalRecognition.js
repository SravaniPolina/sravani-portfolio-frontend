import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

export default function ProfessionalRecognition() {
  return (
    <section id="recognition" className="py-16 px-4 sm:px-8 bg-white">
      {/* Top Stat Boxes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="rounded-2xl bg-gray-50 py-10 flex flex-col items-center shadow">
          <span className="text-4xl font-bold text-slate-900 mb-2">11+</span>
          <span className="text-lg text-slate-700 text-center">Years Strategic Leadership</span>
        </div>
        <div className="rounded-2xl bg-gray-50 py-10 flex flex-col items-center shadow">
          <span className="text-4xl font-bold text-slate-900 mb-2">₹1500M+</span>
          <span className="text-lg text-slate-700 text-center">
            Cumulative Business Impact
            <br />
            <span className="text-base text-slate-500">(Cost Optimization, Revenue, Capital Efficiency)</span>
          </span>
        </div>
        <div className="rounded-2xl bg-gray-50 py-10 flex flex-col items-center shadow">
          <span className="text-4xl font-bold text-slate-900 mb-2">Multi-Sector</span>
          <span className="text-lg text-slate-700 text-center">
            EPC • Agribusiness • Startup • Banking
          </span>
        </div>
      </div>

      {/* Major Achievements */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-2xl border p-7 shadow flex flex-col items-start">
          <span className="font-bold text-slate-900 mb-2">Built PMO Frameworks That Accelerate Execution</span>
          <span className="text-slate-700">
            Designed and deployed tailored Project Management Office systems that increased agility and on-time delivery across multiple business verticals.
          </span>
        </div>
        <div className="bg-white rounded-2xl border p-7 shadow flex flex-col items-start">
          <span className="font-bold text-slate-900 mb-2">Established Transparent Governance & Dashboards</span>
          <span className="text-slate-700">
            Brought transparency and accountability to leadership through innovative cadence meetings and live performance dashboards.
          </span>
        </div>
        <div className="bg-white rounded-2xl border p-7 shadow flex flex-col items-start">
          <span className="font-bold text-slate-900 mb-2">Influenced Senior Stakeholders Without Formal Authority</span>
          <span className="text-slate-700">
            Consistently aligned C-Suite and cross-functional teams to drive transformation, win buy-in, and deliver results beyond positional power.
          </span>
        </div>
        <div className="bg-white rounded-2xl border p-7 shadow flex flex-col items-start">
          <span className="font-bold text-slate-900 mb-2">Proven Adaptability Across Industries</span>
          <span className="text-slate-700">
            Delivered business impact in EPC, Agribusiness, Startups, and Banking—translating strategic vision to results in any context.
          </span>
        </div>
      </div>

      {/* Dark Band with Call to Action */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="rounded-2xl bg-slate-800 px-4 py-12 text-center flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">
              Experience Strategic Leadership Excellence
            </h3>
            <p className="text-lg text-slate-200 mb-6 md:mb-0">
              Join the executives who have benefited from strategic collaboration and transformational leadership.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-center flex-1">
            <Link
              to="/consultation"
              className="inline-block px-8 py-3 rounded-lg bg-white text-slate-800 font-semibold text-lg shadow hover:bg-slate-100 transition"
            >
              Schedule Executive Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
