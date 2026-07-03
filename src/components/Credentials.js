import React from "react";

export default function Credentials() {
  const credentials = [
    {
      logo: "/iim-lucknow.png",
      title: "IIM Lucknow",
      subtitle: "PGDM – Agribusiness Management",
    },
    {
      logo: "/iim-kozhikode.png",
      title: "IIM Kozhikode",
      subtitle: "Professional Certificate in Business Analytics",
    },
    {
      logo: "/genai-mastermind.webp",
      title: "GenAI Mastermind",
      subtitle: "Executive Program in Generative AI",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[36px] border border-[#C89D3C]/40 bg-[#111111] px-12 py-16">

          <div className="flex items-center justify-center gap-6 mb-14">

            <div className="h-px w-40 bg-[#C89D3C]/30"></div>

            <h3 className="text-[var(--gold)] uppercase tracking-[4px] text-sm font-semibold whitespace-nowrap">
              Academic & Professional Credentials
            </h3>

            <div className="h-px w-40 bg-[#C89D3C]/30"></div>

          </div>

          <div className="grid lg:grid-cols-3">

            {credentials.map((item, index) => (
              <div
                key={item.title}
                className={`text-center px-10 ${
                  index !== 2 ? "lg:border-r lg:border-[#C89D3C]/25" : ""
                }`}
              >
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-36 mx-auto object-contain mb-8 transition duration-300 hover:scale-105"
                />

                <h3 className="text-white text-4xl font-serif mb-5">
                  {item.title}
                </h3>

                <div className="flex items-center justify-center gap-3 mb-5">

                  <div className="h-px w-12 bg-[#C89D3C]/40"></div>

                  <div className="w-2 h-2 rounded-full bg-[#C89D3C]"></div>

                  <div className="h-px w-12 bg-[#C89D3C]/40"></div>

                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.subtitle}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
