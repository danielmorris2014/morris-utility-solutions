"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-3 mb-3 rounded-2xl shadow-lg border bg-white p-3 flex items-center justify-between">
        <div className="text-sm">
          <div className="font-medium text-[#003366]">Ready to make maps feel instant?</div>
          <div className="text-gray-600">Send a sample or book a call.</div>
        </div>
        <Link href="/contact" className="btn btn-primary">Start</Link>
      </div>
    </div>
  );
}
