import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left: Main Info */}
        <div className="flex-1 lg:pr-12">
          {/* Role Badge */}
          <span className="inline-block px-4 py-2 mb-3 rounded-full bg-white border text-gray-700 font-medium">
            Strategic Business Leader
          </span>
          {/* Name & Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2 leading-tight">
            Sravani <span className="block text-indigo-800">Polina</span>
          </h1>
          <h2 className="text-2xl font-light text-slate-700 mb-5">
            Transformation Architect | Results Driver
          </h2>
          {/* Summary Section */}
          <p className="text-lg text-slate-700 mb-8 font-semibold">
            Results-driven strategic operations leader with 12+ years of cross-functional experience driving organizational transformation, strategic planning, and operational excellence across EPC, Banking, and Agribusiness sectors. Proven track record in establishing OKRs, leading PMO governance frameworks, working closely with CEO's and Board members as Chief of Staff executing high-impact initiatives that deliver measurable business outcomes. Expert at cross-functional coordination, stakeholder management, and translating strategic vision into actionable execution plans. Strong analytical capabilities with demonstrated success in scaling businesses, optimizing operations, and fostering organizational culture aligned with company values.
          </p>
          {/* Executive Impact Summary Card */}
          <div className="bg-white border rounded-xl px-6 py-5 mb-6 w-full max-w-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Executive Impact Summary</h3>
            <div className="flex flex-wrap gap-5 text-slate-600 text-base">
              <span>₹750M+ Value Creation</span>
              <span>75% Efficiency Gains</span>
              <span>5 Business Transformations</span>
              <span>20% Cost Reductions</span>
            </div>
          </div>
        </div>
        {/* Right: Profile Photo and Projects Badge */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative">
            <img
              src="/Aragon-Headshot-70.jpg"
              alt="Sravani Polina"
              className="w-72 h-72 object-cover rounded-xl border-4 border-white shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-4 py-2 rounded-xl font-bold text-lg shadow">
              ₹20Bn
              <div className="text-xs font-normal">Projects Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
