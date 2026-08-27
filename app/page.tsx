import Link from "next/link";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import { portfolio } from "@/lib/portfolio";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-primary-container px-3 py-1 text-xs font-semibold text-[#005523]">Proof-First • Untuk SME Malaysia</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] md:text-5xl">Website yang buat prospek terus WhatsApp</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-on-surface-variant">Kami bantu SME & solo founder validate offer, bina proof, dan launch website yang convert — tanpa bazir bulan-bulan bina benda tak laku.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAWhatsApp />
              <Link href="/proses" className="inline-flex items-center justify-center rounded-lg border border-outline px-6 py-3 font-semibold hover:bg-surface-container">Lihat Cara Kami Bekerja</Link>
            </div>
            <p className="mt-3 text-xs text-on-surface-variant">Balas dalam 24 jam • Audit percuma 15 minit</p>
          </div>
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <div className="rounded-lg bg-surface-container p-4">
              <div className="h-6 w-24 rounded bg-outline-variant/40"></div>
              <div className="mt-4 h-4 w-full rounded bg-outline-variant/30"></div>
              <div className="mt-2 h-4 w-3/4 rounded bg-outline-variant/30"></div>
              <div className="mt-6 h-10 w-full rounded-lg bg-primary"></div>
              <p className="mt-3 text-center text-xs text-on-surface-variant">Preview hero — WhatsApp CTA sentiasa nampak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-y border-outline-variant bg-surface-container-lowest">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
          <p className="text-center text-xs font-semibold tracking-wide text-on-surface-variant">Dipercayai SME yang nak proof, bukan janji</p>
          <div className="mt-4 grid grid-cols-2 gap-4 opacity-60 md:grid-cols-4">
            {[1,2,3,4].map(i=> <div key={i} className="flex h-10 items-center justify-center rounded bg-surface-container text-xs font-medium">[PLACEHOLDER Logo]</div>)}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h2 className="text-2xl font-bold md:text-3xl">Mula kecil, proof dulu, baru scale</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {title:"Landing Proof", price:"RM500", desc:"Validate 1 offer, 1 page, test dengan 20 prospek"},
            {title:"Website Convert", price:"RM2,500+", desc:"Full site Next.js laju + WhatsApp-first"},
            {title:"Growth System", price:"RM1,500/bulan", desc:"SEO asas + tracking + iterasi offer"},
          ].map(s=>(
            <div key={s.title} className="rounded-xl border border-outline-variant bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="text-sm font-semibold text-primary">{s.price}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-on-surface-variant">{s.desc}</p>
              <Link href="/perkhidmatan" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">Lihat detail →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="bg-surface-container-low py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Bukan mockup — proof sebenar</h2>
            <Link href="/portfolio" className="text-sm font-semibold text-primary">Lihat semua →</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {portfolio.map(p=>(
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group rounded-xl border border-outline-variant bg-white p-4 hover:shadow-md transition">
                <div className="flex h-32 items-center justify-center rounded-lg bg-surface-container text-xs text-on-surface-variant">16:9 Image [PLACEHOLDER]</div>
                <div className="mt-3 inline-flex rounded-full bg-primary-container px-2 py-1 text-xs font-semibold text-[#005523]">{p.tag}</div>
                <h3 className="mt-2 line-clamp-2 font-semibold group-hover:text-primary">{p.title}</h3>
                <p className="mt-1 text-xs text-on-surface-variant">{p.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA akhir */}
      <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6 md:py-16">
        <h2 className="text-3xl font-bold">Nak test offer kau laku ke tak dalam 7 hari?</h2>
        <div className="mt-6"><CTAWhatsApp label="WhatsApp Kami Sekarang" /></div>
      </section>
    </div>
  );
}
