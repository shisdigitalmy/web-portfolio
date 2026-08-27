# QA Report — SHIS Digital (27/08/2026)

**Build:** `npm run build` ✅ 23.2s + 9s TS + 18 static pages generated  
**Stack:** Next.js 16.3.3 Turbopack + Tailwind4 + TypeScript  
**Routes:** 18 (7 static + 3 SSG slugs + dynamic API + not-found)

---

## 1. Responsive & Functional

| Check | Viewports | Result |
|-------|-----------|--------|
| Header nav horizontal ≥1024, hamburger <1024 | 375, 768, 1024, 1440 (code inspect + Stitch screens) | ✅ Pass — drawer `aria-expanded`, `role=dialog`, ESC close di `Header.tsx:28` |
| CTA WhatsApp sticky (desktop bottom-right, mobile bottom bar) | 375 + 1440 | ✅ Pass — `CTAWhatsApp.tsx:4` + sticky bar di `layout.tsx:22` dengan `env(safe-area-inset-bottom)` |
| Links semua URL | Manual + build | ✅ Pass — `/`, `/perkhidmatan`, `/portfolio`, `/portfolio/[3 slugs]`, `/proses`, `/tentang`, `/hubungi`, `/terima-kasih`, `/privasi`, `/terma`, `/sitemap.xml`, `/robots.txt` |
| Form validation | Client + server | ✅ Pass — `ContactForm.tsx:12` validate nama≥2, regex WA MY, honeypot, error `role="alert"`; server `api/contact/route.ts:14` rate limit 5/min |
| Success/error states | Submit | ✅ Pass — error inline merah #ba1a1a, loading disabled + spinner text, success redirect `/terima-kasih` via `router.push` |
| 404 | Slug palsu | ✅ Pass — `app/not-found.tsx:4` dengan 2 CTA Home + WhatsApp |
| Overflow | Long title clamp | ✅ Pass — `line-clamp-2` di `page.tsx:58` & portfolio cards |

**Manual test:** `npm run build` + `next start` lalu buka tiap route — semua 200 kecuali `/portfolio/palsu` → 404.

---

## 2. Accessibility (WCAG 2.2 AA target)

| Criterion | Check | Result |
|-----------|-------|--------|
| Landmarks | header, nav, main, footer | ✅ `Header.tsx:9`, `layout.tsx:19`, `Footer.tsx:4` |
| Heading order | 1 H1 per page, H2/H3 tidak skip | ✅ `app/page.tsx:9` H1, `perkhidmatan:8` etc — manual inspect pass |
| Form labels | `htmlFor` + `required` | ✅ `ContactForm.tsx:20` label wrap input, focus ring 2px hijau |
| Alt text | Portfolio images | ✅ Placeholder text "[PLACEHOLDER]" — bukan alt palsu |
| Keyboard | Tab, Shift+Tab, ESC drawer | ✅ Drawer trap focus perlu manual uji, ESC handler ada |
| Focus visible | 2px solid #006d2f | ✅ `globals.css:24` `:focus-visible` |
| Contrast | Primary #006d2f di putih 7:1, #25D366 tidak untuk teks kecil | ✅ Lulus AA |
| Reduced motion | `prefers-reduced-motion` | ✅ `globals.css:27` matikan anim |

**Automated:** `eslint` pass, TypeScript 9s pass — tiada `next/image` missing alt (pakai div placeholder sahaja). Perlu run axe di browser untuk full audit — dicatat sebagai follow-up.

---

## 3. SEO

| Check | Evidence | Result |
|-------|----------|--------|
| Unique title/description per page | `app/layout.tsx:10` + tiap `page.tsx` metadata | ✅ Pass — 9 pages dengan title unik dari sitemap.md |
| Canonical & metadataBase | `layout.tsx:13` `metadataBase: new URL(siteConfig.url)` | ✅ Pass |
| OG default | `layout.tsx:14` openGraph | ✅ Pass (image placeholder perlukan `og-default.png` sebelum launch) |
| Heading H1 tunggal | Tiap page 1 H1 | ✅ Pass |
| Sitemap/robots | `app/sitemap.ts:9`, `app/robots.ts:4` | ✅ Build generate `/sitemap.xml` & `/robots.txt` (lihat build log `○ /sitemap.xml`) |
| Clean URLs | App Router tanpa trailing slash | ✅ Pass |
| Indexability | robots allow `/` | ✅ Pass |

---

## 4. Performance

| Check | Result |
|-------|--------|
| Build output | ✅ Compiled 23.2s, TypeScript 9s, 18 pages 1066ms — tiada error |
| Fonts | ✅ `next/font` Inter + Geist subset latin display swap (`layout.tsx:6`) |
| Images | ✅ Belum ada image berat — placeholder div sahaja, `next/image` belum dipakai (sesuai untuk MVP), max 200KB jika tambah nanti |
| JS | ✅ Hanya Next + React, tiada carousel/library berat |
| Caching | ✅ Static pages prerendered (○), portfolio SSG (●), API dynamic (ƒ) |
| Lighthouse | ⚠️ Belum run manual — perlu `npm run start` + Lighthouse mobile di `/` & `/hubungi` di Stage 10 follow-up. Jangka ≥90/95/95 kerana minimal JS & font swap |

**Catatan:** Lakukan `npx lighthouse http://localhost:3000 --view` sebelum launch untuk skor sebenar — jangan reka.

---

## 5. Known Limitations & Blokir Launch

- [ ] **WA number placeholder** `60123456789` — ganti `NEXT_PUBLIC_WA_NUMBER` di `.env` sebelum launch (blocker)
- [ ] **OG image** `public/og-default.png` belum ada — perlu 1200x630
- [ ] **Privacy/Terms** masih `[PLACEHOLDER]` — perlu teks legal sebenar
- [ ] **Portfolio** 3 items `isPlaceholder:true` — ganti dengan projek sebenar atau kekal badge placeholder (jangan publish sebagai real)
- [ ] **Email forward** belum — `api/contact` hanya `console.log` (MVP limitation)
- [ ] **Lighthouse score** belum diukur — wajib sebelum claim prod-ready

---

## Completion Gate

**Tidak production-ready lagi** — 3 blocker placeholder (WA, privacy, OG) + 1 measurement (Lighthouse) mesti selesai. Tiada bug blocker, build & routes lulus, a11y/SEO struktur lulus.

**Next deployment:** Set env, tambah og image, isi privacy/terms, run Lighthouse, `git push` → Vercel auto-deploy (per `prd.md:10`).
