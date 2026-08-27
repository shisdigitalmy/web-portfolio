"use client";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/", label: "Utama" },
  { href: "/perkhidmatan", label: "Perkhidmatan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/proses", label: "Proses" },
  { href: "/tentang", label: "Tentang" },
  { href: "/hubungi", label: "Hubungi" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/50 bg-surface-container-lowest/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-on-surface">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary text-sm">S</span>
          SHIS Digital
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Utama">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-on-surface-variant hover:text-on-surface">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.waLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary hover:bg-[#005322] transition"
          >
            <span className="hidden sm:inline">WhatsApp</span>
            <span aria-hidden>↗</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Buka menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-drawer" role="dialog" aria-modal="true" className="border-t bg-surface-container-lowest lg:hidden">
          <nav className="flex flex-col p-4">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-surface-container">
                {n.label}
              </Link>
            ))}
            <a href={siteConfig.waLink} target="_blank" rel="noopener" className="mt-3 inline-flex justify-center rounded-lg bg-primary-container px-4 py-3 font-semibold text-[#005523]">Chat dengan Expert • Online</a>
          </nav>
        </div>
      )}
    </header>
  );
}
