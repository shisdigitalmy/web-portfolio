import Link from "next/link";
import { siteConfig } from "@/lib/site";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center md:px-6">
      <h1 className="text-3xl font-bold">Eh, page ni tak wujud</h1>
      <p className="mt-3 text-on-surface-variant">Mungkin URL salah.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary">Ke Home</Link>
        <a href={siteConfig.waLink} target="_blank" rel="noopener" className="rounded-lg border px-6 py-3 font-semibold">WhatsApp Kami</a>
      </div>
    </div>
  );
}
