import Link from "next/link";
import Badges from "@/components/Badges";
import Estimator from "@/components/Estimator";
import FAQ from "@/components/FAQ";
import TicketMapCompare from "@/components/TicketMapCompare";
import Logos from "@/components/Logos";
import Testimonials from "@/components/Testimonials";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  title: "Morris Utility Solutions — Instant-Feeling Utility Maps",
  description:
    "Heavy prints crash phones and stutter on desktops. I convert CAD/KMZ/SHP into instant-feeling, field-ready maps — Feature Services, custom web maps, WMS/WFS/WMTS, offline Field Maps.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO — cleaner, no giant logo */}
      <section className="hero-upgrade text-white">
        <div className="container section">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs tracking-wide uppercase bg-white/10 px-3 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Field-first GIS
              </span>

              <h1 className="h1 mt-4">
                Instant-feeling utility maps — <span className="opacity-90">even on mobile</span>
              </h1>

              <p className="mt-3 lead text-white/90 max-w-xl">
                Heavy prints crash phones and even stutter on desktops. I reshape your data, symbology, and services so maps
                <b> open fast</b> and <b> stay smooth</b> — right where crews need them.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
                <Link href="/services" className="btn btn-outline">See services</Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                <span className="chip">⏱️ Reply in ~1 business day</span>
                <span className="chip">💵 Clear flat-rate pricing</span>
                <span className="chip">🔒 Files kept private</span>
              </div>
            </div>

            {/* Decorative right card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                <div className="rounded-xl bg-white text-gray-900 p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-[#003366]">What changes after I optimize?</div>
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs text-gray-500">Fast & reliable</span>
                    </div>
                  </div>
                  <ul className="mt-3 text-sm text-gray-700 space-y-1">
                    <li>• Sub-1s first draw on LTE*</li>
                    <li>• Large, outdoor-readable labels</li>
                    <li>• Feature Services that don’t lag</li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-500">*Source/perf varies by device & network.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="section bg-white pt-8 pb-8">
        <div className="container text-center">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
            Trusted by teams across utilities & contractors
          </p>
          <Logos />
        </div>
      </section>

      {/* TECH STRIP on light band */}
      <section className="section bg-sky-50/50">
        <div className="container text-center">
          <p className="text-sm muted mb-4">Tech I work with</p>
          <Badges />
        </div>
      </section>

      {/* PROOF / STATS on white */}
      <section className="section pt-0 bg-white">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { k: "⟲ < 1s", v: "Typical first render on LTE*" },
            { k: "↓ 90%", v: "Payload size reduction" },
            { k: "3–5 days", v: "Typical turnaround" },
          ].map((s) => (
            <div key={s.v} className="card text-center">
              <div className="text-3xl font-semibold text-[#003366]">{s.k}</div>
              <div className="mt-1 text-gray-700">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="container mt-2">
          <p className="text-xs text-gray-500">
            *With optimized layers and cached tiles; actual performance depends on source data, network, and device.
          </p>
        </div>
      </section>

      {/* CAPABILITIES on subtle stone */}
      <section className="section bg-stone-50">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">Capabilities</h2>
          <p className="text-center muted max-w-3xl mx-auto mt-2">
            Hosted Feature Services, custom web maps, standards-based endpoints, and offline Field Maps —
            built to be fast, predictable, and easy for crews.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🧱",
                title: "Hosted Feature Services",
                bullets: ["Schemas & coded domains", "Attachments • editor tracking • sync/replicas"],
              },
              {
                icon: "🗂️",
                title: "Custom Web Maps (AGOL/Portal)",
                bullets: ["Smart popups & symbology", "Sharing/permissions for crews & contractors"],
              },
              {
                icon: "🌐",
                title: "WMS / WFS / WMTS",
                bullets: ["Non-Esri system support", "Tile & vector-tile publishing"],
              },
              {
                icon: "📶",
                title: "Offline Field Maps",
                bullets: ["Map Areas & offline packages", "Attachment rules crews actually use"],
              },
              {
                icon: "🔌",
                title: "Ticketing Integrations",
                bullets: ["Irth / KorTerra / UtiliSphere → Feature Services", "Reliable sync & field performance"],
              },
              {
                icon: "⚡",
                title: "Performance & Security",
                bullets: ["Indexes & caching", "Roles • groups • view layers • health checks"],
              },
            ].map((c) => (
              <article key={c.title} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>{c.icon}</span>
                  <div className="flex-1">
                    <h3 className="h3 text-[#003366]">{c.title}</h3>
                    <ul className="mt-3 text-sm text-gray-700 space-y-1">
                      {c.bullets.map((b) => <li key={b}>• {b}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn btn-primary">Get a quick plan & quote</Link>
            <p className="text-sm text-gray-600 mt-2">Send a sample (KMZ, SHP, CAD/PDF) — I’ll outline next steps.</p>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE — smaller with phone frame */}
      <section className="section bg-sky-50/50">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">How it feels in Field Maps</h2>
        </div>
        <div className="container">
          <p className="text-center muted max-w-3xl mx-auto mt-2">
            Same device, same network — just cleaner data and tuned symbology. Real iPhone recordings (no sound).
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Simple print */}
            <figure className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="h3 text-[#003366]">Simple print — instant & smooth</h3>
                <p className="mt-1 text-sm text-gray-600">Big labels, outdoor-readable colors.</p>
              </div>
              <div className="mt-4 video-75">
                <div className="aspect-[9/16] phone-frame">
                  <video
                    className="w-full h-full object-contain"
                    src="/videos/fieldmaps-simple.mp4"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    aria-label="Field Maps simple print demo"
                  />
                </div>
              </div>
            </figure>

            {/* Complex print */}
            <figure className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="h3 text-[#003366]">Complex print — still responsive</h3>
                <p className="mt-1 text-sm text-gray-600">Optimized Feature Services that don’t lag.</p>
              </div>
              <div className="mt-4 video-75">
                <div className="aspect-[9/16] phone-frame">
                  <video
                    className="w-full h-full object-contain"
                    src="/videos/fieldmaps-complex.mp4"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    aria-label="Field Maps complex print demo"
                  />
                </div>
              </div>
            </figure>
          </div>

          <div className="text-center mt-6">
            <Link href="/contact" className="btn btn-primary">Get a plan for your data</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-sky-50/50">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">What folks say</h2>
          <p className="text-center muted max-w-3xl mx-auto mt-2">Short and real outcomes from the field.</p>
          <div className="mt-6">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* TICKET + MAP COMPARE on white */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">From Empty Map to Integrated Utilities</h2>
          <p className="text-center muted max-w-3xl mx-auto mt-2">
            What locators actually see: ticket on the left, map on the right. Drag the bar — the ticket stays static; only the map changes.
          </p>
          <div className="mt-6">
            <TicketMapCompare
              ticketSrc="/images/ticket.png"
              mapBeforeSrc="/images/map-before.png"
              mapAfterSrc="/images/map-after.png"
              leftWidthPx={720}
              mapHeightPx={560}
              initial={50}
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      {/* ESTIMATOR on stone */}
      <section className="section bg-stone-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="h3 text-[#003366]">See the Time & Cost Impact</h2>
              <p className="mt-2 text-gray-700">
                Estimate how much time you’ll save per ticket with clean, optimized maps and a simple monthly update process.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="/contact" className="btn btn-primary">Request your custom plan</Link>
                <Link href="/services" className="btn" style={{ borderColor: "#003366", color: "#003366" }}>
                  Explore services
                </Link>
              </div>
            </div>
            <div className="card">
              <Estimator />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ on white */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">Questions I get a lot</h2>
          <p className="muted text-center max-w-2xl mx-auto mt-2">
            Short answers from a locator’s perspective. If you don’t see your question, just ask.
          </p>
          <div className="mt-6">
            <FAQ />
          </div>

          {/* FAQ Schema (JSON-LD) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How fast will my maps load?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "With optimized layers and cached tiles, first draw on LTE is typically under a second. Actual results vary by device, network, and source data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What ticketing systems can you integrate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Irth, KorTerra, and UtiliSphere into Esri Feature Services. I prefer to implement the connection to keep it reliable day-to-day."
                    }
                  }
                ]
              }),
            }}
          />
        </div>
      </section>

      {/* FINAL CTA — dark band */}
      <section className="section text-center final-cta">
        <div className="container">
          <h2 className="h2 text-white">Have a dataset or a problem to solve?</h2>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Send a sample (KMZ, SHP, CAD/PDF). I’ll outline a simple plan and quote — no pressure.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <StickyCTA />
    </main>
  );
}
