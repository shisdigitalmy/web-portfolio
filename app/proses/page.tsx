import CTAWhatsApp from "@/components/CTAWhatsApp";
export const metadata = { title: "Proses Proof-First 8 Minggu" };
export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <h1 className="text-4xl font-bold">Proof-First: Jangan bina dulu</h1>
      <p className="mt-3 text-on-surface-variant">Framework Solo Empire — tanya pembeli dulu, baru bina.</p>
      <ol className="mt-8 space-y-6">
        <li className="rounded-xl border bg-white p-6"><h3 className="font-semibold">Minggu 1-2: Cari Masalah</h3><p className="text-sm text-on-surface-variant">Senarai 3-5 pengalaman, pilih 1 masalah paling jelas.</p></li>
        <li className="rounded-xl border bg-white p-6"><h3 className="font-semibold">Minggu 3: Cari Pembeli</h3><p className="text-sm text-on-surface-variant">Message 20 orang, target 10 respon, 5 jumpa, 3 bayar.</p></li>
        <li className="rounded-xl border bg-white p-6"><h3 className="font-semibold">Minggu 4: Buat Offer Pertama</h3><p className="text-sm text-on-surface-variant">1 masalah, 1 harga, 1 hasil yang jelas.</p></li>
        <li className="rounded-xl border bg-white p-6"><h3 className="font-semibold">Minggu 5-6: Launch & Test</h3><p className="text-sm text-on-surface-variant">Post di FB/LinkedIn/WA group, close & deliver.</p></li>
        <li className="rounded-xl border bg-white p-6"><h3 className="font-semibold">Minggu 7-8: Measure & Decide</h3><p className="text-sm text-on-surface-variant">Jika 3 client puas → scale, jika tidak → tukar offer.</p></li>
      </ol>
      <div className="mt-8"><CTAWhatsApp label="Jalankan Proses Ni Untuk Saya" /></div>
    </div>
  );
}
