import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
export const metadata = { title: "Hubungi SHIS Digital" };
export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-4xl font-bold">Cerita masalah kau, kami bagi next step dalam 24 jam</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6"><ContactForm /></div>
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold">Atau terus WhatsApp</h3>
            <a href={siteConfig.waLink} target="_blank" rel="noopener" className="mt-2 inline-flex rounded-lg bg-primary-container px-4 py-2 font-semibold text-[#005523]">{siteConfig.waNumber}</a>
            <p className="mt-3 text-sm text-on-surface-variant">Balas dalam 24 jam • Audit percuma 15 minit</p>
          </div>
          <div className="rounded-xl border bg-surface-container p-6 text-sm text-on-surface-variant">Alamat [PLACEHOLDER] • Email [PLACEHOLDER]</div>
        </div>
      </div>
    </div>
  );
}
