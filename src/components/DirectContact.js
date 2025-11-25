import React from "react";

export default function DirectContact() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-10">Direct Contact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          {/* Email */}
          <span className="text-lg font-bold text-blue-700 mb-1">Email</span>
          <a href="mailto:sravani.polina@iiml.org" className="text-slate-700 underline">sravani.polina@iiml.org</a>
        </div>
        <div className="flex flex-col items-center">
          {/* LinkedIn */}
          <span className="text-lg font-bold text-blue-700 mb-1">LinkedIn</span>
          <a href="https://www.linkedin.com/in/sravani-polina" className="text-slate-700 underline" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/sravani-polina
          </a>
        </div>
        <div className="flex flex-col items-center">
          {/* Phone */}
          <span className="text-lg font-bold text-blue-700 mb-1">Phone</span>
          <span className="text-slate-700">+91-9133091112</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Location */}
          <span className="text-lg font-bold text-blue-700 mb-1">Location</span>
          <span className="text-slate-700">Hyderabad, India</span>
        </div>
      </div>
    </section>
  );
}
