import React from "react";

export default function StatsCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10">
      {/* Card 1 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl shadow flex flex-col items-center justify-center w-[300px] h-[220px]">
        <span className="text-5xl font-bold text-blue-900 mb-3">11+</span>
        <span className="text-lg font-semibold text-blue-700 mb-1">YEARS</span>
        <span className="text-lg font-semibold text-blue-700">LEADERSHIP</span>
      </div>
      {/* Card 2 */}
      <div className="bg-green-50 border border-green-200 rounded-xl shadow flex flex-col items-center justify-center w-[300px] h-[220px]">
        <span className="text-5xl font-bold text-green-900 mb-3">₹750M</span>
        <span className="text-lg font-semibold text-green-700 mb-2">VALUE DELIVERED</span>
      </div>
      {/* Card 3 */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl shadow flex flex-col items-center justify-center w-[300px] h-[220px]">
        <span className="text-5xl font-bold text-purple-700 mb-3">C-Suite</span>
        <span className="text-lg font-semibold text-purple-500">READY EXECUTIVE</span>
      </div>
    </div>
  );
}
