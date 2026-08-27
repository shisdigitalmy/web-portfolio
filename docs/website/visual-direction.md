# Visual Direction — SHIS Digital

**Mood:** Proof-first, direct, SME-friendly — bukan korporat bank, bukan hype dropship. Clean, confident, WhatsApp-native.

---

## 1. Referensi Prinsip (tanpa clone)

| Referensi (arah) | Apa dipinjam (prinsip) | Apa dielak |
|------------------|------------------------|------------|
| Linear / Stripe (density) | Grid ketat, whitespace besar, hierarki tipografi kuat | Jangan tiru warna ungu/gradient mereka |
| Local SME agency MY (relevan) | Bahasa Melayu santai, CTA WhatsApp hijau dominan | Elak clutter, stock photo generic |
| Vercel / Next.js docs | Minimal, laju, dokumentasi rapi | Jangan terlalu teknikal/cold |

---

## 2. Mood & Density

- **Mood:** Tenang + yakin — banyak putih, aksen hijau WhatsApp + hitam pekat
- **Density:** Medium-low — satu section satu mesej, banyak breathing room (sesuai untuk audience SME yang scan cepat)
- **Imagery:** Foto SME sebenar (kedai, founder) + screenshot proof (WhatsApp chat blur nama) — bukan ilustrasi 3D berat

---

## 3. Design Tokens (awal)

**Warna:**
- `primary`: #0A0A0A (hitam pekat — headline, nav)
- `accent`: #25D366 (hijau WhatsApp — CTA utama sahaja)
- `accent-hover`: #1DA851
- `muted`: #6B7280 (body secondary)
- `bg`: #FFFFFF, `bg-muted`: #F9FAFB, `border`: #E5E7EB
- Jangan guna lebih 2 aksen — elak pelangi

**Tipografi:**
- Heading: `Inter` / `Geist Sans` — 600-700, tracking -0.02em, line-height 1.1
- Body: `Inter` 400, line-height 1.6, max-width 65ch
- Melayu: pastikan font sokong diacritics
- Scale: 14px base, H1 40-48px desktop / 32px mobile, H2 28px

**Spacing & Grid:**
- 4px scale (4,8,12,16,24,32,48,64)
- Container max 1120px, padding 16 mobile / 24 desktop
- Grid 12 col, gap 24
- Section padding 64-96px

**Radius & Shadow:**
- Radius: 12px card, 8px button, 999px pill
- Shadow: soft `0 4px 24px rgba(0,0,0,0.06)` — bukan hard shadow

**Iconography:** Lucide (stroke 1.8), outline sahaja — konsisten, ringan

**Motion:** 150-200ms ease-out, hanya untuk hover/fade. Hormat `prefers-reduced-motion`.

---

## 4. Component Patterns

- **Button Primary:** Hijau WhatsApp, teks putih, icon arrow, hover gelap sedikit
- **Button Secondary:** Outline hitam, bg putih
- **Card Portfolio:** Gambar 16:9, overlay gradient bawah, tag `RM500 Proof` / `Website`
- **Proof Bar:** Logo grayscale, opacity 60%, hover 100%
- **Form:** Input border 1px, focus ring hijau 2px, error merah #DC2626
- **Nav:** Sticky, blur bg, CTA hijau sentiasa nampak (mobile: bottom sticky)

---

## 5. Anti-patterns

- Jangan guna carousel auto-play
- Jangan guna stock photo mat salleh korporat
- Jangan guna lebih 3 font weight
- Jangan letak 4 CTA berbeza dalam satu viewport
- Jangan reka testimoni — placeholder mesti nampak placeholder

---

## 6. Aksesibiliti Constraint

- Kontras: Hitam #0A0A0A di putih 19:1, hijau #25D366 di putih 2.8:1 → **hijau hanya untuk button besar dengan teks putih 16px+ bold (3:1 lulus)**, bukan untuk teks kecil
- Focus ring 2px visible pada semua interactive
- Tap target min 44px
- Alt text wajib untuk semua portfolio image

---

## Gate Check — Stage 4

- [x] Mood & density spesifik, bezakan dari template generik
- [x] Token & pattern boleh terus jadi Tailwind config
- [x] Anti-pattern & a11y jelas
