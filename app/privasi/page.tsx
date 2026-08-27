export const metadata = { title: "Polisi Privasi | SHIS Digital" };
export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold">Polisi Privasi</h1>
      <p className="mt-2 text-sm text-on-surface-variant">Kemaskini: 27 Ogos 2026 — SHIS Digital (shisdigital.my)</p>
      <div className="prose prose-sm mt-8 max-w-none text-on-surface-variant">
        <p className="rounded bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-900">Template awal — bukan nasihat guaman. Sila dapatkan semakan peguam sebelum guna untuk transaksi sebenar.</p>
        <h2 className="mt-6 font-semibold text-on-surface">1. Data yang kami kumpul</h2>
        <p>Hanya melalui borang Hubungi & WhatsApp: nama, nombor WhatsApp, jenis bisnes, bajet, mesej. Kami tidak kumpul data pembayaran di website ini.</p>
        <h2 className="mt-4 font-semibold text-on-surface">2. Tujuan</h2>
        <p>Untuk balas inquiry, bagi cadangan next step dalam 24 jam, dan hantar audit percuma jika diminta. Tidak untuk spam.</p>
        <h2 className="mt-4 font-semibold text-on-surface">3. WhatsApp & Pihak Ketiga</h2>
        <p>Klik WhatsApp akan buka wa.me (Meta). Mesej tertakluk polisi WhatsApp. Analytics (jika aktif GA4/Meta Pixel) hanya untuk ukur `cta_whatsapp_click` & `form_submit` — tiada jualan data.</p>
        <h2 className="mt-4 font-semibold text-on-surface">4. Cookies</h2>
        <p>Hanya cookies perlu untuk Next.js + analytics (jika diaktifkan). Tiada tracking rentas laman.</p>
        <h2 className="mt-4 font-semibold text-on-surface">5. Simpanan & Hak</h2>
        <p>Data disimpan sehingga inquiry selesai + 12 bulan untuk rekod. Kau boleh minta padam/betul via WhatsApp di nombor tertera.</p>
        <h2 className="mt-4 font-semibold text-on-surface">6. Hubungi</h2>
        <p>Soalan privasi: WhatsApp nombor di laman Hubungi. Kami balas dalam 24 jam.</p>
      </div>
    </div>
  );
}
