export const siteConfig = {
  name: "SHIS Digital",
  tagline: "Website yang buat prospek terus WhatsApp",
  description: "SHIS Digital bantu SME & solo founder bina website proof-first yang convert ke WhatsApp dalam 7 hari.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shisdigital.my",
  waNumber: process.env.NEXT_PUBLIC_WA_NUMBER || "60123456789",
  waMessage: "Hi SHIS Digital, saya nak tanya tentang website proof-first",
  get waLink() {
    return `https://wa.me/${this.waNumber}?text=${encodeURIComponent(this.waMessage)}`;
  },
};
