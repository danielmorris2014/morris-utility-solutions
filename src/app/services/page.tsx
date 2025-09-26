import Link from "next/link";

export const metadata = { title: "Services — Morris Utility Solutions" };

type Item = {
  title: string;
  intro?: string;
  bullets: string[];
  badge?: string;
  icon?: string;
};

const core: Item[] = [
  {
    icon: "🛠️",
    title: "Monthly GIS Maintenance & QA",
    bullets: [
      "Keep data clean, updated, and locator-ready",
      "Fix bad geometry, missing lines, and attribute errors",
      "Verify Irth / KorTerra / UtiliSphere integrations before release",
    ],
    badge: "Flat rate ~ $250 / utility update",
  },
  {
    icon: "📇",
    title: "Asset Indexing & Field Info",
    bullets: [
      "Searchable indexes for pads, valves, meters, owners, hazards",
      "Deliver as GIS layers or lightweight custom tools (popups / sheets)",
      "Cut callbacks and field confusion",
    ],
  },
  {
    icon: "🗺️",
    title: "Map & Print Optimization",
    bullets: [
      "Convert SHP / KMZ / CAD / PDF → instant-loading, locator-ready layers",
      "Smart labeling, outdoor-readable colors, industry-standard symbology",
      "Remain compatible with ArcGIS Pro / QGIS print workflows",
    ],
  },
];

const webgis: Item[] = [
  {
    icon: "🧱",
    title: "Hosted Feature Services & Layer Design",
    bullets: [
      "Design schemas, coded value domains, and relationships",
      "Publish & manage Hosted Feature Layers (AGOL/Portal)",
      "Attachments, editor tracking, sync & replicas configured right",
    ],
  },
  {
    icon: "🗂️",
    title: "Custom Web Maps (AGOL / Portal)",
    bullets: [
      "Build clear web maps with smart popups & symbology",
      "Sharing & permissions for crews, contractors, and managers",
      "Content folders, item metadata, thumbnails & governance",
    ],
  },
  {
    icon: "🌐",
    title: "Standards-Based Services (WMS / WFS / WMTS)",
    bullets: [
      "Expose your data as WMS/WFS for non-Esri systems",
      "Publish WMTS tile caches for fast basemaps",
      "Vector tiles for crisp styling & tiny payloads",
    ],
  },
  {
    icon: "📶",
    title: "Offline & Field Maps (ArcGIS Field Maps)",
    bullets: [
      "Map Areas & offline packages for low-signal jobs",
      "Attachment rules (photos, forms) that crews actually use",
      "Sync settings tuned to avoid conflicts & bloat",
    ],
  },
  {
    icon: "⚡",
    title: "Performance, Security & Access",
    bullets: [
      "Indexes, scale-dependent rendering, and caching for speed",
      "Roles/groups, item-level permissions & view layers",
      "Health checks and ‘known good’ rollback points",
    ],
  },
];

const projects: Item[] = [
  {
    icon: "📊",
    title: "Asset Dashboards & QA Tools",
    bullets: [
      "Manager-friendly views for counts, condition, and QA checks",
      "Field-friendly layouts your team can maintain",
      "You keep owning inventory updates — I set up the system",
    ],
  },
  {
    icon: "🔌",
    title: "Ticketing System Integration",
    bullets: [
      "Connect Irth / KorTerra / UtiliSphere to Esri Feature Services",
      "Reliable sync & field performance",
      "Prefer to implement the connection so it’s done right",
    ],
  },
  {
    icon: "📦",
    title: "Legacy Data Migration",
    bullets: [
      "Move CAD / PDF / KMZ into a modern, maintainable GIS",
      "Normalize attributes & schemas for painless future updates",
      "Produce clean, versionable source layers",
    ],
  },
];

