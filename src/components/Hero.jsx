import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[#0D3B2E] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="absolute right-0 top-0 w-[900px] h-[900px] opacity-20"
          style={{
            background:
              "radial-gradient(circle at 100% 50%, rgba(212,166,58,.18), transparent 70%)",
          }}
        />
      </div>

      {/* Gold Curves */}
      <svg
        className="absolute right-0 bottom-0 w-[900px] opacity-15"
        viewBox="0 0 900 700"
        fill="none"
      >
        {[0, 35, 70, 105, 140].map((i) => (
          <path
            key={i}
            d={`M900 ${650 - i} C650 ${600 - i},500 ${500 - i},250 ${
              650 - i
            }`}
            stroke="#D4A63A"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="max-w-7xl mx-auto px-8 lg:px-10 pt-12 pb-10 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="flex">

            <div className="w-[2px] bg-[#D4A63A] mr-8 rounded-full"></div>

            <div>

              <h1 className="font-serif text-white text-[28px] md:text-[36px] lg:text-[40px] leading-[1.18] font-normal max-w-[360px]">

                Helping businesses and leaders make better decisions,

                <br />

                <span className="text-[#D4A63A]">
                  build value,
                </span>{" "}
                and scale with clarity.

              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-[520px] leading-8">

                Strategy. Finance. Business Transformation. AI-enabled execution.

              </p>

              <div className="mt-8">

                <a
                  href="https://topmate.io/sravani_polina"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  LET'S CONNECT →
                </a>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-12 max-w-md">

                <div className="p-6 rounded-2xl" style={{background: "var(--beige)", border: "1px solid rgba(200,157,60,0.2)"}}>

                  <div className="gold-text font-serif text-4xl">
                    ₹750M+
                  </div>

                  <div className="mt-2 text-sm" style={{color: "#3A3A3A"}}>
                    Business Value Delivered
                  </div>

                </div>

                <div className="p-6 rounded-2xl" style={{background: "var(--beige)", border: "1px solid rgba(200,157,60,0.2)"}}>

                  <div className="gold-text font-serif text-4xl">
                    14+
                  </div>

                <div className="mt-2 text-sm" style={{color: "#3A3A3A"}}>
                    Years Experience
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-end">

            <img
              src="/Aragon-Headshot-70.jpg"
              alt="Sravani Polina"
              className="w-full max-w-[460px] rounded-[32px] object-cover border border-[#D4A63A]/20 shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
