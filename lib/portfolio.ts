export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  tag: string;
  problem: string;
  solution: string;
  result: string;
  isPlaceholder: boolean;
  image: string;
  note?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "hr-screening-sme",
    title: "CONTOH: HR Screening untuk SME Retail",
    client: "CONTOH — Kedai Runcit (Klang Valley) • Bukan client sebenar",
    tag: "Landing Proof RM500",
    problem: "Owner terima 30+ resume seminggu, tapi 70% tak relevan. Interview tiada struktur, masa terbuang.",
    solution: "Landing 1-page + borang tapis + template interview berstruktur + CTA WhatsApp. Copy fokus 1 masalah: 'Dapat 5 calon layak dalam 7 hari'.",
    result: "CONTOH hasil — 12 inquiry WhatsApp dalam 14 hari (angka contoh, bukan testimoni sebenar). Ganti dengan metric sebenar bila ada client.",
    isPlaceholder: true,
    image: "/portfolio-1.jpg",
    note: "Ganti dengan projek sebenar sebelum publish sebagai portfolio real. Jangan guna logo/nama client tanpa izin.",
  },
  {
    slug: "tax-health-freelancer",
    title: "CONTOH: Tax Health Check untuk Freelancer",
    client: "CONTOH — Freelancer Kreatif • Bukan client sebenar",
    tag: "Website Convert",
    problem: "Freelancer takut LHDN, tak tahu beza relief vs pelepasan, invois bercelaru.",
    solution: "One-page proof + kalkulator kasar + slot booking 1 jam (Calendly) + follow-up WhatsApp. Offer RM200 'Health Check'.",
    result: "CONTOH hasil — 8 booking RM200 dalam 10 hari. Ganti dengan bukti sebenar.",
    isPlaceholder: true,
    image: "/portfolio-2.jpg",
    note: "Template contoh — upload screenshot borang & chat (blur nama) bila ada.",
  },
  {
    slug: "sales-script-coaching",
    title: "CONTOH: Sales Script + Coaching 30 min",
    client: "CONTOH — Agensi Kecil • Bukan client sebenar",
    tag: "Growth",
    problem: "Owner pandai tarik lead dari ads, tapi close rate <10% — tiada skrip, follow-up lambat.",
    solution: "Script 3 langkah + role-play 30 min + template follow-up WA 48 jam. Harga test RM300.",
    result: "CONTOH hasil — 5 close RM300 dalam seminggu. Ganti dengan closing rate sebenar.",
    isPlaceholder: true,
    image: "/portfolio-3.jpg",
    note: "Jangan publish angka ini sebagai real — label CONTOH jelas.",
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolio.find((p) => p.slug === slug);
}
