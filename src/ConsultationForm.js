import React from "react";

export default function ConsultationForm() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Request Executive Consultation</h2>
      <form className="bg-white rounded-xl shadow p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Executive Email" className="input" />
          <input type="text" placeholder="Company/Organization" className="input" />
          <input type="text" placeholder="Your Title/Position" className="input" />
        </div>
        <select className="input w-full mb-4">
          <option>Type of Consultation</option>
          <option>C-Suite Advisory</option>
          <option>Interim Leadership</option>
          <option>Transformation Consulting</option>
          <option>Board Advisory</option>
        </select>
        <textarea
          className="input w-full mb-4"
          rows={4}
          placeholder="Describe your strategic objectives, organizational challenges, and expected outcomes..."
        />
        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-900 transition"
        >
          Submit Executive Consultation Request &rarr;
        </button>
        <p className="text-xs text-slate-600 text-center mt-4">
          All communications are confidential and protected by executive privilege.
        </p>
      </form>
    </section>
  );
}
