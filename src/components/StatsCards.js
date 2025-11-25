import React from "react";

export default function StatsCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-8">
      {/* Card 1 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl shadow flex flex-col items-center justify-center w-[220px] h-[140px]">
        <span className="text-3xl font-bold text-blue-900 mb-2">11+</span>
        <span className="text-base font-semibold text-blue-700">YEARS LEADERSHIP</span>
      </div>
      {/* Card 2 */}
      <div className="bg-green-50 border border-green-200 rounded-xl shadow flex flex-col items-center justify-center w-[220px] h-[140px]">
        <span className="text-3xl font-bold text-green-900 mb-2">₹750M</span>
        <span className="text-base font-semibold text-green-700">VALUE DELIVERED</span>
      </div>
      {/* Card 3 */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl shadow flex flex-col items-center justify-center w-[220px] h-[140px]">
        <span className="text-3xl font-bold text-purple-700 mb-2">C-Suite</span>
        <span className="text-base font-semibold text-purple-500">READY EXECUTIVE</span>
      </div>
    </div>
  );
}
