import React from "react";

export default function DirectContact() {
  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold mb-8">Direct Contact</h3>
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-white rounded-xl border p-5">
          <span className="bg-slate-800 text-white rounded-xl p-3">
            <svg width="28" height="28" stroke="#fff" fill="none"><rect x="4" y="8" width="20" height="12" rx="2" strokeWidth="2"/><path d="M4 8l10 6 10-6"/></svg>
          </span>
          <div>
            <div className="font-bold">Executive Email</div>
            <div className="text-slate-700">sravani.polina@iiml.org</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-xl border p-5">
          <span className="bg-slate-800 text-white rounded-xl p-3">
            <svg width="28" height="28" stroke="#fff" fill="none"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 5 5.18 2 2 0 0 1 7 3h2.09a2 2 0 0 1 2 1.72c.13 1.21.18 2.42.18 2.42a2 2 0 0 1-1.71 2c-1.09.13-2.18.27-3.27.41A2 2 0 0 0 3 7a2 2 0 0 0 3.72.21a19.72 19.72 0 0 1 11.1 11.1A2 2 0 0 0 17 21a2 2 0 0 0 3-1.72V16.92z" strokeWidth="2"/></svg>
          </span>
          <div>
            <div className="font-bold">Direct Line</div>
            <div className="text-slate-700">+91 9133091112</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-xl border p-5">
          <span className="bg-slate-800 text-white rounded-xl p-3">
            <svg width="28" height="28" stroke="#fff" fill="none"><circle cx="12" cy="10" r="3"/><path d="M12 13v9"/></svg>
          </span>
          <div>
            <div className="font-bold">Location</div>
            <div className="text-slate-700">Hyderabad, India (Available for Global Engagements)</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-xl border p-5">
          <span className="bg-slate-800 text-white rounded-xl p-3">
            <svg width="28" height="28" stroke="#fff" fill="none"><rect x="2" y="6" width="24" height="16" rx="4"/><circle cx="14" cy="10" r="1"/><circle cx="10" cy="15" r="1"/><circle cx="18" cy="15" r="1"/></svg>
          </span>
          <div>
            <div className="font-bold">Professional Network</div>
            <div className="text-slate-700">Connect on LinkedIn</div>
          </div>
        </div>
      </div>
    </section>
  );
}
