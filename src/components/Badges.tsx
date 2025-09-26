"use client";
import Image from "next/image";
import { useState } from "react";

type Badge = {
  name: string;
  src: string;
  href?: string;
};

const BADGES: Badge[] = [
  { name: "ArcGIS Pro", src: "/badges/arcgis-pro.png", href: "https://www.esri.com/en-us/arcgis/products/arcgis-pro/" },
  { name: "ArcGIS Online", src: "/badges/arcgis-online.png", href: "https://www.esri.com/en-us/arcgis/products/arcgis-online/" },
  { name: "QGIS", src: "/badges/qgis.svg", href: "https://qgis.org" },
  { name: "Irth", src: "/badges/irth.svg", href: "https://irthsolutions.com" },
];

function BadgeLogo({ badge }: { badge: Badge }) {
  const [failed, setFailed] = useState(false);

  const content = failed ? (
    <div className="px-3 py-2 rounded-xl border bg-white text-gray-700 text-xs">
      {badge.name}
    </div>
  ) : (
    <Image
      src={badge.src}
      alt={badge.name}
      width={160}
      height={48}
      className="h-12 w-auto object-contain"
      onError={() => setFailed(true)}
      priority={false}
    />
  );

  return badge.href ? (
    <a
      href={badge.href}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-80 hover:opacity-100 transition"
      aria-label={badge.name}
      title={badge.name}
    >
      {content}
    </a>
  ) : (
    <div className="opacity-80">{content}</div>
  );
}

export default function Badges() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {BADGES.map((b) => (
            <BadgeLogo key={b.name} badge={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
