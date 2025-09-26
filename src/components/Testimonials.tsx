export default function Testimonials() {
  const items = [
    {
      quote: "Maps load instantly now. Our locators stopped screenshotting PDFs.",
      person: "Ops Manager, Midwestern Utility",
    },
    {
      quote: "Ticket → Feature Service link just works. Fewer calls from the field.",
      person: "GIS Lead, Regional Fiber",
    },
    {
      quote: "He turned a crashing KMZ into a clean web map in days.",
      person: "Contractor PM",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t) => (
        <figure key={t.person} className="card">
          <blockquote className="text-gray-800 leading-relaxed">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-gray-600">— {t.person}</figcaption>
        </figure>
      ))}
    </div>
  );
}
