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
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "hr-screening-sme",
    title: "HR Screening untuk SME — Kurangkan Salah Hire 70%",
    client: "[PLACEHOLDER] SME Retail KL",
    tag: "Landing Proof RM500",
    problem: "Owner pening resume tipu, interview tak struktur",
    solution: "Landing + template screening + WhatsApp CTA",
    result: "[PLACEHOLDER] 12 inquiry WhatsApp dalam 14 hari",
    isPlaceholder: true,
    image: "/portfolio-1.jpg",
  },
  {
    slug: "tax-health-freelancer",
    title: "Tax Health Check untuk Freelancer",
    client: "[PLACEHOLDER] Freelance Designer",
    tag: "Website Convert",
    problem: "Freelancer tak faham cukai, takut LHDN",
    solution: "One-page proof + konsultasi 1 jam",
    result: "[PLACEHOLDER] 8 booking RM200 dalam 10 hari",
    isPlaceholder: true,
    image: "/portfolio-2.jpg",
  },
  {
    slug: "sales-script-coaching",
    title: "Sales Script + Coaching untuk Closing",
    client: "[PLACEHOLDER] Agency Owner",
    tag: "Growth",
    problem: "Tahu marketing tapi tak pandai close",
    solution: "Script + 30 min coaching + follow-up WA",
    result: "[PLACEHOLDER] 5 close RM300 dalam seminggu",
    isPlaceholder: true,
    image: "/portfolio-3.jpg",
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolio.find((p) => p.slug === slug);
}
