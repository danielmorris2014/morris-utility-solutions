export const metadata = { title: "About — Morris Utility Solutions" };

export default function AboutPage() {
  const stats = [
    { k: "10+ yrs", v: "Locating & GIS" },
    { k: "~$250", v: "Typical flat-rate utility update" },
    { k: "Sub-1s", v: "Target first draw on LTE" },
  ];

  const highlights = [
    {
      icon: "🧭",
      title: "Built by a locator",
      text:
        "I started in the field. Everything I ship is tuned for how crews actually work — quick reads, big labels, and zero drama offline.",
    },
    {
      icon: "🧱",
      title: "Feature Services done right",
      text:
        "Schemas, coded value domains, attachments, editor tracking, sync/replicas — set up clean so updates stay painless.",
    },
    {
      icon: "🌐",
      title: "Plays nice with your stack",
      text:
        "Custom web maps (AGOL/Portal), WMS/WFS/WMTS for non-Esri systems, and vector/tiles for tiny payloads.",
    },
    {
      icon: "🔌",
      title: "Ticketing integrations",
      text:
        "Irth, KorTerra, UtiliSphere ↔︎ Esri Feature Services. I prefer to implement the connection so it’s reliable day-to-day.",
    },
  ];

  const values = [
    { icon: "🗺️", title: "Field-first", text: "If it isn’t readable in the sun on an iPad, it isn’t done." },
    { icon: "⚡", title: "Performance", text: "Fast loads beat fancy. Vector tiles, view layers, indexing." },
    { icon: "📏", title: "Clarity", text: "Smart labels, industry colors, minimal clutter, consistent schemas." },
    { icon: "🤝", title: "Predictable", text: "Clear scope, flat-rate pricing, and friendly handoffs." },
  ];

  const tools = ["ArcGIS Online / Portal", "ArcGIS Pro", "QGIS", "Field Maps", "Irth", "KorTerra", "UtiliSphere", "WMS/WFS/WMTS", "Vector Tiles"];

  return (
    <main>
      {/* HERO */}
      <section className="hero-pattern text-white">
        <div className="container section">
          <h1 className="h1">About</h1>
          <p className="mt-4 text-white/90 max-w-2xl leading-relaxed">
            I’m Daniel Morris — a utility locator who learned GIS to fix a simple problem:
            <span className="font-medium"> get reliable, fast prints to the crew.</span> Everything I build is tuned
            for field realities first.
          </p>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="section">
        <div className="container grid sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.v} className="card text-center">
              <div className="text-2xl font-semibold text-[#003366]">{s.k}</div>
              <div className="mt-1 text-gray-700">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="section pt-0">
        <div className="container max-w-3xl">
          <div className="card">
            <h2 className="h3 text-[#003366]">A locator’s path into GIS</h2>
            <p className="mt-3 text-gray-700 leading-7">
              After years in the field, I kept running into the same blockers: heavy KMZs, unclear symbology,
              and prints that didn’t match reality. I started building my own tools — first to clean data, then to
              publish fast Feature Services and web maps that crews could trust. The result is Morris Utility Solutions:
              <span className="font-medium"> practical GIS that feels instant</span> and stays easy to maintain.
            </p>
            <p className="mt-4 text-gray-700 leading-7">
              Today I convert SHP/KMZ/CAD/PDF into locator-ready layers, wire up ticketing integrations, and keep
              monthly updates predictable. You get clear scopes, flat-rate pricing, and deliverables that work where
              it matters most — in the field.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">What I’m known for</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {highlights.map((h) => (
              <article key={h.title} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>{h.icon}</span>
                  <div className="flex-1">
                    <h3 className="h3 text-[#003366]">{h.title}</h3>
                    <p className="mt-2 text-gray-700">{h.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <h2 className="h3 text-[#003366] text-center">How I work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {values.map((v) => (
              <div key={v.title} className="card-plain">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>{v.icon}</span>
                  <div>
                    <h3 className="h3 text-[#003366]">{v.title}</h3>
                    <p className="mt-1 text-gray-700 text-sm">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLING (fun strip) */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="h3 text-[#003366]">Tools I reach for</h2>
          <p className="muted mt-2">I’ll pick what gets your team moving fastest — and keep it simple to maintain.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border text-sm"
                style={{ borderColor: "#dbe7f3", color: "#0d4d8a", background: "rgba(0,51,102,0.05)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT PERSONAL NOTE */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="card">
            <h2 className="h3 text-[#003366]">Off the clock</h2>
            <p className="mt-3 text-gray-700 leading-7">
              When I’m not tuning symbology, you’ll probably catch me testing label sizes in direct sun,
              sketching map layouts, or chasing down tiny performance wins. (Yes, I’m that person.)
            </p>
            <p className="mt-2 text-gray-700 leading-7">
              If you’ve got a gnarly dataset or a “this keeps crashing our tablets” story — I’m all ears.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="h2 text-[#003366]">Have a dataset or a problem to solve?</h2>
        </div>
        <div className="container text-center">
          <p className="mt-2 muted max-w-2xl mx-auto">
            Send a sample (KMZ, SHP, CAD/PDF). I’ll outline a simple plan and quote — no pressure.
          </p>
          <a href="/contact" className="btn btn-primary mt-6">Start a conversation</a>
          <p className="mt-2 text-sm text-gray-600">Typical turnaround: 3–5 business days</p>
        </div>
      </section>
    </main>
  );
}
