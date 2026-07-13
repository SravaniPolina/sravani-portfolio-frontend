import React from "react";
export default function DirectContact() {
  return (
    <section id="contact" className="py-16" style={{background: "var(--beige)"}}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-[36px] p-14 text-center" style={{background: "white", border: "1px solid rgba(13,59,46,0.15)"}}>
          <p className="uppercase tracking-[3px] text-sm font-semibold" style={{color: "var(--gold)"}}>Let's connect</p>
          <h2 className="font-serif text-5xl mt-4 mb-6" style={{color: "var(--green)"}}>Let's build something meaningful.</h2>
          <p className="max-w-2xl mx-auto text-lg mb-12" style={{color: "#3A3A3A"}}>Whether you're scaling a business, evaluating an investment, raising capital or transforming operations, I'd be happy to explore how I can help.</p>
          <div className="flex flex-wrap justify-center gap-5 mb-16">
            <a href="#consultation" className="primary-btn" style={{borderColor: "var(--green)", color: "var(--green)"}}>Book a Strategy Call</a>
            <a href="mailto:sravani.polina@iiml.org" className="secondary-btn" style={{borderColor: "rgba(13,59,46,0.3)", color: "#3A3A3A"}}>Email Me</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-10" style={{borderTop: "1px solid rgba(13,59,46,0.15)"}}>
            <div>
              <h3 className="mb-2 font-semibold" style={{color: "var(--gold)"}}>Email</h3>
              <p style={{color: "#3A3A3A"}}>sravani.polina@spgrwothadvisors.in</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold" style={{color: "var(--gold)"}}>Phone</h3>
              <p style={{color: "#3A3A3A"}}>+91 91330 91112</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold" style={{color: "var(--gold)"}}>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/sravani-polina" target="_blank" rel="noopener noreferrer" style={{color: "#3A3A3A"}} className="hover:text-[#0D3B2E] transition">linkedin.com/in/sravani-polina</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
