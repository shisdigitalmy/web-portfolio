"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    if ((fd.get("honey") as string)) return; // bot
    const nama = (fd.get("nama") as string)?.trim();
    const wa = (fd.get("whatsapp") as string)?.trim();
    if (!nama || nama.length < 2) { setErr("Nama mesti sekurang-kurangnya 2 aksara."); return; }
    const clean = wa.replace(/\s/g,"");
    if (!/^0?[0-9]{9,11}$/.test(clean) && !/^60[0-9]{9,10}$/.test(clean)) { setErr("Sila isi No. WhatsApp yang sah (cth: 0123456789)."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify({ nama, whatsapp: wa, jenis: fd.get("jenis"), bajet: fd.get("bajet"), mesej: fd.get("mesej") }), headers: { "Content-Type":"application/json" }});
      if (!res.ok) throw new Error();
      router.push("/terima-kasih");
    } catch {
      setErr("Gagal menghantar. Cuba WhatsApp terus.");
    } finally { setLoading(false); }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">Nama penuh *
          <input name="nama" required className="mt-1 w-full rounded-lg border border-outline-variant bg-white px-3 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Ali bin Ahmad" />
        </label>
        <label className="block text-sm">No. WhatsApp *
          <input name="whatsapp" required className="mt-1 w-full rounded-lg border border-outline-variant bg-white px-3 py-2.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="0123456789" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">Jenis Bisnes
          <input name="jenis" className="mt-1 w-full rounded-lg border border-outline-variant bg-white px-3 py-2.5 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="SME Retail / Freelancer" />
        </label>
        <label className="block text-sm">Bajet
          <select name="bajet" className="mt-1 w-full rounded-lg border border-outline-variant bg-white px-3 py-2.5">
            <option value="">&lt;RM1k</option>
            <option>RM1k - RM5k</option>
            <option>&gt;RM5k</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">Mesej
        <textarea name="mesej" rows={4} className="mt-1 w-full rounded-lg border border-outline-variant bg-white px-3 py-2.5 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Cerita masalah utama kau..." />
      </label>
      {/* honeypot */}
      <input name="honey" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
      {err && <p role="alert" className="rounded bg-error-container px-3 py-2 text-sm text-[#93000a]">{err}</p>}
      <button disabled={loading} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary disabled:opacity-60 hover:bg-[#005322] transition">
        {loading ? "Menghantar..." : "Hantar & WhatsApp"}
      </button>
      <p className="text-center text-xs text-on-surface-variant">Dengan menghantar, kau setuju kami hubungi via WhatsApp. Lihat <a href="/privasi" className="underline">Polisi Privasi</a>.</p>
    </form>
  );
}
