import Link from "next/link";
import { portfolio } from "@/lib/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Portfolio — Hasil Sebenar, Bukan Mockup", description: "Case study SME sebenar: masalah, offer, hasil WhatsApp." };

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-4xl font-bold">Bukan mockup — proof sebenar</h1>
      <p className="mt-3 text-on-surface-variant">Masalah → Offer → Hasil. Semua placeholder ditanda jelas.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {portfolio.map(p=>(
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="rounded-xl border border-outline-variant bg-white p-4 hover:shadow transition">
            <div className="flex h-36 items-center justify-center rounded-lg bg-surface-container text-xs">Image [PLACEHOLDER]</div>
            <span className="mt-3 inline-flex rounded-full bg-primary-container px-2 py-1 text-xs font-semibold text-[#005523]">{p.tag}</span>
            <h2 className="mt-2 font-semibold line-clamp-2">{p.title}</h2>
            <p className="mt-1 text-sm text-on-surface-variant">{p.result}</p>
          </Link>
        ))}
      </div>
      {portfolio.length===0 && <p className="mt-8 rounded bg-white p-6 text-center">Portfolio akan datang — WhatsApp untuk jadi yang pertama</p>}
    </div>
  );
}
