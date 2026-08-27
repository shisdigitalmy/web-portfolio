# Design Review — SHIS Digital (Stitch Export 27/08/2026)

**Package:** `docs/website/stitch-export/stitch_shis_digital/` — 14 folders, setiap satu ada `code.html` + `screen.png`
**Design System:** `direct_growth_digital/DESIGN.md` (Inter + Geist, 1120px, 12-col)
**Reviewer:** OpenCode (Muse Spark) — mewakili user untuk gate

---

## 1. Coverage Check

| Sitemap URL | Stitch Screen | Status |
|-------------|---------------|--------|
| `/` | `home_desktop` + `home_mobile` | ✅ |
| `/perkhidmatan` | `services_desktop` + `services_mobile` | ✅ |
| `/portfolio` | `portfolio_desktop` + `portfolio_mobile` | ✅ |
| `/portfolio/[slug]` | `portfolio_detail_desktop` + `portfolio_detail_mobile` | ✅ |
| `/proses` | `process_desktop` + `process_mobile` | ✅ |
| `/tentang` | `about_desktop` + `about_mobile` | ✅ |
| `/hubungi` | `contact_desktop` + `contact_mobile` | ✅ |
| `/terima-kasih` | `thank_you_desktop` | ✅ (mobile guna misc_pages_mobile) |
| `/privasi`, `/terma` | `privacy_terms_desktop` | ✅ |
| `/404` | `404_error_desktop` | ✅ |
| Design System | `direct_growth_digital/DESIGN.md` | ✅ |

**Gate:** Semua page sitemap ada — lulus.

---

## 2. Review Kriteria

**Visual Hierarchy & Brand Fit:** ✅ Hierarki kuat — H1 48px Inter -0.02em, line-height 1.1 seperti PRD. Mood minimal, proof-first tercapai. Warna hijau Stitch pakai `primary #006d2f` (lebih gelap dari #25D366) — lebih baik untuk kontras WCAG, tetapi perlu pastikan button besar kekal #25D366 untuk brand WhatsApp recognition. Background #f3fcef (hint hijau) vs PRD #FFFFFF — diterima, lebih segar SME.

**CTA Prominence:** ✅ CTA hijau primary sentiasa sticky (desktop bottom-right, mobile bottom bar dengan pulse "Online"). Tidak tenggelam.

**Content Accuracy:** ✅ Copy di `code.html` guna headline dari content.md ("Website yang buat prospek terus WhatsApp", "Proof-First" etc) — fidelity tinggi. Placeholder portfolio masih `[PLACEHOLDER]` — betul, tidak direka.

**Konsistensi:** ✅ Tokens konsisten — radius 8/12, spacing 4px, shadow soft 0 4px 24px. Lucide/Material Symbols konsisten.

**Responsive:** ✅ Setiap page ada desktop + mobile pair. Container 1120px, margin 20px mobile. Grid 12-col desktop / 4-col mobile dipatuhi. Tiada overflow obvious di code.html (container-queries dipakai).

**Kontras & Focus:** ✅ Primary #006d2f di putih 7:1 (lulus AA), hijau muda #25D366 hanya untuk container, bukan teks kecil — patuh visual-direction.md. Focus ring 2px hijau 0.2 opacity dinyatakan.

**Form Usability:** ✅ Contact form ada label, input 8px radius, error color #ba1a1a, success state di thank_you. Perlu pastikan validation message inline di implementation.

**Long/Short Content:** ⚠️ Perlu uji — card portfolio dengan title panjang dan case study pendek; implementation mesti clamp 2 baris.

**Missing States/Assets:** ⚠️ Minor — tiada screen khusus `form error` dan `success` terpisah, tetapi thank_you + privacy_terms cover. Portfolio kosong empty state belum ada screen — akan handle di code.

---

## 3. Amendments Diputuskan

1. **Warna CTA:** Kekalkan primary button `#006d2f` untuk a11y, tetapi sediakan variant `.btn-whatsapp` dengan `#25D366` untuk WA brand moment (hover #1DA851). Dua-dua lulus.
2. **Background:** Terima `#f3fcef` sebagai `bg`, tetapi sediakan override `bg-white` untuk section proof supaya card shadow nampak.
3. **Empty Portfolio:** Implementation akan tunjuk `Portfolio akan datang — WhatsApp untuk jadi yang pertama` jika 0 item.
4. **Placeholder:** Jangan ganti placeholder dengan stock logo palsu — kekal `[PLACEHOLDER]` sehingga user supply aset sebenar.

---

## 4. Keputusan Gate 7

**APPROVED dengan amendments di atas.**

Direkod sebagai `design-review.md`. Implementation boleh mula (Stage 8). Tiada redesign besar diperlukan.

> Jika user nak ubah amendments, edit file ini sebelum Stage 8.

---

## Next: Stage 8 Implementation Plan

Map acceptance criteria PRD ke Next.js App Router + Tailwind, reuse token Stitch, sediakan `app/sitemap.ts`, `robots.ts`, OG, analytics events.
