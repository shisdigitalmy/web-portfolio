# Sitemap — SHIS Digital

**Base:** `https://shisdigital.my` (andaian)  
**Bahasa:** ms-MY utama, en secondary (path sama, toggle copy)  
**Stack:** Next.js App Router

---

## URL Hierarchy

```
/ (Home)
/perkhidmatan (Services)
/portfolio (Work)
/portfolio/[slug] (Case Study detail — 3 awal)
/proses (Process - Proof-First)
/tentang (About)
/hubungi (Contact)
/terima-kasih (Thank-you — selepas form)
/privasi (Privacy)
/terma (Terms)
/404 (Not Found)
```

---

## Page Table

| URL | Tujuan | Audience / Intent | Primary CTA | Cross-links Penting |
|-----|--------|-------------------|-------------|---------------------|
| `/` | Convert pelawat baru → WhatsApp | SME baru kenal brand (cold) | WhatsApp Kami | → /perkhidmatan, /portfolio, /proses |
| `/perkhidmatan` | Jelaskan offer & harga | Warm — bandingkan pakej | WhatsApp / Pilih Pakej | → /portfolio (proof), /hubungi |
| `/portfolio` | Bukti hasil | Warm — nak tengok proof | Lihat Case Study → WhatsApp | → /portfolio/[slug], /hubungi |
| `/portfolio/[slug]` | Detail 1 masalah=1 hasil | Hot — nak validasi kebolehan | WhatsApp | → /perkhidmatan, /portfolio |
| `/proses` | Bezakan proof-first | Skeptikal — tak nak rugi | WhatsApp Kami | → /hubungi |
| `/tentang` | Trust founder | Nak kenal orang belakang | WhatsApp | → /portfolio |
| `/hubungi` | Tangkap lead | Hot — sedia contact | Hantar & WhatsApp | → /terima-kasih |
| `/terima-kasih` | Confirm & next step | Post-submit | WhatsApp terus / Kembali Home | → / |
| `/privasi`, `/terma` | Legal | Semua | — | footer only |
| `/404` | Tangkap URL salah | Lost | Ke Home / WhatsApp | → / |

---

## Navigation

**Header (desktop & mobile drawer):** Utama | Perkhidmatan | Portfolio | Proses | Tentang | Hubungi + CTA `WhatsApp` (sticky kanan)  
**Footer:** Logo + tagline, nav sekunder, alamat (placeholder), social, © + Polisi Privasi | Terma  
**Breadcrumbs:** Hanya di /portfolio/[slug] → `Portfolio / [Nama Projek]`

---

## SEO Intent per Page

| URL | Title (60 char) | Description (155 char) | H1 |
|-----|-----------------|------------------------|-----|
| `/` | Agensi Website SME Malaysia — Buat Prospek WhatsApp | SHIS Digital bantu SME & solo founder bina website proof-first yang convert ke WhatsApp dalam 7 hari. | Website yang buat prospek terus WhatsApp |
| `/perkhidmatan` | Perkhidmatan Web & Growth untuk SME | 3 pakej: Landing Proof RM500, Website Convert, Growth Retainer. Mula kecil, proof dulu. | Pilih proof yang kau perlukan |
| `/portfolio` | Portfolio — Hasil Sebenar, Bukan Mockup | Case study SME sebenar: masalah, offer, hasil WhatsApp. | Bukan mockup — proof sebenar |
| `/proses` | Proses Proof-First 8 Minggu | Jangan bina dulu. Tanya pembeli dulu. Framework Solo Empire untuk SME. | Proof-First: Jangan bina dulu |
| `/tentang` | Tentang SHIS Digital | Partner proof untuk SME Malaysia. Kecil, laju, direct. | Partner proof kau |
| `/hubungi` | Hubungi SHIS Digital | Cerita masalah kau, dapat next step dalam 24 jam via WhatsApp. | Cerita masalah kau |

---

## System Pages Detail

- **/terima-kasih:** Headline `Terima kasih!`, copy `Kami balas via WhatsApp dalam 24 jam. Sementara tu lihat portfolio.`, CTA `Lihat Portfolio` + `WhatsApp Terus`
- **/404:** Headline `Eh, page ni tak wujud`, copy `Mungkin URL salah.`, CTA `Ke Home` + `WhatsApp Kami`
- **/privasi & /terma:** Placeholder — perlukan teks legal sebenar sebelum launch (gate blocker)

---

## Gate Check — Stage 3

- [x] Setiap page ada tujuan & menyokong journey (cold → warm → hot → convert)
- [x] CTA utama jelas per page
- [x] System pages termasuk
- [x] Cross-link menyokong SEO & navigasi
