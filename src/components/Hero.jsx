import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      {/* Gold Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute right-0 top-0 w-[900px] h-[900px]"
          style={{
            background:
              "radial-gradient(circle at 100% 50%, rgba(212,166,58,.35), transparent 65%)",
          }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 pt-24 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="flex">

              <div className="w-[3px] bg-[#D4A63A] mr-8 rounded-full"></div>

              <div>

                <h1 className="font-serif leading-[1.1] text-white text-5xl lg:text-7xl">

                  Helping businesses and leaders

                  <br />

                  make better decisions,

                  <br />

                  <span className="text-[#D4A63A]">
                    build value,
                  </span>

                  {" "}and scale with clarity.

                </h1>

                <p className="mt-10 text-xl leading-9 text-gray-300 max-w-xl">

                  Strategy. Finance. Business Transformation.
                  AI-enabled execution.

                  Helping founders, investors and leadership
                  teams solve complex business challenges.

                </p>

                <div className="mt-12 flex gap-5 flex-wrap">

                  <a
                    href="https://topmate.io/sravani_polina"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn"
                  >
                    LET'S CONNECT →
                  </a>

                  <a
                    href="#projects"
                    className="secondary-btn"
                  >
                    EXPLORE MY WORK
                  </a>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-20">

                  <div className="glass p-8">

                    <h3 className="gold-text text-5xl font-serif">
                      ₹750M+
                    </h3>

                    <p className="mt-3 text-gray-300">
                      Business Value Delivered
                    </p>

                  </div>

                  <div className="glass p-8">

                    <h3 className="gold-text text-5xl font-serif">
                      14+
                    </h3>

                    <p className="mt-3 text-gray-300">
                      Years Experience
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src="/Aragon-Headshot-70.jpg"
              alt="Sravani Polina"
              className="w-full max-w-[560px] rounded-[36px] object-cover shadow-2xl border border-[#D4A63A]/20"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
