import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="flex-1 lg:pr-12">
          <span className="inline-block px-4 py-2 mb-3 rounded-full bg-white border text-gray-700 font-medium text-sm">
            Strategy & Finance Advisor
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-3 leading-tight">
            Sravani Polina
          </h1>
          <h2 className="text-xl lg:text-2xl font-light text-slate-700 mb-5">
            Fractional CFO | Deal advisor | Strategy &amp; PMO.
          </h2>
          <p className="text-base lg:text-lg text-slate-700 mb-4 leading-relaxed">
            I work with founders and CEOs to provide financial guidance and on the problems that don't fit neatly into one function: financial models that need to inform real decisions, PMOs that need to actually deliver, and debt and deal structures that need to hold up under scrutiny.
          </p>
          <p className="text-sm text-slate-500 mb-8 hidden sm:block">
            14+ years across banking, agribusiness, infrastructure, and hospitality. IIM Lucknow. Based in Hyderabad, working with clients across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://topmate.io/sravani_polina" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition text-center">
              Book a 30-min intro call
            </a>
            <a href="#impact" className="inline-block px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition text-center">
              See recent work
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center mt-10 lg:mt-0">
          <img src="/Aragon-Headshot-70.jpg" alt="Sravani Polina" className="w-56 h-56 lg:w-72 lg:h-72 object-cover object-top rounded-xl border-4 border-white shadow-lg" />
        </div>
      </div>
    </section>
  );
}
