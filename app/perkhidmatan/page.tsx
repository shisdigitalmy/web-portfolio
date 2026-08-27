import type { Metadata } from "next";
import CTAWhatsApp from "@/components/CTAWhatsApp";

export const metadata: Metadata = { title: "Perkhidmatan Web & Growth untuk SME", description: "3 pakej: Landing Proof RM500, Website Convert, Growth Retainer. Mula kecil, proof dulu." };

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-4xl font-bold">Pilih proof yang kau perlukan sekarang</h1>
      <p className="mt-3 max-w-2xl text-on-surface-variant">Harga bermula dari — semua pakej proof-first, bukan terus bina besar.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { name:"Starter Proof", price:"RM500", items:["1 landing page","Copy + WhatsApp CTA","Test script 20 prospek","Siap 7 hari"], cta:"Pilih Proof" },
          { name:"Website Convert", price:"RM2,500 – RM4,500", items:["5-6 pages","CMS ringan","SEO + Analytics","14-21 hari"], featured:true, cta:"Pilih Website" },
          { name:"Growth Retainer", price:"RM1,500/bulan", items:["Iterasi offer","Content + tracking","Monthly report"], cta:"Pilih Growth" },
        ].map(p=>(
          <div key={p.name} className={`rounded-xl border p-6 ${p.featured ? "border-primary bg-white shadow-lg" : "border-outline-variant bg-white"}`}>
            <h2 className="font-semibold">{p.name}</h2>
            <div className="mt-2 text-2xl font-bold">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-on-surface-variant">
              {p.items.map(i=> <li key={i}>• {i}</li>)}
            </ul>
            <div className="mt-6"><CTAWhatsApp label={p.cta} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
