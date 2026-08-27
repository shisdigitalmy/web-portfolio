import { portfolio, getPortfolioBySlug } from "@/lib/portfolio";
import Link from "next/link";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import { notFound } from "next/navigation";

export function generateStaticParams() { return portfolio.map(p=>({slug:p.slug})); }

export function generateMetadata({params}:{params:{slug:string}}) {
  const item = getPortfolioBySlug(params.slug);
  return { title: item?.title || "Portfolio" };
}

export default function Page({params}:{params:{slug:string}}) {
  const item = getPortfolioBySlug(params.slug);
  if (!item) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Link href="/portfolio" className="text-sm text-primary hover:underline">← Portfolio</Link>
      <div className="mt-4 inline-flex rounded-full bg-primary-container px-3 py-1 text-xs font-semibold text-[#005523]">{item.tag} {item.isPlaceholder && "• [PLACEHOLDER]"}</div>
      <h1 className="mt-3 text-3xl font-bold">{item.title}</h1>
      <p className="mt-2 text-sm text-on-surface-variant">{item.client}</p>
      <div className="mt-6 rounded-lg bg-surface-container p-6">
        <p className="text-sm font-semibold">Masalah</p><p className="text-sm text-on-surface-variant">{item.problem}</p>
        <p className="mt-4 text-sm font-semibold">Offer</p><p className="text-sm text-on-surface-variant">{item.solution}</p>
        <p className="mt-4 text-sm font-semibold">Hasil</p><p className="text-sm text-on-surface-variant">{item.result}</p>
      </div>
      <div className="mt-8 flex gap-3"><CTAWhatsApp /><Link href="/perkhidmatan" className="rounded-lg border px-6 py-3 font-semibold">Lihat Pakej</Link></div>
    </div>
  );
}
