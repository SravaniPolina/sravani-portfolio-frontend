import React from "react";

export default function StatsCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10">
      {/* Years Leadership */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl shadow px-12 py-8 flex flex-col items-center w-[240px]">
        <span className="text-4xl font-bold text-blue-900 mb-2">11+</span>
        <span className="text-md font-medium text-blue-700">YEARS LEADERSHIP</span>
      </div>
      {/* Value Delivered */}
      <div className="bg-green-50 border border-green-100 rounded-xl shadow px-12 py-8 flex flex-col items-center w-[240px]">
        <span className="text-4xl font-bold text-green-900 mb-2">₹750M</span>
        <span className="text-md font-medium text-green-700">VALUE DELIVERED</span>
      </div>
      {/* C-Suite Ready */}
      <div className="bg-purple-50 border border-purple-100 rounded-xl shadow px-12 py-8 flex flex-col items-center w-[240px]">
        <span className="text-4xl font-bold text-purple-700 mb-2">C-Suite</span>
        <span className="text-md font-medium text-purple-500">READY EXECUTIVE</span>
      </div>
    </div>
  );
}
