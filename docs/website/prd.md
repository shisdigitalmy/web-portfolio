# PRD — SHIS Digital Website

**Versi:** 1.0 (andaian-led)  
**Stack:** Next.js 14+ (App Router) + Tailwind CSS + TypeScript  
**Sumber:** business-brief.md, content.md, sitemap.md, visual-direction.md

---

## 1. Scope

**Pages (9 + dynamic):**
- `/`, `/perkhidmatan`, `/portfolio`, `/portfolio/[slug]` (3 slug awal), `/proses`, `/tentang`, `/hubungi`, `/terima-kasih`, `/privasi`, `/terma`, `/404`

**Sections per page — lihat content.md sebagai sumber copy tunggal.**

**Components:**
- Header (sticky, blur, mobile drawer), Footer, Hero, ProofBar, ServiceCard (3), ProcessStepper, PortfolioCard, TestimonialPlaceholder, ContactForm, CTAWhatsApp, Breadcrumb, 404Hero

---

## 2. Content Source

- Copy: `docs/website/content.md` — jangan ubah copy tanpa update file itu
- Portfolio data: `content/portfolio/*.md` atau array statik dalam `lib/portfolio.ts` (3 items placeholder)
- Form: Next.js Server Action atau Route Handler `/api/contact` (hantar ke email + redirect ke /terima-kasih + trigger wa.me)

---

## 3. Interaksi & States

| Komponen | States | Behavior |
|----------|--------|----------|
| Header CTA | default, hover, focus, mobile bottom sticky | Klik → `https://wa.me/60XXXXXXXX?text=Hi%20SHIS...` (placeholder no) |
| ContactForm | idle, validating, loading, success, error | Validate client + server, loading disabled, success redirect `/terima-kasih`, error inline |
| PortfolioCard | default, hover (lift 2px) | Klik → `/portfolio/[slug]` |
| Mobile Drawer | closed, open | Trap focus, ESC close, overlay click close |
| /404 | — | 2 CTA: Home + WhatsApp |

**Empty state:** Portfolio jika 0 item → `Portfolio akan datang — WhatsApp untuk jadi yang pertama`

---

## 4. Responsive & Layout

- **Breakpoints:** `sm 640`, `md 768`, `lg 1024`, `xl 1280` (Tailwind default)
- **Container:** max-w-6xl (1120px), px-4 md:px-6
- **Hero:** 1-col mobile, 2-col desktop (copy kiri, visual kanan)
- **Service grid:** 1-col mobile, 3-col desktop
- **Form:** 1-col mobile, 2-col (form kiri, info kanan) desktop
- **Nav:** Hamburger <1024, horizontal ≥1024

---

## 5. Formulir & Integrasi

**Fields:** nama*, whatsapp*, jenis_bisnes, bajet, mesej  
**Validasi:** nama ≥2 char, whatsapp regex `^60[0-9]{9,10}$` atau `0[0-9]{9,10}` (normalize ke 60), mesej optional  
**Integrasi Wajib:** wa.me link (placeholder `60123456789` — ganti sebelum launch)  
**Integrasi Andaian (toggle via env):** GA4 (`NEXT_PUBLIC_GA_ID`), Meta Pixel, Form → email (Resend/Nodemailer)
**Analytics Events:** `cta_whatsapp_click`, `form_submit_success`, `form_submit_error`, `portfolio_card_click`

---

## 6. SEO

- Title/description unik per page (dari sitemap.md)
- Canonical per page, OG image default `og-default.png` (1200x630)
- Heading: satu H1 per page, H2 untuk section
- Sitemap `app/sitemap.ts`, robots `app/robots.ts`
- Clean URLs tanpa trailing slash

---

## 7. Accessibility (WCAG 2.2 AA target)

- Landmark: header, nav, main, footer
- Heading order tanpa skip, label form dengan `htmlFor`, alt text portfolio, focus ring 2px hijau, kontras ≥4.5:1 (hijau hanya button besar), keyboard nav penuh, `prefers-reduced-motion` matikan anim

---

## 8. Performance & Kualitas

- Lighthouse target: Perf ≥90, A11y ≥95, SEO ≥95 (mobile)
- Image: `next/image`, lazy, width/height, format webp, max 200KB per hero
- Font: `next/font` Inter, subset latin, display swap
- JS: tiada carousel/library berat, hanya Tailwind + lucide-react
- Cache: static pages (ISR 1 jam untuk portfolio)

---

## 9. Privasi & Sekuriti

- Form honeypot + rate limit (5/min per IP)
- Tiada simpan data sensitif, hanya forward ke email/WhatsApp
- Privacy/Terms placeholder mesti diganti sebelum launch (blocker)

---

## 10. Deployment Asumsi

- Host: Vercel, Node 20, `npm run build` mesti pass
- Env: `NEXT_PUBLIC_WA_NUMBER`, `NEXT_PUBLIC_GA_ID` (optional)
- Branch: `main` auto-deploy

---

## 11. Acceptance Criteria (verifiable)

- [ ] Semua 11 URL render tanpa 404 kecuali slug palsu → 404
- [ ] Header CTA hijau nampak di semua viewport, klik buka wa.me dengan nombor dari env
- [ ] Form: submit kosong → error inline, submit sah → redirect /terima-kasih dalam <1s, event analytics fired
- [ ] Mobile drawer buka/tutup via klik, ESC, overlay, trap focus
- [ ] Lighthouse mobile ≥90/95/95 di `/` dan `/hubungi`
- [ ] `sitemap.xml` dan `robots.txt` accessible
- [ ] Tiada placeholder testimoni/logo/angka yang kelihatan real — semua placeholder jelas label `[PLACEHOLDER]`

---

## 12. Design-Focused PRD (untuk Stitch)

> SHIS Digital — agensi SME Malaysia, proof-first. Mood: clean, banyak putih, aksen hijau WhatsApp #25D366 + hitam #0A0A0A. Tipografi Inter, grid 12-col, radius 12, shadow soft. Pages: Home (hero + proof bar + 3 services + proses + portfolio teaser + CTA), Services (3 pakej), Portfolio grid, Process timeline 8 minggu, About, Contact (form + WhatsApp). Butang utama hijau besar, nav sticky blur. Tiada carousel, tiada stock photo generic. Mobile: bottom sticky WhatsApp.

---

## Gate Check — Stage 5

- [x] Scope, pages, components, states, integrasi, a11y, SEO, perf jelas
- [x] Acceptance criteria verifiable
- [x] Design prompt siap untuk Stage 6
