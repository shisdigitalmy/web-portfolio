import { siteConfig } from "@/lib/site";

export default function CTAWhatsApp({ label = "WhatsApp Kami" }: { label?: string }) {
  return (
    <a href={siteConfig.waLink} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary hover:bg-[#005322] transition">
      {label} <span aria-hidden>↗</span>
    </a>
  );
}
