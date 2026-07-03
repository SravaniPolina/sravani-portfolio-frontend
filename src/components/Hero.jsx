import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="absolute right-0 top-0 w-[900px] h-[900px] opacity-30"
          style={{
            background:
              "radial-gradient(circle at 100% 50%, rgba(212,166,58,.22), transparent 70%)",
          }}
        />
      </div>

      {/* Decorative Gold Lines */}
      <svg
        className="absolute right-0 bottom-0 w-[900px] opacity-20"
        viewBox="0 0 900 700"
        fill="none"
      >
        {[0, 30, 60, 90, 120, 150].map((i) => (
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

      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div className="flex">

            <div className="w-[3px] bg-[#D4A63A] mr-10 rounded-full"></div>

            <div>

              <h1 className="font-serif text-white leading-[1.22] font-normal text-[40px] lg:text-[50px] max-w-[500px]">

                Helping businesses and leaders

                <br />

                make better decisions,

                <br />

                <span className="text-[#D4A63A]">
                  build value,
                </span>

                {" "}and scale with clarity.

              </h1>

              <div className="mt-12">

                <a
                  href="https://topmate.io/sravani_polina"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-5 border border-[#D4A63A] rounded-xl px-10 py-5 text-[#D4A63A] uppercase tracking-[2px] text-lg hover:bg-[#D4A63A] hover:text-black transition"
                >
                  LET'S CONNECT

                  <span className="text-3xl">
                    →
                  </span>

                </a>

              </div>

              <div className="grid grid-cols-2 gap-6 mt-20 max-w-xl">

                <div className="glass p-8">

                  <div className="gold-text font-serif text-5xl">
                    ₹750M+
                  </div>

                  <div className="mt-3 text-gray-300">
                    Business Value Delivered
                  </div>

                </div>

                <div className="glass p-8">

                  <div className="gold-text font-serif text-5xl">
                    14+
                  </div>

                  <div className="mt-3 text-gray-300">
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
              className="w-full max-w-[560px] rounded-[40px] object-cover border border-[#D4A63A]/20 shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
