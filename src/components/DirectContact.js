import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">Work with me</h3>
      <p className="text-lg text-slate-600 text-center mb-12">Most engagements start with a 30-minute intro call to scope the problem.</p>

      <div className="flex justify-center mb-10">
        <a href="https://topmate.io/sravani_polina" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-lg bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition shadow">Book a 30-min call on Topmate</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Email</span>
          <a href="mailto:sravani.polina@iiml.org" className="text-slate-800 hover:text-indigo-700">sravani.polina@iiml.org</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">LinkedIn</span>
          <a href="https://www.linkedin.com/in/sravani-polina" target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-indigo-700">linkedin.com/in/sravani-polina</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Phone</span>
          <span className="text-slate-800">+91 91330 91112</span>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 mt-12">Based in Hyderabad. Working with clients across India.</p>
    </section>
  );
}
