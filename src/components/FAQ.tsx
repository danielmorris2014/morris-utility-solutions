"use client";
import { useState } from "react";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "What data formats can you work with?",
    a: "Commonly SHP and KMZ. I also handle ArcGIS Pro/AGOL and QGIS projects, and can incorporate CAD/PDF/spreadsheet sources when needed.",
  },
  {
    q: "Can the maps/prints work offline?",
    a: "Yes. I deliver optimized print packages and map products that can be used without coverage. This is ideal for rural routes, oil pads, and areas with spotty service.",
  },
  {
    q: "Which ticketing platforms do you integrate with?",
    a: "Any platform that supports Esri Feature Services / ArcGIS Online. Common examples include Irth, KorTerra, and UtiliSphere. If your system can read AGOL services, I can wire it in.",
  },
  {
    q: "How does monthly maintenance work?",
    a: "You provide updated datasets or change notes. I reconcile changes, fix geometry/attributes, add missing lines, tune symbology, validate with your ticketing system and AGOL, and publish field-ready layers/prints.",
  },
  {
    q: "Do you support contractor crews, not just utilities?",
    a: "Yes. I optimize prints and symbology specifically for contractor workflows and build quick asset/pad indexes so crews move faster with fewer callbacks.",
  },
  {
    q: "What about training or IT support?",
    a: "I focus on GIS deliverables. For special implementations or custom workflows, I offer consultation to plan a clean rollout.",
  },
  {
    q: "How is pricing structured?",
    a: "Flat-rate monthly maintenance per utility company update, with clearly scoped quotes for custom projects. No hidden fees.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#003366]">FAQs</h3>
      <div className="mt-4 divide-y">
        {items.map((item, idx) => (
          <div key={item.q} className="py-3">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => setOpen((o) => (o === idx ? null : idx))}
              aria-expanded={open === idx}
            >
              <span className="font-medium text-gray-900">{item.q}</span>
              <svg
                className={`h-5 w-5 text-gray-500 transition-transform ${open === idx ? "rotate-180" : ""}`}
                viewBox="0 0 20 20" fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            <div
              className={`mt-2 text-sm text-gray-700 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
                open === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
