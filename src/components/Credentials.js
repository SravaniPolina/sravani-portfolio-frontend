import React from "react";

export default function Credentials() {
  return (
    <section className="py-20 bg-[#0E0E0E] border-y border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="glass rounded-3xl p-12">

          <h3 className="text-center uppercase tracking-[3px] text-[var(--gold)] text-sm mb-12">
            Academic & Professional Credentials
          </h3>

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="text-center">
              <img
                src="/iim-lucknow-logo.png"
                className="h-20 mx-auto mb-6"
                alt="IIM Lucknow"
              />
              <h4 className="text-white text-2xl">
                IIM Lucknow
              </h4>
              <p className="mt-3">
                MBA – Agribusiness Management
              </p>
            </div>

            <div className="text-center">
              <img
                src="/iim-kozhikode-logo.png"
                className="h-20 mx-auto mb-6"
                alt="IIM Kozhikode"
              />
              <h4 className="text-white text-2xl">
                IIM Kozhikode
              </h4>
              <p className="mt-3">
                Business Analytics
              </p>
            </div>

            <div className="text-center">
              <img
                src="/genai-logo.png"
                className="h-20 mx-auto mb-6"
                alt="GenAI"
              />
              <h4 className="text-white text-2xl">
                GenAI Mastermind
              </h4>
              <p className="mt-3">
                Executive Program
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
