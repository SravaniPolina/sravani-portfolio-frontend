import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]">

      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--gold)] opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}

        <div>

          <span className="uppercase tracking-[4px] text-sm text-[var(--gold)] font-semibold">
            Independent Strategy Advisor
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl leading-tight">

            Strategy.

            <br />

            Execution.

            <br />

            <span className="gold-text">
              Transformation.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg">

            Helping founders, investors and business leaders turn complex
            business challenges into measurable business outcomes through
            strategy, finance, operational excellence and AI-enabled execution.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="https://topmate.io/sravani_polina"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Let's Talk
            </a>

            <a
              href="#impact"
              className="secondary-btn"
            >
              Explore My Work
            </a>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-16">

            <div className="glass p-6">

              <h3 className="text-4xl font-bold gold-text">

                ₹200M+

              </h3>

              <p className="mt-2 text-sm">

                Revenue Impact

              </p>

            </div>

            <div className="glass p-6">

              <h3 className="text-4xl font-bold gold-text">

                12+

              </h3>

              <p className="mt-2 text-sm">

                Years Experience

              </p>

            </div>

            <div className="glass p-6">

              <h3 className="text-4xl font-bold gold-text">

                80%

              </h3>

              <p className="mt-2 text-sm">

                CapEx Reduction

              </p>

            </div>

            <div className="glass p-6">

              <h3 className="text-4xl font-bold gold-text">

                110+

              </h3>

              <p className="mt-2 text-sm">

                Startups Evaluated

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <div className="absolute w-[420px] h-[420px] rounded-full bg-[var(--gold)] opacity-15 blur-3xl"></div>

          <img
            src="/Aragon-Headshot-70.jpg"
            alt="Sravani Polina"
            className="relative w-[360px] lg:w-[460px] rounded-[30px] shadow-2xl border border-white/10"
          />

        </div>

      </div>

    </section>
  );
}
