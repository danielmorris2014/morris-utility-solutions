export default function Logos() {
  // Put these files in /public/images/ (all lowercase, no spaces)
  const logos = [
    { name: "Municipal Electric", src: "/images/municipal-electric.png" },
    { name: "Fiber Contractor",  src: "/images/fiber-contractor.png" },
    { name: "Pipeline Ops",      src: "/images/pipeline-ops.png" },
    { name: "Utilities GC",      src: "/images/utilities-gc.png" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {logos.map((l) => (
        <div key={l.name} className="h-10 flex items-center opacity-80">
          <img
            src={l.src}
            alt={l.name}
            className="h-10 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
