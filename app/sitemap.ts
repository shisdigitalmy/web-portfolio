import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { portfolio } from "@/lib/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const pages = ["", "/perkhidmatan", "/portfolio", "/proses", "/tentang", "/hubungi", "/terima-kasih", "/privasi", "/terma"];
  const now = new Date();
  return [
    ...pages.map(p => ({ url: `${base}${p || "/"}`, lastModified: now } as const)),
    ...portfolio.map(p => ({ url: `${base}/portfolio/${p.slug}`, lastModified: now } as const)),
  ];
}
