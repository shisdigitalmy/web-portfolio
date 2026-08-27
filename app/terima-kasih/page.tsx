import Link from "next/link";
import { siteConfig } from "@/lib/site";
export const metadata = { title: "Terima Kasih" };
export default function Page() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center md:px-6">
      <h1 className="text-3xl font-bold">Terima kasih!</h1>
      <p className="mt-3 text-on-surface-variant">Kami balas via WhatsApp dalam 24 jam. Sementara tu lihat portfolio.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/portfolio" className="rounded-lg border px-6 py-3 font-semibold">Lihat Portfolio</Link>
        <a href={siteConfig.waLink} target="_blank" rel="noopener" className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary">WhatsApp Terus</a>
      </div>
    </div>
  );
}
