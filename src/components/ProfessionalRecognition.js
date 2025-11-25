import React from "react";

export default function ProfessionalRecognition() {
  return (
    <section id="recognition" className="py-16 px-4 sm:px-8 bg-white">
      {/* Top Stat Boxes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="rounded-2xl bg-gray-50 py-10 flex flex-col items-center shadow">
          <span className="text-4xl font-bold text-slate-900 mb-2">11+</span>
          <span className="text-lg text-slate-700 text-center">Years Strategic Leadership</span>
        </div>
        <div className="rounded-2xl bg-gray-50 py-10 flex flex-col items-center shadow">
          <span className="text-4xl font-bold text-slate-900 mb-2">₹1500M+</span>
          <span className="text-lg text-slate-700 text-center">Verified Value Creation</span>
        </div>
        <div className="rounded-2xl bg-gray-50 py-10 flex flex-col items-center shadow">
          <span className="text-4xl font-bold text-slate-900 mb-2">LinkedIn</span>
          <span className="text-lg text-slate-700 text-center">Authenticated Profile</span>
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
              Join the executives who have benefited from strategic collaboration and transformational results.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-center flex-1">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-white text-slate-800 font-semibold text-lg shadow hover:bg-slate-100 transition"
            >
              Schedule Executive Meeting
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-id/recommendations" // insert your LinkedIn recommendations link
              className="inline-block px-8 py-3 rounded-lg bg-slate-700 text-white font-semibold text-lg hover:bg-slate-600 transition"
              target="_blank" rel="noopener noreferrer"
            >
              View LinkedIn Recommendations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
