"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Morris Utility Solutions" className="h-8 w-auto rounded-sm" />
          <span className="font-semibold text-[#003366] hidden sm:inline">Morris Utility Solutions</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="btn" style={{borderColor:'#003366', color:'#003366'}}>Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-2">
            <Link href="/services" className="nav-link" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="btn" style={{borderColor:'#003366', color:'#003366'}} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
