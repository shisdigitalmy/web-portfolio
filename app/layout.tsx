import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: { default: "SHIS Digital — Website yang buat prospek terus WhatsApp", template: "%s | SHIS Digital" },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: { title: siteConfig.name, description: siteConfig.description, url: siteConfig.url, type: "website", images: [{ url: "/og-default.png", width: 1200, height: 630, alt: siteConfig.name }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={`${inter.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Mobile sticky WhatsApp */}
        <a href={siteConfig.waLink} target="_blank" rel="noopener" className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-primary-container px-4 py-3 font-semibold text-[#005523] lg:hidden" style={{paddingBottom: "calc(12px + env(safe-area-inset-bottom))"}}>
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary"></span> Chat dengan Expert • Online
        </a>
      </body>
    </html>
  );
}
