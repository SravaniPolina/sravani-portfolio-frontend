import React from "react";

export default function DirectContact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#0D1E35] to-[#0A1628]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="glass rounded-[36px] p-14 text-center">

          <p className="uppercase tracking-[3px] text-[var(--gold)] text-sm font-semibold">
            LET'S CONNECT
          </p>

          <h2 className="font-serif text-5xl text-white mt-4 mb-6">
            Let's build something meaningful.
          </h2>

          <p className="max-w-2xl mx-auto text-lg mb-12">
            Whether you're scaling a business, evaluating an investment,
            raising capital or transforming operations, I'd be happy to
            explore how I can help.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-16">

            <a
              href="https://topmate.io/sravani_polina"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Book a Strategy Call
            </a>

            <a
              href="mailto:sravani.polina@iiml.org"
              className="secondary-btn"
            >
              Email Me
            </a>

          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-10">

            <div>
              <h4 className="text-[var(--gold)] mb-2">Email</h4>
              <p>sravani.polina@iiml.org</p>
            </div>

            <div>
              <h4 className="text-[var(--gold)] mb-2">Phone</h4>
              <p>+91 91330 91112</p>
            </div>

            <div>
              <h4 className="text-[var(--gold)] mb-2">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/sravani-polina"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--gold)]"
              >
                linkedin.com/in/sravani-polina
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
