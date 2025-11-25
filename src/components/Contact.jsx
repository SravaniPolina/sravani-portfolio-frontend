import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact</h2>
        <p className="mb-8 text-lg text-slate-700">
          Interested in working together or have a question?<br />
          Email me at <a href="mailto:sravani@email.com" className="text-indigo-700 underline">sravani@email.com</a>
        </p>
        <a
          href="mailto:sravani@email.com"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow"
        >
          Email Sravani
        </a>
      </div>
    </section>
  );
}
