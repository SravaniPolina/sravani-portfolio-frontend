import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-12 px-4 sm:px-8 bg-white scroll-smooth">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-slate-700 leading-relaxed text-justify mb-6 px-2 sm:px-6">
          I started my professional journey in banking, financing infrastructure projects at IDBI, then ICICI. I left to lead strategy and operations at an agribusiness organisation, then ran a Chief of Staff function across five business units at an EPC firm. Along the way I evaluated 110+ startups for an angel network and advised the Andhra Pradesh IT Ministry on startup ecosystem policy.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed text-justify mb-6 px-2 sm:px-6">
          Since 2025, I've been working independently: fractional CFO engagements, debt and M&amp;A advisory, PMO design, and an education programme I'm building from scratch.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed text-justify mb-10 px-2 sm:px-6">
          What I bring is the joined-up view. I can sit in a P&amp;L review in the morning, a PMO standup at noon, and a debt term-sheet negotiation in the evening, and tell you how the three are connected.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 mb-5">Education</h3>
          <div className="mb-5">
            <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">2012</span>
            <span className="font-bold">PGDM: Agri Business Management</span>
            <div className="text-gray-500 text-sm">IIM Lucknow</div>
          </div>
          <div className="mb-5">
            <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">2022</span>
            <span className="font-bold">Certificate Program: Business Analytics</span>
            <div className="text-gray-500 text-sm">IIM Kozhikode</div>
          </div>
          <div>
            <span className="bg-gray-100 text-xs px-2 py-1 rounded mr-2">2010</span>
            <span className="font-bold">B.Sc. Biological Sciences</span>
            <div className="text-gray-500 text-sm">Sri Venkateswara University, Tirupati</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 mb-5">Certifications</h3>
          <ul className="ml-2 space-y-3">
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Microsoft Power BI</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Tableau</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Power Query &amp; DAX</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Financial Modelling</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Generative AI Mastermind</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 mb-5">Languages</h3>
          <ul className="ml-2 space-y-3">
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>English</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Telugu</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Hindi</li>
            <li className="flex items-center text-lg text-gray-700"><span className="mr-3 text-indigo-500">&#9679;</span>Tamil</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
