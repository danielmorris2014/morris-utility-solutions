"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if ((data.get("company_website") as string)?.trim()) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to send");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot (hidden from humans) */}
      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input name="company" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">What are you trying to solve?</label>
        <select name="topic" className="mt-1 w-full rounded-xl border px-3 py-2">
          <option>Slow maps / heavy KMZ</option>
          <option>Ticketing integration (Irth / KorTerra / UtiliSphere)</option>
          <option>Hosted Feature Services / Web maps</option>
          <option>Offline Field Maps setup</option>
          <option>Print optimization & labeling</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="A couple of sentences is perfect." />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Attach sample files (optional)</label>
        <input
          type="file"
          name="files"
          multiple
          className="mt-1 block w-full rounded-xl border px-3 py-2"
          accept=".kmz,.kml,.shp,.zip,.cad,.dwg,.dxf,.pdf,.csv,.geojson,.tif,.tiff,.gpkg"
        />
        <p className="text-xs text-gray-500 mt-1">
          KMZ/SHP/CAD/PDF, up to ~25MB total is usually fine for an initial review.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        {status === "sent" && <span className="text-green-600 text-sm">Thanks — I’ll reply shortly.</span>}
        {status === "error" && <span className="text-red-600 text-sm">Error: {error}</span>}
      </div>

      <p className="text-xs text-gray-500">
        By sending this form you agree I can contact you about your request.
      </p>
    </form>
  );
}
