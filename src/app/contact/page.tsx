import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Morris Utility Solutions" };

export default function ContactPage() {
  return (
    <main>
      {/* HERO — upgraded */}
      <section className="hero-pattern text-white">
        <div className="container section">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: copy + CTAs */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs tracking-wide uppercase bg-white/10 px-3 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Field-first GIS help
              </span>

              <h1 className="h1 mt-4">
                Send a sample or <span className="opacity-90">book a quick call</span>
              </h1>

              <p className="mt-3 lead text-white/90 max-w-xl">
                I’ll review your data and reply with a simple plan & quote that makes
                your maps feel instant — even on mobile.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact-form" className="btn btn-primary">Request a plan & quote</a>
                <a href="#contact-calendar" className="btn btn-outline">Book a 15–30 min call</a>
              </div>

              {/* Trust chips */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">⏱️ Reply in ~1 business day</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">💵 Clear flat-rate pricing</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">🔒 Files kept private</span>
              </div>

              {/* Email chip */}
              <div className="mt-4 text-sm text-white/80">
                Prefer email?{" "}
                <a href="mailto:daniel@morrisutilitysolutions.com" className="underline">
                  daniel@morrisutilitysolutions.com
                </a>
              </div>
            </div>

            {/* RIGHT: decorative card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <div className="rounded-xl bg-white text-gray-900 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-[#003366]">Start a conversation</div>
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs text-gray-500">Typically replies in 1 day</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-gray-200 p-3">
                      <div className="text-sm font-medium">Upload sample</div>
                      <div className="mt-1 text-xs text-gray-600">KMZ, SHP, CAD/PDF</div>
                      <div className="mt-3 h-16 rounded-md border border-dashed grid place-content-center text-xs text-gray-500">
                        Drop files
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-3">
                      <div className="text-sm font-medium">Book a call</div>
                      <div className="mt-1 text-xs text-gray-600">15–30 min</div>
                      <div className="mt-3 h-16 rounded-md grid place-content-center bg-gray-50 text-xs text-gray-600">
                        Calendar preview
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <a href="#contact-form" className="btn btn-primary">Send request</a>
                    <a href="#contact-calendar" className="btn" style={{ borderColor: "#003366", color: "#003366" }}>
                      Pick a time
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + CALENDAR */}
      <section className="section bg-white">
        <div className="container grid lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div id="contact-form" className="card">
            <h2 className="h3 text-[#003366]">Request a plan & quote</h2>
            <p className="muted mt-1">
              Attach a data sample if you can — it speeds things up and helps me be precise.
            </p>
            <div className="mt-4">
              <ContactForm />
            </div>
            {/* Quick contact chips */}
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <a href="mailto:daniel@morrisutilitysolutions.com" className="px-3 py-1 rounded-full border">
                daniel@morrisutilitysolutions.com
              </a>
              <a href="tel:+1" className="px-3 py-1 rounded-full border">
                Call or text (mobile friendly)
              </a>
            </div>
          </div>

          {/* Right: Calendly */}
          <div id="contact-calendar" className="card">
            <h2 className="h3 text-[#003366]">Book a quick call</h2>
            <p className="muted mt-1">Prefer to talk it through? Pick a time that works for you.</p>

            <div className="mt-4 rounded-2xl overflow-hidden border">
              <iframe
                title="Schedule with M.U.S."
                src="https://calendly.com/danielmorrischs/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=003366"
                className="w-full"
                style={{ height: 660 }}
              />
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Can’t see the calendar?{" "}
              <a
                href="https://calendly.com/danielmorrischs/new-meeting"
                target="_blank"
                rel="noreferrer"
                className="underline text-[#003366]"
              >
                Open it directly →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TRUST/FAQ NUDGE */}
      <section className="section bg-gray-50">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { k: "10+ yrs", v: "Locating & GIS" },
            { k: "Sub-1s", v: "Target first draw on LTE" },
            { k: "~$250", v: "Typical flat-rate update" },
          ].map((s) => (
            <div key={s.v} className="card text-center">
              <div className="text-2xl font-semibold text-[#003366]">{s.k}</div>
              <div className="mt-1 text-gray-700">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="h3 text-[#003366]">Not sure what to send?</h2>
          <p className="muted max-w-2xl mx-auto mt-2">
            A note like “KMZs crashing iPads; need fast prints + Irth integration” is perfect. I’ll take it from there.
          </p>
          <a href="mailto:daniel@morrisutilitysolutions.com" className="btn btn-outline mt-4">
            Or email daniel@morrisutilitysolutions.com
          </a>
        </div>
      </section>
    </main>
  );
}
