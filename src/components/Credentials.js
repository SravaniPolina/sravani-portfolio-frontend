import React from "react";
export default function Credentials() {
  const credentials = [
    { logo: "/iim-lucknow.png", title: "IIM Lucknow", subtitle: "PGDM – Agribusiness Management" },
    { logo: "/iim-kozhikode.png", title: "IIM Kozhikode", subtitle: "Professional Certificate in Business Analytics" },
    { logo: "/genai-mastermind.webp", title: "GenAI Mastermind", subtitle: "Executive Program in Generative AI" }
  ];
  return (
    <section id="credentials" className="py-12" style={{background: "var(--green)"}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl px-5 lg:px-8 py-10" style={{border: "1px solid rgba(200,157,60,0.3)", background: "rgba(255,255,255,0.06)"}}>
          <div className="flex items-center justify-center gap-3 lg:gap-6 mb-10">
            <div className="hidden sm:block h-px w-10 lg:w-32 bg-[#C89D3C]/30 flex-shrink-0"></div>
            <p className="text-[#C89D3C] uppercase tracking-[2px] lg:tracking-[4px] text-[11px] lg:text-xs font-semibold text-center px-1">
              Academic &amp; Professional Credentials
            </p>
            <div className="hidden sm:block h-px w-10 lg:w-32 bg-[#C89D3C]/30 flex-shrink-0"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-0">
            {credentials.map((item, index) => (
              <div key={item.title} className={`flex items-center gap-5 px-2 lg:px-8 py-4 ${index !== 2 ? "lg:border-r lg:border-[#C89D3C]/20" : ""}`}>
                <img src={item.logo} alt={item.title} className="h-14 w-14 object-contain flex-shrink-0 rounded-lg" style={{background: "transparent"}} />
                <div>
                  <h3 className="font-serif text-white text-xl leading-tight">{item.title}</h3>
                  <p className="text-sm mt-1" style={{color: "rgba(255,255,255,0.65)"}}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
