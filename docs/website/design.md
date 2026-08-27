# Design Package — SHIS Digital (Untuk Google Stitch)

**Status:** ⏳ Menunggu Stitch authentication — design-focused PRD siap untuk paste  
**Sumber PRD:** `docs/website/prd.md` §12

---

## Cara Pakai di Google Stitch

1. Buka https://stitch.withgoogle.com → Login Google → New Project
2. Paste prompt di bawah ke Stitch (Design-focused PRD)
3. Minta Stitch: "Buat design system dulu (tokens, buttons, cards), kemudian 6 screens desktop + mobile + states"
4. Export screenshots + package ke `docs/website/stitch-export/` dan update file ini

---

## Prompt untuk Stitch (copy-paste)

```
SHIS Digital — agensi SME Malaysia, proof-first. Bantu SME & solo founder bina website yang buat prospek terus WhatsApp.

MOOD: clean, banyak putih, aksen hijau WhatsApp #25D366 + hitam #0A0A0A, muted #6B7280, bg #F9FAFB. Tipografi Inter/Geist, H1 48px bold tracking -0.02, body 16px 1.6. Grid 12-col, container 1120px, spacing 4px scale, radius 12 card / 8 button, shadow soft 0 4px 24px rgba(0,0,0,0.06). Icon Lucide outline.

PAGES (11):
- Home: hero 2-col (kiri: headline "Website yang buat prospek terus WhatsApp" + sub proof-first + 2 CTA hijau/outline + microcopy "Balas dalam 24 jam", kanan: visual proof), proof bar logo grayscale, 3 service cards (Landing Proof RM500 / Website Convert / Growth), proses 3 langkah, portfolio teaser 3 cards, CTA akhir hijau
- Services: 3 pricing cards detail
- Portfolio: grid 3 cols + detail page template
- Process: timeline 8 minggu (Solo Empire framework)
- About: founder story
- Contact: form (nama, whatsapp, bisnes, bajet, mesej) + info kanan + WhatsApp sticky
- Thank-you, 404, Privacy, Terms

COMPONENTS: Header sticky blur dengan CTA hijau sentiasa nampak (mobile bottom sticky), Footer, Button primary hijau #25D366 hover #1DA851, Button secondary outline hitam, Card portfolio 16:9, Form dengan focus ring hijau, Proof bar, Breadcrumb

CONSTRAINTS: Tiada carousel auto-play, tiada stock photo mat salleh generic, max 2 warna aksen, mobile bottom sticky WhatsApp, a11y WCAG AA, prefers-reduced-motion, tap target 44px

OUTPUT: Design system (colors, typography, buttons, cards, form) dulu, kemudian semua screens desktop (1440px) + mobile (375px) + states (form error/success, drawer open, hover)
```

---

## Checklist Stitch Export (bila siap)

- [ ] Design system screen
- [ ] Home desktop + mobile
- [ ] Services desktop + mobile
- [ ] Portfolio + Portfolio detail
- [ ] Process, About, Contact
- [ ] States: form error, success, mobile drawer, button hover/focus
- [ ] Screenshots disimpan di `docs/website/stitch-export/`

---

## Fallback Jika Stitch Tak Dapat

Jika Stitch masih block selepas auth, balas "guna code-native" — aku akan generate Tailwind config + komponen terus di Next.js sebagai substitute (perlukan approval eksplisit — workflow tak benarkan silent substitute).