const consult: Item = {
  icon: "🧭",
  title: "Consulting & Workflow Optimization",
  intro:
    "I review how your team works today and find cheaper, more effective ways to get crews the maps and info they need — fast.",
  bullets: [
    "Assess current locating / GIS workflows and pain points",
    "Recommend practical changes (data structure, tools, process)",
    "Implement optimizations so field teams move faster with fewer headaches",
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="section">
        <div className="container max-w-4xl text-center">
          <h1 className="h2" style={{ color: "#003366" }}>Services</h1>
          <p className="mt-3 lead muted">
            Practical GIS built by a locator. I turn messy files into clear, field-ready maps and
            set up simple systems that crews and managers can rely on.
          </p>
        </div>
      </section>

      {/* CORE / RECURRING */}
      <section className="section pt-0">
        <div className="container">
          <h2 className="h3 text-[#003366] mb-4">Core &amp; Recurring</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {core.map((c) => (
              <article key={c.title} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>{c.icon}</span>
                  <div className="flex-1">
                    <h3 className="h3 text-[#003366]">{c.title}</h3>
                    <ul className="mt-3 text-sm text-gray-700 space-y-1">
                      {c.bullets.map((b) => <li key={b}>• {b}</li>)}
                    </ul>
                    {c.badge && (
                      <div
                        className="mt-4 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium"
                        style={{ borderColor: "#dbe7f3", color: "#0d4d8a", background: "rgba(0,51,102,0.05)" }}
                      >
                        {c.badge}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WEB GIS STACK */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="h3 text-[#003366] mb-4">Feature Services &amp; Web Maps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webgis.map((w) => (
              <article key={w.title} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>{w.icon}</span>
                  <div className="flex-1">
                    <h3 className="h3 text-[#003366]">{w.title}</h3>
                    {w.intro && <p className="mt-2 text-gray-700">{w.intro}</p>}
                    <ul className="mt-3 text-sm text-gray-700 space-y-1">
                      {w.bullets.map((b) => <li key={b}>• {b}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT-BASED */}
      <section className="section">
        <div className="container">
          <h2 className="h3 text-[#003366] mb-4">Project-Based &amp; One-Off</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>{p.icon}</span>
                  <div className="flex-1">
                    <h3 className="h3 text-[#003366]">{p.title}</h3>
                    <ul className="mt-3 text-sm text-gray-700 space-y-1">
                      {p.bullets.map((b) => <li key={b}>• {b}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section className="section bg-gray-50">
        <div className="container max-w-5xl">
          <article className="card">
            <div className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden>{consult.icon}</span>
              <div className="flex-1">
                <h3 className="h3 text-[#003366]">{consult.title}</h3>
                {consult.intro && <p className="mt-2 text-gray-700">{consult.intro}</p>}
                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  {consult.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container section text-center">
          <h2 className="h2 text-[#003366]">Have a dataset or a problem to solve?</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Send a sample (KMZ, SHP, CAD/PDF) and I’ll outline a simple plan and quote.
            Clear scope, predictable pricing, and field-ready deliverables.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
          </div>
          <p className="mt-2 text-sm text-gray-600">Typical turnaround: 3–5 business days</p>
        </div>
      </section>

      {/* WHAT YOU'LL GET */}
      <section className="bg-gray-50">
        <div className="container section text-center">
          <h2 className="h3 text-[#003366]">What You’ll Get</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Every engagement comes with clear deliverables so you know exactly what you’re paying for.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Clean, versionable GIS layers ready for ArcGIS/QGIS",
              "Hosted Feature Services configured with sync & attachments",
              "Custom Web Maps with smart popups & sharing set correctly",
              "WMS/WFS/WMTS endpoints or tile/vector-tile packages as needed",
              "Instant-loading print maps with smart labeling",
              "Asset/Pad indexes for crews and managers",
              "Simple dashboards to QA data & asset counts",
              "Integration setup for Irth / KorTerra / UtiliSphere",
              "Written summary + next steps for your team",
            ].map((item) => (
              <div key={item} className="card-plain">
                <span className="text-[#2ecc71] mr-2">✔</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
