import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-display font-bold">SHIS Digital</div>
            <p className="mt-2 text-sm text-on-surface-variant">Website yang buat prospek terus WhatsApp. Proof-first untuk SME Malaysia.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Navigasi</div>
            <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
              <li><Link href="/perkhidmatan" className="hover:text-on-surface">Perkhidmatan</Link></li>
              <li><Link href="/portfolio" className="hover:text-on-surface">Portfolio</Link></li>
              <li><Link href="/proses" className="hover:text-on-surface">Proses</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Hubungi</div>
            <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
              <li><a href={siteConfig.waLink} target="_blank" rel="noopener" className="hover:text-on-surface">WhatsApp Kami</a></li>
              <li><Link href="/hubungi" className="hover:text-on-surface">Form Hubungi</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
              <li><Link href="/privasi" className="hover:text-on-surface">Polisi Privasi</Link></li>
              <li><Link href="/terma" className="hover:text-on-surface">Terma</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-outline-variant pt-6 text-center text-xs text-on-surface-variant">© 2026 SHIS Digital. Semua hak terpelihara.</div>
      </div>
    </footer>
  );
}
