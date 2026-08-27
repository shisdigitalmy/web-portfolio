# Implementation Plan — SHIS Digital

**Tarikh:** 27/08/2026  
**Stack:** Next.js 14 App Router + TypeScript + Tailwind (dari PRD)  
**Design Source:** `stitch-export/stitch_shis_digital/` + `DESIGN.md` tokens  
**Status:** Net-new build — tiada code sedia ada untuk reuse (repo kosong)

---

## 1. Repo Inspection

- Repo `web-portfolio` kosong: tiada `package.json`, tiada `app/`. Hanya `README.md`, `docs/`, `business-ideas/`
- Keputusan: Scaffold baru via `create-next-app` (TypeScript, Tailwind, ESLint, App Router, no src dir optional) — stack terkecil yang penuhi PRD
- Konvensi: Kekalkan `opencode.jsonc` & `business-ideas/` (jangan delete)

---

## 2. Setup Langkah (berurutan)

1. **Scaffold:** `npx create-next-app@latest . --typescript --tailwind --eslint --app --import-alias "@/*"` — run dalam `C:\Users\User\Documents\opencode` (dengan allow existing files)
2. **Tailwind Tokens:** Update `tailwind.config.ts` dengan warna dari `DESIGN.md` (primary #006d2f, primary-container #25d366, surface #f3fcef etc) + radius + spacing + fontFamily Inter/Geist
3. **Fonts:** `next/font` Inter + Geist, subset latin, display swap — di `app/layout.tsx`
4. **Global CSS:** `app/globals.css` dengan base layer token + focus ring 2px hijau

---

## 3. Struktur File

```
app/
  layout.tsx (header+footer+seo)
  page.tsx (Home)
  perkhidmatan/page.tsx
  portfolio/page.tsx
  portfolio/[slug]/page.tsx
  proses/page.tsx
  tentang/page.tsx
  hubungi/page.tsx
  terima-kasih/page.tsx
  privasi/page.tsx
  terma/page.tsx
  not-found.tsx (404)
  sitemap.ts
  robots.ts
  api/contact/route.ts (server action)
components/
  Header.tsx (sticky blur + mobile drawer + CTA WhatsApp)
  Footer.tsx
  Hero.tsx
  ProofBar.tsx
  ServiceCard.tsx
  PortfolioCard.tsx
  ProcessStepper.tsx
  ContactForm.tsx (client, validation + honeypot + rate-limit)
  CTAWhatsApp.tsx (floating + sticky mobile)
lib/
  portfolio.ts (3 placeholder items)
  site.ts (WA_NUMBER, GA_ID dari env)
public/
  og-default.png (placeholder 1200x630)
```

---

## 4. Mapping PRD Acceptance → Verification

| PRD Criteria | Implement | Verify |
|--------------|-----------|--------|
| 11 URL render | Buat app routes + not-found | `npm run build` pass, manual curl tiap URL 200, slug palsu 404 |
| Header CTA wa.me | `site.ts` baca `NEXT_PUBLIC_WA_NUMBER` | Klik di desktop/mobile → buka wa.me dengan nombor env |
| Form validation & redirect | ContactForm client + server, redirect /terima-kasih | Submit kosong → error inline, submit sah → redirect <1s, network tab 200 |
| Mobile drawer trap focus | Header state + useEffect ESC + focus trap | Keyboard Tab/Shift+Tab stay dalam drawer, ESC close |
| Lighthouse ≥90/95/95 | next/image, next/font, tiada lib berat | `npm run build` + Lighthouse mobile di `/` & `/hubungi` (record score, jangan reka) |
| sitemap/robots | app/sitemap.ts, robots.ts | GET /sitemap.xml & /robots.txt 200 |
| Placeholder jelas | Portfolio data ada flag `isPlaceholder` → badge [PLACEHOLDER] | Visual check — tiada logo/testimoni nampak real |

---

## 5. Komponen & State Detail

- **Header:** desktop nav horizontal ≥1024, hamburger <1024 → drawer full-screen, CTA hijau sticky. A11y: `aria-expanded`, `role=dialog`
- **ContactForm:** fields nama*, whatsapp*, jenis_bisnes, bajet, mesej + honeypot hidden. Validate regex MY. States: idle, validating, loading (disabled + spinner), success redirect, error inline merah #ba1a1a
- **PortfolioCard:** 16:9, 12px radius, shadow 0 4px 24px, tag, clamp title 2 lines
- **CTAWhatsApp:** `https://wa.me/${WA_NUMBER}?text=Hi%20SHIS...` encode, `target="_blank"`

---

## 6. QA Obligations (Stage 10)

- Responsive: 375, 768, 1024, 1440 viewports
- A11y: axe/manual — landmarks, heading order, label, alt, keyboard, focus, contrast
- SEO: title/description unik, canonical, OG, heading H1 tunggal
- Perf: Lighthouse + build output check

---

## 7. Risiko & Keputusan

- Tiada DB — form forward ke email (Resend) atau log sahaja untuk MVP — tandakan di `qa-report.md` sebagai limitation
- Env `NEXT_PUBLIC_WA_NUMBER` default `60123456789` placeholder — ganti sebelum launch (blocker dicatat)
- Jangan tambah framework lain (no Redux, no CMS) — paling simple

---

## Gate Check — Stage 8

- [x] Semua pages, components, states, integrasi, QA dipetakan
- [x] Verifikasi langkah eksplisit
- [x] Siap untuk Stage 9 Implementation

> Next: Jalankan scaffold + build atomik — commit per page, preview banding dengan `screen.png` Stitch.
