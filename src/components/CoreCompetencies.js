import React from "react";

// Tag helper for consistent styling
const Tag = ({ children }) => (
  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium mr-2 mb-2">
    {children}
  </span>
);

export default function CoreCompetencies() {
  return (
    <section id="corecompetencies" className="py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Core Competencies</h2>
        <p className="max-w-3xl mx-auto text-center text-xl text-slate-700 mb-12 px-2 sm:px-6">
          Comprehensive expertise across strategic management, operational excellence, financial analysis, and business transformation—driving sustainable growth, efficiency, and cross-functional impact in every sector I've touched. I don’t just build plans; I deliver outcomes, optimize teams, and ensure results resonate across the organization.
        </p>
      </div>

      {/* Cards grid: stack on mobile, 3/2 cols on larger screens */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Business Strategy: Chart Icon */}
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="text-3xl bg-blue-100 text-blue-700 rounded-xl p-2 mr-3">
              {/* Chart Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="5" y="21" width="3" height="6" rx="1" fill="#2563eb" />
                <rect x="12" y="16" width="3" height="11" rx="1" fill="#2563eb" />
                <rect x="19" y="12" width="3" height="15" rx="1" fill="#2563eb" />
                <rect x="26" y="7" width="3" height="20" rx="1" fill="#2563eb" />
              </svg>
            </span>
            <h3 className="text-xl font-bold text-slate-900">Business Strategy</h3>
          </div>
          <div>
            <Tag>Revenue Management</Tag>
            <Tag>Competitive Analysis</Tag>
            <Tag>Market Expansion</Tag>
            <Tag>Stakeholder Management</Tag>
            <Tag>Data-Driven Planning</Tag>
            <Tag>OKR Implementation</Tag>
            <Tag>Opportunity Identification</Tag>
            <Tag>Trend Analysis</Tag>
            <Tag>Strategic Alignment</Tag>
          </div>
        </div>
        {/* Financial Management */}
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="text-3xl bg-green-100 text-green-700 rounded-xl p-2 mr-3">
              {/* Dollar/Money Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 22V2" strokeWidth={2}></path>
                <text x="9" y="18" fontSize="12" fill="currentColor">$</text>
              </svg>
            </span>
            <h3 className="text-xl font-bold text-slate-900">Financial Management</h3>
          </div>
          <div>
            <Tag>Budgeting</Tag>
            <Tag>Cost Management</Tag>
            <Tag>Financial Modeling</Tag>
            <Tag>Reporting Accuracy</Tag>
            <Tag>Variance Analysis</Tag>
            <Tag>Profit &amp; Loss (P&amp;L)</Tag>
            <Tag>Investment Analysis</Tag>
            <Tag>Financial Planning</Tag>
            <Tag>Risk Management</Tag>
          </div>
        </div>
        {/* Project & Program Management */}
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="text-3xl bg-purple-100 text-purple-700 rounded-xl p-2 mr-3">
              {/* Project/Tasks/Checklist Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="6" y="6" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 6V4c0-.552.447-1 1-1h4c.553 0 1 .448 1 1v2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <h3 className="text-xl font-bold text-slate-900">Project & Program Management</h3>
          </div>
          <div>
            <Tag>Project Optimization</Tag>
            <Tag>Process Improvement</Tag>
            <Tag>Agile Cadence</Tag>
            <Tag>PMO Governance</Tag>
            <Tag>Resource Allocation</Tag>
            <Tag>Cross-Functional Teams</Tag>
            <Tag>Risk Mitigation</Tag>
            <Tag>Performance Metrics</Tag>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Operations/Process Improvement */}
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="text-3xl bg-red-100 text-red-700 rounded-xl p-2 mr-3">
              {/* Gear Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 8.24l-7.19-.61L12 2 9.19 7.63 2 8.24l5.46 5.73L5.82 21z"></path></svg>
            </span>
            <h3 className="text-xl font-bold text-slate-900">Operations & Process Improvement</h3>
          </div>
          <div>
            <Tag>Operations Management</Tag>
            <Tag>Process Automation</Tag>
            <Tag>Supply Chain</Tag>
            <Tag>Performance Metrics</Tag>
            <Tag>Cost Reduction</Tag>
            <Tag>Change Management</Tag>
          </div>
        </div>
        {/* Technical Skills */}
        <div className="bg-white rounded-2xl shadow border py-8 px-7 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="text-3xl bg-blue-100 text-blue-700 rounded-xl p-2 mr-3">
              {/* Computer Icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="7" rx="2"></rect><path d="M7 20h10"></path></svg>
            </span>
            <h3 className="text-xl font-bold text-slate-900">Technical Skills</h3>
          </div>
          <div>
            <Tag>Data Visualization</Tag>
            <Tag>CRM Analytics</Tag>
            <Tag>Financial Reporting (Excel, Power BI, Tableau)</Tag>
            <Tag>Kite (Trading) Platform</Tag>
            <Tag>Spreadsheet Modelling</Tag>
            <Tag>Automation Tools</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}
