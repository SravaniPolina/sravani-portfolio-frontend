import React from "react";
import { Link } from "react-router-dom";

export default function ExecutiveCTA() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800 rounded-2xl text-center py-12 px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Drive Similar Results?
          </h3>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Let's discuss your organization's goals and how strategic leadership can deliver measurable outcomes.
          </p>
          <Link
            to="/consultation"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition"
          >
            Schedule Executive Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

