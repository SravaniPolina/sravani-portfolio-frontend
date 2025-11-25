import React from "react";

export default function ExecutiveCTA() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800 rounded-2xl text-center py-12 px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Drive Similar Results?
          </h3>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Let's discuss how strategic leadership and operational excellence can transform your organization's performance.
          </p>
          <a
            href="#contact" // Change to mailto: or external link if needed!
            className="inline-block mt-2 px-8 py-3 rounded-lg bg-white text-slate-800 font-semibold text-lg shadow hover:bg-slate-100 transition"
          >
            Schedule Executive Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
